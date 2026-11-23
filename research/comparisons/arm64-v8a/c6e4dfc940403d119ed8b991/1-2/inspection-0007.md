# v16.0.2 → v16.0.3 · 要調査の変更候補 (7)

[一覧の目次](README.md)

<a id="compare-de74c6e93f3f0d0e67579a2b74b37da1"></a>

### [`004cb390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cb/004cb390.md) → [`004cb6b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cb/004cb6b0.md) _ZN5Botan13Threaded_Fork4sendEPKhm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0054052c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054052c.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c59200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59200.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0054084c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/0054084c.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5a1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a1d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cb3c8 ["INT_ADD", "register:40f0:8", ["const:4cb3c8:8", "const:4:8"]]
- 004cb3c8 ["CALL", null, ["callee:00c5a1d0:8"]]
+ 004cb6e8 ["INT_ADD", "register:40f0:8", ["const:4cb6e8:8", "const:4:8"]]
+ 004cb6e8 ["CALL", null, ["callee:00c5a1d0:8"]]
- 004cb3d8 ["INT_ADD", "register:40f0:8", ["const:4cb3d8:8", "const:4:8"]]
- 004cb3d8 ["CALL", null, ["callee:00c5a1d0:8"]]
+ 004cb6f8 ["INT_ADD", "register:40f0:8", ["const:4cb6f8:8", "const:4:8"]]
+ 004cb6f8 ["CALL", null, ["callee:00c5a1d0:8"]]
- 004cb5a8 ["INT_ADD", "register:40f0:8", ["const:4cb5a8:8", "const:4:8"]]
- 004cb5a8 ["CALL", null, ["callee:0054084c:8"]]
+ 004cb8c8 ["INT_ADD", "register:40f0:8", ["const:4cb8c8:8", "const:4:8"]]
+ 004cb8c8 ["CALL", null, ["callee:0054084c:8"]]
~~~


<a id="compare-ce88a763887a5c4b10093d01ea74486e"></a>

### [`004cb600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cb/004cb600.md) → [`004cb920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cb/004cb920.md) _ZN5Botan13Threaded_Fork20thread_delegate_workEPKhm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59200.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md)
- 新版 呼出元 1件 [`00c5a1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a1d0.md) · 呼出先 6件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59420.md) [`00c59520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59520.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cb644 ["INT_ADD", "register:40f0:8", ["const:4cb644:8", "const:4:8"]]
- 004cb644 ["CALL", null, ["callee:00c59180:8"]]
+ 004cb964 ["INT_ADD", "register:40f0:8", ["const:4cb964:8", "const:4:8"]]
+ 004cb964 ["CALL", null, ["callee:00c59180:8"]]
- 004cb65c ["INT_ADD", "register:40f0:8", ["const:4cb65c:8", "const:4:8"]]
- 004cb65c ["CALL", null, ["callee:00c59190:8"]]
+ 004cb97c ["INT_ADD", "register:40f0:8", ["const:4cb97c:8", "const:4:8"]]
+ 004cb97c ["CALL", null, ["callee:00c59190:8"]]
- 004cb67c ["INT_ADD", "register:40f0:8", ["const:4cb67c:8", "const:4:8"]]
- 004cb67c ["CALL", null, ["callee:00c59190:8"]]
+ 004cb99c ["INT_ADD", "register:40f0:8", ["const:4cb99c:8", "const:4:8"]]
+ 004cb99c ["CALL", null, ["callee:00c59190:8"]]
~~~


<a id="compare-6f736de54003418e1ef25108ddaab84d"></a>

### [`004cbec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cb/004cbec0.md) → [`004cc1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cc/004cc1e0.md) _ZN5Botan12HashFunction9providersERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`004cc08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cc/004cc08c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`004cc3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cc/004cc3ac.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cbf50 ["INT_ADD", "register:40f0:8", ["const:4cbf50:8", "const:4:8"]]
- 004cbf50 ["CALL", null, ["callee:004738a0:8"]]
+ 004cc270 ["INT_ADD", "register:40f0:8", ["const:4cc270:8", "const:4:8"]]
+ 004cc270 ["CALL", null, ["callee:004738a0:8"]]
- 004cbf60 ["INT_ADD", "register:40f0:8", ["const:4cbf60:8", "const:4:8"]]
- 004cbf60 ["CALL", null, ["callee:004cc3ac:8"]]
+ 004cc280 ["INT_ADD", "register:40f0:8", ["const:4cc280:8", "const:4:8"]]
+ 004cc280 ["CALL", null, ["callee:004cc3ac:8"]]
- 004cbf9c ["INT_ADD", "register:40f0:8", ["const:4cbf9c:8", "const:4:8"]]
- 004cbf9c ["CALL", null, ["callee:00c58f50:8"]]
+ 004cc2bc ["INT_ADD", "register:40f0:8", ["const:4cc2bc:8", "const:4:8"]]
+ 004cc2bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-8f7a4c34e95ae19a695f39a871a34d08"></a>

### [`004cc08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cc/004cc08c.md) → [`004cc3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cc/004cc3ac.md) FUN_004cc3ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`004cbec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cb/004cbec0.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58ec0.md)
- 新版 呼出元 1件 [`004cc1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cc/004cc1e0.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59e90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cc0dc ["INT_ADD", "register:40f0:8", ["const:4cc0dc:8", "const:4:8"]]
- 004cc0dc ["CALL", null, ["callee:005410dc:8"]]
+ 004cc3fc ["INT_ADD", "register:40f0:8", ["const:4cc3fc:8", "const:4:8"]]
+ 004cc3fc ["CALL", null, ["callee:005410dc:8"]]
- 004cc0f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 004cc0f0 ["INT_ADD", "register:40f0:8", ["const:4cc0f0:8", "const:4:8"]]
- 004cc0f0 ["CALLIND", null, ["register:0:8"]]
+ 004cc410 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004cc410 ["INT_ADD", "register:40f0:8", ["const:4cc410:8", "const:4:8"]]
+ 004cc410 ["CALLIND", null, ["register:0:8"]]
- 004cc10c ["INT_ADD", "register:40f0:8", ["const:4cc10c:8", "const:4:8"]]
- 004cc10c ["CALL", null, ["callee:00c59e90:8"]]
+ 004cc42c ["INT_ADD", "register:40f0:8", ["const:4cc42c:8", "const:4:8"]]
+ 004cc42c ["CALL", null, ["callee:00c59e90:8"]]
~~~


<a id="compare-fe45a7eb7eb5efe92ccb9f8ee38b51bf"></a>

### [`004cc1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cc/004cc1cc.md) → [`004cc4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cc/004cc4ec.md) FUN_004cc4ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004c0c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c0/004c0c24.md) · 呼出先 3件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`004c0f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c0/004c0f44.md) · 呼出先 3件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cc1fc ["INT_ADD", "register:40f0:8", ["const:4cc1fc:8", "const:4:8"]]
- 004cc1fc ["CALL", null, ["callee:00c58f30:8"]]
+ 004cc51c ["INT_ADD", "register:40f0:8", ["const:4cc51c:8", "const:4:8"]]
+ 004cc51c ["CALL", null, ["callee:00c58f30:8"]]
- 004cc214 ["INT_ADD", "register:40f0:8", ["const:4cc214:8", "const:4:8"]]
- 004cc214 ["CALL", null, ["callee:00c590a0:8"]]
+ 004cc534 ["INT_ADD", "register:40f0:8", ["const:4cc534:8", "const:4:8"]]
+ 004cc534 ["CALL", null, ["callee:00c590a0:8"]]
- 004cc230 ["INT_ADD", "register:40f0:8", ["const:4cc230:8", "const:4:8"]]
- 004cc230 ["CALL", null, ["callee:0049f78c:8"]]
+ 004cc550 ["INT_ADD", "register:40f0:8", ["const:4cc550:8", "const:4:8"]]
+ 004cc550 ["CALL", null, ["callee:0049f78c:8"]]
~~~


<a id="compare-ad74e032ad28e959bfdbde62b2b2a785"></a>

### [`004cc79c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cc/004cc79c.md) → [`004ccabc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cc/004ccabc.md) _ZN5Botan17hex_decode_lockedERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`004b3548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3548.md) [`0054052c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054052c.md) [`00c58bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58bb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`004b3868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b3/004b3868.md) [`0054084c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/0054084c.md) [`00c59b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59b80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cc7d8 ["INT_ADD", "register:40f0:8", ["const:4cc7d8:8", "const:4:8"]]
- 004cc7d8 ["CALL", null, ["callee:004b3868:8"]]
+ 004ccaf8 ["INT_ADD", "register:40f0:8", ["const:4ccaf8:8", "const:4:8"]]
+ 004ccaf8 ["CALL", null, ["callee:004b3868:8"]]
- 004cc7ec ["INT_ADD", "register:40f0:8", ["const:4cc7ec:8", "const:4:8"]]
- 004cc7ec ["CALL", null, ["callee:00c59b80:8"]]
+ 004ccb0c ["INT_ADD", "register:40f0:8", ["const:4ccb0c:8", "const:4:8"]]
+ 004ccb0c ["CALL", null, ["callee:00c59b80:8"]]
- 004cc804 ["INT_ADD", "register:40f0:8", ["const:4cc804:8", "const:4:8"]]
- 004cc804 ["CALL", null, ["callee:0054084c:8"]]
+ 004ccb24 ["INT_ADD", "register:40f0:8", ["const:4ccb24:8", "const:4:8"]]
+ 004ccb24 ["CALL", null, ["callee:0054084c:8"]]
~~~


<a id="compare-d8c0a2d39ac3a28aa48c2c57ba8b76c4"></a>

### [`004cc83c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cc/004cc83c.md) → [`004ccb5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cc/004ccb5c.md) _ZN5Botan10hex_decodeEPKcmb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59220.md) · 呼出先 6件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`00c5a1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a1f0.md) · 呼出先 6件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cc87c ["INT_ADD", "register:40f0:8", ["const:4cc87c:8", "const:4:8"]]
- 004cc87c ["CALL", null, ["callee:00c58f30:8"]]
+ 004ccb9c ["INT_ADD", "register:40f0:8", ["const:4ccb9c:8", "const:4:8"]]
+ 004ccb9c ["CALL", null, ["callee:00c58f30:8"]]
- 004cc898 ["INT_ADD", "register:40f0:8", ["const:4cc898:8", "const:4:8"]]
- 004cc898 ["CALL", null, ["callee:00c59130:8"]]
+ 004ccbb8 ["INT_ADD", "register:40f0:8", ["const:4ccbb8:8", "const:4:8"]]
+ 004ccbb8 ["CALL", null, ["callee:00c59130:8"]]
- 004cc8b0 ["INT_ADD", "register:40f0:8", ["const:4cc8b0:8", "const:4:8"]]
- 004cc8b0 ["CALL", null, ["callee:00c59b80:8"]]
+ 004ccbd0 ["INT_ADD", "register:40f0:8", ["const:4ccbd0:8", "const:4:8"]]
+ 004ccbd0 ["CALL", null, ["callee:00c59b80:8"]]
~~~


<a id="compare-a7931c5ff4ca5ef6ffc435c2c5544a5c"></a>

### [`004cd180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cd/004cd180.md) → [`004cd4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cd/004cd4a0.md) _ZN5Botan4HMAC5clearEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59250.md) · 呼出先 2件 [`00540bb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540bb8.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`00c5a220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a220.md) · 呼出先 2件 [`00540ed8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540ed8.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cd19c ["COPY", "register:0:8", ["register:4040:8"]]
- 004cd19c ["INT_ADD", "register:40f0:8", ["const:4cd19c:8", "const:4:8"]]
- 004cd19c ["CALLIND", null, ["register:0:8"]]
+ 004cd4bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 004cd4bc ["INT_ADD", "register:40f0:8", ["const:4cd4bc:8", "const:4:8"]]
+ 004cd4bc ["CALLIND", null, ["register:0:8"]]
- 004cd1b4 ["INT_ADD", "register:40f0:8", ["const:4cd1b4:8", "const:4:8"]]
- 004cd1b4 ["CALL", null, ["callee:00c59130:8"]]
+ 004cd4d4 ["INT_ADD", "register:40f0:8", ["const:4cd4d4:8", "const:4:8"]]
+ 004cd4d4 ["CALL", null, ["callee:00c59130:8"]]
- 004cd1c4 ["INT_ADD", "register:40f0:8", ["const:4cd1c4:8", "const:4:8"]]
- 004cd1c4 ["CALL", null, ["callee:00540ed8:8"]]
+ 004cd4e4 ["INT_ADD", "register:40f0:8", ["const:4cd4e4:8", "const:4:8"]]
+ 004cd4e4 ["CALL", null, ["callee:00540ed8:8"]]
~~~


<a id="compare-86321393998784e855c272b1dee34f21"></a>

### [`004cd31c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cd/004cd31c.md) → [`004cd63c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cd/004cd63c.md) _ZNK5Botan4HMAC5cloneEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c59270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59270.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5a240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cd330 ["INT_ADD", "register:40f0:8", ["const:4cd330:8", "const:4:8"]]
- 004cd330 ["CALL", null, ["callee:00c58f30:8"]]
+ 004cd650 ["INT_ADD", "register:40f0:8", ["const:4cd650:8", "const:4:8"]]
+ 004cd650 ["CALL", null, ["callee:00c58f30:8"]]
- 004cd348 ["COPY", "register:0:8", ["register:4048:8"]]
- 004cd348 ["INT_ADD", "register:40f0:8", ["const:4cd348:8", "const:4:8"]]
- 004cd348 ["CALLIND", null, ["register:0:8"]]
+ 004cd668 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004cd668 ["INT_ADD", "register:40f0:8", ["const:4cd668:8", "const:4:8"]]
+ 004cd668 ["CALLIND", null, ["register:0:8"]]
- 004cd354 ["INT_ADD", "register:40f0:8", ["const:4cd354:8", "const:4:8"]]
- 004cd354 ["CALL", null, ["callee:00c5a240:8"]]
+ 004cd674 ["INT_ADD", "register:40f0:8", ["const:4cd674:8", "const:4:8"]]
+ 004cd674 ["CALL", null, ["callee:00c5a240:8"]]
~~~


<a id="compare-3c9c45c5dbce6747b38df05371fb1fc7"></a>

### [`004cd53c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cd/004cd53c.md) → [`004cd85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cd/004cd85c.md) _ZN5Botan3KDF6createERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59280.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58e10.md)
- 新版 呼出元 1件 [`00c5a250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a250.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59de0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cd584 ["INT_ADD", "register:40f0:8", ["const:4cd584:8", "const:4:8"]]
- 004cd584 ["CALL", null, ["callee:0043be80:8"]]
+ 004cd8a4 ["INT_ADD", "register:40f0:8", ["const:4cd8a4:8", "const:4:8"]]
+ 004cd8a4 ["CALL", null, ["callee:0043be80:8"]]
- 004cd590 ["INT_ADD", "register:40f0:8", ["const:4cd590:8", "const:4:8"]]
- 004cd590 ["CALL", null, ["callee:00c59de0:8"]]
+ 004cd8b0 ["INT_ADD", "register:40f0:8", ["const:4cd8b0:8", "const:4:8"]]
+ 004cd8b0 ["CALL", null, ["callee:00c59de0:8"]]
- 004cd5a0 ["INT_ADD", "register:40f0:8", ["const:4cd5a0:8", "const:4:8"]]
- 004cd5a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 004cd8c0 ["INT_ADD", "register:40f0:8", ["const:4cd8c0:8", "const:4:8"]]
+ 004cd8c0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7cd26635c711365fa9281a293ccd50be"></a>

### [`004cd7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cd/004cd7c8.md) → [`004cdae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cd/004cdae8.md) _ZN5Botan3KDF9providersERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`004cd8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cd/004cd8e8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`004cdc08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cd/004cdc08.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cd814 ["INT_ADD", "register:40f0:8", ["const:4cd814:8", "const:4:8"]]
- 004cd814 ["CALL", null, ["callee:004738a0:8"]]
+ 004cdb34 ["INT_ADD", "register:40f0:8", ["const:4cdb34:8", "const:4:8"]]
+ 004cdb34 ["CALL", null, ["callee:004738a0:8"]]
- 004cd824 ["INT_ADD", "register:40f0:8", ["const:4cd824:8", "const:4:8"]]
- 004cd824 ["CALL", null, ["callee:004cdc08:8"]]
+ 004cdb44 ["INT_ADD", "register:40f0:8", ["const:4cdb44:8", "const:4:8"]]
+ 004cdb44 ["CALL", null, ["callee:004cdc08:8"]]
- 004cd860 ["INT_ADD", "register:40f0:8", ["const:4cd860:8", "const:4:8"]]
- 004cd860 ["CALL", null, ["callee:00c58f50:8"]]
+ 004cdb80 ["INT_ADD", "register:40f0:8", ["const:4cdb80:8", "const:4:8"]]
+ 004cdb80 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5743339f400b2766ae2bcfe5f40a7952"></a>

### [`004cd8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cd/004cd8e8.md) → [`004cdc08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cd/004cdc08.md) FUN_004cdc08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`004cd7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cd/004cd7c8.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59280.md)
- 新版 呼出元 1件 [`004cdae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cd/004cdae8.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a250.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cd938 ["INT_ADD", "register:40f0:8", ["const:4cd938:8", "const:4:8"]]
- 004cd938 ["CALL", null, ["callee:005410dc:8"]]
+ 004cdc58 ["INT_ADD", "register:40f0:8", ["const:4cdc58:8", "const:4:8"]]
+ 004cdc58 ["CALL", null, ["callee:005410dc:8"]]
- 004cd94c ["COPY", "register:0:8", ["register:4040:8"]]
- 004cd94c ["INT_ADD", "register:40f0:8", ["const:4cd94c:8", "const:4:8"]]
- 004cd94c ["CALLIND", null, ["register:0:8"]]
+ 004cdc6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 004cdc6c ["INT_ADD", "register:40f0:8", ["const:4cdc6c:8", "const:4:8"]]
+ 004cdc6c ["CALLIND", null, ["register:0:8"]]
- 004cd964 ["INT_ADD", "register:40f0:8", ["const:4cd964:8", "const:4:8"]]
- 004cd964 ["CALL", null, ["callee:00c5a250:8"]]
+ 004cdc84 ["INT_ADD", "register:40f0:8", ["const:4cdc84:8", "const:4:8"]]
+ 004cdc84 ["CALL", null, ["callee:00c5a250:8"]]
~~~


<a id="compare-b4793f08f6f7e0c227d608b2f3e7b023"></a>

### [`004ce090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ce090.md) → [`004ce3b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004ce3b0.md) _ZNK5Botan16PK_Encryptor_EME18maximum_input_sizeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ce0a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 004ce0a4 ["INT_ADD", "register:40f0:8", ["const:4ce0a4:8", "const:4:8"]]
- 004ce0a4 ["CALLIND", null, ["register:0:8"]]
+ 004ce3c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ce3c4 ["INT_ADD", "register:40f0:8", ["const:4ce3c4:8", "const:4:8"]]
+ 004ce3c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-44b28a9d156c8ed5e63d66bf9e3233d8"></a>

### [`004ce0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ce0b4.md) → [`004ce3d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004ce3d4.md) _ZN5Botan7KeyPair27signature_consistency_checkERNS_21RandomNumberGeneratorERKNS_11Private_KeyERKNS_10Public_KeyERKNSt6__ndk112basic_stringIc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c592f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c592f0.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59300.md) [`00c59310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59310.md)
- 新版 呼出元 1件 [`00c5a2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a2c0.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a2d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a2d0.md) [`00c5a2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a2e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ce0f8 ["INT_ADD", "register:40f0:8", ["const:4ce0f8:8", "const:4:8"]]
- 004ce0f8 ["CALL", null, ["callee:00c5a2d0:8"]]
+ 004ce418 ["INT_ADD", "register:40f0:8", ["const:4ce418:8", "const:4:8"]]
+ 004ce418 ["CALL", null, ["callee:00c5a2d0:8"]]
- 004ce108 ["INT_ADD", "register:40f0:8", ["const:4ce108:8", "const:4:8"]]
- 004ce108 ["CALL", null, ["callee:00c58f50:8"]]
+ 004ce428 ["INT_ADD", "register:40f0:8", ["const:4ce428:8", "const:4:8"]]
+ 004ce428 ["CALL", null, ["callee:00c58f50:8"]]
- 004ce124 ["INT_ADD", "register:40f0:8", ["const:4ce124:8", "const:4:8"]]
- 004ce124 ["CALL", null, ["callee:00c5a2e0:8"]]
+ 004ce444 ["INT_ADD", "register:40f0:8", ["const:4ce444:8", "const:4:8"]]
+ 004ce444 ["CALL", null, ["callee:00c5a2e0:8"]]
~~~


<a id="compare-29aae8fa08b3ab0bacff9e5118cd588b"></a>

### [`004ce30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ce30c.md) → [`004ce62c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004ce62c.md) _ZN5Botan25MessageAuthenticationCode6createERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58f60.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58c60.md)
- 新版 呼出元 1件 [`00c59f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f30.md) · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59c30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ce358 ["INT_ADD", "register:40f0:8", ["const:4ce358:8", "const:4:8"]]
- 004ce358 ["CALL", null, ["callee:0043be80:8"]]
+ 004ce678 ["INT_ADD", "register:40f0:8", ["const:4ce678:8", "const:4:8"]]
+ 004ce678 ["CALL", null, ["callee:0043be80:8"]]
- 004ce364 ["INT_ADD", "register:40f0:8", ["const:4ce364:8", "const:4:8"]]
- 004ce364 ["CALL", null, ["callee:00c59de0:8"]]
+ 004ce684 ["INT_ADD", "register:40f0:8", ["const:4ce684:8", "const:4:8"]]
+ 004ce684 ["CALL", null, ["callee:00c59de0:8"]]
- 004ce374 ["INT_ADD", "register:40f0:8", ["const:4ce374:8", "const:4:8"]]
- 004ce374 ["CALL", null, ["callee:00c58f50:8"]]
+ 004ce694 ["INT_ADD", "register:40f0:8", ["const:4ce694:8", "const:4:8"]]
+ 004ce694 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-c8cff41b13c2eacf9a1b3233550a798c"></a>

### [`004ce5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ce5c4.md) → [`004ce8e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004ce8e4.md) _ZN5Botan25MessageAuthenticationCode9providersERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`004ce728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ce728.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`004cea48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004cea48.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ce634 ["INT_ADD", "register:40f0:8", ["const:4ce634:8", "const:4:8"]]
- 004ce634 ["CALL", null, ["callee:004738a0:8"]]
+ 004ce954 ["INT_ADD", "register:40f0:8", ["const:4ce954:8", "const:4:8"]]
+ 004ce954 ["CALL", null, ["callee:004738a0:8"]]
- 004ce644 ["INT_ADD", "register:40f0:8", ["const:4ce644:8", "const:4:8"]]
- 004ce644 ["CALL", null, ["callee:004cea48:8"]]
+ 004ce964 ["INT_ADD", "register:40f0:8", ["const:4ce964:8", "const:4:8"]]
+ 004ce964 ["CALL", null, ["callee:004cea48:8"]]
- 004ce680 ["INT_ADD", "register:40f0:8", ["const:4ce680:8", "const:4:8"]]
- 004ce680 ["CALL", null, ["callee:00c58f50:8"]]
+ 004ce9a0 ["INT_ADD", "register:40f0:8", ["const:4ce9a0:8", "const:4:8"]]
+ 004ce9a0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-26c2b39e4eda2db719d4d3eca3ef9f3b"></a>

### [`004ce728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ce728.md) → [`004cea48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004cea48.md) FUN_004cea48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`004ce5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ce5c4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58f60.md)
- 新版 呼出元 1件 [`004ce8e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004ce8e4.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ce778 ["INT_ADD", "register:40f0:8", ["const:4ce778:8", "const:4:8"]]
- 004ce778 ["CALL", null, ["callee:005410dc:8"]]
+ 004cea98 ["INT_ADD", "register:40f0:8", ["const:4cea98:8", "const:4:8"]]
+ 004cea98 ["CALL", null, ["callee:005410dc:8"]]
- 004ce78c ["COPY", "register:0:8", ["register:4040:8"]]
- 004ce78c ["INT_ADD", "register:40f0:8", ["const:4ce78c:8", "const:4:8"]]
- 004ce78c ["CALLIND", null, ["register:0:8"]]
+ 004ceaac ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ceaac ["INT_ADD", "register:40f0:8", ["const:4ceaac:8", "const:4:8"]]
+ 004ceaac ["CALLIND", null, ["register:0:8"]]
- 004ce7a8 ["INT_ADD", "register:40f0:8", ["const:4ce7a8:8", "const:4:8"]]
- 004ce7a8 ["CALL", null, ["callee:00c59f30:8"]]
+ 004ceac8 ["INT_ADD", "register:40f0:8", ["const:4ceac8:8", "const:4:8"]]
+ 004ceac8 ["CALL", null, ["callee:00c59f30:8"]]
~~~


<a id="compare-a374fb479ecabb020c4d6668703b5e4a"></a>

### [`004ceab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ceab8.md) → [`004cedd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004cedd8.md) _ZN5Botan3MD510compress_nEPKhm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cf4d0 ["INT_ADD", "register:40f0:8", ["const:4cf4d0:8", "const:4:8"]]
- 004cf4d0 ["CALL", null, ["callee:00c590a0:8"]]
+ 004cf7f0 ["INT_ADD", "register:40f0:8", ["const:4cf7f0:8", "const:4:8"]]
+ 004cf7f0 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-cb9329ca5cbf201cf9bbc0a74588bcb9"></a>

### [`004cf590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cf/004cf590.md) → [`004cf8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cf/004cf8b0.md) _ZN5Botan16MDx_HashFunction5clearEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cf5b4 ["INT_ADD", "register:40f0:8", ["const:4cf5b4:8", "const:4:8"]]
- 004cf5b4 ["CALL", null, ["callee:00c59130:8"]]
+ 004cf8d4 ["INT_ADD", "register:40f0:8", ["const:4cf8d4:8", "const:4:8"]]
+ 004cf8d4 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-407bccd6d92369e8e613eddcde9ecb86"></a>

### [`004cf61c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cf/004cf61c.md) → [`004cf93c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cf/004cf93c.md) _ZN5Botan16MDx_HashFunction8add_dataEPKhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cf66c ["INT_ADD", "register:40f0:8", ["const:4cf66c:8", "const:4:8"]]
- 004cf66c ["CALL", null, ["callee:00c58fe0:8"]]
+ 004cf98c ["INT_ADD", "register:40f0:8", ["const:4cf98c:8", "const:4:8"]]
+ 004cf98c ["CALL", null, ["callee:00c58fe0:8"]]
- 004cf698 ["COPY", "register:0:8", ["register:4040:8"]]
- 004cf698 ["INT_ADD", "register:40f0:8", ["const:4cf698:8", "const:4:8"]]
- 004cf698 ["CALLIND", null, ["register:0:8"]]
+ 004cf9b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004cf9b8 ["INT_ADD", "register:40f0:8", ["const:4cf9b8:8", "const:4:8"]]
+ 004cf9b8 ["CALLIND", null, ["register:0:8"]]
- 004cf6ec ["COPY", "register:0:8", ["register:4040:8"]]
- 004cf6ec ["INT_ADD", "register:40f0:8", ["const:4cf6ec:8", "const:4:8"]]
- 004cf6ec ["CALLIND", null, ["register:0:8"]]
+ 004cfa0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 004cfa0c ["INT_ADD", "register:40f0:8", ["const:4cfa0c:8", "const:4:8"]]
+ 004cfa0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-599643f7bfa9c626e62d00a123a557a7"></a>

### [`004cf748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cf/004cf748.md) → [`004cfa68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cf/004cfa68.md) _ZN5Botan16MDx_HashFunction12final_resultEPh

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cf7d4 ["COPY", "register:0:8", ["register:4048:8"]]
- 004cf7d4 ["INT_ADD", "register:40f0:8", ["const:4cf7d4:8", "const:4:8"]]
- 004cf7d4 ["CALLIND", null, ["register:0:8"]]
+ 004cfaf4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004cfaf4 ["INT_ADD", "register:40f0:8", ["const:4cfaf4:8", "const:4:8"]]
+ 004cfaf4 ["CALLIND", null, ["register:0:8"]]
- 004cf7e8 ["INT_ADD", "register:40f0:8", ["const:4cf7e8:8", "const:4:8"]]
- 004cf7e8 ["CALL", null, ["callee:00c59130:8"]]
+ 004cfb08 ["INT_ADD", "register:40f0:8", ["const:4cfb08:8", "const:4:8"]]
+ 004cfb08 ["CALL", null, ["callee:00c59130:8"]]
- 004cf804 ["COPY", "register:0:8", ["register:4040:8"]]
- 004cf804 ["INT_ADD", "register:40f0:8", ["const:4cf804:8", "const:4:8"]]
- 004cf804 ["CALLIND", null, ["register:0:8"]]
+ 004cfb24 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004cfb24 ["INT_ADD", "register:40f0:8", ["const:4cfb24:8", "const:4:8"]]
+ 004cfb24 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-86f18ae17dd5306154491603bcab12fe"></a>

### [`004cfe08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cf/004cfe08.md) → [`004d0128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d0/004d0128.md) _ZNK5Botan13PKCS7_Padding11add_paddingERNSt6__ndk16vectorIhNS_16secure_allocatorIhEEEEmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00544d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544d1c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0054503c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00545/0054503c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004cfe74 ["INT_ADD", "register:40f0:8", ["const:4cfe74:8", "const:4:8"]]
- 004cfe74 ["CALL", null, ["callee:0054503c:8"]]
+ 004d0194 ["INT_ADD", "register:40f0:8", ["const:4d0194:8", "const:4:8"]]
+ 004d0194 ["CALL", null, ["callee:0054503c:8"]]
- 004cfea0 ["INT_ADD", "register:40f0:8", ["const:4cfea0:8", "const:4:8"]]
- 004cfea0 ["CALL", null, ["callee:00c58f80:8"]]
+ 004d01c0 ["INT_ADD", "register:40f0:8", ["const:4d01c0:8", "const:4:8"]]
+ 004d01c0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-faa5c467a48e672b45a4a4880d9dd92c"></a>

### [`004d02cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d0/004d02cc.md) → [`004d05ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d0/004d05ec.md) _ZNK5Botan17ANSI_X923_Padding11add_paddingERNSt6__ndk16vectorIhNS_16secure_allocatorIhEEEEmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005411e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005411e4.md) [`00544d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544d1c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00541504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541504.md) [`0054503c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00545/0054503c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d031c ["INT_ADD", "register:40f0:8", ["const:4d031c:8", "const:4:8"]]
- 004d031c ["CALL", null, ["callee:00541504:8"]]
+ 004d063c ["INT_ADD", "register:40f0:8", ["const:4d063c:8", "const:4:8"]]
+ 004d063c ["CALL", null, ["callee:00541504:8"]]
- 004d0368 ["INT_ADD", "register:40f0:8", ["const:4d0368:8", "const:4:8"]]
- 004d0368 ["CALL", null, ["callee:0054503c:8"]]
+ 004d0688 ["INT_ADD", "register:40f0:8", ["const:4d0688:8", "const:4:8"]]
+ 004d0688 ["CALL", null, ["callee:0054503c:8"]]
- 004d0394 ["INT_ADD", "register:40f0:8", ["const:4d0394:8", "const:4:8"]]
- 004d0394 ["CALL", null, ["callee:00c58f80:8"]]
+ 004d06b4 ["INT_ADD", "register:40f0:8", ["const:4d06b4:8", "const:4:8"]]
+ 004d06b4 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-34f1b64d8c7749dd45b8d8974236b447"></a>

### [`004d0794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d0/004d0794.md) → [`004d0ab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d0/004d0ab4.md) _ZNK5Botan19OneAndZeros_Padding11add_paddingERNSt6__ndk16vectorIhNS_16secure_allocatorIhEEEEmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005411e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005411e4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00541504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541504.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d07e4 ["INT_ADD", "register:40f0:8", ["const:4d07e4:8", "const:4:8"]]
- 004d07e4 ["CALL", null, ["callee:00541504:8"]]
+ 004d0b04 ["INT_ADD", "register:40f0:8", ["const:4d0b04:8", "const:4:8"]]
+ 004d0b04 ["CALL", null, ["callee:00541504:8"]]
- 004d0838 ["INT_ADD", "register:40f0:8", ["const:4d0838:8", "const:4:8"]]
- 004d0838 ["CALL", null, ["callee:00541504:8"]]
+ 004d0b58 ["INT_ADD", "register:40f0:8", ["const:4d0b58:8", "const:4:8"]]
+ 004d0b58 ["CALL", null, ["callee:00541504:8"]]
- 004d0864 ["INT_ADD", "register:40f0:8", ["const:4d0864:8", "const:4:8"]]
- 004d0864 ["CALL", null, ["callee:00c58f80:8"]]
+ 004d0b84 ["INT_ADD", "register:40f0:8", ["const:4d0b84:8", "const:4:8"]]
+ 004d0b84 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-6a3c826e6601e2538b9b9c42f5d132a3"></a>

### [`004d090c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d0/004d090c.md) → [`004d0c2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d0/004d0c2c.md) _ZNK5Botan11ESP_Padding11add_paddingERNSt6__ndk16vectorIhNS_16secure_allocatorIhEEEEmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005411e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005411e4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00541504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541504.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d094c ["INT_ADD", "register:40f0:8", ["const:4d094c:8", "const:4:8"]]
- 004d094c ["CALL", null, ["callee:00541504:8"]]
+ 004d0c6c ["INT_ADD", "register:40f0:8", ["const:4d0c6c:8", "const:4:8"]]
+ 004d0c6c ["CALL", null, ["callee:00541504:8"]]
- 004d099c ["INT_ADD", "register:40f0:8", ["const:4d099c:8", "const:4:8"]]
- 004d099c ["CALL", null, ["callee:00c58f80:8"]]
+ 004d0cbc ["INT_ADD", "register:40f0:8", ["const:4d0cbc:8", "const:4:8"]]
+ 004d0cbc ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-4112bb0a05c7b44c0fe737f8b9c41cdb"></a>

### [`004d0db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d0/004d0db0.md) → [`004d10d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d1/004d10d0.md) _ZN5Botan12StreamCipher6createERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58f30.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58e10.md)
- 新版 呼出元 1件 [`00c59f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f00.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59de0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d0df8 ["INT_ADD", "register:40f0:8", ["const:4d0df8:8", "const:4:8"]]
- 004d0df8 ["CALL", null, ["callee:0043be80:8"]]
+ 004d1118 ["INT_ADD", "register:40f0:8", ["const:4d1118:8", "const:4:8"]]
+ 004d1118 ["CALL", null, ["callee:0043be80:8"]]
- 004d0e04 ["INT_ADD", "register:40f0:8", ["const:4d0e04:8", "const:4:8"]]
- 004d0e04 ["CALL", null, ["callee:00c59de0:8"]]
+ 004d1124 ["INT_ADD", "register:40f0:8", ["const:4d1124:8", "const:4:8"]]
+ 004d1124 ["CALL", null, ["callee:00c59de0:8"]]
- 004d0e14 ["INT_ADD", "register:40f0:8", ["const:4d0e14:8", "const:4:8"]]
- 004d0e14 ["CALL", null, ["callee:00c58f50:8"]]
+ 004d1134 ["INT_ADD", "register:40f0:8", ["const:4d1134:8", "const:4:8"]]
+ 004d1134 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d2cbb9ec1f1676b88531a5f9c7f42944"></a>

### [`004d1c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d1/004d1c80.md) → [`004d1fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d1/004d1fa0.md) _ZN5Botan11Cipher_Mode9providersERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d1cf8 ["INT_ADD", "register:40f0:8", ["const:4d1cf8:8", "const:4:8"]]
- 004d1cf8 ["CALL", null, ["callee:004738a0:8"]]
+ 004d2018 ["INT_ADD", "register:40f0:8", ["const:4d2018:8", "const:4:8"]]
+ 004d2018 ["CALL", null, ["callee:004738a0:8"]]
- 004d1d08 ["INT_ADD", "register:40f0:8", ["const:4d1d08:8", "const:4:8"]]
- 004d1d08 ["CALL", null, ["callee:00c58f50:8"]]
+ 004d2028 ["INT_ADD", "register:40f0:8", ["const:4d2028:8", "const:4:8"]]
+ 004d2028 ["CALL", null, ["callee:00c58f50:8"]]
- 004d1d18 ["INT_ADD", "register:40f0:8", ["const:4d1d18:8", "const:4:8"]]
- 004d1d18 ["CALL", null, ["callee:00c58f50:8"]]
+ 004d2038 ["INT_ADD", "register:40f0:8", ["const:4d2038:8", "const:4:8"]]
+ 004d2038 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ef034240fd03f9b8aaade06ffec55ba0"></a>

### [`004d6ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d6/004d6ea8.md) → [`004d71c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d71c8.md) FUN_004d71c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`004b7c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b7/004b7c50.md) [`004ba234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ba/004ba234.md) [`004db6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004db/004db6e0.md) [`004df71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004df/004df71c.md) [`004e0468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e0/004e0468.md) · 呼出先 10件 [`004b9120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b9/004b9120.md) [`004d1fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d1/004d1fd0.md) [`004d23dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d2/004d23dc.md) [`004d2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d2/004d2bd0.md) [`004d37a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d3/004d37a4.md)
- 新版 呼出元 5件 [`004b7f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b7/004b7f70.md) [`004ba554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ba/004ba554.md) [`004dba00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004db/004dba00.md) [`004dfa3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004df/004dfa3c.md) [`004e0788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e0/004e0788.md) · 呼出先 10件 [`004b9440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b9/004b9440.md) [`004d22f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d2/004d22f0.md) [`004d26fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d2/004d26fc.md) [`004d2ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d2/004d2ef0.md) [`004d3ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d3/004d3ac4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d6ef4 ["INT_ADD", "register:40f0:8", ["const:4d6ef4:8", "const:4:8"]]
- 004d6ef4 ["CALL", null, ["callee:00c59130:8"]]
+ 004d7214 ["INT_ADD", "register:40f0:8", ["const:4d7214:8", "const:4:8"]]
+ 004d7214 ["CALL", null, ["callee:00c59130:8"]]
- 004d70ec ["INT_ADD", "register:40f0:8", ["const:4d70ec:8", "const:4:8"]]
- 004d70ec ["CALL", null, ["callee:004d761c:8"]]
+ 004d740c ["INT_ADD", "register:40f0:8", ["const:4d740c:8", "const:4:8"]]
+ 004d740c ["CALL", null, ["callee:004d761c:8"]]
~~~


<a id="compare-a49984886f82e1091658059cb0774d94"></a>

### [`004d7154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d7154.md) → [`004d7474`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d7474.md) FUN_004d7474

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`004d6ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d6/004d6ea8.md) [`004d73d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d73d0.md) [`004d7704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d7704.md) [`004d7948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d7948.md) · 呼出先 1件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 4件 [`004d71c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d71c8.md) [`004d76f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d76f0.md) [`004d7a24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d7a24.md) [`004d7c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d7c68.md) · 呼出先 1件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d7190 ["INT_ADD", "register:40f0:8", ["const:4d7190:8", "const:4:8"]]
- 004d7190 ["CALL", null, ["callee:00c59130:8"]]
+ 004d74b0 ["INT_ADD", "register:40f0:8", ["const:4d74b0:8", "const:4:8"]]
+ 004d74b0 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-7368087d585adb97349578a4901cdbfb"></a>

### [`004d73d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d73d0.md) → [`004d76f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d76f0.md) FUN_004d76f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`004d6ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d6/004d6ea8.md) [`004d73d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d73d0.md) · 呼出先 11件 [`004b87f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b8/004b87f4.md) [`004b898c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b8/004b898c.md) [`004b8bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b8/004b8bac.md) [`004d23dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d2/004d23dc.md) [`004d2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d2/004d2bd0.md)
- 新版 呼出元 2件 [`004d71c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d71c8.md) [`004d76f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d76f0.md) · 呼出先 11件 [`004b8b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b8/004b8b14.md) [`004b8cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b8/004b8cac.md) [`004b8ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b8/004b8ecc.md) [`004d26fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d2/004d26fc.md) [`004d2ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d2/004d2ef0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d7428 ["INT_ADD", "register:40f0:8", ["const:4d7428:8", "const:4:8"]]
- 004d7428 ["CALL", null, ["callee:004b8b14:8"]]
+ 004d7748 ["INT_ADD", "register:40f0:8", ["const:4d7748:8", "const:4:8"]]
+ 004d7748 ["CALL", null, ["callee:004b8b14:8"]]
- 004d7440 ["INT_ADD", "register:40f0:8", ["const:4d7440:8", "const:4:8"]]
- 004d7440 ["CALL", null, ["callee:004b8b14:8"]]
+ 004d7760 ["INT_ADD", "register:40f0:8", ["const:4d7760:8", "const:4:8"]]
+ 004d7760 ["CALL", null, ["callee:004b8b14:8"]]
- 004d7458 ["INT_ADD", "register:40f0:8", ["const:4d7458:8", "const:4:8"]]
- 004d7458 ["CALL", null, ["callee:00c59130:8"]]
+ 004d7778 ["INT_ADD", "register:40f0:8", ["const:4d7778:8", "const:4:8"]]
+ 004d7778 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-eebe8ac32f3ac18f38bc8280cdcb10e3"></a>

### [`004d7948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d7948.md) → [`004d7c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d7c68.md) FUN_004d7c68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`004d7704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d7704.md) [`004d7948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d7948.md) · 呼出先 11件 [`004b87f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b8/004b87f4.md) [`004b898c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b8/004b898c.md) [`004b8bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b8/004b8bac.md) [`004d2158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d2/004d2158.md) [`004d2754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d2/004d2754.md)
- 新版 呼出元 2件 [`004d7a24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d7a24.md) [`004d7c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d7c68.md) · 呼出先 11件 [`004b8b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b8/004b8b14.md) [`004b8cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b8/004b8cac.md) [`004b8ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b8/004b8ecc.md) [`004d2478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d2/004d2478.md) [`004d2a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d2/004d2a74.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d799c ["INT_ADD", "register:40f0:8", ["const:4d799c:8", "const:4:8"]]
- 004d799c ["CALL", null, ["callee:004b8b14:8"]]
+ 004d7cbc ["INT_ADD", "register:40f0:8", ["const:4d7cbc:8", "const:4:8"]]
+ 004d7cbc ["CALL", null, ["callee:004b8b14:8"]]
- 004d79b4 ["INT_ADD", "register:40f0:8", ["const:4d79b4:8", "const:4:8"]]
- 004d79b4 ["CALL", null, ["callee:00c59130:8"]]
+ 004d7cd4 ["INT_ADD", "register:40f0:8", ["const:4d7cd4:8", "const:4:8"]]
+ 004d7cd4 ["CALL", null, ["callee:00c59130:8"]]
- 004d7a24 ["INT_ADD", "register:40f0:8", ["const:4d7a24:8", "const:4:8"]]
- 004d7a24 ["CALL", null, ["callee:004b8cac:8"]]
+ 004d7d44 ["INT_ADD", "register:40f0:8", ["const:4d7d44:8", "const:4:8"]]
+ 004d7d44 ["CALL", null, ["callee:004b8cac:8"]]
~~~


<a id="compare-ee76bb859bd34cc29787fd20f23b408c"></a>

### [`004d7bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d7/004d7bac.md) → [`004d7ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d7/004d7ecc.md) FUN_004d7ecc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`004df71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004df/004df71c.md) [`004e0468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e0/004e0468.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 2件 [`004dfa3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004df/004dfa3c.md) [`004e0788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e0/004e0788.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d7e0c ["INT_ADD", "register:40f0:8", ["const:4d7e0c:8", "const:4:8"]]
- 004d7e0c ["CALL", null, ["callee:00c58fe0:8"]]
+ 004d812c ["INT_ADD", "register:40f0:8", ["const:4d812c:8", "const:4:8"]]
+ 004d812c ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-7ec4f4636b07db20dc6e0ff7bfbd7d7c"></a>

### [`004d9458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004d9/004d9458.md) → [`004d9778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004d9/004d9778.md) _ZN5Botan19generate_dsa_primesERNS_21RandomNumberGeneratorERNS_6BigIntES3_mm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c59380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59380.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5a350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a350.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004d94ac ["INT_ADD", "register:40f0:8", ["const:4d94ac:8", "const:4:8"]]
- 004d94ac ["CALL", null, ["callee:00c58f30:8"]]
+ 004d97cc ["INT_ADD", "register:40f0:8", ["const:4d97cc:8", "const:4:8"]]
+ 004d97cc ["CALL", null, ["callee:00c58f30:8"]]
- 004d94c8 ["INT_ADD", "register:40f0:8", ["const:4d94c8:8", "const:4:8"]]
- 004d94c8 ["CALL", null, ["callee:00c59130:8"]]
+ 004d97e8 ["INT_ADD", "register:40f0:8", ["const:4d97e8:8", "const:4:8"]]
+ 004d97e8 ["CALL", null, ["callee:00c59130:8"]]
- 004d94e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 004d94e4 ["INT_ADD", "register:40f0:8", ["const:4d94e4:8", "const:4:8"]]
- 004d94e4 ["CALLIND", null, ["register:0:8"]]
+ 004d9804 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004d9804 ["INT_ADD", "register:40f0:8", ["const:4d9804:8", "const:4:8"]]
+ 004d9804 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-65f1edc37baa1554855766cc1bd45bf7"></a>

### [`004dc6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004dc/004dc6c8.md) → [`004dc9e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004dc/004dc9e8.md) _ZN5Botan29normalized_montgomery_inverseERKNS_6BigIntES2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58ba0.md) [`00c59470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59470.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59b70.md) [`00c5a440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a440.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004dc700 ["INT_ADD", "register:40f0:8", ["const:4dc700:8", "const:4:8"]]
- 004dc700 ["CALL", null, ["callee:00c5a440:8"]]
+ 004dca20 ["INT_ADD", "register:40f0:8", ["const:4dca20:8", "const:4:8"]]
+ 004dca20 ["CALL", null, ["callee:00c5a440:8"]]
- 004dc748 ["INT_ADD", "register:40f0:8", ["const:4dc748:8", "const:4:8"]]
- 004dc748 ["CALL", null, ["callee:00c59b70:8"]]
+ 004dca68 ["INT_ADD", "register:40f0:8", ["const:4dca68:8", "const:4:8"]]
+ 004dca68 ["CALL", null, ["callee:00c59b70:8"]]
~~~


<a id="compare-21dc384ddf209b9a897cb1f9bf99bb3d"></a>

### [`004dea5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004de/004dea5c.md) → [`004ded7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004de/004ded7c.md) _ZN5Botan9Power_ModaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004dea84 ["COPY", "register:0:8", ["register:4040:8"]]
- 004dea84 ["INT_ADD", "register:40f0:8", ["const:4dea84:8", "const:4:8"]]
- 004dea84 ["CALLIND", null, ["register:0:8"]]
+ 004deda4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004deda4 ["INT_ADD", "register:40f0:8", ["const:4deda4:8", "const:4:8"]]
+ 004deda4 ["CALLIND", null, ["register:0:8"]]
- 004deaa0 ["COPY", "register:0:8", ["register:4048:8"]]
- 004deaa0 ["INT_ADD", "register:40f0:8", ["const:4deaa0:8", "const:4:8"]]
- 004deaa0 ["CALLIND", null, ["register:0:8"]]
+ 004dedc0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004dedc0 ["INT_ADD", "register:40f0:8", ["const:4dedc0:8", "const:4:8"]]
+ 004dedc0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2a5ffe340e3245aabffa8b66c84a468f"></a>

### [`004def44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004de/004def44.md) → [`004df264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004df/004df264.md) FUN_004df264

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0054371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/0054371c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00543a3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/00543a3c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004def70 ["INT_ADD", "register:40f0:8", ["const:4def70:8", "const:4:8"]]
- 004def70 ["CALL", null, ["callee:00543a3c:8"]]
+ 004df290 ["INT_ADD", "register:40f0:8", ["const:4df290:8", "const:4:8"]]
+ 004df290 ["CALL", null, ["callee:00543a3c:8"]]
~~~


<a id="compare-df24a203a32421bfe808e60f9c930505"></a>

### [`004df660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004df/004df660.md) → [`004df980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004df/004df980.md) FUN_004df980

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0054371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/0054371c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00543a3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/00543a3c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004df68c ["INT_ADD", "register:40f0:8", ["const:4df68c:8", "const:4:8"]]
- 004df68c ["CALL", null, ["callee:00543a3c:8"]]
+ 004df9ac ["INT_ADD", "register:40f0:8", ["const:4df9ac:8", "const:4:8"]]
+ 004df9ac ["CALL", null, ["callee:00543a3c:8"]]
~~~


<a id="compare-0919b4985271e24a946f038480b99e81"></a>

### [`004e2438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e2/004e2438.md) → [`004e2758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e2/004e2758.md) _ZN5Botan13pbes2_encryptERKNSt6__ndk16vectorIhNS_16secure_allocatorIhEEEERKNS0_12basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEENS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`004e2494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e2/004e2494.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`004e27b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e2/004e27b4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e246c ["INT_ADD", "register:40f0:8", ["const:4e246c:8", "const:4:8"]]
- 004e246c ["CALL", null, ["callee:004e27b4:8"]]
+ 004e278c ["INT_ADD", "register:40f0:8", ["const:4e278c:8", "const:4:8"]]
+ 004e278c ["CALL", null, ["callee:004e27b4:8"]]
- 004e2490 ["INT_ADD", "register:40f0:8", ["const:4e2490:8", "const:4:8"]]
- 004e2490 ["CALL", null, ["callee:00c58f80:8"]]
+ 004e27b0 ["INT_ADD", "register:40f0:8", ["const:4e27b0:8", "const:4:8"]]
+ 004e27b0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-b26d4d72d5bfaa1474442529d33940bf"></a>

### [`004e3438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e3/004e3438.md) → [`004e3758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e3/004e3758.md) _ZN5Botan18pbes2_encrypt_msecERKNSt6__ndk16vectorIhNS_16secure_allocatorIhEEEERKNS0_12basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`004e2494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e2/004e2494.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`004e27b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e2/004e27b4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e3464 ["INT_ADD", "register:40f0:8", ["const:4e3464:8", "const:4:8"]]
- 004e3464 ["CALL", null, ["callee:004e27b4:8"]]
+ 004e3784 ["INT_ADD", "register:40f0:8", ["const:4e3784:8", "const:4:8"]]
+ 004e3784 ["CALL", null, ["callee:004e27b4:8"]]
- 004e3494 ["INT_ADD", "register:40f0:8", ["const:4e3494:8", "const:4:8"]]
- 004e3494 ["CALL", null, ["callee:00c58f80:8"]]
+ 004e37b4 ["INT_ADD", "register:40f0:8", ["const:4e37b4:8", "const:4:8"]]
+ 004e37b4 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-3c30ab04f3dd8a25e5f3474baf933051"></a>

### [`004e3498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e3/004e3498.md) → [`004e37b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e3/004e37b8.md) FUN_004e37b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e34b4 ["INT_ADD", "register:40f0:8", ["const:4e34b4:8", "const:4:8"]]
- 004e34b4 ["CALL", null, ["callee:00c58f50:8"]]
+ 004e37d4 ["INT_ADD", "register:40f0:8", ["const:4e37d4:8", "const:4:8"]]
+ 004e37d4 ["CALL", null, ["callee:00c58f50:8"]]
- 004e34c4 ["INT_ADD", "register:40f0:8", ["const:4e34c4:8", "const:4:8"]]
- 004e34c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 004e37e4 ["INT_ADD", "register:40f0:8", ["const:4e37e4:8", "const:4:8"]]
+ 004e37e4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6ad823b68b4ddbba91702584ac26916a"></a>

### [`004e4694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e4/004e4694.md) → [`004e49b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e4/004e49b4.md) _ZNK5Botan5PBKDF16pbkdf_iterationsEmRKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPKhmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`004b3548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3548.md) [`00c59500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59500.md)
- 新版 呼出元 0件  · 呼出先 2件 [`004b3868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b3/004b3868.md) [`00c5a4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a4d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e46cc ["INT_ADD", "register:40f0:8", ["const:4e46cc:8", "const:4:8"]]
- 004e46cc ["CALL", null, ["callee:004b3868:8"]]
+ 004e49ec ["INT_ADD", "register:40f0:8", ["const:4e49ec:8", "const:4:8"]]
+ 004e49ec ["CALL", null, ["callee:004b3868:8"]]
- 004e46ec ["INT_ADD", "register:40f0:8", ["const:4e46ec:8", "const:4:8"]]
- 004e46ec ["CALL", null, ["callee:00c5a4d0:8"]]
+ 004e4a0c ["INT_ADD", "register:40f0:8", ["const:4e4a0c:8", "const:4:8"]]
+ 004e4a0c ["CALL", null, ["callee:00c5a4d0:8"]]
~~~


<a id="compare-5ad7dbbcf55ed4216c882a3a0000163c"></a>

### [`004e4c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e4/004e4c2c.md) → [`004e4f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e4/004e4f4c.md) _ZN5Botan5PBKDF9providersERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`004e4d90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e4/004e4d90.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`004e50b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e5/004e50b0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e4c9c ["INT_ADD", "register:40f0:8", ["const:4e4c9c:8", "const:4:8"]]
- 004e4c9c ["CALL", null, ["callee:004738a0:8"]]
+ 004e4fbc ["INT_ADD", "register:40f0:8", ["const:4e4fbc:8", "const:4:8"]]
+ 004e4fbc ["CALL", null, ["callee:004738a0:8"]]
- 004e4cac ["INT_ADD", "register:40f0:8", ["const:4e4cac:8", "const:4:8"]]
- 004e4cac ["CALL", null, ["callee:004e50b0:8"]]
+ 004e4fcc ["INT_ADD", "register:40f0:8", ["const:4e4fcc:8", "const:4:8"]]
+ 004e4fcc ["CALL", null, ["callee:004e50b0:8"]]
- 004e4ce8 ["INT_ADD", "register:40f0:8", ["const:4e4ce8:8", "const:4:8"]]
- 004e4ce8 ["CALL", null, ["callee:00c58f50:8"]]
+ 004e5008 ["INT_ADD", "register:40f0:8", ["const:4e5008:8", "const:4:8"]]
+ 004e5008 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0dae65430833530ce29636438d48061f"></a>

### [`004e4d90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e4/004e4d90.md) → [`004e50b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e5/004e50b0.md) FUN_004e50b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`004e4c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e4/004e4c2c.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c594f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c594f0.md)
- 新版 呼出元 1件 [`004e4f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e4/004e4f4c.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e4de0 ["INT_ADD", "register:40f0:8", ["const:4e4de0:8", "const:4:8"]]
- 004e4de0 ["CALL", null, ["callee:005410dc:8"]]
+ 004e5100 ["INT_ADD", "register:40f0:8", ["const:4e5100:8", "const:4:8"]]
+ 004e5100 ["CALL", null, ["callee:005410dc:8"]]
- 004e4df4 ["COPY", "register:0:8", ["register:4040:8"]]
- 004e4df4 ["INT_ADD", "register:40f0:8", ["const:4e4df4:8", "const:4:8"]]
- 004e4df4 ["CALLIND", null, ["register:0:8"]]
+ 004e5114 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004e5114 ["INT_ADD", "register:40f0:8", ["const:4e5114:8", "const:4:8"]]
+ 004e5114 ["CALLIND", null, ["register:0:8"]]
- 004e4e10 ["INT_ADD", "register:40f0:8", ["const:4e4e10:8", "const:4:8"]]
- 004e4e10 ["CALL", null, ["callee:00c5a4c0:8"]]
+ 004e5130 ["INT_ADD", "register:40f0:8", ["const:4e5130:8", "const:4:8"]]
+ 004e5130 ["CALL", null, ["callee:00c5a4c0:8"]]
~~~


<a id="compare-b46ba0942c9d009de9312e18a58b255b"></a>

### [`004e4ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e4/004e4ed0.md) → [`004e51f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e5/004e51f0.md) _ZNK5Botan5PBKDF11pbkdf_timedEPhmRKNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEPKhmNS2_6chrono8durationIxNS2_5ratioIL

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e4ef0 ["COPY", "register:0:8", ["register:4040:8"]]
- 004e4ef0 ["INT_ADD", "register:40f0:8", ["const:4e4ef0:8", "const:4:8"]]
- 004e4ef0 ["CALLIND", null, ["register:0:8"]]
+ 004e5210 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004e5210 ["INT_ADD", "register:40f0:8", ["const:4e5210:8", "const:4:8"]]
+ 004e5210 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6dbe3e83c6cd8ea65a3c90272f89e17c"></a>

### [`004e50a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e5/004e50a8.md) → [`004e53c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e5/004e53c8.md) _ZNK5Botan5PBKDF11pbkdf_timedEmRKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPKhmNS1_6chrono8durationIxNS1_5ratioILl1

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`004b3548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3548.md)
- 新版 呼出元 0件  · 呼出先 1件 [`004b3868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b3/004b3868.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e50e4 ["INT_ADD", "register:40f0:8", ["const:4e50e4:8", "const:4:8"]]
- 004e50e4 ["CALL", null, ["callee:004b3868:8"]]
+ 004e5404 ["INT_ADD", "register:40f0:8", ["const:4e5404:8", "const:4:8"]]
+ 004e5404 ["CALL", null, ["callee:004b3868:8"]]
- 004e5110 ["COPY", "register:0:8", ["register:4040:8"]]
- 004e5110 ["INT_ADD", "register:40f0:8", ["const:4e5110:8", "const:4:8"]]
- 004e5110 ["CALLIND", null, ["register:0:8"]]
+ 004e5430 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004e5430 ["INT_ADD", "register:40f0:8", ["const:4e5430:8", "const:4:8"]]
+ 004e5430 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-12ea97c301814863261e794c9d9cd27d"></a>

### [`004e72f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e7/004e72f4.md) → [`004e7614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e7/004e7614.md) _ZN5Botan13hash_for_emsaERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59610.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58c60.md) [`00c58e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58e10.md)
- 新版 呼出元 1件 [`00c5a5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a5e0.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59c30.md) [`00c59de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59de0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e733c ["INT_ADD", "register:40f0:8", ["const:4e733c:8", "const:4:8"]]
- 004e733c ["CALL", null, ["callee:0043be80:8"]]
+ 004e765c ["INT_ADD", "register:40f0:8", ["const:4e765c:8", "const:4:8"]]
+ 004e765c ["CALL", null, ["callee:0043be80:8"]]
- 004e7348 ["INT_ADD", "register:40f0:8", ["const:4e7348:8", "const:4:8"]]
- 004e7348 ["CALL", null, ["callee:00c59de0:8"]]
+ 004e7668 ["INT_ADD", "register:40f0:8", ["const:4e7668:8", "const:4:8"]]
+ 004e7668 ["CALL", null, ["callee:00c59de0:8"]]
- 004e7358 ["INT_ADD", "register:40f0:8", ["const:4e7358:8", "const:4:8"]]
- 004e7358 ["CALL", null, ["callee:00c58f50:8"]]
+ 004e7678 ["INT_ADD", "register:40f0:8", ["const:4e7678:8", "const:4:8"]]
+ 004e7678 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7cb0bbbcb38bb52cefc4104d82e20a3a"></a>

### [`004e74d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e7/004e74d4.md) → [`004e77f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e7/004e77f4.md) FUN_004e77f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0054f470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054f/0054f470.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00545218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/00545218.md) [`005454b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005454b4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0054f790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054f/0054f790.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00545538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00545/00545538.md) [`005457d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00545/005457d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e7524 ["INT_ADD", "register:40f0:8", ["const:4e7524:8", "const:4:8"]]
- 004e7524 ["CALL", null, ["callee:0043bf04:8"]]
+ 004e7844 ["INT_ADD", "register:40f0:8", ["const:4e7844:8", "const:4:8"]]
+ 004e7844 ["CALL", null, ["callee:0043bf04:8"]]
- 004e7554 ["INT_ADD", "register:40f0:8", ["const:4e7554:8", "const:4:8"]]
- 004e7554 ["CALL", null, ["callee:00545538:8"]]
+ 004e7874 ["INT_ADD", "register:40f0:8", ["const:4e7874:8", "const:4:8"]]
+ 004e7874 ["CALL", null, ["callee:00545538:8"]]
- 004e7570 ["INT_ADD", "register:40f0:8", ["const:4e7570:8", "const:4:8"]]
- 004e7570 ["CALL", null, ["callee:005457d4:8"]]
+ 004e7890 ["INT_ADD", "register:40f0:8", ["const:4e7890:8", "const:4:8"]]
+ 004e7890 ["CALL", null, ["callee:005457d4:8"]]
~~~


<a id="compare-67ad00f389a39e8da7fd730bd237eb98"></a>

### [`004e75f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e7/004e75f0.md) → [`004e7910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e7/004e7910.md) FUN_004e7910

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e763c ["INT_ADD", "register:40f0:8", ["const:4e763c:8", "const:4:8"]]
- 004e763c ["CALL", null, ["callee:00c58f50:8"]]
+ 004e795c ["INT_ADD", "register:40f0:8", ["const:4e795c:8", "const:4:8"]]
+ 004e795c ["CALL", null, ["callee:00c58f50:8"]]
- 004e764c ["INT_ADD", "register:40f0:8", ["const:4e764c:8", "const:4:8"]]
- 004e764c ["CALL", null, ["callee:00c58f50:8"]]
+ 004e796c ["INT_ADD", "register:40f0:8", ["const:4e796c:8", "const:4:8"]]
+ 004e796c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f814dbedb58d4d46d2037710aef59eec"></a>

### [`004e8d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e8/004e8d68.md) → [`004e9088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e9/004e9088.md) _ZN5Botan18create_private_keyERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEERNS_21RandomNumberGeneratorES8_S8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c588c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c588c0.md) [`00c59680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59680.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59890.md) [`00c5a650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e8df8 ["INT_ADD", "register:40f0:8", ["const:4e8df8:8", "const:4:8"]]
- 004e8df8 ["CALL", null, ["callee:00c59890:8"]]
+ 004e9118 ["INT_ADD", "register:40f0:8", ["const:4e9118:8", "const:4:8"]]
+ 004e9118 ["CALL", null, ["callee:00c59890:8"]]
- 004e8e0c ["INT_ADD", "register:40f0:8", ["const:4e8e0c:8", "const:4:8"]]
- 004e8e0c ["CALL", null, ["callee:00c58f30:8"]]
+ 004e912c ["INT_ADD", "register:40f0:8", ["const:4e912c:8", "const:4:8"]]
+ 004e912c ["CALL", null, ["callee:00c58f30:8"]]
- 004e8e20 ["INT_ADD", "register:40f0:8", ["const:4e8e20:8", "const:4:8"]]
- 004e8e20 ["CALL", null, ["callee:00c5a650:8"]]
+ 004e9140 ["INT_ADD", "register:40f0:8", ["const:4e9140:8", "const:4:8"]]
+ 004e9140 ["CALL", null, ["callee:00c5a650:8"]]
~~~


<a id="compare-f5d78d2127f266b522e1b9888ab5da4b"></a>

### [`004e9a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e9/004e9a68.md) → [`004e9d88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e9/004e9d88.md) _ZN5Botan26probe_provider_private_keyERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEENS0_6vectorIS6_NS4_IS6_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004e9b0c ["INT_ADD", "register:40f0:8", ["const:4e9b0c:8", "const:4:8"]]
- 004e9b0c ["CALL", null, ["callee:0043be80:8"]]
+ 004e9e2c ["INT_ADD", "register:40f0:8", ["const:4e9e2c:8", "const:4:8"]]
+ 004e9e2c ["CALL", null, ["callee:0043be80:8"]]
- 004e9b20 ["INT_ADD", "register:40f0:8", ["const:4e9b20:8", "const:4:8"]]
- 004e9b20 ["CALL", null, ["callee:005410dc:8"]]
+ 004e9e40 ["INT_ADD", "register:40f0:8", ["const:4e9e40:8", "const:4:8"]]
+ 004e9e40 ["CALL", null, ["callee:005410dc:8"]]
~~~


<a id="compare-f09eeb9fb0c719f9cdbc2f07b8deabcf"></a>

### [`004ea050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ea/004ea050.md) → [`004ea370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ea/004ea370.md) _ZNK5Botan10Public_Key7get_oidEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58750.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59720.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ea084 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ea084 ["INT_ADD", "register:40f0:8", ["const:4ea084:8", "const:4:8"]]
- 004ea084 ["CALLIND", null, ["register:0:8"]]
+ 004ea3a4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ea3a4 ["INT_ADD", "register:40f0:8", ["const:4ea3a4:8", "const:4:8"]]
+ 004ea3a4 ["CALLIND", null, ["register:0:8"]]
- 004ea090 ["INT_ADD", "register:40f0:8", ["const:4ea090:8", "const:4:8"]]
- 004ea090 ["CALL", null, ["callee:00c59720:8"]]
+ 004ea3b0 ["INT_ADD", "register:40f0:8", ["const:4ea3b0:8", "const:4:8"]]
+ 004ea3b0 ["CALL", null, ["callee:00c59720:8"]]
- 004ea0a0 ["INT_ADD", "register:40f0:8", ["const:4ea0a0:8", "const:4:8"]]
- 004ea0a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 004ea3c0 ["INT_ADD", "register:40f0:8", ["const:4ea3c0:8", "const:4:8"]]
+ 004ea3c0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3b37d220feeb51661ebeb8db40eef47d"></a>

### [`004ea530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ea/004ea530.md) → [`004ea850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ea/004ea850.md) _ZNK5Botan10Public_Key18fingerprint_publicERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59690.md) [`00c596a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596a0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a660.md) [`00c5a670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a670.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ea55c ["INT_ADD", "register:40f0:8", ["const:4ea55c:8", "const:4:8"]]
- 004ea55c ["CALL", null, ["callee:00c5a670:8"]]
+ 004ea87c ["INT_ADD", "register:40f0:8", ["const:4ea87c:8", "const:4:8"]]
+ 004ea87c ["CALL", null, ["callee:00c5a670:8"]]
- 004ea570 ["INT_ADD", "register:40f0:8", ["const:4ea570:8", "const:4:8"]]
- 004ea570 ["CALL", null, ["callee:00c5a660:8"]]
+ 004ea890 ["INT_ADD", "register:40f0:8", ["const:4ea890:8", "const:4:8"]]
+ 004ea890 ["CALL", null, ["callee:00c5a660:8"]]
- 004ea580 ["INT_ADD", "register:40f0:8", ["const:4ea580:8", "const:4:8"]]
- 004ea580 ["CALL", null, ["callee:00c58f50:8"]]
+ 004ea8a0 ["INT_ADD", "register:40f0:8", ["const:4ea8a0:8", "const:4:8"]]
+ 004ea8a0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-113a6642c5cd109f7ee924918f3f5ef5"></a>

### [`004ec298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ec298.md) → [`004ec5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ec/004ec5b8.md) FUN_004ec5b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005d37c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d37c8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005d3b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3b78.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ec2b4 ["INT_ADD", "register:40f0:8", ["const:4ec2b4:8", "const:4:8"]]
- 004ec2b4 ["CALL", null, ["callee:00c58f50:8"]]
+ 004ec5d4 ["INT_ADD", "register:40f0:8", ["const:4ec5d4:8", "const:4:8"]]
+ 004ec5d4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f38523dd8bbfd970f15834136253c587"></a>

### [`004ecc24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecc24.md) → [`004ecf44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ec/004ecf44.md) _ZN5Botan5PKCS88load_keyERNS_10DataSourceENSt6__ndk18functionIFNS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEvEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`004ed070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ed/004ed070.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ecc68 ["COPY", "register:0:8", ["register:4040:8"]]
- 004ecc68 ["INT_ADD", "register:40f0:8", ["const:4ecc68:8", "const:4:8"]]
- 004ecc68 ["CALLIND", null, ["register:0:8"]]
+ 004ecf88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ecf88 ["INT_ADD", "register:40f0:8", ["const:4ecf88:8", "const:4:8"]]
+ 004ecf88 ["CALLIND", null, ["register:0:8"]]
- 004ecc94 ["COPY", "register:0:8", ["register:4040:8"]]
- 004ecc94 ["INT_ADD", "register:40f0:8", ["const:4ecc94:8", "const:4:8"]]
- 004ecc94 ["CALLIND", null, ["register:0:8"]]
+ 004ecfb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ecfb4 ["INT_ADD", "register:40f0:8", ["const:4ecfb4:8", "const:4:8"]]
+ 004ecfb4 ["CALLIND", null, ["register:0:8"]]
- 004eccac ["INT_ADD", "register:40f0:8", ["const:4eccac:8", "const:4:8"]]
- 004eccac ["CALL", null, ["callee:004ed070:8"]]
+ 004ecfcc ["INT_ADD", "register:40f0:8", ["const:4ecfcc:8", "const:4:8"]]
+ 004ecfcc ["CALL", null, ["callee:004ed070:8"]]
~~~


<a id="compare-97867c90803e313ef40661e2ae6d2653"></a>

### [`004ee058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee058.md) → [`004ee378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ee/004ee378.md) _ZN5Botan5PKCS88load_keyERNS_10DataSourceERNS_21RandomNumberGeneratorENSt6__ndk18functionIFNS5_12basic_stringIcNS5_11char_traitsIcEENS5_9all

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`004ed070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ed/004ed070.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ee094 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ee094 ["INT_ADD", "register:40f0:8", ["const:4ee094:8", "const:4:8"]]
- 004ee094 ["CALLIND", null, ["register:0:8"]]
+ 004ee3b4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ee3b4 ["INT_ADD", "register:40f0:8", ["const:4ee3b4:8", "const:4:8"]]
+ 004ee3b4 ["CALLIND", null, ["register:0:8"]]
- 004ee0b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 004ee0b4 ["INT_ADD", "register:40f0:8", ["const:4ee0b4:8", "const:4:8"]]
- 004ee0b4 ["CALLIND", null, ["register:0:8"]]
+ 004ee3d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ee3d4 ["INT_ADD", "register:40f0:8", ["const:4ee3d4:8", "const:4:8"]]
+ 004ee3d4 ["CALLIND", null, ["register:0:8"]]
- 004ee0e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 004ee0e4 ["INT_ADD", "register:40f0:8", ["const:4ee0e4:8", "const:4:8"]]
- 004ee0e4 ["CALLIND", null, ["register:0:8"]]
+ 004ee404 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ee404 ["INT_ADD", "register:40f0:8", ["const:4ee404:8", "const:4:8"]]
+ 004ee404 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f457daa684d55055324b0b959b3891d1"></a>

### [`004ee244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee244.md) → [`004ee564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ee/004ee564.md) _ZN5Botan5PKCS88load_keyERNS_10DataSourceERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59700.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a6d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ee268 ["INT_ADD", "register:40f0:8", ["const:4ee268:8", "const:4:8"]]
- 004ee268 ["CALL", null, ["callee:00c5a6d0:8"]]
+ 004ee588 ["INT_ADD", "register:40f0:8", ["const:4ee588:8", "const:4:8"]]
+ 004ee588 ["CALL", null, ["callee:00c5a6d0:8"]]
- 004ee290 ["INT_ADD", "register:40f0:8", ["const:4ee290:8", "const:4:8"]]
- 004ee290 ["CALL", null, ["callee:00c58f80:8"]]
+ 004ee5b0 ["INT_ADD", "register:40f0:8", ["const:4ee5b0:8", "const:4:8"]]
+ 004ee5b0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-b065d1da161c0db36511b42769eb96b5"></a>

### [`004ee374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee374.md) → [`004ee694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ee/004ee694.md) _ZN5Botan5PKCS88load_keyERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERNS_21RandomNumberGeneratorENS1_8functionIFS7_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59730.md) [`00c59740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59740.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004ed070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ed/004ed070.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a700.md) [`00c5a710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a710.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ee3a0 ["INT_ADD", "register:40f0:8", ["const:4ee3a0:8", "const:4:8"]]
- 004ee3a0 ["CALL", null, ["callee:00c5a700:8"]]
+ 004ee6c0 ["INT_ADD", "register:40f0:8", ["const:4ee6c0:8", "const:4:8"]]
+ 004ee6c0 ["CALL", null, ["callee:00c5a700:8"]]
- 004ee3bc ["COPY", "register:0:8", ["register:4040:8"]]
- 004ee3bc ["INT_ADD", "register:40f0:8", ["const:4ee3bc:8", "const:4:8"]]
- 004ee3bc ["CALLIND", null, ["register:0:8"]]
+ 004ee6dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ee6dc ["INT_ADD", "register:40f0:8", ["const:4ee6dc:8", "const:4:8"]]
+ 004ee6dc ["CALLIND", null, ["register:0:8"]]
- 004ee3ec ["COPY", "register:0:8", ["register:4040:8"]]
- 004ee3ec ["INT_ADD", "register:40f0:8", ["const:4ee3ec:8", "const:4:8"]]
- 004ee3ec ["CALLIND", null, ["register:0:8"]]
+ 004ee70c ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ee70c ["INT_ADD", "register:40f0:8", ["const:4ee70c:8", "const:4:8"]]
+ 004ee70c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c30a1a8b368743eadbac67a9372968d9"></a>

### [`004ee888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee888.md) → [`004eeba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ee/004eeba8.md) _ZN5Botan5PKCS88copy_keyERKNS_11Private_KeyERNS_21RandomNumberGeneratorE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59720.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a6f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ee8a8 ["INT_ADD", "register:40f0:8", ["const:4ee8a8:8", "const:4:8"]]
- 004ee8a8 ["CALL", null, ["callee:00c5a6f0:8"]]
+ 004eebc8 ["INT_ADD", "register:40f0:8", ["const:4eebc8:8", "const:4:8"]]
+ 004eebc8 ["CALL", null, ["callee:00c5a6f0:8"]]
- 004ee8d0 ["INT_ADD", "register:40f0:8", ["const:4ee8d0:8", "const:4:8"]]
- 004ee8d0 ["CALL", null, ["callee:00c58f80:8"]]
+ 004eebf0 ["INT_ADD", "register:40f0:8", ["const:4eebf0:8", "const:4:8"]]
+ 004eebf0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-07c8af46e83184b7af1d2766938c3cd7"></a>

### [`004eef7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004eef7c.md) → [`004ef29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ef/004ef29c.md) _ZN5Botan16PK_Encryptor_EMED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c592e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c592e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5a2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a2b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004eef8c ["INT_ADD", "register:40f0:8", ["const:4eef8c:8", "const:4:8"]]
- 004eef8c ["CALL", null, ["callee:00c5a2b0:8"]]
+ 004ef2ac ["INT_ADD", "register:40f0:8", ["const:4ef2ac:8", "const:4:8"]]
+ 004ef2ac ["CALL", null, ["callee:00c5a2b0:8"]]
~~~


<a id="compare-df88f0e6afdb1f12a9c3882789140fdd"></a>

### [`004ef340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ef/004ef340.md) → [`004ef660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ef/004ef660.md) _ZN5Botan16PK_Decryptor_EMED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c592d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c592d0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5a2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a2a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ef350 ["INT_ADD", "register:40f0:8", ["const:4ef350:8", "const:4:8"]]
- 004ef350 ["CALL", null, ["callee:00c5a2a0:8"]]
+ 004ef670 ["INT_ADD", "register:40f0:8", ["const:4ef670:8", "const:4:8"]]
+ 004ef670 ["CALL", null, ["callee:00c5a2a0:8"]]
~~~


<a id="compare-20de70589061e98e1505501a0bc08086"></a>

### [`004efa94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ef/004efa94.md) → [`004efdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ef/004efdb4.md) _ZN5Botan16PK_Key_AgreementaSEOS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004efacc ["COPY", "register:0:8", ["register:4048:8"]]
- 004efacc ["INT_ADD", "register:40f0:8", ["const:4efacc:8", "const:4:8"]]
- 004efacc ["CALLIND", null, ["register:0:8"]]
+ 004efdec ["COPY", "register:0:8", ["register:4048:8"]]
+ 004efdec ["INT_ADD", "register:40f0:8", ["const:4efdec:8", "const:4:8"]]
+ 004efdec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c36f6f32321a75bfaf899b6df96a431b"></a>

### [`004f072c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f072c.md) → [`004f0a4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f0/004f0a4c.md) _ZN5Botan11PK_Verifier14verify_messageEPKhmS2_m

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59770.md) · 呼出先 1件 [`00c59330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59330.md)
- 新版 呼出元 1件 [`00c5a740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a740.md) · 呼出先 1件 [`00c5a300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a300.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f0754 ["COPY", "register:0:8", ["register:4040:8"]]
- 004f0754 ["INT_ADD", "register:40f0:8", ["const:4f0754:8", "const:4:8"]]
- 004f0754 ["CALLIND", null, ["register:0:8"]]
+ 004f0a74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004f0a74 ["INT_ADD", "register:40f0:8", ["const:4f0a74:8", "const:4:8"]]
+ 004f0a74 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-003d99f645db18de05814f6804ee3f1e"></a>

### [`004f0bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0bc0.md) → [`004f0ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f0/004f0ee0.md) FUN_004f0ee0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004f0784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0784.md) · 呼出先 6件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`004f0aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f0/004f0aa4.md) · 呼出先 6件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f0c38 ["INT_ADD", "register:40f0:8", ["const:4f0c38:8", "const:4:8"]]
- 004f0c38 ["CALL", null, ["callee:00c58f30:8"]]
+ 004f0f58 ["INT_ADD", "register:40f0:8", ["const:4f0f58:8", "const:4:8"]]
+ 004f0f58 ["CALL", null, ["callee:00c58f30:8"]]
- 004f0c54 ["INT_ADD", "register:40f0:8", ["const:4f0c54:8", "const:4:8"]]
- 004f0c54 ["CALL", null, ["callee:00c59130:8"]]
+ 004f0f74 ["INT_ADD", "register:40f0:8", ["const:4f0f74:8", "const:4:8"]]
+ 004f0f74 ["CALL", null, ["callee:00c59130:8"]]
- 004f0c64 ["INT_ADD", "register:40f0:8", ["const:4f0c64:8", "const:4:8"]]
- 004f0c64 ["CALL", null, ["callee:00c590a0:8"]]
+ 004f0f84 ["INT_ADD", "register:40f0:8", ["const:4f0f84:8", "const:4:8"]]
+ 004f0f84 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-aa884aec614bee3cf32a22b55f166856"></a>

### [`004f1588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f1588.md) → [`004f18a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f1/004f18a8.md) _ZN5Botan4X5098load_keyERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59730.md) [`00c59740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59740.md) [`00c597a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597a0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a700.md) [`00c5a710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a710.md) [`00c5a770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a770.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f15b0 ["INT_ADD", "register:40f0:8", ["const:4f15b0:8", "const:4:8"]]
- 004f15b0 ["CALL", null, ["callee:00c5a700:8"]]
+ 004f18d0 ["INT_ADD", "register:40f0:8", ["const:4f18d0:8", "const:4:8"]]
+ 004f18d0 ["CALL", null, ["callee:00c5a700:8"]]
- 004f15b8 ["INT_ADD", "register:40f0:8", ["const:4f15b8:8", "const:4:8"]]
- 004f15b8 ["CALL", null, ["callee:00c5a770:8"]]
+ 004f18d8 ["INT_ADD", "register:40f0:8", ["const:4f18d8:8", "const:4:8"]]
+ 004f18d8 ["CALL", null, ["callee:00c5a770:8"]]
- 004f15c4 ["INT_ADD", "register:40f0:8", ["const:4f15c4:8", "const:4:8"]]
- 004f15c4 ["CALL", null, ["callee:00c5a710:8"]]
+ 004f18e4 ["INT_ADD", "register:40f0:8", ["const:4f18e4:8", "const:4:8"]]
+ 004f18e4 ["CALL", null, ["callee:00c5a710:8"]]
~~~


<a id="compare-6218b24050deb61a1bc9e1c2f37233d9"></a>

### [`004f17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f17dc.md) → [`004f1afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f1/004f1afc.md) _ZN5Botan21RandomNumberGenerator23randomize_with_ts_inputEPhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58650.md) [`00c597d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597d0.md) [`00c597e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597e0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59620.md) [`00c5a7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7a0.md) [`00c5a7b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f1810 ["INT_ADD", "register:40f0:8", ["const:4f1810:8", "const:4:8"]]
- 004f1810 ["CALL", null, ["callee:00c5a7a0:8"]]
+ 004f1b30 ["INT_ADD", "register:40f0:8", ["const:4f1b30:8", "const:4:8"]]
+ 004f1b30 ["CALL", null, ["callee:00c5a7a0:8"]]
- 004f1818 ["INT_ADD", "register:40f0:8", ["const:4f1818:8", "const:4:8"]]
- 004f1818 ["CALL", null, ["callee:00c59620:8"]]
+ 004f1b38 ["INT_ADD", "register:40f0:8", ["const:4f1b38:8", "const:4:8"]]
+ 004f1b38 ["CALL", null, ["callee:00c59620:8"]]
- 004f183c ["INT_ADD", "register:40f0:8", ["const:4f183c:8", "const:4:8"]]
- 004f183c ["CALL", null, ["callee:00c5a7b0:8"]]
+ 004f1b5c ["INT_ADD", "register:40f0:8", ["const:4f1b5c:8", "const:4:8"]]
+ 004f1b5c ["CALL", null, ["callee:00c5a7b0:8"]]
~~~


<a id="compare-3f8b68c03455c139464250929aa160da"></a>

### [`004f188c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f188c.md) → [`004f1bac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f1/004f1bac.md) _ZN5Botan2OS23get_system_timestamp_nsEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58650.md) [`00c597d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59620.md) [`00c5a7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f18b0 ["INT_ADD", "register:40f0:8", ["const:4f18b0:8", "const:4:8"]]
- 004f18b0 ["CALL", null, ["callee:00c5a7a0:8"]]
+ 004f1bd0 ["INT_ADD", "register:40f0:8", ["const:4f1bd0:8", "const:4:8"]]
+ 004f1bd0 ["CALL", null, ["callee:00c5a7a0:8"]]
- 004f18b8 ["INT_ADD", "register:40f0:8", ["const:4f18b8:8", "const:4:8"]]
- 004f18b8 ["CALL", null, ["callee:00c59620:8"]]
+ 004f1bd8 ["INT_ADD", "register:40f0:8", ["const:4f1bd8:8", "const:4:8"]]
+ 004f1bd8 ["CALL", null, ["callee:00c59620:8"]]
- 004f18f8 ["INT_ADD", "register:40f0:8", ["const:4f18f8:8", "const:4:8"]]
- 004f18f8 ["CALL", null, ["callee:00c58f80:8"]]
+ 004f1c18 ["INT_ADD", "register:40f0:8", ["const:4f1c18:8", "const:4:8"]]
+ 004f1c18 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-ab80efebb9f0172b8848c92cb90f51e5"></a>

### [`004f18fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f18fc.md) → [`004f1c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f1/004f1c1c.md) _ZN5Botan2OS25get_high_resolution_clockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c597e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597e0.md) · 呼出先 3件 [`00c57f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f90.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c597d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597d0.md)
- 新版 呼出元 1件 [`00c5a7b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7b0.md) · 呼出先 3件 [`00c58f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f60.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f1920 ["INT_ADD", "register:40f0:8", ["const:4f1920:8", "const:4:8"]]
- 004f1920 ["CALL", null, ["callee:00c5a7a0:8"]]
+ 004f1c40 ["INT_ADD", "register:40f0:8", ["const:4f1c40:8", "const:4:8"]]
+ 004f1c40 ["CALL", null, ["callee:00c5a7a0:8"]]
- 004f1930 ["INT_ADD", "register:40f0:8", ["const:4f1930:8", "const:4:8"]]
- 004f1930 ["CALL", null, ["callee:00c5a7a0:8"]]
+ 004f1c50 ["INT_ADD", "register:40f0:8", ["const:4f1c50:8", "const:4:8"]]
+ 004f1c50 ["CALL", null, ["callee:00c5a7a0:8"]]
- 004f1940 ["INT_ADD", "register:40f0:8", ["const:4f1940:8", "const:4:8"]]
- 004f1940 ["CALL", null, ["callee:00c5a7a0:8"]]
+ 004f1c60 ["INT_ADD", "register:40f0:8", ["const:4f1c60:8", "const:4:8"]]
+ 004f1c60 ["CALL", null, ["callee:00c5a7a0:8"]]
~~~


<a id="compare-7924725f2909f8bd2328fd8b77e0cc3b"></a>

### [`004f199c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f199c.md) → [`004f1cbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f1/004f1cbc.md) _ZN5Botan21RandomNumberGenerator20randomize_with_inputEPhmPKhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f19c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 004f19c8 ["INT_ADD", "register:40f0:8", ["const:4f19c8:8", "const:4:8"]]
- 004f19c8 ["CALLIND", null, ["register:0:8"]]
+ 004f1ce8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004f1ce8 ["INT_ADD", "register:40f0:8", ["const:4f1ce8:8", "const:4:8"]]
+ 004f1ce8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4a95f49c76b6ff9aa9cf50e6b221a4c1"></a>

### [`004f19f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f19f0.md) → [`004f1d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f1/004f1d10.md) _ZN5Botan21RandomNumberGenerator6reseedERNS_15Entropy_SourcesEmNSt6__ndk16chrono8durationIxNS3_5ratioILl1ELl1000EEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58650.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59620.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f1a14 ["INT_ADD", "register:40f0:8", ["const:4f1a14:8", "const:4:8"]]
- 004f1a14 ["CALL", null, ["callee:00c59620:8"]]
+ 004f1d34 ["INT_ADD", "register:40f0:8", ["const:4f1d34:8", "const:4:8"]]
+ 004f1d34 ["CALL", null, ["callee:00c59620:8"]]
- 004f1a44 ["COPY", "register:0:8", ["register:4040:8"]]
- 004f1a44 ["INT_ADD", "register:40f0:8", ["const:4f1a44:8", "const:4:8"]]
- 004f1a44 ["CALLIND", null, ["register:0:8"]]
+ 004f1d64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004f1d64 ["INT_ADD", "register:40f0:8", ["const:4f1d64:8", "const:4:8"]]
+ 004f1d64 ["CALLIND", null, ["register:0:8"]]
- 004f1a54 ["INT_ADD", "register:40f0:8", ["const:4f1a54:8", "const:4:8"]]
- 004f1a54 ["CALL", null, ["callee:00c59620:8"]]
+ 004f1d74 ["INT_ADD", "register:40f0:8", ["const:4f1d74:8", "const:4:8"]]
+ 004f1d74 ["CALL", null, ["callee:00c59620:8"]]
~~~


<a id="compare-c7f49a3bfdb9c7ddb2dbe13e712001e2"></a>

### [`004f1f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f1f84.md) → [`004f22a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f2/004f22a4.md) _ZNK5Botan13RSA_PublicKey20algorithm_identifierEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c597f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f1fbc ["COPY", "register:0:8", ["register:4050:8"]]
- 004f1fbc ["INT_ADD", "register:40f0:8", ["const:4f1fbc:8", "const:4:8"]]
- 004f1fbc ["CALLIND", null, ["register:0:8"]]
+ 004f22dc ["COPY", "register:0:8", ["register:4050:8"]]
+ 004f22dc ["INT_ADD", "register:40f0:8", ["const:4f22dc:8", "const:4:8"]]
+ 004f22dc ["CALLIND", null, ["register:0:8"]]
- 004f1fcc ["INT_ADD", "register:40f0:8", ["const:4f1fcc:8", "const:4:8"]]
- 004f1fcc ["CALL", null, ["callee:00c5a7c0:8"]]
+ 004f22ec ["INT_ADD", "register:40f0:8", ["const:4f22ec:8", "const:4:8"]]
+ 004f22ec ["CALL", null, ["callee:00c5a7c0:8"]]
- 004f1fdc ["INT_ADD", "register:40f0:8", ["const:4f1fdc:8", "const:4:8"]]
- 004f1fdc ["CALL", null, ["callee:00c58f50:8"]]
+ 004f22fc ["INT_ADD", "register:40f0:8", ["const:4f22fc:8", "const:4:8"]]
+ 004f22fc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b8a3f10ca843a095ef418920719403c0"></a>

### [`004f2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f2/004f2034.md) → [`004f2354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f2/004f2354.md) _ZTv0_n72_NK5Botan13RSA_PublicKey20algorithm_identifierEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c597f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f2078 ["COPY", "register:0:8", ["register:4058:8"]]
- 004f2078 ["INT_ADD", "register:40f0:8", ["const:4f2078:8", "const:4:8"]]
- 004f2078 ["CALLIND", null, ["register:0:8"]]
+ 004f2398 ["COPY", "register:0:8", ["register:4058:8"]]
+ 004f2398 ["INT_ADD", "register:40f0:8", ["const:4f2398:8", "const:4:8"]]
+ 004f2398 ["CALLIND", null, ["register:0:8"]]
- 004f2088 ["INT_ADD", "register:40f0:8", ["const:4f2088:8", "const:4:8"]]
- 004f2088 ["CALL", null, ["callee:00c5a7c0:8"]]
+ 004f23a8 ["INT_ADD", "register:40f0:8", ["const:4f23a8:8", "const:4:8"]]
+ 004f23a8 ["CALL", null, ["callee:00c5a7c0:8"]]
- 004f2098 ["INT_ADD", "register:40f0:8", ["const:4f2098:8", "const:4:8"]]
- 004f2098 ["CALL", null, ["callee:00c58f50:8"]]
+ 004f23b8 ["INT_ADD", "register:40f0:8", ["const:4f23b8:8", "const:4:8"]]
+ 004f23b8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-449b03db117dabe2adbc22f74f969d51"></a>

### [`004f5248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5248.md) → [`004f5568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f5/004f5568.md) _ZTv0_n104_NK5Botan13RSA_PublicKey20create_encryption_opERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9a

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c59830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59830.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a800.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f525c ["INT_ADD", "register:40f0:8", ["const:4f525c:8", "const:4:8"]]
- 004f525c ["CALL", null, ["callee:00c5a800:8"]]
+ 004f557c ["INT_ADD", "register:40f0:8", ["const:4f557c:8", "const:4:8"]]
+ 004f557c ["CALL", null, ["callee:00c5a800:8"]]
~~~


<a id="compare-61358d482b831b763e215f6b71d2c012"></a>

### [`004f5b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5b88.md) → [`004f5ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f5/004f5ea8.md) _ZN5Botan7SHA_16010compress_nEPKhm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00540960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540960.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00540c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540c80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f5be8 ["INT_ADD", "register:40f0:8", ["const:4f5be8:8", "const:4:8"]]
- 004f5be8 ["CALL", null, ["callee:00540c80:8"]]
+ 004f5f08 ["INT_ADD", "register:40f0:8", ["const:4f5f08:8", "const:4:8"]]
+ 004f5f08 ["CALL", null, ["callee:00540c80:8"]]
~~~


<a id="compare-afdc8d4fd05ea267c62cc07e3fe0c451"></a>

### [`004f8b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8b48.md) → [`004f8e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f8/004f8e68.md) _ZN5Botan12StreamCipher9providersERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`004f8cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8cac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`004f8fcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f8/004f8fcc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f8bb8 ["INT_ADD", "register:40f0:8", ["const:4f8bb8:8", "const:4:8"]]
- 004f8bb8 ["CALL", null, ["callee:004738a0:8"]]
+ 004f8ed8 ["INT_ADD", "register:40f0:8", ["const:4f8ed8:8", "const:4:8"]]
+ 004f8ed8 ["CALL", null, ["callee:004738a0:8"]]
- 004f8bc8 ["INT_ADD", "register:40f0:8", ["const:4f8bc8:8", "const:4:8"]]
- 004f8bc8 ["CALL", null, ["callee:004f8fcc:8"]]
+ 004f8ee8 ["INT_ADD", "register:40f0:8", ["const:4f8ee8:8", "const:4:8"]]
+ 004f8ee8 ["CALL", null, ["callee:004f8fcc:8"]]
- 004f8c04 ["INT_ADD", "register:40f0:8", ["const:4f8c04:8", "const:4:8"]]
- 004f8c04 ["CALL", null, ["callee:00c58f50:8"]]
+ 004f8f24 ["INT_ADD", "register:40f0:8", ["const:4f8f24:8", "const:4:8"]]
+ 004f8f24 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-632bd693f569091a1bfd718fc1e1d0bc"></a>

### [`004f8cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8cac.md) → [`004f8fcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f8/004f8fcc.md) FUN_004f8fcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`004f8b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8b48.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58f30.md)
- 新版 呼出元 1件 [`004f8e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f8/004f8e68.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f8cfc ["INT_ADD", "register:40f0:8", ["const:4f8cfc:8", "const:4:8"]]
- 004f8cfc ["CALL", null, ["callee:005410dc:8"]]
+ 004f901c ["INT_ADD", "register:40f0:8", ["const:4f901c:8", "const:4:8"]]
+ 004f901c ["CALL", null, ["callee:005410dc:8"]]
- 004f8d10 ["COPY", "register:0:8", ["register:4040:8"]]
- 004f8d10 ["INT_ADD", "register:40f0:8", ["const:4f8d10:8", "const:4:8"]]
- 004f8d10 ["CALLIND", null, ["register:0:8"]]
+ 004f9030 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004f9030 ["INT_ADD", "register:40f0:8", ["const:4f9030:8", "const:4:8"]]
+ 004f9030 ["CALLIND", null, ["register:0:8"]]
- 004f8d28 ["INT_ADD", "register:40f0:8", ["const:4f8d28:8", "const:4:8"]]
- 004f8d28 ["CALL", null, ["callee:00c59f00:8"]]
+ 004f9048 ["INT_ADD", "register:40f0:8", ["const:4f9048:8", "const:4:8"]]
+ 004f9048 ["CALL", null, ["callee:00c59f00:8"]]
~~~


<a id="compare-2dd12981f74de63038a59f45fdd9a0cb"></a>

### [`004f8fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8fac.md) → [`004f92cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f9/004f92cc.md) FUN_004f92cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`004f8de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8de8.md) [`00535fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535fa4.md) · 呼出先 1件 [`00c598a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598a0.md)
- 新版 呼出元 2件 [`004f9108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f9/004f9108.md) [`005362c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00536/005362c4.md) · 呼出先 1件 [`00c5a870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a870.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f8fc0 ["INT_ADD", "register:40f0:8", ["const:4f8fc0:8", "const:4:8"]]
- 004f8fc0 ["CALL", null, ["callee:00c5a870:8"]]
+ 004f92e0 ["INT_ADD", "register:40f0:8", ["const:4f92e0:8", "const:4:8"]]
+ 004f92e0 ["CALL", null, ["callee:00c5a870:8"]]
~~~


<a id="compare-07ba5c5916cd6d7f49535baf79b2cbe0"></a>

### [`004f99c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f99c4.md) → [`004f9ce4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f9/004f9ce4.md) _ZN5Botan10DataSource12discard_nextEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f9a20 ["COPY", "register:0:8", ["register:4040:8"]]
- 004f9a20 ["INT_ADD", "register:40f0:8", ["const:4f9a20:8", "const:4:8"]]
- 004f9a20 ["CALLIND", null, ["register:0:8"]]
+ 004f9d40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004f9d40 ["INT_ADD", "register:40f0:8", ["const:4f9d40:8", "const:4:8"]]
+ 004f9d40 ["CALLIND", null, ["register:0:8"]]
- 004f9a5c ["INT_ADD", "register:40f0:8", ["const:4f9a5c:8", "const:4:8"]]
- 004f9a5c ["CALL", null, ["callee:00c58f80:8"]]
+ 004f9d7c ["INT_ADD", "register:40f0:8", ["const:4f9d7c:8", "const:4:8"]]
+ 004f9d7c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-0d78d9a002cab833b5f5980aea83d574"></a>

### [`004f9a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f9a60.md) → [`004f9d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f9/004f9d80.md) _ZN5Botan17DataSource_Memory4readEPhm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004afc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004af/004afc50.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`004aff70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004af/004aff70.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f9a98 ["INT_ADD", "register:40f0:8", ["const:4f9a98:8", "const:4:8"]]
- 004f9a98 ["CALL", null, ["callee:00c58fe0:8"]]
+ 004f9db8 ["INT_ADD", "register:40f0:8", ["const:4f9db8:8", "const:4:8"]]
+ 004f9db8 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-29131cb59b7c5f550a5f01d3b37d045c"></a>

### [`004f9ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f9ad4.md) → [`004f9df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f9/004f9df4.md) _ZNK5Botan17DataSource_Memory4peekEPhmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f9b14 ["INT_ADD", "register:40f0:8", ["const:4f9b14:8", "const:4:8"]]
- 004f9b14 ["CALL", null, ["callee:00c58fe0:8"]]
+ 004f9e34 ["INT_ADD", "register:40f0:8", ["const:4f9e34:8", "const:4:8"]]
+ 004f9e34 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-65f270dc2ce19ce78ab6bc29fb4a94a1"></a>

### [`004f9ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f9ccc.md) → [`004f9fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004f9/004f9fec.md) _ZN5Botan17DataSource_Stream15check_availableEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c598b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598b0.md) [`00c598c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598c0.md) [`00c598d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5a880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a880.md) [`00c5a890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a890.md) [`00c5a8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a8a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004f9ce8 ["INT_ADD", "register:40f0:8", ["const:4f9ce8:8", "const:4:8"]]
- 004f9ce8 ["CALL", null, ["callee:00c5a880:8"]]
+ 004fa008 ["INT_ADD", "register:40f0:8", ["const:4fa008:8", "const:4:8"]]
+ 004fa008 ["CALL", null, ["callee:00c5a880:8"]]
- 004f9d00 ["INT_ADD", "register:40f0:8", ["const:4f9d00:8", "const:4:8"]]
- 004f9d00 ["CALL", null, ["callee:00c5a890:8"]]
+ 004fa020 ["INT_ADD", "register:40f0:8", ["const:4fa020:8", "const:4:8"]]
+ 004fa020 ["CALL", null, ["callee:00c5a890:8"]]
- 004f9d08 ["INT_ADD", "register:40f0:8", ["const:4f9d08:8", "const:4:8"]]
- 004f9d08 ["CALL", null, ["callee:00c5a880:8"]]
+ 004fa028 ["INT_ADD", "register:40f0:8", ["const:4fa028:8", "const:4:8"]]
+ 004fa028 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-f6bed9c3279fa78b359f8e336158fd57"></a>

### [`004fa3c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa3c4.md) → [`004fa6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fa/004fa6e4.md) _ZN5Botan17DataSource_StreamD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59740.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5a710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a710.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004fa3e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 004fa3e8 ["INT_ADD", "register:40f0:8", ["const:4fa3e8:8", "const:4:8"]]
- 004fa3e8 ["CALLIND", null, ["register:0:8"]]
+ 004fa708 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004fa708 ["INT_ADD", "register:40f0:8", ["const:4fa708:8", "const:4:8"]]
+ 004fa708 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ded03b4567dd438ccd10963f24d6e8bc"></a>

### [`004fa410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa410.md) → [`004fa730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fa/004fa730.md) _ZN5Botan17DataSource_StreamD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c59740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59740.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5a710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a710.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004fa420 ["INT_ADD", "register:40f0:8", ["const:4fa420:8", "const:4:8"]]
- 004fa420 ["CALL", null, ["callee:00c5a710:8"]]
+ 004fa740 ["INT_ADD", "register:40f0:8", ["const:4fa740:8", "const:4:8"]]
+ 004fa740 ["CALL", null, ["callee:00c5a710:8"]]
~~~


<a id="compare-e35306dc8480e122cf91131ff4470c73"></a>

### [`004fc71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fc/004fc71c.md) → [`004fca3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fc/004fca3c.md) FUN_004fca3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004fd9bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fd/004fd9bc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`004fdcdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fd/004fdcdc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004fc76c ["INT_ADD", "register:40f0:8", ["const:4fc76c:8", "const:4:8"]]
- 004fc76c ["CALL", null, ["callee:00c58f50:8"]]
+ 004fca8c ["INT_ADD", "register:40f0:8", ["const:4fca8c:8", "const:4:8"]]
+ 004fca8c ["CALL", null, ["callee:00c58f50:8"]]
- 004fc77c ["INT_ADD", "register:40f0:8", ["const:4fc77c:8", "const:4:8"]]
- 004fc77c ["CALL", null, ["callee:00c58f50:8"]]
+ 004fca9c ["INT_ADD", "register:40f0:8", ["const:4fca9c:8", "const:4:8"]]
+ 004fca9c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-eceebd775aa4d570be53c970a5282b28"></a>

### [`004fd75c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fd/004fd75c.md) → [`004fda7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fd/004fda7c.md) _ZN5Botan11erase_charsERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEERKNS0_3setIcNS0_4lessIcEES5_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c586d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c596a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004fd7a4 ["INT_ADD", "register:40f0:8", ["const:4fd7a4:8", "const:4:8"]]
- 004fd7a4 ["CALL", null, ["callee:00c596a0:8"]]
+ 004fdac4 ["INT_ADD", "register:40f0:8", ["const:4fdac4:8", "const:4:8"]]
+ 004fdac4 ["CALL", null, ["callee:00c596a0:8"]]
~~~


<a id="compare-82cfe6194434c172309ffdd6cd39132d"></a>

### [`004fd814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fd/004fd814.md) → [`004fdb34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fd/004fdb34.md) _ZN5Botan13replace_charsERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEERKNS0_3setIcNS0_4lessIcEES5_EEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004fd854 ["INT_ADD", "register:40f0:8", ["const:4fd854:8", "const:4:8"]]
- 004fd854 ["CALL", null, ["callee:0043be80:8"]]
+ 004fdb74 ["INT_ADD", "register:40f0:8", ["const:4fdb74:8", "const:4:8"]]
+ 004fdb74 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-75d43382693d4e5cd74881aeff70872b"></a>

### [`004fd8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fd/004fd8f8.md) → [`004fdc18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fd/004fdc18.md) _ZN5Botan12replace_charERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEcc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004fd938 ["INT_ADD", "register:40f0:8", ["const:4fd938:8", "const:4:8"]]
- 004fd938 ["CALL", null, ["callee:0043be80:8"]]
+ 004fdc58 ["INT_ADD", "register:40f0:8", ["const:4fdc58:8", "const:4:8"]]
+ 004fdc58 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-98a4c319a61ca054f9d278e4cfbc443c"></a>

### [`004fe2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fe/004fe2e0.md) → [`004fe600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fe/004fe600.md) _ZN5Botan8clean_wsERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59a10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59a10.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c5a9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a9e0.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004fe418 ["INT_ADD", "register:40f0:8", ["const:4fe418:8", "const:4:8"]]
- 004fe418 ["CALL", null, ["callee:00c58f30:8"]]
+ 004fe738 ["INT_ADD", "register:40f0:8", ["const:4fe738:8", "const:4:8"]]
+ 004fe738 ["CALL", null, ["callee:00c58f30:8"]]
- 004fe438 ["INT_ADD", "register:40f0:8", ["const:4fe438:8", "const:4:8"]]
- 004fe438 ["CALL", null, ["callee:00c58fe0:8"]]
+ 004fe758 ["INT_ADD", "register:40f0:8", ["const:4fe758:8", "const:4:8"]]
+ 004fe758 ["CALL", null, ["callee:00c58fe0:8"]]
- 004fe45c ["INT_ADD", "register:40f0:8", ["const:4fe45c:8", "const:4:8"]]
- 004fe45c ["CALL", null, ["callee:00442c7c:8"]]
+ 004fe77c ["INT_ADD", "register:40f0:8", ["const:4fe77c:8", "const:4:8"]]
+ 004fe77c ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-fb8a6fcfcbf1b4b8fc756d536c4d1d54"></a>

### [`004ff080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff080.md) → [`004ff3a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff3a0.md) _ZN5Botan15AlternativeName13add_attributeERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59a20.md) · 呼出先 3件 [`004ff1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff1e0.md) [`00547bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547bf0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5a9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a9f0.md) · 呼出先 3件 [`004ff500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff500.md) [`00547f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00547/00547f10.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ff0d8 ["INT_ADD", "register:40f0:8", ["const:4ff0d8:8", "const:4:8"]]
- 004ff0d8 ["CALL", null, ["callee:00547f10:8"]]
+ 004ff3f8 ["INT_ADD", "register:40f0:8", ["const:4ff3f8:8", "const:4:8"]]
+ 004ff3f8 ["CALL", null, ["callee:00547f10:8"]]
- 004ff16c ["INT_ADD", "register:40f0:8", ["const:4ff16c:8", "const:4:8"]]
- 004ff16c ["CALL", null, ["callee:00c590f0:8"]]
+ 004ff48c ["INT_ADD", "register:40f0:8", ["const:4ff48c:8", "const:4:8"]]
+ 004ff48c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-b3c898a398822ee3f834e1a51c265b82"></a>

### [`004ff1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff1e0.md) → [`004ff500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff500.md) FUN_004ff500

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 18件 [`004ff080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff080.md) [`004ff468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff468.md) [`00504a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00504/00504a04.md) [`00504a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00504/00504a08.md) [`00504ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00504/00504ab0.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00549114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549114.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 18件 [`004ff3a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff3a0.md) [`004ff788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff788.md) [`00504d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00504/00504d24.md) [`00504d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00504/00504d28.md) [`00504dd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00504/00504dd0.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00549434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549434.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ff230 ["INT_ADD", "register:40f0:8", ["const:4ff230:8", "const:4:8"]]
- 004ff230 ["CALL", null, ["callee:0043be80:8"]]
+ 004ff550 ["INT_ADD", "register:40f0:8", ["const:4ff550:8", "const:4:8"]]
+ 004ff550 ["CALL", null, ["callee:0043be80:8"]]
- 004ff25c ["INT_ADD", "register:40f0:8", ["const:4ff25c:8", "const:4:8"]]
- 004ff25c ["CALL", null, ["callee:0043be80:8"]]
+ 004ff57c ["INT_ADD", "register:40f0:8", ["const:4ff57c:8", "const:4:8"]]
+ 004ff57c ["CALL", null, ["callee:0043be80:8"]]
- 004ff268 ["INT_ADD", "register:40f0:8", ["const:4ff268:8", "const:4:8"]]
- 004ff268 ["CALL", null, ["callee:00549434:8"]]
+ 004ff588 ["INT_ADD", "register:40f0:8", ["const:4ff588:8", "const:4:8"]]
+ 004ff588 ["CALL", null, ["callee:00549434:8"]]
~~~


<a id="compare-23bec2a13b4ebf98e207d673fca754b9"></a>

### [`004ff2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff2f0.md) → [`004ff610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff610.md) _ZN5Botan15AlternativeName13add_othernameERKNS_3OIDERKNSt6__ndk112basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEENS_8ASN1_TagE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`004ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff3bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59a30.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004ff6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff6dc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5aa00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5aa00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ff33c ["INT_ADD", "register:40f0:8", ["const:4ff33c:8", "const:4:8"]]
- 004ff33c ["CALL", null, ["callee:00c5aa00:8"]]
+ 004ff65c ["INT_ADD", "register:40f0:8", ["const:4ff65c:8", "const:4:8"]]
+ 004ff65c ["CALL", null, ["callee:00c5aa00:8"]]
- 004ff34c ["INT_ADD", "register:40f0:8", ["const:4ff34c:8", "const:4:8"]]
- 004ff34c ["CALL", null, ["callee:004ff6dc:8"]]
+ 004ff66c ["INT_ADD", "register:40f0:8", ["const:4ff66c:8", "const:4:8"]]
+ 004ff66c ["CALL", null, ["callee:004ff6dc:8"]]
- 004ff35c ["INT_ADD", "register:40f0:8", ["const:4ff35c:8", "const:4:8"]]
- 004ff35c ["CALL", null, ["callee:00c58f50:8"]]
+ 004ff67c ["INT_ADD", "register:40f0:8", ["const:4ff67c:8", "const:4:8"]]
+ 004ff67c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-c99dd616ecad1e19fa67400a7c708d13"></a>

### [`004ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff3bc.md) → [`004ff6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff6dc.md) FUN_004ff6dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`004ff2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff2f0.md) [`004ffe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ffe60.md) [`005140f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00514/005140f8.md) [`0052de5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052de5c.md) · 呼出先 4件 [`00547e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547e04.md) [`00547f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547f6c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`004ff610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff610.md) [`00500180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00500/00500180.md) [`00514418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00514/00514418.md) [`0052e17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e17c.md) · 呼出先 4件 [`00548124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/00548124.md) [`0054828c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/0054828c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ff3e0 ["INT_ADD", "register:40f0:8", ["const:4ff3e0:8", "const:4:8"]]
- 004ff3e0 ["CALL", null, ["callee:0054828c:8"]]
+ 004ff700 ["INT_ADD", "register:40f0:8", ["const:4ff700:8", "const:4:8"]]
+ 004ff700 ["CALL", null, ["callee:0054828c:8"]]
- 004ff3ec ["INT_ADD", "register:40f0:8", ["const:4ff3ec:8", "const:4:8"]]
- 004ff3ec ["CALL", null, ["callee:00548124:8"]]
+ 004ff70c ["INT_ADD", "register:40f0:8", ["const:4ff70c:8", "const:4:8"]]
+ 004ff70c ["CALL", null, ["callee:00548124:8"]]
- 004ff3fc ["INT_ADD", "register:40f0:8", ["const:4ff3fc:8", "const:4:8"]]
- 004ff3fc ["CALL", null, ["callee:00c58f50:8"]]
+ 004ff71c ["INT_ADD", "register:40f0:8", ["const:4ff71c:8", "const:4:8"]]
+ 004ff71c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1774b8c1ef5ea08cefab87c3018fb385"></a>

### [`004ff468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff468.md) → [`004ff788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff788.md) _ZNK5Botan15AlternativeName8contentsEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59a40.md) · 呼出先 4件 [`004ff1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff1e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58980.md)
- 新版 呼出元 1件 [`00c5aa10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5aa10.md) · 呼出先 4件 [`004ff500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff500.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59950.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ff504 ["INT_ADD", "register:40f0:8", ["const:4ff504:8", "const:4:8"]]
- 004ff504 ["CALL", null, ["callee:004ff500:8"]]
+ 004ff824 ["INT_ADD", "register:40f0:8", ["const:4ff824:8", "const:4:8"]]
+ 004ff824 ["CALL", null, ["callee:004ff500:8"]]
- 004ff54c ["INT_ADD", "register:40f0:8", ["const:4ff54c:8", "const:4:8"]]
- 004ff54c ["CALL", null, ["callee:00c59950:8"]]
+ 004ff86c ["INT_ADD", "register:40f0:8", ["const:4ff86c:8", "const:4:8"]]
+ 004ff86c ["CALL", null, ["callee:00c59950:8"]]
- 004ff55c ["INT_ADD", "register:40f0:8", ["const:4ff55c:8", "const:4:8"]]
- 004ff55c ["CALL", null, ["callee:004ff500:8"]]
+ 004ff87c ["INT_ADD", "register:40f0:8", ["const:4ff87c:8", "const:4:8"]]
+ 004ff87c ["CALL", null, ["callee:004ff500:8"]]
~~~


<a id="compare-c3b9337032b70ef5aead5a866197a663"></a>

### [`004ff5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff5e8.md) → [`004ff908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff908.md) _ZNK5Botan15AlternativeName9has_fieldERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005480d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/005480d8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005483f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/005483f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ff5f4 ["INT_ADD", "register:40f0:8", ["const:4ff5f4:8", "const:4:8"]]
- 004ff5f4 ["CALL", null, ["callee:005483f8:8"]]
+ 004ff914 ["INT_ADD", "register:40f0:8", ["const:4ff914:8", "const:4:8"]]
+ 004ff914 ["CALL", null, ["callee:005483f8:8"]]
~~~


<a id="compare-12dc726a615ea0969662c942273509d5"></a>

### [`004ff608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff608.md) → [`004ff928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff928.md) _ZNK5Botan15AlternativeName19get_first_attributeERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ff678 ["INT_ADD", "register:40f0:8", ["const:4ff678:8", "const:4:8"]]
- 004ff678 ["CALL", null, ["callee:00c590f0:8"]]
+ 004ff998 ["INT_ADD", "register:40f0:8", ["const:4ff998:8", "const:4:8"]]
+ 004ff998 ["CALL", null, ["callee:00c590f0:8"]]
- 004ff700 ["INT_ADD", "register:40f0:8", ["const:4ff700:8", "const:4:8"]]
- 004ff700 ["CALL", null, ["callee:00c590f0:8"]]
+ 004ffa20 ["INT_ADD", "register:40f0:8", ["const:4ffa20:8", "const:4:8"]]
+ 004ffa20 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-711f70bfe100879e735b73ddbd9729c7"></a>

### [`004ff764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff764.md) → [`004ffa84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ffa84.md) _ZNK5Botan15AlternativeName13get_attributeERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59a50.md) · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`005480d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/005480d8.md)
- 新版 呼出元 1件 [`00c5aa20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5aa20.md) · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`005483f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/005483f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 004ff784 ["INT_ADD", "register:40f0:8", ["const:4ff784:8", "const:4:8"]]
- 004ff784 ["CALL", null, ["callee:005483f8:8"]]
+ 004ffaa4 ["INT_ADD", "register:40f0:8", ["const:4ffaa4:8", "const:4:8"]]
+ 004ffaa4 ["CALL", null, ["callee:005483f8:8"]]
- 004ff7dc ["INT_ADD", "register:40f0:8", ["const:4ff7dc:8", "const:4:8"]]
- 004ff7dc ["CALL", null, ["callee:005410dc:8"]]
+ 004ffafc ["INT_ADD", "register:40f0:8", ["const:4ffafc:8", "const:4:8"]]
+ 004ffafc ["CALL", null, ["callee:005410dc:8"]]
- 004ff7f0 ["INT_ADD", "register:40f0:8", ["const:4ff7f0:8", "const:4:8"]]
- 004ff7f0 ["CALL", null, ["callee:0043be80:8"]]
+ 004ffb10 ["INT_ADD", "register:40f0:8", ["const:4ffb10:8", "const:4:8"]]
+ 004ffb10 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-58562bcfd42cf7e21c57c61e93a28950"></a>

### [`00500f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00500/00500f4c.md) → [`0050126c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00501/0050126c.md) FUN_0050126c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0052d550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052d550.md) [`0052e374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052e/0052e374.md) · 呼出先 2件 [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0052d870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052d/0052d870.md) [`0052e694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e694.md) · 呼出先 2件 [`0053b2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b2f0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00500f68 ["INT_ADD", "register:40f0:8", ["const:500f68:8", "const:4:8"]]
- 00500f68 ["CALL", null, ["callee:00c58f50:8"]]
+ 00501288 ["INT_ADD", "register:40f0:8", ["const:501288:8", "const:4:8"]]
+ 00501288 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-90ee0f228640c8adc689e3a713233f3a"></a>

### [`005015b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00501/005015b4.md) → [`005018d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00501/005018d4.md) _ZNK5Botan16X509_CertificateeqERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c58770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58770.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c59740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59740.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005015e0 ["INT_ADD", "register:40f0:8", ["const:5015e0:8", "const:4:8"]]
- 005015e0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00501900 ["INT_ADD", "register:40f0:8", ["const:501900:8", "const:4:8"]]
+ 00501900 ["CALL", null, ["callee:00c590f0:8"]]
- 005015f0 ["INT_ADD", "register:40f0:8", ["const:5015f0:8", "const:4:8"]]
- 005015f0 ["CALL", null, ["callee:00c59740:8"]]
+ 00501910 ["INT_ADD", "register:40f0:8", ["const:501910:8", "const:4:8"]]
+ 00501910 ["CALL", null, ["callee:00c59740:8"]]
- 00501610 ["INT_ADD", "register:40f0:8", ["const:501610:8", "const:4:8"]]
- 00501610 ["CALL", null, ["callee:00c590f0:8"]]
+ 00501930 ["INT_ADD", "register:40f0:8", ["const:501930:8", "const:4:8"]]
+ 00501930 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-f3b1113baa28b9399791cd6237dfdf73"></a>

### [`00501630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00501/00501630.md) → [`00501950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00501/00501950.md) FUN_00501950

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00527e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00527/00527e68.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00528188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00528/00528188.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0050164c ["INT_ADD", "register:40f0:8", ["const:50164c:8", "const:4:8"]]
- 0050164c ["CALL", null, ["callee:00c54d90:8"]]
+ 0050196c ["INT_ADD", "register:40f0:8", ["const:50196c:8", "const:4:8"]]
+ 0050196c ["CALL", null, ["callee:00c54d90:8"]]
- 0050166c ["COPY", "register:0:8", ["register:4040:8"]]
- 0050166c ["INT_ADD", "register:40f0:8", ["const:50166c:8", "const:4:8"]]
- 0050166c ["CALLIND", null, ["register:0:8"]]
+ 0050198c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0050198c ["INT_ADD", "register:40f0:8", ["const:50198c:8", "const:4:8"]]
+ 0050198c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2f1c7527a82fa23252d543a95b670812"></a>

### [`00501680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00501/00501680.md) → [`005019a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00501/005019a0.md) _ZN5Botan27Certificate_Store_In_Memory15add_certificateENSt6__ndk110shared_ptrIKNS_16X509_CertificateEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ab0.md) · 呼出先 4件 [`005485d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/005485d8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c58770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58770.md)
- 新版 呼出元 1件 [`00c5aa80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5aa80.md) · 呼出先 4件 [`005488f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/005488f8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c59740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59740.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005016ec ["INT_ADD", "register:40f0:8", ["const:5016ec:8", "const:4:8"]]
- 005016ec ["CALL", null, ["callee:00c590f0:8"]]
+ 00501a0c ["INT_ADD", "register:40f0:8", ["const:501a0c:8", "const:4:8"]]
+ 00501a0c ["CALL", null, ["callee:00c590f0:8"]]
- 005016fc ["INT_ADD", "register:40f0:8", ["const:5016fc:8", "const:4:8"]]
- 005016fc ["CALL", null, ["callee:00c59740:8"]]
+ 00501a1c ["INT_ADD", "register:40f0:8", ["const:501a1c:8", "const:4:8"]]
+ 00501a1c ["CALL", null, ["callee:00c59740:8"]]
- 0050171c ["INT_ADD", "register:40f0:8", ["const:50171c:8", "const:4:8"]]
- 0050171c ["CALL", null, ["callee:00c590f0:8"]]
+ 00501a3c ["INT_ADD", "register:40f0:8", ["const:501a3c:8", "const:4:8"]]
+ 00501a3c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-4dc7b3ba4d1b4e6535e4eeccf60dc156"></a>

### [`00501780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00501/00501780.md) → [`00501aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00501/00501aa0.md) _ZNK5Botan27Certificate_Store_In_Memory12all_subjectsEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00502838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00502/00502838.md) [`00548734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548734.md) [`00c59ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ac0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00502b58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00502/00502b58.md) [`00548a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/00548a54.md) [`00c5aa90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5aa90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005017b4 ["INT_ADD", "register:40f0:8", ["const:5017b4:8", "const:4:8"]]
- 005017b4 ["CALL", null, ["callee:00548a54:8"]]
+ 00501ad4 ["INT_ADD", "register:40f0:8", ["const:501ad4:8", "const:4:8"]]
+ 00501ad4 ["CALL", null, ["callee:00548a54:8"]]
- 005017cc ["INT_ADD", "register:40f0:8", ["const:5017cc:8", "const:4:8"]]
- 005017cc ["CALL", null, ["callee:00c5aa90:8"]]
+ 00501aec ["INT_ADD", "register:40f0:8", ["const:501aec:8", "const:4:8"]]
+ 00501aec ["CALL", null, ["callee:00c5aa90:8"]]
- 005017e4 ["INT_ADD", "register:40f0:8", ["const:5017e4:8", "const:4:8"]]
- 005017e4 ["CALL", null, ["callee:00502b58:8"]]
+ 00501b04 ["INT_ADD", "register:40f0:8", ["const:501b04:8", "const:4:8"]]
+ 00501b04 ["CALL", null, ["callee:00502b58:8"]]
~~~


