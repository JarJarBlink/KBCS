# v16.0.2 → v16.0.3 · 要調査の変更候補 (35)

[一覧の目次](README.md)

<a id="compare-18a75918fe5a554e04ea18a0586c43cf"></a>

### [`00b9bed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9bed4.md) → [`00b9cec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9cec8.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetIN10reflection6ObjectEEEvtNS_6OffsetIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c430.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d400.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9bf34 ["INT_ADD", "register:40f0:8", ["const:b9bf34:8", "const:4:8"]]
- 00b9bf34 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9cf28 ["INT_ADD", "register:40f0:8", ["const:b9cf28:8", "const:4:8"]]
+ 00b9cf28 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9bf90 ["INT_ADD", "register:40f0:8", ["const:b9bf90:8", "const:4:8"]]
- 00b9bf90 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9cf84 ["INT_ADD", "register:40f0:8", ["const:b9cf84:8", "const:4:8"]]
+ 00b9cf84 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9bfb4 ["INT_ADD", "register:40f0:8", ["const:b9bfb4:8", "const:4:8"]]
- 00b9bfb4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9cfa8 ["INT_ADD", "register:40f0:8", ["const:b9cfa8:8", "const:4:8"]]
+ 00b9cfa8 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-9fcd705fad2955a7974e0da5b02999d3"></a>

### [`00b9c004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c004.md) → [`00b9cff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9cff8.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection4EnumEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c460.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d430.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9c064 ["INT_ADD", "register:40f0:8", ["const:b9c064:8", "const:4:8"]]
- 00b9c064 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d058 ["INT_ADD", "register:40f0:8", ["const:b9d058:8", "const:4:8"]]
+ 00b9d058 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9c0c0 ["INT_ADD", "register:40f0:8", ["const:b9c0c0:8", "const:4:8"]]
- 00b9c0c0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9d0b4 ["INT_ADD", "register:40f0:8", ["const:b9d0b4:8", "const:4:8"]]
+ 00b9d0b4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9c0e4 ["INT_ADD", "register:40f0:8", ["const:b9c0e4:8", "const:4:8"]]
- 00b9c0e4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d0d8 ["INT_ADD", "register:40f0:8", ["const:b9d0d8:8", "const:4:8"]]
+ 00b9d0d8 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-e6c12af62c9d8d8bd20958bbbac5f40a"></a>

### [`00b9c134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c134.md) → [`00b9d128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9d/00b9d128.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection6ObjectEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c480.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d450.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9c194 ["INT_ADD", "register:40f0:8", ["const:b9c194:8", "const:4:8"]]
- 00b9c194 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d188 ["INT_ADD", "register:40f0:8", ["const:b9d188:8", "const:4:8"]]
+ 00b9d188 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9c1f0 ["INT_ADD", "register:40f0:8", ["const:b9c1f0:8", "const:4:8"]]
- 00b9c1f0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9d1e4 ["INT_ADD", "register:40f0:8", ["const:b9d1e4:8", "const:4:8"]]
+ 00b9d1e4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9c214 ["INT_ADD", "register:40f0:8", ["const:b9c214:8", "const:4:8"]]
- 00b9c214 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d208 ["INT_ADD", "register:40f0:8", ["const:b9d208:8", "const:4:8"]]
+ 00b9d208 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-f53cdb360048a2ae321bf8000fb33ee9"></a>

### [`00b9c264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c264.md) → [`00b9d258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9d/00b9d258.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection8KeyValueEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4c0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d490.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9c2c4 ["INT_ADD", "register:40f0:8", ["const:b9c2c4:8", "const:4:8"]]
- 00b9c2c4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d2b8 ["INT_ADD", "register:40f0:8", ["const:b9d2b8:8", "const:4:8"]]
+ 00b9d2b8 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9c320 ["INT_ADD", "register:40f0:8", ["const:b9c320:8", "const:4:8"]]
- 00b9c320 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9d314 ["INT_ADD", "register:40f0:8", ["const:b9d314:8", "const:4:8"]]
+ 00b9d314 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9c344 ["INT_ADD", "register:40f0:8", ["const:b9c344:8", "const:4:8"]]
- 00b9c344 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d338 ["INT_ADD", "register:40f0:8", ["const:b9d338:8", "const:4:8"]]
+ 00b9d338 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-f5b3c520f051deef4e437b254c7da378"></a>

### [`00b9c394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c394.md) → [`00b9d388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9d/00b9d388.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection5FieldEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c470.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d440.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9c3f4 ["INT_ADD", "register:40f0:8", ["const:b9c3f4:8", "const:4:8"]]
- 00b9c3f4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d3e8 ["INT_ADD", "register:40f0:8", ["const:b9d3e8:8", "const:4:8"]]
+ 00b9d3e8 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9c450 ["INT_ADD", "register:40f0:8", ["const:b9c450:8", "const:4:8"]]
- 00b9c450 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9d444 ["INT_ADD", "register:40f0:8", ["const:b9d444:8", "const:4:8"]]
+ 00b9d444 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9c474 ["INT_ADD", "register:40f0:8", ["const:b9c474:8", "const:4:8"]]
- 00b9c474 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d468 ["INT_ADD", "register:40f0:8", ["const:b9d468:8", "const:4:8"]]
+ 00b9d468 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-ef0d3dc0e8ff04e41129f5bda4260254"></a>

### [`00b9c4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c4c4.md) → [`00b9d4b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9d/00b9d4b8.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetIN10reflection4TypeEEEvtNS_6OffsetIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c420.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d3f0.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9c524 ["INT_ADD", "register:40f0:8", ["const:b9c524:8", "const:4:8"]]
- 00b9c524 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d518 ["INT_ADD", "register:40f0:8", ["const:b9d518:8", "const:4:8"]]
+ 00b9d518 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9c580 ["INT_ADD", "register:40f0:8", ["const:b9c580:8", "const:4:8"]]
- 00b9c580 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9d574 ["INT_ADD", "register:40f0:8", ["const:b9d574:8", "const:4:8"]]
+ 00b9d574 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9c5a4 ["INT_ADD", "register:40f0:8", ["const:b9c5a4:8", "const:4:8"]]
- 00b9c5a4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d598 ["INT_ADD", "register:40f0:8", ["const:b9d598:8", "const:4:8"]]
+ 00b9d598 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-cdb6069047e753a96fc4ab3bedba2e75"></a>

### [`00b9c5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c5f4.md) → [`00b9d5e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9d/00b9d5e8.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection7RPCCallEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4a0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d470.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9c654 ["INT_ADD", "register:40f0:8", ["const:b9c654:8", "const:4:8"]]
- 00b9c654 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d648 ["INT_ADD", "register:40f0:8", ["const:b9d648:8", "const:4:8"]]
+ 00b9d648 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9c6b0 ["INT_ADD", "register:40f0:8", ["const:b9c6b0:8", "const:4:8"]]
- 00b9c6b0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9d6a4 ["INT_ADD", "register:40f0:8", ["const:b9d6a4:8", "const:4:8"]]
+ 00b9d6a4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9c6d4 ["INT_ADD", "register:40f0:8", ["const:b9c6d4:8", "const:4:8"]]
- 00b9c6d4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d6c8 ["INT_ADD", "register:40f0:8", ["const:b9d6c8:8", "const:4:8"]]
+ 00b9d6c8 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-de4f1e3a191b56502c30e35385f3a546"></a>

### [`00b9c724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c724.md) → [`00b9d718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9d/00b9d718.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection7EnumValEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c490.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d460.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9c784 ["INT_ADD", "register:40f0:8", ["const:b9c784:8", "const:4:8"]]
- 00b9c784 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d778 ["INT_ADD", "register:40f0:8", ["const:b9d778:8", "const:4:8"]]
+ 00b9d778 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9c7e0 ["INT_ADD", "register:40f0:8", ["const:b9c7e0:8", "const:4:8"]]
- 00b9c7e0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9d7d4 ["INT_ADD", "register:40f0:8", ["const:b9d7d4:8", "const:4:8"]]
+ 00b9d7d4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9c804 ["INT_ADD", "register:40f0:8", ["const:b9c804:8", "const:4:8"]]
- 00b9c804 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9d7f8 ["INT_ADD", "register:40f0:8", ["const:b9d7f8:8", "const:4:8"]]
+ 00b9d7f8 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-d0857eb1b3f8e298fb3004ed02427ea6"></a>

### [`00b9ca2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9ca2c.md) → [`00b9da20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9d/00b9da20.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessI

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb90.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5db60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db60.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9cac4 ["INT_ADD", "register:40f0:8", ["const:b9cac4:8", "const:4:8"]]
- 00b9cac4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9dab8 ["INT_ADD", "register:40f0:8", ["const:b9dab8:8", "const:4:8"]]
+ 00b9dab8 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9cb0c ["INT_ADD", "register:40f0:8", ["const:b9cb0c:8", "const:4:8"]]
- 00b9cb0c ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9db00 ["INT_ADD", "register:40f0:8", ["const:b9db00:8", "const:4:8"]]
+ 00b9db00 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-f5b423a2c9ff6a2088a4b103319ed411"></a>

### [`00b9cb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9cb40.md) → [`00b9db34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9d/00b9db34.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS6_EEEEvT

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc10.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc10.md) [`00c5cca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cca0.md) [`00c5cd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd40.md)
- 新版 呼出元 1件 [`00c5dbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbe0.md) · 呼出先 4件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbe0.md) [`00c5dc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc70.md) [`00c5dd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9cbdc ["INT_ADD", "register:40f0:8", ["const:b9cbdc:8", "const:4:8"]]
- 00b9cbdc ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9dbd0 ["INT_ADD", "register:40f0:8", ["const:b9dbd0:8", "const:4:8"]]
+ 00b9dbd0 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9ccc8 ["INT_ADD", "register:40f0:8", ["const:b9ccc8:8", "const:4:8"]]
- 00b9ccc8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9dcbc ["INT_ADD", "register:40f0:8", ["const:b9dcbc:8", "const:4:8"]]
+ 00b9dcbc ["CALL", null, ["callee:00c590f0:8"]]
- 00b9cd30 ["INT_ADD", "register:40f0:8", ["const:b9cd30:8", "const:4:8"]]
- 00b9cd30 ["CALL", null, ["callee:00c5dbe0:8"]]
+ 00b9dd24 ["INT_ADD", "register:40f0:8", ["const:b9dd24:8", "const:4:8"]]
+ 00b9dd24 ["CALL", null, ["callee:00c5dbe0:8"]]
~~~


<a id="compare-3eb2706dfc8b116c831229636165ed87"></a>

### [`00b9d00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d00c.md) → [`00b9e000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9e000.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd40.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc10.md) [`00c5ce00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce00.md)
- 新版 呼出元 1件 [`00c5dd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd10.md) · 呼出先 3件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbe0.md) [`00c5ddd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ddd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9d0c0 ["INT_ADD", "register:40f0:8", ["const:b9d0c0:8", "const:4:8"]]
- 00b9d0c0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9e0b4 ["INT_ADD", "register:40f0:8", ["const:b9e0b4:8", "const:4:8"]]
+ 00b9e0b4 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9d174 ["INT_ADD", "register:40f0:8", ["const:b9d174:8", "const:4:8"]]
- 00b9d174 ["CALL", null, ["callee:00c5dbe0:8"]]
+ 00b9e168 ["INT_ADD", "register:40f0:8", ["const:b9e168:8", "const:4:8"]]
+ 00b9e168 ["CALL", null, ["callee:00c5dbe0:8"]]
- 00b9d190 ["INT_ADD", "register:40f0:8", ["const:b9d190:8", "const:4:8"]]
- 00b9d190 ["CALL", null, ["callee:00c5dbe0:8"]]
+ 00b9e184 ["INT_ADD", "register:40f0:8", ["const:b9e184:8", "const:4:8"]]
+ 00b9e184 ["CALL", null, ["callee:00c5dbe0:8"]]
~~~


<a id="compare-b127fc8dc28b30aeea7d381206b646ec"></a>

### [`00b9d3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d3b8.md) → [`00b9e3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9e3ac.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS6_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cca0.md) · 呼出先 4件 [`00b9ddac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9ddac.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cca0.md) [`00c5ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce60.md)
- 新版 呼出元 1件 [`00c5dc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc70.md) · 呼出先 4件 [`00b9eda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9eda0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc70.md) [`00c5de30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5de30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9d484 ["INT_ADD", "register:40f0:8", ["const:b9d484:8", "const:4:8"]]
- 00b9d484 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9e478 ["INT_ADD", "register:40f0:8", ["const:b9e478:8", "const:4:8"]]
+ 00b9e478 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9d55c ["INT_ADD", "register:40f0:8", ["const:b9d55c:8", "const:4:8"]]
- 00b9d55c ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9e550 ["INT_ADD", "register:40f0:8", ["const:b9e550:8", "const:4:8"]]
+ 00b9e550 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9d648 ["INT_ADD", "register:40f0:8", ["const:b9d648:8", "const:4:8"]]
- 00b9d648 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9e63c ["INT_ADD", "register:40f0:8", ["const:b9e63c:8", "const:4:8"]]
+ 00b9e63c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-bb6e7281a3b263daab62b7c3994634ad"></a>

### [`00b9d7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d7e0.md) → [`00b9e7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9e7d4.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce00.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5ddd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ddd0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9d890 ["INT_ADD", "register:40f0:8", ["const:b9d890:8", "const:4:8"]]
- 00b9d890 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9e884 ["INT_ADD", "register:40f0:8", ["const:b9e884:8", "const:4:8"]]
+ 00b9e884 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9d918 ["INT_ADD", "register:40f0:8", ["const:b9d918:8", "const:4:8"]]
- 00b9d918 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9e90c ["INT_ADD", "register:40f0:8", ["const:b9e90c:8", "const:4:8"]]
+ 00b9e90c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-cfe17f369b8d08eceddee7edb04948c0"></a>

### [`00b9d998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d998.md) → [`00b9e98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9e98c.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6Offse

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce60.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cda0.md)
- 新版 呼出元 1件 [`00c5de30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5de30.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dd70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9db24 ["INT_ADD", "register:40f0:8", ["const:b9db24:8", "const:4:8"]]
- 00b9db24 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9eb18 ["INT_ADD", "register:40f0:8", ["const:b9eb18:8", "const:4:8"]]
+ 00b9eb18 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9dc14 ["INT_ADD", "register:40f0:8", ["const:b9dc14:8", "const:4:8"]]
- 00b9dc14 ["CALL", null, ["callee:00c5dd70:8"]]
+ 00b9ec08 ["INT_ADD", "register:40f0:8", ["const:b9ec08:8", "const:4:8"]]
+ 00b9ec08 ["CALL", null, ["callee:00c5dd70:8"]]
- 00b9dc70 ["INT_ADD", "register:40f0:8", ["const:b9dc70:8", "const:4:8"]]
- 00b9dc70 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b9ec64 ["INT_ADD", "register:40f0:8", ["const:b9ec64:8", "const:4:8"]]
+ 00b9ec64 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-996405fb3e9117131c704161d0289fc4"></a>

### [`00b9dc74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9dc74.md) → [`00b9ec68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9ec68.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS6_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cda0.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dd70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd70.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9dd38 ["INT_ADD", "register:40f0:8", ["const:b9dd38:8", "const:4:8"]]
- 00b9dd38 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9ed2c ["INT_ADD", "register:40f0:8", ["const:b9ed2c:8", "const:4:8"]]
+ 00b9ed2c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-944aa2e8d34f43895111ad8e83b479bc"></a>

### [`00b9ddac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9ddac.md) → [`00b9eda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9eda0.md) FUN_00b9eda0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b9d3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d3b8.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00b9e3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9e3ac.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9de6c ["INT_ADD", "register:40f0:8", ["const:b9de6c:8", "const:4:8"]]
- 00b9de6c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00b9ee60 ["INT_ADD", "register:40f0:8", ["const:b9ee60:8", "const:4:8"]]
+ 00b9ee60 ["CALL", null, ["callee:00c58fe0:8"]]
- 00b9de98 ["INT_ADD", "register:40f0:8", ["const:b9de98:8", "const:4:8"]]
- 00b9de98 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00b9ee8c ["INT_ADD", "register:40f0:8", ["const:b9ee8c:8", "const:4:8"]]
+ 00b9ee8c ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-f6eb52ccd304d76f5d75719c3562ab2a"></a>

### [`00b9df74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9df74.md) → [`00b9ef68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9e/00b9ef68.md) _ZNK10reflection6Schema6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca40.md) · 呼出先 4件 [`00c5c9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9f0.md) [`00c5ca00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca00.md) [`00c5ca30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca30.md) [`00c5ca70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca70.md)
- 新版 呼出元 1件 [`00c5da10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da10.md) · 呼出先 4件 [`00c5d9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9c0.md) [`00c5d9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9d0.md) [`00c5da00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da00.md) [`00c5da40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9e150 ["INT_ADD", "register:40f0:8", ["const:b9e150:8", "const:4:8"]]
- 00b9e150 ["CALL", null, ["callee:00c5da00:8"]]
+ 00b9f144 ["INT_ADD", "register:40f0:8", ["const:b9f144:8", "const:4:8"]]
+ 00b9f144 ["CALL", null, ["callee:00c5da00:8"]]
- 00b9e27c ["INT_ADD", "register:40f0:8", ["const:b9e27c:8", "const:4:8"]]
- 00b9e27c ["CALL", null, ["callee:00c5d9d0:8"]]
+ 00b9f270 ["INT_ADD", "register:40f0:8", ["const:b9f270:8", "const:4:8"]]
+ 00b9f270 ["CALL", null, ["callee:00c5d9d0:8"]]
- 00b9e510 ["INT_ADD", "register:40f0:8", ["const:b9e510:8", "const:4:8"]]
- 00b9e510 ["CALL", null, ["callee:00c5da00:8"]]
+ 00b9f504 ["INT_ADD", "register:40f0:8", ["const:b9f504:8", "const:4:8"]]
+ 00b9f504 ["CALL", null, ["callee:00c5da00:8"]]
~~~


<a id="compare-4308f63ff286c14f5cbd00067dfa3664"></a>

### [`00b9e7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9e/00b9e7ec.md) → [`00b9f7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9f/00b9f7e0.md) _ZNK10reflection6Object6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca30.md) · 呼出先 2件 [`00c5ca20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca20.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)
- 新版 呼出元 1件 [`00c5da00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da00.md) · 呼出先 2件 [`00c5d9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9f0.md) [`00c5da50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9eab0 ["INT_ADD", "register:40f0:8", ["const:b9eab0:8", "const:4:8"]]
- 00b9eab0 ["CALL", null, ["callee:00c5d9f0:8"]]
+ 00b9faa4 ["INT_ADD", "register:40f0:8", ["const:b9faa4:8", "const:4:8"]]
+ 00b9faa4 ["CALL", null, ["callee:00c5d9f0:8"]]
- 00b9ecd0 ["INT_ADD", "register:40f0:8", ["const:b9ecd0:8", "const:4:8"]]
- 00b9ecd0 ["CALL", null, ["callee:00c5da50:8"]]
+ 00b9fcc4 ["INT_ADD", "register:40f0:8", ["const:b9fcc4:8", "const:4:8"]]
+ 00b9fcc4 ["CALL", null, ["callee:00c5da50:8"]]
~~~


<a id="compare-c74611154fcd36aae5abfc39c4cd9f5e"></a>

### [`00b9efb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9e/00b9efb0.md) → [`00b9ffa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9f/00b9ffa4.md) _ZNK10reflection5Field6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca20.md) · 呼出先 2件 [`00c5ca10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca10.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)
- 新版 呼出元 1件 [`00c5d9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9f0.md) · 呼出先 2件 [`00c5d9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9e0.md) [`00c5da50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9f1f0 ["INT_ADD", "register:40f0:8", ["const:b9f1f0:8", "const:4:8"]]
- 00b9f1f0 ["CALL", null, ["callee:00c5d9e0:8"]]
+ 00ba01e4 ["INT_ADD", "register:40f0:8", ["const:ba01e4:8", "const:4:8"]]
+ 00ba01e4 ["CALL", null, ["callee:00c5d9e0:8"]]
- 00b9f55c ["INT_ADD", "register:40f0:8", ["const:b9f55c:8", "const:4:8"]]
- 00b9f55c ["CALL", null, ["callee:00c5da50:8"]]
+ 00ba0550 ["INT_ADD", "register:40f0:8", ["const:ba0550:8", "const:4:8"]]
+ 00ba0550 ["CALL", null, ["callee:00c5da50:8"]]
~~~


<a id="compare-92bf9454504cc773957f44b2e5483fdb"></a>

### [`00b9fc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9f/00b9fc90.md) → [`00ba0c84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba0/00ba0c84.md) _ZNK10reflection4Enum6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca00.md) · 呼出先 3件 [`00c5ca10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca10.md) [`00c5ca50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca50.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)
- 新版 呼出元 1件 [`00c5d9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9d0.md) · 呼出先 3件 [`00c5d9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9e0.md) [`00c5da20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da20.md) [`00c5da50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9ff68 ["INT_ADD", "register:40f0:8", ["const:b9ff68:8", "const:4:8"]]
- 00b9ff68 ["CALL", null, ["callee:00c5da20:8"]]
+ 00ba0f5c ["INT_ADD", "register:40f0:8", ["const:ba0f5c:8", "const:4:8"]]
+ 00ba0f5c ["CALL", null, ["callee:00c5da20:8"]]
- 00ba0078 ["INT_ADD", "register:40f0:8", ["const:ba0078:8", "const:4:8"]]
- 00ba0078 ["CALL", null, ["callee:00c5d9e0:8"]]
+ 00ba106c ["INT_ADD", "register:40f0:8", ["const:ba106c:8", "const:4:8"]]
+ 00ba106c ["CALL", null, ["callee:00c5d9e0:8"]]
- 00ba01c8 ["INT_ADD", "register:40f0:8", ["const:ba01c8:8", "const:4:8"]]
- 00ba01c8 ["CALL", null, ["callee:00c5da50:8"]]
+ 00ba11bc ["INT_ADD", "register:40f0:8", ["const:ba11bc:8", "const:4:8"]]
+ 00ba11bc ["CALL", null, ["callee:00c5da50:8"]]
~~~


<a id="compare-4805bb0f46e769bb5dd693e4e2a04604"></a>

### [`00ba04e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba0/00ba04e0.md) → [`00ba14d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba1/00ba14d4.md) _ZNK10reflection7EnumVal6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca50.md) · 呼出先 2件 [`00c5ca10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca10.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)
- 新版 呼出元 1件 [`00c5da20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da20.md) · 呼出先 2件 [`00c5d9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9e0.md) [`00c5da50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba0748 ["INT_ADD", "register:40f0:8", ["const:ba0748:8", "const:4:8"]]
- 00ba0748 ["CALL", null, ["callee:00c5d9e0:8"]]
+ 00ba173c ["INT_ADD", "register:40f0:8", ["const:ba173c:8", "const:4:8"]]
+ 00ba173c ["CALL", null, ["callee:00c5d9e0:8"]]
- 00ba0a04 ["INT_ADD", "register:40f0:8", ["const:ba0a04:8", "const:4:8"]]
- 00ba0a04 ["CALL", null, ["callee:00c5da50:8"]]
+ 00ba19f8 ["INT_ADD", "register:40f0:8", ["const:ba19f8:8", "const:4:8"]]
+ 00ba19f8 ["CALL", null, ["callee:00c5da50:8"]]
~~~


<a id="compare-90ecb574a5dcadd39514e49a7018347b"></a>

### [`00ba0a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba0/00ba0a34.md) → [`00ba1a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba1/00ba1a28.md) _ZNK10reflection7Service6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca70.md) · 呼出先 2件 [`00c5ca60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca60.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)
- 新版 呼出元 1件 [`00c5da40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da40.md) · 呼出先 2件 [`00c5da30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da30.md) [`00c5da50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba0ce8 ["INT_ADD", "register:40f0:8", ["const:ba0ce8:8", "const:4:8"]]
- 00ba0ce8 ["CALL", null, ["callee:00c5da30:8"]]
+ 00ba1cdc ["INT_ADD", "register:40f0:8", ["const:ba1cdc:8", "const:4:8"]]
+ 00ba1cdc ["CALL", null, ["callee:00c5da30:8"]]
- 00ba0e24 ["INT_ADD", "register:40f0:8", ["const:ba0e24:8", "const:4:8"]]
- 00ba0e24 ["CALL", null, ["callee:00c5da50:8"]]
+ 00ba1e18 ["INT_ADD", "register:40f0:8", ["const:ba1e18:8", "const:4:8"]]
+ 00ba1e18 ["CALL", null, ["callee:00c5da50:8"]]
~~~


<a id="compare-d8f2667a52021daf60d36adc75c7b772"></a>

### [`00ba10ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba1/00ba10ec.md) → [`00ba20e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba2/00ba20e0.md) _ZNK10reflection7RPCCall6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca60.md) · 呼出先 2件 [`00c5ca30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca30.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)
- 新版 呼出元 1件 [`00c5da30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da30.md) · 呼出先 2件 [`00c5da00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da00.md) [`00c5da50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba132c ["INT_ADD", "register:40f0:8", ["const:ba132c:8", "const:4:8"]]
- 00ba132c ["CALL", null, ["callee:00c5da00:8"]]
+ 00ba2320 ["INT_ADD", "register:40f0:8", ["const:ba2320:8", "const:4:8"]]
+ 00ba2320 ["CALL", null, ["callee:00c5da00:8"]]
- 00ba13e0 ["INT_ADD", "register:40f0:8", ["const:ba13e0:8", "const:4:8"]]
- 00ba13e0 ["CALL", null, ["callee:00c5da00:8"]]
+ 00ba23d4 ["INT_ADD", "register:40f0:8", ["const:ba23d4:8", "const:4:8"]]
+ 00ba23d4 ["CALL", null, ["callee:00c5da00:8"]]
- 00ba1530 ["INT_ADD", "register:40f0:8", ["const:ba1530:8", "const:4:8"]]
- 00ba1530 ["CALL", null, ["callee:00c5da50:8"]]
+ 00ba2524 ["INT_ADD", "register:40f0:8", ["const:ba2524:8", "const:4:8"]]
+ 00ba2524 ["CALL", null, ["callee:00c5da50:8"]]
~~~


<a id="compare-ac57608066a697362eaa61aadf210b7a"></a>

### [`00ba1a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba1/00ba1a38.md) → [`00ba2a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba2/00ba2a2c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9NamespaceEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d030.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5e000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e000.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba1ad4 ["INT_ADD", "register:40f0:8", ["const:ba1ad4:8", "const:4:8"]]
- 00ba1ad4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba2ac8 ["INT_ADD", "register:40f0:8", ["const:ba2ac8:8", "const:4:8"]]
+ 00ba2ac8 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba1b14 ["INT_ADD", "register:40f0:8", ["const:ba1b14:8", "const:4:8"]]
- 00ba1b14 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba2b08 ["INT_ADD", "register:40f0:8", ["const:ba2b08:8", "const:4:8"]]
+ 00ba2b08 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-706128c0e54978be91b2965ed4142cc6"></a>

### [`00ba2248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2248.md) → [`00ba323c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba3/00ba323c.md) _ZN11flatbuffers15vector_downwardIjE10reallocateEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf20.md)
- 新版 呼出元 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5cee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cee0.md) [`00c5cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cef0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba22d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00ba22d8 ["INT_ADD", "register:40f0:8", ["const:ba22d8:8", "const:4:8"]]
- 00ba22d8 ["CALLIND", null, ["register:0:8"]]
+ 00ba32cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00ba32cc ["INT_ADD", "register:40f0:8", ["const:ba32cc:8", "const:4:8"]]
+ 00ba32cc ["CALLIND", null, ["register:0:8"]]
- 00ba22f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00ba22f0 ["INT_ADD", "register:40f0:8", ["const:ba22f0:8", "const:4:8"]]
- 00ba22f0 ["CALLIND", null, ["register:0:8"]]
+ 00ba32e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00ba32e4 ["INT_ADD", "register:40f0:8", ["const:ba32e4:8", "const:4:8"]]
+ 00ba32e4 ["CALLIND", null, ["register:0:8"]]
- 00ba22fc ["INT_ADD", "register:40f0:8", ["const:ba22fc:8", "const:4:8"]]
- 00ba22fc ["CALL", null, ["callee:00c5cef0:8"]]
+ 00ba32f0 ["INT_ADD", "register:40f0:8", ["const:ba32f0:8", "const:4:8"]]
+ 00ba32f0 ["CALL", null, ["callee:00c5cef0:8"]]
~~~


<a id="compare-2c46bb7178a73b85d6803a8bd208193d"></a>

### [`00ba2374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2374.md) → [`00ba3368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba3/00ba3368.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_EEEEvT0_S

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbe0.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbe0.md) [`00c5cc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc70.md) [`00c5cd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd10.md)
- 新版 呼出元 1件 [`00c5dbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbb0.md) · 呼出先 4件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbb0.md) [`00c5dc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc40.md) [`00c5dce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dce0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba2410 ["INT_ADD", "register:40f0:8", ["const:ba2410:8", "const:4:8"]]
- 00ba2410 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba3404 ["INT_ADD", "register:40f0:8", ["const:ba3404:8", "const:4:8"]]
+ 00ba3404 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba24fc ["INT_ADD", "register:40f0:8", ["const:ba24fc:8", "const:4:8"]]
- 00ba24fc ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba34f0 ["INT_ADD", "register:40f0:8", ["const:ba34f0:8", "const:4:8"]]
+ 00ba34f0 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba2564 ["INT_ADD", "register:40f0:8", ["const:ba2564:8", "const:4:8"]]
- 00ba2564 ["CALL", null, ["callee:00c5dbb0:8"]]
+ 00ba3558 ["INT_ADD", "register:40f0:8", ["const:ba3558:8", "const:4:8"]]
+ 00ba3558 ["CALL", null, ["callee:00c5dbb0:8"]]
~~~


<a id="compare-2aa36fb9c6a0ab03e1f896b860a63a07"></a>

### [`00ba2840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2840.md) → [`00ba3834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba3/00ba3834.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd10.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbe0.md) [`00c5cdd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdd0.md)
- 新版 呼出元 1件 [`00c5dce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dce0.md) · 呼出先 3件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbb0.md) [`00c5dda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dda0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba28f4 ["INT_ADD", "register:40f0:8", ["const:ba28f4:8", "const:4:8"]]
- 00ba28f4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba38e8 ["INT_ADD", "register:40f0:8", ["const:ba38e8:8", "const:4:8"]]
+ 00ba38e8 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba29a8 ["INT_ADD", "register:40f0:8", ["const:ba29a8:8", "const:4:8"]]
- 00ba29a8 ["CALL", null, ["callee:00c5dbb0:8"]]
+ 00ba399c ["INT_ADD", "register:40f0:8", ["const:ba399c:8", "const:4:8"]]
+ 00ba399c ["CALL", null, ["callee:00c5dbb0:8"]]
- 00ba29c4 ["INT_ADD", "register:40f0:8", ["const:ba29c4:8", "const:4:8"]]
- 00ba29c4 ["CALL", null, ["callee:00c5dbb0:8"]]
+ 00ba39b8 ["INT_ADD", "register:40f0:8", ["const:ba39b8:8", "const:4:8"]]
+ 00ba39b8 ["CALL", null, ["callee:00c5dbb0:8"]]
~~~


<a id="compare-9a8f56a66ed438bee101f9eee44fc2b6"></a>

### [`00ba2bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2bec.md) → [`00ba3be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba3/00ba3be0.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_EEEEvT0

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc70.md) · 呼出先 4件 [`00ba35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba35e0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc70.md) [`00c5ce30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce30.md)
- 新版 呼出元 1件 [`00c5dc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc40.md) · 呼出先 4件 [`00ba45d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba4/00ba45d4.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc40.md) [`00c5de00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5de00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba2cb8 ["INT_ADD", "register:40f0:8", ["const:ba2cb8:8", "const:4:8"]]
- 00ba2cb8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba3cac ["INT_ADD", "register:40f0:8", ["const:ba3cac:8", "const:4:8"]]
+ 00ba3cac ["CALL", null, ["callee:00c590f0:8"]]
- 00ba2d90 ["INT_ADD", "register:40f0:8", ["const:ba2d90:8", "const:4:8"]]
- 00ba2d90 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba3d84 ["INT_ADD", "register:40f0:8", ["const:ba3d84:8", "const:4:8"]]
+ 00ba3d84 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba2e7c ["INT_ADD", "register:40f0:8", ["const:ba2e7c:8", "const:4:8"]]
- 00ba2e7c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba3e70 ["INT_ADD", "register:40f0:8", ["const:ba3e70:8", "const:4:8"]]
+ 00ba3e70 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-577379fe190eb75a468c857bc80890ea"></a>

### [`00ba3014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba3014.md) → [`00ba4008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba4/00ba4008.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cdd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdd0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dda0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba30c4 ["INT_ADD", "register:40f0:8", ["const:ba30c4:8", "const:4:8"]]
- 00ba30c4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba40b8 ["INT_ADD", "register:40f0:8", ["const:ba40b8:8", "const:4:8"]]
+ 00ba40b8 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba314c ["INT_ADD", "register:40f0:8", ["const:ba314c:8", "const:4:8"]]
- 00ba314c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba4140 ["INT_ADD", "register:40f0:8", ["const:ba4140:8", "const:4:8"]]
+ 00ba4140 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-498cf64c6c8f8910b571b228d1ac71f4"></a>

### [`00ba31cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba31cc.md) → [`00ba41c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba4/00ba41c0.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce30.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd70.md)
- 新版 呼出元 1件 [`00c5de00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5de00.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba3358 ["INT_ADD", "register:40f0:8", ["const:ba3358:8", "const:4:8"]]
- 00ba3358 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba434c ["INT_ADD", "register:40f0:8", ["const:ba434c:8", "const:4:8"]]
+ 00ba434c ["CALL", null, ["callee:00c590f0:8"]]
- 00ba3448 ["INT_ADD", "register:40f0:8", ["const:ba3448:8", "const:4:8"]]
- 00ba3448 ["CALL", null, ["callee:00c5dd40:8"]]
+ 00ba443c ["INT_ADD", "register:40f0:8", ["const:ba443c:8", "const:4:8"]]
+ 00ba443c ["CALL", null, ["callee:00c5dd40:8"]]
- 00ba34a4 ["INT_ADD", "register:40f0:8", ["const:ba34a4:8", "const:4:8"]]
- 00ba34a4 ["CALL", null, ["callee:00c58f80:8"]]
+ 00ba4498 ["INT_ADD", "register:40f0:8", ["const:ba4498:8", "const:4:8"]]
+ 00ba4498 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-4dbf08e5fd9e784942cb6716fbd7ceb8"></a>

### [`00ba34a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba34a8.md) → [`00ba449c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba4/00ba449c.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_EES

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd70.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd40.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba356c ["INT_ADD", "register:40f0:8", ["const:ba356c:8", "const:4:8"]]
- 00ba356c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba4560 ["INT_ADD", "register:40f0:8", ["const:ba4560:8", "const:4:8"]]
+ 00ba4560 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-ee1b41f2b885ca5c5d6433df177bb29e"></a>

### [`00ba35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba35e0.md) → [`00ba45d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba4/00ba45d4.md) FUN_00ba45d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00ba2bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2bec.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00ba3be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba3/00ba3be0.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba36a0 ["INT_ADD", "register:40f0:8", ["const:ba36a0:8", "const:4:8"]]
- 00ba36a0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba4694 ["INT_ADD", "register:40f0:8", ["const:ba4694:8", "const:4:8"]]
+ 00ba4694 ["CALL", null, ["callee:00c58fe0:8"]]
- 00ba36cc ["INT_ADD", "register:40f0:8", ["const:ba36cc:8", "const:4:8"]]
- 00ba36cc ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba46c0 ["INT_ADD", "register:40f0:8", ["const:ba46c0:8", "const:4:8"]]
+ 00ba46c0 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-c3b59234cb1924257ebe25d7728e6440"></a>

### [`00ba37a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba37a8.md) → [`00ba479c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba4/00ba479c.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_EEEEvT0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbf0.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbf0.md) [`00c5cc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc80.md) [`00c5cd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd20.md)
- 新版 呼出元 1件 [`00c5dbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbc0.md) · 呼出先 4件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbc0.md) [`00c5dc50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc50.md) [`00c5dcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dcf0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba3844 ["INT_ADD", "register:40f0:8", ["const:ba3844:8", "const:4:8"]]
- 00ba3844 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba4838 ["INT_ADD", "register:40f0:8", ["const:ba4838:8", "const:4:8"]]
+ 00ba4838 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba3930 ["INT_ADD", "register:40f0:8", ["const:ba3930:8", "const:4:8"]]
- 00ba3930 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba4924 ["INT_ADD", "register:40f0:8", ["const:ba4924:8", "const:4:8"]]
+ 00ba4924 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba3998 ["INT_ADD", "register:40f0:8", ["const:ba3998:8", "const:4:8"]]
- 00ba3998 ["CALL", null, ["callee:00c5dbc0:8"]]
+ 00ba498c ["INT_ADD", "register:40f0:8", ["const:ba498c:8", "const:4:8"]]
+ 00ba498c ["CALL", null, ["callee:00c5dbc0:8"]]
~~~


<a id="compare-0159eccaca61695271a59b6c20b2ba49"></a>

### [`00ba3c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba3c74.md) → [`00ba4c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba4/00ba4c68.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd20.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbf0.md) [`00c5cde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cde0.md)
- 新版 呼出元 1件 [`00c5dcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dcf0.md) · 呼出先 3件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbc0.md) [`00c5ddb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ddb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba3d28 ["INT_ADD", "register:40f0:8", ["const:ba3d28:8", "const:4:8"]]
- 00ba3d28 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba4d1c ["INT_ADD", "register:40f0:8", ["const:ba4d1c:8", "const:4:8"]]
+ 00ba4d1c ["CALL", null, ["callee:00c590f0:8"]]
- 00ba3ddc ["INT_ADD", "register:40f0:8", ["const:ba3ddc:8", "const:4:8"]]
- 00ba3ddc ["CALL", null, ["callee:00c5dbc0:8"]]
+ 00ba4dd0 ["INT_ADD", "register:40f0:8", ["const:ba4dd0:8", "const:4:8"]]
+ 00ba4dd0 ["CALL", null, ["callee:00c5dbc0:8"]]
- 00ba3df8 ["INT_ADD", "register:40f0:8", ["const:ba3df8:8", "const:4:8"]]
- 00ba3df8 ["CALL", null, ["callee:00c5dbc0:8"]]
+ 00ba4dec ["INT_ADD", "register:40f0:8", ["const:ba4dec:8", "const:4:8"]]
+ 00ba4dec ["CALL", null, ["callee:00c5dbc0:8"]]
~~~


<a id="compare-7f8c311f99398c9d8dafb08507368db6"></a>

### [`00ba4020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4020.md) → [`00ba5014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba5/00ba5014.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_EEEEvT

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc80.md) · 呼出先 4件 [`00ba4a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4a14.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc80.md) [`00c5ce40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce40.md)
- 新版 呼出元 1件 [`00c5dc50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc50.md) · 呼出先 4件 [`00ba5a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba5/00ba5a08.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dc50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc50.md) [`00c5de10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5de10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba40ec ["INT_ADD", "register:40f0:8", ["const:ba40ec:8", "const:4:8"]]
- 00ba40ec ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba50e0 ["INT_ADD", "register:40f0:8", ["const:ba50e0:8", "const:4:8"]]
+ 00ba50e0 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba41c4 ["INT_ADD", "register:40f0:8", ["const:ba41c4:8", "const:4:8"]]
- 00ba41c4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba51b8 ["INT_ADD", "register:40f0:8", ["const:ba51b8:8", "const:4:8"]]
+ 00ba51b8 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba42b0 ["INT_ADD", "register:40f0:8", ["const:ba42b0:8", "const:4:8"]]
- 00ba42b0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba52a4 ["INT_ADD", "register:40f0:8", ["const:ba52a4:8", "const:4:8"]]
+ 00ba52a4 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-ea7cb050507ba9005cea5e8c9e298f46"></a>

### [`00ba4448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4448.md) → [`00ba543c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba5/00ba543c.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cde0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5ddb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ddb0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba44f8 ["INT_ADD", "register:40f0:8", ["const:ba44f8:8", "const:4:8"]]
- 00ba44f8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba54ec ["INT_ADD", "register:40f0:8", ["const:ba54ec:8", "const:4:8"]]
+ 00ba54ec ["CALL", null, ["callee:00c590f0:8"]]
- 00ba4580 ["INT_ADD", "register:40f0:8", ["const:ba4580:8", "const:4:8"]]
- 00ba4580 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba5574 ["INT_ADD", "register:40f0:8", ["const:ba5574:8", "const:4:8"]]
+ 00ba5574 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-7c937c7ae11175d48f3c73d75613284b"></a>

### [`00ba4600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4600.md) → [`00ba55f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba5/00ba55f4.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetI

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce40.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd80.md)
- 新版 呼出元 1件 [`00c5de10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5de10.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba478c ["INT_ADD", "register:40f0:8", ["const:ba478c:8", "const:4:8"]]
- 00ba478c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba5780 ["INT_ADD", "register:40f0:8", ["const:ba5780:8", "const:4:8"]]
+ 00ba5780 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba487c ["INT_ADD", "register:40f0:8", ["const:ba487c:8", "const:4:8"]]
- 00ba487c ["CALL", null, ["callee:00c5dd50:8"]]
+ 00ba5870 ["INT_ADD", "register:40f0:8", ["const:ba5870:8", "const:4:8"]]
+ 00ba5870 ["CALL", null, ["callee:00c5dd50:8"]]
- 00ba48d8 ["INT_ADD", "register:40f0:8", ["const:ba48d8:8", "const:4:8"]]
- 00ba48d8 ["CALL", null, ["callee:00c58f80:8"]]
+ 00ba58cc ["INT_ADD", "register:40f0:8", ["const:ba58cc:8", "const:4:8"]]
+ 00ba58cc ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-43e0b0ebe93b77725978c46c891b5807"></a>

### [`00ba48dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba48dc.md) → [`00ba58d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba5/00ba58d0.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd80.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd50.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba49a0 ["INT_ADD", "register:40f0:8", ["const:ba49a0:8", "const:4:8"]]
- 00ba49a0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba5994 ["INT_ADD", "register:40f0:8", ["const:ba5994:8", "const:4:8"]]
+ 00ba5994 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-3742c575f84b405c8ecb3131115200ad"></a>

### [`00ba4a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4a14.md) → [`00ba5a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba5/00ba5a08.md) FUN_00ba5a08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00ba4020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4020.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00ba5014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba5/00ba5014.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba4ad4 ["INT_ADD", "register:40f0:8", ["const:ba4ad4:8", "const:4:8"]]
- 00ba4ad4 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba5ac8 ["INT_ADD", "register:40f0:8", ["const:ba5ac8:8", "const:4:8"]]
+ 00ba5ac8 ["CALL", null, ["callee:00c58fe0:8"]]
- 00ba4b00 ["INT_ADD", "register:40f0:8", ["const:ba4b00:8", "const:4:8"]]
- 00ba4b00 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba5af4 ["INT_ADD", "register:40f0:8", ["const:ba5af4:8", "const:4:8"]]
+ 00ba5af4 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-030fad3d7bb9cc01cf9de143e6a50b88"></a>

### [`00ba4bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4bdc.md) → [`00ba5bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba5/00ba5bd0.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EEEEvT0_SC

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbd0.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbd0.md) [`00c5cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc60.md) [`00c5cd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd00.md)
- 新版 呼出元 1件 [`00c5dba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dba0.md) · 呼出先 4件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dba0.md) [`00c5dc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc30.md) [`00c5dcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dcd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba4c78 ["INT_ADD", "register:40f0:8", ["const:ba4c78:8", "const:4:8"]]
- 00ba4c78 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba5c6c ["INT_ADD", "register:40f0:8", ["const:ba5c6c:8", "const:4:8"]]
+ 00ba5c6c ["CALL", null, ["callee:00c590f0:8"]]
- 00ba4d64 ["INT_ADD", "register:40f0:8", ["const:ba4d64:8", "const:4:8"]]
- 00ba4d64 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba5d58 ["INT_ADD", "register:40f0:8", ["const:ba5d58:8", "const:4:8"]]
+ 00ba5d58 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba4dcc ["INT_ADD", "register:40f0:8", ["const:ba4dcc:8", "const:4:8"]]
- 00ba4dcc ["CALL", null, ["callee:00c5dba0:8"]]
+ 00ba5dc0 ["INT_ADD", "register:40f0:8", ["const:ba5dc0:8", "const:4:8"]]
+ 00ba5dc0 ["CALL", null, ["callee:00c5dba0:8"]]
~~~


<a id="compare-a7e73f863a58de3312101f7b49719630"></a>

### [`00ba50a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba50a8.md) → [`00ba609c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba6/00ba609c.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EEEEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd00.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbd0.md) [`00c5cdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdc0.md)
- 新版 呼出元 1件 [`00c5dcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dcd0.md) · 呼出先 3件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dba0.md) [`00c5dd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba515c ["INT_ADD", "register:40f0:8", ["const:ba515c:8", "const:4:8"]]
- 00ba515c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba6150 ["INT_ADD", "register:40f0:8", ["const:ba6150:8", "const:4:8"]]
+ 00ba6150 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba5210 ["INT_ADD", "register:40f0:8", ["const:ba5210:8", "const:4:8"]]
- 00ba5210 ["CALL", null, ["callee:00c5dba0:8"]]
+ 00ba6204 ["INT_ADD", "register:40f0:8", ["const:ba6204:8", "const:4:8"]]
+ 00ba6204 ["CALL", null, ["callee:00c5dba0:8"]]
- 00ba522c ["INT_ADD", "register:40f0:8", ["const:ba522c:8", "const:4:8"]]
- 00ba522c ["CALL", null, ["callee:00c5dba0:8"]]
+ 00ba6220 ["INT_ADD", "register:40f0:8", ["const:ba6220:8", "const:4:8"]]
+ 00ba6220 ["CALL", null, ["callee:00c5dba0:8"]]
~~~


<a id="compare-2857d72b6cae10223bf5c93aa1227d01"></a>

### [`00ba5454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5454.md) → [`00ba6448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba6/00ba6448.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EEEEvT0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc60.md) · 呼出先 4件 [`00ba5e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5e48.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc60.md) [`00c5ce20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce20.md)
- 新版 呼出元 1件 [`00c5dc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc30.md) · 呼出先 4件 [`00ba6e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba6/00ba6e3c.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc30.md) [`00c5ddf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ddf0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba5520 ["INT_ADD", "register:40f0:8", ["const:ba5520:8", "const:4:8"]]
- 00ba5520 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba6514 ["INT_ADD", "register:40f0:8", ["const:ba6514:8", "const:4:8"]]
+ 00ba6514 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba55f8 ["INT_ADD", "register:40f0:8", ["const:ba55f8:8", "const:4:8"]]
- 00ba55f8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba65ec ["INT_ADD", "register:40f0:8", ["const:ba65ec:8", "const:4:8"]]
+ 00ba65ec ["CALL", null, ["callee:00c590f0:8"]]
- 00ba56e4 ["INT_ADD", "register:40f0:8", ["const:ba56e4:8", "const:4:8"]]
- 00ba56e4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba66d8 ["INT_ADD", "register:40f0:8", ["const:ba66d8:8", "const:4:8"]]
+ 00ba66d8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-9317d25e4c1d5cf9d5b0c5e7a5f2df39"></a>

### [`00ba587c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba587c.md) → [`00ba6870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba6/00ba6870.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdc0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd90.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba592c ["INT_ADD", "register:40f0:8", ["const:ba592c:8", "const:4:8"]]
- 00ba592c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba6920 ["INT_ADD", "register:40f0:8", ["const:ba6920:8", "const:4:8"]]
+ 00ba6920 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba59b4 ["INT_ADD", "register:40f0:8", ["const:ba59b4:8", "const:4:8"]]
- 00ba59b4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba69a8 ["INT_ADD", "register:40f0:8", ["const:ba69a8:8", "const:4:8"]]
+ 00ba69a8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-bbf361d1f29167561b51e4a5587f6303"></a>

### [`00ba5a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5a34.md) → [`00ba6a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba6/00ba6a28.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce20.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd60.md)
- 新版 呼出元 1件 [`00c5ddf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ddf0.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dd30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba5bc0 ["INT_ADD", "register:40f0:8", ["const:ba5bc0:8", "const:4:8"]]
- 00ba5bc0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba6bb4 ["INT_ADD", "register:40f0:8", ["const:ba6bb4:8", "const:4:8"]]
+ 00ba6bb4 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba5cb0 ["INT_ADD", "register:40f0:8", ["const:ba5cb0:8", "const:4:8"]]
- 00ba5cb0 ["CALL", null, ["callee:00c5dd30:8"]]
+ 00ba6ca4 ["INT_ADD", "register:40f0:8", ["const:ba6ca4:8", "const:4:8"]]
+ 00ba6ca4 ["CALL", null, ["callee:00c5dd30:8"]]
- 00ba5d0c ["INT_ADD", "register:40f0:8", ["const:ba5d0c:8", "const:4:8"]]
- 00ba5d0c ["CALL", null, ["callee:00c58f80:8"]]
+ 00ba6d00 ["INT_ADD", "register:40f0:8", ["const:ba6d00:8", "const:4:8"]]
+ 00ba6d00 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-ba7518148a15d83cc5fd2fc907c48f58"></a>

### [`00ba5d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5d10.md) → [`00ba6d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba6/00ba6d04.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EESA

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd60.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dd30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd30.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba5dd4 ["INT_ADD", "register:40f0:8", ["const:ba5dd4:8", "const:4:8"]]
- 00ba5dd4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba6dc8 ["INT_ADD", "register:40f0:8", ["const:ba6dc8:8", "const:4:8"]]
+ 00ba6dc8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-63caca071f9f1ee4ae4a066a31ed8061"></a>

### [`00ba5e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5e48.md) → [`00ba6e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba6/00ba6e3c.md) FUN_00ba6e3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00ba5454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5454.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00ba6448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba6/00ba6448.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba5f08 ["INT_ADD", "register:40f0:8", ["const:ba5f08:8", "const:4:8"]]
- 00ba5f08 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba6efc ["INT_ADD", "register:40f0:8", ["const:ba6efc:8", "const:4:8"]]
+ 00ba6efc ["CALL", null, ["callee:00c58fe0:8"]]
- 00ba5f34 ["INT_ADD", "register:40f0:8", ["const:ba5f34:8", "const:4:8"]]
- 00ba5f34 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba6f28 ["INT_ADD", "register:40f0:8", ["const:ba6f28:8", "const:4:8"]]
+ 00ba6f28 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-0f1f30d7a26e330c609f0c6c04e1eef2"></a>

### [`00ba6010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6010.md) → [`00ba7004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba7/00ba7004.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6_EEEEvT0

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc00.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc00.md) [`00c5cc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc90.md) [`00c5cd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd30.md)
- 新版 呼出元 1件 [`00c5dbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbd0.md) · 呼出先 4件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbd0.md) [`00c5dc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc60.md) [`00c5dd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba60ac ["INT_ADD", "register:40f0:8", ["const:ba60ac:8", "const:4:8"]]
- 00ba60ac ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba70a0 ["INT_ADD", "register:40f0:8", ["const:ba70a0:8", "const:4:8"]]
+ 00ba70a0 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba6198 ["INT_ADD", "register:40f0:8", ["const:ba6198:8", "const:4:8"]]
- 00ba6198 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba718c ["INT_ADD", "register:40f0:8", ["const:ba718c:8", "const:4:8"]]
+ 00ba718c ["CALL", null, ["callee:00c590f0:8"]]
- 00ba6200 ["INT_ADD", "register:40f0:8", ["const:ba6200:8", "const:4:8"]]
- 00ba6200 ["CALL", null, ["callee:00c5dbd0:8"]]
+ 00ba71f4 ["INT_ADD", "register:40f0:8", ["const:ba71f4:8", "const:4:8"]]
+ 00ba71f4 ["CALL", null, ["callee:00c5dbd0:8"]]
~~~


<a id="compare-99b4ffeb7d128c8a76739ca9a0ae4dde"></a>

### [`00ba64dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba64dc.md) → [`00ba74d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba7/00ba74d0.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd30.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc00.md) [`00c5cdf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdf0.md)
- 新版 呼出元 1件 [`00c5dd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd00.md) · 呼出先 3件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dbd0.md) [`00c5ddc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ddc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba6590 ["INT_ADD", "register:40f0:8", ["const:ba6590:8", "const:4:8"]]
- 00ba6590 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba7584 ["INT_ADD", "register:40f0:8", ["const:ba7584:8", "const:4:8"]]
+ 00ba7584 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba6644 ["INT_ADD", "register:40f0:8", ["const:ba6644:8", "const:4:8"]]
- 00ba6644 ["CALL", null, ["callee:00c5dbd0:8"]]
+ 00ba7638 ["INT_ADD", "register:40f0:8", ["const:ba7638:8", "const:4:8"]]
+ 00ba7638 ["CALL", null, ["callee:00c5dbd0:8"]]
- 00ba6660 ["INT_ADD", "register:40f0:8", ["const:ba6660:8", "const:4:8"]]
- 00ba6660 ["CALL", null, ["callee:00c5dbd0:8"]]
+ 00ba7654 ["INT_ADD", "register:40f0:8", ["const:ba7654:8", "const:4:8"]]
+ 00ba7654 ["CALL", null, ["callee:00c5dbd0:8"]]
~~~


<a id="compare-d11c67d28749642153ea9004dcdb3aa8"></a>

### [`00ba6888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6888.md) → [`00ba787c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba7/00ba787c.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6_EEEEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc90.md) · 呼出先 4件 [`00ba727c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba727c.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc90.md) [`00c5ce50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce50.md)
- 新版 呼出元 1件 [`00c5dc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc60.md) · 呼出先 4件 [`00ba8270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba8/00ba8270.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc60.md) [`00c5de20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5de20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba6954 ["INT_ADD", "register:40f0:8", ["const:ba6954:8", "const:4:8"]]
- 00ba6954 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba7948 ["INT_ADD", "register:40f0:8", ["const:ba7948:8", "const:4:8"]]
+ 00ba7948 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba6a2c ["INT_ADD", "register:40f0:8", ["const:ba6a2c:8", "const:4:8"]]
- 00ba6a2c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba7a20 ["INT_ADD", "register:40f0:8", ["const:ba7a20:8", "const:4:8"]]
+ 00ba7a20 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba6b18 ["INT_ADD", "register:40f0:8", ["const:ba6b18:8", "const:4:8"]]
- 00ba6b18 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba7b0c ["INT_ADD", "register:40f0:8", ["const:ba7b0c:8", "const:4:8"]]
+ 00ba7b0c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-356d235a3f3d98d037efadddf90b5b36"></a>

### [`00ba6cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6cb0.md) → [`00ba7ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba7/00ba7ca4.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cdf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdf0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5ddc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ddc0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba6d60 ["INT_ADD", "register:40f0:8", ["const:ba6d60:8", "const:4:8"]]
- 00ba6d60 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba7d54 ["INT_ADD", "register:40f0:8", ["const:ba7d54:8", "const:4:8"]]
+ 00ba7d54 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba6de8 ["INT_ADD", "register:40f0:8", ["const:ba6de8:8", "const:4:8"]]
- 00ba6de8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba7ddc ["INT_ADD", "register:40f0:8", ["const:ba7ddc:8", "const:4:8"]]
+ 00ba7ddc ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-f4256addee21390e69a24133b120960c"></a>

### [`00ba6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6e68.md) → [`00ba7e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba7/00ba7e5c.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6Offset

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce50.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd90.md)
- 新版 呼出元 1件 [`00c5de20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5de20.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dd60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba6ff4 ["INT_ADD", "register:40f0:8", ["const:ba6ff4:8", "const:4:8"]]
- 00ba6ff4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba7fe8 ["INT_ADD", "register:40f0:8", ["const:ba7fe8:8", "const:4:8"]]
+ 00ba7fe8 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba70e4 ["INT_ADD", "register:40f0:8", ["const:ba70e4:8", "const:4:8"]]
- 00ba70e4 ["CALL", null, ["callee:00c5dd60:8"]]
+ 00ba80d8 ["INT_ADD", "register:40f0:8", ["const:ba80d8:8", "const:4:8"]]
+ 00ba80d8 ["CALL", null, ["callee:00c5dd60:8"]]
- 00ba7140 ["INT_ADD", "register:40f0:8", ["const:ba7140:8", "const:4:8"]]
- 00ba7140 ["CALL", null, ["callee:00c58f80:8"]]
+ 00ba8134 ["INT_ADD", "register:40f0:8", ["const:ba8134:8", "const:4:8"]]
+ 00ba8134 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-2c78665e604ff37dcb037eb58d4e27d5"></a>

### [`00ba7144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7144.md) → [`00ba8138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba8/00ba8138.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd90.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dd60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd60.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba7208 ["INT_ADD", "register:40f0:8", ["const:ba7208:8", "const:4:8"]]
- 00ba7208 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba81fc ["INT_ADD", "register:40f0:8", ["const:ba81fc:8", "const:4:8"]]
+ 00ba81fc ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-d6c9579f5f93a202790349e62a5034b4"></a>

### [`00ba727c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba727c.md) → [`00ba8270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba8/00ba8270.md) FUN_00ba8270

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00ba6888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6888.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00ba787c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba7/00ba787c.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba733c ["INT_ADD", "register:40f0:8", ["const:ba733c:8", "const:4:8"]]
- 00ba733c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba8330 ["INT_ADD", "register:40f0:8", ["const:ba8330:8", "const:4:8"]]
+ 00ba8330 ["CALL", null, ["callee:00c58fe0:8"]]
- 00ba7368 ["INT_ADD", "register:40f0:8", ["const:ba7368:8", "const:4:8"]]
- 00ba7368 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba835c ["INT_ADD", "register:40f0:8", ["const:ba835c:8", "const:4:8"]]
+ 00ba835c ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-9a7c3ee974337124b350b0cb2e50e2e5"></a>

### [`00ba7444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7444.md) → [`00ba8438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba8/00ba8438.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6OffsetIS6_EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbc0.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbc0.md) [`00c5cc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc50.md) [`00c5ccf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccf0.md)
- 新版 呼出元 1件 [`00c5db90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db90.md) · 呼出先 4件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5db90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db90.md) [`00c5dc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc20.md) [`00c5dcc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dcc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba74e0 ["INT_ADD", "register:40f0:8", ["const:ba74e0:8", "const:4:8"]]
- 00ba74e0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba84d4 ["INT_ADD", "register:40f0:8", ["const:ba84d4:8", "const:4:8"]]
+ 00ba84d4 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba75cc ["INT_ADD", "register:40f0:8", ["const:ba75cc:8", "const:4:8"]]
- 00ba75cc ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba85c0 ["INT_ADD", "register:40f0:8", ["const:ba85c0:8", "const:4:8"]]
+ 00ba85c0 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba7634 ["INT_ADD", "register:40f0:8", ["const:ba7634:8", "const:4:8"]]
- 00ba7634 ["CALL", null, ["callee:00c5db90:8"]]
+ 00ba8628 ["INT_ADD", "register:40f0:8", ["const:ba8628:8", "const:4:8"]]
+ 00ba8628 ["CALL", null, ["callee:00c5db90:8"]]
~~~


<a id="compare-ede4c2ad581194edcd9ab31095063c40"></a>

### [`00ba7910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7910.md) → [`00ba8904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba8/00ba8904.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6OffsetIS

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ccf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccf0.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbc0.md) [`00c5cdb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdb0.md)
- 新版 呼出元 1件 [`00c5dcc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dcc0.md) · 呼出先 3件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5db90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db90.md) [`00c5dd80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba79c4 ["INT_ADD", "register:40f0:8", ["const:ba79c4:8", "const:4:8"]]
- 00ba79c4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba89b8 ["INT_ADD", "register:40f0:8", ["const:ba89b8:8", "const:4:8"]]
+ 00ba89b8 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba7a78 ["INT_ADD", "register:40f0:8", ["const:ba7a78:8", "const:4:8"]]
- 00ba7a78 ["CALL", null, ["callee:00c5db90:8"]]
+ 00ba8a6c ["INT_ADD", "register:40f0:8", ["const:ba8a6c:8", "const:4:8"]]
+ 00ba8a6c ["CALL", null, ["callee:00c5db90:8"]]
- 00ba7a94 ["INT_ADD", "register:40f0:8", ["const:ba7a94:8", "const:4:8"]]
- 00ba7a94 ["CALL", null, ["callee:00c5db90:8"]]
+ 00ba8a88 ["INT_ADD", "register:40f0:8", ["const:ba8a88:8", "const:4:8"]]
+ 00ba8a88 ["CALL", null, ["callee:00c5db90:8"]]
~~~


<a id="compare-5c37b22c9d1b7abe79c9e7ac7988e7e4"></a>

### [`00ba7cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7cbc.md) → [`00ba8cb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba8/00ba8cb0.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6OffsetIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc50.md) · 呼出先 4件 [`00ba86b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba86b0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc50.md) [`00c5ce10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce10.md)
- 新版 呼出元 1件 [`00c5dc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc20.md) · 呼出先 4件 [`00ba96a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba96a4.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc20.md) [`00c5dde0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dde0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba7d88 ["INT_ADD", "register:40f0:8", ["const:ba7d88:8", "const:4:8"]]
- 00ba7d88 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba8d7c ["INT_ADD", "register:40f0:8", ["const:ba8d7c:8", "const:4:8"]]
+ 00ba8d7c ["CALL", null, ["callee:00c590f0:8"]]
- 00ba7e60 ["INT_ADD", "register:40f0:8", ["const:ba7e60:8", "const:4:8"]]
- 00ba7e60 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba8e54 ["INT_ADD", "register:40f0:8", ["const:ba8e54:8", "const:4:8"]]
+ 00ba8e54 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba7f4c ["INT_ADD", "register:40f0:8", ["const:ba7f4c:8", "const:4:8"]]
- 00ba7f4c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba8f40 ["INT_ADD", "register:40f0:8", ["const:ba8f40:8", "const:4:8"]]
+ 00ba8f40 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-a63a25dcc3e6a4786b1f762e3e894c09"></a>

### [`00ba80e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba80e4.md) → [`00ba90d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba90d8.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6Offse

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cdb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdb0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dd80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd80.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba8194 ["INT_ADD", "register:40f0:8", ["const:ba8194:8", "const:4:8"]]
- 00ba8194 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba9188 ["INT_ADD", "register:40f0:8", ["const:ba9188:8", "const:4:8"]]
+ 00ba9188 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba821c ["INT_ADD", "register:40f0:8", ["const:ba821c:8", "const:4:8"]]
- 00ba821c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba9210 ["INT_ADD", "register:40f0:8", ["const:ba9210:8", "const:4:8"]]
+ 00ba9210 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-abac5d99052d212ea364520be8920dfb"></a>

### [`00ba829c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba829c.md) → [`00ba9290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba9290.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6Of

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce10.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd50.md)
- 新版 呼出元 1件 [`00c5dde0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dde0.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba8428 ["INT_ADD", "register:40f0:8", ["const:ba8428:8", "const:4:8"]]
- 00ba8428 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba941c ["INT_ADD", "register:40f0:8", ["const:ba941c:8", "const:4:8"]]
+ 00ba941c ["CALL", null, ["callee:00c590f0:8"]]
- 00ba8518 ["INT_ADD", "register:40f0:8", ["const:ba8518:8", "const:4:8"]]
- 00ba8518 ["CALL", null, ["callee:00c5dd20:8"]]
+ 00ba950c ["INT_ADD", "register:40f0:8", ["const:ba950c:8", "const:4:8"]]
+ 00ba950c ["CALL", null, ["callee:00c5dd20:8"]]
- 00ba8574 ["INT_ADD", "register:40f0:8", ["const:ba8574:8", "const:4:8"]]
- 00ba8574 ["CALL", null, ["callee:00c58f80:8"]]
+ 00ba9568 ["INT_ADD", "register:40f0:8", ["const:ba9568:8", "const:4:8"]]
+ 00ba9568 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-f94e1e54e78db49d8723996877364a7a"></a>

### [`00ba8578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8578.md) → [`00ba956c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba956c.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6OffsetI

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd50.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dd20.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba863c ["INT_ADD", "register:40f0:8", ["const:ba863c:8", "const:4:8"]]
- 00ba863c ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba9630 ["INT_ADD", "register:40f0:8", ["const:ba9630:8", "const:4:8"]]
+ 00ba9630 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-b73ca1b99401bb3ca75b54a9ecabce41"></a>

### [`00ba86b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba86b0.md) → [`00ba96a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba96a4.md) FUN_00ba96a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00ba7cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7cbc.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00ba8cb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba8/00ba8cb0.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba8770 ["INT_ADD", "register:40f0:8", ["const:ba8770:8", "const:4:8"]]
- 00ba8770 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba9764 ["INT_ADD", "register:40f0:8", ["const:ba9764:8", "const:4:8"]]
+ 00ba9764 ["CALL", null, ["callee:00c58fe0:8"]]
- 00ba879c ["INT_ADD", "register:40f0:8", ["const:ba879c:8", "const:4:8"]]
- 00ba879c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba9790 ["INT_ADD", "register:40f0:8", ["const:ba9790:8", "const:4:8"]]
+ 00ba9790 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-3c43f2676f5d3499275a7418ea36ea02"></a>

### [`00ba8878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8878.md) → [`00ba986c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba986c.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE6FinishEjPKcb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c400.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d3d0.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba8904 ["INT_ADD", "register:40f0:8", ["const:ba8904:8", "const:4:8"]]
- 00ba8904 ["CALL", null, ["callee:00c5d240:8"]]
+ 00ba98f8 ["INT_ADD", "register:40f0:8", ["const:ba98f8:8", "const:4:8"]]
+ 00ba98f8 ["CALL", null, ["callee:00c5d240:8"]]
- 00ba8964 ["INT_ADD", "register:40f0:8", ["const:ba8964:8", "const:4:8"]]
- 00ba8964 ["CALL", null, ["callee:00c5d240:8"]]
+ 00ba9958 ["INT_ADD", "register:40f0:8", ["const:ba9958:8", "const:4:8"]]
+ 00ba9958 ["CALL", null, ["callee:00c5d240:8"]]
- 00ba89c8 ["INT_ADD", "register:40f0:8", ["const:ba89c8:8", "const:4:8"]]
- 00ba89c8 ["CALL", null, ["callee:00c5d240:8"]]
+ 00ba99bc ["INT_ADD", "register:40f0:8", ["const:ba99bc:8", "const:4:8"]]
+ 00ba99bc ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-fa0d342b24f6fe25a55e19bd1fd4bc38"></a>

### [`00ba8a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8a48.md) → [`00ba9a3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba9a3c.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers5ValueEEENS_19__map_value_co

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb40.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db10.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba8ae0 ["INT_ADD", "register:40f0:8", ["const:ba8ae0:8", "const:4:8"]]
- 00ba8ae0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba9ad4 ["INT_ADD", "register:40f0:8", ["const:ba9ad4:8", "const:4:8"]]
+ 00ba9ad4 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba8b28 ["INT_ADD", "register:40f0:8", ["const:ba8b28:8", "const:4:8"]]
- 00ba8b28 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba9b1c ["INT_ADD", "register:40f0:8", ["const:ba9b1c:8", "const:4:8"]]
+ 00ba9b1c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-e59700144b267c41f7ad2184a18f4591"></a>

### [`00ba8b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8b5c.md) → [`00ba9b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba9b50.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) · 呼出先 3件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5a070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a070.md) · 呼出先 3件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5c140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba8b94 ["INT_ADD", "register:40f0:8", ["const:ba8b94:8", "const:4:8"]]
- 00ba8b94 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00ba9b88 ["INT_ADD", "register:40f0:8", ["const:ba9b88:8", "const:4:8"]]
+ 00ba9b88 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00ba8be8 ["INT_ADD", "register:40f0:8", ["const:ba8be8:8", "const:4:8"]]
- 00ba8be8 ["CALL", null, ["callee:00c5c140:8"]]
+ 00ba9bdc ["INT_ADD", "register:40f0:8", ["const:ba9bdc:8", "const:4:8"]]
+ 00ba9bdc ["CALL", null, ["callee:00c5c140:8"]]
- 00ba8c30 ["INT_ADD", "register:40f0:8", ["const:ba8c30:8", "const:4:8"]]
- 00ba8c30 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00ba9c24 ["INT_ADD", "register:40f0:8", ["const:ba9c24:8", "const:4:8"]]
+ 00ba9c24 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-134ef890b4a04262c718459e5c5f9ec4"></a>

### [`00ba8c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8c7c.md) → [`00ba9c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba9c70.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE23__append_forward_unsafeIPKcEERS5_T_SA_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cba0.md) · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md)
- 新版 呼出元 1件 [`00c5db70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db70.md) · 呼出先 6件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59020.md) [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba8d78 ["INT_ADD", "register:40f0:8", ["const:ba8d78:8", "const:4:8"]]
- 00ba8d78 ["CALL", null, ["callee:00c5b980:8"]]
+ 00ba9d6c ["INT_ADD", "register:40f0:8", ["const:ba9d6c:8", "const:4:8"]]
+ 00ba9d6c ["CALL", null, ["callee:00c5b980:8"]]
- 00ba8e3c ["INT_ADD", "register:40f0:8", ["const:ba8e3c:8", "const:4:8"]]
- 00ba8e3c ["CALL", null, ["callee:00c58f30:8"]]
+ 00ba9e30 ["INT_ADD", "register:40f0:8", ["const:ba9e30:8", "const:4:8"]]
+ 00ba9e30 ["CALL", null, ["callee:00c58f30:8"]]
- 00ba8ec4 ["INT_ADD", "register:40f0:8", ["const:ba8ec4:8", "const:4:8"]]
- 00ba8ec4 ["CALL", null, ["callee:00c59020:8"]]
+ 00ba9eb8 ["INT_ADD", "register:40f0:8", ["const:ba9eb8:8", "const:4:8"]]
+ 00ba9eb8 ["CALL", null, ["callee:00c59020:8"]]
~~~


<a id="compare-fd12a62ea394262016cdd2a0016d96b2"></a>

### [`00ba8f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8f0c.md) → [`00ba9f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ba9/00ba9f00.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9StructDefEEENS_19__map_valu

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb80.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5db50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db50.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba8fa4 ["INT_ADD", "register:40f0:8", ["const:ba8fa4:8", "const:4:8"]]
- 00ba8fa4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba9f98 ["INT_ADD", "register:40f0:8", ["const:ba9f98:8", "const:4:8"]]
+ 00ba9f98 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba8fec ["INT_ADD", "register:40f0:8", ["const:ba8fec:8", "const:4:8"]]
- 00ba8fec ["CALL", null, ["callee:00c590f0:8"]]
+ 00ba9fe0 ["INT_ADD", "register:40f0:8", ["const:ba9fe0:8", "const:4:8"]]
+ 00ba9fe0 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-814df527ea3f8afb36ed252f67f234b6"></a>

### [`00ba9020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9020.md) → [`00baa014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baa014.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers8FieldDefEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d020.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dff0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba90b8 ["INT_ADD", "register:40f0:8", ["const:ba90b8:8", "const:4:8"]]
- 00ba90b8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa0ac ["INT_ADD", "register:40f0:8", ["const:baa0ac:8", "const:4:8"]]
+ 00baa0ac ["CALL", null, ["callee:00c590f0:8"]]
- 00ba9100 ["INT_ADD", "register:40f0:8", ["const:ba9100:8", "const:4:8"]]
- 00ba9100 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa0f4 ["INT_ADD", "register:40f0:8", ["const:baa0f4:8", "const:4:8"]]
+ 00baa0f4 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-809bfd13955d543f5ebf1342c59193ec"></a>

### [`00ba9134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9134.md) → [`00baa128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baa128.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers8FieldDefEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d010.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dfe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dfe0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba91d0 ["INT_ADD", "register:40f0:8", ["const:ba91d0:8", "const:4:8"]]
- 00ba91d0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa1c4 ["INT_ADD", "register:40f0:8", ["const:baa1c4:8", "const:4:8"]]
+ 00baa1c4 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba9210 ["INT_ADD", "register:40f0:8", ["const:ba9210:8", "const:4:8"]]
- 00ba9210 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa204 ["INT_ADD", "register:40f0:8", ["const:baa204:8", "const:4:8"]]
+ 00baa204 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-bb569dfea8fb31fdebe38199c628e3b4"></a>

### [`00ba9254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9254.md) → [`00baa248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baa248.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE6assignIPS6_EENS_9enable_ifIXaasr21__is_forward_ite

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d100.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)
- 新版 呼出元 1件 [`00c5e0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0d0.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba92dc ["INT_ADD", "register:40f0:8", ["const:ba92dc:8", "const:4:8"]]
- 00ba92dc ["CALL", null, ["callee:00c58f50:8"]]
+ 00baa2d0 ["INT_ADD", "register:40f0:8", ["const:baa2d0:8", "const:4:8"]]
+ 00baa2d0 ["CALL", null, ["callee:00c58f50:8"]]
- 00ba9324 ["INT_ADD", "register:40f0:8", ["const:ba9324:8", "const:4:8"]]
- 00ba9324 ["CALL", null, ["callee:00c5c650:8"]]
+ 00baa318 ["INT_ADD", "register:40f0:8", ["const:baa318:8", "const:4:8"]]
+ 00baa318 ["CALL", null, ["callee:00c5c650:8"]]
- 00ba9374 ["INT_ADD", "register:40f0:8", ["const:ba9374:8", "const:4:8"]]
- 00ba9374 ["CALL", null, ["callee:00c5c150:8"]]
+ 00baa368 ["INT_ADD", "register:40f0:8", ["const:baa368:8", "const:4:8"]]
+ 00baa368 ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-5e333e5f39f6831e19c4a5cb9f9d23a7"></a>

### [`00ba9478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9478.md) → [`00baa46c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baa46c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers5ValueEEENS_19__map_value_com

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf80.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5df50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df50.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba9510 ["INT_ADD", "register:40f0:8", ["const:ba9510:8", "const:4:8"]]
- 00ba9510 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa504 ["INT_ADD", "register:40f0:8", ["const:baa504:8", "const:4:8"]]
+ 00baa504 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba9558 ["INT_ADD", "register:40f0:8", ["const:ba9558:8", "const:4:8"]]
- 00ba9558 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa54c ["INT_ADD", "register:40f0:8", ["const:baa54c:8", "const:4:8"]]
+ 00baa54c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-7751d34bd5ee8dfe293ba5324966d1df"></a>

### [`00ba958c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba958c.md) → [`00baa580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baa580.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers5ValueEEENS_19__map_value_com

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf70.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5df40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df40.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba9628 ["INT_ADD", "register:40f0:8", ["const:ba9628:8", "const:4:8"]]
- 00ba9628 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa61c ["INT_ADD", "register:40f0:8", ["const:baa61c:8", "const:4:8"]]
+ 00baa61c ["CALL", null, ["callee:00c590f0:8"]]
- 00ba9668 ["INT_ADD", "register:40f0:8", ["const:ba9668:8", "const:4:8"]]
- 00ba9668 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa65c ["INT_ADD", "register:40f0:8", ["const:baa65c:8", "const:4:8"]]
+ 00baa65c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-c060a7344f39b6e1cb5775fe3f284370"></a>

### [`00ba96ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba96ac.md) → [`00baa6a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baa6a0.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE18CreateSharedStringEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c380.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md) [`00c5cf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf10.md)
- 新版 呼出元 1件 [`00c5d350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d350.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5d340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d340.md) [`00c5dee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba96f0 ["INT_ADD", "register:40f0:8", ["const:ba96f0:8", "const:4:8"]]
- 00ba96f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00baa6e4 ["INT_ADD", "register:40f0:8", ["const:baa6e4:8", "const:4:8"]]
+ 00baa6e4 ["CALL", null, ["callee:00c58f30:8"]]
- 00ba971c ["INT_ADD", "register:40f0:8", ["const:ba971c:8", "const:4:8"]]
- 00ba971c ["CALL", null, ["callee:00c5d340:8"]]
+ 00baa710 ["INT_ADD", "register:40f0:8", ["const:baa710:8", "const:4:8"]]
+ 00baa710 ["CALL", null, ["callee:00c5d340:8"]]
- 00ba977c ["INT_ADD", "register:40f0:8", ["const:ba977c:8", "const:4:8"]]
- 00ba977c ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa770 ["INT_ADD", "register:40f0:8", ["const:baa770:8", "const:4:8"]]
+ 00baa770 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-e2da6d0b31850caf3a244e644430b1ba"></a>

### [`00ba9858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9858.md) → [`00baa84c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baa84c.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE16CreateStringImplEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md) · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d340.md) · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba98c0 ["INT_ADD", "register:40f0:8", ["const:ba98c0:8", "const:4:8"]]
- 00ba98c0 ["CALL", null, ["callee:00c5d240:8"]]
+ 00baa8b4 ["INT_ADD", "register:40f0:8", ["const:baa8b4:8", "const:4:8"]]
+ 00baa8b4 ["CALL", null, ["callee:00c5d240:8"]]
- 00ba9918 ["INT_ADD", "register:40f0:8", ["const:ba9918:8", "const:4:8"]]
- 00ba9918 ["CALL", null, ["callee:00c5d240:8"]]
+ 00baa90c ["INT_ADD", "register:40f0:8", ["const:baa90c:8", "const:4:8"]]
+ 00baa90c ["CALL", null, ["callee:00c5d240:8"]]
- 00ba9958 ["INT_ADD", "register:40f0:8", ["const:ba9958:8", "const:4:8"]]
- 00ba9958 ["CALL", null, ["callee:00c5d240:8"]]
+ 00baa94c ["INT_ADD", "register:40f0:8", ["const:baa94c:8", "const:4:8"]]
+ 00baa94c ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-012bae21e13335e85ce358f280361c0e"></a>

### [`00ba9998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9998.md) → [`00baa98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baa98c.md) _ZNSt6__ndk16__treeIN11flatbuffers6OffsetINS1_6StringEEENS1_21FlatBufferBuilderImplILb0EE19StringOffsetCompareENS_9allocatorIS4_EEE25__empla

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf10.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c5dee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dee0.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba9a08 ["INT_ADD", "register:40f0:8", ["const:ba9a08:8", "const:4:8"]]
- 00ba9a08 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baa9fc ["INT_ADD", "register:40f0:8", ["const:baa9fc:8", "const:4:8"]]
+ 00baa9fc ["CALL", null, ["callee:00c590f0:8"]]
- 00ba9a50 ["INT_ADD", "register:40f0:8", ["const:ba9a50:8", "const:4:8"]]
- 00ba9a50 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baaa44 ["INT_ADD", "register:40f0:8", ["const:baaa44:8", "const:4:8"]]
+ 00baaa44 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba9aa0 ["INT_ADD", "register:40f0:8", ["const:ba9aa0:8", "const:4:8"]]
- 00ba9aa0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00baaa94 ["INT_ADD", "register:40f0:8", ["const:baaa94:8", "const:4:8"]]
+ 00baaa94 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-673836e5514fa4aab8ec55da2d82cfad"></a>

### [`00ba9cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9cc4.md) → [`00baacb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baa/00baacb8.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers8FieldDefEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb70.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5db40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db40.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba9d5c ["INT_ADD", "register:40f0:8", ["const:ba9d5c:8", "const:4:8"]]
- 00ba9d5c ["CALL", null, ["callee:00c590f0:8"]]
+ 00baad50 ["INT_ADD", "register:40f0:8", ["const:baad50:8", "const:4:8"]]
+ 00baad50 ["CALL", null, ["callee:00c590f0:8"]]
- 00ba9da4 ["INT_ADD", "register:40f0:8", ["const:ba9da4:8", "const:4:8"]]
- 00ba9da4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baad98 ["INT_ADD", "register:40f0:8", ["const:baad98:8", "const:4:8"]]
+ 00baad98 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-cc1a6016e647904ac027b0ae0c5e53ca"></a>

### [`00baa44c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baa44c.md) → [`00bab440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bab/00bab440.md) _ZNSt6__ndk16vectorINS_4pairIN11flatbuffers5ValueEPNS2_8FieldDefEEENS_9allocatorIS6_EEE6insertENS_11__wrap_iterIPKS6_EEOS6_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d120.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5cc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc40.md)
- 新版 呼出元 1件 [`00c5e0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0f0.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md) [`00c5dc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baa5d0 ["INT_ADD", "register:40f0:8", ["const:baa5d0:8", "const:4:8"]]
- 00baa5d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bab5c4 ["INT_ADD", "register:40f0:8", ["const:bab5c4:8", "const:4:8"]]
+ 00bab5c4 ["CALL", null, ["callee:00c58f50:8"]]
- 00baa6a4 ["INT_ADD", "register:40f0:8", ["const:baa6a4:8", "const:4:8"]]
- 00baa6a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bab698 ["INT_ADD", "register:40f0:8", ["const:bab698:8", "const:4:8"]]
+ 00bab698 ["CALL", null, ["callee:00c58f30:8"]]
- 00baa6c4 ["INT_ADD", "register:40f0:8", ["const:baa6c4:8", "const:4:8"]]
- 00baa6c4 ["CALL", null, ["callee:00c5dc10:8"]]
+ 00bab6b8 ["INT_ADD", "register:40f0:8", ["const:bab6b8:8", "const:4:8"]]
+ 00bab6b8 ["CALL", null, ["callee:00c5dc10:8"]]
~~~


<a id="compare-b267ab2ca0fb77895f865cc387c2b909"></a>

### [`00baa8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baa8e8.md) → [`00bab8dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bab/00bab8dc.md) _ZNSt6__ndk114__split_bufferINS_4pairIN11flatbuffers5ValueEPNS2_8FieldDefEEERNS_9allocatorIS6_EEE9push_backEOS6_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc40.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5dc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc10.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baa9dc ["INT_ADD", "register:40f0:8", ["const:baa9dc:8", "const:4:8"]]
- 00baa9dc ["CALL", null, ["callee:00c58f50:8"]]
+ 00bab9d0 ["INT_ADD", "register:40f0:8", ["const:bab9d0:8", "const:4:8"]]
+ 00bab9d0 ["CALL", null, ["callee:00c58f50:8"]]
- 00baaa34 ["INT_ADD", "register:40f0:8", ["const:baaa34:8", "const:4:8"]]
- 00baaa34 ["CALL", null, ["callee:00c58f30:8"]]
+ 00baba28 ["INT_ADD", "register:40f0:8", ["const:baba28:8", "const:4:8"]]
+ 00baba28 ["CALL", null, ["callee:00c58f30:8"]]
- 00baab1c ["INT_ADD", "register:40f0:8", ["const:baab1c:8", "const:4:8"]]
- 00baab1c ["CALL", null, ["callee:00c58f50:8"]]
+ 00babb10 ["INT_ADD", "register:40f0:8", ["const:babb10:8", "const:4:8"]]
+ 00babb10 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5d9b13b41809fc91b3f54734ef6247af"></a>

### [`00baaba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baaba0.md) → [`00babb94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bab/00babb94.md) FUN_00babb94

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00b7c308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7c/00b7c308.md) · 呼出先 7件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baac3c ["INT_ADD", "register:40f0:8", ["const:baac3c:8", "const:4:8"]]
- 00baac3c ["CALL", null, ["callee:00c5d5d0:8"]]
+ 00babc30 ["INT_ADD", "register:40f0:8", ["const:babc30:8", "const:4:8"]]
+ 00babc30 ["CALL", null, ["callee:00c5d5d0:8"]]
- 00baac58 ["INT_ADD", "register:40f0:8", ["const:baac58:8", "const:4:8"]]
- 00baac58 ["CALL", null, ["callee:00c58f50:8"]]
+ 00babc4c ["INT_ADD", "register:40f0:8", ["const:babc4c:8", "const:4:8"]]
+ 00babc4c ["CALL", null, ["callee:00c58f50:8"]]
- 00baacfc ["INT_ADD", "register:40f0:8", ["const:baacfc:8", "const:4:8"]]
- 00baacfc ["CALL", null, ["callee:00c58f30:8"]]
+ 00babcf0 ["INT_ADD", "register:40f0:8", ["const:babcf0:8", "const:4:8"]]
+ 00babcf0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-582a8694debe8fdc6812fe4404489e8e"></a>

### [`00baadf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baadf8.md) → [`00babdec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bab/00babdec.md) _ZNSt6__ndk16vectorINS_4pairIN11flatbuffers5ValueEPNS2_8FieldDefEEENS_9allocatorIS6_EEE21__push_back_slow_pathIS6_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d110.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0e0.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baae8c ["INT_ADD", "register:40f0:8", ["const:baae8c:8", "const:4:8"]]
- 00baae8c ["CALL", null, ["callee:00c58f30:8"]]
+ 00babe80 ["INT_ADD", "register:40f0:8", ["const:babe80:8", "const:4:8"]]
+ 00babe80 ["CALL", null, ["callee:00c58f30:8"]]
- 00baaf84 ["INT_ADD", "register:40f0:8", ["const:baaf84:8", "const:4:8"]]
- 00baaf84 ["CALL", null, ["callee:00c58f50:8"]]
+ 00babf78 ["INT_ADD", "register:40f0:8", ["const:babf78:8", "const:4:8"]]
+ 00babf78 ["CALL", null, ["callee:00c58f50:8"]]
- 00baafa4 ["INT_ADD", "register:40f0:8", ["const:baafa4:8", "const:4:8"]]
- 00baafa4 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00babf98 ["INT_ADD", "register:40f0:8", ["const:babf98:8", "const:4:8"]]
+ 00babf98 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-827a67374b18d7c9e7591c318dc0fb84"></a>

### [`00bab8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bab/00bab8c4.md) → [`00bac8b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bac/00bac8b8.md) FUN_00bac8b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c550.md) [`00c5c700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c700.md) [`00c5d0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0d0.md)
- 新版 呼出元 1件 [`00b7d08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7d/00b7d08c.md) · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5d520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d520.md) [`00c5d6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d6d0.md) [`00c5e0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bab974 ["INT_ADD", "register:40f0:8", ["const:bab974:8", "const:4:8"]]
- 00bab974 ["CALL", null, ["callee:00c5e0a0:8"]]
+ 00bac968 ["INT_ADD", "register:40f0:8", ["const:bac968:8", "const:4:8"]]
+ 00bac968 ["CALL", null, ["callee:00c5e0a0:8"]]
- 00bab984 ["INT_ADD", "register:40f0:8", ["const:bab984:8", "const:4:8"]]
- 00bab984 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bac978 ["INT_ADD", "register:40f0:8", ["const:bac978:8", "const:4:8"]]
+ 00bac978 ["CALL", null, ["callee:00c58f50:8"]]
- 00bab9d0 ["INT_ADD", "register:40f0:8", ["const:bab9d0:8", "const:4:8"]]
- 00bab9d0 ["CALL", null, ["callee:00c5d520:8"]]
+ 00bac9c4 ["INT_ADD", "register:40f0:8", ["const:bac9c4:8", "const:4:8"]]
+ 00bac9c4 ["CALL", null, ["callee:00c5d520:8"]]
~~~


<a id="compare-d6f83a3c45a23a37b56e41c16499eff9"></a>

### [`00baba2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bab/00baba2c.md) → [`00baca20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bac/00baca20.md) _ZNSt6__ndk16vectorIN11flatbuffers5ValueENS_9allocatorIS2_EEE24__emplace_back_slow_pathIJS2_EEEvDpOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0d0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5e0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0a0.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baba88 ["INT_ADD", "register:40f0:8", ["const:baba88:8", "const:4:8"]]
- 00baba88 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00baca7c ["INT_ADD", "register:40f0:8", ["const:baca7c:8", "const:4:8"]]
+ 00baca7c ["CALL", null, ["callee:00c5c1e0:8"]]
- 00baba94 ["INT_ADD", "register:40f0:8", ["const:baba94:8", "const:4:8"]]
- 00baba94 ["CALL", null, ["callee:00c58f30:8"]]
+ 00baca88 ["INT_ADD", "register:40f0:8", ["const:baca88:8", "const:4:8"]]
+ 00baca88 ["CALL", null, ["callee:00c58f30:8"]]
- 00babb70 ["INT_ADD", "register:40f0:8", ["const:babb70:8", "const:4:8"]]
- 00babb70 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bacb64 ["INT_ADD", "register:40f0:8", ["const:bacb64:8", "const:4:8"]]
+ 00bacb64 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3c1621421885baba8b6efc1d48f1aa18"></a>

### [`00babf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bab/00babf18.md) → [`00bacf0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bac/00bacf0c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9StructDefEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d050.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5e020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e020.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00babfb4 ["INT_ADD", "register:40f0:8", ["const:babfb4:8", "const:4:8"]]
- 00babfb4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bacfa8 ["INT_ADD", "register:40f0:8", ["const:bacfa8:8", "const:4:8"]]
+ 00bacfa8 ["CALL", null, ["callee:00c590f0:8"]]
- 00babff4 ["INT_ADD", "register:40f0:8", ["const:babff4:8", "const:4:8"]]
- 00babff4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bacfe8 ["INT_ADD", "register:40f0:8", ["const:bacfe8:8", "const:4:8"]]
+ 00bacfe8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-328362bc79c95113131986635d41c836"></a>

### [`00bac9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac9ec.md) → [`00bad9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00bad9e0.md) FUN_00bad9e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bac038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac038.md) [`00bacc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bacc98.md) [`00bad180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad180.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 3件 [`00bad02c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00bad02c.md) [`00badc8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00badc8c.md) [`00bae174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bae/00bae174.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baca78 ["INT_ADD", "register:40f0:8", ["const:baca78:8", "const:4:8"]]
- 00baca78 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bada6c ["INT_ADD", "register:40f0:8", ["const:bada6c:8", "const:4:8"]]
+ 00bada6c ["CALL", null, ["callee:00c590f0:8"]]
- 00bacaf8 ["INT_ADD", "register:40f0:8", ["const:bacaf8:8", "const:4:8"]]
- 00bacaf8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00badaec ["INT_ADD", "register:40f0:8", ["const:badaec:8", "const:4:8"]]
+ 00badaec ["CALL", null, ["callee:00c590f0:8"]]
- 00bacb78 ["INT_ADD", "register:40f0:8", ["const:bacb78:8", "const:4:8"]]
- 00bacb78 ["CALL", null, ["callee:00c590f0:8"]]
+ 00badb6c ["INT_ADD", "register:40f0:8", ["const:badb6c:8", "const:4:8"]]
+ 00badb6c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-bd2765dc1975509b5088d41f9a07cdd8"></a>

### [`00bacc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bacc98.md) → [`00badc8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00badc8c.md) FUN_00badc8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bac038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac038.md) [`00bacea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bacea0.md) [`00bad180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad180.md) · 呼出先 2件 [`00bac9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac9ec.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 3件 [`00bad02c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00bad02c.md) [`00bade94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00bade94.md) [`00bae174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bae/00bae174.md) · 呼出先 2件 [`00bad9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00bad9e0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baccc4 ["INT_ADD", "register:40f0:8", ["const:baccc4:8", "const:4:8"]]
- 00baccc4 ["CALL", null, ["callee:00bad9e0:8"]]
+ 00badcb8 ["INT_ADD", "register:40f0:8", ["const:badcb8:8", "const:4:8"]]
+ 00badcb8 ["CALL", null, ["callee:00bad9e0:8"]]
- 00bacd34 ["INT_ADD", "register:40f0:8", ["const:bacd34:8", "const:4:8"]]
- 00bacd34 ["CALL", null, ["callee:00c590f0:8"]]
+ 00badd28 ["INT_ADD", "register:40f0:8", ["const:badd28:8", "const:4:8"]]
+ 00badd28 ["CALL", null, ["callee:00c590f0:8"]]
- 00bacdc4 ["INT_ADD", "register:40f0:8", ["const:bacdc4:8", "const:4:8"]]
- 00bacdc4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baddb8 ["INT_ADD", "register:40f0:8", ["const:baddb8:8", "const:4:8"]]
+ 00baddb8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-9641250429acf2914f9ba8d1339a2f96"></a>

### [`00bacea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bacea0.md) → [`00bade94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00bade94.md) FUN_00bade94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bac038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac038.md) [`00bad180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad180.md) · 呼出先 2件 [`00bacc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bacc98.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`00bad02c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00bad02c.md) [`00bae174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bae/00bae174.md) · 呼出先 2件 [`00badc8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bad/00badc8c.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baced4 ["INT_ADD", "register:40f0:8", ["const:baced4:8", "const:4:8"]]
- 00baced4 ["CALL", null, ["callee:00badc8c:8"]]
+ 00badec8 ["INT_ADD", "register:40f0:8", ["const:badec8:8", "const:4:8"]]
+ 00badec8 ["CALL", null, ["callee:00badc8c:8"]]
- 00bacf58 ["INT_ADD", "register:40f0:8", ["const:bacf58:8", "const:4:8"]]
- 00bacf58 ["CALL", null, ["callee:00c590f0:8"]]
+ 00badf4c ["INT_ADD", "register:40f0:8", ["const:badf4c:8", "const:4:8"]]
+ 00badf4c ["CALL", null, ["callee:00c590f0:8"]]
- 00bad010 ["INT_ADD", "register:40f0:8", ["const:bad010:8", "const:4:8"]]
- 00bad010 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bae004 ["INT_ADD", "register:40f0:8", ["const:bae004:8", "const:4:8"]]
+ 00bae004 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-f03aab7f5d5dacafaee3cf7ce6d0f759"></a>

### [`00bade60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bade60.md) → [`00baee54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bae/00baee54.md) FUN_00baee54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) [`00bae10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae10c.md) [`00bae5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae5f4.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 3件 [`00bae488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bae/00bae488.md) [`00baf100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf100.md) [`00baf5e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf5e8.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00badeec ["INT_ADD", "register:40f0:8", ["const:badeec:8", "const:4:8"]]
- 00badeec ["CALL", null, ["callee:00c590f0:8"]]
+ 00baeee0 ["INT_ADD", "register:40f0:8", ["const:baeee0:8", "const:4:8"]]
+ 00baeee0 ["CALL", null, ["callee:00c590f0:8"]]
- 00badf6c ["INT_ADD", "register:40f0:8", ["const:badf6c:8", "const:4:8"]]
- 00badf6c ["CALL", null, ["callee:00c590f0:8"]]
+ 00baef60 ["INT_ADD", "register:40f0:8", ["const:baef60:8", "const:4:8"]]
+ 00baef60 ["CALL", null, ["callee:00c590f0:8"]]
- 00badfec ["INT_ADD", "register:40f0:8", ["const:badfec:8", "const:4:8"]]
- 00badfec ["CALL", null, ["callee:00c590f0:8"]]
+ 00baefe0 ["INT_ADD", "register:40f0:8", ["const:baefe0:8", "const:4:8"]]
+ 00baefe0 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-5793c09e025c7b06fb535ffd78cf3da2"></a>

### [`00bae10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae10c.md) → [`00baf100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf100.md) FUN_00baf100

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) [`00bae314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae314.md) [`00bae5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae5f4.md) · 呼出先 2件 [`00bade60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bade60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 3件 [`00bae488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bae/00bae488.md) [`00baf308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf308.md) [`00baf5e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf5e8.md) · 呼出先 2件 [`00baee54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bae/00baee54.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bae138 ["INT_ADD", "register:40f0:8", ["const:bae138:8", "const:4:8"]]
- 00bae138 ["CALL", null, ["callee:00baee54:8"]]
+ 00baf12c ["INT_ADD", "register:40f0:8", ["const:baf12c:8", "const:4:8"]]
+ 00baf12c ["CALL", null, ["callee:00baee54:8"]]
- 00bae1a8 ["INT_ADD", "register:40f0:8", ["const:bae1a8:8", "const:4:8"]]
- 00bae1a8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baf19c ["INT_ADD", "register:40f0:8", ["const:baf19c:8", "const:4:8"]]
+ 00baf19c ["CALL", null, ["callee:00c590f0:8"]]
- 00bae238 ["INT_ADD", "register:40f0:8", ["const:bae238:8", "const:4:8"]]
- 00bae238 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baf22c ["INT_ADD", "register:40f0:8", ["const:baf22c:8", "const:4:8"]]
+ 00baf22c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-f6dd2da19b6de4cee4b9d0867dd39466"></a>

### [`00bae314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae314.md) → [`00baf308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf308.md) FUN_00baf308

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) [`00bae5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae5f4.md) · 呼出先 2件 [`00bae10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae10c.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`00bae488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bae/00bae488.md) [`00baf5e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf5e8.md) · 呼出先 2件 [`00baf100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf100.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bae348 ["INT_ADD", "register:40f0:8", ["const:bae348:8", "const:4:8"]]
- 00bae348 ["CALL", null, ["callee:00baf100:8"]]
+ 00baf33c ["INT_ADD", "register:40f0:8", ["const:baf33c:8", "const:4:8"]]
+ 00baf33c ["CALL", null, ["callee:00baf100:8"]]
- 00bae3cc ["INT_ADD", "register:40f0:8", ["const:bae3cc:8", "const:4:8"]]
- 00bae3cc ["CALL", null, ["callee:00c590f0:8"]]
+ 00baf3c0 ["INT_ADD", "register:40f0:8", ["const:baf3c0:8", "const:4:8"]]
+ 00baf3c0 ["CALL", null, ["callee:00c590f0:8"]]
- 00bae484 ["INT_ADD", "register:40f0:8", ["const:bae484:8", "const:4:8"]]
- 00bae484 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baf478 ["INT_ADD", "register:40f0:8", ["const:baf478:8", "const:4:8"]]
+ 00baf478 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-90f7d8abc49f8ce231375fa30d75d0ab"></a>

### [`00bae908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae908.md) → [`00baf8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00baf8fc.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumValEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfe0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dfb0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bae9a0 ["INT_ADD", "register:40f0:8", ["const:bae9a0:8", "const:4:8"]]
- 00bae9a0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baf994 ["INT_ADD", "register:40f0:8", ["const:baf994:8", "const:4:8"]]
+ 00baf994 ["CALL", null, ["callee:00c590f0:8"]]
- 00bae9e8 ["INT_ADD", "register:40f0:8", ["const:bae9e8:8", "const:4:8"]]
- 00bae9e8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00baf9dc ["INT_ADD", "register:40f0:8", ["const:baf9dc:8", "const:4:8"]]
+ 00baf9dc ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-e82fa86c12de9a5f6ba8660563c76084"></a>

### [`00baea1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baea1c.md) → [`00bafa10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00bafa10.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumValEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfd0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dfa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dfa0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baeab8 ["INT_ADD", "register:40f0:8", ["const:baeab8:8", "const:4:8"]]
- 00baeab8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bafaac ["INT_ADD", "register:40f0:8", ["const:bafaac:8", "const:4:8"]]
+ 00bafaac ["CALL", null, ["callee:00c590f0:8"]]
- 00baeaf8 ["INT_ADD", "register:40f0:8", ["const:baeaf8:8", "const:4:8"]]
- 00baeaf8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bafaec ["INT_ADD", "register:40f0:8", ["const:bafaec:8", "const:4:8"]]
+ 00bafaec ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-1a54fa52fa3e394018b59282db2cb94f"></a>

### [`00baeb3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baeb3c.md) → [`00bafb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00bafb30.md) _ZNSt6__ndk16__treeINS_4pairIN11flatbuffers8BaseTypeEPNS2_9StructDefEEENS_4lessIS6_EENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d080.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d080.md)
- 新版 呼出元 1件 [`00c5e050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e050.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e050.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baeb58 ["INT_ADD", "register:40f0:8", ["const:baeb58:8", "const:4:8"]]
- 00baeb58 ["CALL", null, ["callee:00c5e050:8"]]
+ 00bafb4c ["INT_ADD", "register:40f0:8", ["const:bafb4c:8", "const:4:8"]]
+ 00bafb4c ["CALL", null, ["callee:00c5e050:8"]]
- 00baeb64 ["INT_ADD", "register:40f0:8", ["const:baeb64:8", "const:4:8"]]
- 00baeb64 ["CALL", null, ["callee:00c5e050:8"]]
+ 00bafb58 ["INT_ADD", "register:40f0:8", ["const:bafb58:8", "const:4:8"]]
+ 00bafb58 ["CALL", null, ["callee:00c5e050:8"]]
~~~


<a id="compare-d92e6b7c2ac7289194ec5f93c9518f8f"></a>

### [`00baeb7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baeb7c.md) → [`00bafb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00bafb70.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers4TypeEEENS_19__map_value_comp

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf60.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5df30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df30.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baec14 ["INT_ADD", "register:40f0:8", ["const:baec14:8", "const:4:8"]]
- 00baec14 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bafc08 ["INT_ADD", "register:40f0:8", ["const:bafc08:8", "const:4:8"]]
+ 00bafc08 ["CALL", null, ["callee:00c590f0:8"]]
- 00baec5c ["INT_ADD", "register:40f0:8", ["const:baec5c:8", "const:4:8"]]
- 00baec5c ["CALL", null, ["callee:00c590f0:8"]]
+ 00bafc50 ["INT_ADD", "register:40f0:8", ["const:bafc50:8", "const:4:8"]]
+ 00bafc50 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-98b9eabad4a34862a717dffff3bec34f"></a>

### [`00baec90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baec90.md) → [`00bafc84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00bafc84.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers4TypeEEENS_19__map_value_comp

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf50.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5df20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df20.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baed2c ["INT_ADD", "register:40f0:8", ["const:baed2c:8", "const:4:8"]]
- 00baed2c ["CALL", null, ["callee:00c590f0:8"]]
+ 00bafd20 ["INT_ADD", "register:40f0:8", ["const:bafd20:8", "const:4:8"]]
+ 00bafd20 ["CALL", null, ["callee:00c590f0:8"]]
- 00baed6c ["INT_ADD", "register:40f0:8", ["const:baed6c:8", "const:4:8"]]
- 00baed6c ["CALL", null, ["callee:00c590f0:8"]]
+ 00bafd60 ["INT_ADD", "register:40f0:8", ["const:bafd60:8", "const:4:8"]]
+ 00bafd60 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-b16a36579a70997bfb9f13fe7181d885"></a>

### [`00baedb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baedb0.md) → [`00bafda4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00bafda4.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_3setIN11flatbuffers12IncludedFileENS_4le

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb30.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5db00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db00.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baee48 ["INT_ADD", "register:40f0:8", ["const:baee48:8", "const:4:8"]]
- 00baee48 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bafe3c ["INT_ADD", "register:40f0:8", ["const:bafe3c:8", "const:4:8"]]
+ 00bafe3c ["CALL", null, ["callee:00c590f0:8"]]
- 00baee90 ["INT_ADD", "register:40f0:8", ["const:baee90:8", "const:4:8"]]
- 00baee90 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bafe84 ["INT_ADD", "register:40f0:8", ["const:bafe84:8", "const:4:8"]]
+ 00bafe84 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-f67336d8f7e665523661e6d03f0eeea8"></a>

### [`00baf3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf3dc.md) → [`00bb03d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb03d0.md) _ZNSt6__ndk17__sort4IRPFbPKN11flatbuffers8FieldDefES4_EPPS2_EEjT0_SA_SA_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d180.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e150.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baf410 ["COPY", "register:0:8", ["register:4040:8"]]
- 00baf410 ["INT_ADD", "register:40f0:8", ["const:baf410:8", "const:4:8"]]
- 00baf410 ["CALLIND", null, ["register:0:8"]]
+ 00bb0404 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb0404 ["INT_ADD", "register:40f0:8", ["const:bb0404:8", "const:4:8"]]
+ 00bb0404 ["CALLIND", null, ["register:0:8"]]
- 00baf428 ["COPY", "register:0:8", ["register:4048:8"]]
- 00baf428 ["INT_ADD", "register:40f0:8", ["const:baf428:8", "const:4:8"]]
- 00baf428 ["CALLIND", null, ["register:0:8"]]
+ 00bb041c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb041c ["INT_ADD", "register:40f0:8", ["const:bb041c:8", "const:4:8"]]
+ 00bb041c ["CALLIND", null, ["register:0:8"]]
- 00baf46c ["COPY", "register:0:8", ["register:4040:8"]]
- 00baf46c ["INT_ADD", "register:40f0:8", ["const:baf46c:8", "const:4:8"]]
- 00baf46c ["CALLIND", null, ["register:0:8"]]
+ 00bb0460 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb0460 ["INT_ADD", "register:40f0:8", ["const:bb0460:8", "const:4:8"]]
+ 00bb0460 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fc3b551f6b752dba524d2ed86ad784fe"></a>

### [`00baf560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf560.md) → [`00bb0554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb0554.md) FUN_00bb0554

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00baeec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baeec4.md) [`00baf7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf7c4.md) · 呼出先 1件 [`00c5d180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d180.md)
- 新版 呼出元 2件 [`00bafeb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00baf/00bafeb8.md) [`00bb07b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb07b8.md) · 呼出先 1件 [`00c5e150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baf594 ["INT_ADD", "register:40f0:8", ["const:baf594:8", "const:4:8"]]
- 00baf594 ["CALL", null, ["callee:00c5e150:8"]]
+ 00bb0588 ["INT_ADD", "register:40f0:8", ["const:bb0588:8", "const:4:8"]]
+ 00bb0588 ["CALL", null, ["callee:00c5e150:8"]]
- 00baf5ac ["COPY", "register:0:8", ["register:4048:8"]]
- 00baf5ac ["INT_ADD", "register:40f0:8", ["const:baf5ac:8", "const:4:8"]]
- 00baf5ac ["CALLIND", null, ["register:0:8"]]
+ 00bb05a0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb05a0 ["INT_ADD", "register:40f0:8", ["const:bb05a0:8", "const:4:8"]]
+ 00bb05a0 ["CALLIND", null, ["register:0:8"]]
- 00baf5d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00baf5d0 ["INT_ADD", "register:40f0:8", ["const:baf5d0:8", "const:4:8"]]
- 00baf5d0 ["CALLIND", null, ["register:0:8"]]
+ 00bb05c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb05c4 ["INT_ADD", "register:40f0:8", ["const:bb05c4:8", "const:4:8"]]
+ 00bb05c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a358644bc38062d7dd7b38955535bceb"></a>

### [`00baf668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf668.md) → [`00bb065c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb065c.md) _ZNSt6__ndk118__insertion_sort_3IRPFbPKN11flatbuffers8FieldDefES4_EPPS2_EEvT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ccc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccc0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5dc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc90.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baf698 ["COPY", "register:0:8", ["register:4048:8"]]
- 00baf698 ["INT_ADD", "register:40f0:8", ["const:baf698:8", "const:4:8"]]
- 00baf698 ["CALLIND", null, ["register:0:8"]]
+ 00bb068c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb068c ["INT_ADD", "register:40f0:8", ["const:bb068c:8", "const:4:8"]]
+ 00bb068c ["CALLIND", null, ["register:0:8"]]
- 00baf6b4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00baf6b4 ["INT_ADD", "register:40f0:8", ["const:baf6b4:8", "const:4:8"]]
- 00baf6b4 ["CALLIND", null, ["register:0:8"]]
+ 00bb06a8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb06a8 ["INT_ADD", "register:40f0:8", ["const:bb06a8:8", "const:4:8"]]
+ 00bb06a8 ["CALLIND", null, ["register:0:8"]]
- 00baf6f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00baf6f0 ["INT_ADD", "register:40f0:8", ["const:baf6f0:8", "const:4:8"]]
- 00baf6f0 ["CALLIND", null, ["register:0:8"]]
+ 00bb06e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb06e4 ["INT_ADD", "register:40f0:8", ["const:bb06e4:8", "const:4:8"]]
+ 00bb06e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-67ac5f41d4810f84f36ae9b0051ef913"></a>

### [`00bafa74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafa74.md) → [`00bb0a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb0a68.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers10ServiceDefEEENS_19__map_val

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf40.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5df10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df10.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bafb0c ["INT_ADD", "register:40f0:8", ["const:bafb0c:8", "const:4:8"]]
- 00bafb0c ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0b00 ["INT_ADD", "register:40f0:8", ["const:bb0b00:8", "const:4:8"]]
+ 00bb0b00 ["CALL", null, ["callee:00c590f0:8"]]
- 00bafb54 ["INT_ADD", "register:40f0:8", ["const:bafb54:8", "const:4:8"]]
- 00bafb54 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0b48 ["INT_ADD", "register:40f0:8", ["const:bb0b48:8", "const:4:8"]]
+ 00bb0b48 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-9fd25e7c8818f611be359f446ead24f6"></a>

### [`00bafb88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafb88.md) → [`00bb0b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb0b7c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers10ServiceDefEEENS_19__map_val

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf30.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5df00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df00.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bafc24 ["INT_ADD", "register:40f0:8", ["const:bafc24:8", "const:4:8"]]
- 00bafc24 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0c18 ["INT_ADD", "register:40f0:8", ["const:bb0c18:8", "const:4:8"]]
+ 00bb0c18 ["CALL", null, ["callee:00c590f0:8"]]
- 00bafc64 ["INT_ADD", "register:40f0:8", ["const:bafc64:8", "const:4:8"]]
- 00bafc64 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0c58 ["INT_ADD", "register:40f0:8", ["const:bb0c58:8", "const:4:8"]]
+ 00bb0c58 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-a1a7144b9c8a2c852fc565e84d25319c"></a>

### [`00bafca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafca8.md) → [`00bb0c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb0c9c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7RPCCallEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d000.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dfd0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bafd40 ["INT_ADD", "register:40f0:8", ["const:bafd40:8", "const:4:8"]]
- 00bafd40 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0d34 ["INT_ADD", "register:40f0:8", ["const:bb0d34:8", "const:4:8"]]
+ 00bb0d34 ["CALL", null, ["callee:00c590f0:8"]]
- 00bafd88 ["INT_ADD", "register:40f0:8", ["const:bafd88:8", "const:4:8"]]
- 00bafd88 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0d7c ["INT_ADD", "register:40f0:8", ["const:bb0d7c:8", "const:4:8"]]
+ 00bb0d7c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-883d59301c28bae9a8bffb7a33d0a37b"></a>

### [`00bafdbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafdbc.md) → [`00bb0db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb0db0.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7RPCCallEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cff0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dfc0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bafe58 ["INT_ADD", "register:40f0:8", ["const:bafe58:8", "const:4:8"]]
- 00bafe58 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0e4c ["INT_ADD", "register:40f0:8", ["const:bb0e4c:8", "const:4:8"]]
+ 00bb0e4c ["CALL", null, ["callee:00c590f0:8"]]
- 00bafe98 ["INT_ADD", "register:40f0:8", ["const:bafe98:8", "const:4:8"]]
- 00bafe98 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0e8c ["INT_ADD", "register:40f0:8", ["const:bb0e8c:8", "const:4:8"]]
+ 00bb0e8c ["CALL", null, ["callee:00c590f0:8"]]
~~~


