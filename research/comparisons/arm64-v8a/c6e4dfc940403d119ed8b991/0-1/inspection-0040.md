# v16.0.1 → v16.0.2 · 要調査の変更候補 (40)

[一覧の目次](README.md)

<a id="compare-80c3ec523fe66605560228a0e83e1fa2"></a>

### [`00bc48d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc48d8.md) → [`00bc4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4974.md) _ZN8firebase8internal18ReferenceCountLockINS0_14ReferenceCountEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d930.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5da00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da00.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc48f8 ["INT_ADD", "register:40f0:8", ["const:bc48f8:8", "const:4:8"]]
- 00bc48f8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc4994 ["INT_ADD", "register:40f0:8", ["const:bc4994:8", "const:4:8"]]
+ 00bc4994 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc4910 ["INT_ADD", "register:40f0:8", ["const:bc4910:8", "const:4:8"]]
- 00bc4910 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc49ac ["INT_ADD", "register:40f0:8", ["const:bc49ac:8", "const:4:8"]]
+ 00bc49ac ["CALL", null, ["callee:00c5aae0:8"]]
- 00bc4918 ["INT_ADD", "register:40f0:8", ["const:bc4918:8", "const:4:8"]]
- 00bc4918 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc49b4 ["INT_ADD", "register:40f0:8", ["const:bc49b4:8", "const:4:8"]]
+ 00bc49b4 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-1680f1009e5a0572dee6d71f8e049041"></a>

### [`00bc5120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5120.md) → [`00bc51bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc51bc.md) _ZN8firebase13remote_config8internal18BoolResultCallbackEP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bc5a00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5a00.md) [`00bc5d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5d2c.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5b2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b2e0.md)
- 新版 呼出元 2件 [`00bc5a9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5a9c.md) [`00bc5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5dc8.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5b3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5160 ["INT_ADD", "register:40f0:8", ["const:bc5160:8", "const:4:8"]]
- 00bc5160 ["CALL", null, ["callee:00c5b3b0:8"]]
+ 00bc51fc ["INT_ADD", "register:40f0:8", ["const:bc51fc:8", "const:4:8"]]
+ 00bc51fc ["CALL", null, ["callee:00c5b3b0:8"]]
- 00bc5180 ["INT_ADD", "register:40f0:8", ["const:bc5180:8", "const:4:8"]]
- 00bc5180 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bc521c ["INT_ADD", "register:40f0:8", ["const:bc521c:8", "const:4:8"]]
+ 00bc521c ["CALL", null, ["callee:00c5aed0:8"]]
- 00bc519c ["INT_ADD", "register:40f0:8", ["const:bc519c:8", "const:4:8"]]
- 00bc519c ["CALL", null, ["callee:00c5d9b0:8"]]
+ 00bc5238 ["INT_ADD", "register:40f0:8", ["const:bc5238:8", "const:4:8"]]
+ 00bc5238 ["CALL", null, ["callee:00c5d9b0:8"]]
~~~


<a id="compare-c4cd4dbe85a6020f44bbd2d14716bdb7"></a>

### [`00bc5250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5250.md) → [`00bc52ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc52ec.md) _ZN8firebase13remote_config8internal20CompleteVoidCallbackEP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bc72e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc72e8.md) [`00bc773c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc773c.md) [`00c5d8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d8c0.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ada0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ada0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 3件 [`00bc7384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7384.md) [`00bc77d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc77d8.md) [`00c5d990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d990.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ae70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae70.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc528c ["INT_ADD", "register:40f0:8", ["const:bc528c:8", "const:4:8"]]
- 00bc528c ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bc5328 ["INT_ADD", "register:40f0:8", ["const:bc5328:8", "const:4:8"]]
+ 00bc5328 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bc52a8 ["INT_ADD", "register:40f0:8", ["const:bc52a8:8", "const:4:8"]]
- 00bc52a8 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bc5344 ["INT_ADD", "register:40f0:8", ["const:bc5344:8", "const:4:8"]]
+ 00bc5344 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bc52b0 ["INT_ADD", "register:40f0:8", ["const:bc52b0:8", "const:4:8"]]
- 00bc52b0 ["CALL", null, ["callee:00c5ab60:8"]]
+ 00bc534c ["INT_ADD", "register:40f0:8", ["const:bc534c:8", "const:4:8"]]
+ 00bc534c ["CALL", null, ["callee:00c5ab60:8"]]
~~~


<a id="compare-80f0467b0c466aeb2b40f7f1d786784d"></a>

### [`00bc55b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc55b0.md) → [`00bc564c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc564c.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEEC2ERKS8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d980.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5da50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da50.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5600 ["INT_ADD", "register:40f0:8", ["const:bc5600:8", "const:4:8"]]
- 00bc5600 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bc569c ["INT_ADD", "register:40f0:8", ["const:bc569c:8", "const:4:8"]]
+ 00bc569c ["CALL", null, ["callee:00c57f60:8"]]
- 00bc562c ["INT_ADD", "register:40f0:8", ["const:bc562c:8", "const:4:8"]]
- 00bc562c ["CALL", null, ["callee:00c5b680:8"]]
+ 00bc56c8 ["INT_ADD", "register:40f0:8", ["const:bc56c8:8", "const:4:8"]]
+ 00bc56c8 ["CALL", null, ["callee:00c5b680:8"]]
- 00bc5658 ["INT_ADD", "register:40f0:8", ["const:bc5658:8", "const:4:8"]]
- 00bc5658 ["CALL", null, ["callee:00c5ade0:8"]]
+ 00bc56f4 ["INT_ADD", "register:40f0:8", ["const:bc56f4:8", "const:4:8"]]
+ 00bc56f4 ["CALL", null, ["callee:00c5ade0:8"]]
~~~


<a id="compare-09825731c8d94399981649f85bbcb4a2"></a>

### [`00bc5970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5970.md) → [`00bc5a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5a0c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal27EnsureInitializedLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d7c0.md) · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 1件 [`00c5d890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d890.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5990 ["INT_ADD", "register:40f0:8", ["const:bc5990:8", "const:4:8"]]
- 00bc5990 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc5a2c ["INT_ADD", "register:40f0:8", ["const:bc5a2c:8", "const:4:8"]]
+ 00bc5a2c ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc599c ["INT_ADD", "register:40f0:8", ["const:bc599c:8", "const:4:8"]]
- 00bc599c ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc5a38 ["INT_ADD", "register:40f0:8", ["const:bc5a38:8", "const:4:8"]]
+ 00bc5a38 ["CALL", null, ["callee:00c5aae0:8"]]
- 00bc59a8 ["INT_ADD", "register:40f0:8", ["const:bc59a8:8", "const:4:8"]]
- 00bc59a8 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc5a44 ["INT_ADD", "register:40f0:8", ["const:bc5a44:8", "const:4:8"]]
+ 00bc5a44 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-36f63b71a235096d8051f6456be9842e"></a>

### [`00bc5c9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5c9c.md) → [`00bc5d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5d38.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal18ActivateLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d770.md) · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 1件 [`00c5d840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d840.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5cbc ["INT_ADD", "register:40f0:8", ["const:bc5cbc:8", "const:4:8"]]
- 00bc5cbc ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc5d58 ["INT_ADD", "register:40f0:8", ["const:bc5d58:8", "const:4:8"]]
+ 00bc5d58 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc5cc8 ["INT_ADD", "register:40f0:8", ["const:bc5cc8:8", "const:4:8"]]
- 00bc5cc8 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc5d64 ["INT_ADD", "register:40f0:8", ["const:bc5d64:8", "const:4:8"]]
+ 00bc5d64 ["CALL", null, ["callee:00c5aae0:8"]]
- 00bc5cd4 ["INT_ADD", "register:40f0:8", ["const:bc5cd4:8", "const:4:8"]]
- 00bc5cd4 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc5d70 ["INT_ADD", "register:40f0:8", ["const:bc5d70:8", "const:4:8"]]
+ 00bc5d70 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-ebf335ff3d139b7a16bd57417b2d1c07"></a>

### [`00bc5fc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5fc8.md) → [`00bc6064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc6064.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal26FetchAndActivateLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d7a0.md) · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 1件 [`00c5d870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d870.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5fe8 ["INT_ADD", "register:40f0:8", ["const:bc5fe8:8", "const:4:8"]]
- 00bc5fe8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc6084 ["INT_ADD", "register:40f0:8", ["const:bc6084:8", "const:4:8"]]
+ 00bc6084 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc5ff4 ["INT_ADD", "register:40f0:8", ["const:bc5ff4:8", "const:4:8"]]
- 00bc5ff4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc6090 ["INT_ADD", "register:40f0:8", ["const:bc6090:8", "const:4:8"]]
+ 00bc6090 ["CALL", null, ["callee:00c5aae0:8"]]
- 00bc6000 ["INT_ADD", "register:40f0:8", ["const:bc6000:8", "const:4:8"]]
- 00bc6000 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc609c ["INT_ADD", "register:40f0:8", ["const:bc609c:8", "const:4:8"]]
+ 00bc609c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-f45a2206357ea7165f1127d4163b011d"></a>

### [`00bc62f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc6/00bc62f0.md) → [`00bc638c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc638c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal15FetchLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d700.md) · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 1件 [`00c5d7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7d0.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc6310 ["INT_ADD", "register:40f0:8", ["const:bc6310:8", "const:4:8"]]
- 00bc6310 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc63ac ["INT_ADD", "register:40f0:8", ["const:bc63ac:8", "const:4:8"]]
+ 00bc63ac ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc631c ["INT_ADD", "register:40f0:8", ["const:bc631c:8", "const:4:8"]]
- 00bc631c ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc63b8 ["INT_ADD", "register:40f0:8", ["const:bc63b8:8", "const:4:8"]]
+ 00bc63b8 ["CALL", null, ["callee:00c5aae0:8"]]
- 00bc6328 ["INT_ADD", "register:40f0:8", ["const:bc6328:8", "const:4:8"]]
- 00bc6328 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc63c4 ["INT_ADD", "register:40f0:8", ["const:bc63c4:8", "const:4:8"]]
+ 00bc63c4 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-f6755950fef3d5f0fb0b86df2b760e0c"></a>

### [`00bc7258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc7258.md) → [`00bc72f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc72f4.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal21SetDefaultsLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d780.md) · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 1件 [`00c5d850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d850.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc7278 ["INT_ADD", "register:40f0:8", ["const:bc7278:8", "const:4:8"]]
- 00bc7278 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc7314 ["INT_ADD", "register:40f0:8", ["const:bc7314:8", "const:4:8"]]
+ 00bc7314 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc7284 ["INT_ADD", "register:40f0:8", ["const:bc7284:8", "const:4:8"]]
- 00bc7284 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc7320 ["INT_ADD", "register:40f0:8", ["const:bc7320:8", "const:4:8"]]
+ 00bc7320 ["CALL", null, ["callee:00c5aae0:8"]]
- 00bc7290 ["INT_ADD", "register:40f0:8", ["const:bc7290:8", "const:4:8"]]
- 00bc7290 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc732c ["INT_ADD", "register:40f0:8", ["const:bc732c:8", "const:4:8"]]
+ 00bc732c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-8cb9f742c0e5496ef57712909cfe1c49"></a>

### [`00bc76ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc76ac.md) → [`00bc7748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7748.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal27SetConfigSettingsLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d7d0.md) · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 1件 [`00c5d8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8a0.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc76cc ["INT_ADD", "register:40f0:8", ["const:bc76cc:8", "const:4:8"]]
- 00bc76cc ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc7768 ["INT_ADD", "register:40f0:8", ["const:bc7768:8", "const:4:8"]]
+ 00bc7768 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc76d8 ["INT_ADD", "register:40f0:8", ["const:bc76d8:8", "const:4:8"]]
- 00bc76d8 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc7774 ["INT_ADD", "register:40f0:8", ["const:bc7774:8", "const:4:8"]]
+ 00bc7774 ["CALL", null, ["callee:00c5aae0:8"]]
- 00bc76e4 ["INT_ADD", "register:40f0:8", ["const:bc76e4:8", "const:4:8"]]
- 00bc76e4 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc7780 ["INT_ADD", "register:40f0:8", ["const:bc7780:8", "const:4:8"]]
+ 00bc7780 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-0e2e58435da53fbd2a38364305ea8063"></a>

### [`00bc7df4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc7df4.md) → [`00bc7e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7e90.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal26SetCustomSignalsLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d7b0.md) · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 1件 [`00c5d880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d880.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc7e14 ["INT_ADD", "register:40f0:8", ["const:bc7e14:8", "const:4:8"]]
- 00bc7e14 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc7eb0 ["INT_ADD", "register:40f0:8", ["const:bc7eb0:8", "const:4:8"]]
+ 00bc7eb0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc7e20 ["INT_ADD", "register:40f0:8", ["const:bc7e20:8", "const:4:8"]]
- 00bc7e20 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc7ebc ["INT_ADD", "register:40f0:8", ["const:bc7ebc:8", "const:4:8"]]
+ 00bc7ebc ["CALL", null, ["callee:00c5aae0:8"]]
- 00bc7e2c ["INT_ADD", "register:40f0:8", ["const:bc7e2c:8", "const:4:8"]]
- 00bc7e2c ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc7ec8 ["INT_ADD", "register:40f0:8", ["const:bc7ec8:8", "const:4:8"]]
+ 00bc7ec8 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-ffe64385785ce43dbffd1aaf574c4a6d"></a>

### [`00bc89b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc89b4.md) → [`00bc8a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8a50.md) _ZN8firebase9MutexLockD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d940.md) · 呼出先 1件 [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5da10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da10.md) · 呼出先 1件 [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc89c0 ["INT_ADD", "register:40f0:8", ["const:bc89c0:8", "const:4:8"]]
- 00bc89c0 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bc8a5c ["INT_ADD", "register:40f0:8", ["const:bc8a5c:8", "const:4:8"]]
+ 00bc8a5c ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-f20d9dc66a2c11ae50521619670e5ca8"></a>

### [`00bc9654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9654.md) → [`00bc96f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc96f0.md) _ZN8firebase13remote_config8internal37JniConfigUpdateListener_nativeOnErrorEP7_JNIEnvP8_jobjectli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b6112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6112c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc96a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc96a4 ["INT_ADD", "register:40f0:8", ["const:bc96a4:8", "const:4:8"]]
- 00bc96a4 ["CALLIND", null, ["register:0:8"]]
+ 00bc9740 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc9740 ["INT_ADD", "register:40f0:8", ["const:bc9740:8", "const:4:8"]]
+ 00bc9740 ["CALLIND", null, ["register:0:8"]]
- 00bc96e0 ["INT_ADD", "register:40f0:8", ["const:bc96e0:8", "const:4:8"]]
- 00bc96e0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bc977c ["INT_ADD", "register:40f0:8", ["const:bc977c:8", "const:4:8"]]
+ 00bc977c ["CALL", null, ["callee:00c57f80:8"]]
- 00bc96f8 ["INT_ADD", "register:40f0:8", ["const:bc96f8:8", "const:4:8"]]
- 00bc96f8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bc9794 ["INT_ADD", "register:40f0:8", ["const:bc9794:8", "const:4:8"]]
+ 00bc9794 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-7232231d4cf227692e84d9cf5e5bdf96"></a>

### [`00bc9788`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9788.md) → [`00bc9824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9824.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN8firebase7VariantEEENS_19__map_value_compar

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d960.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) [`00c5d950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d950.md)
- 新版 呼出元 1件 [`00c5da30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da30.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5da20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc97bc ["INT_ADD", "register:40f0:8", ["const:bc97bc:8", "const:4:8"]]
- 00bc97bc ["CALL", null, ["callee:00c5da20:8"]]
+ 00bc9858 ["INT_ADD", "register:40f0:8", ["const:bc9858:8", "const:4:8"]]
+ 00bc9858 ["CALL", null, ["callee:00c5da20:8"]]
- 00bc97d8 ["INT_ADD", "register:40f0:8", ["const:bc97d8:8", "const:4:8"]]
- 00bc97d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bc9874 ["INT_ADD", "register:40f0:8", ["const:bc9874:8", "const:4:8"]]
+ 00bc9874 ["CALL", null, ["callee:00c57f60:8"]]
- 00bc9800 ["INT_ADD", "register:40f0:8", ["const:bc9800:8", "const:4:8"]]
- 00bc9800 ["CALL", null, ["callee:00c5a910:8"]]
+ 00bc989c ["INT_ADD", "register:40f0:8", ["const:bc989c:8", "const:4:8"]]
+ 00bc989c ["CALL", null, ["callee:00c5a910:8"]]
~~~


<a id="compare-3738a33f3a0ec0c78d0c982d97f33288"></a>

### [`00bc9878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9878.md) → [`00bc9914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9914.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN8firebase7VariantEEENS_19__map_value_compar

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d950.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5da20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da20.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc9914 ["INT_ADD", "register:40f0:8", ["const:bc9914:8", "const:4:8"]]
- 00bc9914 ["CALL", null, ["callee:00c58120:8"]]
+ 00bc99b0 ["INT_ADD", "register:40f0:8", ["const:bc99b0:8", "const:4:8"]]
+ 00bc99b0 ["CALL", null, ["callee:00c58120:8"]]
- 00bc9954 ["INT_ADD", "register:40f0:8", ["const:bc9954:8", "const:4:8"]]
- 00bc9954 ["CALL", null, ["callee:00c58120:8"]]
+ 00bc99f0 ["INT_ADD", "register:40f0:8", ["const:bc99f0:8", "const:4:8"]]
+ 00bc99f0 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-6872edbcd13a2f22e6251a7f8e5c04de"></a>

### [`00bc9998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9998.md) → [`00bc9a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9a34.md) FUN_00bc9a34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bc91f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc91f4.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d690.md)
- 新版 呼出元 1件 [`00bc9290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9290.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d760.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc99ac ["INT_ADD", "register:40f0:8", ["const:bc99ac:8", "const:4:8"]]
- 00bc99ac ["CALL", null, ["callee:00c5d760:8"]]
+ 00bc9a48 ["INT_ADD", "register:40f0:8", ["const:bc9a48:8", "const:4:8"]]
+ 00bc9a48 ["CALL", null, ["callee:00c5d760:8"]]
~~~


<a id="compare-f240b8fdf1299f3c4e63cd054d409940"></a>

### [`00bca324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca324.md) → [`00bca3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca3c0.md) _ZN8firebase13remote_config32ConfigUpdateListenerRegistration6RemoveEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d670.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d740.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bca344 ["INT_ADD", "register:40f0:8", ["const:bca344:8", "const:4:8"]]
- 00bca344 ["CALL", null, ["callee:00c5d740:8"]]
+ 00bca3e0 ["INT_ADD", "register:40f0:8", ["const:bca3e0:8", "const:4:8"]]
+ 00bca3e0 ["CALL", null, ["callee:00c5d740:8"]]
~~~


<a id="compare-f696616d6dc4e9a2dd4493da2f4991d1"></a>

### [`00bca368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca368.md) → [`00bca404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca404.md) _ZN8firebase13remote_config8internal40ConfigUpdateListenerRegistrationInternalC2EPNS1_20RemoteConfigInternalENSt6__ndk18functionIFvvEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d680.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5d750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d750.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bca39c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bca39c ["INT_ADD", "register:40f0:8", ["const:bca39c:8", "const:4:8"]]
- 00bca39c ["CALLIND", null, ["register:0:8"]]
+ 00bca438 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bca438 ["INT_ADD", "register:40f0:8", ["const:bca438:8", "const:4:8"]]
+ 00bca438 ["CALLIND", null, ["register:0:8"]]
- 00bca3c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bca3c0 ["INT_ADD", "register:40f0:8", ["const:bca3c0:8", "const:4:8"]]
- 00bca3c0 ["CALLIND", null, ["register:0:8"]]
+ 00bca45c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bca45c ["INT_ADD", "register:40f0:8", ["const:bca45c:8", "const:4:8"]]
+ 00bca45c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-532bf794d83f2d4bde801e4331b89c27"></a>

### [`00bca3d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca3d4.md) → [`00bca470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca470.md) _ZN8firebase13remote_config8internal40ConfigUpdateListenerRegistrationInternalD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d690.md) · 呼出先 1件 [`00b6112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6112c.md)
- 新版 呼出元 1件 [`00c5d760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d760.md) · 呼出先 1件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bca404 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bca404 ["INT_ADD", "register:40f0:8", ["const:bca404:8", "const:4:8"]]
- 00bca404 ["CALLIND", null, ["register:0:8"]]
+ 00bca4a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bca4a0 ["INT_ADD", "register:40f0:8", ["const:bca4a0:8", "const:4:8"]]
+ 00bca4a0 ["CALLIND", null, ["register:0:8"]]
- 00bca448 ["INT_ADD", "register:40f0:8", ["const:bca448:8", "const:4:8"]]
- 00bca448 ["CALL", null, ["callee:00b611c8:8"]]
+ 00bca4e4 ["INT_ADD", "register:40f0:8", ["const:bca4e4:8", "const:4:8"]]
+ 00bca4e4 ["CALL", null, ["callee:00b611c8:8"]]
~~~


<a id="compare-9ebbac5c584d0997e191ebb22d83d3b1"></a>

### [`00bca460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca460.md) → [`00bca4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca4fc.md) _ZN8firebase13remote_config8internal40ConfigUpdateListenerRegistrationInternal6RemoveEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d670.md) · 呼出先 1件 [`00b6112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6112c.md)
- 新版 呼出元 1件 [`00c5d740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d740.md) · 呼出先 1件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bca49c ["INT_ADD", "register:40f0:8", ["const:bca49c:8", "const:4:8"]]
- 00bca49c ["CALL", null, ["callee:00b611c8:8"]]
+ 00bca538 ["INT_ADD", "register:40f0:8", ["const:bca538:8", "const:4:8"]]
+ 00bca538 ["CALL", null, ["callee:00b611c8:8"]]
~~~


<a id="compare-763d4751e644fc42933d51dac731a0f4"></a>

### [`00bcac98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bcac98.md) → [`00bcad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcad34.md) _ZN8firebase4auth8AuthDataD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dab0.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa50.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md) [`00c5ac50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac50.md) [`00c5d9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d9a0.md)
- 新版 呼出元 1件 [`00c5db80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db80.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab20.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md) [`00c5da70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcaca8 ["INT_ADD", "register:40f0:8", ["const:bcaca8:8", "const:4:8"]]
- 00bcaca8 ["CALL", null, ["callee:00c5da70:8"]]
+ 00bcad44 ["INT_ADD", "register:40f0:8", ["const:bcad44:8", "const:4:8"]]
+ 00bcad44 ["CALL", null, ["callee:00c5da70:8"]]
- 00bcacc4 ["INT_ADD", "register:40f0:8", ["const:bcacc4:8", "const:4:8"]]
- 00bcacc4 ["CALL", null, ["callee:00c5db40:8"]]
+ 00bcad60 ["INT_ADD", "register:40f0:8", ["const:bcad60:8", "const:4:8"]]
+ 00bcad60 ["CALL", null, ["callee:00c5db40:8"]]
- 00bcacd4 ["INT_ADD", "register:40f0:8", ["const:bcacd4:8", "const:4:8"]]
- 00bcacd4 ["CALL", null, ["callee:00c5db30:8"]]
+ 00bcad70 ["INT_ADD", "register:40f0:8", ["const:bcad70:8", "const:4:8"]]
+ 00bcad70 ["CALL", null, ["callee:00c5db30:8"]]
~~~


<a id="compare-7819ca8cc67b9cb24f51a92a578992b5"></a>

### [`00bcade4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bcade4.md) → [`00bcae80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcae80.md) _ZN8firebase4auth4AuthD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5da30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da30.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5db00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcadec ["INT_ADD", "register:40f0:8", ["const:bcadec:8", "const:4:8"]]
- 00bcadec ["CALL", null, ["callee:00c5db00:8"]]
+ 00bcae88 ["INT_ADD", "register:40f0:8", ["const:bcae88:8", "const:4:8"]]
+ 00bcae88 ["CALL", null, ["callee:00c5db00:8"]]
~~~


<a id="compare-4be199d0f2f762360f04595bfab61eac"></a>

### [`00bcb9a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcb9a4.md) → [`00bcba40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcba40.md) _ZNK8firebase4auth4Auth32FetchProvidersForEmailLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcb9c4 ["INT_ADD", "register:40f0:8", ["const:bcb9c4:8", "const:4:8"]]
- 00bcb9c4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcba60 ["INT_ADD", "register:40f0:8", ["const:bcba60:8", "const:4:8"]]
+ 00bcba60 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcb9d0 ["INT_ADD", "register:40f0:8", ["const:bcb9d0:8", "const:4:8"]]
- 00bcb9d0 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bcba6c ["INT_ADD", "register:40f0:8", ["const:bcba6c:8", "const:4:8"]]
+ 00bcba6c ["CALL", null, ["callee:00c5aae0:8"]]
- 00bcb9dc ["INT_ADD", "register:40f0:8", ["const:bcb9dc:8", "const:4:8"]]
- 00bcb9dc ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bcba78 ["INT_ADD", "register:40f0:8", ["const:bcba78:8", "const:4:8"]]
+ 00bcba78 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-24cb05b4cab7210ddfe8b9b816125e3c"></a>

### [`00bcba34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcba34.md) → [`00bcbad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbad0.md) _ZNK8firebase4auth4Auth32SendPasswordResetEmailLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcba54 ["INT_ADD", "register:40f0:8", ["const:bcba54:8", "const:4:8"]]
- 00bcba54 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcbaf0 ["INT_ADD", "register:40f0:8", ["const:bcbaf0:8", "const:4:8"]]
+ 00bcbaf0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcba60 ["INT_ADD", "register:40f0:8", ["const:bcba60:8", "const:4:8"]]
- 00bcba60 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bcbafc ["INT_ADD", "register:40f0:8", ["const:bcbafc:8", "const:4:8"]]
+ 00bcbafc ["CALL", null, ["callee:00c5aae0:8"]]
- 00bcba6c ["INT_ADD", "register:40f0:8", ["const:bcba6c:8", "const:4:8"]]
- 00bcba6c ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bcbb08 ["INT_ADD", "register:40f0:8", ["const:bcbb08:8", "const:4:8"]]
+ 00bcbb08 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-83483be0567ce3610d08a40ad00a210d"></a>

### [`00bcbac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbac4.md) → [`00bcbb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbb60.md) _ZNK8firebase4auth4Auth31SignInWithCustomTokenLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbae4 ["INT_ADD", "register:40f0:8", ["const:bcbae4:8", "const:4:8"]]
- 00bcbae4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcbb80 ["INT_ADD", "register:40f0:8", ["const:bcbb80:8", "const:4:8"]]
+ 00bcbb80 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcbaf0 ["INT_ADD", "register:40f0:8", ["const:bcbaf0:8", "const:4:8"]]
- 00bcbaf0 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bcbb8c ["INT_ADD", "register:40f0:8", ["const:bcbb8c:8", "const:4:8"]]
+ 00bcbb8c ["CALL", null, ["callee:00c5aae0:8"]]
- 00bcbafc ["INT_ADD", "register:40f0:8", ["const:bcbafc:8", "const:4:8"]]
- 00bcbafc ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bcbb98 ["INT_ADD", "register:40f0:8", ["const:bcbb98:8", "const:4:8"]]
+ 00bcbb98 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-228ab95a92c5d964d1cd308ee24f6ab7"></a>

### [`00bcbc74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbc74.md) → [`00bcbd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbd10.md) _ZNK8firebase4auth4Auth36SignInWithEmailAndPasswordLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcbc90",
      "incomplete_value": true,
      "site": "00bcbc94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              [
                "live",
                "register:4000:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcbc9c",
      "incomplete_value": true,
      "site": "00bcbca0",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00bcbc94 ["INT_ADD", "register:40f0:8", ["const:bcbc94:8", "const:4:8"]]
- 00bcbc94 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcbd30 ["INT_ADD", "register:40f0:8", ["const:bcbd30:8", "const:4:8"]]
+ 00bcbd30 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcbca0 ["INT_ADD", "register:40f0:8", ["const:bcbca0:8", "const:4:8"]]
- 00bcbca0 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bcbd3c ["INT_ADD", "register:40f0:8", ["const:bcbd3c:8", "const:4:8"]]
+ 00bcbd3c ["CALL", null, ["callee:00c5aae0:8"]]
- 00bcbcac ["INT_ADD", "register:40f0:8", ["const:bcbcac:8", "const:4:8"]]
- 00bcbcac ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bcbd48 ["INT_ADD", "register:40f0:8", ["const:bcbd48:8", "const:4:8"]]
+ 00bcbd48 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-c52473b6a69a22026258f74bc1d2214f"></a>

### [`00bcbde4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbde4.md) → [`00bcbe80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbe80.md) _ZNSt6__ndk16__treeINS_12__value_typeIPN8firebase3AppEPNS2_4auth4AuthEEENS_19__map_value_compareIS4_S8_NS_4lessIS4_EELb1EEENS_9allocatorIS8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dac0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5dac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dac0.md)
- 新版 呼出元 1件 [`00c5db90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db90.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5db90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbe00 ["INT_ADD", "register:40f0:8", ["const:bcbe00:8", "const:4:8"]]
- 00bcbe00 ["CALL", null, ["callee:00c5db90:8"]]
+ 00bcbe9c ["INT_ADD", "register:40f0:8", ["const:bcbe9c:8", "const:4:8"]]
+ 00bcbe9c ["CALL", null, ["callee:00c5db90:8"]]
- 00bcbe0c ["INT_ADD", "register:40f0:8", ["const:bcbe0c:8", "const:4:8"]]
- 00bcbe0c ["CALL", null, ["callee:00c5db90:8"]]
+ 00bcbea8 ["INT_ADD", "register:40f0:8", ["const:bcbea8:8", "const:4:8"]]
+ 00bcbea8 ["CALL", null, ["callee:00c5db90:8"]]
~~~


<a id="compare-71e4a5568fb0743686d2413a939fc93d"></a>

### [`00bcc2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc2a4.md) → [`00bcc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc340.md) _ZNK8firebase4auth4UsereqERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5aa60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ab30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcc2b4 ["INT_ADD", "register:40f0:8", ["const:bcc2b4:8", "const:4:8"]]
- 00bcc2b4 ["CALL", null, ["callee:00c5ab30:8"]]
+ 00bcc350 ["INT_ADD", "register:40f0:8", ["const:bcc350:8", "const:4:8"]]
+ 00bcc350 ["CALL", null, ["callee:00c5ab30:8"]]
- 00bcc2c0 ["INT_ADD", "register:40f0:8", ["const:bcc2c0:8", "const:4:8"]]
- 00bcc2c0 ["CALL", null, ["callee:00c5ab30:8"]]
+ 00bcc35c ["INT_ADD", "register:40f0:8", ["const:bcc35c:8", "const:4:8"]]
+ 00bcc35c ["CALL", null, ["callee:00c5ab30:8"]]
~~~


<a id="compare-6af7584010a039ce81bd61cf48350c66"></a>

### [`00bcc2d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc2d8.md) → [`00bcc374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc374.md) _ZNK8firebase4auth4UserneERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5aa60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ab30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcc2e8 ["INT_ADD", "register:40f0:8", ["const:bcc2e8:8", "const:4:8"]]
- 00bcc2e8 ["CALL", null, ["callee:00c5ab30:8"]]
+ 00bcc384 ["INT_ADD", "register:40f0:8", ["const:bcc384:8", "const:4:8"]]
+ 00bcc384 ["CALL", null, ["callee:00c5ab30:8"]]
- 00bcc2f4 ["INT_ADD", "register:40f0:8", ["const:bcc2f4:8", "const:4:8"]]
- 00bcc2f4 ["CALL", null, ["callee:00c5ab30:8"]]
+ 00bcc390 ["INT_ADD", "register:40f0:8", ["const:bcc390:8", "const:4:8"]]
+ 00bcc390 ["CALL", null, ["callee:00c5ab30:8"]]
~~~


<a id="compare-2791c9db66f7407730be801529da9c21"></a>

### [`00bce3d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce3d8.md) → [`00bce474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce474.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorINS0_10AuthResultEEEbP7_JNIEnvPNS_26ReferenceCountedFutureImplERKNS_16SafeFutureHandleIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dcd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dcd0.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbc0.md)
- 新版 呼出元 1件 [`00c5dda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dda0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bce40c ["INT_ADD", "register:40f0:8", ["const:bce40c:8", "const:4:8"]]
- 00bce40c ["CALL", null, ["callee:00c5dde0:8"]]
+ 00bce4a8 ["INT_ADD", "register:40f0:8", ["const:bce4a8:8", "const:4:8"]]
+ 00bce4a8 ["CALL", null, ["callee:00c5dde0:8"]]
- 00bce420 ["INT_ADD", "register:40f0:8", ["const:bce420:8", "const:4:8"]]
- 00bce420 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bce4bc ["INT_ADD", "register:40f0:8", ["const:bce4bc:8", "const:4:8"]]
+ 00bce4bc ["CALL", null, ["callee:00c5aed0:8"]]
- 00bce44c ["INT_ADD", "register:40f0:8", ["const:bce44c:8", "const:4:8"]]
- 00bce44c ["CALL", null, ["callee:00c5dc90:8"]]
+ 00bce4e8 ["INT_ADD", "register:40f0:8", ["const:bce4e8:8", "const:4:8"]]
+ 00bce4e8 ["CALL", null, ["callee:00c5dc90:8"]]
~~~


<a id="compare-d0d8330e46f7c0a8bdd2115234b71dbc"></a>

### [`00bce78c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce78c.md) → [`00bce828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce828.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorINS0_4UserEEEbP7_JNIEnvPNS_26ReferenceCountedFutureImplERKNS_16SafeFutureHandleIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dcf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dcf0.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dbe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbe0.md)
- 新版 呼出元 1件 [`00c5ddc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddc0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bce7c0 ["INT_ADD", "register:40f0:8", ["const:bce7c0:8", "const:4:8"]]
- 00bce7c0 ["CALL", null, ["callee:00c5dde0:8"]]
+ 00bce85c ["INT_ADD", "register:40f0:8", ["const:bce85c:8", "const:4:8"]]
+ 00bce85c ["CALL", null, ["callee:00c5dde0:8"]]
- 00bce7d4 ["INT_ADD", "register:40f0:8", ["const:bce7d4:8", "const:4:8"]]
- 00bce7d4 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bce870 ["INT_ADD", "register:40f0:8", ["const:bce870:8", "const:4:8"]]
+ 00bce870 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bce800 ["INT_ADD", "register:40f0:8", ["const:bce800:8", "const:4:8"]]
- 00bce800 ["CALL", null, ["callee:00c5dcb0:8"]]
+ 00bce89c ["INT_ADD", "register:40f0:8", ["const:bce89c:8", "const:4:8"]]
+ 00bce89c ["CALL", null, ["callee:00c5dcb0:8"]]
~~~


<a id="compare-6930183fadbc320903ec3d8a925f11c0"></a>

### [`00bcf8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf8a0.md) → [`00bcf93c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf93c.md) _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINS_4auth4Auth20FetchProvidersResultEEEvPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bcdbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdbb0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00bcdc4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc4c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcf8f0 ["INT_ADD", "register:40f0:8", ["const:bcf8f0:8", "const:4:8"]]
- 00bcf8f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bcf98c ["INT_ADD", "register:40f0:8", ["const:bcf98c:8", "const:4:8"]]
+ 00bcf98c ["CALL", null, ["callee:00c57f80:8"]]
- 00bcf90c ["INT_ADD", "register:40f0:8", ["const:bcf90c:8", "const:4:8"]]
- 00bcf90c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bcf9a8 ["INT_ADD", "register:40f0:8", ["const:bcf9a8:8", "const:4:8"]]
+ 00bcf9a8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-adbd381b7691697c3e6871e6e5066cc0"></a>

### [`00bcfa2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfa2c.md) → [`00bcfac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfac8.md) _ZN8firebase4auth14FutureCallbackINS0_4Auth20FetchProvidersResultEEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bcdbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdbb0.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dba0.md)
- 新版 呼出元 1件 [`00bcdc4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc4c.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcfa64 ["INT_ADD", "register:40f0:8", ["const:bcfa64:8", "const:4:8"]]
- 00bcfa64 ["CALL", null, ["callee:00c5ddf0:8"]]
+ 00bcfb00 ["INT_ADD", "register:40f0:8", ["const:bcfb00:8", "const:4:8"]]
+ 00bcfb00 ["CALL", null, ["callee:00c5ddf0:8"]]
- 00bcfa7c ["INT_ADD", "register:40f0:8", ["const:bcfa7c:8", "const:4:8"]]
- 00bcfa7c ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bcfb18 ["INT_ADD", "register:40f0:8", ["const:bcfb18:8", "const:4:8"]]
+ 00bcfb18 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bcfaa4 ["INT_ADD", "register:40f0:8", ["const:bcfaa4:8", "const:4:8"]]
- 00bcfaa4 ["CALL", null, ["callee:00c5dc70:8"]]
+ 00bcfb40 ["INT_ADD", "register:40f0:8", ["const:bcfb40:8", "const:4:8"]]
+ 00bcfb40 ["CALL", null, ["callee:00c5dc70:8"]]
~~~


<a id="compare-f0f96190a80622e1bef80bc1597d4fb8"></a>

### [`00bcfc38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfc38.md) → [`00bcfcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfcd4.md) _ZN8firebase6FutureINS_4auth4Auth20FetchProvidersResultEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd40.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5de10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de10.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcfc58 ["INT_ADD", "register:40f0:8", ["const:bcfc58:8", "const:4:8"]]
- 00bcfc58 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bcfcf4 ["INT_ADD", "register:40f0:8", ["const:bcfcf4:8", "const:4:8"]]
+ 00bcfcf4 ["CALL", null, ["callee:00c5ad40:8"]]
- 00bcfc6c ["INT_ADD", "register:40f0:8", ["const:bcfc6c:8", "const:4:8"]]
- 00bcfc6c ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bcfd08 ["INT_ADD", "register:40f0:8", ["const:bcfd08:8", "const:4:8"]]
+ 00bcfd08 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bcfc80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcfc80 ["INT_ADD", "register:40f0:8", ["const:bcfc80:8", "const:4:8"]]
- 00bcfc80 ["CALLIND", null, ["register:0:8"]]
+ 00bcfd1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcfd1c ["INT_ADD", "register:40f0:8", ["const:bcfd1c:8", "const:4:8"]]
+ 00bcfd1c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-67be0d56395de774b626285b05aa89aa"></a>

### [`00bcfcd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfcd8.md) → [`00bcfd74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfd74.md) _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINS_4auth10AuthResultEEEvPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bce28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce28c.md) [`00bdbb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdbb6c.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a9f0.md) [`00c5aa50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa50.md) [`00c5be20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be20.md)
- 新版 呼出元 2件 [`00bce328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce328.md) [`00bdbc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbc08.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aac0.md) [`00c5ab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab20.md) [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcfcf0 ["INT_ADD", "register:40f0:8", ["const:bcfcf0:8", "const:4:8"]]
- 00bcfcf0 ["CALL", null, ["callee:00c5ab20:8"]]
+ 00bcfd8c ["INT_ADD", "register:40f0:8", ["const:bcfd8c:8", "const:4:8"]]
+ 00bcfd8c ["CALL", null, ["callee:00c5ab20:8"]]
- 00bcfcf8 ["INT_ADD", "register:40f0:8", ["const:bcfcf8:8", "const:4:8"]]
- 00bcfcf8 ["CALL", null, ["callee:00c5aac0:8"]]
+ 00bcfd94 ["INT_ADD", "register:40f0:8", ["const:bcfd94:8", "const:4:8"]]
+ 00bcfd94 ["CALL", null, ["callee:00c5aac0:8"]]
- 00bcfd00 ["INT_ADD", "register:40f0:8", ["const:bcfd00:8", "const:4:8"]]
- 00bcfd00 ["CALL", null, ["callee:00c5aac0:8"]]
+ 00bcfd9c ["INT_ADD", "register:40f0:8", ["const:bcfd9c:8", "const:4:8"]]
+ 00bcfd9c ["CALL", null, ["callee:00c5aac0:8"]]
~~~


<a id="compare-2fe500d6beb4df98f3d78c525ea1a8cd"></a>

### [`00bcfd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfd44.md) → [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) _ZN8firebase4auth14FutureCallbackINS0_10AuthResultEEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`00bce0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce0c8.md) [`00bce890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce890.md) [`00bceb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bceb00.md) [`00bcec8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bcec8c.md) [`00bcef18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bcef18.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5db90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db90.md)
- 新版 呼出元 8件 [`00bce164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce164.md) [`00bce92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce92c.md) [`00bceb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bceb9c.md) [`00bced28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bced28.md) [`00bcefb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bcefb4.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcfd7c ["INT_ADD", "register:40f0:8", ["const:bcfd7c:8", "const:4:8"]]
- 00bcfd7c ["CALL", null, ["callee:00c5ddf0:8"]]
+ 00bcfe18 ["INT_ADD", "register:40f0:8", ["const:bcfe18:8", "const:4:8"]]
+ 00bcfe18 ["CALL", null, ["callee:00c5ddf0:8"]]
- 00bcfd94 ["INT_ADD", "register:40f0:8", ["const:bcfd94:8", "const:4:8"]]
- 00bcfd94 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bcfe30 ["INT_ADD", "register:40f0:8", ["const:bcfe30:8", "const:4:8"]]
+ 00bcfe30 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bcfdbc ["INT_ADD", "register:40f0:8", ["const:bcfdbc:8", "const:4:8"]]
- 00bcfdbc ["CALL", null, ["callee:00c5dc60:8"]]
+ 00bcfe58 ["INT_ADD", "register:40f0:8", ["const:bcfe58:8", "const:4:8"]]
+ 00bcfe58 ["CALL", null, ["callee:00c5dc60:8"]]
~~~


<a id="compare-e67a18f22d16604409551347395044ae"></a>

### [`00bd47b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd47b0.md) → [`00bd484c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd484c.md) _ZN8firebase4auth19SetImplFromLocalRefEP7_JNIEnvP8_jobjectPPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc80.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd50.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd47e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd47e0 ["INT_ADD", "register:40f0:8", ["const:bd47e0:8", "const:4:8"]]
- 00bd47e0 ["CALLIND", null, ["register:0:8"]]
+ 00bd487c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd487c ["INT_ADD", "register:40f0:8", ["const:bd487c:8", "const:4:8"]]
+ 00bd487c ["CALLIND", null, ["register:0:8"]]
- 00bd47fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd47fc ["INT_ADD", "register:40f0:8", ["const:bd47fc:8", "const:4:8"]]
- 00bd47fc ["CALLIND", null, ["register:0:8"]]
+ 00bd4898 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd4898 ["INT_ADD", "register:40f0:8", ["const:bd4898:8", "const:4:8"]]
+ 00bd4898 ["CALLIND", null, ["register:0:8"]]
- 00bd4814 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd4814 ["INT_ADD", "register:40f0:8", ["const:bd4814:8", "const:4:8"]]
- 00bd4814 ["CALLIND", null, ["register:0:8"]]
+ 00bd48b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd48b0 ["INT_ADD", "register:40f0:8", ["const:bd48b0:8", "const:4:8"]]
+ 00bd48b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b688343574f36c831ba9720c94566875"></a>

### [`00bd4d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4d68.md) → [`00bd4e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4e04.md) _ZN8firebase4auth18AdditionalUserInfoaSEOS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dd70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd70.md) · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be20.md) [`00c5dd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd60.md)
- 新版 呼出元 1件 [`00c5de40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de40.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md) [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd4da8 ["INT_ADD", "register:40f0:8", ["const:bd4da8:8", "const:4:8"]]
- 00bd4da8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bd4e44 ["INT_ADD", "register:40f0:8", ["const:bd4e44:8", "const:4:8"]]
+ 00bd4e44 ["CALL", null, ["callee:00c57f80:8"]]
- 00bd4df8 ["INT_ADD", "register:40f0:8", ["const:bd4df8:8", "const:4:8"]]
- 00bd4df8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bd4e94 ["INT_ADD", "register:40f0:8", ["const:bd4e94:8", "const:4:8"]]
+ 00bd4e94 ["CALL", null, ["callee:00c57f80:8"]]
- 00bd4e28 ["INT_ADD", "register:40f0:8", ["const:bd4e28:8", "const:4:8"]]
- 00bd4e28 ["CALL", null, ["callee:00c5bef0:8"]]
+ 00bd4ec4 ["INT_ADD", "register:40f0:8", ["const:bd4ec4:8", "const:4:8"]]
+ 00bd4ec4 ["CALL", null, ["callee:00c5bef0:8"]]
~~~


<a id="compare-682fc1955d7a1b764da4de513588e261"></a>

### [`00bd9270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9270.md) → [`00bd930c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd930c.md) _ZN8firebase4auth10CredentialC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5dd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd9294 ["INT_ADD", "register:40f0:8", ["const:bd9294:8", "const:4:8"]]
- 00bd9294 ["CALL", null, ["callee:00c5de30:8"]]
+ 00bd9330 ["INT_ADD", "register:40f0:8", ["const:bd9330:8", "const:4:8"]]
+ 00bd9330 ["CALL", null, ["callee:00c5de30:8"]]
~~~


<a id="compare-012894c61001aa38facfd96186182171"></a>

### [`00bd9714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9714.md) → [`00bd97b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd97b0.md) _ZN8firebase4auth19PhoneAuthCredentialaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5de30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de30.md) · 呼出先 2件 [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5dd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd60.md)
- 新版 呼出元 1件 [`00c5df00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df00.md) · 呼出先 2件 [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd9728 ["INT_ADD", "register:40f0:8", ["const:bd9728:8", "const:4:8"]]
- 00bd9728 ["CALL", null, ["callee:00c5de30:8"]]
+ 00bd97c4 ["INT_ADD", "register:40f0:8", ["const:bd97c4:8", "const:4:8"]]
+ 00bd97c4 ["CALL", null, ["callee:00c5de30:8"]]
- 00bd9754 ["INT_ADD", "register:40f0:8", ["const:bd9754:8", "const:4:8"]]
- 00bd9754 ["CALL", null, ["callee:00c5b180:8"]]
+ 00bd97f0 ["INT_ADD", "register:40f0:8", ["const:bd97f0:8", "const:4:8"]]
+ 00bd97f0 ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-99498844e5dd8f1716c2952141f07ad2"></a>

### [`00bda534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda534.md) → [`00bda5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda5d0.md) _ZN8firebase4auth22GameCenterAuthProvider23GetCredentialLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 8件 [`0087b3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b3bc.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bda558 ["INT_ADD", "register:40f0:8", ["const:bda558:8", "const:4:8"]]
- 00bda558 ["CALL", null, ["callee:00c5dc20:8"]]
+ 00bda5f4 ["INT_ADD", "register:40f0:8", ["const:bda5f4:8", "const:4:8"]]
+ 00bda5f4 ["CALL", null, ["callee:00c5dc20:8"]]
- 00bda568 ["INT_ADD", "register:40f0:8", ["const:bda568:8", "const:4:8"]]
- 00bda568 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bda604 ["INT_ADD", "register:40f0:8", ["const:bda604:8", "const:4:8"]]
+ 00bda604 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bda574 ["INT_ADD", "register:40f0:8", ["const:bda574:8", "const:4:8"]]
- 00bda574 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bda610 ["INT_ADD", "register:40f0:8", ["const:bda610:8", "const:4:8"]]
+ 00bda610 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-d10626594bdc2d55ac1853ea8db9058b"></a>

### [`00bda678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda678.md) → [`00bda714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda714.md) _ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bda68c ["INT_ADD", "register:40f0:8", ["const:bda68c:8", "const:4:8"]]
- 00bda68c ["CALL", null, ["callee:00c57f60:8"]]
+ 00bda728 ["INT_ADD", "register:40f0:8", ["const:bda728:8", "const:4:8"]]
+ 00bda728 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-69258b05a5d3918e5277c5a92473c853"></a>

### [`00bda710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda710.md) → [`00bda7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda7ac.md) _ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenC1ERKS2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5de40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5df10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bda728 ["INT_ADD", "register:40f0:8", ["const:bda728:8", "const:4:8"]]
- 00bda728 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bda7c4 ["INT_ADD", "register:40f0:8", ["const:bda7c4:8", "const:4:8"]]
+ 00bda7c4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-9e028feb0cef754c24a90c050df454a8"></a>

### [`00bda7ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda7ec.md) → [`00bda888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda888.md) _ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenaSERKS2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5de40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de40.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5df10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bda808 ["INT_ADD", "register:40f0:8", ["const:bda808:8", "const:4:8"]]
- 00bda808 ["CALL", null, ["callee:00c5df10:8"]]
+ 00bda8a4 ["INT_ADD", "register:40f0:8", ["const:bda8a4:8", "const:4:8"]]
+ 00bda8a4 ["CALL", null, ["callee:00c5df10:8"]]
~~~


<a id="compare-8e6986569232663b61a2d97cbfb28fde"></a>

### [`00bdb2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb2e0.md) → [`00bdb37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb37c.md) _ZN8firebase4auth20JniAuthPhoneListener26nativeOnVerificationFailedEP7_JNIEnvP8_jobjectlP8_jstring

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdb308 ["INT_ADD", "register:40f0:8", ["const:bdb308:8", "const:4:8"]]
- 00bdb308 ["CALL", null, ["callee:00c5aff0:8"]]
+ 00bdb3a4 ["INT_ADD", "register:40f0:8", ["const:bdb3a4:8", "const:4:8"]]
+ 00bdb3a4 ["CALL", null, ["callee:00c5aff0:8"]]
- 00bdb31c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdb31c ["INT_ADD", "register:40f0:8", ["const:bdb31c:8", "const:4:8"]]
- 00bdb31c ["CALLIND", null, ["register:0:8"]]
+ 00bdb3b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdb3b8 ["INT_ADD", "register:40f0:8", ["const:bdb3b8:8", "const:4:8"]]
+ 00bdb3b8 ["CALLIND", null, ["register:0:8"]]
- 00bdb32c ["INT_ADD", "register:40f0:8", ["const:bdb32c:8", "const:4:8"]]
- 00bdb32c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bdb3c8 ["INT_ADD", "register:40f0:8", ["const:bdb3c8:8", "const:4:8"]]
+ 00bdb3c8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-06c6a3c4f35072a194bdf782fcf6806b"></a>

### [`00bdb4f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb4f0.md) → [`00bdb58c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb58c.md) _ZN8firebase4auth20JniAuthPhoneListener32nativeOnCodeAutoRetrievalTimeOutEP7_JNIEnvP8_jobjectlP8_jstring

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b390.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdb518 ["INT_ADD", "register:40f0:8", ["const:bdb518:8", "const:4:8"]]
- 00bdb518 ["CALL", null, ["callee:00c5b460:8"]]
+ 00bdb5b4 ["INT_ADD", "register:40f0:8", ["const:bdb5b4:8", "const:4:8"]]
+ 00bdb5b4 ["CALL", null, ["callee:00c5b460:8"]]
- 00bdb52c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdb52c ["INT_ADD", "register:40f0:8", ["const:bdb52c:8", "const:4:8"]]
- 00bdb52c ["CALLIND", null, ["register:0:8"]]
+ 00bdb5c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdb5c8 ["INT_ADD", "register:40f0:8", ["const:bdb5c8:8", "const:4:8"]]
+ 00bdb5c8 ["CALLIND", null, ["register:0:8"]]
- 00bdb53c ["INT_ADD", "register:40f0:8", ["const:bdb53c:8", "const:4:8"]]
- 00bdb53c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bdb5d8 ["INT_ADD", "register:40f0:8", ["const:bdb5d8:8", "const:4:8"]]
+ 00bdb5d8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d62b002057a7858165a7fde37ec7d7d2"></a>

### [`00bdc428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc428.md) → [`00bdc4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc4c4.md) _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINS_4auth10CredentialEEEvPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bda410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda410.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5de00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de00.md)
- 新版 呼出元 1件 [`00bda4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda4ac.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ded0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ded0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdc43c ["INT_ADD", "register:40f0:8", ["const:bdc43c:8", "const:4:8"]]
- 00bdc43c ["CALL", null, ["callee:00c5ded0:8"]]
+ 00bdc4d8 ["INT_ADD", "register:40f0:8", ["const:bdc4d8:8", "const:4:8"]]
+ 00bdc4d8 ["CALL", null, ["callee:00c5ded0:8"]]
~~~


<a id="compare-de58215272d2d729b9dccc8a674610c2"></a>

### [`00bdc55c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc55c.md) → [`00bdc5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc5f8.md) _ZN8firebase6FutureINS_4auth10CredentialEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de50.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5df20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df20.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdc57c ["INT_ADD", "register:40f0:8", ["const:bdc57c:8", "const:4:8"]]
- 00bdc57c ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bdc618 ["INT_ADD", "register:40f0:8", ["const:bdc618:8", "const:4:8"]]
+ 00bdc618 ["CALL", null, ["callee:00c5ad40:8"]]
- 00bdc590 ["INT_ADD", "register:40f0:8", ["const:bdc590:8", "const:4:8"]]
- 00bdc590 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bdc62c ["INT_ADD", "register:40f0:8", ["const:bdc62c:8", "const:4:8"]]
+ 00bdc62c ["CALL", null, ["callee:00c5aed0:8"]]
- 00bdc5a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdc5a4 ["INT_ADD", "register:40f0:8", ["const:bdc5a4:8", "const:4:8"]]
- 00bdc5a4 ["CALLIND", null, ["register:0:8"]]
+ 00bdc640 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdc640 ["INT_ADD", "register:40f0:8", ["const:bdc640:8", "const:4:8"]]
+ 00bdc640 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a2018647fee0c740b82146093e16420f"></a>

### [`00bdcb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdcb7c.md) → [`00bdcc18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcc18.md) _ZN8firebase4auth35FederatedAuthProviderFutureCallbackINS0_10AuthResultEEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bdb894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb894.md) [`00bdbe78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdbe78.md) [`00bdc150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc150.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dd20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd20.md)
- 新版 呼出元 3件 [`00bdb930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb930.md) [`00bdbf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbf14.md) [`00bdc1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc1ec.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5ddf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddf0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdcbb4 ["INT_ADD", "register:40f0:8", ["const:bdcbb4:8", "const:4:8"]]
- 00bdcbb4 ["CALL", null, ["callee:00c5ddf0:8"]]
+ 00bdcc50 ["INT_ADD", "register:40f0:8", ["const:bdcc50:8", "const:4:8"]]
+ 00bdcc50 ["CALL", null, ["callee:00c5ddf0:8"]]
- 00bdcbd4 ["INT_ADD", "register:40f0:8", ["const:bdcbd4:8", "const:4:8"]]
- 00bdcbd4 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bdcc70 ["INT_ADD", "register:40f0:8", ["const:bdcc70:8", "const:4:8"]]
+ 00bdcc70 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bdcbfc ["INT_ADD", "register:40f0:8", ["const:bdcbfc:8", "const:4:8"]]
- 00bdcbfc ["CALL", null, ["callee:00c5de90:8"]]
+ 00bdcc98 ["INT_ADD", "register:40f0:8", ["const:bdcc98:8", "const:4:8"]]
+ 00bdcc98 ["CALL", null, ["callee:00c5de90:8"]]
~~~


<a id="compare-251c7161dd9a12177686e99b84e08e88"></a>

### [`00bdcdc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdcdc0.md) → [`00bdce5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdce5c.md) _ZN8firebase4auth19PhoneAuthCredentialC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5de30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de30.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5df00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdcde4 ["INT_ADD", "register:40f0:8", ["const:bdcde4:8", "const:4:8"]]
- 00bdcde4 ["CALL", null, ["callee:00c5df00:8"]]
+ 00bdce80 ["INT_ADD", "register:40f0:8", ["const:bdce80:8", "const:4:8"]]
+ 00bdce80 ["CALL", null, ["callee:00c5df00:8"]]
~~~


<a id="compare-cbb7be7320a499040be7787f4605255d"></a>

### [`00bdea78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bde/00bdea78.md) → [`00bdeb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bdeb14.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEEbP7_JNIEnvPNS_26Refere

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5deb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5deb0.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd10.md)
- 新版 呼出元 1件 [`00c5df80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df80.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dde0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdeaac ["INT_ADD", "register:40f0:8", ["const:bdeaac:8", "const:4:8"]]
- 00bdeaac ["CALL", null, ["callee:00c5dde0:8"]]
+ 00bdeb48 ["INT_ADD", "register:40f0:8", ["const:bdeb48:8", "const:4:8"]]
+ 00bdeb48 ["CALL", null, ["callee:00c5dde0:8"]]
- 00bdeac0 ["INT_ADD", "register:40f0:8", ["const:bdeac0:8", "const:4:8"]]
- 00bdeac0 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bdeb5c ["INT_ADD", "register:40f0:8", ["const:bdeb5c:8", "const:4:8"]]
+ 00bdeb5c ["CALL", null, ["callee:00c5aed0:8"]]
- 00bdeaec ["INT_ADD", "register:40f0:8", ["const:bdeaec:8", "const:4:8"]]
- 00bdeaec ["CALL", null, ["callee:00c5df60:8"]]
+ 00bdeb88 ["INT_ADD", "register:40f0:8", ["const:bdeb88:8", "const:4:8"]]
+ 00bdeb88 ["CALL", null, ["callee:00c5df60:8"]]
~~~


<a id="compare-102daf2c86206eae7cd48f8b9b61ef11"></a>

### [`00be13b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be13b4.md) → [`00be1450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1450.md) _ZN8firebase4auth14FutureCallbackINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEEvP7_JNIEnvP8_jobjectNS_4util12FutureR

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bde818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bde/00bde818.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dd20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd20.md)
- 新版 呼出元 1件 [`00bde8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde8b4.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5ddf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddf0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be13ec ["INT_ADD", "register:40f0:8", ["const:be13ec:8", "const:4:8"]]
- 00be13ec ["CALL", null, ["callee:00c5ddf0:8"]]
+ 00be1488 ["INT_ADD", "register:40f0:8", ["const:be1488:8", "const:4:8"]]
+ 00be1488 ["CALL", null, ["callee:00c5ddf0:8"]]
- 00be1404 ["INT_ADD", "register:40f0:8", ["const:be1404:8", "const:4:8"]]
- 00be1404 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00be14a0 ["INT_ADD", "register:40f0:8", ["const:be14a0:8", "const:4:8"]]
+ 00be14a0 ["CALL", null, ["callee:00c5aed0:8"]]
- 00be142c ["INT_ADD", "register:40f0:8", ["const:be142c:8", "const:4:8"]]
- 00be142c ["CALL", null, ["callee:00c5df50:8"]]
+ 00be14c8 ["INT_ADD", "register:40f0:8", ["const:be14c8:8", "const:4:8"]]
+ 00be14c8 ["CALL", null, ["callee:00c5df50:8"]]
~~~


<a id="compare-4cede4403cca8515da51a66191c27658"></a>

### [`00be1728`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1728.md) → [`00be17c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be17c4.md) _ZNSt6__ndk16vectorIN8firebase4auth17UserInfoInterfaceENS_9allocatorIS3_EEE21__push_back_slow_pathIRKS3_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dec0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md) [`00c5dea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dea0.md)
- 新版 呼出元 1件 [`00c5df90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df90.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md) [`00c5df70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be17c4 ["INT_ADD", "register:40f0:8", ["const:be17c4:8", "const:4:8"]]
- 00be17c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00be1860 ["INT_ADD", "register:40f0:8", ["const:be1860:8", "const:4:8"]]
+ 00be1860 ["CALL", null, ["callee:00c57f60:8"]]
- 00be17dc ["INT_ADD", "register:40f0:8", ["const:be17dc:8", "const:4:8"]]
- 00be17dc ["CALL", null, ["callee:00c5df70:8"]]
+ 00be1878 ["INT_ADD", "register:40f0:8", ["const:be1878:8", "const:4:8"]]
+ 00be1878 ["CALL", null, ["callee:00c5df70:8"]]
- 00be17fc ["INT_ADD", "register:40f0:8", ["const:be17fc:8", "const:4:8"]]
- 00be17fc ["CALL", null, ["callee:00c5df70:8"]]
+ 00be1898 ["INT_ADD", "register:40f0:8", ["const:be1898:8", "const:4:8"]]
+ 00be1898 ["CALL", null, ["callee:00c5df70:8"]]
~~~


<a id="compare-dafd29b42fb4b0acc1bb54dc286f75cc"></a>

### [`00be18d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be18d8.md) → [`00be1974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1974.md) _ZNK8firebase4auth4User18GetTokenLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be18f8 ["INT_ADD", "register:40f0:8", ["const:be18f8:8", "const:4:8"]]
- 00be18f8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1994 ["INT_ADD", "register:40f0:8", ["const:be1994:8", "const:4:8"]]
+ 00be1994 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1904 ["INT_ADD", "register:40f0:8", ["const:be1904:8", "const:4:8"]]
- 00be1904 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be19a0 ["INT_ADD", "register:40f0:8", ["const:be19a0:8", "const:4:8"]]
+ 00be19a0 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1910 ["INT_ADD", "register:40f0:8", ["const:be1910:8", "const:4:8"]]
- 00be1910 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be19ac ["INT_ADD", "register:40f0:8", ["const:be19ac:8", "const:4:8"]]
+ 00be19ac ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-176c77b8f034e0c50bd809d66fa4d89f"></a>

### [`00be1968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1968.md) → [`00be1a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1a04.md) _ZNK8firebase4auth4User24UpdatePasswordLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1988 ["INT_ADD", "register:40f0:8", ["const:be1988:8", "const:4:8"]]
- 00be1988 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1a24 ["INT_ADD", "register:40f0:8", ["const:be1a24:8", "const:4:8"]]
+ 00be1a24 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1994 ["INT_ADD", "register:40f0:8", ["const:be1994:8", "const:4:8"]]
- 00be1994 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1a30 ["INT_ADD", "register:40f0:8", ["const:be1a30:8", "const:4:8"]]
+ 00be1a30 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be19a0 ["INT_ADD", "register:40f0:8", ["const:be19a0:8", "const:4:8"]]
- 00be19a0 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1a3c ["INT_ADD", "register:40f0:8", ["const:be1a3c:8", "const:4:8"]]
+ 00be1a3c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-5585d912bb19f11a24cec916dc98e44b"></a>

### [`00be19f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be19f8.md) → [`00be1a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1a94.md) _ZNK8firebase4auth4User28LinkWithCredentialLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1a18 ["INT_ADD", "register:40f0:8", ["const:be1a18:8", "const:4:8"]]
- 00be1a18 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1ab4 ["INT_ADD", "register:40f0:8", ["const:be1ab4:8", "const:4:8"]]
+ 00be1ab4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1a24 ["INT_ADD", "register:40f0:8", ["const:be1a24:8", "const:4:8"]]
- 00be1a24 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1ac0 ["INT_ADD", "register:40f0:8", ["const:be1ac0:8", "const:4:8"]]
+ 00be1ac0 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1a30 ["INT_ADD", "register:40f0:8", ["const:be1a30:8", "const:4:8"]]
- 00be1a30 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1acc ["INT_ADD", "register:40f0:8", ["const:be1acc:8", "const:4:8"]]
+ 00be1acc ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-7e39eb45c6e5ae7169d895c23cffd710"></a>

### [`00be1a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1a88.md) → [`00be1b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1b24.md) _ZNK8firebase4auth4User24ReauthenticateLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1aa8 ["INT_ADD", "register:40f0:8", ["const:be1aa8:8", "const:4:8"]]
- 00be1aa8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1b44 ["INT_ADD", "register:40f0:8", ["const:be1b44:8", "const:4:8"]]
+ 00be1b44 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1ab4 ["INT_ADD", "register:40f0:8", ["const:be1ab4:8", "const:4:8"]]
- 00be1ab4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1b50 ["INT_ADD", "register:40f0:8", ["const:be1b50:8", "const:4:8"]]
+ 00be1b50 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1ac0 ["INT_ADD", "register:40f0:8", ["const:be1ac0:8", "const:4:8"]]
- 00be1ac0 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1b5c ["INT_ADD", "register:40f0:8", ["const:be1b5c:8", "const:4:8"]]
+ 00be1b5c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-a60591e88a8f1bc175b8a6f9024de9aa"></a>

### [`00be1b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1b18.md) → [`00be1bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1bb4.md) _ZNK8firebase4auth4User39ReauthenticateAndRetrieveDataLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1b38 ["INT_ADD", "register:40f0:8", ["const:be1b38:8", "const:4:8"]]
- 00be1b38 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1bd4 ["INT_ADD", "register:40f0:8", ["const:be1bd4:8", "const:4:8"]]
+ 00be1bd4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1b44 ["INT_ADD", "register:40f0:8", ["const:be1b44:8", "const:4:8"]]
- 00be1b44 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1be0 ["INT_ADD", "register:40f0:8", ["const:be1be0:8", "const:4:8"]]
+ 00be1be0 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1b50 ["INT_ADD", "register:40f0:8", ["const:be1b50:8", "const:4:8"]]
- 00be1b50 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1bec ["INT_ADD", "register:40f0:8", ["const:be1bec:8", "const:4:8"]]
+ 00be1bec ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-5c3c0f198f8549170ed0daf3594eee39"></a>

### [`00be1ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1ba8.md) → [`00be1c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1c44.md) _ZNK8firebase4auth4User31SendEmailVerificationLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1bc8 ["INT_ADD", "register:40f0:8", ["const:be1bc8:8", "const:4:8"]]
- 00be1bc8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1c64 ["INT_ADD", "register:40f0:8", ["const:be1c64:8", "const:4:8"]]
+ 00be1c64 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1bd4 ["INT_ADD", "register:40f0:8", ["const:be1bd4:8", "const:4:8"]]
- 00be1bd4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1c70 ["INT_ADD", "register:40f0:8", ["const:be1c70:8", "const:4:8"]]
+ 00be1c70 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1be0 ["INT_ADD", "register:40f0:8", ["const:be1be0:8", "const:4:8"]]
- 00be1be0 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1c7c ["INT_ADD", "register:40f0:8", ["const:be1c7c:8", "const:4:8"]]
+ 00be1c7c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-22f9b390c32681ec35f73929db2a8395"></a>

### [`00be1c38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1c38.md) → [`00be1cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1cd4.md) _ZNK8firebase4auth4User50SendEmailVerificationBeforeUpdatingEmailLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1c58 ["INT_ADD", "register:40f0:8", ["const:be1c58:8", "const:4:8"]]
- 00be1c58 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1cf4 ["INT_ADD", "register:40f0:8", ["const:be1cf4:8", "const:4:8"]]
+ 00be1cf4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1c64 ["INT_ADD", "register:40f0:8", ["const:be1c64:8", "const:4:8"]]
- 00be1c64 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1d00 ["INT_ADD", "register:40f0:8", ["const:be1d00:8", "const:4:8"]]
+ 00be1d00 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1c70 ["INT_ADD", "register:40f0:8", ["const:be1c70:8", "const:4:8"]]
- 00be1c70 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1d0c ["INT_ADD", "register:40f0:8", ["const:be1d0c:8", "const:4:8"]]
+ 00be1d0c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-65b851da1b1aef304a181edb15c24c14"></a>

### [`00be1cc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1cc8.md) → [`00be1d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1d64.md) _ZNK8firebase4auth4User16UnlinkLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1ce8 ["INT_ADD", "register:40f0:8", ["const:be1ce8:8", "const:4:8"]]
- 00be1ce8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1d84 ["INT_ADD", "register:40f0:8", ["const:be1d84:8", "const:4:8"]]
+ 00be1d84 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1cf4 ["INT_ADD", "register:40f0:8", ["const:be1cf4:8", "const:4:8"]]
- 00be1cf4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1d90 ["INT_ADD", "register:40f0:8", ["const:be1d90:8", "const:4:8"]]
+ 00be1d90 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1d00 ["INT_ADD", "register:40f0:8", ["const:be1d00:8", "const:4:8"]]
- 00be1d00 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1d9c ["INT_ADD", "register:40f0:8", ["const:be1d9c:8", "const:4:8"]]
+ 00be1d9c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-5377c9a6fb1ee08d996d790cec5e3e5d"></a>

### [`00be1d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1d58.md) → [`00be1df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1df4.md) _ZNK8firebase4auth4User27UpdateUserProfileLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1d78 ["INT_ADD", "register:40f0:8", ["const:be1d78:8", "const:4:8"]]
- 00be1d78 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1e14 ["INT_ADD", "register:40f0:8", ["const:be1e14:8", "const:4:8"]]
+ 00be1e14 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1d84 ["INT_ADD", "register:40f0:8", ["const:be1d84:8", "const:4:8"]]
- 00be1d84 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1e20 ["INT_ADD", "register:40f0:8", ["const:be1e20:8", "const:4:8"]]
+ 00be1e20 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1d90 ["INT_ADD", "register:40f0:8", ["const:be1d90:8", "const:4:8"]]
- 00be1d90 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1e2c ["INT_ADD", "register:40f0:8", ["const:be1e2c:8", "const:4:8"]]
+ 00be1e2c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-580f7a804705319a4f33ba29216a640d"></a>

### [`00be1de8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1de8.md) → [`00be1e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1e84.md) _ZNK8firebase4auth4User16ReloadLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1e08 ["INT_ADD", "register:40f0:8", ["const:be1e08:8", "const:4:8"]]
- 00be1e08 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1ea4 ["INT_ADD", "register:40f0:8", ["const:be1ea4:8", "const:4:8"]]
+ 00be1ea4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1e14 ["INT_ADD", "register:40f0:8", ["const:be1e14:8", "const:4:8"]]
- 00be1e14 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1eb0 ["INT_ADD", "register:40f0:8", ["const:be1eb0:8", "const:4:8"]]
+ 00be1eb0 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1e20 ["INT_ADD", "register:40f0:8", ["const:be1e20:8", "const:4:8"]]
- 00be1e20 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1ebc ["INT_ADD", "register:40f0:8", ["const:be1ebc:8", "const:4:8"]]
+ 00be1ebc ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-1376e4e997d3c9c12be21f87839d6c64"></a>

### [`00be1e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1e78.md) → [`00be1f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1f14.md) _ZNK8firebase4auth4User16DeleteLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1e98 ["INT_ADD", "register:40f0:8", ["const:be1e98:8", "const:4:8"]]
- 00be1e98 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1f34 ["INT_ADD", "register:40f0:8", ["const:be1f34:8", "const:4:8"]]
+ 00be1f34 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1ea4 ["INT_ADD", "register:40f0:8", ["const:be1ea4:8", "const:4:8"]]
- 00be1ea4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1f40 ["INT_ADD", "register:40f0:8", ["const:be1f40:8", "const:4:8"]]
+ 00be1f40 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1eb0 ["INT_ADD", "register:40f0:8", ["const:be1eb0:8", "const:4:8"]]
- 00be1eb0 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1f4c ["INT_ADD", "register:40f0:8", ["const:be1f4c:8", "const:4:8"]]
+ 00be1f4c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-5d773bd35be4abbc640f01bb8a0e9cb3"></a>

### [`00be1f08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1f08.md) → [`00be1fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1fa4.md) _ZNK8firebase4auth4User37UpdatePhoneNumberCredentialLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1f28 ["INT_ADD", "register:40f0:8", ["const:be1f28:8", "const:4:8"]]
- 00be1f28 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1fc4 ["INT_ADD", "register:40f0:8", ["const:be1fc4:8", "const:4:8"]]
+ 00be1fc4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1f34 ["INT_ADD", "register:40f0:8", ["const:be1f34:8", "const:4:8"]]
- 00be1f34 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00be1fd0 ["INT_ADD", "register:40f0:8", ["const:be1fd0:8", "const:4:8"]]
+ 00be1fd0 ["CALL", null, ["callee:00c5aae0:8"]]
- 00be1f40 ["INT_ADD", "register:40f0:8", ["const:be1f40:8", "const:4:8"]]
- 00be1f40 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be1fdc ["INT_ADD", "register:40f0:8", ["const:be1fdc:8", "const:4:8"]]
+ 00be1fdc ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-92cb954d85466b6e191caf30d359ae89"></a>

### [`00be1f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1f98.md) → [`00be2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be2/00be2034.md) _ZN8firebase4auth4User18GetTokenThreadSafeEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0087b3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b3bc.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aa70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa70.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1fc8 ["INT_ADD", "register:40f0:8", ["const:be1fc8:8", "const:4:8"]]
- 00be1fc8 ["CALL", null, ["callee:00c5ab40:8"]]
+ 00be2064 ["INT_ADD", "register:40f0:8", ["const:be2064:8", "const:4:8"]]
+ 00be2064 ["CALL", null, ["callee:00c5ab40:8"]]
- 00be1fd0 ["INT_ADD", "register:40f0:8", ["const:be1fd0:8", "const:4:8"]]
- 00be1fd0 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be206c ["INT_ADD", "register:40f0:8", ["const:be206c:8", "const:4:8"]]
+ 00be206c ["CALL", null, ["callee:00c5aad0:8"]]
- 00be1fec ["COPY", "register:0:8", ["register:4040:8"]]
- 00be1fec ["INT_ADD", "register:40f0:8", ["const:be1fec:8", "const:4:8"]]
- 00be1fec ["CALLIND", null, ["register:0:8"]]
+ 00be2088 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00be2088 ["INT_ADD", "register:40f0:8", ["const:be2088:8", "const:4:8"]]
+ 00be2088 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-96f8774668116ebd1c133b009aecda4f"></a>

### [`00be21e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be2/00be21e0.md) → [`00be227c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be2/00be227c.md) _ZN8firebase4auth17UserInfoInterfaceD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5db80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be21f0 ["INT_ADD", "register:40f0:8", ["const:be21f0:8", "const:4:8"]]
- 00be21f0 ["CALL", null, ["callee:00c5dc50:8"]]
+ 00be228c ["INT_ADD", "register:40f0:8", ["const:be228c:8", "const:4:8"]]
+ 00be228c ["CALL", null, ["callee:00c5dc50:8"]]
~~~


<a id="compare-cbd6314470cfb6e1a8d13edd2fc0a947"></a>

### [`00be30b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be30b4.md) → [`00be3150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3150.md) FUN_00be3150

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be3098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be3098.md) [`00be30b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be30b4.md) · 呼出先 4件 [`00be30b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be30b4.md) [`00be9dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be9/00be9dc8.md) [`00bea088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bea/00bea088.md) [`00bea1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bea/00bea1b0.md)
- 新版 呼出元 2件 [`00be3134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3134.md) [`00be3150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3150.md) · 呼出先 4件 [`00be3150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3150.md) [`00be9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be9/00be9e64.md) [`00bea124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00bea124.md) [`00bea24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00bea24c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be3440 ["INT_ADD", "register:40f0:8", ["const:be3440:8", "const:4:8"]]
- 00be3440 ["CALL", null, ["callee:00be9e64:8"]]
+ 00be34dc ["INT_ADD", "register:40f0:8", ["const:be34dc:8", "const:4:8"]]
+ 00be34dc ["CALL", null, ["callee:00be9e64:8"]]
- 00be3454 ["INT_ADD", "register:40f0:8", ["const:be3454:8", "const:4:8"]]
- 00be3454 ["CALL", null, ["callee:00be9e64:8"]]
+ 00be34f0 ["INT_ADD", "register:40f0:8", ["const:be34f0:8", "const:4:8"]]
+ 00be34f0 ["CALL", null, ["callee:00be9e64:8"]]
- 00be3470 ["INT_ADD", "register:40f0:8", ["const:be3470:8", "const:4:8"]]
- 00be3470 ["CALL", null, ["local:b0:8"]]
+ 00be350c ["INT_ADD", "register:40f0:8", ["const:be350c:8", "const:4:8"]]
+ 00be350c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-efee92a234adb62194f83ea3a129c290"></a>

### [`00be3f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be3f20.md) → [`00be3fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3fbc.md) FUN_00be3fbc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be3f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be3f00.md) [`00be3f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be3f20.md) · 呼出先 4件 [`00be3f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be3f20.md) [`00beab80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bea/00beab80.md) [`00beae40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bea/00beae40.md) [`00beaf68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bea/00beaf68.md)
- 新版 呼出元 2件 [`00be3f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3f9c.md) [`00be3fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3fbc.md) · 呼出先 4件 [`00be3fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3fbc.md) [`00beac1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00beac1c.md) [`00beaedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00beaedc.md) [`00beb004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb004.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be42b0 ["INT_ADD", "register:40f0:8", ["const:be42b0:8", "const:4:8"]]
- 00be42b0 ["CALL", null, ["callee:00beac1c:8"]]
+ 00be434c ["INT_ADD", "register:40f0:8", ["const:be434c:8", "const:4:8"]]
+ 00be434c ["CALL", null, ["callee:00beac1c:8"]]
- 00be42c4 ["INT_ADD", "register:40f0:8", ["const:be42c4:8", "const:4:8"]]
- 00be42c4 ["CALL", null, ["callee:00beac1c:8"]]
+ 00be4360 ["INT_ADD", "register:40f0:8", ["const:be4360:8", "const:4:8"]]
+ 00be4360 ["CALL", null, ["callee:00beac1c:8"]]
- 00be42e0 ["INT_ADD", "register:40f0:8", ["const:be42e0:8", "const:4:8"]]
- 00be42e0 ["CALL", null, ["local:b0:8"]]
+ 00be437c ["INT_ADD", "register:40f0:8", ["const:be437c:8", "const:4:8"]]
+ 00be437c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-4678f55a7ccb1d875f2a4d3cd603b8af"></a>

### [`00be465c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be465c.md) → [`00be46f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46f8.md) FUN_00be46f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be463c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be463c.md) [`00be465c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be465c.md) · 呼出先 4件 [`00be465c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be465c.md) [`00beb264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00beb264.md) [`00beb524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00beb524.md) [`00beb64c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00beb64c.md)
- 新版 呼出元 2件 [`00be46d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46d8.md) [`00be46f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46f8.md) · 呼出先 4件 [`00be46f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46f8.md) [`00beb300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb300.md) [`00beb5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb5c0.md) [`00beb6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb6e8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be49ec ["INT_ADD", "register:40f0:8", ["const:be49ec:8", "const:4:8"]]
- 00be49ec ["CALL", null, ["callee:00beb300:8"]]
+ 00be4a88 ["INT_ADD", "register:40f0:8", ["const:be4a88:8", "const:4:8"]]
+ 00be4a88 ["CALL", null, ["callee:00beb300:8"]]
- 00be4a00 ["INT_ADD", "register:40f0:8", ["const:be4a00:8", "const:4:8"]]
- 00be4a00 ["CALL", null, ["callee:00beb300:8"]]
+ 00be4a9c ["INT_ADD", "register:40f0:8", ["const:be4a9c:8", "const:4:8"]]
+ 00be4a9c ["CALL", null, ["callee:00beb300:8"]]
- 00be4a1c ["INT_ADD", "register:40f0:8", ["const:be4a1c:8", "const:4:8"]]
- 00be4a1c ["CALL", null, ["local:b0:8"]]
+ 00be4ab8 ["INT_ADD", "register:40f0:8", ["const:be4ab8:8", "const:4:8"]]
+ 00be4ab8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-229a5dcc7ee58e26400a973d95a51fb5"></a>

### [`00be4d98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be4d98.md) → [`00be4e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e34.md) FUN_00be4e34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be4d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be4d78.md) [`00be4d98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be4d98.md) · 呼出先 4件 [`00be4d98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be4d98.md) [`00beb948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00beb948.md) [`00bebbe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00bebbe8.md) [`00bebd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00bebd10.md)
- 新版 呼出元 2件 [`00be4e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e14.md) [`00be4e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e34.md) · 呼出先 4件 [`00be4e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e34.md) [`00beb9e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb9e4.md) [`00bebc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00bebc84.md) [`00bebdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00bebdac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be5128 ["INT_ADD", "register:40f0:8", ["const:be5128:8", "const:4:8"]]
- 00be5128 ["CALL", null, ["callee:00beb9e4:8"]]
+ 00be51c4 ["INT_ADD", "register:40f0:8", ["const:be51c4:8", "const:4:8"]]
+ 00be51c4 ["CALL", null, ["callee:00beb9e4:8"]]
- 00be513c ["INT_ADD", "register:40f0:8", ["const:be513c:8", "const:4:8"]]
- 00be513c ["CALL", null, ["callee:00beb9e4:8"]]
+ 00be51d8 ["INT_ADD", "register:40f0:8", ["const:be51d8:8", "const:4:8"]]
+ 00be51d8 ["CALL", null, ["callee:00beb9e4:8"]]
- 00be5158 ["INT_ADD", "register:40f0:8", ["const:be5158:8", "const:4:8"]]
- 00be5158 ["CALL", null, ["local:b0:8"]]
+ 00be51f4 ["INT_ADD", "register:40f0:8", ["const:be51f4:8", "const:4:8"]]
+ 00be51f4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-0087a866dfa2e681ed56e4bde0acc053"></a>

### [`00be7828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7828.md) → [`00be78c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78c4.md) FUN_00be78c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be7808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7808.md) [`00be7828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7828.md) · 呼出先 4件 [`00be7828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7828.md) [`00bee1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00bee1e0.md) [`00bee480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00bee480.md) [`00bee5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00bee5a8.md)
- 新版 呼出元 2件 [`00be78a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78a4.md) [`00be78c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78c4.md) · 呼出先 4件 [`00be78c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78c4.md) [`00bee27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee27c.md) [`00bee51c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee51c.md) [`00bee644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee644.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be7bb8 ["INT_ADD", "register:40f0:8", ["const:be7bb8:8", "const:4:8"]]
- 00be7bb8 ["CALL", null, ["callee:00bee27c:8"]]
+ 00be7c54 ["INT_ADD", "register:40f0:8", ["const:be7c54:8", "const:4:8"]]
+ 00be7c54 ["CALL", null, ["callee:00bee27c:8"]]
- 00be7bcc ["INT_ADD", "register:40f0:8", ["const:be7bcc:8", "const:4:8"]]
- 00be7bcc ["CALL", null, ["callee:00bee27c:8"]]
+ 00be7c68 ["INT_ADD", "register:40f0:8", ["const:be7c68:8", "const:4:8"]]
+ 00be7c68 ["CALL", null, ["callee:00bee27c:8"]]
- 00be7be8 ["INT_ADD", "register:40f0:8", ["const:be7be8:8", "const:4:8"]]
- 00be7be8 ["CALL", null, ["local:b0:8"]]
+ 00be7c84 ["INT_ADD", "register:40f0:8", ["const:be7c84:8", "const:4:8"]]
+ 00be7c84 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-fe844ac5df1c0116afd21e34a7726db9"></a>

### [`00be7f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7f40.md) → [`00be7fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fdc.md) FUN_00be7fdc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be7f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7f20.md) [`00be7f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7f40.md) · 呼出先 4件 [`00be7f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7f40.md) [`00bee880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00bee880.md) [`00beeb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00beeb20.md) [`00beec48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00beec48.md)
- 新版 呼出元 2件 [`00be7fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fbc.md) [`00be7fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fdc.md) · 呼出先 4件 [`00be7fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fdc.md) [`00bee91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee91c.md) [`00beebbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beebbc.md) [`00beece4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beece4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be82d0 ["INT_ADD", "register:40f0:8", ["const:be82d0:8", "const:4:8"]]
- 00be82d0 ["CALL", null, ["callee:00bee91c:8"]]
+ 00be836c ["INT_ADD", "register:40f0:8", ["const:be836c:8", "const:4:8"]]
+ 00be836c ["CALL", null, ["callee:00bee91c:8"]]
- 00be82e4 ["INT_ADD", "register:40f0:8", ["const:be82e4:8", "const:4:8"]]
- 00be82e4 ["CALL", null, ["callee:00bee91c:8"]]
+ 00be8380 ["INT_ADD", "register:40f0:8", ["const:be8380:8", "const:4:8"]]
+ 00be8380 ["CALL", null, ["callee:00bee91c:8"]]
- 00be8300 ["INT_ADD", "register:40f0:8", ["const:be8300:8", "const:4:8"]]
- 00be8300 ["CALL", null, ["local:b0:8"]]
+ 00be839c ["INT_ADD", "register:40f0:8", ["const:be839c:8", "const:4:8"]]
+ 00be839c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-1437bc7a81584ca8a5b0cc86d0ef1f42"></a>

### [`00be8658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be8/00be8658.md) → [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) FUN_00be86f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be8638`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be8/00be8638.md) [`00be8658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be8/00be8658.md) · 呼出先 5件 [`00be8658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be8/00be8658.md) [`00beef20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00beef20.md) [`00bef33c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00bef33c.md) [`00bef594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00bef594.md) [`00c533c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c533c8.md)
- 新版 呼出元 2件 [`00be86d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86d4.md) [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) · 呼出先 5件 [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) [`00beefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beefbc.md) [`00bef3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef3d8.md) [`00bef630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef630.md) [`00c53464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53464.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be86fc ["INT_ADD", "register:40f0:8", ["const:be86fc:8", "const:4:8"]]
- 00be86fc ["CALL", null, ["callee:00c53464:8"]]
+ 00be8798 ["INT_ADD", "register:40f0:8", ["const:be8798:8", "const:4:8"]]
+ 00be8798 ["CALL", null, ["callee:00c53464:8"]]
- 00be8708 ["INT_ADD", "register:40f0:8", ["const:be8708:8", "const:4:8"]]
- 00be8708 ["CALL", null, ["callee:00c53464:8"]]
+ 00be87a4 ["INT_ADD", "register:40f0:8", ["const:be87a4:8", "const:4:8"]]
+ 00be87a4 ["CALL", null, ["callee:00c53464:8"]]
- 00be872c ["INT_ADD", "register:40f0:8", ["const:be872c:8", "const:4:8"]]
- 00be872c ["CALL", null, ["callee:00c53464:8"]]
+ 00be87c8 ["INT_ADD", "register:40f0:8", ["const:be87c8:8", "const:4:8"]]
+ 00be87c8 ["CALL", null, ["callee:00c53464:8"]]
~~~


<a id="compare-5a780362c0646513ce57bfd2d864b687"></a>

### [`00be9dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be9/00be9dc8.md) → [`00be9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be9/00be9e64.md) FUN_00be9e64

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be30b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be30b4.md) · 呼出先 1件 [`00bea088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bea/00bea088.md)
- 新版 呼出元 1件 [`00be3150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3150.md) · 呼出先 1件 [`00bea124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00bea124.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be9e2c ["INT_ADD", "register:40f0:8", ["const:be9e2c:8", "const:4:8"]]
- 00be9e2c ["CALL", null, ["callee:00bea124:8"]]
+ 00be9ec8 ["INT_ADD", "register:40f0:8", ["const:be9ec8:8", "const:4:8"]]
+ 00be9ec8 ["CALL", null, ["callee:00bea124:8"]]
~~~


<a id="compare-a7bd61eda4a527137c6fae770b675a27"></a>

### [`00beab80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bea/00beab80.md) → [`00beac1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00beac1c.md) FUN_00beac1c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be3f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be3/00be3f20.md) · 呼出先 1件 [`00beae40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bea/00beae40.md)
- 新版 呼出元 1件 [`00be3fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3fbc.md) · 呼出先 1件 [`00beaedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00beaedc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00beabe8 ["INT_ADD", "register:40f0:8", ["const:beabe8:8", "const:4:8"]]
- 00beabe8 ["CALL", null, ["callee:00beaedc:8"]]
+ 00beac84 ["INT_ADD", "register:40f0:8", ["const:beac84:8", "const:4:8"]]
+ 00beac84 ["CALL", null, ["callee:00beaedc:8"]]
~~~


<a id="compare-4bf5521d6f15a8a6a10e934fd39f50e7"></a>

### [`00beb264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00beb264.md) → [`00beb300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb300.md) FUN_00beb300

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be465c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be465c.md) · 呼出先 1件 [`00beb524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00beb524.md)
- 新版 呼出元 1件 [`00be46f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46f8.md) · 呼出先 1件 [`00beb5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb5c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00beb2cc ["INT_ADD", "register:40f0:8", ["const:beb2cc:8", "const:4:8"]]
- 00beb2cc ["CALL", null, ["callee:00beb5c0:8"]]
+ 00beb368 ["INT_ADD", "register:40f0:8", ["const:beb368:8", "const:4:8"]]
+ 00beb368 ["CALL", null, ["callee:00beb5c0:8"]]
~~~


<a id="compare-bf9c061d2c556fdfc375155418e18ac8"></a>

### [`00beb948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00beb948.md) → [`00beb9e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb9e4.md) FUN_00beb9e4

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be4d98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be4/00be4d98.md) · 呼出先 1件 [`00bebbe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00beb/00bebbe8.md)
- 新版 呼出元 1件 [`00be4e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e34.md) · 呼出先 1件 [`00bebc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00bebc84.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00beb9b0 ["INT_ADD", "register:40f0:8", ["const:beb9b0:8", "const:4:8"]]
- 00beb9b0 ["CALL", null, ["callee:00bebc84:8"]]
+ 00beba4c ["INT_ADD", "register:40f0:8", ["const:beba4c:8", "const:4:8"]]
+ 00beba4c ["CALL", null, ["callee:00bebc84:8"]]
~~~


<a id="compare-af321f2879e83f5ec414e11ebc14e645"></a>

### [`00bee1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00bee1e0.md) → [`00bee27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee27c.md) FUN_00bee27c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be7828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7828.md) · 呼出先 1件 [`00bee480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00bee480.md)
- 新版 呼出元 1件 [`00be78c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78c4.md) · 呼出先 1件 [`00bee51c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee51c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bee248 ["INT_ADD", "register:40f0:8", ["const:bee248:8", "const:4:8"]]
- 00bee248 ["CALL", null, ["callee:00bee51c:8"]]
+ 00bee2e4 ["INT_ADD", "register:40f0:8", ["const:bee2e4:8", "const:4:8"]]
+ 00bee2e4 ["CALL", null, ["callee:00bee51c:8"]]
~~~


<a id="compare-d483b0f187563d63577ea7a57f3069b1"></a>

### [`00bee880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00bee880.md) → [`00bee91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee91c.md) FUN_00bee91c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be7f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be7/00be7f40.md) · 呼出先 1件 [`00beeb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00beeb20.md)
- 新版 呼出元 1件 [`00be7fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fdc.md) · 呼出先 1件 [`00beebbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beebbc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bee8e8 ["INT_ADD", "register:40f0:8", ["const:bee8e8:8", "const:4:8"]]
- 00bee8e8 ["CALL", null, ["callee:00beebbc:8"]]
+ 00bee984 ["INT_ADD", "register:40f0:8", ["const:bee984:8", "const:4:8"]]
+ 00bee984 ["CALL", null, ["callee:00beebbc:8"]]
~~~


<a id="compare-90d3fd7760b63ddb696647b22258fc13"></a>

### [`00beef20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00beef20.md) → [`00beefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beefbc.md) FUN_00beefbc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be8658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be8/00be8658.md) · 呼出先 2件 [`00bef33c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00bef33c.md) [`00c533c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c533c8.md)
- 新版 呼出元 1件 [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) · 呼出先 2件 [`00bef3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef3d8.md) [`00c53464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53464.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00beef70 ["INT_ADD", "register:40f0:8", ["const:beef70:8", "const:4:8"]]
- 00beef70 ["CALL", null, ["callee:00c53464:8"]]
+ 00bef00c ["INT_ADD", "register:40f0:8", ["const:bef00c:8", "const:4:8"]]
+ 00bef00c ["CALL", null, ["callee:00c53464:8"]]
- 00beefbc ["INT_ADD", "register:40f0:8", ["const:beefbc:8", "const:4:8"]]
- 00beefbc ["CALL", null, ["callee:00bef3d8:8"]]
+ 00bef058 ["INT_ADD", "register:40f0:8", ["const:bef058:8", "const:4:8"]]
+ 00bef058 ["CALL", null, ["callee:00bef3d8:8"]]
- 00beefd8 ["INT_ADD", "register:40f0:8", ["const:beefd8:8", "const:4:8"]]
- 00beefd8 ["CALL", null, ["callee:00c53464:8"]]
+ 00bef074 ["INT_ADD", "register:40f0:8", ["const:bef074:8", "const:4:8"]]
+ 00bef074 ["CALL", null, ["callee:00c53464:8"]]
~~~


<a id="compare-f1ffe3b54a0e8761e837327833cf49fc"></a>

### [`00bef33c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00bef33c.md) → [`00bef3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef3d8.md) FUN_00bef3d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be8658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be8/00be8658.md) [`00beef20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bee/00beef20.md) · 呼出先 1件 [`00c533c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c533c8.md)
- 新版 呼出元 2件 [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) [`00beefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beefbc.md) · 呼出先 1件 [`00c53464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53464.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bef384 ["INT_ADD", "register:40f0:8", ["const:bef384:8", "const:4:8"]]
- 00bef384 ["CALL", null, ["callee:00c53464:8"]]
+ 00bef420 ["INT_ADD", "register:40f0:8", ["const:bef420:8", "const:4:8"]]
+ 00bef420 ["CALL", null, ["callee:00c53464:8"]]
- 00bef394 ["INT_ADD", "register:40f0:8", ["const:bef394:8", "const:4:8"]]
- 00bef394 ["CALL", null, ["callee:00c53464:8"]]
+ 00bef430 ["INT_ADD", "register:40f0:8", ["const:bef430:8", "const:4:8"]]
+ 00bef430 ["CALL", null, ["callee:00c53464:8"]]
- 00bef3b4 ["INT_ADD", "register:40f0:8", ["const:bef3b4:8", "const:4:8"]]
- 00bef3b4 ["CALL", null, ["callee:00c53464:8"]]
+ 00bef450 ["INT_ADD", "register:40f0:8", ["const:bef450:8", "const:4:8"]]
+ 00bef450 ["CALL", null, ["callee:00c53464:8"]]
~~~


<a id="compare-28e58a19f428d8aedfd20821330ddf7b"></a>

### [`00bef594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00bef594.md) → [`00bef630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef630.md) FUN_00bef630

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be8658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be8/00be8658.md) · 呼出先 1件 [`00c533c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c533c8.md)
- 新版 呼出元 1件 [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) · 呼出先 1件 [`00c53464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53464.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bef634 ["INT_ADD", "register:40f0:8", ["const:bef634:8", "const:4:8"]]
- 00bef634 ["CALL", null, ["callee:00c53464:8"]]
+ 00bef6d0 ["INT_ADD", "register:40f0:8", ["const:bef6d0:8", "const:4:8"]]
+ 00bef6d0 ["CALL", null, ["callee:00c53464:8"]]
- 00bef658 ["INT_ADD", "register:40f0:8", ["const:bef658:8", "const:4:8"]]
- 00bef658 ["CALL", null, ["callee:00c53464:8"]]
+ 00bef6f4 ["INT_ADD", "register:40f0:8", ["const:bef6f4:8", "const:4:8"]]
+ 00bef6f4 ["CALL", null, ["callee:00c53464:8"]]
- 00bef674 ["INT_ADD", "register:40f0:8", ["const:bef674:8", "const:4:8"]]
- 00bef674 ["CALL", null, ["callee:00c53464:8"]]
+ 00bef710 ["INT_ADD", "register:40f0:8", ["const:bef710:8", "const:4:8"]]
+ 00bef710 ["CALL", null, ["callee:00c53464:8"]]
~~~


<a id="compare-ce92a923dbf54a3923ef26c7e1f04239"></a>

### [`00befa60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befa60.md) → [`00befafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befafc.md) _ZSt18uncaught_exceptionv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0f0.md) · 呼出先 1件 [`00c5df00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df00.md)
- 新版 呼出元 1件 [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md) · 呼出先 1件 [`00c5dfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befa6c ["INT_ADD", "register:40f0:8", ["const:befa6c:8", "const:4:8"]]
- 00befa6c ["CALL", null, ["callee:00c5dfd0:8"]]
+ 00befb08 ["INT_ADD", "register:40f0:8", ["const:befb08:8", "const:4:8"]]
+ 00befb08 ["CALL", null, ["callee:00c5dfd0:8"]]
~~~


<a id="compare-263d816a7f0177b15b6e1057f9e24e27"></a>

### [`00befab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befab0.md) → [`00befb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befb4c.md) _ZNSt13exception_ptraSERKS_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5df30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df30.md) · 呼出先 2件 [`00c5df10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df10.md) [`00c5df20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df20.md)
- 新版 呼出元 1件 [`00c5e000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e000.md) · 呼出先 2件 [`00c5dfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfe0.md) [`00c5dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dff0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befad8 ["INT_ADD", "register:40f0:8", ["const:befad8:8", "const:4:8"]]
- 00befad8 ["CALL", null, ["callee:00c5dff0:8"]]
+ 00befb74 ["INT_ADD", "register:40f0:8", ["const:befb74:8", "const:4:8"]]
+ 00befb74 ["CALL", null, ["callee:00c5dff0:8"]]
- 00befae0 ["INT_ADD", "register:40f0:8", ["const:befae0:8", "const:4:8"]]
- 00befae0 ["CALL", null, ["callee:00c5dfe0:8"]]
+ 00befb7c ["INT_ADD", "register:40f0:8", ["const:befb7c:8", "const:4:8"]]
+ 00befb7c ["CALL", null, ["callee:00c5dfe0:8"]]
~~~


<a id="compare-fc5f5b7da94b026f94334df4c324ffc8"></a>

### [`00befb48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befb48.md) → [`00befbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befbe4.md) _ZSt17current_exceptionv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58560.md) · 呼出先 1件 [`00c5df40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df40.md)
- 新版 呼出元 1件 [`00c58630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58630.md) · 呼出先 1件 [`00c5e010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befb5c ["INT_ADD", "register:40f0:8", ["const:befb5c:8", "const:4:8"]]
- 00befb5c ["CALL", null, ["callee:00c5e010:8"]]
+ 00befbf8 ["INT_ADD", "register:40f0:8", ["const:befbf8:8", "const:4:8"]]
+ 00befbf8 ["CALL", null, ["callee:00c5e010:8"]]
~~~


<a id="compare-18a9c3fdfdf55644b0aeb380da6ea642"></a>

### [`00befb8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befb8c.md) → [`00befc28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befc28.md) _ZNSt16nested_exceptionD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5df50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e020.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befba0 ["INT_ADD", "register:40f0:8", ["const:befba0:8", "const:4:8"]]
- 00befba0 ["CALL", null, ["callee:00c5e020:8"]]
+ 00befc3c ["INT_ADD", "register:40f0:8", ["const:befc3c:8", "const:4:8"]]
+ 00befc3c ["CALL", null, ["callee:00c5e020:8"]]
~~~


<a id="compare-2f8cc74a56811c539f79cf0da0a33b18"></a>

### [`00befbb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befbb8.md) → [`00befc54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befc54.md) _ZNKSt16nested_exception14rethrow_nestedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c582f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c584b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584b0.md) [`00c584c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584c0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58580.md) [`00c58590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58590.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befbdc ["INT_ADD", "register:40f0:8", ["const:befbdc:8", "const:4:8"]]
- 00befbdc ["CALL", null, ["callee:00c583c0:8"]]
+ 00befc78 ["INT_ADD", "register:40f0:8", ["const:befc78:8", "const:4:8"]]
+ 00befc78 ["CALL", null, ["callee:00c583c0:8"]]
- 00befbe4 ["INT_ADD", "register:40f0:8", ["const:befbe4:8", "const:4:8"]]
- 00befbe4 ["CALL", null, ["callee:00c580f0:8"]]
+ 00befc80 ["INT_ADD", "register:40f0:8", ["const:befc80:8", "const:4:8"]]
+ 00befc80 ["CALL", null, ["callee:00c580f0:8"]]
- 00befbf0 ["INT_ADD", "register:40f0:8", ["const:befbf0:8", "const:4:8"]]
- 00befbf0 ["CALL", null, ["callee:00c58580:8"]]
+ 00befc8c ["INT_ADD", "register:40f0:8", ["const:befc8c:8", "const:4:8"]]
+ 00befc8c ["CALL", null, ["callee:00c58580:8"]]
~~~


<a id="compare-3320b15c656edb1728bb7306dab10a74"></a>

### [`00befc10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befc10.md) → [`00befcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befcac.md) _ZSt17rethrow_exceptionSt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c584c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584c0.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5df60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df60.md)
- 新版 呼出元 1件 [`00c58590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58590.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5e030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befc20 ["INT_ADD", "register:40f0:8", ["const:befc20:8", "const:4:8"]]
- 00befc20 ["CALL", null, ["callee:00c5e030:8"]]
+ 00befcbc ["INT_ADD", "register:40f0:8", ["const:befcbc:8", "const:4:8"]]
+ 00befcbc ["CALL", null, ["callee:00c5e030:8"]]
- 00befc24 ["INT_ADD", "register:40f0:8", ["const:befc24:8", "const:4:8"]]
- 00befc24 ["CALL", null, ["callee:00c580f0:8"]]
+ 00befcc0 ["INT_ADD", "register:40f0:8", ["const:befcc0:8", "const:4:8"]]
+ 00befcc0 ["CALL", null, ["callee:00c580f0:8"]]
~~~


<a id="compare-2c5ac091289483768fd9bb80ad2b5db7"></a>

### [`00bf03dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf03dc.md) → [`00bf0478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0478.md) _ZNSt6__ndk112bad_weak_ptrD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a790.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a860.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf03f0 ["INT_ADD", "register:40f0:8", ["const:bf03f0:8", "const:4:8"]]
- 00bf03f0 ["CALL", null, ["callee:00c5a860:8"]]
+ 00bf048c ["INT_ADD", "register:40f0:8", ["const:bf048c:8", "const:4:8"]]
+ 00bf048c ["CALL", null, ["callee:00c5a860:8"]]
~~~


<a id="compare-285cfca73d34816ce78aeb5ac7c14f6d"></a>

### [`00bf0430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0430.md) → [`00bf04cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf04cc.md) _ZNSt6__ndk114__shared_count12__add_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0444 ["INT_ADD", "register:40f0:8", ["const:bf0444:8", "const:4:8"]]
- 00bf0444 ["CALL", null, ["callee:00c53d70:8"]]
+ 00bf04e0 ["INT_ADD", "register:40f0:8", ["const:bf04e0:8", "const:4:8"]]
+ 00bf04e0 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-c886ad05ed28d64d4999a0601463050a"></a>

### [`00bf0454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0454.md) → [`00bf04f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf04f0.md) _ZNSt6__ndk114__shared_count16__release_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0470 ["INT_ADD", "register:40f0:8", ["const:bf0470:8", "const:4:8"]]
- 00bf0470 ["CALL", null, ["callee:00c53da0:8"]]
+ 00bf050c ["INT_ADD", "register:40f0:8", ["const:bf050c:8", "const:4:8"]]
+ 00bf050c ["CALL", null, ["callee:00c53da0:8"]]
- 00bf0488 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bf0488 ["INT_ADD", "register:40f0:8", ["const:bf0488:8", "const:4:8"]]
- 00bf0488 ["CALLIND", null, ["register:0:8"]]
+ 00bf0524 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bf0524 ["INT_ADD", "register:40f0:8", ["const:bf0524:8", "const:4:8"]]
+ 00bf0524 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d6ce76980ce9eb7b4b52904cade3b2be"></a>

### [`00bf04a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf04a4.md) → [`00bf0540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0540.md) _ZNSt6__ndk119__shared_weak_count12__add_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf04b8 ["INT_ADD", "register:40f0:8", ["const:bf04b8:8", "const:4:8"]]
- 00bf04b8 ["CALL", null, ["callee:00c53d70:8"]]
+ 00bf0554 ["INT_ADD", "register:40f0:8", ["const:bf0554:8", "const:4:8"]]
+ 00bf0554 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-97b0c3625a7bb9ecfc5875d6a01e491a"></a>

### [`00bf04c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf04c8.md) → [`00bf0564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0564.md) _ZNSt6__ndk119__shared_weak_count10__add_weakEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf04dc ["INT_ADD", "register:40f0:8", ["const:bf04dc:8", "const:4:8"]]
- 00bf04dc ["CALL", null, ["callee:00c53d70:8"]]
+ 00bf0578 ["INT_ADD", "register:40f0:8", ["const:bf0578:8", "const:4:8"]]
+ 00bf0578 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-2c7ff1380e92dd8429c07b5ab420eb50"></a>

### [`00bf04ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf04ec.md) → [`00bf0588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0588.md) _ZNSt6__ndk119__shared_weak_count16__release_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0508 ["INT_ADD", "register:40f0:8", ["const:bf0508:8", "const:4:8"]]
- 00bf0508 ["CALL", null, ["callee:00c53da0:8"]]
+ 00bf05a4 ["INT_ADD", "register:40f0:8", ["const:bf05a4:8", "const:4:8"]]
+ 00bf05a4 ["CALL", null, ["callee:00c53da0:8"]]
- 00bf0530 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bf0530 ["INT_ADD", "register:40f0:8", ["const:bf0530:8", "const:4:8"]]
- 00bf0530 ["CALLIND", null, ["register:0:8"]]
+ 00bf05cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bf05cc ["INT_ADD", "register:40f0:8", ["const:bf05cc:8", "const:4:8"]]
+ 00bf05cc ["CALLIND", null, ["register:0:8"]]
- 00bf0544 ["INT_ADD", "register:40f0:8", ["const:bf0544:8", "const:4:8"]]
- 00bf0544 ["CALL", null, ["callee:00c53da0:8"]]
+ 00bf05e0 ["INT_ADD", "register:40f0:8", ["const:bf05e0:8", "const:4:8"]]
+ 00bf05e0 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-c51761d8d268d52d383e7d8b2c7eb3a8"></a>

### [`00bf0568`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0568.md) → [`00bf0604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0604.md) _ZNSt6__ndk119__shared_weak_count14__release_weakEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) · 呼出先 1件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf058c ["INT_ADD", "register:40f0:8", ["const:bf058c:8", "const:4:8"]]
- 00bf058c ["CALL", null, ["callee:00c53da0:8"]]
+ 00bf0628 ["INT_ADD", "register:40f0:8", ["const:bf0628:8", "const:4:8"]]
+ 00bf0628 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-23835a5b990ebf4c99ee008a836b298a"></a>

### [`00bf05c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf05c0.md) → [`00bf065c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf065c.md) _ZNSt6__ndk119__shared_weak_count4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c584f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584f0.md) · 呼出先 1件 [`00c53c00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53c00.md)
- 新版 呼出元 1件 [`00c585c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585c0.md) · 呼出先 1件 [`00c53ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ca0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf05f0 ["INT_ADD", "register:40f0:8", ["const:bf05f0:8", "const:4:8"]]
- 00bf05f0 ["CALL", null, ["callee:00c53ca0:8"]]
+ 00bf068c ["INT_ADD", "register:40f0:8", ["const:bf068c:8", "const:4:8"]]
+ 00bf068c ["CALL", null, ["callee:00c53ca0:8"]]
~~~


<a id="compare-9e4d0d6f76614c9a6da95841662fea3b"></a>

### [`00bf062c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf062c.md) → [`00bf06c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf06c8.md) _ZNSt6__ndk18__sp_mut4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf063c ["INT_ADD", "register:40f0:8", ["const:bf063c:8", "const:4:8"]]
- 00bf063c ["CALL", null, ["callee:00c5b770:8"]]
+ 00bf06d8 ["INT_ADD", "register:40f0:8", ["const:bf06d8:8", "const:4:8"]]
+ 00bf06d8 ["CALL", null, ["callee:00c5b770:8"]]
~~~


<a id="compare-8733a4b0204fd2a041826354712b1f4c"></a>

### [`00bf0650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0650.md) → [`00bf06ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf06ec.md) _ZNSt6__ndk18__sp_mut6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0660 ["INT_ADD", "register:40f0:8", ["const:bf0660:8", "const:4:8"]]
- 00bf0660 ["CALL", null, ["callee:00c5b780:8"]]
+ 00bf06fc ["INT_ADD", "register:40f0:8", ["const:bf06fc:8", "const:4:8"]]
+ 00bf06fc ["CALL", null, ["callee:00c5b780:8"]]
~~~


<a id="compare-d6d85f4671475f8002045bbbacc7a18d"></a>

### [`00bf0674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0674.md) → [`00bf0710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0710.md) _ZNSt6__ndk112__get_sp_mutEPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf075c",
      "incomplete_value": true,
      "site": "00bf0760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca47b8:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:3:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf06c0",
      "incomplete_value": true,
      "site": "00bf06c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca46e8:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:3:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00bf06b4 ["COPY", "register:4048:8", ["const:ca46e8:8"]]
+ 00bf0750 ["COPY", "register:4048:8", ["const:ca47b8:8"]]
~~~


