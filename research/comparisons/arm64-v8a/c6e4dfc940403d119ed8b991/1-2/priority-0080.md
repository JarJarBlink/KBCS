# v16.0.2 → v16.0.3 · 最優先の変更候補 (80)

[一覧の目次](README.md)

<a id="compare-8d462e3bca1a337d44f6cf94d4c6bfc8"></a>

### [`00af9278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9278.md) → [`00afa26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa26c.md) FUN_00afa26c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35d0.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af45c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45c4.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af9294 ["INT_ADD", "register:40f0:8", ["const:af9294:8", "const:4:8"]]
- 00af9294 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa288 ["INT_ADD", "register:40f0:8", ["const:afa288:8", "const:4:8"]]
+ 00afa288 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-027e8c10e9b0cb0b7a6e3a1c623cc729"></a>

### [`00af92c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af92c4.md) → [`00afa2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa2b8.md) FUN_00afa2b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af92d8 ["INT_ADD", "register:40f0:8", ["const:af92d8:8", "const:4:8"]]
- 00af92d8 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa2cc ["INT_ADD", "register:40f0:8", ["const:afa2cc:8", "const:4:8"]]
+ 00afa2cc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b2149c98fdfd12ea0980378f30f37170"></a>

### [`00af9304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9304.md) → [`00afa2f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa2f8.md) FUN_00afa2f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35dc.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af45d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45d0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9304",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9308",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af930c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afa2f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afa2fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afa300",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9304 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af9304 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af9304 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af9304 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af9308 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af9308 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af930c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af930c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af930c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af930c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6669bb5726db4589289aee016e6afb6c"></a>

### [`00af9350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9350.md) → [`00afa344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa344.md) FUN_00afa344

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `return_value_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9354",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afa348",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9354 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af9354 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af9354 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af9354 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af9358 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00af9364 ["INT_ADD", "register:40f0:8", ["const:af9364:8", "const:4:8"]]
- 00af9364 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa358 ["INT_ADD", "register:40f0:8", ["const:afa358:8", "const:4:8"]]
+ 00afa358 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-122866f906d98def11650f1746211be0"></a>

### [`00af9390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9390.md) → [`00afa384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa384.md) FUN_00afa384

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af93ac ["INT_ADD", "register:40f0:8", ["const:af93ac:8", "const:4:8"]]
- 00af93ac ["CALL", null, ["callee:008524fc:8"]]
+ 00afa3a0 ["INT_ADD", "register:40f0:8", ["const:afa3a0:8", "const:4:8"]]
+ 00afa3a0 ["CALL", null, ["callee:008524fc:8"]]
- 00af93bc ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af93bc ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af93bc ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af93bc ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af93c0 ["COPY", "register:4048:8", ["const:49e4:8"]]
~~~


<a id="compare-048f39e65533329118dbaed7e37ffbbb"></a>

### [`00af93dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af93dc.md) → [`00afa3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa3d0.md) FUN_00afa3d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af93f0 ["INT_ADD", "register:40f0:8", ["const:af93f0:8", "const:4:8"]]
- 00af93f0 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa3e4 ["INT_ADD", "register:40f0:8", ["const:afa3e4:8", "const:4:8"]]
+ 00afa3e4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a9cb13dc6f4f05c974224a9c5211b0e1"></a>

### [`00af941c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af941c.md) → [`00afa410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa410.md) FUN_00afa410

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af9438 ["INT_ADD", "register:40f0:8", ["const:af9438:8", "const:4:8"]]
- 00af9438 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa42c ["INT_ADD", "register:40f0:8", ["const:afa42c:8", "const:4:8"]]
+ 00afa42c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-130594401fe410a7efe3cafe4f528b8f"></a>

### [`00af9468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9468.md) → [`00afa45c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa45c.md) FUN_00afa45c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 9件 [`005e0f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0f2c.md) [`005e1b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md) [`006899ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/006899ec.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md)
- 新版 呼出元 3件 [`005f3158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) · 呼出先 9件 [`005e12dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e12dc.md) [`005e1f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f20.md) [`00689d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00689/00689d9c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009375c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009375c4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.13% / 新版 74.13%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa558",
      "incomplete_value": false,
      "site": "00afa560",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "leaf",
            "const:0:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa590",
      "incomplete_value": false,
      "site": "00afa598",
      "value": [
        "leaf",
        "const:20:8"
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa5c8",
      "incomplete_value": true,
      "site": "00afa5d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "live",
            "register:40c8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af947c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9480",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9498",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afa470",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afa474",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afa48c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af956c ["INT_ADD", "register:40f0:8", ["const:af956c:8", "const:4:8"]]
- 00af956c ["CALL", null, ["callee:005e12dc:8"]]
+ 00afa560 ["INT_ADD", "register:40f0:8", ["const:afa560:8", "const:4:8"]]
+ 00afa560 ["CALL", null, ["callee:005e12dc:8"]]
- 00af95a4 ["INT_ADD", "register:40f0:8", ["const:af95a4:8", "const:4:8"]]
- 00af95a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00afa598 ["INT_ADD", "register:40f0:8", ["const:afa598:8", "const:4:8"]]
+ 00afa598 ["CALL", null, ["callee:00c58f30:8"]]
- 00af95e0 ["INT_ADD", "register:40f0:8", ["const:af95e0:8", "const:4:8"]]
- 00af95e0 ["CALL", null, ["callee:009375c4:8"]]
+ 00afa5d4 ["INT_ADD", "register:40f0:8", ["const:afa5d4:8", "const:4:8"]]
+ 00afa5d4 ["CALL", null, ["callee:009375c4:8"]]
~~~


<a id="compare-21672dcbf1cd1d85a4e52302c35edd00"></a>

### [`00af96d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af96d0.md) → [`00afa6c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa6c4.md) FUN_00afa6c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.29% / 新版 89.29%

~~~diff
- 00af96e4 ["INT_ADD", "register:40f0:8", ["const:af96e4:8", "const:4:8"]]
- 00af96e4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa6d8 ["INT_ADD", "register:40f0:8", ["const:afa6d8:8", "const:4:8"]]
+ 00afa6d8 ["CALL", null, ["callee:008524fc:8"]]
- 00af96f8 ["INT_ADD", "register:40f0:8", ["const:af96f8:8", "const:4:8"]]
- 00af96f8 ["CALL", null, ["callee:005e7810:8"]]
+ 00afa6ec ["INT_ADD", "register:40f0:8", ["const:afa6ec:8", "const:4:8"]]
+ 00afa6ec ["CALL", null, ["callee:005e7810:8"]]
- 00af9704 ["BRANCH", null, ["local:b3:8"]]
+ 00afa6f8 ["BRANCH", null, ["local:b6:8"]]
~~~


<a id="compare-663846a0ebf5bcb77d38c34f0296c84e"></a>

### [`00af9740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9740.md) → [`00afa734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa734.md) FUN_00afa734

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.14% / 新版 82.14%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af976c",
      "incomplete_value": true,
      "site": "00af9770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9740",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9744",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9748",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afa734",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afa738",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afa73c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9770 ["INT_ADD", "register:40f0:8", ["const:af9770:8", "const:4:8"]]
- 00af9770 ["CALL", null, ["callee:005e7810:8"]]
+ 00afa764 ["INT_ADD", "register:40f0:8", ["const:afa764:8", "const:4:8"]]
+ 00afa764 ["CALL", null, ["callee:005e7810:8"]]
- 00af9740 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af9740 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af9740 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af9740 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af9744 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af9744 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-80247ad88ec203be921f5e9b9b59d145"></a>

### [`00af97b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af97b0.md) → [`00afa7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa7a4.md) FUN_00afa7a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.14% / 新版 82.14%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af97d4",
      "incomplete_value": true,
      "site": "00af97d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af97b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af97b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afa7a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afa7a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af97d8 ["INT_ADD", "register:40f0:8", ["const:af97d8:8", "const:4:8"]]
- 00af97d8 ["CALL", null, ["callee:005e7810:8"]]
+ 00afa7cc ["INT_ADD", "register:40f0:8", ["const:afa7cc:8", "const:4:8"]]
+ 00afa7cc ["CALL", null, ["callee:005e7810:8"]]
- 00af97b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af97b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af97b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af97b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af97b4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af97b4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af97b4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af97b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ac8a1ae644945308231a1ce119bc9162"></a>

### [`00af9820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9820.md) → [`00afa814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa814.md) FUN_00afa814

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9820",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9824",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afa814",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afa818",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9820 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af9820 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af9820 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af9820 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af9824 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af9824 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af983c ["INT_ADD", "register:40f0:8", ["const:af983c:8", "const:4:8"]]
- 00af983c ["CALL", null, ["callee:008524fc:8"]]
+ 00afa830 ["INT_ADD", "register:40f0:8", ["const:afa830:8", "const:4:8"]]
+ 00afa830 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-17809e6c7092f90682126eaff54768b9"></a>

### [`00af9890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9890.md) → [`00afa884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa884.md) FUN_00afa884

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af98a4 ["INT_ADD", "register:40f0:8", ["const:af98a4:8", "const:4:8"]]
- 00af98a4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa898 ["INT_ADD", "register:40f0:8", ["const:afa898:8", "const:4:8"]]
+ 00afa898 ["CALL", null, ["callee:008524fc:8"]]
- 00af98b8 ["INT_ADD", "register:40f0:8", ["const:af98b8:8", "const:4:8"]]
- 00af98b8 ["CALL", null, ["callee:005e7810:8"]]
+ 00afa8ac ["INT_ADD", "register:40f0:8", ["const:afa8ac:8", "const:4:8"]]
+ 00afa8ac ["CALL", null, ["callee:005e7810:8"]]
- 00af98bc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af98bc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af98bc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af98bc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00afa8b0 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00afa8b0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00afa8b0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00afa8b0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-9c5828f44559ed71c7c370bee2242d82"></a>

### [`00af9900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9900.md) → [`00afa8f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa8f4.md) FUN_00afa8f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9900",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9904",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9908",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afa8f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afa8f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afa8fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9900 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af9900 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af9900 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af9900 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af9904 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af9904 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af9908 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af9908 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af9908 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af9908 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6c4ddf162600571b05c5b4ce41e47610"></a>

### [`00af9970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9970.md) → [`00afa964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa964.md) FUN_00afa964

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa988",
      "incomplete_value": true,
      "site": "00afa98c",
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00af9998 ["INT_ADD", "register:40f0:8", ["const:af9998:8", "const:4:8"]]
- 00af9998 ["CALL", null, ["callee:005e7810:8"]]
+ 00afa98c ["INT_ADD", "register:40f0:8", ["const:afa98c:8", "const:4:8"]]
+ 00afa98c ["CALL", null, ["callee:005e7810:8"]]
- 00af9984 ["INT_ADD", "register:40f0:8", ["const:af9984:8", "const:4:8"]]
- 00af9984 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa978 ["INT_ADD", "register:40f0:8", ["const:afa978:8", "const:4:8"]]
+ 00afa978 ["CALL", null, ["callee:008524fc:8"]]
- 00af999c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af999c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af999c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af999c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00afa990 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00afa990 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00afa990 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00afa990 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-c549d163ee23335d5d925827b2464754"></a>

### [`00af99e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af99e0.md) → [`00afa9d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa9d4.md) FUN_00afa9d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00af99fc ["INT_ADD", "register:40f0:8", ["const:af99fc:8", "const:4:8"]]
- 00af99fc ["CALL", null, ["callee:008524fc:8"]]
+ 00afa9f0 ["INT_ADD", "register:40f0:8", ["const:afa9f0:8", "const:4:8"]]
+ 00afa9f0 ["CALL", null, ["callee:008524fc:8"]]
- 00af9a10 ["INT_ADD", "register:40f0:8", ["const:af9a10:8", "const:4:8"]]
- 00af9a10 ["CALL", null, ["callee:005e7810:8"]]
+ 00afaa04 ["INT_ADD", "register:40f0:8", ["const:afaa04:8", "const:4:8"]]
+ 00afaa04 ["CALL", null, ["callee:005e7810:8"]]
- 00af9a20 ["INT_ADD", "register:40f0:8", ["const:af9a20:8", "const:4:8"]]
- 00af9a20 ["CALL", null, ["callee:008524fc:8"]]
+ 00afaa14 ["INT_ADD", "register:40f0:8", ["const:afaa14:8", "const:4:8"]]
+ 00afaa14 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f7e13c2a6122722dd2745db933cd3aeb"></a>

### [`00af9a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9a50.md) → [`00afaa44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afaa44.md) FUN_00afaa44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afaa68",
      "incomplete_value": true,
      "site": "00afaa6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af9a74",
      "incomplete_value": true,
      "site": "00af9a78",
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
  }
]
~~~


~~~diff
- 00af9a78 ["INT_ADD", "register:40f0:8", ["const:af9a78:8", "const:4:8"]]
- 00af9a78 ["CALL", null, ["callee:005e7810:8"]]
+ 00afaa6c ["INT_ADD", "register:40f0:8", ["const:afaa6c:8", "const:4:8"]]
+ 00afaa6c ["CALL", null, ["callee:005e7810:8"]]
- 00af9a64 ["INT_ADD", "register:40f0:8", ["const:af9a64:8", "const:4:8"]]
- 00af9a64 ["CALL", null, ["callee:008524fc:8"]]
+ 00afaa58 ["INT_ADD", "register:40f0:8", ["const:afaa58:8", "const:4:8"]]
+ 00afaa58 ["CALL", null, ["callee:008524fc:8"]]
- 00af9a74 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af9a74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af9a74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af9a74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6e1c3a71dad804611d1f9414b85c1ca4"></a>

### [`00af9ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9ac0.md) → [`00afaab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afaab4.md) FUN_00afaab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afaae0",
      "incomplete_value": true,
      "site": "00afaae4",
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
    "old": {
      "definition_site": "00af9aec",
      "incomplete_value": true,
      "site": "00af9af0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00af9af0 ["INT_ADD", "register:40f0:8", ["const:af9af0:8", "const:4:8"]]
- 00af9af0 ["CALL", null, ["callee:005e7810:8"]]
+ 00afaae4 ["INT_ADD", "register:40f0:8", ["const:afaae4:8", "const:4:8"]]
+ 00afaae4 ["CALL", null, ["callee:005e7810:8"]]
- 00af9adc ["INT_ADD", "register:40f0:8", ["const:af9adc:8", "const:4:8"]]
- 00af9adc ["CALL", null, ["callee:008524fc:8"]]
+ 00afaad0 ["INT_ADD", "register:40f0:8", ["const:afaad0:8", "const:4:8"]]
+ 00afaad0 ["CALL", null, ["callee:008524fc:8"]]
- 00af9aec ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af9aec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af9aec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af9aec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3242e4b92866d7f439adb9fb75ce655b"></a>

### [`00af9b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9b30.md) → [`00afab24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afab24.md) FUN_00afab24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af9b68",
      "incomplete_value": true,
      "site": "00af9b74",
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
- 00af9b44 ["INT_ADD", "register:40f0:8", ["const:af9b44:8", "const:4:8"]]
- 00af9b44 ["CALL", null, ["callee:008524fc:8"]]
+ 00afab38 ["INT_ADD", "register:40f0:8", ["const:afab38:8", "const:4:8"]]
+ 00afab38 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-106ca2ab198b5a7a902538e292a7a7a4"></a>

### [`00af9b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9b78.md) → [`00afab6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afab6c.md) FUN_00afab6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afab9c",
      "incomplete_value": true,
      "site": "00afaba8",
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
- 00af9b8c ["INT_ADD", "register:40f0:8", ["const:af9b8c:8", "const:4:8"]]
- 00af9b8c ["CALL", null, ["callee:008524fc:8"]]
+ 00afab80 ["INT_ADD", "register:40f0:8", ["const:afab80:8", "const:4:8"]]
+ 00afab80 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-ac364e832aaa81d5e4efba96c4fb76ca"></a>

### [`00af9c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9c04.md) → [`00afabf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afabf8.md) FUN_00afabf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 77.78% / 新版 77.78%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af9c3c",
      "incomplete_value": true,
      "site": "00af9c48",
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
- 00af9c18 ["INT_ADD", "register:40f0:8", ["const:af9c18:8", "const:4:8"]]
- 00af9c18 ["CALL", null, ["callee:008524fc:8"]]
+ 00afac0c ["INT_ADD", "register:40f0:8", ["const:afac0c:8", "const:4:8"]]
+ 00afac0c ["CALL", null, ["callee:008524fc:8"]]
- 00af9c28 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af9c28 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af9c28 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af9c28 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af9c2c ["COPY", "register:4048:8", ["const:49b4:8"]]
~~~


<a id="compare-78db3b1c4f9a5a56549233a99c26cc6c"></a>

### [`00af9c4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9c4c.md) → [`00afac40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afac40.md) FUN_00afac40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9c4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9c50",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9c54",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afac40",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afac44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afac48",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9c4c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af9c4c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af9c4c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af9c4c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af9c50 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af9c50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af9c54 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af9c54 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af9c54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af9c54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-12622b219ec35ea407b93199e17233bd"></a>

### [`00af9c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9c98.md) → [`00afac8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afac8c.md) FUN_00afac8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9c98",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9c9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afac8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afac90",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9c98 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af9c98 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af9c98 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af9c98 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af9c9c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af9c9c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af9c9c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af9c9c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af9cac ["INT_ADD", "register:40f0:8", ["const:af9cac:8", "const:4:8"]]
- 00af9cac ["CALL", null, ["callee:008524fc:8"]]
+ 00afaca0 ["INT_ADD", "register:40f0:8", ["const:afaca0:8", "const:4:8"]]
+ 00afaca0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-623c215593a25e71ef96bbe1420c446d"></a>

### [`00af9d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9d08.md) → [`00afacfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afacfc.md) FUN_00afacfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.14% / 新版 82.14%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9d08",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9d0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af9d10",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afacfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afad00",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afad04",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9d08 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af9d08 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af9d08 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af9d08 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af9d0c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af9d0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af9d10 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af9d10 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af9d10 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af9d10 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-536c639a271b7b51cac3c6e516b8d5ca"></a>

### [`00af9d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9d78.md) → [`00afad6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afad6c.md) FUN_00afad6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af9d8c ["INT_ADD", "register:40f0:8", ["const:af9d8c:8", "const:4:8"]]
- 00af9d8c ["CALL", null, ["callee:008524fc:8"]]
+ 00afad80 ["INT_ADD", "register:40f0:8", ["const:afad80:8", "const:4:8"]]
+ 00afad80 ["CALL", null, ["callee:008524fc:8"]]
- 00af9da0 ["INT_ADD", "register:40f0:8", ["const:af9da0:8", "const:4:8"]]
- 00af9da0 ["CALL", null, ["callee:005e7810:8"]]
+ 00afad94 ["INT_ADD", "register:40f0:8", ["const:afad94:8", "const:4:8"]]
+ 00afad94 ["CALL", null, ["callee:005e7810:8"]]
- 00af9dac ["BRANCH", null, ["local:b3:8"]]
+ 00afada0 ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-f38a47cce08e2deec1939553917b7578"></a>

### [`00af9e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9e58.md) → [`00afae4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afae4c.md) FUN_00afae4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 00af9e6c ["INT_ADD", "register:40f0:8", ["const:af9e6c:8", "const:4:8"]]
- 00af9e6c ["CALL", null, ["callee:008524fc:8"]]
+ 00afae60 ["INT_ADD", "register:40f0:8", ["const:afae60:8", "const:4:8"]]
+ 00afae60 ["CALL", null, ["callee:008524fc:8"]]
- 00af9e80 ["INT_ADD", "register:40f0:8", ["const:af9e80:8", "const:4:8"]]
- 00af9e80 ["CALL", null, ["callee:005e7810:8"]]
+ 00afae74 ["INT_ADD", "register:40f0:8", ["const:afae74:8", "const:4:8"]]
+ 00afae74 ["CALL", null, ["callee:005e7810:8"]]
- 00af9e8c ["BRANCH", null, ["local:b5:8"]]
+ 00afae80 ["BRANCH", null, ["local:b3:8"]]
~~~


<a id="compare-5719abef2ac7c56a952e2c3416c30c3f"></a>

### [`00af9ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9ec8.md) → [`00afaebc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afaebc.md) FUN_00afaebc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 00af9ee4 ["INT_ADD", "register:40f0:8", ["const:af9ee4:8", "const:4:8"]]
- 00af9ee4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afaed8 ["INT_ADD", "register:40f0:8", ["const:afaed8:8", "const:4:8"]]
+ 00afaed8 ["CALL", null, ["callee:008524fc:8"]]
- 00af9ef8 ["INT_ADD", "register:40f0:8", ["const:af9ef8:8", "const:4:8"]]
- 00af9ef8 ["CALL", null, ["callee:005e7810:8"]]
+ 00afaeec ["INT_ADD", "register:40f0:8", ["const:afaeec:8", "const:4:8"]]
+ 00afaeec ["CALL", null, ["callee:005e7810:8"]]
- 00af9efc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af9efc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af9efc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af9efc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00afaef0 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00afaef0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00afaef0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00afaef0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-33b5183febb57d80135fe650d50f4d03"></a>

### [`00af9fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9fa8.md) → [`00afaf9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afaf9c.md) FUN_00afaf9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af9fc4 ["INT_ADD", "register:40f0:8", ["const:af9fc4:8", "const:4:8"]]
- 00af9fc4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afafb8 ["INT_ADD", "register:40f0:8", ["const:afafb8:8", "const:4:8"]]
+ 00afafb8 ["CALL", null, ["callee:008524fc:8"]]
- 00af9fd8 ["INT_ADD", "register:40f0:8", ["const:af9fd8:8", "const:4:8"]]
- 00af9fd8 ["CALL", null, ["callee:005e7810:8"]]
+ 00afafcc ["INT_ADD", "register:40f0:8", ["const:afafcc:8", "const:4:8"]]
+ 00afafcc ["CALL", null, ["callee:005e7810:8"]]
- 00af9fdc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af9fdc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af9fdc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af9fdc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00afafd0 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00afafd0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00afafd0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00afafd0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-b8092ece3982851dccd37129b46dd20d"></a>

### [`00afa018`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa018.md) → [`00afb00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb00c.md) FUN_00afb00c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 69.64% / 新版 69.64%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afb030",
      "incomplete_value": true,
      "site": "00afb034",
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
    "old": {
      "definition_site": "00afa03c",
      "incomplete_value": true,
      "site": "00afa040",
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
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afb058",
      "incomplete_value": true,
      "site": "00afb05c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa064",
      "incomplete_value": true,
      "site": "00afa068",
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
    "ordinal": 3,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00afb068",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00afa0c4"
      ]
    ],
    [
      "00afb0b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00afa0c4"
      ]
    ],
    [
      "unmatched:00afa0c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00afb0e4"
      ]
    ]
  ],
  "added": [
    [
      "00afb068",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00afb0b8"
      ]
    ],
    [
      "00afb090",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00afb0b8"
      ]
    ],
    [
      "00afb094",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa040 ["INT_ADD", "register:40f0:8", ["const:afa040:8", "const:4:8"]]
- 00afa040 ["CALL", null, ["callee:005e7810:8"]]
+ 00afb034 ["INT_ADD", "register:40f0:8", ["const:afb034:8", "const:4:8"]]
+ 00afb034 ["CALL", null, ["callee:005e7810:8"]]
- 00afa068 ["INT_ADD", "register:40f0:8", ["const:afa068:8", "const:4:8"]]
- 00afa068 ["CALL", null, ["callee:005e7810:8"]]
+ 00afb05c ["INT_ADD", "register:40f0:8", ["const:afb05c:8", "const:4:8"]]
+ 00afb05c ["CALL", null, ["callee:005e7810:8"]]
- 00afa02c ["INT_ADD", "register:40f0:8", ["const:afa02c:8", "const:4:8"]]
- 00afa02c ["CALL", null, ["callee:008524fc:8"]]
+ 00afb020 ["INT_ADD", "register:40f0:8", ["const:afb020:8", "const:4:8"]]
+ 00afb020 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-1ece5e5eae7ff7e668daa3cb9f0a5858"></a>

### [`00afa0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa0f8.md) → [`00afb0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb0ec.md) FUN_00afb0ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.22% / 新版 97.22%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afa11c ["INT_ADD", "register:40f0:8", ["const:afa11c:8", "const:4:8"]]
- 00afa11c ["CALL", null, ["callee:008524fc:8"]]
+ 00afb110 ["INT_ADD", "register:40f0:8", ["const:afb110:8", "const:4:8"]]
+ 00afb110 ["CALL", null, ["callee:008524fc:8"]]
- 00afa130 ["INT_ADD", "register:40f0:8", ["const:afa130:8", "const:4:8"]]
- 00afa130 ["CALL", null, ["callee:005e7810:8"]]
+ 00afb124 ["INT_ADD", "register:40f0:8", ["const:afb124:8", "const:4:8"]]
+ 00afb124 ["CALL", null, ["callee:005e7810:8"]]
- 00afa13c ["INT_ADD", "register:40f0:8", ["const:afa13c:8", "const:4:8"]]
- 00afa13c ["CALL", null, ["callee:008524fc:8"]]
+ 00afb130 ["INT_ADD", "register:40f0:8", ["const:afb130:8", "const:4:8"]]
+ 00afb130 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c7576a3471e5054d4e0a0331d2d14976"></a>

### [`00afa188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa188.md) → [`00afb17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb17c.md) FUN_00afb17c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afb1c8",
      "incomplete_value": true,
      "site": "00afb1cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa1d4",
      "incomplete_value": true,
      "site": "00afa1d8",
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
    "ordinal": 3,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa188",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa18c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afb1d8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00afa234"
      ]
    ]
  ],
  "added": [
    [
      "00afb17c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afb180",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afb1d8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00afb228"
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa1d8 ["INT_ADD", "register:40f0:8", ["const:afa1d8:8", "const:4:8"]]
- 00afa1d8 ["CALL", null, ["callee:005e7810:8"]]
+ 00afb1cc ["INT_ADD", "register:40f0:8", ["const:afb1cc:8", "const:4:8"]]
+ 00afb1cc ["CALL", null, ["callee:005e7810:8"]]
- 00afa188 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afa188 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afa188 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00afa188 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afa18c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afa18c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afa18c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afa18c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c502f27025d9c4e4d0fe0232da03a04f"></a>

### [`00afa268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa268.md) → [`00afb25c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb25c.md) FUN_00afb25c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.44% / 新版 94.44%

~~~diff
- 00afa27c ["INT_ADD", "register:40f0:8", ["const:afa27c:8", "const:4:8"]]
- 00afa27c ["CALL", null, ["callee:008524fc:8"]]
+ 00afb270 ["INT_ADD", "register:40f0:8", ["const:afb270:8", "const:4:8"]]
+ 00afb270 ["CALL", null, ["callee:008524fc:8"]]
- 00afa298 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00afa298 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00afa298 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00afa298 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
+ 00afb28c ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00afb28c ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 00afb28c ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
+ 00afb28c ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
~~~


<a id="compare-d0a2ba10276fbb65e57f2ab44c6cac1b"></a>

### [`00afa2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa2b0.md) → [`00afb2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb2a4.md) FUN_00afb2a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00afa2c4 ["INT_ADD", "register:40f0:8", ["const:afa2c4:8", "const:4:8"]]
- 00afa2c4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb2b8 ["INT_ADD", "register:40f0:8", ["const:afb2b8:8", "const:4:8"]]
+ 00afb2b8 ["CALL", null, ["callee:008524fc:8"]]
- 00afa2ec ["COPY", "register:0:8", ["register:40f0:8"]]
- 00afa2ec ["RETURN", null, ["register:0:8"]]
+ 00afb2e0 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00afb2e0 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-fc6c7259f6def6105e59f023eb6606e0"></a>

### [`00afa2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa2f0.md) → [`00afb2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb2e4.md) FUN_00afb2e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.47% / 新版 89.47%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa2f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb2ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa2f8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afa2f8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afa2f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afa2f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afa2fc ["COPY", "register:40e8:8", ["register:8:8"]]
- 00afa30c ["INT_ADD", "register:40f0:8", ["const:afa30c:8", "const:4:8"]]
- 00afa30c ["CALL", null, ["callee:008524fc:8"]]
+ 00afb300 ["INT_ADD", "register:40f0:8", ["const:afb300:8", "const:4:8"]]
+ 00afb300 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d29ddf1aa4ca2359b0cfbcdd68702bcd"></a>

### [`00afa33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa33c.md) → [`00afb330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb330.md) FUN_00afb330

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa340",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb334",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa340 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afa340 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afa340 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afa340 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afa344 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00afa350 ["INT_ADD", "register:40f0:8", ["const:afa350:8", "const:4:8"]]
- 00afa350 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb344 ["INT_ADD", "register:40f0:8", ["const:afb344:8", "const:4:8"]]
+ 00afb344 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-42c2e56a126891d4b06a7649bbd6d88b"></a>

### [`00afa384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa384.md) → [`00afb378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb378.md) FUN_00afb378

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afa398 ["INT_ADD", "register:40f0:8", ["const:afa398:8", "const:4:8"]]
- 00afa398 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb38c ["INT_ADD", "register:40f0:8", ["const:afb38c:8", "const:4:8"]]
+ 00afb38c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-bb27892eb34d4881f1018562c652995e"></a>

### [`00afa3c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa3c4.md) → [`00afb3b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb3b8.md) FUN_00afb3b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 52.63% / 新版 52.63%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa3c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa3c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa3cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb3b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afb3bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afb3c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa3c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afa3c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afa3c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afa3c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afa3c8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afa3c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afa3cc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afa3cc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afa3cc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afa3cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d5aa916af26cd863d6d52399088c5d2e"></a>

### [`00afa410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa410.md) → [`00afb404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb404.md) FUN_00afb404

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 36.84% / 新版 36.84%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa410",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa414",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa418",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb404",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afb408",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afb40c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa410 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afa410 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afa410 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afa410 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afa414 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afa414 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afa418 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afa418 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afa418 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afa418 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f497aa1a7c3863d0db78d253d7937560"></a>

### [`00afa49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa49c.md) → [`00afb490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb490.md) FUN_00afb490

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 57.89% / 新版 57.89%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa49c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa4a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa4a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb490",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afb494",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afb498",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa49c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afa49c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afa49c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afa49c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afa4a0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afa4a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afa4a4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afa4a4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afa4a4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afa4a4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-40eee24d8b9be3aca9f996f6a552b599"></a>

### [`00afa4e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa4e8.md) → [`00afb4dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb4dc.md) FUN_00afb4dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35f0.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af45e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45e4.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa4ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa4f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb4e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afb4e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa4ec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afa4ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afa4f0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afa4f0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afa4f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afa4f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afa4f4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-3319dfbbe60fa9207389aa6855c45a87"></a>

### [`00afa5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa5a4.md) → [`00afb598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb598.md) FUN_00afb598

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afb5c4",
      "incomplete_value": true,
      "site": "00afb5c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa5d0",
      "incomplete_value": true,
      "site": "00afa5d4",
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
  }
]
~~~


~~~diff
- 00afa5d4 ["INT_ADD", "register:40f0:8", ["const:afa5d4:8", "const:4:8"]]
- 00afa5d4 ["CALL", null, ["callee:005e7810:8"]]
+ 00afb5c8 ["INT_ADD", "register:40f0:8", ["const:afb5c8:8", "const:4:8"]]
+ 00afb5c8 ["CALL", null, ["callee:005e7810:8"]]
- 00afa5c0 ["INT_ADD", "register:40f0:8", ["const:afa5c0:8", "const:4:8"]]
- 00afa5c0 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb5b4 ["INT_ADD", "register:40f0:8", ["const:afb5b4:8", "const:4:8"]]
+ 00afb5b4 ["CALL", null, ["callee:008524fc:8"]]
- 00afa5d0 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00afa5d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00afa5d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00afa5d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d812705db805de64711016eabdc4e251"></a>

### [`00afa614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa614.md) → [`00afb608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb608.md) FUN_00afb608

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa614",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa618",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb608",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afb60c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa614 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afa614 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afa614 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00afa614 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afa618 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afa618 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afa618 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afa618 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afa628 ["INT_ADD", "register:40f0:8", ["const:afa628:8", "const:4:8"]]
- 00afa628 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb61c ["INT_ADD", "register:40f0:8", ["const:afb61c:8", "const:4:8"]]
+ 00afb61c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-ca92b3aaafcaec3383d730655104a579"></a>

### [`00afa67c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa67c.md) → [`00afb670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb670.md) FUN_00afb670

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.37% / 新版 70.37%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00afb6a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00afa6d8"
      ]
    ],
    [
      "unmatched:00afa6d8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa6dc",
      "READ",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb6a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00afb6cc"
      ]
    ],
    [
      "00afb6cc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afb6d0",
      "READ",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa698 ["INT_ADD", "register:40f0:8", ["const:afa698:8", "const:4:8"]]
- 00afa698 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb68c ["INT_ADD", "register:40f0:8", ["const:afb68c:8", "const:4:8"]]
+ 00afb68c ["CALL", null, ["callee:008524fc:8"]]
- 00afa6ac ["INT_ADD", "register:40f0:8", ["const:afa6ac:8", "const:4:8"]]
- 00afa6ac ["CALL", null, ["callee:005e7810:8"]]
+ 00afb6a0 ["INT_ADD", "register:40f0:8", ["const:afb6a0:8", "const:4:8"]]
+ 00afb6a0 ["CALL", null, ["callee:005e7810:8"]]
- 00afa6b0 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00afa6b0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00afa6b0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00afa6b0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00afb6a4 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00afb6a4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00afb6a4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00afb6a4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-25be770e6c4ba569cc309af19d06af97"></a>

### [`00afa6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa6e8.md) → [`00afb6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb6dc.md) FUN_00afb6dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afb700",
      "incomplete_value": true,
      "site": "00afb704",
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa710 ["INT_ADD", "register:40f0:8", ["const:afa710:8", "const:4:8"]]
- 00afa710 ["CALL", null, ["callee:005e7810:8"]]
+ 00afb704 ["INT_ADD", "register:40f0:8", ["const:afb704:8", "const:4:8"]]
+ 00afb704 ["CALL", null, ["callee:005e7810:8"]]
- 00afa6fc ["INT_ADD", "register:40f0:8", ["const:afa6fc:8", "const:4:8"]]
- 00afa6fc ["CALL", null, ["callee:008524fc:8"]]
+ 00afb6f0 ["INT_ADD", "register:40f0:8", ["const:afb6f0:8", "const:4:8"]]
+ 00afb6f0 ["CALL", null, ["callee:008524fc:8"]]
- 00afa714 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00afa714 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00afa714 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00afa714 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00afb708 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00afb708 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00afb708 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00afb708 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-819af9c5aeca702976224438292899e0"></a>

### [`00afa7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa7bc.md) → [`00afb7b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb7b0.md) FUN_00afb7b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afb7d4",
      "incomplete_value": true,
      "site": "00afb7d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa7e0",
      "incomplete_value": true,
      "site": "00afa7e4",
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
  }
]
~~~


~~~diff
- 00afa7e4 ["INT_ADD", "register:40f0:8", ["const:afa7e4:8", "const:4:8"]]
- 00afa7e4 ["CALL", null, ["callee:005e7810:8"]]
+ 00afb7d8 ["INT_ADD", "register:40f0:8", ["const:afb7d8:8", "const:4:8"]]
+ 00afb7d8 ["CALL", null, ["callee:005e7810:8"]]
- 00afa7d0 ["INT_ADD", "register:40f0:8", ["const:afa7d0:8", "const:4:8"]]
- 00afa7d0 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb7c4 ["INT_ADD", "register:40f0:8", ["const:afb7c4:8", "const:4:8"]]
+ 00afb7c4 ["CALL", null, ["callee:008524fc:8"]]
- 00afa7e0 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00afa7e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00afa7e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00afa7e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e96ed785db5bc3a37818c15e6196c571"></a>

### [`00afa82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa82c.md) → [`00afb820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb820.md) FUN_00afb820

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afa848 ["INT_ADD", "register:40f0:8", ["const:afa848:8", "const:4:8"]]
- 00afa848 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb83c ["INT_ADD", "register:40f0:8", ["const:afb83c:8", "const:4:8"]]
+ 00afb83c ["CALL", null, ["callee:008524fc:8"]]
- 00afa85c ["INT_ADD", "register:40f0:8", ["const:afa85c:8", "const:4:8"]]
- 00afa85c ["CALL", null, ["callee:005e7810:8"]]
+ 00afb850 ["INT_ADD", "register:40f0:8", ["const:afb850:8", "const:4:8"]]
+ 00afb850 ["CALL", null, ["callee:005e7810:8"]]
- 00afa860 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00afa860 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00afa860 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00afa860 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00afb854 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00afb854 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00afb854 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00afb854 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-8d98cc02916d49ab78cf9670272d8847"></a>

### [`00afa904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa904.md) → [`00afb8f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb8f8.md) FUN_00afb8f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afa920 ["INT_ADD", "register:40f0:8", ["const:afa920:8", "const:4:8"]]
- 00afa920 ["CALL", null, ["callee:008524fc:8"]]
+ 00afb914 ["INT_ADD", "register:40f0:8", ["const:afb914:8", "const:4:8"]]
+ 00afb914 ["CALL", null, ["callee:008524fc:8"]]
- 00afa934 ["INT_ADD", "register:40f0:8", ["const:afa934:8", "const:4:8"]]
- 00afa934 ["CALL", null, ["callee:005e7810:8"]]
+ 00afb928 ["INT_ADD", "register:40f0:8", ["const:afb928:8", "const:4:8"]]
+ 00afb928 ["CALL", null, ["callee:005e7810:8"]]
- 00afa938 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00afa938 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00afa938 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00afa938 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00afb92c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00afb92c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00afb92c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00afb92c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-8412ca6f7ea5c970b1cffb29ed46f403"></a>

### [`00afa9b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa9b8.md) → [`00afb9ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb9ac.md) FUN_00afb9ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa9ec",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa9f0",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb9e0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afb9e4",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa9cc ["INT_ADD", "register:40f0:8", ["const:afa9cc:8", "const:4:8"]]
- 00afa9cc ["CALL", null, ["callee:008524fc:8"]]
+ 00afb9c0 ["INT_ADD", "register:40f0:8", ["const:afb9c0:8", "const:4:8"]]
+ 00afb9c0 ["CALL", null, ["callee:008524fc:8"]]
- 00afa9dc ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00afa9dc ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00afa9dc ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afa9dc ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afa9e0 ["COPY", "register:4048:8", ["const:4ca0:8"]]
~~~


<a id="compare-8b53d9ece6e4058b92480496a08f3d13"></a>

### [`00afa9f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa9f8.md) → [`00afb9ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afb9ec.md) FUN_00afb9ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afa9f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afa9fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afaa00",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afb9ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afb9f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afb9f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afa9f8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afa9f8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afa9f8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afa9f8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afa9fc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afa9fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afaa00 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afaa00 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afaa00 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afaa00 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f2b240f824647cd5774021c95cc01fcd"></a>

### [`00afaa44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaa44.md) → [`00afba38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afba38.md) FUN_00afba38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afaa44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afaa48",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afaa78",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afba38",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afba3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afba6c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afaa44 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afaa44 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afaa44 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00afaa44 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afaa48 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afaa48 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afaa48 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afaa48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afaa4c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-a6247073f2a2335f501a319ebd074b95"></a>

### [`00afaa84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaa84.md) → [`00afba78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afba78.md) FUN_00afba78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.89% / 新版 57.89%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afaac0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afaac4",
      "READ",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afaac8",
      "DATA",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afbab4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afbab8",
      "READ",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afbabc",
      "DATA",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afaaa0 ["INT_ADD", "register:40f0:8", ["const:afaaa0:8", "const:4:8"]]
- 00afaaa0 ["CALL", null, ["callee:008524fc:8"]]
+ 00afba94 ["INT_ADD", "register:40f0:8", ["const:afba94:8", "const:4:8"]]
+ 00afba94 ["CALL", null, ["callee:008524fc:8"]]
- 00afaab0 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00afaab0 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00afaab0 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afaab0 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afaab4 ["COPY", "register:4048:8", ["const:4ca4:8"]]
~~~


<a id="compare-bf7d00d4d3ab18eeda42f212b931c048"></a>

### [`00afaad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaad0.md) → [`00afbac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbac4.md) FUN_00afbac4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afaad0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afaad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afbac4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afbac8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afaad0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afaad0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afaad0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00afaad0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afaad4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afaad4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afaad4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afaad4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afaad8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-2929ae2abd402e93bb4010c7157d640b"></a>

### [`00afab18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afab18.md) → [`00afbb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbb0c.md) FUN_00afbb0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afab34 ["INT_ADD", "register:40f0:8", ["const:afab34:8", "const:4:8"]]
- 00afab34 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbb28 ["INT_ADD", "register:40f0:8", ["const:afbb28:8", "const:4:8"]]
+ 00afbb28 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-7fd7ad65b1730df355834567a3ec4a06"></a>

### [`00afab64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afab64.md) → [`00afbb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbb58.md) FUN_00afbb58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`005f7980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f7/005f7980.md) [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00714c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714c40.md) [`00714e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714e10.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005f7d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f7/005f7d30.md) [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`00714ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714ff0.md) [`007151c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/007151c0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00afab78 ["INT_ADD", "register:40f0:8", ["const:afab78:8", "const:4:8"]]
- 00afab78 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbb6c ["INT_ADD", "register:40f0:8", ["const:afbb6c:8", "const:4:8"]]
+ 00afbb6c ["CALL", null, ["callee:008524fc:8"]]
- 00afaba8 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00afaba8 ["RETURN", null, ["register:0:8"]]
+ 00afbb9c ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00afbb9c ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-e005517c49dcf4af1b59a57902d59908"></a>

### [`00afabac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afabac.md) → [`00afbba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbba0.md) FUN_00afbba0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afabc8 ["INT_ADD", "register:40f0:8", ["const:afabc8:8", "const:4:8"]]
- 00afabc8 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbbbc ["INT_ADD", "register:40f0:8", ["const:afbbbc:8", "const:4:8"]]
+ 00afbbbc ["CALL", null, ["callee:008524fc:8"]]
- 00afabd8 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00afabd8 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00afabd8 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afabd8 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afabdc ["COPY", "register:4048:8", ["const:4a24:8"]]
~~~


<a id="compare-515f3eabea85c5ea5d208fc8a0c8c5d8"></a>

### [`00afabf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afabf8.md) → [`00afbbec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbbec.md) FUN_00afbbec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.44% / 新版 94.44%

~~~diff
- 00afac0c ["INT_ADD", "register:40f0:8", ["const:afac0c:8", "const:4:8"]]
- 00afac0c ["CALL", null, ["callee:008524fc:8"]]
+ 00afbc00 ["INT_ADD", "register:40f0:8", ["const:afbc00:8", "const:4:8"]]
+ 00afbc00 ["CALL", null, ["callee:008524fc:8"]]
- 00afac28 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00afac28 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00afac28 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00afac28 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
+ 00afbc1c ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00afbc1c ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 00afbc1c ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
+ 00afbc1c ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
~~~


<a id="compare-a326a1d57ff84c7b915efaf7f65e3fd4"></a>

### [`00afac40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afac40.md) → [`00afbc34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbc34.md) FUN_00afbc34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afac5c ["INT_ADD", "register:40f0:8", ["const:afac5c:8", "const:4:8"]]
- 00afac5c ["CALL", null, ["callee:008524fc:8"]]
+ 00afbc50 ["INT_ADD", "register:40f0:8", ["const:afbc50:8", "const:4:8"]]
+ 00afbc50 ["CALL", null, ["callee:008524fc:8"]]
- 00afac78 ["COPY", "tmp:0:4", ["register:40a8:4"]]
- 00afac78 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00afac78 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00afac78 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00afbc6c ["COPY", "tmp:0:4", ["register:40a8:4"]]
+ 00afbc6c ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00afbc6c ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00afbc6c ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-b2395e6d3788b526d926427be982d32b"></a>

### [`00afacd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afacd4.md) → [`00afbcc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbcc8.md) FUN_00afbcc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afacf0 ["INT_ADD", "register:40f0:8", ["const:afacf0:8", "const:4:8"]]
- 00afacf0 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbce4 ["INT_ADD", "register:40f0:8", ["const:afbce4:8", "const:4:8"]]
+ 00afbce4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-29951b665e7719b26d8e045f84904067"></a>

### [`00afad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afad20.md) → [`00afbd14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbd14.md) FUN_00afbd14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.44% / 新版 94.44%

~~~diff
- 00afad34 ["INT_ADD", "register:40f0:8", ["const:afad34:8", "const:4:8"]]
- 00afad34 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbd28 ["INT_ADD", "register:40f0:8", ["const:afbd28:8", "const:4:8"]]
+ 00afbd28 ["CALL", null, ["callee:008524fc:8"]]
- 00afad50 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00afad50 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00afad50 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00afad50 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
+ 00afbd44 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00afbd44 ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 00afbd44 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
+ 00afbd44 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
~~~


<a id="compare-693c696a3213cc9dcb647f3917645e58"></a>

### [`00afad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afad68.md) → [`00afbd5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbd5c.md) FUN_00afbd5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afad84 ["INT_ADD", "register:40f0:8", ["const:afad84:8", "const:4:8"]]
- 00afad84 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbd78 ["INT_ADD", "register:40f0:8", ["const:afbd78:8", "const:4:8"]]
+ 00afbd78 ["CALL", null, ["callee:008524fc:8"]]
- 00afad94 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00afad94 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00afad94 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afad94 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afad98 ["COPY", "register:4048:8", ["const:4a30:8"]]
~~~


<a id="compare-27ef08ab268621c121f59d3a8e6dbf06"></a>

### [`00afadb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afadb4.md) → [`00afbda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbda8.md) FUN_00afbda8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afadc8 ["INT_ADD", "register:40f0:8", ["const:afadc8:8", "const:4:8"]]
- 00afadc8 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbdbc ["INT_ADD", "register:40f0:8", ["const:afbdbc:8", "const:4:8"]]
+ 00afbdbc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0806df699f6404ad0568a6dc92efa361"></a>

### [`00afae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afae48.md) → [`00afbe3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbe3c.md) FUN_00afbe3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afae5c ["INT_ADD", "register:40f0:8", ["const:afae5c:8", "const:4:8"]]
- 00afae5c ["CALL", null, ["callee:008524fc:8"]]
+ 00afbe50 ["INT_ADD", "register:40f0:8", ["const:afbe50:8", "const:4:8"]]
+ 00afbe50 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-143f613619d05399a31775c23145f357"></a>

### [`00afaf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaf70.md) → [`00afbf64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbf64.md) FUN_00afbf64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00afaf84 ["INT_ADD", "register:40f0:8", ["const:afaf84:8", "const:4:8"]]
- 00afaf84 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbf78 ["INT_ADD", "register:40f0:8", ["const:afbf78:8", "const:4:8"]]
+ 00afbf78 ["CALL", null, ["callee:008524fc:8"]]
- 00afafb4 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00afafb4 ["RETURN", null, ["register:0:8"]]
+ 00afbfa8 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00afbfa8 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-e0d10371c30b66d881c53568ea102784"></a>

### [`00afafb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afafb8.md) → [`00afbfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbfac.md) FUN_00afbfac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a53028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afafd4 ["INT_ADD", "register:40f0:8", ["const:afafd4:8", "const:4:8"]]
- 00afafd4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afbfc8 ["INT_ADD", "register:40f0:8", ["const:afbfc8:8", "const:4:8"]]
+ 00afbfc8 ["CALL", null, ["callee:008524fc:8"]]
- 00afaff0 ["COPY", "tmp:0:4", ["register:40a8:4"]]
- 00afaff0 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00afaff0 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00afaff0 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00afbfe4 ["COPY", "tmp:0:4", ["register:40a8:4"]]
+ 00afbfe4 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00afbfe4 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00afbfe4 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-73e9402a75aa9869947232ba899c25eb"></a>

### [`00afb004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb004.md) → [`00afbff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afb/00afbff8.md) FUN_00afbff8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00afb018 ["INT_ADD", "register:40f0:8", ["const:afb018:8", "const:4:8"]]
- 00afb018 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc00c ["INT_ADD", "register:40f0:8", ["const:afc00c:8", "const:4:8"]]
+ 00afc00c ["CALL", null, ["callee:008524fc:8"]]
- 00afb040 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00afb040 ["RETURN", null, ["register:0:8"]]
+ 00afc034 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00afc034 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-21dea3e1cd96323e658e7ee09fd0dd11"></a>

### [`00afb044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb044.md) → [`00afc038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc038.md) FUN_00afc038

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 57.89% / 新版 57.89%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb044",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb048",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb04c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc038",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afc03c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc040",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb044 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb044 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb044 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afb044 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb048 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afb048 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afb04c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb04c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb04c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afb04c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1e8cabde53faf2f174bbad9664b0ce39"></a>

### [`00afb090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb090.md) → [`00afc084`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc084.md) FUN_00afc084

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

アドレスに依存する影響 `return_value_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb094",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc088",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb094 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb094 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb094 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afb094 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afb098 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00afb0a4 ["INT_ADD", "register:40f0:8", ["const:afb0a4:8", "const:4:8"]]
- 00afb0a4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc098 ["INT_ADD", "register:40f0:8", ["const:afc098:8", "const:4:8"]]
+ 00afc098 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-810f14b66a88f5260decd07b16dc716f"></a>

### [`00afb0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb0d0.md) → [`00afc0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc0c4.md) FUN_00afc0c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb0d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb0d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb0d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc0c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afc0c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc0cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb0d0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb0d0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb0d0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afb0d0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb0d4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afb0d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afb0d8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb0d8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb0d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afb0d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-13a3a0b881d0dcd3abdeebb3e3d19176"></a>

### [`00afb11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb11c.md) → [`00afc110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc110.md) FUN_00afc110

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb150",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb154",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc144",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afc148",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb130 ["INT_ADD", "register:40f0:8", ["const:afb130:8", "const:4:8"]]
- 00afb130 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc124 ["INT_ADD", "register:40f0:8", ["const:afc124:8", "const:4:8"]]
+ 00afc124 ["CALL", null, ["callee:008524fc:8"]]
- 00afb140 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00afb140 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00afb140 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afb140 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afb144 ["COPY", "register:4048:8", ["const:4bac:8"]]
~~~


<a id="compare-209691d850f99d8e70c79348de4d5def"></a>

### [`00afb15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb15c.md) → [`00afc150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc150.md) FUN_00afc150

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 57.89% / 新版 57.89%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb15c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb160",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb164",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc150",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afc154",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc158",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb15c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb15c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb15c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afb15c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb160 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afb160 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afb164 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb164 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb164 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afb164 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-233656f63171daf54833cbf324cc0ec2"></a>

### [`00afb1a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb1a8.md) → [`00afc19c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc19c.md) FUN_00afc19c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb1a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb1ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc19c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc1a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb1a8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb1a8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb1a8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00afb1a8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb1ac ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb1ac ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb1ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afb1ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afb1b0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-dcd6904d1f8863ff7d780bfe29ff167b"></a>

### [`00afb308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb308.md) → [`00afc2fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc2fc.md) FUN_00afc2fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a53028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb308",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb30c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb310",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc2fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afc300",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc304",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb308 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb308 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb308 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afb308 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb30c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afb30c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afb310 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb310 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb310 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afb310 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8ae26a79aea5577fffadfb520e900fdb"></a>

### [`00afb354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb354.md) → [`00afc348`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc348.md) FUN_00afc348

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00afb368 ["INT_ADD", "register:40f0:8", ["const:afb368:8", "const:4:8"]]
- 00afb368 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc35c ["INT_ADD", "register:40f0:8", ["const:afc35c:8", "const:4:8"]]
+ 00afc35c ["CALL", null, ["callee:008524fc:8"]]
- 00afb398 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00afb398 ["RETURN", null, ["register:0:8"]]
+ 00afc38c ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00afc38c ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-e43e9e0b1bc6cdd15f7e3c1e5340d162"></a>

### [`00afb39c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb39c.md) → [`00afc390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc390.md) FUN_00afc390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb39c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb3a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb3a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc390",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afc394",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc398",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb39c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb39c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb39c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afb39c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb3a0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afb3a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afb3a4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb3a4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb3a4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afb3a4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4583b24d4d26b7a6fb5e626dd339335d"></a>

### [`00afb3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb3e8.md) → [`00afc3dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc3dc.md) FUN_00afc3dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb3e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb3ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc3dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc3e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb3e8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb3e8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb3e8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00afb3e8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb3ec ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb3ec ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb3ec ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afb3ec ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afb3f0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-986e90d410a7d00b368ecb08be7c1c5d"></a>

### [`00afb47c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb47c.md) → [`00afc470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc470.md) FUN_00afc470

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 77.78% / 新版 77.78%

~~~diff
- 00afb490 ["INT_ADD", "register:40f0:8", ["const:afb490:8", "const:4:8"]]
- 00afb490 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc484 ["INT_ADD", "register:40f0:8", ["const:afc484:8", "const:4:8"]]
+ 00afc484 ["CALL", null, ["callee:008524fc:8"]]
- 00afb4a0 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00afb4a0 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00afb4a0 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afb4a0 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afb4a4 ["COPY", "register:4048:8", ["const:4c54:8"]]
~~~


<a id="compare-01a747203d2422c9f724ea0db9d411b4"></a>

### [`00afb510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb510.md) → [`00afc504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc504.md) FUN_00afc504

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 77.78% / 新版 77.78%

~~~diff
- 00afb524 ["INT_ADD", "register:40f0:8", ["const:afb524:8", "const:4:8"]]
- 00afb524 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc518 ["INT_ADD", "register:40f0:8", ["const:afc518:8", "const:4:8"]]
+ 00afc518 ["CALL", null, ["callee:008524fc:8"]]
- 00afb534 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00afb534 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00afb534 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afb534 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afb538 ["COPY", "register:4048:8", ["const:4cac:8"]]
~~~


<a id="compare-6cee7572cbf9ea9fbe49c4cfa674cc8c"></a>

### [`00afb558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb558.md) → [`00afc54c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc54c.md) FUN_00afc54c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb558",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb55c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb560",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc54c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afc550",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc554",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb558 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb558 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb558 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afb558 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb55c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afb55c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afb560 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb560 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb560 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afb560 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a0f957e568087325212d93a7c1e32732"></a>

### [`00afb5e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb5e4.md) → [`00afc5d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc5d8.md) FUN_00afc5d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.97% / 新版 68.97%

アドレスに依存する影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb62c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ],
  "added": [
    [
      "00afc620",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb604 ["INT_ADD", "register:40f0:8", ["const:afb604:8", "const:4:8"]]
- 00afb604 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc5f8 ["INT_ADD", "register:40f0:8", ["const:afc5f8:8", "const:4:8"]]
+ 00afc5f8 ["CALL", null, ["callee:008524fc:8"]]
- 00afb620 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00afb620 ["INT_SEXT", "tmp:1:8", ["register:40b8:4"]]
- 00afb620 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afb620 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afb624 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00afb624 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00afb624 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00afb624 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-452c416d6e16223ee88bb0f090e44a2d"></a>

### [`00afb658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb658.md) → [`00afc64c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc64c.md) FUN_00afc64c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`005f3ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f3ab0.md) [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 5件 [`005e0340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0340.md) [`005e0918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0918.md) [`005e0960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0960.md) [`005e09e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e09e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`005f3e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3e60.md) [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 5件 [`005e06f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e06f0.md) [`005e0cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e0cc8.md) [`005e0d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e0d10.md) [`005e0d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e0d90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.18% / 新版 91.18%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb668",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb680",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00afc6c8"
      ]
    ]
  ],
  "added": [
    [
      "00afc65c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afc674",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00afc6c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb668 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb668 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb668 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00afb668 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afb66c ["COPY", "register:40e8:8", ["register:8:8"]]
- 00afb680 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00afb680 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-e19759baeebf4a4cdc8207d8e1036118"></a>

### [`00afb7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb7f0.md) → [`00afc7e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc7e4.md) FUN_00afc7e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00afb804 ["INT_ADD", "register:40f0:8", ["const:afb804:8", "const:4:8"]]
- 00afb804 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc7f8 ["INT_ADD", "register:40f0:8", ["const:afc7f8:8", "const:4:8"]]
+ 00afc7f8 ["CALL", null, ["callee:008524fc:8"]]
- 00afb82c ["COPY", "register:0:8", ["register:40f0:8"]]
- 00afb82c ["RETURN", null, ["register:0:8"]]
+ 00afc820 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00afc820 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-d7903f372d980fb6ca10ea7569916cf2"></a>

### [`00afb830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb830.md) → [`00afc824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc824.md) FUN_00afc824

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afb84c ["INT_ADD", "register:40f0:8", ["const:afb84c:8", "const:4:8"]]
- 00afb84c ["CALL", null, ["callee:008524fc:8"]]
+ 00afc840 ["INT_ADD", "register:40f0:8", ["const:afc840:8", "const:4:8"]]
+ 00afc840 ["CALL", null, ["callee:008524fc:8"]]
- 00afb868 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00afb868 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00afb868 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00afb868 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00afc85c ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00afc85c ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00afc85c ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00afc85c ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-7322b2a9530727395acb3a5109ee0611"></a>

### [`00afb87c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb87c.md) → [`00afc870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc870.md) FUN_00afc870

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 94.44% / 新版 94.44%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00afb8b4",
      "incomplete_value": true,
      "site": "00afb8c0",
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
- 00afb890 ["INT_ADD", "register:40f0:8", ["const:afb890:8", "const:4:8"]]
- 00afb890 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc884 ["INT_ADD", "register:40f0:8", ["const:afc884:8", "const:4:8"]]
+ 00afc884 ["CALL", null, ["callee:008524fc:8"]]
- 00afb8ac ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00afb8ac ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00afb8ac ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00afb8ac ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
+ 00afc8a0 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00afc8a0 ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 00afc8a0 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
+ 00afc8a0 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
~~~


<a id="compare-1eb4fb40d200782fd8328084c373b5fd"></a>

### [`00afb8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb8c4.md) → [`00afc8b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc8b8.md) FUN_00afc8b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 94.44% / 新版 94.44%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afc8f0",
      "incomplete_value": true,
      "site": "00afc8fc",
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
- 00afb8d8 ["INT_ADD", "register:40f0:8", ["const:afb8d8:8", "const:4:8"]]
- 00afb8d8 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc8cc ["INT_ADD", "register:40f0:8", ["const:afc8cc:8", "const:4:8"]]
+ 00afc8cc ["CALL", null, ["callee:008524fc:8"]]
- 00afb8f4 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00afb8f4 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00afb8f4 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00afb8f4 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
+ 00afc8e8 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00afc8e8 ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 00afc8e8 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
+ 00afc8e8 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
~~~


<a id="compare-92cb83cd1b1f9739bdbbbfcb3a8a3237"></a>

### [`00afb90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb90c.md) → [`00afc900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc900.md) FUN_00afc900

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afb928 ["INT_ADD", "register:40f0:8", ["const:afb928:8", "const:4:8"]]
- 00afb928 ["CALL", null, ["callee:008524fc:8"]]
+ 00afc91c ["INT_ADD", "register:40f0:8", ["const:afc91c:8", "const:4:8"]]
+ 00afc91c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-e05c0df7017d82f2b1d0e1f17e81d324"></a>

### [`00afb958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb958.md) → [`00afc94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc94c.md) FUN_00afc94c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afb96c ["INT_ADD", "register:40f0:8", ["const:afb96c:8", "const:4:8"]]
- 00afb96c ["CALL", null, ["callee:008524fc:8"]]
+ 00afc960 ["INT_ADD", "register:40f0:8", ["const:afc960:8", "const:4:8"]]
+ 00afc960 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6ea3f206ba1450a26d2dadf448a8cd58"></a>

### [`00afb9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb9a0.md) → [`00afc994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc994.md) FUN_00afc994

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`005f3158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00afb9bc ["INT_ADD", "register:40f0:8", ["const:afb9bc:8", "const:4:8"]]
- 00afb9bc ["CALL", null, ["callee:008524fc:8"]]
+ 00afc9b0 ["INT_ADD", "register:40f0:8", ["const:afc9b0:8", "const:4:8"]]
+ 00afc9b0 ["CALL", null, ["callee:008524fc:8"]]
- 00afb9e8 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00afb9e8 ["RETURN", null, ["register:0:8"]]
+ 00afc9dc ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00afc9dc ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-ce1d1adcbf480c8c7ad30f16cd1ec738"></a>

### [`00afb9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb9ec.md) → [`00afc9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afc9e0.md) FUN_00afc9e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afb9ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afb9f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afc9e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afc9e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afb9ec ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afb9ec ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afb9ec ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00afb9ec ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afb9f0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afb9f0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afb9f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afb9f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afb9f4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-46237aa4dd893ab40a05f8b622fc52d4"></a>

### [`00afba2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afba2c.md) → [`00afca20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afca20.md) FUN_00afca20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afba30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afca24",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afba30 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afba30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afba48 ["INT_ADD", "register:40f0:8", ["const:afba48:8", "const:4:8"]]
- 00afba48 ["CALL", null, ["callee:008524fc:8"]]
+ 00afca3c ["INT_ADD", "register:40f0:8", ["const:afca3c:8", "const:4:8"]]
+ 00afca3c ["CALL", null, ["callee:008524fc:8"]]
+ 00afca24 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
+ 00afca24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-334c95e81edd9fe30370aded231cc8e1"></a>

### [`00afba78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afba78.md) → [`00afca6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afca6c.md) FUN_00afca6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 5件 [`005f3158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afba78",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afba7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afca6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afca70",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afba78 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afba78 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afba78 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00afba78 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afba7c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afba7c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afba7c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00afba7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00afba80 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-dd34f159cfebd0816eb9f70a415de8f1"></a>

### [`00afbb98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbb98.md) → [`00afcb8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcb8c.md) FUN_00afcb8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`005f3158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afbbb4 ["INT_ADD", "register:40f0:8", ["const:afbbb4:8", "const:4:8"]]
- 00afbbb4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afcba8 ["INT_ADD", "register:40f0:8", ["const:afcba8:8", "const:4:8"]]
+ 00afcba8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-cae6b7d57593f91596e54050229ba813"></a>

### [`00afbbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbbe4.md) → [`00afcbd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcbd8.md) FUN_00afcbd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afbbf8 ["INT_ADD", "register:40f0:8", ["const:afbbf8:8", "const:4:8"]]
- 00afbbf8 ["CALL", null, ["callee:008524fc:8"]]
+ 00afcbec ["INT_ADD", "register:40f0:8", ["const:afcbec:8", "const:4:8"]]
+ 00afcbec ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-331ea2ee23afc3a627d3972a8431cda4"></a>

### [`00afbc24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbc24.md) → [`00afcc18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcc18.md) FUN_00afcc18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afbc40 ["INT_ADD", "register:40f0:8", ["const:afbc40:8", "const:4:8"]]
- 00afbc40 ["CALL", null, ["callee:008524fc:8"]]
+ 00afcc34 ["INT_ADD", "register:40f0:8", ["const:afcc34:8", "const:4:8"]]
+ 00afcc34 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-4959975778681591bc4161666b460057"></a>

### [`00afbc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbc70.md) → [`00afcc64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcc64.md) FUN_00afcc64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005f3158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afbc84 ["INT_ADD", "register:40f0:8", ["const:afbc84:8", "const:4:8"]]
- 00afbc84 ["CALL", null, ["callee:008524fc:8"]]
+ 00afcc78 ["INT_ADD", "register:40f0:8", ["const:afcc78:8", "const:4:8"]]
+ 00afcc78 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f6e89934434b3708e06bbceafd7a8c16"></a>

### [`00afbe68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbe68.md) → [`00afce5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afce5c.md) FUN_00afce5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`005f3158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afbe7c ["INT_ADD", "register:40f0:8", ["const:afbe7c:8", "const:4:8"]]
- 00afbe7c ["CALL", null, ["callee:008524fc:8"]]
+ 00afce70 ["INT_ADD", "register:40f0:8", ["const:afce70:8", "const:4:8"]]
+ 00afce70 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-bf9a312e9e92a670ab68fdeac4ca5546"></a>

### [`00afbea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbea8.md) → [`00afce9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afce9c.md) FUN_00afce9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afbec4 ["INT_ADD", "register:40f0:8", ["const:afbec4:8", "const:4:8"]]
- 00afbec4 ["CALL", null, ["callee:008524fc:8"]]
+ 00afceb8 ["INT_ADD", "register:40f0:8", ["const:afceb8:8", "const:4:8"]]
+ 00afceb8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-9671d2bd57094468b273b4cc69c26144"></a>

### [`00afbef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbef4.md) → [`00afcee8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afc/00afcee8.md) FUN_00afcee8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005f3158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.19% / 新版 76.19%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00afbef4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afbef8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00afbefc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00afcee8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afceec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afcef0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afbef4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00afbef4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00afbef4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00afbef4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00afbef8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00afbef8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00afbefc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00afbefc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00afbefc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00afbefc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6db4b9ea56966965ca27cd8cd333c5c3"></a>

### [`00afc014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc014.md) → [`00afd008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afd/00afd008.md) FUN_00afd008

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afc030 ["INT_ADD", "register:40f0:8", ["const:afc030:8", "const:4:8"]]
- 00afc030 ["CALL", null, ["callee:008524fc:8"]]
+ 00afd024 ["INT_ADD", "register:40f0:8", ["const:afd024:8", "const:4:8"]]
+ 00afd024 ["CALL", null, ["callee:008524fc:8"]]
- 00afc040 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00afc040 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00afc040 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afc040 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afc044 ["COPY", "register:4048:8", ["const:4a04:8"]]
~~~


<a id="compare-9203c97a8f00a289ea4be77e33b9d521"></a>

### [`00afc0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc0a0.md) → [`00afd094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afd/00afd094.md) FUN_00afd094

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afc0bc ["INT_ADD", "register:40f0:8", ["const:afc0bc:8", "const:4:8"]]
- 00afc0bc ["CALL", null, ["callee:008524fc:8"]]
+ 00afd0b0 ["INT_ADD", "register:40f0:8", ["const:afd0b0:8", "const:4:8"]]
+ 00afd0b0 ["CALL", null, ["callee:008524fc:8"]]
- 00afc0d8 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00afc0d8 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00afc0d8 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00afc0d8 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00afd0cc ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00afd0cc ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00afd0cc ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00afd0cc ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-25a6720e15e60d562f87343f80d6d3f6"></a>

### [`00afc0ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc0ec.md) → [`00afd0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afd/00afd0e0.md) FUN_00afd0e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.00% / 新版 92.00%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00afc104 ["INT_ADD", "register:40f0:8", ["const:afc104:8", "const:4:8"]]
- 00afc104 ["CALL", null, ["callee:008524fc:8"]]
+ 00afd0f8 ["INT_ADD", "register:40f0:8", ["const:afd0f8:8", "const:4:8"]]
+ 00afd0f8 ["CALL", null, ["callee:008524fc:8"]]
- 00afc11c ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00afc11c ["INT_SEXT", "tmp:1:8", ["register:40b0:4"]]
- 00afc11c ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00afc11c ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00afc120 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00afc120 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00afc120 ["COPY", "tmp:2:8", ["register:4048:8"]]
- 00afc120 ["COPY", "tmp:3:8", ["tmp:2:8"]]
~~~


