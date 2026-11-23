# v16.0.2 → v16.0.3 · 要調査の変更候補 (43)

[一覧の目次](README.md)

<a id="compare-fcc6008e06f3773034b1438a5b7eabcf"></a>

### [`00c3fdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3fdc0.md) → [`00c40db4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c40/00c40db4.md) FUN_00c40db4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c3fdf0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c3fdf0 ["INT_ADD", "register:40f0:8", ["const:c3fdf0:8", "const:4:8"]]
- 00c3fdf0 ["CALLIND", null, ["register:0:8"]]
+ 00c40de4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c40de4 ["INT_ADD", "register:40f0:8", ["const:c40de4:8", "const:4:8"]]
+ 00c40de4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6570ca539814bb4030dd1abd668c16ef"></a>

### [`00c43e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c43/00c43e48.md) → [`00c44e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c44/00c44e3c.md) FUN_00c44e3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c43ebc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c43ebc ["INT_ADD", "register:40f0:8", ["const:c43ebc:8", "const:4:8"]]
- 00c43ebc ["CALLIND", null, ["register:0:8"]]
+ 00c44eb0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c44eb0 ["INT_ADD", "register:40f0:8", ["const:c44eb0:8", "const:4:8"]]
+ 00c44eb0 ["CALLIND", null, ["register:0:8"]]
- 00c43ee0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c43ee0 ["INT_ADD", "register:40f0:8", ["const:c43ee0:8", "const:4:8"]]
- 00c43ee0 ["CALLIND", null, ["register:0:8"]]
+ 00c44ed4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c44ed4 ["INT_ADD", "register:40f0:8", ["const:c44ed4:8", "const:4:8"]]
+ 00c44ed4 ["CALLIND", null, ["register:0:8"]]
- 00c43f1c ["INT_ADD", "register:40f0:8", ["const:c43f1c:8", "const:4:8"]]
- 00c43f1c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c44f10 ["INT_ADD", "register:40f0:8", ["const:c44f10:8", "const:4:8"]]
+ 00c44f10 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-5b3ab16f253c8e1661eeb9cca46bdc20"></a>

### [`00c4441c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c44/00c4441c.md) → [`00c45410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c45/00c45410.md) FUN_00c45410

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4446c ["INT_ADD", "register:40f0:8", ["const:c4446c:8", "const:4:8"]]
- 00c4446c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c45460 ["INT_ADD", "register:40f0:8", ["const:c45460:8", "const:4:8"]]
+ 00c45460 ["CALL", null, ["callee:00c5b140:8"]]
- 00c44488 ["INT_ADD", "register:40f0:8", ["const:c44488:8", "const:4:8"]]
- 00c44488 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c4547c ["INT_ADD", "register:40f0:8", ["const:c4547c:8", "const:4:8"]]
+ 00c4547c ["CALL", null, ["callee:00c590a0:8"]]
- 00c444c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c444c4 ["INT_ADD", "register:40f0:8", ["const:c444c4:8", "const:4:8"]]
- 00c444c4 ["CALLIND", null, ["register:0:8"]]
+ 00c454b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c454b8 ["INT_ADD", "register:40f0:8", ["const:c454b8:8", "const:4:8"]]
+ 00c454b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d220c6d93e882aa3a35d88d7abd54dc7"></a>

### [`00c44604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c44/00c44604.md) → [`00c455f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c45/00c455f8.md) FUN_00c455f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c44650 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c44650 ["INT_ADD", "register:40f0:8", ["const:c44650:8", "const:4:8"]]
- 00c44650 ["CALLIND", null, ["register:0:8"]]
+ 00c45644 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45644 ["INT_ADD", "register:40f0:8", ["const:c45644:8", "const:4:8"]]
+ 00c45644 ["CALLIND", null, ["register:0:8"]]
- 00c44674 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c44674 ["INT_ADD", "register:40f0:8", ["const:c44674:8", "const:4:8"]]
- 00c44674 ["CALLIND", null, ["register:0:8"]]
+ 00c45668 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45668 ["INT_ADD", "register:40f0:8", ["const:c45668:8", "const:4:8"]]
+ 00c45668 ["CALLIND", null, ["register:0:8"]]
- 00c446b8 ["INT_ADD", "register:40f0:8", ["const:c446b8:8", "const:4:8"]]
- 00c446b8 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c456ac ["INT_ADD", "register:40f0:8", ["const:c456ac:8", "const:4:8"]]
+ 00c456ac ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-5bf0048472a9cf287ed7be903cb88d5f"></a>

### [`00c447ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c44/00c447ec.md) → [`00c457e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c45/00c457e0.md) FUN_00c457e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c44834 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c44834 ["INT_ADD", "register:40f0:8", ["const:c44834:8", "const:4:8"]]
- 00c44834 ["CALLIND", null, ["register:0:8"]]
+ 00c45828 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45828 ["INT_ADD", "register:40f0:8", ["const:c45828:8", "const:4:8"]]
+ 00c45828 ["CALLIND", null, ["register:0:8"]]
- 00c44858 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c44858 ["INT_ADD", "register:40f0:8", ["const:c44858:8", "const:4:8"]]
- 00c44858 ["CALLIND", null, ["register:0:8"]]
+ 00c4584c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4584c ["INT_ADD", "register:40f0:8", ["const:c4584c:8", "const:4:8"]]
+ 00c4584c ["CALLIND", null, ["register:0:8"]]
- 00c44894 ["INT_ADD", "register:40f0:8", ["const:c44894:8", "const:4:8"]]
- 00c44894 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c45888 ["INT_ADD", "register:40f0:8", ["const:c45888:8", "const:4:8"]]
+ 00c45888 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-055a2321561d018bfca3da2702932a74"></a>

### [`00c44b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c44/00c44b4c.md) → [`00c45b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c45/00c45b40.md) FUN_00c45b40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c44b98 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c44b98 ["INT_ADD", "register:40f0:8", ["const:c44b98:8", "const:4:8"]]
- 00c44b98 ["CALLIND", null, ["register:0:8"]]
+ 00c45b8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45b8c ["INT_ADD", "register:40f0:8", ["const:c45b8c:8", "const:4:8"]]
+ 00c45b8c ["CALLIND", null, ["register:0:8"]]
- 00c44bbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c44bbc ["INT_ADD", "register:40f0:8", ["const:c44bbc:8", "const:4:8"]]
- 00c44bbc ["CALLIND", null, ["register:0:8"]]
+ 00c45bb0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45bb0 ["INT_ADD", "register:40f0:8", ["const:c45bb0:8", "const:4:8"]]
+ 00c45bb0 ["CALLIND", null, ["register:0:8"]]
- 00c44c00 ["INT_ADD", "register:40f0:8", ["const:c44c00:8", "const:4:8"]]
- 00c44c00 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c45bf4 ["INT_ADD", "register:40f0:8", ["const:c45bf4:8", "const:4:8"]]
+ 00c45bf4 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-b5860e11ef53db129bea55e65d483c98"></a>

### [`00c44e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c44/00c44e80.md) → [`00c45e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c45/00c45e74.md) FUN_00c45e74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c44ed0 ["INT_ADD", "register:40f0:8", ["const:c44ed0:8", "const:4:8"]]
- 00c44ed0 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c45ec4 ["INT_ADD", "register:40f0:8", ["const:c45ec4:8", "const:4:8"]]
+ 00c45ec4 ["CALL", null, ["callee:00c5b140:8"]]
- 00c44f1c ["INT_ADD", "register:40f0:8", ["const:c44f1c:8", "const:4:8"]]
- 00c44f1c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c45f10 ["INT_ADD", "register:40f0:8", ["const:c45f10:8", "const:4:8"]]
+ 00c45f10 ["CALL", null, ["callee:00c5b140:8"]]
- 00c44f7c ["INT_ADD", "register:40f0:8", ["const:c44f7c:8", "const:4:8"]]
- 00c44f7c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c45f70 ["INT_ADD", "register:40f0:8", ["const:c45f70:8", "const:4:8"]]
+ 00c45f70 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-87ff2b41375949f5609fa433adfc9d88"></a>

### [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) → [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) FUN_00c461d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 15件 [`00c44e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c44/00c44e80.md) [`00c455e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c455e8.md) [`00c45714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c45714.md) [`00c48b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48b0c.md) [`00c48f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48f5c.md) · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 15件 [`00c45e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c45/00c45e74.md) [`00c465dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c465dc.md) [`00c46708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c46708.md) [`00c49b00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c49b00.md) [`00c49f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c49f50.md) · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c45270 ["INT_ADD", "register:40f0:8", ["const:c45270:8", "const:4:8"]]
- 00c45270 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c46264 ["INT_ADD", "register:40f0:8", ["const:c46264:8", "const:4:8"]]
+ 00c46264 ["CALL", null, ["callee:00c5b140:8"]]
- 00c452c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c452c0 ["INT_ADD", "register:40f0:8", ["const:c452c0:8", "const:4:8"]]
- 00c452c0 ["CALLIND", null, ["register:0:8"]]
+ 00c462b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c462b4 ["INT_ADD", "register:40f0:8", ["const:c462b4:8", "const:4:8"]]
+ 00c462b4 ["CALLIND", null, ["register:0:8"]]
- 00c452e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c452e4 ["INT_ADD", "register:40f0:8", ["const:c452e4:8", "const:4:8"]]
- 00c452e4 ["CALLIND", null, ["register:0:8"]]
+ 00c462d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c462d8 ["INT_ADD", "register:40f0:8", ["const:c462d8:8", "const:4:8"]]
+ 00c462d8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a566afa6ec7f7c022e5c93297f444b03"></a>

### [`00c45410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c45410.md) → [`00c46404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c46404.md) FUN_00c46404

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4545c ["INT_ADD", "register:40f0:8", ["const:c4545c:8", "const:4:8"]]
- 00c4545c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c46450 ["INT_ADD", "register:40f0:8", ["const:c46450:8", "const:4:8"]]
+ 00c46450 ["CALL", null, ["callee:00c5b140:8"]]
- 00c454a8 ["INT_ADD", "register:40f0:8", ["const:c454a8:8", "const:4:8"]]
- 00c454a8 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4649c ["INT_ADD", "register:40f0:8", ["const:c4649c:8", "const:4:8"]]
+ 00c4649c ["CALL", null, ["callee:00c5b140:8"]]
- 00c4550c ["INT_ADD", "register:40f0:8", ["const:c4550c:8", "const:4:8"]]
- 00c4550c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c46500 ["INT_ADD", "register:40f0:8", ["const:c46500:8", "const:4:8"]]
+ 00c46500 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-0adc48451247e8d92e47011f7ea59424"></a>

### [`00c455e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c455e8.md) → [`00c465dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c465dc.md) FUN_00c465dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c45614 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c45614 ["INT_ADD", "register:40f0:8", ["const:c45614:8", "const:4:8"]]
- 00c45614 ["CALLIND", null, ["register:0:8"]]
+ 00c46608 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c46608 ["INT_ADD", "register:40f0:8", ["const:c46608:8", "const:4:8"]]
+ 00c46608 ["CALLIND", null, ["register:0:8"]]
- 00c45638 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c45638 ["INT_ADD", "register:40f0:8", ["const:c45638:8", "const:4:8"]]
- 00c45638 ["CALLIND", null, ["register:0:8"]]
+ 00c4662c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4662c ["INT_ADD", "register:40f0:8", ["const:c4662c:8", "const:4:8"]]
+ 00c4662c ["CALLIND", null, ["register:0:8"]]
- 00c45670 ["INT_ADD", "register:40f0:8", ["const:c45670:8", "const:4:8"]]
- 00c45670 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c46664 ["INT_ADD", "register:40f0:8", ["const:c46664:8", "const:4:8"]]
+ 00c46664 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-96009f4b29b9c6c4e13ac9c4623bdbe0"></a>

### [`00c45714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c45714.md) → [`00c46708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c46708.md) FUN_00c46708

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c45764 ["INT_ADD", "register:40f0:8", ["const:c45764:8", "const:4:8"]]
- 00c45764 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c46758 ["INT_ADD", "register:40f0:8", ["const:c46758:8", "const:4:8"]]
+ 00c46758 ["CALL", null, ["callee:00c5b140:8"]]
- 00c45798 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c45798 ["INT_ADD", "register:40f0:8", ["const:c45798:8", "const:4:8"]]
- 00c45798 ["CALLIND", null, ["register:0:8"]]
+ 00c4678c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4678c ["INT_ADD", "register:40f0:8", ["const:c4678c:8", "const:4:8"]]
+ 00c4678c ["CALLIND", null, ["register:0:8"]]
- 00c457bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c457bc ["INT_ADD", "register:40f0:8", ["const:c457bc:8", "const:4:8"]]
- 00c457bc ["CALLIND", null, ["register:0:8"]]
+ 00c467b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c467b0 ["INT_ADD", "register:40f0:8", ["const:c467b0:8", "const:4:8"]]
+ 00c467b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0ff3a7f5cd7894860ba82d3caeed6a1e"></a>

### [`00c458f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c458f4.md) → [`00c468e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c468e8.md) FUN_00c468e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4593c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4593c ["INT_ADD", "register:40f0:8", ["const:c4593c:8", "const:4:8"]]
- 00c4593c ["CALLIND", null, ["register:0:8"]]
+ 00c46930 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c46930 ["INT_ADD", "register:40f0:8", ["const:c46930:8", "const:4:8"]]
+ 00c46930 ["CALLIND", null, ["register:0:8"]]
- 00c45960 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c45960 ["INT_ADD", "register:40f0:8", ["const:c45960:8", "const:4:8"]]
- 00c45960 ["CALLIND", null, ["register:0:8"]]
+ 00c46954 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c46954 ["INT_ADD", "register:40f0:8", ["const:c46954:8", "const:4:8"]]
+ 00c46954 ["CALLIND", null, ["register:0:8"]]
- 00c4599c ["INT_ADD", "register:40f0:8", ["const:c4599c:8", "const:4:8"]]
- 00c4599c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c46990 ["INT_ADD", "register:40f0:8", ["const:c46990:8", "const:4:8"]]
+ 00c46990 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-67f1678a39e6f82253d2074da8e93acf"></a>

### [`00c45da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c45da0.md) → [`00c46d94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c46d94.md) FUN_00c46d94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c45df4 ["INT_ADD", "register:40f0:8", ["const:c45df4:8", "const:4:8"]]
- 00c45df4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c46de8 ["INT_ADD", "register:40f0:8", ["const:c46de8:8", "const:4:8"]]
+ 00c46de8 ["CALL", null, ["callee:00c5b140:8"]]
- 00c45e10 ["INT_ADD", "register:40f0:8", ["const:c45e10:8", "const:4:8"]]
- 00c45e10 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c46e04 ["INT_ADD", "register:40f0:8", ["const:c46e04:8", "const:4:8"]]
+ 00c46e04 ["CALL", null, ["callee:00c590a0:8"]]
- 00c45e50 ["INT_ADD", "register:40f0:8", ["const:c45e50:8", "const:4:8"]]
- 00c45e50 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c46e44 ["INT_ADD", "register:40f0:8", ["const:c46e44:8", "const:4:8"]]
+ 00c46e44 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-0337dfa5611da955fbfae7a52c863d05"></a>

### [`00c460e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c46/00c460e4.md) → [`00c470d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c47/00c470d8.md) FUN_00c470d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c46138 ["INT_ADD", "register:40f0:8", ["const:c46138:8", "const:4:8"]]
- 00c46138 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4712c ["INT_ADD", "register:40f0:8", ["const:c4712c:8", "const:4:8"]]
+ 00c4712c ["CALL", null, ["callee:00c5b140:8"]]
- 00c46154 ["INT_ADD", "register:40f0:8", ["const:c46154:8", "const:4:8"]]
- 00c46154 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c47148 ["INT_ADD", "register:40f0:8", ["const:c47148:8", "const:4:8"]]
+ 00c47148 ["CALL", null, ["callee:00c590a0:8"]]
- 00c46198 ["INT_ADD", "register:40f0:8", ["const:c46198:8", "const:4:8"]]
- 00c46198 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4718c ["INT_ADD", "register:40f0:8", ["const:c4718c:8", "const:4:8"]]
+ 00c4718c ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-91f3415e6c362b5556588888051ae0f1"></a>

### [`00c46e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c46/00c46e88.md) → [`00c47e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c47/00c47e7c.md) FUN_00c47e7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c46ee8 ["INT_ADD", "register:40f0:8", ["const:c46ee8:8", "const:4:8"]]
- 00c46ee8 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c47edc ["INT_ADD", "register:40f0:8", ["const:c47edc:8", "const:4:8"]]
+ 00c47edc ["CALL", null, ["callee:00c5b140:8"]]
- 00c46f40 ["INT_ADD", "register:40f0:8", ["const:c46f40:8", "const:4:8"]]
- 00c46f40 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c47f34 ["INT_ADD", "register:40f0:8", ["const:c47f34:8", "const:4:8"]]
+ 00c47f34 ["CALL", null, ["callee:00c5b140:8"]]
- 00c46f5c ["INT_ADD", "register:40f0:8", ["const:c46f5c:8", "const:4:8"]]
- 00c46f5c ["CALL", null, ["callee:00c590a0:8"]]
+ 00c47f50 ["INT_ADD", "register:40f0:8", ["const:c47f50:8", "const:4:8"]]
+ 00c47f50 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-650702321e3ae145f5524ee73eb3f1bf"></a>

### [`00c477bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c47/00c477bc.md) → [`00c487b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c48/00c487b0.md) FUN_00c487b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c47800 ["INT_ADD", "register:40f0:8", ["const:c47800:8", "const:4:8"]]
- 00c47800 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c487f4 ["INT_ADD", "register:40f0:8", ["const:c487f4:8", "const:4:8"]]
+ 00c487f4 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4783c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4783c ["INT_ADD", "register:40f0:8", ["const:c4783c:8", "const:4:8"]]
- 00c4783c ["CALLIND", null, ["register:0:8"]]
+ 00c48830 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c48830 ["INT_ADD", "register:40f0:8", ["const:c48830:8", "const:4:8"]]
+ 00c48830 ["CALLIND", null, ["register:0:8"]]
- 00c47860 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c47860 ["INT_ADD", "register:40f0:8", ["const:c47860:8", "const:4:8"]]
- 00c47860 ["CALLIND", null, ["register:0:8"]]
+ 00c48854 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c48854 ["INT_ADD", "register:40f0:8", ["const:c48854:8", "const:4:8"]]
+ 00c48854 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-93c2951e4320b77d4306ee51f557f467"></a>

### [`00c48398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48398.md) → [`00c4938c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c4938c.md) FUN_00c4938c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c483e0 ["INT_ADD", "register:40f0:8", ["const:c483e0:8", "const:4:8"]]
- 00c483e0 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c493d4 ["INT_ADD", "register:40f0:8", ["const:c493d4:8", "const:4:8"]]
+ 00c493d4 ["CALL", null, ["callee:00c5b140:8"]]
- 00c48448 ["INT_ADD", "register:40f0:8", ["const:c48448:8", "const:4:8"]]
- 00c48448 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4943c ["INT_ADD", "register:40f0:8", ["const:c4943c:8", "const:4:8"]]
+ 00c4943c ["CALL", null, ["callee:00c5b140:8"]]
- 00c48464 ["INT_ADD", "register:40f0:8", ["const:c48464:8", "const:4:8"]]
- 00c48464 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c49458 ["INT_ADD", "register:40f0:8", ["const:c49458:8", "const:4:8"]]
+ 00c49458 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-35f65e32a5b02519e14a50ba542478f4"></a>

### [`00c48588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48588.md) → [`00c4957c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c4957c.md) FUN_00c4957c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c485f4 ["INT_ADD", "register:40f0:8", ["const:c485f4:8", "const:4:8"]]
- 00c485f4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c495e8 ["INT_ADD", "register:40f0:8", ["const:c495e8:8", "const:4:8"]]
+ 00c495e8 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4864c ["INT_ADD", "register:40f0:8", ["const:c4864c:8", "const:4:8"]]
- 00c4864c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c49640 ["INT_ADD", "register:40f0:8", ["const:c49640:8", "const:4:8"]]
+ 00c49640 ["CALL", null, ["callee:00c5b140:8"]]
- 00c486ac ["INT_ADD", "register:40f0:8", ["const:c486ac:8", "const:4:8"]]
- 00c486ac ["CALL", null, ["callee:00c5b140:8"]]
+ 00c496a0 ["INT_ADD", "register:40f0:8", ["const:c496a0:8", "const:4:8"]]
+ 00c496a0 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-35782ea424ec046c49168b8cacaea507"></a>

### [`00c48844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48844.md) → [`00c49838`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c49838.md) FUN_00c49838

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48868 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48868 ["INT_ADD", "register:40f0:8", ["const:c48868:8", "const:4:8"]]
- 00c48868 ["CALLIND", null, ["register:0:8"]]
+ 00c4985c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4985c ["INT_ADD", "register:40f0:8", ["const:c4985c:8", "const:4:8"]]
+ 00c4985c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ee5b61b588f336be16bfa30d520c4c7e"></a>

### [`00c488b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c488b4.md) → [`00c498a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c498a8.md) FUN_00c498a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c488d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c488d8 ["INT_ADD", "register:40f0:8", ["const:c488d8:8", "const:4:8"]]
- 00c488d8 ["CALLIND", null, ["register:0:8"]]
+ 00c498cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c498cc ["INT_ADD", "register:40f0:8", ["const:c498cc:8", "const:4:8"]]
+ 00c498cc ["CALLIND", null, ["register:0:8"]]
- 00c488fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c488fc ["INT_ADD", "register:40f0:8", ["const:c488fc:8", "const:4:8"]]
- 00c488fc ["CALLIND", null, ["register:0:8"]]
+ 00c498f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c498f0 ["INT_ADD", "register:40f0:8", ["const:c498f0:8", "const:4:8"]]
+ 00c498f0 ["CALLIND", null, ["register:0:8"]]
- 00c48928 ["INT_ADD", "register:40f0:8", ["const:c48928:8", "const:4:8"]]
- 00c48928 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4991c ["INT_ADD", "register:40f0:8", ["const:c4991c:8", "const:4:8"]]
+ 00c4991c ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-3c1ad174e82eeca814a2743cb1bb7b97"></a>

### [`00c489d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c489d0.md) → [`00c499c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c499c4.md) FUN_00c499c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c489f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c489f4 ["INT_ADD", "register:40f0:8", ["const:c489f4:8", "const:4:8"]]
- 00c489f4 ["CALLIND", null, ["register:0:8"]]
+ 00c499e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c499e8 ["INT_ADD", "register:40f0:8", ["const:c499e8:8", "const:4:8"]]
+ 00c499e8 ["CALLIND", null, ["register:0:8"]]
- 00c48a18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48a18 ["INT_ADD", "register:40f0:8", ["const:c48a18:8", "const:4:8"]]
- 00c48a18 ["CALLIND", null, ["register:0:8"]]
+ 00c49a0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c49a0c ["INT_ADD", "register:40f0:8", ["const:c49a0c:8", "const:4:8"]]
+ 00c49a0c ["CALLIND", null, ["register:0:8"]]
- 00c48a54 ["INT_ADD", "register:40f0:8", ["const:c48a54:8", "const:4:8"]]
- 00c48a54 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c49a48 ["INT_ADD", "register:40f0:8", ["const:c49a48:8", "const:4:8"]]
+ 00c49a48 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-9accc69bb7eb466814b952c5c0ec6f60"></a>

### [`00c48a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48a8c.md) → [`00c49a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c49a80.md) FUN_00c49a80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48ab8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48ab8 ["INT_ADD", "register:40f0:8", ["const:c48ab8:8", "const:4:8"]]
- 00c48ab8 ["CALLIND", null, ["register:0:8"]]
+ 00c49aac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c49aac ["INT_ADD", "register:40f0:8", ["const:c49aac:8", "const:4:8"]]
+ 00c49aac ["CALLIND", null, ["register:0:8"]]
- 00c48adc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48adc ["INT_ADD", "register:40f0:8", ["const:c48adc:8", "const:4:8"]]
- 00c48adc ["CALLIND", null, ["register:0:8"]]
+ 00c49ad0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c49ad0 ["INT_ADD", "register:40f0:8", ["const:c49ad0:8", "const:4:8"]]
+ 00c49ad0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2e9ee7f65e9aa144cb02ec523fad8900"></a>

### [`00c48d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48d50.md) → [`00c49d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c49d44.md) FUN_00c49d44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48d70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48d70 ["INT_ADD", "register:40f0:8", ["const:c48d70:8", "const:4:8"]]
- 00c48d70 ["CALLIND", null, ["register:0:8"]]
+ 00c49d64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c49d64 ["INT_ADD", "register:40f0:8", ["const:c49d64:8", "const:4:8"]]
+ 00c49d64 ["CALLIND", null, ["register:0:8"]]
- 00c48d9c ["INT_ADD", "register:40f0:8", ["const:c48d9c:8", "const:4:8"]]
- 00c48d9c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c49d90 ["INT_ADD", "register:40f0:8", ["const:c49d90:8", "const:4:8"]]
+ 00c49d90 ["CALL", null, ["callee:00c5b140:8"]]
- 00c48ddc ["INT_ADD", "register:40f0:8", ["const:c48ddc:8", "const:4:8"]]
- 00c48ddc ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c49dd0 ["INT_ADD", "register:40f0:8", ["const:c49dd0:8", "const:4:8"]]
+ 00c49dd0 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-f00e16fd8ea47ff561d359e8580d4469"></a>

### [`00c48dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48dfc.md) → [`00c49df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c49df0.md) FUN_00c49df0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c48f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48f5c.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c49f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c49f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48e44 ["INT_ADD", "register:40f0:8", ["const:c48e44:8", "const:4:8"]]
- 00c48e44 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c49e38 ["INT_ADD", "register:40f0:8", ["const:c49e38:8", "const:4:8"]]
+ 00c49e38 ["CALL", null, ["callee:00c5b140:8"]]
- 00c48eb4 ["INT_ADD", "register:40f0:8", ["const:c48eb4:8", "const:4:8"]]
- 00c48eb4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c49ea8 ["INT_ADD", "register:40f0:8", ["const:c49ea8:8", "const:4:8"]]
+ 00c49ea8 ["CALL", null, ["callee:00c5b140:8"]]
- 00c48ed0 ["INT_ADD", "register:40f0:8", ["const:c48ed0:8", "const:4:8"]]
- 00c48ed0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c49ec4 ["INT_ADD", "register:40f0:8", ["const:c49ec4:8", "const:4:8"]]
+ 00c49ec4 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-030566fd9cf6913c061967aa90109092"></a>

### [`00c492bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c492bc.md) → [`00c4a2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4a/00c4a2b0.md) FUN_00c4a2b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c48f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48f5c.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c49f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c49/00c49f50.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c49300 ["INT_ADD", "register:40f0:8", ["const:c49300:8", "const:4:8"]]
- 00c49300 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4a2f4 ["INT_ADD", "register:40f0:8", ["const:c4a2f4:8", "const:4:8"]]
+ 00c4a2f4 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4933c ["INT_ADD", "register:40f0:8", ["const:c4933c:8", "const:4:8"]]
- 00c4933c ["CALL", null, ["callee:00c49f50:8"]]
+ 00c4a330 ["INT_ADD", "register:40f0:8", ["const:c4a330:8", "const:4:8"]]
+ 00c4a330 ["CALL", null, ["callee:00c49f50:8"]]
- 00c4936c ["INT_ADD", "register:40f0:8", ["const:c4936c:8", "const:4:8"]]
- 00c4936c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4a360 ["INT_ADD", "register:40f0:8", ["const:c4a360:8", "const:4:8"]]
+ 00c4a360 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-11c6f3e548907cfaf65e463e632cd7e1"></a>

### [`00c493c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c493c0.md) → [`00c4a3b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4a/00c4a3b4.md) FUN_00c4a3b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c49410 ["INT_ADD", "register:40f0:8", ["const:c49410:8", "const:4:8"]]
- 00c49410 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4a404 ["INT_ADD", "register:40f0:8", ["const:c4a404:8", "const:4:8"]]
+ 00c4a404 ["CALL", null, ["callee:00c5b140:8"]]
- 00c49444 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c49444 ["INT_ADD", "register:40f0:8", ["const:c49444:8", "const:4:8"]]
- 00c49444 ["CALLIND", null, ["register:0:8"]]
+ 00c4a438 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a438 ["INT_ADD", "register:40f0:8", ["const:c4a438:8", "const:4:8"]]
+ 00c4a438 ["CALLIND", null, ["register:0:8"]]
- 00c49468 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c49468 ["INT_ADD", "register:40f0:8", ["const:c49468:8", "const:4:8"]]
- 00c49468 ["CALLIND", null, ["register:0:8"]]
+ 00c4a45c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a45c ["INT_ADD", "register:40f0:8", ["const:c4a45c:8", "const:4:8"]]
+ 00c4a45c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-931d8302f8e95a700bede2fc837170fd"></a>

### [`00c49698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c49698.md) → [`00c4a68c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4a/00c4a68c.md) FUN_00c4a68c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c496e0 ["INT_ADD", "register:40f0:8", ["const:c496e0:8", "const:4:8"]]
- 00c496e0 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4a6d4 ["INT_ADD", "register:40f0:8", ["const:c4a6d4:8", "const:4:8"]]
+ 00c4a6d4 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4973c ["INT_ADD", "register:40f0:8", ["const:c4973c:8", "const:4:8"]]
- 00c4973c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4a730 ["INT_ADD", "register:40f0:8", ["const:c4a730:8", "const:4:8"]]
+ 00c4a730 ["CALL", null, ["callee:00c5b140:8"]]
- 00c49758 ["INT_ADD", "register:40f0:8", ["const:c49758:8", "const:4:8"]]
- 00c49758 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c4a74c ["INT_ADD", "register:40f0:8", ["const:c4a74c:8", "const:4:8"]]
+ 00c4a74c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-909d05d7df6bccc409cf24e57e8c9e9c"></a>

### [`00c49f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c49f10.md) → [`00c4af04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4a/00c4af04.md) FUN_00c4af04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c4978c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c4978c.md) [`00c4b450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4b450.md) · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 2件 [`00c4a780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4a/00c4a780.md) [`00c4c444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4c/00c4c444.md) · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c49f54 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c49f54 ["INT_ADD", "register:40f0:8", ["const:c49f54:8", "const:4:8"]]
- 00c49f54 ["CALLIND", null, ["register:0:8"]]
+ 00c4af48 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4af48 ["INT_ADD", "register:40f0:8", ["const:c4af48:8", "const:4:8"]]
+ 00c4af48 ["CALLIND", null, ["register:0:8"]]
- 00c49f78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c49f78 ["INT_ADD", "register:40f0:8", ["const:c49f78:8", "const:4:8"]]
- 00c49f78 ["CALLIND", null, ["register:0:8"]]
+ 00c4af6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4af6c ["INT_ADD", "register:40f0:8", ["const:c4af6c:8", "const:4:8"]]
+ 00c4af6c ["CALLIND", null, ["register:0:8"]]
- 00c49fd4 ["INT_ADD", "register:40f0:8", ["const:c49fd4:8", "const:4:8"]]
- 00c49fd4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4afc8 ["INT_ADD", "register:40f0:8", ["const:c4afc8:8", "const:4:8"]]
+ 00c4afc8 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-232dbd9485cf18b17b36806c90922796"></a>

### [`00c4a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4a0d0.md) → [`00c4b0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4b/00c4b0c4.md) FUN_00c4b0c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4a11c ["INT_ADD", "register:40f0:8", ["const:c4a11c:8", "const:4:8"]]
- 00c4a11c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4b110 ["INT_ADD", "register:40f0:8", ["const:c4b110:8", "const:4:8"]]
+ 00c4b110 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4a150 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a150 ["INT_ADD", "register:40f0:8", ["const:c4a150:8", "const:4:8"]]
- 00c4a150 ["CALLIND", null, ["register:0:8"]]
+ 00c4b144 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b144 ["INT_ADD", "register:40f0:8", ["const:c4b144:8", "const:4:8"]]
+ 00c4b144 ["CALLIND", null, ["register:0:8"]]
- 00c4a174 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a174 ["INT_ADD", "register:40f0:8", ["const:c4a174:8", "const:4:8"]]
- 00c4a174 ["CALLIND", null, ["register:0:8"]]
+ 00c4b168 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b168 ["INT_ADD", "register:40f0:8", ["const:c4b168:8", "const:4:8"]]
+ 00c4b168 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a3d95c140f658818cb5693b9d27fcf26"></a>

### [`00c4a31c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4a31c.md) → [`00c4b310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4b/00c4b310.md) FUN_00c4b310

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4a364 ["INT_ADD", "register:40f0:8", ["const:c4a364:8", "const:4:8"]]
- 00c4a364 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4b358 ["INT_ADD", "register:40f0:8", ["const:c4b358:8", "const:4:8"]]
+ 00c4b358 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4a39c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a39c ["INT_ADD", "register:40f0:8", ["const:c4a39c:8", "const:4:8"]]
- 00c4a39c ["CALLIND", null, ["register:0:8"]]
+ 00c4b390 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b390 ["INT_ADD", "register:40f0:8", ["const:c4b390:8", "const:4:8"]]
+ 00c4b390 ["CALLIND", null, ["register:0:8"]]
- 00c4a3c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a3c0 ["INT_ADD", "register:40f0:8", ["const:c4a3c0:8", "const:4:8"]]
- 00c4a3c0 ["CALLIND", null, ["register:0:8"]]
+ 00c4b3b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b3b4 ["INT_ADD", "register:40f0:8", ["const:c4b3b4:8", "const:4:8"]]
+ 00c4b3b4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fdfc5735cbcd5dc410ef0eab37236daf"></a>

### [`00c4a588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4a588.md) → [`00c4b57c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4b/00c4b57c.md) FUN_00c4b57c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4a5bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a5bc ["INT_ADD", "register:40f0:8", ["const:c4a5bc:8", "const:4:8"]]
- 00c4a5bc ["CALLIND", null, ["register:0:8"]]
+ 00c4b5b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b5b0 ["INT_ADD", "register:40f0:8", ["const:c4b5b0:8", "const:4:8"]]
+ 00c4b5b0 ["CALLIND", null, ["register:0:8"]]
- 00c4a5e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a5e0 ["INT_ADD", "register:40f0:8", ["const:c4a5e0:8", "const:4:8"]]
- 00c4a5e0 ["CALLIND", null, ["register:0:8"]]
+ 00c4b5d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b5d4 ["INT_ADD", "register:40f0:8", ["const:c4b5d4:8", "const:4:8"]]
+ 00c4b5d4 ["CALLIND", null, ["register:0:8"]]
- 00c4a60c ["INT_ADD", "register:40f0:8", ["const:c4a60c:8", "const:4:8"]]
- 00c4a60c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4b600 ["INT_ADD", "register:40f0:8", ["const:c4b600:8", "const:4:8"]]
+ 00c4b600 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-aa7eca7c79bc5b3521bd6f97ba631429"></a>

### [`00c4a6a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4a6a4.md) → [`00c4b698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4b/00c4b698.md) FUN_00c4b698

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4a6f4 ["INT_ADD", "register:40f0:8", ["const:c4a6f4:8", "const:4:8"]]
- 00c4a6f4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4b6e8 ["INT_ADD", "register:40f0:8", ["const:c4b6e8:8", "const:4:8"]]
+ 00c4b6e8 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4a728 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a728 ["INT_ADD", "register:40f0:8", ["const:c4a728:8", "const:4:8"]]
- 00c4a728 ["CALLIND", null, ["register:0:8"]]
+ 00c4b71c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b71c ["INT_ADD", "register:40f0:8", ["const:c4b71c:8", "const:4:8"]]
+ 00c4b71c ["CALLIND", null, ["register:0:8"]]
- 00c4a74c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a74c ["INT_ADD", "register:40f0:8", ["const:c4a74c:8", "const:4:8"]]
- 00c4a74c ["CALLIND", null, ["register:0:8"]]
+ 00c4b740 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b740 ["INT_ADD", "register:40f0:8", ["const:c4b740:8", "const:4:8"]]
+ 00c4b740 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e804ec03021290d2874bbdefc905901c"></a>

### [`00c4ade8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4ade8.md) → [`00c4bddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4b/00c4bddc.md) FUN_00c4bddc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4ae30 ["INT_ADD", "register:40f0:8", ["const:c4ae30:8", "const:4:8"]]
- 00c4ae30 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4be24 ["INT_ADD", "register:40f0:8", ["const:c4be24:8", "const:4:8"]]
+ 00c4be24 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4ae94 ["INT_ADD", "register:40f0:8", ["const:c4ae94:8", "const:4:8"]]
- 00c4ae94 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4be88 ["INT_ADD", "register:40f0:8", ["const:c4be88:8", "const:4:8"]]
+ 00c4be88 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4aee8 ["INT_ADD", "register:40f0:8", ["const:c4aee8:8", "const:4:8"]]
- 00c4aee8 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4bedc ["INT_ADD", "register:40f0:8", ["const:c4bedc:8", "const:4:8"]]
+ 00c4bedc ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-8564339ce1d29cd0033553a811d2606e"></a>

### [`00c4b5e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4b5e4.md) → [`00c4c5d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4c/00c4c5d8.md) FUN_00c4c5d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4b628 ["INT_ADD", "register:40f0:8", ["const:c4b628:8", "const:4:8"]]
- 00c4b628 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4c61c ["INT_ADD", "register:40f0:8", ["const:c4c61c:8", "const:4:8"]]
+ 00c4c61c ["CALL", null, ["callee:00c5b140:8"]]
- 00c4b674 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4b674 ["INT_ADD", "register:40f0:8", ["const:c4b674:8", "const:4:8"]]
- 00c4b674 ["CALLIND", null, ["register:0:8"]]
+ 00c4c668 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4c668 ["INT_ADD", "register:40f0:8", ["const:c4c668:8", "const:4:8"]]
+ 00c4c668 ["CALLIND", null, ["register:0:8"]]
- 00c4b6b8 ["INT_ADD", "register:40f0:8", ["const:c4b6b8:8", "const:4:8"]]
- 00c4b6b8 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c4c6ac ["INT_ADD", "register:40f0:8", ["const:c4c6ac:8", "const:4:8"]]
+ 00c4c6ac ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-e51d717c49d9428db81d9925afda26e4"></a>

### [`00c4b6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4b6c4.md) → [`00c4c6b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4c/00c4c6b8.md) FUN_00c4c6b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00c43708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c43/00c43708.md) [`00c4b848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4b848.md) · 呼出先 8件 [`00c3ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3ebd8.md) [`00c3ef9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3ef9c.md) [`00c3f0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3f0d0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`00c446fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c44/00c446fc.md) [`00c4c83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4c/00c4c83c.md) · 呼出先 8件 [`00c3fbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c3f/00c3fbcc.md) [`00c3ff90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c3f/00c3ff90.md) [`00c400c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c40/00c400c4.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4b700 ["INT_ADD", "register:40f0:8", ["const:c4b700:8", "const:4:8"]]
- 00c4b700 ["CALL", null, ["callee:00c3fbcc:8"]]
+ 00c4c6f4 ["INT_ADD", "register:40f0:8", ["const:c4c6f4:8", "const:4:8"]]
+ 00c4c6f4 ["CALL", null, ["callee:00c3fbcc:8"]]
- 00c4b734 ["INT_ADD", "register:40f0:8", ["const:c4b734:8", "const:4:8"]]
- 00c4b734 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4c728 ["INT_ADD", "register:40f0:8", ["const:c4c728:8", "const:4:8"]]
+ 00c4c728 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4b744 ["INT_ADD", "register:40f0:8", ["const:c4b744:8", "const:4:8"]]
- 00c4b744 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c4c738 ["INT_ADD", "register:40f0:8", ["const:c4c738:8", "const:4:8"]]
+ 00c4c738 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-2d280d831599fb3a7c8d4dc0a08a0448"></a>

### [`00c4bad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4bad8.md) → [`00c4cacc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4c/00c4cacc.md) FUN_00c4cacc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4bb04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4bb04 ["INT_ADD", "register:40f0:8", ["const:c4bb04:8", "const:4:8"]]
- 00c4bb04 ["CALLIND", null, ["register:0:8"]]
+ 00c4caf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4caf8 ["INT_ADD", "register:40f0:8", ["const:c4caf8:8", "const:4:8"]]
+ 00c4caf8 ["CALLIND", null, ["register:0:8"]]
- 00c4bb28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4bb28 ["INT_ADD", "register:40f0:8", ["const:c4bb28:8", "const:4:8"]]
- 00c4bb28 ["CALLIND", null, ["register:0:8"]]
+ 00c4cb1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4cb1c ["INT_ADD", "register:40f0:8", ["const:c4cb1c:8", "const:4:8"]]
+ 00c4cb1c ["CALLIND", null, ["register:0:8"]]
- 00c4bb54 ["INT_ADD", "register:40f0:8", ["const:c4bb54:8", "const:4:8"]]
- 00c4bb54 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4cb48 ["INT_ADD", "register:40f0:8", ["const:c4cb48:8", "const:4:8"]]
+ 00c4cb48 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-eab69ea233d6a1f6cd59f8c313e0e8be"></a>

### [`00c4bf78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4bf78.md) → [`00c4cf6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4c/00c4cf6c.md) FUN_00c4cf6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4bfc0 ["INT_ADD", "register:40f0:8", ["const:c4bfc0:8", "const:4:8"]]
- 00c4bfc0 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4cfb4 ["INT_ADD", "register:40f0:8", ["const:c4cfb4:8", "const:4:8"]]
+ 00c4cfb4 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4c008 ["INT_ADD", "register:40f0:8", ["const:c4c008:8", "const:4:8"]]
- 00c4c008 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c4cffc ["INT_ADD", "register:40f0:8", ["const:c4cffc:8", "const:4:8"]]
+ 00c4cffc ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-1abeedf7acaf23c4dcb31e16951d4d64"></a>

### [`00c4c1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4c1e0.md) → [`00c4d1d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4d/00c4d1d4.md) FUN_00c4d1d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4c224 ["INT_ADD", "register:40f0:8", ["const:c4c224:8", "const:4:8"]]
- 00c4c224 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4d218 ["INT_ADD", "register:40f0:8", ["const:c4d218:8", "const:4:8"]]
+ 00c4d218 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4c260 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4c260 ["INT_ADD", "register:40f0:8", ["const:c4c260:8", "const:4:8"]]
- 00c4c260 ["CALLIND", null, ["register:0:8"]]
+ 00c4d254 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d254 ["INT_ADD", "register:40f0:8", ["const:c4d254:8", "const:4:8"]]
+ 00c4d254 ["CALLIND", null, ["register:0:8"]]
- 00c4c2a4 ["INT_ADD", "register:40f0:8", ["const:c4c2a4:8", "const:4:8"]]
- 00c4c2a4 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c4d298 ["INT_ADD", "register:40f0:8", ["const:c4d298:8", "const:4:8"]]
+ 00c4d298 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-d6d32289f880775f8ec3799d4b4376d3"></a>

### [`00c4c8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4c8dc.md) → [`00c4d8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4d/00c4d8d0.md) FUN_00c4d8d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c4c2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4c2c4.md) · 呼出先 1件 [`00c3e1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3e1f8.md)
- 新版 呼出元 1件 [`00c4d2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4d/00c4d2b8.md) · 呼出先 1件 [`00c3f1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c3f/00c3f1ec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4c8f8 ["INT_ADD", "register:40f0:8", ["const:c4c8f8:8", "const:4:8"]]
- 00c4c8f8 ["CALL", null, ["callee:00c3f1ec:8"]]
+ 00c4d8ec ["INT_ADD", "register:40f0:8", ["const:c4d8ec:8", "const:4:8"]]
+ 00c4d8ec ["CALL", null, ["callee:00c3f1ec:8"]]
~~~


<a id="compare-3318da12be7924755f3ffd47156ea5e4"></a>

### [`00c4c944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4c944.md) → [`00c4d938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4d/00c4d938.md) FUN_00c4d938

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4c96c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4c96c ["INT_ADD", "register:40f0:8", ["const:c4c96c:8", "const:4:8"]]
- 00c4c96c ["CALLIND", null, ["register:0:8"]]
+ 00c4d960 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d960 ["INT_ADD", "register:40f0:8", ["const:c4d960:8", "const:4:8"]]
+ 00c4d960 ["CALLIND", null, ["register:0:8"]]
- 00c4c998 ["INT_ADD", "register:40f0:8", ["const:c4c998:8", "const:4:8"]]
- 00c4c998 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4d98c ["INT_ADD", "register:40f0:8", ["const:c4d98c:8", "const:4:8"]]
+ 00c4d98c ["CALL", null, ["callee:00c5b140:8"]]
- 00c4ca00 ["INT_ADD", "register:40f0:8", ["const:c4ca00:8", "const:4:8"]]
- 00c4ca00 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4d9f4 ["INT_ADD", "register:40f0:8", ["const:c4d9f4:8", "const:4:8"]]
+ 00c4d9f4 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-634fca6aca29b35cd9aece8c6d79895c"></a>

### [`00c4cab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4cab4.md) → [`00c4daa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4d/00c4daa8.md) FUN_00c4daa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4cb00 ["INT_ADD", "register:40f0:8", ["const:c4cb00:8", "const:4:8"]]
- 00c4cb00 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4daf4 ["INT_ADD", "register:40f0:8", ["const:c4daf4:8", "const:4:8"]]
+ 00c4daf4 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4cb28 ["INT_ADD", "register:40f0:8", ["const:c4cb28:8", "const:4:8"]]
- 00c4cb28 ["CALL", null, ["callee:00c461d4:8"]]
+ 00c4db1c ["INT_ADD", "register:40f0:8", ["const:c4db1c:8", "const:4:8"]]
+ 00c4db1c ["CALL", null, ["callee:00c461d4:8"]]
- 00c4cb60 ["INT_ADD", "register:40f0:8", ["const:c4cb60:8", "const:4:8"]]
- 00c4cb60 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4db54 ["INT_ADD", "register:40f0:8", ["const:c4db54:8", "const:4:8"]]
+ 00c4db54 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-bf1be92cc67ee9338ee0703bdc933527"></a>

### [`00c4cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4cc60.md) → [`00c4dc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4d/00c4dc54.md) FUN_00c4dc54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4ccb0 ["INT_ADD", "register:40f0:8", ["const:c4ccb0:8", "const:4:8"]]
- 00c4ccb0 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4dca4 ["INT_ADD", "register:40f0:8", ["const:c4dca4:8", "const:4:8"]]
+ 00c4dca4 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4cce4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4cce4 ["INT_ADD", "register:40f0:8", ["const:c4cce4:8", "const:4:8"]]
- 00c4cce4 ["CALLIND", null, ["register:0:8"]]
+ 00c4dcd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4dcd8 ["INT_ADD", "register:40f0:8", ["const:c4dcd8:8", "const:4:8"]]
+ 00c4dcd8 ["CALLIND", null, ["register:0:8"]]
- 00c4cd1c ["INT_ADD", "register:40f0:8", ["const:c4cd1c:8", "const:4:8"]]
- 00c4cd1c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4dd10 ["INT_ADD", "register:40f0:8", ["const:c4dd10:8", "const:4:8"]]
+ 00c4dd10 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-754a13a856c577fc2ae004f316f8d61e"></a>

### [`00c4cd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4cd6c.md) → [`00c4dd60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4d/00c4dd60.md) FUN_00c4dd60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4cd98 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4cd98 ["INT_ADD", "register:40f0:8", ["const:c4cd98:8", "const:4:8"]]
- 00c4cd98 ["CALLIND", null, ["register:0:8"]]
+ 00c4dd8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4dd8c ["INT_ADD", "register:40f0:8", ["const:c4dd8c:8", "const:4:8"]]
+ 00c4dd8c ["CALLIND", null, ["register:0:8"]]
- 00c4cdbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4cdbc ["INT_ADD", "register:40f0:8", ["const:c4cdbc:8", "const:4:8"]]
- 00c4cdbc ["CALLIND", null, ["register:0:8"]]
+ 00c4ddb0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4ddb0 ["INT_ADD", "register:40f0:8", ["const:c4ddb0:8", "const:4:8"]]
+ 00c4ddb0 ["CALLIND", null, ["register:0:8"]]
- 00c4cde8 ["INT_ADD", "register:40f0:8", ["const:c4cde8:8", "const:4:8"]]
- 00c4cde8 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4dddc ["INT_ADD", "register:40f0:8", ["const:c4dddc:8", "const:4:8"]]
+ 00c4dddc ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-49d40ff7c3a353d194e53d52630354e5"></a>

### [`00c4cfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4cfbc.md) → [`00c4dfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4d/00c4dfb0.md) FUN_00c4dfb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4cfe8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4cfe8 ["INT_ADD", "register:40f0:8", ["const:c4cfe8:8", "const:4:8"]]
- 00c4cfe8 ["CALLIND", null, ["register:0:8"]]
+ 00c4dfdc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4dfdc ["INT_ADD", "register:40f0:8", ["const:c4dfdc:8", "const:4:8"]]
+ 00c4dfdc ["CALLIND", null, ["register:0:8"]]
- 00c4d00c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d00c ["INT_ADD", "register:40f0:8", ["const:c4d00c:8", "const:4:8"]]
- 00c4d00c ["CALLIND", null, ["register:0:8"]]
+ 00c4e000 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4e000 ["INT_ADD", "register:40f0:8", ["const:c4e000:8", "const:4:8"]]
+ 00c4e000 ["CALLIND", null, ["register:0:8"]]
- 00c4d038 ["INT_ADD", "register:40f0:8", ["const:c4d038:8", "const:4:8"]]
- 00c4d038 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4e02c ["INT_ADD", "register:40f0:8", ["const:c4e02c:8", "const:4:8"]]
+ 00c4e02c ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-2bcc993e0e091cf4f38d22d5cefc3b41"></a>

### [`00c4d2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4d2e0.md) → [`00c4e2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4e/00c4e2d4.md) FUN_00c4e2d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d30c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d30c ["INT_ADD", "register:40f0:8", ["const:c4d30c:8", "const:4:8"]]
- 00c4d30c ["CALLIND", null, ["register:0:8"]]
+ 00c4e300 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4e300 ["INT_ADD", "register:40f0:8", ["const:c4e300:8", "const:4:8"]]
+ 00c4e300 ["CALLIND", null, ["register:0:8"]]
- 00c4d330 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d330 ["INT_ADD", "register:40f0:8", ["const:c4d330:8", "const:4:8"]]
- 00c4d330 ["CALLIND", null, ["register:0:8"]]
+ 00c4e324 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4e324 ["INT_ADD", "register:40f0:8", ["const:c4e324:8", "const:4:8"]]
+ 00c4e324 ["CALLIND", null, ["register:0:8"]]
- 00c4d35c ["INT_ADD", "register:40f0:8", ["const:c4d35c:8", "const:4:8"]]
- 00c4d35c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4e350 ["INT_ADD", "register:40f0:8", ["const:c4e350:8", "const:4:8"]]
+ 00c4e350 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-dde5754fa08c064e40925be3285acb37"></a>

### [`00c4d61c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4d61c.md) → [`00c4e610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4e/00c4e610.md) FUN_00c4e610

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d668 ["INT_ADD", "register:40f0:8", ["const:c4d668:8", "const:4:8"]]
- 00c4d668 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4e65c ["INT_ADD", "register:40f0:8", ["const:c4e65c:8", "const:4:8"]]
+ 00c4e65c ["CALL", null, ["callee:00c5b140:8"]]
- 00c4d694 ["INT_ADD", "register:40f0:8", ["const:c4d694:8", "const:4:8"]]
- 00c4d694 ["CALL", null, ["callee:00c461d4:8"]]
+ 00c4e688 ["INT_ADD", "register:40f0:8", ["const:c4e688:8", "const:4:8"]]
+ 00c4e688 ["CALL", null, ["callee:00c461d4:8"]]
- 00c4d6c0 ["INT_ADD", "register:40f0:8", ["const:c4d6c0:8", "const:4:8"]]
- 00c4d6c0 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4e6b4 ["INT_ADD", "register:40f0:8", ["const:c4e6b4:8", "const:4:8"]]
+ 00c4e6b4 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-80d223a88ed1d954bd767843835bd3ed"></a>

### [`00c4d714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4d714.md) → [`00c4e708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4e/00c4e708.md) FUN_00c4e708

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d740 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d740 ["INT_ADD", "register:40f0:8", ["const:c4d740:8", "const:4:8"]]
- 00c4d740 ["CALLIND", null, ["register:0:8"]]
+ 00c4e734 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4e734 ["INT_ADD", "register:40f0:8", ["const:c4e734:8", "const:4:8"]]
+ 00c4e734 ["CALLIND", null, ["register:0:8"]]
- 00c4d764 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d764 ["INT_ADD", "register:40f0:8", ["const:c4d764:8", "const:4:8"]]
- 00c4d764 ["CALLIND", null, ["register:0:8"]]
+ 00c4e758 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4e758 ["INT_ADD", "register:40f0:8", ["const:c4e758:8", "const:4:8"]]
+ 00c4e758 ["CALLIND", null, ["register:0:8"]]
- 00c4d77c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d77c ["INT_ADD", "register:40f0:8", ["const:c4d77c:8", "const:4:8"]]
- 00c4d77c ["CALLIND", null, ["register:0:8"]]
+ 00c4e770 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4e770 ["INT_ADD", "register:40f0:8", ["const:c4e770:8", "const:4:8"]]
+ 00c4e770 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c3f07e801f29b959b40d0ad15a4b3065"></a>

### [`00c4d960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4d960.md) → [`00c4e954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4e/00c4e954.md) FUN_00c4e954

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d9a4 ["INT_ADD", "register:40f0:8", ["const:c4d9a4:8", "const:4:8"]]
- 00c4d9a4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4e998 ["INT_ADD", "register:40f0:8", ["const:c4e998:8", "const:4:8"]]
+ 00c4e998 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4d9f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d9f0 ["INT_ADD", "register:40f0:8", ["const:c4d9f0:8", "const:4:8"]]
- 00c4d9f0 ["CALLIND", null, ["register:0:8"]]
+ 00c4e9e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4e9e4 ["INT_ADD", "register:40f0:8", ["const:c4e9e4:8", "const:4:8"]]
+ 00c4e9e4 ["CALLIND", null, ["register:0:8"]]
- 00c4da34 ["INT_ADD", "register:40f0:8", ["const:c4da34:8", "const:4:8"]]
- 00c4da34 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c4ea28 ["INT_ADD", "register:40f0:8", ["const:c4ea28:8", "const:4:8"]]
+ 00c4ea28 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-7611371b646198b0c80f7669b73fcad4"></a>

### [`00c4da58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4da58.md) → [`00c4ea4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4e/00c4ea4c.md) FUN_00c4ea4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4da84 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4da84 ["INT_ADD", "register:40f0:8", ["const:c4da84:8", "const:4:8"]]
- 00c4da84 ["CALLIND", null, ["register:0:8"]]
+ 00c4ea78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4ea78 ["INT_ADD", "register:40f0:8", ["const:c4ea78:8", "const:4:8"]]
+ 00c4ea78 ["CALLIND", null, ["register:0:8"]]
- 00c4daa8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4daa8 ["INT_ADD", "register:40f0:8", ["const:c4daa8:8", "const:4:8"]]
- 00c4daa8 ["CALLIND", null, ["register:0:8"]]
+ 00c4ea9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4ea9c ["INT_ADD", "register:40f0:8", ["const:c4ea9c:8", "const:4:8"]]
+ 00c4ea9c ["CALLIND", null, ["register:0:8"]]
- 00c4dae4 ["INT_ADD", "register:40f0:8", ["const:c4dae4:8", "const:4:8"]]
- 00c4dae4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4ead8 ["INT_ADD", "register:40f0:8", ["const:c4ead8:8", "const:4:8"]]
+ 00c4ead8 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-e1aae2ee4a50a47cd3797396a4a3df5c"></a>

### [`00c4df68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4df68.md) → [`00c4ef5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c4e/00c4ef5c.md) FUN_00c4ef5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4df94 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4df94 ["INT_ADD", "register:40f0:8", ["const:c4df94:8", "const:4:8"]]
- 00c4df94 ["CALLIND", null, ["register:0:8"]]
+ 00c4ef88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4ef88 ["INT_ADD", "register:40f0:8", ["const:c4ef88:8", "const:4:8"]]
+ 00c4ef88 ["CALLIND", null, ["register:0:8"]]
- 00c4dfb8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4dfb8 ["INT_ADD", "register:40f0:8", ["const:c4dfb8:8", "const:4:8"]]
- 00c4dfb8 ["CALLIND", null, ["register:0:8"]]
+ 00c4efac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4efac ["INT_ADD", "register:40f0:8", ["const:c4efac:8", "const:4:8"]]
+ 00c4efac ["CALLIND", null, ["register:0:8"]]
- 00c4dfe4 ["INT_ADD", "register:40f0:8", ["const:c4dfe4:8", "const:4:8"]]
- 00c4dfe4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c4efd8 ["INT_ADD", "register:40f0:8", ["const:c4efd8:8", "const:4:8"]]
+ 00c4efd8 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-3b759f629c871c66d3c3c01c0cd82864"></a>

### [`00c4f5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4f5d8.md) → [`00c505cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c50/00c505cc.md) FUN_00c505cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4f61c ["INT_ADD", "register:40f0:8", ["const:c4f61c:8", "const:4:8"]]
- 00c4f61c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c50610 ["INT_ADD", "register:40f0:8", ["const:c50610:8", "const:4:8"]]
+ 00c50610 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4f680 ["INT_ADD", "register:40f0:8", ["const:c4f680:8", "const:4:8"]]
- 00c4f680 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c50674 ["INT_ADD", "register:40f0:8", ["const:c50674:8", "const:4:8"]]
+ 00c50674 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4f6c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4f6c4 ["INT_ADD", "register:40f0:8", ["const:c4f6c4:8", "const:4:8"]]
- 00c4f6c4 ["CALLIND", null, ["register:0:8"]]
+ 00c506b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c506b8 ["INT_ADD", "register:40f0:8", ["const:c506b8:8", "const:4:8"]]
+ 00c506b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e9e5e395ce8307131dfc602a22233bd6"></a>

### [`00c4f850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4f850.md) → [`00c50844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c50/00c50844.md) FUN_00c50844

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c461d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c46/00c461d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4f894 ["INT_ADD", "register:40f0:8", ["const:c4f894:8", "const:4:8"]]
- 00c4f894 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c50888 ["INT_ADD", "register:40f0:8", ["const:c50888:8", "const:4:8"]]
+ 00c50888 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4f8fc ["INT_ADD", "register:40f0:8", ["const:c4f8fc:8", "const:4:8"]]
- 00c4f8fc ["CALL", null, ["callee:00c5b140:8"]]
+ 00c508f0 ["INT_ADD", "register:40f0:8", ["const:c508f0:8", "const:4:8"]]
+ 00c508f0 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4f924 ["INT_ADD", "register:40f0:8", ["const:c4f924:8", "const:4:8"]]
- 00c4f924 ["CALL", null, ["callee:00c461d4:8"]]
+ 00c50918 ["INT_ADD", "register:40f0:8", ["const:c50918:8", "const:4:8"]]
+ 00c50918 ["CALL", null, ["callee:00c461d4:8"]]
~~~


<a id="compare-c78a6f0babaa76b4e41b9d414e745f3c"></a>

### [`00c4f9b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4f9b8.md) → [`00c509ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c50/00c509ac.md) FUN_00c509ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4f9d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4f9d8 ["INT_ADD", "register:40f0:8", ["const:c4f9d8:8", "const:4:8"]]
- 00c4f9d8 ["CALLIND", null, ["register:0:8"]]
+ 00c509cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c509cc ["INT_ADD", "register:40f0:8", ["const:c509cc:8", "const:4:8"]]
+ 00c509cc ["CALLIND", null, ["register:0:8"]]
- 00c4fa04 ["INT_ADD", "register:40f0:8", ["const:c4fa04:8", "const:4:8"]]
- 00c4fa04 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c509f8 ["INT_ADD", "register:40f0:8", ["const:c509f8:8", "const:4:8"]]
+ 00c509f8 ["CALL", null, ["callee:00c5b140:8"]]
- 00c4fa38 ["INT_ADD", "register:40f0:8", ["const:c4fa38:8", "const:4:8"]]
- 00c4fa38 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c50a2c ["INT_ADD", "register:40f0:8", ["const:c50a2c:8", "const:4:8"]]
+ 00c50a2c ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-6ca2dcdd0b0f43c7a1604415920d31f2"></a>

### [`00c4fdd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4fdd8.md) → [`00c50dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c50/00c50dcc.md) FUN_00c50dcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4fe04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4fe04 ["INT_ADD", "register:40f0:8", ["const:c4fe04:8", "const:4:8"]]
- 00c4fe04 ["CALLIND", null, ["register:0:8"]]
+ 00c50df8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c50df8 ["INT_ADD", "register:40f0:8", ["const:c50df8:8", "const:4:8"]]
+ 00c50df8 ["CALLIND", null, ["register:0:8"]]
- 00c4fe28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4fe28 ["INT_ADD", "register:40f0:8", ["const:c4fe28:8", "const:4:8"]]
- 00c4fe28 ["CALLIND", null, ["register:0:8"]]
+ 00c50e1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c50e1c ["INT_ADD", "register:40f0:8", ["const:c50e1c:8", "const:4:8"]]
+ 00c50e1c ["CALLIND", null, ["register:0:8"]]
- 00c4fe54 ["INT_ADD", "register:40f0:8", ["const:c4fe54:8", "const:4:8"]]
- 00c4fe54 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c50e48 ["INT_ADD", "register:40f0:8", ["const:c50e48:8", "const:4:8"]]
+ 00c50e48 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-337abfc68e82cbd1784b18d60734f2c4"></a>

### [`00c4ff4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4ff4c.md) → [`00c50f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c50/00c50f40.md) FUN_00c50f40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4ff78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4ff78 ["INT_ADD", "register:40f0:8", ["const:c4ff78:8", "const:4:8"]]
- 00c4ff78 ["CALLIND", null, ["register:0:8"]]
+ 00c50f6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c50f6c ["INT_ADD", "register:40f0:8", ["const:c50f6c:8", "const:4:8"]]
+ 00c50f6c ["CALLIND", null, ["register:0:8"]]
- 00c4ff9c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4ff9c ["INT_ADD", "register:40f0:8", ["const:c4ff9c:8", "const:4:8"]]
- 00c4ff9c ["CALLIND", null, ["register:0:8"]]
+ 00c50f90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c50f90 ["INT_ADD", "register:40f0:8", ["const:c50f90:8", "const:4:8"]]
+ 00c50f90 ["CALLIND", null, ["register:0:8"]]
- 00c4ffc8 ["INT_ADD", "register:40f0:8", ["const:c4ffc8:8", "const:4:8"]]
- 00c4ffc8 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c50fbc ["INT_ADD", "register:40f0:8", ["const:c50fbc:8", "const:4:8"]]
+ 00c50fbc ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-e53231bcdf13d4176ade3ee5db57e7cd"></a>

### [`00c502e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c502e4.md) → [`00c512d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c51/00c512d8.md) FUN_00c512d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c50338 ["INT_ADD", "register:40f0:8", ["const:c50338:8", "const:4:8"]]
- 00c50338 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c5132c ["INT_ADD", "register:40f0:8", ["const:c5132c:8", "const:4:8"]]
+ 00c5132c ["CALL", null, ["callee:00c5b140:8"]]
- 00c50354 ["INT_ADD", "register:40f0:8", ["const:c50354:8", "const:4:8"]]
- 00c50354 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c51348 ["INT_ADD", "register:40f0:8", ["const:c51348:8", "const:4:8"]]
+ 00c51348 ["CALL", null, ["callee:00c590a0:8"]]
- 00c5038c ["INT_ADD", "register:40f0:8", ["const:c5038c:8", "const:4:8"]]
- 00c5038c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c51380 ["INT_ADD", "register:40f0:8", ["const:c51380:8", "const:4:8"]]
+ 00c51380 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-3b9b7f005e977c1d88ab7e554d47f3fb"></a>

### [`00c50458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c50458.md) → [`00c5144c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c51/00c5144c.md) FUN_00c5144c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5049c ["INT_ADD", "register:40f0:8", ["const:c5049c:8", "const:4:8"]]
- 00c5049c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c51490 ["INT_ADD", "register:40f0:8", ["const:c51490:8", "const:4:8"]]
+ 00c51490 ["CALL", null, ["callee:00c5b140:8"]]
- 00c504e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c504e8 ["INT_ADD", "register:40f0:8", ["const:c504e8:8", "const:4:8"]]
- 00c504e8 ["CALLIND", null, ["register:0:8"]]
+ 00c514dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c514dc ["INT_ADD", "register:40f0:8", ["const:c514dc:8", "const:4:8"]]
+ 00c514dc ["CALLIND", null, ["register:0:8"]]
- 00c5052c ["INT_ADD", "register:40f0:8", ["const:c5052c:8", "const:4:8"]]
- 00c5052c ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c51520 ["INT_ADD", "register:40f0:8", ["const:c51520:8", "const:4:8"]]
+ 00c51520 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-9c82d21a6e1590b7f6f2d9bc94e28ba3"></a>

### [`00c50820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c50820.md) → [`00c51814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c51/00c51814.md) FUN_00c51814

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c50848 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c50848 ["INT_ADD", "register:40f0:8", ["const:c50848:8", "const:4:8"]]
- 00c50848 ["CALLIND", null, ["register:0:8"]]
+ 00c5183c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c5183c ["INT_ADD", "register:40f0:8", ["const:c5183c:8", "const:4:8"]]
+ 00c5183c ["CALLIND", null, ["register:0:8"]]
- 00c50880 ["INT_ADD", "register:40f0:8", ["const:c50880:8", "const:4:8"]]
- 00c50880 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c51874 ["INT_ADD", "register:40f0:8", ["const:c51874:8", "const:4:8"]]
+ 00c51874 ["CALL", null, ["callee:00c5b140:8"]]
- 00c5089c ["INT_ADD", "register:40f0:8", ["const:c5089c:8", "const:4:8"]]
- 00c5089c ["CALL", null, ["callee:00c590a0:8"]]
+ 00c51890 ["INT_ADD", "register:40f0:8", ["const:c51890:8", "const:4:8"]]
+ 00c51890 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-60dab87b3ac7f0eb1869dadb30d07ad6"></a>

### [`00c50b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c50b3c.md) → [`00c51b30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c51/00c51b30.md) FUN_00c51b30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c50b68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c50b68 ["INT_ADD", "register:40f0:8", ["const:c50b68:8", "const:4:8"]]
- 00c50b68 ["CALLIND", null, ["register:0:8"]]
+ 00c51b5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51b5c ["INT_ADD", "register:40f0:8", ["const:c51b5c:8", "const:4:8"]]
+ 00c51b5c ["CALLIND", null, ["register:0:8"]]
- 00c50b8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c50b8c ["INT_ADD", "register:40f0:8", ["const:c50b8c:8", "const:4:8"]]
- 00c50b8c ["CALLIND", null, ["register:0:8"]]
+ 00c51b80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51b80 ["INT_ADD", "register:40f0:8", ["const:c51b80:8", "const:4:8"]]
+ 00c51b80 ["CALLIND", null, ["register:0:8"]]
- 00c50bb8 ["INT_ADD", "register:40f0:8", ["const:c50bb8:8", "const:4:8"]]
- 00c50bb8 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c51bac ["INT_ADD", "register:40f0:8", ["const:c51bac:8", "const:4:8"]]
+ 00c51bac ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-7a924c0bffa5629f8b183df4c68313ca"></a>

### [`00c50ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c50ff8.md) → [`00c51fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c51/00c51fec.md) FUN_00c51fec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5101c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c5101c ["INT_ADD", "register:40f0:8", ["const:c5101c:8", "const:4:8"]]
- 00c5101c ["CALLIND", null, ["register:0:8"]]
+ 00c52010 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c52010 ["INT_ADD", "register:40f0:8", ["const:c52010:8", "const:4:8"]]
+ 00c52010 ["CALLIND", null, ["register:0:8"]]
- 00c51044 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51044 ["INT_ADD", "register:40f0:8", ["const:c51044:8", "const:4:8"]]
- 00c51044 ["CALLIND", null, ["register:0:8"]]
+ 00c52038 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c52038 ["INT_ADD", "register:40f0:8", ["const:c52038:8", "const:4:8"]]
+ 00c52038 ["CALLIND", null, ["register:0:8"]]
- 00c51074 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51074 ["INT_ADD", "register:40f0:8", ["const:c51074:8", "const:4:8"]]
- 00c51074 ["CALLIND", null, ["register:0:8"]]
+ 00c52068 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c52068 ["INT_ADD", "register:40f0:8", ["const:c52068:8", "const:4:8"]]
+ 00c52068 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-823c24b396de55b6fea36d6c687c9ccf"></a>

### [`00c511b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c511b8.md) → [`00c521ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c521ac.md) FUN_00c521ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c511f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c511f4 ["INT_ADD", "register:40f0:8", ["const:c511f4:8", "const:4:8"]]
- 00c511f4 ["CALLIND", null, ["register:0:8"]]
+ 00c521e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c521e8 ["INT_ADD", "register:40f0:8", ["const:c521e8:8", "const:4:8"]]
+ 00c521e8 ["CALLIND", null, ["register:0:8"]]
- 00c51224 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51224 ["INT_ADD", "register:40f0:8", ["const:c51224:8", "const:4:8"]]
- 00c51224 ["CALLIND", null, ["register:0:8"]]
+ 00c52218 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c52218 ["INT_ADD", "register:40f0:8", ["const:c52218:8", "const:4:8"]]
+ 00c52218 ["CALLIND", null, ["register:0:8"]]
- 00c51254 ["INT_ADD", "register:40f0:8", ["const:c51254:8", "const:4:8"]]
- 00c51254 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c52248 ["INT_ADD", "register:40f0:8", ["const:c52248:8", "const:4:8"]]
+ 00c52248 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-2e3eb4c88ffdbbe3acbbc747bb288557"></a>

### [`00c512a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c512a4.md) → [`00c52298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52298.md) FUN_00c52298

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c512f8 ["INT_ADD", "register:40f0:8", ["const:c512f8:8", "const:4:8"]]
- 00c512f8 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c522ec ["INT_ADD", "register:40f0:8", ["const:c522ec:8", "const:4:8"]]
+ 00c522ec ["CALL", null, ["callee:00c5b140:8"]]
- 00c51314 ["INT_ADD", "register:40f0:8", ["const:c51314:8", "const:4:8"]]
- 00c51314 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c52308 ["INT_ADD", "register:40f0:8", ["const:c52308:8", "const:4:8"]]
+ 00c52308 ["CALL", null, ["callee:00c590a0:8"]]
- 00c5134c ["INT_ADD", "register:40f0:8", ["const:c5134c:8", "const:4:8"]]
- 00c5134c ["CALL", null, ["callee:00c5b140:8"]]
+ 00c52340 ["INT_ADD", "register:40f0:8", ["const:c52340:8", "const:4:8"]]
+ 00c52340 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-fc2942fabb8aa0b4e958692312f8f2b9"></a>

### [`00c5140c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c5140c.md) → [`00c52400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52400.md) FUN_00c52400

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51498 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51498 ["INT_ADD", "register:40f0:8", ["const:c51498:8", "const:4:8"]]
- 00c51498 ["CALLIND", null, ["register:0:8"]]
+ 00c5248c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c5248c ["INT_ADD", "register:40f0:8", ["const:c5248c:8", "const:4:8"]]
+ 00c5248c ["CALLIND", null, ["register:0:8"]]
- 00c514c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c514c0 ["INT_ADD", "register:40f0:8", ["const:c514c0:8", "const:4:8"]]
- 00c514c0 ["CALLIND", null, ["register:0:8"]]
+ 00c524b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c524b4 ["INT_ADD", "register:40f0:8", ["const:c524b4:8", "const:4:8"]]
+ 00c524b4 ["CALLIND", null, ["register:0:8"]]
- 00c514f0 ["INT_ADD", "register:40f0:8", ["const:c514f0:8", "const:4:8"]]
- 00c514f0 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c524e4 ["INT_ADD", "register:40f0:8", ["const:c524e4:8", "const:4:8"]]
+ 00c524e4 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-551c9ee1ac6c51d94dcdba93f9d18aff"></a>

### [`00c5174c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c5174c.md) → [`00c52740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52740.md) FUN_00c52740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c517e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c517e8 ["INT_ADD", "register:40f0:8", ["const:c517e8:8", "const:4:8"]]
- 00c517e8 ["CALLIND", null, ["register:0:8"]]
+ 00c527dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c527dc ["INT_ADD", "register:40f0:8", ["const:c527dc:8", "const:4:8"]]
+ 00c527dc ["CALLIND", null, ["register:0:8"]]
- 00c51818 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51818 ["INT_ADD", "register:40f0:8", ["const:c51818:8", "const:4:8"]]
- 00c51818 ["CALLIND", null, ["register:0:8"]]
+ 00c5280c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c5280c ["INT_ADD", "register:40f0:8", ["const:c5280c:8", "const:4:8"]]
+ 00c5280c ["CALLIND", null, ["register:0:8"]]
- 00c51848 ["INT_ADD", "register:40f0:8", ["const:c51848:8", "const:4:8"]]
- 00c51848 ["CALL", null, ["callee:00c5b140:8"]]
+ 00c5283c ["INT_ADD", "register:40f0:8", ["const:c5283c:8", "const:4:8"]]
+ 00c5283c ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-fcff89b556eb6d46368c4752a581eb73"></a>

### [`00c51ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51ae8.md) → [`00c52adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52adc.md) FUN_00c52adc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c51c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51c10.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c52c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52c04.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51b14 ["INT_ADD", "register:40f0:8", ["const:c51b14:8", "const:4:8"]]
- 00c51b14 ["CALL", null, ["callee:00c52c04:8"]]
+ 00c52b08 ["INT_ADD", "register:40f0:8", ["const:c52b08:8", "const:4:8"]]
+ 00c52b08 ["CALL", null, ["callee:00c52c04:8"]]
- 00c51b44 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51b44 ["INT_ADD", "register:40f0:8", ["const:c51b44:8", "const:4:8"]]
- 00c51b44 ["CALLIND", null, ["register:0:8"]]
+ 00c52b38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c52b38 ["INT_ADD", "register:40f0:8", ["const:c52b38:8", "const:4:8"]]
+ 00c52b38 ["CALLIND", null, ["register:0:8"]]
- 00c51b74 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51b74 ["INT_ADD", "register:40f0:8", ["const:c51b74:8", "const:4:8"]]
- 00c51b74 ["CALLIND", null, ["register:0:8"]]
+ 00c52b68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c52b68 ["INT_ADD", "register:40f0:8", ["const:c52b68:8", "const:4:8"]]
+ 00c52b68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d9eebf62f6a1dffedab4f1cffb2a9a2d"></a>

### [`00c51dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51dbc.md) → [`00c52db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52db0.md) _ZnwmRKSt9nothrow_t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a920.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00c5b8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8f0.md) · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51dc8 ["INT_ADD", "register:40f0:8", ["const:c51dc8:8", "const:4:8"]]
- 00c51dc8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c52dbc ["INT_ADD", "register:40f0:8", ["const:c52dbc:8", "const:4:8"]]
+ 00c52dbc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-8d3779c1539075ce179f50e6ab2dead3"></a>

### [`00c51dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51dec.md) → [`00c52de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52de0.md) _ZnamRKSt9nothrow_t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cef0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51df8 ["INT_ADD", "register:40f0:8", ["const:c51df8:8", "const:4:8"]]
- 00c51df8 ["CALL", null, ["callee:00c5cef0:8"]]
+ 00c52dec ["INT_ADD", "register:40f0:8", ["const:c52dec:8", "const:4:8"]]
+ 00c52dec ["CALL", null, ["callee:00c5cef0:8"]]
~~~


<a id="compare-0a8e90876c02d0fd236dec333d2f9eda"></a>

### [`00c51e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51e4c.md) → [`00c52e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52e40.md) _ZnwmSt11align_val_tRKSt9nothrow_t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ef90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ef90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ff60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5ff60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51e58 ["INT_ADD", "register:40f0:8", ["const:c51e58:8", "const:4:8"]]
- 00c51e58 ["CALL", null, ["callee:00c5ff60:8"]]
+ 00c52e4c ["INT_ADD", "register:40f0:8", ["const:c52e4c:8", "const:4:8"]]
+ 00c52e4c ["CALL", null, ["callee:00c5ff60:8"]]
~~~


<a id="compare-96ed1699d8cbd78d5be6976fbfe79295"></a>

### [`00c51e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51e7c.md) → [`00c52e70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52e70.md) _ZnamSt11align_val_tRKSt9nothrow_t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5efb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5efb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ff80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5ff80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51e88 ["INT_ADD", "register:40f0:8", ["const:c51e88:8", "const:4:8"]]
- 00c51e88 ["CALL", null, ["callee:00c5ff80:8"]]
+ 00c52e7c ["INT_ADD", "register:40f0:8", ["const:c52e7c:8", "const:4:8"]]
+ 00c52e7c ["CALL", null, ["callee:00c5ff80:8"]]
~~~


<a id="compare-48299886dd18fdce0542dbcc057298c3"></a>

### [`00c51f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51f14.md) → [`00c52f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52f08.md) __cxa_allocate_exception

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) · 呼出先 3件 [`00c526e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c526e0.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) · 呼出先 3件 [`00c536d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c536d4.md) [`00c590c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590c0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51f2c ["INT_ADD", "register:40f0:8", ["const:c51f2c:8", "const:4:8"]]
- 00c51f2c ["CALL", null, ["callee:00c536d4:8"]]
+ 00c52f20 ["INT_ADD", "register:40f0:8", ["const:c52f20:8", "const:4:8"]]
+ 00c52f20 ["CALL", null, ["callee:00c536d4:8"]]
- 00c51f44 ["INT_ADD", "register:40f0:8", ["const:c51f44:8", "const:4:8"]]
- 00c51f44 ["CALL", null, ["callee:00c59130:8"]]
+ 00c52f38 ["INT_ADD", "register:40f0:8", ["const:c52f38:8", "const:4:8"]]
+ 00c52f38 ["CALL", null, ["callee:00c59130:8"]]
- 00c51f5c ["INT_ADD", "register:40f0:8", ["const:c51f5c:8", "const:4:8"]]
- 00c51f5c ["CALL", null, ["callee:00c590c0:8"]]
+ 00c52f50 ["INT_ADD", "register:40f0:8", ["const:c52f50:8", "const:4:8"]]
+ 00c52f50 ["CALL", null, ["callee:00c590c0:8"]]
~~~


<a id="compare-bc8413689307695a1c5c8a53ac60f45b"></a>

### [`00c51f64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51f64.md) → [`00c52f58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52f58.md) __cxa_begin_catch

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c580e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580e0.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5ee60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee60.md)
- 新版 呼出元 1件 [`00c590b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590b0.md) · 呼出先 2件 [`00c590c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590c0.md) [`00c5fe30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fe30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51f78 ["INT_ADD", "register:40f0:8", ["const:c51f78:8", "const:4:8"]]
- 00c51f78 ["CALL", null, ["callee:00c5fe30:8"]]
+ 00c52f6c ["INT_ADD", "register:40f0:8", ["const:c52f6c:8", "const:4:8"]]
+ 00c52f6c ["CALL", null, ["callee:00c5fe30:8"]]
- 00c51ff8 ["INT_ADD", "register:40f0:8", ["const:c51ff8:8", "const:4:8"]]
- 00c51ff8 ["CALL", null, ["callee:00c590c0:8"]]
+ 00c52fec ["INT_ADD", "register:40f0:8", ["const:c52fec:8", "const:4:8"]]
+ 00c52fec ["CALL", null, ["callee:00c590c0:8"]]
~~~


<a id="compare-4045d2cdaddde6e82301262714a36490"></a>

### [`00c520fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c520fc.md) → [`00c530f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c530f0.md) __cxa_allocate_dependent_exception

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c526e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c526e0.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c536d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c536d4.md) [`00c590c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5210c ["INT_ADD", "register:40f0:8", ["const:c5210c:8", "const:4:8"]]
- 00c5210c ["CALL", null, ["callee:00c536d4:8"]]
+ 00c53100 ["INT_ADD", "register:40f0:8", ["const:c53100:8", "const:4:8"]]
+ 00c53100 ["CALL", null, ["callee:00c536d4:8"]]
- 00c52134 ["INT_ADD", "register:40f0:8", ["const:c52134:8", "const:4:8"]]
- 00c52134 ["CALL", null, ["callee:00c590c0:8"]]
+ 00c53128 ["INT_ADD", "register:40f0:8", ["const:c53128:8", "const:4:8"]]
+ 00c53128 ["CALL", null, ["callee:00c590c0:8"]]
~~~


<a id="compare-ba533800f6be895f0171ba45e8ceff98"></a>

### [`00c52140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52140.md) → [`00c53134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53134.md) __cxa_throw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) · 呼出先 4件 [`00c5219c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c5219c.md) [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) [`00c58400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58400.md) [`00c5ee60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee60.md)
- 新版 呼出元 1件 [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) · 呼出先 4件 [`00c53190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53190.md) [`00c54dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54dc0.md) [`00c593d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593d0.md) [`00c5fe30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fe30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52160 ["INT_ADD", "register:40f0:8", ["const:c52160:8", "const:4:8"]]
- 00c52160 ["CALL", null, ["callee:00c5fe30:8"]]
+ 00c53154 ["INT_ADD", "register:40f0:8", ["const:c53154:8", "const:4:8"]]
+ 00c53154 ["CALL", null, ["callee:00c5fe30:8"]]
- 00c5217c ["INT_ADD", "register:40f0:8", ["const:c5217c:8", "const:4:8"]]
- 00c5217c ["CALL", null, ["callee:00c593d0:8"]]
+ 00c53170 ["INT_ADD", "register:40f0:8", ["const:c53170:8", "const:4:8"]]
+ 00c53170 ["CALL", null, ["callee:00c593d0:8"]]
- 00c52190 ["INT_ADD", "register:40f0:8", ["const:c52190:8", "const:4:8"]]
- 00c52190 ["CALL", null, ["callee:00c54dc0:8"]]
+ 00c53184 ["INT_ADD", "register:40f0:8", ["const:c53184:8", "const:4:8"]]
+ 00c53184 ["CALL", null, ["callee:00c54dc0:8"]]
~~~


<a id="compare-2e43afc6d5d645a4f3ffe1caf6a6fddb"></a>

### [`00c5219c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c5219c.md) → [`00c53190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53190.md) FUN_00c53190

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c52140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52140.md) · 呼出先 2件 [`00c3797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3797c.md) [`00c580e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580e0.md)
- 新版 呼出元 1件 [`00c53134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53134.md) · 呼出先 2件 [`00c38970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38970.md) [`00c590b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c521b4 ["INT_ADD", "register:40f0:8", ["const:c521b4:8", "const:4:8"]]
- 00c521b4 ["CALL", null, ["callee:00c590b0:8"]]
+ 00c531a8 ["INT_ADD", "register:40f0:8", ["const:c531a8:8", "const:4:8"]]
+ 00c531a8 ["CALL", null, ["callee:00c590b0:8"]]
- 00c521bc ["INT_ADD", "register:40f0:8", ["const:c521bc:8", "const:4:8"]]
- 00c521bc ["CALL", null, ["callee:00c38970:8"]]
+ 00c531b0 ["INT_ADD", "register:40f0:8", ["const:c531b0:8", "const:4:8"]]
+ 00c531b0 ["CALL", null, ["callee:00c38970:8"]]
~~~


<a id="compare-39f3a0adae44b2ffadd842e8d315a320"></a>

### [`00c52314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52314.md) → [`00c53308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53308.md) __cxa_current_exception_type

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5fe40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fe40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52320 ["INT_ADD", "register:40f0:8", ["const:c52320:8", "const:4:8"]]
- 00c52320 ["CALL", null, ["callee:00c5fe40:8"]]
+ 00c53314 ["INT_ADD", "register:40f0:8", ["const:c53314:8", "const:4:8"]]
+ 00c53314 ["CALL", null, ["callee:00c5fe40:8"]]
~~~


<a id="compare-7d312537c2a7db433ac27787adacb75f"></a>

### [`00c52364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52364.md) → [`00c53358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53358.md) __cxa_rethrow

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c585d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585d0.md) · 呼出先 5件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c3797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3797c.md) [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5ee60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee60.md)
- 新版 呼出元 1件 [`00c595a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595a0.md) · 呼出先 5件 [`00440f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440f9c.md) [`00c38970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38970.md) [`00c54dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54dc0.md) [`00c590c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590c0.md) [`00c5fe30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fe30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52378 ["INT_ADD", "register:40f0:8", ["const:c52378:8", "const:4:8"]]
- 00c52378 ["CALL", null, ["callee:00c5fe30:8"]]
+ 00c5336c ["INT_ADD", "register:40f0:8", ["const:c5336c:8", "const:4:8"]]
+ 00c5336c ["CALL", null, ["callee:00c5fe30:8"]]
- 00c52384 ["INT_ADD", "register:40f0:8", ["const:c52384:8", "const:4:8"]]
- 00c52384 ["CALL", null, ["callee:00c590c0:8"]]
+ 00c53378 ["INT_ADD", "register:40f0:8", ["const:c53378:8", "const:4:8"]]
+ 00c53378 ["CALL", null, ["callee:00c590c0:8"]]
- 00c523d0 ["INT_ADD", "register:40f0:8", ["const:c523d0:8", "const:4:8"]]
- 00c523d0 ["CALL", null, ["callee:00c54dc0:8"]]
+ 00c533c4 ["INT_ADD", "register:40f0:8", ["const:c533c4:8", "const:4:8"]]
+ 00c533c4 ["CALL", null, ["callee:00c54dc0:8"]]
~~~


<a id="compare-60f5b80bd3f8dac01bbd20c06e1f362f"></a>

### [`00c52448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52448.md) → [`00c5343c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c5343c.md) __cxa_increment_exception_refcount

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dff0.md) · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c5efc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efc0.md) · 呼出先 1件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52464 ["INT_ADD", "register:40f0:8", ["const:c52464:8", "const:4:8"]]
- 00c52464 ["CALL", null, ["callee:00c54d90:8"]]
+ 00c53458 ["INT_ADD", "register:40f0:8", ["const:c53458:8", "const:4:8"]]
+ 00c53458 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-50eafb6fb8c8680c6e77ee68f735c4c3"></a>

### [`00c52474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52474.md) → [`00c53468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53468.md) __cxa_current_primary_exception

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e010.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)
- 新版 呼出元 1件 [`00c5efe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efe0.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5fe40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fe40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52484 ["INT_ADD", "register:40f0:8", ["const:c52484:8", "const:4:8"]]
- 00c52484 ["CALL", null, ["callee:00c5fe40:8"]]
+ 00c53478 ["INT_ADD", "register:40f0:8", ["const:c53478:8", "const:4:8"]]
+ 00c53478 ["CALL", null, ["callee:00c5fe40:8"]]
- 00c524d0 ["INT_ADD", "register:40f0:8", ["const:c524d0:8", "const:4:8"]]
- 00c524d0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00c534c4 ["INT_ADD", "register:40f0:8", ["const:c534c4:8", "const:4:8"]]
+ 00c534c4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-ef0e0e6042959849cff1c8336f86fa31"></a>

### [`00c52688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52688.md) → [`00c5367c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c5367c.md) __cxa_uncaught_exception

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5fe40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fe40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52694 ["INT_ADD", "register:40f0:8", ["const:c52694:8", "const:4:8"]]
- 00c52694 ["CALL", null, ["callee:00c5fe40:8"]]
+ 00c53688 ["INT_ADD", "register:40f0:8", ["const:c53688:8", "const:4:8"]]
+ 00c53688 ["CALL", null, ["callee:00c5fe40:8"]]
~~~


<a id="compare-315b3c3cb911a2dfc0810d99b72a4dfc"></a>

### [`00c526b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c526b8.md) → [`00c536ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c536ac.md) __cxa_uncaught_exceptions

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfd0.md) · 呼出先 1件 [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)
- 新版 呼出元 1件 [`00c5efa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efa0.md) · 呼出先 1件 [`00c5fe40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fe40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c526c4 ["INT_ADD", "register:40f0:8", ["const:c526c4:8", "const:4:8"]]
- 00c526c4 ["CALL", null, ["callee:00c5fe40:8"]]
+ 00c536b8 ["INT_ADD", "register:40f0:8", ["const:c536b8:8", "const:4:8"]]
+ 00c536b8 ["CALL", null, ["callee:00c5fe40:8"]]
~~~


<a id="compare-bfb8828fa1fb1bbe67c5f69de05d7736"></a>

### [`00c526e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c526e0.md) → [`00c536d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c536d4.md) FUN_00c536d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00c51f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51f14.md) [`00c520fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c520fc.md) [`00c524f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c524f4.md) · 呼出先 2件 [`00c5272c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c5272c.md) [`00c5efa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5efa0.md)
- 新版 呼出元 3件 [`00c52f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c52/00c52f08.md) [`00c530f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c530f0.md) [`00c534e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c534e8.md) · 呼出先 2件 [`00c53720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53720.md) [`00c5ff70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5ff70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52708 ["INT_ADD", "register:40f0:8", ["const:c52708:8", "const:4:8"]]
- 00c52708 ["CALL", null, ["callee:00c5ff70:8"]]
+ 00c536fc ["INT_ADD", "register:40f0:8", ["const:c536fc:8", "const:4:8"]]
+ 00c536fc ["CALL", null, ["callee:00c5ff70:8"]]
- 00c52718 ["INT_ADD", "register:40f0:8", ["const:c52718:8", "const:4:8"]]
- 00c52718 ["CALL", null, ["callee:00c53720:8"]]
+ 00c5370c ["INT_ADD", "register:40f0:8", ["const:c5370c:8", "const:4:8"]]
+ 00c5370c ["CALL", null, ["callee:00c53720:8"]]
~~~


<a id="compare-e43f722459a9674d79765c07d2f40b44"></a>

### [`00c5319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c5319c.md) → [`00c54190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54190.md) FUN_00c54190

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00c529e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c529e4.md) [`00c52f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52f80.md) [`00c53344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53344.md) · 呼出先 1件 [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 3件 [`00c539d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c539d8.md) [`00c53f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53f74.md) [`00c54338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54338.md) · 呼出先 1件 [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5333c ["INT_ADD", "register:40f0:8", ["const:c5333c:8", "const:4:8"]]
- 00c5333c ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c54330 ["INT_ADD", "register:40f0:8", ["const:c54330:8", "const:4:8"]]
+ 00c54330 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00c53340 ["INT_ADD", "register:40f0:8", ["const:c53340:8", "const:4:8"]]
- 00c53340 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00c54334 ["INT_ADD", "register:40f0:8", ["const:c54334:8", "const:4:8"]]
+ 00c54334 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-f42611f72af0bff0a6bd4a5d6e0b554c"></a>

### [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) → [`00c54dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54dc0.md) FUN_00c54dc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00c52140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52140.md) [`00c52364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52364.md) [`00c524f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c524f4.md) · 呼出先 6件 [`00c53ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ec8.md) [`00c54240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54240.md) [`00c542e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c542e8.md) [`00c54450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54450.md) [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md)
- 新版 呼出元 3件 [`00c53134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53134.md) [`00c53358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c53358.md) [`00c534e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c534e8.md) · 呼出先 6件 [`00c54eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54eb8.md) [`00c55230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55230.md) [`00c552d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c552d8.md) [`00c55440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55440.md) [`00c55468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55468.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c53dec ["INT_ADD", "register:40f0:8", ["const:c53dec:8", "const:4:8"]]
- 00c53dec ["CALL", null, ["callee:00c58cd8:8"]]
+ 00c54ddc ["INT_ADD", "register:40f0:8", ["const:c54ddc:8", "const:4:8"]]
+ 00c54ddc ["CALL", null, ["callee:00c58cd8:8"]]
- 00c53dfc ["INT_ADD", "register:40f0:8", ["const:c53dfc:8", "const:4:8"]]
- 00c53dfc ["CALL", null, ["callee:00c55230:8"]]
+ 00c54dec ["INT_ADD", "register:40f0:8", ["const:c54dec:8", "const:4:8"]]
+ 00c54dec ["CALL", null, ["callee:00c55230:8"]]
- 00c53e04 ["INT_ADD", "register:40f0:8", ["const:c53e04:8", "const:4:8"]]
- 00c53e04 ["CALL", null, ["callee:00c55440:8"]]
+ 00c54df4 ["INT_ADD", "register:40f0:8", ["const:c54df4:8", "const:4:8"]]
+ 00c54df4 ["CALL", null, ["callee:00c55440:8"]]
~~~


<a id="compare-74f2fb5d62e40c0144abdfef6ba03002"></a>

### [`00c54080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54080.md) → [`00c55070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55070.md) FUN_00c55070

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) · 呼出先 4件 [`00c54240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54240.md) [`00c54464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54464.md) [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md) [`00c544b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c544b8.md)
- 新版 呼出元 1件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) · 呼出先 4件 [`00c55230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55230.md) [`00c55454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55454.md) [`00c55468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55468.md) [`00c554a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c554a8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c540b0 ["INT_ADD", "register:40f0:8", ["const:c540b0:8", "const:4:8"]]
- 00c540b0 ["CALL", null, ["callee:00c55230:8"]]
+ 00c550a0 ["INT_ADD", "register:40f0:8", ["const:c550a0:8", "const:4:8"]]
+ 00c550a0 ["CALL", null, ["callee:00c55230:8"]]
- 00c540b8 ["INT_ADD", "register:40f0:8", ["const:c540b8:8", "const:4:8"]]
- 00c540b8 ["CALL", null, ["callee:00c55454:8"]]
+ 00c550a8 ["INT_ADD", "register:40f0:8", ["const:c550a8:8", "const:4:8"]]
+ 00c550a8 ["CALL", null, ["callee:00c55454:8"]]
- 00c540dc ["COPY", "register:0:8", ["register:4098:8"]]
- 00c540dc ["INT_ADD", "register:40f0:8", ["const:c540dc:8", "const:4:8"]]
- 00c540dc ["CALLIND", null, ["register:0:8"]]
+ 00c550cc ["COPY", "register:0:8", ["register:4098:8"]]
+ 00c550cc ["INT_ADD", "register:40f0:8", ["const:c550cc:8", "const:4:8"]]
+ 00c550cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8a493453d0828545cfbedc5504660559"></a>

### [`00c54174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54174.md) → [`00c55164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55164.md) FUN_00c55164

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c529e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c529e4.md) · 呼出先 1件 [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md)
- 新版 呼出元 1件 [`00c539d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c539d8.md) · 呼出先 1件 [`00c55468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55468.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54188 ["INT_ADD", "register:40f0:8", ["const:c54188:8", "const:4:8"]]
- 00c54188 ["CALL", null, ["callee:00c55468:8"]]
+ 00c55178 ["INT_ADD", "register:40f0:8", ["const:c55178:8", "const:4:8"]]
+ 00c55178 ["CALL", null, ["callee:00c55468:8"]]
~~~


<a id="compare-6c2ef0fa7e14bc03caddb712daa66395"></a>

### [`00c541a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c541a8.md) → [`00c55198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55198.md) FUN_00c55198

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c529e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c529e4.md) · 呼出先 1件 [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md)
- 新版 呼出元 1件 [`00c539d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c539d8.md) · 呼出先 1件 [`00c55468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55468.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c541bc ["INT_ADD", "register:40f0:8", ["const:c541bc:8", "const:4:8"]]
- 00c541bc ["CALL", null, ["callee:00c55468:8"]]
+ 00c551ac ["INT_ADD", "register:40f0:8", ["const:c551ac:8", "const:4:8"]]
+ 00c551ac ["CALL", null, ["callee:00c55468:8"]]
~~~


<a id="compare-9cda09bef201094cfc7d628a0baa1d6d"></a>

### [`00c54200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54200.md) → [`00c551f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c551f0.md) FUN_00c551f0

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c529e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c529e4.md) · 呼出先 1件 [`00c542e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c542e8.md)
- 新版 呼出元 1件 [`00c539d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c53/00c539d8.md) · 呼出先 1件 [`00c552d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c552d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54218 ["INT_ADD", "register:40f0:8", ["const:c54218:8", "const:4:8"]]
- 00c54218 ["CALL", null, ["callee:00c552d8:8"]]
+ 00c55208 ["INT_ADD", "register:40f0:8", ["const:c55208:8", "const:4:8"]]
+ 00c55208 ["CALL", null, ["callee:00c552d8:8"]]
~~~


<a id="compare-d6cdcefad8c32ab6954f625bc6c08bb7"></a>

### [`00c542e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c542e8.md) → [`00c552d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c552d8.md) FUN_00c552d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) [`00c53ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ec8.md) [`00c54200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54200.md) · 呼出先 0件 
- 新版 呼出元 3件 [`00c54dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54dc0.md) [`00c54eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54eb8.md) [`00c551f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c551f0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54310 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54310 ["INT_ADD", "register:40f0:8", ["const:c54310:8", "const:4:8"]]
- 00c54310 ["CALLIND", null, ["register:0:8"]]
+ 00c55300 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c55300 ["INT_ADD", "register:40f0:8", ["const:c55300:8", "const:4:8"]]
+ 00c55300 ["CALLIND", null, ["register:0:8"]]
- 00c54328 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54328 ["INT_ADD", "register:40f0:8", ["const:c54328:8", "const:4:8"]]
- 00c54328 ["CALLIND", null, ["register:0:8"]]
+ 00c55318 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c55318 ["INT_ADD", "register:40f0:8", ["const:c55318:8", "const:4:8"]]
+ 00c55318 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-121c013dd681d3e3677a483075b3666a"></a>

### [`00c54364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54364.md) → [`00c55354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55354.md) FUN_00c55354

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c541f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c541f8.md) [`00c54230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54230.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00c551e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c551e8.md) [`00c55220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55220.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54390 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54390 ["INT_ADD", "register:40f0:8", ["const:c54390:8", "const:4:8"]]
- 00c54390 ["CALLIND", null, ["register:0:8"]]
+ 00c55380 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c55380 ["INT_ADD", "register:40f0:8", ["const:c55380:8", "const:4:8"]]
+ 00c55380 ["CALLIND", null, ["register:0:8"]]
- 00c543ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00c543ac ["INT_ADD", "register:40f0:8", ["const:c543ac:8", "const:4:8"]]
- 00c543ac ["CALLIND", null, ["register:0:8"]]
+ 00c5539c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c5539c ["INT_ADD", "register:40f0:8", ["const:c5539c:8", "const:4:8"]]
+ 00c5539c ["CALLIND", null, ["register:0:8"]]
- 00c543c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c543c8 ["INT_ADD", "register:40f0:8", ["const:c543c8:8", "const:4:8"]]
- 00c543c8 ["CALLIND", null, ["register:0:8"]]
+ 00c553b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c553b8 ["INT_ADD", "register:40f0:8", ["const:c553b8:8", "const:4:8"]]
+ 00c553b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0c768445a02933c2a2910f451bf1d2a8"></a>

### [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md) → [`00c55468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55468.md) FUN_00c55468

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) [`00c53ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ec8.md) [`00c54080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54080.md) [`00c54174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54174.md) [`00c541a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c541a8.md) · 呼出先 0件 
- 新版 呼出元 5件 [`00c54dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54dc0.md) [`00c54eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54eb8.md) [`00c55070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55070.md) [`00c55164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55164.md) [`00c55198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55198.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54494 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54494 ["INT_ADD", "register:40f0:8", ["const:c54494:8", "const:4:8"]]
- 00c54494 ["CALLIND", null, ["register:0:8"]]
+ 00c55484 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c55484 ["INT_ADD", "register:40f0:8", ["const:c55484:8", "const:4:8"]]
+ 00c55484 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9075238ee1d99242fcc9b7538d575e83"></a>

### [`00c544b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c544b8.md) → [`00c554a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c554a8.md) FUN_00c554a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c53ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ec8.md) [`00c54080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54080.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00c54eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54eb8.md) [`00c55070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55070.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c544cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c544cc ["INT_ADD", "register:40f0:8", ["const:c544cc:8", "const:4:8"]]
- 00c544cc ["CALLIND", null, ["register:0:8"]]
+ 00c554bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c554bc ["INT_ADD", "register:40f0:8", ["const:c554bc:8", "const:4:8"]]
+ 00c554bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-12c408e3ca8311860088c9f72882bdf8"></a>

### [`00c54b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54b90.md) → [`00c55b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55b80.md) FUN_00c55b80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c54f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54f50.md) [`00c55070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c55/00c55070.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c55f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55f40.md) [`00c56060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c56/00c56060.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54bd4 ["INT_ADD", "register:40f0:8", ["const:c54bd4:8", "const:4:8"]]
- 00c54bd4 ["CALL", null, ["callee:00c59130:8"]]
+ 00c55bc4 ["INT_ADD", "register:40f0:8", ["const:c55bc4:8", "const:4:8"]]
+ 00c55bc4 ["CALL", null, ["callee:00c59130:8"]]
- 00c54be0 ["INT_ADD", "register:40f0:8", ["const:c54be0:8", "const:4:8"]]
- 00c54be0 ["CALL", null, ["callee:00c55f40:8"]]
+ 00c55bd0 ["INT_ADD", "register:40f0:8", ["const:c55bd0:8", "const:4:8"]]
+ 00c55bd0 ["CALL", null, ["callee:00c55f40:8"]]
- 00c54c18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54c18 ["INT_ADD", "register:40f0:8", ["const:c54c18:8", "const:4:8"]]
- 00c54c18 ["CALLIND", null, ["register:0:8"]]
+ 00c55c08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c55c08 ["INT_ADD", "register:40f0:8", ["const:c55c08:8", "const:4:8"]]
+ 00c55c08 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-66d28c2e818fd379f0545b9948eb5bd7"></a>

### [`00c575ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c575ac.md) → [`00c5859c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c5859c.md) FUN_00c5859c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c54d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54d08.md) · 呼出先 1件 [`00c576dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c576dc.md)
- 新版 呼出元 1件 [`00c55cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55cf8.md) · 呼出先 1件 [`00c586cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c586cc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c576bc ["INT_ADD", "register:40f0:8", ["const:c576bc:8", "const:4:8"]]
- 00c576bc ["CALL", null, ["callee:00c586cc:8"]]
+ 00c586ac ["INT_ADD", "register:40f0:8", ["const:c586ac:8", "const:4:8"]]
+ 00c586ac ["CALL", null, ["callee:00c586cc:8"]]
~~~


<a id="compare-a6785738a2b5f6b83cd45a03b3596974"></a>

### [`00c577fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c577fc.md) → [`00c587ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c587ec.md) FUN_00c587ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c572d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c572d8.md) · 呼出先 3件 [`00c54670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54670.md) [`00c563c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c56/00c563c0.md) [`00c5674c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c56/00c5674c.md)
- 新版 呼出元 1件 [`00c582c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c582c8.md) · 呼出先 3件 [`00c55660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c55660.md) [`00c573b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c57/00c573b0.md) [`00c5773c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c57/00c5773c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c578b4 ["INT_ADD", "register:40f0:8", ["const:c578b4:8", "const:4:8"]]
- 00c578b4 ["CALL", null, ["callee:00c55660:8"]]
+ 00c588a4 ["INT_ADD", "register:40f0:8", ["const:c588a4:8", "const:4:8"]]
+ 00c588a4 ["CALL", null, ["callee:00c55660:8"]]
- 00c578dc ["INT_ADD", "register:40f0:8", ["const:c578dc:8", "const:4:8"]]
- 00c578dc ["CALL", null, ["callee:00c573b0:8"]]
+ 00c588cc ["INT_ADD", "register:40f0:8", ["const:c588cc:8", "const:4:8"]]
+ 00c588cc ["CALL", null, ["callee:00c573b0:8"]]
- 00c578fc ["INT_ADD", "register:40f0:8", ["const:c578fc:8", "const:4:8"]]
- 00c578fc ["CALL", null, ["callee:00c573b0:8"]]
+ 00c588ec ["INT_ADD", "register:40f0:8", ["const:c588ec:8", "const:4:8"]]
+ 00c588ec ["CALL", null, ["callee:00c573b0:8"]]
~~~


<a id="compare-da0ddb388520fedcc07c85bc70b1021f"></a>

### [`00c579c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c579c4.md) → [`00c589b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c589b4.md) FUN_00c589b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c572d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c572d8.md) · 呼出先 4件 [`00c544e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c544e0.md) [`00c563c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c56/00c563c0.md) [`00c576dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c576dc.md) [`00c57b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57b2c.md)
- 新版 呼出元 1件 [`00c582c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c582c8.md) · 呼出先 4件 [`00c554d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c55/00c554d0.md) [`00c573b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c57/00c573b0.md) [`00c586cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c586cc.md) [`00c58b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58b1c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c57a0c ["INT_ADD", "register:40f0:8", ["const:c57a0c:8", "const:4:8"]]
- 00c57a0c ["CALL", null, ["callee:00c586cc:8"]]
+ 00c589fc ["INT_ADD", "register:40f0:8", ["const:c589fc:8", "const:4:8"]]
+ 00c589fc ["CALL", null, ["callee:00c586cc:8"]]
- 00c57a24 ["INT_ADD", "register:40f0:8", ["const:c57a24:8", "const:4:8"]]
- 00c57a24 ["CALL", null, ["callee:00c58b1c:8"]]
+ 00c58a14 ["INT_ADD", "register:40f0:8", ["const:c58a14:8", "const:4:8"]]
+ 00c58a14 ["CALL", null, ["callee:00c58b1c:8"]]
- 00c57a68 ["INT_ADD", "register:40f0:8", ["const:c57a68:8", "const:4:8"]]
- 00c57a68 ["CALL", null, ["callee:00c573b0:8"]]
+ 00c58a58 ["INT_ADD", "register:40f0:8", ["const:c58a58:8", "const:4:8"]]
+ 00c58a58 ["CALL", null, ["callee:00c573b0:8"]]
~~~


