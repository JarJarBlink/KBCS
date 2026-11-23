# v16.0.2 → v16.0.3 · 要調査の変更候補 (14)

[一覧の目次](README.md)

<a id="compare-1210f4d1f085c90901aadcd5a6e9f318"></a>

### [`00584d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584d18.md) → [`00585038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/00585038.md) FUN_00585038

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00597968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597968.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00584d44 ["INT_ADD", "register:40f0:8", ["const:584d44:8", "const:4:8"]]
- 00584d44 ["CALL", null, ["callee:00597968:8"]]
+ 00585064 ["INT_ADD", "register:40f0:8", ["const:585064:8", "const:4:8"]]
+ 00585064 ["CALL", null, ["callee:00597968:8"]]
- 00584d64 ["INT_ADD", "register:40f0:8", ["const:584d64:8", "const:4:8"]]
- 00584d64 ["CALL", null, ["callee:00c54d90:8"]]
+ 00585084 ["INT_ADD", "register:40f0:8", ["const:585084:8", "const:4:8"]]
+ 00585084 ["CALL", null, ["callee:00c54d90:8"]]
- 00584d78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00584d78 ["INT_ADD", "register:40f0:8", ["const:584d78:8", "const:4:8"]]
- 00584d78 ["CALLIND", null, ["register:0:8"]]
+ 00585098 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00585098 ["INT_ADD", "register:40f0:8", ["const:585098:8", "const:4:8"]]
+ 00585098 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-167b461c5a76fd2314fea59186cee7d4"></a>

### [`00584ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584ddc.md) → [`005850fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/005850fc.md) FUN_005850fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`0058adac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058adac.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`0058b0cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b0cc.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00584e20 ["INT_ADD", "register:40f0:8", ["const:584e20:8", "const:4:8"]]
- 00584e20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00585140 ["INT_ADD", "register:40f0:8", ["const:585140:8", "const:4:8"]]
+ 00585140 ["CALL", null, ["callee:00c58f30:8"]]
- 00584e38 ["INT_ADD", "register:40f0:8", ["const:584e38:8", "const:4:8"]]
- 00584e38 ["CALL", null, ["callee:00c590a0:8"]]
+ 00585158 ["INT_ADD", "register:40f0:8", ["const:585158:8", "const:4:8"]]
+ 00585158 ["CALL", null, ["callee:00c590a0:8"]]
- 00584e48 ["INT_ADD", "register:40f0:8", ["const:584e48:8", "const:4:8"]]
- 00584e48 ["CALL", null, ["callee:0058b0cc:8"]]
+ 00585168 ["INT_ADD", "register:40f0:8", ["const:585168:8", "const:4:8"]]
+ 00585168 ["CALL", null, ["callee:0058b0cc:8"]]
~~~


<a id="compare-5ab0ea3473a560a5c2e505d665a6f99a"></a>

### [`00584f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584f40.md) → [`00585260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/00585260.md) FUN_00585260

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00547bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547bf0.md) [`00549114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549114.md) [`00564320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/00564320.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00547f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00547/00547f10.md) [`00549434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549434.md) [`00564640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/00564640.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00584f74 ["INT_ADD", "register:40f0:8", ["const:584f74:8", "const:4:8"]]
- 00584f74 ["CALL", null, ["callee:00547f10:8"]]
+ 00585294 ["INT_ADD", "register:40f0:8", ["const:585294:8", "const:4:8"]]
+ 00585294 ["CALL", null, ["callee:00547f10:8"]]
- 00584f90 ["INT_ADD", "register:40f0:8", ["const:584f90:8", "const:4:8"]]
- 00584f90 ["CALL", null, ["callee:00564640:8"]]
+ 005852b0 ["INT_ADD", "register:40f0:8", ["const:5852b0:8", "const:4:8"]]
+ 005852b0 ["CALL", null, ["callee:00564640:8"]]
- 00584fc4 ["INT_ADD", "register:40f0:8", ["const:584fc4:8", "const:4:8"]]
- 00584fc4 ["CALL", null, ["callee:0043be80:8"]]
+ 005852e4 ["INT_ADD", "register:40f0:8", ["const:5852e4:8", "const:4:8"]]
+ 005852e4 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-01723f9b4d5b91f1c5c63cfb2a5db49b"></a>

### [`00585254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/00585254.md) → [`00585574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/00585574.md) FUN_00585574

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005850a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/005850a0.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005853c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/005853c0.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00585294 ["INT_ADD", "register:40f0:8", ["const:585294:8", "const:4:8"]]
- 00585294 ["CALL", null, ["callee:00c58f30:8"]]
+ 005855b4 ["INT_ADD", "register:40f0:8", ["const:5855b4:8", "const:4:8"]]
+ 005855b4 ["CALL", null, ["callee:00c58f30:8"]]
- 005852e0 ["INT_ADD", "register:40f0:8", ["const:5852e0:8", "const:4:8"]]
- 005852e0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00585600 ["INT_ADD", "register:40f0:8", ["const:585600:8", "const:4:8"]]
+ 00585600 ["CALL", null, ["callee:00c54d90:8"]]
- 005852f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 005852f4 ["INT_ADD", "register:40f0:8", ["const:5852f4:8", "const:4:8"]]
- 005852f4 ["CALLIND", null, ["register:0:8"]]
+ 00585614 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00585614 ["INT_ADD", "register:40f0:8", ["const:585614:8", "const:4:8"]]
+ 00585614 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-72560c4bc06b3eb91be523d81f785a7c"></a>

### [`00585364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/00585364.md) → [`00585684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/00585684.md) FUN_00585684

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) · 呼出先 3件 [`00587de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587de8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00562094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562094.md) · 呼出先 3件 [`00588108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588108.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058539c ["INT_ADD", "register:40f0:8", ["const:58539c:8", "const:4:8"]]
- 0058539c ["CALL", null, ["callee:00c58f30:8"]]
+ 005856bc ["INT_ADD", "register:40f0:8", ["const:5856bc:8", "const:4:8"]]
+ 005856bc ["CALL", null, ["callee:00c58f30:8"]]
- 005853b0 ["INT_ADD", "register:40f0:8", ["const:5853b0:8", "const:4:8"]]
- 005853b0 ["CALL", null, ["callee:00588108:8"]]
+ 005856d0 ["INT_ADD", "register:40f0:8", ["const:5856d0:8", "const:4:8"]]
+ 005856d0 ["CALL", null, ["callee:00588108:8"]]
- 00585408 ["INT_ADD", "register:40f0:8", ["const:585408:8", "const:4:8"]]
- 00585408 ["CALL", null, ["callee:00c58f80:8"]]
+ 00585728 ["INT_ADD", "register:40f0:8", ["const:585728:8", "const:4:8"]]
+ 00585728 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-988323134e40f1f09c0b97a0cedf1acb"></a>

### [`00585d90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/00585d90.md) → [`005860b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/005860b0.md) FUN_005860b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0058570c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/0058570c.md) [`00585f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/00585f50.md) · 呼出先 3件 [`0058824c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/0058824c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`00585a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/00585a2c.md) [`00586270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586270.md) · 呼出先 3件 [`0058856c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/0058856c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00585e0c ["INT_ADD", "register:40f0:8", ["const:585e0c:8", "const:4:8"]]
- 00585e0c ["CALL", null, ["callee:00c590f0:8"]]
+ 0058612c ["INT_ADD", "register:40f0:8", ["const:58612c:8", "const:4:8"]]
+ 0058612c ["CALL", null, ["callee:00c590f0:8"]]
- 00585e68 ["INT_ADD", "register:40f0:8", ["const:585e68:8", "const:4:8"]]
- 00585e68 ["CALL", null, ["callee:00c590f0:8"]]
+ 00586188 ["INT_ADD", "register:40f0:8", ["const:586188:8", "const:4:8"]]
+ 00586188 ["CALL", null, ["callee:00c590f0:8"]]
- 00585e98 ["INT_ADD", "register:40f0:8", ["const:585e98:8", "const:4:8"]]
- 00585e98 ["CALL", null, ["callee:00c58f50:8"]]
+ 005861b8 ["INT_ADD", "register:40f0:8", ["const:5861b8:8", "const:4:8"]]
+ 005861b8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3727d9724fbe9ee94fd59dc5bdaf1824"></a>

### [`00585f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/00585f00.md) → [`00586220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586220.md) FUN_00586220

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00585f1c ["INT_ADD", "register:40f0:8", ["const:585f1c:8", "const:4:8"]]
- 00585f1c ["CALL", null, ["callee:00c54d90:8"]]
+ 0058623c ["INT_ADD", "register:40f0:8", ["const:58623c:8", "const:4:8"]]
+ 0058623c ["CALL", null, ["callee:00c54d90:8"]]
- 00585f3c ["COPY", "register:0:8", ["register:4040:8"]]
- 00585f3c ["INT_ADD", "register:40f0:8", ["const:585f3c:8", "const:4:8"]]
- 00585f3c ["CALLIND", null, ["register:0:8"]]
+ 0058625c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058625c ["INT_ADD", "register:40f0:8", ["const:58625c:8", "const:4:8"]]
+ 0058625c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-56e6e71d75387d202949563193aa2ef2"></a>

### [`0058671c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/0058671c.md) → [`00586a3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586a3c.md) FUN_00586a3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0058661c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/0058661c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0058693c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/0058693c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058672c ["INT_ADD", "register:40f0:8", ["const:58672c:8", "const:4:8"]]
- 0058672c ["CALL", null, ["callee:0058693c:8"]]
+ 00586a4c ["INT_ADD", "register:40f0:8", ["const:586a4c:8", "const:4:8"]]
+ 00586a4c ["CALL", null, ["callee:0058693c:8"]]
~~~


<a id="compare-f9703e5638fac4c9ee0727281f23be47"></a>

### [`00586850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586850.md) → [`00586b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586b70.md) FUN_00586b70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005841ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/005841ec.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0058450c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00584/0058450c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00586888 ["COPY", "register:0:8", ["register:4048:8"]]
- 00586888 ["INT_ADD", "register:40f0:8", ["const:586888:8", "const:4:8"]]
- 00586888 ["CALLIND", null, ["register:0:8"]]
+ 00586ba8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00586ba8 ["INT_ADD", "register:40f0:8", ["const:586ba8:8", "const:4:8"]]
+ 00586ba8 ["CALLIND", null, ["register:0:8"]]
- 005868b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005868b0 ["INT_ADD", "register:40f0:8", ["const:5868b0:8", "const:4:8"]]
- 005868b0 ["CALLIND", null, ["register:0:8"]]
+ 00586bd0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00586bd0 ["INT_ADD", "register:40f0:8", ["const:586bd0:8", "const:4:8"]]
+ 00586bd0 ["CALLIND", null, ["register:0:8"]]
- 005868d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005868d0 ["INT_ADD", "register:40f0:8", ["const:5868d0:8", "const:4:8"]]
- 005868d0 ["CALLIND", null, ["register:0:8"]]
+ 00586bf0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00586bf0 ["INT_ADD", "register:40f0:8", ["const:586bf0:8", "const:4:8"]]
+ 00586bf0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8c84edbc30847deac09412d86869d01c"></a>

### [`005869b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/005869b4.md) → [`00586cd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586cd4.md) FUN_00586cd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005841ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/005841ec.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0058450c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00584/0058450c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005869e8 ["COPY", "register:0:8", ["register:4048:8"]]
- 005869e8 ["INT_ADD", "register:40f0:8", ["const:5869e8:8", "const:4:8"]]
- 005869e8 ["CALLIND", null, ["register:0:8"]]
+ 00586d08 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00586d08 ["INT_ADD", "register:40f0:8", ["const:586d08:8", "const:4:8"]]
+ 00586d08 ["CALLIND", null, ["register:0:8"]]
- 00586a10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00586a10 ["INT_ADD", "register:40f0:8", ["const:586a10:8", "const:4:8"]]
- 00586a10 ["CALLIND", null, ["register:0:8"]]
+ 00586d30 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00586d30 ["INT_ADD", "register:40f0:8", ["const:586d30:8", "const:4:8"]]
+ 00586d30 ["CALLIND", null, ["register:0:8"]]
- 00586a34 ["COPY", "register:0:8", ["register:4040:8"]]
- 00586a34 ["INT_ADD", "register:40f0:8", ["const:586a34:8", "const:4:8"]]
- 00586a34 ["CALLIND", null, ["register:0:8"]]
+ 00586d54 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00586d54 ["INT_ADD", "register:40f0:8", ["const:586d54:8", "const:4:8"]]
+ 00586d54 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c32987b6936b86031a8b5cb0740a19fb"></a>

### [`00586b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586b1c.md) → [`00586e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586e3c.md) FUN_00586e3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005833bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00583/005833bc.md) [`00586b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586b1c.md) · 呼出先 2件 [`00586b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586b1c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005836dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00583/005836dc.md) [`00586e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586e3c.md) · 呼出先 2件 [`00586e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586e3c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00586b38 ["INT_ADD", "register:40f0:8", ["const:586b38:8", "const:4:8"]]
- 00586b38 ["CALL", null, ["local:b0:8"]]
+ 00586e58 ["INT_ADD", "register:40f0:8", ["const:586e58:8", "const:4:8"]]
+ 00586e58 ["CALL", null, ["local:b0:8"]]
- 00586b44 ["INT_ADD", "register:40f0:8", ["const:586b44:8", "const:4:8"]]
- 00586b44 ["CALL", null, ["local:b0:8"]]
+ 00586e64 ["INT_ADD", "register:40f0:8", ["const:586e64:8", "const:4:8"]]
+ 00586e64 ["CALL", null, ["local:b0:8"]]
- 00586b78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00586b78 ["INT_ADD", "register:40f0:8", ["const:586b78:8", "const:4:8"]]
- 00586b78 ["CALLIND", null, ["register:0:8"]]
+ 00586e98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00586e98 ["INT_ADD", "register:40f0:8", ["const:586e98:8", "const:4:8"]]
+ 00586e98 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-83da3660057192af60d440bc234284fe"></a>

### [`00586b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586b8c.md) → [`00586eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586eac.md) FUN_00586eac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005833c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00583/005833c4.md) [`00586b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586b8c.md) · 呼出先 2件 [`00586b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586b8c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005836e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00583/005836e4.md) [`00586eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586eac.md) · 呼出先 2件 [`00586eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586eac.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00586ba8 ["INT_ADD", "register:40f0:8", ["const:586ba8:8", "const:4:8"]]
- 00586ba8 ["CALL", null, ["local:b0:8"]]
+ 00586ec8 ["INT_ADD", "register:40f0:8", ["const:586ec8:8", "const:4:8"]]
+ 00586ec8 ["CALL", null, ["local:b0:8"]]
- 00586bb4 ["INT_ADD", "register:40f0:8", ["const:586bb4:8", "const:4:8"]]
- 00586bb4 ["CALL", null, ["local:b0:8"]]
+ 00586ed4 ["INT_ADD", "register:40f0:8", ["const:586ed4:8", "const:4:8"]]
+ 00586ed4 ["CALL", null, ["local:b0:8"]]
- 00586be8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00586be8 ["INT_ADD", "register:40f0:8", ["const:586be8:8", "const:4:8"]]
- 00586be8 ["CALLIND", null, ["register:0:8"]]
+ 00586f08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00586f08 ["INT_ADD", "register:40f0:8", ["const:586f08:8", "const:4:8"]]
+ 00586f08 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-515632130fe673438001c06026c80304"></a>

### [`00586c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586c5c.md) → [`00586f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586f7c.md) FUN_00586f7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00588394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588394.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00586d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586d78.md) [`00586ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586ff0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005886b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/005886b4.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00587098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587098.md) [`00587310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587310.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00586cb8 ["INT_ADD", "register:40f0:8", ["const:586cb8:8", "const:4:8"]]
- 00586cb8 ["CALL", null, ["callee:00587098:8"]]
+ 00586fd8 ["INT_ADD", "register:40f0:8", ["const:586fd8:8", "const:4:8"]]
+ 00586fd8 ["CALL", null, ["callee:00587098:8"]]
- 00586ce0 ["INT_ADD", "register:40f0:8", ["const:586ce0:8", "const:4:8"]]
- 00586ce0 ["CALL", null, ["callee:00587310:8"]]
+ 00587000 ["INT_ADD", "register:40f0:8", ["const:587000:8", "const:4:8"]]
+ 00587000 ["CALL", null, ["callee:00587310:8"]]
- 00586d0c ["INT_ADD", "register:40f0:8", ["const:586d0c:8", "const:4:8"]]
- 00586d0c ["CALL", null, ["callee:0043bf04:8"]]
+ 0058702c ["INT_ADD", "register:40f0:8", ["const:58702c:8", "const:4:8"]]
+ 0058702c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-c85b21fc2f48610331b8eb075bb6f00f"></a>

### [`00586d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586d78.md) → [`00587098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587098.md) FUN_00587098

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00586c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586c5c.md) · 呼出先 1件 [`00c5a3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a3b0.md)
- 新版 呼出元 1件 [`00586f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586f7c.md) · 呼出先 1件 [`00c5b380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00586ddc ["INT_ADD", "register:40f0:8", ["const:586ddc:8", "const:4:8"]]
- 00586ddc ["CALL", null, ["callee:00c5b380:8"]]
+ 005870fc ["INT_ADD", "register:40f0:8", ["const:5870fc:8", "const:4:8"]]
+ 005870fc ["CALL", null, ["callee:00c5b380:8"]]
- 00586e14 ["INT_ADD", "register:40f0:8", ["const:586e14:8", "const:4:8"]]
- 00586e14 ["CALL", null, ["callee:00c5b380:8"]]
+ 00587134 ["INT_ADD", "register:40f0:8", ["const:587134:8", "const:4:8"]]
+ 00587134 ["CALL", null, ["callee:00c5b380:8"]]
- 00586e84 ["INT_ADD", "register:40f0:8", ["const:586e84:8", "const:4:8"]]
- 00586e84 ["CALL", null, ["callee:00c5b380:8"]]
+ 005871a4 ["INT_ADD", "register:40f0:8", ["const:5871a4:8", "const:4:8"]]
+ 005871a4 ["CALL", null, ["callee:00c5b380:8"]]
~~~


<a id="compare-d6d4d1b55aaad90c1ebefb6a1419e488"></a>

### [`00586ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586ff0.md) → [`00587310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587310.md) FUN_00587310

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00586c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00586/00586c5c.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00586f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/00586f7c.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00587010 ["INT_ADD", "register:40f0:8", ["const:587010:8", "const:4:8"]]
- 00587010 ["CALL", null, ["callee:00c58f30:8"]]
+ 00587330 ["INT_ADD", "register:40f0:8", ["const:587330:8", "const:4:8"]]
+ 00587330 ["CALL", null, ["callee:00c58f30:8"]]
- 00587044 ["INT_ADD", "register:40f0:8", ["const:587044:8", "const:4:8"]]
- 00587044 ["CALL", null, ["callee:0043be80:8"]]
+ 00587364 ["INT_ADD", "register:40f0:8", ["const:587364:8", "const:4:8"]]
+ 00587364 ["CALL", null, ["callee:0043be80:8"]]
- 00587070 ["INT_ADD", "register:40f0:8", ["const:587070:8", "const:4:8"]]
- 00587070 ["CALL", null, ["callee:0043be80:8"]]
+ 00587390 ["INT_ADD", "register:40f0:8", ["const:587390:8", "const:4:8"]]
+ 00587390 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-b2b8907b7404dcde50d029703b6b8223"></a>

### [`005870b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/005870b8.md) → [`005873d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/005873d8.md) FUN_005873d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005870b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/005870b8.md) [`00587f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587f54.md) · 呼出先 2件 [`005870b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/005870b8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005873d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/005873d8.md) [`00588274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588274.md) · 呼出先 2件 [`005873d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/005873d8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005870d4 ["INT_ADD", "register:40f0:8", ["const:5870d4:8", "const:4:8"]]
- 005870d4 ["CALL", null, ["local:b0:8"]]
+ 005873f4 ["INT_ADD", "register:40f0:8", ["const:5873f4:8", "const:4:8"]]
+ 005873f4 ["CALL", null, ["local:b0:8"]]
- 005870e0 ["INT_ADD", "register:40f0:8", ["const:5870e0:8", "const:4:8"]]
- 005870e0 ["CALL", null, ["local:b0:8"]]
+ 00587400 ["INT_ADD", "register:40f0:8", ["const:587400:8", "const:4:8"]]
+ 00587400 ["CALL", null, ["local:b0:8"]]
- 005870f0 ["INT_ADD", "register:40f0:8", ["const:5870f0:8", "const:4:8"]]
- 005870f0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00587410 ["INT_ADD", "register:40f0:8", ["const:587410:8", "const:4:8"]]
+ 00587410 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e72e9a92b18b7cb0050b439f0e286124"></a>

### [`00587168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587168.md) → [`00587488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587488.md) FUN_00587488

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005838ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00583/005838ec.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00583c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00583/00583c0c.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005871d4 ["INT_ADD", "register:40f0:8", ["const:5871d4:8", "const:4:8"]]
- 005871d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005874f4 ["INT_ADD", "register:40f0:8", ["const:5874f4:8", "const:4:8"]]
+ 005874f4 ["CALL", null, ["callee:00c58f30:8"]]
- 00587230 ["COPY", "register:0:8", ["register:4048:8"]]
- 00587230 ["INT_ADD", "register:40f0:8", ["const:587230:8", "const:4:8"]]
- 00587230 ["CALLIND", null, ["register:0:8"]]
+ 00587550 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00587550 ["INT_ADD", "register:40f0:8", ["const:587550:8", "const:4:8"]]
+ 00587550 ["CALLIND", null, ["register:0:8"]]
- 0058725c ["INT_ADD", "register:40f0:8", ["const:58725c:8", "const:4:8"]]
- 0058725c ["CALL", null, ["callee:0043bf04:8"]]
+ 0058757c ["INT_ADD", "register:40f0:8", ["const:58757c:8", "const:4:8"]]
+ 0058757c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-40c886556c15350d96aa932018a21669"></a>

### [`0058728c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/0058728c.md) → [`005875ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/005875ac.md) FUN_005875ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005841ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/005841ec.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00587374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587374.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0058450c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00584/0058450c.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00587694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587694.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005872fc ["INT_ADD", "register:40f0:8", ["const:5872fc:8", "const:4:8"]]
- 005872fc ["CALL", null, ["callee:00c58f30:8"]]
+ 0058761c ["INT_ADD", "register:40f0:8", ["const:58761c:8", "const:4:8"]]
+ 0058761c ["CALL", null, ["callee:00c58f30:8"]]
- 00587314 ["INT_ADD", "register:40f0:8", ["const:587314:8", "const:4:8"]]
- 00587314 ["CALL", null, ["callee:00587694:8"]]
+ 00587634 ["INT_ADD", "register:40f0:8", ["const:587634:8", "const:4:8"]]
+ 00587634 ["CALL", null, ["callee:00587694:8"]]
- 00587340 ["INT_ADD", "register:40f0:8", ["const:587340:8", "const:4:8"]]
- 00587340 ["CALL", null, ["callee:0043bf04:8"]]
+ 00587660 ["INT_ADD", "register:40f0:8", ["const:587660:8", "const:4:8"]]
+ 00587660 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-64ca2c75a085b173eb583515e6917ceb"></a>

### [`00587374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587374.md) → [`00587694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587694.md) FUN_00587694

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0058728c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/0058728c.md) · 呼出先 0件 
- 新版 呼出元 1件 [`005875ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/005875ac.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005873c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 005873c4 ["INT_ADD", "register:40f0:8", ["const:5873c4:8", "const:4:8"]]
- 005873c4 ["CALLIND", null, ["register:0:8"]]
+ 005876e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005876e4 ["INT_ADD", "register:40f0:8", ["const:5876e4:8", "const:4:8"]]
+ 005876e4 ["CALLIND", null, ["register:0:8"]]
- 00587408 ["COPY", "register:0:8", ["register:4040:8"]]
- 00587408 ["INT_ADD", "register:40f0:8", ["const:587408:8", "const:4:8"]]
- 00587408 ["CALLIND", null, ["register:0:8"]]
+ 00587728 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00587728 ["INT_ADD", "register:40f0:8", ["const:587728:8", "const:4:8"]]
+ 00587728 ["CALLIND", null, ["register:0:8"]]
- 0058744c ["COPY", "register:0:8", ["register:4040:8"]]
- 0058744c ["INT_ADD", "register:40f0:8", ["const:58744c:8", "const:4:8"]]
- 0058744c ["CALLIND", null, ["register:0:8"]]
+ 0058776c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058776c ["INT_ADD", "register:40f0:8", ["const:58776c:8", "const:4:8"]]
+ 0058776c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d9939ffe8e3be53e360816bc5727f27d"></a>

### [`00587508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587508.md) → [`00587828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587828.md) FUN_00587828

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00584978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584978.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00584c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00584/00584c98.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00587530 ["INT_ADD", "register:40f0:8", ["const:587530:8", "const:4:8"]]
- 00587530 ["CALL", null, ["callee:00c54d90:8"]]
+ 00587850 ["INT_ADD", "register:40f0:8", ["const:587850:8", "const:4:8"]]
+ 00587850 ["CALL", null, ["callee:00c54d90:8"]]
- 00587544 ["COPY", "register:0:8", ["register:4040:8"]]
- 00587544 ["INT_ADD", "register:40f0:8", ["const:587544:8", "const:4:8"]]
- 00587544 ["CALLIND", null, ["register:0:8"]]
+ 00587864 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00587864 ["INT_ADD", "register:40f0:8", ["const:587864:8", "const:4:8"]]
+ 00587864 ["CALLIND", null, ["register:0:8"]]
- 0058754c ["INT_ADD", "register:40f0:8", ["const:58754c:8", "const:4:8"]]
- 0058754c ["CALL", null, ["callee:00c58f20:8"]]
+ 0058786c ["INT_ADD", "register:40f0:8", ["const:58786c:8", "const:4:8"]]
+ 0058786c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-ac70c1c58fd687fae09840e82ce67d01"></a>

### [`00587598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587598.md) → [`005878b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/005878b8.md) FUN_005878b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005875b8 ["INT_ADD", "register:40f0:8", ["const:5875b8:8", "const:4:8"]]
- 005875b8 ["CALL", null, ["callee:00c54d90:8"]]
+ 005878d8 ["INT_ADD", "register:40f0:8", ["const:5878d8:8", "const:4:8"]]
+ 005878d8 ["CALL", null, ["callee:00c54d90:8"]]
- 005875d0 ["INT_ADD", "register:40f0:8", ["const:5875d0:8", "const:4:8"]]
- 005875d0 ["CALL", null, ["callee:00c54d90:8"]]
+ 005878f0 ["INT_ADD", "register:40f0:8", ["const:5878f0:8", "const:4:8"]]
+ 005878f0 ["CALL", null, ["callee:00c54d90:8"]]
- 005875f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005875f0 ["INT_ADD", "register:40f0:8", ["const:5875f0:8", "const:4:8"]]
- 005875f0 ["CALLIND", null, ["register:0:8"]]
+ 00587910 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00587910 ["INT_ADD", "register:40f0:8", ["const:587910:8", "const:4:8"]]
+ 00587910 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ab52953ac929e11dabfb0835897841c2"></a>

### [`0058788c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/0058788c.md) → [`00587bac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587bac.md) FUN_00587bac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00584978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584978.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00584c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00584/00584c98.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005878a8 ["INT_ADD", "register:40f0:8", ["const:5878a8:8", "const:4:8"]]
- 005878a8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00587bc8 ["INT_ADD", "register:40f0:8", ["const:587bc8:8", "const:4:8"]]
+ 00587bc8 ["CALL", null, ["callee:00c54d90:8"]]
- 005878c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 005878c8 ["INT_ADD", "register:40f0:8", ["const:5878c8:8", "const:4:8"]]
- 005878c8 ["CALLIND", null, ["register:0:8"]]
+ 00587be8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00587be8 ["INT_ADD", "register:40f0:8", ["const:587be8:8", "const:4:8"]]
+ 00587be8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9b9feb6c69804215d0b2373d8a3a84cf"></a>

### [`005878dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/005878dc.md) → [`00587bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587bfc.md) FUN_00587bfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00584978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584978.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00584c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00584/00584c98.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005878fc ["INT_ADD", "register:40f0:8", ["const:5878fc:8", "const:4:8"]]
- 005878fc ["CALL", null, ["callee:00c54d90:8"]]
+ 00587c1c ["INT_ADD", "register:40f0:8", ["const:587c1c:8", "const:4:8"]]
+ 00587c1c ["CALL", null, ["callee:00c54d90:8"]]
- 00587910 ["COPY", "register:0:8", ["register:4040:8"]]
- 00587910 ["INT_ADD", "register:40f0:8", ["const:587910:8", "const:4:8"]]
- 00587910 ["CALLIND", null, ["register:0:8"]]
+ 00587c30 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00587c30 ["INT_ADD", "register:40f0:8", ["const:587c30:8", "const:4:8"]]
+ 00587c30 ["CALLIND", null, ["register:0:8"]]
- 00587918 ["INT_ADD", "register:40f0:8", ["const:587918:8", "const:4:8"]]
- 00587918 ["CALL", null, ["callee:00c58f20:8"]]
+ 00587c38 ["INT_ADD", "register:40f0:8", ["const:587c38:8", "const:4:8"]]
+ 00587c38 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-46bd6371a0bc840d8abb1b98f61ca823"></a>

### [`0058792c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/0058792c.md) → [`00587c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587c4c.md) FUN_00587c4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00587a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587a88.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00587da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587da8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058796c ["INT_ADD", "register:40f0:8", ["const:58796c:8", "const:4:8"]]
- 0058796c ["CALL", null, ["callee:00c54d60:8"]]
+ 00587c8c ["INT_ADD", "register:40f0:8", ["const:587c8c:8", "const:4:8"]]
+ 00587c8c ["CALL", null, ["callee:00c54d60:8"]]
- 00587984 ["INT_ADD", "register:40f0:8", ["const:587984:8", "const:4:8"]]
- 00587984 ["CALL", null, ["callee:00c54d60:8"]]
+ 00587ca4 ["INT_ADD", "register:40f0:8", ["const:587ca4:8", "const:4:8"]]
+ 00587ca4 ["CALL", null, ["callee:00c54d60:8"]]
- 00587998 ["INT_ADD", "register:40f0:8", ["const:587998:8", "const:4:8"]]
- 00587998 ["CALL", null, ["callee:00587da8:8"]]
+ 00587cb8 ["INT_ADD", "register:40f0:8", ["const:587cb8:8", "const:4:8"]]
+ 00587cb8 ["CALL", null, ["callee:00587da8:8"]]
~~~


<a id="compare-8ee964a7d07b82b4914ba4dd6eb493ab"></a>

### [`00587a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587a88.md) → [`00587da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587da8.md) FUN_00587da8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0058792c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/0058792c.md) · 呼出先 6件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)
- 新版 呼出元 1件 [`00587c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587c4c.md) · 呼出先 6件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00587ab4 ["INT_ADD", "register:40f0:8", ["const:587ab4:8", "const:4:8"]]
- 00587ab4 ["CALL", null, ["callee:00c59180:8"]]
+ 00587dd4 ["INT_ADD", "register:40f0:8", ["const:587dd4:8", "const:4:8"]]
+ 00587dd4 ["CALL", null, ["callee:00c59180:8"]]
- 00587acc ["INT_ADD", "register:40f0:8", ["const:587acc:8", "const:4:8"]]
- 00587acc ["CALL", null, ["callee:00c59390:8"]]
+ 00587dec ["INT_ADD", "register:40f0:8", ["const:587dec:8", "const:4:8"]]
+ 00587dec ["CALL", null, ["callee:00c59390:8"]]
- 00587b08 ["INT_ADD", "register:40f0:8", ["const:587b08:8", "const:4:8"]]
- 00587b08 ["CALL", null, ["callee:00c59420:8"]]
+ 00587e28 ["INT_ADD", "register:40f0:8", ["const:587e28:8", "const:4:8"]]
+ 00587e28 ["CALL", null, ["callee:00c59420:8"]]
~~~


<a id="compare-f6cfdbb7a54b5373e9686e66e78dd7f7"></a>

### [`00587b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587b78.md) → [`00587e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587e98.md) FUN_00587e98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00584978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584978.md) · 呼出先 8件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)
- 新版 呼出元 1件 [`00584c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00584/00584c98.md) · 呼出先 8件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00587bb4 ["INT_ADD", "register:40f0:8", ["const:587bb4:8", "const:4:8"]]
- 00587bb4 ["CALL", null, ["callee:00c59180:8"]]
+ 00587ed4 ["INT_ADD", "register:40f0:8", ["const:587ed4:8", "const:4:8"]]
+ 00587ed4 ["CALL", null, ["callee:00c59180:8"]]
- 00587bc0 ["INT_ADD", "register:40f0:8", ["const:587bc0:8", "const:4:8"]]
- 00587bc0 ["CALL", null, ["callee:00c59540:8"]]
+ 00587ee0 ["INT_ADD", "register:40f0:8", ["const:587ee0:8", "const:4:8"]]
+ 00587ee0 ["CALL", null, ["callee:00c59540:8"]]
- 00587bd4 ["INT_ADD", "register:40f0:8", ["const:587bd4:8", "const:4:8"]]
- 00587bd4 ["CALL", null, ["callee:00c59390:8"]]
+ 00587ef4 ["INT_ADD", "register:40f0:8", ["const:587ef4:8", "const:4:8"]]
+ 00587ef4 ["CALL", null, ["callee:00c59390:8"]]
~~~


<a id="compare-e6c8847ec1fdc3d188165fd9fc44afad"></a>

### [`00587c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587c94.md) → [`00587fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00587/00587fb4.md) FUN_00587fb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005850a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/005850a0.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00587dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00587/00587dd4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005853c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/005853c0.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005880f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/005880f4.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00587d00 ["INT_ADD", "register:40f0:8", ["const:587d00:8", "const:4:8"]]
- 00587d00 ["CALL", null, ["callee:00c58f30:8"]]
+ 00588020 ["INT_ADD", "register:40f0:8", ["const:588020:8", "const:4:8"]]
+ 00588020 ["CALL", null, ["callee:00c58f30:8"]]
- 00587d70 ["INT_ADD", "register:40f0:8", ["const:587d70:8", "const:4:8"]]
- 00587d70 ["CALL", null, ["callee:00c54d90:8"]]
+ 00588090 ["INT_ADD", "register:40f0:8", ["const:588090:8", "const:4:8"]]
+ 00588090 ["CALL", null, ["callee:00c54d90:8"]]
- 00587d84 ["COPY", "register:0:8", ["register:4040:8"]]
- 00587d84 ["INT_ADD", "register:40f0:8", ["const:587d84:8", "const:4:8"]]
- 00587d84 ["CALLIND", null, ["register:0:8"]]
+ 005880a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005880a4 ["INT_ADD", "register:40f0:8", ["const:5880a4:8", "const:4:8"]]
+ 005880a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-70b4cd461f4ea2db87d211bc1a07961a"></a>

### [`00588134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588134.md) → [`00588454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588454.md) FUN_00588454

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0058540c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/0058540c.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0058572c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/0058572c.md) · 呼出先 2件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058819c ["INT_ADD", "register:40f0:8", ["const:58819c:8", "const:4:8"]]
- 0058819c ["CALL", null, ["callee:00494970:8"]]
+ 005884bc ["INT_ADD", "register:40f0:8", ["const:5884bc:8", "const:4:8"]]
+ 005884bc ["CALL", null, ["callee:00494970:8"]]
- 005881cc ["COPY", "register:0:8", ["register:4040:8"]]
- 005881cc ["INT_ADD", "register:40f0:8", ["const:5881cc:8", "const:4:8"]]
- 005881cc ["CALLIND", null, ["register:0:8"]]
+ 005884ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 005884ec ["INT_ADD", "register:40f0:8", ["const:5884ec:8", "const:4:8"]]
+ 005884ec ["CALLIND", null, ["register:0:8"]]
- 00588200 ["COPY", "register:0:8", ["register:4040:8"]]
- 00588200 ["INT_ADD", "register:40f0:8", ["const:588200:8", "const:4:8"]]
- 00588200 ["CALLIND", null, ["register:0:8"]]
+ 00588520 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00588520 ["INT_ADD", "register:40f0:8", ["const:588520:8", "const:4:8"]]
+ 00588520 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2f16e8357eb2b61f64afcabdf7a77ef0"></a>

### [`0058824c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/0058824c.md) → [`0058856c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/0058856c.md) FUN_0058856c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00585d90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/00585d90.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0054f1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054f/0054f1d4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005860b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00586/005860b0.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0054f4f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054f/0054f4f4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058828c ["INT_ADD", "register:40f0:8", ["const:58828c:8", "const:4:8"]]
- 0058828c ["CALL", null, ["callee:0054f4f4:8"]]
+ 005885ac ["INT_ADD", "register:40f0:8", ["const:5885ac:8", "const:4:8"]]
+ 005885ac ["CALL", null, ["callee:0054f4f4:8"]]
- 005882ac ["INT_ADD", "register:40f0:8", ["const:5882ac:8", "const:4:8"]]
- 005882ac ["CALL", null, ["callee:00c58f30:8"]]
+ 005885cc ["INT_ADD", "register:40f0:8", ["const:5885cc:8", "const:4:8"]]
+ 005885cc ["CALL", null, ["callee:00c58f30:8"]]
- 005882e0 ["INT_ADD", "register:40f0:8", ["const:5882e0:8", "const:4:8"]]
- 005882e0 ["CALL", null, ["callee:0043be80:8"]]
+ 00588600 ["INT_ADD", "register:40f0:8", ["const:588600:8", "const:4:8"]]
+ 00588600 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-e33ffb69aa5e131da831fe59351a5ceb"></a>

### [`005885e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/005885e8.md) → [`00588908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588908.md) FUN_00588908

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00588604 ["INT_ADD", "register:40f0:8", ["const:588604:8", "const:4:8"]]
- 00588604 ["CALL", null, ["callee:00c54d90:8"]]
+ 00588924 ["INT_ADD", "register:40f0:8", ["const:588924:8", "const:4:8"]]
+ 00588924 ["CALL", null, ["callee:00c54d90:8"]]
- 00588624 ["COPY", "register:0:8", ["register:4040:8"]]
- 00588624 ["INT_ADD", "register:40f0:8", ["const:588624:8", "const:4:8"]]
- 00588624 ["CALLIND", null, ["register:0:8"]]
+ 00588944 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00588944 ["INT_ADD", "register:40f0:8", ["const:588944:8", "const:4:8"]]
+ 00588944 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-902dcce86f856508046574f38a2e3924"></a>

### [`00588934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588934.md) → [`00588c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588c54.md) FUN_00588c54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058894c ["COPY", "register:0:8", ["register:4040:8"]]
- 0058894c ["INT_ADD", "register:40f0:8", ["const:58894c:8", "const:4:8"]]
- 0058894c ["CALLIND", null, ["register:0:8"]]
+ 00588c6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00588c6c ["INT_ADD", "register:40f0:8", ["const:588c6c:8", "const:4:8"]]
+ 00588c6c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0c4a5a4f124639d1d891ee7504d4e7dc"></a>

### [`00588988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588988.md) → [`00588ca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588ca8.md) FUN_00588ca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005889b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 005889b4 ["INT_ADD", "register:40f0:8", ["const:5889b4:8", "const:4:8"]]
- 005889b4 ["CALLIND", null, ["register:0:8"]]
+ 00588cd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00588cd4 ["INT_ADD", "register:40f0:8", ["const:588cd4:8", "const:4:8"]]
+ 00588cd4 ["CALLIND", null, ["register:0:8"]]
- 005889e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 005889e4 ["INT_ADD", "register:40f0:8", ["const:5889e4:8", "const:4:8"]]
- 005889e4 ["CALLIND", null, ["register:0:8"]]
+ 00588d04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00588d04 ["INT_ADD", "register:40f0:8", ["const:588d04:8", "const:4:8"]]
+ 00588d04 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-21f42e894796e21fa3027a7aa3e63c05"></a>

### [`00588a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588a38.md) → [`00588d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588d58.md) FUN_00588d58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00588a50 ["COPY", "register:0:8", ["register:4040:8"]]
- 00588a50 ["INT_ADD", "register:40f0:8", ["const:588a50:8", "const:4:8"]]
- 00588a50 ["CALLIND", null, ["register:0:8"]]
+ 00588d70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00588d70 ["INT_ADD", "register:40f0:8", ["const:588d70:8", "const:4:8"]]
+ 00588d70 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-81326c52f54c316700bbc46f345cac7d"></a>

### [`00588a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588a88.md) → [`00588da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588da8.md) FUN_00588da8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00588ab4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00588ab4 ["INT_ADD", "register:40f0:8", ["const:588ab4:8", "const:4:8"]]
- 00588ab4 ["CALLIND", null, ["register:0:8"]]
+ 00588dd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00588dd4 ["INT_ADD", "register:40f0:8", ["const:588dd4:8", "const:4:8"]]
+ 00588dd4 ["CALLIND", null, ["register:0:8"]]
- 00588ae4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00588ae4 ["INT_ADD", "register:40f0:8", ["const:588ae4:8", "const:4:8"]]
- 00588ae4 ["CALLIND", null, ["register:0:8"]]
+ 00588e04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00588e04 ["INT_ADD", "register:40f0:8", ["const:588e04:8", "const:4:8"]]
+ 00588e04 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9b27cd462dd449c9cd61a0a148f4c87d"></a>

### [`00588b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588b38.md) → [`00588e58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588e58.md) FUN_00588e58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00597640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597640.md) · 呼出先 5件 [`00550be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550be4.md) [`00588c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588c00.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00597960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597960.md) · 呼出先 5件 [`00550f04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f04.md) [`00588f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588f20.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00588b60 ["INT_ADD", "register:40f0:8", ["const:588b60:8", "const:4:8"]]
- 00588b60 ["CALL", null, ["callee:00550f04:8"]]
+ 00588e80 ["INT_ADD", "register:40f0:8", ["const:588e80:8", "const:4:8"]]
+ 00588e80 ["CALL", null, ["callee:00550f04:8"]]
- 00588b74 ["INT_ADD", "register:40f0:8", ["const:588b74:8", "const:4:8"]]
- 00588b74 ["CALL", null, ["callee:00588f20:8"]]
+ 00588e94 ["INT_ADD", "register:40f0:8", ["const:588e94:8", "const:4:8"]]
+ 00588e94 ["CALL", null, ["callee:00588f20:8"]]
- 00588b98 ["INT_ADD", "register:40f0:8", ["const:588b98:8", "const:4:8"]]
- 00588b98 ["CALL", null, ["callee:00c54d90:8"]]
+ 00588eb8 ["INT_ADD", "register:40f0:8", ["const:588eb8:8", "const:4:8"]]
+ 00588eb8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-9afa17b7345f336a0d594de8cb94017a"></a>

### [`00588d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588d2c.md) → [`0058904c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/0058904c.md) FUN_0058904c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00588638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588638.md) [`0058b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b170.md) [`0058b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b1f0.md) [`00595068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595068.md) · 呼出先 4件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 4件 [`00588958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588958.md) [`0058b490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b490.md) [`0058b510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b510.md) [`00595388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595388.md) · 呼出先 4件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00588dc0 ["INT_ADD", "register:40f0:8", ["const:588dc0:8", "const:4:8"]]
- 00588dc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005890e0 ["INT_ADD", "register:40f0:8", ["const:5890e0:8", "const:4:8"]]
+ 005890e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00588dec ["INT_ADD", "register:40f0:8", ["const:588dec:8", "const:4:8"]]
- 00588dec ["CALL", null, ["callee:00c590a0:8"]]
+ 0058910c ["INT_ADD", "register:40f0:8", ["const:58910c:8", "const:4:8"]]
+ 0058910c ["CALL", null, ["callee:00c590a0:8"]]
- 00588e00 ["INT_ADD", "register:40f0:8", ["const:588e00:8", "const:4:8"]]
- 00588e00 ["CALL", null, ["callee:00c58f50:8"]]
+ 00589120 ["INT_ADD", "register:40f0:8", ["const:589120:8", "const:4:8"]]
+ 00589120 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7634844a0f05bfc2d1c30903a80f97c1"></a>

### [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) → [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) FUN_00589a54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 33件 [`005891d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/005891d0.md) [`00b413d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b413d0.md) [`00b419fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b419fc.md) [`00b41b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41b00.md) [`00b41fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41fec.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 33件 [`005894f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894f0.md) [`00b423c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b423c4.md) [`00b429f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b429f0.md) [`00b42af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42af4.md) [`00b42fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42fe0.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005897a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 005897a8 ["INT_ADD", "register:40f0:8", ["const:5897a8:8", "const:4:8"]]
- 005897a8 ["CALLIND", null, ["register:0:8"]]
+ 00589ac8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00589ac8 ["INT_ADD", "register:40f0:8", ["const:589ac8:8", "const:4:8"]]
+ 00589ac8 ["CALLIND", null, ["register:0:8"]]
- 005897cc ["INT_ADD", "register:40f0:8", ["const:5897cc:8", "const:4:8"]]
- 005897cc ["CALL", null, ["callee:00c58f80:8"]]
+ 00589aec ["INT_ADD", "register:40f0:8", ["const:589aec:8", "const:4:8"]]
+ 00589aec ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-8aa454ed50b0011edbaba488d732fb83"></a>

### [`005898a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/005898a0.md) → [`00589bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589bc0.md) FUN_00589bc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0058d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058d/0058d1b0.md) · 呼出先 1件 [`00588f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588f0c.md)
- 新版 呼出元 1件 [`0058d4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058d/0058d4d0.md) · 呼出先 1件 [`0058922c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/0058922c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005898b8 ["INT_ADD", "register:40f0:8", ["const:5898b8:8", "const:4:8"]]
- 005898b8 ["CALL", null, ["callee:0058922c:8"]]
+ 00589bd8 ["INT_ADD", "register:40f0:8", ["const:589bd8:8", "const:4:8"]]
+ 00589bd8 ["CALL", null, ["callee:0058922c:8"]]
~~~


<a id="compare-a6f0dd1bcb9c5389eb0bce47e9540718"></a>

### [`005898cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/005898cc.md) → [`00589bec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589bec.md) FUN_00589bec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005898e8 ["INT_ADD", "register:40f0:8", ["const:5898e8:8", "const:4:8"]]
- 005898e8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00589c08 ["INT_ADD", "register:40f0:8", ["const:589c08:8", "const:4:8"]]
+ 00589c08 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-638f0c48a0686f7ccfa904513c36ecb1"></a>

### [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) → [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) FUN_00589cb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 33件 [`0043b468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b468.md) [`0043b5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b5fc.md) [`0043b714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b714.md) [`004976e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/004976e4.md) [`00573ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00573/00573ba0.md) · 呼出先 6件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 33件 [`0043b788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b788.md) [`0043b91c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b91c.md) [`0043ba34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043ba34.md) [`00497a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497a04.md) [`00573ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00573/00573ec0.md) · 呼出先 6件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005899d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 005899d8 ["INT_ADD", "register:40f0:8", ["const:5899d8:8", "const:4:8"]]
- 005899d8 ["CALLIND", null, ["register:0:8"]]
+ 00589cf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00589cf8 ["INT_ADD", "register:40f0:8", ["const:589cf8:8", "const:4:8"]]
+ 00589cf8 ["CALLIND", null, ["register:0:8"]]
- 005899f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 005899f4 ["INT_ADD", "register:40f0:8", ["const:5899f4:8", "const:4:8"]]
- 005899f4 ["CALLIND", null, ["register:0:8"]]
+ 00589d14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00589d14 ["INT_ADD", "register:40f0:8", ["const:589d14:8", "const:4:8"]]
+ 00589d14 ["CALLIND", null, ["register:0:8"]]
- 005899fc ["INT_ADD", "register:40f0:8", ["const:5899fc:8", "const:4:8"]]
- 005899fc ["CALL", null, ["callee:00c59080:8"]]
+ 00589d1c ["INT_ADD", "register:40f0:8", ["const:589d1c:8", "const:4:8"]]
+ 00589d1c ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-df79826e40be493bbab0c3bc7fb11d66"></a>

### [`0058a6e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a6e4.md) → [`0058aa04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058aa04.md) FUN_0058aa04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`005724a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00572/005724a0.md) [`00578efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00578/00578efc.md) [`0057b1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057b1a4.md) [`005838ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00583/005838ec.md) [`005841ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/005841ec.md) · 呼出先 0件 
- 新版 呼出元 5件 [`005727c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00572/005727c0.md) [`0057921c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00579/0057921c.md) [`0057b4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057b/0057b4c4.md) [`00583c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00583/00583c0c.md) [`0058450c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00584/0058450c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058a71c ["COPY", "register:0:8", ["register:4040:8"]]
- 0058a71c ["INT_ADD", "register:40f0:8", ["const:58a71c:8", "const:4:8"]]
- 0058a71c ["CALLIND", null, ["register:0:8"]]
+ 0058aa3c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058aa3c ["INT_ADD", "register:40f0:8", ["const:58aa3c:8", "const:4:8"]]
+ 0058aa3c ["CALLIND", null, ["register:0:8"]]
- 0058a73c ["COPY", "register:0:8", ["register:4040:8"]]
- 0058a73c ["INT_ADD", "register:40f0:8", ["const:58a73c:8", "const:4:8"]]
- 0058a73c ["CALLIND", null, ["register:0:8"]]
+ 0058aa5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058aa5c ["INT_ADD", "register:40f0:8", ["const:58aa5c:8", "const:4:8"]]
+ 0058aa5c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9e81510265b266557b41e64362c28b10"></a>

### [`0058a760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a760.md) → [`0058aa80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058aa80.md) FUN_0058aa80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00572ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00572/00572ca8.md) [`00573ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00573/00573ec0.md) [`00574120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574120.md) · 呼出先 1件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md)
- 新版 呼出元 3件 [`00572fc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00572/00572fc8.md) [`005741e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00574/005741e0.md) [`00574440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00574/00574440.md) · 呼出先 1件 [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058a788 ["COPY", "register:0:8", ["register:4048:8"]]
- 0058a788 ["INT_ADD", "register:40f0:8", ["const:58a788:8", "const:4:8"]]
- 0058a788 ["CALLIND", null, ["register:0:8"]]
+ 0058aaa8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0058aaa8 ["INT_ADD", "register:40f0:8", ["const:58aaa8:8", "const:4:8"]]
+ 0058aaa8 ["CALLIND", null, ["register:0:8"]]
- 0058a79c ["COPY", "register:0:8", ["register:4040:8"]]
- 0058a79c ["INT_ADD", "register:40f0:8", ["const:58a79c:8", "const:4:8"]]
- 0058a79c ["CALLIND", null, ["register:0:8"]]
+ 0058aabc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058aabc ["INT_ADD", "register:40f0:8", ["const:58aabc:8", "const:4:8"]]
+ 0058aabc ["CALLIND", null, ["register:0:8"]]
- 0058a7b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058a7b4 ["INT_ADD", "register:40f0:8", ["const:58a7b4:8", "const:4:8"]]
- 0058a7b4 ["CALLIND", null, ["register:0:8"]]
+ 0058aad4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058aad4 ["INT_ADD", "register:40f0:8", ["const:58aad4:8", "const:4:8"]]
+ 0058aad4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-769ed820348d97b0535d6abfe4db9625"></a>

### [`0058a98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a98c.md) → [`0058acac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058acac.md) FUN_0058acac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`00588f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588f0c.md) [`00589834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589834.md) [`0058a2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a2f4.md) [`0058a864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a864.md) [`0058a8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a8b0.md) · 呼出先 2件 [`0058a98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a98c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 8件 [`0058922c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/0058922c.md) [`00589b54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589b54.md) [`0058a614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058a614.md) [`0058ab84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058ab84.md) [`0058abd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058abd0.md) · 呼出先 2件 [`0058acac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058acac.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058a9a8 ["INT_ADD", "register:40f0:8", ["const:58a9a8:8", "const:4:8"]]
- 0058a9a8 ["CALL", null, ["local:b0:8"]]
+ 0058acc8 ["INT_ADD", "register:40f0:8", ["const:58acc8:8", "const:4:8"]]
+ 0058acc8 ["CALL", null, ["local:b0:8"]]
- 0058a9b4 ["INT_ADD", "register:40f0:8", ["const:58a9b4:8", "const:4:8"]]
- 0058a9b4 ["CALL", null, ["local:b0:8"]]
+ 0058acd4 ["INT_ADD", "register:40f0:8", ["const:58acd4:8", "const:4:8"]]
+ 0058acd4 ["CALL", null, ["local:b0:8"]]
- 0058a9c4 ["INT_ADD", "register:40f0:8", ["const:58a9c4:8", "const:4:8"]]
- 0058a9c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0058ace4 ["INT_ADD", "register:40f0:8", ["const:58ace4:8", "const:4:8"]]
+ 0058ace4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2bb14656a3d8dba727a210a448bce15e"></a>

### [`0058a9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a9ec.md) → [`0058ad0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058ad0c.md) FUN_0058ad0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md) [`0058ab14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058ab14.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md) [`0058ae34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058ae34.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058aa50 ["INT_ADD", "register:40f0:8", ["const:58aa50:8", "const:4:8"]]
- 0058aa50 ["CALL", null, ["callee:00c590f0:8"]]
+ 0058ad70 ["INT_ADD", "register:40f0:8", ["const:58ad70:8", "const:4:8"]]
+ 0058ad70 ["CALL", null, ["callee:00c590f0:8"]]
- 0058aa80 ["INT_ADD", "register:40f0:8", ["const:58aa80:8", "const:4:8"]]
- 0058aa80 ["CALL", null, ["callee:00c590f0:8"]]
+ 0058ada0 ["INT_ADD", "register:40f0:8", ["const:58ada0:8", "const:4:8"]]
+ 0058ada0 ["CALL", null, ["callee:00c590f0:8"]]
- 0058aae4 ["INT_ADD", "register:40f0:8", ["const:58aae4:8", "const:4:8"]]
- 0058aae4 ["CALL", null, ["callee:00c590f0:8"]]
+ 0058ae04 ["INT_ADD", "register:40f0:8", ["const:58ae04:8", "const:4:8"]]
+ 0058ae04 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-4a4544b93a3632027452bceb144565e4"></a>

### [`0058ab14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058ab14.md) → [`0058ae34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058ae34.md) FUN_0058ae34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0058a9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a9ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0058ad0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058ad0c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058ab5c ["INT_ADD", "register:40f0:8", ["const:58ab5c:8", "const:4:8"]]
- 0058ab5c ["CALL", null, ["callee:0058ad0c:8"]]
+ 0058ae7c ["INT_ADD", "register:40f0:8", ["const:58ae7c:8", "const:4:8"]]
+ 0058ae7c ["CALL", null, ["callee:0058ad0c:8"]]
- 0058ab6c ["INT_ADD", "register:40f0:8", ["const:58ab6c:8", "const:4:8"]]
- 0058ab6c ["CALL", null, ["callee:0058ad0c:8"]]
+ 0058ae8c ["INT_ADD", "register:40f0:8", ["const:58ae8c:8", "const:4:8"]]
+ 0058ae8c ["CALL", null, ["callee:0058ad0c:8"]]
- 0058ab8c ["INT_ADD", "register:40f0:8", ["const:58ab8c:8", "const:4:8"]]
- 0058ab8c ["CALL", null, ["callee:00c58f30:8"]]
+ 0058aeac ["INT_ADD", "register:40f0:8", ["const:58aeac:8", "const:4:8"]]
+ 0058aeac ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-2ee5498fc517fb29033c71db9a5f0f68"></a>

### [`0058ad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058ad10.md) → [`0058b030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b030.md) FUN_0058b030

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058ad6c ["INT_ADD", "register:40f0:8", ["const:58ad6c:8", "const:4:8"]]
- 0058ad6c ["CALL", null, ["callee:00c58f30:8"]]
+ 0058b08c ["INT_ADD", "register:40f0:8", ["const:58b08c:8", "const:4:8"]]
+ 0058b08c ["CALL", null, ["callee:00c58f30:8"]]
- 0058ad8c ["INT_ADD", "register:40f0:8", ["const:58ad8c:8", "const:4:8"]]
- 0058ad8c ["CALL", null, ["callee:00c58fe0:8"]]
+ 0058b0ac ["INT_ADD", "register:40f0:8", ["const:58b0ac:8", "const:4:8"]]
+ 0058b0ac ["CALL", null, ["callee:00c58fe0:8"]]
- 0058ada8 ["INT_ADD", "register:40f0:8", ["const:58ada8:8", "const:4:8"]]
- 0058ada8 ["CALL", null, ["callee:0043bac4:8"]]
+ 0058b0c8 ["INT_ADD", "register:40f0:8", ["const:58b0c8:8", "const:4:8"]]
+ 0058b0c8 ["CALL", null, ["callee:0043bac4:8"]]
~~~


<a id="compare-dba9531cfc6f9b7e4e654017e6d680f6"></a>

### [`0058adac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058adac.md) → [`0058b0cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b0cc.md) FUN_0058b0cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00584ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584ddc.md) · 呼出先 2件 [`0058b654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b654.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005850fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/005850fc.md) · 呼出先 2件 [`0058b974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b974.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058add8 ["INT_ADD", "register:40f0:8", ["const:58add8:8", "const:4:8"]]
- 0058add8 ["CALL", null, ["callee:0058b974:8"]]
+ 0058b0f8 ["INT_ADD", "register:40f0:8", ["const:58b0f8:8", "const:4:8"]]
+ 0058b0f8 ["CALL", null, ["callee:0058b974:8"]]
- 0058ae04 ["INT_ADD", "register:40f0:8", ["const:58ae04:8", "const:4:8"]]
- 0058ae04 ["CALL", null, ["callee:00c58f80:8"]]
+ 0058b124 ["INT_ADD", "register:40f0:8", ["const:58b124:8", "const:4:8"]]
+ 0058b124 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-25c9c48d63a747cca6f30f1bad2432d9"></a>

### [`0058ae08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058ae08.md) → [`0058b128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b128.md) FUN_0058b128

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md) [`0087d3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d3d8.md) · 呼出先 5件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`0058b654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b654.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00597968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597968.md) [`0087e384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e384.md) · 呼出先 5件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`0058b974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b974.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058ae58 ["INT_ADD", "register:40f0:8", ["const:58ae58:8", "const:4:8"]]
- 0058ae58 ["CALL", null, ["callee:00c58f30:8"]]
+ 0058b178 ["INT_ADD", "register:40f0:8", ["const:58b178:8", "const:4:8"]]
+ 0058b178 ["CALL", null, ["callee:00c58f30:8"]]
- 0058aeec ["INT_ADD", "register:40f0:8", ["const:58aeec:8", "const:4:8"]]
- 0058aeec ["CALL", null, ["callee:0058b974:8"]]
+ 0058b20c ["INT_ADD", "register:40f0:8", ["const:58b20c:8", "const:4:8"]]
+ 0058b20c ["CALL", null, ["callee:0058b974:8"]]
- 0058af04 ["INT_ADD", "register:40f0:8", ["const:58af04:8", "const:4:8"]]
- 0058af04 ["CALL", null, ["callee:00c58f50:8"]]
+ 0058b224 ["INT_ADD", "register:40f0:8", ["const:58b224:8", "const:4:8"]]
+ 0058b224 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4cb4729be8c57b10c2e13e18a7fb544c"></a>

### [`0058af7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058af7c.md) → [`0058b29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b29c.md) FUN_0058b29c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0059764c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059764c.md) · 呼出先 6件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`0058b654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b654.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0059796c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059796c.md) · 呼出先 6件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`0058b974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b974.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058afc0 ["INT_ADD", "register:40f0:8", ["const:58afc0:8", "const:4:8"]]
- 0058afc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0058b2e0 ["INT_ADD", "register:40f0:8", ["const:58b2e0:8", "const:4:8"]]
+ 0058b2e0 ["CALL", null, ["callee:00c58f30:8"]]
- 0058afd8 ["INT_ADD", "register:40f0:8", ["const:58afd8:8", "const:4:8"]]
- 0058afd8 ["CALL", null, ["callee:00c590a0:8"]]
+ 0058b2f8 ["INT_ADD", "register:40f0:8", ["const:58b2f8:8", "const:4:8"]]
+ 0058b2f8 ["CALL", null, ["callee:00c590a0:8"]]
- 0058afec ["INT_ADD", "register:40f0:8", ["const:58afec:8", "const:4:8"]]
- 0058afec ["CALL", null, ["callee:0058b974:8"]]
+ 0058b30c ["INT_ADD", "register:40f0:8", ["const:58b30c:8", "const:4:8"]]
+ 0058b30c ["CALL", null, ["callee:0058b974:8"]]
~~~


<a id="compare-de91ff3ce2bee19dbf2240f47cb21bef"></a>

### [`0058b094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b094.md) → [`0058b3b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b3b4.md) FUN_0058b3b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058b0f0 ["INT_ADD", "register:40f0:8", ["const:58b0f0:8", "const:4:8"]]
- 0058b0f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0058b410 ["INT_ADD", "register:40f0:8", ["const:58b410:8", "const:4:8"]]
+ 0058b410 ["CALL", null, ["callee:00c58f30:8"]]
- 0058b110 ["INT_ADD", "register:40f0:8", ["const:58b110:8", "const:4:8"]]
- 0058b110 ["CALL", null, ["callee:00c58fe0:8"]]
+ 0058b430 ["INT_ADD", "register:40f0:8", ["const:58b430:8", "const:4:8"]]
+ 0058b430 ["CALL", null, ["callee:00c58fe0:8"]]
- 0058b12c ["INT_ADD", "register:40f0:8", ["const:58b12c:8", "const:4:8"]]
- 0058b12c ["CALL", null, ["callee:0043bac4:8"]]
+ 0058b44c ["INT_ADD", "register:40f0:8", ["const:58b44c:8", "const:4:8"]]
+ 0058b44c ["CALL", null, ["callee:0043bac4:8"]]
~~~


<a id="compare-554df6af0bead1649ffd11bef823eb8d"></a>

### [`0058b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b170.md) → [`0058b490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b490.md) FUN_0058b490

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00588d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588d2c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0058904c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/0058904c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058b19c ["COPY", "register:0:8", ["register:4048:8"]]
- 0058b19c ["INT_ADD", "register:40f0:8", ["const:58b19c:8", "const:4:8"]]
- 0058b19c ["CALLIND", null, ["register:0:8"]]
+ 0058b4bc ["COPY", "register:0:8", ["register:4048:8"]]
+ 0058b4bc ["INT_ADD", "register:40f0:8", ["const:58b4bc:8", "const:4:8"]]
+ 0058b4bc ["CALLIND", null, ["register:0:8"]]
- 0058b1b4 ["COPY", "register:0:8", ["register:4048:8"]]
- 0058b1b4 ["INT_ADD", "register:40f0:8", ["const:58b1b4:8", "const:4:8"]]
- 0058b1b4 ["CALLIND", null, ["register:0:8"]]
+ 0058b4d4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0058b4d4 ["INT_ADD", "register:40f0:8", ["const:58b4d4:8", "const:4:8"]]
+ 0058b4d4 ["CALLIND", null, ["register:0:8"]]
- 0058b1cc ["COPY", "register:0:8", ["register:4048:8"]]
- 0058b1cc ["INT_ADD", "register:40f0:8", ["const:58b1cc:8", "const:4:8"]]
- 0058b1cc ["CALLIND", null, ["register:0:8"]]
+ 0058b4ec ["COPY", "register:0:8", ["register:4048:8"]]
+ 0058b4ec ["INT_ADD", "register:40f0:8", ["const:58b4ec:8", "const:4:8"]]
+ 0058b4ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9df7c1dfa76ef86b0aa6ad4e8f8e2acd"></a>

### [`0058b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b210.md) → [`0058b530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b530.md) FUN_0058b530

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00597650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597650.md) · 呼出先 3件 [`0058b834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b834.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00597970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597970.md) · 呼出先 3件 [`0058bb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058bb54.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058b244 ["INT_ADD", "register:40f0:8", ["const:58b244:8", "const:4:8"]]
- 0058b244 ["CALL", null, ["callee:0058bb54:8"]]
+ 0058b564 ["INT_ADD", "register:40f0:8", ["const:58b564:8", "const:4:8"]]
+ 0058b564 ["CALL", null, ["callee:0058bb54:8"]]
- 0058b25c ["INT_ADD", "register:40f0:8", ["const:58b25c:8", "const:4:8"]]
- 0058b25c ["CALL", null, ["callee:00c58f50:8"]]
+ 0058b57c ["INT_ADD", "register:40f0:8", ["const:58b57c:8", "const:4:8"]]
+ 0058b57c ["CALL", null, ["callee:00c58f50:8"]]
- 0058b2b0 ["INT_ADD", "register:40f0:8", ["const:58b2b0:8", "const:4:8"]]
- 0058b2b0 ["CALL", null, ["callee:00c58f80:8"]]
+ 0058b5d0 ["INT_ADD", "register:40f0:8", ["const:58b5d0:8", "const:4:8"]]
+ 0058b5d0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-ef77035520aecce54e6ef4f1cdab1965"></a>

### [`0058b2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b2b4.md) → [`0058b5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b5d4.md) FUN_0058b5d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00597654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597654.md) · 呼出先 5件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`0058b834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b834.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00597974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597974.md) · 呼出先 5件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`0058bb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058bb54.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058b304 ["INT_ADD", "register:40f0:8", ["const:58b304:8", "const:4:8"]]
- 0058b304 ["CALL", null, ["callee:00c58f30:8"]]
+ 0058b624 ["INT_ADD", "register:40f0:8", ["const:58b624:8", "const:4:8"]]
+ 0058b624 ["CALL", null, ["callee:00c58f30:8"]]
- 0058b398 ["INT_ADD", "register:40f0:8", ["const:58b398:8", "const:4:8"]]
- 0058b398 ["CALL", null, ["callee:0058bb54:8"]]
+ 0058b6b8 ["INT_ADD", "register:40f0:8", ["const:58b6b8:8", "const:4:8"]]
+ 0058b6b8 ["CALL", null, ["callee:0058bb54:8"]]
- 0058b3b0 ["INT_ADD", "register:40f0:8", ["const:58b3b0:8", "const:4:8"]]
- 0058b3b0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0058b6d0 ["INT_ADD", "register:40f0:8", ["const:58b6d0:8", "const:4:8"]]
+ 0058b6d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-97aef6538f68c7ad38827278697f8a6d"></a>

### [`0058b428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b428.md) → [`0058b748`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b748.md) FUN_0058b748

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00597658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597658.md) · 呼出先 6件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`0058b834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b834.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00597978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597978.md) · 呼出先 6件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`0058bb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058bb54.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058b464 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058b464 ["INT_ADD", "register:40f0:8", ["const:58b464:8", "const:4:8"]]
- 0058b464 ["CALLIND", null, ["register:0:8"]]
+ 0058b784 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058b784 ["INT_ADD", "register:40f0:8", ["const:58b784:8", "const:4:8"]]
+ 0058b784 ["CALLIND", null, ["register:0:8"]]
- 0058b47c ["COPY", "register:0:8", ["register:4048:8"]]
- 0058b47c ["INT_ADD", "register:40f0:8", ["const:58b47c:8", "const:4:8"]]
- 0058b47c ["CALLIND", null, ["register:0:8"]]
+ 0058b79c ["COPY", "register:0:8", ["register:4048:8"]]
+ 0058b79c ["INT_ADD", "register:40f0:8", ["const:58b79c:8", "const:4:8"]]
+ 0058b79c ["CALLIND", null, ["register:0:8"]]
- 0058b494 ["COPY", "register:0:8", ["register:4048:8"]]
- 0058b494 ["INT_ADD", "register:40f0:8", ["const:58b494:8", "const:4:8"]]
- 0058b494 ["CALLIND", null, ["register:0:8"]]
+ 0058b7b4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0058b7b4 ["INT_ADD", "register:40f0:8", ["const:58b7b4:8", "const:4:8"]]
+ 0058b7b4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-82adc926e80cad6003be40374e3f485c"></a>

### [`0058b72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b72c.md) → [`0058ba4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058ba4c.md) FUN_0058ba4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0058b138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058b/0058b138.md) · 呼出先 4件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0058b458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b458.md) · 呼出先 4件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058b7c0 ["INT_ADD", "register:40f0:8", ["const:58b7c0:8", "const:4:8"]]
- 0058b7c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0058bae0 ["INT_ADD", "register:40f0:8", ["const:58bae0:8", "const:4:8"]]
+ 0058bae0 ["CALL", null, ["callee:00c58f30:8"]]
- 0058b7e8 ["INT_ADD", "register:40f0:8", ["const:58b7e8:8", "const:4:8"]]
- 0058b7e8 ["CALL", null, ["callee:00c590a0:8"]]
+ 0058bb08 ["INT_ADD", "register:40f0:8", ["const:58bb08:8", "const:4:8"]]
+ 0058bb08 ["CALL", null, ["callee:00c590a0:8"]]
- 0058b7fc ["INT_ADD", "register:40f0:8", ["const:58b7fc:8", "const:4:8"]]
- 0058b7fc ["CALL", null, ["callee:00c58f50:8"]]
+ 0058bb1c ["INT_ADD", "register:40f0:8", ["const:58bb1c:8", "const:4:8"]]
+ 0058bb1c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-083cd174f373ad6ea56c6cd90f350128"></a>

### [`0058eb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058e/0058eb84.md) → [`0058eea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058e/0058eea4.md) FUN_0058eea4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md) [`00589880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589880.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md) [`00589ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589ba0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058ebac ["INT_ADD", "register:40f0:8", ["const:58ebac:8", "const:4:8"]]
- 0058ebac ["CALL", null, ["callee:00589ba0:8"]]
+ 0058eecc ["INT_ADD", "register:40f0:8", ["const:58eecc:8", "const:4:8"]]
+ 0058eecc ["CALL", null, ["callee:00589ba0:8"]]
- 0058ebb4 ["INT_ADD", "register:40f0:8", ["const:58ebb4:8", "const:4:8"]]
- 0058ebb4 ["CALL", null, ["callee:005891cc:8"]]
+ 0058eed4 ["INT_ADD", "register:40f0:8", ["const:58eed4:8", "const:4:8"]]
+ 0058eed4 ["CALL", null, ["callee:005891cc:8"]]
- 0058ec00 ["INT_ADD", "register:40f0:8", ["const:58ec00:8", "const:4:8"]]
- 0058ec00 ["CALL", null, ["callee:00589680:8"]]
+ 0058ef20 ["INT_ADD", "register:40f0:8", ["const:58ef20:8", "const:4:8"]]
+ 0058ef20 ["CALL", null, ["callee:00589680:8"]]
~~~


<a id="compare-13acc277ac9cf82d83719a839b5a5615"></a>

### [`0058ed74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058e/0058ed74.md) → [`0058f094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f094.md) FUN_0058f094

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00597f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f00.md) · 呼出先 8件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00598220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598220.md) · 呼出先 8件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058ed94 ["INT_ADD", "register:40f0:8", ["const:58ed94:8", "const:4:8"]]
- 0058ed94 ["CALL", null, ["callee:005891cc:8"]]
+ 0058f0b4 ["INT_ADD", "register:40f0:8", ["const:58f0b4:8", "const:4:8"]]
+ 0058f0b4 ["CALL", null, ["callee:005891cc:8"]]
- 0058ed9c ["INT_ADD", "register:40f0:8", ["const:58ed9c:8", "const:4:8"]]
- 0058ed9c ["CALL", null, ["callee:005894bc:8"]]
+ 0058f0bc ["INT_ADD", "register:40f0:8", ["const:58f0bc:8", "const:4:8"]]
+ 0058f0bc ["CALL", null, ["callee:005894bc:8"]]
- 0058ede0 ["INT_ADD", "register:40f0:8", ["const:58ede0:8", "const:4:8"]]
- 0058ede0 ["CALL", null, ["callee:00589680:8"]]
+ 0058f100 ["INT_ADD", "register:40f0:8", ["const:58f100:8", "const:4:8"]]
+ 0058f100 ["CALL", null, ["callee:00589680:8"]]
~~~


<a id="compare-1cd1f0d6bd82b7bb8911e2dfa7327bc0"></a>

### [`0058f350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f350.md) → [`0058f670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f670.md) FUN_0058f670

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0058c5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058c/0058c5a4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0058c8c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058c/0058c8c4.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058f3bc ["INT_ADD", "register:40f0:8", ["const:58f3bc:8", "const:4:8"]]
- 0058f3bc ["CALL", null, ["callee:00c58f30:8"]]
+ 0058f6dc ["INT_ADD", "register:40f0:8", ["const:58f6dc:8", "const:4:8"]]
+ 0058f6dc ["CALL", null, ["callee:00c58f30:8"]]
- 0058f418 ["COPY", "register:0:8", ["register:4048:8"]]
- 0058f418 ["INT_ADD", "register:40f0:8", ["const:58f418:8", "const:4:8"]]
- 0058f418 ["CALLIND", null, ["register:0:8"]]
+ 0058f738 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0058f738 ["INT_ADD", "register:40f0:8", ["const:58f738:8", "const:4:8"]]
+ 0058f738 ["CALLIND", null, ["register:0:8"]]
- 0058f444 ["INT_ADD", "register:40f0:8", ["const:58f444:8", "const:4:8"]]
- 0058f444 ["CALL", null, ["callee:0043bf04:8"]]
+ 0058f764 ["INT_ADD", "register:40f0:8", ["const:58f764:8", "const:4:8"]]
+ 0058f764 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-eed0b8fcc08de40ea8e97cf9739bf5df"></a>

### [`0058f474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f474.md) → [`0058f794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f794.md) FUN_0058f794

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`0058ccf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058c/0058ccf0.md) [`0058cf98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058c/0058cf98.md) [`005ad3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad3f8.md) [`00888480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888480.md) [`00890668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890668.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 7件 [`0058d010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058d/0058d010.md) [`0058d2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058d/0058d2b8.md) [`005ad7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad7a8.md) [`0088942c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/0088942c.md) [`00891614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891614.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058f4e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058f4e0 ["INT_ADD", "register:40f0:8", ["const:58f4e0:8", "const:4:8"]]
- 0058f4e0 ["CALLIND", null, ["register:0:8"]]
+ 0058f800 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058f800 ["INT_ADD", "register:40f0:8", ["const:58f800:8", "const:4:8"]]
+ 0058f800 ["CALLIND", null, ["register:0:8"]]
- 0058f4f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058f4f0 ["INT_ADD", "register:40f0:8", ["const:58f4f0:8", "const:4:8"]]
- 0058f4f0 ["CALLIND", null, ["register:0:8"]]
+ 0058f810 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058f810 ["INT_ADD", "register:40f0:8", ["const:58f810:8", "const:4:8"]]
+ 0058f810 ["CALLIND", null, ["register:0:8"]]
- 0058f510 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058f510 ["INT_ADD", "register:40f0:8", ["const:58f510:8", "const:4:8"]]
- 0058f510 ["CALLIND", null, ["register:0:8"]]
+ 0058f830 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058f830 ["INT_ADD", "register:40f0:8", ["const:58f830:8", "const:4:8"]]
+ 0058f830 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e964d9d822f59821f28119b43cc8f9b2"></a>

### [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) → [`0058f8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f8fc.md) FUN_0058f8fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 9件 [`0058dbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058d/0058dbcc.md) [`00b52a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52a50.md) [`00b54384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54384.md) [`00bc50f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc50f8.md) [`00bc53f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc53f4.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 9件 [`0058deec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058d/0058deec.md) [`00b53a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b53/00b53a44.md) [`00b55378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b55378.md) [`00bc60ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc60ec.md) [`00bc63e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc63e8.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058f650 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058f650 ["INT_ADD", "register:40f0:8", ["const:58f650:8", "const:4:8"]]
- 0058f650 ["CALLIND", null, ["register:0:8"]]
+ 0058f970 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058f970 ["INT_ADD", "register:40f0:8", ["const:58f970:8", "const:4:8"]]
+ 0058f970 ["CALLIND", null, ["register:0:8"]]
- 0058f674 ["INT_ADD", "register:40f0:8", ["const:58f674:8", "const:4:8"]]
- 0058f674 ["CALL", null, ["callee:00c58f80:8"]]
+ 0058f994 ["INT_ADD", "register:40f0:8", ["const:58f994:8", "const:4:8"]]
+ 0058f994 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-7cea9f780912144e4f72242d0bf56adc"></a>

### [`0058f768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f768.md) → [`0058fa88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fa88.md) FUN_0058fa88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00590d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590d58.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00591078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591078.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0058f784 ["INT_ADD", "register:40f0:8", ["const:58f784:8", "const:4:8"]]
- 0058f784 ["CALL", null, ["callee:00c54d90:8"]]
+ 0058faa4 ["INT_ADD", "register:40f0:8", ["const:58faa4:8", "const:4:8"]]
+ 0058faa4 ["CALL", null, ["callee:00c54d90:8"]]
- 0058f7a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058f7a4 ["INT_ADD", "register:40f0:8", ["const:58f7a4:8", "const:4:8"]]
- 0058f7a4 ["CALLIND", null, ["register:0:8"]]
+ 0058fac4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058fac4 ["INT_ADD", "register:40f0:8", ["const:58fac4:8", "const:4:8"]]
+ 0058fac4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e5211b779e6f5bf541d41707bd656928"></a>

### [`00590328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590328.md) → [`00590648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590648.md) FUN_00590648

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0058f7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f7b8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0058fad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fad8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00590358 ["INT_ADD", "register:40f0:8", ["const:590358:8", "const:4:8"]]
- 00590358 ["CALL", null, ["callee:00c58f50:8"]]
+ 00590678 ["INT_ADD", "register:40f0:8", ["const:590678:8", "const:4:8"]]
+ 00590678 ["CALL", null, ["callee:00c58f50:8"]]
- 005903a4 ["INT_ADD", "register:40f0:8", ["const:5903a4:8", "const:4:8"]]
- 005903a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005906c4 ["INT_ADD", "register:40f0:8", ["const:5906c4:8", "const:4:8"]]
+ 005906c4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1d8ec845ac9509b3cda2e558b00c89a3"></a>

### [`005903f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/005903f8.md) → [`00590718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590718.md) FUN_00590718

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0058fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fddc.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005908b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/005908b8.md) [`00590a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590a40.md) [`00590bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590bcc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005900fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005900fc.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00590bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590bd8.md) [`00590d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590d60.md) [`00590eec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590eec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00590490 ["INT_ADD", "register:40f0:8", ["const:590490:8", "const:4:8"]]
- 00590490 ["CALL", null, ["callee:00c58fe0:8"]]
+ 005907b0 ["INT_ADD", "register:40f0:8", ["const:5907b0:8", "const:4:8"]]
+ 005907b0 ["CALL", null, ["callee:00c58fe0:8"]]
- 005904d4 ["INT_ADD", "register:40f0:8", ["const:5904d4:8", "const:4:8"]]
- 005904d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005907f4 ["INT_ADD", "register:40f0:8", ["const:5907f4:8", "const:4:8"]]
+ 005907f4 ["CALL", null, ["callee:00c58f30:8"]]
- 005904e4 ["INT_ADD", "register:40f0:8", ["const:5904e4:8", "const:4:8"]]
- 005904e4 ["CALL", null, ["callee:00590bd8:8"]]
+ 00590804 ["INT_ADD", "register:40f0:8", ["const:590804:8", "const:4:8"]]
+ 00590804 ["CALL", null, ["callee:00590bd8:8"]]
~~~


<a id="compare-e9c060b01af57e9daeaf8495abd22652"></a>

### [`005908b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/005908b8.md) → [`00590bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590bd8.md) FUN_00590bd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005903f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/005903f8.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00590718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590718.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00590920 ["INT_ADD", "register:40f0:8", ["const:590920:8", "const:4:8"]]
- 00590920 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00590c40 ["INT_ADD", "register:40f0:8", ["const:590c40:8", "const:4:8"]]
+ 00590c40 ["CALL", null, ["callee:00c58fe0:8"]]
- 00590958 ["INT_ADD", "register:40f0:8", ["const:590958:8", "const:4:8"]]
- 00590958 ["CALL", null, ["callee:00c58f30:8"]]
+ 00590c78 ["INT_ADD", "register:40f0:8", ["const:590c78:8", "const:4:8"]]
+ 00590c78 ["CALL", null, ["callee:00c58f30:8"]]
- 00590a08 ["INT_ADD", "register:40f0:8", ["const:590a08:8", "const:4:8"]]
- 00590a08 ["CALL", null, ["callee:00c58f50:8"]]
+ 00590d28 ["INT_ADD", "register:40f0:8", ["const:590d28:8", "const:4:8"]]
+ 00590d28 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-962212d592e706aefd5f41e2afa8d481"></a>

### [`00590a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590a40.md) → [`00590d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590d60.md) FUN_00590d60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005903f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/005903f8.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00590718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590718.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00590ab0 ["INT_ADD", "register:40f0:8", ["const:590ab0:8", "const:4:8"]]
- 00590ab0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00590dd0 ["INT_ADD", "register:40f0:8", ["const:590dd0:8", "const:4:8"]]
+ 00590dd0 ["CALL", null, ["callee:00c58fe0:8"]]
- 00590ae8 ["INT_ADD", "register:40f0:8", ["const:590ae8:8", "const:4:8"]]
- 00590ae8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00590e08 ["INT_ADD", "register:40f0:8", ["const:590e08:8", "const:4:8"]]
+ 00590e08 ["CALL", null, ["callee:00c58f30:8"]]
- 00590b98 ["INT_ADD", "register:40f0:8", ["const:590b98:8", "const:4:8"]]
- 00590b98 ["CALL", null, ["callee:00c58f50:8"]]
+ 00590eb8 ["INT_ADD", "register:40f0:8", ["const:590eb8:8", "const:4:8"]]
+ 00590eb8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ce6359277907e31e0a5e5216d004ac0d"></a>

### [`00590bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590bcc.md) → [`00590eec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590eec.md) FUN_00590eec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005903f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/005903f8.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00590718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590718.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00590c3c ["INT_ADD", "register:40f0:8", ["const:590c3c:8", "const:4:8"]]
- 00590c3c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00590f5c ["INT_ADD", "register:40f0:8", ["const:590f5c:8", "const:4:8"]]
+ 00590f5c ["CALL", null, ["callee:00c58fe0:8"]]
- 00590c74 ["INT_ADD", "register:40f0:8", ["const:590c74:8", "const:4:8"]]
- 00590c74 ["CALL", null, ["callee:00c58f30:8"]]
+ 00590f94 ["INT_ADD", "register:40f0:8", ["const:590f94:8", "const:4:8"]]
+ 00590f94 ["CALL", null, ["callee:00c58f30:8"]]
- 00590d24 ["INT_ADD", "register:40f0:8", ["const:590d24:8", "const:4:8"]]
- 00590d24 ["CALL", null, ["callee:00c58f50:8"]]
+ 00591044 ["INT_ADD", "register:40f0:8", ["const:591044:8", "const:4:8"]]
+ 00591044 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6fc68c1fc7271ef25d9a617fcb3cd357"></a>

### [`0059124c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/0059124c.md) → [`0059156c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/0059156c.md) FUN_0059156c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00591268 ["INT_ADD", "register:40f0:8", ["const:591268:8", "const:4:8"]]
- 00591268 ["CALL", null, ["callee:00c54d90:8"]]
+ 00591588 ["INT_ADD", "register:40f0:8", ["const:591588:8", "const:4:8"]]
+ 00591588 ["CALL", null, ["callee:00c54d90:8"]]
- 00591288 ["COPY", "register:0:8", ["register:4040:8"]]
- 00591288 ["INT_ADD", "register:40f0:8", ["const:591288:8", "const:4:8"]]
- 00591288 ["CALLIND", null, ["register:0:8"]]
+ 005915a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005915a8 ["INT_ADD", "register:40f0:8", ["const:5915a8:8", "const:4:8"]]
+ 005915a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a4e9efb1f27ba3f21b034d58e3be403e"></a>

### [`0059129c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/0059129c.md) → [`005915bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/005915bc.md) FUN_005915bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00590df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590df8.md) · 呼出先 2件 [`00593ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593ce4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00591118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591118.md) · 呼出先 2件 [`00594004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594004.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005912c8 ["INT_ADD", "register:40f0:8", ["const:5912c8:8", "const:4:8"]]
- 005912c8 ["CALL", null, ["callee:00594004:8"]]
+ 005915e8 ["INT_ADD", "register:40f0:8", ["const:5915e8:8", "const:4:8"]]
+ 005915e8 ["CALL", null, ["callee:00594004:8"]]
- 005912f4 ["INT_ADD", "register:40f0:8", ["const:5912f4:8", "const:4:8"]]
- 005912f4 ["CALL", null, ["callee:00c58f80:8"]]
+ 00591614 ["INT_ADD", "register:40f0:8", ["const:591614:8", "const:4:8"]]
+ 00591614 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-368b2bcd8fe44697175ce9dd8b034638"></a>

### [`0059170c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/0059170c.md) → [`00591a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591a2c.md) FUN_00591a2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00592bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592bac.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00592ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592ecc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00591734 ["INT_ADD", "register:40f0:8", ["const:591734:8", "const:4:8"]]
- 00591734 ["CALL", null, ["callee:00592ecc:8"]]
+ 00591a54 ["INT_ADD", "register:40f0:8", ["const:591a54:8", "const:4:8"]]
+ 00591a54 ["CALL", null, ["callee:00592ecc:8"]]
- 00591760 ["INT_ADD", "register:40f0:8", ["const:591760:8", "const:4:8"]]
- 00591760 ["CALL", null, ["callee:00c58f80:8"]]
+ 00591a80 ["INT_ADD", "register:40f0:8", ["const:591a80:8", "const:4:8"]]
+ 00591a80 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-0b04f4e38a9ea3dcfa695faa8e93460b"></a>

### [`00591810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591810.md) → [`00591b30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591b30.md) FUN_00591b30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a480.md) [`00c5a4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a4e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b450.md) [`00c5b4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00591824 ["INT_ADD", "register:40f0:8", ["const:591824:8", "const:4:8"]]
- 00591824 ["CALL", null, ["callee:00c5b450:8"]]
+ 00591b44 ["INT_ADD", "register:40f0:8", ["const:591b44:8", "const:4:8"]]
+ 00591b44 ["CALL", null, ["callee:00c5b450:8"]]
~~~


<a id="compare-f7b15c44412623be3c98a104b97e3d13"></a>

### [`0059184c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/0059184c.md) → [`00591b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591b6c.md) FUN_00591b6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5a480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a480.md) [`00c5a4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a4f0.md) [`00c5a520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a520.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5b450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b450.md) [`00c5b4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b4c0.md) [`00c5b4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00591864 ["INT_ADD", "register:40f0:8", ["const:591864:8", "const:4:8"]]
- 00591864 ["CALL", null, ["callee:00c5b450:8"]]
+ 00591b84 ["INT_ADD", "register:40f0:8", ["const:591b84:8", "const:4:8"]]
+ 00591b84 ["CALL", null, ["callee:00c5b450:8"]]
~~~


<a id="compare-6b2e5eb180c11c255c90d75298bf6dd4"></a>

### [`00591960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591960.md) → [`00591c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591c80.md) FUN_00591c80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a480.md) [`00c5a530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a530.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f70.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b450.md) [`00c5b500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b500.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00591998 ["INT_ADD", "register:40f0:8", ["const:591998:8", "const:4:8"]]
- 00591998 ["CALL", null, ["callee:00c5b450:8"]]
+ 00591cb8 ["INT_ADD", "register:40f0:8", ["const:591cb8:8", "const:4:8"]]
+ 00591cb8 ["CALL", null, ["callee:00c5b450:8"]]
- 005919a4 ["INT_ADD", "register:40f0:8", ["const:5919a4:8", "const:4:8"]]
- 005919a4 ["CALL", null, ["callee:00c58f70:8"]]
+ 00591cc4 ["INT_ADD", "register:40f0:8", ["const:591cc4:8", "const:4:8"]]
+ 00591cc4 ["CALL", null, ["callee:00c58f70:8"]]
- 005919c0 ["INT_ADD", "register:40f0:8", ["const:5919c0:8", "const:4:8"]]
- 005919c0 ["CALL", null, ["callee:00c5b500:8"]]
+ 00591ce0 ["INT_ADD", "register:40f0:8", ["const:591ce0:8", "const:4:8"]]
+ 00591ce0 ["CALL", null, ["callee:00c5b500:8"]]
~~~


<a id="compare-a624199861f92327939c438096020e3b"></a>

### [`00591afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591afc.md) → [`00591e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591e1c.md) FUN_00591e1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5a480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a480.md) [`00c5a550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a550.md) [`00c5a560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a560.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5b450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b450.md) [`00c5b520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b520.md) [`00c5b530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b530.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00591b14 ["INT_ADD", "register:40f0:8", ["const:591b14:8", "const:4:8"]]
- 00591b14 ["CALL", null, ["callee:00c5b450:8"]]
+ 00591e34 ["INT_ADD", "register:40f0:8", ["const:591e34:8", "const:4:8"]]
+ 00591e34 ["CALL", null, ["callee:00c5b450:8"]]
- 00591b24 ["INT_ADD", "register:40f0:8", ["const:591b24:8", "const:4:8"]]
- 00591b24 ["CALL", null, ["callee:00c5b520:8"]]
+ 00591e44 ["INT_ADD", "register:40f0:8", ["const:591e44:8", "const:4:8"]]
+ 00591e44 ["CALL", null, ["callee:00c5b520:8"]]
~~~


<a id="compare-c41e04d111c1c8c78fe4880d7ece5345"></a>

### [`00591b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591b5c.md) → [`00591e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591e7c.md) FUN_00591e7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a580.md) [`00c5a590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a590.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b550.md) [`00c5b560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b560.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00591b64 ["INT_ADD", "register:40f0:8", ["const:591b64:8", "const:4:8"]]
- 00591b64 ["CALL", null, ["callee:00c5b550:8"]]
+ 00591e84 ["INT_ADD", "register:40f0:8", ["const:591e84:8", "const:4:8"]]
+ 00591e84 ["CALL", null, ["callee:00c5b550:8"]]
~~~


<a id="compare-e2ff38f5fffddc3b25ecc9446a013d44"></a>

### [`00591b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591b74.md) → [`00591e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591e94.md) FUN_00591e94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`0058fc04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fc04.md) [`00c5a440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a440.md) [`00c5a5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a5a0.md) [`00c5a5b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a5b0.md) [`00c5a5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a5c0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0058ff24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058ff24.md) [`00c5b410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b410.md) [`00c5b570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b570.md) [`00c5b580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b580.md) [`00c5b590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b590.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00591b9c ["INT_ADD", "register:40f0:8", ["const:591b9c:8", "const:4:8"]]
- 00591b9c ["CALL", null, ["callee:00c5b410:8"]]
+ 00591ebc ["INT_ADD", "register:40f0:8", ["const:591ebc:8", "const:4:8"]]
+ 00591ebc ["CALL", null, ["callee:00c5b410:8"]]
- 00591ba0 ["INT_ADD", "register:40f0:8", ["const:591ba0:8", "const:4:8"]]
- 00591ba0 ["CALL", null, ["callee:0058ff24:8"]]
+ 00591ec0 ["INT_ADD", "register:40f0:8", ["const:591ec0:8", "const:4:8"]]
+ 00591ec0 ["CALL", null, ["callee:0058ff24:8"]]
- 00591bbc ["INT_ADD", "register:40f0:8", ["const:591bbc:8", "const:4:8"]]
- 00591bbc ["CALL", null, ["callee:00c5b570:8"]]
+ 00591edc ["INT_ADD", "register:40f0:8", ["const:591edc:8", "const:4:8"]]
+ 00591edc ["CALL", null, ["callee:00c5b570:8"]]
~~~


<a id="compare-65d9c4bd84eb24b44f6eda574a7637f9"></a>

### [`00592188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592188.md) → [`005924a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005924a8.md) FUN_005924a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00592100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592100.md) · 呼出先 9件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00592420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592420.md) · 呼出先 9件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f70.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005921d0 ["INT_ADD", "register:40f0:8", ["const:5921d0:8", "const:4:8"]]
- 005921d0 ["CALL", null, ["callee:00c58f70:8"]]
+ 005924f0 ["INT_ADD", "register:40f0:8", ["const:5924f0:8", "const:4:8"]]
+ 005924f0 ["CALL", null, ["callee:00c58f70:8"]]
- 005921dc ["INT_ADD", "register:40f0:8", ["const:5921dc:8", "const:4:8"]]
- 005921dc ["CALL", null, ["callee:00c5b5c0:8"]]
+ 005924fc ["INT_ADD", "register:40f0:8", ["const:5924fc:8", "const:4:8"]]
+ 005924fc ["CALL", null, ["callee:00c5b5c0:8"]]
- 005921ec ["COPY", "register:0:8", ["register:4040:8"]]
- 005921ec ["INT_ADD", "register:40f0:8", ["const:5921ec:8", "const:4:8"]]
- 005921ec ["CALLIND", null, ["register:0:8"]]
+ 0059250c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059250c ["INT_ADD", "register:40f0:8", ["const:59250c:8", "const:4:8"]]
+ 0059250c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-39eb25cc5c694e4f826c0931ea5f8544"></a>

### [`005925b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005925b8.md) → [`005928d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005928d8.md) FUN_005928d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`00590df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590df8.md) [`005917c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/005917c8.md) [`00591880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591880.md) [`005918c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/005918c8.md) [`00591918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591918.md) · 呼出先 1件 [`005925b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005925b8.md)
- 新版 呼出元 7件 [`00591118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591118.md) [`00591ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591ae8.md) [`00591ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591ba0.md) [`00591be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591be8.md) [`00591c38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591c38.md) · 呼出先 1件 [`005928d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005928d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005925e4 ["INT_ADD", "register:40f0:8", ["const:5925e4:8", "const:4:8"]]
- 005925e4 ["CALL", null, ["local:b0:8"]]
+ 00592904 ["INT_ADD", "register:40f0:8", ["const:592904:8", "const:4:8"]]
+ 00592904 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-7e30ed97347f9a8a95505466d710119a"></a>

### [`005926e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005926e8.md) → [`00592a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592a08.md) FUN_00592a08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005926f8 ["INT_ADD", "register:40f0:8", ["const:5926f8:8", "const:4:8"]]
- 005926f8 ["CALL", null, ["callee:005555e8:8"]]
+ 00592a18 ["INT_ADD", "register:40f0:8", ["const:592a18:8", "const:4:8"]]
+ 00592a18 ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-92c7bcdf014ebf95e84e6a10ca33d8f8"></a>

### [`00592710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592710.md) → [`00592a30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592a30.md) FUN_00592a30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a440.md) [`00c5a460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a460.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f70.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b410.md) [`00c5b430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b430.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00592754 ["INT_ADD", "register:40f0:8", ["const:592754:8", "const:4:8"]]
- 00592754 ["CALL", null, ["callee:00c58f70:8"]]
+ 00592a74 ["INT_ADD", "register:40f0:8", ["const:592a74:8", "const:4:8"]]
+ 00592a74 ["CALL", null, ["callee:00c58f70:8"]]
- 00592760 ["INT_ADD", "register:40f0:8", ["const:592760:8", "const:4:8"]]
- 00592760 ["CALL", null, ["callee:00c5b410:8"]]
+ 00592a80 ["INT_ADD", "register:40f0:8", ["const:592a80:8", "const:4:8"]]
+ 00592a80 ["CALL", null, ["callee:00c5b410:8"]]
- 00592788 ["INT_ADD", "register:40f0:8", ["const:592788:8", "const:4:8"]]
- 00592788 ["CALL", null, ["callee:00c5b430:8"]]
+ 00592aa8 ["INT_ADD", "register:40f0:8", ["const:592aa8:8", "const:4:8"]]
+ 00592aa8 ["CALL", null, ["callee:00c5b430:8"]]
~~~


<a id="compare-3abc6ed9b8a67fbc17dab39408899dd3"></a>

### [`005927c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005927c4.md) → [`00592ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592ae4.md) FUN_00592ae4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a440.md) [`00c5a450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a450.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f70.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b410.md) [`00c5b420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b420.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005927f4 ["INT_ADD", "register:40f0:8", ["const:5927f4:8", "const:4:8"]]
- 005927f4 ["CALL", null, ["callee:00c58f70:8"]]
+ 00592b14 ["INT_ADD", "register:40f0:8", ["const:592b14:8", "const:4:8"]]
+ 00592b14 ["CALL", null, ["callee:00c58f70:8"]]
- 00592800 ["INT_ADD", "register:40f0:8", ["const:592800:8", "const:4:8"]]
- 00592800 ["CALL", null, ["callee:00c5b410:8"]]
+ 00592b20 ["INT_ADD", "register:40f0:8", ["const:592b20:8", "const:4:8"]]
+ 00592b20 ["CALL", null, ["callee:00c5b410:8"]]
- 00592810 ["INT_ADD", "register:40f0:8", ["const:592810:8", "const:4:8"]]
- 00592810 ["CALL", null, ["callee:00c5b420:8"]]
+ 00592b30 ["INT_ADD", "register:40f0:8", ["const:592b30:8", "const:4:8"]]
+ 00592b30 ["CALL", null, ["callee:00c5b420:8"]]
~~~


<a id="compare-dbd976dbde5252cd2f26bfd1bcdb576f"></a>

### [`00592970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592970.md) → [`00592c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592c90.md) FUN_00592c90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00592980 ["INT_ADD", "register:40f0:8", ["const:592980:8", "const:4:8"]]
- 00592980 ["CALL", null, ["callee:005555e8:8"]]
+ 00592ca0 ["INT_ADD", "register:40f0:8", ["const:592ca0:8", "const:4:8"]]
+ 00592ca0 ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-42dd3978f306342a6484de45d2df267d"></a>

### [`00592a9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592a9c.md) → [`00592dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592dbc.md) FUN_00592dbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a5d0.md) [`00c5a650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a650.md) [`00c5a660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a660.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5b5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b5a0.md) [`00c5b620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b620.md) [`00c5b630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b630.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00592ac8 ["INT_ADD", "register:40f0:8", ["const:592ac8:8", "const:4:8"]]
- 00592ac8 ["CALL", null, ["callee:00c5b5a0:8"]]
+ 00592de8 ["INT_ADD", "register:40f0:8", ["const:592de8:8", "const:4:8"]]
+ 00592de8 ["CALL", null, ["callee:00c5b5a0:8"]]
- 00592ae0 ["INT_ADD", "register:40f0:8", ["const:592ae0:8", "const:4:8"]]
- 00592ae0 ["CALL", null, ["callee:00c5b620:8"]]
+ 00592e00 ["INT_ADD", "register:40f0:8", ["const:592e00:8", "const:4:8"]]
+ 00592e00 ["CALL", null, ["callee:00c5b620:8"]]
- 00592af4 ["INT_ADD", "register:40f0:8", ["const:592af4:8", "const:4:8"]]
- 00592af4 ["CALL", null, ["callee:00c5b630:8"]]
+ 00592e14 ["INT_ADD", "register:40f0:8", ["const:592e14:8", "const:4:8"]]
+ 00592e14 ["CALL", null, ["callee:00c5b630:8"]]
~~~


<a id="compare-7f38880e808e0b88beee6b804b0aa945"></a>

### [`00592b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592b10.md) → [`00592e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592e30.md) FUN_00592e30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a5d0.md) [`00c5a670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a670.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b5a0.md) [`00c5b640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b640.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00592b38 ["INT_ADD", "register:40f0:8", ["const:592b38:8", "const:4:8"]]
- 00592b38 ["CALL", null, ["callee:00c5b5a0:8"]]
+ 00592e58 ["INT_ADD", "register:40f0:8", ["const:592e58:8", "const:4:8"]]
+ 00592e58 ["CALL", null, ["callee:00c5b5a0:8"]]
- 00592b48 ["INT_ADD", "register:40f0:8", ["const:592b48:8", "const:4:8"]]
- 00592b48 ["CALL", null, ["callee:00c5b640:8"]]
+ 00592e68 ["INT_ADD", "register:40f0:8", ["const:592e68:8", "const:4:8"]]
+ 00592e68 ["CALL", null, ["callee:00c5b640:8"]]
- 00592b54 ["INT_ADD", "register:40f0:8", ["const:592b54:8", "const:4:8"]]
- 00592b54 ["CALL", null, ["callee:00c5b5a0:8"]]
+ 00592e74 ["INT_ADD", "register:40f0:8", ["const:592e74:8", "const:4:8"]]
+ 00592e74 ["CALL", null, ["callee:00c5b5a0:8"]]
~~~


<a id="compare-46596faec8ba4948064cf2a3f140f368"></a>

### [`00592b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592b80.md) → [`00592ea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592ea0.md) FUN_00592ea0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00592b90 ["INT_ADD", "register:40f0:8", ["const:592b90:8", "const:4:8"]]
- 00592b90 ["CALL", null, ["callee:005555e8:8"]]
+ 00592eb0 ["INT_ADD", "register:40f0:8", ["const:592eb0:8", "const:4:8"]]
+ 00592eb0 ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-850336d7d2f7bbcc73e2f9ae541c6210"></a>

### [`00592ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592ca4.md) → [`00592fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592fc4.md) FUN_00592fc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00592cc0 ["INT_ADD", "register:40f0:8", ["const:592cc0:8", "const:4:8"]]
- 00592cc0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00592fe0 ["INT_ADD", "register:40f0:8", ["const:592fe0:8", "const:4:8"]]
+ 00592fe0 ["CALL", null, ["callee:00c54d90:8"]]
- 00592ce0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00592ce0 ["INT_ADD", "register:40f0:8", ["const:592ce0:8", "const:4:8"]]
- 00592ce0 ["CALLIND", null, ["register:0:8"]]
+ 00593000 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00593000 ["INT_ADD", "register:40f0:8", ["const:593000:8", "const:4:8"]]
+ 00593000 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d4796b54a2df52a67e370d465200d0b7"></a>

### [`00593ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593ae8.md) → [`00593e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/00593e08.md) FUN_00593e08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a540.md) [`00c5a720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a720.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b510.md) [`00c5b6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b6f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00593b4c ["INT_ADD", "register:40f0:8", ["const:593b4c:8", "const:4:8"]]
- 00593b4c ["CALL", null, ["callee:00c5b510:8"]]
+ 00593e6c ["INT_ADD", "register:40f0:8", ["const:593e6c:8", "const:4:8"]]
+ 00593e6c ["CALL", null, ["callee:00c5b510:8"]]
~~~


<a id="compare-34e1655c4025562ee5fe03f678d830d7"></a>

### [`00593b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593b68.md) → [`00593e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/00593e88.md) FUN_00593e88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a540.md) [`00c5a730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a730.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b510.md) [`00c5b700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b700.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00593bd0 ["INT_ADD", "register:40f0:8", ["const:593bd0:8", "const:4:8"]]
- 00593bd0 ["CALL", null, ["callee:00c5b510:8"]]
+ 00593ef0 ["INT_ADD", "register:40f0:8", ["const:593ef0:8", "const:4:8"]]
+ 00593ef0 ["CALL", null, ["callee:00c5b510:8"]]
~~~


<a id="compare-e00b115ddd576ee42568b0b1985a0fc4"></a>

### [`00593bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593bf0.md) → [`00593f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/00593f10.md) FUN_00593f10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a540.md) [`00c5a740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a740.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b510.md) [`00c5b710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b710.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00593c4c ["INT_ADD", "register:40f0:8", ["const:593c4c:8", "const:4:8"]]
- 00593c4c ["CALL", null, ["callee:00c5b510:8"]]
+ 00593f6c ["INT_ADD", "register:40f0:8", ["const:593f6c:8", "const:4:8"]]
+ 00593f6c ["CALL", null, ["callee:00c5b510:8"]]
~~~


<a id="compare-68728e4ff4c517baaad1c76d7792ee4a"></a>

### [`00593c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593c68.md) → [`00593f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/00593f88.md) FUN_00593f88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a540.md) [`00c5a750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a750.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b510.md) [`00c5b720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b720.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00593cc4 ["INT_ADD", "register:40f0:8", ["const:593cc4:8", "const:4:8"]]
- 00593cc4 ["CALL", null, ["callee:00c5b510:8"]]
+ 00593fe4 ["INT_ADD", "register:40f0:8", ["const:593fe4:8", "const:4:8"]]
+ 00593fe4 ["CALL", null, ["callee:00c5b510:8"]]
~~~


<a id="compare-c2c35e95ecd1380b4dd67c27810ebad7"></a>

### [`00594380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594380.md) → [`005946a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/005946a0.md) FUN_005946a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00594380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594380.md) [`00594920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594920.md) · 呼出先 2件 [`00594380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594380.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005946a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/005946a0.md) [`00594c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594c40.md) · 呼出先 2件 [`005946a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/005946a0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005943a0 ["INT_ADD", "register:40f0:8", ["const:5943a0:8", "const:4:8"]]
- 005943a0 ["CALL", null, ["local:b0:8"]]
+ 005946c0 ["INT_ADD", "register:40f0:8", ["const:5946c0:8", "const:4:8"]]
+ 005946c0 ["CALL", null, ["local:b0:8"]]
- 005943ac ["INT_ADD", "register:40f0:8", ["const:5943ac:8", "const:4:8"]]
- 005943ac ["CALL", null, ["local:b0:8"]]
+ 005946cc ["INT_ADD", "register:40f0:8", ["const:5946cc:8", "const:4:8"]]
+ 005946cc ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-b0e206642c37dd15b379d7885bee5957"></a>

### [`005943c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/005943c4.md) → [`005946e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/005946e4.md) FUN_005946e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005933c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/005933c0.md) [`00b07a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07a64.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005944f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/005944f0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`005936e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/005936e0.md) [`00b08a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b08a58.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00594810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594810.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005943fc ["INT_ADD", "register:40f0:8", ["const:5943fc:8", "const:4:8"]]
- 005943fc ["CALL", null, ["callee:00594810:8"]]
+ 0059471c ["INT_ADD", "register:40f0:8", ["const:59471c:8", "const:4:8"]]
+ 0059471c ["CALL", null, ["callee:00594810:8"]]
- 0059441c ["INT_ADD", "register:40f0:8", ["const:59441c:8", "const:4:8"]]
- 0059441c ["CALL", null, ["callee:00c58f30:8"]]
+ 0059473c ["INT_ADD", "register:40f0:8", ["const:59473c:8", "const:4:8"]]
+ 0059473c ["CALL", null, ["callee:00c58f30:8"]]
- 00594450 ["INT_ADD", "register:40f0:8", ["const:594450:8", "const:4:8"]]
- 00594450 ["CALL", null, ["callee:0043be80:8"]]
+ 00594770 ["INT_ADD", "register:40f0:8", ["const:594770:8", "const:4:8"]]
+ 00594770 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-06e51c2dfb27bf8eea7c84696ffed6c2"></a>

### [`005944f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/005944f0.md) → [`00594810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594810.md) FUN_00594810

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005943c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/005943c4.md) · 呼出先 2件 [`0044ad0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ad0c.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`005946e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/005946e4.md) · 呼出先 2件 [`0044b02c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044b/0044b02c.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00594578 ["INT_ADD", "register:40f0:8", ["const:594578:8", "const:4:8"]]
- 00594578 ["CALL", null, ["callee:00c590f0:8"]]
+ 00594898 ["INT_ADD", "register:40f0:8", ["const:594898:8", "const:4:8"]]
+ 00594898 ["CALL", null, ["callee:00c590f0:8"]]
- 005945cc ["INT_ADD", "register:40f0:8", ["const:5945cc:8", "const:4:8"]]
- 005945cc ["CALL", null, ["callee:00c590f0:8"]]
+ 005948ec ["INT_ADD", "register:40f0:8", ["const:5948ec:8", "const:4:8"]]
+ 005948ec ["CALL", null, ["callee:00c590f0:8"]]
- 00594668 ["INT_ADD", "register:40f0:8", ["const:594668:8", "const:4:8"]]
- 00594668 ["CALL", null, ["callee:00c590f0:8"]]
+ 00594988 ["INT_ADD", "register:40f0:8", ["const:594988:8", "const:4:8"]]
+ 00594988 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-183f0e430662f9071fd90ec5305a0157"></a>

### [`0059478c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/0059478c.md) → [`00594aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594aac.md) FUN_00594aac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005947c4 ["INT_ADD", "register:40f0:8", ["const:5947c4:8", "const:4:8"]]
- 005947c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00594ae4 ["INT_ADD", "register:40f0:8", ["const:594ae4:8", "const:4:8"]]
+ 00594ae4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a5cabd2dd798e3680245bd90db0d38fa"></a>

### [`005947dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/005947dc.md) → [`00594afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594afc.md) FUN_00594afc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005933c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/005933c0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`005936e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/005936e0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00594848 ["INT_ADD", "register:40f0:8", ["const:594848:8", "const:4:8"]]
- 00594848 ["CALL", null, ["callee:00c590f0:8"]]
+ 00594b68 ["INT_ADD", "register:40f0:8", ["const:594b68:8", "const:4:8"]]
+ 00594b68 ["CALL", null, ["callee:00c590f0:8"]]
- 005948a4 ["INT_ADD", "register:40f0:8", ["const:5948a4:8", "const:4:8"]]
- 005948a4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00594bc4 ["INT_ADD", "register:40f0:8", ["const:594bc4:8", "const:4:8"]]
+ 00594bc4 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-a54c63438cd920e79b4e51a4189aaa7d"></a>

### [`00595068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595068.md) → [`00595388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595388.md) FUN_00595388

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00588d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588d2c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0058904c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/0058904c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059509c ["COPY", "register:0:8", ["register:4048:8"]]
- 0059509c ["INT_ADD", "register:40f0:8", ["const:59509c:8", "const:4:8"]]
- 0059509c ["CALLIND", null, ["register:0:8"]]
+ 005953bc ["COPY", "register:0:8", ["register:4048:8"]]
+ 005953bc ["INT_ADD", "register:40f0:8", ["const:5953bc:8", "const:4:8"]]
+ 005953bc ["CALLIND", null, ["register:0:8"]]
- 005950d0 ["INT_ADD", "register:40f0:8", ["const:5950d0:8", "const:4:8"]]
- 005950d0 ["CALL", null, ["callee:0058904c:8"]]
+ 005953f0 ["INT_ADD", "register:40f0:8", ["const:5953f0:8", "const:4:8"]]
+ 005953f0 ["CALL", null, ["callee:0058904c:8"]]
~~~


<a id="compare-f71643dcd78b15e444836a049ff921b8"></a>

### [`005951d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005951d0.md) → [`005954f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005954f0.md) FUN_005954f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00594bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594bac.md) · 呼出先 2件 [`0055f504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f504.md) [`0055f580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f580.md)
- 新版 呼出元 1件 [`00594ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594ecc.md) · 呼出先 2件 [`0055f824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f824.md) [`0055f8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f8a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005951e8 ["INT_ADD", "register:40f0:8", ["const:5951e8:8", "const:4:8"]]
- 005951e8 ["CALL", null, ["callee:0055f824:8"]]
+ 00595508 ["INT_ADD", "register:40f0:8", ["const:595508:8", "const:4:8"]]
+ 00595508 ["CALL", null, ["callee:0055f824:8"]]
~~~


<a id="compare-77dff482ab9fc3737b2974fde4d48685"></a>

### [`00595210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595210.md) → [`00595530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595530.md) FUN_00595530

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00594bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594bac.md) · 呼出先 2件 [`0055f504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f504.md) [`0055f5a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f5a8.md)
- 新版 呼出元 1件 [`00594ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594ecc.md) · 呼出先 2件 [`0055f824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f824.md) [`0055f8c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f8c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00595228 ["INT_ADD", "register:40f0:8", ["const:595228:8", "const:4:8"]]
- 00595228 ["CALL", null, ["callee:0055f824:8"]]
+ 00595548 ["INT_ADD", "register:40f0:8", ["const:595548:8", "const:4:8"]]
+ 00595548 ["CALL", null, ["callee:0055f824:8"]]
~~~


<a id="compare-30b5897283b8eb44d4aa755ff6033c59"></a>

### [`00596214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596214.md) → [`00596534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596534.md) FUN_00596534

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00595d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595d5c.md) · 呼出先 2件 [`00597270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597270.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`0059607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059607c.md) · 呼出先 2件 [`00597590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597590.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00596290 ["INT_ADD", "register:40f0:8", ["const:596290:8", "const:4:8"]]
- 00596290 ["CALL", null, ["callee:00c590f0:8"]]
+ 005965b0 ["INT_ADD", "register:40f0:8", ["const:5965b0:8", "const:4:8"]]
+ 005965b0 ["CALL", null, ["callee:00c590f0:8"]]
- 005962ec ["INT_ADD", "register:40f0:8", ["const:5962ec:8", "const:4:8"]]
- 005962ec ["CALL", null, ["callee:00c590f0:8"]]
+ 0059660c ["INT_ADD", "register:40f0:8", ["const:59660c:8", "const:4:8"]]
+ 0059660c ["CALL", null, ["callee:00c590f0:8"]]
- 00596328 ["COPY", "register:0:8", ["register:4040:8"]]
- 00596328 ["INT_ADD", "register:40f0:8", ["const:596328:8", "const:4:8"]]
- 00596328 ["CALLIND", null, ["register:0:8"]]
+ 00596648 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00596648 ["INT_ADD", "register:40f0:8", ["const:596648:8", "const:4:8"]]
+ 00596648 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1825ce1e00e0577190c87814623a6f14"></a>

### [`0059637c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/0059637c.md) → [`0059669c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059669c.md) FUN_0059669c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00595d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595d5c.md) · 呼出先 2件 [`005973ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005973ac.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`0059607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059607c.md) · 呼出先 2件 [`005976cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005976cc.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005963f8 ["INT_ADD", "register:40f0:8", ["const:5963f8:8", "const:4:8"]]
- 005963f8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00596718 ["INT_ADD", "register:40f0:8", ["const:596718:8", "const:4:8"]]
+ 00596718 ["CALL", null, ["callee:00c590f0:8"]]
- 00596454 ["INT_ADD", "register:40f0:8", ["const:596454:8", "const:4:8"]]
- 00596454 ["CALL", null, ["callee:00c590f0:8"]]
+ 00596774 ["INT_ADD", "register:40f0:8", ["const:596774:8", "const:4:8"]]
+ 00596774 ["CALL", null, ["callee:00c590f0:8"]]
- 00596490 ["COPY", "register:0:8", ["register:4040:8"]]
- 00596490 ["INT_ADD", "register:40f0:8", ["const:596490:8", "const:4:8"]]
- 00596490 ["CALLIND", null, ["register:0:8"]]
+ 005967b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005967b0 ["INT_ADD", "register:40f0:8", ["const:5967b0:8", "const:4:8"]]
+ 005967b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7d95673afbbb2e0c5c1fad84f414cd3e"></a>

### [`00596e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596e5c.md) → [`0059717c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059717c.md) FUN_0059717c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0059705c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059705c.md) · 呼出先 5件 [`00550be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550be4.md) [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0059737c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059737c.md) · 呼出先 5件 [`00550f04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f04.md) [`00597070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597070.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00596e84 ["INT_ADD", "register:40f0:8", ["const:596e84:8", "const:4:8"]]
- 00596e84 ["CALL", null, ["callee:00550f04:8"]]
+ 005971a4 ["INT_ADD", "register:40f0:8", ["const:5971a4:8", "const:4:8"]]
+ 005971a4 ["CALL", null, ["callee:00550f04:8"]]
- 00596e9c ["COPY", "register:0:8", ["register:4048:8"]]
- 00596e9c ["INT_ADD", "register:40f0:8", ["const:596e9c:8", "const:4:8"]]
- 00596e9c ["CALLIND", null, ["register:0:8"]]
+ 005971bc ["COPY", "register:0:8", ["register:4048:8"]]
+ 005971bc ["INT_ADD", "register:40f0:8", ["const:5971bc:8", "const:4:8"]]
+ 005971bc ["CALLIND", null, ["register:0:8"]]
- 00596ea8 ["INT_ADD", "register:40f0:8", ["const:596ea8:8", "const:4:8"]]
- 00596ea8 ["CALL", null, ["callee:00597070:8"]]
+ 005971c8 ["INT_ADD", "register:40f0:8", ["const:5971c8:8", "const:4:8"]]
+ 005971c8 ["CALL", null, ["callee:00597070:8"]]
~~~


