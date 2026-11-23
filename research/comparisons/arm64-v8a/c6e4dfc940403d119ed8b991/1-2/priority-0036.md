# v16.0.2 → v16.0.3 · 最優先の変更候補 (36)

[一覧の目次](README.md)

<a id="compare-aa114e9ffaa232794c344279be4be000"></a>

### [`0069649c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/0069649c.md) → [`0069684c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/0069684c.md) FUN_0069684c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) [`00690ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00690/00690ef8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0068f9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f9e0.md) [`006912a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00691/006912a8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006964d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00696880",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 006964bc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006964bc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0069686c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0069686c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 006964c4 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 00696874 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 006964cc ["INT_ADD", "register:40f0:8", ["const:6964cc:8", "const:4:8"]]
- 006964cc ["CALL", null, ["callee:008ba17c:8"]]
+ 0069687c ["INT_ADD", "register:40f0:8", ["const:69687c:8", "const:4:8"]]
+ 0069687c ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-ba578cfdae472e0c673757a2c92210c1"></a>

### [`00696588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696588.md) → [`00696938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696938.md) FUN_00696938

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0069695c",
      "incomplete_value": false,
      "site": "0069695c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:220:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006965ac",
      "incomplete_value": false,
      "site": "006965ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:250:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0069695c",
      "DATA",
      [
        "storage",
        "00c75250",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069695c",
      "DATA",
      [
        "storage",
        "00c76220",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069659c ["INT_ADD", "register:40f0:8", ["const:69659c:8", "const:4:8"]]
- 0069659c ["CALL", null, ["callee:00c58f30:8"]]
+ 0069694c ["INT_ADD", "register:40f0:8", ["const:69694c:8", "const:4:8"]]
+ 0069694c ["CALL", null, ["callee:00c58f30:8"]]
- 006965a4 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00696954 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006965a8 ["COPY", "tmp:0:8", ["const:250:8"]]
- 006965a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006965a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006965a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00696958 ["COPY", "tmp:0:8", ["const:220:8"]]
+ 00696958 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00696958 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00696958 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-78005799c85abb845f6efab7b7293c20"></a>

### [`006965bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/006965bc.md) → [`0069696c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/0069696c.md) FUN_0069696c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00696978",
      "incomplete_value": false,
      "site": "00696978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:220:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006965c8",
      "incomplete_value": false,
      "site": "006965c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:250:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00696978",
      "DATA",
      [
        "storage",
        "00c75250",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00696978",
      "DATA",
      [
        "storage",
        "00c76220",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006965c0 ["COPY", "register:4048:8", ["const:c75000:8"]]
+ 00696970 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 006965c4 ["COPY", "tmp:0:8", ["const:250:8"]]
- 006965c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006965c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006965c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00696974 ["COPY", "tmp:0:8", ["const:220:8"]]
+ 00696974 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00696974 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00696974 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cab3dc4c472cbdd3cdbc194549584061"></a>

### [`006965d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/006965d8.md) → [`00696988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696988.md) FUN_00696988

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`008b9558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9558.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`0085c2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2e4.md) [`008ba29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba29c.md) [`008ba504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba504.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.03% / 新版 94.03%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00696a08",
      "incomplete_value": true,
      "site": "00696a0c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c4000:8"
              ],
              [
                "leaf",
                "const:170:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696658",
      "incomplete_value": true,
      "site": "0069665c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c4000:8"
              ],
              [
                "leaf",
                "const:120:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00696a5c",
      "incomplete_value": true,
      "site": "00696a64",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00696a5c",
      "incomplete_value": true,
      "site": "00696a64",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00696610",
      "DATA",
      [
        "storage",
        "00338758",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00696a08",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006969c0",
      "DATA",
      [
        "storage",
        "00338758",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00696a08",
      "READ",
      [
        "storage",
        "002c4170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006966b4 ["INT_ADD", "register:40f0:8", ["const:6966b4:8", "const:4:8"]]
- 006966b4 ["CALL", null, ["callee:008ba504:8"]]
+ 00696a64 ["INT_ADD", "register:40f0:8", ["const:696a64:8", "const:4:8"]]
+ 00696a64 ["CALL", null, ["callee:008ba504:8"]]
- 0069660c ["INT_LEFT", "tmp:0:8", ["const:338:8", "const:c:4"]]
- 0069660c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 0069660c ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:1:8"]]
- 0069660c ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:1:8"]]
- 00696610 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:758:8"]]
- 00696610 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00696610 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
~~~


<a id="compare-6d93d3b54f31200a26538a5a5c805576"></a>

### [`00696710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696710.md) → [`00696ac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696ac0.md) FUN_00696ac0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00696720",
      "incomplete_value": false,
      "site": "00696724",
      "value": [
        "leaf",
        "const:18:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00696734",
      "DATA",
      [
        "storage",
        "00c752d0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0069673c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00696740",
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
      "00696ae4",
      "DATA",
      [
        "storage",
        "00c762a0",
        null,
        "undefined *"
      ]
    ],
    [
      "00696aec",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00696af0",
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
- 00696724 ["INT_ADD", "register:40f0:8", ["const:696724:8", "const:4:8"]]
- 00696724 ["CALL", null, ["callee:00c58f30:8"]]
+ 00696ad4 ["INT_ADD", "register:40f0:8", ["const:696ad4:8", "const:4:8"]]
+ 00696ad4 ["CALL", null, ["callee:00c58f30:8"]]
- 0069672c ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00696adc ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00696730 ["COPY", "tmp:0:8", ["const:2d0:8"]]
- 00696730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00696730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00696730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a638e5bd5dbcec8d471dc326eff4e6b3"></a>

### [`00696748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696748.md) → [`00696af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696af8.md) FUN_00696af8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00696afc",
      "incomplete_value": false,
      "site": "00696b00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:2a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069674c",
      "incomplete_value": false,
      "site": "00696750",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00696b00",
      "DATA",
      [
        "storage",
        "00c752d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00696b00",
      "DATA",
      [
        "storage",
        "00c762a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696748 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00696af8 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 0069674c ["COPY", "tmp:0:8", ["const:2d0:8"]]
- 0069674c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069674c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069674c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00696afc ["COPY", "tmp:0:8", ["const:2a0:8"]]
+ 00696afc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00696afc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00696afc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-15b4ef466f7c9556135cf555b464b68e"></a>

### [`00696768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696768.md) → [`00696b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696b18.md) FUN_00696b18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 21件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md)
- 新版 呼出元 0件  · 呼出先 21件 [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.75% / 新版 87.75%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00696bec",
      "incomplete_value": true,
      "site": "00696c04",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:40d8:8"
              ],
              [
                "leaf",
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00696bf4",
      "incomplete_value": false,
      "site": "00696c04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c66000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00696bfc",
      "incomplete_value": false,
      "site": "00696c04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069684c",
      "incomplete_value": false,
      "site": "00696854",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00696798",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:006967b0",
      "DATA",
      [
        "storage",
        "00338754",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:006967b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00696d2c"
      ]
    ]
  ],
  "added": [
    [
      "00696b48",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00696b60",
      "DATA",
      [
        "storage",
        "00338754",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00696b68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00696d2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696854 ["INT_ADD", "register:40f0:8", ["const:696854:8", "const:4:8"]]
- 00696854 ["CALL", null, ["callee:00c596b0:8"]]
+ 00696c04 ["INT_ADD", "register:40f0:8", ["const:696c04:8", "const:4:8"]]
+ 00696c04 ["CALL", null, ["callee:00c596b0:8"]]
- 006969b4 ["INT_ADD", "register:40f0:8", ["const:6969b4:8", "const:4:8"]]
- 006969b4 ["CALL", null, ["callee:00c596b0:8"]]
+ 00696d64 ["INT_ADD", "register:40f0:8", ["const:696d64:8", "const:4:8"]]
+ 00696d64 ["CALL", null, ["callee:00c596b0:8"]]
- 00696af0 ["INT_ADD", "register:40f0:8", ["const:696af0:8", "const:4:8"]]
- 00696af0 ["CALL", null, ["callee:00a845ec:8"]]
+ 00696ea0 ["INT_ADD", "register:40f0:8", ["const:696ea0:8", "const:4:8"]]
+ 00696ea0 ["CALL", null, ["callee:00a845ec:8"]]
~~~


<a id="compare-1a75ab6defdcd68546c3098d787f1a82"></a>

### [`00696e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e24.md) → [`006971d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/006971d4.md) FUN_006971d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00696e48",
      "DATA",
      [
        "storage",
        "00c75350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006971f8",
      "DATA",
      [
        "storage",
        "00c76320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696e38 ["INT_ADD", "register:40f0:8", ["const:696e38:8", "const:4:8"]]
- 00696e38 ["CALL", null, ["callee:00c58f30:8"]]
+ 006971e8 ["INT_ADD", "register:40f0:8", ["const:6971e8:8", "const:4:8"]]
+ 006971e8 ["CALL", null, ["callee:00c58f30:8"]]
- 00696e40 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006971f0 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00696e44 ["COPY", "tmp:0:8", ["const:350:8"]]
- 00696e44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00696e44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00696e44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-883dd1330bdb454f0bacbdad7080eba5"></a>

### [`00696e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e5c.md) → [`0069720c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/0069720c.md) FUN_0069720c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00697210",
      "incomplete_value": false,
      "site": "00697214",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696e60",
      "incomplete_value": false,
      "site": "00696e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00697214",
      "DATA",
      [
        "storage",
        "00c75350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697214",
      "DATA",
      [
        "storage",
        "00c76320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696e5c ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 0069720c ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00696e60 ["COPY", "tmp:0:8", ["const:350:8"]]
- 00696e60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00696e60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00696e60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00697210 ["COPY", "tmp:0:8", ["const:320:8"]]
+ 00697210 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00697210 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00697210 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a0736a421ab7e3758b329510e6c2a9fc"></a>

### [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) → [`0069722c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/0069722c.md) FUN_0069722c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 16件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) [`00690740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00690/00690740.md) [`006971c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006971c0.md)
- 新版 呼出元 0件  · 呼出先 16件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0068f188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f188.md) [`00690af0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00690/00690af0.md) [`00697570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697570.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 91.53% / 新版 91.53%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `store_value` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006973bc",
      "incomplete_value": false,
      "site": "006973c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:ef3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069700c",
      "incomplete_value": false,
      "site": "00697014",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:e26:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006973e4",
      "incomplete_value": false,
      "site": "006973f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:f8c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697034",
      "incomplete_value": false,
      "site": "00697040",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:eb5:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0069740c",
      "incomplete_value": false,
      "site": "00697418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:f97:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069705c",
      "incomplete_value": false,
      "site": "00697068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:eb9:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00696e9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0069728c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00697330",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0069724c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0069728c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00697330",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696edc ["INT_ADD", "register:40f0:8", ["const:696edc:8", "const:4:8"]]
- 00696edc ["CALL", null, ["ram:47ad34:8"]]
+ 0069728c ["INT_ADD", "register:40f0:8", ["const:69728c:8", "const:4:8"]]
+ 0069728c ["CALL", null, ["ram:47b054:8"]]
- 00696f38 ["INT_ADD", "register:40f0:8", ["const:696f38:8", "const:4:8"]]
- 00696f38 ["CALL", null, ["callee:008b894c:8"]]
+ 006972e8 ["INT_ADD", "register:40f0:8", ["const:6972e8:8", "const:4:8"]]
+ 006972e8 ["CALL", null, ["callee:008b894c:8"]]
- 00696f48 ["INT_ADD", "register:40f0:8", ["const:696f48:8", "const:4:8"]]
- 00696f48 ["CALL", null, ["callee:008b894c:8"]]
+ 006972f8 ["INT_ADD", "register:40f0:8", ["const:6972f8:8", "const:4:8"]]
+ 006972f8 ["CALL", null, ["callee:008b894c:8"]]
~~~


<a id="compare-6a95c0298fccb6d9b5067315f1ea987a"></a>

### [`006971c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006971c0.md) → [`00697570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697570.md) FUN_00697570

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) [`0071d254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d254.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) · 呼出先 5件 [`006972e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006972e8.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md) [`00b3bfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bfbc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 5件 [`0069722c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/0069722c.md) [`0071d604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d604.md) [`00720498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00720/00720498.md) [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) [`0094826c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) · 呼出先 5件 [`00697698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697698.md) [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md) [`00b3cfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cfb0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006971e0 ["INT_RIGHT", "tmp:0:4", ["register:4008:4", "const:1f:4"]]
- 006971e0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006971e0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006971e0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00697590 ["INT_RIGHT", "tmp:0:4", ["register:4008:4", "const:1f:4"]]
+ 00697590 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00697590 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00697590 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 006971f4 ["INT_ADD", "register:40f0:8", ["const:6971f4:8", "const:4:8"]]
- 006971f4 ["CALL", null, ["callee:00b3cf24:8"]]
+ 006975a4 ["INT_ADD", "register:40f0:8", ["const:6975a4:8", "const:4:8"]]
+ 006975a4 ["CALL", null, ["callee:00b3cf24:8"]]
- 006971fc ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006971fc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006975ac ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006975ac ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-1f2a89ff65a3b25b2d135caf4ac33530"></a>

### [`006972e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006972e8.md) → [`00697698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697698.md) FUN_00697698

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`006971c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006971c0.md) [`0071e3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e3ec.md) [`0071e618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e618.md) [`0071e88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e88c.md) · 呼出先 6件 [`007671a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/007671a0.md) [`00767d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/00767d0c.md) [`0076970c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/0076970c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 4件 [`00697570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697570.md) [`0071e79c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071e/0071e79c.md) [`0071e9c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071e/0071e9c8.md) [`0071ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071e/0071ec3c.md) · 呼出先 6件 [`0076757c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00767/0076757c.md) [`007680e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007680e8.md) [`00769ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/00769ae8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 call, call_count, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.48% / 新版 85.48%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006972f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006972f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00697318",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006976a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006976a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006976c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006972f4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006972f4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006972f4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 006972f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006972f8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006972f8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006972f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 006972f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006972fc ["COPY", "tmp:0:8", ["const:20:8"]]
- 006972fc ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 006972fc ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 006972fc ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-6d992bf3fb1d2753790cc3c607d1d14e"></a>

### [`0069740c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/0069740c.md) → [`006977bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/006977bc.md) FUN_006977bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00697430",
      "DATA",
      [
        "storage",
        "00c753d0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00697438",
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
      "006977e0",
      "DATA",
      [
        "storage",
        "00c763a0",
        null,
        "undefined *"
      ]
    ],
    [
      "006977e8",
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
- 00697420 ["INT_ADD", "register:40f0:8", ["const:697420:8", "const:4:8"]]
- 00697420 ["CALL", null, ["callee:00c58f30:8"]]
+ 006977d0 ["INT_ADD", "register:40f0:8", ["const:6977d0:8", "const:4:8"]]
+ 006977d0 ["CALL", null, ["callee:00c58f30:8"]]
- 00697428 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006977d8 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 0069742c ["COPY", "tmp:0:8", ["const:3d0:8"]]
- 0069742c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069742c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069742c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1c040dc21d4375ba7a3e3376ef72cdfd"></a>

### [`00697444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697444.md) → [`006977f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/006977f4.md) FUN_006977f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006977f8",
      "incomplete_value": false,
      "site": "006977fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697448",
      "incomplete_value": false,
      "site": "0069744c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006977fc",
      "DATA",
      [
        "storage",
        "00c753d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006977fc",
      "DATA",
      [
        "storage",
        "00c763a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697444 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006977f4 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00697448 ["COPY", "tmp:0:8", ["const:3d0:8"]]
- 00697448 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00697448 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00697448 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006977f8 ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 006977f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006977f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006977f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5d65b014369385cf8f7233397a9dfbbb"></a>

### [`00697464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697464.md) → [`00697814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697814.md) FUN_00697814

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f4c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069784c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069749c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00697864",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006974b4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0069784c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00697864",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0069784c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00697864",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069749c ["INT_ADD", "register:40f0:8", ["const:69749c:8", "const:4:8"]]
- 0069749c ["CALL", null, ["ram:47ad34:8"]]
+ 0069784c ["INT_ADD", "register:40f0:8", ["const:69784c:8", "const:4:8"]]
+ 0069784c ["CALL", null, ["ram:47b054:8"]]
- 006974b4 ["INT_ADD", "register:40f0:8", ["const:6974b4:8", "const:4:8"]]
- 006974b4 ["CALL", null, ["ram:47ad34:8"]]
+ 00697864 ["INT_ADD", "register:40f0:8", ["const:697864:8", "const:4:8"]]
+ 00697864 ["CALL", null, ["ram:47b054:8"]]
- 00697480 ["INT_ADD", "register:40f0:8", ["const:697480:8", "const:4:8"]]
- 00697480 ["CALL", null, ["callee:008b7f4c:8"]]
+ 00697830 ["INT_ADD", "register:40f0:8", ["const:697830:8", "const:4:8"]]
+ 00697830 ["CALL", null, ["callee:008b7f4c:8"]]
~~~


<a id="compare-24fc970197b94ade83229f206f4abdb9"></a>

### [`00697508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697508.md) → [`006978b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/006978b8.md) FUN_006978b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006978d8",
      "incomplete_value": false,
      "site": "006978dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697528",
      "incomplete_value": false,
      "site": "0069752c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006978dc",
      "DATA",
      [
        "storage",
        "00c75450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006978dc",
      "DATA",
      [
        "storage",
        "00c76420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069751c ["INT_ADD", "register:40f0:8", ["const:69751c:8", "const:4:8"]]
- 0069751c ["CALL", null, ["callee:00c58f30:8"]]
+ 006978cc ["INT_ADD", "register:40f0:8", ["const:6978cc:8", "const:4:8"]]
+ 006978cc ["CALL", null, ["callee:00c58f30:8"]]
- 00697524 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006978d4 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00697528 ["COPY", "tmp:0:8", ["const:450:8"]]
- 00697528 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00697528 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00697528 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006978d8 ["COPY", "tmp:0:8", ["const:420:8"]]
+ 006978d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006978d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006978d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-35a9589c4e39d081ccd9e3e086ad79ff"></a>

### [`00697540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697540.md) → [`006978f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/006978f0.md) FUN_006978f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006978f4",
      "incomplete_value": false,
      "site": "006978f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697544",
      "incomplete_value": false,
      "site": "00697548",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006978f8",
      "DATA",
      [
        "storage",
        "00c75450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006978f8",
      "DATA",
      [
        "storage",
        "00c76420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697540 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006978f0 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00697544 ["COPY", "tmp:0:8", ["const:450:8"]]
- 00697544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00697544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00697544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006978f4 ["COPY", "tmp:0:8", ["const:420:8"]]
+ 006978f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006978f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006978f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a3f48e71acff7f1ed801b76faba55562"></a>

### [`00697560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697560.md) → [`00697910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697910.md) FUN_00697910

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f4c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00697948",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00697598",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00697954",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006975a4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00697948",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00697954",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00697948",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00697954",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697598 ["INT_ADD", "register:40f0:8", ["const:697598:8", "const:4:8"]]
- 00697598 ["CALL", null, ["ram:47ad34:8"]]
+ 00697948 ["INT_ADD", "register:40f0:8", ["const:697948:8", "const:4:8"]]
+ 00697948 ["CALL", null, ["ram:47b054:8"]]
- 006975a4 ["INT_ADD", "register:40f0:8", ["const:6975a4:8", "const:4:8"]]
- 006975a4 ["CALL", null, ["ram:47ad34:8"]]
+ 00697954 ["INT_ADD", "register:40f0:8", ["const:697954:8", "const:4:8"]]
+ 00697954 ["CALL", null, ["ram:47b054:8"]]
- 0069757c ["INT_ADD", "register:40f0:8", ["const:69757c:8", "const:4:8"]]
- 0069757c ["CALL", null, ["callee:008b7f4c:8"]]
+ 0069792c ["INT_ADD", "register:40f0:8", ["const:69792c:8", "const:4:8"]]
+ 0069792c ["CALL", null, ["callee:008b7f4c:8"]]
~~~


<a id="compare-33f8717f1db12ab308d49a71af36ae87"></a>

### [`00697600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697600.md) → [`006979b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/006979b0.md) FUN_006979b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006979bc",
      "incomplete_value": false,
      "site": "006979c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069760c",
      "incomplete_value": false,
      "site": "00697610",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006979c0",
      "DATA",
      [
        "storage",
        "00c754d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006979c0",
      "DATA",
      [
        "storage",
        "00c764a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697608 ["COPY", "register:4048:8", ["const:c75000:8"]]
+ 006979b8 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 0069760c ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 0069760c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0069760c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0069760c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006979bc ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 006979bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006979bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006979bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-544dc19d6bbcb91193f86ce3dd70a050"></a>

### [`00697624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697624.md) → [`006979d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/006979d4.md) FUN_006979d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006979dc",
      "incomplete_value": false,
      "site": "006979e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069762c",
      "incomplete_value": false,
      "site": "00697630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006979e0",
      "DATA",
      [
        "storage",
        "00c754d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006979e0",
      "DATA",
      [
        "storage",
        "00c764a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697628 ["COPY", "register:4048:8", ["const:c75000:8"]]
+ 006979d8 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 0069762c ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 0069762c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0069762c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0069762c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006979dc ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 006979dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006979dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006979dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00697650 ["INT_ADD", "register:40f0:8", ["const:697650:8", "const:4:8"]]
- 00697650 ["CALL", null, ["callee:00c58f50:8"]]
+ 00697a00 ["INT_ADD", "register:40f0:8", ["const:697a00:8", "const:4:8"]]
+ 00697a00 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-44cd4046c9c198a3d85eb40a926a64ba"></a>

### [`00697664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697664.md) → [`00697a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697a14.md) FUN_00697a14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`006928cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00692/006928cc.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00697a34",
      "incomplete_value": false,
      "site": "00697a3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697684",
      "incomplete_value": false,
      "site": "0069768c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00697a3c",
      "DATA",
      [
        "storage",
        "00c754d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697a3c",
      "DATA",
      [
        "storage",
        "00c764a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069767c ["INT_ADD", "register:40f0:8", ["const:69767c:8", "const:4:8"]]
- 0069767c ["CALL", null, ["callee:00c58f30:8"]]
+ 00697a2c ["INT_ADD", "register:40f0:8", ["const:697a2c:8", "const:4:8"]]
+ 00697a2c ["CALL", null, ["callee:00c58f30:8"]]
- 00697680 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00697a30 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00697684 ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 00697684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00697684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00697684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00697a34 ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 00697a34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00697a34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00697a34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7efaa58fcfd07e427e47de7822abe99f"></a>

### [`0069771c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/0069771c.md) → [`00697acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697acc.md) FUN_00697acc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`006928cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00692/006928cc.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00697ae0",
      "incomplete_value": false,
      "site": "00697ae8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697730",
      "incomplete_value": false,
      "site": "00697738",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00697ae8",
      "DATA",
      [
        "storage",
        "00c754d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697ae8",
      "DATA",
      [
        "storage",
        "00c764a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069772c ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00697adc ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00697730 ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 00697730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00697730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00697730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00697ae0 ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 00697ae0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00697ae0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00697ae0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00697754 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00697b04 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-38fd5a0fba89d9bc118dbb0bdc522ff5"></a>

### [`006977bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006977bc.md) → [`00697b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697b6c.md) FUN_00697b6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006977c4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 006977c4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00697b74 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00697b74 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-c1363bbadbd5d6bfc15cce8fde50e4a0"></a>

### [`006977d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006977d4.md) → [`00697b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697b84.md) FUN_00697b84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0068f9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f9e0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

アドレスに依存する影響 `store_condition` 4件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006977d8"
      ],
      [
        "FALL_THROUGH",
        "00697b88"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00697b88",
      "incomplete_value": true,
      "site": "00697b8c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006977d8",
      "incomplete_value": true,
      "site": "006977dc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006977d8"
      ],
      [
        "FALL_THROUGH",
        "00697b88"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00697b88",
      "incomplete_value": true,
      "site": "00697b8c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006977d8",
      "incomplete_value": true,
      "site": "006977dc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006977d8"
      ],
      [
        "FALL_THROUGH",
        "00697b88"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00697b88",
      "incomplete_value": true,
      "site": "00697b90",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006977d8",
      "incomplete_value": true,
      "site": "006977e0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006977d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00697bb4"
      ]
    ]
  ],
  "added": [
    [
      "00697b88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00697bb4"
      ]
    ]
  ]
}
~~~


~~~diff
- 006977d4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:18:8"]]
- 006977d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006977d8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006977d8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 006977f4 ["INT_ADD", "register:40f0:8", ["const:6977f4:8", "const:4:8"]]
- 006977f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00697ba4 ["INT_ADD", "register:40f0:8", ["const:697ba4:8", "const:4:8"]]
+ 00697ba4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-612edb717fe979ab15e99d938039873e"></a>

### [`00697e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697e14.md) → [`006981c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/006981c4.md) FUN_006981c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 33.33% / 新版 33.33%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00697e28"
      ],
      [
        "FALL_THROUGH",
        "006981d8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006981d8",
      "incomplete_value": true,
      "site": "006981dc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697e28",
      "incomplete_value": true,
      "site": "00697e2c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00697e24",
      "DATA",
      [
        "storage",
        "00c75550",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00697e28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006981e4"
      ]
    ]
  ],
  "added": [
    [
      "006981d4",
      "DATA",
      [
        "storage",
        "00c76520",
        null,
        "undefined *"
      ]
    ],
    [
      "006981d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006981e4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697e14 ["COPY", "register:4040:8", ["register:4000:8"]]
- 00697e18 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 00697e18 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00697e1c ["COPY", "register:4048:8", ["const:c75000:8"]]
~~~


<a id="compare-4d37114d2643dc01bf048792b1092a44"></a>

### [`00697e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697e38.md) → [`006981e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/006981e8.md) FUN_006981e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `store_condition` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00697e48"
      ],
      [
        "FALL_THROUGH",
        "006981f8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006981f8",
      "incomplete_value": true,
      "site": "006981fc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697e48",
      "incomplete_value": true,
      "site": "00697e4c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00697e48"
      ],
      [
        "FALL_THROUGH",
        "006981f8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006981f8",
      "incomplete_value": true,
      "site": "006981fc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697e48",
      "incomplete_value": true,
      "site": "00697e4c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00697e48"
      ],
      [
        "FALL_THROUGH",
        "006981f8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006981f8",
      "incomplete_value": true,
      "site": "00698200",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697e48",
      "incomplete_value": true,
      "site": "00697e50",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00697e44",
      "DATA",
      [
        "storage",
        "00c75550",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00697e48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00698224"
      ]
    ]
  ],
  "added": [
    [
      "006981f4",
      "DATA",
      [
        "storage",
        "00c76520",
        null,
        "undefined *"
      ]
    ],
    [
      "006981f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00698224"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697e38 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 00697e38 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00697e3c ["COPY", "register:4048:8", ["const:c75000:8"]]
- 00697e40 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00697e40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00697e40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00697e40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f2c34ac3357a6b154c5f242bb9787997"></a>

### [`00697e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697e78.md) → [`00698228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698228.md) FUN_00698228

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`006928cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00692/006928cc.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.17% / 新版 79.17%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00697f08",
      "incomplete_value": true,
      "site": "00697f0c",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00697ea0",
      "DATA",
      [
        "storage",
        "00c75550",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00697ec8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006982a4"
      ]
    ]
  ],
  "added": [
    [
      "00698250",
      "DATA",
      [
        "storage",
        "00c76520",
        null,
        "undefined *"
      ]
    ],
    [
      "00698278",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006982a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697f0c ["INT_ADD", "register:40f0:8", ["const:697f0c:8", "const:4:8"]]
- 00697f0c ["CALL", null, ["callee:006928cc:8"]]
+ 006982bc ["INT_ADD", "register:40f0:8", ["const:6982bc:8", "const:4:8"]]
+ 006982bc ["CALL", null, ["callee:006928cc:8"]]
- 00697e90 ["INT_ADD", "register:40f0:8", ["const:697e90:8", "const:4:8"]]
- 00697e90 ["CALL", null, ["callee:00c58f30:8"]]
+ 00698240 ["INT_ADD", "register:40f0:8", ["const:698240:8", "const:4:8"]]
+ 00698240 ["CALL", null, ["callee:00c58f30:8"]]
- 00697e94 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00698244 ["COPY", "register:4040:8", ["const:c76000:8"]]
~~~


<a id="compare-f3f8b26e22cfba7887898ceeef6ff7f6"></a>

### [`00697f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697f38.md) → [`006982e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/006982e8.md) FUN_006982e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`006928cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00692/006928cc.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006982fc",
      "incomplete_value": false,
      "site": "00698304",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697f4c",
      "incomplete_value": false,
      "site": "00697f54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698340",
      "incomplete_value": true,
      "site": "00698350",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698344",
      "incomplete_value": true,
      "site": "00698350",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00698304",
      "DATA",
      [
        "storage",
        "00c75550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698304",
      "DATA",
      [
        "storage",
        "00c76520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697fa0 ["INT_ADD", "register:40f0:8", ["const:697fa0:8", "const:4:8"]]
- 00697fa0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00698350 ["INT_ADD", "register:40f0:8", ["const:698350:8", "const:4:8"]]
+ 00698350 ["CALL", null, ["callee:00c590a0:8"]]
- 00697fd4 ["INT_ADD", "register:40f0:8", ["const:697fd4:8", "const:4:8"]]
- 00697fd4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00698384 ["INT_ADD", "register:40f0:8", ["const:698384:8", "const:4:8"]]
+ 00698384 ["CALL", null, ["callee:00c58f50:8"]]
- 00697f48 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006982f8 ["COPY", "register:4040:8", ["const:c76000:8"]]
~~~


<a id="compare-e722639b23489a89992ca9a97b4b2c82"></a>

### [`00697ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697ff8.md) → [`006983a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/006983a8.md) FUN_006983a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0068f9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f9e0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00698014",
      "incomplete_value": true,
      "site": "00698018",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 00698018 ["INT_ADD", "register:40f0:8", ["const:698018:8", "const:4:8"]]
- 00698018 ["CALL", null, ["callee:00c58f50:8"]]
+ 006983c8 ["INT_ADD", "register:40f0:8", ["const:6983c8:8", "const:4:8"]]
+ 006983c8 ["CALL", null, ["callee:00c58f50:8"]]
- 00697ffc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00697ffc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 006983ac ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006983ac ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-4f2436eadedb4e0c9e16c36b56392c4d"></a>

### [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) → [`006983dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/006983dc.md) FUN_006983dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 28件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 0件  · 呼出先 28件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 36件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069841c",
      "incomplete_value": true,
      "site": "00698420",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4008:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069806c",
      "incomplete_value": true,
      "site": "00698070",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698428",
      "incomplete_value": true,
      "site": "00698434",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006980ac",
      "incomplete_value": false,
      "site": "006980b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006980a0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:006980a4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:006980ac",
      "PARAM",
      [
        "storage",
        "00c750a8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00698450",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00698454",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0069845c",
      "PARAM",
      [
        "storage",
        "00c76078",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698070 ["INT_ADD", "register:40f0:8", ["const:698070:8", "const:4:8"]]
- 00698070 ["CALL", null, ["callee:008ba294:8"]]
+ 00698420 ["INT_ADD", "register:40f0:8", ["const:698420:8", "const:4:8"]]
+ 00698420 ["CALL", null, ["callee:008ba294:8"]]
- 00698084 ["INT_ADD", "register:40f0:8", ["const:698084:8", "const:4:8"]]
- 00698084 ["CALL", null, ["callee:008ba29c:8"]]
+ 00698434 ["INT_ADD", "register:40f0:8", ["const:698434:8", "const:4:8"]]
+ 00698434 ["CALL", null, ["callee:008ba29c:8"]]
- 006980b8 ["INT_ADD", "register:40f0:8", ["const:6980b8:8", "const:4:8"]]
- 006980b8 ["CALL", null, ["callee:00c596b0:8"]]
+ 00698468 ["INT_ADD", "register:40f0:8", ["const:698468:8", "const:4:8"]]
+ 00698468 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-fc814db1c2209ea71be458f4eeae3306"></a>

### [`00698788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698788.md) → [`00698b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698b38.md) FUN_00698b38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00698b58",
      "incomplete_value": false,
      "site": "00698b5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006987a8",
      "incomplete_value": false,
      "site": "006987ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00698b5c",
      "DATA",
      [
        "storage",
        "00c755d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698b5c",
      "DATA",
      [
        "storage",
        "00c765a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069879c ["INT_ADD", "register:40f0:8", ["const:69879c:8", "const:4:8"]]
- 0069879c ["CALL", null, ["callee:00c58f30:8"]]
+ 00698b4c ["INT_ADD", "register:40f0:8", ["const:698b4c:8", "const:4:8"]]
+ 00698b4c ["CALL", null, ["callee:00c58f30:8"]]
- 006987a4 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00698b54 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006987a8 ["COPY", "tmp:0:8", ["const:5d0:8"]]
- 006987a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006987a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006987a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00698b58 ["COPY", "tmp:0:8", ["const:5a0:8"]]
+ 00698b58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00698b58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00698b58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7d1a6a73e7ddace5f902113ef096348b"></a>

### [`006987c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006987c0.md) → [`00698b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698b70.md) FUN_00698b70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00698b74",
      "incomplete_value": false,
      "site": "00698b78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006987c4",
      "incomplete_value": false,
      "site": "006987c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00698b78",
      "DATA",
      [
        "storage",
        "00c755d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698b78",
      "DATA",
      [
        "storage",
        "00c765a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006987c0 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00698b70 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006987c4 ["COPY", "tmp:0:8", ["const:5d0:8"]]
- 006987c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006987c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006987c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00698b74 ["COPY", "tmp:0:8", ["const:5a0:8"]]
+ 00698b74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00698b74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00698b74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-341aad796c2da25efb11ced81d4327a3"></a>

### [`006987e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006987e0.md) → [`00698b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698b90.md) FUN_00698b90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0068f9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f9e0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b894c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.58% / 新版 81.58%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698bec",
      "incomplete_value": true,
      "site": "00698bf0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069883c",
      "incomplete_value": true,
      "site": "00698840",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:2f38:8"
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
      "unmatched:00698810",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:0069882c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00698c1c"
      ]
    ],
    [
      "unmatched:00698830",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ],
  "added": [
    [
      "00698bc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00698bdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00698c1c"
      ]
    ],
    [
      "00698be0",
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
- 00698840 ["INT_ADD", "register:40f0:8", ["const:698840:8", "const:4:8"]]
- 00698840 ["CALL", null, ["callee:008b894c:8"]]
+ 00698bf0 ["INT_ADD", "register:40f0:8", ["const:698bf0:8", "const:4:8"]]
+ 00698bf0 ["CALL", null, ["callee:008b894c:8"]]
- 0069880c ["INT_ADD", "register:40f0:8", ["const:69880c:8", "const:4:8"]]
- 0069880c ["CALL", null, ["callee:008ba17c:8"]]
+ 00698bbc ["INT_ADD", "register:40f0:8", ["const:698bbc:8", "const:4:8"]]
+ 00698bbc ["CALL", null, ["callee:008ba17c:8"]]
- 00698810 ["INT_ADD", "register:40f0:8", ["const:698810:8", "const:4:8"]]
- 00698810 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-c835d7b1d50b6f081b852b031a6e6612"></a>

### [`006988a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006988a4.md) → [`00698c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698c54.md) FUN_00698c54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006988a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006988a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006988c8",
      "DATA",
      [
        "storage",
        "00c75650",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698c54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00698c58",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00698c78",
      "DATA",
      [
        "storage",
        "00c76620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006988a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006988a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006988a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006988a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006988a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006988a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006988ac ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-d0088e1df681d7f16707beb6e7a2f3dd"></a>

### [`006988dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006988dc.md) → [`00698c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698c8c.md) FUN_00698c8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006988e4",
      "DATA",
      [
        "storage",
        "00c75650",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698c94",
      "DATA",
      [
        "storage",
        "00c76620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006988dc ["COPY", "register:4040:8", ["const:c75000:8"]]
- 006988e0 ["COPY", "tmp:0:8", ["const:650:8"]]
- 006988e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006988e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006988e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006988e4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006988e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-839d727b33807cd81307d4b29ddbf9bc"></a>

### [`006988fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006988fc.md) → [`00698cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698cac.md) FUN_00698cac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f4c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698cc4",
      "incomplete_value": true,
      "site": "00698cc8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4008:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00698cfc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069894c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698934",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00698cfc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00698ce4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00698cfc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698918 ["INT_ADD", "register:40f0:8", ["const:698918:8", "const:4:8"]]
- 00698918 ["CALL", null, ["callee:008b7f4c:8"]]
+ 00698cc8 ["INT_ADD", "register:40f0:8", ["const:698cc8:8", "const:4:8"]]
+ 00698cc8 ["CALL", null, ["callee:008b7f4c:8"]]
- 0069894c ["INT_ADD", "register:40f0:8", ["const:69894c:8", "const:4:8"]]
- 0069894c ["CALL", null, ["ram:47ad34:8"]]
+ 00698cfc ["INT_ADD", "register:40f0:8", ["const:698cfc:8", "const:4:8"]]
+ 00698cfc ["CALL", null, ["ram:47b054:8"]]
- 0069891c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 0069891c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0069891c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0069891c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00698ccc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00698ccc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00698ccc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00698ccc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-ba7c745d020ce1b7bf7b1f2fda62cdc7"></a>

### [`006989a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006989a0.md) → [`00698d50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698d50.md) FUN_00698d50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006989b0",
      "incomplete_value": false,
      "site": "006989b4",
      "value": [
        "leaf",
        "const:10:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006989a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006989a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006989c4",
      "DATA",
      [
        "storage",
        "00c756d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00698d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00698d74",
      "DATA",
      [
        "storage",
        "00c766a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006989b4 ["INT_ADD", "register:40f0:8", ["const:6989b4:8", "const:4:8"]]
- 006989b4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00698d64 ["INT_ADD", "register:40f0:8", ["const:698d64:8", "const:4:8"]]
+ 00698d64 ["CALL", null, ["callee:00c58f30:8"]]
- 006989a0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006989a0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006989a0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006989a0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006989a4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006989a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-58029f74a4406030932300e74ad12d99"></a>

### [`006989d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006989d4.md) → [`00698d84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698d84.md) FUN_00698d84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006989e0",
      "DATA",
      [
        "storage",
        "00c756d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698d90",
      "DATA",
      [
        "storage",
        "00c766a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006989d4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 006989d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006989d8 ["COPY", "register:4048:8", ["const:c75000:8"]]
- 006989dc ["COPY", "tmp:0:8", ["const:6d0:8"]]
- 006989dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006989dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006989dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0b4416b8cde0e61e0f20873255909ccd"></a>

### [`006989f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006989f0.md) → [`00698da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698da0.md) FUN_00698da0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008b7a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7a60.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698db4",
      "incomplete_value": true,
      "site": "00698db8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4008:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006989f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006989f4",
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
      "00698da0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00698da4",
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
- 00698a08 ["INT_ADD", "register:40f0:8", ["const:698a08:8", "const:4:8"]]
- 00698a08 ["CALL", null, ["callee:008ba294:8"]]
+ 00698db8 ["INT_ADD", "register:40f0:8", ["const:698db8:8", "const:4:8"]]
+ 00698db8 ["CALL", null, ["callee:008ba294:8"]]
- 006989f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006989f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006989f0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006989f0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006989f4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006989f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-af2080a0016dcbe13b5c2ca93d0e5bd2"></a>

### [`00698a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698a68.md) → [`00698e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698e18.md) FUN_00698e18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698a90",
      "DATA",
      [
        "storage",
        "00c75750",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698e40",
      "DATA",
      [
        "storage",
        "00c76720",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698a7c ["INT_ADD", "register:40f0:8", ["const:698a7c:8", "const:4:8"]]
- 00698a7c ["CALL", null, ["callee:00c58f30:8"]]
+ 00698e2c ["INT_ADD", "register:40f0:8", ["const:698e2c:8", "const:4:8"]]
+ 00698e2c ["CALL", null, ["callee:00c58f30:8"]]
- 00698a88 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00698e38 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00698a8c ["COPY", "tmp:0:8", ["const:750:8"]]
- 00698a8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698a8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698a8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5ba8fbea64e41f8be17e27618745c056"></a>

### [`00698aa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698aa8.md) → [`00698e58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698e58.md) FUN_00698e58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698ab0",
      "DATA",
      [
        "storage",
        "00c75750",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698e60",
      "DATA",
      [
        "storage",
        "00c76720",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698aa8 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00698aac ["COPY", "tmp:0:8", ["const:750:8"]]
- 00698aac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698aac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698aac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00698ab0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00698ab0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-358440ba0e570f73ae6e9d9fb8665c59"></a>

### [`00698ad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698ad0.md) → [`00698e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698e80.md) FUN_00698e80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 16件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md)
- 新版 呼出元 0件  · 呼出先 16件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046ac48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ac48.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.81% / 新版 86.81%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 15件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00698ee4",
      "incomplete_value": true,
      "site": "00698ee4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698b34",
      "incomplete_value": true,
      "site": "00698b34",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698eec",
      "incomplete_value": false,
      "site": "00698efc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c66000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698b3c",
      "incomplete_value": false,
      "site": "00698b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:f28:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698ef4",
      "incomplete_value": false,
      "site": "00698efc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698b44",
      "incomplete_value": false,
      "site": "00698b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698aec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00698b00",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00698ee0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00698e9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00698eb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00698ee0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698b34 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00698b34 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00698ee4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00698ee4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00698b4c ["INT_ADD", "register:40f0:8", ["const:698b4c:8", "const:4:8"]]
- 00698b4c ["CALL", null, ["callee:00c596b0:8"]]
+ 00698efc ["INT_ADD", "register:40f0:8", ["const:698efc:8", "const:4:8"]]
+ 00698efc ["CALL", null, ["callee:00c596b0:8"]]
- 00698ba0 ["INT_ADD", "register:40f0:8", ["const:698ba0:8", "const:4:8"]]
- 00698ba0 ["CALL", null, ["callee:00c596b0:8"]]
+ 00698f50 ["INT_ADD", "register:40f0:8", ["const:698f50:8", "const:4:8"]]
+ 00698f50 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-f26626652e8b837f41400a36eac266bf"></a>

### [`00698dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698dd4.md) → [`00699184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699184.md) FUN_00699184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698df8",
      "DATA",
      [
        "storage",
        "00c757d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006991a8",
      "DATA",
      [
        "storage",
        "00c767a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698de8 ["INT_ADD", "register:40f0:8", ["const:698de8:8", "const:4:8"]]
- 00698de8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00699198 ["INT_ADD", "register:40f0:8", ["const:699198:8", "const:4:8"]]
+ 00699198 ["CALL", null, ["callee:00c58f30:8"]]
- 00698df0 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006991a0 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00698df4 ["COPY", "tmp:0:8", ["const:7d0:8"]]
- 00698df4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698df4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698df4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b2b81b4fae9a53de78dc590e81f61a21"></a>

### [`00698e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698e0c.md) → [`006991bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/006991bc.md) FUN_006991bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006991c0",
      "incomplete_value": false,
      "site": "006991c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698e10",
      "incomplete_value": false,
      "site": "00698e14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:7d0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006991c4",
      "DATA",
      [
        "storage",
        "00c757d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006991c4",
      "DATA",
      [
        "storage",
        "00c767a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698e0c ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006991bc ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00698e10 ["COPY", "tmp:0:8", ["const:7d0:8"]]
- 00698e10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698e10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698e10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006991c0 ["COPY", "tmp:0:8", ["const:7a0:8"]]
+ 006991c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006991c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006991c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3bcef4a89d8fac35e17302c22ce65765"></a>

### [`00698e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698e2c.md) → [`006991dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/006991dc.md) FUN_006991dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006882d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/006882d4.md) [`0068978c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/0068978c.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00688684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00688/00688684.md) [`00689b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00689/00689b3c.md) [`0068f188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f188.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 98.44% / 新版 98.44%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006992a0",
      "incomplete_value": true,
      "site": "006992ac",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4000:4"
              ],
              [
                "leaf",
                "const:1:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698e60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00699210",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698efc ["INT_ADD", "register:40f0:8", ["const:698efc:8", "const:4:8"]]
- 00698efc ["CALL", null, ["callee:0071d604:8"]]
+ 006992ac ["INT_ADD", "register:40f0:8", ["const:6992ac:8", "const:4:8"]]
+ 006992ac ["CALL", null, ["callee:0071d604:8"]]
- 00698e4c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00698e4c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006991fc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006991fc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00698e54 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00699204 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-16162d2daf94209daa53e4b5bc927ced"></a>

### [`00698f58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698f58.md) → [`00699308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699308.md) FUN_00699308

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698f7c",
      "DATA",
      [
        "storage",
        "00c75850",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00698f84",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00698f88",
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
      "0069932c",
      "DATA",
      [
        "storage",
        "00c76820",
        null,
        "undefined *"
      ]
    ],
    [
      "00699334",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00699338",
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
- 00698f6c ["INT_ADD", "register:40f0:8", ["const:698f6c:8", "const:4:8"]]
- 00698f6c ["CALL", null, ["callee:00c58f30:8"]]
+ 0069931c ["INT_ADD", "register:40f0:8", ["const:69931c:8", "const:4:8"]]
+ 0069931c ["CALL", null, ["callee:00c58f30:8"]]
- 00698f74 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00699324 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00698f78 ["COPY", "tmp:0:8", ["const:850:8"]]
- 00698f78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698f78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698f78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b0318c044e133eda66164c5bb8c677d7"></a>

### [`00698f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698f90.md) → [`00699340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699340.md) FUN_00699340

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00699344",
      "incomplete_value": false,
      "site": "00699348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:820:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698f94",
      "incomplete_value": false,
      "site": "00698f98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:850:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00699348",
      "DATA",
      [
        "storage",
        "00c75850",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00699348",
      "DATA",
      [
        "storage",
        "00c76820",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698f90 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00699340 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 00698f94 ["COPY", "tmp:0:8", ["const:850:8"]]
- 00698f94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698f94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698f94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00699344 ["COPY", "tmp:0:8", ["const:820:8"]]
+ 00699344 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00699344 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00699344 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c38b45fc8eb076b80a2e4bd8c1247c0e"></a>

### [`00698fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698fb0.md) → [`00699360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699360.md) FUN_00699360

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f4c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00698fc8",
      "incomplete_value": true,
      "site": "00698fcc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4008:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00699390",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00699000"
      ]
    ],
    [
      "unmatched:00698fe8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00699000",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00699390",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006993b0"
      ]
    ],
    [
      "00699398",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006993b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698fcc ["INT_ADD", "register:40f0:8", ["const:698fcc:8", "const:4:8"]]
- 00698fcc ["CALL", null, ["callee:008b7f4c:8"]]
+ 0069937c ["INT_ADD", "register:40f0:8", ["const:69937c:8", "const:4:8"]]
+ 0069937c ["CALL", null, ["callee:008b7f4c:8"]]
- 00698fd0 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00698fd0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00698fd0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00698fd0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00699380 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00699380 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00699380 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00699380 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00698fd8 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
+ 00699388 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
~~~


<a id="compare-ef4b689b30b9eb7123d77b1e376988eb"></a>

### [`00699054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699054.md) → [`00699404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699404.md) FUN_00699404

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00699054",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00699058",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00699078",
      "DATA",
      [
        "storage",
        "00c758d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00699404",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00699408",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00699428",
      "DATA",
      [
        "storage",
        "00c768a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00699054 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00699054 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00699054 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00699054 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00699058 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00699058 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0069905c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-b233b4db1bccc39baa03b979340ab91d"></a>

### [`00699088`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699088.md) → [`00699438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699438.md) FUN_00699438

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00699094",
      "DATA",
      [
        "storage",
        "00c758d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00699444",
      "DATA",
      [
        "storage",
        "00c768a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00699088 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00699088 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0069908c ["COPY", "register:4048:8", ["const:c75000:8"]]
- 00699090 ["COPY", "tmp:0:8", ["const:8d0:8"]]
- 00699090 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00699090 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00699090 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e5106b340daa6433a960f3583825c9d9"></a>

### [`006990a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006990a4.md) → [`00699454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699454.md) FUN_00699454

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md) [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) [`008b6eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb0.md)
- 新版 呼出元 0件  · 呼出先 13件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085c2a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2a8.md) [`0085c2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2b0.md) [`008b7a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7a60.md) [`008b7e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7e5c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 82.57% / 新版 82.57%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006990d8",
      "incomplete_value": true,
      "site": "006990e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "leaf",
            "const:2f38:8"
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
    "new": null,
    "old": {
      "definition_site": "006990d4",
      "incomplete_value": false,
      "site": "006990e4",
      "value": [
        "leaf",
        "const:38b:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069915c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006995b4"
      ]
    ],
    [
      "unmatched:00699160",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "unmatched:00699164",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0085c2b0"
      ]
    ]
  ],
  "added": [
    [
      "0069950c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006995b4"
      ]
    ],
    [
      "00699510",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "00699514",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0085c2b0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006990e4 ["INT_ADD", "register:40f0:8", ["const:6990e4:8", "const:4:8"]]
- 006990e4 ["CALL", null, ["callee:008b89cc:8"]]
+ 00699494 ["INT_ADD", "register:40f0:8", ["const:699494:8", "const:4:8"]]
+ 00699494 ["CALL", null, ["callee:008b89cc:8"]]
- 006990b4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 006990c4 ["INT_ADD", "register:40f0:8", ["const:6990c4:8", "const:4:8"]]
- 006990c4 ["CALL", null, ["callee:008ba294:8"]]
+ 00699474 ["INT_ADD", "register:40f0:8", ["const:699474:8", "const:4:8"]]
+ 00699474 ["CALL", null, ["callee:008ba294:8"]]
~~~


<a id="compare-1e1220896997b46b47228fbd252e9bb2"></a>

### [`00699284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699284.md) → [`00699634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699634.md) FUN_00699634

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006992a8",
      "DATA",
      [
        "storage",
        "00c75950",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006992ac",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006992b0",
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
      "00699658",
      "DATA",
      [
        "storage",
        "00c76920",
        null,
        "undefined *"
      ]
    ],
    [
      "0069965c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00699660",
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
- 00699298 ["INT_ADD", "register:40f0:8", ["const:699298:8", "const:4:8"]]
- 00699298 ["CALL", null, ["callee:00c58f30:8"]]
+ 00699648 ["INT_ADD", "register:40f0:8", ["const:699648:8", "const:4:8"]]
+ 00699648 ["CALL", null, ["callee:00c58f30:8"]]
- 006992a0 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 00699650 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006992a4 ["COPY", "tmp:0:8", ["const:950:8"]]
- 006992a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006992a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006992a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8c757087a5c2cafa9c5179365d8c0ec8"></a>

### [`006992b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992b8.md) → [`00699668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699668.md) FUN_00699668

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006992c4",
      "DATA",
      [
        "storage",
        "00c75950",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00699674",
      "DATA",
      [
        "storage",
        "00c76920",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006992b8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 006992b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006992bc ["COPY", "register:4048:8", ["const:c75000:8"]]
- 006992c0 ["COPY", "tmp:0:8", ["const:950:8"]]
- 006992c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006992c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006992c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ef683fa31c16f319f0a400702a5a47a5"></a>

### [`006992d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992d4.md) → [`00699684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699684.md) FUN_00699684

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 16件 [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00687b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687b8c.md)
- 新版 呼出元 0件  · 呼出先 16件 [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`00687f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00687/00687f3c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.23% / 新版 80.23%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006996d4",
      "incomplete_value": true,
      "site": "006996e4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca5000:8"
              ],
              [
                "leaf",
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00699324",
      "incomplete_value": true,
      "site": "00699334",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca4000:8"
              ],
              [
                "leaf",
                "const:a78:8"
              ]
            ]
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
      "definition_site": "006996d0",
      "incomplete_value": false,
      "site": "006996e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c66000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00699320",
      "incomplete_value": false,
      "site": "00699334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:f28:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006996dc",
      "incomplete_value": false,
      "site": "006996e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069932c",
      "incomplete_value": false,
      "site": "00699334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006992fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00699320",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:00699324",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006996ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "006996d0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006996d4",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00699334 ["INT_ADD", "register:40f0:8", ["const:699334:8", "const:4:8"]]
- 00699334 ["CALL", null, ["callee:00c596b0:8"]]
+ 006996e4 ["INT_ADD", "register:40f0:8", ["const:6996e4:8", "const:4:8"]]
+ 006996e4 ["CALL", null, ["callee:00c596b0:8"]]
- 006993d4 ["INT_ADD", "register:40f0:8", ["const:6993d4:8", "const:4:8"]]
- 006993d4 ["CALL", null, ["callee:008b89cc:8"]]
+ 00699784 ["INT_ADD", "register:40f0:8", ["const:699784:8", "const:4:8"]]
+ 00699784 ["CALL", null, ["callee:008b89cc:8"]]
- 00699428 ["INT_ADD", "register:40f0:8", ["const:699428:8", "const:4:8"]]
- 00699428 ["CALL", null, ["callee:00c596b0:8"]]
+ 006997d8 ["INT_ADD", "register:40f0:8", ["const:6997d8:8", "const:4:8"]]
+ 006997d8 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-1471df39225010b531e7945346d2f80b"></a>

### [`006995d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006995d0.md) → [`00699980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699980.md) _INIT_101

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.84% / 新版 63.84%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00699adc",
      "incomplete_value": false,
      "site": "00699ae0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca8000:8"
          ],
          [
            "leaf",
            "const:778:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069972c",
      "incomplete_value": true,
      "site": "00699730",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00699acc",
      "incomplete_value": false,
      "site": "00699ae0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca8000:8"
              ],
              [
                "leaf",
                "const:778:8"
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
      "definition_site": "0069971c",
      "incomplete_value": true,
      "site": "00699730",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4008:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00699c2c",
      "incomplete_value": true,
      "site": "00699c30",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 14,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006995d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006995d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006995dc",
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
      "00699984",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00699988",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0069998c",
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
- 00699730 ["INT_ADD", "register:40f0:8", ["const:699730:8", "const:4:8"]]
- 00699730 ["CALL", null, ["callee:0043bb58:8"]]
+ 00699ae0 ["INT_ADD", "register:40f0:8", ["const:699ae0:8", "const:4:8"]]
+ 00699ae0 ["CALL", null, ["callee:0043bb58:8"]]
- 00699880 ["INT_ADD", "register:40f0:8", ["const:699880:8", "const:4:8"]]
- 00699880 ["CALL", null, ["callee:00c58f50:8"]]
+ 00699c30 ["INT_ADD", "register:40f0:8", ["const:699c30:8", "const:4:8"]]
+ 00699c30 ["CALL", null, ["callee:00c58f50:8"]]
- 006995d0 ["INT_SUB", "register:8:8", ["register:8:8", "const:120:8"]]
~~~


<a id="compare-a1a5ff613eff3317ddd668b6d0c1dfe6"></a>

### [`00699960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699960.md) → [`00699d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699d10.md) FUN_00699d10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) · 呼出先 28件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md)
- 新版 呼出元 1件 [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) · 呼出先 28件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.73% / 新版 80.73%

優先判定に残った影響 `call_argument_candidate` 9件, `store_value` 4件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 24件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00699e10",
      "incomplete_value": true,
      "site": "00699e20",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:db6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00699a60",
      "incomplete_value": true,
      "site": "00699a70",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:cdf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0069a0f8",
      "incomplete_value": true,
      "site": "0069a108",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:502:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00699d48",
      "incomplete_value": true,
      "site": "00699d58",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:433:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 58,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0069a10c",
      "incomplete_value": true,
      "site": "0069a10c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00699d5c",
      "incomplete_value": true,
      "site": "00699d5c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 59,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00699990",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00699994",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "unmatched:006999ac",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00699d40",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00699d44",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "00699d5c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006999b0 ["INT_ADD", "register:40f0:8", ["const:6999b0:8", "const:4:8"]]
- 006999b0 ["CALL", null, ["callee:006a064c:8"]]
+ 00699d60 ["INT_ADD", "register:40f0:8", ["const:699d60:8", "const:4:8"]]
+ 00699d60 ["CALL", null, ["callee:006a064c:8"]]
- 00699c64 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00699c64 ["CBRANCH", null, ["local:b45:8", "tmp:0:1"]]
+ 0069a014 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0069a014 ["CBRANCH", null, ["local:b50:8", "tmp:0:1"]]
- 00699c98 ["INT_ADD", "register:40f0:8", ["const:699c98:8", "const:4:8"]]
- 00699c98 ["CALL", null, ["callee:00487c9c:8"]]
+ 0069a048 ["INT_ADD", "register:40f0:8", ["const:69a048:8", "const:4:8"]]
+ 0069a048 ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-3506339295fa8ef1757c419d4842074b"></a>

### [`0069a45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a45c.md) → [`0069a80c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a80c.md) FUN_0069a80c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069a45c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069a460",
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
      "0069a80c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0069a810",
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
- 0069a45c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0069a45c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0069a45c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0069a45c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0069a460 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0069a460 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0069a464 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-6a55d2c44d8410614288e45ea385207d"></a>

### [`0069a4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a4b0.md) → [`0069a860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a860.md) FUN_0069a860

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 3件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 2件 [`0089c290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089c290.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 3件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069a8cc",
      "incomplete_value": false,
      "site": "0069a8d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069a51c",
      "incomplete_value": false,
      "site": "0069a520",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
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
      "0069a8cc",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0069a8cc",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069a520 ["INT_ADD", "register:40f0:8", ["const:69a520:8", "const:4:8"]]
- 0069a520 ["CALL", null, ["callee:00442c90:8"]]
+ 0069a8d0 ["INT_ADD", "register:40f0:8", ["const:69a8d0:8", "const:4:8"]]
+ 0069a8d0 ["CALL", null, ["callee:00442c90:8"]]
- 0069a4c4 ["INT_ADD", "register:40f0:8", ["const:69a4c4:8", "const:4:8"]]
- 0069a4c4 ["CALL", null, ["callee:00c59180:8"]]
+ 0069a874 ["INT_ADD", "register:40f0:8", ["const:69a874:8", "const:4:8"]]
+ 0069a874 ["CALL", null, ["callee:00c59180:8"]]
- 0069a4cc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0069a4cc ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 0069a87c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0069a87c ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-add72fb0cebc537d84f2e918e2a60018"></a>

### [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) → [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) FUN_0069a90c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`00a89b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89b40.md) · 呼出先 62件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0059769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059769c.md) [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md)
- 新版 呼出元 4件 [`005bab88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bab88.md) [`0089c290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089c290.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`00a8ab34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8a/00a8ab34.md) · 呼出先 62件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`005979bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005979bc.md) [`00597a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597a48.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 67.46% / 新版 67.46%

優先判定に残った影響 `call_argument_candidate` 47件, `call_target` 2件, `store_condition` 5件, `unresolved_branch_alignment` 229件, `unresolved_call_alignment` 174件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 166件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069a724",
      "incomplete_value": true,
      "site": "0069a740",
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
            "const:1b0:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069a728",
      "incomplete_value": true,
      "site": "0069a740",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40b0:4"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069a72c",
      "incomplete_value": true,
      "site": "0069a740",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40b8:4"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069a574",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069a580",
      "WRITE",
      [
        "storage",
        "Stack[-0x304]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069a58c",
      "WRITE",
      [
        "storage",
        "Stack[-0x348]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0069a924",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0069a930",
      "WRITE",
      [
        "storage",
        "Stack[-0x304]",
        null,
        null
      ]
    ],
    [
      "0069a93c",
      "WRITE",
      [
        "storage",
        "Stack[-0x348]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0069a690 ["INT_ADD", "register:40f0:8", ["const:69a690:8", "const:4:8"]]
- 0069a690 ["CALL", null, ["callee:00a39bc4:8"]]
+ 0069aa40 ["INT_ADD", "register:40f0:8", ["const:69aa40:8", "const:4:8"]]
+ 0069aa40 ["CALL", null, ["callee:00a39bc4:8"]]
- 0069a740 ["INT_ADD", "register:40f0:8", ["const:69a740:8", "const:4:8"]]
- 0069a740 ["CALL", null, ["callee:00597ad8:8"]]
+ 0069aaf0 ["INT_ADD", "register:40f0:8", ["const:69aaf0:8", "const:4:8"]]
+ 0069aaf0 ["CALL", null, ["callee:00597ad8:8"]]
- 0069a8e8 ["INT_ADD", "register:40f0:8", ["const:69a8e8:8", "const:4:8"]]
- 0069a8e8 ["CALL", null, ["callee:00a39bc4:8"]]
+ 0069ac98 ["INT_ADD", "register:40f0:8", ["const:69ac98:8", "const:4:8"]]
+ 0069ac98 ["CALL", null, ["callee:00a39bc4:8"]]
~~~


<a id="compare-f3f9aa279877ce32b774bfc88613ba04"></a>

### [`0069e85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e85c.md) → [`0069ec0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069e/0069ec0c.md) FUN_0069ec0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069e884",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069ec48"
      ]
    ]
  ],
  "added": [
    [
      "0069ec34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069ec48"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069e870 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 0069e870 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 0069ec20 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 0069ec20 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 0069e880 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:40a8:8"]]
- 0069e880 ["INT_SBORROW", "register:106:1", ["register:40a8:8", "register:40a0:8"]]
- 0069e880 ["INT_SUB", "tmp:0:8", ["register:40a8:8", "register:40a0:8"]]
- 0069e880 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 0069e884 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0069e884 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-3c57c965eda5b5ed9539360d16686542"></a>

### [`0069e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e8e4.md) → [`0069ec94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069e/0069ec94.md) FUN_0069ec94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 1件 [`006a2824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2824.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 1件 [`006a2bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2bd4.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069e8e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069e8e8",
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
      "0069ec94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0069ec98",
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
- 0069e8e4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0069e8e4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0069e8e4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0069e8e4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0069e8e8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0069e8e8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0069e8e8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0069e8e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0069e8ec ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-541c879ed04c56a986de5c8f780be0d1"></a>

### [`0069e934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e934.md) → [`0069ece4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069e/0069ece4.md) FUN_0069ece4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 3件 [`0063499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00634/0063499c.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 2件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 3件 [`00634d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/00634d4c.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069e934",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069e938",
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
      "0069ece4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0069ece8",
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
- 0069e934 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0069e934 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0069e934 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0069e934 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0069e938 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0069e938 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0069e93c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-b6cf5db8bb02cf122ee0a663ab0299b1"></a>

### [`0069e968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e968.md) → [`0069ed18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069e/0069ed18.md) FUN_0069ed18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0063499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00634/0063499c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0089cc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089cc90.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00634d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/00634d4c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.66% / 新版 88.66%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069ea74",
      "incomplete_value": true,
      "site": "0069ea78",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:2:8"
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
      "unmatched:0069e9d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069ee6c"
      ]
    ],
    [
      "unmatched:0069ea44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069ee90"
      ]
    ]
  ],
  "added": [
    [
      "0069ed88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069ee6c"
      ]
    ],
    [
      "0069edf4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069ee90"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069ea78 ["INT_ADD", "register:40f0:8", ["const:69ea78:8", "const:4:8"]]
- 0069ea78 ["CALL", null, ["callee:00c58f30:8"]]
+ 0069ee28 ["INT_ADD", "register:40f0:8", ["const:69ee28:8", "const:4:8"]]
+ 0069ee28 ["CALL", null, ["callee:00c58f30:8"]]
- 0069e98c ["INT_ADD", "register:40f0:8", ["const:69e98c:8", "const:4:8"]]
- 0069e98c ["CALL", null, ["callee:00c59180:8"]]
+ 0069ed3c ["INT_ADD", "register:40f0:8", ["const:69ed3c:8", "const:4:8"]]
+ 0069ed3c ["CALL", null, ["callee:00c59180:8"]]
- 0069e990 ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
- 0069e990 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0069ed40 ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
+ 0069ed40 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-c2f1e42302317b0a810b29f80c5d4ac4"></a>

### [`0069eb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069eb08.md) → [`0069eeb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069e/0069eeb8.md) FUN_0069eeb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0069f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069f154.md) · 呼出先 5件 [`005509f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)
- 新版 呼出元 1件 [`0069f504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f504.md) · 呼出先 5件 [`00550d14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d14.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ff0.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069eee8",
      "incomplete_value": false,
      "site": "0069eef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ad000:8"
          ],
          [
            "leaf",
            "const:a64:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069eb28",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069eb30",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58ff0"
      ]
    ],
    [
      "unmatched:0069eb38",
      "PARAM",
      [
        "storage",
        "002ad997",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0069eed8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0069eee0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58ff0"
      ]
    ],
    [
      "0069eee8",
      "PARAM",
      [
        "storage",
        "002ada64",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069eb44 ["INT_ADD", "register:40f0:8", ["const:69eb44:8", "const:4:8"]]
- 0069eb44 ["CALL", null, ["callee:00c59000:8"]]
+ 0069eef4 ["INT_ADD", "register:40f0:8", ["const:69eef4:8", "const:4:8"]]
+ 0069eef4 ["CALL", null, ["callee:00c59000:8"]]
- 0069eb28 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0069eb28 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0069eb28 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 0069eb2c ["COPY", "tmp:0:8", ["const:8:8"]]
- 0069eb2c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 0069eb2c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 0069eb2c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-d3a97a5d334bc9b2a0412e644ed7befe"></a>

### [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) → [`0069f024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f024.md) FUN_0069f024

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) [`008546c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008546c8.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) · 呼出先 16件 [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d68.md) [`006a2d6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d6c.md)
- 新版 呼出元 6件 [`005bab88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bab88.md) [`00854c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c7c.md) [`00855674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/00855674.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) [`0089c290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089c290.md) · 呼出先 16件 [`00550d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d10.md) [`0069f31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f31c.md) [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md) [`006a3118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3118.md) [`006a311c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a311c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 93.71% / 新版 93.71%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0069f1e8",
      "incomplete_value": false,
      "site": "0069f1e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:a20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069ee38",
      "incomplete_value": false,
      "site": "0069ee38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a50:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069f080",
      "incomplete_value": true,
      "site": "0069f088",
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
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069f07c",
      "incomplete_value": true,
      "site": "0069f088",
      "value": [
        "live",
        "register:4000:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069ec98",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069ecbc",
      "DATA",
      [
        "storage",
        "00c759d0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0069ecbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0069f048",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0069f06c",
      "DATA",
      [
        "storage",
        "00c769a0",
        null,
        "undefined *"
      ]
    ],
    [
      "0069f06c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0069ecd8 ["INT_ADD", "register:40f0:8", ["const:69ecd8:8", "const:4:8"]]
- 0069ecd8 ["CALL", null, ["callee:0069f31c:8"]]
+ 0069f088 ["INT_ADD", "register:40f0:8", ["const:69f088:8", "const:4:8"]]
+ 0069f088 ["CALL", null, ["callee:0069f31c:8"]]
- 0069ee0c ["INT_ADD", "register:40f0:8", ["const:69ee0c:8", "const:4:8"]]
- 0069ee0c ["CALL", null, ["callee:006a3154:8"]]
+ 0069f1bc ["INT_ADD", "register:40f0:8", ["const:69f1bc:8", "const:4:8"]]
+ 0069f1bc ["CALL", null, ["callee:006a3154:8"]]
- 0069ec94 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 0069ec94 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2fe6ae50ad1af2e4832a9bc244dbea9f"></a>

### [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) → [`0069f31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f31c.md) FUN_0069f31c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 6件 [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) [`008540e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008540e4.md) [`00854350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854350.md) [`0088a1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1c4.md) · 呼出先 6件 [`0069fda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069fda0.md) [`006a0048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0048.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 6件 [`0069f024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f024.md) [`006b7538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7538.md) [`00855090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/00855090.md) [`008552fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/008552fc.md) [`0088b170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b170.md) · 呼出先 6件 [`006a0150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0150.md) [`006a03f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a03f8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069f064",
      "incomplete_value": true,
      "site": "0069f084",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4098:8"
              ],
              [
                "leaf",
                "const:58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069f080",
      "incomplete_value": true,
      "site": "0069f084",
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
            "const:f:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069f07c",
      "incomplete_value": true,
      "site": "0069f084",
      "value": [
        "INT_MULT",
        "8",
        [
          [
            "INT_SRIGHT",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:4:8"
              ]
            ]
          ],
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:cccd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 4
  }
]
~~~


~~~diff
- 0069f084 ["INT_ADD", "register:40f0:8", ["const:69f084:8", "const:4:8"]]
- 0069f084 ["CALL", null, ["callee:006a03f8:8"]]
+ 0069f434 ["INT_ADD", "register:40f0:8", ["const:69f434:8", "const:4:8"]]
+ 0069f434 ["CALL", null, ["callee:006a03f8:8"]]
- 0069ef98 ["INT_ADD", "register:40f0:8", ["const:69ef98:8", "const:4:8"]]
- 0069ef98 ["CALL", null, ["callee:00c59180:8"]]
+ 0069f348 ["INT_ADD", "register:40f0:8", ["const:69f348:8", "const:4:8"]]
+ 0069f348 ["CALL", null, ["callee:00c59180:8"]]
- 0069efb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0069efb4 ["INT_ADD", "register:40f0:8", ["const:69efb4:8", "const:4:8"]]
- 0069efb4 ["CALLIND", null, ["register:0:8"]]
+ 0069f364 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0069f364 ["INT_ADD", "register:40f0:8", ["const:69f364:8", "const:4:8"]]
+ 0069f364 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f9d6ff7a771b51354717fa9b3027fd08"></a>

### [`0069f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069f154.md) → [`0069f504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f504.md) FUN_0069f504

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006a2d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d70.md) [`006a3a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3a2c.md) · 呼出先 26件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 2件 [`006a3120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3120.md) [`006a3ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3ddc.md) · 呼出先 26件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.85% / 新版 85.85%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 13件, `store_value` 2件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0069fca0",
      "incomplete_value": true,
      "site": "0069fcb8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:60d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069f8f0",
      "incomplete_value": true,
      "site": "0069f908",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:542:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 91,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0069fcbc",
      "incomplete_value": true,
      "site": "0069fcbc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069f90c",
      "incomplete_value": true,
      "site": "0069f90c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 92,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069f694",
      "incomplete_value": false,
      "site": "0069f698",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:3a3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069f2e4",
      "incomplete_value": false,
      "site": "0069f2e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:2d6:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069f1a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069fdd0"
      ]
    ],
    [
      "unmatched:0069f2c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x1b0]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069f2cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069f6ac"
      ]
    ]
  ],
  "added": [
    [
      "0069f550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069fdd0"
      ]
    ],
    [
      "0069f678",
      "WRITE",
      [
        "storage",
        "Stack[-0x1b0]",
        null,
        null
      ]
    ],
    [
      "0069f67c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069f6ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069f2e8 ["INT_ADD", "register:40f0:8", ["const:69f2e8:8", "const:4:8"]]
- 0069f2e8 ["CALL", null, ["callee:00c59010:8"]]
+ 0069f698 ["INT_ADD", "register:40f0:8", ["const:69f698:8", "const:4:8"]]
+ 0069f698 ["CALL", null, ["callee:00c59010:8"]]
- 0069f384 ["INT_ADD", "register:40f0:8", ["const:69f384:8", "const:4:8"]]
- 0069f384 ["CALL", null, ["callee:00c59010:8"]]
+ 0069f734 ["INT_ADD", "register:40f0:8", ["const:69f734:8", "const:4:8"]]
+ 0069f734 ["CALL", null, ["callee:00c59010:8"]]
- 0069f468 ["INT_ADD", "register:40f0:8", ["const:69f468:8", "const:4:8"]]
- 0069f468 ["CALL", null, ["callee:00c58f50:8"]]
+ 0069f818 ["INT_ADD", "register:40f0:8", ["const:69f818:8", "const:4:8"]]
+ 0069f818 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0b5fb5ea65ffd21db88f0f0d4c98bcb0"></a>

### [`0069fda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069fda0.md) → [`006a0150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0150.md) FUN_006a0150

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006a0034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0034.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0069f31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f31c.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006a03e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a03e4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 2件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "0069ff88",
      "incomplete_value": true,
      "site": "0069ffa4",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0069fe58"
      ],
      [
        "FALL_THROUGH",
        "006a0208"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a0204",
      "incomplete_value": true,
      "site": "006a020c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "live",
                "register:40b0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069fe5c",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0069fe58"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a0208"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a0204",
      "incomplete_value": true,
      "site": "006a0224",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "live",
                "register:40b0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069fe74",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 14,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069fde8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0358"
      ]
    ],
    [
      "unmatched:0069fe1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a01ec"
      ]
    ],
    [
      "unmatched:0069fe50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0214"
      ]
    ]
  ],
  "added": [
    [
      "006a0198",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0358"
      ]
    ],
    [
      "006a01cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a01ec"
      ]
    ],
    [
      "006a0200",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0214"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069fdcc ["INT_SUB", "register:40c0:8", ["register:40b8:8", "register:40c8:8"]]
- 0069fdd0 ["INT_SRIGHT", "register:4040:8", ["register:40c0:8", "const:4:8"]]
- 0069fdd4 ["INT_MULT", "register:40e0:8", ["register:4040:8", "register:4050:8"]]
~~~


<a id="compare-6add6ada8ff39eade4dd02836fd0b5db"></a>

### [`006a0034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0034.md) → [`006a03e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a03e4.md) FUN_006a03e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0069fda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069fda0.md) [`006a3630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3630.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`006a0150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0150.md) [`006a39e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a39e0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a03f0",
      "incomplete_value": false,
      "site": "006a03f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a0040",
      "incomplete_value": false,
      "site": "006a0044",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b7000:8"
          ],
          [
            "leaf",
            "const:f8c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a03f0",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006a03f0",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a0044 ["INT_ADD", "register:40f0:8", ["const:6a0044:8", "const:4:8"]]
- 006a0044 ["CALL", null, ["callee:0043bad8:8"]]
+ 006a03f4 ["INT_ADD", "register:40f0:8", ["const:6a03f4:8", "const:4:8"]]
+ 006a03f4 ["CALL", null, ["callee:0043bad8:8"]]
- 006a003c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006a03ec ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 006a0040 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 006a0040 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a0040 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a0040 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a03f0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006a03f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a03f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a03f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-f0df6af47852d948ebc6e4906a1e2a80"></a>

### [`006a0048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0048.md) → [`006a03f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a03f8.md) FUN_006a03f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ea8.md) [`006a3234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3234.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`0069f31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f31c.md) [`006a3258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3258.md) [`006a35e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a35e4.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a0258",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "006a0608",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006a0078 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a0078 ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
+ 006a0428 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a0428 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
- 006a009c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a009c ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
+ 006a044c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a044c ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
- 006a00e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 006a00e4 ["INT_ADD", "register:40f0:8", ["const:6a00e4:8", "const:4:8"]]
- 006a00e4 ["CALLIND", null, ["register:0:8"]]
+ 006a0494 ["COPY", "register:0:8", ["register:4040:8"]]
+ 006a0494 ["INT_ADD", "register:40f0:8", ["const:6a0494:8", "const:4:8"]]
+ 006a0494 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c6e8038ccab9b43293048506b80e5a1d"></a>

### [`006a02ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a02ec.md) → [`006a069c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a069c.md) FUN_006a069c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00699960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699960.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006a0500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0500.md) [`006a06b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06b8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00699d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699d10.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006a08b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a08b0.md) [`006a0a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a68.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 2件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "006a0490",
      "incomplete_value": true,
      "site": "006a04a8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a034c"
      ],
      [
        "FALL_THROUGH",
        "006a06fc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a06fc",
      "incomplete_value": true,
      "site": "006a070c",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "006a034c",
      "incomplete_value": true,
      "site": "006a035c",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
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
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a0444"
      ],
      [
        "FALL_THROUGH",
        "006a07f4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a07f4",
      "incomplete_value": true,
      "site": "006a07f8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a0444",
      "incomplete_value": true,
      "site": "006a0448",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a034c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a085c"
      ]
    ],
    [
      "unmatched:006a03f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a0410",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006a06fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a085c"
      ]
    ],
    [
      "006a07a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "006a07c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006a0328 ["INT_SUB", "register:4040:8", ["register:4040:8", "register:4050:8"]]
- 006a032c ["INT_SRIGHT", "register:4040:8", ["register:4040:8", "const:3:8"]]
- 006a0330 ["INT_MULT", "register:40b8:8", ["register:4040:8", "register:4058:8"]]
~~~


<a id="compare-37955ebeaa2e3303b09f65183949cc32"></a>

### [`006a0500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0500.md) → [`006a08b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a08b0.md) FUN_006a08b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a02ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a02ec.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`006a069c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a069c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.33% / 新版 77.33%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a05b0"
      ],
      [
        "FALL_THROUGH",
        "006a0960"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a0960",
      "incomplete_value": true,
      "site": "006a0964",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a05b0",
      "incomplete_value": true,
      "site": "006a05b4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a0500",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a0504",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a0508",
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
      "006a08b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006a08b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006a08b8",
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
- 006a0500 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a0500 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a0500 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 006a0500 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006a0504 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006a0504 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 006a0508 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006a0508 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006a0508 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006a0508 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-298f659046f027e3af83e2dd27385bc7"></a>

### [`006a062c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a062c.md) → [`006a09dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a09dc.md) FUN_006a09dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a0a24",
      "incomplete_value": true,
      "site": "006a0a28",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffe0:8"
              ]
            ]
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a062c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a0630",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a0634",
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
      "006a09dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006a09e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006a09e4",
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
- 006a0678 ["INT_ADD", "register:40f0:8", ["const:6a0678:8", "const:4:8"]]
- 006a0678 ["CALL", null, ["callee:00c58f50:8"]]
+ 006a0a28 ["INT_ADD", "register:40f0:8", ["const:6a0a28:8", "const:4:8"]]
+ 006a0a28 ["CALL", null, ["callee:00c58f50:8"]]
- 006a062c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a062c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a062c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 006a062c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006a0630 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006a0630 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006a0630 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 006a0630 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-cd3d1061a59a36dc8a0bbf3987fe0b6e"></a>

### [`006a06b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06b8.md) → [`006a0a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a68.md) FUN_006a0a68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006a02ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a02ec.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`006a069c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a069c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a0a74",
      "incomplete_value": false,
      "site": "006a0a78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a06c4",
      "incomplete_value": false,
      "site": "006a06c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b7000:8"
          ],
          [
            "leaf",
            "const:f8c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a0a74",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006a0a74",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a06c8 ["INT_ADD", "register:40f0:8", ["const:6a06c8:8", "const:4:8"]]
- 006a06c8 ["CALL", null, ["callee:0043bad8:8"]]
+ 006a0a78 ["INT_ADD", "register:40f0:8", ["const:6a0a78:8", "const:4:8"]]
+ 006a0a78 ["CALL", null, ["callee:0043bad8:8"]]
- 006a06c0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006a0a70 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 006a06c4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 006a06c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a06c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a06c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a0a74 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006a0a74 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a0a74 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a0a74 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5b0ee4694d26989ff615b7979e22e08e"></a>

### [`006a06cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06cc.md) → [`006a0a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a7c.md) FUN_006a0a7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00699960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699960.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 2件 [`00699d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699d10.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a0a88",
      "incomplete_value": false,
      "site": "006a0a8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a06d8",
      "incomplete_value": false,
      "site": "006a06dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b7000:8"
          ],
          [
            "leaf",
            "const:f8c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a0a88",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006a0a88",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a06dc ["INT_ADD", "register:40f0:8", ["const:6a06dc:8", "const:4:8"]]
- 006a06dc ["CALL", null, ["callee:00442c90:8"]]
+ 006a0a8c ["INT_ADD", "register:40f0:8", ["const:6a0a8c:8", "const:4:8"]]
+ 006a0a8c ["CALL", null, ["callee:00442c90:8"]]
- 006a06d4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006a0a84 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 006a06d8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 006a06d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a06d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a06d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a0a88 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006a0a88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a0a88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a0a88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d1a5121fe449f023af8c3d006b140a15"></a>

### [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) → [`006a0a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a90.md) FUN_006a0a90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00699960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699960.md) [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) [`006a0a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0a90.md) · 呼出先 5件 [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) [`006a0a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0a90.md) [`006a0e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0e08.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00699d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699d10.md) [`006a0a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a90.md) [`006a0e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0e40.md) · 呼出先 5件 [`006a0a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a90.md) [`006a0e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0e40.md) [`006a11b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a11b8.md) [`00803284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803284.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.03% / 新版 97.03%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a0af4",
      "incomplete_value": true,
      "site": "006a0af8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a0744",
      "incomplete_value": true,
      "site": "006a0748",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "live",
            "register:40b8:8"
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
      "definition_site": "006a0aec",
      "incomplete_value": true,
      "site": "006a0af8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40a8:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a0b88",
      "incomplete_value": true,
      "site": "006a0b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "live",
            "register:40c8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a07fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0b64"
      ]
    ],
    [
      "unmatched:006a0848",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006a0808"
      ]
    ]
  ],
  "added": [
    [
      "006a0bac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0b64"
      ]
    ],
    [
      "006a0bf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0bb8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a0748 ["INT_ADD", "register:40f0:8", ["const:6a0748:8", "const:4:8"]]
- 006a0748 ["CALL", null, ["callee:00803284:8"]]
+ 006a0af8 ["INT_ADD", "register:40f0:8", ["const:6a0af8:8", "const:4:8"]]
+ 006a0af8 ["CALL", null, ["callee:00803284:8"]]
- 006a07e0 ["INT_ADD", "register:40f0:8", ["const:6a07e0:8", "const:4:8"]]
- 006a07e0 ["CALL", null, ["callee:00803284:8"]]
+ 006a0b90 ["INT_ADD", "register:40f0:8", ["const:6a0b90:8", "const:4:8"]]
+ 006a0b90 ["CALL", null, ["callee:00803284:8"]]
- 006a0884 ["INT_ADD", "register:40f0:8", ["const:6a0884:8", "const:4:8"]]
- 006a0884 ["CALL", null, ["local:b0:8"]]
+ 006a0c34 ["INT_ADD", "register:40f0:8", ["const:6a0c34:8", "const:4:8"]]
+ 006a0c34 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-c991ca54cb3c239ff0e399fd49ebff7b"></a>

### [`006a0a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0a90.md) → [`006a0e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0e40.md) FUN_006a0e40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) · 呼出先 3件 [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006a0a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a90.md) · 呼出先 3件 [`006a0a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a90.md) [`00803284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803284.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.85% / 新版 96.85%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a0c04",
      "incomplete_value": true,
      "site": "006a0c0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "live",
            "register:40c8:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006a0b44"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a0ef4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a0ef4",
      "incomplete_value": true,
      "site": "006a1018",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ],
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SLESS",
              "INT_SBORROW"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a0b44",
      "incomplete_value": true,
      "site": "006a0c68",
      "value": [
        "BOOL_AND",
        "1",
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
          ],
          [
            "INT_EQUAL",
            "1",
            [
              [
                "live",
                "register:100:1"
              ],
              [
                "live",
                "register:103:1"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a0b44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0fdc"
      ]
    ]
  ],
  "added": [
    [
      "006a0ef4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0fdc"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a0c0c ["INT_ADD", "register:40f0:8", ["const:6a0c0c:8", "const:4:8"]]
- 006a0c0c ["CALL", null, ["callee:00803284:8"]]
+ 006a0fbc ["INT_ADD", "register:40f0:8", ["const:6a0fbc:8", "const:4:8"]]
+ 006a0fbc ["CALL", null, ["callee:00803284:8"]]
- 006a0a90 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
- 006a0a90 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 006a0e40 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
+ 006a0e40 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 006a0ac0 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 006a0e70 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-e2fc063db3ff79b2952f159a2649abf3"></a>

### [`006a0e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0e08.md) → [`006a11b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a11b8.md) FUN_006a11b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) [`006a0e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0e08.md) · 呼出先 4件 [`006a0e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0e08.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`006a0a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a0a90.md) [`006a11b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a11b8.md) · 呼出先 4件 [`006a11b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a11b8.md) [`00803284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803284.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.22% / 新版 87.22%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 2件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1594",
      "incomplete_value": true,
      "site": "006a15b4",
      "value": [
        "live",
        "register:40d8:8"
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a158c",
      "incomplete_value": true,
      "site": "006a15b4",
      "value": [
        "live",
        "register:40d0:8"
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1598",
      "incomplete_value": true,
      "site": "006a15b4",
      "value": [
        "live",
        "register:40e0:8"
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a0f0c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "unmatched:006a0f18",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00803284"
      ]
    ],
    [
      "unmatched:006a0f9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a14c4"
      ]
    ]
  ],
  "added": [
    [
      "006a12bc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "006a12c8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00803284"
      ]
    ],
    [
      "006a134c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a14c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a0e54 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a0e54 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 006a0e54 ["CBRANCH", null, ["local:b55:8", "tmp:1:1"]]
+ 006a1204 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a1204 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 006a1204 ["CBRANCH", null, ["local:b53:8", "tmp:1:1"]]
- 006a1204 ["INT_ADD", "register:40f0:8", ["const:6a1204:8", "const:4:8"]]
- 006a1204 ["CALL", null, ["local:b0:8"]]
+ 006a15b4 ["INT_ADD", "register:40f0:8", ["const:6a15b4:8", "const:4:8"]]
+ 006a15b4 ["CALL", null, ["local:b0:8"]]
- 006a0e2c ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 006a0e2c ["CBRANCH", null, ["local:b93:8", "tmp:0:1"]]
+ 006a11dc ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 006a11dc ["CBRANCH", null, ["local:b91:8", "tmp:0:1"]]
~~~


<a id="compare-adc5f194122a6d6d4f7123dbf1110530"></a>

### [`006a1500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1500.md) → [`006a18b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a18b0.md) FUN_006a18b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`006a1500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1500.md) [`00848a84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848a84.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`006a1500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1500.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`006a18b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a18b0.md) [`00849a30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849a30.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 2件 [`006a18b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a18b0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a1514",
      "incomplete_value": true,
      "site": "006a151c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4008:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 006a151c ["INT_ADD", "register:40f0:8", ["const:6a151c:8", "const:4:8"]]
- 006a151c ["CALL", null, ["local:b0:8"]]
+ 006a18cc ["INT_ADD", "register:40f0:8", ["const:6a18cc:8", "const:4:8"]]
+ 006a18cc ["CALL", null, ["local:b0:8"]]
- 006a1500 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 006a1500 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006a18b0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006a18b0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 006a1528 ["INT_ADD", "register:40f0:8", ["const:6a1528:8", "const:4:8"]]
- 006a1528 ["CALL", null, ["local:b0:8"]]
+ 006a18d8 ["INT_ADD", "register:40f0:8", ["const:6a18d8:8", "const:4:8"]]
+ 006a18d8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-791a72429c817c276f47d25070fe2d71"></a>

### [`006a1550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1550.md) → [`006a1900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1900.md) FUN_006a1900

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`006a1550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1550.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`006a1550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`006a1900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1900.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 2件 [`006a1900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1900.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a1580"
      ],
      [
        "FALL_THROUGH",
        "006a1930"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a1930",
      "incomplete_value": true,
      "site": "006a1934",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a1580",
      "incomplete_value": true,
      "site": "006a1584",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a1554",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a1558",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a1580",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a193c"
      ]
    ]
  ],
  "added": [
    [
      "006a1904",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006a1908",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006a1930",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a193c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a1550 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 006a1550 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 006a1900 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006a1900 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 006a1554 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a1554 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a1554 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006a1554 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006a1558 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006a1558 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006a1558 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 006a1558 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-54ae9aae76733005f8078b9bd43fbe5d"></a>

### [`006a15a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a15a0.md) → [`006a1950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1950.md) FUN_006a1950

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a15a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a15ac",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006a15b0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "006a1950",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006a195c",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "006a1960",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a15a0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a15a0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a15a0 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 006a15a0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006a15a4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 006a15a8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-6fceaabfedb587aa073771fcfa238c74"></a>

### [`006a15b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a15b4.md) → [`006a1964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1964.md) FUN_006a1964

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1970",
      "incomplete_value": false,
      "site": "006a1974",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a15c0",
      "incomplete_value": false,
      "site": "006a15c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b7000:8"
          ],
          [
            "leaf",
            "const:f8c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a1970",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006a1970",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a15c4 ["INT_ADD", "register:40f0:8", ["const:6a15c4:8", "const:4:8"]]
- 006a15c4 ["CALL", null, ["callee:00442c90:8"]]
+ 006a1974 ["INT_ADD", "register:40f0:8", ["const:6a1974:8", "const:4:8"]]
+ 006a1974 ["CALL", null, ["callee:00442c90:8"]]
- 006a15bc ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006a196c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 006a15c0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 006a15c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a15c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a15c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a1970 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006a1970 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a1970 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a1970 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6c95f6323f0c60c05103ebd3e238ebd8"></a>

### [`006a15c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a15c8.md) → [`006a1978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1978.md) FUN_006a1978

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006a2ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ae8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`006a2e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2e98.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 006a15dc ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 006a15dc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 006a198c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 006a198c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 006a15e4 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006a15e4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006a1994 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006a1994 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 006a15ec ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 006a15ec ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006a199c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 006a199c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-1458503169706ace0f5421210010daf1"></a>

### [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) → [`006a19c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a19c4.md) FUN_006a19c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) [`006a1a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1a90.md) · 呼出先 6件 [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) [`006a1a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1a90.md) [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md)
- 新版 呼出元 3件 [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`006a19c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a19c4.md) [`006a1e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1e40.md) · 呼出先 6件 [`006a19c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a19c4.md) [`006a1e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1e40.md) [`006a22ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a22ac.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`00803284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803284.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.38% / 新版 93.38%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1a48",
      "incomplete_value": true,
      "site": "006a1a4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1a40",
      "incomplete_value": true,
      "site": "006a1a4c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40b0:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a1628",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a162c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a16b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a1a74"
      ]
    ]
  ],
  "added": [
    [
      "006a19d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006a19dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006a1a68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a1a74"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a169c ["INT_ADD", "register:40f0:8", ["const:6a169c:8", "const:4:8"]]
- 006a169c ["CALL", null, ["callee:00803284:8"]]
+ 006a1a4c ["INT_ADD", "register:40f0:8", ["const:6a1a4c:8", "const:4:8"]]
+ 006a1a4c ["CALL", null, ["callee:00803284:8"]]
- 006a1a4c ["COPY", "tmp:0:8", ["register:4050:8"]]
- 006a1a4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 006a1628 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006a1628 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006a1628 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 006a1628 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d536af085b30805e58b33b342a92ac37"></a>

### [`006a1a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1a90.md) → [`006a1e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1e40.md) FUN_006a1e40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) · 呼出先 4件 [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006a19c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a19c4.md) · 呼出先 4件 [`006a19c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a19c4.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`00803284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803284.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.34% / 新版 88.34%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a1c1c",
      "incomplete_value": true,
      "site": "006a1c28",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40b0:4"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a1e10",
      "incomplete_value": true,
      "site": "006a1e18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "live",
            "register:40d8:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a1e14",
      "incomplete_value": true,
      "site": "006a1e18",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40c0:4"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a1c0c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00801334"
      ]
    ],
    [
      "unmatched:006a1c44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006a1c50"
      ]
    ],
    [
      "unmatched:006a1c4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006a1c58"
      ]
    ]
  ],
  "added": [
    [
      "006a1fbc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00801334"
      ]
    ],
    [
      "006a1ff4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2000"
      ]
    ],
    [
      "006a1ffc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2008"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a1c28 ["INT_ADD", "register:40f0:8", ["const:6a1c28:8", "const:4:8"]]
- 006a1c28 ["CALL", null, ["callee:00803284:8"]]
+ 006a1fd8 ["INT_ADD", "register:40f0:8", ["const:6a1fd8:8", "const:4:8"]]
+ 006a1fd8 ["CALL", null, ["callee:00803284:8"]]
- 006a1e18 ["INT_ADD", "register:40f0:8", ["const:6a1e18:8", "const:4:8"]]
- 006a1e18 ["CALL", null, ["callee:00803284:8"]]
+ 006a21c8 ["INT_ADD", "register:40f0:8", ["const:6a21c8:8", "const:4:8"]]
+ 006a21c8 ["CALL", null, ["callee:00803284:8"]]
- 006a1ab0 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
- 006a1ab0 ["CBRANCH", null, ["local:b64:8", "tmp:0:1"]]
+ 006a1e60 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
+ 006a1e60 ["CBRANCH", null, ["local:b67:8", "tmp:0:1"]]
~~~


<a id="compare-5f7acba50839b37bee9aa47aee9f6cbc"></a>

### [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) → [`006a22ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a22ac.md) FUN_006a22ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) · 呼出先 6件 [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) [`006a25f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a25f4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`006a19c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a19c4.md) [`006a22ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a22ac.md) · 呼出先 6件 [`006a22ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a22ac.md) [`006a29a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a29a4.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`00803284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803284.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.01% / 新版 89.01%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_store_alignment` 13件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a2200",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2510"
      ]
    ],
    [
      "unmatched:006a2384",
      "READ",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a2394",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2954"
      ]
    ]
  ],
  "added": [
    [
      "006a25b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2510"
      ]
    ],
    [
      "006a2734",
      "READ",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "006a2744",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2954"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a1f24 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 006a1f24 ["CBRANCH", null, ["local:b83:8", "tmp:0:1"]]
+ 006a22d4 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 006a22d4 ["CBRANCH", null, ["local:b85:8", "tmp:0:1"]]
- 006a1f40 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a1f40 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 006a1f40 ["CBRANCH", null, ["local:b47:8", "tmp:1:1"]]
+ 006a22f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a22f0 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 006a22f0 ["CBRANCH", null, ["local:b46:8", "tmp:1:1"]]
- 006a1f48 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a1f48 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 006a1f48 ["CBRANCH", null, ["local:b47:8", "tmp:1:1"]]
+ 006a22f8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a22f8 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 006a22f8 ["CBRANCH", null, ["local:b46:8", "tmp:1:1"]]
~~~


<a id="compare-ce3e9d8b28989c91659f528ac648278e"></a>

### [`006a25f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a25f4.md) → [`006a29a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a29a4.md) FUN_006a29a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`006a22ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a22ac.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 90.71% / 新版 90.71%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006a263c"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a29ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a29e8",
      "incomplete_value": true,
      "site": "006a2acc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
              [
                "live",
                "register:4010:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a2638",
      "incomplete_value": true,
      "site": "006a271c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "live",
                "register:4010:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006a263c"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a29ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a29e8",
      "incomplete_value": true,
      "site": "006a2ad0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
              [
                "live",
                "register:4010:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a2638",
      "incomplete_value": true,
      "site": "006a2720",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "live",
                "register:4010:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a2624",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2a6c"
      ]
    ],
    [
      "unmatched:006a263c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2ab4"
      ]
    ],
    [
      "unmatched:006a2664",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2b0c"
      ]
    ]
  ],
  "added": [
    [
      "006a29d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2a6c"
      ]
    ],
    [
      "006a29ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2ab4"
      ]
    ],
    [
      "006a2a14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2b0c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a261c ["CBRANCH", null, ["local:b26:8", "register:101:1"]]
+ 006a29cc ["CBRANCH", null, ["local:b21:8", "register:101:1"]]
- 006a2624 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 006a2630 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 006a29e0 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
~~~


<a id="compare-4de26c995559f5c59a0697adbe60cb5b"></a>

### [`006a2824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2824.md) → [`006a2bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2bd4.md) FUN_006a2bd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0069e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e8e4.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006a2940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2940.md) [`006a2ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ae8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0069ec94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069e/0069ec94.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006a2cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2cf0.md) [`006a2e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2e98.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.77% / 新版 95.77%

優先判定に残った影響 `unresolved_store_alignment` 4件

~~~diff
- 006a284c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 006a2bfc ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 006a2868 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 006a2c18 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 006a2880 ["INT_ADD", "register:40f0:8", ["const:6a2880:8", "const:4:8"]]
- 006a2880 ["CALL", null, ["callee:006a2cf0:8"]]
+ 006a2c30 ["INT_ADD", "register:40f0:8", ["const:6a2c30:8", "const:4:8"]]
+ 006a2c30 ["CALL", null, ["callee:006a2cf0:8"]]
~~~


<a id="compare-e3005da8e228e0138d54c5cf121bd08c"></a>

### [`006a2940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2940.md) → [`006a2cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2cf0.md) FUN_006a2cf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a2824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2824.md) · 呼出先 0件 
- 新版 呼出元 1件 [`006a2bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2bd4.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 99.06% / 新版 99.06%

優先判定に残った影響 `return_value_candidate` 2件

アドレスに依存する影響 `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "006a2e34",
      "incomplete_value": true,
      "site": "006a2e3c",
      "value": [
        "live",
        "register:4018:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "006a2adc",
      "incomplete_value": true,
      "site": "006a2ae4",
      "value": [
        "live",
        "register:4050:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a2a04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2ddc"
      ]
    ]
  ],
  "added": [
    [
      "006a2db4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2ddc"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2988 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a2988 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 006a2d38 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a2d38 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
- 006a2994 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 006a2994 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
+ 006a2d44 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
+ 006a2d44 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
- 006a29a8 ["BRANCH", null, ["local:b30:8"]]
+ 006a2d58 ["BRANCH", null, ["local:b29:8"]]
~~~


<a id="compare-2f77eb37b272bec32ec7bbbcd23e8f06"></a>

### [`006a2ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ae8.md) → [`006a2e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2e98.md) FUN_006a2e98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a2824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2824.md) · 呼出先 6件 [`005c1d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d1c.md) [`006a15c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a15c8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`006a2bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2bd4.md) · 呼出先 6件 [`005c20cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20cc.md) [`006a1978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a1/006a1978.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a2f1c",
      "incomplete_value": true,
      "site": "006a2f2c",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a2bb0"
      ],
      [
        "FALL_THROUGH",
        "006a2f60"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a2f60",
      "incomplete_value": true,
      "site": "006a2f68",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a2bb0",
      "incomplete_value": true,
      "site": "006a2bb8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              [
                "live",
                "register:40a8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a2bb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2f70"
      ]
    ]
  ],
  "added": [
    [
      "006a2f60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2f70"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2b7c ["INT_ADD", "register:40f0:8", ["const:6a2b7c:8", "const:4:8"]]
- 006a2b7c ["CALL", null, ["callee:00c590a0:8"]]
+ 006a2f2c ["INT_ADD", "register:40f0:8", ["const:6a2f2c:8", "const:4:8"]]
+ 006a2f2c ["CALL", null, ["callee:00c590a0:8"]]
- 006a2b0c ["INT_ADD", "register:40f0:8", ["const:6a2b0c:8", "const:4:8"]]
- 006a2b0c ["CALL", null, ["callee:00c58f30:8"]]
+ 006a2ebc ["INT_ADD", "register:40f0:8", ["const:6a2ebc:8", "const:4:8"]]
+ 006a2ebc ["CALL", null, ["callee:00c58f30:8"]]
- 006a2b34 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 006a2ee4 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
~~~


<a id="compare-01f95d9518a010fd1e87c4397e1122a7"></a>

### [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) → [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md) FUN_006a2f80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 14件 [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) [`008480d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008480d8.md) · 呼出先 8件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 14件 [`0069f024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f024.md) [`006b7538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7538.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00847c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847c54.md) [`00849084`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849084.md) · 呼出先 8件 [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59170.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a2c40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3010"
      ]
    ]
  ],
  "added": [
    [
      "006a2ff0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3010"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2be4 ["INT_ADD", "register:40f0:8", ["const:6a2be4:8", "const:4:8"]]
- 006a2be4 ["CALL", null, ["callee:00c59180:8"]]
+ 006a2f94 ["INT_ADD", "register:40f0:8", ["const:6a2f94:8", "const:4:8"]]
+ 006a2f94 ["CALL", null, ["callee:00c59180:8"]]
- 006a2bf0 ["INT_ADD", "register:40f0:8", ["const:6a2bf0:8", "const:4:8"]]
- 006a2bf0 ["CALL", null, ["callee:00c59420:8"]]
+ 006a2fa0 ["INT_ADD", "register:40f0:8", ["const:6a2fa0:8", "const:4:8"]]
+ 006a2fa0 ["CALL", null, ["callee:00c59420:8"]]
- 006a2bf8 ["INT_ADD", "register:40f0:8", ["const:6a2bf8:8", "const:4:8"]]
- 006a2bf8 ["CALL", null, ["callee:00c59190:8"]]
+ 006a2fa8 ["INT_ADD", "register:40f0:8", ["const:6a2fa8:8", "const:4:8"]]
+ 006a2fa8 ["CALL", null, ["callee:00c59190:8"]]
~~~


<a id="compare-2bf0ad420a265be08de77789949df646"></a>

### [`006a2c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2c8c.md) → [`006a303c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a303c.md) FUN_006a303c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006a2ca0 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 006a2ca0 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 006a3050 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 006a3050 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 006a2ccc ["COPY", "register:0:8", ["register:4040:8"]]
- 006a2ccc ["INT_ADD", "register:40f0:8", ["const:6a2ccc:8", "const:4:8"]]
- 006a2ccc ["CALLIND", null, ["register:0:8"]]
+ 006a307c ["COPY", "register:0:8", ["register:4040:8"]]
+ 006a307c ["INT_ADD", "register:40f0:8", ["const:6a307c:8", "const:4:8"]]
+ 006a307c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d2cdd6cbad91e91a3c19a5d6ea5e5f59"></a>

### [`006a2d20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d20.md) → [`006a30d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a30d0.md) FUN_006a30d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006a30f4",
      "incomplete_value": false,
      "site": "006a30f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a2d44",
      "incomplete_value": false,
      "site": "006a2d44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a30f4",
      "DATA",
      [
        "storage",
        "00c759d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a30f4",
      "DATA",
      [
        "storage",
        "00c769a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2d34 ["INT_ADD", "register:40f0:8", ["const:6a2d34:8", "const:4:8"]]
- 006a2d34 ["CALL", null, ["callee:00c58f30:8"]]
+ 006a30e4 ["INT_ADD", "register:40f0:8", ["const:6a30e4:8", "const:4:8"]]
+ 006a30e4 ["CALL", null, ["callee:00c58f30:8"]]
- 006a2d3c ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006a30ec ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006a2d40 ["COPY", "tmp:0:8", ["const:9d0:8"]]
- 006a2d40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006a2d40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006a2d40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006a30f0 ["COPY", "tmp:0:8", ["const:9a0:8"]]
+ 006a30f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006a30f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006a30f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ba0ee4900010bd2b04dd8c867bb03724"></a>

### [`006a2d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d54.md) → [`006a3104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3104.md) FUN_006a3104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006a3110",
      "incomplete_value": false,
      "site": "006a3110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a2d60",
      "incomplete_value": false,
      "site": "006a2d60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a3110",
      "DATA",
      [
        "storage",
        "00c759d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a3110",
      "DATA",
      [
        "storage",
        "00c769a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2d58 ["COPY", "register:4048:8", ["const:c75000:8"]]
+ 006a3108 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 006a2d5c ["COPY", "tmp:0:8", ["const:9d0:8"]]
- 006a2d5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006a2d5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006a2d5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006a310c ["COPY", "tmp:0:8", ["const:9a0:8"]]
+ 006a310c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006a310c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006a310c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-827fff08700e1dbccd272d654da53775"></a>

### [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md) → [`006a3154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3154.md) FUN_006a3154

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) [`008540e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008540e4.md) [`00854350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854350.md) [`0088a1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1c4.md) · 呼出先 6件 [`006a38d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a38d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581d0.md) [`00c581e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581e0.md)
- 新版 呼出元 6件 [`0069f024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f024.md) [`006b7538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7538.md) [`00855090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/00855090.md) [`008552fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/008552fc.md) [`0088b170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b170.md) · 呼出先 6件 [`006a3c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3c80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c591a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591a0.md) [`00c591b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a31b8",
      "incomplete_value": false,
      "site": "006a31c4",
      "value": [
        "leaf",
        "const:6a3c80:8"
      ]
    },
    "old": {
      "definition_site": "006a2e08",
      "incomplete_value": false,
      "site": "006a2e14",
      "value": [
        "leaf",
        "const:6a38d0:8"
      ]
    },
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a3208",
      "incomplete_value": false,
      "site": "006a320c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:fa5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a2e58",
      "incomplete_value": false,
      "site": "006a2e5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:eda:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a31b8",
      "PARAM",
      [
        "storage",
        "006a38d0",
        null,
        null
      ]
    ],
    [
      "006a3208",
      "PARAM",
      [
        "storage",
        "002a3eda",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006a31b8",
      "PARAM",
      [
        "storage",
        "006a3c80",
        null,
        null
      ]
    ],
    [
      "006a3208",
      "PARAM",
      [
        "storage",
        "002a3fa5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2e14 ["INT_ADD", "register:40f0:8", ["const:6a2e14:8", "const:4:8"]]
- 006a2e14 ["CALL", null, ["callee:00c591b0:8"]]
+ 006a31c4 ["INT_ADD", "register:40f0:8", ["const:6a31c4:8", "const:4:8"]]
+ 006a31c4 ["CALL", null, ["callee:00c591b0:8"]]
- 006a2e5c ["INT_ADD", "register:40f0:8", ["const:6a2e5c:8", "const:4:8"]]
- 006a2e5c ["CALL", null, ["callee:00c591c0:8"]]
+ 006a320c ["INT_ADD", "register:40f0:8", ["const:6a320c:8", "const:4:8"]]
+ 006a320c ["CALL", null, ["callee:00c591c0:8"]]
- 006a2dd8 ["INT_ADD", "register:40f0:8", ["const:6a2dd8:8", "const:4:8"]]
- 006a2dd8 ["CALL", null, ["callee:00c58f30:8"]]
+ 006a3188 ["INT_ADD", "register:40f0:8", ["const:6a3188:8", "const:4:8"]]
+ 006a3188 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-bc03e74f89532b2bab8d8b754c5f3f95"></a>

### [`006a2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ea8.md) → [`006a3258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3258.md) FUN_006a3258

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) · 呼出先 10件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`006a0048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0048.md) [`006a3234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3234.md) [`006a3630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3630.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`006a3150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3150.md) · 呼出先 10件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`006a03f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a03f8.md) [`006a35e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a35e4.md) [`006a39e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a39e0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.45% / 新版 96.45%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a34cc",
      "incomplete_value": true,
      "site": "006a34d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a34d0",
      "incomplete_value": true,
      "site": "006a34d4",
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
    "old": null,
    "ordinal": 13,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a2f40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3494"
      ]
    ],
    [
      "unmatched:006a31b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a35e0"
      ]
    ]
  ],
  "added": [
    [
      "006a32f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3494"
      ]
    ],
    [
      "006a3560",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a35e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a3124 ["INT_ADD", "register:40f0:8", ["const:6a3124:8", "const:4:8"]]
- 006a3124 ["CALL", null, ["callee:00c59520:8"]]
+ 006a34d4 ["INT_ADD", "register:40f0:8", ["const:6a34d4:8", "const:4:8"]]
+ 006a34d4 ["CALL", null, ["callee:00c59520:8"]]
- 006a2ed8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006a2ed8 ["CBRANCH", null, ["local:b49:8", "tmp:0:1"]]
+ 006a3288 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006a3288 ["CBRANCH", null, ["local:b48:8", "tmp:0:1"]]
- 006a2f08 ["INT_AND", "register:40c0:8", ["register:40c0:8", "const:ffffffffffff:8"]]
- 006a2f08 ["INT_OR", "register:40c0:8", ["register:40c0:8", "const:20000000000000:8"]]
~~~


<a id="compare-6b51491bc6fdf6e1f30c384982c2e8f3"></a>

### [`006a3234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3234.md) → [`006a35e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a35e4.md) FUN_006a35e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006a2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ea8.md) · 呼出先 2件 [`006a0048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0048.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`006a3258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3258.md) · 呼出先 2件 [`006a03f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a03f8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.01% / 新版 93.01%

優先判定に残った影響 `store_condition` 6件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006a338c"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a373c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a373c",
      "incomplete_value": true,
      "site": "006a3694",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:101:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a338c",
      "incomplete_value": true,
      "site": "006a32e4",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a338c"
      ],
      [
        "FALL_THROUGH",
        "006a373c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a373c",
      "incomplete_value": true,
      "site": "006a3740",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:101:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a338c",
      "incomplete_value": true,
      "site": "006a3390",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a3488"
      ],
      [
        "FALL_THROUGH",
        "006a3838"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a3840",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "006a3484",
      "incomplete_value": true,
      "site": "006a3490",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a32dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a332c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a36f8"
      ]
    ],
    [
      "unmatched:006a338c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3694"
      ]
    ]
  ],
  "added": [
    [
      "006a368c",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "006a36dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a36f8"
      ]
    ],
    [
      "006a373c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3694"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a3264 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a3264 ["CBRANCH", null, ["local:b63:8", "tmp:0:1"]]
+ 006a3614 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a3614 ["CBRANCH", null, ["local:b64:8", "tmp:0:1"]]
- 006a3280 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 006a3280 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 006a3630 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 006a3630 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 006a3288 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 006a3638 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
~~~


<a id="compare-81252d704d04f1e6698480e1c6ebbbef"></a>

### [`006a3630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3630.md) → [`006a39e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a39e0.md) FUN_006a39e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006a2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ea8.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006a0034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0034.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`006a3258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3258.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006a03e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a0/006a03e4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.24% / 新版 89.24%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a3684"
      ],
      [
        "FALL_THROUGH",
        "006a3a34"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a3a34",
      "incomplete_value": true,
      "site": "006a3a44",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "006a3684",
      "incomplete_value": true,
      "site": "006a3694",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "live",
            "register:102:1"
          ],
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
    "ordinal": 11,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a3684",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3c28"
      ]
    ],
    [
      "unmatched:006a36ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a36f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006a3a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3c28"
      ]
    ],
    [
      "006a3a9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "006a3aa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006a367c ["COPY", "tmp:0:8", ["const:1:8"]]
- 006a367c ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
- 006a367c ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
- 006a367c ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
- 006a3680 ["INT_LESSEQUAL", "register:105:1", ["register:4040:8", "register:4048:8"]]
- 006a3680 ["INT_SBORROW", "register:106:1", ["register:4048:8", "register:4040:8"]]
- 006a3680 ["INT_SUB", "tmp:0:8", ["register:4048:8", "register:4040:8"]]
- 006a3680 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 006a3684 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006a3684 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006a3684 ["CBRANCH", null, ["local:b33:8", "tmp:1:1"]]
~~~


<a id="compare-e9f66fb14bdb47d8633507883baa92a2"></a>

### [`006a38d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a38d0.md) → [`006a3c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3c80.md) FUN_006a3c80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c58210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 1件 [`006a3154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3154.md) · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c591d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591d0.md) [`00c591e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591e0.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 call, call_count, constant, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 97.30% / 新版 97.30%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a3910",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "006a3cc0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006a38f8 ["INT_ADD", "register:40f0:8", ["const:6a38f8:8", "const:4:8"]]
- 006a38f8 ["CALL", null, ["callee:00c591d0:8"]]
+ 006a3ca8 ["INT_ADD", "register:40f0:8", ["const:6a3ca8:8", "const:4:8"]]
+ 006a3ca8 ["CALL", null, ["callee:00c591d0:8"]]
- 006a3908 ["INT_ADD", "register:40f0:8", ["const:6a3908:8", "const:4:8"]]
- 006a3908 ["CALL", null, ["callee:00c591e0:8"]]
+ 006a3cb8 ["INT_ADD", "register:40f0:8", ["const:6a3cb8:8", "const:4:8"]]
+ 006a3cb8 ["CALL", null, ["callee:00c591e0:8"]]
- 006a3910 ["COPY", "register:0:8", ["register:4040:8"]]
- 006a3910 ["INT_ADD", "register:40f0:8", ["const:6a3910:8", "const:4:8"]]
- 006a3910 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d11dcbbab6d0803fc400852ea373871e"></a>

### [`006a3988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3988.md) → [`006a3d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3d38.md) FUN_006a3d38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a3d64",
      "incomplete_value": true,
      "site": "006a3d68",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 006a39b8 ["INT_ADD", "register:40f0:8", ["const:6a39b8:8", "const:4:8"]]
- 006a39b8 ["CALL", null, ["callee:00c58f50:8"]]
+ 006a3d68 ["INT_ADD", "register:40f0:8", ["const:6a3d68:8", "const:4:8"]]
+ 006a3d68 ["CALL", null, ["callee:00c58f50:8"]]
- 006a399c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 006a399c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 006a3d4c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 006a3d4c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 006a39a8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 006a39a8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006a3d58 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 006a3d58 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


