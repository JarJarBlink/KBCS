# v16.0.2 → v16.0.3 · 要調査の変更候補 (37)

[一覧の目次](README.md)

<a id="compare-f67ffab5e8c052cc3a5385b2f88e38db"></a>

### [`00bca3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca3c0.md) → [`00bcb3b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb3b4.md) _ZN8firebase13remote_config32ConfigUpdateListenerRegistration6RemoveEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d740.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e710.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bca3e0 ["INT_ADD", "register:40f0:8", ["const:bca3e0:8", "const:4:8"]]
- 00bca3e0 ["CALL", null, ["callee:00c5e710:8"]]
+ 00bcb3d4 ["INT_ADD", "register:40f0:8", ["const:bcb3d4:8", "const:4:8"]]
+ 00bcb3d4 ["CALL", null, ["callee:00c5e710:8"]]
~~~


<a id="compare-d360380260047cbfc8ace0a1db73f934"></a>

### [`00bca404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca404.md) → [`00bcb3f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb3f8.md) _ZN8firebase13remote_config8internal40ConfigUpdateListenerRegistrationInternalC2EPNS1_20RemoteConfigInternalENSt6__ndk18functionIFvvEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d750.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e720.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bca438 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bca438 ["INT_ADD", "register:40f0:8", ["const:bca438:8", "const:4:8"]]
- 00bca438 ["CALLIND", null, ["register:0:8"]]
+ 00bcb42c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcb42c ["INT_ADD", "register:40f0:8", ["const:bcb42c:8", "const:4:8"]]
+ 00bcb42c ["CALLIND", null, ["register:0:8"]]
- 00bca45c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bca45c ["INT_ADD", "register:40f0:8", ["const:bca45c:8", "const:4:8"]]
- 00bca45c ["CALLIND", null, ["register:0:8"]]
+ 00bcb450 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcb450 ["INT_ADD", "register:40f0:8", ["const:bcb450:8", "const:4:8"]]
+ 00bcb450 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8c724932148edac6ef9a9afc43af2edb"></a>

### [`00bca470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca470.md) → [`00bcb464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb464.md) _ZN8firebase13remote_config8internal40ConfigUpdateListenerRegistrationInternalD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d760.md) · 呼出先 1件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md)
- 新版 呼出元 1件 [`00c5e730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e730.md) · 呼出先 1件 [`00b621bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b621bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bca4a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bca4a0 ["INT_ADD", "register:40f0:8", ["const:bca4a0:8", "const:4:8"]]
- 00bca4a0 ["CALLIND", null, ["register:0:8"]]
+ 00bcb494 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcb494 ["INT_ADD", "register:40f0:8", ["const:bcb494:8", "const:4:8"]]
+ 00bcb494 ["CALLIND", null, ["register:0:8"]]
- 00bca4e4 ["INT_ADD", "register:40f0:8", ["const:bca4e4:8", "const:4:8"]]
- 00bca4e4 ["CALL", null, ["callee:00b621bc:8"]]
+ 00bcb4d8 ["INT_ADD", "register:40f0:8", ["const:bcb4d8:8", "const:4:8"]]
+ 00bcb4d8 ["CALL", null, ["callee:00b621bc:8"]]
~~~


<a id="compare-87c369bde74121c05c210ea0c8aab605"></a>

### [`00bca4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca4fc.md) → [`00bcb4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb4f0.md) _ZN8firebase13remote_config8internal40ConfigUpdateListenerRegistrationInternal6RemoveEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d740.md) · 呼出先 1件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md)
- 新版 呼出元 1件 [`00c5e710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e710.md) · 呼出先 1件 [`00b621bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b621bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bca538 ["INT_ADD", "register:40f0:8", ["const:bca538:8", "const:4:8"]]
- 00bca538 ["CALL", null, ["callee:00b621bc:8"]]
+ 00bcb52c ["INT_ADD", "register:40f0:8", ["const:bcb52c:8", "const:4:8"]]
+ 00bcb52c ["CALL", null, ["callee:00b621bc:8"]]
~~~


<a id="compare-c91b67eb18de27b41c638d254b7ddb4e"></a>

### [`00bcad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcad34.md) → [`00bcbd28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcbd28.md) _ZN8firebase4auth8AuthDataD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5db80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db80.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab20.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md) [`00c5da70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da70.md)
- 新版 呼出元 1件 [`00c5eb50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb50.md) · 呼出先 8件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baf0.md) [`00c5bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb40.md) [`00c5bcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcf0.md) [`00c5ea40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcad44 ["INT_ADD", "register:40f0:8", ["const:bcad44:8", "const:4:8"]]
- 00bcad44 ["CALL", null, ["callee:00c5ea40:8"]]
+ 00bcbd38 ["INT_ADD", "register:40f0:8", ["const:bcbd38:8", "const:4:8"]]
+ 00bcbd38 ["CALL", null, ["callee:00c5ea40:8"]]
- 00bcad60 ["INT_ADD", "register:40f0:8", ["const:bcad60:8", "const:4:8"]]
- 00bcad60 ["CALL", null, ["callee:00c5eb10:8"]]
+ 00bcbd54 ["INT_ADD", "register:40f0:8", ["const:bcbd54:8", "const:4:8"]]
+ 00bcbd54 ["CALL", null, ["callee:00c5eb10:8"]]
- 00bcad70 ["INT_ADD", "register:40f0:8", ["const:bcad70:8", "const:4:8"]]
- 00bcad70 ["CALL", null, ["callee:00c5eb00:8"]]
+ 00bcbd64 ["INT_ADD", "register:40f0:8", ["const:bcbd64:8", "const:4:8"]]
+ 00bcbd64 ["CALL", null, ["callee:00c5eb00:8"]]
~~~


<a id="compare-bbd03f02f89fd0ac75dd0108010eb748"></a>

### [`00bcae80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcae80.md) → [`00bcbe74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcbe74.md) _ZN8firebase4auth4AuthD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5db00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db00.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ead0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcae88 ["INT_ADD", "register:40f0:8", ["const:bcae88:8", "const:4:8"]]
- 00bcae88 ["CALL", null, ["callee:00c5ead0:8"]]
+ 00bcbe7c ["INT_ADD", "register:40f0:8", ["const:bcbe7c:8", "const:4:8"]]
+ 00bcbe7c ["CALL", null, ["callee:00c5ead0:8"]]
~~~


<a id="compare-009cf7570c23d71b9a9df933d1bddeb3"></a>

### [`00bcb278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb278.md) → [`00bcc26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcc26c.md) _ZN8firebase4auth4Auth23RemoveAuthStateListenerEPNS0_17AuthStateListenerE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db40.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00c5eb10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb10.md) · 呼出先 2件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcb2a0 ["INT_ADD", "register:40f0:8", ["const:bcb2a0:8", "const:4:8"]]
- 00bcb2a0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcc294 ["INT_ADD", "register:40f0:8", ["const:bcc294:8", "const:4:8"]]
+ 00bcc294 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcb374 ["INT_ADD", "register:40f0:8", ["const:bcb374:8", "const:4:8"]]
- 00bcb374 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bcc368 ["INT_ADD", "register:40f0:8", ["const:bcc368:8", "const:4:8"]]
+ 00bcc368 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-37651e8e82b05ba4da500a3b24b29f59"></a>

### [`00bcb38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb38c.md) → [`00bcc380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcc380.md) _ZN8firebase4auth4Auth21RemoveIdTokenListenerEPNS0_15IdTokenListenerE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5db30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db30.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5dad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dad0.md)
- 新版 呼出元 1件 [`00c5eb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb00.md) · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5eaa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eaa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcb3c0 ["INT_ADD", "register:40f0:8", ["const:bcb3c0:8", "const:4:8"]]
- 00bcb3c0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcc3b4 ["INT_ADD", "register:40f0:8", ["const:bcc3b4:8", "const:4:8"]]
+ 00bcc3b4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcb494 ["INT_ADD", "register:40f0:8", ["const:bcb494:8", "const:4:8"]]
- 00bcb494 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bcc488 ["INT_ADD", "register:40f0:8", ["const:bcc488:8", "const:4:8"]]
+ 00bcc488 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-2ad160e49d19db3f8292694771af2e62"></a>

### [`00bcb758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb758.md) → [`00bcc74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcc74c.md) _ZNSt6__ndk16vectorIPN8firebase4auth17AuthStateListenerENS_9allocatorIS4_EEEC2ERKS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbd0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5eba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eba0.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcb790 ["INT_ADD", "register:40f0:8", ["const:bcb790:8", "const:4:8"]]
- 00bcb790 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bcc784 ["INT_ADD", "register:40f0:8", ["const:bcc784:8", "const:4:8"]]
+ 00bcc784 ["CALL", null, ["callee:00c58f30:8"]]
- 00bcb7bc ["INT_ADD", "register:40f0:8", ["const:bcb7bc:8", "const:4:8"]]
- 00bcb7bc ["CALL", null, ["callee:00c590a0:8"]]
+ 00bcc7b0 ["INT_ADD", "register:40f0:8", ["const:bcc7b0:8", "const:4:8"]]
+ 00bcc7b0 ["CALL", null, ["callee:00c590a0:8"]]
- 00bcb7dc ["INT_ADD", "register:40f0:8", ["const:bcb7dc:8", "const:4:8"]]
- 00bcb7dc ["CALL", null, ["callee:00c5bdb0:8"]]
+ 00bcc7d0 ["INT_ADD", "register:40f0:8", ["const:bcc7d0:8", "const:4:8"]]
+ 00bcc7d0 ["CALL", null, ["callee:00c5bdb0:8"]]
~~~


<a id="compare-134ee453b91ede1f9e4c0fec74a1bd3b"></a>

### [`00bcb980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb980.md) → [`00bcc974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcc974.md) _ZNSt6__ndk16vectorIPN8firebase4auth15IdTokenListenerENS_9allocatorIS4_EEEC2ERKS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbb0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5eb80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb80.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcb9b8 ["INT_ADD", "register:40f0:8", ["const:bcb9b8:8", "const:4:8"]]
- 00bcb9b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bcc9ac ["INT_ADD", "register:40f0:8", ["const:bcc9ac:8", "const:4:8"]]
+ 00bcc9ac ["CALL", null, ["callee:00c58f30:8"]]
- 00bcb9e4 ["INT_ADD", "register:40f0:8", ["const:bcb9e4:8", "const:4:8"]]
- 00bcb9e4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00bcc9d8 ["INT_ADD", "register:40f0:8", ["const:bcc9d8:8", "const:4:8"]]
+ 00bcc9d8 ["CALL", null, ["callee:00c590a0:8"]]
- 00bcba04 ["INT_ADD", "register:40f0:8", ["const:bcba04:8", "const:4:8"]]
- 00bcba04 ["CALL", null, ["callee:00c5bdb0:8"]]
+ 00bcc9f8 ["INT_ADD", "register:40f0:8", ["const:bcc9f8:8", "const:4:8"]]
+ 00bcc9f8 ["CALL", null, ["callee:00c5bdb0:8"]]
~~~


<a id="compare-e157ee5d5e38b007b31dbaace8cbca56"></a>

### [`00bcba40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcba40.md) → [`00bcca34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcca34.md) _ZNK8firebase4auth4Auth32FetchProvidersForEmailLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcba60 ["INT_ADD", "register:40f0:8", ["const:bcba60:8", "const:4:8"]]
- 00bcba60 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcca54 ["INT_ADD", "register:40f0:8", ["const:bcca54:8", "const:4:8"]]
+ 00bcca54 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcba6c ["INT_ADD", "register:40f0:8", ["const:bcba6c:8", "const:4:8"]]
- 00bcba6c ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bcca60 ["INT_ADD", "register:40f0:8", ["const:bcca60:8", "const:4:8"]]
+ 00bcca60 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bcba78 ["INT_ADD", "register:40f0:8", ["const:bcba78:8", "const:4:8"]]
- 00bcba78 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bcca6c ["INT_ADD", "register:40f0:8", ["const:bcca6c:8", "const:4:8"]]
+ 00bcca6c ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-c6fae193f31466d55a6803ff88c26c6e"></a>

### [`00bcbad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbad0.md) → [`00bccac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bccac4.md) _ZNK8firebase4auth4Auth32SendPasswordResetEmailLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbaf0 ["INT_ADD", "register:40f0:8", ["const:bcbaf0:8", "const:4:8"]]
- 00bcbaf0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bccae4 ["INT_ADD", "register:40f0:8", ["const:bccae4:8", "const:4:8"]]
+ 00bccae4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcbafc ["INT_ADD", "register:40f0:8", ["const:bcbafc:8", "const:4:8"]]
- 00bcbafc ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bccaf0 ["INT_ADD", "register:40f0:8", ["const:bccaf0:8", "const:4:8"]]
+ 00bccaf0 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bcbb08 ["INT_ADD", "register:40f0:8", ["const:bcbb08:8", "const:4:8"]]
- 00bcbb08 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bccafc ["INT_ADD", "register:40f0:8", ["const:bccafc:8", "const:4:8"]]
+ 00bccafc ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-6920521f60fd88cbce90a1bf6fd664ae"></a>

### [`00bcbb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbb60.md) → [`00bccb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bccb54.md) _ZNK8firebase4auth4Auth31SignInWithCustomTokenLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbb80 ["INT_ADD", "register:40f0:8", ["const:bcbb80:8", "const:4:8"]]
- 00bcbb80 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bccb74 ["INT_ADD", "register:40f0:8", ["const:bccb74:8", "const:4:8"]]
+ 00bccb74 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcbb8c ["INT_ADD", "register:40f0:8", ["const:bcbb8c:8", "const:4:8"]]
- 00bcbb8c ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bccb80 ["INT_ADD", "register:40f0:8", ["const:bccb80:8", "const:4:8"]]
+ 00bccb80 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bcbb98 ["INT_ADD", "register:40f0:8", ["const:bcbb98:8", "const:4:8"]]
- 00bcbb98 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bccb8c ["INT_ADD", "register:40f0:8", ["const:bccb8c:8", "const:4:8"]]
+ 00bccb8c ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-63d73fc7f196e06a3d05177ea56ce4a9"></a>

### [`00bcbbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbbf0.md) → [`00bccbe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bccbe4.md) _ZNK8firebase4auth4Auth45SignInAndRetrieveDataWithCredentialLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbc10 ["INT_ADD", "register:40f0:8", ["const:bcbc10:8", "const:4:8"]]
- 00bcbc10 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bccc04 ["INT_ADD", "register:40f0:8", ["const:bccc04:8", "const:4:8"]]
+ 00bccc04 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcbc1c ["INT_ADD", "register:40f0:8", ["const:bcbc1c:8", "const:4:8"]]
- 00bcbc1c ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bccc10 ["INT_ADD", "register:40f0:8", ["const:bccc10:8", "const:4:8"]]
+ 00bccc10 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bcbc28 ["INT_ADD", "register:40f0:8", ["const:bcbc28:8", "const:4:8"]]
- 00bcbc28 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bccc1c ["INT_ADD", "register:40f0:8", ["const:bccc1c:8", "const:4:8"]]
+ 00bccc1c ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-1ad2305a3ea8f0b1ef3caa4ec07bd04f"></a>

### [`00bcbc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbc80.md) → [`00bccc74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bccc74.md) _ZNK8firebase4auth4Auth27SignInAnonymouslyLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbca0 ["INT_ADD", "register:40f0:8", ["const:bcbca0:8", "const:4:8"]]
- 00bcbca0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bccc94 ["INT_ADD", "register:40f0:8", ["const:bccc94:8", "const:4:8"]]
+ 00bccc94 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcbcac ["INT_ADD", "register:40f0:8", ["const:bcbcac:8", "const:4:8"]]
- 00bcbcac ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bccca0 ["INT_ADD", "register:40f0:8", ["const:bccca0:8", "const:4:8"]]
+ 00bccca0 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bcbcb8 ["INT_ADD", "register:40f0:8", ["const:bcbcb8:8", "const:4:8"]]
- 00bcbcb8 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bcccac ["INT_ADD", "register:40f0:8", ["const:bcccac:8", "const:4:8"]]
+ 00bcccac ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-da0d5f1a009857babdda452120147b0a"></a>

### [`00bcbd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbd10.md) → [`00bccd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bccd04.md) _ZNK8firebase4auth4Auth36SignInWithEmailAndPasswordLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbd30 ["INT_ADD", "register:40f0:8", ["const:bcbd30:8", "const:4:8"]]
- 00bcbd30 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bccd24 ["INT_ADD", "register:40f0:8", ["const:bccd24:8", "const:4:8"]]
+ 00bccd24 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcbd3c ["INT_ADD", "register:40f0:8", ["const:bcbd3c:8", "const:4:8"]]
- 00bcbd3c ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bccd30 ["INT_ADD", "register:40f0:8", ["const:bccd30:8", "const:4:8"]]
+ 00bccd30 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bcbd48 ["INT_ADD", "register:40f0:8", ["const:bcbd48:8", "const:4:8"]]
- 00bcbd48 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bccd3c ["INT_ADD", "register:40f0:8", ["const:bccd3c:8", "const:4:8"]]
+ 00bccd3c ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-e49c0cf600ab758503269cee547962e5"></a>

### [`00bcbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbda0.md) → [`00bccd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bccd94.md) _ZNK8firebase4auth4Auth40CreateUserWithEmailAndPasswordLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbdc0 ["INT_ADD", "register:40f0:8", ["const:bcbdc0:8", "const:4:8"]]
- 00bcbdc0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bccdb4 ["INT_ADD", "register:40f0:8", ["const:bccdb4:8", "const:4:8"]]
+ 00bccdb4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcbdcc ["INT_ADD", "register:40f0:8", ["const:bcbdcc:8", "const:4:8"]]
- 00bcbdcc ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bccdc0 ["INT_ADD", "register:40f0:8", ["const:bccdc0:8", "const:4:8"]]
+ 00bccdc0 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bcbdd8 ["INT_ADD", "register:40f0:8", ["const:bcbdd8:8", "const:4:8"]]
- 00bcbdd8 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bccdcc ["INT_ADD", "register:40f0:8", ["const:bccdcc:8", "const:4:8"]]
+ 00bccdcc ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-68ec95c7ff77da52dd71ef903cd8db94"></a>

### [`00bcbe80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbe80.md) → [`00bcce74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcce74.md) _ZNSt6__ndk16__treeINS_12__value_typeIPN8firebase3AppEPNS2_4auth4AuthEEENS_19__map_value_compareIS4_S8_NS_4lessIS4_EELb1EEENS_9allocatorIS8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5db90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db90.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5db90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db90.md)
- 新版 呼出元 1件 [`00c5eb60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb60.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5eb60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcbe9c ["INT_ADD", "register:40f0:8", ["const:bcbe9c:8", "const:4:8"]]
- 00bcbe9c ["CALL", null, ["callee:00c5eb60:8"]]
+ 00bcce90 ["INT_ADD", "register:40f0:8", ["const:bcce90:8", "const:4:8"]]
+ 00bcce90 ["CALL", null, ["callee:00c5eb60:8"]]
- 00bcbea8 ["INT_ADD", "register:40f0:8", ["const:bcbea8:8", "const:4:8"]]
- 00bcbea8 ["CALL", null, ["callee:00c5eb60:8"]]
+ 00bcce9c ["INT_ADD", "register:40f0:8", ["const:bcce9c:8", "const:4:8"]]
+ 00bcce9c ["CALL", null, ["callee:00c5eb60:8"]]
~~~


<a id="compare-10569898b3d07b6d0c84fb85f405897f"></a>

### [`00bcc26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc26c.md) → [`00bcd260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd260.md) _ZN8firebase4auth14ClearUserInfosEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5da70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da70.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ea40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea40.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcc2c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcc2c8 ["INT_ADD", "register:40f0:8", ["const:bcc2c8:8", "const:4:8"]]
- 00bcc2c8 ["CALLIND", null, ["register:0:8"]]
+ 00bcd2bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcd2bc ["INT_ADD", "register:40f0:8", ["const:bcd2bc:8", "const:4:8"]]
+ 00bcd2bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-52ad4857c8fd5b957120ebde2c9d6f3a"></a>

### [`00bcc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc340.md) → [`00bcd334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd334.md) _ZNK8firebase4auth4UsereqERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ab30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab30.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcc350 ["INT_ADD", "register:40f0:8", ["const:bcc350:8", "const:4:8"]]
- 00bcc350 ["CALL", null, ["callee:00c5bb00:8"]]
+ 00bcd344 ["INT_ADD", "register:40f0:8", ["const:bcd344:8", "const:4:8"]]
+ 00bcd344 ["CALL", null, ["callee:00c5bb00:8"]]
- 00bcc35c ["INT_ADD", "register:40f0:8", ["const:bcc35c:8", "const:4:8"]]
- 00bcc35c ["CALL", null, ["callee:00c5bb00:8"]]
+ 00bcd350 ["INT_ADD", "register:40f0:8", ["const:bcd350:8", "const:4:8"]]
+ 00bcd350 ["CALL", null, ["callee:00c5bb00:8"]]
~~~


<a id="compare-070122f453a24f20895d1e0d5386b402"></a>

### [`00bcc374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc374.md) → [`00bcd368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd368.md) _ZNK8firebase4auth4UserneERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ab30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab30.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcc384 ["INT_ADD", "register:40f0:8", ["const:bcc384:8", "const:4:8"]]
- 00bcc384 ["CALL", null, ["callee:00c5bb00:8"]]
+ 00bcd378 ["INT_ADD", "register:40f0:8", ["const:bcd378:8", "const:4:8"]]
+ 00bcd378 ["CALL", null, ["callee:00c5bb00:8"]]
- 00bcc390 ["INT_ADD", "register:40f0:8", ["const:bcc390:8", "const:4:8"]]
- 00bcc390 ["CALL", null, ["callee:00c5bb00:8"]]
+ 00bcd384 ["INT_ADD", "register:40f0:8", ["const:bcd384:8", "const:4:8"]]
+ 00bcd384 ["CALL", null, ["callee:00c5bb00:8"]]
~~~


<a id="compare-ba6b4d5dbd17d99ecc66e7d4ad32adeb"></a>

### [`00bcdbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdbe0.md) → [`00bcebd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bcebd4.md) _ZN8firebase4auth45JniAuthStateListener_nativeOnAuthStateChangedEP7_JNIEnvP8_jobjectl

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5dae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dae0.md) [`00c5dd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd00.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5eab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eab0.md) [`00c5ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ecd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcdbf4 ["INT_ADD", "register:40f0:8", ["const:bcdbf4:8", "const:4:8"]]
- 00bcdbf4 ["CALL", null, ["callee:00c5ecd0:8"]]
+ 00bcebe8 ["INT_ADD", "register:40f0:8", ["const:bcebe8:8", "const:4:8"]]
+ 00bcebe8 ["CALL", null, ["callee:00c5ecd0:8"]]
~~~


<a id="compare-fd31ab5bafa58aca2a0616f21c3ec623"></a>

### [`00bcdc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc08.md) → [`00bcebfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bcebfc.md) _ZN8firebase4auth41JniIdTokenListener_nativeOnIdTokenChangedEP7_JNIEnvP8_jobjectl

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5dac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dac0.md) [`00c5dd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd00.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5ea90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea90.md) [`00c5ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ecd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcdc20 ["INT_ADD", "register:40f0:8", ["const:bcdc20:8", "const:4:8"]]
- 00bcdc20 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcec14 ["INT_ADD", "register:40f0:8", ["const:bcec14:8", "const:4:8"]]
+ 00bcec14 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcdc2c ["INT_ADD", "register:40f0:8", ["const:bcdc2c:8", "const:4:8"]]
- 00bcdc2c ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bcec20 ["INT_ADD", "register:40f0:8", ["const:bcec20:8", "const:4:8"]]
+ 00bcec20 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bcdc34 ["INT_ADD", "register:40f0:8", ["const:bcdc34:8", "const:4:8"]]
- 00bcdc34 ["CALL", null, ["callee:00c5ecd0:8"]]
+ 00bcec28 ["INT_ADD", "register:40f0:8", ["const:bcec28:8", "const:4:8"]]
+ 00bcec28 ["CALL", null, ["callee:00c5ecd0:8"]]
~~~


<a id="compare-3f032bc313a2f47abe4706998cd4113b"></a>

### [`00bcde4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcde4c.md) → [`00bcee40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bcee40.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorINS0_4Auth20FetchProvidersResultEEEbP7_JNIEnvPNS_26ReferenceCountedFutureImplERKNS_16SafeFut

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ddb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddb0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dca0.md)
- 新版 呼出元 1件 [`00c5ed80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed80.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5ec70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcde80 ["INT_ADD", "register:40f0:8", ["const:bcde80:8", "const:4:8"]]
- 00bcde80 ["CALL", null, ["callee:00c5edb0:8"]]
+ 00bcee74 ["INT_ADD", "register:40f0:8", ["const:bcee74:8", "const:4:8"]]
+ 00bcee74 ["CALL", null, ["callee:00c5edb0:8"]]
- 00bcde94 ["INT_ADD", "register:40f0:8", ["const:bcde94:8", "const:4:8"]]
- 00bcde94 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bcee88 ["INT_ADD", "register:40f0:8", ["const:bcee88:8", "const:4:8"]]
+ 00bcee88 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bcdec0 ["INT_ADD", "register:40f0:8", ["const:bcdec0:8", "const:4:8"]]
- 00bcdec0 ["CALL", null, ["callee:00c5ec70:8"]]
+ 00bceeb4 ["INT_ADD", "register:40f0:8", ["const:bceeb4:8", "const:4:8"]]
+ 00bceeb4 ["CALL", null, ["callee:00c5ec70:8"]]
~~~


<a id="compare-8e350382a6a7d39d0efba34c50587a19"></a>

### [`00bce474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce474.md) → [`00bcf468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcf468.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorINS0_10AuthResultEEEbP7_JNIEnvPNS_26ReferenceCountedFutureImplERKNS_16SafeFutureHandleIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dda0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc90.md)
- 新版 呼出元 1件 [`00c5ed70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed70.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5ec60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bce4a8 ["INT_ADD", "register:40f0:8", ["const:bce4a8:8", "const:4:8"]]
- 00bce4a8 ["CALL", null, ["callee:00c5edb0:8"]]
+ 00bcf49c ["INT_ADD", "register:40f0:8", ["const:bcf49c:8", "const:4:8"]]
+ 00bcf49c ["CALL", null, ["callee:00c5edb0:8"]]
- 00bce4bc ["INT_ADD", "register:40f0:8", ["const:bce4bc:8", "const:4:8"]]
- 00bce4bc ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bcf4b0 ["INT_ADD", "register:40f0:8", ["const:bcf4b0:8", "const:4:8"]]
+ 00bcf4b0 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bce4e8 ["INT_ADD", "register:40f0:8", ["const:bce4e8:8", "const:4:8"]]
- 00bce4e8 ["CALL", null, ["callee:00c5ec60:8"]]
+ 00bcf4dc ["INT_ADD", "register:40f0:8", ["const:bcf4dc:8", "const:4:8"]]
+ 00bcf4dc ["CALL", null, ["callee:00c5ec60:8"]]
~~~


<a id="compare-a5bad87385f226686683fa0ef6162a7d"></a>

### [`00bce828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce828.md) → [`00bcf81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcf81c.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorINS0_4UserEEEbP7_JNIEnvPNS_26ReferenceCountedFutureImplERKNS_16SafeFutureHandleIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ddc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddc0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcb0.md)
- 新版 呼出元 1件 [`00c5ed90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed90.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5ec80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bce85c ["INT_ADD", "register:40f0:8", ["const:bce85c:8", "const:4:8"]]
- 00bce85c ["CALL", null, ["callee:00c5edb0:8"]]
+ 00bcf850 ["INT_ADD", "register:40f0:8", ["const:bcf850:8", "const:4:8"]]
+ 00bcf850 ["CALL", null, ["callee:00c5edb0:8"]]
- 00bce870 ["INT_ADD", "register:40f0:8", ["const:bce870:8", "const:4:8"]]
- 00bce870 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bcf864 ["INT_ADD", "register:40f0:8", ["const:bcf864:8", "const:4:8"]]
+ 00bcf864 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bce89c ["INT_ADD", "register:40f0:8", ["const:bce89c:8", "const:4:8"]]
- 00bce89c ["CALL", null, ["callee:00c5ec80:8"]]
+ 00bcf890 ["INT_ADD", "register:40f0:8", ["const:bcf890:8", "const:4:8"]]
+ 00bcf890 ["CALL", null, ["callee:00c5ec80:8"]]
~~~


<a id="compare-c53344511a68677e62e66f77ef4e4eec"></a>

### [`00bcf798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf798.md) → [`00bd078c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd078c.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorIvEEbP7_JNIEnvPNS_26ReferenceCountedFutureImplERKNS_16SafeFutureHandleIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ddd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddd0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ae70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae70.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5eda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eda0.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5be40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be40.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcf7cc ["INT_ADD", "register:40f0:8", ["const:bcf7cc:8", "const:4:8"]]
- 00bcf7cc ["CALL", null, ["callee:00c5edb0:8"]]
+ 00bd07c0 ["INT_ADD", "register:40f0:8", ["const:bd07c0:8", "const:4:8"]]
+ 00bd07c0 ["CALL", null, ["callee:00c5edb0:8"]]
- 00bcf7e0 ["INT_ADD", "register:40f0:8", ["const:bcf7e0:8", "const:4:8"]]
- 00bcf7e0 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bd07d4 ["INT_ADD", "register:40f0:8", ["const:bd07d4:8", "const:4:8"]]
+ 00bd07d4 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bcf80c ["INT_ADD", "register:40f0:8", ["const:bcf80c:8", "const:4:8"]]
- 00bcf80c ["CALL", null, ["callee:00c5be40:8"]]
+ 00bd0800 ["INT_ADD", "register:40f0:8", ["const:bd0800:8", "const:4:8"]]
+ 00bd0800 ["CALL", null, ["callee:00c5be40:8"]]
~~~


<a id="compare-302d1c3a6e6e6236cd9b00b5079eab9d"></a>

### [`00bcf93c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf93c.md) → [`00bd0930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0930.md) _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINS_4auth4Auth20FetchProvidersResultEEEvPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bcdc4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc4c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00bcec40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bcec40.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcf98c ["INT_ADD", "register:40f0:8", ["const:bcf98c:8", "const:4:8"]]
- 00bcf98c ["CALL", null, ["callee:00c58f50:8"]]
+ 00bd0980 ["INT_ADD", "register:40f0:8", ["const:bd0980:8", "const:4:8"]]
+ 00bd0980 ["CALL", null, ["callee:00c58f50:8"]]
- 00bcf9a8 ["INT_ADD", "register:40f0:8", ["const:bcf9a8:8", "const:4:8"]]
- 00bcf9a8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bd099c ["INT_ADD", "register:40f0:8", ["const:bd099c:8", "const:4:8"]]
+ 00bd099c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7165fc8528fdf4f503e02a9e51c6545b"></a>

### [`00bcfac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfac8.md) → [`00bd0abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0abc.md) _ZN8firebase4auth14FutureCallbackINS0_4Auth20FetchProvidersResultEEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bcdc4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc4c.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc70.md)
- 新版 呼出元 1件 [`00bcec40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bcec40.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5ec40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcfb00 ["INT_ADD", "register:40f0:8", ["const:bcfb00:8", "const:4:8"]]
- 00bcfb00 ["CALL", null, ["callee:00c5edc0:8"]]
+ 00bd0af4 ["INT_ADD", "register:40f0:8", ["const:bd0af4:8", "const:4:8"]]
+ 00bd0af4 ["CALL", null, ["callee:00c5edc0:8"]]
- 00bcfb18 ["INT_ADD", "register:40f0:8", ["const:bcfb18:8", "const:4:8"]]
- 00bcfb18 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bd0b0c ["INT_ADD", "register:40f0:8", ["const:bd0b0c:8", "const:4:8"]]
+ 00bd0b0c ["CALL", null, ["callee:00c5bea0:8"]]
- 00bcfb40 ["INT_ADD", "register:40f0:8", ["const:bcfb40:8", "const:4:8"]]
- 00bcfb40 ["CALL", null, ["callee:00c5ec40:8"]]
+ 00bd0b34 ["INT_ADD", "register:40f0:8", ["const:bd0b34:8", "const:4:8"]]
+ 00bd0b34 ["CALL", null, ["callee:00c5ec40:8"]]
~~~


<a id="compare-f080c3907088fa470acd3697bd33a123"></a>

### [`00bcfcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfcd4.md) → [`00bd0cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0cc8.md) _ZN8firebase6FutureINS_4auth4Auth20FetchProvidersResultEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de10.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5ede0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ede0.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcfcf4 ["INT_ADD", "register:40f0:8", ["const:bcfcf4:8", "const:4:8"]]
- 00bcfcf4 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bd0ce8 ["INT_ADD", "register:40f0:8", ["const:bd0ce8:8", "const:4:8"]]
+ 00bd0ce8 ["CALL", null, ["callee:00c5bd10:8"]]
- 00bcfd08 ["INT_ADD", "register:40f0:8", ["const:bcfd08:8", "const:4:8"]]
- 00bcfd08 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bd0cfc ["INT_ADD", "register:40f0:8", ["const:bd0cfc:8", "const:4:8"]]
+ 00bd0cfc ["CALL", null, ["callee:00c5bea0:8"]]
- 00bcfd1c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcfd1c ["INT_ADD", "register:40f0:8", ["const:bcfd1c:8", "const:4:8"]]
- 00bcfd1c ["CALLIND", null, ["register:0:8"]]
+ 00bd0d10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd0d10 ["INT_ADD", "register:40f0:8", ["const:bd0d10:8", "const:4:8"]]
+ 00bd0d10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e5657e049df4680ea7374a9bc4a9f207"></a>

### [`00bcfd74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfd74.md) → [`00bd0d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0d68.md) _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINS_4auth10AuthResultEEEvPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bce328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce328.md) [`00bdbc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbc08.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aac0.md) [`00c5ab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab20.md) [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md)
- 新版 呼出元 2件 [`00bcf31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcf31c.md) [`00bdcbfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdcbfc.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ba90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba90.md) [`00c5baf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baf0.md) [`00c5cec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cec0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcfd8c ["INT_ADD", "register:40f0:8", ["const:bcfd8c:8", "const:4:8"]]
- 00bcfd8c ["CALL", null, ["callee:00c5baf0:8"]]
+ 00bd0d80 ["INT_ADD", "register:40f0:8", ["const:bd0d80:8", "const:4:8"]]
+ 00bd0d80 ["CALL", null, ["callee:00c5baf0:8"]]
- 00bcfd94 ["INT_ADD", "register:40f0:8", ["const:bcfd94:8", "const:4:8"]]
- 00bcfd94 ["CALL", null, ["callee:00c5ba90:8"]]
+ 00bd0d88 ["INT_ADD", "register:40f0:8", ["const:bd0d88:8", "const:4:8"]]
+ 00bd0d88 ["CALL", null, ["callee:00c5ba90:8"]]
- 00bcfd9c ["INT_ADD", "register:40f0:8", ["const:bcfd9c:8", "const:4:8"]]
- 00bcfd9c ["CALL", null, ["callee:00c5ba90:8"]]
+ 00bd0d90 ["INT_ADD", "register:40f0:8", ["const:bd0d90:8", "const:4:8"]]
+ 00bd0d90 ["CALL", null, ["callee:00c5ba90:8"]]
~~~


<a id="compare-a2f640f506219e709930f6a3e7f0ee57"></a>

### [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) → [`00bd0dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0dd4.md) _ZN8firebase4auth14FutureCallbackINS0_10AuthResultEEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`00bce164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce164.md) [`00bce92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce92c.md) [`00bceb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bceb9c.md) [`00bced28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bced28.md) [`00bcefb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bcefb4.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc60.md)
- 新版 呼出元 8件 [`00bcf158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcf158.md) [`00bcf920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcf920.md) [`00bcfb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcfb90.md) [`00bcfd1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcfd1c.md) [`00bcffa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcffa8.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5ec30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bcfe18 ["INT_ADD", "register:40f0:8", ["const:bcfe18:8", "const:4:8"]]
- 00bcfe18 ["CALL", null, ["callee:00c5edc0:8"]]
+ 00bd0e0c ["INT_ADD", "register:40f0:8", ["const:bd0e0c:8", "const:4:8"]]
+ 00bd0e0c ["CALL", null, ["callee:00c5edc0:8"]]
- 00bcfe30 ["INT_ADD", "register:40f0:8", ["const:bcfe30:8", "const:4:8"]]
- 00bcfe30 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bd0e24 ["INT_ADD", "register:40f0:8", ["const:bd0e24:8", "const:4:8"]]
+ 00bd0e24 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bcfe58 ["INT_ADD", "register:40f0:8", ["const:bcfe58:8", "const:4:8"]]
- 00bcfe58 ["CALL", null, ["callee:00c5ec30:8"]]
+ 00bd0e4c ["INT_ADD", "register:40f0:8", ["const:bd0e4c:8", "const:4:8"]]
+ 00bd0e4c ["CALL", null, ["callee:00c5ec30:8"]]
~~~


<a id="compare-9152ec0f4eaf945c387c789b2d727e1e"></a>

### [`00bcffec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcffec.md) → [`00bd0fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0fe0.md) _ZN8firebase6FutureINS_4auth10AuthResultEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de00.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5edd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5edd0.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd000c ["INT_ADD", "register:40f0:8", ["const:bd000c:8", "const:4:8"]]
- 00bd000c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bd1000 ["INT_ADD", "register:40f0:8", ["const:bd1000:8", "const:4:8"]]
+ 00bd1000 ["CALL", null, ["callee:00c5bd10:8"]]
- 00bd0020 ["INT_ADD", "register:40f0:8", ["const:bd0020:8", "const:4:8"]]
- 00bd0020 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bd1014 ["INT_ADD", "register:40f0:8", ["const:bd1014:8", "const:4:8"]]
+ 00bd1014 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bd0034 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd0034 ["INT_ADD", "register:40f0:8", ["const:bd0034:8", "const:4:8"]]
- 00bd0034 ["CALLIND", null, ["register:0:8"]]
+ 00bd1028 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd1028 ["INT_ADD", "register:40f0:8", ["const:bd1028:8", "const:4:8"]]
+ 00bd1028 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ac67195ae120163403473be6e254a368"></a>

### [`00bd01a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd01a8.md) → [`00bd119c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd119c.md) _ZN8firebase4auth14FutureCallbackINS0_4UserEEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bce578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce578.md) [`00be02a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be02a0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc80.md)
- 新版 呼出元 2件 [`00bcf56c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcf56c.md) [`00be1294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be1/00be1294.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5ec50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd01e0 ["INT_ADD", "register:40f0:8", ["const:bd01e0:8", "const:4:8"]]
- 00bd01e0 ["CALL", null, ["callee:00c5edc0:8"]]
+ 00bd11d4 ["INT_ADD", "register:40f0:8", ["const:bd11d4:8", "const:4:8"]]
+ 00bd11d4 ["CALL", null, ["callee:00c5edc0:8"]]
- 00bd01f8 ["INT_ADD", "register:40f0:8", ["const:bd01f8:8", "const:4:8"]]
- 00bd01f8 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bd11ec ["INT_ADD", "register:40f0:8", ["const:bd11ec:8", "const:4:8"]]
+ 00bd11ec ["CALL", null, ["callee:00c5bea0:8"]]
- 00bd0220 ["INT_ADD", "register:40f0:8", ["const:bd0220:8", "const:4:8"]]
- 00bd0220 ["CALL", null, ["callee:00c5ec50:8"]]
+ 00bd1214 ["INT_ADD", "register:40f0:8", ["const:bd1214:8", "const:4:8"]]
+ 00bd1214 ["CALL", null, ["callee:00c5ec50:8"]]
~~~


<a id="compare-c0a2f588499cde1875da727e653f2280"></a>

### [`00bd03b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd03b4.md) → [`00bd13a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd13a8.md) _ZN8firebase6FutureINS_4auth4UserEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de20.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5edf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5edf0.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd03d4 ["INT_ADD", "register:40f0:8", ["const:bd03d4:8", "const:4:8"]]
- 00bd03d4 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bd13c8 ["INT_ADD", "register:40f0:8", ["const:bd13c8:8", "const:4:8"]]
+ 00bd13c8 ["CALL", null, ["callee:00c5bd10:8"]]
- 00bd03e8 ["INT_ADD", "register:40f0:8", ["const:bd03e8:8", "const:4:8"]]
- 00bd03e8 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bd13dc ["INT_ADD", "register:40f0:8", ["const:bd13dc:8", "const:4:8"]]
+ 00bd13dc ["CALL", null, ["callee:00c5bea0:8"]]
- 00bd03fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd03fc ["INT_ADD", "register:40f0:8", ["const:bd03fc:8", "const:4:8"]]
- 00bd03fc ["CALLIND", null, ["register:0:8"]]
+ 00bd13f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd13f0 ["INT_ADD", "register:40f0:8", ["const:bd13f0:8", "const:4:8"]]
+ 00bd13f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-94663979001c2ad0d65937d757126078"></a>

### [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) → [`00bd1550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1550.md) _ZN8firebase4auth14FutureCallbackIvEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`00bcf54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf54c.md) [`00bdf7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf7ec.md) [`00bdfa14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdfa14.md) [`00be04ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be04ec.md) [`00be06dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be06dc.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcc0.md)
- 新版 呼出元 8件 [`00bd0540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0540.md) [`00be07e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be0/00be07e0.md) [`00be0a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be0/00be0a08.md) [`00be14e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be1/00be14e0.md) [`00be16d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be1/00be16d0.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5ec90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd0594 ["INT_ADD", "register:40f0:8", ["const:bd0594:8", "const:4:8"]]
- 00bd0594 ["CALL", null, ["callee:00c5edc0:8"]]
+ 00bd1588 ["INT_ADD", "register:40f0:8", ["const:bd1588:8", "const:4:8"]]
+ 00bd1588 ["CALL", null, ["callee:00c5edc0:8"]]
- 00bd05ac ["INT_ADD", "register:40f0:8", ["const:bd05ac:8", "const:4:8"]]
- 00bd05ac ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bd15a0 ["INT_ADD", "register:40f0:8", ["const:bd15a0:8", "const:4:8"]]
+ 00bd15a0 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bd05d4 ["INT_ADD", "register:40f0:8", ["const:bd05d4:8", "const:4:8"]]
- 00bd05d4 ["CALL", null, ["callee:00c5ec90:8"]]
+ 00bd15c8 ["INT_ADD", "register:40f0:8", ["const:bd15c8:8", "const:4:8"]]
+ 00bd15c8 ["CALL", null, ["callee:00c5ec90:8"]]
~~~


<a id="compare-0796d350c4423bae6224755c4dd6e193"></a>

### [`00bd4714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4714.md) → [`00bd5708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5708.md) _ZN8firebase4auth30CheckAndClearJniAuthExceptionsEP7_JNIEnvPNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dde0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b020.md) [`00c5de50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de50.md)
- 新版 呼出元 1件 [`00c5edb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5edb0.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bff0.md) [`00c5ee20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd4748 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd4748 ["INT_ADD", "register:40f0:8", ["const:bd4748:8", "const:4:8"]]
- 00bd4748 ["CALLIND", null, ["register:0:8"]]
+ 00bd573c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd573c ["INT_ADD", "register:40f0:8", ["const:bd573c:8", "const:4:8"]]
+ 00bd573c ["CALLIND", null, ["register:0:8"]]
- 00bd4760 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd4760 ["INT_ADD", "register:40f0:8", ["const:bd4760:8", "const:4:8"]]
- 00bd4760 ["CALLIND", null, ["register:0:8"]]
+ 00bd5754 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd5754 ["INT_ADD", "register:40f0:8", ["const:bd5754:8", "const:4:8"]]
+ 00bd5754 ["CALLIND", null, ["register:0:8"]]
- 00bd476c ["INT_ADD", "register:40f0:8", ["const:bd476c:8", "const:4:8"]]
- 00bd476c ["CALL", null, ["callee:00c5ee20:8"]]
+ 00bd5760 ["INT_ADD", "register:40f0:8", ["const:bd5760:8", "const:4:8"]]
+ 00bd5760 ["CALL", null, ["callee:00c5ee20:8"]]
~~~


<a id="compare-17405fcc3fedb08bca54cb8831545782"></a>

### [`00bd484c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd484c.md) → [`00bd5840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5840.md) _ZN8firebase4auth19SetImplFromLocalRefEP7_JNIEnvP8_jobjectPPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd50.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ed20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed20.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd487c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd487c ["INT_ADD", "register:40f0:8", ["const:bd487c:8", "const:4:8"]]
- 00bd487c ["CALLIND", null, ["register:0:8"]]
+ 00bd5870 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd5870 ["INT_ADD", "register:40f0:8", ["const:bd5870:8", "const:4:8"]]
+ 00bd5870 ["CALLIND", null, ["register:0:8"]]
- 00bd4898 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd4898 ["INT_ADD", "register:40f0:8", ["const:bd4898:8", "const:4:8"]]
- 00bd4898 ["CALLIND", null, ["register:0:8"]]
+ 00bd588c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd588c ["INT_ADD", "register:40f0:8", ["const:bd588c:8", "const:4:8"]]
+ 00bd588c ["CALLIND", null, ["register:0:8"]]
- 00bd48b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd48b0 ["INT_ADD", "register:40f0:8", ["const:bd48b0:8", "const:4:8"]]
- 00bd48b0 ["CALLIND", null, ["register:0:8"]]
+ 00bd58a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd58a4 ["INT_ADD", "register:40f0:8", ["const:bd58a4:8", "const:4:8"]]
+ 00bd58a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f355cd5811ace8eb167e888a7eb15efa"></a>

### [`00bd4e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4e04.md) → [`00bd5df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5df8.md) _ZN8firebase4auth18AdditionalUserInfoaSEOS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5de40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de40.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md) [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md)
- 新版 呼出元 1件 [`00c5ee10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee10.md) · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5cec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cec0.md) [`00c5ee00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd4e44 ["INT_ADD", "register:40f0:8", ["const:bd4e44:8", "const:4:8"]]
- 00bd4e44 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bd5e38 ["INT_ADD", "register:40f0:8", ["const:bd5e38:8", "const:4:8"]]
+ 00bd5e38 ["CALL", null, ["callee:00c58f50:8"]]
- 00bd4e94 ["INT_ADD", "register:40f0:8", ["const:bd4e94:8", "const:4:8"]]
- 00bd4e94 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bd5e88 ["INT_ADD", "register:40f0:8", ["const:bd5e88:8", "const:4:8"]]
+ 00bd5e88 ["CALL", null, ["callee:00c58f50:8"]]
- 00bd4ec4 ["INT_ADD", "register:40f0:8", ["const:bd4ec4:8", "const:4:8"]]
- 00bd4ec4 ["CALL", null, ["callee:00c5cec0:8"]]
+ 00bd5eb8 ["INT_ADD", "register:40f0:8", ["const:bd5eb8:8", "const:4:8"]]
+ 00bd5eb8 ["CALL", null, ["callee:00c5cec0:8"]]
~~~


<a id="compare-10a896bee533c87a103c8ba32c38cf1c"></a>

### [`00bd930c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd930c.md) → [`00bda300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda300.md) _ZN8firebase4auth10CredentialC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ee00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd9330 ["INT_ADD", "register:40f0:8", ["const:bd9330:8", "const:4:8"]]
- 00bd9330 ["CALL", null, ["callee:00c5ee00:8"]]
+ 00bda324 ["INT_ADD", "register:40f0:8", ["const:bda324:8", "const:4:8"]]
+ 00bda324 ["CALL", null, ["callee:00c5ee00:8"]]
~~~


<a id="compare-5d302a2b40d00b7e8ebd460b8bf7ae55"></a>

### [`00bd97b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd97b0.md) → [`00bda7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda7a4.md) _ZN8firebase4auth19PhoneAuthCredentialaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5df00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df00.md) · 呼出先 2件 [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md)
- 新版 呼出元 1件 [`00c5eed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eed0.md) · 呼出先 2件 [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) [`00c5ee00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bd97c4 ["INT_ADD", "register:40f0:8", ["const:bd97c4:8", "const:4:8"]]
- 00bd97c4 ["CALL", null, ["callee:00c5ee00:8"]]
+ 00bda7b8 ["INT_ADD", "register:40f0:8", ["const:bda7b8:8", "const:4:8"]]
+ 00bda7b8 ["CALL", null, ["callee:00c5ee00:8"]]
- 00bd97f0 ["INT_ADD", "register:40f0:8", ["const:bd97f0:8", "const:4:8"]]
- 00bd97f0 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bda7e4 ["INT_ADD", "register:40f0:8", ["const:bda7e4:8", "const:4:8"]]
+ 00bda7e4 ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-c38cc77f71a3c6481e1b0b850330b628"></a>

### [`00bda5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda5d0.md) → [`00bdb5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb5c4.md) _ZN8firebase4auth22GameCenterAuthProvider23GetCredentialLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 8件 [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0087c3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c3c0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bda5f4 ["INT_ADD", "register:40f0:8", ["const:bda5f4:8", "const:4:8"]]
- 00bda5f4 ["CALL", null, ["callee:00c5ebf0:8"]]
+ 00bdb5e8 ["INT_ADD", "register:40f0:8", ["const:bdb5e8:8", "const:4:8"]]
+ 00bdb5e8 ["CALL", null, ["callee:00c5ebf0:8"]]
- 00bda604 ["INT_ADD", "register:40f0:8", ["const:bda604:8", "const:4:8"]]
- 00bda604 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bdb5f8 ["INT_ADD", "register:40f0:8", ["const:bdb5f8:8", "const:4:8"]]
+ 00bdb5f8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bda610 ["INT_ADD", "register:40f0:8", ["const:bda610:8", "const:4:8"]]
- 00bda610 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bdb604 ["INT_ADD", "register:40f0:8", ["const:bdb604:8", "const:4:8"]]
+ 00bdb604 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-9af9222e24b1ee2af94c0f3b3a80c1f3"></a>

### [`00bda714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda714.md) → [`00bdb708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb708.md) _ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bda728 ["INT_ADD", "register:40f0:8", ["const:bda728:8", "const:4:8"]]
- 00bda728 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bdb71c ["INT_ADD", "register:40f0:8", ["const:bdb71c:8", "const:4:8"]]
+ 00bdb71c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-e07d4cfa9d68599085d2427b1d5c2f3f"></a>

### [`00bda7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda7ac.md) → [`00bdb7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb7a0.md) _ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenC1ERKS2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5df10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5eee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bda7c4 ["INT_ADD", "register:40f0:8", ["const:bda7c4:8", "const:4:8"]]
- 00bda7c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bdb7b8 ["INT_ADD", "register:40f0:8", ["const:bdb7b8:8", "const:4:8"]]
+ 00bdb7b8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-8c36bb19d9fb383b284caafda8394f3a"></a>

### [`00bda888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda888.md) → [`00bdb87c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb87c.md) _ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenaSERKS2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5df10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5eee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bda8a4 ["INT_ADD", "register:40f0:8", ["const:bda8a4:8", "const:4:8"]]
- 00bda8a4 ["CALL", null, ["callee:00c5eee0:8"]]
+ 00bdb898 ["INT_ADD", "register:40f0:8", ["const:bdb898:8", "const:4:8"]]
+ 00bdb898 ["CALL", null, ["callee:00c5eee0:8"]]
~~~


<a id="compare-214d7c0759ade5a0e6c69252566cf22c"></a>

### [`00bdb37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb37c.md) → [`00bdc370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdc370.md) _ZN8firebase4auth20JniAuthPhoneListener26nativeOnVerificationFailedEP7_JNIEnvP8_jobjectlP8_jstring

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdb3a4 ["INT_ADD", "register:40f0:8", ["const:bdb3a4:8", "const:4:8"]]
- 00bdb3a4 ["CALL", null, ["callee:00c5bfc0:8"]]
+ 00bdc398 ["INT_ADD", "register:40f0:8", ["const:bdc398:8", "const:4:8"]]
+ 00bdc398 ["CALL", null, ["callee:00c5bfc0:8"]]
- 00bdb3b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdb3b8 ["INT_ADD", "register:40f0:8", ["const:bdb3b8:8", "const:4:8"]]
- 00bdb3b8 ["CALLIND", null, ["register:0:8"]]
+ 00bdc3ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdc3ac ["INT_ADD", "register:40f0:8", ["const:bdc3ac:8", "const:4:8"]]
+ 00bdc3ac ["CALLIND", null, ["register:0:8"]]
- 00bdb3c8 ["INT_ADD", "register:40f0:8", ["const:bdb3c8:8", "const:4:8"]]
- 00bdb3c8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bdc3bc ["INT_ADD", "register:40f0:8", ["const:bdc3bc:8", "const:4:8"]]
+ 00bdc3bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a039ce53815237633bc595daa222f2af"></a>

### [`00bdb58c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb58c.md) → [`00bdc580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdc580.md) _ZN8firebase4auth20JniAuthPhoneListener32nativeOnCodeAutoRetrievalTimeOutEP7_JNIEnvP8_jobjectlP8_jstring

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c430.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdb5b4 ["INT_ADD", "register:40f0:8", ["const:bdb5b4:8", "const:4:8"]]
- 00bdb5b4 ["CALL", null, ["callee:00c5c430:8"]]
+ 00bdc5a8 ["INT_ADD", "register:40f0:8", ["const:bdc5a8:8", "const:4:8"]]
+ 00bdc5a8 ["CALL", null, ["callee:00c5c430:8"]]
- 00bdb5c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdb5c8 ["INT_ADD", "register:40f0:8", ["const:bdb5c8:8", "const:4:8"]]
- 00bdb5c8 ["CALLIND", null, ["register:0:8"]]
+ 00bdc5bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdc5bc ["INT_ADD", "register:40f0:8", ["const:bdc5bc:8", "const:4:8"]]
+ 00bdc5bc ["CALLIND", null, ["register:0:8"]]
- 00bdb5d8 ["INT_ADD", "register:40f0:8", ["const:bdb5d8:8", "const:4:8"]]
- 00bdb5d8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bdc5cc ["INT_ADD", "register:40f0:8", ["const:bdc5cc:8", "const:4:8"]]
+ 00bdc5cc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6a223280433aead69cb8dcd5a4997bdf"></a>

### [`00bdb8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb8c4.md) → [`00bdc8b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdc8b8.md) _ZN8firebase4auth22FederatedOAuthProvider15SetProviderDataERKNS0_26FederatedOAuthProviderDataE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0053b7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b7bc.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5d100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d100.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0053badc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053badc.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) [`00c5e0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdb8fc ["INT_ADD", "register:40f0:8", ["const:bdb8fc:8", "const:4:8"]]
- 00bdb8fc ["CALL", null, ["callee:00c5c150:8"]]
+ 00bdc8f0 ["INT_ADD", "register:40f0:8", ["const:bdc8f0:8", "const:4:8"]]
+ 00bdc8f0 ["CALL", null, ["callee:00c5c150:8"]]
- 00bdb908 ["INT_ADD", "register:40f0:8", ["const:bdb908:8", "const:4:8"]]
- 00bdb908 ["CALL", null, ["callee:00c5e0d0:8"]]
+ 00bdc8fc ["INT_ADD", "register:40f0:8", ["const:bdc8fc:8", "const:4:8"]]
+ 00bdc8fc ["CALL", null, ["callee:00c5e0d0:8"]]
~~~


<a id="compare-063baeaedfe67d4baa5b499c8b68bf20"></a>

### [`00bdc4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc4c4.md) → [`00bdd4b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd4b8.md) _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINS_4auth10CredentialEEEvPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bda4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda4ac.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ded0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ded0.md)
- 新版 呼出元 1件 [`00bdb4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb4a0.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5eea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdc4d8 ["INT_ADD", "register:40f0:8", ["const:bdc4d8:8", "const:4:8"]]
- 00bdc4d8 ["CALL", null, ["callee:00c5eea0:8"]]
+ 00bdd4cc ["INT_ADD", "register:40f0:8", ["const:bdd4cc:8", "const:4:8"]]
+ 00bdd4cc ["CALL", null, ["callee:00c5eea0:8"]]
~~~


<a id="compare-a338835bb59fc56916da40a1a2d8f167"></a>

### [`00bdc5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc5f8.md) → [`00bdd5ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd5ec.md) _ZN8firebase6FutureINS_4auth10CredentialEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5df20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df20.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5eef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eef0.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdc618 ["INT_ADD", "register:40f0:8", ["const:bdc618:8", "const:4:8"]]
- 00bdc618 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bdd60c ["INT_ADD", "register:40f0:8", ["const:bdd60c:8", "const:4:8"]]
+ 00bdd60c ["CALL", null, ["callee:00c5bd10:8"]]
- 00bdc62c ["INT_ADD", "register:40f0:8", ["const:bdc62c:8", "const:4:8"]]
- 00bdc62c ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bdd620 ["INT_ADD", "register:40f0:8", ["const:bdd620:8", "const:4:8"]]
+ 00bdd620 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bdc640 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdc640 ["INT_ADD", "register:40f0:8", ["const:bdc640:8", "const:4:8"]]
- 00bdc640 ["CALLIND", null, ["register:0:8"]]
+ 00bdd634 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdd634 ["INT_ADD", "register:40f0:8", ["const:bdd634:8", "const:4:8"]]
+ 00bdd634 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4b7107d2b18aecd9b21428a4fa01344d"></a>

### [`00bdc698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc698.md) → [`00bdd68c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd68c.md) _ZN8firebase4auth10AuthResultC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dec0.md) · 呼出先 3件 [`00c5ab10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab10.md) [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md) [`00c5def0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5def0.md)
- 新版 呼出元 1件 [`00c5ee90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee90.md) · 呼出先 3件 [`00c5bae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bae0.md) [`00c5ee00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee00.md) [`00c5eec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eec0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdc6b0 ["INT_ADD", "register:40f0:8", ["const:bdc6b0:8", "const:4:8"]]
- 00bdc6b0 ["CALL", null, ["callee:00c5eec0:8"]]
+ 00bdd6a4 ["INT_ADD", "register:40f0:8", ["const:bdd6a4:8", "const:4:8"]]
+ 00bdd6a4 ["CALL", null, ["callee:00c5eec0:8"]]
- 00bdc6d4 ["INT_ADD", "register:40f0:8", ["const:bdc6d4:8", "const:4:8"]]
- 00bdc6d4 ["CALL", null, ["callee:00c5ee00:8"]]
+ 00bdd6c8 ["INT_ADD", "register:40f0:8", ["const:bdd6c8:8", "const:4:8"]]
+ 00bdd6c8 ["CALL", null, ["callee:00c5ee00:8"]]
- 00bdc6e0 ["INT_ADD", "register:40f0:8", ["const:bdc6e0:8", "const:4:8"]]
- 00bdc6e0 ["CALL", null, ["callee:00c5bae0:8"]]
+ 00bdd6d4 ["INT_ADD", "register:40f0:8", ["const:bdd6d4:8", "const:4:8"]]
+ 00bdd6d4 ["CALL", null, ["callee:00c5bae0:8"]]
~~~


<a id="compare-aa11fa57cf2a042ba5d6cbf34e03f221"></a>

### [`00bdc768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc768.md) → [`00bdd75c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd75c.md) _ZN8firebase4auth18AdditionalUserInfoC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5def0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5def0.md) · 呼出先 3件 [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md) [`00c5df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df40.md)
- 新版 呼出元 1件 [`00c5eec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eec0.md) · 呼出先 3件 [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md) [`00c5ee00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee00.md) [`00c5ef10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdc788 ["INT_ADD", "register:40f0:8", ["const:bdc788:8", "const:4:8"]]
- 00bdc788 ["CALL", null, ["callee:00c5c650:8"]]
+ 00bdd77c ["INT_ADD", "register:40f0:8", ["const:bdd77c:8", "const:4:8"]]
+ 00bdd77c ["CALL", null, ["callee:00c5c650:8"]]
- 00bdc798 ["INT_ADD", "register:40f0:8", ["const:bdc798:8", "const:4:8"]]
- 00bdc798 ["CALL", null, ["callee:00c5c650:8"]]
+ 00bdd78c ["INT_ADD", "register:40f0:8", ["const:bdd78c:8", "const:4:8"]]
+ 00bdd78c ["CALL", null, ["callee:00c5c650:8"]]
- 00bdc7e0 ["INT_ADD", "register:40f0:8", ["const:bdc7e0:8", "const:4:8"]]
- 00bdc7e0 ["CALL", null, ["callee:00c5ef10:8"]]
+ 00bdd7d4 ["INT_ADD", "register:40f0:8", ["const:bdd7d4:8", "const:4:8"]]
+ 00bdd7d4 ["CALL", null, ["callee:00c5ef10:8"]]
~~~


<a id="compare-35556dddcf11f3179c02b60c18819f8f"></a>

### [`00bdc8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc8d8.md) → [`00bdd8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd8cc.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE30__emp

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df40.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5df30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df30.md)
- 新版 呼出元 1件 [`00c5ef10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef10.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b990.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md) [`00c5ef00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdc910 ["INT_ADD", "register:40f0:8", ["const:bdc910:8", "const:4:8"]]
- 00bdc910 ["CALL", null, ["callee:00c5ef00:8"]]
+ 00bdd904 ["INT_ADD", "register:40f0:8", ["const:bdd904:8", "const:4:8"]]
+ 00bdd904 ["CALL", null, ["callee:00c5ef00:8"]]
- 00bdc924 ["INT_ADD", "register:40f0:8", ["const:bdc924:8", "const:4:8"]]
- 00bdc924 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bdd918 ["INT_ADD", "register:40f0:8", ["const:bdd918:8", "const:4:8"]]
+ 00bdd918 ["CALL", null, ["callee:00c58f30:8"]]
- 00bdc93c ["INT_ADD", "register:40f0:8", ["const:bdc93c:8", "const:4:8"]]
- 00bdc93c ["CALL", null, ["callee:00c5b990:8"]]
+ 00bdd930 ["INT_ADD", "register:40f0:8", ["const:bdd930:8", "const:4:8"]]
+ 00bdd930 ["CALL", null, ["callee:00c5b990:8"]]
~~~


<a id="compare-5dfa2d220b1bfb14bdc6c4ad06230f2c"></a>

### [`00bdc9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc9ec.md) → [`00bdd9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd9e0.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE12__fin

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5df30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df30.md) · 呼出先 1件 [`00c5b670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b670.md)
- 新版 呼出元 1件 [`00c5ef00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef00.md) · 呼出先 1件 [`00c5c640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c640.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdca30 ["INT_ADD", "register:40f0:8", ["const:bdca30:8", "const:4:8"]]
- 00bdca30 ["CALL", null, ["callee:00c5c640:8"]]
+ 00bdda24 ["INT_ADD", "register:40f0:8", ["const:bdda24:8", "const:4:8"]]
+ 00bdda24 ["CALL", null, ["callee:00c5c640:8"]]
- 00bdca68 ["INT_ADD", "register:40f0:8", ["const:bdca68:8", "const:4:8"]]
- 00bdca68 ["CALL", null, ["callee:00c5c640:8"]]
+ 00bdda5c ["INT_ADD", "register:40f0:8", ["const:bdda5c:8", "const:4:8"]]
+ 00bdda5c ["CALL", null, ["callee:00c5c640:8"]]
- 00bdcaac ["INT_ADD", "register:40f0:8", ["const:bdcaac:8", "const:4:8"]]
- 00bdcaac ["CALL", null, ["callee:00c5c640:8"]]
+ 00bddaa0 ["INT_ADD", "register:40f0:8", ["const:bddaa0:8", "const:4:8"]]
+ 00bddaa0 ["CALL", null, ["callee:00c5c640:8"]]
~~~


<a id="compare-1cd584640bd208e1bef1166de9f36055"></a>

### [`00bdcc18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcc18.md) → [`00bddc0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bddc0c.md) _ZN8firebase4auth35FederatedAuthProviderFutureCallbackINS0_10AuthResultEEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bdb930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb930.md) [`00bdbf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbf14.md) [`00bdc1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc1ec.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5ddf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddf0.md)
- 新版 呼出元 3件 [`00bdc924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdc924.md) [`00bdcf08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdcf08.md) [`00bdd1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd1e0.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5edc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5edc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdcc50 ["INT_ADD", "register:40f0:8", ["const:bdcc50:8", "const:4:8"]]
- 00bdcc50 ["CALL", null, ["callee:00c5edc0:8"]]
+ 00bddc44 ["INT_ADD", "register:40f0:8", ["const:bddc44:8", "const:4:8"]]
+ 00bddc44 ["CALL", null, ["callee:00c5edc0:8"]]
- 00bdcc70 ["INT_ADD", "register:40f0:8", ["const:bdcc70:8", "const:4:8"]]
- 00bdcc70 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bddc64 ["INT_ADD", "register:40f0:8", ["const:bddc64:8", "const:4:8"]]
+ 00bddc64 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bdcc98 ["INT_ADD", "register:40f0:8", ["const:bdcc98:8", "const:4:8"]]
- 00bdcc98 ["CALL", null, ["callee:00c5ee60:8"]]
+ 00bddc8c ["INT_ADD", "register:40f0:8", ["const:bddc8c:8", "const:4:8"]]
+ 00bddc8c ["CALL", null, ["callee:00c5ee60:8"]]
~~~


<a id="compare-6c6f591dd40105257deca8b65aa45f8f"></a>

### [`00bdce5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdce5c.md) → [`00bdde50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdde50.md) _ZN8firebase4auth19PhoneAuthCredentialC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5df00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df00.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5eed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eed0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdce80 ["INT_ADD", "register:40f0:8", ["const:bdce80:8", "const:4:8"]]
- 00bdce80 ["CALL", null, ["callee:00c5eed0:8"]]
+ 00bdde74 ["INT_ADD", "register:40f0:8", ["const:bdde74:8", "const:4:8"]]
+ 00bdde74 ["CALL", null, ["callee:00c5eed0:8"]]
~~~


<a id="compare-e0067e48176610c1484b38b86d833714"></a>

### [`00bdeb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bdeb14.md) → [`00bdfb08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdf/00bdfb08.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEEbP7_JNIEnvPNS_26Refere

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5df80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df80.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dde0.md)
- 新版 呼出元 1件 [`00c5ef50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef50.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5edb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5edb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bdeb48 ["INT_ADD", "register:40f0:8", ["const:bdeb48:8", "const:4:8"]]
- 00bdeb48 ["CALL", null, ["callee:00c5edb0:8"]]
+ 00bdfb3c ["INT_ADD", "register:40f0:8", ["const:bdfb3c:8", "const:4:8"]]
+ 00bdfb3c ["CALL", null, ["callee:00c5edb0:8"]]
- 00bdeb5c ["INT_ADD", "register:40f0:8", ["const:bdeb5c:8", "const:4:8"]]
- 00bdeb5c ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bdfb50 ["INT_ADD", "register:40f0:8", ["const:bdfb50:8", "const:4:8"]]
+ 00bdfb50 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bdeb88 ["INT_ADD", "register:40f0:8", ["const:bdeb88:8", "const:4:8"]]
- 00bdeb88 ["CALL", null, ["callee:00c5ef30:8"]]
+ 00bdfb7c ["INT_ADD", "register:40f0:8", ["const:bdfb7c:8", "const:4:8"]]
+ 00bdfb7c ["CALL", null, ["callee:00c5ef30:8"]]
~~~


<a id="compare-42c3800e4601220ae371337adc1b81f1"></a>

### [`00be1450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1450.md) → [`00be2444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2444.md) _ZN8firebase4auth14FutureCallbackINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEEvP7_JNIEnvP8_jobjectNS_4util12FutureR

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bde8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde8b4.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5ddf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddf0.md)
- 新版 呼出元 1件 [`00bdf8a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdf/00bdf8a8.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5edc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5edc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1488 ["INT_ADD", "register:40f0:8", ["const:be1488:8", "const:4:8"]]
- 00be1488 ["CALL", null, ["callee:00c5edc0:8"]]
+ 00be247c ["INT_ADD", "register:40f0:8", ["const:be247c:8", "const:4:8"]]
+ 00be247c ["CALL", null, ["callee:00c5edc0:8"]]
- 00be14a0 ["INT_ADD", "register:40f0:8", ["const:be14a0:8", "const:4:8"]]
- 00be14a0 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00be2494 ["INT_ADD", "register:40f0:8", ["const:be2494:8", "const:4:8"]]
+ 00be2494 ["CALL", null, ["callee:00c5bea0:8"]]
- 00be14c8 ["INT_ADD", "register:40f0:8", ["const:be14c8:8", "const:4:8"]]
- 00be14c8 ["CALL", null, ["callee:00c5ef20:8"]]
+ 00be24bc ["INT_ADD", "register:40f0:8", ["const:be24bc:8", "const:4:8"]]
+ 00be24bc ["CALL", null, ["callee:00c5ef20:8"]]
~~~


<a id="compare-cde347c17d95ab964e7f34870f6c28fe"></a>

### [`00be17c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be17c4.md) → [`00be27b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be27b8.md) _ZNSt6__ndk16vectorIN8firebase4auth17UserInfoInterfaceENS_9allocatorIS3_EEE21__push_back_slow_pathIRKS3_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5df90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df90.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md) [`00c5df70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df70.md)
- 新版 呼出元 1件 [`00c5ef60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef60.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md) [`00c5ef40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1860 ["INT_ADD", "register:40f0:8", ["const:be1860:8", "const:4:8"]]
- 00be1860 ["CALL", null, ["callee:00c58f30:8"]]
+ 00be2854 ["INT_ADD", "register:40f0:8", ["const:be2854:8", "const:4:8"]]
+ 00be2854 ["CALL", null, ["callee:00c58f30:8"]]
- 00be1878 ["INT_ADD", "register:40f0:8", ["const:be1878:8", "const:4:8"]]
- 00be1878 ["CALL", null, ["callee:00c5ef40:8"]]
+ 00be286c ["INT_ADD", "register:40f0:8", ["const:be286c:8", "const:4:8"]]
+ 00be286c ["CALL", null, ["callee:00c5ef40:8"]]
- 00be1898 ["INT_ADD", "register:40f0:8", ["const:be1898:8", "const:4:8"]]
- 00be1898 ["CALL", null, ["callee:00c5ef40:8"]]
+ 00be288c ["INT_ADD", "register:40f0:8", ["const:be288c:8", "const:4:8"]]
+ 00be288c ["CALL", null, ["callee:00c5ef40:8"]]
~~~


<a id="compare-fe1427b04caa18c4fed021fdaa9828c6"></a>

### [`00be1974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1974.md) → [`00be2968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2968.md) _ZNK8firebase4auth4User18GetTokenLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1994 ["INT_ADD", "register:40f0:8", ["const:be1994:8", "const:4:8"]]
- 00be1994 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2988 ["INT_ADD", "register:40f0:8", ["const:be2988:8", "const:4:8"]]
+ 00be2988 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be19a0 ["INT_ADD", "register:40f0:8", ["const:be19a0:8", "const:4:8"]]
- 00be19a0 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2994 ["INT_ADD", "register:40f0:8", ["const:be2994:8", "const:4:8"]]
+ 00be2994 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be19ac ["INT_ADD", "register:40f0:8", ["const:be19ac:8", "const:4:8"]]
- 00be19ac ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be29a0 ["INT_ADD", "register:40f0:8", ["const:be29a0:8", "const:4:8"]]
+ 00be29a0 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-7cbf81329d57be976d9ff714bbbb2e6c"></a>

### [`00be1a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1a04.md) → [`00be29f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be29f8.md) _ZNK8firebase4auth4User24UpdatePasswordLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1a24 ["INT_ADD", "register:40f0:8", ["const:be1a24:8", "const:4:8"]]
- 00be1a24 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2a18 ["INT_ADD", "register:40f0:8", ["const:be2a18:8", "const:4:8"]]
+ 00be2a18 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1a30 ["INT_ADD", "register:40f0:8", ["const:be1a30:8", "const:4:8"]]
- 00be1a30 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2a24 ["INT_ADD", "register:40f0:8", ["const:be2a24:8", "const:4:8"]]
+ 00be2a24 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1a3c ["INT_ADD", "register:40f0:8", ["const:be1a3c:8", "const:4:8"]]
- 00be1a3c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2a30 ["INT_ADD", "register:40f0:8", ["const:be2a30:8", "const:4:8"]]
+ 00be2a30 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-77f227200de596e61ccd2cbd6d15e44e"></a>

### [`00be1a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1a94.md) → [`00be2a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2a88.md) _ZNK8firebase4auth4User28LinkWithCredentialLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1ab4 ["INT_ADD", "register:40f0:8", ["const:be1ab4:8", "const:4:8"]]
- 00be1ab4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2aa8 ["INT_ADD", "register:40f0:8", ["const:be2aa8:8", "const:4:8"]]
+ 00be2aa8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1ac0 ["INT_ADD", "register:40f0:8", ["const:be1ac0:8", "const:4:8"]]
- 00be1ac0 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2ab4 ["INT_ADD", "register:40f0:8", ["const:be2ab4:8", "const:4:8"]]
+ 00be2ab4 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1acc ["INT_ADD", "register:40f0:8", ["const:be1acc:8", "const:4:8"]]
- 00be1acc ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2ac0 ["INT_ADD", "register:40f0:8", ["const:be2ac0:8", "const:4:8"]]
+ 00be2ac0 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-442ce0cc2fb1453f9d8ee3b63fa928f7"></a>

### [`00be1b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1b24.md) → [`00be2b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2b18.md) _ZNK8firebase4auth4User24ReauthenticateLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1b44 ["INT_ADD", "register:40f0:8", ["const:be1b44:8", "const:4:8"]]
- 00be1b44 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2b38 ["INT_ADD", "register:40f0:8", ["const:be2b38:8", "const:4:8"]]
+ 00be2b38 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1b50 ["INT_ADD", "register:40f0:8", ["const:be1b50:8", "const:4:8"]]
- 00be1b50 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2b44 ["INT_ADD", "register:40f0:8", ["const:be2b44:8", "const:4:8"]]
+ 00be2b44 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1b5c ["INT_ADD", "register:40f0:8", ["const:be1b5c:8", "const:4:8"]]
- 00be1b5c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2b50 ["INT_ADD", "register:40f0:8", ["const:be2b50:8", "const:4:8"]]
+ 00be2b50 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-0ca37f6bd0e3d2313b09651a12b4d990"></a>

### [`00be1bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1bb4.md) → [`00be2ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2ba8.md) _ZNK8firebase4auth4User39ReauthenticateAndRetrieveDataLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1bd4 ["INT_ADD", "register:40f0:8", ["const:be1bd4:8", "const:4:8"]]
- 00be1bd4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2bc8 ["INT_ADD", "register:40f0:8", ["const:be2bc8:8", "const:4:8"]]
+ 00be2bc8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1be0 ["INT_ADD", "register:40f0:8", ["const:be1be0:8", "const:4:8"]]
- 00be1be0 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2bd4 ["INT_ADD", "register:40f0:8", ["const:be2bd4:8", "const:4:8"]]
+ 00be2bd4 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1bec ["INT_ADD", "register:40f0:8", ["const:be1bec:8", "const:4:8"]]
- 00be1bec ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2be0 ["INT_ADD", "register:40f0:8", ["const:be2be0:8", "const:4:8"]]
+ 00be2be0 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-5d816dc2b1cfe92cef064a563f36ee4b"></a>

### [`00be1c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1c44.md) → [`00be2c38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2c38.md) _ZNK8firebase4auth4User31SendEmailVerificationLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1c64 ["INT_ADD", "register:40f0:8", ["const:be1c64:8", "const:4:8"]]
- 00be1c64 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2c58 ["INT_ADD", "register:40f0:8", ["const:be2c58:8", "const:4:8"]]
+ 00be2c58 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1c70 ["INT_ADD", "register:40f0:8", ["const:be1c70:8", "const:4:8"]]
- 00be1c70 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2c64 ["INT_ADD", "register:40f0:8", ["const:be2c64:8", "const:4:8"]]
+ 00be2c64 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1c7c ["INT_ADD", "register:40f0:8", ["const:be1c7c:8", "const:4:8"]]
- 00be1c7c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2c70 ["INT_ADD", "register:40f0:8", ["const:be2c70:8", "const:4:8"]]
+ 00be2c70 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-fbffecd14823dce18d269f5070be7c2c"></a>

### [`00be1cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1cd4.md) → [`00be2cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2cc8.md) _ZNK8firebase4auth4User50SendEmailVerificationBeforeUpdatingEmailLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1cf4 ["INT_ADD", "register:40f0:8", ["const:be1cf4:8", "const:4:8"]]
- 00be1cf4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2ce8 ["INT_ADD", "register:40f0:8", ["const:be2ce8:8", "const:4:8"]]
+ 00be2ce8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1d00 ["INT_ADD", "register:40f0:8", ["const:be1d00:8", "const:4:8"]]
- 00be1d00 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2cf4 ["INT_ADD", "register:40f0:8", ["const:be2cf4:8", "const:4:8"]]
+ 00be2cf4 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1d0c ["INT_ADD", "register:40f0:8", ["const:be1d0c:8", "const:4:8"]]
- 00be1d0c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2d00 ["INT_ADD", "register:40f0:8", ["const:be2d00:8", "const:4:8"]]
+ 00be2d00 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-0d94217905dba68d41554931dade4719"></a>

### [`00be1d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1d64.md) → [`00be2d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2d58.md) _ZNK8firebase4auth4User16UnlinkLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1d84 ["INT_ADD", "register:40f0:8", ["const:be1d84:8", "const:4:8"]]
- 00be1d84 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2d78 ["INT_ADD", "register:40f0:8", ["const:be2d78:8", "const:4:8"]]
+ 00be2d78 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1d90 ["INT_ADD", "register:40f0:8", ["const:be1d90:8", "const:4:8"]]
- 00be1d90 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2d84 ["INT_ADD", "register:40f0:8", ["const:be2d84:8", "const:4:8"]]
+ 00be2d84 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1d9c ["INT_ADD", "register:40f0:8", ["const:be1d9c:8", "const:4:8"]]
- 00be1d9c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2d90 ["INT_ADD", "register:40f0:8", ["const:be2d90:8", "const:4:8"]]
+ 00be2d90 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-7612337417358fa69c04e92b201827cd"></a>

### [`00be1df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1df4.md) → [`00be2de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2de8.md) _ZNK8firebase4auth4User27UpdateUserProfileLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1e14 ["INT_ADD", "register:40f0:8", ["const:be1e14:8", "const:4:8"]]
- 00be1e14 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2e08 ["INT_ADD", "register:40f0:8", ["const:be2e08:8", "const:4:8"]]
+ 00be2e08 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1e20 ["INT_ADD", "register:40f0:8", ["const:be1e20:8", "const:4:8"]]
- 00be1e20 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2e14 ["INT_ADD", "register:40f0:8", ["const:be2e14:8", "const:4:8"]]
+ 00be2e14 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1e2c ["INT_ADD", "register:40f0:8", ["const:be1e2c:8", "const:4:8"]]
- 00be1e2c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2e20 ["INT_ADD", "register:40f0:8", ["const:be2e20:8", "const:4:8"]]
+ 00be2e20 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-ce6c9fc4429d52bd00b5e933a11269e7"></a>

### [`00be1e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1e84.md) → [`00be2e78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2e78.md) _ZNK8firebase4auth4User16ReloadLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1ea4 ["INT_ADD", "register:40f0:8", ["const:be1ea4:8", "const:4:8"]]
- 00be1ea4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2e98 ["INT_ADD", "register:40f0:8", ["const:be2e98:8", "const:4:8"]]
+ 00be2e98 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1eb0 ["INT_ADD", "register:40f0:8", ["const:be1eb0:8", "const:4:8"]]
- 00be1eb0 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2ea4 ["INT_ADD", "register:40f0:8", ["const:be2ea4:8", "const:4:8"]]
+ 00be2ea4 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1ebc ["INT_ADD", "register:40f0:8", ["const:be1ebc:8", "const:4:8"]]
- 00be1ebc ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2eb0 ["INT_ADD", "register:40f0:8", ["const:be2eb0:8", "const:4:8"]]
+ 00be2eb0 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-656d0fa4eacd1b0582e6fec708fdca85"></a>

### [`00be1f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1f14.md) → [`00be2f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2f08.md) _ZNK8firebase4auth4User16DeleteLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1f34 ["INT_ADD", "register:40f0:8", ["const:be1f34:8", "const:4:8"]]
- 00be1f34 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2f28 ["INT_ADD", "register:40f0:8", ["const:be2f28:8", "const:4:8"]]
+ 00be2f28 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1f40 ["INT_ADD", "register:40f0:8", ["const:be1f40:8", "const:4:8"]]
- 00be1f40 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2f34 ["INT_ADD", "register:40f0:8", ["const:be2f34:8", "const:4:8"]]
+ 00be2f34 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1f4c ["INT_ADD", "register:40f0:8", ["const:be1f4c:8", "const:4:8"]]
- 00be1f4c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2f40 ["INT_ADD", "register:40f0:8", ["const:be2f40:8", "const:4:8"]]
+ 00be2f40 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-26bdade61fe78ed36089ac17384ac832"></a>

### [`00be1fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1fa4.md) → [`00be2f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2f98.md) _ZNK8firebase4auth4User37UpdatePhoneNumberCredentialLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be1fc4 ["INT_ADD", "register:40f0:8", ["const:be1fc4:8", "const:4:8"]]
- 00be1fc4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2fb8 ["INT_ADD", "register:40f0:8", ["const:be2fb8:8", "const:4:8"]]
+ 00be2fb8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1fd0 ["INT_ADD", "register:40f0:8", ["const:be1fd0:8", "const:4:8"]]
- 00be1fd0 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00be2fc4 ["INT_ADD", "register:40f0:8", ["const:be2fc4:8", "const:4:8"]]
+ 00be2fc4 ["CALL", null, ["callee:00c5bab0:8"]]
- 00be1fdc ["INT_ADD", "register:40f0:8", ["const:be1fdc:8", "const:4:8"]]
- 00be1fdc ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be2fd0 ["INT_ADD", "register:40f0:8", ["const:be2fd0:8", "const:4:8"]]
+ 00be2fd0 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-864c5412ae9e534cc10169b5b6222b58"></a>

### [`00be2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be2/00be2034.md) → [`00be3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be3/00be3028.md) _ZN8firebase4auth4User18GetTokenThreadSafeEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab40.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0087c3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c3c0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be2064 ["INT_ADD", "register:40f0:8", ["const:be2064:8", "const:4:8"]]
- 00be2064 ["CALL", null, ["callee:00c5bb10:8"]]
+ 00be3058 ["INT_ADD", "register:40f0:8", ["const:be3058:8", "const:4:8"]]
+ 00be3058 ["CALL", null, ["callee:00c5bb10:8"]]
- 00be206c ["INT_ADD", "register:40f0:8", ["const:be206c:8", "const:4:8"]]
- 00be206c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be3060 ["INT_ADD", "register:40f0:8", ["const:be3060:8", "const:4:8"]]
+ 00be3060 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be2088 ["COPY", "register:0:8", ["register:4040:8"]]
- 00be2088 ["INT_ADD", "register:40f0:8", ["const:be2088:8", "const:4:8"]]
- 00be2088 ["CALLIND", null, ["register:0:8"]]
+ 00be307c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00be307c ["INT_ADD", "register:40f0:8", ["const:be307c:8", "const:4:8"]]
+ 00be307c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6d5282dbbaab8f437c5b3496ed19f438"></a>

### [`00be227c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be2/00be227c.md) → [`00be3270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be3/00be3270.md) _ZN8firebase4auth17UserInfoInterfaceD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ec20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be228c ["INT_ADD", "register:40f0:8", ["const:be228c:8", "const:4:8"]]
- 00be228c ["CALL", null, ["callee:00c5ec20:8"]]
+ 00be3280 ["INT_ADD", "register:40f0:8", ["const:be3280:8", "const:4:8"]]
+ 00be3280 ["CALL", null, ["callee:00c5ec20:8"]]
~~~


<a id="compare-7c58360063f35f8ab9b5158a9a989e14"></a>

### [`00be3150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3150.md) → [`00be4144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4144.md) FUN_00be4144

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be3134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3134.md) [`00be3150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3150.md) · 呼出先 4件 [`00be3150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3150.md) [`00be9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be9/00be9e64.md) [`00bea124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00bea124.md) [`00bea24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00bea24c.md)
- 新版 呼出元 2件 [`00be4128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4128.md) [`00be4144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4144.md) · 呼出先 4件 [`00be4144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4144.md) [`00beae58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bea/00beae58.md) [`00beb118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00beb/00beb118.md) [`00beb240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00beb/00beb240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be34dc ["INT_ADD", "register:40f0:8", ["const:be34dc:8", "const:4:8"]]
- 00be34dc ["CALL", null, ["callee:00beae58:8"]]
+ 00be44d0 ["INT_ADD", "register:40f0:8", ["const:be44d0:8", "const:4:8"]]
+ 00be44d0 ["CALL", null, ["callee:00beae58:8"]]
- 00be34f0 ["INT_ADD", "register:40f0:8", ["const:be34f0:8", "const:4:8"]]
- 00be34f0 ["CALL", null, ["callee:00beae58:8"]]
+ 00be44e4 ["INT_ADD", "register:40f0:8", ["const:be44e4:8", "const:4:8"]]
+ 00be44e4 ["CALL", null, ["callee:00beae58:8"]]
- 00be350c ["INT_ADD", "register:40f0:8", ["const:be350c:8", "const:4:8"]]
- 00be350c ["CALL", null, ["local:b0:8"]]
+ 00be4500 ["INT_ADD", "register:40f0:8", ["const:be4500:8", "const:4:8"]]
+ 00be4500 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-a4e069f515fb6b68b898f4ed8afcffdf"></a>

### [`00be3fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3fbc.md) → [`00be4fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4fb0.md) FUN_00be4fb0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be3f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3f9c.md) [`00be3fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3fbc.md) · 呼出先 4件 [`00be3fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3fbc.md) [`00beac1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00beac1c.md) [`00beaedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00beaedc.md) [`00beb004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb004.md)
- 新版 呼出元 2件 [`00be4f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4f90.md) [`00be4fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4fb0.md) · 呼出先 4件 [`00be4fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4fb0.md) [`00bebc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00beb/00bebc10.md) [`00bebed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00beb/00bebed0.md) [`00bebff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00beb/00bebff8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be434c ["INT_ADD", "register:40f0:8", ["const:be434c:8", "const:4:8"]]
- 00be434c ["CALL", null, ["callee:00bebc10:8"]]
+ 00be5340 ["INT_ADD", "register:40f0:8", ["const:be5340:8", "const:4:8"]]
+ 00be5340 ["CALL", null, ["callee:00bebc10:8"]]
- 00be4360 ["INT_ADD", "register:40f0:8", ["const:be4360:8", "const:4:8"]]
- 00be4360 ["CALL", null, ["callee:00bebc10:8"]]
+ 00be5354 ["INT_ADD", "register:40f0:8", ["const:be5354:8", "const:4:8"]]
+ 00be5354 ["CALL", null, ["callee:00bebc10:8"]]
- 00be437c ["INT_ADD", "register:40f0:8", ["const:be437c:8", "const:4:8"]]
- 00be437c ["CALL", null, ["local:b0:8"]]
+ 00be5370 ["INT_ADD", "register:40f0:8", ["const:be5370:8", "const:4:8"]]
+ 00be5370 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-ee233a8e1a3f179ef7c7c52c646199c9"></a>

### [`00be46f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46f8.md) → [`00be56ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be56ec.md) FUN_00be56ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be46d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46d8.md) [`00be46f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46f8.md) · 呼出先 4件 [`00be46f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46f8.md) [`00beb300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb300.md) [`00beb5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb5c0.md) [`00beb6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb6e8.md)
- 新版 呼出元 2件 [`00be56cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be56cc.md) [`00be56ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be56ec.md) · 呼出先 4件 [`00be56ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be56ec.md) [`00bec2f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00bec2f4.md) [`00bec5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00bec5b4.md) [`00bec6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00bec6dc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be4a88 ["INT_ADD", "register:40f0:8", ["const:be4a88:8", "const:4:8"]]
- 00be4a88 ["CALL", null, ["callee:00bec2f4:8"]]
+ 00be5a7c ["INT_ADD", "register:40f0:8", ["const:be5a7c:8", "const:4:8"]]
+ 00be5a7c ["CALL", null, ["callee:00bec2f4:8"]]
- 00be4a9c ["INT_ADD", "register:40f0:8", ["const:be4a9c:8", "const:4:8"]]
- 00be4a9c ["CALL", null, ["callee:00bec2f4:8"]]
+ 00be5a90 ["INT_ADD", "register:40f0:8", ["const:be5a90:8", "const:4:8"]]
+ 00be5a90 ["CALL", null, ["callee:00bec2f4:8"]]
- 00be4ab8 ["INT_ADD", "register:40f0:8", ["const:be4ab8:8", "const:4:8"]]
- 00be4ab8 ["CALL", null, ["local:b0:8"]]
+ 00be5aac ["INT_ADD", "register:40f0:8", ["const:be5aac:8", "const:4:8"]]
+ 00be5aac ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-9e500fb8287eb0e29a0c9d3ab56d559f"></a>

### [`00be4e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e34.md) → [`00be5e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be5e28.md) FUN_00be5e28

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be4e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e14.md) [`00be4e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e34.md) · 呼出先 4件 [`00be4e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e34.md) [`00beb9e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb9e4.md) [`00bebc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00bebc84.md) [`00bebdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00bebdac.md)
- 新版 呼出元 2件 [`00be5e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be5e08.md) [`00be5e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be5e28.md) · 呼出先 4件 [`00be5e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be5e28.md) [`00bec9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00bec9d8.md) [`00becc78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00becc78.md) [`00becda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00becda0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be51c4 ["INT_ADD", "register:40f0:8", ["const:be51c4:8", "const:4:8"]]
- 00be51c4 ["CALL", null, ["callee:00bec9d8:8"]]
+ 00be61b8 ["INT_ADD", "register:40f0:8", ["const:be61b8:8", "const:4:8"]]
+ 00be61b8 ["CALL", null, ["callee:00bec9d8:8"]]
- 00be51d8 ["INT_ADD", "register:40f0:8", ["const:be51d8:8", "const:4:8"]]
- 00be51d8 ["CALL", null, ["callee:00bec9d8:8"]]
+ 00be61cc ["INT_ADD", "register:40f0:8", ["const:be61cc:8", "const:4:8"]]
+ 00be61cc ["CALL", null, ["callee:00bec9d8:8"]]
- 00be51f4 ["INT_ADD", "register:40f0:8", ["const:be51f4:8", "const:4:8"]]
- 00be51f4 ["CALL", null, ["local:b0:8"]]
+ 00be61e8 ["INT_ADD", "register:40f0:8", ["const:be61e8:8", "const:4:8"]]
+ 00be61e8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-cb458ab6b3aebb7691de38e63591cfdb"></a>

### [`00be78c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78c4.md) → [`00be88b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be88b8.md) FUN_00be88b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be78a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78a4.md) [`00be78c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78c4.md) · 呼出先 4件 [`00be78c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78c4.md) [`00bee27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee27c.md) [`00bee51c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee51c.md) [`00bee644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee644.md)
- 新版 呼出元 2件 [`00be8898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be8898.md) [`00be88b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be88b8.md) · 呼出先 4件 [`00be88b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be88b8.md) [`00bef270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00bef270.md) [`00bef510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00bef510.md) [`00bef638`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00bef638.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be7c54 ["INT_ADD", "register:40f0:8", ["const:be7c54:8", "const:4:8"]]
- 00be7c54 ["CALL", null, ["callee:00bef270:8"]]
+ 00be8c48 ["INT_ADD", "register:40f0:8", ["const:be8c48:8", "const:4:8"]]
+ 00be8c48 ["CALL", null, ["callee:00bef270:8"]]
- 00be7c68 ["INT_ADD", "register:40f0:8", ["const:be7c68:8", "const:4:8"]]
- 00be7c68 ["CALL", null, ["callee:00bef270:8"]]
+ 00be8c5c ["INT_ADD", "register:40f0:8", ["const:be8c5c:8", "const:4:8"]]
+ 00be8c5c ["CALL", null, ["callee:00bef270:8"]]
- 00be7c84 ["INT_ADD", "register:40f0:8", ["const:be7c84:8", "const:4:8"]]
- 00be7c84 ["CALL", null, ["local:b0:8"]]
+ 00be8c78 ["INT_ADD", "register:40f0:8", ["const:be8c78:8", "const:4:8"]]
+ 00be8c78 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-ed80e6e6744af2dadc85ceb96eaf897b"></a>

### [`00be7fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fdc.md) → [`00be8fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be8fd0.md) FUN_00be8fd0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be7fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fbc.md) [`00be7fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fdc.md) · 呼出先 4件 [`00be7fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fdc.md) [`00bee91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee91c.md) [`00beebbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beebbc.md) [`00beece4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beece4.md)
- 新版 呼出元 2件 [`00be8fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be8fb0.md) [`00be8fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be8fd0.md) · 呼出先 4件 [`00be8fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be8fd0.md) [`00bef910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00bef910.md) [`00befbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00befbb0.md) [`00befcd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00befcd8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be836c ["INT_ADD", "register:40f0:8", ["const:be836c:8", "const:4:8"]]
- 00be836c ["CALL", null, ["callee:00bef910:8"]]
+ 00be9360 ["INT_ADD", "register:40f0:8", ["const:be9360:8", "const:4:8"]]
+ 00be9360 ["CALL", null, ["callee:00bef910:8"]]
- 00be8380 ["INT_ADD", "register:40f0:8", ["const:be8380:8", "const:4:8"]]
- 00be8380 ["CALL", null, ["callee:00bef910:8"]]
+ 00be9374 ["INT_ADD", "register:40f0:8", ["const:be9374:8", "const:4:8"]]
+ 00be9374 ["CALL", null, ["callee:00bef910:8"]]
- 00be839c ["INT_ADD", "register:40f0:8", ["const:be839c:8", "const:4:8"]]
- 00be839c ["CALL", null, ["local:b0:8"]]
+ 00be9390 ["INT_ADD", "register:40f0:8", ["const:be9390:8", "const:4:8"]]
+ 00be9390 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-b0348d9aa1d47f79d7c38e129c35755e"></a>

### [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) → [`00be96e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be9/00be96e8.md) FUN_00be96e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be86d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86d4.md) [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) · 呼出先 5件 [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) [`00beefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beefbc.md) [`00bef3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef3d8.md) [`00bef630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef630.md) [`00c53464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53464.md)
- 新版 呼出元 2件 [`00be96c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be9/00be96c8.md) [`00be96e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be9/00be96e8.md) · 呼出先 5件 [`00be96e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be9/00be96e8.md) [`00beffb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00beffb0.md) [`00bf03cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf03cc.md) [`00bf0624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0624.md) [`00c54458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54458.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be8798 ["INT_ADD", "register:40f0:8", ["const:be8798:8", "const:4:8"]]
- 00be8798 ["CALL", null, ["callee:00c54458:8"]]
+ 00be978c ["INT_ADD", "register:40f0:8", ["const:be978c:8", "const:4:8"]]
+ 00be978c ["CALL", null, ["callee:00c54458:8"]]
- 00be87a4 ["INT_ADD", "register:40f0:8", ["const:be87a4:8", "const:4:8"]]
- 00be87a4 ["CALL", null, ["callee:00c54458:8"]]
+ 00be9798 ["INT_ADD", "register:40f0:8", ["const:be9798:8", "const:4:8"]]
+ 00be9798 ["CALL", null, ["callee:00c54458:8"]]
- 00be87c8 ["INT_ADD", "register:40f0:8", ["const:be87c8:8", "const:4:8"]]
- 00be87c8 ["CALL", null, ["callee:00c54458:8"]]
+ 00be97bc ["INT_ADD", "register:40f0:8", ["const:be97bc:8", "const:4:8"]]
+ 00be97bc ["CALL", null, ["callee:00c54458:8"]]
~~~


<a id="compare-c326d87bc85d422779e75a37660f46aa"></a>

### [`00be9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be9/00be9e64.md) → [`00beae58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bea/00beae58.md) FUN_00beae58

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be3150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3150.md) · 呼出先 1件 [`00bea124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00bea124.md)
- 新版 呼出元 1件 [`00be4144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4144.md) · 呼出先 1件 [`00beb118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00beb/00beb118.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00be9ec8 ["INT_ADD", "register:40f0:8", ["const:be9ec8:8", "const:4:8"]]
- 00be9ec8 ["CALL", null, ["callee:00beb118:8"]]
+ 00beaebc ["INT_ADD", "register:40f0:8", ["const:beaebc:8", "const:4:8"]]
+ 00beaebc ["CALL", null, ["callee:00beb118:8"]]
~~~


<a id="compare-92f0782794696de8b318f65d04df99e3"></a>

### [`00beac1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00beac1c.md) → [`00bebc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00beb/00bebc10.md) FUN_00bebc10

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be3fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be3/00be3fbc.md) · 呼出先 1件 [`00beaedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bea/00beaedc.md)
- 新版 呼出元 1件 [`00be4fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be4/00be4fb0.md) · 呼出先 1件 [`00bebed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00beb/00bebed0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00beac84 ["INT_ADD", "register:40f0:8", ["const:beac84:8", "const:4:8"]]
- 00beac84 ["CALL", null, ["callee:00bebed0:8"]]
+ 00bebc78 ["INT_ADD", "register:40f0:8", ["const:bebc78:8", "const:4:8"]]
+ 00bebc78 ["CALL", null, ["callee:00bebed0:8"]]
~~~


<a id="compare-2a59a7729e548705b4b37a7947638f7a"></a>

### [`00beb300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb300.md) → [`00bec2f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00bec2f4.md) FUN_00bec2f4

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be46f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be46f8.md) · 呼出先 1件 [`00beb5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb5c0.md)
- 新版 呼出元 1件 [`00be56ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be56ec.md) · 呼出先 1件 [`00bec5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00bec5b4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00beb368 ["INT_ADD", "register:40f0:8", ["const:beb368:8", "const:4:8"]]
- 00beb368 ["CALL", null, ["callee:00bec5b4:8"]]
+ 00bec35c ["INT_ADD", "register:40f0:8", ["const:bec35c:8", "const:4:8"]]
+ 00bec35c ["CALL", null, ["callee:00bec5b4:8"]]
~~~


<a id="compare-ed509f4510f2b39d5d744f2146d60ac1"></a>

### [`00beb9e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00beb9e4.md) → [`00bec9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00bec9d8.md) FUN_00bec9d8

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be4e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be4/00be4e34.md) · 呼出先 1件 [`00bebc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00beb/00bebc84.md)
- 新版 呼出元 1件 [`00be5e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be5/00be5e28.md) · 呼出先 1件 [`00becc78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bec/00becc78.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00beba4c ["INT_ADD", "register:40f0:8", ["const:beba4c:8", "const:4:8"]]
- 00beba4c ["CALL", null, ["callee:00becc78:8"]]
+ 00beca40 ["INT_ADD", "register:40f0:8", ["const:beca40:8", "const:4:8"]]
+ 00beca40 ["CALL", null, ["callee:00becc78:8"]]
~~~


<a id="compare-b913cf7cd5a275c773dd5d951ee7ba68"></a>

### [`00bee27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee27c.md) → [`00bef270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00bef270.md) FUN_00bef270

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be78c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be78c4.md) · 呼出先 1件 [`00bee51c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee51c.md)
- 新版 呼出元 1件 [`00be88b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be88b8.md) · 呼出先 1件 [`00bef510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00bef510.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bee2e4 ["INT_ADD", "register:40f0:8", ["const:bee2e4:8", "const:4:8"]]
- 00bee2e4 ["CALL", null, ["callee:00bef510:8"]]
+ 00bef2d8 ["INT_ADD", "register:40f0:8", ["const:bef2d8:8", "const:4:8"]]
+ 00bef2d8 ["CALL", null, ["callee:00bef510:8"]]
~~~


<a id="compare-ae2b287de902d8eb342158d2cb63bca5"></a>

### [`00bee91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00bee91c.md) → [`00bef910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00bef910.md) FUN_00bef910

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be7fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be7/00be7fdc.md) · 呼出先 1件 [`00beebbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beebbc.md)
- 新版 呼出元 1件 [`00be8fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be8/00be8fd0.md) · 呼出先 1件 [`00befbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00befbb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bee984 ["INT_ADD", "register:40f0:8", ["const:bee984:8", "const:4:8"]]
- 00bee984 ["CALL", null, ["callee:00befbb0:8"]]
+ 00bef978 ["INT_ADD", "register:40f0:8", ["const:bef978:8", "const:4:8"]]
+ 00bef978 ["CALL", null, ["callee:00befbb0:8"]]
~~~


<a id="compare-9c0d6da22fed632bc8792a5d87d095a5"></a>

### [`00beefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beefbc.md) → [`00beffb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00beffb0.md) FUN_00beffb0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) · 呼出先 2件 [`00bef3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef3d8.md) [`00c53464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53464.md)
- 新版 呼出元 1件 [`00be96e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be9/00be96e8.md) · 呼出先 2件 [`00bf03cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf03cc.md) [`00c54458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54458.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bef00c ["INT_ADD", "register:40f0:8", ["const:bef00c:8", "const:4:8"]]
- 00bef00c ["CALL", null, ["callee:00c54458:8"]]
+ 00bf0000 ["INT_ADD", "register:40f0:8", ["const:bf0000:8", "const:4:8"]]
+ 00bf0000 ["CALL", null, ["callee:00c54458:8"]]
- 00bef058 ["INT_ADD", "register:40f0:8", ["const:bef058:8", "const:4:8"]]
- 00bef058 ["CALL", null, ["callee:00bf03cc:8"]]
+ 00bf004c ["INT_ADD", "register:40f0:8", ["const:bf004c:8", "const:4:8"]]
+ 00bf004c ["CALL", null, ["callee:00bf03cc:8"]]
- 00bef074 ["INT_ADD", "register:40f0:8", ["const:bef074:8", "const:4:8"]]
- 00bef074 ["CALL", null, ["callee:00c54458:8"]]
+ 00bf0068 ["INT_ADD", "register:40f0:8", ["const:bf0068:8", "const:4:8"]]
+ 00bf0068 ["CALL", null, ["callee:00c54458:8"]]
~~~


<a id="compare-58e858c834c335e76ab8fc69afb4a14e"></a>

### [`00bef3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef3d8.md) → [`00bf03cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf03cc.md) FUN_00bf03cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) [`00beefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bee/00beefbc.md) · 呼出先 1件 [`00c53464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53464.md)
- 新版 呼出元 2件 [`00be96e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be9/00be96e8.md) [`00beffb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bef/00beffb0.md) · 呼出先 1件 [`00c54458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54458.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bef420 ["INT_ADD", "register:40f0:8", ["const:bef420:8", "const:4:8"]]
- 00bef420 ["CALL", null, ["callee:00c54458:8"]]
+ 00bf0414 ["INT_ADD", "register:40f0:8", ["const:bf0414:8", "const:4:8"]]
+ 00bf0414 ["CALL", null, ["callee:00c54458:8"]]
- 00bef430 ["INT_ADD", "register:40f0:8", ["const:bef430:8", "const:4:8"]]
- 00bef430 ["CALL", null, ["callee:00c54458:8"]]
+ 00bf0424 ["INT_ADD", "register:40f0:8", ["const:bf0424:8", "const:4:8"]]
+ 00bf0424 ["CALL", null, ["callee:00c54458:8"]]
- 00bef450 ["INT_ADD", "register:40f0:8", ["const:bef450:8", "const:4:8"]]
- 00bef450 ["CALL", null, ["callee:00c54458:8"]]
+ 00bf0444 ["INT_ADD", "register:40f0:8", ["const:bf0444:8", "const:4:8"]]
+ 00bf0444 ["CALL", null, ["callee:00c54458:8"]]
~~~


<a id="compare-02c542f2a987843832bb5c30397f0667"></a>

### [`00bef630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef630.md) → [`00bf0624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0624.md) FUN_00bf0624

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00be86f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be8/00be86f4.md) · 呼出先 1件 [`00c53464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53464.md)
- 新版 呼出元 1件 [`00be96e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be9/00be96e8.md) · 呼出先 1件 [`00c54458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54458.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bef6d0 ["INT_ADD", "register:40f0:8", ["const:bef6d0:8", "const:4:8"]]
- 00bef6d0 ["CALL", null, ["callee:00c54458:8"]]
+ 00bf06c4 ["INT_ADD", "register:40f0:8", ["const:bf06c4:8", "const:4:8"]]
+ 00bf06c4 ["CALL", null, ["callee:00c54458:8"]]
- 00bef6f4 ["INT_ADD", "register:40f0:8", ["const:bef6f4:8", "const:4:8"]]
- 00bef6f4 ["CALL", null, ["callee:00c54458:8"]]
+ 00bf06e8 ["INT_ADD", "register:40f0:8", ["const:bf06e8:8", "const:4:8"]]
+ 00bf06e8 ["CALL", null, ["callee:00c54458:8"]]
- 00bef710 ["INT_ADD", "register:40f0:8", ["const:bef710:8", "const:4:8"]]
- 00bef710 ["CALL", null, ["callee:00c54458:8"]]
+ 00bf0704 ["INT_ADD", "register:40f0:8", ["const:bf0704:8", "const:4:8"]]
+ 00bf0704 ["CALL", null, ["callee:00c54458:8"]]
~~~


<a id="compare-cf6cb1f34b0b7acafbbbf9f5ffccbd36"></a>

### [`00befafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befafc.md) → [`00bf0af0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0af0.md) _ZSt18uncaught_exceptionv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md) · 呼出先 1件 [`00c5dfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfd0.md)
- 新版 呼出元 1件 [`00c5e190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e190.md) · 呼出先 1件 [`00c5efa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befb08 ["INT_ADD", "register:40f0:8", ["const:befb08:8", "const:4:8"]]
- 00befb08 ["CALL", null, ["callee:00c5efa0:8"]]
+ 00bf0afc ["INT_ADD", "register:40f0:8", ["const:bf0afc:8", "const:4:8"]]
+ 00bf0afc ["CALL", null, ["callee:00c5efa0:8"]]
~~~


<a id="compare-cded7bc4ba445495a8246fdad5e60c45"></a>

### [`00befb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befb4c.md) → [`00bf0b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0b40.md) _ZNSt13exception_ptraSERKS_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e000.md) · 呼出先 2件 [`00c5dfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfe0.md) [`00c5dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dff0.md)
- 新版 呼出元 1件 [`00c5efd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efd0.md) · 呼出先 2件 [`00c5efb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efb0.md) [`00c5efc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befb74 ["INT_ADD", "register:40f0:8", ["const:befb74:8", "const:4:8"]]
- 00befb74 ["CALL", null, ["callee:00c5efc0:8"]]
+ 00bf0b68 ["INT_ADD", "register:40f0:8", ["const:bf0b68:8", "const:4:8"]]
+ 00bf0b68 ["CALL", null, ["callee:00c5efc0:8"]]
- 00befb7c ["INT_ADD", "register:40f0:8", ["const:befb7c:8", "const:4:8"]]
- 00befb7c ["CALL", null, ["callee:00c5efb0:8"]]
+ 00bf0b70 ["INT_ADD", "register:40f0:8", ["const:bf0b70:8", "const:4:8"]]
+ 00bf0b70 ["CALL", null, ["callee:00c5efb0:8"]]
~~~


<a id="compare-2e8e47427953bcdcc9daa19b90610ad5"></a>

### [`00befbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befbe4.md) → [`00bf0bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0bd8.md) _ZSt17current_exceptionv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58630.md) · 呼出先 1件 [`00c5e010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e010.md)
- 新版 呼出元 1件 [`00c59600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59600.md) · 呼出先 1件 [`00c5efe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befbf8 ["INT_ADD", "register:40f0:8", ["const:befbf8:8", "const:4:8"]]
- 00befbf8 ["CALL", null, ["callee:00c5efe0:8"]]
+ 00bf0bec ["INT_ADD", "register:40f0:8", ["const:bf0bec:8", "const:4:8"]]
+ 00bf0bec ["CALL", null, ["callee:00c5efe0:8"]]
~~~


<a id="compare-9b311461d933756d8eaa74e218b89119"></a>

### [`00befc28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befc28.md) → [`00bf0c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0c1c.md) _ZNSt16nested_exceptionD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e020.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5eff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eff0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befc3c ["INT_ADD", "register:40f0:8", ["const:befc3c:8", "const:4:8"]]
- 00befc3c ["CALL", null, ["callee:00c5eff0:8"]]
+ 00bf0c30 ["INT_ADD", "register:40f0:8", ["const:bf0c30:8", "const:4:8"]]
+ 00bf0c30 ["CALL", null, ["callee:00c5eff0:8"]]
~~~


<a id="compare-11909c49f3d2ed48af01eedf1c49d139"></a>

### [`00befc54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befc54.md) → [`00bf0c48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0c48.md) _ZNKSt16nested_exception14rethrow_nestedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58580.md) [`00c58590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58590.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c590c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590c0.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md) [`00c59550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59550.md) [`00c59560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59560.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befc78 ["INT_ADD", "register:40f0:8", ["const:befc78:8", "const:4:8"]]
- 00befc78 ["CALL", null, ["callee:00c59390:8"]]
+ 00bf0c6c ["INT_ADD", "register:40f0:8", ["const:bf0c6c:8", "const:4:8"]]
+ 00bf0c6c ["CALL", null, ["callee:00c59390:8"]]
- 00befc80 ["INT_ADD", "register:40f0:8", ["const:befc80:8", "const:4:8"]]
- 00befc80 ["CALL", null, ["callee:00c590c0:8"]]
+ 00bf0c74 ["INT_ADD", "register:40f0:8", ["const:bf0c74:8", "const:4:8"]]
+ 00bf0c74 ["CALL", null, ["callee:00c590c0:8"]]
- 00befc8c ["INT_ADD", "register:40f0:8", ["const:befc8c:8", "const:4:8"]]
- 00befc8c ["CALL", null, ["callee:00c59550:8"]]
+ 00bf0c80 ["INT_ADD", "register:40f0:8", ["const:bf0c80:8", "const:4:8"]]
+ 00bf0c80 ["CALL", null, ["callee:00c59550:8"]]
~~~


<a id="compare-a7e2e334ef28575430a17719dd92a284"></a>

### [`00befcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befcac.md) → [`00bf0ca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0ca0.md) _ZSt17rethrow_exceptionSt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58590.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5e030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e030.md)
- 新版 呼出元 1件 [`00c59560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59560.md) · 呼出先 2件 [`00c590c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590c0.md) [`00c5f000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f000.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00befcbc ["INT_ADD", "register:40f0:8", ["const:befcbc:8", "const:4:8"]]
- 00befcbc ["CALL", null, ["callee:00c5f000:8"]]
+ 00bf0cb0 ["INT_ADD", "register:40f0:8", ["const:bf0cb0:8", "const:4:8"]]
+ 00bf0cb0 ["CALL", null, ["callee:00c5f000:8"]]
- 00befcc0 ["INT_ADD", "register:40f0:8", ["const:befcc0:8", "const:4:8"]]
- 00befcc0 ["CALL", null, ["callee:00c590c0:8"]]
+ 00bf0cb4 ["INT_ADD", "register:40f0:8", ["const:bf0cb4:8", "const:4:8"]]
+ 00bf0cb4 ["CALL", null, ["callee:00c590c0:8"]]
~~~


<a id="compare-92ac3709d4f431f9ab4838bbb95dc9ee"></a>

### [`00bf0478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0478.md) → [`00bf146c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf146c.md) _ZNSt6__ndk112bad_weak_ptrD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a860.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b830.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf048c ["INT_ADD", "register:40f0:8", ["const:bf048c:8", "const:4:8"]]
- 00bf048c ["CALL", null, ["callee:00c5b830:8"]]
+ 00bf1480 ["INT_ADD", "register:40f0:8", ["const:bf1480:8", "const:4:8"]]
+ 00bf1480 ["CALL", null, ["callee:00c5b830:8"]]
~~~


<a id="compare-438e037619e7b9f580a88e8f762fb773"></a>

### [`00bf04cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf04cc.md) → [`00bf14c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf14c0.md) _ZNSt6__ndk114__shared_count12__add_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf04e0 ["INT_ADD", "register:40f0:8", ["const:bf04e0:8", "const:4:8"]]
- 00bf04e0 ["CALL", null, ["callee:00c54d60:8"]]
+ 00bf14d4 ["INT_ADD", "register:40f0:8", ["const:bf14d4:8", "const:4:8"]]
+ 00bf14d4 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-ae8569c1f6509f8a0698638ee4eb724d"></a>

### [`00bf04f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf04f0.md) → [`00bf14e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf14e4.md) _ZNSt6__ndk114__shared_count16__release_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf050c ["INT_ADD", "register:40f0:8", ["const:bf050c:8", "const:4:8"]]
- 00bf050c ["CALL", null, ["callee:00c54d90:8"]]
+ 00bf1500 ["INT_ADD", "register:40f0:8", ["const:bf1500:8", "const:4:8"]]
+ 00bf1500 ["CALL", null, ["callee:00c54d90:8"]]
- 00bf0524 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bf0524 ["INT_ADD", "register:40f0:8", ["const:bf0524:8", "const:4:8"]]
- 00bf0524 ["CALLIND", null, ["register:0:8"]]
+ 00bf1518 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bf1518 ["INT_ADD", "register:40f0:8", ["const:bf1518:8", "const:4:8"]]
+ 00bf1518 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ec501963de9fe4fdebefecc111fdc5d2"></a>

### [`00bf0540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0540.md) → [`00bf1534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1534.md) _ZNSt6__ndk119__shared_weak_count12__add_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0554 ["INT_ADD", "register:40f0:8", ["const:bf0554:8", "const:4:8"]]
- 00bf0554 ["CALL", null, ["callee:00c54d60:8"]]
+ 00bf1548 ["INT_ADD", "register:40f0:8", ["const:bf1548:8", "const:4:8"]]
+ 00bf1548 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-1ee199511e3676f94ada67df9be1d759"></a>

### [`00bf0564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0564.md) → [`00bf1558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1558.md) _ZNSt6__ndk119__shared_weak_count10__add_weakEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0578 ["INT_ADD", "register:40f0:8", ["const:bf0578:8", "const:4:8"]]
- 00bf0578 ["CALL", null, ["callee:00c54d60:8"]]
+ 00bf156c ["INT_ADD", "register:40f0:8", ["const:bf156c:8", "const:4:8"]]
+ 00bf156c ["CALL", null, ["callee:00c54d60:8"]]
~~~


