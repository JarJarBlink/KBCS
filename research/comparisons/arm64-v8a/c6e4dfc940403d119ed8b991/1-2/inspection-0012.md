# v16.0.2 → v16.0.3 · 要調査の変更候補 (12)

[一覧の目次](README.md)

<a id="compare-341379453582350f476a224ce493c754"></a>

### [`00555264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555264.md) → [`00555584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555584.md) FUN_00555584

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00555280 ["INT_ADD", "register:40f0:8", ["const:555280:8", "const:4:8"]]
- 00555280 ["CALL", null, ["callee:00c54d90:8"]]
+ 005555a0 ["INT_ADD", "register:40f0:8", ["const:5555a0:8", "const:4:8"]]
+ 005555a0 ["CALL", null, ["callee:00c54d90:8"]]
- 005552a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005552a0 ["INT_ADD", "register:40f0:8", ["const:5552a0:8", "const:4:8"]]
- 005552a0 ["CALLIND", null, ["register:0:8"]]
+ 005555c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005555c0 ["INT_ADD", "register:40f0:8", ["const:5555c0:8", "const:4:8"]]
+ 005555c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8bd8a980ecf5beb913313f9df6a014d5"></a>

### [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) → [`00555ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555ff4.md) FUN_00555ff4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005599a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005599a4.md) [`0055a478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a478.md) · 呼出先 8件 [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) [`0055b288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b288.md) [`0058ffe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ffe8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00559cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559cc4.md) [`0055a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a798.md) · 呼出先 8件 [`0055616c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00556/0055616c.md) [`0055b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b5a8.md) [`00590308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590308.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00555d20 ["INT_ADD", "register:40f0:8", ["const:555d20:8", "const:4:8"]]
- 00555d20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00556040 ["INT_ADD", "register:40f0:8", ["const:556040:8", "const:4:8"]]
+ 00556040 ["CALL", null, ["callee:00c58f30:8"]]
- 00555d3c ["INT_ADD", "register:40f0:8", ["const:555d3c:8", "const:4:8"]]
- 00555d3c ["CALL", null, ["callee:00c59130:8"]]
+ 0055605c ["INT_ADD", "register:40f0:8", ["const:55605c:8", "const:4:8"]]
+ 0055605c ["CALL", null, ["callee:00c59130:8"]]
- 00555d78 ["INT_ADD", "register:40f0:8", ["const:555d78:8", "const:4:8"]]
- 00555d78 ["CALL", null, ["callee:0055616c:8"]]
+ 00556098 ["INT_ADD", "register:40f0:8", ["const:556098:8", "const:4:8"]]
+ 00556098 ["CALL", null, ["callee:0055616c:8"]]
~~~


<a id="compare-e5e1f397b157d70a522b65c05c737ad3"></a>

### [`005598b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005598b4.md) → [`00559bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559bd4.md) FUN_00559bd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0055b288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b288.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0055616c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00556/0055616c.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0055b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b5a8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00559934 ["INT_ADD", "register:40f0:8", ["const:559934:8", "const:4:8"]]
- 00559934 ["CALL", null, ["callee:00c58f30:8"]]
+ 00559c54 ["INT_ADD", "register:40f0:8", ["const:559c54:8", "const:4:8"]]
+ 00559c54 ["CALL", null, ["callee:00c58f30:8"]]
- 00559964 ["INT_ADD", "register:40f0:8", ["const:559964:8", "const:4:8"]]
- 00559964 ["CALL", null, ["callee:00c590a0:8"]]
+ 00559c84 ["INT_ADD", "register:40f0:8", ["const:559c84:8", "const:4:8"]]
+ 00559c84 ["CALL", null, ["callee:00c590a0:8"]]
- 00559978 ["INT_ADD", "register:40f0:8", ["const:559978:8", "const:4:8"]]
- 00559978 ["CALL", null, ["callee:00c58f50:8"]]
+ 00559c98 ["INT_ADD", "register:40f0:8", ["const:559c98:8", "const:4:8"]]
+ 00559c98 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d12bf8296e5d0de519e430abb475a3bc"></a>

### [`0055a57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a57c.md) → [`0055a89c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a89c.md) FUN_0055a89c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00467fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467fec.md) · 呼出先 2件 [`005599a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005599a4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`0046830c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046830c.md) · 呼出先 2件 [`00559cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559cc4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055a5c0 ["INT_ADD", "register:40f0:8", ["const:55a5c0:8", "const:4:8"]]
- 0055a5c0 ["CALL", null, ["callee:00559cc4:8"]]
+ 0055a8e0 ["INT_ADD", "register:40f0:8", ["const:55a8e0:8", "const:4:8"]]
+ 0055a8e0 ["CALL", null, ["callee:00559cc4:8"]]
- 0055a5e4 ["INT_ADD", "register:40f0:8", ["const:55a5e4:8", "const:4:8"]]
- 0055a5e4 ["CALL", null, ["callee:00c58f80:8"]]
+ 0055a904 ["INT_ADD", "register:40f0:8", ["const:55a904:8", "const:4:8"]]
+ 0055a904 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-7cd7e61f77ce9659cf9583ba3ddfa766"></a>

### [`0055a694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a694.md) → [`0055a9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a9b4.md) FUN_0055a9b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00590d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590d58.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00591078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591078.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055a6b0 ["INT_ADD", "register:40f0:8", ["const:55a6b0:8", "const:4:8"]]
- 0055a6b0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055a9d0 ["INT_ADD", "register:40f0:8", ["const:55a9d0:8", "const:4:8"]]
+ 0055a9d0 ["CALL", null, ["callee:00c54d90:8"]]
- 0055a6d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055a6d0 ["INT_ADD", "register:40f0:8", ["const:55a6d0:8", "const:4:8"]]
- 0055a6d0 ["CALLIND", null, ["register:0:8"]]
+ 0055a9f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055a9f0 ["INT_ADD", "register:40f0:8", ["const:55a9f0:8", "const:4:8"]]
+ 0055a9f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b237df1fd479f08b1481cfa1a76fa717"></a>

### [`0055a734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a734.md) → [`0055aa54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa54.md) FUN_0055aa54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005554b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005554b8.md) [`00559f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559f80.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0055afb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055afb8.md) [`0055b178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b178.md) [`0055b18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b18c.md) [`0055b1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b1a0.md)
- 新版 呼出元 2件 [`005557d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005557d8.md) [`0055a2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a2a0.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0055b2d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b2d8.md) [`0055b498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b498.md) [`0055b4ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b4ac.md) [`0055b4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055a7ec ["INT_ADD", "register:40f0:8", ["const:55a7ec:8", "const:4:8"]]
- 0055a7ec ["CALL", null, ["callee:00c58f30:8"]]
+ 0055ab0c ["INT_ADD", "register:40f0:8", ["const:55ab0c:8", "const:4:8"]]
+ 0055ab0c ["CALL", null, ["callee:00c58f30:8"]]
- 0055a808 ["INT_ADD", "register:40f0:8", ["const:55a808:8", "const:4:8"]]
- 0055a808 ["CALL", null, ["callee:00c59130:8"]]
+ 0055ab28 ["INT_ADD", "register:40f0:8", ["const:55ab28:8", "const:4:8"]]
+ 0055ab28 ["CALL", null, ["callee:00c59130:8"]]
- 0055a818 ["INT_ADD", "register:40f0:8", ["const:55a818:8", "const:4:8"]]
- 0055a818 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055ab38 ["INT_ADD", "register:40f0:8", ["const:55ab38:8", "const:4:8"]]
+ 0055ab38 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-f48141266288c02b51eb8cf0ebe3f800"></a>

### [`0055afb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055afb8.md) → [`0055b2d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b2d8.md) FUN_0055b2d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0055a734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a734.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0055aa54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa54.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055b0e4 ["INT_ADD", "register:40f0:8", ["const:55b0e4:8", "const:4:8"]]
- 0055b0e4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0055b404 ["INT_ADD", "register:40f0:8", ["const:55b404:8", "const:4:8"]]
+ 0055b404 ["CALL", null, ["callee:00c58f50:8"]]
- 0055b118 ["INT_ADD", "register:40f0:8", ["const:55b118:8", "const:4:8"]]
- 0055b118 ["CALL", null, ["callee:00c58f80:8"]]
+ 0055b438 ["INT_ADD", "register:40f0:8", ["const:55b438:8", "const:4:8"]]
+ 0055b438 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-762d5e7ca47a20f880666dcc7db17307"></a>

### [`0055b11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b11c.md) → [`0055b43c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b43c.md) FUN_0055b43c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055b15c ["INT_ADD", "register:40f0:8", ["const:55b15c:8", "const:4:8"]]
- 0055b15c ["CALL", null, ["callee:00c58f50:8"]]
+ 0055b47c ["INT_ADD", "register:40f0:8", ["const:55b47c:8", "const:4:8"]]
+ 0055b47c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-461b50f86c68a73903ce9f1be472c4bc"></a>

### [`0055b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b3c0.md) → [`0055b6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b6e0.md) FUN_0055b6e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0055b29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b29c.md) [`0055c324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c324.md) [`0055c364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c364.md) · 呼出先 5件 [`0055b4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b4f8.md) [`0058ff98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ff98.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`0055b5bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b5bc.md) [`0055c644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c644.md) [`0055c684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c684.md) · 呼出先 5件 [`0055b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b818.md) [`005902b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005902b8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055b3f4 ["INT_ADD", "register:40f0:8", ["const:55b3f4:8", "const:4:8"]]
- 0055b3f4 ["CALL", null, ["callee:005902b8:8"]]
+ 0055b714 ["INT_ADD", "register:40f0:8", ["const:55b714:8", "const:4:8"]]
+ 0055b714 ["CALL", null, ["callee:005902b8:8"]]
- 0055b414 ["INT_ADD", "register:40f0:8", ["const:55b414:8", "const:4:8"]]
- 0055b414 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055b734 ["INT_ADD", "register:40f0:8", ["const:55b734:8", "const:4:8"]]
+ 0055b734 ["CALL", null, ["callee:00c54d90:8"]]
- 0055b428 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055b428 ["INT_ADD", "register:40f0:8", ["const:55b428:8", "const:4:8"]]
- 0055b428 ["CALLIND", null, ["register:0:8"]]
+ 0055b748 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055b748 ["INT_ADD", "register:40f0:8", ["const:55b748:8", "const:4:8"]]
+ 0055b748 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-12b61bfad42b9e5e421bbc3a23e14ae4"></a>

### [`0055b4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b4f8.md) → [`0055b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b818.md) FUN_0055b818

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0055b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b3c0.md) · 呼出先 6件 [`0055c71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c71c.md) [`0055c724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c724.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0055b6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b6e0.md) · 呼出先 6件 [`0055ca3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ca3c.md) [`0055ca44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ca44.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055b544 ["INT_ADD", "register:40f0:8", ["const:55b544:8", "const:4:8"]]
- 0055b544 ["CALL", null, ["callee:00c54d60:8"]]
+ 0055b864 ["INT_ADD", "register:40f0:8", ["const:55b864:8", "const:4:8"]]
+ 0055b864 ["CALL", null, ["callee:00c54d60:8"]]
- 0055b564 ["INT_ADD", "register:40f0:8", ["const:55b564:8", "const:4:8"]]
- 0055b564 ["CALL", null, ["callee:0055ca3c:8"]]
+ 0055b884 ["INT_ADD", "register:40f0:8", ["const:55b884:8", "const:4:8"]]
+ 0055b884 ["CALL", null, ["callee:0055ca3c:8"]]
- 0055b580 ["INT_ADD", "register:40f0:8", ["const:55b580:8", "const:4:8"]]
- 0055b580 ["CALL", null, ["callee:0055ca44:8"]]
+ 0055b8a0 ["INT_ADD", "register:40f0:8", ["const:55b8a0:8", "const:4:8"]]
+ 0055b8a0 ["CALL", null, ["callee:0055ca44:8"]]
~~~


<a id="compare-eff0bd4e4080978038a03584bdd8886a"></a>

### [`0055b850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b850.md) → [`0055bb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055bb70.md) FUN_0055bb70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`0055e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e700.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0055ea20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ea20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055b870 ["INT_ADD", "register:40f0:8", ["const:55b870:8", "const:4:8"]]
- 0055b870 ["CALL", null, ["callee:0055ea20:8"]]
+ 0055bb90 ["INT_ADD", "register:40f0:8", ["const:55bb90:8", "const:4:8"]]
+ 0055bb90 ["CALL", null, ["callee:0055ea20:8"]]
~~~


<a id="compare-fdf96ff3a92c9b933a8325190209cb42"></a>

### [`0055b8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b8b4.md) → [`0055bbd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055bbd4.md) FUN_0055bbd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`0055e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e700.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0055ea20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ea20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055b8d0 ["INT_ADD", "register:40f0:8", ["const:55b8d0:8", "const:4:8"]]
- 0055b8d0 ["CALL", null, ["callee:0055ea20:8"]]
+ 0055bbf0 ["INT_ADD", "register:40f0:8", ["const:55bbf0:8", "const:4:8"]]
+ 0055bbf0 ["CALL", null, ["callee:0055ea20:8"]]
~~~


<a id="compare-7b29c78359430bdedf6e83038bac9a0d"></a>

### [`0055c324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c324.md) → [`0055c644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c644.md) FUN_0055c644

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0055b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b3c0.md) [`0055e664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e664.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0055b6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b6e0.md) [`0055e984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e984.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055c340 ["INT_ADD", "register:40f0:8", ["const:55c340:8", "const:4:8"]]
- 0055c340 ["CALL", null, ["callee:0055e984:8"]]
+ 0055c660 ["INT_ADD", "register:40f0:8", ["const:55c660:8", "const:4:8"]]
+ 0055c660 ["CALL", null, ["callee:0055e984:8"]]
- 0055c34c ["INT_ADD", "register:40f0:8", ["const:55c34c:8", "const:4:8"]]
- 0055c34c ["CALL", null, ["callee:0055b6e0:8"]]
+ 0055c66c ["INT_ADD", "register:40f0:8", ["const:55c66c:8", "const:4:8"]]
+ 0055c66c ["CALL", null, ["callee:0055b6e0:8"]]
~~~


<a id="compare-399f2798f957dbb118b4b18387ecd063"></a>

### [`0055c364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c364.md) → [`0055c684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c684.md) FUN_0055c684

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0055b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b3c0.md) [`0055e664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e664.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0055b6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b6e0.md) [`0055e984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e984.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055c37c ["INT_ADD", "register:40f0:8", ["const:55c37c:8", "const:4:8"]]
- 0055c37c ["CALL", null, ["callee:0055e984:8"]]
+ 0055c69c ["INT_ADD", "register:40f0:8", ["const:55c69c:8", "const:4:8"]]
+ 0055c69c ["CALL", null, ["callee:0055e984:8"]]
- 0055c388 ["INT_ADD", "register:40f0:8", ["const:55c388:8", "const:4:8"]]
- 0055c388 ["CALL", null, ["callee:0055b6e0:8"]]
+ 0055c6a8 ["INT_ADD", "register:40f0:8", ["const:55c6a8:8", "const:4:8"]]
+ 0055c6a8 ["CALL", null, ["callee:0055b6e0:8"]]
~~~


<a id="compare-2f0afb1c4e7cd5e5294738ef1d2eb3bb"></a>

### [`0055c804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c804.md) → [`0055cb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cb24.md) FUN_0055cb24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0057f8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057f/0057f8ac.md) [`005804e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00580/005804e4.md) · 呼出先 2件 [`0055ca44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055ca44.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0057fbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057f/0057fbcc.md) [`00580804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00580/00580804.md) · 呼出先 2件 [`0055cd64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cd64.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055c838 ["INT_ADD", "register:40f0:8", ["const:55c838:8", "const:4:8"]]
- 0055c838 ["CALL", null, ["callee:0055cd64:8"]]
+ 0055cb58 ["INT_ADD", "register:40f0:8", ["const:55cb58:8", "const:4:8"]]
+ 0055cb58 ["CALL", null, ["callee:0055cd64:8"]]
- 0055c85c ["INT_ADD", "register:40f0:8", ["const:55c85c:8", "const:4:8"]]
- 0055c85c ["CALL", null, ["callee:00c58f80:8"]]
+ 0055cb7c ["INT_ADD", "register:40f0:8", ["const:55cb7c:8", "const:4:8"]]
+ 0055cb7c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-67ded227331130eeacc5336ee54e79c8"></a>

### [`0055c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c8c8.md) → [`0055cbe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cbe8.md) FUN_0055cbe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0055c724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c724.md) [`0055ca44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055ca44.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`0055ca44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ca44.md) [`0055cd64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cd64.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00535ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ecc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055c940 ["INT_ADD", "register:40f0:8", ["const:55c940:8", "const:4:8"]]
- 0055c940 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055cc60 ["INT_ADD", "register:40f0:8", ["const:55cc60:8", "const:4:8"]]
+ 0055cc60 ["CALL", null, ["callee:00c58f30:8"]]
- 0055c964 ["INT_ADD", "register:40f0:8", ["const:55c964:8", "const:4:8"]]
- 0055c964 ["CALL", null, ["callee:00c59130:8"]]
+ 0055cc84 ["INT_ADD", "register:40f0:8", ["const:55cc84:8", "const:4:8"]]
+ 0055cc84 ["CALL", null, ["callee:00c59130:8"]]
- 0055c990 ["INT_ADD", "register:40f0:8", ["const:55c990:8", "const:4:8"]]
- 0055c990 ["CALL", null, ["callee:00c59130:8"]]
+ 0055ccb0 ["INT_ADD", "register:40f0:8", ["const:55ccb0:8", "const:4:8"]]
+ 0055ccb0 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-24a40af8b43cf218efa2519de36c7085"></a>

### [`0055cd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cd70.md) → [`0055d090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d090.md) FUN_0055d090

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055cd8c ["INT_ADD", "register:40f0:8", ["const:55cd8c:8", "const:4:8"]]
- 0055cd8c ["CALL", null, ["callee:00c54d90:8"]]
+ 0055d0ac ["INT_ADD", "register:40f0:8", ["const:55d0ac:8", "const:4:8"]]
+ 0055d0ac ["CALL", null, ["callee:00c54d90:8"]]
- 0055cdac ["COPY", "register:0:8", ["register:4040:8"]]
- 0055cdac ["INT_ADD", "register:40f0:8", ["const:55cdac:8", "const:4:8"]]
- 0055cdac ["CALLIND", null, ["register:0:8"]]
+ 0055d0cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d0cc ["INT_ADD", "register:40f0:8", ["const:55d0cc:8", "const:4:8"]]
+ 0055d0cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-572cc4f29921516a22d699b84d813774"></a>

### [`0055cea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cea8.md) → [`0055d1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d1c8.md) FUN_0055d1c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0055d070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d070.md) [`0055d1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d1d0.md) [`0055d330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d330.md) · 呼出先 2件 [`0053c1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c1b8.md) [`0055de10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055de10.md)
- 新版 呼出元 3件 [`0055d390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d390.md) [`0055d4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d4f0.md) [`0055d650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d650.md) · 呼出先 2件 [`0053c4d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c4d8.md) [`0055e130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055cee0 ["INT_ADD", "register:40f0:8", ["const:55cee0:8", "const:4:8"]]
- 0055cee0 ["CALL", null, ["callee:0055e130:8"]]
+ 0055d200 ["INT_ADD", "register:40f0:8", ["const:55d200:8", "const:4:8"]]
+ 0055d200 ["CALL", null, ["callee:0055e130:8"]]
- 0055cf34 ["INT_ADD", "register:40f0:8", ["const:55cf34:8", "const:4:8"]]
- 0055cf34 ["CALL", null, ["callee:0053c4d8:8"]]
+ 0055d254 ["INT_ADD", "register:40f0:8", ["const:55d254:8", "const:4:8"]]
+ 0055d254 ["CALL", null, ["callee:0053c4d8:8"]]
~~~


<a id="compare-aeed13dde8300a7773a2ba5cdbf8cfe1"></a>

### [`0055cff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cff8.md) → [`0055d318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d318.md) FUN_0055d318

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00467dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467dfc.md) · 呼出先 3件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0046811c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046811c.md) · 呼出先 3件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055d01c ["INT_ADD", "register:40f0:8", ["const:55d01c:8", "const:4:8"]]
- 0055d01c ["CALL", null, ["callee:00c54d60:8"]]
+ 0055d33c ["INT_ADD", "register:40f0:8", ["const:55d33c:8", "const:4:8"]]
+ 0055d33c ["CALL", null, ["callee:00c54d60:8"]]
- 0055d034 ["INT_ADD", "register:40f0:8", ["const:55d034:8", "const:4:8"]]
- 0055d034 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055d354 ["INT_ADD", "register:40f0:8", ["const:55d354:8", "const:4:8"]]
+ 0055d354 ["CALL", null, ["callee:00c54d90:8"]]
- 0055d058 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055d058 ["INT_ADD", "register:40f0:8", ["const:55d058:8", "const:4:8"]]
- 0055d058 ["CALLIND", null, ["register:0:8"]]
+ 0055d378 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d378 ["INT_ADD", "register:40f0:8", ["const:55d378:8", "const:4:8"]]
+ 0055d378 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-84481ceefc89c918e6e8721147caf5dd"></a>

### [`0055d070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d070.md) → [`0055d390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d390.md) FUN_0055d390

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0055cea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cea8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0055d1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d1c8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055d0b8 ["INT_ADD", "register:40f0:8", ["const:55d0b8:8", "const:4:8"]]
- 0055d0b8 ["CALL", null, ["callee:0055d1c8:8"]]
+ 0055d3d8 ["INT_ADD", "register:40f0:8", ["const:55d3d8:8", "const:4:8"]]
+ 0055d3d8 ["CALL", null, ["callee:0055d1c8:8"]]
- 0055d0dc ["INT_ADD", "register:40f0:8", ["const:55d0dc:8", "const:4:8"]]
- 0055d0dc ["CALL", null, ["callee:00c54d60:8"]]
+ 0055d3fc ["INT_ADD", "register:40f0:8", ["const:55d3fc:8", "const:4:8"]]
+ 0055d3fc ["CALL", null, ["callee:00c54d60:8"]]
- 0055d100 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055d100 ["INT_ADD", "register:40f0:8", ["const:55d100:8", "const:4:8"]]
- 0055d100 ["CALLIND", null, ["register:0:8"]]
+ 0055d420 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d420 ["INT_ADD", "register:40f0:8", ["const:55d420:8", "const:4:8"]]
+ 0055d420 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-541f62c9345e4235cf8ba921b199769a"></a>

### [`0055d180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d180.md) → [`0055d4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d4a0.md) FUN_0055d4a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055d19c ["INT_ADD", "register:40f0:8", ["const:55d19c:8", "const:4:8"]]
- 0055d19c ["CALL", null, ["callee:00c54d90:8"]]
+ 0055d4bc ["INT_ADD", "register:40f0:8", ["const:55d4bc:8", "const:4:8"]]
+ 0055d4bc ["CALL", null, ["callee:00c54d90:8"]]
- 0055d1bc ["COPY", "register:0:8", ["register:4040:8"]]
- 0055d1bc ["INT_ADD", "register:40f0:8", ["const:55d1bc:8", "const:4:8"]]
- 0055d1bc ["CALLIND", null, ["register:0:8"]]
+ 0055d4dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d4dc ["INT_ADD", "register:40f0:8", ["const:55d4dc:8", "const:4:8"]]
+ 0055d4dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-95af92abb734ffcb2833f52ee55ad17c"></a>

### [`0055d1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d1d0.md) → [`0055d4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d4f0.md) FUN_0055d4f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0055cea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cea8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0055d1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d1c8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055d23c ["INT_ADD", "register:40f0:8", ["const:55d23c:8", "const:4:8"]]
- 0055d23c ["CALL", null, ["callee:0055d1c8:8"]]
+ 0055d55c ["INT_ADD", "register:40f0:8", ["const:55d55c:8", "const:4:8"]]
+ 0055d55c ["CALL", null, ["callee:0055d1c8:8"]]
- 0055d264 ["INT_ADD", "register:40f0:8", ["const:55d264:8", "const:4:8"]]
- 0055d264 ["CALL", null, ["callee:00c54d60:8"]]
+ 0055d584 ["INT_ADD", "register:40f0:8", ["const:55d584:8", "const:4:8"]]
+ 0055d584 ["CALL", null, ["callee:00c54d60:8"]]
- 0055d2a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055d2a4 ["INT_ADD", "register:40f0:8", ["const:55d2a4:8", "const:4:8"]]
- 0055d2a4 ["CALLIND", null, ["register:0:8"]]
+ 0055d5c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d5c4 ["INT_ADD", "register:40f0:8", ["const:55d5c4:8", "const:4:8"]]
+ 0055d5c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f7e0e131ef0c8007d9568df70008bca4"></a>

### [`0055d330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d330.md) → [`0055d650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d650.md) FUN_0055d650

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0055cea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cea8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0055d1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d1c8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055d370 ["INT_ADD", "register:40f0:8", ["const:55d370:8", "const:4:8"]]
- 0055d370 ["CALL", null, ["callee:0055d1c8:8"]]
+ 0055d690 ["INT_ADD", "register:40f0:8", ["const:55d690:8", "const:4:8"]]
+ 0055d690 ["CALL", null, ["callee:0055d1c8:8"]]
- 0055d394 ["INT_ADD", "register:40f0:8", ["const:55d394:8", "const:4:8"]]
- 0055d394 ["CALL", null, ["callee:00c54d60:8"]]
+ 0055d6b4 ["INT_ADD", "register:40f0:8", ["const:55d6b4:8", "const:4:8"]]
+ 0055d6b4 ["CALL", null, ["callee:00c54d60:8"]]
- 0055d3b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055d3b4 ["INT_ADD", "register:40f0:8", ["const:55d3b4:8", "const:4:8"]]
- 0055d3b4 ["CALLIND", null, ["register:0:8"]]
+ 0055d6d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d6d4 ["INT_ADD", "register:40f0:8", ["const:55d6d4:8", "const:4:8"]]
+ 0055d6d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-997a99e71ef96b0278a280743c2362d2"></a>

### [`0055d5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d5d8.md) → [`0055d8f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d8f8.md) FUN_0055d8f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055d5f4 ["INT_ADD", "register:40f0:8", ["const:55d5f4:8", "const:4:8"]]
- 0055d5f4 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055d914 ["INT_ADD", "register:40f0:8", ["const:55d914:8", "const:4:8"]]
+ 0055d914 ["CALL", null, ["callee:00c54d90:8"]]
- 0055d614 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055d614 ["INT_ADD", "register:40f0:8", ["const:55d614:8", "const:4:8"]]
- 0055d614 ["CALLIND", null, ["register:0:8"]]
+ 0055d934 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d934 ["INT_ADD", "register:40f0:8", ["const:55d934:8", "const:4:8"]]
+ 0055d934 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1d454984e4a365ff8559b5ed52635467"></a>

### [`0055d628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d628.md) → [`0055d948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d948.md) FUN_0055d948

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0055db9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055db9c.md) [`0055e734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e734.md) [`0058fd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fd14.md) [`0058fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fddc.md) [`0058ff68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ff68.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0055debc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055debc.md) [`0055ea54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ea54.md) [`00590034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590034.md) [`005900fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005900fc.md) [`00590288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590288.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055d670 ["INT_ADD", "register:40f0:8", ["const:55d670:8", "const:4:8"]]
- 0055d670 ["CALL", null, ["callee:0055debc:8"]]
+ 0055d990 ["INT_ADD", "register:40f0:8", ["const:55d990:8", "const:4:8"]]
+ 0055d990 ["CALL", null, ["callee:0055debc:8"]]
- 0055d6a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055d6a0 ["INT_ADD", "register:40f0:8", ["const:55d6a0:8", "const:4:8"]]
- 0055d6a0 ["CALLIND", null, ["register:0:8"]]
+ 0055d9c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d9c0 ["INT_ADD", "register:40f0:8", ["const:55d9c0:8", "const:4:8"]]
+ 0055d9c0 ["CALLIND", null, ["register:0:8"]]
- 0055d6b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055d6b8 ["INT_ADD", "register:40f0:8", ["const:55d6b8:8", "const:4:8"]]
- 0055d6b8 ["CALLIND", null, ["register:0:8"]]
+ 0055d9d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055d9d8 ["INT_ADD", "register:40f0:8", ["const:55d9d8:8", "const:4:8"]]
+ 0055d9d8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-307b9f3be34fb53e0126ff148be4afce"></a>

### [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) → [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) FUN_0055db20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0055db9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055db9c.md) [`0055e734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e734.md) [`0058fd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fd14.md) [`0058fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fddc.md) [`0058fea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fea0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0055debc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055debc.md) [`0055ea54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ea54.md) [`00590034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590034.md) [`005900fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005900fc.md) [`005901c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005901c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055d860 ["INT_ADD", "register:40f0:8", ["const:55d860:8", "const:4:8"]]
- 0055d860 ["CALL", null, ["callee:0055debc:8"]]
+ 0055db80 ["INT_ADD", "register:40f0:8", ["const:55db80:8", "const:4:8"]]
+ 0055db80 ["CALL", null, ["callee:0055debc:8"]]
- 0055d8b4 ["INT_ADD", "register:40f0:8", ["const:55d8b4:8", "const:4:8"]]
- 0055d8b4 ["CALL", null, ["callee:005900fc:8"]]
+ 0055dbd4 ["INT_ADD", "register:40f0:8", ["const:55dbd4:8", "const:4:8"]]
+ 0055dbd4 ["CALL", null, ["callee:005900fc:8"]]
- 0055d8c0 ["INT_ADD", "register:40f0:8", ["const:55d8c0:8", "const:4:8"]]
- 0055d8c0 ["CALL", null, ["callee:00590288:8"]]
+ 0055dbe0 ["INT_ADD", "register:40f0:8", ["const:55dbe0:8", "const:4:8"]]
+ 0055dbe0 ["CALL", null, ["callee:00590288:8"]]
~~~


<a id="compare-2bd93ca019a64665c6174f9ad3866c84"></a>

### [`0055d9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d9dc.md) → [`0055dcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055dcfc.md) FUN_0055dcfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0055db9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055db9c.md) [`0055e734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e734.md) [`0058fc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fc80.md) [`0058fd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fd14.md) [`0058fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fddc.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0055debc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055debc.md) [`0055ea54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ea54.md) [`0058ffa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058ffa0.md) [`00590034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590034.md) [`005900fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005900fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055da14 ["INT_ADD", "register:40f0:8", ["const:55da14:8", "const:4:8"]]
- 0055da14 ["CALL", null, ["callee:0055debc:8"]]
+ 0055dd34 ["INT_ADD", "register:40f0:8", ["const:55dd34:8", "const:4:8"]]
+ 0055dd34 ["CALL", null, ["callee:0055debc:8"]]
- 0055da5c ["INT_ADD", "register:40f0:8", ["const:55da5c:8", "const:4:8"]]
- 0055da5c ["CALL", null, ["callee:005900fc:8"]]
+ 0055dd7c ["INT_ADD", "register:40f0:8", ["const:55dd7c:8", "const:4:8"]]
+ 0055dd7c ["CALL", null, ["callee:005900fc:8"]]
- 0055da64 ["INT_ADD", "register:40f0:8", ["const:55da64:8", "const:4:8"]]
- 0055da64 ["CALL", null, ["callee:0058ffa0:8"]]
+ 0055dd84 ["INT_ADD", "register:40f0:8", ["const:55dd84:8", "const:4:8"]]
+ 0055dd84 ["CALL", null, ["callee:0058ffa0:8"]]
~~~


<a id="compare-3a832011b25f2f99cfed3ba2d1aa6398"></a>

### [`0055db4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055db4c.md) → [`0055de6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055de6c.md) FUN_0055de6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055db68 ["INT_ADD", "register:40f0:8", ["const:55db68:8", "const:4:8"]]
- 0055db68 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055de88 ["INT_ADD", "register:40f0:8", ["const:55de88:8", "const:4:8"]]
+ 0055de88 ["CALL", null, ["callee:00c54d90:8"]]
- 0055db88 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055db88 ["INT_ADD", "register:40f0:8", ["const:55db88:8", "const:4:8"]]
- 0055db88 ["CALLIND", null, ["register:0:8"]]
+ 0055dea8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055dea8 ["INT_ADD", "register:40f0:8", ["const:55dea8:8", "const:4:8"]]
+ 0055dea8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-16d159580a6ebde884af8af32da09f1a"></a>

### [`0055db9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055db9c.md) → [`0055debc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055debc.md) FUN_0055debc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0055d628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d628.md) [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) [`0055d9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d9dc.md) · 呼出先 4件 [`0058ffcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ffcc.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`0055d948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d948.md) [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) [`0055dcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055dcfc.md) · 呼出先 4件 [`005902ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005902ec.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055dbd4 ["INT_ADD", "register:40f0:8", ["const:55dbd4:8", "const:4:8"]]
- 0055dbd4 ["CALL", null, ["callee:005902ec:8"]]
+ 0055def4 ["INT_ADD", "register:40f0:8", ["const:55def4:8", "const:4:8"]]
+ 0055def4 ["CALL", null, ["callee:005902ec:8"]]
- 0055dbf4 ["INT_ADD", "register:40f0:8", ["const:55dbf4:8", "const:4:8"]]
- 0055dbf4 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055df14 ["INT_ADD", "register:40f0:8", ["const:55df14:8", "const:4:8"]]
+ 0055df14 ["CALL", null, ["callee:00c54d90:8"]]
- 0055dc08 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055dc08 ["INT_ADD", "register:40f0:8", ["const:55dc08:8", "const:4:8"]]
- 0055dc08 ["CALLIND", null, ["register:0:8"]]
+ 0055df28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055df28 ["INT_ADD", "register:40f0:8", ["const:55df28:8", "const:4:8"]]
+ 0055df28 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-529b75e2ed0a75bcfedecb7f5e1bfab4"></a>

### [`0055de10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055de10.md) → [`0055e130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e130.md) FUN_0055e130

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0055cea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cea8.md) · 呼出先 5件 [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0055d1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d1c8.md) · 呼出先 5件 [`0046c7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7ac.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055de54 ["INT_ADD", "register:40f0:8", ["const:55de54:8", "const:4:8"]]
- 0055de54 ["CALL", null, ["callee:00c58f50:8"]]
+ 0055e174 ["INT_ADD", "register:40f0:8", ["const:55e174:8", "const:4:8"]]
+ 0055e174 ["CALL", null, ["callee:00c58f50:8"]]
- 0055de9c ["INT_ADD", "register:40f0:8", ["const:55de9c:8", "const:4:8"]]
- 0055de9c ["CALL", null, ["callee:00c58f30:8"]]
+ 0055e1bc ["INT_ADD", "register:40f0:8", ["const:55e1bc:8", "const:4:8"]]
+ 0055e1bc ["CALL", null, ["callee:00c58f30:8"]]
- 0055dec4 ["INT_ADD", "register:40f0:8", ["const:55dec4:8", "const:4:8"]]
- 0055dec4 ["CALL", null, ["callee:00c590a0:8"]]
+ 0055e1e4 ["INT_ADD", "register:40f0:8", ["const:55e1e4:8", "const:4:8"]]
+ 0055e1e4 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-c18334d440b6f61281bccc47894ce084"></a>

### [`0055df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055df40.md) → [`0055e260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e260.md) FUN_0055e260

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0055d508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d508.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0055d828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d828.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046c7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7ac.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055dfb4 ["INT_ADD", "register:40f0:8", ["const:55dfb4:8", "const:4:8"]]
- 0055dfb4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055e2d4 ["INT_ADD", "register:40f0:8", ["const:55e2d4:8", "const:4:8"]]
+ 0055e2d4 ["CALL", null, ["callee:00c58f30:8"]]
- 0055e02c ["INT_ADD", "register:40f0:8", ["const:55e02c:8", "const:4:8"]]
- 0055e02c ["CALL", null, ["callee:00c590a0:8"]]
+ 0055e34c ["INT_ADD", "register:40f0:8", ["const:55e34c:8", "const:4:8"]]
+ 0055e34c ["CALL", null, ["callee:00c590a0:8"]]
- 0055e06c ["INT_ADD", "register:40f0:8", ["const:55e06c:8", "const:4:8"]]
- 0055e06c ["CALL", null, ["callee:0046c7ac:8"]]
+ 0055e38c ["INT_ADD", "register:40f0:8", ["const:55e38c:8", "const:4:8"]]
+ 0055e38c ["CALL", null, ["callee:0046c7ac:8"]]
~~~


<a id="compare-7b57a3ce868e9f784536c11280948a75"></a>

### [`0055e074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e074.md) → [`0055e394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e394.md) FUN_0055e394

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0055cdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cdc0.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0055d0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d0e0.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046c7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7ac.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055e0f8 ["INT_ADD", "register:40f0:8", ["const:55e0f8:8", "const:4:8"]]
- 0055e0f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055e418 ["INT_ADD", "register:40f0:8", ["const:55e418:8", "const:4:8"]]
+ 0055e418 ["CALL", null, ["callee:00c58f30:8"]]
- 0055e130 ["INT_ADD", "register:40f0:8", ["const:55e130:8", "const:4:8"]]
- 0055e130 ["CALL", null, ["callee:00c58fe0:8"]]
+ 0055e450 ["INT_ADD", "register:40f0:8", ["const:55e450:8", "const:4:8"]]
+ 0055e450 ["CALL", null, ["callee:00c58fe0:8"]]
- 0055e198 ["INT_ADD", "register:40f0:8", ["const:55e198:8", "const:4:8"]]
- 0055e198 ["CALL", null, ["callee:00c58fe0:8"]]
+ 0055e4b8 ["INT_ADD", "register:40f0:8", ["const:55e4b8:8", "const:4:8"]]
+ 0055e4b8 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-a75ab4ba6a61b0cb40a9b514732146e1"></a>

### [`0055e258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e258.md) → [`0055e578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e578.md) FUN_0055e578

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0055cdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cdc0.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0055d0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d0e0.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00535ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ecc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055e2e0 ["INT_ADD", "register:40f0:8", ["const:55e2e0:8", "const:4:8"]]
- 0055e2e0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055e600 ["INT_ADD", "register:40f0:8", ["const:55e600:8", "const:4:8"]]
+ 0055e600 ["CALL", null, ["callee:00c58f30:8"]]
- 0055e31c ["INT_ADD", "register:40f0:8", ["const:55e31c:8", "const:4:8"]]
- 0055e31c ["CALL", null, ["callee:00c58fe0:8"]]
+ 0055e63c ["INT_ADD", "register:40f0:8", ["const:55e63c:8", "const:4:8"]]
+ 0055e63c ["CALL", null, ["callee:00c58fe0:8"]]
- 0055e3a4 ["INT_ADD", "register:40f0:8", ["const:55e3a4:8", "const:4:8"]]
- 0055e3a4 ["CALL", null, ["callee:00c590a0:8"]]
+ 0055e6c4 ["INT_ADD", "register:40f0:8", ["const:55e6c4:8", "const:4:8"]]
+ 0055e6c4 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-8fe7f92922dae26df89e0b5eb68bf038"></a>

### [`0055e734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e734.md) → [`0055ea54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ea54.md) FUN_0055ea54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0055d628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d628.md) [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) [`0055d9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d9dc.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 3件 [`0055d948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d948.md) [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) [`0055dcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055dcfc.md) · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055e758 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055e758 ["INT_ADD", "register:40f0:8", ["const:55e758:8", "const:4:8"]]
- 0055e758 ["CALLIND", null, ["register:0:8"]]
+ 0055ea78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055ea78 ["INT_ADD", "register:40f0:8", ["const:55ea78:8", "const:4:8"]]
+ 0055ea78 ["CALLIND", null, ["register:0:8"]]
- 0055e778 ["INT_ADD", "register:40f0:8", ["const:55e778:8", "const:4:8"]]
- 0055e778 ["CALL", null, ["callee:00c54d60:8"]]
+ 0055ea98 ["INT_ADD", "register:40f0:8", ["const:55ea98:8", "const:4:8"]]
+ 0055ea98 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-384bfe8c1263e5c6c644ecac194b3b4e"></a>

### [`0055e790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e790.md) → [`0055eab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055eab0.md) FUN_0055eab0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0048d3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d3b0.md) · 呼出先 4件 [`00581a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00581/00581a74.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0048d6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d6d0.md) · 呼出先 4件 [`00581d94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00581/00581d94.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055e7c0 ["INT_ADD", "register:40f0:8", ["const:55e7c0:8", "const:4:8"]]
- 0055e7c0 ["CALL", null, ["callee:00581d94:8"]]
+ 0055eae0 ["INT_ADD", "register:40f0:8", ["const:55eae0:8", "const:4:8"]]
+ 0055eae0 ["CALL", null, ["callee:00581d94:8"]]
- 0055e7dc ["COPY", "register:0:8", ["register:4048:8"]]
- 0055e7dc ["INT_ADD", "register:40f0:8", ["const:55e7dc:8", "const:4:8"]]
- 0055e7dc ["CALLIND", null, ["register:0:8"]]
+ 0055eafc ["COPY", "register:0:8", ["register:4048:8"]]
+ 0055eafc ["INT_ADD", "register:40f0:8", ["const:55eafc:8", "const:4:8"]]
+ 0055eafc ["CALLIND", null, ["register:0:8"]]
- 0055e7f0 ["INT_ADD", "register:40f0:8", ["const:55e7f0:8", "const:4:8"]]
- 0055e7f0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055eb10 ["INT_ADD", "register:40f0:8", ["const:55eb10:8", "const:4:8"]]
+ 0055eb10 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-a23638f5322dff59cf7b44d11077bc9a"></a>

### [`0055e8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e8b4.md) → [`0055ebd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ebd4.md) FUN_0055ebd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0046597c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/0046597c.md) [`0048d2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d2fc.md) [`005ad820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad820.md) [`005ae924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae924.md) · 呼出先 4件 [`00581a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00581/00581a74.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`00465c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465c9c.md) [`0048d61c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d61c.md) [`005adbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adbd0.md) [`005aecd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aecd4.md) · 呼出先 4件 [`00581d94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00581/00581d94.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055e8f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055e8f0 ["INT_ADD", "register:40f0:8", ["const:55e8f0:8", "const:4:8"]]
- 0055e8f0 ["CALLIND", null, ["register:0:8"]]
+ 0055ec10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055ec10 ["INT_ADD", "register:40f0:8", ["const:55ec10:8", "const:4:8"]]
+ 0055ec10 ["CALLIND", null, ["register:0:8"]]
- 0055e900 ["INT_ADD", "register:40f0:8", ["const:55e900:8", "const:4:8"]]
- 0055e900 ["CALL", null, ["callee:00581d94:8"]]
+ 0055ec20 ["INT_ADD", "register:40f0:8", ["const:55ec20:8", "const:4:8"]]
+ 0055ec20 ["CALL", null, ["callee:00581d94:8"]]
- 0055e91c ["COPY", "register:0:8", ["register:4048:8"]]
- 0055e91c ["INT_ADD", "register:40f0:8", ["const:55e91c:8", "const:4:8"]]
- 0055e91c ["CALLIND", null, ["register:0:8"]]
+ 0055ec3c ["COPY", "register:0:8", ["register:4048:8"]]
+ 0055ec3c ["INT_ADD", "register:40f0:8", ["const:55ec3c:8", "const:4:8"]]
+ 0055ec3c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-abc3acb331bfb696c4da8528e77b8d41"></a>

### [`0055ea08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055ea08.md) → [`0055ed28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ed28.md) FUN_0055ed28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00765180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00765/00765180.md) [`00765780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00765/00765780.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 4件 [`00581ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00581/00581ae8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`0076555c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/0076555c.md) [`00765b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765b5c.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 4件 [`00581e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00581/00581e08.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055ea54 ["INT_ADD", "register:40f0:8", ["const:55ea54:8", "const:4:8"]]
- 0055ea54 ["CALL", null, ["callee:00581e08:8"]]
+ 0055ed74 ["INT_ADD", "register:40f0:8", ["const:55ed74:8", "const:4:8"]]
+ 0055ed74 ["CALL", null, ["callee:00581e08:8"]]
- 0055ea70 ["COPY", "register:0:8", ["register:4048:8"]]
- 0055ea70 ["INT_ADD", "register:40f0:8", ["const:55ea70:8", "const:4:8"]]
- 0055ea70 ["CALLIND", null, ["register:0:8"]]
+ 0055ed90 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0055ed90 ["INT_ADD", "register:40f0:8", ["const:55ed90:8", "const:4:8"]]
+ 0055ed90 ["CALLIND", null, ["register:0:8"]]
- 0055ea84 ["INT_ADD", "register:40f0:8", ["const:55ea84:8", "const:4:8"]]
- 0055ea84 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055eda4 ["INT_ADD", "register:40f0:8", ["const:55eda4:8", "const:4:8"]]
+ 0055eda4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-ea3371c189bd27107805f938b0cb7e78"></a>

### [`0055eb5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055eb5c.md) → [`0055ee7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ee7c.md) FUN_0055ee7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0044ff9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044ff9c.md) · 呼出先 4件 [`00581ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00581/00581ae8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`004502bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/004502bc.md) · 呼出先 4件 [`00581e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00581/00581e08.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055eba0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055eba0 ["INT_ADD", "register:40f0:8", ["const:55eba0:8", "const:4:8"]]
- 0055eba0 ["CALLIND", null, ["register:0:8"]]
+ 0055eec0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055eec0 ["INT_ADD", "register:40f0:8", ["const:55eec0:8", "const:4:8"]]
+ 0055eec0 ["CALLIND", null, ["register:0:8"]]
- 0055ebb4 ["INT_ADD", "register:40f0:8", ["const:55ebb4:8", "const:4:8"]]
- 0055ebb4 ["CALL", null, ["callee:00581e08:8"]]
+ 0055eed4 ["INT_ADD", "register:40f0:8", ["const:55eed4:8", "const:4:8"]]
+ 0055eed4 ["CALL", null, ["callee:00581e08:8"]]
- 0055ebd0 ["COPY", "register:0:8", ["register:4048:8"]]
- 0055ebd0 ["INT_ADD", "register:40f0:8", ["const:55ebd0:8", "const:4:8"]]
- 0055ebd0 ["CALLIND", null, ["register:0:8"]]
+ 0055eef0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0055eef0 ["INT_ADD", "register:40f0:8", ["const:55eef0:8", "const:4:8"]]
+ 0055eef0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b969675979e698780a517c76bbe76667"></a>

### [`0055ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055ed20.md) → [`0055f040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f040.md) FUN_0055f040

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055ed3c ["INT_ADD", "register:40f0:8", ["const:55ed3c:8", "const:4:8"]]
- 0055ed3c ["CALL", null, ["callee:00c54d60:8"]]
+ 0055f05c ["INT_ADD", "register:40f0:8", ["const:55f05c:8", "const:4:8"]]
+ 0055f05c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-6f6838c05547a3d6a6c07263c155a05d"></a>

### [`0055f0d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f0d8.md) → [`0055f3f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f3f8.md) FUN_0055f3f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0048d85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d85c.md) [`0048d95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d95c.md) · 呼出先 5件 [`005817a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00581/005817a4.md) [`00597658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597658.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0048db7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048db7c.md) [`0048dc7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048dc7c.md) · 呼出先 5件 [`00581ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00581/00581ac4.md) [`00597978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597978.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055f120 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055f120 ["INT_ADD", "register:40f0:8", ["const:55f120:8", "const:4:8"]]
- 0055f120 ["CALLIND", null, ["register:0:8"]]
+ 0055f440 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055f440 ["INT_ADD", "register:40f0:8", ["const:55f440:8", "const:4:8"]]
+ 0055f440 ["CALLIND", null, ["register:0:8"]]
- 0055f138 ["INT_ADD", "register:40f0:8", ["const:55f138:8", "const:4:8"]]
- 0055f138 ["CALL", null, ["callee:00581ac4:8"]]
+ 0055f458 ["INT_ADD", "register:40f0:8", ["const:55f458:8", "const:4:8"]]
+ 0055f458 ["CALL", null, ["callee:00581ac4:8"]]
- 0055f154 ["COPY", "register:0:8", ["register:4048:8"]]
- 0055f154 ["INT_ADD", "register:40f0:8", ["const:55f154:8", "const:4:8"]]
- 0055f154 ["CALLIND", null, ["register:0:8"]]
+ 0055f474 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0055f474 ["INT_ADD", "register:40f0:8", ["const:55f474:8", "const:4:8"]]
+ 0055f474 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0d9015cb64fe5b9e9ee33c74e40c86eb"></a>

### [`0055fcbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055fcbc.md) → [`0055ffdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055ffdc.md) FUN_0055ffdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055fcec ["INT_ADD", "register:40f0:8", ["const:55fcec:8", "const:4:8"]]
- 0055fcec ["CALL", null, ["callee:0046de60:8"]]
+ 0056000c ["INT_ADD", "register:40f0:8", ["const:56000c:8", "const:4:8"]]
+ 0056000c ["CALL", null, ["callee:0046de60:8"]]
- 0055fd10 ["INT_ADD", "register:40f0:8", ["const:55fd10:8", "const:4:8"]]
- 0055fd10 ["CALL", null, ["callee:00c58f80:8"]]
+ 00560030 ["INT_ADD", "register:40f0:8", ["const:560030:8", "const:4:8"]]
+ 00560030 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-9b0cefd915c586d4724642d72f625e1a"></a>

### [`0055fd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055fd14.md) → [`00560034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560034.md) FUN_00560034

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055fd44 ["INT_ADD", "register:40f0:8", ["const:55fd44:8", "const:4:8"]]
- 0055fd44 ["CALL", null, ["callee:0046de60:8"]]
+ 00560064 ["INT_ADD", "register:40f0:8", ["const:560064:8", "const:4:8"]]
+ 00560064 ["CALL", null, ["callee:0046de60:8"]]
- 0055fd68 ["INT_ADD", "register:40f0:8", ["const:55fd68:8", "const:4:8"]]
- 0055fd68 ["CALL", null, ["callee:00c58f80:8"]]
+ 00560088 ["INT_ADD", "register:40f0:8", ["const:560088:8", "const:4:8"]]
+ 00560088 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-0d53ecf63e76baa5f6ad97238c44603a"></a>

### [`0055fefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055fefc.md) → [`0056021c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/0056021c.md) FUN_0056021c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005605ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005605ac.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005608cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005608cc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0055ff30 ["INT_ADD", "register:40f0:8", ["const:55ff30:8", "const:4:8"]]
- 0055ff30 ["CALL", null, ["callee:005608cc:8"]]
+ 00560250 ["INT_ADD", "register:40f0:8", ["const:560250:8", "const:4:8"]]
+ 00560250 ["CALL", null, ["callee:005608cc:8"]]
- 0055ff54 ["INT_ADD", "register:40f0:8", ["const:55ff54:8", "const:4:8"]]
- 0055ff54 ["CALL", null, ["callee:00c58f80:8"]]
+ 00560274 ["INT_ADD", "register:40f0:8", ["const:560274:8", "const:4:8"]]
+ 00560274 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-2b98135fb247be93965534c84c5307ff"></a>

### [`005604a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005604a8.md) → [`005607c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005607c8.md) FUN_005607c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0055f5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f5b8.md) [`0055f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f658.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`0055f8d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f8d8.md) [`0055f978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f978.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005604c4 ["INT_ADD", "register:40f0:8", ["const:5604c4:8", "const:4:8"]]
- 005604c4 ["CALL", null, ["callee:00c54d90:8"]]
+ 005607e4 ["INT_ADD", "register:40f0:8", ["const:5607e4:8", "const:4:8"]]
+ 005607e4 ["CALL", null, ["callee:00c54d90:8"]]
- 005604e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 005604e4 ["INT_ADD", "register:40f0:8", ["const:5604e4:8", "const:4:8"]]
- 005604e4 ["CALLIND", null, ["register:0:8"]]
+ 00560804 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00560804 ["INT_ADD", "register:40f0:8", ["const:560804:8", "const:4:8"]]
+ 00560804 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-137f7f9127165ed378787bf5b52d7bef"></a>

### [`005605ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005605ac.md) → [`005608cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005608cc.md) FUN_005608cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0055fefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055fefc.md) · 呼出先 1件 [`00c5a0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0b0.md)
- 新版 呼出元 1件 [`0056021c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/0056021c.md) · 呼出先 1件 [`00c5b080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00560740 ["INT_ADD", "register:40f0:8", ["const:560740:8", "const:4:8"]]
- 00560740 ["CALL", null, ["callee:00c5b080:8"]]
+ 00560a60 ["INT_ADD", "register:40f0:8", ["const:560a60:8", "const:4:8"]]
+ 00560a60 ["CALL", null, ["callee:00c5b080:8"]]
~~~


<a id="compare-f04c85335cb7232e610623bd6143426c"></a>

### [`00560b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560b48.md) → [`00560e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560e68.md) FUN_00560e68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) · 呼出先 2件 [`00560f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560f20.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`008745e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/008745e0.md) · 呼出先 2件 [`00561240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561240.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00560b68 ["INT_ADD", "register:40f0:8", ["const:560b68:8", "const:4:8"]]
- 00560b68 ["CALL", null, ["callee:00c58f30:8"]]
+ 00560e88 ["INT_ADD", "register:40f0:8", ["const:560e88:8", "const:4:8"]]
+ 00560e88 ["CALL", null, ["callee:00c58f30:8"]]
- 00560b78 ["INT_ADD", "register:40f0:8", ["const:560b78:8", "const:4:8"]]
- 00560b78 ["CALL", null, ["callee:00561240:8"]]
+ 00560e98 ["INT_ADD", "register:40f0:8", ["const:560e98:8", "const:4:8"]]
+ 00560e98 ["CALL", null, ["callee:00561240:8"]]
~~~


<a id="compare-c426922ea2d5ff5a30af6f2d42c91b12"></a>

### [`00560e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560e88.md) → [`005611a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/005611a8.md) FUN_005611a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005608e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005608e4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00560c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560c04.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00560ec4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00560ec4 ["INT_ADD", "register:40f0:8", ["const:560ec4:8", "const:4:8"]]
- 00560ec4 ["CALLIND", null, ["register:0:8"]]
+ 005611e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005611e4 ["INT_ADD", "register:40f0:8", ["const:5611e4:8", "const:4:8"]]
+ 005611e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2761b5d6a9d68050f44322261d2dd16d"></a>

### [`00560ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560ed8.md) → [`005611f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/005611f8.md) FUN_005611f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00560ef4 ["INT_ADD", "register:40f0:8", ["const:560ef4:8", "const:4:8"]]
- 00560ef4 ["CALL", null, ["callee:0045a0d4:8"]]
+ 00561214 ["INT_ADD", "register:40f0:8", ["const:561214:8", "const:4:8"]]
+ 00561214 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-e8644175307980319338ac275590704b"></a>

### [`00561054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561054.md) → [`00561374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561374.md) FUN_00561374

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00456848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456848.md) · 呼出先 2件 [`00562dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562dd0.md) [`00563008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563008.md)
- 新版 呼出元 1件 [`00456b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00456/00456b68.md) · 呼出先 2件 [`005630f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/005630f0.md) [`00563328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563328.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00561074 ["INT_ADD", "register:40f0:8", ["const:561074:8", "const:4:8"]]
- 00561074 ["CALL", null, ["callee:00563328:8"]]
+ 00561394 ["INT_ADD", "register:40f0:8", ["const:561394:8", "const:4:8"]]
+ 00561394 ["CALL", null, ["callee:00563328:8"]]
- 00561088 ["INT_ADD", "register:40f0:8", ["const:561088:8", "const:4:8"]]
- 00561088 ["CALL", null, ["callee:005630f0:8"]]
+ 005613a8 ["INT_ADD", "register:40f0:8", ["const:5613a8:8", "const:4:8"]]
+ 005613a8 ["CALL", null, ["callee:005630f0:8"]]
~~~


<a id="compare-01c4476b5925c125a23e65731400b970"></a>

### [`005610a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/005610a4.md) → [`005613c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/005613c4.md) FUN_005613c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0045444c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/0045444c.md) [`00456848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456848.md) · 呼出先 2件 [`005630d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/005630d8.md) [`00563320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563320.md)
- 新版 呼出元 2件 [`0045476c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00454/0045476c.md) [`00456b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00456/00456b68.md) · 呼出先 2件 [`005633f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/005633f8.md) [`00563640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563640.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005610c4 ["INT_ADD", "register:40f0:8", ["const:5610c4:8", "const:4:8"]]
- 005610c4 ["CALL", null, ["callee:00563640:8"]]
+ 005613e4 ["INT_ADD", "register:40f0:8", ["const:5613e4:8", "const:4:8"]]
+ 005613e4 ["CALL", null, ["callee:00563640:8"]]
- 005610d8 ["INT_ADD", "register:40f0:8", ["const:5610d8:8", "const:4:8"]]
- 005610d8 ["CALL", null, ["callee:005633f8:8"]]
+ 005613f8 ["INT_ADD", "register:40f0:8", ["const:5613f8:8", "const:4:8"]]
+ 005613f8 ["CALL", null, ["callee:005633f8:8"]]
~~~


<a id="compare-9c76e824862d51e11463069caf8baccb"></a>

### [`00561fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561fcc.md) → [`005622ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/005622ec.md) FUN_005622ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00561fe8 ["INT_ADD", "register:40f0:8", ["const:561fe8:8", "const:4:8"]]
- 00561fe8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00562308 ["INT_ADD", "register:40f0:8", ["const:562308:8", "const:4:8"]]
+ 00562308 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1a17a31437097e377924e2cb55a333e7"></a>

### [`00562734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562734.md) → [`00562a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562a54.md) FUN_00562a54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 20件 [`00562010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562010.md) [`005638dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/005638dc.md) [`0064b1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064b1e8.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006d02fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d02fc.md) · 呼出先 10件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 20件 [`00562330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562330.md) [`00563bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563bfc.md) [`0064b598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064b/0064b598.md) [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`006d06ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d0/006d06ac.md) · 呼出先 10件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00562814 ["INT_ADD", "register:40f0:8", ["const:562814:8", "const:4:8"]]
- 00562814 ["CALL", null, ["callee:00c59070:8"]]
+ 00562b34 ["INT_ADD", "register:40f0:8", ["const:562b34:8", "const:4:8"]]
+ 00562b34 ["CALL", null, ["callee:00c59070:8"]]
- 00562828 ["INT_ADD", "register:40f0:8", ["const:562828:8", "const:4:8"]]
- 00562828 ["CALL", null, ["callee:00c590f0:8"]]
+ 00562b48 ["INT_ADD", "register:40f0:8", ["const:562b48:8", "const:4:8"]]
+ 00562b48 ["CALL", null, ["callee:00c590f0:8"]]
- 005628c4 ["INT_ADD", "register:40f0:8", ["const:5628c4:8", "const:4:8"]]
- 005628c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00562be4 ["INT_ADD", "register:40f0:8", ["const:562be4:8", "const:4:8"]]
+ 00562be4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-81f2a991bc1f7c1b10173dc3f7b868ef"></a>

### [`00562cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562cc4.md) → [`00562fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562fe4.md) FUN_00562fe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00562d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562d30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00563050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563050.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00562cec ["INT_ADD", "register:40f0:8", ["const:562cec:8", "const:4:8"]]
- 00562cec ["CALL", null, ["callee:00563050:8"]]
+ 0056300c ["INT_ADD", "register:40f0:8", ["const:56300c:8", "const:4:8"]]
+ 0056300c ["CALL", null, ["callee:00563050:8"]]
~~~


<a id="compare-af5ccc3151d4c0dd875cc7dfe88740e7"></a>

### [`00562d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562d30.md) → [`00563050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563050.md) FUN_00563050

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00562cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562cc4.md) [`00562dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562dd0.md) [`005630d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/005630d8.md) [`00563464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563464.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00562fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562fe4.md) [`005630f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/005630f0.md) [`005633f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/005633f8.md) [`00563784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563784.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00562d68 ["INT_ADD", "register:40f0:8", ["const:562d68:8", "const:4:8"]]
- 00562d68 ["CALL", null, ["callee:00c58f50:8"]]
+ 00563088 ["INT_ADD", "register:40f0:8", ["const:563088:8", "const:4:8"]]
+ 00563088 ["CALL", null, ["callee:00c58f50:8"]]
- 00562d78 ["INT_ADD", "register:40f0:8", ["const:562d78:8", "const:4:8"]]
- 00562d78 ["CALL", null, ["callee:00c58f50:8"]]
+ 00563098 ["INT_ADD", "register:40f0:8", ["const:563098:8", "const:4:8"]]
+ 00563098 ["CALL", null, ["callee:00c58f50:8"]]
- 00562d88 ["INT_ADD", "register:40f0:8", ["const:562d88:8", "const:4:8"]]
- 00562d88 ["CALL", null, ["callee:00c58f50:8"]]
+ 005630a8 ["INT_ADD", "register:40f0:8", ["const:5630a8:8", "const:4:8"]]
+ 005630a8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a90289d4a0bc4836bc276b2ce3b0f7b8"></a>

### [`00562dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562dd0.md) → [`005630f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/005630f0.md) FUN_005630f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00561054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561054.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00562d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562d1c.md) [`00562d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562d30.md) [`00563008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563008.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00561374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561374.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0056303c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/0056303c.md) [`00563050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563050.md) [`00563328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563328.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00562e94 ["INT_ADD", "register:40f0:8", ["const:562e94:8", "const:4:8"]]
- 00562e94 ["CALL", null, ["callee:00c58f30:8"]]
+ 005631b4 ["INT_ADD", "register:40f0:8", ["const:5631b4:8", "const:4:8"]]
+ 005631b4 ["CALL", null, ["callee:00c58f30:8"]]
- 00562ec4 ["INT_ADD", "register:40f0:8", ["const:562ec4:8", "const:4:8"]]
- 00562ec4 ["CALL", null, ["callee:00563328:8"]]
+ 005631e4 ["INT_ADD", "register:40f0:8", ["const:5631e4:8", "const:4:8"]]
+ 005631e4 ["CALL", null, ["callee:00563328:8"]]
- 00562f58 ["INT_ADD", "register:40f0:8", ["const:562f58:8", "const:4:8"]]
- 00562f58 ["CALL", null, ["callee:00563050:8"]]
+ 00563278 ["INT_ADD", "register:40f0:8", ["const:563278:8", "const:4:8"]]
+ 00563278 ["CALL", null, ["callee:00563050:8"]]
~~~


<a id="compare-b7ce0adf5367c4dfcfa4b48b7ff5beb9"></a>

### [`00563008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563008.md) → [`00563328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563328.md) FUN_00563328

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00561054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561054.md) [`00562dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562dd0.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md)
- 新版 呼出元 2件 [`00561374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561374.md) [`005630f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/005630f0.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597968.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056302c ["INT_ADD", "register:40f0:8", ["const:56302c:8", "const:4:8"]]
- 0056302c ["CALL", null, ["callee:00597968:8"]]
+ 0056334c ["INT_ADD", "register:40f0:8", ["const:56334c:8", "const:4:8"]]
+ 0056334c ["CALL", null, ["callee:00597968:8"]]
- 00563054 ["INT_ADD", "register:40f0:8", ["const:563054:8", "const:4:8"]]
- 00563054 ["CALL", null, ["callee:0043be80:8"]]
+ 00563374 ["INT_ADD", "register:40f0:8", ["const:563374:8", "const:4:8"]]
+ 00563374 ["CALL", null, ["callee:0043be80:8"]]
- 00563088 ["INT_ADD", "register:40f0:8", ["const:563088:8", "const:4:8"]]
- 00563088 ["CALL", null, ["callee:0043be80:8"]]
+ 005633a8 ["INT_ADD", "register:40f0:8", ["const:5633a8:8", "const:4:8"]]
+ 005633a8 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-f4d8e10f6b3ee1858b26333e69424fb9"></a>

### [`005630d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/005630d8.md) → [`005633f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/005633f8.md) FUN_005633f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005610a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/005610a4.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00562d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562d1c.md) [`00562d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562d30.md) [`00563320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563320.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005613c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/005613c4.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0056303c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/0056303c.md) [`00563050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563050.md) [`00563640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563640.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005631a4 ["INT_ADD", "register:40f0:8", ["const:5631a4:8", "const:4:8"]]
- 005631a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005634c4 ["INT_ADD", "register:40f0:8", ["const:5634c4:8", "const:4:8"]]
+ 005634c4 ["CALL", null, ["callee:00c58f30:8"]]
- 005631d8 ["INT_ADD", "register:40f0:8", ["const:5631d8:8", "const:4:8"]]
- 005631d8 ["CALL", null, ["callee:00563640:8"]]
+ 005634f8 ["INT_ADD", "register:40f0:8", ["const:5634f8:8", "const:4:8"]]
+ 005634f8 ["CALL", null, ["callee:00563640:8"]]
- 0056326c ["INT_ADD", "register:40f0:8", ["const:56326c:8", "const:4:8"]]
- 0056326c ["CALL", null, ["callee:00563050:8"]]
+ 0056358c ["INT_ADD", "register:40f0:8", ["const:56358c:8", "const:4:8"]]
+ 0056358c ["CALL", null, ["callee:00563050:8"]]
~~~


<a id="compare-f03063274b2d12d66be5fdced259ed26"></a>

### [`00563320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563320.md) → [`00563640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563640.md) FUN_00563640

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005610a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/005610a4.md) [`005630d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/005630d8.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 2件 [`005613c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/005613c4.md) [`005633f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/005633f8.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00563354 ["INT_ADD", "register:40f0:8", ["const:563354:8", "const:4:8"]]
- 00563354 ["CALL", null, ["callee:00c54d60:8"]]
+ 00563674 ["INT_ADD", "register:40f0:8", ["const:563674:8", "const:4:8"]]
+ 00563674 ["CALL", null, ["callee:00c54d60:8"]]
- 0056337c ["INT_ADD", "register:40f0:8", ["const:56337c:8", "const:4:8"]]
- 0056337c ["CALL", null, ["callee:0043be80:8"]]
+ 0056369c ["INT_ADD", "register:40f0:8", ["const:56369c:8", "const:4:8"]]
+ 0056369c ["CALL", null, ["callee:0043be80:8"]]
- 005633a4 ["INT_ADD", "register:40f0:8", ["const:5633a4:8", "const:4:8"]]
- 005633a4 ["CALL", null, ["callee:0043be80:8"]]
+ 005636c4 ["INT_ADD", "register:40f0:8", ["const:5636c4:8", "const:4:8"]]
+ 005636c4 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-3a7a68cd0f95d96737dc7c5e84070ea5"></a>

### [`00563464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563464.md) → [`00563784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563784.md) FUN_00563784

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00562d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562d30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00563050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563050.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056349c ["INT_ADD", "register:40f0:8", ["const:56349c:8", "const:4:8"]]
- 0056349c ["CALL", null, ["callee:00563050:8"]]
+ 005637bc ["INT_ADD", "register:40f0:8", ["const:5637bc:8", "const:4:8"]]
+ 005637bc ["CALL", null, ["callee:00563050:8"]]
~~~


<a id="compare-c977a4623dbc293029692babb13fa97e"></a>

### [`0056374c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/0056374c.md) → [`00563a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563a6c.md) FUN_00563a6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00563768 ["INT_ADD", "register:40f0:8", ["const:563768:8", "const:4:8"]]
- 00563768 ["CALL", null, ["callee:00c58f50:8"]]
+ 00563a88 ["INT_ADD", "register:40f0:8", ["const:563a88:8", "const:4:8"]]
+ 00563a88 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-fdd427837c9550261a20598c6177f53a"></a>

### [`00563790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563790.md) → [`00563ab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563ab0.md) FUN_00563ab0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00562094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562094.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005637ac ["INT_ADD", "register:40f0:8", ["const:5637ac:8", "const:4:8"]]
- 005637ac ["CALL", null, ["callee:00c58f50:8"]]
+ 00563acc ["INT_ADD", "register:40f0:8", ["const:563acc:8", "const:4:8"]]
+ 00563acc ["CALL", null, ["callee:00c58f50:8"]]
- 005637bc ["INT_ADD", "register:40f0:8", ["const:5637bc:8", "const:4:8"]]
- 005637bc ["CALL", null, ["callee:00c58f50:8"]]
+ 00563adc ["INT_ADD", "register:40f0:8", ["const:563adc:8", "const:4:8"]]
+ 00563adc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1804074b528f9353150da6f1e81beb31"></a>

### [`00563b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563b44.md) → [`00563e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563e64.md) FUN_00563e64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005638dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/005638dc.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00549114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549114.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00563bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563bfc.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00549434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549434.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00563b94 ["INT_ADD", "register:40f0:8", ["const:563b94:8", "const:4:8"]]
- 00563b94 ["CALL", null, ["callee:0043be80:8"]]
+ 00563eb4 ["INT_ADD", "register:40f0:8", ["const:563eb4:8", "const:4:8"]]
+ 00563eb4 ["CALL", null, ["callee:0043be80:8"]]
- 00563bc0 ["INT_ADD", "register:40f0:8", ["const:563bc0:8", "const:4:8"]]
- 00563bc0 ["CALL", null, ["callee:0043be80:8"]]
+ 00563ee0 ["INT_ADD", "register:40f0:8", ["const:563ee0:8", "const:4:8"]]
+ 00563ee0 ["CALL", null, ["callee:0043be80:8"]]
- 00563bcc ["INT_ADD", "register:40f0:8", ["const:563bcc:8", "const:4:8"]]
- 00563bcc ["CALL", null, ["callee:00549434:8"]]
+ 00563eec ["INT_ADD", "register:40f0:8", ["const:563eec:8", "const:4:8"]]
+ 00563eec ["CALL", null, ["callee:00549434:8"]]
~~~


<a id="compare-4f887334a79c9c0b4c25608a10a1e10a"></a>

### [`00563c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563c54.md) → [`00563f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563f74.md) FUN_00563f74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00547bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547bf0.md) [`00564320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/00564320.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00547f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00547/00547f10.md) [`00564640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/00564640.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00563c68 ["INT_ADD", "register:40f0:8", ["const:563c68:8", "const:4:8"]]
- 00563c68 ["CALL", null, ["callee:00547f10:8"]]
+ 00563f88 ["INT_ADD", "register:40f0:8", ["const:563f88:8", "const:4:8"]]
+ 00563f88 ["CALL", null, ["callee:00547f10:8"]]
- 00563c84 ["INT_ADD", "register:40f0:8", ["const:563c84:8", "const:4:8"]]
- 00563c84 ["CALL", null, ["callee:00564640:8"]]
+ 00563fa4 ["INT_ADD", "register:40f0:8", ["const:563fa4:8", "const:4:8"]]
+ 00563fa4 ["CALL", null, ["callee:00564640:8"]]
~~~


<a id="compare-ee68651da01ded47518996369bc4782a"></a>

### [`00563ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563ca0.md) → [`00563fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563fc0.md) FUN_00563fc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00494128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494128.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00563cb8 ["INT_ADD", "register:40f0:8", ["const:563cb8:8", "const:4:8"]]
- 00563cb8 ["CALL", null, ["callee:00494128:8"]]
+ 00563fd8 ["INT_ADD", "register:40f0:8", ["const:563fd8:8", "const:4:8"]]
+ 00563fd8 ["CALL", null, ["callee:00494128:8"]]
~~~


<a id="compare-53df38a10edc6cde7bfcbb4bddaf9d75"></a>

### [`00563d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563d0c.md) → [`0056402c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/0056402c.md) FUN_0056402c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`005480d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/005480d8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`005483f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/005483f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00563d24 ["INT_ADD", "register:40f0:8", ["const:563d24:8", "const:4:8"]]
- 00563d24 ["CALL", null, ["callee:005483f8:8"]]
+ 00564044 ["INT_ADD", "register:40f0:8", ["const:564044:8", "const:4:8"]]
+ 00564044 ["CALL", null, ["callee:005483f8:8"]]
- 00563d84 ["INT_ADD", "register:40f0:8", ["const:563d84:8", "const:4:8"]]
- 00563d84 ["CALL", null, ["callee:005410dc:8"]]
+ 005640a4 ["INT_ADD", "register:40f0:8", ["const:5640a4:8", "const:4:8"]]
+ 005640a4 ["CALL", null, ["callee:005410dc:8"]]
- 00563d98 ["INT_ADD", "register:40f0:8", ["const:563d98:8", "const:4:8"]]
- 00563d98 ["CALL", null, ["callee:0043be80:8"]]
+ 005640b8 ["INT_ADD", "register:40f0:8", ["const:5640b8:8", "const:4:8"]]
+ 005640b8 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-03ba4ceb1ce48692da27d74de6a64f6e"></a>

### [`00563e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563e04.md) → [`00564124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/00564124.md) FUN_00564124

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005643c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/005643c0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005646e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/005646e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00563e10 ["INT_ADD", "register:40f0:8", ["const:563e10:8", "const:4:8"]]
- 00563e10 ["CALL", null, ["callee:005646e0:8"]]
+ 00564130 ["INT_ADD", "register:40f0:8", ["const:564130:8", "const:4:8"]]
+ 00564130 ["CALL", null, ["callee:005646e0:8"]]
~~~


<a id="compare-7f1e5474e1e72d7164add0f740f57d31"></a>

### [`00563e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563e70.md) → [`00564190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/00564190.md) FUN_00564190

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`005645c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/005645c8.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`005648e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/005648e8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00563f18 ["INT_ADD", "register:40f0:8", ["const:563f18:8", "const:4:8"]]
- 00563f18 ["CALL", null, ["callee:0043be80:8"]]
+ 00564238 ["INT_ADD", "register:40f0:8", ["const:564238:8", "const:4:8"]]
+ 00564238 ["CALL", null, ["callee:0043be80:8"]]
- 00563f4c ["INT_ADD", "register:40f0:8", ["const:563f4c:8", "const:4:8"]]
- 00563f4c ["CALL", null, ["callee:0043be80:8"]]
+ 0056426c ["INT_ADD", "register:40f0:8", ["const:56426c:8", "const:4:8"]]
+ 0056426c ["CALL", null, ["callee:0043be80:8"]]
- 00563fb0 ["INT_ADD", "register:40f0:8", ["const:563fb0:8", "const:4:8"]]
- 00563fb0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005642d0 ["INT_ADD", "register:40f0:8", ["const:5642d0:8", "const:4:8"]]
+ 005642d0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-1a64c47e269754117d6f936ef237e5ed"></a>

### [`00564320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/00564320.md) → [`00564640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/00564640.md) FUN_00564640

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00563c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563c54.md) [`00584f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00584/00584f40.md) [`00864968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864968.md) [`0088f34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f34c.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00563f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00563/00563f74.md) [`00585260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/00585260.md) [`00865914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00865/00865914.md) [`008902f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008902f8.md) · 呼出先 2件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00564384 ["INT_ADD", "register:40f0:8", ["const:564384:8", "const:4:8"]]
- 00564384 ["CALL", null, ["callee:00494970:8"]]
+ 005646a4 ["INT_ADD", "register:40f0:8", ["const:5646a4:8", "const:4:8"]]
+ 005646a4 ["CALL", null, ["callee:00494970:8"]]
- 00564394 ["INT_ADD", "register:40f0:8", ["const:564394:8", "const:4:8"]]
- 00564394 ["CALL", null, ["callee:00c58f50:8"]]
+ 005646b4 ["INT_ADD", "register:40f0:8", ["const:5646b4:8", "const:4:8"]]
+ 005646b4 ["CALL", null, ["callee:00c58f50:8"]]
- 005643a4 ["INT_ADD", "register:40f0:8", ["const:5643a4:8", "const:4:8"]]
- 005643a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005646c4 ["INT_ADD", "register:40f0:8", ["const:5646c4:8", "const:4:8"]]
+ 005646c4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-9e6967869fcde6199e7c2529704b7f8a"></a>

### [`005643c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/005643c0.md) → [`005646e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/005646e0.md) FUN_005646e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00563e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00563/00563e04.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00564124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/00564124.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056443c ["INT_ADD", "register:40f0:8", ["const:56443c:8", "const:4:8"]]
- 0056443c ["CALL", null, ["callee:00c590f0:8"]]
+ 0056475c ["INT_ADD", "register:40f0:8", ["const:56475c:8", "const:4:8"]]
+ 0056475c ["CALL", null, ["callee:00c590f0:8"]]
- 00564464 ["INT_ADD", "register:40f0:8", ["const:564464:8", "const:4:8"]]
- 00564464 ["CALL", null, ["callee:00c590f0:8"]]
+ 00564784 ["INT_ADD", "register:40f0:8", ["const:564784:8", "const:4:8"]]
+ 00564784 ["CALL", null, ["callee:00c590f0:8"]]
- 005644d0 ["INT_ADD", "register:40f0:8", ["const:5644d0:8", "const:4:8"]]
- 005644d0 ["CALL", null, ["callee:00c590f0:8"]]
+ 005647f0 ["INT_ADD", "register:40f0:8", ["const:5647f0:8", "const:4:8"]]
+ 005647f0 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-945463d6701acd40e00ad045e2289efd"></a>

### [`00564a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/00564a14.md) → [`00564d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/00564d34.md) FUN_00564d34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00564a50 ["COPY", "register:0:8", ["register:4048:8"]]
- 00564a50 ["INT_ADD", "register:40f0:8", ["const:564a50:8", "const:4:8"]]
- 00564a50 ["CALLIND", null, ["register:0:8"]]
+ 00564d70 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00564d70 ["INT_ADD", "register:40f0:8", ["const:564d70:8", "const:4:8"]]
+ 00564d70 ["CALLIND", null, ["register:0:8"]]
- 00564a74 ["COPY", "register:0:8", ["register:4048:8"]]
- 00564a74 ["INT_ADD", "register:40f0:8", ["const:564a74:8", "const:4:8"]]
- 00564a74 ["CALLIND", null, ["register:0:8"]]
+ 00564d94 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00564d94 ["INT_ADD", "register:40f0:8", ["const:564d94:8", "const:4:8"]]
+ 00564d94 ["CALLIND", null, ["register:0:8"]]
- 00564ac0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00564ac0 ["INT_ADD", "register:40f0:8", ["const:564ac0:8", "const:4:8"]]
- 00564ac0 ["CALLIND", null, ["register:0:8"]]
+ 00564de0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00564de0 ["INT_ADD", "register:40f0:8", ["const:564de0:8", "const:4:8"]]
+ 00564de0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bc67c30dada9fb6c7ed587415e1e31cc"></a>

### [`00565184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/00565184.md) → [`005654a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/005654a4.md) FUN_005654a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005651c0 ["COPY", "register:0:8", ["register:4048:8"]]
- 005651c0 ["INT_ADD", "register:40f0:8", ["const:5651c0:8", "const:4:8"]]
- 005651c0 ["CALLIND", null, ["register:0:8"]]
+ 005654e0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 005654e0 ["INT_ADD", "register:40f0:8", ["const:5654e0:8", "const:4:8"]]
+ 005654e0 ["CALLIND", null, ["register:0:8"]]
- 00565210 ["COPY", "register:0:8", ["register:4048:8"]]
- 00565210 ["INT_ADD", "register:40f0:8", ["const:565210:8", "const:4:8"]]
- 00565210 ["CALLIND", null, ["register:0:8"]]
+ 00565530 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00565530 ["INT_ADD", "register:40f0:8", ["const:565530:8", "const:4:8"]]
+ 00565530 ["CALLIND", null, ["register:0:8"]]
- 00565280 ["INT_ADD", "register:40f0:8", ["const:565280:8", "const:4:8"]]
- 00565280 ["CALL", null, ["callee:00c58f50:8"]]
+ 005655a0 ["INT_ADD", "register:40f0:8", ["const:5655a0:8", "const:4:8"]]
+ 005655a0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-195920756f944fbfb8be7a80ec516b50"></a>

### [`005655c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/005655c4.md) → [`005658e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/005658e4.md) FUN_005658e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0056a1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056a1b4.md) [`0056b710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b710.md) [`0056b7dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b7dc.md) [`0056ba64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056ba64.md) · 呼出先 2件 [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md)
- 新版 呼出元 4件 [`0056a4d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056a4d4.md) [`0056ba30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056ba30.md) [`0056bafc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bafc.md) [`0056bd84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bd84.md) · 呼出先 2件 [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md) [`00c5b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005655e8 ["INT_ADD", "register:40f0:8", ["const:5655e8:8", "const:4:8"]]
- 005655e8 ["CALL", null, ["callee:00c59700:8"]]
+ 00565908 ["INT_ADD", "register:40f0:8", ["const:565908:8", "const:4:8"]]
+ 00565908 ["CALL", null, ["callee:00c59700:8"]]
- 0056561c ["INT_ADD", "register:40f0:8", ["const:56561c:8", "const:4:8"]]
- 0056561c ["CALL", null, ["callee:00c59700:8"]]
+ 0056593c ["INT_ADD", "register:40f0:8", ["const:56593c:8", "const:4:8"]]
+ 0056593c ["CALL", null, ["callee:00c59700:8"]]
- 00565634 ["INT_ADD", "register:40f0:8", ["const:565634:8", "const:4:8"]]
- 00565634 ["CALL", null, ["callee:00c59700:8"]]
+ 00565954 ["INT_ADD", "register:40f0:8", ["const:565954:8", "const:4:8"]]
+ 00565954 ["CALL", null, ["callee:00c59700:8"]]
~~~


<a id="compare-191b5835d5a45be60932cf1182762501"></a>

### [`00568968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00568/00568968.md) → [`00568c88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00568/00568c88.md) FUN_00568c88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00566c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00566/00566c40.md) [`00569b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569b2c.md) · 呼出先 1件 [`00c5a120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a120.md)
- 新版 呼出元 2件 [`00566f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00566/00566f60.md) [`00569e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569e4c.md) · 呼出先 1件 [`00c5b0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005689a4 ["INT_ADD", "register:40f0:8", ["const:5689a4:8", "const:4:8"]]
- 005689a4 ["CALL", null, ["callee:00c5b0f0:8"]]
+ 00568cc4 ["INT_ADD", "register:40f0:8", ["const:568cc4:8", "const:4:8"]]
+ 00568cc4 ["CALL", null, ["callee:00c5b0f0:8"]]
~~~


<a id="compare-df6432264c15e269668598644f9493ab"></a>

### [`005692fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/005692fc.md) → [`0056961c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/0056961c.md) FUN_0056961c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005689bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00568/005689bc.md) · 呼出先 3件 [`00565a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/00565a98.md) [`00566958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00566/00566958.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00568cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00568/00568cdc.md) · 呼出先 3件 [`00565db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/00565db8.md) [`00566c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00566/00566c78.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056932c ["INT_ADD", "register:40f0:8", ["const:56932c:8", "const:4:8"]]
- 0056932c ["CALL", null, ["callee:00565db8:8"]]
+ 0056964c ["INT_ADD", "register:40f0:8", ["const:56964c:8", "const:4:8"]]
+ 0056964c ["CALL", null, ["callee:00565db8:8"]]
- 00569344 ["INT_ADD", "register:40f0:8", ["const:569344:8", "const:4:8"]]
- 00569344 ["CALL", null, ["callee:00566c78:8"]]
+ 00569664 ["INT_ADD", "register:40f0:8", ["const:569664:8", "const:4:8"]]
+ 00569664 ["CALL", null, ["callee:00566c78:8"]]
- 00569370 ["INT_ADD", "register:40f0:8", ["const:569370:8", "const:4:8"]]
- 00569370 ["CALL", null, ["callee:00c58f80:8"]]
+ 00569690 ["INT_ADD", "register:40f0:8", ["const:569690:8", "const:4:8"]]
+ 00569690 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-6e39bcb8d794de082531861f2fe7d66b"></a>

### [`00569374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569374.md) → [`00569694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569694.md) FUN_00569694

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005689bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00568/005689bc.md) [`0056caa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056caa0.md) · 呼出先 4件 [`0056d2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056d/0056d2b0.md) [`0056d320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056d/0056d320.md) [`0056d478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056d/0056d478.md) [`00c5a140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a140.md)
- 新版 呼出元 2件 [`00568cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00568/00568cdc.md) [`0056cdc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056cdc0.md) · 呼出先 4件 [`0056d5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056d/0056d5d0.md) [`0056d640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056d/0056d640.md) [`0056d798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056d/0056d798.md) [`00c5b110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b110.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005693a0 ["INT_ADD", "register:40f0:8", ["const:5693a0:8", "const:4:8"]]
- 005693a0 ["CALL", null, ["callee:0056d640:8"]]
+ 005696c0 ["INT_ADD", "register:40f0:8", ["const:5696c0:8", "const:4:8"]]
+ 005696c0 ["CALL", null, ["callee:0056d640:8"]]
- 00569434 ["INT_ADD", "register:40f0:8", ["const:569434:8", "const:4:8"]]
- 00569434 ["CALL", null, ["callee:00c5b110:8"]]
+ 00569754 ["INT_ADD", "register:40f0:8", ["const:569754:8", "const:4:8"]]
+ 00569754 ["CALL", null, ["callee:00c5b110:8"]]
- 00569470 ["INT_ADD", "register:40f0:8", ["const:569470:8", "const:4:8"]]
- 00569470 ["CALL", null, ["callee:00c5b110:8"]]
+ 00569790 ["INT_ADD", "register:40f0:8", ["const:569790:8", "const:4:8"]]
+ 00569790 ["CALL", null, ["callee:00c5b110:8"]]
~~~


<a id="compare-07b031c85fe69914fa9d270465d6ed5c"></a>

### [`00569520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569520.md) → [`00569840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569840.md) FUN_00569840

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005689bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00568/005689bc.md) [`0056b94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b94c.md) [`0056c27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c27c.md) · 呼出先 4件 [`00565a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/00565a98.md) [`00566958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00566/00566958.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md)
- 新版 呼出元 3件 [`00568cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00568/00568cdc.md) [`0056bc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bc6c.md) [`0056c59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c59c.md) · 呼出先 4件 [`00565db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/00565db8.md) [`00566c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00566/00566c78.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b100.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005695ac ["INT_ADD", "register:40f0:8", ["const:5695ac:8", "const:4:8"]]
- 005695ac ["CALL", null, ["callee:00c5b100:8"]]
+ 005698cc ["INT_ADD", "register:40f0:8", ["const:5698cc:8", "const:4:8"]]
+ 005698cc ["CALL", null, ["callee:00c5b100:8"]]
- 005695c8 ["INT_ADD", "register:40f0:8", ["const:5695c8:8", "const:4:8"]]
- 005695c8 ["CALL", null, ["callee:00c5b100:8"]]
+ 005698e8 ["INT_ADD", "register:40f0:8", ["const:5698e8:8", "const:4:8"]]
+ 005698e8 ["CALL", null, ["callee:00c5b100:8"]]
- 00569600 ["INT_ADD", "register:40f0:8", ["const:569600:8", "const:4:8"]]
- 00569600 ["CALL", null, ["callee:00565db8:8"]]
+ 00569920 ["INT_ADD", "register:40f0:8", ["const:569920:8", "const:4:8"]]
+ 00569920 ["CALL", null, ["callee:00565db8:8"]]
~~~


<a id="compare-35d8fa164512f65d64cd236cfbfa512f"></a>

### [`00569648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569648.md) → [`00569968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569968.md) FUN_00569968

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005689bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00568/005689bc.md) [`00569b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569b2c.md) · 呼出先 1件 [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md)
- 新版 呼出元 2件 [`00568cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00568/00568cdc.md) [`00569e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569e4c.md) · 呼出先 1件 [`00c5b100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b100.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005696c0 ["INT_ADD", "register:40f0:8", ["const:5696c0:8", "const:4:8"]]
- 005696c0 ["CALL", null, ["callee:00c5b100:8"]]
+ 005699e0 ["INT_ADD", "register:40f0:8", ["const:5699e0:8", "const:4:8"]]
+ 005699e0 ["CALL", null, ["callee:00c5b100:8"]]
~~~


<a id="compare-2b1d47da93a3e9e0393a7c371f06c2c8"></a>

### [`005696f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/005696f8.md) → [`00569a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569a18.md) FUN_00569a18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005689bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00568/005689bc.md) [`0056ba64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056ba64.md) · 呼出先 6件 [`00569b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569b2c.md) [`0056a050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056a050.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a120.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md)
- 新版 呼出元 2件 [`00568cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00568/00568cdc.md) [`0056bd84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bd84.md) · 呼出先 6件 [`00569e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569e4c.md) [`0056a370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056a370.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0f0.md) [`00c5b100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b100.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00569758 ["INT_ADD", "register:40f0:8", ["const:569758:8", "const:4:8"]]
- 00569758 ["CALL", null, ["callee:00c5b0f0:8"]]
+ 00569a78 ["INT_ADD", "register:40f0:8", ["const:569a78:8", "const:4:8"]]
+ 00569a78 ["CALL", null, ["callee:00c5b0f0:8"]]
- 005697e4 ["INT_ADD", "register:40f0:8", ["const:5697e4:8", "const:4:8"]]
- 005697e4 ["CALL", null, ["callee:00c5b100:8"]]
+ 00569b04 ["INT_ADD", "register:40f0:8", ["const:569b04:8", "const:4:8"]]
+ 00569b04 ["CALL", null, ["callee:00c5b100:8"]]
- 00569800 ["INT_ADD", "register:40f0:8", ["const:569800:8", "const:4:8"]]
- 00569800 ["CALL", null, ["callee:00c5b100:8"]]
+ 00569b20 ["INT_ADD", "register:40f0:8", ["const:569b20:8", "const:4:8"]]
+ 00569b20 ["CALL", null, ["callee:00c5b100:8"]]
~~~


<a id="compare-4054813c1094e7062aabb0b9c02236f5"></a>

### [`00569fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569fb4.md) → [`0056a2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056a2d4.md) FUN_0056a2d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00566c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00566/00566c40.md) · 呼出先 2件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a150.md)
- 新版 呼出元 1件 [`00566f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00566/00566f60.md) · 呼出先 2件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056a008 ["INT_ADD", "register:40f0:8", ["const:56a008:8", "const:4:8"]]
- 0056a008 ["CALL", null, ["callee:00c5b120:8"]]
+ 0056a328 ["INT_ADD", "register:40f0:8", ["const:56a328:8", "const:4:8"]]
+ 0056a328 ["CALL", null, ["callee:00c5b120:8"]]
- 0056a02c ["INT_ADD", "register:40f0:8", ["const:56a02c:8", "const:4:8"]]
- 0056a02c ["CALL", null, ["callee:00c590a0:8"]]
+ 0056a34c ["INT_ADD", "register:40f0:8", ["const:56a34c:8", "const:4:8"]]
+ 0056a34c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-46025efc97328e5807d2645ac32137c7"></a>

### [`0056a050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056a050.md) → [`0056a370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056a370.md) FUN_0056a370

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00566c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00566/00566c40.md) [`005696f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/005696f8.md) [`0056d478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056d/0056d478.md) · 呼出先 1件 [`00c5a140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a140.md)
- 新版 呼出元 3件 [`00566f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00566/00566f60.md) [`00569a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569a18.md) [`0056d798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056d/0056d798.md) · 呼出先 1件 [`00c5b110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b110.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056a090 ["INT_ADD", "register:40f0:8", ["const:56a090:8", "const:4:8"]]
- 0056a090 ["CALL", null, ["callee:00c5b110:8"]]
+ 0056a3b0 ["INT_ADD", "register:40f0:8", ["const:56a3b0:8", "const:4:8"]]
+ 0056a3b0 ["CALL", null, ["callee:00c5b110:8"]]
- 0056a0ac ["INT_ADD", "register:40f0:8", ["const:56a0ac:8", "const:4:8"]]
- 0056a0ac ["CALL", null, ["callee:00c5b110:8"]]
+ 0056a3cc ["INT_ADD", "register:40f0:8", ["const:56a3cc:8", "const:4:8"]]
+ 0056a3cc ["CALL", null, ["callee:00c5b110:8"]]
- 0056a140 ["INT_ADD", "register:40f0:8", ["const:56a140:8", "const:4:8"]]
- 0056a140 ["CALL", null, ["callee:00c5b110:8"]]
+ 0056a460 ["INT_ADD", "register:40f0:8", ["const:56a460:8", "const:4:8"]]
+ 0056a460 ["CALL", null, ["callee:00c5b110:8"]]
~~~


<a id="compare-202d1098b89da0d6ea8a894e25445ed0"></a>

### [`0056a1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056a1b4.md) → [`0056a4d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056a4d4.md) FUN_0056a4d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0056ba64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056ba64.md) · 呼出先 8件 [`005655c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/005655c4.md) [`00565a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/00565a98.md) [`00566958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00566/00566958.md) [`00566c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00566/00566c40.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0056bd84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bd84.md) · 呼出先 8件 [`005658e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/005658e4.md) [`00565db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/00565db8.md) [`00566c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00566/00566c78.md) [`00566f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00566/00566f60.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056a200 ["INT_ADD", "register:40f0:8", ["const:56a200:8", "const:4:8"]]
- 0056a200 ["CALL", null, ["callee:00c59130:8"]]
+ 0056a520 ["INT_ADD", "register:40f0:8", ["const:56a520:8", "const:4:8"]]
+ 0056a520 ["CALL", null, ["callee:00c59130:8"]]
- 0056a250 ["INT_ADD", "register:40f0:8", ["const:56a250:8", "const:4:8"]]
- 0056a250 ["CALL", null, ["callee:00566f60:8"]]
+ 0056a570 ["INT_ADD", "register:40f0:8", ["const:56a570:8", "const:4:8"]]
+ 0056a570 ["CALL", null, ["callee:00566f60:8"]]
- 0056a29c ["INT_ADD", "register:40f0:8", ["const:56a29c:8", "const:4:8"]]
- 0056a29c ["CALL", null, ["callee:005658e4:8"]]
+ 0056a5bc ["INT_ADD", "register:40f0:8", ["const:56a5bc:8", "const:4:8"]]
+ 0056a5bc ["CALL", null, ["callee:005658e4:8"]]
~~~


<a id="compare-5e31af74b24a3b0fff55158830d50cca"></a>

### [`0056a954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056a954.md) → [`0056ac74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056ac74.md) FUN_0056ac74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0056b94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b94c.md) · 呼出先 4件 [`00565a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/00565a98.md) [`00566958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00566/00566958.md) [`0056a348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056a348.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0056bc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bc6c.md) · 呼出先 4件 [`00565db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/00565db8.md) [`00566c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00566/00566c78.md) [`0056a668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056a668.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056a9f8 ["INT_ADD", "register:40f0:8", ["const:56a9f8:8", "const:4:8"]]
- 0056a9f8 ["CALL", null, ["callee:0056a668:8"]]
+ 0056ad18 ["INT_ADD", "register:40f0:8", ["const:56ad18:8", "const:4:8"]]
+ 0056ad18 ["CALL", null, ["callee:0056a668:8"]]
- 0056aa2c ["INT_ADD", "register:40f0:8", ["const:56aa2c:8", "const:4:8"]]
- 0056aa2c ["CALL", null, ["callee:00565db8:8"]]
+ 0056ad4c ["INT_ADD", "register:40f0:8", ["const:56ad4c:8", "const:4:8"]]
+ 0056ad4c ["CALL", null, ["callee:00565db8:8"]]
- 0056aa44 ["INT_ADD", "register:40f0:8", ["const:56aa44:8", "const:4:8"]]
- 0056aa44 ["CALL", null, ["callee:00566c78:8"]]
+ 0056ad64 ["INT_ADD", "register:40f0:8", ["const:56ad64:8", "const:4:8"]]
+ 0056ad64 ["CALL", null, ["callee:00566c78:8"]]
~~~


<a id="compare-20884121c716e1c22f003076c9567bfc"></a>

### [`0056ab10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056ab10.md) → [`0056ae30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056ae30.md) FUN_0056ae30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005712c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00571/005712c4.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005715e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00571/005715e4.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056ab5c ["INT_ADD", "register:40f0:8", ["const:56ab5c:8", "const:4:8"]]
- 0056ab5c ["CALL", null, ["callee:00c54d90:8"]]
+ 0056ae7c ["INT_ADD", "register:40f0:8", ["const:56ae7c:8", "const:4:8"]]
+ 0056ae7c ["CALL", null, ["callee:00c54d90:8"]]
- 0056ab70 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056ab70 ["INT_ADD", "register:40f0:8", ["const:56ab70:8", "const:4:8"]]
- 0056ab70 ["CALLIND", null, ["register:0:8"]]
+ 0056ae90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056ae90 ["INT_ADD", "register:40f0:8", ["const:56ae90:8", "const:4:8"]]
+ 0056ae90 ["CALLIND", null, ["register:0:8"]]
- 0056ab78 ["INT_ADD", "register:40f0:8", ["const:56ab78:8", "const:4:8"]]
- 0056ab78 ["CALL", null, ["callee:00c58f20:8"]]
+ 0056ae98 ["INT_ADD", "register:40f0:8", ["const:56ae98:8", "const:4:8"]]
+ 0056ae98 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-8c2283dc177dff22d232b93337f2b0fc"></a>

### [`0056afac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056afac.md) → [`0056b2cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056b2cc.md) FUN_0056b2cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0056aba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056aba8.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0056aec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056aec8.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056afe4 ["INT_ADD", "register:40f0:8", ["const:56afe4:8", "const:4:8"]]
- 0056afe4 ["CALL", null, ["callee:00c54d90:8"]]
+ 0056b304 ["INT_ADD", "register:40f0:8", ["const:56b304:8", "const:4:8"]]
+ 0056b304 ["CALL", null, ["callee:00c54d90:8"]]
- 0056aff8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056aff8 ["INT_ADD", "register:40f0:8", ["const:56aff8:8", "const:4:8"]]
- 0056aff8 ["CALLIND", null, ["register:0:8"]]
+ 0056b318 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056b318 ["INT_ADD", "register:40f0:8", ["const:56b318:8", "const:4:8"]]
+ 0056b318 ["CALLIND", null, ["register:0:8"]]
- 0056b000 ["INT_ADD", "register:40f0:8", ["const:56b000:8", "const:4:8"]]
- 0056b000 ["CALL", null, ["callee:00c58f20:8"]]
+ 0056b320 ["INT_ADD", "register:40f0:8", ["const:56b320:8", "const:4:8"]]
+ 0056b320 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-211127faac81680ad1263b4eb8ae1206"></a>

### [`0056b01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b01c.md) → [`0056b33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056b33c.md) FUN_0056b33c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0056aba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056aba8.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0056aec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056aec8.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056b038 ["INT_ADD", "register:40f0:8", ["const:56b038:8", "const:4:8"]]
- 0056b038 ["CALL", null, ["callee:00c54d90:8"]]
+ 0056b358 ["INT_ADD", "register:40f0:8", ["const:56b358:8", "const:4:8"]]
+ 0056b358 ["CALL", null, ["callee:00c54d90:8"]]
- 0056b058 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056b058 ["INT_ADD", "register:40f0:8", ["const:56b058:8", "const:4:8"]]
- 0056b058 ["CALLIND", null, ["register:0:8"]]
+ 0056b378 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056b378 ["INT_ADD", "register:40f0:8", ["const:56b378:8", "const:4:8"]]
+ 0056b378 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9802b217988331a1af49f0e1ba759ed9"></a>

### [`0056b6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b6c0.md) → [`0056b9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056b9e0.md) FUN_0056b9e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056b6dc ["INT_ADD", "register:40f0:8", ["const:56b6dc:8", "const:4:8"]]
- 0056b6dc ["CALL", null, ["callee:00c54d90:8"]]
+ 0056b9fc ["INT_ADD", "register:40f0:8", ["const:56b9fc:8", "const:4:8"]]
+ 0056b9fc ["CALL", null, ["callee:00c54d90:8"]]
- 0056b6fc ["COPY", "register:0:8", ["register:4040:8"]]
- 0056b6fc ["INT_ADD", "register:40f0:8", ["const:56b6fc:8", "const:4:8"]]
- 0056b6fc ["CALLIND", null, ["register:0:8"]]
+ 0056ba1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056ba1c ["INT_ADD", "register:40f0:8", ["const:56ba1c:8", "const:4:8"]]
+ 0056ba1c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-690d631544502aa54bcd7ef18480be0b"></a>

### [`0056b710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b710.md) → [`0056ba30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056ba30.md) FUN_0056ba30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005710b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00571/005710b4.md) [`005711f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00571/005711f4.md) · 呼出先 4件 [`005655c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/005655c4.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1b0.md) [`00c5a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1c0.md)
- 新版 呼出元 2件 [`005713d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00571/005713d4.md) [`00571514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00571/00571514.md) · 呼出先 4件 [`005658e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/005658e4.md) [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md) [`00c5b180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b180.md) [`00c5b190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056b73c ["COPY", "register:0:8", ["register:4040:8"]]
- 0056b73c ["INT_ADD", "register:40f0:8", ["const:56b73c:8", "const:4:8"]]
- 0056b73c ["CALLIND", null, ["register:0:8"]]
+ 0056ba5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056ba5c ["INT_ADD", "register:40f0:8", ["const:56ba5c:8", "const:4:8"]]
+ 0056ba5c ["CALLIND", null, ["register:0:8"]]
- 0056b750 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056b750 ["INT_ADD", "register:40f0:8", ["const:56b750:8", "const:4:8"]]
- 0056b750 ["CALLIND", null, ["register:0:8"]]
+ 0056ba70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056ba70 ["INT_ADD", "register:40f0:8", ["const:56ba70:8", "const:4:8"]]
+ 0056ba70 ["CALLIND", null, ["register:0:8"]]
- 0056b760 ["INT_ADD", "register:40f0:8", ["const:56b760:8", "const:4:8"]]
- 0056b760 ["CALL", null, ["callee:00c5b180:8"]]
+ 0056ba80 ["INT_ADD", "register:40f0:8", ["const:56ba80:8", "const:4:8"]]
+ 0056ba80 ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-b3c4045911cbe53cc6218038e7820cba"></a>

### [`0056b94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b94c.md) → [`0056bc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bc6c.md) FUN_0056bc6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0056b654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b654.md) [`0056ba64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056ba64.md) [`0056c27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c27c.md) · 呼出先 5件 [`00569520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569520.md) [`0056a954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056a954.md) [`00c53d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d10.md) [`00c5a1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1b0.md) [`00c5a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1c0.md)
- 新版 呼出元 3件 [`0056b974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056b974.md) [`0056bd84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bd84.md) [`0056c59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c59c.md) · 呼出先 5件 [`00569840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569840.md) [`0056ac74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056ac74.md) [`00c54d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d00.md) [`00c5b180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b180.md) [`00c5b190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056b964 ["INT_ADD", "register:40f0:8", ["const:56b964:8", "const:4:8"]]
- 0056b964 ["CALL", null, ["callee:00c5b180:8"]]
+ 0056bc84 ["INT_ADD", "register:40f0:8", ["const:56bc84:8", "const:4:8"]]
+ 0056bc84 ["CALL", null, ["callee:00c5b180:8"]]
- 0056b998 ["INT_ADD", "register:40f0:8", ["const:56b998:8", "const:4:8"]]
- 0056b998 ["CALL", null, ["callee:0056ac74:8"]]
+ 0056bcb8 ["INT_ADD", "register:40f0:8", ["const:56bcb8:8", "const:4:8"]]
+ 0056bcb8 ["CALL", null, ["callee:0056ac74:8"]]
- 0056b9ac ["INT_ADD", "register:40f0:8", ["const:56b9ac:8", "const:4:8"]]
- 0056b9ac ["CALL", null, ["callee:00c54d00:8"]]
+ 0056bccc ["INT_ADD", "register:40f0:8", ["const:56bccc:8", "const:4:8"]]
+ 0056bccc ["CALL", null, ["callee:00c54d00:8"]]
~~~


<a id="compare-69c5bdf7dbb3c1f7dc8ede587145acdd"></a>

### [`0056ba64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056ba64.md) → [`0056bd84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bd84.md) FUN_0056bd84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0056c780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c780.md) · 呼出先 12件 [`005655c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00565/005655c4.md) [`005696f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/005696f8.md) [`0056a1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056a1b4.md) [`0056b94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b94c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`0056caa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056caa0.md) · 呼出先 12件 [`005658e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00565/005658e4.md) [`00569a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569a18.md) [`0056a4d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056a/0056a4d4.md) [`0056bc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bc6c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056ba94 ["INT_ADD", "register:40f0:8", ["const:56ba94:8", "const:4:8"]]
- 0056ba94 ["CALL", null, ["callee:00c5b180:8"]]
+ 0056bdb4 ["INT_ADD", "register:40f0:8", ["const:56bdb4:8", "const:4:8"]]
+ 0056bdb4 ["CALL", null, ["callee:00c5b180:8"]]
- 0056baac ["INT_ADD", "register:40f0:8", ["const:56baac:8", "const:4:8"]]
- 0056baac ["CALL", null, ["callee:005658e4:8"]]
+ 0056bdcc ["INT_ADD", "register:40f0:8", ["const:56bdcc:8", "const:4:8"]]
+ 0056bdcc ["CALL", null, ["callee:005658e4:8"]]
- 0056babc ["INT_ADD", "register:40f0:8", ["const:56babc:8", "const:4:8"]]
- 0056babc ["CALL", null, ["callee:00c59700:8"]]
+ 0056bddc ["INT_ADD", "register:40f0:8", ["const:56bddc:8", "const:4:8"]]
+ 0056bddc ["CALL", null, ["callee:00c59700:8"]]
~~~


<a id="compare-75c40e54a8e4a426a6d6167838fc7c15"></a>

### [`0056bd34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056bd34.md) → [`0056c054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c054.md) FUN_0056c054

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0056c53c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c53c.md) · 呼出先 5件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)
- 新版 呼出元 1件 [`0056c85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c85c.md) · 呼出先 5件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md) [`00c5b0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056bd6c ["INT_ADD", "register:40f0:8", ["const:56bd6c:8", "const:4:8"]]
- 0056bd6c ["CALL", null, ["callee:00c54d60:8"]]
+ 0056c08c ["INT_ADD", "register:40f0:8", ["const:56c08c:8", "const:4:8"]]
+ 0056c08c ["CALL", null, ["callee:00c54d60:8"]]
- 0056bd84 ["INT_ADD", "register:40f0:8", ["const:56bd84:8", "const:4:8"]]
- 0056bd84 ["CALL", null, ["callee:00c54d90:8"]]
+ 0056c0a4 ["INT_ADD", "register:40f0:8", ["const:56c0a4:8", "const:4:8"]]
+ 0056c0a4 ["CALL", null, ["callee:00c54d90:8"]]
- 0056bd98 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056bd98 ["INT_ADD", "register:40f0:8", ["const:56bd98:8", "const:4:8"]]
- 0056bd98 ["CALLIND", null, ["register:0:8"]]
+ 0056c0b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056c0b8 ["INT_ADD", "register:40f0:8", ["const:56c0b8:8", "const:4:8"]]
+ 0056c0b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-123e1f88ba6d4fdec0f300f6ef4df788"></a>

### [`0056c040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c040.md) → [`0056c360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c360.md) FUN_0056c360

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c584f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c584f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c594c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c074 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056c074 ["INT_ADD", "register:40f0:8", ["const:56c074:8", "const:4:8"]]
- 0056c074 ["CALLIND", null, ["register:0:8"]]
+ 0056c394 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056c394 ["INT_ADD", "register:40f0:8", ["const:56c394:8", "const:4:8"]]
+ 0056c394 ["CALLIND", null, ["register:0:8"]]
- 0056c098 ["INT_ADD", "register:40f0:8", ["const:56c098:8", "const:4:8"]]
- 0056c098 ["CALL", null, ["callee:00c594c0:8"]]
+ 0056c3b8 ["INT_ADD", "register:40f0:8", ["const:56c3b8:8", "const:4:8"]]
+ 0056c3b8 ["CALL", null, ["callee:00c594c0:8"]]
- 0056c0bc ["INT_ADD", "register:40f0:8", ["const:56c0bc:8", "const:4:8"]]
- 0056c0bc ["CALL", null, ["callee:00c58f80:8"]]
+ 0056c3dc ["INT_ADD", "register:40f0:8", ["const:56c3dc:8", "const:4:8"]]
+ 0056c3dc ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-f82675792c87b40850ae78198268015c"></a>

### [`0056c0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c0dc.md) → [`0056c3fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c3fc.md) FUN_0056c3fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c120 ["COPY", "register:0:8", ["register:4048:8"]]
- 0056c120 ["INT_ADD", "register:40f0:8", ["const:56c120:8", "const:4:8"]]
- 0056c120 ["CALLIND", null, ["register:0:8"]]
+ 0056c440 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0056c440 ["INT_ADD", "register:40f0:8", ["const:56c440:8", "const:4:8"]]
+ 0056c440 ["CALLIND", null, ["register:0:8"]]
- 0056c150 ["INT_ADD", "register:40f0:8", ["const:56c150:8", "const:4:8"]]
- 0056c150 ["CALL", null, ["callee:00c58f80:8"]]
+ 0056c470 ["INT_ADD", "register:40f0:8", ["const:56c470:8", "const:4:8"]]
+ 0056c470 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-e6c6f930dd6b168a889d64edacbc3eaa"></a>

### [`0056c27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c27c.md) → [`0056c59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c59c.md) FUN_0056c59c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0056c49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c49c.md) · 呼出先 4件 [`00569520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00569/00569520.md) [`0056b94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056b/0056b94c.md) [`00c5a1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1b0.md) [`00c5a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1c0.md)
- 新版 呼出元 1件 [`0056c7bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c7bc.md) · 呼出先 4件 [`00569840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00569/00569840.md) [`0056bc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056b/0056bc6c.md) [`00c5b180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b180.md) [`00c5b190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c2a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056c2a8 ["INT_ADD", "register:40f0:8", ["const:56c2a8:8", "const:4:8"]]
- 0056c2a8 ["CALLIND", null, ["register:0:8"]]
+ 0056c5c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056c5c8 ["INT_ADD", "register:40f0:8", ["const:56c5c8:8", "const:4:8"]]
+ 0056c5c8 ["CALLIND", null, ["register:0:8"]]
- 0056c2bc ["COPY", "register:0:8", ["register:4040:8"]]
- 0056c2bc ["INT_ADD", "register:40f0:8", ["const:56c2bc:8", "const:4:8"]]
- 0056c2bc ["CALLIND", null, ["register:0:8"]]
+ 0056c5dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056c5dc ["INT_ADD", "register:40f0:8", ["const:56c5dc:8", "const:4:8"]]
+ 0056c5dc ["CALLIND", null, ["register:0:8"]]
- 0056c2cc ["INT_ADD", "register:40f0:8", ["const:56c2cc:8", "const:4:8"]]
- 0056c2cc ["CALL", null, ["callee:00c5b180:8"]]
+ 0056c5ec ["INT_ADD", "register:40f0:8", ["const:56c5ec:8", "const:4:8"]]
+ 0056c5ec ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-c963513cad758c80fa60bc606e2fb280"></a>

### [`0056c33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c33c.md) → [`0056c65c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c65c.md) FUN_0056c65c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`005689bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00568/005689bc.md) [`00c5a1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1b0.md) [`00c5a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1c0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00568cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00568/00568cdc.md) [`00c5b180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b180.md) [`00c5b190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c360 ["INT_ADD", "register:40f0:8", ["const:56c360:8", "const:4:8"]]
- 0056c360 ["CALL", null, ["callee:00c5b180:8"]]
+ 0056c680 ["INT_ADD", "register:40f0:8", ["const:56c680:8", "const:4:8"]]
+ 0056c680 ["CALL", null, ["callee:00c5b180:8"]]
- 0056c37c ["INT_ADD", "register:40f0:8", ["const:56c37c:8", "const:4:8"]]
- 0056c37c ["CALL", null, ["callee:00568cdc:8"]]
+ 0056c69c ["INT_ADD", "register:40f0:8", ["const:56c69c:8", "const:4:8"]]
+ 0056c69c ["CALL", null, ["callee:00568cdc:8"]]
~~~


<a id="compare-6239aca96dba32fd04759cdfd93c3ef7"></a>

### [`0056c41c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c41c.md) → [`0056c73c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c73c.md) FUN_0056c73c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b1a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b1a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c450 ["INT_ADD", "register:40f0:8", ["const:56c450:8", "const:4:8"]]
- 0056c450 ["CALL", null, ["callee:00c5b1a0:8"]]
+ 0056c770 ["INT_ADD", "register:40f0:8", ["const:56c770:8", "const:4:8"]]
+ 0056c770 ["CALL", null, ["callee:00c5b1a0:8"]]
~~~


<a id="compare-6a688dbf593c89ed1cde396096511a39"></a>

### [`0056c4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c4a8.md) → [`0056c7c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056c7c8.md) FUN_0056c7c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c4f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056c4f8 ["INT_ADD", "register:40f0:8", ["const:56c4f8:8", "const:4:8"]]
- 0056c4f8 ["CALLIND", null, ["register:0:8"]]
+ 0056c818 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056c818 ["INT_ADD", "register:40f0:8", ["const:56c818:8", "const:4:8"]]
+ 0056c818 ["CALLIND", null, ["register:0:8"]]
- 0056c538 ["INT_ADD", "register:40f0:8", ["const:56c538:8", "const:4:8"]]
- 0056c538 ["CALL", null, ["callee:00c58f80:8"]]
+ 0056c858 ["INT_ADD", "register:40f0:8", ["const:56c858:8", "const:4:8"]]
+ 0056c858 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-eeac7ab02d26cc94b10468d5a441da4f"></a>

### [`0056c72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c72c.md) → [`0056ca4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056ca4c.md) FUN_0056ca4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c748 ["INT_ADD", "register:40f0:8", ["const:56c748:8", "const:4:8"]]
- 0056c748 ["CALL", null, ["callee:00c54d90:8"]]
+ 0056ca68 ["INT_ADD", "register:40f0:8", ["const:56ca68:8", "const:4:8"]]
+ 0056ca68 ["CALL", null, ["callee:00c54d90:8"]]
- 0056c768 ["COPY", "register:0:8", ["register:4040:8"]]
- 0056c768 ["INT_ADD", "register:40f0:8", ["const:56c768:8", "const:4:8"]]
- 0056c768 ["CALLIND", null, ["register:0:8"]]
+ 0056ca88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056ca88 ["INT_ADD", "register:40f0:8", ["const:56ca88:8", "const:4:8"]]
+ 0056ca88 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-05b9c847916ff949d2b2687c60e052bc"></a>

### [`0056c940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c940.md) → [`0056cc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056cc60.md) FUN_0056cc60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c95c ["INT_ADD", "register:40f0:8", ["const:56c95c:8", "const:4:8"]]
- 0056c95c ["CALL", null, ["callee:00c54d90:8"]]
+ 0056cc7c ["INT_ADD", "register:40f0:8", ["const:56cc7c:8", "const:4:8"]]
+ 0056cc7c ["CALL", null, ["callee:00c54d90:8"]]
- 0056c97c ["COPY", "register:0:8", ["register:4040:8"]]
- 0056c97c ["INT_ADD", "register:40f0:8", ["const:56c97c:8", "const:4:8"]]
- 0056c97c ["CALLIND", null, ["register:0:8"]]
+ 0056cc9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056cc9c ["INT_ADD", "register:40f0:8", ["const:56cc9c:8", "const:4:8"]]
+ 0056cc9c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d35a08530c8e704d8579edeeb84caa55"></a>

### [`0056c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c990.md) → [`0056ccb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056ccb0.md) FUN_0056ccb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056c9ac ["INT_ADD", "register:40f0:8", ["const:56c9ac:8", "const:4:8"]]
- 0056c9ac ["CALL", null, ["callee:00c54d90:8"]]
+ 0056cccc ["INT_ADD", "register:40f0:8", ["const:56cccc:8", "const:4:8"]]
+ 0056cccc ["CALL", null, ["callee:00c54d90:8"]]
- 0056c9cc ["COPY", "register:0:8", ["register:4040:8"]]
- 0056c9cc ["INT_ADD", "register:40f0:8", ["const:56c9cc:8", "const:4:8"]]
- 0056c9cc ["CALLIND", null, ["register:0:8"]]
+ 0056ccec ["COPY", "register:0:8", ["register:4040:8"]]
+ 0056ccec ["INT_ADD", "register:40f0:8", ["const:56ccec:8", "const:4:8"]]
+ 0056ccec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-afab21cd4d53adc103504f26e8eca2f2"></a>

### [`0056c9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c9e0.md) → [`0056cd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056cd00.md) FUN_0056cd00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005509c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509c4.md) · 呼出先 5件 [`00550be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550be4.md) [`0056c780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056c/0056c780.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00550ce4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550ce4.md) · 呼出先 5件 [`00550f04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f04.md) [`0056caa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0056c/0056caa0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0056ca10 ["INT_ADD", "register:40f0:8", ["const:56ca10:8", "const:4:8"]]
- 0056ca10 ["CALL", null, ["callee:00550f04:8"]]
+ 0056cd30 ["INT_ADD", "register:40f0:8", ["const:56cd30:8", "const:4:8"]]
+ 0056cd30 ["CALL", null, ["callee:00550f04:8"]]
- 0056ca20 ["INT_ADD", "register:40f0:8", ["const:56ca20:8", "const:4:8"]]
- 0056ca20 ["CALL", null, ["callee:0056caa0:8"]]
+ 0056cd40 ["INT_ADD", "register:40f0:8", ["const:56cd40:8", "const:4:8"]]
+ 0056cd40 ["CALL", null, ["callee:0056caa0:8"]]
- 0056ca34 ["INT_ADD", "register:40f0:8", ["const:56ca34:8", "const:4:8"]]
- 0056ca34 ["CALL", null, ["callee:00c54d90:8"]]
+ 0056cd54 ["INT_ADD", "register:40f0:8", ["const:56cd54:8", "const:4:8"]]
+ 0056cd54 ["CALL", null, ["callee:00c54d90:8"]]
~~~


