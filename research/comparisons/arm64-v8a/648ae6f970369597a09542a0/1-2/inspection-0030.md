# v16.0.2 → v16.0.3 · 要調査の変更候補 (30)

[一覧の目次](README.md)

<a id="compare-454db0cf0186b68c8157799d2162cc56"></a>

### [`00af4c64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4c64.md) → [`00af5c58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5c58.md) FUN_00af5c58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007193b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/007193b4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00719764`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00719/00719764.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af4c78 ["INT_ADD", "register:40f0:8", ["const:af4c78:8", "const:4:8"]]
+ 00af5c6c ["INT_ADD", "register:40f0:8", ["const:af5c6c:8", "const:4:8"]]
~~~


<a id="compare-ef3912b70b818f04885f7ed681879b7f"></a>

### [`00af4ca4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4ca4.md) → [`00af5c98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5c98.md) FUN_00af5c98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af4cc0 ["INT_ADD", "register:40f0:8", ["const:af4cc0:8", "const:4:8"]]
+ 00af5cb4 ["INT_ADD", "register:40f0:8", ["const:af5cb4:8", "const:4:8"]]
~~~


<a id="compare-b835f294b713f4a82d451161c9491fcd"></a>

### [`00af4cf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4cf0.md) → [`00af5ce4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5ce4.md) FUN_00af5ce4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00717198`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af4d04 ["INT_ADD", "register:40f0:8", ["const:af4d04:8", "const:4:8"]]
+ 00af5cf8 ["INT_ADD", "register:40f0:8", ["const:af5cf8:8", "const:4:8"]]
~~~


<a id="compare-8d20164d7acc04b2ea27d5de6f0b0539"></a>

### [`00af4e5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4e5c.md) → [`00af5e50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5e50.md) FUN_00af5e50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af4e70 ["INT_ADD", "register:40f0:8", ["const:af4e70:8", "const:4:8"]]
+ 00af5e64 ["INT_ADD", "register:40f0:8", ["const:af5e64:8", "const:4:8"]]
~~~


<a id="compare-06026dfb0f3bf0971889b70cde1b4f62"></a>

### [`00af4f3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4f3c.md) → [`00af5f30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5f30.md) FUN_00af5f30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a51c48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a51/00a51c48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a52c3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a52/00a52c3c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af4f50 ["INT_ADD", "register:40f0:8", ["const:af4f50:8", "const:4:8"]]
+ 00af5f44 ["INT_ADD", "register:40f0:8", ["const:af5f44:8", "const:4:8"]]
~~~


<a id="compare-4170a304c9fb5460fba57a752ac3308c"></a>

### [`00af5008`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5008.md) → [`00af5ffc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5ffc.md) FUN_00af5ffc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af5024 ["INT_ADD", "register:40f0:8", ["const:af5024:8", "const:4:8"]]
+ 00af6018 ["INT_ADD", "register:40f0:8", ["const:af6018:8", "const:4:8"]]
~~~


<a id="compare-d05ee9a82a179bcda0f53c9d0660f671"></a>

### [`00af5054`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5054.md) → [`00af6048`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6048.md) FUN_00af6048

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a51c48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a51/00a51c48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a52c3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a52/00a52c3c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af5068 ["INT_ADD", "register:40f0:8", ["const:af5068:8", "const:4:8"]]
+ 00af605c ["INT_ADD", "register:40f0:8", ["const:af605c:8", "const:4:8"]]
~~~


<a id="compare-fcd1aca493fd86e02ae5f92e2ac89fa9"></a>

### [`00af5414`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5414.md) → [`00af6408`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6408.md) FUN_00af6408

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af5428 ["INT_ADD", "register:40f0:8", ["const:af5428:8", "const:4:8"]]
+ 00af641c ["INT_ADD", "register:40f0:8", ["const:af641c:8", "const:4:8"]]
~~~


<a id="compare-faab9ae1e842edb1074f53b4bf2bb851"></a>

### [`00af5454`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5454.md) → [`00af6448`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6448.md) FUN_00af6448

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af5470 ["INT_ADD", "register:40f0:8", ["const:af5470:8", "const:4:8"]]
+ 00af6464 ["INT_ADD", "register:40f0:8", ["const:af6464:8", "const:4:8"]]
~~~


<a id="compare-b38737fc684130f49e82b7a4cd52d99f"></a>

### [`00af54a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af54a0.md) → [`00af6494`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6494.md) FUN_00af6494

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0066b704`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b704.md) [`00716ae8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716ae8.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0066bab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bab4.md) [`00716e98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716e98.md) [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af54bc ["INT_ADD", "register:40f0:8", ["const:af54bc:8", "const:4:8"]]
+ 00af64b0 ["INT_ADD", "register:40f0:8", ["const:af64b0:8", "const:4:8"]]
~~~


<a id="compare-4d665e57a704b79fe9779016debdabcb"></a>

### [`00af55a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af55a8.md) → [`00af659c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af659c.md) FUN_00af659c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af55bc ["INT_ADD", "register:40f0:8", ["const:af55bc:8", "const:4:8"]]
+ 00af65b0 ["INT_ADD", "register:40f0:8", ["const:af65b0:8", "const:4:8"]]
- 00af55e8 ["INT_ADD", "register:40f0:8", ["const:af55e8:8", "const:4:8"]]
+ 00af65dc ["INT_ADD", "register:40f0:8", ["const:af65dc:8", "const:4:8"]]
- 00af560c ["INT_ADD", "register:40f0:8", ["const:af560c:8", "const:4:8"]]
+ 00af6600 ["INT_ADD", "register:40f0:8", ["const:af6600:8", "const:4:8"]]
~~~


<a id="compare-9b578848cc0627d76caee5793086b89e"></a>

### [`00af573c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af573c.md) → [`00af6730`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6730.md) FUN_00af6730

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a52034`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a53028`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af5750 ["INT_ADD", "register:40f0:8", ["const:af5750:8", "const:4:8"]]
+ 00af6744 ["INT_ADD", "register:40f0:8", ["const:af6744:8", "const:4:8"]]
~~~


<a id="compare-8092f83dd71d5012ec6dcb7eb953fd0f"></a>

### [`00af577c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af577c.md) → [`00af6770`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6770.md) FUN_00af6770

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af5798 ["INT_ADD", "register:40f0:8", ["const:af5798:8", "const:4:8"]]
+ 00af678c ["INT_ADD", "register:40f0:8", ["const:af678c:8", "const:4:8"]]
~~~


<a id="compare-29749c9020d1449346184b299f73ba3d"></a>

### [`00af57c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af57c8.md) → [`00af67bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af67bc.md) FUN_00af67bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005fb480`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb480.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005fb830`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fb830.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af57dc ["INT_ADD", "register:40f0:8", ["const:af57dc:8", "const:4:8"]]
+ 00af67d0 ["INT_ADD", "register:40f0:8", ["const:af67d0:8", "const:4:8"]]
~~~


<a id="compare-b351c5b43f0c6dcb33fb1d8e5008384b"></a>

### [`00af5808`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5808.md) → [`00af67fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af67fc.md) FUN_00af67fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af2c7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af2c7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af3c70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af3c70.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af5824 ["INT_ADD", "register:40f0:8", ["const:af5824:8", "const:4:8"]]
+ 00af6818 ["INT_ADD", "register:40f0:8", ["const:af6818:8", "const:4:8"]]
~~~


<a id="compare-fa765e54303e41ff39189d6c673c9233"></a>

### [`00af5854`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5854.md) → [`00af6848`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6848.md) FUN_00af6848

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af2c88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af2c88.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af3c7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af3c7c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af5870 ["INT_ADD", "register:40f0:8", ["const:af5870:8", "const:4:8"]]
+ 00af6864 ["INT_ADD", "register:40f0:8", ["const:af6864:8", "const:4:8"]]
~~~


<a id="compare-8e021b6c984b731b2808f03471b05a31"></a>

### [`00af5a50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5a50.md) → [`00af6a44`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6a44.md) FUN_00af6a44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af5a80",
      "incomplete_value": true,
      "site": "00af5a8c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
- 00af5a64 ["INT_ADD", "register:40f0:8", ["const:af5a64:8", "const:4:8"]]
+ 00af6a58 ["INT_ADD", "register:40f0:8", ["const:af6a58:8", "const:4:8"]]
~~~


<a id="compare-f6d21b42d0e0f620478e82eaaecd43e1"></a>

### [`00af640c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af640c.md) → [`00af7400`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7400.md) FUN_00af7400

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6420 ["INT_ADD", "register:40f0:8", ["const:af6420:8", "const:4:8"]]
+ 00af7414 ["INT_ADD", "register:40f0:8", ["const:af7414:8", "const:4:8"]]
~~~


<a id="compare-c018a33215badb934e4644775347ac77"></a>

### [`00af675c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af675c.md) → [`00af7750`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7750.md) FUN_00af7750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 6件 [`005f3ab0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f3ab0.md) [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710128`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`005f3e60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3e60.md) [`005fbd2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007104d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_value, call_argument_candidate, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00af7790",
      "incomplete_value": true,
      "site": "00af77a4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_AND",
            "4",
            [
              [
                "live",
                "register:40a8:4"
              ],
              [
                "leaf",
                "const:1:4"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:4"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af67b0",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af6784",
      "incomplete_value": true,
      "site": "00af6788",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af77bc",
      "incomplete_value": true,
      "site": "00af77cc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af6774 ["INT_ADD", "register:40f0:8", ["const:af6774:8", "const:4:8"]]
+ 00af7768 ["INT_ADD", "register:40f0:8", ["const:af7768:8", "const:4:8"]]
- 00af6788 ["INT_ADD", "register:40f0:8", ["const:af6788:8", "const:4:8"]]
+ 00af777c ["INT_ADD", "register:40f0:8", ["const:af777c:8", "const:4:8"]]
- 00af6790 ["INT_ADD", "register:40f0:8", ["const:af6790:8", "const:4:8"]]
+ 00af7784 ["INT_ADD", "register:40f0:8", ["const:af7784:8", "const:4:8"]]
~~~


<a id="compare-1e5e4dbf9d65cf08f63911743c416623"></a>

### [`00af692c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af692c.md) → [`00af7920`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7920.md) FUN_00af7920

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00710128`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007104d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6940 ["INT_ADD", "register:40f0:8", ["const:af6940:8", "const:4:8"]]
+ 00af7934 ["INT_ADD", "register:40f0:8", ["const:af7934:8", "const:4:8"]]
- 00af6954 ["INT_ADD", "register:40f0:8", ["const:af6954:8", "const:4:8"]]
+ 00af7948 ["INT_ADD", "register:40f0:8", ["const:af7948:8", "const:4:8"]]
- 00af6968 ["INT_ADD", "register:40f0:8", ["const:af6968:8", "const:4:8"]]
+ 00af795c ["INT_ADD", "register:40f0:8", ["const:af795c:8", "const:4:8"]]
~~~


<a id="compare-de5b64088e6cf7e5edea1505681feaa7"></a>

### [`00af699c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af699c.md) → [`00af7990`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7990.md) FUN_00af7990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710128`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007104d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00717198`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af69b0 ["INT_ADD", "register:40f0:8", ["const:af69b0:8", "const:4:8"]]
+ 00af79a4 ["INT_ADD", "register:40f0:8", ["const:af79a4:8", "const:4:8"]]
- 00af69c4 ["INT_ADD", "register:40f0:8", ["const:af69c4:8", "const:4:8"]]
+ 00af79b8 ["INT_ADD", "register:40f0:8", ["const:af79b8:8", "const:4:8"]]
- 00af69d0 ["INT_ADD", "register:40f0:8", ["const:af69d0:8", "const:4:8"]]
+ 00af79c4 ["INT_ADD", "register:40f0:8", ["const:af79c4:8", "const:4:8"]]
~~~


<a id="compare-3359933954f22a67076bca1908cda79a"></a>

### [`00af6a0c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6a0c.md) → [`00af7a00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7a00.md) FUN_00af7a00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00710128`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007104d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6a20 ["INT_ADD", "register:40f0:8", ["const:af6a20:8", "const:4:8"]]
+ 00af7a14 ["INT_ADD", "register:40f0:8", ["const:af7a14:8", "const:4:8"]]
- 00af6a34 ["INT_ADD", "register:40f0:8", ["const:af6a34:8", "const:4:8"]]
+ 00af7a28 ["INT_ADD", "register:40f0:8", ["const:af7a28:8", "const:4:8"]]
- 00af6a48 ["INT_ADD", "register:40f0:8", ["const:af6a48:8", "const:4:8"]]
+ 00af7a3c ["INT_ADD", "register:40f0:8", ["const:af7a3c:8", "const:4:8"]]
~~~


<a id="compare-98dbd9c7fb7f0ba08ca8c98492a4f179"></a>

### [`00af6a7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6a7c.md) → [`00af7a70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7a70.md) FUN_00af7a70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`005fb480`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb480.md) [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710128`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 7件 [`005fb830`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fb830.md) [`005fbd2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007104d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6a90 ["INT_ADD", "register:40f0:8", ["const:af6a90:8", "const:4:8"]]
+ 00af7a84 ["INT_ADD", "register:40f0:8", ["const:af7a84:8", "const:4:8"]]
- 00af6aa4 ["INT_ADD", "register:40f0:8", ["const:af6aa4:8", "const:4:8"]]
+ 00af7a98 ["INT_ADD", "register:40f0:8", ["const:af7a98:8", "const:4:8"]]
- 00af6ab0 ["INT_ADD", "register:40f0:8", ["const:af6ab0:8", "const:4:8"]]
+ 00af7aa4 ["INT_ADD", "register:40f0:8", ["const:af7aa4:8", "const:4:8"]]
~~~


<a id="compare-347048977f39d0dcdaab7493a2fe4f6a"></a>

### [`00af6aec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6aec.md) → [`00af7ae0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7ae0.md) FUN_00af7ae0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6b00 ["INT_ADD", "register:40f0:8", ["const:af6b00:8", "const:4:8"]]
+ 00af7af4 ["INT_ADD", "register:40f0:8", ["const:af7af4:8", "const:4:8"]]
- 00af6b14 ["INT_ADD", "register:40f0:8", ["const:af6b14:8", "const:4:8"]]
+ 00af7b08 ["INT_ADD", "register:40f0:8", ["const:af7b08:8", "const:4:8"]]
- 00af6b20 ["INT_ADD", "register:40f0:8", ["const:af6b20:8", "const:4:8"]]
+ 00af7b14 ["INT_ADD", "register:40f0:8", ["const:af7b14:8", "const:4:8"]]
~~~


<a id="compare-316a375de1d7f49b75c9fb25af116745"></a>

### [`00af6b5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6b5c.md) → [`00af7b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7b50.md) FUN_00af7b50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6b70 ["INT_ADD", "register:40f0:8", ["const:af6b70:8", "const:4:8"]]
+ 00af7b64 ["INT_ADD", "register:40f0:8", ["const:af7b64:8", "const:4:8"]]
- 00af6b84 ["INT_ADD", "register:40f0:8", ["const:af6b84:8", "const:4:8"]]
+ 00af7b78 ["INT_ADD", "register:40f0:8", ["const:af7b78:8", "const:4:8"]]
- 00af6b90 ["INT_ADD", "register:40f0:8", ["const:af6b90:8", "const:4:8"]]
+ 00af7b84 ["INT_ADD", "register:40f0:8", ["const:af7b84:8", "const:4:8"]]
~~~


<a id="compare-93144971fc0f11b9756e1819d8222f71"></a>

### [`00af6cac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6cac.md) → [`00af7ca0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7ca0.md) FUN_00af7ca0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6cc8 ["INT_ADD", "register:40f0:8", ["const:af6cc8:8", "const:4:8"]]
+ 00af7cbc ["INT_ADD", "register:40f0:8", ["const:af7cbc:8", "const:4:8"]]
- 00af6cdc ["INT_ADD", "register:40f0:8", ["const:af6cdc:8", "const:4:8"]]
+ 00af7cd0 ["INT_ADD", "register:40f0:8", ["const:af7cd0:8", "const:4:8"]]
- 00af6ce8 ["INT_ADD", "register:40f0:8", ["const:af6ce8:8", "const:4:8"]]
+ 00af7cdc ["INT_ADD", "register:40f0:8", ["const:af7cdc:8", "const:4:8"]]
~~~


<a id="compare-b4e1265530a0aa3a46a5d8809f2a9e55"></a>

### [`00af6dc4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6dc4.md) → [`00af7db8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7db8.md) FUN_00af7db8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6de0 ["INT_ADD", "register:40f0:8", ["const:af6de0:8", "const:4:8"]]
+ 00af7dd4 ["INT_ADD", "register:40f0:8", ["const:af7dd4:8", "const:4:8"]]
~~~


<a id="compare-01a541ea0f59c6e80c1176c92ed2d91a"></a>

### [`00af6edc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6edc.md) → [`00af7ed0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7ed0.md) FUN_00af7ed0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af6ef8 ["INT_ADD", "register:40f0:8", ["const:af6ef8:8", "const:4:8"]]
+ 00af7eec ["INT_ADD", "register:40f0:8", ["const:af7eec:8", "const:4:8"]]
~~~


<a id="compare-f9afaf1cdd7267fbbcbaf2c74559071a"></a>

### [`00af70a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af70a4.md) → [`00af8098`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8098.md) FUN_00af8098

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af80a0",
      "incomplete_value": true,
      "site": "00af80a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffd0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af70ac",
      "incomplete_value": true,
      "site": "00af70ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af80a0",
      "incomplete_value": true,
      "site": "00af80a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af70ac",
      "incomplete_value": true,
      "site": "00af70ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af80d0",
      "incomplete_value": true,
      "site": "00af80d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af70dc",
      "incomplete_value": true,
      "site": "00af70dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  }
]
~~~


~~~diff
- 00af70c0 ["INT_ADD", "register:40f0:8", ["const:af70c0:8", "const:4:8"]]
+ 00af80b4 ["INT_ADD", "register:40f0:8", ["const:af80b4:8", "const:4:8"]]
~~~


<a id="compare-a1bb48e5b32b206864da15136df0d6e9"></a>

### [`00af7268`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7268.md) → [`00af825c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af825c.md) FUN_00af825c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af7284 ["INT_ADD", "register:40f0:8", ["const:af7284:8", "const:4:8"]]
+ 00af8278 ["INT_ADD", "register:40f0:8", ["const:af8278:8", "const:4:8"]]
~~~


<a id="compare-14b6fcb54a560abfead034185fefe53b"></a>

### [`00af72b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af72b4.md) → [`00af82a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af82a8.md) FUN_00af82a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af72c8 ["INT_ADD", "register:40f0:8", ["const:af72c8:8", "const:4:8"]]
+ 00af82bc ["INT_ADD", "register:40f0:8", ["const:af82bc:8", "const:4:8"]]
- 00af72dc ["INT_ADD", "register:40f0:8", ["const:af72dc:8", "const:4:8"]]
+ 00af82d0 ["INT_ADD", "register:40f0:8", ["const:af82d0:8", "const:4:8"]]
- 00af72e8 ["INT_ADD", "register:40f0:8", ["const:af72e8:8", "const:4:8"]]
+ 00af82dc ["INT_ADD", "register:40f0:8", ["const:af82dc:8", "const:4:8"]]
~~~


<a id="compare-7419b84a4e46e5bfe75ffca9c20b6d88"></a>

### [`00af73b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af73b8.md) → [`00af83ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af83ac.md) FUN_00af83ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af73d4 ["INT_ADD", "register:40f0:8", ["const:af73d4:8", "const:4:8"]]
+ 00af83c8 ["INT_ADD", "register:40f0:8", ["const:af83c8:8", "const:4:8"]]
~~~


<a id="compare-202a4ac0a3ada4d7065d87bd18ec2118"></a>

### [`00af74d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af74d8.md) → [`00af84cc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af84cc.md) FUN_00af84cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af74f4 ["INT_ADD", "register:40f0:8", ["const:af74f4:8", "const:4:8"]]
+ 00af84e8 ["INT_ADD", "register:40f0:8", ["const:af84e8:8", "const:4:8"]]
~~~


<a id="compare-9a2c9693666f28f002fabc0bce205d5a"></a>

### [`00af7524`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7524.md) → [`00af8518`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8518.md) FUN_00af8518

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af7540 ["INT_ADD", "register:40f0:8", ["const:af7540:8", "const:4:8"]]
+ 00af8534 ["INT_ADD", "register:40f0:8", ["const:af8534:8", "const:4:8"]]
~~~


<a id="compare-b1288b0ae984f6431c3365eec7617cef"></a>

### [`00af7570`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7570.md) → [`00af8564`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8564.md) FUN_00af8564

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af758c ["INT_ADD", "register:40f0:8", ["const:af758c:8", "const:4:8"]]
+ 00af8580 ["INT_ADD", "register:40f0:8", ["const:af8580:8", "const:4:8"]]
~~~


<a id="compare-264c182224c09c27fe2311f73b7082e0"></a>

### [`00af75bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af75bc.md) → [`00af85b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af85b0.md) FUN_00af85b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00713760`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af75d0 ["INT_ADD", "register:40f0:8", ["const:af75d0:8", "const:4:8"]]
+ 00af85c4 ["INT_ADD", "register:40f0:8", ["const:af85c4:8", "const:4:8"]]
~~~


<a id="compare-560243872e38c1166249e60b14a4fcf2"></a>

### [`00af75fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af75fc.md) → [`00af85f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af85f0.md) FUN_00af85f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00713760`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af7610 ["INT_ADD", "register:40f0:8", ["const:af7610:8", "const:4:8"]]
+ 00af8604 ["INT_ADD", "register:40f0:8", ["const:af8604:8", "const:4:8"]]
~~~


<a id="compare-79b895695f0827496f8bd3fa8fc3ebc7"></a>

### [`00af7684`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7684.md) → [`00af8678`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8678.md) FUN_00af8678

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af86a8",
      "incomplete_value": true,
      "site": "00af86b4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af7698 ["INT_ADD", "register:40f0:8", ["const:af7698:8", "const:4:8"]]
+ 00af868c ["INT_ADD", "register:40f0:8", ["const:af868c:8", "const:4:8"]]
~~~


<a id="compare-ae7c41bf3163ca3085b103ac6cbc423f"></a>

### [`00af7710`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7710.md) → [`00af8704`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8704.md) FUN_00af8704

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af7724 ["INT_ADD", "register:40f0:8", ["const:af7724:8", "const:4:8"]]
+ 00af8718 ["INT_ADD", "register:40f0:8", ["const:af8718:8", "const:4:8"]]
- 00af7738 ["INT_ADD", "register:40f0:8", ["const:af7738:8", "const:4:8"]]
+ 00af872c ["INT_ADD", "register:40f0:8", ["const:af872c:8", "const:4:8"]]
- 00af774c ["INT_ADD", "register:40f0:8", ["const:af774c:8", "const:4:8"]]
+ 00af8740 ["INT_ADD", "register:40f0:8", ["const:af8740:8", "const:4:8"]]
~~~


<a id="compare-27150e697e859e011e73d6decc7fee72"></a>

### [`00af7780`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7780.md) → [`00af8774`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8774.md) FUN_00af8774

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af779c ["INT_ADD", "register:40f0:8", ["const:af779c:8", "const:4:8"]]
+ 00af8790 ["INT_ADD", "register:40f0:8", ["const:af8790:8", "const:4:8"]]
- 00af77b0 ["INT_ADD", "register:40f0:8", ["const:af77b0:8", "const:4:8"]]
+ 00af87a4 ["INT_ADD", "register:40f0:8", ["const:af87a4:8", "const:4:8"]]
- 00af77c0 ["INT_ADD", "register:40f0:8", ["const:af77c0:8", "const:4:8"]]
+ 00af87b4 ["INT_ADD", "register:40f0:8", ["const:af87b4:8", "const:4:8"]]
~~~


<a id="compare-ac12053b59ac76229c58996807a59a29"></a>

### [`00af78d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af78d0.md) → [`00af88c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af88c4.md) FUN_00af88c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00715908`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af78e4 ["INT_ADD", "register:40f0:8", ["const:af78e4:8", "const:4:8"]]
+ 00af88d8 ["INT_ADD", "register:40f0:8", ["const:af88d8:8", "const:4:8"]]
- 00af78f8 ["INT_ADD", "register:40f0:8", ["const:af78f8:8", "const:4:8"]]
+ 00af88ec ["INT_ADD", "register:40f0:8", ["const:af88ec:8", "const:4:8"]]
- 00af790c ["INT_ADD", "register:40f0:8", ["const:af790c:8", "const:4:8"]]
+ 00af8900 ["INT_ADD", "register:40f0:8", ["const:af8900:8", "const:4:8"]]
~~~


<a id="compare-53c8350b44969f5288a954958a327452"></a>

### [`00af7e64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7e64.md) → [`00af8e58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8e58.md) FUN_00af8e58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af7e78 ["INT_ADD", "register:40f0:8", ["const:af7e78:8", "const:4:8"]]
+ 00af8e6c ["INT_ADD", "register:40f0:8", ["const:af8e6c:8", "const:4:8"]]
~~~


<a id="compare-606130cda851aa549d9dc56e1d233781"></a>

### [`00af7f7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7f7c.md) → [`00af8f70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8f70.md) FUN_00af8f70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af7f90 ["INT_ADD", "register:40f0:8", ["const:af7f90:8", "const:4:8"]]
+ 00af8f84 ["INT_ADD", "register:40f0:8", ["const:af8f84:8", "const:4:8"]]
~~~


<a id="compare-8d9158215ffdecd9fc620a93413e252c"></a>

### [`00af80dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af80dc.md) → [`00af90d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af90d0.md) FUN_00af90d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af9100",
      "incomplete_value": true,
      "site": "00af910c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af80f0 ["INT_ADD", "register:40f0:8", ["const:af80f0:8", "const:4:8"]]
+ 00af90e4 ["INT_ADD", "register:40f0:8", ["const:af90e4:8", "const:4:8"]]
~~~


<a id="compare-b572a572899ab71bb93cf30e09857db2"></a>

### [`00af8230`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8230.md) → [`00af9224`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9224.md) FUN_00af9224

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af824c ["INT_ADD", "register:40f0:8", ["const:af824c:8", "const:4:8"]]
+ 00af9240 ["INT_ADD", "register:40f0:8", ["const:af9240:8", "const:4:8"]]
~~~


<a id="compare-e3fc8721e9babdc3d2c2c8b0fc47eb9f"></a>

### [`00af827c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af827c.md) → [`00af9270`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9270.md) FUN_00af9270

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00713760`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) [`00715394`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af8290 ["INT_ADD", "register:40f0:8", ["const:af8290:8", "const:4:8"]]
+ 00af9284 ["INT_ADD", "register:40f0:8", ["const:af9284:8", "const:4:8"]]
~~~


<a id="compare-8746b6c64140434af029a30cf1bf4d6b"></a>

### [`00af83d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af83d4.md) → [`00af93c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af93c8.md) FUN_00af93c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00713760`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) [`00715394`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af83e8 ["INT_ADD", "register:40f0:8", ["const:af83e8:8", "const:4:8"]]
+ 00af93dc ["INT_ADD", "register:40f0:8", ["const:af93dc:8", "const:4:8"]]
~~~


<a id="compare-1037c2186ee05494e921647245654a50"></a>

### [`00af8460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8460.md) → [`00af9454`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9454.md) FUN_00af9454

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00713760`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) [`00715394`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af8474 ["INT_ADD", "register:40f0:8", ["const:af8474:8", "const:4:8"]]
+ 00af9468 ["INT_ADD", "register:40f0:8", ["const:af9468:8", "const:4:8"]]
~~~


<a id="compare-0351b3cadba88c7d2438e239221fd74e"></a>

### [`00af8610`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8610.md) → [`00af9604`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9604.md) FUN_00af9604

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00715394`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00715908`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af8624 ["INT_ADD", "register:40f0:8", ["const:af8624:8", "const:4:8"]]
+ 00af9618 ["INT_ADD", "register:40f0:8", ["const:af9618:8", "const:4:8"]]
~~~


<a id="compare-8b1417228edd66597503da10c4aa590f"></a>

### [`00af88d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af88d4.md) → [`00af98c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af98c8.md) FUN_00af98c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00715394`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af98cc",
      "incomplete_value": true,
      "site": "00af98cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af88d8",
      "incomplete_value": true,
      "site": "00af88d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffe0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af98cc",
      "incomplete_value": true,
      "site": "00af98cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af88d8",
      "incomplete_value": true,
      "site": "00af88d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af8904",
      "incomplete_value": true,
      "site": "00af8910",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
- 00af88e8 ["INT_ADD", "register:40f0:8", ["const:af88e8:8", "const:4:8"]]
+ 00af98dc ["INT_ADD", "register:40f0:8", ["const:af98dc:8", "const:4:8"]]
~~~


<a id="compare-fb170c70450b7c0c53ec5f3ea420bea6"></a>

### [`00af8ac0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8ac0.md) → [`00af9ab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9ab4.md) FUN_00af9ab4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af8adc ["INT_ADD", "register:40f0:8", ["const:af8adc:8", "const:4:8"]]
+ 00af9ad0 ["INT_ADD", "register:40f0:8", ["const:af9ad0:8", "const:4:8"]]
~~~


<a id="compare-405d91f065e6e05b921c1d64e508eb9f"></a>

### [`00af8b0c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8b0c.md) → [`00af9b00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9b00.md) FUN_00af9b00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00713760`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af8b20 ["INT_ADD", "register:40f0:8", ["const:af8b20:8", "const:4:8"]]
+ 00af9b14 ["INT_ADD", "register:40f0:8", ["const:af9b14:8", "const:4:8"]]
~~~


<a id="compare-23e1f8626e33e5d9e59f3ec95a400453"></a>

### [`00af8bd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8bd8.md) → [`00af9bcc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9bcc.md) FUN_00af9bcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9c04",
      "incomplete_value": true,
      "site": "00af9c04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af8c10",
      "incomplete_value": true,
      "site": "00af8c10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  }
]
~~~


~~~diff
- 00af8bf4 ["INT_ADD", "register:40f0:8", ["const:af8bf4:8", "const:4:8"]]
+ 00af9be8 ["INT_ADD", "register:40f0:8", ["const:af9be8:8", "const:4:8"]]
~~~


<a id="compare-6f982581e27dd43e16cb3833043ce621"></a>

### [`00af8cb8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8cb8.md) → [`00af9cac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9cac.md) FUN_00af9cac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a52034`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a53028`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af8ccc ["INT_ADD", "register:40f0:8", ["const:af8ccc:8", "const:4:8"]]
+ 00af9cc0 ["INT_ADD", "register:40f0:8", ["const:af9cc0:8", "const:4:8"]]
~~~


<a id="compare-ef50bcd84d478ff0355029e487e612ee"></a>

### [`00af8d8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8d8c.md) → [`00af9d80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9d80.md) FUN_00af9d80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9d84",
      "incomplete_value": true,
      "site": "00af9d84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffe0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af8d90",
      "incomplete_value": true,
      "site": "00af8d90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9d84",
      "incomplete_value": true,
      "site": "00af9d84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af8d90",
      "incomplete_value": true,
      "site": "00af8d90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af9db0",
      "incomplete_value": true,
      "site": "00af9dbc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af8dbc",
      "incomplete_value": true,
      "site": "00af8dc8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
- 00af8da0 ["INT_ADD", "register:40f0:8", ["const:af8da0:8", "const:4:8"]]
+ 00af9d94 ["INT_ADD", "register:40f0:8", ["const:af9d94:8", "const:4:8"]]
~~~


<a id="compare-4b97e99cd3f970f3f27abf19d45efd5b"></a>

### [`00af8f2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8f2c.md) → [`00af9f20`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9f20.md) FUN_00af9f20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35b0.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af45a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45a4.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9f58",
      "incomplete_value": true,
      "site": "00af9f58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af8f64",
      "incomplete_value": true,
      "site": "00af8f64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  }
]
~~~


~~~diff
- 00af8f48 ["INT_ADD", "register:40f0:8", ["const:af8f48:8", "const:4:8"]]
+ 00af9f3c ["INT_ADD", "register:40f0:8", ["const:af9f3c:8", "const:4:8"]]
~~~


<a id="compare-8a2c9a1531a34aac7ada102c0d4802f4"></a>

### [`00af9004`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9004.md) → [`00af9ff8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9ff8.md) FUN_00af9ff8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afa030",
      "incomplete_value": true,
      "site": "00afa03c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              [
                "live",
                "register:101:1"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af903c",
      "incomplete_value": true,
      "site": "00af9048",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
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
- 00af9018 ["INT_ADD", "register:40f0:8", ["const:af9018:8", "const:4:8"]]
+ 00afa00c ["INT_ADD", "register:40f0:8", ["const:afa00c:8", "const:4:8"]]
~~~


<a id="compare-78345e3e682fc9e648d0ac931cf77de5"></a>

### [`00af908c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af908c.md) → [`00afa080`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa080.md) FUN_00afa080

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af90a8 ["INT_ADD", "register:40f0:8", ["const:af90a8:8", "const:4:8"]]
+ 00afa09c ["INT_ADD", "register:40f0:8", ["const:afa09c:8", "const:4:8"]]
~~~


<a id="compare-7cdec1a7ed743b274ac3cc796d9a243f"></a>

### [`00af90d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af90d8.md) → [`00afa0cc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa0cc.md) FUN_00afa0cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af90ec ["INT_ADD", "register:40f0:8", ["const:af90ec:8", "const:4:8"]]
+ 00afa0e0 ["INT_ADD", "register:40f0:8", ["const:afa0e0:8", "const:4:8"]]
~~~


<a id="compare-de4fb2ed03a8bd7db2a70e2d16ab76a8"></a>

### [`00af9118`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9118.md) → [`00afa10c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa10c.md) FUN_00afa10c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af9134 ["INT_ADD", "register:40f0:8", ["const:af9134:8", "const:4:8"]]
+ 00afa128 ["INT_ADD", "register:40f0:8", ["const:afa128:8", "const:4:8"]]
~~~


<a id="compare-6669bb5726db4589289aee016e6afb6c"></a>

### [`00af9350`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9350.md) → [`00afa344`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa344.md) FUN_00afa344

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa348",
      "incomplete_value": true,
      "site": "00afa348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffe0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af9354",
      "incomplete_value": true,
      "site": "00af9354",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa348",
      "incomplete_value": true,
      "site": "00afa348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af9354",
      "incomplete_value": true,
      "site": "00af9354",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afa374",
      "incomplete_value": true,
      "site": "00afa380",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af9380",
      "incomplete_value": true,
      "site": "00af938c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
- 00af9364 ["INT_ADD", "register:40f0:8", ["const:af9364:8", "const:4:8"]]
+ 00afa358 ["INT_ADD", "register:40f0:8", ["const:afa358:8", "const:4:8"]]
~~~


<a id="compare-11fea6b678d2b4cbc27f27aa33b310fb"></a>

### [`00af9bb8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9bb8.md) → [`00afabac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afabac.md) FUN_00afabac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af9bd4 ["INT_ADD", "register:40f0:8", ["const:af9bd4:8", "const:4:8"]]
+ 00afabc8 ["INT_ADD", "register:40f0:8", ["const:afabc8:8", "const:4:8"]]
~~~


<a id="compare-58f61ac5f34a486420fbda0487e342cd"></a>

### [`00af9f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9f38.md) → [`00afaf2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afaf2c.md) FUN_00afaf2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00af9f4c ["INT_ADD", "register:40f0:8", ["const:af9f4c:8", "const:4:8"]]
+ 00afaf40 ["INT_ADD", "register:40f0:8", ["const:afaf40:8", "const:4:8"]]
- 00af9f60 ["INT_ADD", "register:40f0:8", ["const:af9f60:8", "const:4:8"]]
+ 00afaf54 ["INT_ADD", "register:40f0:8", ["const:afaf54:8", "const:4:8"]]
- 00af9f74 ["INT_ADD", "register:40f0:8", ["const:af9f74:8", "const:4:8"]]
+ 00afaf68 ["INT_ADD", "register:40f0:8", ["const:afaf68:8", "const:4:8"]]
~~~


<a id="compare-fc6c7259f6def6105e59f023eb6606e0"></a>

### [`00afa2f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa2f0.md) → [`00afb2e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb2e4.md) FUN_00afb2e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb2ec",
      "incomplete_value": true,
      "site": "00afb2ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa2f8",
      "incomplete_value": true,
      "site": "00afa2f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffd0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb2ec",
      "incomplete_value": true,
      "site": "00afb2ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa2f8",
      "incomplete_value": true,
      "site": "00afa2f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa30c ["INT_ADD", "register:40f0:8", ["const:afa30c:8", "const:4:8"]]
+ 00afb300 ["INT_ADD", "register:40f0:8", ["const:afb300:8", "const:4:8"]]
~~~


<a id="compare-d29ddf1aa4ca2359b0cfbcdd68702bcd"></a>

### [`00afa33c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa33c.md) → [`00afb330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb330.md) FUN_00afb330

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb334",
      "incomplete_value": true,
      "site": "00afb334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffe0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa340",
      "incomplete_value": true,
      "site": "00afa340",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb334",
      "incomplete_value": true,
      "site": "00afb334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa340",
      "incomplete_value": true,
      "site": "00afa340",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa350 ["INT_ADD", "register:40f0:8", ["const:afa350:8", "const:4:8"]]
+ 00afb344 ["INT_ADD", "register:40f0:8", ["const:afb344:8", "const:4:8"]]
~~~


<a id="compare-a7e52b03c83254d0c2fba055a11952a4"></a>

### [`00afa45c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa45c.md) → [`00afb450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb450.md) FUN_00afb450

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afa470 ["INT_ADD", "register:40f0:8", ["const:afa470:8", "const:4:8"]]
+ 00afb464 ["INT_ADD", "register:40f0:8", ["const:afb464:8", "const:4:8"]]
~~~


<a id="compare-40eee24d8b9be3aca9f996f6a552b599"></a>

### [`00afa4e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa4e8.md) → [`00afb4dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb4dc.md) FUN_00afb4dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35f0.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af45e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45e4.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb4e0",
      "incomplete_value": true,
      "site": "00afb4e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa4ec",
      "incomplete_value": true,
      "site": "00afa4ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffd0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb4e4",
      "incomplete_value": true,
      "site": "00afb4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa4f0",
      "incomplete_value": true,
      "site": "00afa4f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffd0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb4e4",
      "incomplete_value": true,
      "site": "00afb4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa4f0",
      "incomplete_value": true,
      "site": "00afa4f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa504 ["INT_ADD", "register:40f0:8", ["const:afa504:8", "const:4:8"]]
+ 00afb4f8 ["INT_ADD", "register:40f0:8", ["const:afb4f8:8", "const:4:8"]]
~~~


<a id="compare-30a8bc7413bae5431093c1b435c9c18a"></a>

### [`00afa534`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa534.md) → [`00afb528`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb528.md) FUN_00afb528

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afa548 ["INT_ADD", "register:40f0:8", ["const:afa548:8", "const:4:8"]]
+ 00afb53c ["INT_ADD", "register:40f0:8", ["const:afb53c:8", "const:4:8"]]
- 00afa55c ["INT_ADD", "register:40f0:8", ["const:afa55c:8", "const:4:8"]]
+ 00afb550 ["INT_ADD", "register:40f0:8", ["const:afb550:8", "const:4:8"]]
- 00afa570 ["INT_ADD", "register:40f0:8", ["const:afa570:8", "const:4:8"]]
+ 00afb564 ["INT_ADD", "register:40f0:8", ["const:afb564:8", "const:4:8"]]
~~~


<a id="compare-87d0359a2e973397cd5ca5b6160a6cd0"></a>

### [`00afa750`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa750.md) → [`00afb744`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb744.md) FUN_00afb744

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afa76c ["INT_ADD", "register:40f0:8", ["const:afa76c:8", "const:4:8"]]
+ 00afb760 ["INT_ADD", "register:40f0:8", ["const:afb760:8", "const:4:8"]]
- 00afa780 ["INT_ADD", "register:40f0:8", ["const:afa780:8", "const:4:8"]]
+ 00afb774 ["INT_ADD", "register:40f0:8", ["const:afb774:8", "const:4:8"]]
- 00afa78c ["INT_ADD", "register:40f0:8", ["const:afa78c:8", "const:4:8"]]
+ 00afb780 ["INT_ADD", "register:40f0:8", ["const:afb780:8", "const:4:8"]]
~~~


<a id="compare-401e3581b34234049a46c8456f92f556"></a>

### [`00afa970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa970.md) → [`00afb964`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb964.md) FUN_00afb964

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afa984 ["INT_ADD", "register:40f0:8", ["const:afa984:8", "const:4:8"]]
+ 00afb978 ["INT_ADD", "register:40f0:8", ["const:afb978:8", "const:4:8"]]
~~~


<a id="compare-3293ed2f3ee6b4c14b31fcaf15f52bf0"></a>

### [`00afac8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afac8c.md) → [`00afbc80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbc80.md) FUN_00afbc80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies

~~~diff
- 00afaca0 ["INT_ADD", "register:40f0:8", ["const:afaca0:8", "const:4:8"]]
+ 00afbc94 ["INT_ADD", "register:40f0:8", ["const:afbc94:8", "const:4:8"]]
~~~


<a id="compare-3d9f597933ecd9a4e8d85e60bc357193"></a>

### [`00afadfc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afadfc.md) → [`00afbdf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbdf0.md) FUN_00afbdf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afae18 ["INT_ADD", "register:40f0:8", ["const:afae18:8", "const:4:8"]]
+ 00afbe0c ["INT_ADD", "register:40f0:8", ["const:afbe0c:8", "const:4:8"]]
~~~


<a id="compare-fa123bab2d1d91dfd7e6aa2f3bdd1818"></a>

### [`00afae90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afae90.md) → [`00afbe84`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbe84.md) FUN_00afbe84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afaeac ["INT_ADD", "register:40f0:8", ["const:afaeac:8", "const:4:8"]]
+ 00afbea0 ["INT_ADD", "register:40f0:8", ["const:afbea0:8", "const:4:8"]]
~~~


<a id="compare-36d4425bd8e5ff3d13b9b3fc5d289dbe"></a>

### [`00afaedc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaedc.md) → [`00afbed0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbed0.md) FUN_00afbed0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afaef0 ["INT_ADD", "register:40f0:8", ["const:afaef0:8", "const:4:8"]]
+ 00afbee4 ["INT_ADD", "register:40f0:8", ["const:afbee4:8", "const:4:8"]]
~~~


<a id="compare-cf53c1676469026e521e8386e123b672"></a>

### [`00afaf24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaf24.md) → [`00afbf18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbf18.md) FUN_00afbf18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afaf40 ["INT_ADD", "register:40f0:8", ["const:afaf40:8", "const:4:8"]]
+ 00afbf34 ["INT_ADD", "register:40f0:8", ["const:afbf34:8", "const:4:8"]]
~~~


<a id="compare-1e8cabde53faf2f174bbad9664b0ce39"></a>

### [`00afb090`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb090.md) → [`00afc084`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc084.md) FUN_00afc084

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 2件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00717198`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc088",
      "incomplete_value": true,
      "site": "00afc088",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb094",
      "incomplete_value": true,
      "site": "00afb094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffe0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc088",
      "incomplete_value": true,
      "site": "00afc088",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb094",
      "incomplete_value": true,
      "site": "00afb094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afc0b4",
      "incomplete_value": true,
      "site": "00afc0c0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb0c0",
      "incomplete_value": true,
      "site": "00afb0cc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
- 00afb0a4 ["INT_ADD", "register:40f0:8", ["const:afb0a4:8", "const:4:8"]]
+ 00afc098 ["INT_ADD", "register:40f0:8", ["const:afc098:8", "const:4:8"]]
~~~


<a id="compare-025b33025ac0ff809094bd2208fae155"></a>

### [`00afb1f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb1f0.md) → [`00afc1e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc1e4.md) FUN_00afc1e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afb20c ["INT_ADD", "register:40f0:8", ["const:afb20c:8", "const:4:8"]]
+ 00afc200 ["INT_ADD", "register:40f0:8", ["const:afc200:8", "const:4:8"]]
~~~


<a id="compare-021f45f06a08ad11ed61596c3d6710aa"></a>

### [`00afb23c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb23c.md) → [`00afc230`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc230.md) FUN_00afc230

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`005f3ab0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f3ab0.md) [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005f3e60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3e60.md) [`005fbd2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afb250 ["INT_ADD", "register:40f0:8", ["const:afb250:8", "const:4:8"]]
+ 00afc244 ["INT_ADD", "register:40f0:8", ["const:afc244:8", "const:4:8"]]
~~~


<a id="compare-98d4b0f0c7135acad4ea75e9c0e8e0f0"></a>

### [`00afb27c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb27c.md) → [`00afc270`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc270.md) FUN_00afc270

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a53028`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afb298 ["INT_ADD", "register:40f0:8", ["const:afb298:8", "const:4:8"]]
+ 00afc28c ["INT_ADD", "register:40f0:8", ["const:afc28c:8", "const:4:8"]]
~~~


<a id="compare-233ccbfe12376d7488fb073ae220ba41"></a>

### [`00afb2c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb2c8.md) → [`00afc2bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc2bc.md) FUN_00afc2bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`005f3ab0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f3ab0.md) [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005f3e60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3e60.md) [`005fbd2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afb2dc ["INT_ADD", "register:40f0:8", ["const:afb2dc:8", "const:4:8"]]
+ 00afc2d0 ["INT_ADD", "register:40f0:8", ["const:afc2d0:8", "const:4:8"]]
~~~


<a id="compare-a9429f2ec3eda1ac1a88a81de7c89f2f"></a>

### [`00afb430`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb430.md) → [`00afc424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc424.md) FUN_00afc424

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afb44c ["INT_ADD", "register:40f0:8", ["const:afb44c:8", "const:4:8"]]
+ 00afc440 ["INT_ADD", "register:40f0:8", ["const:afc440:8", "const:4:8"]]
~~~


<a id="compare-ba8651f4b5f292807134f2d847194655"></a>

### [`00afb4c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb4c4.md) → [`00afc4b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc4b8.md) FUN_00afc4b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afb4e0 ["INT_ADD", "register:40f0:8", ["const:afb4e0:8", "const:4:8"]]
+ 00afc4d4 ["INT_ADD", "register:40f0:8", ["const:afc4d4:8", "const:4:8"]]
~~~


<a id="compare-abc3aa4b8132d924bd6ecf44d570b5b8"></a>

### [`00afb5a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb5a4.md) → [`00afc598`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc598.md) FUN_00afc598

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afc5c8",
      "incomplete_value": true,
      "site": "00afc5d4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb5d4",
      "incomplete_value": true,
      "site": "00afb5e0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
- 00afb5b8 ["INT_ADD", "register:40f0:8", ["const:afb5b8:8", "const:4:8"]]
+ 00afc5ac ["INT_ADD", "register:40f0:8", ["const:afc5ac:8", "const:4:8"]]
~~~


<a id="compare-e19759baeebf4a4cdc8207d8e1036118"></a>

### [`00afb7f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb7f0.md) → [`00afc7e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc7e4.md) FUN_00afc7e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afc814",
      "incomplete_value": true,
      "site": "00afc820",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00afb804 ["INT_ADD", "register:40f0:8", ["const:afb804:8", "const:4:8"]]
+ 00afc7f8 ["INT_ADD", "register:40f0:8", ["const:afc7f8:8", "const:4:8"]]
~~~


<a id="compare-d7903f372d980fb6ca10ea7569916cf2"></a>

### [`00afb830`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb830.md) → [`00afc824`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc824.md) FUN_00afc824

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 4件 [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005fbd2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc85c",
      "incomplete_value": true,
      "site": "00afc85c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb868",
      "incomplete_value": true,
      "site": "00afb868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  }
]
~~~


~~~diff
- 00afb84c ["INT_ADD", "register:40f0:8", ["const:afb84c:8", "const:4:8"]]
+ 00afc840 ["INT_ADD", "register:40f0:8", ["const:afc840:8", "const:4:8"]]
~~~


<a id="compare-46237aa4dd893ab40a05f8b622fc52d4"></a>

### [`00afba2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afba2c.md) → [`00afca20`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afca20.md) FUN_00afca20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afca24",
      "incomplete_value": true,
      "site": "00afca24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffd0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afba30",
      "incomplete_value": true,
      "site": "00afba30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 00afba48 ["INT_ADD", "register:40f0:8", ["const:afba48:8", "const:4:8"]]
+ 00afca3c ["INT_ADD", "register:40f0:8", ["const:afca3c:8", "const:4:8"]]
~~~


<a id="compare-09e46a5fb0f6d0ea55e73565166360dd"></a>

### [`00afbab8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbab8.md) → [`00afcaac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcaac.md) FUN_00afcaac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbad4 ["INT_ADD", "register:40f0:8", ["const:afbad4:8", "const:4:8"]]
+ 00afcac8 ["INT_ADD", "register:40f0:8", ["const:afcac8:8", "const:4:8"]]
~~~


<a id="compare-b2f474fc2e3264385433e93cc03e0c8a"></a>

### [`00afbb04`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbb04.md) → [`00afcaf8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcaf8.md) FUN_00afcaf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005f3158`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbb20 ["INT_ADD", "register:40f0:8", ["const:afbb20:8", "const:4:8"]]
+ 00afcb14 ["INT_ADD", "register:40f0:8", ["const:afcb14:8", "const:4:8"]]
~~~


<a id="compare-a68bcbd601eadbc0ceee147d2a29a760"></a>

### [`00afbb58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbb58.md) → [`00afcb4c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcb4c.md) FUN_00afcb4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbb6c ["INT_ADD", "register:40f0:8", ["const:afbb6c:8", "const:4:8"]]
+ 00afcb60 ["INT_ADD", "register:40f0:8", ["const:afcb60:8", "const:4:8"]]
~~~


<a id="compare-465aefac5b7128b73b9442358f1c99e5"></a>

### [`00afbcb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbcb0.md) → [`00afcca4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcca4.md) FUN_00afcca4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbccc ["INT_ADD", "register:40f0:8", ["const:afbccc:8", "const:4:8"]]
+ 00afccc0 ["INT_ADD", "register:40f0:8", ["const:afccc0:8", "const:4:8"]]
~~~


<a id="compare-f03d35bef5cb25cc5b6ea25ff7184db3"></a>

### [`00afbcfc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbcfc.md) → [`00afccf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afccf0.md) FUN_00afccf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005f3158`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbd18 ["INT_ADD", "register:40f0:8", ["const:afbd18:8", "const:4:8"]]
+ 00afcd0c ["INT_ADD", "register:40f0:8", ["const:afcd0c:8", "const:4:8"]]
~~~


<a id="compare-14257cf198f1a61af2a3e739710d08d3"></a>

### [`00afbd50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbd50.md) → [`00afcd44`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcd44.md) FUN_00afcd44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbd64 ["INT_ADD", "register:40f0:8", ["const:afbd64:8", "const:4:8"]]
+ 00afcd58 ["INT_ADD", "register:40f0:8", ["const:afcd58:8", "const:4:8"]]
~~~


<a id="compare-b1c1e8771364b3ca908c53bc685c2f10"></a>

### [`00afbd90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbd90.md) → [`00afcd84`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcd84.md) FUN_00afcd84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`005f3158`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbdac ["INT_ADD", "register:40f0:8", ["const:afbdac:8", "const:4:8"]]
+ 00afcda0 ["INT_ADD", "register:40f0:8", ["const:afcda0:8", "const:4:8"]]
~~~


<a id="compare-da5e0c3c5dd6d52df822831c112f207a"></a>

### [`00afbddc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbddc.md) → [`00afcdd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcdd0.md) FUN_00afcdd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbdf0 ["INT_ADD", "register:40f0:8", ["const:afbdf0:8", "const:4:8"]]
+ 00afcde4 ["INT_ADD", "register:40f0:8", ["const:afcde4:8", "const:4:8"]]
~~~


<a id="compare-c74bbcdc3e07d006ad748a21d557914e"></a>

### [`00afbe1c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbe1c.md) → [`00afce10`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afce10.md) FUN_00afce10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00715908`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbe38 ["INT_ADD", "register:40f0:8", ["const:afbe38:8", "const:4:8"]]
+ 00afce2c ["INT_ADD", "register:40f0:8", ["const:afce2c:8", "const:4:8"]]
~~~


<a id="compare-7636efdd3d454bf237e71d239e1f8380"></a>

### [`00afbf48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbf48.md) → [`00afcf3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcf3c.md) FUN_00afcf3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbf5c ["INT_ADD", "register:40f0:8", ["const:afbf5c:8", "const:4:8"]]
+ 00afcf50 ["INT_ADD", "register:40f0:8", ["const:afcf50:8", "const:4:8"]]
~~~


<a id="compare-ab3b36da641f54e1c6315a6e72ec80de"></a>

### [`00afbf88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbf88.md) → [`00afcf7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcf7c.md) FUN_00afcf7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`005f3158`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbfa4 ["INT_ADD", "register:40f0:8", ["const:afbfa4:8", "const:4:8"]]
+ 00afcf98 ["INT_ADD", "register:40f0:8", ["const:afcf98:8", "const:4:8"]]
~~~


<a id="compare-2b7411f61d792d04ba8c027576dd234b"></a>

### [`00afbfd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbfd4.md) → [`00afcfc8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcfc8.md) FUN_00afcfc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afbfe8 ["INT_ADD", "register:40f0:8", ["const:afbfe8:8", "const:4:8"]]
+ 00afcfdc ["INT_ADD", "register:40f0:8", ["const:afcfdc:8", "const:4:8"]]
~~~


<a id="compare-d2280f402e80ec498189be5a465d1add"></a>

### [`00afc060`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc060.md) → [`00afd054`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afd/00afd054.md) FUN_00afd054

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afd084",
      "incomplete_value": true,
      "site": "00afd090",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00afc074 ["INT_ADD", "register:40f0:8", ["const:afc074:8", "const:4:8"]]
+ 00afd068 ["INT_ADD", "register:40f0:8", ["const:afd068:8", "const:4:8"]]
~~~


<a id="compare-7b4819d15789aedcfe9435de23b5c22d"></a>

### [`00afc1f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc1f0.md) → [`00afd1e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afd/00afd1e4.md) FUN_00afd1e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`005f3158`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007106e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00afc20c ["INT_ADD", "register:40f0:8", ["const:afc20c:8", "const:4:8"]]
+ 00afd200 ["INT_ADD", "register:40f0:8", ["const:afd200:8", "const:4:8"]]
~~~


