# v16.0.2 → v16.0.3 · 要調査の変更候補 (40)

[一覧の目次](README.md)

<a id="compare-7e9acc329ef1b9b16772715fa5271c53"></a>

### [`00c01914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01914.md) → [`00c02908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02908.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e500.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c5f4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4d0.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0193c ["INT_ADD", "register:40f0:8", ["const:c0193c:8", "const:4:8"]]
- 00c0193c ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c02930 ["INT_ADD", "register:40f0:8", ["const:c02930:8", "const:4:8"]]
+ 00c02930 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c01994 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01994 ["INT_ADD", "register:40f0:8", ["const:c01994:8", "const:4:8"]]
- 00c01994 ["CALLIND", null, ["register:0:8"]]
+ 00c02988 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02988 ["INT_ADD", "register:40f0:8", ["const:c02988:8", "const:4:8"]]
+ 00c02988 ["CALLIND", null, ["register:0:8"]]
- 00c019bc ["INT_ADD", "register:40f0:8", ["const:c019bc:8", "const:4:8"]]
- 00c019bc ["CALL", null, ["callee:00c59340:8"]]
+ 00c029b0 ["INT_ADD", "register:40f0:8", ["const:c029b0:8", "const:4:8"]]
+ 00c029b0 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-e7ee7f9105c2a06f19dc087d6a255519"></a>

### [`00c01a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01a2c.md) → [`00c02a20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02a20.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getERw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e500.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c01a44 ["INT_ADD", "register:40f0:8", ["const:c01a44:8", "const:4:8"]]
- 00c01a44 ["CALL", null, ["callee:00c5f4d0:8"]]
+ 00c02a38 ["INT_ADD", "register:40f0:8", ["const:c02a38:8", "const:4:8"]]
+ 00c02a38 ["CALL", null, ["callee:00c5f4d0:8"]]
~~~


<a id="compare-d263b27d8589584b920533595b74f373"></a>

### [`00c01b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01b0c.md) → [`00c02b00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02b00.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getEPwlw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e510.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c5f4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4e0.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c01b48 ["INT_ADD", "register:40f0:8", ["const:c01b48:8", "const:4:8"]]
- 00c01b48 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c02b3c ["INT_ADD", "register:40f0:8", ["const:c02b3c:8", "const:4:8"]]
+ 00c02b3c ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c01bc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01bc0 ["INT_ADD", "register:40f0:8", ["const:c01bc0:8", "const:4:8"]]
- 00c01bc0 ["CALLIND", null, ["register:0:8"]]
+ 00c02bb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02bb4 ["INT_ADD", "register:40f0:8", ["const:c02bb4:8", "const:4:8"]]
+ 00c02bb4 ["CALLIND", null, ["register:0:8"]]
- 00c01bfc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01bfc ["INT_ADD", "register:40f0:8", ["const:c01bfc:8", "const:4:8"]]
- 00c01bfc ["CALLIND", null, ["register:0:8"]]
+ 00c02bf0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02bf0 ["INT_ADD", "register:40f0:8", ["const:c02bf0:8", "const:4:8"]]
+ 00c02bf0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d2b05ed20196218bafe09b22c5962b71"></a>

### [`00c01d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01d70.md) → [`00c02d64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02d64.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getERNS_15basic_streambufIwS2_EEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e520.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c5f4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4f0.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c01da4 ["INT_ADD", "register:40f0:8", ["const:c01da4:8", "const:4:8"]]
- 00c01da4 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c02d98 ["INT_ADD", "register:40f0:8", ["const:c02d98:8", "const:4:8"]]
+ 00c02d98 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c01e04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01e04 ["INT_ADD", "register:40f0:8", ["const:c01e04:8", "const:4:8"]]
- 00c01e04 ["CALLIND", null, ["register:0:8"]]
+ 00c02df8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02df8 ["INT_ADD", "register:40f0:8", ["const:c02df8:8", "const:4:8"]]
+ 00c02df8 ["CALLIND", null, ["register:0:8"]]
- 00c01e40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01e40 ["INT_ADD", "register:40f0:8", ["const:c01e40:8", "const:4:8"]]
- 00c01e40 ["CALLIND", null, ["register:0:8"]]
+ 00c02e34 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02e34 ["INT_ADD", "register:40f0:8", ["const:c02e34:8", "const:4:8"]]
+ 00c02e34 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-00d3c017de8415939a9cb9b54ec4142a"></a>

### [`00c01f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01f78.md) → [`00c02f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02f6c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE7getlineEPwlw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e530.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c5f500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f500.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c01fb8 ["INT_ADD", "register:40f0:8", ["const:c01fb8:8", "const:4:8"]]
- 00c01fb8 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c02fac ["INT_ADD", "register:40f0:8", ["const:c02fac:8", "const:4:8"]]
+ 00c02fac ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c02010 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02010 ["INT_ADD", "register:40f0:8", ["const:c02010:8", "const:4:8"]]
- 00c02010 ["CALLIND", null, ["register:0:8"]]
+ 00c03004 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c03004 ["INT_ADD", "register:40f0:8", ["const:c03004:8", "const:4:8"]]
+ 00c03004 ["CALLIND", null, ["register:0:8"]]
- 00c02058 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02058 ["INT_ADD", "register:40f0:8", ["const:c02058:8", "const:4:8"]]
- 00c02058 ["CALLIND", null, ["register:0:8"]]
+ 00c0304c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0304c ["INT_ADD", "register:40f0:8", ["const:c0304c:8", "const:4:8"]]
+ 00c0304c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-746179b8bcfc455c5ea09cd1c9cef9fc"></a>

### [`00c021b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c021b4.md) → [`00c031a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c031a8.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE6ignoreElj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c021e8 ["INT_ADD", "register:40f0:8", ["const:c021e8:8", "const:4:8"]]
- 00c021e8 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c031dc ["INT_ADD", "register:40f0:8", ["const:c031dc:8", "const:4:8"]]
+ 00c031dc ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c02240 ["COPY", "register:0:8", ["register:4048:8"]]
- 00c02240 ["INT_ADD", "register:40f0:8", ["const:c02240:8", "const:4:8"]]
- 00c02240 ["CALLIND", null, ["register:0:8"]]
+ 00c03234 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00c03234 ["INT_ADD", "register:40f0:8", ["const:c03234:8", "const:4:8"]]
+ 00c03234 ["CALLIND", null, ["register:0:8"]]
- 00c022a8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00c022a8 ["INT_ADD", "register:40f0:8", ["const:c022a8:8", "const:4:8"]]
- 00c022a8 ["CALLIND", null, ["register:0:8"]]
+ 00c0329c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00c0329c ["INT_ADD", "register:40f0:8", ["const:c0329c:8", "const:4:8"]]
+ 00c0329c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c21e5e9b8834568b70a857e6f3d8c9dc"></a>

### [`00c02368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02368.md) → [`00c0335c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c0335c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE4peekEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02390 ["INT_ADD", "register:40f0:8", ["const:c02390:8", "const:4:8"]]
- 00c02390 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c03384 ["INT_ADD", "register:40f0:8", ["const:c03384:8", "const:4:8"]]
+ 00c03384 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c023d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c023d0 ["INT_ADD", "register:40f0:8", ["const:c023d0:8", "const:4:8"]]
- 00c023d0 ["CALLIND", null, ["register:0:8"]]
+ 00c033c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c033c4 ["INT_ADD", "register:40f0:8", ["const:c033c4:8", "const:4:8"]]
+ 00c033c4 ["CALLIND", null, ["register:0:8"]]
- 00c023f8 ["INT_ADD", "register:40f0:8", ["const:c023f8:8", "const:4:8"]]
- 00c023f8 ["CALL", null, ["callee:00c59340:8"]]
+ 00c033ec ["INT_ADD", "register:40f0:8", ["const:c033ec:8", "const:4:8"]]
+ 00c033ec ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-d2955f4be9bbac9968e9b6f16a6d0864"></a>

### [`00c02468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02468.md) → [`00c0345c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c0345c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE4readEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02498 ["INT_ADD", "register:40f0:8", ["const:c02498:8", "const:4:8"]]
- 00c02498 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c0348c ["INT_ADD", "register:40f0:8", ["const:c0348c:8", "const:4:8"]]
+ 00c0348c ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c024c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c024c4 ["INT_ADD", "register:40f0:8", ["const:c024c4:8", "const:4:8"]]
- 00c024c4 ["CALLIND", null, ["register:0:8"]]
+ 00c034b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c034b8 ["INT_ADD", "register:40f0:8", ["const:c034b8:8", "const:4:8"]]
+ 00c034b8 ["CALLIND", null, ["register:0:8"]]
- 00c024f4 ["INT_ADD", "register:40f0:8", ["const:c024f4:8", "const:4:8"]]
- 00c024f4 ["CALL", null, ["callee:00c59340:8"]]
+ 00c034e8 ["INT_ADD", "register:40f0:8", ["const:c034e8:8", "const:4:8"]]
+ 00c034e8 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-deee44a6882491de7e9632d4339d54ce"></a>

### [`00c02560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02560.md) → [`00c03554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03554.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE8readsomeEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02590 ["INT_ADD", "register:40f0:8", ["const:c02590:8", "const:4:8"]]
- 00c02590 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c03584 ["INT_ADD", "register:40f0:8", ["const:c03584:8", "const:4:8"]]
+ 00c03584 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c025d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c025d4 ["INT_ADD", "register:40f0:8", ["const:c025d4:8", "const:4:8"]]
- 00c025d4 ["CALLIND", null, ["register:0:8"]]
+ 00c035c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c035c8 ["INT_ADD", "register:40f0:8", ["const:c035c8:8", "const:4:8"]]
+ 00c035c8 ["CALLIND", null, ["register:0:8"]]
- 00c02620 ["COPY", "register:0:8", ["register:4048:8"]]
- 00c02620 ["INT_ADD", "register:40f0:8", ["const:c02620:8", "const:4:8"]]
- 00c02620 ["CALLIND", null, ["register:0:8"]]
+ 00c03614 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00c03614 ["INT_ADD", "register:40f0:8", ["const:c03614:8", "const:4:8"]]
+ 00c03614 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b64ee4cc6fbbb2b0378a8e6769c02d0a"></a>

### [`00c026b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c026b4.md) → [`00c036a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c036a8.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE7putbackEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c026f4 ["INT_ADD", "register:40f0:8", ["const:c026f4:8", "const:4:8"]]
- 00c026f4 ["CALL", null, ["callee:00c59340:8"]]
+ 00c036e8 ["INT_ADD", "register:40f0:8", ["const:c036e8:8", "const:4:8"]]
+ 00c036e8 ["CALL", null, ["callee:00c59340:8"]]
- 00c02704 ["INT_ADD", "register:40f0:8", ["const:c02704:8", "const:4:8"]]
- 00c02704 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c036f8 ["INT_ADD", "register:40f0:8", ["const:c036f8:8", "const:4:8"]]
+ 00c036f8 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c02760 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02760 ["INT_ADD", "register:40f0:8", ["const:c02760:8", "const:4:8"]]
- 00c02760 ["CALLIND", null, ["register:0:8"]]
+ 00c03754 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c03754 ["INT_ADD", "register:40f0:8", ["const:c03754:8", "const:4:8"]]
+ 00c03754 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a21b6230530824a7a4c003045cfe7ac6"></a>

### [`00c027f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c027f4.md) → [`00c037e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c037e8.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE5ungetEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02830 ["INT_ADD", "register:40f0:8", ["const:c02830:8", "const:4:8"]]
- 00c02830 ["CALL", null, ["callee:00c59340:8"]]
+ 00c03824 ["INT_ADD", "register:40f0:8", ["const:c03824:8", "const:4:8"]]
+ 00c03824 ["CALL", null, ["callee:00c59340:8"]]
- 00c02840 ["INT_ADD", "register:40f0:8", ["const:c02840:8", "const:4:8"]]
- 00c02840 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c03834 ["INT_ADD", "register:40f0:8", ["const:c03834:8", "const:4:8"]]
+ 00c03834 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c02894 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02894 ["INT_ADD", "register:40f0:8", ["const:c02894:8", "const:4:8"]]
- 00c02894 ["CALLIND", null, ["register:0:8"]]
+ 00c03888 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c03888 ["INT_ADD", "register:40f0:8", ["const:c03888:8", "const:4:8"]]
+ 00c03888 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8e2cf2f832bf1ecce5396b0629f32bd6"></a>

### [`00c02928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02928.md) → [`00c0391c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c0391c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE4syncEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0294c ["INT_ADD", "register:40f0:8", ["const:c0294c:8", "const:4:8"]]
- 00c0294c ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c03940 ["INT_ADD", "register:40f0:8", ["const:c03940:8", "const:4:8"]]
+ 00c03940 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c02974 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02974 ["INT_ADD", "register:40f0:8", ["const:c02974:8", "const:4:8"]]
- 00c02974 ["CALLIND", null, ["register:0:8"]]
+ 00c03968 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c03968 ["INT_ADD", "register:40f0:8", ["const:c03968:8", "const:4:8"]]
+ 00c03968 ["CALLIND", null, ["register:0:8"]]
- 00c02998 ["INT_ADD", "register:40f0:8", ["const:c02998:8", "const:4:8"]]
- 00c02998 ["CALL", null, ["callee:00c59340:8"]]
+ 00c0398c ["INT_ADD", "register:40f0:8", ["const:c0398c:8", "const:4:8"]]
+ 00c0398c ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-9c67fd479e99f553eb5848321b62e330"></a>

### [`00c02a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02a18.md) → [`00c03a0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03a0c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE5tellgEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02a3c ["INT_ADD", "register:40f0:8", ["const:c02a3c:8", "const:4:8"]]
- 00c02a3c ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c03a30 ["INT_ADD", "register:40f0:8", ["const:c03a30:8", "const:4:8"]]
+ 00c03a30 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c02a6c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02a6c ["INT_ADD", "register:40f0:8", ["const:c02a6c:8", "const:4:8"]]
- 00c02a6c ["CALLIND", null, ["register:0:8"]]
+ 00c03a60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c03a60 ["INT_ADD", "register:40f0:8", ["const:c03a60:8", "const:4:8"]]
+ 00c03a60 ["CALLIND", null, ["register:0:8"]]
- 00c02a90 ["INT_ADD", "register:40f0:8", ["const:c02a90:8", "const:4:8"]]
- 00c02a90 ["CALL", null, ["callee:00c59340:8"]]
+ 00c03a84 ["INT_ADD", "register:40f0:8", ["const:c03a84:8", "const:4:8"]]
+ 00c03a84 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-a4ea5398624d2713ceb8b9337257f221"></a>

### [`00c02b14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02b14.md) → [`00c03b08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03b08.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE5seekgENS_4fposI9mbstate_tEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02b50 ["INT_ADD", "register:40f0:8", ["const:c02b50:8", "const:4:8"]]
- 00c02b50 ["CALL", null, ["callee:00c59340:8"]]
+ 00c03b44 ["INT_ADD", "register:40f0:8", ["const:c03b44:8", "const:4:8"]]
+ 00c03b44 ["CALL", null, ["callee:00c59340:8"]]
- 00c02b60 ["INT_ADD", "register:40f0:8", ["const:c02b60:8", "const:4:8"]]
- 00c02b60 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c03b54 ["INT_ADD", "register:40f0:8", ["const:c03b54:8", "const:4:8"]]
+ 00c03b54 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c02b90 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02b90 ["INT_ADD", "register:40f0:8", ["const:c02b90:8", "const:4:8"]]
- 00c02b90 ["CALLIND", null, ["register:0:8"]]
+ 00c03b84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c03b84 ["INT_ADD", "register:40f0:8", ["const:c03b84:8", "const:4:8"]]
+ 00c03b84 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-81743cb92cad1d28164b2e09308c6c28"></a>

### [`00c02c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02c24.md) → [`00c03c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03c18.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE5seekgExNS_8ios_base7seekdirE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02c60 ["INT_ADD", "register:40f0:8", ["const:c02c60:8", "const:4:8"]]
- 00c02c60 ["CALL", null, ["callee:00c59340:8"]]
+ 00c03c54 ["INT_ADD", "register:40f0:8", ["const:c03c54:8", "const:4:8"]]
+ 00c03c54 ["CALL", null, ["callee:00c59340:8"]]
- 00c02c70 ["INT_ADD", "register:40f0:8", ["const:c02c70:8", "const:4:8"]]
- 00c02c70 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c03c64 ["INT_ADD", "register:40f0:8", ["const:c03c64:8", "const:4:8"]]
+ 00c03c64 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c02ca0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02ca0 ["INT_ADD", "register:40f0:8", ["const:c02ca0:8", "const:4:8"]]
- 00c02ca0 ["CALLIND", null, ["register:0:8"]]
+ 00c03c94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c03c94 ["INT_ADD", "register:40f0:8", ["const:c03c94:8", "const:4:8"]]
+ 00c03c94 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3e322ec130e0a283f10caa2a843fd04c"></a>

### [`00c02d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02d34.md) → [`00c03d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03d28.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEEC2EPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02d6c ["INT_ADD", "register:40f0:8", ["const:c02d6c:8", "const:4:8"]]
- 00c02d6c ["CALL", null, ["callee:00c59280:8"]]
+ 00c03d60 ["INT_ADD", "register:40f0:8", ["const:c03d60:8", "const:4:8"]]
+ 00c03d60 ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-722dbfaa816f19248f09528978530e15"></a>

### [`00c02e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02e24.md) → [`00c03e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03e18.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02e3c ["INT_ADD", "register:40f0:8", ["const:c02e3c:8", "const:4:8"]]
- 00c02e3c ["CALL", null, ["callee:00c5e180:8"]]
+ 00c03e30 ["INT_ADD", "register:40f0:8", ["const:c03e30:8", "const:4:8"]]
+ 00c03e30 ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-7b0037be2e9f3388f112cdb8887b4d94"></a>

### [`00c02e54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02e54.md) → [`00c03e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03e48.md) _ZTv0_n24_NSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02e74 ["INT_ADD", "register:40f0:8", ["const:c02e74:8", "const:4:8"]]
- 00c02e74 ["CALL", null, ["callee:00c5e180:8"]]
+ 00c03e68 ["INT_ADD", "register:40f0:8", ["const:c03e68:8", "const:4:8"]]
+ 00c03e68 ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-2a075628b2996db900153851f1af442b"></a>

### [`00c02e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02e8c.md) → [`00c03e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03e80.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02ebc ["INT_ADD", "register:40f0:8", ["const:c02ebc:8", "const:4:8"]]
- 00c02ebc ["CALL", null, ["callee:00c5f3c0:8"]]
+ 00c03eb0 ["INT_ADD", "register:40f0:8", ["const:c03eb0:8", "const:4:8"]]
+ 00c03eb0 ["CALL", null, ["callee:00c5f3c0:8"]]
~~~


<a id="compare-b014302c757bf75772aa9262f54d7934"></a>

### [`00c02ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02ef0.md) → [`00c03ee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03ee4.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE6sentryC1ERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) · 呼出先 1件 [`00c5e4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4c0.md)
- 新版 呼出元 1件 [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md) · 呼出先 1件 [`00c5f490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f490.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02f34 ["INT_ADD", "register:40f0:8", ["const:c02f34:8", "const:4:8"]]
- 00c02f34 ["CALL", null, ["callee:00c5f490:8"]]
+ 00c03f28 ["INT_ADD", "register:40f0:8", ["const:c03f28:8", "const:4:8"]]
+ 00c03f28 ["CALL", null, ["callee:00c5f490:8"]]
~~~


<a id="compare-176925337566dcccb4fcf94a86014eca"></a>

### [`00c02f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02f54.md) → [`00c03f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03f48.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE6sentryD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)
- 新版 呼出元 1件 [`00c5f4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4b0.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5e190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02f90 ["INT_ADD", "register:40f0:8", ["const:c02f90:8", "const:4:8"]]
- 00c02f90 ["CALL", null, ["callee:00c5e190:8"]]
+ 00c03f84 ["INT_ADD", "register:40f0:8", ["const:c03f84:8", "const:4:8"]]
+ 00c03f84 ["CALL", null, ["callee:00c5e190:8"]]
- 00c02fb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02fb4 ["INT_ADD", "register:40f0:8", ["const:c02fb4:8", "const:4:8"]]
- 00c02fb4 ["CALLIND", null, ["register:0:8"]]
+ 00c03fa8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c03fa8 ["INT_ADD", "register:40f0:8", ["const:c03fa8:8", "const:4:8"]]
+ 00c03fa8 ["CALLIND", null, ["register:0:8"]]
- 00c02fd8 ["INT_ADD", "register:40f0:8", ["const:c02fd8:8", "const:4:8"]]
- 00c02fd8 ["CALL", null, ["callee:00c59340:8"]]
+ 00c03fcc ["INT_ADD", "register:40f0:8", ["const:c03fcc:8", "const:4:8"]]
+ 00c03fcc ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-a8672828b5d3571e2c15d2ed25e17ea7"></a>

### [`00c03008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03008.md) → [`00c03ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03ffc.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEPFRNS_9basic_iosIwS2_EES6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c03028 ["COPY", "register:0:8", ["register:4008:8"]]
- 00c03028 ["INT_ADD", "register:40f0:8", ["const:c03028:8", "const:4:8"]]
- 00c03028 ["CALLIND", null, ["register:0:8"]]
+ 00c0401c ["COPY", "register:0:8", ["register:4008:8"]]
+ 00c0401c ["INT_ADD", "register:40f0:8", ["const:c0401c:8", "const:4:8"]]
+ 00c0401c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d965dbcd9d6374e199234705db9687eb"></a>

### [`00c03040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03040.md) → [`00c04034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c04034.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEPFRNS_8ios_baseES5_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c03060 ["COPY", "register:0:8", ["register:4008:8"]]
- 00c03060 ["INT_ADD", "register:40f0:8", ["const:c03060:8", "const:4:8"]]
- 00c03060 ["CALLIND", null, ["register:0:8"]]
+ 00c04054 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00c04054 ["INT_ADD", "register:40f0:8", ["const:c04054:8", "const:4:8"]]
+ 00c04054 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-aba77b813dd5fd6084a11e18e13a74b2"></a>

### [`00c04528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04528.md) → [`00c0551c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c0551c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md) [`00c5f4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04550 ["INT_ADD", "register:40f0:8", ["const:c04550:8", "const:4:8"]]
- 00c04550 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c05544 ["INT_ADD", "register:40f0:8", ["const:c05544:8", "const:4:8"]]
+ 00c05544 ["CALL", null, ["callee:00c5f4a0:8"]]
- 00c045a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c045a4 ["INT_ADD", "register:40f0:8", ["const:c045a4:8", "const:4:8"]]
- 00c045a4 ["CALLIND", null, ["register:0:8"]]
+ 00c05598 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05598 ["INT_ADD", "register:40f0:8", ["const:c05598:8", "const:4:8"]]
+ 00c05598 ["CALLIND", null, ["register:0:8"]]
- 00c045d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c045d0 ["INT_ADD", "register:40f0:8", ["const:c045d0:8", "const:4:8"]]
- 00c045d0 ["CALLIND", null, ["register:0:8"]]
+ 00c055c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c055c4 ["INT_ADD", "register:40f0:8", ["const:c055c4:8", "const:4:8"]]
+ 00c055c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-837068f1f02d74b91fb31e02ad800bf0"></a>

### [`00c046f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c046f4.md) → [`00c056e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c056e8.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE3putEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md) [`00c5f4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04718 ["INT_ADD", "register:40f0:8", ["const:c04718:8", "const:4:8"]]
- 00c04718 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c0570c ["INT_ADD", "register:40f0:8", ["const:c0570c:8", "const:4:8"]]
+ 00c0570c ["CALL", null, ["callee:00c5f4a0:8"]]
- 00c04764 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04764 ["INT_ADD", "register:40f0:8", ["const:c04764:8", "const:4:8"]]
- 00c04764 ["CALLIND", null, ["register:0:8"]]
+ 00c05758 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05758 ["INT_ADD", "register:40f0:8", ["const:c05758:8", "const:4:8"]]
+ 00c05758 ["CALLIND", null, ["register:0:8"]]
- 00c04788 ["INT_ADD", "register:40f0:8", ["const:c04788:8", "const:4:8"]]
- 00c04788 ["CALL", null, ["callee:00c59340:8"]]
+ 00c0577c ["INT_ADD", "register:40f0:8", ["const:c0577c:8", "const:4:8"]]
+ 00c0577c ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-c9623c2074a90a0d1e44139175ea0269"></a>

### [`00c047f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c047f4.md) → [`00c057e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c057e8.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5writeEPKwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md) [`00c5f4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04820 ["INT_ADD", "register:40f0:8", ["const:c04820:8", "const:4:8"]]
- 00c04820 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c05814 ["INT_ADD", "register:40f0:8", ["const:c05814:8", "const:4:8"]]
+ 00c05814 ["CALL", null, ["callee:00c5f4a0:8"]]
- 00c04850 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04850 ["INT_ADD", "register:40f0:8", ["const:c04850:8", "const:4:8"]]
- 00c04850 ["CALLIND", null, ["register:0:8"]]
+ 00c05844 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05844 ["INT_ADD", "register:40f0:8", ["const:c05844:8", "const:4:8"]]
+ 00c05844 ["CALLIND", null, ["register:0:8"]]
- 00c04870 ["INT_ADD", "register:40f0:8", ["const:c04870:8", "const:4:8"]]
- 00c04870 ["CALL", null, ["callee:00c59340:8"]]
+ 00c05864 ["INT_ADD", "register:40f0:8", ["const:c05864:8", "const:4:8"]]
+ 00c05864 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-493420af2d2348d64d85f39192839ba1"></a>

### [`00c048e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c048e0.md) → [`00c058d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c058d4.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5tellpEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04930 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04930 ["INT_ADD", "register:40f0:8", ["const:c04930:8", "const:4:8"]]
- 00c04930 ["CALLIND", null, ["register:0:8"]]
+ 00c05924 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05924 ["INT_ADD", "register:40f0:8", ["const:c05924:8", "const:4:8"]]
+ 00c05924 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4384b0622a28807175e52aba28fa5a52"></a>

### [`00c04940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04940.md) → [`00c05934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c05934.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5seekpENS_4fposI9mbstate_tEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md) [`00c5f4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0496c ["INT_ADD", "register:40f0:8", ["const:c0496c:8", "const:4:8"]]
- 00c0496c ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c05960 ["INT_ADD", "register:40f0:8", ["const:c05960:8", "const:4:8"]]
+ 00c05960 ["CALL", null, ["callee:00c5f4a0:8"]]
- 00c049a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c049a4 ["INT_ADD", "register:40f0:8", ["const:c049a4:8", "const:4:8"]]
- 00c049a4 ["CALLIND", null, ["register:0:8"]]
+ 00c05998 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05998 ["INT_ADD", "register:40f0:8", ["const:c05998:8", "const:4:8"]]
+ 00c05998 ["CALLIND", null, ["register:0:8"]]
- 00c049c4 ["INT_ADD", "register:40f0:8", ["const:c049c4:8", "const:4:8"]]
- 00c049c4 ["CALL", null, ["callee:00c59340:8"]]
+ 00c059b8 ["INT_ADD", "register:40f0:8", ["const:c059b8:8", "const:4:8"]]
+ 00c059b8 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-4676d1a4f9753d75c2a9a9c812e772ec"></a>

### [`00c04a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04a04.md) → [`00c059f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c059f8.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5seekpExNS_8ios_base7seekdirE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md) [`00c5f4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04a30 ["INT_ADD", "register:40f0:8", ["const:c04a30:8", "const:4:8"]]
- 00c04a30 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c05a24 ["INT_ADD", "register:40f0:8", ["const:c05a24:8", "const:4:8"]]
+ 00c05a24 ["CALL", null, ["callee:00c5f4a0:8"]]
- 00c04a68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04a68 ["INT_ADD", "register:40f0:8", ["const:c04a68:8", "const:4:8"]]
- 00c04a68 ["CALLIND", null, ["register:0:8"]]
+ 00c05a5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05a5c ["INT_ADD", "register:40f0:8", ["const:c05a5c:8", "const:4:8"]]
+ 00c05a5c ["CALLIND", null, ["register:0:8"]]
- 00c04a88 ["INT_ADD", "register:40f0:8", ["const:c04a88:8", "const:4:8"]]
- 00c04a88 ["CALL", null, ["callee:00c59340:8"]]
+ 00c05a7c ["INT_ADD", "register:40f0:8", ["const:c05a7c:8", "const:4:8"]]
+ 00c05a7c ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-f3e4a3e70417317ff074efa3bb9e87be"></a>

### [`00c04b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04b74.md) → [`00c05b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c05b68.md) FUN_00c05b68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c04ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04ac8.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 1件 [`00c05abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c05abc.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04c2c ["INT_ADD", "register:40f0:8", ["const:c04c2c:8", "const:4:8"]]
- 00c04c2c ["CALL", null, ["callee:00c58f50:8"]]
+ 00c05c20 ["INT_ADD", "register:40f0:8", ["const:c05c20:8", "const:4:8"]]
+ 00c05c20 ["CALL", null, ["callee:00c58f50:8"]]
- 00c04cd0 ["INT_ADD", "register:40f0:8", ["const:c04cd0:8", "const:4:8"]]
- 00c04cd0 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c05cc4 ["INT_ADD", "register:40f0:8", ["const:c05cc4:8", "const:4:8"]]
+ 00c05cc4 ["CALL", null, ["callee:00c5b870:8"]]
- 00c04ce4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04ce4 ["INT_ADD", "register:40f0:8", ["const:c04ce4:8", "const:4:8"]]
- 00c04ce4 ["CALLIND", null, ["register:0:8"]]
+ 00c05cd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05cd8 ["INT_ADD", "register:40f0:8", ["const:c05cd8:8", "const:4:8"]]
+ 00c05cd8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fd86db974cd96c3202ee8aea6ddbc636"></a>

### [`00c04d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04d48.md) → [`00c05d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c05d3c.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEaSEOS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e540.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 1件 [`00c5f510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f510.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04e00 ["INT_ADD", "register:40f0:8", ["const:c04e00:8", "const:4:8"]]
- 00c04e00 ["CALL", null, ["callee:00c58f50:8"]]
+ 00c05df4 ["INT_ADD", "register:40f0:8", ["const:c05df4:8", "const:4:8"]]
+ 00c05df4 ["CALL", null, ["callee:00c58f50:8"]]
- 00c04ec8 ["INT_ADD", "register:40f0:8", ["const:c04ec8:8", "const:4:8"]]
- 00c04ec8 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c05ebc ["INT_ADD", "register:40f0:8", ["const:c05ebc:8", "const:4:8"]]
+ 00c05ebc ["CALL", null, ["callee:00c5b870:8"]]
- 00c04edc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04edc ["INT_ADD", "register:40f0:8", ["const:c04edc:8", "const:4:8"]]
- 00c04edc ["CALLIND", null, ["register:0:8"]]
+ 00c05ed0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05ed0 ["INT_ADD", "register:40f0:8", ["const:c05ed0:8", "const:4:8"]]
+ 00c05ed0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f08138b8dc161afd539495da6f2c6c5c"></a>

### [`00c04f44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04f44.md) → [`00c05f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c05f38.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE4swapERS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05178 ["INT_ADD", "register:40f0:8", ["const:c05178:8", "const:4:8"]]
- 00c05178 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c0616c ["INT_ADD", "register:40f0:8", ["const:c0616c:8", "const:4:8"]]
+ 00c0616c ["CALL", null, ["callee:00c5b870:8"]]
- 00c05184 ["INT_ADD", "register:40f0:8", ["const:c05184:8", "const:4:8"]]
- 00c05184 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c06178 ["INT_ADD", "register:40f0:8", ["const:c06178:8", "const:4:8"]]
+ 00c06178 ["CALL", null, ["callee:00c5b870:8"]]
- 00c05198 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c05198 ["INT_ADD", "register:40f0:8", ["const:c05198:8", "const:4:8"]]
- 00c05198 ["CALLIND", null, ["register:0:8"]]
+ 00c0618c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0618c ["INT_ADD", "register:40f0:8", ["const:c0618c:8", "const:4:8"]]
+ 00c0618c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b48a7e482199d57dfaf181f110c7075a"></a>

### [`00c0521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0521c.md) → [`00c06210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06210.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00548298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548298.md) [`00bf2244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2244.md) [`00bf22f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf22f8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005485b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/005485b8.md) [`00bf3238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3238.md) [`00bf32ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf32ec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05278 ["INT_ADD", "register:40f0:8", ["const:c05278:8", "const:4:8"]]
- 00c05278 ["CALL", null, ["callee:00bf32ec:8"]]
+ 00c0626c ["INT_ADD", "register:40f0:8", ["const:c0626c:8", "const:4:8"]]
+ 00c0626c ["CALL", null, ["callee:00bf32ec:8"]]
- 00c05290 ["INT_ADD", "register:40f0:8", ["const:c05290:8", "const:4:8"]]
- 00c05290 ["CALL", null, ["callee:00bf3238:8"]]
+ 00c06284 ["INT_ADD", "register:40f0:8", ["const:c06284:8", "const:4:8"]]
+ 00c06284 ["CALL", null, ["callee:00bf3238:8"]]
~~~


<a id="compare-f702386183a5a2cdce7dc0314e986911"></a>

### [`00c052a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c052a8.md) → [`00c0629c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c0629c.md) _ZNSt6__ndk118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEaSEOS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md) [`00c5e540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e540.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md) [`00c5f510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f510.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c052ec ["INT_ADD", "register:40f0:8", ["const:c052ec:8", "const:4:8"]]
- 00c052ec ["CALL", null, ["callee:00c5f3c0:8"]]
+ 00c062e0 ["INT_ADD", "register:40f0:8", ["const:c062e0:8", "const:4:8"]]
+ 00c062e0 ["CALL", null, ["callee:00c5f3c0:8"]]
- 00c05318 ["INT_ADD", "register:40f0:8", ["const:c05318:8", "const:4:8"]]
- 00c05318 ["CALL", null, ["callee:00c5f510:8"]]
+ 00c0630c ["INT_ADD", "register:40f0:8", ["const:c0630c:8", "const:4:8"]]
+ 00c0630c ["CALL", null, ["callee:00c5f510:8"]]
~~~


<a id="compare-00f634321dfe068779c91f4e9d4355ac"></a>

### [`00c05334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05334.md) → [`00c06328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06328.md) _ZNSt6__ndk119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEaSEOS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md) [`00c5e540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e540.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md) [`00c5f510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f510.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05378 ["INT_ADD", "register:40f0:8", ["const:c05378:8", "const:4:8"]]
- 00c05378 ["CALL", null, ["callee:00c5f3c0:8"]]
+ 00c0636c ["INT_ADD", "register:40f0:8", ["const:c0636c:8", "const:4:8"]]
+ 00c0636c ["CALL", null, ["callee:00c5f3c0:8"]]
- 00c053a4 ["INT_ADD", "register:40f0:8", ["const:c053a4:8", "const:4:8"]]
- 00c053a4 ["CALL", null, ["callee:00c5f510:8"]]
+ 00c06398 ["INT_ADD", "register:40f0:8", ["const:c06398:8", "const:4:8"]]
+ 00c06398 ["CALL", null, ["callee:00c5f510:8"]]
~~~


<a id="compare-0579b9b06034897f621dedcafd57773d"></a>

### [`00c053c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c053c4.md) → [`00c063b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c063b8.md) _ZNSt6__ndk119basic_istringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEaSEOS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md) [`00c5e540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e540.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md) [`00c5f510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f510.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05408 ["INT_ADD", "register:40f0:8", ["const:c05408:8", "const:4:8"]]
- 00c05408 ["CALL", null, ["callee:00c5f3c0:8"]]
+ 00c063fc ["INT_ADD", "register:40f0:8", ["const:c063fc:8", "const:4:8"]]
+ 00c063fc ["CALL", null, ["callee:00c5f3c0:8"]]
- 00c05434 ["INT_ADD", "register:40f0:8", ["const:c05434:8", "const:4:8"]]
- 00c05434 ["CALL", null, ["callee:00c5f510:8"]]
+ 00c06428 ["INT_ADD", "register:40f0:8", ["const:c06428:8", "const:4:8"]]
+ 00c06428 ["CALL", null, ["callee:00c5f510:8"]]
~~~


<a id="compare-cba224a766a0b78446ad8bd2d657fe98"></a>

### [`00c05450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05450.md) → [`00c06444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06444.md) _ZNSt6__ndk114basic_ifstreamIcNS_11char_traitsIcEEE4openEPKcj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c06e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06e5c.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0a0.md) [`00c5b100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b100.md) [`00c5b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c054a8 ["INT_ADD", "register:40f0:8", ["const:c054a8:8", "const:4:8"]]
- 00c054a8 ["CALL", null, ["callee:00c06e5c:8"]]
+ 00c0649c ["INT_ADD", "register:40f0:8", ["const:c0649c:8", "const:4:8"]]
+ 00c0649c ["CALL", null, ["callee:00c06e5c:8"]]
- 00c054b8 ["INT_ADD", "register:40f0:8", ["const:c054b8:8", "const:4:8"]]
- 00c054b8 ["CALL", null, ["callee:00c5b130:8"]]
+ 00c064ac ["INT_ADD", "register:40f0:8", ["const:c064ac:8", "const:4:8"]]
+ 00c064ac ["CALL", null, ["callee:00c5b130:8"]]
- 00c054d4 ["INT_ADD", "register:40f0:8", ["const:c054d4:8", "const:4:8"]]
- 00c054d4 ["CALL", null, ["callee:00c5b100:8"]]
+ 00c064c8 ["INT_ADD", "register:40f0:8", ["const:c064c8:8", "const:4:8"]]
+ 00c064c8 ["CALL", null, ["callee:00c5b100:8"]]
~~~


<a id="compare-9257fea8a6ddfe1604de58d521a32900"></a>

### [`00c05500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05500.md) → [`00c064f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c064f4.md) _ZNSt6__ndk114basic_ifstreamIcNS_11char_traitsIcEEE4openERKNS_12basic_stringIcS2_NS_9allocatorIcEEEEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c06e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06e5c.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0a0.md) [`00c5b100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b100.md) [`00c5b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05564 ["INT_ADD", "register:40f0:8", ["const:c05564:8", "const:4:8"]]
- 00c05564 ["CALL", null, ["callee:00c06e5c:8"]]
+ 00c06558 ["INT_ADD", "register:40f0:8", ["const:c06558:8", "const:4:8"]]
+ 00c06558 ["CALL", null, ["callee:00c06e5c:8"]]
- 00c05574 ["INT_ADD", "register:40f0:8", ["const:c05574:8", "const:4:8"]]
- 00c05574 ["CALL", null, ["callee:00c5b130:8"]]
+ 00c06568 ["INT_ADD", "register:40f0:8", ["const:c06568:8", "const:4:8"]]
+ 00c06568 ["CALL", null, ["callee:00c5b130:8"]]
- 00c05590 ["INT_ADD", "register:40f0:8", ["const:c05590:8", "const:4:8"]]
- 00c05590 ["CALL", null, ["callee:00c5b100:8"]]
+ 00c06584 ["INT_ADD", "register:40f0:8", ["const:c06584:8", "const:4:8"]]
+ 00c06584 ["CALL", null, ["callee:00c5b100:8"]]
~~~


<a id="compare-e259f93da099fac3a3e2d15356eb84bc"></a>

### [`00c055bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c055bc.md) → [`00c065b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c065b0.md) _ZNSt6__ndk114basic_ofstreamIcNS_11char_traitsIcEEE4openEPKcj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c06e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06e5c.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0a0.md) [`00c5b100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b100.md) [`00c5b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05614 ["INT_ADD", "register:40f0:8", ["const:c05614:8", "const:4:8"]]
- 00c05614 ["CALL", null, ["callee:00c06e5c:8"]]
+ 00c06608 ["INT_ADD", "register:40f0:8", ["const:c06608:8", "const:4:8"]]
+ 00c06608 ["CALL", null, ["callee:00c06e5c:8"]]
- 00c05624 ["INT_ADD", "register:40f0:8", ["const:c05624:8", "const:4:8"]]
- 00c05624 ["CALL", null, ["callee:00c5b130:8"]]
+ 00c06618 ["INT_ADD", "register:40f0:8", ["const:c06618:8", "const:4:8"]]
+ 00c06618 ["CALL", null, ["callee:00c5b130:8"]]
- 00c05640 ["INT_ADD", "register:40f0:8", ["const:c05640:8", "const:4:8"]]
- 00c05640 ["CALL", null, ["callee:00c5b100:8"]]
+ 00c06634 ["INT_ADD", "register:40f0:8", ["const:c06634:8", "const:4:8"]]
+ 00c06634 ["CALL", null, ["callee:00c5b100:8"]]
~~~


<a id="compare-a696d8bcad93574b56eb27c9a7f04935"></a>

### [`00c0566c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0566c.md) → [`00c06660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06660.md) _ZNSt6__ndk114basic_ofstreamIcNS_11char_traitsIcEEE4openERKNS_12basic_stringIcS2_NS_9allocatorIcEEEEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c06e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06e5c.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0a0.md) [`00c5b100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b100.md) [`00c5b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c056d0 ["INT_ADD", "register:40f0:8", ["const:c056d0:8", "const:4:8"]]
- 00c056d0 ["CALL", null, ["callee:00c06e5c:8"]]
+ 00c066c4 ["INT_ADD", "register:40f0:8", ["const:c066c4:8", "const:4:8"]]
+ 00c066c4 ["CALL", null, ["callee:00c06e5c:8"]]
- 00c056e0 ["INT_ADD", "register:40f0:8", ["const:c056e0:8", "const:4:8"]]
- 00c056e0 ["CALL", null, ["callee:00c5b130:8"]]
+ 00c066d4 ["INT_ADD", "register:40f0:8", ["const:c066d4:8", "const:4:8"]]
+ 00c066d4 ["CALL", null, ["callee:00c5b130:8"]]
- 00c056fc ["INT_ADD", "register:40f0:8", ["const:c056fc:8", "const:4:8"]]
- 00c056fc ["CALL", null, ["callee:00c5b100:8"]]
+ 00c066f0 ["INT_ADD", "register:40f0:8", ["const:c066f0:8", "const:4:8"]]
+ 00c066f0 ["CALL", null, ["callee:00c5b100:8"]]
~~~


<a id="compare-7955c46faf1f65e2c68f01a8973f9c0d"></a>

### [`00c05ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ab4.md) → [`00c06aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06aa8.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE5closeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05adc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c05adc ["INT_ADD", "register:40f0:8", ["const:c05adc:8", "const:4:8"]]
- 00c05adc ["CALLIND", null, ["register:0:8"]]
+ 00c06ad0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c06ad0 ["INT_ADD", "register:40f0:8", ["const:c06ad0:8", "const:4:8"]]
+ 00c06ad0 ["CALLIND", null, ["register:0:8"]]
- 00c05ae8 ["INT_ADD", "register:40f0:8", ["const:c05ae8:8", "const:4:8"]]
- 00c05ae8 ["CALL", null, ["callee:00c5b0a0:8"]]
+ 00c06adc ["INT_ADD", "register:40f0:8", ["const:c06adc:8", "const:4:8"]]
+ 00c06adc ["CALL", null, ["callee:00c5b0a0:8"]]
- 00c05b10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c05b10 ["INT_ADD", "register:40f0:8", ["const:c05b10:8", "const:4:8"]]
- 00c05b10 ["CALLIND", null, ["register:0:8"]]
+ 00c06b04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c06b04 ["INT_ADD", "register:40f0:8", ["const:c06b04:8", "const:4:8"]]
+ 00c06b04 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6ff7d165b2af08f69a54ef1451bd7bc6"></a>

### [`00c05b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05b40.md) → [`00c06b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06b34.md) FUN_00c06b34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58ff0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59fc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05b54 ["INT_ADD", "register:40f0:8", ["const:c05b54:8", "const:4:8"]]
- 00c05b54 ["CALL", null, ["callee:00c59fc0:8"]]
+ 00c06b48 ["INT_ADD", "register:40f0:8", ["const:c06b48:8", "const:4:8"]]
+ 00c06b48 ["CALL", null, ["callee:00c59fc0:8"]]
~~~


<a id="compare-df8e60353ec904e42956f70b4fe10a1c"></a>

### [`00c05b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05b6c.md) → [`00c06b60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06b60.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05b90 ["INT_ADD", "register:40f0:8", ["const:c05b90:8", "const:4:8"]]
- 00c05b90 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c06b84 ["INT_ADD", "register:40f0:8", ["const:c06b84:8", "const:4:8"]]
+ 00c06b84 ["CALL", null, ["callee:00c5b870:8"]]
- 00c05b9c ["INT_ADD", "register:40f0:8", ["const:c05b9c:8", "const:4:8"]]
- 00c05b9c ["CALL", null, ["callee:00c5f380:8"]]
+ 00c06b90 ["INT_ADD", "register:40f0:8", ["const:c06b90:8", "const:4:8"]]
+ 00c06b90 ["CALL", null, ["callee:00c5f380:8"]]
- 00c05ba8 ["INT_ADD", "register:40f0:8", ["const:c05ba8:8", "const:4:8"]]
- 00c05ba8 ["CALL", null, ["callee:00c5f380:8"]]
+ 00c06b9c ["INT_ADD", "register:40f0:8", ["const:c06b9c:8", "const:4:8"]]
+ 00c06b9c ["CALL", null, ["callee:00c5f380:8"]]
~~~


<a id="compare-adb72ac81488f4a54da6800defec8422"></a>

### [`00c068ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c068ac.md) → [`00c078a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c078a0.md) FUN_00c078a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59040.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c068c0 ["INT_ADD", "register:40f0:8", ["const:c068c0:8", "const:4:8"]]
- 00c068c0 ["CALL", null, ["callee:00c59040:8"]]
+ 00c078b4 ["INT_ADD", "register:40f0:8", ["const:c078b4:8", "const:4:8"]]
+ 00c078b4 ["CALL", null, ["callee:00c59040:8"]]
~~~


<a id="compare-c9136f28a3f2825193de2ef6446369db"></a>

### [`00c06970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06970.md) → [`00c07964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07964.md) FUN_00c07964

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e570.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f540.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c069b0 ["INT_ADD", "register:40f0:8", ["const:c069b0:8", "const:4:8"]]
- 00c069b0 ["CALL", null, ["callee:00c5f540:8"]]
+ 00c079a4 ["INT_ADD", "register:40f0:8", ["const:c079a4:8", "const:4:8"]]
+ 00c079a4 ["CALL", null, ["callee:00c5f540:8"]]
- 00c06a10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06a10 ["INT_ADD", "register:40f0:8", ["const:c06a10:8", "const:4:8"]]
- 00c06a10 ["CALLIND", null, ["register:0:8"]]
+ 00c07a04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07a04 ["INT_ADD", "register:40f0:8", ["const:c07a04:8", "const:4:8"]]
+ 00c07a04 ["CALLIND", null, ["register:0:8"]]
- 00c06a5c ["INT_ADD", "register:40f0:8", ["const:c06a5c:8", "const:4:8"]]
- 00c06a5c ["CALL", null, ["callee:00c5f540:8"]]
+ 00c07a50 ["INT_ADD", "register:40f0:8", ["const:c07a50:8", "const:4:8"]]
+ 00c07a50 ["CALL", null, ["callee:00c5f540:8"]]
~~~


<a id="compare-4915e97e631cffa2670cb26fc0afe07f"></a>

### [`00c06a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06a98.md) → [`00c07a8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07a8c.md) FUN_00c07a8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c06958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06958.md) [`00c06964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06964.md) · 呼出先 2件 [`00c5e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e570.md) [`00c5e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e580.md)
- 新版 呼出元 2件 [`00c0794c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c0794c.md) [`00c07958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07958.md) · 呼出先 2件 [`00c5f540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f540.md) [`00c5f550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06ae8 ["INT_ADD", "register:40f0:8", ["const:c06ae8:8", "const:4:8"]]
- 00c06ae8 ["CALL", null, ["callee:00c5f550:8"]]
+ 00c07adc ["INT_ADD", "register:40f0:8", ["const:c07adc:8", "const:4:8"]]
+ 00c07adc ["CALL", null, ["callee:00c5f550:8"]]
- 00c06b1c ["INT_ADD", "register:40f0:8", ["const:c06b1c:8", "const:4:8"]]
- 00c06b1c ["CALL", null, ["callee:00c5f550:8"]]
+ 00c07b10 ["INT_ADD", "register:40f0:8", ["const:c07b10:8", "const:4:8"]]
+ 00c07b10 ["CALL", null, ["callee:00c5f550:8"]]
- 00c06b68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06b68 ["INT_ADD", "register:40f0:8", ["const:c06b68:8", "const:4:8"]]
- 00c06b68 ["CALLIND", null, ["register:0:8"]]
+ 00c07b5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07b5c ["INT_ADD", "register:40f0:8", ["const:c07b5c:8", "const:4:8"]]
+ 00c07b5c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2ced364033f98ec7a2f7b3ee33337615"></a>

### [`00c06c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06c40.md) → [`00c07c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07c34.md) FUN_00c07c34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59040.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06c54 ["INT_ADD", "register:40f0:8", ["const:c06c54:8", "const:4:8"]]
- 00c06c54 ["CALL", null, ["callee:00c59040:8"]]
+ 00c07c48 ["INT_ADD", "register:40f0:8", ["const:c07c48:8", "const:4:8"]]
+ 00c07c48 ["CALL", null, ["callee:00c59040:8"]]
~~~


<a id="compare-14122722167962ff53abd5b756b95fba"></a>

### [`00c06cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06cc8.md) → [`00c07cbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07cbc.md) FUN_00c07cbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a280.md) [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b250.md) [`00c5b2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b2c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06d00 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06d00 ["INT_ADD", "register:40f0:8", ["const:c06d00:8", "const:4:8"]]
- 00c06d00 ["CALLIND", null, ["register:0:8"]]
+ 00c07cf4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07cf4 ["INT_ADD", "register:40f0:8", ["const:c07cf4:8", "const:4:8"]]
+ 00c07cf4 ["CALLIND", null, ["register:0:8"]]
- 00c06d20 ["INT_ADD", "register:40f0:8", ["const:c06d20:8", "const:4:8"]]
- 00c06d20 ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00c07d14 ["INT_ADD", "register:40f0:8", ["const:c07d14:8", "const:4:8"]]
+ 00c07d14 ["CALL", null, ["callee:00c5b2c0:8"]]
- 00c06d48 ["INT_ADD", "register:40f0:8", ["const:c06d48:8", "const:4:8"]]
- 00c06d48 ["CALL", null, ["callee:00c5b250:8"]]
+ 00c07d3c ["INT_ADD", "register:40f0:8", ["const:c07d3c:8", "const:4:8"]]
+ 00c07d3c ["CALL", null, ["callee:00c5b250:8"]]
~~~


<a id="compare-bf3d6f9ba41130071046e010ab4e360b"></a>

### [`00c06d6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06d6c.md) → [`00c07d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07d60.md) FUN_00c07d60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b2c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06dd4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06dd4 ["INT_ADD", "register:40f0:8", ["const:c06dd4:8", "const:4:8"]]
- 00c06dd4 ["CALLIND", null, ["register:0:8"]]
+ 00c07dc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07dc8 ["INT_ADD", "register:40f0:8", ["const:c07dc8:8", "const:4:8"]]
+ 00c07dc8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-432ed5d689571e9577aea47c3a632c37"></a>

### [`00c06e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06e10.md) → [`00c07e04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07e04.md) FUN_00c07e04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b2c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06e5c ["INT_ADD", "register:40f0:8", ["const:c06e5c:8", "const:4:8"]]
- 00c06e5c ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00c07e50 ["INT_ADD", "register:40f0:8", ["const:c07e50:8", "const:4:8"]]
+ 00c07e50 ["CALL", null, ["callee:00c5b2c0:8"]]
- 00c06ea8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06ea8 ["INT_ADD", "register:40f0:8", ["const:c06ea8:8", "const:4:8"]]
- 00c06ea8 ["CALLIND", null, ["register:0:8"]]
+ 00c07e9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07e9c ["INT_ADD", "register:40f0:8", ["const:c07e9c:8", "const:4:8"]]
+ 00c07e9c ["CALLIND", null, ["register:0:8"]]
- 00c06ee4 ["INT_ADD", "register:40f0:8", ["const:c06ee4:8", "const:4:8"]]
- 00c06ee4 ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00c07ed8 ["INT_ADD", "register:40f0:8", ["const:c07ed8:8", "const:4:8"]]
+ 00c07ed8 ["CALL", null, ["callee:00c5b2c0:8"]]
~~~


<a id="compare-0f918276a8a53db101262d01dcf9b25a"></a>

### [`00c06f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06f40.md) → [`00c07f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07f34.md) FUN_00c07f34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e490.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f460.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06f54 ["INT_ADD", "register:40f0:8", ["const:c06f54:8", "const:4:8"]]
- 00c06f54 ["CALL", null, ["callee:00c5f460:8"]]
+ 00c07f48 ["INT_ADD", "register:40f0:8", ["const:c07f48:8", "const:4:8"]]
+ 00c07f48 ["CALL", null, ["callee:00c5f460:8"]]
~~~


<a id="compare-6e04367efaacfb39a32f875dce70d863"></a>

### [`00c07004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07004.md) → [`00c07ff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07ff8.md) FUN_00c07ff8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e570.md) [`00c5e590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e590.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f540.md) [`00c5f560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f560.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07044 ["INT_ADD", "register:40f0:8", ["const:c07044:8", "const:4:8"]]
- 00c07044 ["CALL", null, ["callee:00c5f560:8"]]
+ 00c08038 ["INT_ADD", "register:40f0:8", ["const:c08038:8", "const:4:8"]]
+ 00c08038 ["CALL", null, ["callee:00c5f560:8"]]
- 00c070a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c070a4 ["INT_ADD", "register:40f0:8", ["const:c070a4:8", "const:4:8"]]
- 00c070a4 ["CALLIND", null, ["register:0:8"]]
+ 00c08098 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c08098 ["INT_ADD", "register:40f0:8", ["const:c08098:8", "const:4:8"]]
+ 00c08098 ["CALLIND", null, ["register:0:8"]]
- 00c070f0 ["INT_ADD", "register:40f0:8", ["const:c070f0:8", "const:4:8"]]
- 00c070f0 ["CALL", null, ["callee:00c5f540:8"]]
+ 00c080e4 ["INT_ADD", "register:40f0:8", ["const:c080e4:8", "const:4:8"]]
+ 00c080e4 ["CALL", null, ["callee:00c5f540:8"]]
~~~


<a id="compare-92717f254ef7e4182774addc9e795995"></a>

### [`00c0712c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0712c.md) → [`00c08120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08120.md) FUN_00c08120

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c06fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06fec.md) [`00c06ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06ff8.md) · 呼出先 4件 [`00c5e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e570.md) [`00c5e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e580.md) [`00c5e590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e590.md) [`00c5e5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5a0.md)
- 新版 呼出元 2件 [`00c07fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07fe0.md) [`00c07fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07fec.md) · 呼出先 4件 [`00c5f540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f540.md) [`00c5f550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f550.md) [`00c5f560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f560.md) [`00c5f570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f570.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0717c ["INT_ADD", "register:40f0:8", ["const:c0717c:8", "const:4:8"]]
- 00c0717c ["CALL", null, ["callee:00c5f570:8"]]
+ 00c08170 ["INT_ADD", "register:40f0:8", ["const:c08170:8", "const:4:8"]]
+ 00c08170 ["CALL", null, ["callee:00c5f570:8"]]
- 00c071ac ["INT_ADD", "register:40f0:8", ["const:c071ac:8", "const:4:8"]]
- 00c071ac ["CALL", null, ["callee:00c5f550:8"]]
+ 00c081a0 ["INT_ADD", "register:40f0:8", ["const:c081a0:8", "const:4:8"]]
+ 00c081a0 ["CALL", null, ["callee:00c5f550:8"]]
- 00c071f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c071f8 ["INT_ADD", "register:40f0:8", ["const:c071f8:8", "const:4:8"]]
- 00c071f8 ["CALLIND", null, ["register:0:8"]]
+ 00c081ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c081ec ["INT_ADD", "register:40f0:8", ["const:c081ec:8", "const:4:8"]]
+ 00c081ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c814e67b4dc8da60588650c5e033a614"></a>

### [`00c072cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c072cc.md) → [`00c082c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c082c0.md) FUN_00c082c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e490.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f460.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c072e0 ["INT_ADD", "register:40f0:8", ["const:c072e0:8", "const:4:8"]]
- 00c072e0 ["CALL", null, ["callee:00c5f460:8"]]
+ 00c082d4 ["INT_ADD", "register:40f0:8", ["const:c082d4:8", "const:4:8"]]
+ 00c082d4 ["CALL", null, ["callee:00c5f460:8"]]
~~~


<a id="compare-845d1d732e6cfa1cf63a7743fa31e98e"></a>

### [`00c07354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07354.md) → [`00c08348`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08348.md) FUN_00c08348

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a280.md) [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b250.md) [`00c5b2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b2c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0738c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0738c ["INT_ADD", "register:40f0:8", ["const:c0738c:8", "const:4:8"]]
- 00c0738c ["CALLIND", null, ["register:0:8"]]
+ 00c08380 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c08380 ["INT_ADD", "register:40f0:8", ["const:c08380:8", "const:4:8"]]
+ 00c08380 ["CALLIND", null, ["register:0:8"]]
- 00c073ac ["INT_ADD", "register:40f0:8", ["const:c073ac:8", "const:4:8"]]
- 00c073ac ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00c083a0 ["INT_ADD", "register:40f0:8", ["const:c083a0:8", "const:4:8"]]
+ 00c083a0 ["CALL", null, ["callee:00c5b2c0:8"]]
- 00c073d4 ["INT_ADD", "register:40f0:8", ["const:c073d4:8", "const:4:8"]]
- 00c073d4 ["CALL", null, ["callee:00c5b250:8"]]
+ 00c083c8 ["INT_ADD", "register:40f0:8", ["const:c083c8:8", "const:4:8"]]
+ 00c083c8 ["CALL", null, ["callee:00c5b250:8"]]
~~~


<a id="compare-06b115c459ad201932d5630903a9e5c1"></a>

### [`00c073f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c073f8.md) → [`00c083ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c083ec.md) FUN_00c083ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b2c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07460 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c07460 ["INT_ADD", "register:40f0:8", ["const:c07460:8", "const:4:8"]]
- 00c07460 ["CALLIND", null, ["register:0:8"]]
+ 00c08454 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c08454 ["INT_ADD", "register:40f0:8", ["const:c08454:8", "const:4:8"]]
+ 00c08454 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b55aecd8af1dff157ecd9e2dff5647bc"></a>

### [`00c0749c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0749c.md) → [`00c08490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08490.md) FUN_00c08490

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md) [`00c5e5b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b2c0.md) [`00c5f580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f580.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c074dc ["INT_ADD", "register:40f0:8", ["const:c074dc:8", "const:4:8"]]
- 00c074dc ["CALL", null, ["callee:00c5f580:8"]]
+ 00c084d0 ["INT_ADD", "register:40f0:8", ["const:c084d0:8", "const:4:8"]]
+ 00c084d0 ["CALL", null, ["callee:00c5f580:8"]]
- 00c07528 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c07528 ["INT_ADD", "register:40f0:8", ["const:c07528:8", "const:4:8"]]
- 00c07528 ["CALLIND", null, ["register:0:8"]]
+ 00c0851c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0851c ["INT_ADD", "register:40f0:8", ["const:c0851c:8", "const:4:8"]]
+ 00c0851c ["CALLIND", null, ["register:0:8"]]
- 00c07564 ["INT_ADD", "register:40f0:8", ["const:c07564:8", "const:4:8"]]
- 00c07564 ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00c08558 ["INT_ADD", "register:40f0:8", ["const:c08558:8", "const:4:8"]]
+ 00c08558 ["CALL", null, ["callee:00c5b2c0:8"]]
~~~


<a id="compare-1ef1d98ab2753bc03b6af5878a40ab2c"></a>

### [`00c0760c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0760c.md) → [`00c08600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08600.md) _ZNSt6__ndk17collateIcED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5d0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07620 ["INT_ADD", "register:40f0:8", ["const:c07620:8", "const:4:8"]]
- 00c07620 ["CALL", null, ["callee:00c5f5a0:8"]]
+ 00c08614 ["INT_ADD", "register:40f0:8", ["const:c08614:8", "const:4:8"]]
+ 00c08614 ["CALL", null, ["callee:00c5f5a0:8"]]
~~~


<a id="compare-c91e2ba2d9f426e91bc7d987cac9dcf6"></a>

### [`00c0769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0769c.md) → [`00c08690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08690.md) _ZNKSt6__ndk17collateIcE12do_transformEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07704 ["INT_ADD", "register:40f0:8", ["const:c07704:8", "const:4:8"]]
- 00c07704 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c086f8 ["INT_ADD", "register:40f0:8", ["const:c086f8:8", "const:4:8"]]
+ 00c086f8 ["CALL", null, ["callee:00c58f30:8"]]
- 00c0772c ["INT_ADD", "register:40f0:8", ["const:c0772c:8", "const:4:8"]]
- 00c0772c ["CALL", null, ["callee:00c590a0:8"]]
+ 00c08720 ["INT_ADD", "register:40f0:8", ["const:c08720:8", "const:4:8"]]
+ 00c08720 ["CALL", null, ["callee:00c590a0:8"]]
- 00c07754 ["INT_ADD", "register:40f0:8", ["const:c07754:8", "const:4:8"]]
- 00c07754 ["CALL", null, ["callee:0043bac4:8"]]
+ 00c08748 ["INT_ADD", "register:40f0:8", ["const:c08748:8", "const:4:8"]]
+ 00c08748 ["CALL", null, ["callee:0043bac4:8"]]
~~~


<a id="compare-15a942e5e48e2f33616b1fc7c29c7e6e"></a>

### [`00c07798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07798.md) → [`00c0878c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c0878c.md) _ZNSt6__ndk17collateIwED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c077ac ["INT_ADD", "register:40f0:8", ["const:c077ac:8", "const:4:8"]]
- 00c077ac ["CALL", null, ["callee:00c5f5b0:8"]]
+ 00c087a0 ["INT_ADD", "register:40f0:8", ["const:c087a0:8", "const:4:8"]]
+ 00c087a0 ["CALL", null, ["callee:00c5f5b0:8"]]
~~~


<a id="compare-456c037ad3ae07fc0286e768fe9d6672"></a>

### [`00c0781c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0781c.md) → [`00c08810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08810.md) _ZNKSt6__ndk17collateIwE12do_transformEPKwS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07890 ["INT_ADD", "register:40f0:8", ["const:c07890:8", "const:4:8"]]
- 00c07890 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c08884 ["INT_ADD", "register:40f0:8", ["const:c08884:8", "const:4:8"]]
+ 00c08884 ["CALL", null, ["callee:00c58f30:8"]]
- 00c078c4 ["INT_ADD", "register:40f0:8", ["const:c078c4:8", "const:4:8"]]
- 00c078c4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c088b8 ["INT_ADD", "register:40f0:8", ["const:c088b8:8", "const:4:8"]]
+ 00c088b8 ["CALL", null, ["callee:00c590a0:8"]]
- 00c078ec ["INT_ADD", "register:40f0:8", ["const:c078ec:8", "const:4:8"]]
- 00c078ec ["CALL", null, ["callee:006d7aa8:8"]]
+ 00c088e0 ["INT_ADD", "register:40f0:8", ["const:c088e0:8", "const:4:8"]]
+ 00c088e0 ["CALL", null, ["callee:006d7aa8:8"]]
~~~


<a id="compare-4c047d4d599f507b497b5770029979ee"></a>

### [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) → [`00c08ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08ba8.md) FUN_00c08ba8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`00c07928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07928.md) [`00c13514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13514.md) [`00c1366c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c1366c.md) [`00c13728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13728.md) [`00c13878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13878.md) · 呼出先 3件 [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md) [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md)
- 新版 呼出元 7件 [`00c0891c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c0891c.md) [`00c14508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14508.md) [`00c14660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14660.md) [`00c1471c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c1471c.md) [`00c1486c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c1486c.md) · 呼出先 3件 [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md) [`00c5b0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0c0.md) [`00c5f020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f020.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07c14 ["INT_ADD", "register:40f0:8", ["const:c07c14:8", "const:4:8"]]
- 00c07c14 ["CALL", null, ["callee:00c5b0c0:8"]]
+ 00c08c08 ["INT_ADD", "register:40f0:8", ["const:c08c08:8", "const:4:8"]]
+ 00c08c08 ["CALL", null, ["callee:00c5b0c0:8"]]
- 00c07c20 ["INT_ADD", "register:40f0:8", ["const:c07c20:8", "const:4:8"]]
- 00c07c20 ["CALL", null, ["callee:00c5f020:8"]]
+ 00c08c14 ["INT_ADD", "register:40f0:8", ["const:c08c14:8", "const:4:8"]]
+ 00c08c14 ["CALL", null, ["callee:00c5f020:8"]]
- 00c07cc4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c07cc4 ["INT_ADD", "register:40f0:8", ["const:c07cc4:8", "const:4:8"]]
- 00c07cc4 ["CALLIND", null, ["register:0:8"]]
+ 00c08cb8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c08cb8 ["INT_ADD", "register:40f0:8", ["const:c08cb8:8", "const:4:8"]]
+ 00c08cb8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bbc4cdae801e76d3b1b92ee100731a0b"></a>

### [`00c08028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08028.md) → [`00c0901c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c0901c.md) FUN_00c0901c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c08020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08020.md) · 呼出先 6件 [`00c36208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36208.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)
- 新版 呼出元 1件 [`00c09014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09014.md) · 呼出先 6件 [`00c371fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c371fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5c0.md) [`00c5f5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c080b0 ["INT_ADD", "register:40f0:8", ["const:c080b0:8", "const:4:8"]]
- 00c080b0 ["CALL", null, ["callee:00c5f5c0:8"]]
+ 00c090a4 ["INT_ADD", "register:40f0:8", ["const:c090a4:8", "const:4:8"]]
+ 00c090a4 ["CALL", null, ["callee:00c5f5c0:8"]]
- 00c080cc ["INT_ADD", "register:40f0:8", ["const:c080cc:8", "const:4:8"]]
- 00c080cc ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c090c0 ["INT_ADD", "register:40f0:8", ["const:c090c0:8", "const:4:8"]]
+ 00c090c0 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c08150 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c08150 ["INT_ADD", "register:40f0:8", ["const:c08150:8", "const:4:8"]]
- 00c08150 ["CALLIND", null, ["register:0:8"]]
+ 00c09144 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c09144 ["INT_ADD", "register:40f0:8", ["const:c09144:8", "const:4:8"]]
+ 00c09144 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8add1f92290a20538ed2707f8cc2ee04"></a>

### [`00c08464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08464.md) → [`00c09458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09458.md) FUN_00c09458

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0845c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c0845c.md) · 呼出先 6件 [`00c36330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36330.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)
- 新版 呼出元 1件 [`00c09450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09450.md) · 呼出先 6件 [`00c37324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37324.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5c0.md) [`00c5f5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c084ec ["INT_ADD", "register:40f0:8", ["const:c084ec:8", "const:4:8"]]
- 00c084ec ["CALL", null, ["callee:00c5f5c0:8"]]
+ 00c094e0 ["INT_ADD", "register:40f0:8", ["const:c094e0:8", "const:4:8"]]
+ 00c094e0 ["CALL", null, ["callee:00c5f5c0:8"]]
- 00c08508 ["INT_ADD", "register:40f0:8", ["const:c08508:8", "const:4:8"]]
- 00c08508 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c094fc ["INT_ADD", "register:40f0:8", ["const:c094fc:8", "const:4:8"]]
+ 00c094fc ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0858c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0858c ["INT_ADD", "register:40f0:8", ["const:c0858c:8", "const:4:8"]]
- 00c0858c ["CALLIND", null, ["register:0:8"]]
+ 00c09580 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c09580 ["INT_ADD", "register:40f0:8", ["const:c09580:8", "const:4:8"]]
+ 00c09580 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-99d97f51614ed5fc8dd58aced9e19444"></a>

### [`00c088a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c088a0.md) → [`00c09894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09894.md) FUN_00c09894

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c08898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08898.md) · 呼出先 6件 [`00c36458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36458.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)
- 新版 呼出元 1件 [`00c0988c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c0988c.md) · 呼出先 6件 [`00c3744c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c3744c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5c0.md) [`00c5f5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c08928 ["INT_ADD", "register:40f0:8", ["const:c08928:8", "const:4:8"]]
- 00c08928 ["CALL", null, ["callee:00c5f5c0:8"]]
+ 00c0991c ["INT_ADD", "register:40f0:8", ["const:c0991c:8", "const:4:8"]]
+ 00c0991c ["CALL", null, ["callee:00c5f5c0:8"]]
- 00c08944 ["INT_ADD", "register:40f0:8", ["const:c08944:8", "const:4:8"]]
- 00c08944 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c09938 ["INT_ADD", "register:40f0:8", ["const:c09938:8", "const:4:8"]]
+ 00c09938 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c089c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c089c8 ["INT_ADD", "register:40f0:8", ["const:c089c8:8", "const:4:8"]]
- 00c089c8 ["CALLIND", null, ["register:0:8"]]
+ 00c099bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c099bc ["INT_ADD", "register:40f0:8", ["const:c099bc:8", "const:4:8"]]
+ 00c099bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8d182b4d4f6663ab3466a13ff26da423"></a>

### [`00c08cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08cdc.md) → [`00c09cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09cd0.md) FUN_00c09cd0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c08cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08cd4.md) · 呼出先 6件 [`00c365b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c365b0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)
- 新版 呼出元 1件 [`00c09cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09cc8.md) · 呼出先 6件 [`00c375a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c375a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5c0.md) [`00c5f5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c08d64 ["INT_ADD", "register:40f0:8", ["const:c08d64:8", "const:4:8"]]
- 00c08d64 ["CALL", null, ["callee:00c5f5c0:8"]]
+ 00c09d58 ["INT_ADD", "register:40f0:8", ["const:c09d58:8", "const:4:8"]]
+ 00c09d58 ["CALL", null, ["callee:00c5f5c0:8"]]
- 00c08d80 ["INT_ADD", "register:40f0:8", ["const:c08d80:8", "const:4:8"]]
- 00c08d80 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c09d74 ["INT_ADD", "register:40f0:8", ["const:c09d74:8", "const:4:8"]]
+ 00c09d74 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c08e04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c08e04 ["INT_ADD", "register:40f0:8", ["const:c08e04:8", "const:4:8"]]
- 00c08e04 ["CALLIND", null, ["register:0:8"]]
+ 00c09df8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c09df8 ["INT_ADD", "register:40f0:8", ["const:c09df8:8", "const:4:8"]]
+ 00c09df8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8171d8c91c05018c13e8c9f5051b832e"></a>

### [`00c09118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09118.md) → [`00c0a10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a10c.md) FUN_00c0a10c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c09110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09110.md) · 呼出先 6件 [`00c36704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36704.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)
- 新版 呼出元 1件 [`00c0a104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a104.md) · 呼出先 6件 [`00c376f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c376f8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5c0.md) [`00c5f5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c091a0 ["INT_ADD", "register:40f0:8", ["const:c091a0:8", "const:4:8"]]
- 00c091a0 ["CALL", null, ["callee:00c5f5c0:8"]]
+ 00c0a194 ["INT_ADD", "register:40f0:8", ["const:c0a194:8", "const:4:8"]]
+ 00c0a194 ["CALL", null, ["callee:00c5f5c0:8"]]
- 00c091bc ["INT_ADD", "register:40f0:8", ["const:c091bc:8", "const:4:8"]]
- 00c091bc ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0a1b0 ["INT_ADD", "register:40f0:8", ["const:c0a1b0:8", "const:4:8"]]
+ 00c0a1b0 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c09240 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c09240 ["INT_ADD", "register:40f0:8", ["const:c09240:8", "const:4:8"]]
- 00c09240 ["CALLIND", null, ["register:0:8"]]
+ 00c0a234 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0a234 ["INT_ADD", "register:40f0:8", ["const:c0a234:8", "const:4:8"]]
+ 00c0a234 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7b4ca4ca453218669c1a0bd92ce6490e"></a>

### [`00c09554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09554.md) → [`00c0a548`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a548.md) FUN_00c0a548

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0954c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c0954c.md) · 呼出先 6件 [`00c3684c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c3684c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)
- 新版 呼出元 1件 [`00c0a540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a540.md) · 呼出先 6件 [`00c37840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37840.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5c0.md) [`00c5f5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c095dc ["INT_ADD", "register:40f0:8", ["const:c095dc:8", "const:4:8"]]
- 00c095dc ["CALL", null, ["callee:00c5f5c0:8"]]
+ 00c0a5d0 ["INT_ADD", "register:40f0:8", ["const:c0a5d0:8", "const:4:8"]]
+ 00c0a5d0 ["CALL", null, ["callee:00c5f5c0:8"]]
- 00c095f8 ["INT_ADD", "register:40f0:8", ["const:c095f8:8", "const:4:8"]]
- 00c095f8 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0a5ec ["INT_ADD", "register:40f0:8", ["const:c0a5ec:8", "const:4:8"]]
+ 00c0a5ec ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0967c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0967c ["INT_ADD", "register:40f0:8", ["const:c0967c:8", "const:4:8"]]
- 00c0967c ["CALLIND", null, ["register:0:8"]]
+ 00c0a670 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0a670 ["INT_ADD", "register:40f0:8", ["const:c0a670:8", "const:4:8"]]
+ 00c0a670 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5826461e902e20b8ffdae472dadafa06"></a>

### [`00c09990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09990.md) → [`00c0a984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a984.md) FUN_00c0a984

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c09988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09988.md) · 呼出先 6件 [`00c36994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e620.md)
- 新版 呼出元 1件 [`00c0a97c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a97c.md) · 呼出先 6件 [`00c37988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37988.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c099dc ["INT_ADD", "register:40f0:8", ["const:c099dc:8", "const:4:8"]]
- 00c099dc ["CALL", null, ["callee:00c5f5f0:8"]]
+ 00c0a9d0 ["INT_ADD", "register:40f0:8", ["const:c0a9d0:8", "const:4:8"]]
+ 00c0a9d0 ["CALL", null, ["callee:00c5f5f0:8"]]
- 00c099f8 ["INT_ADD", "register:40f0:8", ["const:c099f8:8", "const:4:8"]]
- 00c099f8 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0a9ec ["INT_ADD", "register:40f0:8", ["const:c0a9ec:8", "const:4:8"]]
+ 00c0a9ec ["CALL", null, ["callee:00c5cf10:8"]]
- 00c09a88 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c09a88 ["INT_ADD", "register:40f0:8", ["const:c09a88:8", "const:4:8"]]
- 00c09a88 ["CALLIND", null, ["register:0:8"]]
+ 00c0aa7c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0aa7c ["INT_ADD", "register:40f0:8", ["const:c0aa7c:8", "const:4:8"]]
+ 00c0aa7c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f6cec51c819ae83cd383378f72f4803c"></a>

### [`00c09da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09da8.md) → [`00c0ad9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0ad9c.md) FUN_00c0ad9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c09da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09da0.md) · 呼出先 6件 [`00c36aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36aac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e620.md)
- 新版 呼出元 1件 [`00c0ad94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0ad94.md) · 呼出先 6件 [`00c37aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37aa0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c09df4 ["INT_ADD", "register:40f0:8", ["const:c09df4:8", "const:4:8"]]
- 00c09df4 ["CALL", null, ["callee:00c5f5f0:8"]]
+ 00c0ade8 ["INT_ADD", "register:40f0:8", ["const:c0ade8:8", "const:4:8"]]
+ 00c0ade8 ["CALL", null, ["callee:00c5f5f0:8"]]
- 00c09e10 ["INT_ADD", "register:40f0:8", ["const:c09e10:8", "const:4:8"]]
- 00c09e10 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0ae04 ["INT_ADD", "register:40f0:8", ["const:c0ae04:8", "const:4:8"]]
+ 00c0ae04 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c09ea0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c09ea0 ["INT_ADD", "register:40f0:8", ["const:c09ea0:8", "const:4:8"]]
- 00c09ea0 ["CALLIND", null, ["register:0:8"]]
+ 00c0ae94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0ae94 ["INT_ADD", "register:40f0:8", ["const:c0ae94:8", "const:4:8"]]
+ 00c0ae94 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d8e45f32e1187da22361772bf64e85c1"></a>

### [`00c0a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a1c0.md) → [`00c0b1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0b1b4.md) FUN_00c0b1b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0a1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a1b8.md) · 呼出先 6件 [`00c36bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36bc4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e620.md)
- 新版 呼出元 1件 [`00c0b1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0b1ac.md) · 呼出先 6件 [`00c37bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37bb8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0a20c ["INT_ADD", "register:40f0:8", ["const:c0a20c:8", "const:4:8"]]
- 00c0a20c ["CALL", null, ["callee:00c5f5f0:8"]]
+ 00c0b200 ["INT_ADD", "register:40f0:8", ["const:c0b200:8", "const:4:8"]]
+ 00c0b200 ["CALL", null, ["callee:00c5f5f0:8"]]
- 00c0a228 ["INT_ADD", "register:40f0:8", ["const:c0a228:8", "const:4:8"]]
- 00c0a228 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0b21c ["INT_ADD", "register:40f0:8", ["const:c0b21c:8", "const:4:8"]]
+ 00c0b21c ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0a2b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0a2b8 ["INT_ADD", "register:40f0:8", ["const:c0a2b8:8", "const:4:8"]]
- 00c0a2b8 ["CALLIND", null, ["register:0:8"]]
+ 00c0b2ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0b2ac ["INT_ADD", "register:40f0:8", ["const:c0b2ac:8", "const:4:8"]]
+ 00c0b2ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cdde92d2ff1d73aa14a85455489bdb9c"></a>

### [`00c0acc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0acc4.md) → [`00c0bcb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0bcb8.md) FUN_00c0bcb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00c0a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a5d0.md) [`00c0da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0da44.md) · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5e650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e650.md)
- 新版 呼出元 2件 [`00c0b5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0b5c4.md) [`00c0ea38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0ea38.md) · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5f620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f620.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0ad28 ["INT_ADD", "register:40f0:8", ["const:c0ad28:8", "const:4:8"]]
- 00c0ad28 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c0bd1c ["INT_ADD", "register:40f0:8", ["const:c0bd1c:8", "const:4:8"]]
+ 00c0bd1c ["CALL", null, ["callee:00c5f610:8"]]
- 00c0ad44 ["INT_ADD", "register:40f0:8", ["const:c0ad44:8", "const:4:8"]]
- 00c0ad44 ["CALL", null, ["callee:00c5f620:8"]]
+ 00c0bd38 ["INT_ADD", "register:40f0:8", ["const:c0bd38:8", "const:4:8"]]
+ 00c0bd38 ["CALL", null, ["callee:00c5f620:8"]]
- 00c0ad54 ["INT_ADD", "register:40f0:8", ["const:c0ad54:8", "const:4:8"]]
- 00c0ad54 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c0bd48 ["INT_ADD", "register:40f0:8", ["const:c0bd48:8", "const:4:8"]]
+ 00c0bd48 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-a3f3e98a43909bca9d8fca407a1b57d2"></a>

### [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) → [`00c0c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c080.md) FUN_00c0c080

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`00c0ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ae00.md) [`00c1525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c1525c.md) [`00c153b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c153b4.md) [`00c15470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15470.md) [`00c155c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c155c0.md) · 呼出先 3件 [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md) [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md)
- 新版 呼出元 7件 [`00c0bdf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0bdf4.md) [`00c16250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16250.md) [`00c163a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c163a8.md) [`00c16464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16464.md) [`00c165b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c165b4.md) · 呼出先 3件 [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md) [`00c5b0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0c0.md) [`00c5f020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f020.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0b0ec ["INT_ADD", "register:40f0:8", ["const:c0b0ec:8", "const:4:8"]]
- 00c0b0ec ["CALL", null, ["callee:00c5b0c0:8"]]
+ 00c0c0e0 ["INT_ADD", "register:40f0:8", ["const:c0c0e0:8", "const:4:8"]]
+ 00c0c0e0 ["CALL", null, ["callee:00c5b0c0:8"]]
- 00c0b0f8 ["INT_ADD", "register:40f0:8", ["const:c0b0f8:8", "const:4:8"]]
- 00c0b0f8 ["CALL", null, ["callee:00c5f020:8"]]
+ 00c0c0ec ["INT_ADD", "register:40f0:8", ["const:c0c0ec:8", "const:4:8"]]
+ 00c0c0ec ["CALL", null, ["callee:00c5f020:8"]]
- 00c0b194 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0b194 ["INT_ADD", "register:40f0:8", ["const:c0b194:8", "const:4:8"]]
- 00c0b194 ["CALLIND", null, ["register:0:8"]]
+ 00c0c188 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0c188 ["INT_ADD", "register:40f0:8", ["const:c0c188:8", "const:4:8"]]
+ 00c0c188 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d62db213182a8d789aa7147c9bfceef6"></a>

### [`00c0b508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b508.md) → [`00c0c4fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c4fc.md) FUN_00c0c4fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0b500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b500.md) · 呼出先 6件 [`00c36208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36208.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)
- 新版 呼出元 1件 [`00c0c4f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c4f4.md) · 呼出先 6件 [`00c371fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c371fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f630.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0b590 ["INT_ADD", "register:40f0:8", ["const:c0b590:8", "const:4:8"]]
- 00c0b590 ["CALL", null, ["callee:00c5f630:8"]]
+ 00c0c584 ["INT_ADD", "register:40f0:8", ["const:c0c584:8", "const:4:8"]]
+ 00c0c584 ["CALL", null, ["callee:00c5f630:8"]]
- 00c0b5ac ["INT_ADD", "register:40f0:8", ["const:c0b5ac:8", "const:4:8"]]
- 00c0b5ac ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0c5a0 ["INT_ADD", "register:40f0:8", ["const:c0c5a0:8", "const:4:8"]]
+ 00c0c5a0 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0b61c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0b61c ["INT_ADD", "register:40f0:8", ["const:c0b61c:8", "const:4:8"]]
- 00c0b61c ["CALLIND", null, ["register:0:8"]]
+ 00c0c610 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0c610 ["INT_ADD", "register:40f0:8", ["const:c0c610:8", "const:4:8"]]
+ 00c0c610 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8ef2fde413966ca97e770d019eb33707"></a>

### [`00c0b938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b938.md) → [`00c0c92c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c92c.md) FUN_00c0c92c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0b930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b930.md) · 呼出先 6件 [`00c36330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36330.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)
- 新版 呼出元 1件 [`00c0c924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c924.md) · 呼出先 6件 [`00c37324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37324.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f630.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0b9c0 ["INT_ADD", "register:40f0:8", ["const:c0b9c0:8", "const:4:8"]]
- 00c0b9c0 ["CALL", null, ["callee:00c5f630:8"]]
+ 00c0c9b4 ["INT_ADD", "register:40f0:8", ["const:c0c9b4:8", "const:4:8"]]
+ 00c0c9b4 ["CALL", null, ["callee:00c5f630:8"]]
- 00c0b9dc ["INT_ADD", "register:40f0:8", ["const:c0b9dc:8", "const:4:8"]]
- 00c0b9dc ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0c9d0 ["INT_ADD", "register:40f0:8", ["const:c0c9d0:8", "const:4:8"]]
+ 00c0c9d0 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0ba4c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0ba4c ["INT_ADD", "register:40f0:8", ["const:c0ba4c:8", "const:4:8"]]
- 00c0ba4c ["CALLIND", null, ["register:0:8"]]
+ 00c0ca40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0ca40 ["INT_ADD", "register:40f0:8", ["const:c0ca40:8", "const:4:8"]]
+ 00c0ca40 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3210b201029233216f3a86af3a32540e"></a>

### [`00c0bd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0bd68.md) → [`00c0cd5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0cd5c.md) FUN_00c0cd5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0bd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0bd60.md) · 呼出先 6件 [`00c36458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36458.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)
- 新版 呼出元 1件 [`00c0cd54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0cd54.md) · 呼出先 6件 [`00c3744c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c3744c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f630.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0bdf0 ["INT_ADD", "register:40f0:8", ["const:c0bdf0:8", "const:4:8"]]
- 00c0bdf0 ["CALL", null, ["callee:00c5f630:8"]]
+ 00c0cde4 ["INT_ADD", "register:40f0:8", ["const:c0cde4:8", "const:4:8"]]
+ 00c0cde4 ["CALL", null, ["callee:00c5f630:8"]]
- 00c0be0c ["INT_ADD", "register:40f0:8", ["const:c0be0c:8", "const:4:8"]]
- 00c0be0c ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0ce00 ["INT_ADD", "register:40f0:8", ["const:c0ce00:8", "const:4:8"]]
+ 00c0ce00 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0be7c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0be7c ["INT_ADD", "register:40f0:8", ["const:c0be7c:8", "const:4:8"]]
- 00c0be7c ["CALLIND", null, ["register:0:8"]]
+ 00c0ce70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0ce70 ["INT_ADD", "register:40f0:8", ["const:c0ce70:8", "const:4:8"]]
+ 00c0ce70 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6721637fceee568ec075de49ab5a4d7e"></a>

### [`00c0c198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c198.md) → [`00c0d18c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d18c.md) FUN_00c0d18c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0c190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c190.md) · 呼出先 6件 [`00c365b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c365b0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)
- 新版 呼出元 1件 [`00c0d184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d184.md) · 呼出先 6件 [`00c375a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c375a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f630.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0c220 ["INT_ADD", "register:40f0:8", ["const:c0c220:8", "const:4:8"]]
- 00c0c220 ["CALL", null, ["callee:00c5f630:8"]]
+ 00c0d214 ["INT_ADD", "register:40f0:8", ["const:c0d214:8", "const:4:8"]]
+ 00c0d214 ["CALL", null, ["callee:00c5f630:8"]]
- 00c0c23c ["INT_ADD", "register:40f0:8", ["const:c0c23c:8", "const:4:8"]]
- 00c0c23c ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0d230 ["INT_ADD", "register:40f0:8", ["const:c0d230:8", "const:4:8"]]
+ 00c0d230 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0c2ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0c2ac ["INT_ADD", "register:40f0:8", ["const:c0c2ac:8", "const:4:8"]]
- 00c0c2ac ["CALLIND", null, ["register:0:8"]]
+ 00c0d2a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0d2a0 ["INT_ADD", "register:40f0:8", ["const:c0d2a0:8", "const:4:8"]]
+ 00c0d2a0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7bf7360953709e7373479249fd0ded46"></a>

### [`00c0c5c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c5c8.md) → [`00c0d5bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d5bc.md) FUN_00c0d5bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0c5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c5c0.md) · 呼出先 6件 [`00c36704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36704.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)
- 新版 呼出元 1件 [`00c0d5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d5b4.md) · 呼出先 6件 [`00c376f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c376f8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f630.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0c650 ["INT_ADD", "register:40f0:8", ["const:c0c650:8", "const:4:8"]]
- 00c0c650 ["CALL", null, ["callee:00c5f630:8"]]
+ 00c0d644 ["INT_ADD", "register:40f0:8", ["const:c0d644:8", "const:4:8"]]
+ 00c0d644 ["CALL", null, ["callee:00c5f630:8"]]
- 00c0c66c ["INT_ADD", "register:40f0:8", ["const:c0c66c:8", "const:4:8"]]
- 00c0c66c ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0d660 ["INT_ADD", "register:40f0:8", ["const:c0d660:8", "const:4:8"]]
+ 00c0d660 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0c6dc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0c6dc ["INT_ADD", "register:40f0:8", ["const:c0c6dc:8", "const:4:8"]]
- 00c0c6dc ["CALLIND", null, ["register:0:8"]]
+ 00c0d6d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0d6d0 ["INT_ADD", "register:40f0:8", ["const:c0d6d0:8", "const:4:8"]]
+ 00c0d6d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-99ca339a64bd9fee0a777acf9872db09"></a>

### [`00c0c9f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c9f8.md) → [`00c0d9ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d9ec.md) FUN_00c0d9ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0c9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c9f0.md) · 呼出先 6件 [`00c3684c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c3684c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)
- 新版 呼出元 1件 [`00c0d9e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d9e4.md) · 呼出先 6件 [`00c37840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37840.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f630.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0ca80 ["INT_ADD", "register:40f0:8", ["const:c0ca80:8", "const:4:8"]]
- 00c0ca80 ["CALL", null, ["callee:00c5f630:8"]]
+ 00c0da74 ["INT_ADD", "register:40f0:8", ["const:c0da74:8", "const:4:8"]]
+ 00c0da74 ["CALL", null, ["callee:00c5f630:8"]]
- 00c0ca9c ["INT_ADD", "register:40f0:8", ["const:c0ca9c:8", "const:4:8"]]
- 00c0ca9c ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0da90 ["INT_ADD", "register:40f0:8", ["const:c0da90:8", "const:4:8"]]
+ 00c0da90 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0cb0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0cb0c ["INT_ADD", "register:40f0:8", ["const:c0cb0c:8", "const:4:8"]]
- 00c0cb0c ["CALLIND", null, ["register:0:8"]]
+ 00c0db00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0db00 ["INT_ADD", "register:40f0:8", ["const:c0db00:8", "const:4:8"]]
+ 00c0db00 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bfda0fb5dc66e3c50c50b3598c7eb947"></a>

### [`00c0ce28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0ce28.md) → [`00c0de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0de1c.md) FUN_00c0de1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0ce20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0ce20.md) · 呼出先 6件 [`00c36994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e680.md)
- 新版 呼出元 1件 [`00c0de14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0de14.md) · 呼出先 6件 [`00c37988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37988.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0ce74 ["INT_ADD", "register:40f0:8", ["const:c0ce74:8", "const:4:8"]]
- 00c0ce74 ["CALL", null, ["callee:00c5f650:8"]]
+ 00c0de68 ["INT_ADD", "register:40f0:8", ["const:c0de68:8", "const:4:8"]]
+ 00c0de68 ["CALL", null, ["callee:00c5f650:8"]]
- 00c0ce90 ["INT_ADD", "register:40f0:8", ["const:c0ce90:8", "const:4:8"]]
- 00c0ce90 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0de84 ["INT_ADD", "register:40f0:8", ["const:c0de84:8", "const:4:8"]]
+ 00c0de84 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0cf10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0cf10 ["INT_ADD", "register:40f0:8", ["const:c0cf10:8", "const:4:8"]]
- 00c0cf10 ["CALLIND", null, ["register:0:8"]]
+ 00c0df04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0df04 ["INT_ADD", "register:40f0:8", ["const:c0df04:8", "const:4:8"]]
+ 00c0df04 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-41e81a0db826799948a8971ee6e7f512"></a>

### [`00c0d234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d234.md) → [`00c0e228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0e228.md) FUN_00c0e228

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0d22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d22c.md) · 呼出先 6件 [`00c36aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36aac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e680.md)
- 新版 呼出元 1件 [`00c0e220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0e220.md) · 呼出先 6件 [`00c37aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37aa0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0d280 ["INT_ADD", "register:40f0:8", ["const:c0d280:8", "const:4:8"]]
- 00c0d280 ["CALL", null, ["callee:00c5f650:8"]]
+ 00c0e274 ["INT_ADD", "register:40f0:8", ["const:c0e274:8", "const:4:8"]]
+ 00c0e274 ["CALL", null, ["callee:00c5f650:8"]]
- 00c0d29c ["INT_ADD", "register:40f0:8", ["const:c0d29c:8", "const:4:8"]]
- 00c0d29c ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0e290 ["INT_ADD", "register:40f0:8", ["const:c0e290:8", "const:4:8"]]
+ 00c0e290 ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0d31c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0d31c ["INT_ADD", "register:40f0:8", ["const:c0d31c:8", "const:4:8"]]
- 00c0d31c ["CALLIND", null, ["register:0:8"]]
+ 00c0e310 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0e310 ["INT_ADD", "register:40f0:8", ["const:c0e310:8", "const:4:8"]]
+ 00c0e310 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-19eb270c89d0a4fd4e1c76599acd6893"></a>

### [`00c0d640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d640.md) → [`00c0e634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0e634.md) FUN_00c0e634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0d638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d638.md) · 呼出先 6件 [`00c36bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36bc4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e680.md)
- 新版 呼出元 1件 [`00c0e62c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0e62c.md) · 呼出先 6件 [`00c37bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37bb8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) [`00c5f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5e0.md) [`00c5f650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0d68c ["INT_ADD", "register:40f0:8", ["const:c0d68c:8", "const:4:8"]]
- 00c0d68c ["CALL", null, ["callee:00c5f650:8"]]
+ 00c0e680 ["INT_ADD", "register:40f0:8", ["const:c0e680:8", "const:4:8"]]
+ 00c0e680 ["CALL", null, ["callee:00c5f650:8"]]
- 00c0d6a8 ["INT_ADD", "register:40f0:8", ["const:c0d6a8:8", "const:4:8"]]
- 00c0d6a8 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00c0e69c ["INT_ADD", "register:40f0:8", ["const:c0e69c:8", "const:4:8"]]
+ 00c0e69c ["CALL", null, ["callee:00c5cf10:8"]]
- 00c0d728 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0d728 ["INT_ADD", "register:40f0:8", ["const:c0d728:8", "const:4:8"]]
- 00c0d728 ["CALLIND", null, ["register:0:8"]]
+ 00c0e71c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0e71c ["INT_ADD", "register:40f0:8", ["const:c0e71c:8", "const:4:8"]]
+ 00c0e71c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ce1a5e0b7d05ec88c95d8be148c0fec8"></a>

### [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) → [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) FUN_00c11234

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 14件 [`00c0ee1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0ee1c.md) [`00c0f068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f068.md) [`00c0f2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f2b4.md) [`00c0f4e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f4e4.md) [`00c0f714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f714.md) · 呼出先 2件 [`00c5b220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b220.md) [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md)
- 新版 呼出元 14件 [`00c0fe10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0fe10.md) [`00c1005c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c1005c.md) [`00c102a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c102a8.md) [`00c104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c104d8.md) [`00c10708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c10708.md) · 呼出先 2件 [`00c5c1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1f0.md) [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c102a8 ["INT_ADD", "register:40f0:8", ["const:c102a8:8", "const:4:8"]]
- 00c102a8 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c1129c ["INT_ADD", "register:40f0:8", ["const:c1129c:8", "const:4:8"]]
+ 00c1129c ["CALL", null, ["callee:00c5f610:8"]]
- 00c102c8 ["INT_ADD", "register:40f0:8", ["const:c102c8:8", "const:4:8"]]
- 00c102c8 ["CALL", null, ["callee:00c5c1f0:8"]]
+ 00c112bc ["INT_ADD", "register:40f0:8", ["const:c112bc:8", "const:4:8"]]
+ 00c112bc ["CALL", null, ["callee:00c5c1f0:8"]]
- 00c102d8 ["INT_ADD", "register:40f0:8", ["const:c102d8:8", "const:4:8"]]
- 00c102d8 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c112cc ["INT_ADD", "register:40f0:8", ["const:c112cc:8", "const:4:8"]]
+ 00c112cc ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-5c65ee547a5404ce5319633455f81202"></a>

### [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) → [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) FUN_00c12974

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 9件 [`00c10550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10550.md) [`00c1079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c1079c.md) [`00c109e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c109e8.md) [`00c10c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10c18.md) [`00c10e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10e48.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 9件 [`00c11544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11544.md) [`00c11790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11790.md) [`00c119dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c119dc.md) [`00c11c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11c0c.md) [`00c11e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11e3c.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c119ec ["COPY", "register:0:8", ["register:4040:8"]]
- 00c119ec ["INT_ADD", "register:40f0:8", ["const:c119ec:8", "const:4:8"]]
- 00c119ec ["CALLIND", null, ["register:0:8"]]
+ 00c129e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c129e0 ["INT_ADD", "register:40f0:8", ["const:c129e0:8", "const:4:8"]]
+ 00c129e0 ["CALLIND", null, ["register:0:8"]]
- 00c11a50 ["INT_ADD", "register:40f0:8", ["const:c11a50:8", "const:4:8"]]
- 00c11a50 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c12a44 ["INT_ADD", "register:40f0:8", ["const:c12a44:8", "const:4:8"]]
+ 00c12a44 ["CALL", null, ["callee:00c58f30:8"]]
- 00c11ad8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c11ad8 ["INT_ADD", "register:40f0:8", ["const:c11ad8:8", "const:4:8"]]
- 00c11ad8 ["CALLIND", null, ["register:0:8"]]
+ 00c12acc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c12acc ["INT_ADD", "register:40f0:8", ["const:c12acc:8", "const:4:8"]]
+ 00c12acc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1c336998395e89096682ab069951ffe8"></a>

### [`00c13444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13444.md) → [`00c14438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14438.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11do_get_timeES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a840.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b810.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c13474 ["INT_ADD", "register:40f0:8", ["const:c13474:8", "const:4:8"]]
- 00c13474 ["CALL", null, ["callee:00c5b810:8"]]
+ 00c14468 ["INT_ADD", "register:40f0:8", ["const:c14468:8", "const:4:8"]]
+ 00c14468 ["CALL", null, ["callee:00c5b810:8"]]
~~~


<a id="compare-f718cad874cc442f9709c2ea46b23d19"></a>

### [`00c13488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13488.md) → [`00c1447c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c1447c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11do_get_dateES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a840.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b810.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c134c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c134c0 ["INT_ADD", "register:40f0:8", ["const:c134c0:8", "const:4:8"]]
- 00c134c0 ["CALLIND", null, ["register:0:8"]]
+ 00c144b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c144b4 ["INT_ADD", "register:40f0:8", ["const:c144b4:8", "const:4:8"]]
+ 00c144b4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-69ed1530520d77cef909aad185b52b34"></a>

### [`00c1366c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c1366c.md) → [`00c14660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14660.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE17__get_weekdaynameERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c08ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08ba8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c136a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c136a0 ["INT_ADD", "register:40f0:8", ["const:c136a0:8", "const:4:8"]]
- 00c136a0 ["CALLIND", null, ["register:0:8"]]
+ 00c14694 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c14694 ["INT_ADD", "register:40f0:8", ["const:c14694:8", "const:4:8"]]
+ 00c14694 ["CALLIND", null, ["register:0:8"]]
- 00c136c4 ["INT_ADD", "register:40f0:8", ["const:c136c4:8", "const:4:8"]]
- 00c136c4 ["CALL", null, ["callee:00c08ba8:8"]]
+ 00c146b8 ["INT_ADD", "register:40f0:8", ["const:c146b8:8", "const:4:8"]]
+ 00c146b8 ["CALL", null, ["callee:00c08ba8:8"]]
~~~


<a id="compare-167b41c564fb4123461e452105805fa0"></a>

### [`00c13878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13878.md) → [`00c1486c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c1486c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE15__get_monthnameERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c08ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08ba8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c138ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00c138ac ["INT_ADD", "register:40f0:8", ["const:c138ac:8", "const:4:8"]]
- 00c138ac ["CALLIND", null, ["register:0:8"]]
+ 00c148a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c148a0 ["INT_ADD", "register:40f0:8", ["const:c148a0:8", "const:4:8"]]
+ 00c148a0 ["CALLIND", null, ["register:0:8"]]
- 00c138d0 ["INT_ADD", "register:40f0:8", ["const:c138d0:8", "const:4:8"]]
- 00c138d0 ["CALL", null, ["callee:00c08ba8:8"]]
+ 00c148c4 ["INT_ADD", "register:40f0:8", ["const:c148c4:8", "const:4:8"]]
+ 00c148c4 ["CALL", null, ["callee:00c08ba8:8"]]
~~~


<a id="compare-4de3de1d235ad3734eb2438ca234f092"></a>

### [`00c13a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13a48.md) → [`00c14a3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14a3c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE10__get_yearERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c13a74 ["INT_ADD", "register:40f0:8", ["const:c13a74:8", "const:4:8"]]
- 00c13a74 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c14a68 ["INT_ADD", "register:40f0:8", ["const:c14a68:8", "const:4:8"]]
+ 00c14a68 ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-6d944ef1db3ff2df7ce5513d8da6f312"></a>

### [`00c14130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14130.md) → [`00c15124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15124.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE9__get_dayERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1415c ["INT_ADD", "register:40f0:8", ["const:c1415c:8", "const:4:8"]]
- 00c1415c ["CALL", null, ["callee:00c1593c:8"]]
+ 00c15150 ["INT_ADD", "register:40f0:8", ["const:c15150:8", "const:4:8"]]
+ 00c15150 ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-15db436ef6d54233f53d8ce31ba3dded"></a>

### [`00c14194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14194.md) → [`00c15188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15188.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE10__get_hourERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c141c0 ["INT_ADD", "register:40f0:8", ["const:c141c0:8", "const:4:8"]]
- 00c141c0 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c151b4 ["INT_ADD", "register:40f0:8", ["const:c151b4:8", "const:4:8"]]
+ 00c151b4 ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-eaee458f25f00d0fb5e28d246d50ba70"></a>

### [`00c141f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c141f4.md) → [`00c151e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c151e8.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE13__get_12_hourERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14220 ["INT_ADD", "register:40f0:8", ["const:c14220:8", "const:4:8"]]
- 00c14220 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c15214 ["INT_ADD", "register:40f0:8", ["const:c15214:8", "const:4:8"]]
+ 00c15214 ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-3037d2db29850ceea20204a3fd0aaeae"></a>

### [`00c14258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14258.md) → [`00c1524c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1524c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE18__get_day_year_numERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14284 ["INT_ADD", "register:40f0:8", ["const:c14284:8", "const:4:8"]]
- 00c14284 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c15278 ["INT_ADD", "register:40f0:8", ["const:c15278:8", "const:4:8"]]
+ 00c15278 ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-8d0eb4012ce1c5782c8b097b775c9553"></a>

### [`00c142b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c142b8.md) → [`00c152ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c152ac.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11__get_monthERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c142e4 ["INT_ADD", "register:40f0:8", ["const:c142e4:8", "const:4:8"]]
- 00c142e4 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c152d8 ["INT_ADD", "register:40f0:8", ["const:c152d8:8", "const:4:8"]]
+ 00c152d8 ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-2aaeb555698b87cba2be8f4b70d10744"></a>

### [`00c1431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1431c.md) → [`00c15310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15310.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE12__get_minuteERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14348 ["INT_ADD", "register:40f0:8", ["const:c14348:8", "const:4:8"]]
- 00c14348 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c1533c ["INT_ADD", "register:40f0:8", ["const:c1533c:8", "const:4:8"]]
+ 00c1533c ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-446b01012d55f7731bc3070be6a2f89e"></a>

### [`00c1437c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1437c.md) → [`00c15370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15370.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE17__get_white_spaceERS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6e0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5f6b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f6b0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c143e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c143e0 ["INT_ADD", "register:40f0:8", ["const:c143e0:8", "const:4:8"]]
- 00c143e0 ["CALLIND", null, ["register:0:8"]]
+ 00c153d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c153d4 ["INT_ADD", "register:40f0:8", ["const:c153d4:8", "const:4:8"]]
+ 00c153d4 ["CALLIND", null, ["register:0:8"]]
- 00c14434 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14434 ["INT_ADD", "register:40f0:8", ["const:c14434:8", "const:4:8"]]
- 00c14434 ["CALLIND", null, ["register:0:8"]]
+ 00c15428 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c15428 ["INT_ADD", "register:40f0:8", ["const:c15428:8", "const:4:8"]]
+ 00c15428 ["CALLIND", null, ["register:0:8"]]
- 00c14474 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14474 ["INT_ADD", "register:40f0:8", ["const:c14474:8", "const:4:8"]]
- 00c14474 ["CALLIND", null, ["register:0:8"]]
+ 00c15468 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c15468 ["INT_ADD", "register:40f0:8", ["const:c15468:8", "const:4:8"]]
+ 00c15468 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-98cfa04196e2502d1cc103c96517062c"></a>

### [`00c14564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14564.md) → [`00c15558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15558.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11__get_am_pmERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c08ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08ba8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14598 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14598 ["INT_ADD", "register:40f0:8", ["const:c14598:8", "const:4:8"]]
- 00c14598 ["CALLIND", null, ["register:0:8"]]
+ 00c1558c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1558c ["INT_ADD", "register:40f0:8", ["const:c1558c:8", "const:4:8"]]
+ 00c1558c ["CALLIND", null, ["register:0:8"]]
- 00c145fc ["INT_ADD", "register:40f0:8", ["const:c145fc:8", "const:4:8"]]
- 00c145fc ["CALL", null, ["callee:00c08ba8:8"]]
+ 00c155f0 ["INT_ADD", "register:40f0:8", ["const:c155f0:8", "const:4:8"]]
+ 00c155f0 ["CALL", null, ["callee:00c08ba8:8"]]
~~~


<a id="compare-1fe4c724ac10c51bdbb4f74c4d752b4b"></a>

### [`00c1464c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1464c.md) → [`00c15640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15640.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE12__get_secondERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14678 ["INT_ADD", "register:40f0:8", ["const:c14678:8", "const:4:8"]]
- 00c14678 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c1566c ["INT_ADD", "register:40f0:8", ["const:c1566c:8", "const:4:8"]]
+ 00c1566c ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-8eed36a38399d2fb0f136dde91fb3952"></a>

### [`00c146ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c146ac.md) → [`00c156a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c156a0.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE13__get_weekdayERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c146d8 ["INT_ADD", "register:40f0:8", ["const:c146d8:8", "const:4:8"]]
- 00c146d8 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c156cc ["INT_ADD", "register:40f0:8", ["const:c156cc:8", "const:4:8"]]
+ 00c156cc ["CALL", null, ["callee:00c1593c:8"]]
~~~


<a id="compare-04df2067a2fc69db25d996809ad3342b"></a>

### [`00c1470c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1470c.md) → [`00c15700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15700.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11__get_year4ERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14738 ["INT_ADD", "register:40f0:8", ["const:c14738:8", "const:4:8"]]
- 00c14738 ["CALL", null, ["callee:00c1593c:8"]]
+ 00c1572c ["INT_ADD", "register:40f0:8", ["const:c1572c:8", "const:4:8"]]
+ 00c1572c ["CALL", null, ["callee:00c1593c:8"]]
~~~


