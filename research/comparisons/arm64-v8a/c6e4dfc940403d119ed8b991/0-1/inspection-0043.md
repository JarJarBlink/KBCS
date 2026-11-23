# v16.0.1 → v16.0.2 · 要調査の変更候補 (43)

[一覧の目次](README.md)

<a id="compare-6e208c63c0706029ab678477c2a0e132"></a>

### [`00c022cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c022cc.md) → [`00c02368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02368.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE4peekEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c022f4 ["INT_ADD", "register:40f0:8", ["const:c022f4:8", "const:4:8"]]
- 00c022f4 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c02390 ["INT_ADD", "register:40f0:8", ["const:c02390:8", "const:4:8"]]
+ 00c02390 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c02334 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02334 ["INT_ADD", "register:40f0:8", ["const:c02334:8", "const:4:8"]]
- 00c02334 ["CALLIND", null, ["register:0:8"]]
+ 00c023d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c023d0 ["INT_ADD", "register:40f0:8", ["const:c023d0:8", "const:4:8"]]
+ 00c023d0 ["CALLIND", null, ["register:0:8"]]
- 00c0235c ["INT_ADD", "register:40f0:8", ["const:c0235c:8", "const:4:8"]]
- 00c0235c ["CALL", null, ["callee:00c58370:8"]]
+ 00c023f8 ["INT_ADD", "register:40f0:8", ["const:c023f8:8", "const:4:8"]]
+ 00c023f8 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-92af5d8daaa22032f2566254d8c7de06"></a>

### [`00c023cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c023cc.md) → [`00c02468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02468.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE4readEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c023fc ["INT_ADD", "register:40f0:8", ["const:c023fc:8", "const:4:8"]]
- 00c023fc ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c02498 ["INT_ADD", "register:40f0:8", ["const:c02498:8", "const:4:8"]]
+ 00c02498 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c02428 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02428 ["INT_ADD", "register:40f0:8", ["const:c02428:8", "const:4:8"]]
- 00c02428 ["CALLIND", null, ["register:0:8"]]
+ 00c024c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c024c4 ["INT_ADD", "register:40f0:8", ["const:c024c4:8", "const:4:8"]]
+ 00c024c4 ["CALLIND", null, ["register:0:8"]]
- 00c02458 ["INT_ADD", "register:40f0:8", ["const:c02458:8", "const:4:8"]]
- 00c02458 ["CALL", null, ["callee:00c58370:8"]]
+ 00c024f4 ["INT_ADD", "register:40f0:8", ["const:c024f4:8", "const:4:8"]]
+ 00c024f4 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-4aac92b8d949274ccdef5ee7c14bbb82"></a>

### [`00c024c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c024c4.md) → [`00c02560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02560.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE8readsomeEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c024f4 ["INT_ADD", "register:40f0:8", ["const:c024f4:8", "const:4:8"]]
- 00c024f4 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c02590 ["INT_ADD", "register:40f0:8", ["const:c02590:8", "const:4:8"]]
+ 00c02590 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c02538 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02538 ["INT_ADD", "register:40f0:8", ["const:c02538:8", "const:4:8"]]
- 00c02538 ["CALLIND", null, ["register:0:8"]]
+ 00c025d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c025d4 ["INT_ADD", "register:40f0:8", ["const:c025d4:8", "const:4:8"]]
+ 00c025d4 ["CALLIND", null, ["register:0:8"]]
- 00c02584 ["COPY", "register:0:8", ["register:4048:8"]]
- 00c02584 ["INT_ADD", "register:40f0:8", ["const:c02584:8", "const:4:8"]]
- 00c02584 ["CALLIND", null, ["register:0:8"]]
+ 00c02620 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00c02620 ["INT_ADD", "register:40f0:8", ["const:c02620:8", "const:4:8"]]
+ 00c02620 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2a986b0e4777582ded5eab4e9a44f3d0"></a>

### [`00c02618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02618.md) → [`00c026b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c026b4.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE7putbackEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02658 ["INT_ADD", "register:40f0:8", ["const:c02658:8", "const:4:8"]]
- 00c02658 ["CALL", null, ["callee:00c58370:8"]]
+ 00c026f4 ["INT_ADD", "register:40f0:8", ["const:c026f4:8", "const:4:8"]]
+ 00c026f4 ["CALL", null, ["callee:00c58370:8"]]
- 00c02668 ["INT_ADD", "register:40f0:8", ["const:c02668:8", "const:4:8"]]
- 00c02668 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c02704 ["INT_ADD", "register:40f0:8", ["const:c02704:8", "const:4:8"]]
+ 00c02704 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c026c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c026c4 ["INT_ADD", "register:40f0:8", ["const:c026c4:8", "const:4:8"]]
- 00c026c4 ["CALLIND", null, ["register:0:8"]]
+ 00c02760 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02760 ["INT_ADD", "register:40f0:8", ["const:c02760:8", "const:4:8"]]
+ 00c02760 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-78106d836d9e8fd8433962e50985cb3e"></a>

### [`00c02758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02758.md) → [`00c027f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c027f4.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE5ungetEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02794 ["INT_ADD", "register:40f0:8", ["const:c02794:8", "const:4:8"]]
- 00c02794 ["CALL", null, ["callee:00c58370:8"]]
+ 00c02830 ["INT_ADD", "register:40f0:8", ["const:c02830:8", "const:4:8"]]
+ 00c02830 ["CALL", null, ["callee:00c58370:8"]]
- 00c027a4 ["INT_ADD", "register:40f0:8", ["const:c027a4:8", "const:4:8"]]
- 00c027a4 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c02840 ["INT_ADD", "register:40f0:8", ["const:c02840:8", "const:4:8"]]
+ 00c02840 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c027f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c027f8 ["INT_ADD", "register:40f0:8", ["const:c027f8:8", "const:4:8"]]
- 00c027f8 ["CALLIND", null, ["register:0:8"]]
+ 00c02894 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02894 ["INT_ADD", "register:40f0:8", ["const:c02894:8", "const:4:8"]]
+ 00c02894 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-454b16e2cd452230cab14d997514000a"></a>

### [`00c0288c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c0288c.md) → [`00c02928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02928.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE4syncEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c028b0 ["INT_ADD", "register:40f0:8", ["const:c028b0:8", "const:4:8"]]
- 00c028b0 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c0294c ["INT_ADD", "register:40f0:8", ["const:c0294c:8", "const:4:8"]]
+ 00c0294c ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c028d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c028d8 ["INT_ADD", "register:40f0:8", ["const:c028d8:8", "const:4:8"]]
- 00c028d8 ["CALLIND", null, ["register:0:8"]]
+ 00c02974 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02974 ["INT_ADD", "register:40f0:8", ["const:c02974:8", "const:4:8"]]
+ 00c02974 ["CALLIND", null, ["register:0:8"]]
- 00c028fc ["INT_ADD", "register:40f0:8", ["const:c028fc:8", "const:4:8"]]
- 00c028fc ["CALL", null, ["callee:00c58370:8"]]
+ 00c02998 ["INT_ADD", "register:40f0:8", ["const:c02998:8", "const:4:8"]]
+ 00c02998 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-4c962b5f531dd6554fa6f06ba5f6c441"></a>

### [`00c0297c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c0297c.md) → [`00c02a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02a18.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE5tellgEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c029a0 ["INT_ADD", "register:40f0:8", ["const:c029a0:8", "const:4:8"]]
- 00c029a0 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c02a3c ["INT_ADD", "register:40f0:8", ["const:c02a3c:8", "const:4:8"]]
+ 00c02a3c ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c029d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c029d0 ["INT_ADD", "register:40f0:8", ["const:c029d0:8", "const:4:8"]]
- 00c029d0 ["CALLIND", null, ["register:0:8"]]
+ 00c02a6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02a6c ["INT_ADD", "register:40f0:8", ["const:c02a6c:8", "const:4:8"]]
+ 00c02a6c ["CALLIND", null, ["register:0:8"]]
- 00c029f4 ["INT_ADD", "register:40f0:8", ["const:c029f4:8", "const:4:8"]]
- 00c029f4 ["CALL", null, ["callee:00c58370:8"]]
+ 00c02a90 ["INT_ADD", "register:40f0:8", ["const:c02a90:8", "const:4:8"]]
+ 00c02a90 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-fc34de953fac303401d9a6bfb607ba3b"></a>

### [`00c02a78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02a78.md) → [`00c02b14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02b14.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE5seekgENS_4fposI9mbstate_tEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02ab4 ["INT_ADD", "register:40f0:8", ["const:c02ab4:8", "const:4:8"]]
- 00c02ab4 ["CALL", null, ["callee:00c58370:8"]]
+ 00c02b50 ["INT_ADD", "register:40f0:8", ["const:c02b50:8", "const:4:8"]]
+ 00c02b50 ["CALL", null, ["callee:00c58370:8"]]
- 00c02ac4 ["INT_ADD", "register:40f0:8", ["const:c02ac4:8", "const:4:8"]]
- 00c02ac4 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c02b60 ["INT_ADD", "register:40f0:8", ["const:c02b60:8", "const:4:8"]]
+ 00c02b60 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c02af4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02af4 ["INT_ADD", "register:40f0:8", ["const:c02af4:8", "const:4:8"]]
- 00c02af4 ["CALLIND", null, ["register:0:8"]]
+ 00c02b90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02b90 ["INT_ADD", "register:40f0:8", ["const:c02b90:8", "const:4:8"]]
+ 00c02b90 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7c29928aff1deaa4ac2b626ea0835a8d"></a>

### [`00c02b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02b88.md) → [`00c02c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02c24.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE5seekgExNS_8ios_base7seekdirE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02bc4 ["INT_ADD", "register:40f0:8", ["const:c02bc4:8", "const:4:8"]]
- 00c02bc4 ["CALL", null, ["callee:00c58370:8"]]
+ 00c02c60 ["INT_ADD", "register:40f0:8", ["const:c02c60:8", "const:4:8"]]
+ 00c02c60 ["CALL", null, ["callee:00c58370:8"]]
- 00c02bd4 ["INT_ADD", "register:40f0:8", ["const:c02bd4:8", "const:4:8"]]
- 00c02bd4 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c02c70 ["INT_ADD", "register:40f0:8", ["const:c02c70:8", "const:4:8"]]
+ 00c02c70 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c02c04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02c04 ["INT_ADD", "register:40f0:8", ["const:c02c04:8", "const:4:8"]]
- 00c02c04 ["CALLIND", null, ["register:0:8"]]
+ 00c02ca0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02ca0 ["INT_ADD", "register:40f0:8", ["const:c02ca0:8", "const:4:8"]]
+ 00c02ca0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0a3270b86031489adf9a58a769eba6db"></a>

### [`00c02c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02c98.md) → [`00c02d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02d34.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEEC2EPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02cd0 ["INT_ADD", "register:40f0:8", ["const:c02cd0:8", "const:4:8"]]
- 00c02cd0 ["CALL", null, ["callee:00c582b0:8"]]
+ 00c02d6c ["INT_ADD", "register:40f0:8", ["const:c02d6c:8", "const:4:8"]]
+ 00c02d6c ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-fe86dbb30c408428b2f490c92ddcbd52"></a>

### [`00c02d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02d88.md) → [`00c02e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02e24.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02da0 ["INT_ADD", "register:40f0:8", ["const:c02da0:8", "const:4:8"]]
- 00c02da0 ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00c02e3c ["INT_ADD", "register:40f0:8", ["const:c02e3c:8", "const:4:8"]]
+ 00c02e3c ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-1aeff81642870e2934c3300f8715b723"></a>

### [`00c02db8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02db8.md) → [`00c02e54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02e54.md) _ZTv0_n24_NSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02dd8 ["INT_ADD", "register:40f0:8", ["const:c02dd8:8", "const:4:8"]]
- 00c02dd8 ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00c02e74 ["INT_ADD", "register:40f0:8", ["const:c02e74:8", "const:4:8"]]
+ 00c02e74 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-ec773bcfee2cb9875fbc7d5d7f15b366"></a>

### [`00c02df0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02df0.md) → [`00c02e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02e8c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02e20 ["INT_ADD", "register:40f0:8", ["const:c02e20:8", "const:4:8"]]
- 00c02e20 ["CALL", null, ["callee:00c5e3f0:8"]]
+ 00c02ebc ["INT_ADD", "register:40f0:8", ["const:c02ebc:8", "const:4:8"]]
+ 00c02ebc ["CALL", null, ["callee:00c5e3f0:8"]]
~~~


<a id="compare-2bdcd5b17d241444220d81f18ecd4e3b"></a>

### [`00c02e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02e54.md) → [`00c02ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02ef0.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE6sentryC1ERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md) · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3f0.md)
- 新版 呼出元 1件 [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) · 呼出先 1件 [`00c5e4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02e98 ["INT_ADD", "register:40f0:8", ["const:c02e98:8", "const:4:8"]]
- 00c02e98 ["CALL", null, ["callee:00c5e4c0:8"]]
+ 00c02f34 ["INT_ADD", "register:40f0:8", ["const:c02f34:8", "const:4:8"]]
+ 00c02f34 ["CALL", null, ["callee:00c5e4c0:8"]]
~~~


<a id="compare-22dff6b4ae97826029cd3d1ddab3bde8"></a>

### [`00c02eb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02eb8.md) → [`00c02f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02f54.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE6sentryD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e410.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5d0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0f0.md)
- 新版 呼出元 1件 [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02ef4 ["INT_ADD", "register:40f0:8", ["const:c02ef4:8", "const:4:8"]]
- 00c02ef4 ["CALL", null, ["callee:00c5d1c0:8"]]
+ 00c02f90 ["INT_ADD", "register:40f0:8", ["const:c02f90:8", "const:4:8"]]
+ 00c02f90 ["CALL", null, ["callee:00c5d1c0:8"]]
- 00c02f18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c02f18 ["INT_ADD", "register:40f0:8", ["const:c02f18:8", "const:4:8"]]
- 00c02f18 ["CALLIND", null, ["register:0:8"]]
+ 00c02fb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02fb4 ["INT_ADD", "register:40f0:8", ["const:c02fb4:8", "const:4:8"]]
+ 00c02fb4 ["CALLIND", null, ["register:0:8"]]
- 00c02f3c ["INT_ADD", "register:40f0:8", ["const:c02f3c:8", "const:4:8"]]
- 00c02f3c ["CALL", null, ["callee:00c58370:8"]]
+ 00c02fd8 ["INT_ADD", "register:40f0:8", ["const:c02fd8:8", "const:4:8"]]
+ 00c02fd8 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-35fcb2b3d77ae0607338d46d1008b2e2"></a>

### [`00c02f6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02f6c.md) → [`00c03008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03008.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEPFRNS_9basic_iosIwS2_EES6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02f8c ["COPY", "register:0:8", ["register:4008:8"]]
- 00c02f8c ["INT_ADD", "register:40f0:8", ["const:c02f8c:8", "const:4:8"]]
- 00c02f8c ["CALLIND", null, ["register:0:8"]]
+ 00c03028 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00c03028 ["INT_ADD", "register:40f0:8", ["const:c03028:8", "const:4:8"]]
+ 00c03028 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2698ce25003a4db44f1c41d32ff60d31"></a>

### [`00c02fa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02fa4.md) → [`00c03040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03040.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEPFRNS_8ios_baseES5_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c02fc4 ["COPY", "register:0:8", ["register:4008:8"]]
- 00c02fc4 ["INT_ADD", "register:40f0:8", ["const:c02fc4:8", "const:4:8"]]
- 00c02fc4 ["CALLIND", null, ["register:0:8"]]
+ 00c03060 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00c03060 ["INT_ADD", "register:40f0:8", ["const:c03060:8", "const:4:8"]]
+ 00c03060 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-276f68e4d918bca43cf8089f3d9fedcb"></a>

### [`00c0448c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c0448c.md) → [`00c04528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04528.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md) [`00c5e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e410.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c044b4 ["INT_ADD", "register:40f0:8", ["const:c044b4:8", "const:4:8"]]
- 00c044b4 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c04550 ["INT_ADD", "register:40f0:8", ["const:c04550:8", "const:4:8"]]
+ 00c04550 ["CALL", null, ["callee:00c5e4d0:8"]]
- 00c04508 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04508 ["INT_ADD", "register:40f0:8", ["const:c04508:8", "const:4:8"]]
- 00c04508 ["CALLIND", null, ["register:0:8"]]
+ 00c045a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c045a4 ["INT_ADD", "register:40f0:8", ["const:c045a4:8", "const:4:8"]]
+ 00c045a4 ["CALLIND", null, ["register:0:8"]]
- 00c04534 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04534 ["INT_ADD", "register:40f0:8", ["const:c04534:8", "const:4:8"]]
- 00c04534 ["CALLIND", null, ["register:0:8"]]
+ 00c045d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c045d0 ["INT_ADD", "register:40f0:8", ["const:c045d0:8", "const:4:8"]]
+ 00c045d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bf0b089143b3703d724d5ae49a50aafc"></a>

### [`00c04658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04658.md) → [`00c046f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c046f4.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE3putEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md) [`00c5e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e410.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0467c ["INT_ADD", "register:40f0:8", ["const:c0467c:8", "const:4:8"]]
- 00c0467c ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c04718 ["INT_ADD", "register:40f0:8", ["const:c04718:8", "const:4:8"]]
+ 00c04718 ["CALL", null, ["callee:00c5e4d0:8"]]
- 00c046c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c046c8 ["INT_ADD", "register:40f0:8", ["const:c046c8:8", "const:4:8"]]
- 00c046c8 ["CALLIND", null, ["register:0:8"]]
+ 00c04764 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c04764 ["INT_ADD", "register:40f0:8", ["const:c04764:8", "const:4:8"]]
+ 00c04764 ["CALLIND", null, ["register:0:8"]]
- 00c046ec ["INT_ADD", "register:40f0:8", ["const:c046ec:8", "const:4:8"]]
- 00c046ec ["CALL", null, ["callee:00c58370:8"]]
+ 00c04788 ["INT_ADD", "register:40f0:8", ["const:c04788:8", "const:4:8"]]
+ 00c04788 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-53890f1d53281aa8de64c198c53d6e79"></a>

### [`00c04758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04758.md) → [`00c047f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c047f4.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5writeEPKwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md) [`00c5e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e410.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04784 ["INT_ADD", "register:40f0:8", ["const:c04784:8", "const:4:8"]]
- 00c04784 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c04820 ["INT_ADD", "register:40f0:8", ["const:c04820:8", "const:4:8"]]
+ 00c04820 ["CALL", null, ["callee:00c5e4d0:8"]]
- 00c047b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c047b4 ["INT_ADD", "register:40f0:8", ["const:c047b4:8", "const:4:8"]]
- 00c047b4 ["CALLIND", null, ["register:0:8"]]
+ 00c04850 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c04850 ["INT_ADD", "register:40f0:8", ["const:c04850:8", "const:4:8"]]
+ 00c04850 ["CALLIND", null, ["register:0:8"]]
- 00c047d4 ["INT_ADD", "register:40f0:8", ["const:c047d4:8", "const:4:8"]]
- 00c047d4 ["CALL", null, ["callee:00c58370:8"]]
+ 00c04870 ["INT_ADD", "register:40f0:8", ["const:c04870:8", "const:4:8"]]
+ 00c04870 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-c2c85106def470f14411573b063f2b7a"></a>

### [`00c04844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04844.md) → [`00c048e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c048e0.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5tellpEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04894 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04894 ["INT_ADD", "register:40f0:8", ["const:c04894:8", "const:4:8"]]
- 00c04894 ["CALLIND", null, ["register:0:8"]]
+ 00c04930 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c04930 ["INT_ADD", "register:40f0:8", ["const:c04930:8", "const:4:8"]]
+ 00c04930 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a4e9088bdf4e48dbfa36ffdac154b3f7"></a>

### [`00c048a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c048a4.md) → [`00c04940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04940.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5seekpENS_4fposI9mbstate_tEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md) [`00c5e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e410.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c048d0 ["INT_ADD", "register:40f0:8", ["const:c048d0:8", "const:4:8"]]
- 00c048d0 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c0496c ["INT_ADD", "register:40f0:8", ["const:c0496c:8", "const:4:8"]]
+ 00c0496c ["CALL", null, ["callee:00c5e4d0:8"]]
- 00c04908 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04908 ["INT_ADD", "register:40f0:8", ["const:c04908:8", "const:4:8"]]
- 00c04908 ["CALLIND", null, ["register:0:8"]]
+ 00c049a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c049a4 ["INT_ADD", "register:40f0:8", ["const:c049a4:8", "const:4:8"]]
+ 00c049a4 ["CALLIND", null, ["register:0:8"]]
- 00c04928 ["INT_ADD", "register:40f0:8", ["const:c04928:8", "const:4:8"]]
- 00c04928 ["CALL", null, ["callee:00c58370:8"]]
+ 00c049c4 ["INT_ADD", "register:40f0:8", ["const:c049c4:8", "const:4:8"]]
+ 00c049c4 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-6eb5b3a16961c16952eeba140aefc3ea"></a>

### [`00c04968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04968.md) → [`00c04a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04a04.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5seekpExNS_8ios_base7seekdirE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md) [`00c5e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e410.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04994 ["INT_ADD", "register:40f0:8", ["const:c04994:8", "const:4:8"]]
- 00c04994 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c04a30 ["INT_ADD", "register:40f0:8", ["const:c04a30:8", "const:4:8"]]
+ 00c04a30 ["CALL", null, ["callee:00c5e4d0:8"]]
- 00c049cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c049cc ["INT_ADD", "register:40f0:8", ["const:c049cc:8", "const:4:8"]]
- 00c049cc ["CALLIND", null, ["register:0:8"]]
+ 00c04a68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c04a68 ["INT_ADD", "register:40f0:8", ["const:c04a68:8", "const:4:8"]]
+ 00c04a68 ["CALLIND", null, ["register:0:8"]]
- 00c049ec ["INT_ADD", "register:40f0:8", ["const:c049ec:8", "const:4:8"]]
- 00c049ec ["CALL", null, ["callee:00c58370:8"]]
+ 00c04a88 ["INT_ADD", "register:40f0:8", ["const:c04a88:8", "const:4:8"]]
+ 00c04a88 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-109d78758eb82fd7d7cb08b471e83cae"></a>

### [`00c04ad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04ad8.md) → [`00c04b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04b74.md) FUN_00c04b74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c04a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04a2c.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 1件 [`00c04ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04ac8.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04b90 ["INT_ADD", "register:40f0:8", ["const:c04b90:8", "const:4:8"]]
- 00c04b90 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c04c2c ["INT_ADD", "register:40f0:8", ["const:c04c2c:8", "const:4:8"]]
+ 00c04c2c ["CALL", null, ["callee:00c57f80:8"]]
- 00c04c34 ["INT_ADD", "register:40f0:8", ["const:c04c34:8", "const:4:8"]]
- 00c04c34 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c04cd0 ["INT_ADD", "register:40f0:8", ["const:c04cd0:8", "const:4:8"]]
+ 00c04cd0 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c04c48 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04c48 ["INT_ADD", "register:40f0:8", ["const:c04c48:8", "const:4:8"]]
- 00c04c48 ["CALLIND", null, ["register:0:8"]]
+ 00c04ce4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c04ce4 ["INT_ADD", "register:40f0:8", ["const:c04ce4:8", "const:4:8"]]
+ 00c04ce4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cfa34a5a46af43a44690b67e17644e5f"></a>

### [`00c04cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04cac.md) → [`00c04d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04d48.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEaSEOS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e470.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 1件 [`00c5e540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e540.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c04d64 ["INT_ADD", "register:40f0:8", ["const:c04d64:8", "const:4:8"]]
- 00c04d64 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c04e00 ["INT_ADD", "register:40f0:8", ["const:c04e00:8", "const:4:8"]]
+ 00c04e00 ["CALL", null, ["callee:00c57f80:8"]]
- 00c04e2c ["INT_ADD", "register:40f0:8", ["const:c04e2c:8", "const:4:8"]]
- 00c04e2c ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c04ec8 ["INT_ADD", "register:40f0:8", ["const:c04ec8:8", "const:4:8"]]
+ 00c04ec8 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c04e40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c04e40 ["INT_ADD", "register:40f0:8", ["const:c04e40:8", "const:4:8"]]
- 00c04e40 ["CALLIND", null, ["register:0:8"]]
+ 00c04edc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c04edc ["INT_ADD", "register:40f0:8", ["const:c04edc:8", "const:4:8"]]
+ 00c04edc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-63411c7bf0999379930bc4dd25c52132"></a>

### [`00c04ea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04ea8.md) → [`00c04f44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04f44.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE4swapERS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c050dc ["INT_ADD", "register:40f0:8", ["const:c050dc:8", "const:4:8"]]
- 00c050dc ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c05178 ["INT_ADD", "register:40f0:8", ["const:c05178:8", "const:4:8"]]
+ 00c05178 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c050e8 ["INT_ADD", "register:40f0:8", ["const:c050e8:8", "const:4:8"]]
- 00c050e8 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c05184 ["INT_ADD", "register:40f0:8", ["const:c05184:8", "const:4:8"]]
+ 00c05184 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c050fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c050fc ["INT_ADD", "register:40f0:8", ["const:c050fc:8", "const:4:8"]]
- 00c050fc ["CALLIND", null, ["register:0:8"]]
+ 00c05198 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05198 ["INT_ADD", "register:40f0:8", ["const:c05198:8", "const:4:8"]]
+ 00c05198 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6d374dc364061eb6061b72784b1111b2"></a>

### [`00c05180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05180.md) → [`00c0521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0521c.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00548258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00548/00548258.md) [`00bf21a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf21a8.md) [`00bf225c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf225c.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00548298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548298.md) [`00bf2244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2244.md) [`00bf22f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf22f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c051dc ["INT_ADD", "register:40f0:8", ["const:c051dc:8", "const:4:8"]]
- 00c051dc ["CALL", null, ["callee:00bf22f8:8"]]
+ 00c05278 ["INT_ADD", "register:40f0:8", ["const:c05278:8", "const:4:8"]]
+ 00c05278 ["CALL", null, ["callee:00bf22f8:8"]]
- 00c051f4 ["INT_ADD", "register:40f0:8", ["const:c051f4:8", "const:4:8"]]
- 00c051f4 ["CALL", null, ["callee:00bf2244:8"]]
+ 00c05290 ["INT_ADD", "register:40f0:8", ["const:c05290:8", "const:4:8"]]
+ 00c05290 ["CALL", null, ["callee:00bf2244:8"]]
~~~


<a id="compare-e3a458cf2d0f1100521e386e8d84294e"></a>

### [`00c0520c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c0520c.md) → [`00c052a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c052a8.md) _ZNSt6__ndk118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEaSEOS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md) [`00c5e470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e470.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md) [`00c5e540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e540.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05250 ["INT_ADD", "register:40f0:8", ["const:c05250:8", "const:4:8"]]
- 00c05250 ["CALL", null, ["callee:00c5e3f0:8"]]
+ 00c052ec ["INT_ADD", "register:40f0:8", ["const:c052ec:8", "const:4:8"]]
+ 00c052ec ["CALL", null, ["callee:00c5e3f0:8"]]
- 00c0527c ["INT_ADD", "register:40f0:8", ["const:c0527c:8", "const:4:8"]]
- 00c0527c ["CALL", null, ["callee:00c5e540:8"]]
+ 00c05318 ["INT_ADD", "register:40f0:8", ["const:c05318:8", "const:4:8"]]
+ 00c05318 ["CALL", null, ["callee:00c5e540:8"]]
~~~


<a id="compare-1cbe611bc2806461362c5783f7873ae7"></a>

### [`00c05298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05298.md) → [`00c05334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05334.md) _ZNSt6__ndk119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEaSEOS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md) [`00c5e470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e470.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md) [`00c5e540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e540.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c052dc ["INT_ADD", "register:40f0:8", ["const:c052dc:8", "const:4:8"]]
- 00c052dc ["CALL", null, ["callee:00c5e3f0:8"]]
+ 00c05378 ["INT_ADD", "register:40f0:8", ["const:c05378:8", "const:4:8"]]
+ 00c05378 ["CALL", null, ["callee:00c5e3f0:8"]]
- 00c05308 ["INT_ADD", "register:40f0:8", ["const:c05308:8", "const:4:8"]]
- 00c05308 ["CALL", null, ["callee:00c5e540:8"]]
+ 00c053a4 ["INT_ADD", "register:40f0:8", ["const:c053a4:8", "const:4:8"]]
+ 00c053a4 ["CALL", null, ["callee:00c5e540:8"]]
~~~


<a id="compare-576b7e3e8a725d930b4c64a2a3e3ae5a"></a>

### [`00c05328`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05328.md) → [`00c053c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c053c4.md) _ZNSt6__ndk119basic_istringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEaSEOS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md) [`00c5e470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e470.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md) [`00c5e540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e540.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0536c ["INT_ADD", "register:40f0:8", ["const:c0536c:8", "const:4:8"]]
- 00c0536c ["CALL", null, ["callee:00c5e3f0:8"]]
+ 00c05408 ["INT_ADD", "register:40f0:8", ["const:c05408:8", "const:4:8"]]
+ 00c05408 ["CALL", null, ["callee:00c5e3f0:8"]]
- 00c05398 ["INT_ADD", "register:40f0:8", ["const:c05398:8", "const:4:8"]]
- 00c05398 ["CALL", null, ["callee:00c5e540:8"]]
+ 00c05434 ["INT_ADD", "register:40f0:8", ["const:c05434:8", "const:4:8"]]
+ 00c05434 ["CALL", null, ["callee:00c5e540:8"]]
~~~


<a id="compare-4f4db743eaecf48c58a63889aab92728"></a>

### [`00c053b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c053b4.md) → [`00c05450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05450.md) _ZNSt6__ndk114basic_ifstreamIcNS_11char_traitsIcEEE4openEPKcj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05dcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05dcc.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5a000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a000.md) [`00c5a060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a060.md) [`00c5a090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a090.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0540c ["INT_ADD", "register:40f0:8", ["const:c0540c:8", "const:4:8"]]
- 00c0540c ["CALL", null, ["callee:00c05e68:8"]]
+ 00c054a8 ["INT_ADD", "register:40f0:8", ["const:c054a8:8", "const:4:8"]]
+ 00c054a8 ["CALL", null, ["callee:00c05e68:8"]]
- 00c0541c ["INT_ADD", "register:40f0:8", ["const:c0541c:8", "const:4:8"]]
- 00c0541c ["CALL", null, ["callee:00c5a160:8"]]
+ 00c054b8 ["INT_ADD", "register:40f0:8", ["const:c054b8:8", "const:4:8"]]
+ 00c054b8 ["CALL", null, ["callee:00c5a160:8"]]
- 00c05438 ["INT_ADD", "register:40f0:8", ["const:c05438:8", "const:4:8"]]
- 00c05438 ["CALL", null, ["callee:00c5a130:8"]]
+ 00c054d4 ["INT_ADD", "register:40f0:8", ["const:c054d4:8", "const:4:8"]]
+ 00c054d4 ["CALL", null, ["callee:00c5a130:8"]]
~~~


<a id="compare-1df34af9b6caa04f78301ebf3dab4b4b"></a>

### [`00c05464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05464.md) → [`00c05500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05500.md) _ZNSt6__ndk114basic_ifstreamIcNS_11char_traitsIcEEE4openERKNS_12basic_stringIcS2_NS_9allocatorIcEEEEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05dcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05dcc.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5a000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a000.md) [`00c5a060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a060.md) [`00c5a090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a090.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c054c8 ["INT_ADD", "register:40f0:8", ["const:c054c8:8", "const:4:8"]]
- 00c054c8 ["CALL", null, ["callee:00c05e68:8"]]
+ 00c05564 ["INT_ADD", "register:40f0:8", ["const:c05564:8", "const:4:8"]]
+ 00c05564 ["CALL", null, ["callee:00c05e68:8"]]
- 00c054d8 ["INT_ADD", "register:40f0:8", ["const:c054d8:8", "const:4:8"]]
- 00c054d8 ["CALL", null, ["callee:00c5a160:8"]]
+ 00c05574 ["INT_ADD", "register:40f0:8", ["const:c05574:8", "const:4:8"]]
+ 00c05574 ["CALL", null, ["callee:00c5a160:8"]]
- 00c054f4 ["INT_ADD", "register:40f0:8", ["const:c054f4:8", "const:4:8"]]
- 00c054f4 ["CALL", null, ["callee:00c5a130:8"]]
+ 00c05590 ["INT_ADD", "register:40f0:8", ["const:c05590:8", "const:4:8"]]
+ 00c05590 ["CALL", null, ["callee:00c5a130:8"]]
~~~


<a id="compare-262ccd85381e71cf56b0382f7f12b217"></a>

### [`00c05520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05520.md) → [`00c055bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c055bc.md) _ZNSt6__ndk114basic_ofstreamIcNS_11char_traitsIcEEE4openEPKcj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05dcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05dcc.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5a000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a000.md) [`00c5a060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a060.md) [`00c5a090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a090.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05578 ["INT_ADD", "register:40f0:8", ["const:c05578:8", "const:4:8"]]
- 00c05578 ["CALL", null, ["callee:00c05e68:8"]]
+ 00c05614 ["INT_ADD", "register:40f0:8", ["const:c05614:8", "const:4:8"]]
+ 00c05614 ["CALL", null, ["callee:00c05e68:8"]]
- 00c05588 ["INT_ADD", "register:40f0:8", ["const:c05588:8", "const:4:8"]]
- 00c05588 ["CALL", null, ["callee:00c5a160:8"]]
+ 00c05624 ["INT_ADD", "register:40f0:8", ["const:c05624:8", "const:4:8"]]
+ 00c05624 ["CALL", null, ["callee:00c5a160:8"]]
- 00c055a4 ["INT_ADD", "register:40f0:8", ["const:c055a4:8", "const:4:8"]]
- 00c055a4 ["CALL", null, ["callee:00c5a130:8"]]
+ 00c05640 ["INT_ADD", "register:40f0:8", ["const:c05640:8", "const:4:8"]]
+ 00c05640 ["CALL", null, ["callee:00c5a130:8"]]
~~~


<a id="compare-18395f8001e9fba5686af9bf17332498"></a>

### [`00c055d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c055d0.md) → [`00c0566c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0566c.md) _ZNSt6__ndk114basic_ofstreamIcNS_11char_traitsIcEEE4openERKNS_12basic_stringIcS2_NS_9allocatorIcEEEEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05dcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05dcc.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5a000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a000.md) [`00c5a060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a060.md) [`00c5a090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a090.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5a130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a130.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05634 ["INT_ADD", "register:40f0:8", ["const:c05634:8", "const:4:8"]]
- 00c05634 ["CALL", null, ["callee:00c05e68:8"]]
+ 00c056d0 ["INT_ADD", "register:40f0:8", ["const:c056d0:8", "const:4:8"]]
+ 00c056d0 ["CALL", null, ["callee:00c05e68:8"]]
- 00c05644 ["INT_ADD", "register:40f0:8", ["const:c05644:8", "const:4:8"]]
- 00c05644 ["CALL", null, ["callee:00c5a160:8"]]
+ 00c056e0 ["INT_ADD", "register:40f0:8", ["const:c056e0:8", "const:4:8"]]
+ 00c056e0 ["CALL", null, ["callee:00c5a160:8"]]
- 00c05660 ["INT_ADD", "register:40f0:8", ["const:c05660:8", "const:4:8"]]
- 00c05660 ["CALL", null, ["callee:00c5a130:8"]]
+ 00c056fc ["INT_ADD", "register:40f0:8", ["const:c056fc:8", "const:4:8"]]
+ 00c056fc ["CALL", null, ["callee:00c5a130:8"]]
~~~


<a id="compare-f5b49163c4354c6923f26be388080465"></a>

### [`00c05a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05a18.md) → [`00c05ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ab4.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE5closeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05a40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c05a40 ["INT_ADD", "register:40f0:8", ["const:c05a40:8", "const:4:8"]]
- 00c05a40 ["CALLIND", null, ["register:0:8"]]
+ 00c05adc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05adc ["INT_ADD", "register:40f0:8", ["const:c05adc:8", "const:4:8"]]
+ 00c05adc ["CALLIND", null, ["register:0:8"]]
- 00c05a4c ["INT_ADD", "register:40f0:8", ["const:c05a4c:8", "const:4:8"]]
- 00c05a4c ["CALL", null, ["callee:00c5a0d0:8"]]
+ 00c05ae8 ["INT_ADD", "register:40f0:8", ["const:c05ae8:8", "const:4:8"]]
+ 00c05ae8 ["CALL", null, ["callee:00c5a0d0:8"]]
- 00c05a74 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c05a74 ["INT_ADD", "register:40f0:8", ["const:c05a74:8", "const:4:8"]]
- 00c05a74 ["CALLIND", null, ["register:0:8"]]
+ 00c05b10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c05b10 ["INT_ADD", "register:40f0:8", ["const:c05b10:8", "const:4:8"]]
+ 00c05b10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7a063d9ad54abd48695789f3f2820e4a"></a>

### [`00c05aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05aa4.md) → [`00c05b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05b40.md) FUN_00c05b40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58f20.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58ff0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05ab8 ["INT_ADD", "register:40f0:8", ["const:c05ab8:8", "const:4:8"]]
- 00c05ab8 ["CALL", null, ["callee:00c58ff0:8"]]
+ 00c05b54 ["INT_ADD", "register:40f0:8", ["const:c05b54:8", "const:4:8"]]
+ 00c05b54 ["CALL", null, ["callee:00c58ff0:8"]]
~~~


<a id="compare-12735656ff9ed71cf825ed9d86c086d0"></a>

### [`00c05ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05ad0.md) → [`00c05b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05b6c.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c05af4 ["INT_ADD", "register:40f0:8", ["const:c05af4:8", "const:4:8"]]
- 00c05af4 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c05b90 ["INT_ADD", "register:40f0:8", ["const:c05b90:8", "const:4:8"]]
+ 00c05b90 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c05b00 ["INT_ADD", "register:40f0:8", ["const:c05b00:8", "const:4:8"]]
- 00c05b00 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00c05b9c ["INT_ADD", "register:40f0:8", ["const:c05b9c:8", "const:4:8"]]
+ 00c05b9c ["CALL", null, ["callee:00c5e3b0:8"]]
- 00c05b0c ["INT_ADD", "register:40f0:8", ["const:c05b0c:8", "const:4:8"]]
- 00c05b0c ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00c05ba8 ["INT_ADD", "register:40f0:8", ["const:c05ba8:8", "const:4:8"]]
+ 00c05ba8 ["CALL", null, ["callee:00c5e3b0:8"]]
~~~


<a id="compare-8b93866e49ef3504f1138f7d3d9d4757"></a>

### [`00c06810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06810.md) → [`00c068ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c068ac.md) FUN_00c068ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fa0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06824 ["INT_ADD", "register:40f0:8", ["const:c06824:8", "const:4:8"]]
- 00c06824 ["CALL", null, ["callee:00c58070:8"]]
+ 00c068c0 ["INT_ADD", "register:40f0:8", ["const:c068c0:8", "const:4:8"]]
+ 00c068c0 ["CALL", null, ["callee:00c58070:8"]]
~~~


<a id="compare-18ca1255797b28debb2de8e2370a31d2"></a>

### [`00c068d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c068d4.md) → [`00c06970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06970.md) FUN_00c06970

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e570.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06914 ["INT_ADD", "register:40f0:8", ["const:c06914:8", "const:4:8"]]
- 00c06914 ["CALL", null, ["callee:00c5e570:8"]]
+ 00c069b0 ["INT_ADD", "register:40f0:8", ["const:c069b0:8", "const:4:8"]]
+ 00c069b0 ["CALL", null, ["callee:00c5e570:8"]]
- 00c06974 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06974 ["INT_ADD", "register:40f0:8", ["const:c06974:8", "const:4:8"]]
- 00c06974 ["CALLIND", null, ["register:0:8"]]
+ 00c06a10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c06a10 ["INT_ADD", "register:40f0:8", ["const:c06a10:8", "const:4:8"]]
+ 00c06a10 ["CALLIND", null, ["register:0:8"]]
- 00c069c0 ["INT_ADD", "register:40f0:8", ["const:c069c0:8", "const:4:8"]]
- 00c069c0 ["CALL", null, ["callee:00c5e570:8"]]
+ 00c06a5c ["INT_ADD", "register:40f0:8", ["const:c06a5c:8", "const:4:8"]]
+ 00c06a5c ["CALL", null, ["callee:00c5e570:8"]]
~~~


<a id="compare-d6043df1cff588daf0480416d89dfa22"></a>

### [`00c069fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c069fc.md) → [`00c06a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06a98.md) FUN_00c06a98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c068bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c068bc.md) [`00c068c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c068c8.md) · 呼出先 2件 [`00c5e4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4a0.md) [`00c5e4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4b0.md)
- 新版 呼出元 2件 [`00c06958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06958.md) [`00c06964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06964.md) · 呼出先 2件 [`00c5e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e570.md) [`00c5e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e580.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06a4c ["INT_ADD", "register:40f0:8", ["const:c06a4c:8", "const:4:8"]]
- 00c06a4c ["CALL", null, ["callee:00c5e580:8"]]
+ 00c06ae8 ["INT_ADD", "register:40f0:8", ["const:c06ae8:8", "const:4:8"]]
+ 00c06ae8 ["CALL", null, ["callee:00c5e580:8"]]
- 00c06a80 ["INT_ADD", "register:40f0:8", ["const:c06a80:8", "const:4:8"]]
- 00c06a80 ["CALL", null, ["callee:00c5e580:8"]]
+ 00c06b1c ["INT_ADD", "register:40f0:8", ["const:c06b1c:8", "const:4:8"]]
+ 00c06b1c ["CALL", null, ["callee:00c5e580:8"]]
- 00c06acc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06acc ["INT_ADD", "register:40f0:8", ["const:c06acc:8", "const:4:8"]]
- 00c06acc ["CALLIND", null, ["register:0:8"]]
+ 00c06b68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c06b68 ["INT_ADD", "register:40f0:8", ["const:c06b68:8", "const:4:8"]]
+ 00c06b68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-067736df691811765342340602ac0183"></a>

### [`00c06ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06ba4.md) → [`00c06c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06c40.md) FUN_00c06c40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fa0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06bb8 ["INT_ADD", "register:40f0:8", ["const:c06bb8:8", "const:4:8"]]
- 00c06bb8 ["CALL", null, ["callee:00c58070:8"]]
+ 00c06c54 ["INT_ADD", "register:40f0:8", ["const:c06c54:8", "const:4:8"]]
+ 00c06c54 ["CALL", null, ["callee:00c58070:8"]]
~~~


<a id="compare-c7923a86405b45d5b7c5d624eba5dde8"></a>

### [`00c06c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06c2c.md) → [`00c06cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06cc8.md) FUN_00c06cc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a1b0.md) [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a280.md) [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06c64 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06c64 ["INT_ADD", "register:40f0:8", ["const:c06c64:8", "const:4:8"]]
- 00c06c64 ["CALLIND", null, ["register:0:8"]]
+ 00c06d00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c06d00 ["INT_ADD", "register:40f0:8", ["const:c06d00:8", "const:4:8"]]
+ 00c06d00 ["CALLIND", null, ["register:0:8"]]
- 00c06c84 ["INT_ADD", "register:40f0:8", ["const:c06c84:8", "const:4:8"]]
- 00c06c84 ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00c06d20 ["INT_ADD", "register:40f0:8", ["const:c06d20:8", "const:4:8"]]
+ 00c06d20 ["CALL", null, ["callee:00c5a2f0:8"]]
- 00c06cac ["INT_ADD", "register:40f0:8", ["const:c06cac:8", "const:4:8"]]
- 00c06cac ["CALL", null, ["callee:00c5a280:8"]]
+ 00c06d48 ["INT_ADD", "register:40f0:8", ["const:c06d48:8", "const:4:8"]]
+ 00c06d48 ["CALL", null, ["callee:00c5a280:8"]]
~~~


<a id="compare-01926d55141e64a8cbcdea864f1c4f3d"></a>

### [`00c06cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06cd0.md) → [`00c06d6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06d6c.md) FUN_00c06d6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06d38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06d38 ["INT_ADD", "register:40f0:8", ["const:c06d38:8", "const:4:8"]]
- 00c06d38 ["CALLIND", null, ["register:0:8"]]
+ 00c06dd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c06dd4 ["INT_ADD", "register:40f0:8", ["const:c06dd4:8", "const:4:8"]]
+ 00c06dd4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dde5e473e1b75cb2d737000223ae45e8"></a>

### [`00c06d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06d74.md) → [`00c06e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06e10.md) FUN_00c06e10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06dc0 ["INT_ADD", "register:40f0:8", ["const:c06dc0:8", "const:4:8"]]
- 00c06dc0 ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00c06e5c ["INT_ADD", "register:40f0:8", ["const:c06e5c:8", "const:4:8"]]
+ 00c06e5c ["CALL", null, ["callee:00c5a2f0:8"]]
- 00c06e0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06e0c ["INT_ADD", "register:40f0:8", ["const:c06e0c:8", "const:4:8"]]
- 00c06e0c ["CALLIND", null, ["register:0:8"]]
+ 00c06ea8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c06ea8 ["INT_ADD", "register:40f0:8", ["const:c06ea8:8", "const:4:8"]]
+ 00c06ea8 ["CALLIND", null, ["register:0:8"]]
- 00c06e48 ["INT_ADD", "register:40f0:8", ["const:c06e48:8", "const:4:8"]]
- 00c06e48 ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00c06ee4 ["INT_ADD", "register:40f0:8", ["const:c06ee4:8", "const:4:8"]]
+ 00c06ee4 ["CALL", null, ["callee:00c5a2f0:8"]]
~~~


<a id="compare-b63e8991e7140cdee07103caf7813f9f"></a>

### [`00c06ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06ea4.md) → [`00c06f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06f40.md) FUN_00c06f40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e490.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06eb8 ["INT_ADD", "register:40f0:8", ["const:c06eb8:8", "const:4:8"]]
- 00c06eb8 ["CALL", null, ["callee:00c5e490:8"]]
+ 00c06f54 ["INT_ADD", "register:40f0:8", ["const:c06f54:8", "const:4:8"]]
+ 00c06f54 ["CALL", null, ["callee:00c5e490:8"]]
~~~


<a id="compare-23eb471b65397b9d4da740aca53956c9"></a>

### [`00c06f68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06f68.md) → [`00c07004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07004.md) FUN_00c07004

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4a0.md) [`00c5e4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e570.md) [`00c5e590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e590.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c06fa8 ["INT_ADD", "register:40f0:8", ["const:c06fa8:8", "const:4:8"]]
- 00c06fa8 ["CALL", null, ["callee:00c5e590:8"]]
+ 00c07044 ["INT_ADD", "register:40f0:8", ["const:c07044:8", "const:4:8"]]
+ 00c07044 ["CALL", null, ["callee:00c5e590:8"]]
- 00c07008 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c07008 ["INT_ADD", "register:40f0:8", ["const:c07008:8", "const:4:8"]]
- 00c07008 ["CALLIND", null, ["register:0:8"]]
+ 00c070a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c070a4 ["INT_ADD", "register:40f0:8", ["const:c070a4:8", "const:4:8"]]
+ 00c070a4 ["CALLIND", null, ["register:0:8"]]
- 00c07054 ["INT_ADD", "register:40f0:8", ["const:c07054:8", "const:4:8"]]
- 00c07054 ["CALL", null, ["callee:00c5e570:8"]]
+ 00c070f0 ["INT_ADD", "register:40f0:8", ["const:c070f0:8", "const:4:8"]]
+ 00c070f0 ["CALL", null, ["callee:00c5e570:8"]]
~~~


<a id="compare-b8f355e65ab8c75c1e5dccf242c4f9cf"></a>

### [`00c07090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07090.md) → [`00c0712c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0712c.md) FUN_00c0712c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c06f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06f50.md) [`00c06f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06f5c.md) · 呼出先 4件 [`00c5e4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4a0.md) [`00c5e4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4b0.md) [`00c5e4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4c0.md) [`00c5e4d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 2件 [`00c06fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06fec.md) [`00c06ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06ff8.md) · 呼出先 4件 [`00c5e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e570.md) [`00c5e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e580.md) [`00c5e590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e590.md) [`00c5e5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c070e0 ["INT_ADD", "register:40f0:8", ["const:c070e0:8", "const:4:8"]]
- 00c070e0 ["CALL", null, ["callee:00c5e5a0:8"]]
+ 00c0717c ["INT_ADD", "register:40f0:8", ["const:c0717c:8", "const:4:8"]]
+ 00c0717c ["CALL", null, ["callee:00c5e5a0:8"]]
- 00c07110 ["INT_ADD", "register:40f0:8", ["const:c07110:8", "const:4:8"]]
- 00c07110 ["CALL", null, ["callee:00c5e580:8"]]
+ 00c071ac ["INT_ADD", "register:40f0:8", ["const:c071ac:8", "const:4:8"]]
+ 00c071ac ["CALL", null, ["callee:00c5e580:8"]]
- 00c0715c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0715c ["INT_ADD", "register:40f0:8", ["const:c0715c:8", "const:4:8"]]
- 00c0715c ["CALLIND", null, ["register:0:8"]]
+ 00c071f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c071f8 ["INT_ADD", "register:40f0:8", ["const:c071f8:8", "const:4:8"]]
+ 00c071f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f4005fde30adf174930a0b97ef14aad2"></a>

### [`00c07230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07230.md) → [`00c072cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c072cc.md) FUN_00c072cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e490.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07244 ["INT_ADD", "register:40f0:8", ["const:c07244:8", "const:4:8"]]
- 00c07244 ["CALL", null, ["callee:00c5e490:8"]]
+ 00c072e0 ["INT_ADD", "register:40f0:8", ["const:c072e0:8", "const:4:8"]]
+ 00c072e0 ["CALL", null, ["callee:00c5e490:8"]]
~~~


<a id="compare-77689481c66dfbda853511a4ad17186e"></a>

### [`00c072b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c072b8.md) → [`00c07354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07354.md) FUN_00c07354

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a1b0.md) [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a280.md) [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c072f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c072f0 ["INT_ADD", "register:40f0:8", ["const:c072f0:8", "const:4:8"]]
- 00c072f0 ["CALLIND", null, ["register:0:8"]]
+ 00c0738c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0738c ["INT_ADD", "register:40f0:8", ["const:c0738c:8", "const:4:8"]]
+ 00c0738c ["CALLIND", null, ["register:0:8"]]
- 00c07310 ["INT_ADD", "register:40f0:8", ["const:c07310:8", "const:4:8"]]
- 00c07310 ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00c073ac ["INT_ADD", "register:40f0:8", ["const:c073ac:8", "const:4:8"]]
+ 00c073ac ["CALL", null, ["callee:00c5a2f0:8"]]
- 00c07338 ["INT_ADD", "register:40f0:8", ["const:c07338:8", "const:4:8"]]
- 00c07338 ["CALL", null, ["callee:00c5a280:8"]]
+ 00c073d4 ["INT_ADD", "register:40f0:8", ["const:c073d4:8", "const:4:8"]]
+ 00c073d4 ["CALL", null, ["callee:00c5a280:8"]]
~~~


<a id="compare-56a8d0c40db6c9c2de5024b7e526b9f8"></a>

### [`00c0735c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c0735c.md) → [`00c073f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c073f8.md) FUN_00c073f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c073c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c073c4 ["INT_ADD", "register:40f0:8", ["const:c073c4:8", "const:4:8"]]
- 00c073c4 ["CALLIND", null, ["register:0:8"]]
+ 00c07460 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07460 ["INT_ADD", "register:40f0:8", ["const:c07460:8", "const:4:8"]]
+ 00c07460 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2606806ff2a90f71af3a07729da76fde"></a>

### [`00c07400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07400.md) → [`00c0749c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0749c.md) FUN_00c0749c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md) [`00c5e4e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md) [`00c5e5b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07440 ["INT_ADD", "register:40f0:8", ["const:c07440:8", "const:4:8"]]
- 00c07440 ["CALL", null, ["callee:00c5e5b0:8"]]
+ 00c074dc ["INT_ADD", "register:40f0:8", ["const:c074dc:8", "const:4:8"]]
+ 00c074dc ["CALL", null, ["callee:00c5e5b0:8"]]
- 00c0748c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0748c ["INT_ADD", "register:40f0:8", ["const:c0748c:8", "const:4:8"]]
- 00c0748c ["CALLIND", null, ["register:0:8"]]
+ 00c07528 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07528 ["INT_ADD", "register:40f0:8", ["const:c07528:8", "const:4:8"]]
+ 00c07528 ["CALLIND", null, ["register:0:8"]]
- 00c074c8 ["INT_ADD", "register:40f0:8", ["const:c074c8:8", "const:4:8"]]
- 00c074c8 ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00c07564 ["INT_ADD", "register:40f0:8", ["const:c07564:8", "const:4:8"]]
+ 00c07564 ["CALL", null, ["callee:00c5a2f0:8"]]
~~~


<a id="compare-3e580add77b620a5b5a7bc06b85e7d32"></a>

### [`00c07570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07570.md) → [`00c0760c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0760c.md) _ZNSt6__ndk17collateIcED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e500.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07584 ["INT_ADD", "register:40f0:8", ["const:c07584:8", "const:4:8"]]
- 00c07584 ["CALL", null, ["callee:00c5e5d0:8"]]
+ 00c07620 ["INT_ADD", "register:40f0:8", ["const:c07620:8", "const:4:8"]]
+ 00c07620 ["CALL", null, ["callee:00c5e5d0:8"]]
~~~


<a id="compare-1d9d04649a807cd836a335df1e1fe69b"></a>

### [`00c07600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07600.md) → [`00c0769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0769c.md) _ZNKSt6__ndk17collateIcE12do_transformEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07668 ["INT_ADD", "register:40f0:8", ["const:c07668:8", "const:4:8"]]
- 00c07668 ["CALL", null, ["callee:00c57f60:8"]]
+ 00c07704 ["INT_ADD", "register:40f0:8", ["const:c07704:8", "const:4:8"]]
+ 00c07704 ["CALL", null, ["callee:00c57f60:8"]]
- 00c07690 ["INT_ADD", "register:40f0:8", ["const:c07690:8", "const:4:8"]]
- 00c07690 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c0772c ["INT_ADD", "register:40f0:8", ["const:c0772c:8", "const:4:8"]]
+ 00c0772c ["CALL", null, ["callee:00c580d0:8"]]
- 00c076b8 ["INT_ADD", "register:40f0:8", ["const:c076b8:8", "const:4:8"]]
- 00c076b8 ["CALL", null, ["callee:0043b7a4:8"]]
+ 00c07754 ["INT_ADD", "register:40f0:8", ["const:c07754:8", "const:4:8"]]
+ 00c07754 ["CALL", null, ["callee:0043b7a4:8"]]
~~~


<a id="compare-c808c389f82856123fd6db04318fb5c7"></a>

### [`00c076fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c076fc.md) → [`00c07798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07798.md) _ZNSt6__ndk17collateIwED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e510.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07710 ["INT_ADD", "register:40f0:8", ["const:c07710:8", "const:4:8"]]
- 00c07710 ["CALL", null, ["callee:00c5e5e0:8"]]
+ 00c077ac ["INT_ADD", "register:40f0:8", ["const:c077ac:8", "const:4:8"]]
+ 00c077ac ["CALL", null, ["callee:00c5e5e0:8"]]
~~~


<a id="compare-858d91164af7b0f8056c6099517d970d"></a>

### [`00c07780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07780.md) → [`00c0781c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c0781c.md) _ZNKSt6__ndk17collateIwE12do_transformEPKwS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`006d76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c077f4 ["INT_ADD", "register:40f0:8", ["const:c077f4:8", "const:4:8"]]
- 00c077f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00c07890 ["INT_ADD", "register:40f0:8", ["const:c07890:8", "const:4:8"]]
+ 00c07890 ["CALL", null, ["callee:00c57f60:8"]]
- 00c07828 ["INT_ADD", "register:40f0:8", ["const:c07828:8", "const:4:8"]]
- 00c07828 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c078c4 ["INT_ADD", "register:40f0:8", ["const:c078c4:8", "const:4:8"]]
+ 00c078c4 ["CALL", null, ["callee:00c580d0:8"]]
- 00c07850 ["INT_ADD", "register:40f0:8", ["const:c07850:8", "const:4:8"]]
- 00c07850 ["CALL", null, ["callee:006d76f8:8"]]
+ 00c078ec ["INT_ADD", "register:40f0:8", ["const:c078ec:8", "const:4:8"]]
+ 00c078ec ["CALL", null, ["callee:006d76f8:8"]]
~~~


<a id="compare-27137f3eaec665ae981ede6fde3f43b2"></a>

### [`00c07b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07b18.md) → [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) FUN_00c07bb4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`00c0788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c0788c.md) [`00c13478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c13478.md) [`00c135d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c135d0.md) [`00c1368c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c1368c.md) [`00c137dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c137dc.md) · 呼出先 3件 [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md) [`00c5df80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df80.md)
- 新版 呼出元 7件 [`00c07928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07928.md) [`00c13514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13514.md) [`00c1366c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c1366c.md) [`00c13728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13728.md) [`00c13878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13878.md) · 呼出先 3件 [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md) [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c07b78 ["INT_ADD", "register:40f0:8", ["const:c07b78:8", "const:4:8"]]
- 00c07b78 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c07c14 ["INT_ADD", "register:40f0:8", ["const:c07c14:8", "const:4:8"]]
+ 00c07c14 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c07b84 ["INT_ADD", "register:40f0:8", ["const:c07b84:8", "const:4:8"]]
- 00c07b84 ["CALL", null, ["callee:00c5e050:8"]]
+ 00c07c20 ["INT_ADD", "register:40f0:8", ["const:c07c20:8", "const:4:8"]]
+ 00c07c20 ["CALL", null, ["callee:00c5e050:8"]]
- 00c07c28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c07c28 ["INT_ADD", "register:40f0:8", ["const:c07c28:8", "const:4:8"]]
- 00c07c28 ["CALLIND", null, ["register:0:8"]]
+ 00c07cc4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07cc4 ["INT_ADD", "register:40f0:8", ["const:c07cc4:8", "const:4:8"]]
+ 00c07cc4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cc16193301e0122ace6d68aefad5215b"></a>

### [`00c07f8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07f8c.md) → [`00c08028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08028.md) FUN_00c08028

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c07f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07f84.md) · 呼出先 6件 [`00c3616c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c3616c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e520.md) [`00c5e530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e530.md)
- 新版 呼出元 1件 [`00c08020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08020.md) · 呼出先 6件 [`00c36208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36208.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c08014 ["INT_ADD", "register:40f0:8", ["const:c08014:8", "const:4:8"]]
- 00c08014 ["CALL", null, ["callee:00c5e5f0:8"]]
+ 00c080b0 ["INT_ADD", "register:40f0:8", ["const:c080b0:8", "const:4:8"]]
+ 00c080b0 ["CALL", null, ["callee:00c5e5f0:8"]]
- 00c08030 ["INT_ADD", "register:40f0:8", ["const:c08030:8", "const:4:8"]]
- 00c08030 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c080cc ["INT_ADD", "register:40f0:8", ["const:c080cc:8", "const:4:8"]]
+ 00c080cc ["CALL", null, ["callee:00c5bf40:8"]]
- 00c080b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c080b4 ["INT_ADD", "register:40f0:8", ["const:c080b4:8", "const:4:8"]]
- 00c080b4 ["CALLIND", null, ["register:0:8"]]
+ 00c08150 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c08150 ["INT_ADD", "register:40f0:8", ["const:c08150:8", "const:4:8"]]
+ 00c08150 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8c34b1c109c8acf6818e6276ae5536d4"></a>

### [`00c083c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c083c8.md) → [`00c08464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08464.md) FUN_00c08464

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c083c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c083c0.md) · 呼出先 6件 [`00c36294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36294.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e520.md) [`00c5e530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e530.md)
- 新版 呼出元 1件 [`00c0845c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c0845c.md) · 呼出先 6件 [`00c36330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36330.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c08450 ["INT_ADD", "register:40f0:8", ["const:c08450:8", "const:4:8"]]
- 00c08450 ["CALL", null, ["callee:00c5e5f0:8"]]
+ 00c084ec ["INT_ADD", "register:40f0:8", ["const:c084ec:8", "const:4:8"]]
+ 00c084ec ["CALL", null, ["callee:00c5e5f0:8"]]
- 00c0846c ["INT_ADD", "register:40f0:8", ["const:c0846c:8", "const:4:8"]]
- 00c0846c ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c08508 ["INT_ADD", "register:40f0:8", ["const:c08508:8", "const:4:8"]]
+ 00c08508 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c084f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c084f0 ["INT_ADD", "register:40f0:8", ["const:c084f0:8", "const:4:8"]]
- 00c084f0 ["CALLIND", null, ["register:0:8"]]
+ 00c0858c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0858c ["INT_ADD", "register:40f0:8", ["const:c0858c:8", "const:4:8"]]
+ 00c0858c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-59ff24f0c310abb3bf3fa1e615099682"></a>

### [`00c08804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c08804.md) → [`00c088a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c088a0.md) FUN_00c088a0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c087fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c087fc.md) · 呼出先 6件 [`00c363bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c363bc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e520.md) [`00c5e530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e530.md)
- 新版 呼出元 1件 [`00c08898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08898.md) · 呼出先 6件 [`00c36458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36458.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0888c ["INT_ADD", "register:40f0:8", ["const:c0888c:8", "const:4:8"]]
- 00c0888c ["CALL", null, ["callee:00c5e5f0:8"]]
+ 00c08928 ["INT_ADD", "register:40f0:8", ["const:c08928:8", "const:4:8"]]
+ 00c08928 ["CALL", null, ["callee:00c5e5f0:8"]]
- 00c088a8 ["INT_ADD", "register:40f0:8", ["const:c088a8:8", "const:4:8"]]
- 00c088a8 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c08944 ["INT_ADD", "register:40f0:8", ["const:c08944:8", "const:4:8"]]
+ 00c08944 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0892c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0892c ["INT_ADD", "register:40f0:8", ["const:c0892c:8", "const:4:8"]]
- 00c0892c ["CALLIND", null, ["register:0:8"]]
+ 00c089c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c089c8 ["INT_ADD", "register:40f0:8", ["const:c089c8:8", "const:4:8"]]
+ 00c089c8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b6738ed4f9d6a3187487f8fdacddb5f2"></a>

### [`00c08c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c08c40.md) → [`00c08cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08cdc.md) FUN_00c08cdc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c08c38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c08c38.md) · 呼出先 6件 [`00c36514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36514.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e520.md) [`00c5e530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e530.md)
- 新版 呼出元 1件 [`00c08cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08cd4.md) · 呼出先 6件 [`00c365b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c365b0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c08cc8 ["INT_ADD", "register:40f0:8", ["const:c08cc8:8", "const:4:8"]]
- 00c08cc8 ["CALL", null, ["callee:00c5e5f0:8"]]
+ 00c08d64 ["INT_ADD", "register:40f0:8", ["const:c08d64:8", "const:4:8"]]
+ 00c08d64 ["CALL", null, ["callee:00c5e5f0:8"]]
- 00c08ce4 ["INT_ADD", "register:40f0:8", ["const:c08ce4:8", "const:4:8"]]
- 00c08ce4 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c08d80 ["INT_ADD", "register:40f0:8", ["const:c08d80:8", "const:4:8"]]
+ 00c08d80 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c08d68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c08d68 ["INT_ADD", "register:40f0:8", ["const:c08d68:8", "const:4:8"]]
- 00c08d68 ["CALLIND", null, ["register:0:8"]]
+ 00c08e04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c08e04 ["INT_ADD", "register:40f0:8", ["const:c08e04:8", "const:4:8"]]
+ 00c08e04 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5ad883370758256a396b510705a3652b"></a>

### [`00c0907c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c0907c.md) → [`00c09118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09118.md) FUN_00c09118

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c09074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c09074.md) · 呼出先 6件 [`00c36668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36668.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e520.md) [`00c5e530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e530.md)
- 新版 呼出元 1件 [`00c09110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09110.md) · 呼出先 6件 [`00c36704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36704.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c09104 ["INT_ADD", "register:40f0:8", ["const:c09104:8", "const:4:8"]]
- 00c09104 ["CALL", null, ["callee:00c5e5f0:8"]]
+ 00c091a0 ["INT_ADD", "register:40f0:8", ["const:c091a0:8", "const:4:8"]]
+ 00c091a0 ["CALL", null, ["callee:00c5e5f0:8"]]
- 00c09120 ["INT_ADD", "register:40f0:8", ["const:c09120:8", "const:4:8"]]
- 00c09120 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c091bc ["INT_ADD", "register:40f0:8", ["const:c091bc:8", "const:4:8"]]
+ 00c091bc ["CALL", null, ["callee:00c5bf40:8"]]
- 00c091a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c091a4 ["INT_ADD", "register:40f0:8", ["const:c091a4:8", "const:4:8"]]
- 00c091a4 ["CALLIND", null, ["register:0:8"]]
+ 00c09240 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c09240 ["INT_ADD", "register:40f0:8", ["const:c09240:8", "const:4:8"]]
+ 00c09240 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-20393a1e11686fcc9886ac2249b666cc"></a>

### [`00c094b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c094b8.md) → [`00c09554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09554.md) FUN_00c09554

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c094b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c094b0.md) · 呼出先 6件 [`00c367b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c367b0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e520.md) [`00c5e530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e530.md)
- 新版 呼出元 1件 [`00c0954c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c0954c.md) · 呼出先 6件 [`00c3684c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c3684c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) [`00c5e600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c09540 ["INT_ADD", "register:40f0:8", ["const:c09540:8", "const:4:8"]]
- 00c09540 ["CALL", null, ["callee:00c5e5f0:8"]]
+ 00c095dc ["INT_ADD", "register:40f0:8", ["const:c095dc:8", "const:4:8"]]
+ 00c095dc ["CALL", null, ["callee:00c5e5f0:8"]]
- 00c0955c ["INT_ADD", "register:40f0:8", ["const:c0955c:8", "const:4:8"]]
- 00c0955c ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c095f8 ["INT_ADD", "register:40f0:8", ["const:c095f8:8", "const:4:8"]]
+ 00c095f8 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c095e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c095e0 ["INT_ADD", "register:40f0:8", ["const:c095e0:8", "const:4:8"]]
- 00c095e0 ["CALLIND", null, ["register:0:8"]]
+ 00c0967c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0967c ["INT_ADD", "register:40f0:8", ["const:c0967c:8", "const:4:8"]]
+ 00c0967c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-de34649b259b4619427a64e9ade5a345"></a>

### [`00c098f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c098f4.md) → [`00c09990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09990.md) FUN_00c09990

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c098ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c098ec.md) · 呼出先 6件 [`00c368f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c368f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e550.md)
- 新版 呼出元 1件 [`00c09988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09988.md) · 呼出先 6件 [`00c36994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e620.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c09940 ["INT_ADD", "register:40f0:8", ["const:c09940:8", "const:4:8"]]
- 00c09940 ["CALL", null, ["callee:00c5e620:8"]]
+ 00c099dc ["INT_ADD", "register:40f0:8", ["const:c099dc:8", "const:4:8"]]
+ 00c099dc ["CALL", null, ["callee:00c5e620:8"]]
- 00c0995c ["INT_ADD", "register:40f0:8", ["const:c0995c:8", "const:4:8"]]
- 00c0995c ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c099f8 ["INT_ADD", "register:40f0:8", ["const:c099f8:8", "const:4:8"]]
+ 00c099f8 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c099ec ["COPY", "register:0:8", ["register:4040:8"]]
- 00c099ec ["INT_ADD", "register:40f0:8", ["const:c099ec:8", "const:4:8"]]
- 00c099ec ["CALLIND", null, ["register:0:8"]]
+ 00c09a88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c09a88 ["INT_ADD", "register:40f0:8", ["const:c09a88:8", "const:4:8"]]
+ 00c09a88 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-17239976d904ae53ee01a66dfcd2d23d"></a>

### [`00c09d0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c09d0c.md) → [`00c09da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09da8.md) FUN_00c09da8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c09d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c09d04.md) · 呼出先 6件 [`00c36a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36a10.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e550.md)
- 新版 呼出元 1件 [`00c09da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09da0.md) · 呼出先 6件 [`00c36aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36aac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e620.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c09d58 ["INT_ADD", "register:40f0:8", ["const:c09d58:8", "const:4:8"]]
- 00c09d58 ["CALL", null, ["callee:00c5e620:8"]]
+ 00c09df4 ["INT_ADD", "register:40f0:8", ["const:c09df4:8", "const:4:8"]]
+ 00c09df4 ["CALL", null, ["callee:00c5e620:8"]]
- 00c09d74 ["INT_ADD", "register:40f0:8", ["const:c09d74:8", "const:4:8"]]
- 00c09d74 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c09e10 ["INT_ADD", "register:40f0:8", ["const:c09e10:8", "const:4:8"]]
+ 00c09e10 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c09e04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c09e04 ["INT_ADD", "register:40f0:8", ["const:c09e04:8", "const:4:8"]]
- 00c09e04 ["CALLIND", null, ["register:0:8"]]
+ 00c09ea0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c09ea0 ["INT_ADD", "register:40f0:8", ["const:c09ea0:8", "const:4:8"]]
+ 00c09ea0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-27d804a9a50f4e30008afb067b6b46e9"></a>

### [`00c0a124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0a124.md) → [`00c0a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a1c0.md) FUN_00c0a1c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0a11c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0a11c.md) · 呼出先 6件 [`00c36b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36b28.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e550.md)
- 新版 呼出元 1件 [`00c0a1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a1b8.md) · 呼出先 6件 [`00c36bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36bc4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e620.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0a170 ["INT_ADD", "register:40f0:8", ["const:c0a170:8", "const:4:8"]]
- 00c0a170 ["CALL", null, ["callee:00c5e620:8"]]
+ 00c0a20c ["INT_ADD", "register:40f0:8", ["const:c0a20c:8", "const:4:8"]]
+ 00c0a20c ["CALL", null, ["callee:00c5e620:8"]]
- 00c0a18c ["INT_ADD", "register:40f0:8", ["const:c0a18c:8", "const:4:8"]]
- 00c0a18c ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0a228 ["INT_ADD", "register:40f0:8", ["const:c0a228:8", "const:4:8"]]
+ 00c0a228 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0a21c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0a21c ["INT_ADD", "register:40f0:8", ["const:c0a21c:8", "const:4:8"]]
- 00c0a21c ["CALLIND", null, ["register:0:8"]]
+ 00c0a2b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0a2b8 ["INT_ADD", "register:40f0:8", ["const:c0a2b8:8", "const:4:8"]]
+ 00c0a2b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7f6708a6d0138c32d77f340c4cb72cb7"></a>

### [`00c0ac28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0ac28.md) → [`00c0acc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0acc4.md) FUN_00c0acc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00c0a534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0a534.md) [`00c0d9a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d9a8.md) · 呼出先 2件 [`00c5e570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e570.md) [`00c5e580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e580.md)
- 新版 呼出元 2件 [`00c0a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a5d0.md) [`00c0da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0da44.md) · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5e650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0ac8c ["INT_ADD", "register:40f0:8", ["const:c0ac8c:8", "const:4:8"]]
- 00c0ac8c ["CALL", null, ["callee:00c5e640:8"]]
+ 00c0ad28 ["INT_ADD", "register:40f0:8", ["const:c0ad28:8", "const:4:8"]]
+ 00c0ad28 ["CALL", null, ["callee:00c5e640:8"]]
- 00c0aca8 ["INT_ADD", "register:40f0:8", ["const:c0aca8:8", "const:4:8"]]
- 00c0aca8 ["CALL", null, ["callee:00c5e650:8"]]
+ 00c0ad44 ["INT_ADD", "register:40f0:8", ["const:c0ad44:8", "const:4:8"]]
+ 00c0ad44 ["CALL", null, ["callee:00c5e650:8"]]
- 00c0acb8 ["INT_ADD", "register:40f0:8", ["const:c0acb8:8", "const:4:8"]]
- 00c0acb8 ["CALL", null, ["callee:00c5e640:8"]]
+ 00c0ad54 ["INT_ADD", "register:40f0:8", ["const:c0ad54:8", "const:4:8"]]
+ 00c0ad54 ["CALL", null, ["callee:00c5e640:8"]]
~~~


<a id="compare-432f8baee29b06549e41328819d01f67"></a>

### [`00c0aff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0aff0.md) → [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) FUN_00c0b08c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`00c0ad64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0ad64.md) [`00c151c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c151c0.md) [`00c15318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c15318.md) [`00c153d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c153d4.md) [`00c15524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c15524.md) · 呼出先 3件 [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md) [`00c5df80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df80.md)
- 新版 呼出元 7件 [`00c0ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ae00.md) [`00c1525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c1525c.md) [`00c153b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c153b4.md) [`00c15470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15470.md) [`00c155c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c155c0.md) · 呼出先 3件 [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md) [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0b050 ["INT_ADD", "register:40f0:8", ["const:c0b050:8", "const:4:8"]]
- 00c0b050 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c0b0ec ["INT_ADD", "register:40f0:8", ["const:c0b0ec:8", "const:4:8"]]
+ 00c0b0ec ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c0b05c ["INT_ADD", "register:40f0:8", ["const:c0b05c:8", "const:4:8"]]
- 00c0b05c ["CALL", null, ["callee:00c5e050:8"]]
+ 00c0b0f8 ["INT_ADD", "register:40f0:8", ["const:c0b0f8:8", "const:4:8"]]
+ 00c0b0f8 ["CALL", null, ["callee:00c5e050:8"]]
- 00c0b0f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0b0f8 ["INT_ADD", "register:40f0:8", ["const:c0b0f8:8", "const:4:8"]]
- 00c0b0f8 ["CALLIND", null, ["register:0:8"]]
+ 00c0b194 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0b194 ["INT_ADD", "register:40f0:8", ["const:c0b194:8", "const:4:8"]]
+ 00c0b194 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4ffc990176f56cd8bd79eebb5b4dea32"></a>

### [`00c0b46c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0b46c.md) → [`00c0b508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b508.md) FUN_00c0b508

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0b464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0b464.md) · 呼出先 6件 [`00c3616c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c3616c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e590.md)
- 新版 呼出元 1件 [`00c0b500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b500.md) · 呼出先 6件 [`00c36208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36208.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0b4f4 ["INT_ADD", "register:40f0:8", ["const:c0b4f4:8", "const:4:8"]]
- 00c0b4f4 ["CALL", null, ["callee:00c5e660:8"]]
+ 00c0b590 ["INT_ADD", "register:40f0:8", ["const:c0b590:8", "const:4:8"]]
+ 00c0b590 ["CALL", null, ["callee:00c5e660:8"]]
- 00c0b510 ["INT_ADD", "register:40f0:8", ["const:c0b510:8", "const:4:8"]]
- 00c0b510 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0b5ac ["INT_ADD", "register:40f0:8", ["const:c0b5ac:8", "const:4:8"]]
+ 00c0b5ac ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0b580 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0b580 ["INT_ADD", "register:40f0:8", ["const:c0b580:8", "const:4:8"]]
- 00c0b580 ["CALLIND", null, ["register:0:8"]]
+ 00c0b61c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0b61c ["INT_ADD", "register:40f0:8", ["const:c0b61c:8", "const:4:8"]]
+ 00c0b61c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ecde88f093ca8819be17ef736892fc67"></a>

### [`00c0b89c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0b89c.md) → [`00c0b938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b938.md) FUN_00c0b938

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0b894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0b894.md) · 呼出先 6件 [`00c36294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36294.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e590.md)
- 新版 呼出元 1件 [`00c0b930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b930.md) · 呼出先 6件 [`00c36330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36330.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0b924 ["INT_ADD", "register:40f0:8", ["const:c0b924:8", "const:4:8"]]
- 00c0b924 ["CALL", null, ["callee:00c5e660:8"]]
+ 00c0b9c0 ["INT_ADD", "register:40f0:8", ["const:c0b9c0:8", "const:4:8"]]
+ 00c0b9c0 ["CALL", null, ["callee:00c5e660:8"]]
- 00c0b940 ["INT_ADD", "register:40f0:8", ["const:c0b940:8", "const:4:8"]]
- 00c0b940 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0b9dc ["INT_ADD", "register:40f0:8", ["const:c0b9dc:8", "const:4:8"]]
+ 00c0b9dc ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0b9b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0b9b0 ["INT_ADD", "register:40f0:8", ["const:c0b9b0:8", "const:4:8"]]
- 00c0b9b0 ["CALLIND", null, ["register:0:8"]]
+ 00c0ba4c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0ba4c ["INT_ADD", "register:40f0:8", ["const:c0ba4c:8", "const:4:8"]]
+ 00c0ba4c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-03f9d8d3c84abb3d41d38fb44151be7d"></a>

### [`00c0bccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0bccc.md) → [`00c0bd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0bd68.md) FUN_00c0bd68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0bcc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0bcc4.md) · 呼出先 6件 [`00c363bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c363bc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e590.md)
- 新版 呼出元 1件 [`00c0bd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0bd60.md) · 呼出先 6件 [`00c36458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36458.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0bd54 ["INT_ADD", "register:40f0:8", ["const:c0bd54:8", "const:4:8"]]
- 00c0bd54 ["CALL", null, ["callee:00c5e660:8"]]
+ 00c0bdf0 ["INT_ADD", "register:40f0:8", ["const:c0bdf0:8", "const:4:8"]]
+ 00c0bdf0 ["CALL", null, ["callee:00c5e660:8"]]
- 00c0bd70 ["INT_ADD", "register:40f0:8", ["const:c0bd70:8", "const:4:8"]]
- 00c0bd70 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0be0c ["INT_ADD", "register:40f0:8", ["const:c0be0c:8", "const:4:8"]]
+ 00c0be0c ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0bde0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0bde0 ["INT_ADD", "register:40f0:8", ["const:c0bde0:8", "const:4:8"]]
- 00c0bde0 ["CALLIND", null, ["register:0:8"]]
+ 00c0be7c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0be7c ["INT_ADD", "register:40f0:8", ["const:c0be7c:8", "const:4:8"]]
+ 00c0be7c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eacc092f1f5efaaeed15f56c29cb3533"></a>

### [`00c0c0fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c0fc.md) → [`00c0c198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c198.md) FUN_00c0c198

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0c0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c0f4.md) · 呼出先 6件 [`00c36514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36514.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e590.md)
- 新版 呼出元 1件 [`00c0c190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c190.md) · 呼出先 6件 [`00c365b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c365b0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0c184 ["INT_ADD", "register:40f0:8", ["const:c0c184:8", "const:4:8"]]
- 00c0c184 ["CALL", null, ["callee:00c5e660:8"]]
+ 00c0c220 ["INT_ADD", "register:40f0:8", ["const:c0c220:8", "const:4:8"]]
+ 00c0c220 ["CALL", null, ["callee:00c5e660:8"]]
- 00c0c1a0 ["INT_ADD", "register:40f0:8", ["const:c0c1a0:8", "const:4:8"]]
- 00c0c1a0 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0c23c ["INT_ADD", "register:40f0:8", ["const:c0c23c:8", "const:4:8"]]
+ 00c0c23c ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0c210 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0c210 ["INT_ADD", "register:40f0:8", ["const:c0c210:8", "const:4:8"]]
- 00c0c210 ["CALLIND", null, ["register:0:8"]]
+ 00c0c2ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0c2ac ["INT_ADD", "register:40f0:8", ["const:c0c2ac:8", "const:4:8"]]
+ 00c0c2ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-16aa0e6fde2e149f8e9c1c64e0d62ba1"></a>

### [`00c0c52c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c52c.md) → [`00c0c5c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c5c8.md) FUN_00c0c5c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0c524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c524.md) · 呼出先 6件 [`00c36668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36668.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e590.md)
- 新版 呼出元 1件 [`00c0c5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c5c0.md) · 呼出先 6件 [`00c36704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36704.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0c5b4 ["INT_ADD", "register:40f0:8", ["const:c0c5b4:8", "const:4:8"]]
- 00c0c5b4 ["CALL", null, ["callee:00c5e660:8"]]
+ 00c0c650 ["INT_ADD", "register:40f0:8", ["const:c0c650:8", "const:4:8"]]
+ 00c0c650 ["CALL", null, ["callee:00c5e660:8"]]
- 00c0c5d0 ["INT_ADD", "register:40f0:8", ["const:c0c5d0:8", "const:4:8"]]
- 00c0c5d0 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0c66c ["INT_ADD", "register:40f0:8", ["const:c0c66c:8", "const:4:8"]]
+ 00c0c66c ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0c640 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0c640 ["INT_ADD", "register:40f0:8", ["const:c0c640:8", "const:4:8"]]
- 00c0c640 ["CALLIND", null, ["register:0:8"]]
+ 00c0c6dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0c6dc ["INT_ADD", "register:40f0:8", ["const:c0c6dc:8", "const:4:8"]]
+ 00c0c6dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-849868062306d582d7aa3fb20aaa82de"></a>

### [`00c0c95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c95c.md) → [`00c0c9f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c9f8.md) FUN_00c0c9f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0c954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c954.md) · 呼出先 6件 [`00c367b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c367b0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e590.md)
- 新版 呼出元 1件 [`00c0c9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c9f0.md) · 呼出先 6件 [`00c3684c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c3684c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0c9e4 ["INT_ADD", "register:40f0:8", ["const:c0c9e4:8", "const:4:8"]]
- 00c0c9e4 ["CALL", null, ["callee:00c5e660:8"]]
+ 00c0ca80 ["INT_ADD", "register:40f0:8", ["const:c0ca80:8", "const:4:8"]]
+ 00c0ca80 ["CALL", null, ["callee:00c5e660:8"]]
- 00c0ca00 ["INT_ADD", "register:40f0:8", ["const:c0ca00:8", "const:4:8"]]
- 00c0ca00 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0ca9c ["INT_ADD", "register:40f0:8", ["const:c0ca9c:8", "const:4:8"]]
+ 00c0ca9c ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0ca70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0ca70 ["INT_ADD", "register:40f0:8", ["const:c0ca70:8", "const:4:8"]]
- 00c0ca70 ["CALLIND", null, ["register:0:8"]]
+ 00c0cb0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0cb0c ["INT_ADD", "register:40f0:8", ["const:c0cb0c:8", "const:4:8"]]
+ 00c0cb0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dc8a59e6aba1cdaafe683d93fb1670b7"></a>

### [`00c0cd8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0cd8c.md) → [`00c0ce28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0ce28.md) FUN_00c0ce28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0cd84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0cd84.md) · 呼出先 6件 [`00c368f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c368f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5b0.md)
- 新版 呼出元 1件 [`00c0ce20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0ce20.md) · 呼出先 6件 [`00c36994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0cdd8 ["INT_ADD", "register:40f0:8", ["const:c0cdd8:8", "const:4:8"]]
- 00c0cdd8 ["CALL", null, ["callee:00c5e680:8"]]
+ 00c0ce74 ["INT_ADD", "register:40f0:8", ["const:c0ce74:8", "const:4:8"]]
+ 00c0ce74 ["CALL", null, ["callee:00c5e680:8"]]
- 00c0cdf4 ["INT_ADD", "register:40f0:8", ["const:c0cdf4:8", "const:4:8"]]
- 00c0cdf4 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0ce90 ["INT_ADD", "register:40f0:8", ["const:c0ce90:8", "const:4:8"]]
+ 00c0ce90 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0ce74 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0ce74 ["INT_ADD", "register:40f0:8", ["const:c0ce74:8", "const:4:8"]]
- 00c0ce74 ["CALLIND", null, ["register:0:8"]]
+ 00c0cf10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0cf10 ["INT_ADD", "register:40f0:8", ["const:c0cf10:8", "const:4:8"]]
+ 00c0cf10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-edce2b76f98d42a08bc68d70ba27901e"></a>

### [`00c0d198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d198.md) → [`00c0d234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d234.md) FUN_00c0d234

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0d190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d190.md) · 呼出先 6件 [`00c36a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36a10.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5b0.md)
- 新版 呼出元 1件 [`00c0d22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d22c.md) · 呼出先 6件 [`00c36aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36aac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0d1e4 ["INT_ADD", "register:40f0:8", ["const:c0d1e4:8", "const:4:8"]]
- 00c0d1e4 ["CALL", null, ["callee:00c5e680:8"]]
+ 00c0d280 ["INT_ADD", "register:40f0:8", ["const:c0d280:8", "const:4:8"]]
+ 00c0d280 ["CALL", null, ["callee:00c5e680:8"]]
- 00c0d200 ["INT_ADD", "register:40f0:8", ["const:c0d200:8", "const:4:8"]]
- 00c0d200 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0d29c ["INT_ADD", "register:40f0:8", ["const:c0d29c:8", "const:4:8"]]
+ 00c0d29c ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0d280 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0d280 ["INT_ADD", "register:40f0:8", ["const:c0d280:8", "const:4:8"]]
- 00c0d280 ["CALLIND", null, ["register:0:8"]]
+ 00c0d31c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0d31c ["INT_ADD", "register:40f0:8", ["const:c0d31c:8", "const:4:8"]]
+ 00c0d31c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c4932a0cb313c2622ea99d32a23770c2"></a>

### [`00c0d5a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d5a4.md) → [`00c0d640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d640.md) FUN_00c0d640

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0d59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d59c.md) · 呼出先 6件 [`00c36b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36b28.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) [`00c5e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e540.md) [`00c5e5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5b0.md)
- 新版 呼出元 1件 [`00c0d638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d638.md) · 呼出先 6件 [`00c36bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36bc4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) [`00c5e610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e610.md) [`00c5e680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0d5f0 ["INT_ADD", "register:40f0:8", ["const:c0d5f0:8", "const:4:8"]]
- 00c0d5f0 ["CALL", null, ["callee:00c5e680:8"]]
+ 00c0d68c ["INT_ADD", "register:40f0:8", ["const:c0d68c:8", "const:4:8"]]
+ 00c0d68c ["CALL", null, ["callee:00c5e680:8"]]
- 00c0d60c ["INT_ADD", "register:40f0:8", ["const:c0d60c:8", "const:4:8"]]
- 00c0d60c ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0d6a8 ["INT_ADD", "register:40f0:8", ["const:c0d6a8:8", "const:4:8"]]
+ 00c0d6a8 ["CALL", null, ["callee:00c5bf40:8"]]
- 00c0d68c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0d68c ["INT_ADD", "register:40f0:8", ["const:c0d68c:8", "const:4:8"]]
- 00c0d68c ["CALLIND", null, ["register:0:8"]]
+ 00c0d728 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0d728 ["INT_ADD", "register:40f0:8", ["const:c0d728:8", "const:4:8"]]
+ 00c0d728 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-963aef5e3d47fbfb6d3e505b7a7aac38"></a>

### [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) → [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) FUN_00c10240

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 14件 [`00c0ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0ed80.md) [`00c0efcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0efcc.md) [`00c0f218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f218.md) [`00c0f448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f448.md) [`00c0f678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f678.md) · 呼出先 2件 [`00c5b150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b150.md) [`00c5e570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e570.md)
- 新版 呼出元 14件 [`00c0ee1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0ee1c.md) [`00c0f068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f068.md) [`00c0f2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f2b4.md) [`00c0f4e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f4e4.md) [`00c0f714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f714.md) · 呼出先 2件 [`00c5b220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b220.md) [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1020c ["INT_ADD", "register:40f0:8", ["const:c1020c:8", "const:4:8"]]
- 00c1020c ["CALL", null, ["callee:00c5e640:8"]]
+ 00c102a8 ["INT_ADD", "register:40f0:8", ["const:c102a8:8", "const:4:8"]]
+ 00c102a8 ["CALL", null, ["callee:00c5e640:8"]]
- 00c1022c ["INT_ADD", "register:40f0:8", ["const:c1022c:8", "const:4:8"]]
- 00c1022c ["CALL", null, ["callee:00c5b220:8"]]
+ 00c102c8 ["INT_ADD", "register:40f0:8", ["const:c102c8:8", "const:4:8"]]
+ 00c102c8 ["CALL", null, ["callee:00c5b220:8"]]
- 00c1023c ["INT_ADD", "register:40f0:8", ["const:c1023c:8", "const:4:8"]]
- 00c1023c ["CALL", null, ["callee:00c5e640:8"]]
+ 00c102d8 ["INT_ADD", "register:40f0:8", ["const:c102d8:8", "const:4:8"]]
+ 00c102d8 ["CALL", null, ["callee:00c5e640:8"]]
~~~


<a id="compare-f4f13b9b46c99ef314f7a89116200e4c"></a>

### [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) → [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) FUN_00c11980

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 9件 [`00c104b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c104b4.md) [`00c10700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c10700.md) [`00c1094c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c1094c.md) [`00c10b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c10b7c.md) [`00c10dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c10dac.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 9件 [`00c10550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10550.md) [`00c1079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c1079c.md) [`00c109e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c109e8.md) [`00c10c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10c18.md) [`00c10e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10e48.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c11950 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c11950 ["INT_ADD", "register:40f0:8", ["const:c11950:8", "const:4:8"]]
- 00c11950 ["CALLIND", null, ["register:0:8"]]
+ 00c119ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c119ec ["INT_ADD", "register:40f0:8", ["const:c119ec:8", "const:4:8"]]
+ 00c119ec ["CALLIND", null, ["register:0:8"]]
- 00c119b4 ["INT_ADD", "register:40f0:8", ["const:c119b4:8", "const:4:8"]]
- 00c119b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00c11a50 ["INT_ADD", "register:40f0:8", ["const:c11a50:8", "const:4:8"]]
+ 00c11a50 ["CALL", null, ["callee:00c57f60:8"]]
- 00c11a3c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c11a3c ["INT_ADD", "register:40f0:8", ["const:c11a3c:8", "const:4:8"]]
- 00c11a3c ["CALLIND", null, ["register:0:8"]]
+ 00c11ad8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c11ad8 ["INT_ADD", "register:40f0:8", ["const:c11ad8:8", "const:4:8"]]
+ 00c11ad8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f15498311177000c27b25b92bc5a125d"></a>

### [`00c133a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c133a8.md) → [`00c13444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13444.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11do_get_timeES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a770.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a840.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c133d8 ["INT_ADD", "register:40f0:8", ["const:c133d8:8", "const:4:8"]]
- 00c133d8 ["CALL", null, ["callee:00c5a840:8"]]
+ 00c13474 ["INT_ADD", "register:40f0:8", ["const:c13474:8", "const:4:8"]]
+ 00c13474 ["CALL", null, ["callee:00c5a840:8"]]
~~~


<a id="compare-c38179cf1d6e09e9ae9286fd2241667f"></a>

### [`00c133ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c133ec.md) → [`00c13488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13488.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11do_get_dateES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a770.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a840.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c13424 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c13424 ["INT_ADD", "register:40f0:8", ["const:c13424:8", "const:4:8"]]
- 00c13424 ["CALLIND", null, ["register:0:8"]]
+ 00c134c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c134c0 ["INT_ADD", "register:40f0:8", ["const:c134c0:8", "const:4:8"]]
+ 00c134c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e649ad3fa38ac9cff62ef9916b1a3367"></a>

### [`00c135d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c135d0.md) → [`00c1366c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c1366c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE17__get_weekdaynameERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c07b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07b18.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c13604 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c13604 ["INT_ADD", "register:40f0:8", ["const:c13604:8", "const:4:8"]]
- 00c13604 ["CALLIND", null, ["register:0:8"]]
+ 00c136a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c136a0 ["INT_ADD", "register:40f0:8", ["const:c136a0:8", "const:4:8"]]
+ 00c136a0 ["CALLIND", null, ["register:0:8"]]
- 00c13628 ["INT_ADD", "register:40f0:8", ["const:c13628:8", "const:4:8"]]
- 00c13628 ["CALL", null, ["callee:00c07bb4:8"]]
+ 00c136c4 ["INT_ADD", "register:40f0:8", ["const:c136c4:8", "const:4:8"]]
+ 00c136c4 ["CALL", null, ["callee:00c07bb4:8"]]
~~~


<a id="compare-49865c7851b9cc1ff72cb13e3610a4a5"></a>

### [`00c137dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c137dc.md) → [`00c13878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13878.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE15__get_monthnameERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c07b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07b18.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c13810 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c13810 ["INT_ADD", "register:40f0:8", ["const:c13810:8", "const:4:8"]]
- 00c13810 ["CALLIND", null, ["register:0:8"]]
+ 00c138ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c138ac ["INT_ADD", "register:40f0:8", ["const:c138ac:8", "const:4:8"]]
+ 00c138ac ["CALLIND", null, ["register:0:8"]]
- 00c13834 ["INT_ADD", "register:40f0:8", ["const:c13834:8", "const:4:8"]]
- 00c13834 ["CALL", null, ["callee:00c07bb4:8"]]
+ 00c138d0 ["INT_ADD", "register:40f0:8", ["const:c138d0:8", "const:4:8"]]
+ 00c138d0 ["CALL", null, ["callee:00c07bb4:8"]]
~~~


<a id="compare-2e222d32c48b83562d4bcc4e5123bcc3"></a>

### [`00c139ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c139ac.md) → [`00c13a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13a48.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE10__get_yearERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c139d8 ["INT_ADD", "register:40f0:8", ["const:c139d8:8", "const:4:8"]]
- 00c139d8 ["CALL", null, ["callee:00c14948:8"]]
+ 00c13a74 ["INT_ADD", "register:40f0:8", ["const:c13a74:8", "const:4:8"]]
+ 00c13a74 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-b512d681044c55ee0e3453f8e6728ff2"></a>

### [`00c14094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c14094.md) → [`00c14130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14130.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE9__get_dayERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c140c0 ["INT_ADD", "register:40f0:8", ["const:c140c0:8", "const:4:8"]]
- 00c140c0 ["CALL", null, ["callee:00c14948:8"]]
+ 00c1415c ["INT_ADD", "register:40f0:8", ["const:c1415c:8", "const:4:8"]]
+ 00c1415c ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-ff6e192a152f23c9813e24930beaedd2"></a>

### [`00c140f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c140f8.md) → [`00c14194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14194.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE10__get_hourERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14124 ["INT_ADD", "register:40f0:8", ["const:c14124:8", "const:4:8"]]
- 00c14124 ["CALL", null, ["callee:00c14948:8"]]
+ 00c141c0 ["INT_ADD", "register:40f0:8", ["const:c141c0:8", "const:4:8"]]
+ 00c141c0 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-074292394b59147f7ae1d5b28aef06e2"></a>

### [`00c14158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c14158.md) → [`00c141f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c141f4.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE13__get_12_hourERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14184 ["INT_ADD", "register:40f0:8", ["const:c14184:8", "const:4:8"]]
- 00c14184 ["CALL", null, ["callee:00c14948:8"]]
+ 00c14220 ["INT_ADD", "register:40f0:8", ["const:c14220:8", "const:4:8"]]
+ 00c14220 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-3e113da88b016ae07c99c36efa32de5c"></a>

### [`00c141bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c141bc.md) → [`00c14258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14258.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE18__get_day_year_numERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c141e8 ["INT_ADD", "register:40f0:8", ["const:c141e8:8", "const:4:8"]]
- 00c141e8 ["CALL", null, ["callee:00c14948:8"]]
+ 00c14284 ["INT_ADD", "register:40f0:8", ["const:c14284:8", "const:4:8"]]
+ 00c14284 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-4395a257310755286e9331abce1b7b47"></a>

### [`00c1421c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c1421c.md) → [`00c142b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c142b8.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11__get_monthERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14248 ["INT_ADD", "register:40f0:8", ["const:c14248:8", "const:4:8"]]
- 00c14248 ["CALL", null, ["callee:00c14948:8"]]
+ 00c142e4 ["INT_ADD", "register:40f0:8", ["const:c142e4:8", "const:4:8"]]
+ 00c142e4 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-07db35cbb7b1949c04d5803cd5cb203a"></a>

### [`00c14280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c14280.md) → [`00c1431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1431c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE12__get_minuteERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c142ac ["INT_ADD", "register:40f0:8", ["const:c142ac:8", "const:4:8"]]
- 00c142ac ["CALL", null, ["callee:00c14948:8"]]
+ 00c14348 ["INT_ADD", "register:40f0:8", ["const:c14348:8", "const:4:8"]]
+ 00c14348 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-6177ad3a32ee831534f5c76501685bb1"></a>

### [`00c142e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c142e0.md) → [`00c1437c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1437c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE17__get_white_spaceERS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e610.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6e0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14344 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14344 ["INT_ADD", "register:40f0:8", ["const:c14344:8", "const:4:8"]]
- 00c14344 ["CALLIND", null, ["register:0:8"]]
+ 00c143e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c143e0 ["INT_ADD", "register:40f0:8", ["const:c143e0:8", "const:4:8"]]
+ 00c143e0 ["CALLIND", null, ["register:0:8"]]
- 00c14398 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14398 ["INT_ADD", "register:40f0:8", ["const:c14398:8", "const:4:8"]]
- 00c14398 ["CALLIND", null, ["register:0:8"]]
+ 00c14434 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c14434 ["INT_ADD", "register:40f0:8", ["const:c14434:8", "const:4:8"]]
+ 00c14434 ["CALLIND", null, ["register:0:8"]]
- 00c143d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c143d8 ["INT_ADD", "register:40f0:8", ["const:c143d8:8", "const:4:8"]]
- 00c143d8 ["CALLIND", null, ["register:0:8"]]
+ 00c14474 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c14474 ["INT_ADD", "register:40f0:8", ["const:c14474:8", "const:4:8"]]
+ 00c14474 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-94e11a6199a24c543586231e9def08ee"></a>

### [`00c144c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c144c8.md) → [`00c14564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14564.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11__get_am_pmERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c07b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07b18.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c144fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c144fc ["INT_ADD", "register:40f0:8", ["const:c144fc:8", "const:4:8"]]
- 00c144fc ["CALLIND", null, ["register:0:8"]]
+ 00c14598 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c14598 ["INT_ADD", "register:40f0:8", ["const:c14598:8", "const:4:8"]]
+ 00c14598 ["CALLIND", null, ["register:0:8"]]
- 00c14560 ["INT_ADD", "register:40f0:8", ["const:c14560:8", "const:4:8"]]
- 00c14560 ["CALL", null, ["callee:00c07bb4:8"]]
+ 00c145fc ["INT_ADD", "register:40f0:8", ["const:c145fc:8", "const:4:8"]]
+ 00c145fc ["CALL", null, ["callee:00c07bb4:8"]]
~~~


<a id="compare-5f7267a5e180d0b7d3ed853328854cd5"></a>

### [`00c145b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c145b0.md) → [`00c1464c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1464c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE12__get_secondERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c145dc ["INT_ADD", "register:40f0:8", ["const:c145dc:8", "const:4:8"]]
- 00c145dc ["CALL", null, ["callee:00c14948:8"]]
+ 00c14678 ["INT_ADD", "register:40f0:8", ["const:c14678:8", "const:4:8"]]
+ 00c14678 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-7a50908b8eaadd959f2ffec6e0c2e981"></a>

### [`00c14610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c14610.md) → [`00c146ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c146ac.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE13__get_weekdayERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1463c ["INT_ADD", "register:40f0:8", ["const:c1463c:8", "const:4:8"]]
- 00c1463c ["CALL", null, ["callee:00c14948:8"]]
+ 00c146d8 ["INT_ADD", "register:40f0:8", ["const:c146d8:8", "const:4:8"]]
+ 00c146d8 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-2a193ef0aa4075f5a8929adcc5cbc53c"></a>

### [`00c14670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c14670.md) → [`00c1470c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1470c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11__get_year4ERiRS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1469c ["INT_ADD", "register:40f0:8", ["const:c1469c:8", "const:4:8"]]
- 00c1469c ["CALL", null, ["callee:00c14948:8"]]
+ 00c14738 ["INT_ADD", "register:40f0:8", ["const:c14738:8", "const:4:8"]]
+ 00c14738 ["CALL", null, ["callee:00c14948:8"]]
~~~


<a id="compare-f9c3695febf5d843a46d041d637b038d"></a>

### [`00c146c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c146c0.md) → [`00c1475c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1475c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE13__get_percentERS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e620.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6f0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14718 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14718 ["INT_ADD", "register:40f0:8", ["const:c14718:8", "const:4:8"]]
- 00c14718 ["CALLIND", null, ["register:0:8"]]
+ 00c147b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c147b4 ["INT_ADD", "register:40f0:8", ["const:c147b4:8", "const:4:8"]]
+ 00c147b4 ["CALLIND", null, ["register:0:8"]]
- 00c14778 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14778 ["INT_ADD", "register:40f0:8", ["const:c14778:8", "const:4:8"]]
- 00c14778 ["CALLIND", null, ["register:0:8"]]
+ 00c14814 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c14814 ["INT_ADD", "register:40f0:8", ["const:c14814:8", "const:4:8"]]
+ 00c14814 ["CALLIND", null, ["register:0:8"]]
- 00c147a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c147a0 ["INT_ADD", "register:40f0:8", ["const:c147a0:8", "const:4:8"]]
- 00c147a0 ["CALLIND", null, ["register:0:8"]]
+ 00c1483c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1483c ["INT_ADD", "register:40f0:8", ["const:c1483c:8", "const:4:8"]]
+ 00c1483c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-85888f090f65d437974448331c069e41"></a>

### [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md) → [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md) FUN_00c14948

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 12件 [`00c13890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c13890.md) [`00c139ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c139ac.md) [`00c13a14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c13a14.md) [`00c14094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c14094.md) [`00c140f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c140f8.md) · 呼出先 0件 
- 新版 呼出元 12件 [`00c1392c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c1392c.md) [`00c13a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13a48.md) [`00c13ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13ab0.md) [`00c14130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14130.md) [`00c14194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14194.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c14904 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14904 ["INT_ADD", "register:40f0:8", ["const:c14904:8", "const:4:8"]]
- 00c14904 ["CALLIND", null, ["register:0:8"]]
+ 00c149a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c149a0 ["INT_ADD", "register:40f0:8", ["const:c149a0:8", "const:4:8"]]
+ 00c149a0 ["CALLIND", null, ["register:0:8"]]
- 00c14970 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14970 ["INT_ADD", "register:40f0:8", ["const:c14970:8", "const:4:8"]]
- 00c14970 ["CALLIND", null, ["register:0:8"]]
+ 00c14a0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c14a0c ["INT_ADD", "register:40f0:8", ["const:c14a0c:8", "const:4:8"]]
+ 00c14a0c ["CALLIND", null, ["register:0:8"]]
- 00c1499c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1499c ["INT_ADD", "register:40f0:8", ["const:c1499c:8", "const:4:8"]]
- 00c1499c ["CALLIND", null, ["register:0:8"]]
+ 00c14a38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c14a38 ["INT_ADD", "register:40f0:8", ["const:c14a38:8", "const:4:8"]]
+ 00c14a38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0e81037e5ff645087b6de252386ec5c8"></a>

### [`00c15130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c15130.md) → [`00c151cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c151cc.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11do_get_dateES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e630.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e700.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c15168 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c15168 ["INT_ADD", "register:40f0:8", ["const:c15168:8", "const:4:8"]]
- 00c15168 ["CALLIND", null, ["register:0:8"]]
+ 00c15204 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c15204 ["INT_ADD", "register:40f0:8", ["const:c15204:8", "const:4:8"]]
+ 00c15204 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9b77d9068da9f1cb6d8900eb8f292b69"></a>

### [`00c15318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c15318.md) → [`00c153b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c153b4.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE17__get_weekdaynameERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c0aff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0aff0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1534c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1534c ["INT_ADD", "register:40f0:8", ["const:c1534c:8", "const:4:8"]]
- 00c1534c ["CALLIND", null, ["register:0:8"]]
+ 00c153e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c153e8 ["INT_ADD", "register:40f0:8", ["const:c153e8:8", "const:4:8"]]
+ 00c153e8 ["CALLIND", null, ["register:0:8"]]
- 00c15370 ["INT_ADD", "register:40f0:8", ["const:c15370:8", "const:4:8"]]
- 00c15370 ["CALL", null, ["callee:00c0b08c:8"]]
+ 00c1540c ["INT_ADD", "register:40f0:8", ["const:c1540c:8", "const:4:8"]]
+ 00c1540c ["CALL", null, ["callee:00c0b08c:8"]]
~~~


<a id="compare-710e2b115392fa255a28d5a92176b690"></a>

### [`00c15524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c15524.md) → [`00c155c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c155c0.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE15__get_monthnameERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c0aff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0aff0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c15558 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c15558 ["INT_ADD", "register:40f0:8", ["const:c15558:8", "const:4:8"]]
- 00c15558 ["CALLIND", null, ["register:0:8"]]
+ 00c155f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c155f4 ["INT_ADD", "register:40f0:8", ["const:c155f4:8", "const:4:8"]]
+ 00c155f4 ["CALLIND", null, ["register:0:8"]]
- 00c1557c ["INT_ADD", "register:40f0:8", ["const:c1557c:8", "const:4:8"]]
- 00c1557c ["CALL", null, ["callee:00c0b08c:8"]]
+ 00c15618 ["INT_ADD", "register:40f0:8", ["const:c15618:8", "const:4:8"]]
+ 00c15618 ["CALL", null, ["callee:00c0b08c:8"]]
~~~


<a id="compare-a21f2d4e3f9e7c1ff659f0c5435b2c77"></a>

### [`00c156f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c156f4.md) → [`00c15790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15790.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE10__get_yearERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c165f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c16/00c165f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c15720 ["INT_ADD", "register:40f0:8", ["const:c15720:8", "const:4:8"]]
- 00c15720 ["CALL", null, ["callee:00c1668c:8"]]
+ 00c157bc ["INT_ADD", "register:40f0:8", ["const:c157bc:8", "const:4:8"]]
+ 00c157bc ["CALL", null, ["callee:00c1668c:8"]]
~~~


