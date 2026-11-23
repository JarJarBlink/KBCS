# v16.0.2 → v16.0.3 · 最優先の変更候補 (60)

[一覧の目次](README.md)

<a id="compare-7ac868412375836a184fef3e0f771727"></a>

### [`008ab8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab8b4.md) → [`008ac860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac860.md) FUN_008ac860

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ab8cc ["INT_ADD", "register:40f0:8", ["const:8ab8cc:8", "const:4:8"]]
- 008ab8cc ["CALL", null, ["callee:005c1b8c:8"]]
+ 008ac878 ["INT_ADD", "register:40f0:8", ["const:8ac878:8", "const:4:8"]]
+ 008ac878 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-252edcd2869f28a28af350f99c8437de"></a>

### [`008ab8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab8e8.md) → [`008ac894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac894.md) FUN_008ac894

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
      "unmatched:008ab90c",
      "DATA",
      [
        "storage",
        "00c83570",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008ab914",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ab918",
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
      "008ac8b8",
      "DATA",
      [
        "storage",
        "00c84540",
        null,
        "undefined *"
      ]
    ],
    [
      "008ac8c0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ac8c4",
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
- 008ab8fc ["INT_ADD", "register:40f0:8", ["const:8ab8fc:8", "const:4:8"]]
- 008ab8fc ["CALL", null, ["callee:00c58f30:8"]]
+ 008ac8a8 ["INT_ADD", "register:40f0:8", ["const:8ac8a8:8", "const:4:8"]]
+ 008ac8a8 ["CALL", null, ["callee:00c58f30:8"]]
- 008ab904 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ac8b0 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ab908 ["COPY", "tmp:0:8", ["const:570:8"]]
- 008ab908 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ab908 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ab908 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b64e75ac9ccb7856d63b8024927a650e"></a>

### [`008ab920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab920.md) → [`008ac8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac8cc.md) FUN_008ac8cc

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
      "definition_site": "008ac8d0",
      "incomplete_value": false,
      "site": "008ac8d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:540:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ab924",
      "incomplete_value": false,
      "site": "008ab928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:570:8"
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
      "008ac8d4",
      "DATA",
      [
        "storage",
        "00c83570",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ac8d4",
      "DATA",
      [
        "storage",
        "00c84540",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ab920 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ac8cc ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ab924 ["COPY", "tmp:0:8", ["const:570:8"]]
- 008ab924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ab924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ab924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ac8d0 ["COPY", "tmp:0:8", ["const:540:8"]]
+ 008ac8d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ac8d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ac8d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b205035539fac606e05567d900efafb8"></a>

### [`008ab940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab940.md) → [`008ac8ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac8ec.md) FUN_008ac8ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0058fbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fbc0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0058fee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fee0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ab940",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ab944",
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
      "008ac8ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008ac8f0",
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
- 008ab940 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008ab940 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008ab940 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008ab940 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008ab944 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008ab944 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 008ab948 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-ad643fe486aa98b7184003174e9c2915"></a>

### [`008ab9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab9c0.md) → [`008ac96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac96c.md) FUN_008ac96c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`008ab310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab310.md) [`00a3bd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3bd98.md) [`00a3ce6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3c/00a3ce6c.md) [`00a3da48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3d/00a3da48.md) [`00a3daf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3d/00a3daf4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 5件 [`008ac2bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac2bc.md) [`00a3cd8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3c/00a3cd8c.md) [`00a3de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3d/00a3de60.md) [`00a3ea3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3e/00a3ea3c.md) [`00a3eae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3e/00a3eae8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008aba60",
      "incomplete_value": false,
      "site": "008aba64",
      "value": [
        "leaf",
        "const:28:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008aba88"
      ],
      [
        "FALL_THROUGH",
        "008aca34"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008aca34",
      "incomplete_value": true,
      "site": "008aca38",
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
              "LOAD"
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
      "definition_site": "008aba88",
      "incomplete_value": true,
      "site": "008aba8c",
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
                "register:4040:8"
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
      "unmatched:008ab9c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ab9c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ab9c8",
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
      "008ac96c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008ac970",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008ac974",
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
- 008aba64 ["INT_ADD", "register:40f0:8", ["const:8aba64:8", "const:4:8"]]
- 008aba64 ["CALL", null, ["callee:00c58f30:8"]]
+ 008aca10 ["INT_ADD", "register:40f0:8", ["const:8aca10:8", "const:4:8"]]
+ 008aca10 ["CALL", null, ["callee:00c58f30:8"]]
- 008ab9c0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008ab9c0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008ab9c0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 008ab9c0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008ab9c4 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 008ab9c4 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 008ab9c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008ab9c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e02c86364c9ca32a6a16ef7b23823e1f"></a>

### [`008abbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abbc8.md) → [`008acb74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008acb74.md) FUN_008acb74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008ab310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab310.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`008ac2bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac2bc.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008abbc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008abbd4",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008abbd8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "008acb74",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008acb80",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "008acb84",
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
- 008abbc8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008abbc8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008abbc8 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008abbc8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008abbcc ["COPY", "register:40e8:8", ["register:8:8"]]
- 008abbd0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-02b89550d1c0a4bda49a11e213620922"></a>

### [`008abbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abbe0.md) → [`008acb8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008acb8c.md) FUN_008acb8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008abbf8",
      "DATA",
      [
        "storage",
        "00c83600",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008abbfc",
      "DATA",
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
      "008acba4",
      "DATA",
      [
        "storage",
        "00c845d0",
        null,
        "undefined *"
      ]
    ],
    [
      "008acba8",
      "DATA",
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
- 008abbec ["INT_ADD", "register:40f0:8", ["const:8abbec:8", "const:4:8"]]
- 008abbec ["CALL", null, ["callee:00c58f30:8"]]
+ 008acb98 ["INT_ADD", "register:40f0:8", ["const:8acb98:8", "const:4:8"]]
+ 008acb98 ["CALL", null, ["callee:00c58f30:8"]]
- 008abbf0 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008acb9c ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008abbf4 ["COPY", "tmp:0:8", ["const:600:8"]]
- 008abbf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008abbf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008abbf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eddf71ae5e78efafa71892f614243da0"></a>

### [`008abc04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abc04.md) → [`008acbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008acbb0.md) FUN_008acbb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008acbb4",
      "incomplete_value": false,
      "site": "008acbb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abc08",
      "incomplete_value": false,
      "site": "008abc0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:600:8"
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
      "008acbb8",
      "DATA",
      [
        "storage",
        "00c83600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008acbb8",
      "DATA",
      [
        "storage",
        "00c845d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abc04 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008acbb0 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008abc08 ["COPY", "tmp:0:8", ["const:600:8"]]
- 008abc08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008abc08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008abc08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008acbb4 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 008acbb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008acbb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008acbb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4bb1bbe6ecc0a54b022ea52fd853dd33"></a>

### [`008abc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abc84.md) → [`008acc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008acc30.md) FUN_008acc30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008acc44",
      "incomplete_value": false,
      "site": "008acc48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abc98",
      "incomplete_value": false,
      "site": "008abc9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:680:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008acc48",
      "DATA",
      [
        "storage",
        "00c83680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008acc48",
      "DATA",
      [
        "storage",
        "00c84650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abc90 ["INT_ADD", "register:40f0:8", ["const:8abc90:8", "const:4:8"]]
- 008abc90 ["CALL", null, ["callee:00c58f30:8"]]
+ 008acc3c ["INT_ADD", "register:40f0:8", ["const:8acc3c:8", "const:4:8"]]
+ 008acc3c ["CALL", null, ["callee:00c58f30:8"]]
- 008abc94 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008acc40 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008abc98 ["COPY", "tmp:0:8", ["const:680:8"]]
- 008abc98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008abc98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008abc98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008acc44 ["COPY", "tmp:0:8", ["const:650:8"]]
+ 008acc44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008acc44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008acc44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7bda2e29465f1af474b1e813680804fb"></a>

### [`008abca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abca8.md) → [`008acc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008acc54.md) FUN_008acc54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008acc58",
      "incomplete_value": false,
      "site": "008acc5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abcac",
      "incomplete_value": false,
      "site": "008abcb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:680:8"
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
      "008acc5c",
      "DATA",
      [
        "storage",
        "00c83680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008acc5c",
      "DATA",
      [
        "storage",
        "00c84650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abca8 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008acc54 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008abcac ["COPY", "tmp:0:8", ["const:680:8"]]
- 008abcac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008abcac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008abcac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008acc58 ["COPY", "tmp:0:8", ["const:650:8"]]
+ 008acc58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008acc58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008acc58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7c1aac1efbe3698af63fad7f407fe723"></a>

### [`008abcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abcc0.md) → [`008acc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008acc6c.md) FUN_008acc6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048f3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048f/0048f3d8.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048f6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f6f8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008acc74",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008abcc8",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "008acc74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "008acc74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abcc8 ["INT_ADD", "register:40f0:8", ["const:8abcc8:8", "const:4:8"]]
- 008abcc8 ["CALL", null, ["ram:48cd38:8"]]
+ 008acc74 ["INT_ADD", "register:40f0:8", ["const:8acc74:8", "const:4:8"]]
+ 008acc74 ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-5762d9b49d100810f420bf2f616d10bc"></a>

### [`008abd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd00.md) → [`008accac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008accac.md) FUN_008accac

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
      "definition_site": "008accd0",
      "incomplete_value": false,
      "site": "008accd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:6d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abd24",
      "incomplete_value": false,
      "site": "008abd24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:700:8"
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
      "008accd0",
      "DATA",
      [
        "storage",
        "00c83700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008accd0",
      "DATA",
      [
        "storage",
        "00c846d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abd14 ["INT_ADD", "register:40f0:8", ["const:8abd14:8", "const:4:8"]]
- 008abd14 ["CALL", null, ["callee:00c58f30:8"]]
+ 008accc0 ["INT_ADD", "register:40f0:8", ["const:8accc0:8", "const:4:8"]]
+ 008accc0 ["CALL", null, ["callee:00c58f30:8"]]
- 008abd1c ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008accc8 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008abd20 ["COPY", "tmp:0:8", ["const:700:8"]]
- 008abd20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008abd20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008abd20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008acccc ["COPY", "tmp:0:8", ["const:6d0:8"]]
+ 008acccc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008acccc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008acccc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cfc2caf5a39c8c66e193e90ee21ccc62"></a>

### [`008abd34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd34.md) → [`008acce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008acce0.md) FUN_008acce0

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
      "unmatched:008abd40",
      "DATA",
      [
        "storage",
        "00c83700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008accec",
      "DATA",
      [
        "storage",
        "00c846d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abd34 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 008abd34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008abd38 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 008abd3c ["COPY", "tmp:0:8", ["const:700:8"]]
- 008abd3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008abd3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008abd3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2fca9f105608bba545ffaf58fdc01150"></a>

### [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) → [`008accfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008accfc.md) FUN_008accfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 28件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md)
- 新版 呼出元 0件  · 呼出先 28件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cdb4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.95% / 新版 82.95%

優先判定に残った影響 `call_argument_candidate` 14件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008abdc0",
      "incomplete_value": true,
      "site": "008abdc8",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:40:8"
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
      "definition_site": "008acdac",
      "incomplete_value": true,
      "site": "008acdcc",
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
                "const:50:8"
              ]
            ]
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
      "definition_site": "008ace1c",
      "incomplete_value": false,
      "site": "008ace20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca5000:8"
          ],
          [
            "leaf",
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abe70",
      "incomplete_value": false,
      "site": "008abe74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca4000:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008abd54",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008abd58",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008abd5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008acd00",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008acd04",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008acd08",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008abdc8 ["INT_ADD", "register:40f0:8", ["const:8abdc8:8", "const:4:8"]]
- 008abdc8 ["CALL", null, ["callee:0043df04:8"]]
+ 008acd74 ["INT_ADD", "register:40f0:8", ["const:8acd74:8", "const:4:8"]]
+ 008acd74 ["CALL", null, ["callee:0043df04:8"]]
- 008abe20 ["INT_ADD", "register:40f0:8", ["const:8abe20:8", "const:4:8"]]
- 008abe20 ["CALL", null, ["callee:005517c4:8"]]
+ 008acdcc ["INT_ADD", "register:40f0:8", ["const:8acdcc:8", "const:4:8"]]
+ 008acdcc ["CALL", null, ["callee:005517c4:8"]]
- 008abe74 ["INT_ADD", "register:40f0:8", ["const:8abe74:8", "const:4:8"]]
- 008abe74 ["CALL", null, ["callee:0046cdb4:8"]]
+ 008ace20 ["INT_ADD", "register:40f0:8", ["const:8ace20:8", "const:4:8"]]
+ 008ace20 ["CALL", null, ["callee:0046cdb4:8"]]
~~~


<a id="compare-46d1121880ab9f597bf989996c20b99c"></a>

### [`008ac3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac3d8.md) → [`008ad384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad384.md) FUN_008ad384

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) [`008fd234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd234.md) [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008aca34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008aca34.md) [`008acc3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc3c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`008accfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008accfc.md) [`008fe1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe1e0.md) [`008fe500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe500.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008ad9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad9e0.md) [`008adbe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adbe8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.10% / 新版 63.10%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 3件, `unresolved_branch_alignment` 23件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 40件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ad418",
      "incomplete_value": true,
      "site": "008ad424",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ac4f8",
      "incomplete_value": true,
      "site": "008ac4fc",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:40c0:8"
              ],
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:3:8"
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
      "definition_site": "008ad4dc",
      "incomplete_value": true,
      "site": "008ad4e4",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": {
      "definition_site": "008ac530",
      "incomplete_value": true,
      "site": "008ac538",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:40b8:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ac434",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ac438",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ac43c",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ad3e0",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ],
    [
      "008ad3e4",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "008ad3e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008ac478 ["INT_ADD", "register:40f0:8", ["const:8ac478:8", "const:4:8"]]
- 008ac478 ["CALL", null, ["callee:008ad9e0:8"]]
+ 008ad424 ["INT_ADD", "register:40f0:8", ["const:8ad424:8", "const:4:8"]]
+ 008ad424 ["CALL", null, ["callee:008ad9e0:8"]]
- 008ac4fc ["INT_ADD", "register:40f0:8", ["const:8ac4fc:8", "const:4:8"]]
- 008ac4fc ["CALL", null, ["callee:00c58f30:8"]]
+ 008ad4a8 ["INT_ADD", "register:40f0:8", ["const:8ad4a8:8", "const:4:8"]]
+ 008ad4a8 ["CALL", null, ["callee:00c58f30:8"]]
- 008ac538 ["INT_ADD", "register:40f0:8", ["const:8ac538:8", "const:4:8"]]
- 008ac538 ["CALL", null, ["callee:00c590a0:8"]]
+ 008ad4e4 ["INT_ADD", "register:40f0:8", ["const:8ad4e4:8", "const:4:8"]]
+ 008ad4e4 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-cd776dd111146b771133815a81efe05a"></a>

### [`008ac95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac95c.md) → [`008ad908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad908.md) FUN_008ad908

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
      "unmatched:008ac980",
      "DATA",
      [
        "storage",
        "00c83770",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008ac988",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ac98c",
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
      "008ad92c",
      "DATA",
      [
        "storage",
        "00c84740",
        null,
        "undefined *"
      ]
    ],
    [
      "008ad934",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ad938",
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
- 008ac970 ["INT_ADD", "register:40f0:8", ["const:8ac970:8", "const:4:8"]]
- 008ac970 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ad91c ["INT_ADD", "register:40f0:8", ["const:8ad91c:8", "const:4:8"]]
+ 008ad91c ["CALL", null, ["callee:00c58f30:8"]]
- 008ac978 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ad924 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ac97c ["COPY", "tmp:0:8", ["const:770:8"]]
- 008ac97c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ac97c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ac97c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-46bfcbe7ca346416f62ee14408da91b6"></a>

### [`008ac994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac994.md) → [`008ad940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad940.md) FUN_008ad940

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
      "definition_site": "008ad944",
      "incomplete_value": false,
      "site": "008ad948",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ac998",
      "incomplete_value": false,
      "site": "008ac99c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:770:8"
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
      "008ad948",
      "DATA",
      [
        "storage",
        "00c83770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad948",
      "DATA",
      [
        "storage",
        "00c84740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ac994 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ad940 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ac998 ["COPY", "tmp:0:8", ["const:770:8"]]
- 008ac998 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ac998 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ac998 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad944 ["COPY", "tmp:0:8", ["const:740:8"]]
+ 008ad944 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad944 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad944 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9ae7b3c496ffb6d74c8c876381139cc8"></a>

### [`008ac9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac9b4.md) → [`008ad960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad960.md) FUN_008ad960

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0058fbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fbc0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0058fee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fee0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 008ac9bc ["COPY", "register:40e8:8", ["register:8:8"]]
- 008ac9d4 ["INT_ADD", "register:40f0:8", ["const:8ac9d4:8", "const:4:8"]]
- 008ac9d4 ["CALL", null, ["callee:0058fee0:8"]]
+ 008ad980 ["INT_ADD", "register:40f0:8", ["const:8ad980:8", "const:4:8"]]
+ 008ad980 ["CALL", null, ["callee:0058fee0:8"]]
- 008ac9d8 ["INT_ADD", "register:40f0:8", ["const:8ac9d8:8", "const:4:8"]]
- 008ac9d8 ["CALL", null, ["callee:008524fc:8"]]
+ 008ad984 ["INT_ADD", "register:40f0:8", ["const:8ad984:8", "const:4:8"]]
+ 008ad984 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c6ade43cba99bf50950ef400f7c32b4f"></a>

### [`008aca34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008aca34.md) → [`008ad9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad9e0.md) FUN_008ad9e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`008ac3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac3d8.md) [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) [`008fe5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe5d8.md) [`008fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe684.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`008ad384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad384.md) [`008fe500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe500.md) [`008ff584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ff584.md) [`008ff630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ff630.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 10件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008acafc"
      ],
      [
        "FALL_THROUGH",
        "008adaa8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008adaa8",
      "incomplete_value": true,
      "site": "008adaac",
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
      "definition_site": "008acafc",
      "incomplete_value": true,
      "site": "008acb00",
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
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
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
      "unmatched:008aca50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008adb68"
      ]
    ],
    [
      "008ada30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008aca94"
      ]
    ],
    [
      "unmatched:008aca90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ada70"
      ]
    ]
  ],
  "added": [
    [
      "008ad9fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008adb68"
      ]
    ],
    [
      "008ada30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ada40"
      ]
    ],
    [
      "008ada3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ada70"
      ]
    ]
  ]
}
~~~


~~~diff
- 008aca4c ["INT_ADD", "register:4050:8", ["register:4050:8", "const:38:8"]]
- 008aca4c ["LOAD", "register:4048:8", ["const:1b1:8", "register:4050:8"]]
- 008aca50 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 008aca50 ["CBRANCH", null, ["local:b34:8", "tmp:0:1"]]
- 008aca70 ["INT_NOTEQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
- 008aca70 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008ada1c ["INT_NOTEQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
+ 008ada1c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-8041afd9acd0fc85fe475c52e1d2b7c7"></a>

### [`008acc3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc3c.md) → [`008adbe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adbe8.md) FUN_008adbe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008ac3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac3d8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`008ad384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad384.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008adbf4",
      "incomplete_value": false,
      "site": "008adbf8",
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
      "definition_site": "008acc48",
      "incomplete_value": false,
      "site": "008acc4c",
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
      "008adbf4",
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
      "008adbf4",
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
- 008acc4c ["INT_ADD", "register:40f0:8", ["const:8acc4c:8", "const:4:8"]]
- 008acc4c ["CALL", null, ["callee:0043bad8:8"]]
+ 008adbf8 ["INT_ADD", "register:40f0:8", ["const:8adbf8:8", "const:4:8"]]
+ 008adbf8 ["CALL", null, ["callee:0043bad8:8"]]
- 008acc44 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008adbf0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008acc48 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008acc48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008acc48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008acc48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008adbf4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008adbf4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008adbf4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008adbf4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e653674210a296c86ff8de02ff3b7501"></a>

### [`008acc54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc54.md) → [`008adc00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adc00.md) FUN_008adc00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008acc54",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008acc60",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:008acc6c",
      "DATA",
      [
        "storage",
        "00c83800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008adc00",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008adc0c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "008adc18",
      "DATA",
      [
        "storage",
        "00c847d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acc54 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008acc54 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008acc54 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008acc54 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008acc58 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008acc5c ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-4afa6f3bb2c43357932aa65b45f41778"></a>

### [`008acc78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc78.md) → [`008adc24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adc24.md) FUN_008adc24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008adc28",
      "incomplete_value": false,
      "site": "008adc2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008acc7c",
      "incomplete_value": false,
      "site": "008acc80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:800:8"
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
      "008adc2c",
      "DATA",
      [
        "storage",
        "00c83800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008adc2c",
      "DATA",
      [
        "storage",
        "00c847d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acc78 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008adc24 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008acc7c ["COPY", "tmp:0:8", ["const:800:8"]]
- 008acc7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008acc7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008acc7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008adc28 ["COPY", "tmp:0:8", ["const:7d0:8"]]
+ 008adc28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008adc28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008adc28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d261149f0a4775f577e82c0530cdda1a"></a>

### [`008acc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc90.md) → [`008adc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adc3c.md) FUN_008adc3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008accb4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008adc60",
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
- 008acc98 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008acc98 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008adc44 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008adc44 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008acca0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008acca0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008adc4c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008adc4c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008accb4 ["INT_ADD", "register:40f0:8", ["const:8accb4:8", "const:4:8"]]
- 008accb4 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-fc405705c033157e5219891170178db3"></a>

### [`008acd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acd04.md) → [`008adcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adcb0.md) FUN_008adcb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008acd1c",
      "DATA",
      [
        "storage",
        "00c83880",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008acd20",
      "DATA",
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
      "008adcc8",
      "DATA",
      [
        "storage",
        "00c84850",
        null,
        "undefined *"
      ]
    ],
    [
      "008adccc",
      "DATA",
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
- 008acd10 ["INT_ADD", "register:40f0:8", ["const:8acd10:8", "const:4:8"]]
- 008acd10 ["CALL", null, ["callee:00c58f30:8"]]
+ 008adcbc ["INT_ADD", "register:40f0:8", ["const:8adcbc:8", "const:4:8"]]
+ 008adcbc ["CALL", null, ["callee:00c58f30:8"]]
- 008acd14 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008adcc0 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008acd18 ["COPY", "tmp:0:8", ["const:880:8"]]
- 008acd18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008acd18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008acd18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f32c5371136b036ab84ac4ec9a2357a6"></a>

### [`008acd28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acd28.md) → [`008adcd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adcd4.md) FUN_008adcd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008acd30",
      "DATA",
      [
        "storage",
        "00c83880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008adcdc",
      "DATA",
      [
        "storage",
        "00c84850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acd28 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008acd2c ["COPY", "tmp:0:8", ["const:880:8"]]
- 008acd2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008acd2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008acd2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008acd30 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008acd30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-0d7f6a77c6d40140642e28850329ba53"></a>

### [`008acd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acd70.md) → [`008add1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008add1c.md) FUN_008add1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008add30",
      "incomplete_value": false,
      "site": "008add34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008acd84",
      "incomplete_value": false,
      "site": "008acd88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:900:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008add34",
      "DATA",
      [
        "storage",
        "00c83900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008add34",
      "DATA",
      [
        "storage",
        "00c848d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acd7c ["INT_ADD", "register:40f0:8", ["const:8acd7c:8", "const:4:8"]]
- 008acd7c ["CALL", null, ["callee:00c58f30:8"]]
+ 008add28 ["INT_ADD", "register:40f0:8", ["const:8add28:8", "const:4:8"]]
+ 008add28 ["CALL", null, ["callee:00c58f30:8"]]
- 008acd80 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008add2c ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008acd84 ["COPY", "tmp:0:8", ["const:900:8"]]
- 008acd84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008acd84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008acd84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008add30 ["COPY", "tmp:0:8", ["const:8d0:8"]]
+ 008add30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008add30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008add30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-df4825c3601ae5352130f455b9104add"></a>

### [`008acd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acd94.md) → [`008add40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008add40.md) FUN_008add40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008acd9c",
      "DATA",
      [
        "storage",
        "00c83900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008add48",
      "DATA",
      [
        "storage",
        "00c848d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acd94 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008acd98 ["COPY", "tmp:0:8", ["const:900:8"]]
- 008acd98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008acd98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008acd98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008acd9c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008acd9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-63c872a62e1bfde2d659b91d3f0ae53c"></a>

### [`008acdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acdac.md) → [`008add58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008add58.md) FUN_008add58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`008629d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/008629d8.md) [`008ad02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad02c.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) [`00863984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00863/00863984.md) [`008adfd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adfd8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 72.00% / 新版 72.00%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008add98",
      "incomplete_value": true,
      "site": "008add9c",
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
      "definition_site": "008acdec",
      "incomplete_value": true,
      "site": "008acdf0",
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
            "const:2f08:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ade58",
      "incomplete_value": true,
      "site": "008ade70",
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
            "const:2f08:8"
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
      "definition_site": "008ade5c",
      "incomplete_value": true,
      "site": "008ade70",
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
            "const:18:8"
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
      "unmatched:008acdb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008acdb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008acdb8",
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
      "008add5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008add60",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008add64",
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
- 008acdf0 ["INT_ADD", "register:40f0:8", ["const:8acdf0:8", "const:4:8"]]
- 008acdf0 ["CALL", null, ["callee:008bca64:8"]]
+ 008add9c ["INT_ADD", "register:40f0:8", ["const:8add9c:8", "const:4:8"]]
+ 008add9c ["CALL", null, ["callee:008bca64:8"]]
- 008acec4 ["INT_ADD", "register:40f0:8", ["const:8acec4:8", "const:4:8"]]
- 008acec4 ["CALL", null, ["callee:008bbccc:8"]]
+ 008ade70 ["INT_ADD", "register:40f0:8", ["const:8ade70:8", "const:4:8"]]
+ 008ade70 ["CALL", null, ["callee:008bbccc:8"]]
- 008acdac ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
~~~


<a id="compare-7f06c4881d90011cc7c29d5cb0b61196"></a>

### [`008ad01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad01c.md) → [`008adfc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adfc8.md) FUN_008adfc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad024",
      "DATA",
      [
        "storage",
        "00c83970",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008adfd0",
      "DATA",
      [
        "storage",
        "00c84940",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad01c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008ad020 ["COPY", "tmp:0:8", ["const:970:8"]]
- 008ad020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ad024 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008ad024 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a16b08bab87fda487557b285b627a584"></a>

### [`008ad034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad034.md) → [`008adfe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008adfe0.md) FUN_008adfe0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ae00c",
      "incomplete_value": false,
      "site": "008ae010",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:008ad04c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ad058",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008adff8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ae004",
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
- 008ad064 ["INT_ADD", "register:40f0:8", ["const:8ad064:8", "const:4:8"]]
- 008ad064 ["CALL", null, ["callee:0047d134:8"]]
+ 008ae010 ["INT_ADD", "register:40f0:8", ["const:8ae010:8", "const:4:8"]]
+ 008ae010 ["CALL", null, ["callee:0047d134:8"]]
- 008ad03c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008ad03c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008adfe8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008adfe8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 008ad044 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008ad044 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008adff0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008adff0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-5e1319ec736c293ac71801774505d663"></a>

### [`008ad0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad0a8.md) → [`008ae054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae054.md) FUN_008ae054

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad0c0",
      "DATA",
      [
        "storage",
        "00c83a00",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008ad0c4",
      "DATA",
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
      "008ae06c",
      "DATA",
      [
        "storage",
        "00c849d0",
        null,
        "undefined *"
      ]
    ],
    [
      "008ae070",
      "DATA",
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
- 008ad0b4 ["INT_ADD", "register:40f0:8", ["const:8ad0b4:8", "const:4:8"]]
- 008ad0b4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ae060 ["INT_ADD", "register:40f0:8", ["const:8ae060:8", "const:4:8"]]
+ 008ae060 ["CALL", null, ["callee:00c58f30:8"]]
- 008ad0b8 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ae064 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ad0bc ["COPY", "tmp:0:8", ["const:a00:8"]]
- 008ad0bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad0bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad0bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0244f302a188f053b04ec52037342e85"></a>

### [`008ad0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad0cc.md) → [`008ae078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae078.md) FUN_008ae078

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ae07c",
      "incomplete_value": false,
      "site": "008ae080",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad0d0",
      "incomplete_value": false,
      "site": "008ad0d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "008ae080",
      "DATA",
      [
        "storage",
        "00c83a00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ae080",
      "DATA",
      [
        "storage",
        "00c849d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad0cc ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ae078 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ad0d0 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 008ad0d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad0d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad0d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ae07c ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 008ae07c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ae07c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ae07c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b4a563ef640ba79146e5ed1e17b58982"></a>

### [`008ad0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad0e4.md) → [`008ae090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae090.md) FUN_008ae090

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`008ad218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad218.md) [`008ad21c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad21c.md) [`00b3a48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a48c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008ae1c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae1c4.md) [`008ae1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae1c8.md) [`00b3b480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b480.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 79.41% / 新版 79.41%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad0e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ad0ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ae0b8",
      "DATA",
      [
        "storage",
        "00c83a70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ae094",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008ae098",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ae0b8",
      "DATA",
      [
        "storage",
        "00c84a40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad0e4 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 008ad0e8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008ad0e8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008ad0e8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008ad0e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008ad0ec ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008ad0ec ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008ad0ec ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 008ad0ec ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-78e6f3091d0254afcc330bddc4fadbbd"></a>

### [`008ad1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad1e4.md) → [`008ae190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae190.md) FUN_008ae190

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ae198",
      "incomplete_value": false,
      "site": "008ae19c",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:008ad1fc",
      "DATA",
      [
        "storage",
        "00c83a70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008ad200",
      "DATA",
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
      "008ae1a8",
      "DATA",
      [
        "storage",
        "00c84a40",
        null,
        "undefined *"
      ]
    ],
    [
      "008ae1ac",
      "DATA",
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
- 008ad1f0 ["INT_ADD", "register:40f0:8", ["const:8ad1f0:8", "const:4:8"]]
- 008ad1f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ae19c ["INT_ADD", "register:40f0:8", ["const:8ae19c:8", "const:4:8"]]
+ 008ae19c ["CALL", null, ["callee:00c58f30:8"]]
- 008ad1f4 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ae1a0 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ad1f8 ["COPY", "tmp:0:8", ["const:a70:8"]]
- 008ad1f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad1f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad1f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5110d17bc7004afd34d5692e029c0213"></a>

### [`008ad208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad208.md) → [`008ae1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae1b4.md) FUN_008ae1b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ae1b8",
      "incomplete_value": false,
      "site": "008ae1bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad20c",
      "incomplete_value": false,
      "site": "008ad210",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:a70:8"
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
      "008ae1bc",
      "DATA",
      [
        "storage",
        "00c83a70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ae1bc",
      "DATA",
      [
        "storage",
        "00c84a40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad208 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ae1b4 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ad20c ["COPY", "tmp:0:8", ["const:a70:8"]]
- 008ad20c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad20c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad20c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ae1b8 ["COPY", "tmp:0:8", ["const:a40:8"]]
+ 008ae1b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ae1b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ae1b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b9c421bca8943d6968ff2a00af828cc2"></a>

### [`008ad220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad220.md) → [`008ae1cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae1cc.md) FUN_008ae1cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`008ad360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad360.md) [`008ad364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad364.md) [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008ae30c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae30c.md) [`008ae310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae310.md) [`00b3b648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b648.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 56.76% / 新版 56.76%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad224",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ad228",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ad238",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ae1d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008ae1d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ae1e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad220 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 008ad224 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008ad224 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008ad224 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008ad224 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008ad228 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008ad228 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008ad228 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 008ad228 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-56d2c8e5511336c36f8c32892e538ec9"></a>

### [`008ad32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad32c.md) → [`008ae2d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae2d8.md) FUN_008ae2d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad32c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ad338",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:008ad344",
      "DATA",
      [
        "storage",
        "00c83ae0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ae2d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ae2e4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "008ae2f0",
      "DATA",
      [
        "storage",
        "00c84ab0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad32c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008ad32c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008ad32c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008ad32c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008ad330 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008ad334 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-b6425945d27303c7dea70249b58332b1"></a>

### [`008ad350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad350.md) → [`008ae2fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae2fc.md) FUN_008ae2fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad358",
      "DATA",
      [
        "storage",
        "00c83ae0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ae304",
      "DATA",
      [
        "storage",
        "00c84ab0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad350 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ae2fc ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ad354 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 008ad354 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad354 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad354 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ad358 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008ad358 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-6d16a8ee4a1282bd131aac47f9a3c876"></a>

### [`008ad368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad368.md) → [`008ae314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae314.md) FUN_008ae314

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ad3a8",
      "incomplete_value": true,
      "site": "008ad3c4",
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
                "register:4000:8"
              ],
              [
                "leaf",
                "const:22b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ad3b4",
      "incomplete_value": true,
      "site": "008ad3c4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_OR",
            "4",
            [
              "INT_AND",
              [
                "leaf",
                "const:980000:4"
              ]
            ]
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
    "new": null,
    "old": {
      "definition_site": "008ad3b0",
      "incomplete_value": true,
      "site": "008ad3c4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4098:4"
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
      "unmatched:008ad384",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ad3d8",
      "READ",
      [
        "storage",
        "002a340f",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008ad3e0",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ae330",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008ae384",
      "READ",
      [
        "storage",
        "002a34da",
        null,
        "string"
      ]
    ],
    [
      "008ae38c",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad3c4 ["INT_ADD", "register:40f0:8", ["const:8ad3c4:8", "const:4:8"]]
- 008ad3c4 ["CALL", null, ["callee:008793f4:8"]]
+ 008ae370 ["INT_ADD", "register:40f0:8", ["const:8ae370:8", "const:4:8"]]
+ 008ae370 ["CALL", null, ["callee:008793f4:8"]]
- 008ad454 ["INT_ADD", "register:40f0:8", ["const:8ad454:8", "const:4:8"]]
- 008ad454 ["CALL", null, ["callee:00442e98:8"]]
+ 008ae400 ["INT_ADD", "register:40f0:8", ["const:8ae400:8", "const:4:8"]]
+ 008ae400 ["CALL", null, ["callee:00442e98:8"]]
- 008ad384 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008ad384 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008ad384 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-608a5bf3601223329880fd0a42c5bea3"></a>

### [`008ad710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad710.md) → [`008ae6bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae6bc.md) FUN_008ae6bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ad718",
      "incomplete_value": false,
      "site": "008ad71c",
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
      "unmatched:008ad728",
      "DATA",
      [
        "storage",
        "00c83b50",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008ad72c",
      "DATA",
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
      "008ae6d4",
      "DATA",
      [
        "storage",
        "00c84b20",
        null,
        "undefined *"
      ]
    ],
    [
      "008ae6d8",
      "DATA",
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
- 008ad71c ["INT_ADD", "register:40f0:8", ["const:8ad71c:8", "const:4:8"]]
- 008ad71c ["CALL", null, ["callee:00c58f30:8"]]
+ 008ae6c8 ["INT_ADD", "register:40f0:8", ["const:8ae6c8:8", "const:4:8"]]
+ 008ae6c8 ["CALL", null, ["callee:00c58f30:8"]]
- 008ad720 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ae6cc ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ad724 ["COPY", "tmp:0:8", ["const:b50:8"]]
- 008ad724 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad724 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad724 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-22b20495010f4227381f34a7c6f00623"></a>

### [`008ad734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad734.md) → [`008ae6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae6e0.md) FUN_008ae6e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad73c",
      "DATA",
      [
        "storage",
        "00c83b50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ae6e8",
      "DATA",
      [
        "storage",
        "00c84b20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad734 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008ad738 ["COPY", "tmp:0:8", ["const:b50:8"]]
- 008ad738 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad738 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad738 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ad73c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008ad73c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-010634eddbb43012f4f03e30ca6ae20e"></a>

### [`008ad74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad74c.md) → [`008ae6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae6f8.md) FUN_008ae6f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad770",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008ae71c",
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
- 008ad754 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008ad754 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 008ae700 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008ae700 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008ad75c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008ad75c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 008ae708 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008ae708 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008ad768 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-9897d7a63743342944592ce9d95e4f07"></a>

### [`008ad7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7c0.md) → [`008ae76c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae76c.md) FUN_008ae76c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad7c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ad7cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:008ad7d8",
      "DATA",
      [
        "storage",
        "00c83c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ae76c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ae778",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "008ae784",
      "DATA",
      [
        "storage",
        "00c84bd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad7c0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008ad7c0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008ad7c0 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008ad7c0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008ad7c4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008ad7c8 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-1ac5918c403863b88266b11332271c55"></a>

### [`008ad7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7e4.md) → [`008ae790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae790.md) FUN_008ae790

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ae794",
      "incomplete_value": false,
      "site": "008ae798",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad7e8",
      "incomplete_value": false,
      "site": "008ad7ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c00:8"
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
      "008ae798",
      "DATA",
      [
        "storage",
        "00c83c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ae798",
      "DATA",
      [
        "storage",
        "00c84bd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad7e4 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ae790 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008ad7e8 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 008ad7e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad7e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad7e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ae794 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 008ae794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ae794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ae794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-508c3b69e15bcc0b7cce23d896635c68"></a>

### [`008ad7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7fc.md) → [`008ae7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae7a8.md) FUN_008ae7a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 20件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md)
- 新版 呼出元 0件  · 呼出先 20件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.11% / 新版 74.11%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ae974",
      "incomplete_value": false,
      "site": "008ae97c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a6000:8"
          ],
          [
            "leaf",
            "const:ed4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad9c8",
      "incomplete_value": false,
      "site": "008ad9d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a6000:8"
          ],
          [
            "leaf",
            "const:d7c:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ad81c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ad874",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ae82c"
      ]
    ],
    [
      "unmatched:008ad894",
      "READ",
      [
        "storage",
        "002a6d5b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008ae7c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "008ae820",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ae82c"
      ]
    ],
    [
      "008ae840",
      "READ",
      [
        "storage",
        "002a6eb3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad9d0 ["INT_ADD", "register:40f0:8", ["const:8ad9d0:8", "const:4:8"]]
- 008ad9d0 ["CALL", null, ["callee:00c59230:8"]]
+ 008ae97c ["INT_ADD", "register:40f0:8", ["const:8ae97c:8", "const:4:8"]]
+ 008ae97c ["CALL", null, ["callee:00c59230:8"]]
- 008ad818 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 008ad818 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008ad81c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008ad81c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008ad81c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-4c02f4c926a82e944310d343725d5fbf"></a>

### [`008adc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adc40.md) → [`008aebec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aebec.md) FUN_008aebec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008aec00",
      "incomplete_value": false,
      "site": "008aec04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008adc54",
      "incomplete_value": false,
      "site": "008adc58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008aec04",
      "DATA",
      [
        "storage",
        "00c83c70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008aec04",
      "DATA",
      [
        "storage",
        "00c84c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008adc4c ["INT_ADD", "register:40f0:8", ["const:8adc4c:8", "const:4:8"]]
- 008adc4c ["CALL", null, ["callee:00c58f30:8"]]
+ 008aebf8 ["INT_ADD", "register:40f0:8", ["const:8aebf8:8", "const:4:8"]]
+ 008aebf8 ["CALL", null, ["callee:00c58f30:8"]]
- 008adc50 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008aebfc ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008adc54 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 008adc54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008adc54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008adc54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008aec00 ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 008aec00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008aec00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008aec00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e7e550f8b828a70d32df0c5cb7b79dd8"></a>

### [`008adc64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adc64.md) → [`008aec10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aec10.md) FUN_008aec10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008aec14",
      "incomplete_value": false,
      "site": "008aec18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008adc68",
      "incomplete_value": false,
      "site": "008adc6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c70:8"
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
      "008aec18",
      "DATA",
      [
        "storage",
        "00c83c70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008aec18",
      "DATA",
      [
        "storage",
        "00c84c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008adc64 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008aec10 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008adc68 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 008adc68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008adc68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008adc68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008aec14 ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 008aec14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008aec14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008aec14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a7e4445be1c9be1505fca51f43d55b8"></a>

### [`008adc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adc7c.md) → [`008aec28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aec28.md) FUN_008aec28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008adc84 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008adc84 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008aec30 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008aec30 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-70f891a76e43daa7ddf086c6f9f97895"></a>

### [`008adcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adcc0.md) → [`008aec6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aec6c.md) FUN_008aec6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008adcd8",
      "DATA",
      [
        "storage",
        "00c83cf0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008adcdc",
      "DATA",
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
      "008aec84",
      "DATA",
      [
        "storage",
        "00c84cc0",
        null,
        "undefined *"
      ]
    ],
    [
      "008aec88",
      "DATA",
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
- 008adccc ["INT_ADD", "register:40f0:8", ["const:8adccc:8", "const:4:8"]]
- 008adccc ["CALL", null, ["callee:00c58f30:8"]]
+ 008aec78 ["INT_ADD", "register:40f0:8", ["const:8aec78:8", "const:4:8"]]
+ 008aec78 ["CALL", null, ["callee:00c58f30:8"]]
- 008adcd0 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008aec7c ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008adcd4 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 008adcd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008adcd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008adcd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-44cddbe00e31766a35bca4193bedd4fd"></a>

### [`008adce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adce4.md) → [`008aec90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aec90.md) FUN_008aec90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008aec94",
      "incomplete_value": false,
      "site": "008aec98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008adce8",
      "incomplete_value": false,
      "site": "008adcec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
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
      "008aec98",
      "DATA",
      [
        "storage",
        "00c83cf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008aec98",
      "DATA",
      [
        "storage",
        "00c84cc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008adce4 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008aec90 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008adce8 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 008adce8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008adce8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008adce8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008aec94 ["COPY", "tmp:0:8", ["const:cc0:8"]]
+ 008aec94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008aec94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008aec94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-576ee44c5a357b2c1dd04a8b249fbaab"></a>

### [`008adcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adcfc.md) → [`008aeca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aeca8.md) FUN_008aeca8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008add04 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008add04 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008aecb0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008aecb0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-e0ff05cfc963d2ce66306cc6807a4c03"></a>

### [`008add40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008add40.md) → [`008aecec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aecec.md) FUN_008aecec

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
      "definition_site": "008aed10",
      "incomplete_value": false,
      "site": "008aed10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008add64",
      "incomplete_value": false,
      "site": "008add64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:d80:8"
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
      "008aed10",
      "DATA",
      [
        "storage",
        "00c83d80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008aed10",
      "DATA",
      [
        "storage",
        "00c84d50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008add54 ["INT_ADD", "register:40f0:8", ["const:8add54:8", "const:4:8"]]
- 008add54 ["CALL", null, ["callee:00c58f30:8"]]
+ 008aed00 ["INT_ADD", "register:40f0:8", ["const:8aed00:8", "const:4:8"]]
+ 008aed00 ["CALL", null, ["callee:00c58f30:8"]]
- 008add5c ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008aed08 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008add60 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 008add60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008add60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008add60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008aed0c ["COPY", "tmp:0:8", ["const:d50:8"]]
+ 008aed0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008aed0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008aed0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2230549d7062560b8fa5eb064cb7ba99"></a>

### [`008add90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008add90.md) → [`008aed3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aed3c.md) FUN_008aed3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0073317c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/0073317c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00aacf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aacf14.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0073352c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/0073352c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00aadf08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aad/00aadf08.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_destination

命令の説明率　旧版 98.21% / 新版 98.21%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008aed74",
      "incomplete_value": true,
      "site": "008aed74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:9e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008addc8",
      "incomplete_value": true,
      "site": "008addc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
    "new": {
      "definition_site": "008aedac",
      "incomplete_value": true,
      "site": "008aedb0",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008aed64",
      "READ",
      [
        "storage",
        "01123a20",
        null,
        "undefined1"
      ]
    ],
    [
      "008aed74",
      "WRITE",
      [
        "storage",
        "01123a20",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "008aed64",
      "READ",
      [
        "storage",
        "011249e0",
        null,
        "undefined1"
      ]
    ],
    [
      "008aed74",
      "WRITE",
      [
        "storage",
        "011249e0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 008addc8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 008addc8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 008addc8 ["INT_ADD", "tmp:2:8", ["register:4040:8", "const:a20:8"]]
- 008addc8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 008aed74 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 008aed74 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 008aed74 ["INT_ADD", "tmp:2:8", ["register:4040:8", "const:9e0:8"]]
+ 008aed74 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 008ade04 ["INT_ADD", "register:40f0:8", ["const:8ade04:8", "const:4:8"]]
- 008ade04 ["CALL", null, ["callee:00c58f50:8"]]
+ 008aedb0 ["INT_ADD", "register:40f0:8", ["const:8aedb0:8", "const:4:8"]]
+ 008aedb0 ["CALL", null, ["callee:00c58f50:8"]]
- 008addb0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008addb0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008addb0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008addb0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 008aed5c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008aed5c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008aed5c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008aed5c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-fafaa1bb7b1e08659aa2b26fe4aa87f0"></a>

### [`008adef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adef0.md) → [`008aee9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aee9c.md) FUN_008aee9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008a3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3bbc.md) [`008adef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adef0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008a4b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4b68.md) [`008aee9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aee9c.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.67% / 新版 80.67%

優先判定に残った影響 `call_argument_candidate` 25件, `store_condition` 4件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008aeff8",
      "incomplete_value": false,
      "site": "008af000",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ae04c",
      "incomplete_value": false,
      "site": "008ae054",
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
            "const:f93:8"
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
    "new": null,
    "old": {
      "definition_site": "008ae110",
      "incomplete_value": true,
      "site": "008ae118",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ae114",
      "incomplete_value": false,
      "site": "008ae118",
      "value": [
        "leaf",
        "const:30:8"
      ]
    },
    "ordinal": 8,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008adf08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008adf10",
      "WRITE",
      [
        "storage",
        "Stack[-0x160]",
        null,
        null
      ]
    ],
    [
      "unmatched:008adf24",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008aeeb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008aeebc",
      "WRITE",
      [
        "storage",
        "Stack[-0x160]",
        null,
        null
      ]
    ],
    [
      "008aeed0",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008ae054 ["INT_ADD", "register:40f0:8", ["const:8ae054:8", "const:4:8"]]
- 008ae054 ["CALL", null, ["callee:004421f4:8"]]
+ 008af000 ["INT_ADD", "register:40f0:8", ["const:8af000:8", "const:4:8"]]
+ 008af000 ["CALL", null, ["callee:004421f4:8"]]
- 008ae118 ["INT_ADD", "register:40f0:8", ["const:8ae118:8", "const:4:8"]]
- 008ae118 ["CALL", null, ["callee:00442be4:8"]]
+ 008af0c4 ["INT_ADD", "register:40f0:8", ["const:8af0c4:8", "const:4:8"]]
+ 008af0c4 ["CALL", null, ["callee:00442be4:8"]]
- 008ae1ac ["INT_ADD", "register:40f0:8", ["const:8ae1ac:8", "const:4:8"]]
- 008ae1ac ["CALL", null, ["callee:004421f4:8"]]
+ 008af158 ["INT_ADD", "register:40f0:8", ["const:8af158:8", "const:4:8"]]
+ 008af158 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-4ece3fd4f55d25a4c22e57fb31e84a6e"></a>

### [`008ae85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ae/008ae85c.md) → [`008af808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008af/008af808.md) FUN_008af808

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`008ae85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ae/008ae85c.md) [`009afefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afefc.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`008af808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008af/008af808.md) [`009b0ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0ea8.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.10% / 新版 70.10%

優先判定に残った影響 `call_argument_candidate` 32件, `store_condition` 1件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008af98c",
      "incomplete_value": false,
      "site": "008af994",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ae9e0",
      "incomplete_value": false,
      "site": "008ae9e8",
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
            "const:f93:8"
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
      "definition_site": "008af9b0",
      "incomplete_value": false,
      "site": "008af9bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aea04",
      "incomplete_value": false,
      "site": "008aea10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f29:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008afae4",
      "incomplete_value": false,
      "site": "008afaec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aeb38",
      "incomplete_value": false,
      "site": "008aeb40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ae888",
      "WRITE",
      [
        "storage",
        "Stack[-0xdc]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ae88c",
      "WRITE",
      [
        "storage",
        "Stack[-0xe4]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ae890",
      "WRITE",
      [
        "storage",
        "Stack[-0xec]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008af834",
      "WRITE",
      [
        "storage",
        "Stack[-0xdc]",
        null,
        null
      ]
    ],
    [
      "008af838",
      "WRITE",
      [
        "storage",
        "Stack[-0xe4]",
        null,
        null
      ]
    ],
    [
      "008af83c",
      "WRITE",
      [
        "storage",
        "Stack[-0xec]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008ae9e8 ["INT_ADD", "register:40f0:8", ["const:8ae9e8:8", "const:4:8"]]
- 008ae9e8 ["CALL", null, ["callee:004421f4:8"]]
+ 008af994 ["INT_ADD", "register:40f0:8", ["const:8af994:8", "const:4:8"]]
+ 008af994 ["CALL", null, ["callee:004421f4:8"]]
- 008aea10 ["INT_ADD", "register:40f0:8", ["const:8aea10:8", "const:4:8"]]
- 008aea10 ["CALL", null, ["callee:00442b54:8"]]
+ 008af9bc ["INT_ADD", "register:40f0:8", ["const:8af9bc:8", "const:4:8"]]
+ 008af9bc ["CALL", null, ["callee:00442b54:8"]]
- 008aeb40 ["INT_ADD", "register:40f0:8", ["const:8aeb40:8", "const:4:8"]]
- 008aeb40 ["CALL", null, ["callee:004421f4:8"]]
+ 008afaec ["INT_ADD", "register:40f0:8", ["const:8afaec:8", "const:4:8"]]
+ 008afaec ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-8970d346e010b7fc89a5ca88cbb31d65"></a>

### [`008af10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af10c.md) → [`008b00b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b0/008b00b8.md) FUN_008b00b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008ae85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ae/008ae85c.md) [`008af10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af10c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008af808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008af/008af808.md) [`008b00b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b0/008b00b8.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.36% / 新版 76.36%

優先判定に残った影響 `call_argument_candidate` 21件, `store_condition` 3件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b0230",
      "incomplete_value": false,
      "site": "008b0238",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008af284",
      "incomplete_value": false,
      "site": "008af28c",
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
            "const:f93:8"
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
      "definition_site": "008b0388",
      "incomplete_value": false,
      "site": "008b0390",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008af3dc",
      "incomplete_value": false,
      "site": "008af3e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
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
    "new": {
      "definition_site": "008b0430",
      "incomplete_value": false,
      "site": "008b043c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a6000:8"
          ],
          [
            "leaf",
            "const:4e7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008af484",
      "incomplete_value": false,
      "site": "008af490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a6000:8"
          ],
          [
            "leaf",
            "const:38f:8"
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
      "unmatched:008af19c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b0304"
      ]
    ],
    [
      "unmatched:008af1e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b0304"
      ]
    ],
    [
      "unmatched:008af20c",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b0148",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b0304"
      ]
    ],
    [
      "008b0190",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b0304"
      ]
    ],
    [
      "008b01b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008af28c ["INT_ADD", "register:40f0:8", ["const:8af28c:8", "const:4:8"]]
- 008af28c ["CALL", null, ["callee:004421f4:8"]]
+ 008b0238 ["INT_ADD", "register:40f0:8", ["const:8b0238:8", "const:4:8"]]
+ 008b0238 ["CALL", null, ["callee:004421f4:8"]]
- 008af3e4 ["INT_ADD", "register:40f0:8", ["const:8af3e4:8", "const:4:8"]]
- 008af3e4 ["CALL", null, ["callee:004421f4:8"]]
+ 008b0390 ["INT_ADD", "register:40f0:8", ["const:8b0390:8", "const:4:8"]]
+ 008b0390 ["CALL", null, ["callee:004421f4:8"]]
- 008af490 ["INT_ADD", "register:40f0:8", ["const:8af490:8", "const:4:8"]]
- 008af490 ["CALL", null, ["callee:0044204c:8"]]
+ 008b043c ["INT_ADD", "register:40f0:8", ["const:8b043c:8", "const:4:8"]]
+ 008b043c ["CALL", null, ["callee:0044204c:8"]]
~~~


<a id="compare-edfb3ef22ec6b6b05e2d2efb72a6057b"></a>

### [`008af994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af994.md) → [`008b0940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b0/008b0940.md) FUN_008b0940

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008af10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af10c.md) [`008af994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af994.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008b00b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b0/008b00b8.md) [`008b0940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b0/008b0940.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.05% / 新版 73.05%

優先判定に残った影響 `call_argument_candidate` 12件, `store_condition` 5件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b0ab4",
      "incomplete_value": false,
      "site": "008b0abc",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008afb08",
      "incomplete_value": true,
      "site": "008afb10",
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
            "const:f93:8"
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
      "definition_site": "008b0c0c",
      "incomplete_value": false,
      "site": "008b0c14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008afc60",
      "incomplete_value": false,
      "site": "008afc68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
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
    "new": {
      "definition_site": "008b0cb4",
      "incomplete_value": false,
      "site": "008b0cc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a6000:8"
          ],
          [
            "leaf",
            "const:4e7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008afd08",
      "incomplete_value": false,
      "site": "008afd14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a6000:8"
          ],
          [
            "leaf",
            "const:38f:8"
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
      "unmatched:008afa1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b0b88"
      ]
    ],
    [
      "unmatched:008afa6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b108c"
      ]
    ],
    [
      "unmatched:008afa90",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b09c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b0b88"
      ]
    ],
    [
      "008b0a18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b108c"
      ]
    ],
    [
      "008b0a3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008afb10 ["INT_ADD", "register:40f0:8", ["const:8afb10:8", "const:4:8"]]
- 008afb10 ["CALL", null, ["callee:004421f4:8"]]
+ 008b0abc ["INT_ADD", "register:40f0:8", ["const:8b0abc:8", "const:4:8"]]
+ 008b0abc ["CALL", null, ["callee:004421f4:8"]]
- 008afc68 ["INT_ADD", "register:40f0:8", ["const:8afc68:8", "const:4:8"]]
- 008afc68 ["CALL", null, ["callee:004421f4:8"]]
+ 008b0c14 ["INT_ADD", "register:40f0:8", ["const:8b0c14:8", "const:4:8"]]
+ 008b0c14 ["CALL", null, ["callee:004421f4:8"]]
- 008afd14 ["INT_ADD", "register:40f0:8", ["const:8afd14:8", "const:4:8"]]
- 008afd14 ["CALL", null, ["callee:0044204c:8"]]
+ 008b0cc0 ["INT_ADD", "register:40f0:8", ["const:8b0cc0:8", "const:4:8"]]
+ 008b0cc0 ["CALL", null, ["callee:0044204c:8"]]
~~~


<a id="compare-404b2a48e7179a44a1c0b2397e76966a"></a>

### [`008b01f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b01f8.md) → [`008b11a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b11a4.md) FUN_008b11a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`008af994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af994.md) [`008b01f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b01f8.md) [`009af254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af254.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`008b0940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b0/008b0940.md) [`008b11a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b11a4.md) [`009b0200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0200.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.47% / 新版 81.47%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b130c",
      "incomplete_value": false,
      "site": "008b1314",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b0360",
      "incomplete_value": false,
      "site": "008b0368",
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
            "const:f93:8"
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
      "definition_site": "008b1330",
      "incomplete_value": false,
      "site": "008b133c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b0384",
      "incomplete_value": false,
      "site": "008b0390",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f29:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b1464",
      "incomplete_value": false,
      "site": "008b146c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b04b8",
      "incomplete_value": false,
      "site": "008b04c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b0210",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b0218",
      "WRITE",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b0224",
      "WRITE",
      [
        "storage",
        "Stack[-0xe4]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b11bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008b11c4",
      "WRITE",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ],
    [
      "008b11d0",
      "WRITE",
      [
        "storage",
        "Stack[-0xe4]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b0368 ["INT_ADD", "register:40f0:8", ["const:8b0368:8", "const:4:8"]]
- 008b0368 ["CALL", null, ["callee:004421f4:8"]]
+ 008b1314 ["INT_ADD", "register:40f0:8", ["const:8b1314:8", "const:4:8"]]
+ 008b1314 ["CALL", null, ["callee:004421f4:8"]]
- 008b0390 ["INT_ADD", "register:40f0:8", ["const:8b0390:8", "const:4:8"]]
- 008b0390 ["CALL", null, ["callee:00442b54:8"]]
+ 008b133c ["INT_ADD", "register:40f0:8", ["const:8b133c:8", "const:4:8"]]
+ 008b133c ["CALL", null, ["callee:00442b54:8"]]
- 008b04c0 ["INT_ADD", "register:40f0:8", ["const:8b04c0:8", "const:4:8"]]
- 008b04c0 ["CALL", null, ["callee:004421f4:8"]]
+ 008b146c ["INT_ADD", "register:40f0:8", ["const:8b146c:8", "const:4:8"]]
+ 008b146c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-07fa9585176f251fe600a6fe2252ac66"></a>

### [`008b0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a30.md) → [`008b19dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b19dc.md) FUN_008b19dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`008b0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a30.md) · 呼出先 3件 [`008b0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a30.md) [`008b0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a80.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`008b19dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b19dc.md) · 呼出先 3件 [`008b19dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b19dc.md) [`008b1a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1a2c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b0a30 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 008b0a30 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008b19dc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 008b19dc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 008b0a50 ["INT_ADD", "register:40f0:8", ["const:8b0a50:8", "const:4:8"]]
- 008b0a50 ["CALL", null, ["local:b0:8"]]
+ 008b19fc ["INT_ADD", "register:40f0:8", ["const:8b19fc:8", "const:4:8"]]
+ 008b19fc ["CALL", null, ["local:b0:8"]]
- 008b0a5c ["INT_ADD", "register:40f0:8", ["const:8b0a5c:8", "const:4:8"]]
- 008b0a5c ["CALL", null, ["local:b0:8"]]
+ 008b1a08 ["INT_ADD", "register:40f0:8", ["const:8b1a08:8", "const:4:8"]]
+ 008b1a08 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-3d965b03829890dd5cee888730f1bd23"></a>

### [`008b0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a80.md) → [`008b1a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1a2c.md) FUN_008b1a2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`008b0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a30.md) [`008b0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a80.md) · 呼出先 2件 [`008b0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a80.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`008b19dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b19dc.md) [`008b1a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1a2c.md) · 呼出先 2件 [`008b1a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1a2c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b0aa8",
      "incomplete_value": true,
      "site": "008b0aac",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "008b0aa4",
      "incomplete_value": true,
      "site": "008b0aac",
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
                "register:40a0:8"
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
    "ordinal": 1,
    "slot": 2
  }
]
~~~


~~~diff
- 008b0aac ["INT_ADD", "register:40f0:8", ["const:8b0aac:8", "const:4:8"]]
- 008b0aac ["CALL", null, ["local:b0:8"]]
+ 008b1a58 ["INT_ADD", "register:40f0:8", ["const:8b1a58:8", "const:4:8"]]
+ 008b1a58 ["CALL", null, ["local:b0:8"]]
- 008b0a80 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 008b0a80 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 008b1a2c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 008b1a2c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008b0aa0 ["INT_ADD", "register:40f0:8", ["const:8b0aa0:8", "const:4:8"]]
- 008b0aa0 ["CALL", null, ["local:b0:8"]]
+ 008b1a4c ["INT_ADD", "register:40f0:8", ["const:8b1a4c:8", "const:4:8"]]
+ 008b1a4c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-eeb62bf267b09febc0decba2998668e4"></a>

### [`008b0ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0ac4.md) → [`008b1a70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1a70.md) FUN_008b1a70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008a3e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3e8c.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005dc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc340.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`008a4e38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4e38.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005dc6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc6f0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.67% / 新版 90.67%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b1b3c",
      "incomplete_value": true,
      "site": "008b1b4c",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "008b1b40",
      "incomplete_value": true,
      "site": "008b1b4c",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:008b0aec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b1af8"
      ]
    ],
    [
      "unmatched:008b0b04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b1b90"
      ]
    ]
  ],
  "added": [
    [
      "008b1a98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b1af8"
      ]
    ],
    [
      "008b1ab0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b1b90"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b0ba0 ["INT_ADD", "register:40f0:8", ["const:8b0ba0:8", "const:4:8"]]
- 008b0ba0 ["CALL", null, ["callee:00c590a0:8"]]
+ 008b1b4c ["INT_ADD", "register:40f0:8", ["const:8b1b4c:8", "const:4:8"]]
+ 008b1b4c ["CALL", null, ["callee:00c590a0:8"]]
- 008b0aec ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 008b0aec ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 008b0aec ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
- 008b0af0 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 008b0af0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e44acfe6b8bbd18f124ed82c96e7ad8a"></a>

### [`008b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0bf0.md) → [`008b1b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1b9c.md) FUN_008b1b9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008a3eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3eb8.md) [`008b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0bf0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008a4e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4e64.md) [`008b1b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1b9c.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.04% / 新版 82.04%

優先判定に残った影響 `call_argument_candidate` 35件, `store_condition` 1件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b0c94",
      "incomplete_value": false,
      "site": "008b0c98",
      "value": [
        "leaf",
        "const:25:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b1d24",
      "incomplete_value": true,
      "site": "008b1d2c",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b0d78",
      "incomplete_value": false,
      "site": "008b0d80",
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
            "const:f93:8"
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
    "new": null,
    "old": {
      "definition_site": "008b0ed0",
      "incomplete_value": false,
      "site": "008b0ed8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b0c88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b1df8"
      ]
    ],
    [
      "unmatched:008b0cfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b0d00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b1cc0"
      ]
    ]
  ],
  "added": [
    [
      "008b1c34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b1df8"
      ]
    ],
    [
      "008b1ca8",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "008b1cac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b1cc0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b0c98 ["INT_ADD", "register:40f0:8", ["const:8b0c98:8", "const:4:8"]]
- 008b0c98 ["CALL", null, ["callee:00c59070:8"]]
+ 008b1c44 ["INT_ADD", "register:40f0:8", ["const:8b1c44:8", "const:4:8"]]
+ 008b1c44 ["CALL", null, ["callee:00c59070:8"]]
- 008b0d80 ["INT_ADD", "register:40f0:8", ["const:8b0d80:8", "const:4:8"]]
- 008b0d80 ["CALL", null, ["callee:004421f4:8"]]
+ 008b1d2c ["INT_ADD", "register:40f0:8", ["const:8b1d2c:8", "const:4:8"]]
+ 008b1d2c ["CALL", null, ["callee:004421f4:8"]]
- 008b0ed8 ["INT_ADD", "register:40f0:8", ["const:8b0ed8:8", "const:4:8"]]
- 008b0ed8 ["CALL", null, ["callee:004421f4:8"]]
+ 008b1e84 ["INT_ADD", "register:40f0:8", ["const:8b1e84:8", "const:4:8"]]
+ 008b1e84 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-83ed431f8b6273bebef14945d8ae81e0"></a>

### [`008b15d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b15d4.md) → [`008b2580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b2/008b2580.md) FUN_008b2580

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0bf0.md) [`008b15d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b15d4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008b1b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1b9c.md) [`008b2580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b2/008b2580.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.51% / 新版 85.51%

優先判定に残った影響 `call_argument_candidate` 37件, `store_condition` 2件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 30件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b261c",
      "incomplete_value": false,
      "site": "008b2620",
      "value": [
        "leaf",
        "const:25:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b2700",
      "incomplete_value": false,
      "site": "008b2708",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b1754",
      "incomplete_value": true,
      "site": "008b175c",
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
            "const:f93:8"
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
      "definition_site": "008b2714",
      "incomplete_value": true,
      "site": "008b2718",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40e0:4"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:008b15d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b15dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b15e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b2584",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008b2588",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008b258c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b1674 ["INT_ADD", "register:40f0:8", ["const:8b1674:8", "const:4:8"]]
- 008b1674 ["CALL", null, ["callee:00c59070:8"]]
+ 008b2620 ["INT_ADD", "register:40f0:8", ["const:8b2620:8", "const:4:8"]]
+ 008b2620 ["CALL", null, ["callee:00c59070:8"]]
- 008b175c ["INT_ADD", "register:40f0:8", ["const:8b175c:8", "const:4:8"]]
- 008b175c ["CALL", null, ["callee:004421f4:8"]]
+ 008b2708 ["INT_ADD", "register:40f0:8", ["const:8b2708:8", "const:4:8"]]
+ 008b2708 ["CALL", null, ["callee:004421f4:8"]]
- 008b176c ["INT_ADD", "register:40f0:8", ["const:8b176c:8", "const:4:8"]]
- 008b176c ["CALL", null, ["callee:00c58ff0:8"]]
+ 008b2718 ["INT_ADD", "register:40f0:8", ["const:8b2718:8", "const:4:8"]]
+ 008b2718 ["CALL", null, ["callee:00c58ff0:8"]]
~~~


<a id="compare-16b5da988548cba764c8909e1f688526"></a>

### [`008b1fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b1fb0.md) → [`008b2f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b2/008b2f5c.md) FUN_008b2f5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008b15d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b15d4.md) [`008b1fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b1fb0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008b2580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b2/008b2580.md) [`008b2f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b2/008b2f5c.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.16% / 新版 82.16%

優先判定に残った影響 `call_argument_candidate` 17件, `store_destination` 2件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008b3370",
      "incomplete_value": true,
      "site": "008b3370",
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
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b2730",
      "incomplete_value": true,
      "site": "008b2730",
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
            "const:70:8"
          ]
        ]
      ]
    },
    "ordinal": 52,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008b3374",
      "incomplete_value": true,
      "site": "008b3374",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b2734",
      "incomplete_value": true,
      "site": "008b2734",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "ordinal": 53,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b3060",
      "incomplete_value": true,
      "site": "008b306c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "live",
            "register:40d0:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:008b20ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b20b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b3070"
      ]
    ],
    [
      "008b30d4",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b3058",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "008b305c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b3070"
      ]
    ],
    [
      "008b30d4",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b20c0 ["INT_ADD", "register:40f0:8", ["const:8b20c0:8", "const:4:8"]]
- 008b20c0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 008b306c ["INT_ADD", "register:40f0:8", ["const:8b306c:8", "const:4:8"]]
+ 008b306c ["CALL", null, ["callee:00c58fe0:8"]]
- 008b2130 ["INT_ADD", "register:40f0:8", ["const:8b2130:8", "const:4:8"]]
- 008b2130 ["CALL", null, ["callee:004421f4:8"]]
+ 008b30dc ["INT_ADD", "register:40f0:8", ["const:8b30dc:8", "const:4:8"]]
+ 008b30dc ["CALL", null, ["callee:004421f4:8"]]
- 008b2158 ["INT_ADD", "register:40f0:8", ["const:8b2158:8", "const:4:8"]]
- 008b2158 ["CALL", null, ["callee:00442b54:8"]]
+ 008b3104 ["INT_ADD", "register:40f0:8", ["const:8b3104:8", "const:4:8"]]
+ 008b3104 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-31770a88fdf2d08fbe74c2b676bbfd2e"></a>

### [`008b2960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b2/008b2960.md) → [`008b390c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b3/008b390c.md) FUN_008b390c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008b1fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b1fb0.md) [`008b2960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b2/008b2960.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008b2f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b2/008b2f5c.md) [`008b390c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b3/008b390c.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.54% / 新版 81.54%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 13件, `store_condition` 2件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008b3b98",
      "incomplete_value": true,
      "site": "008b3b98",
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
                "const:0:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b2ca0",
      "incomplete_value": true,
      "site": "008b2ca0",
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
                "const:0:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b2ae0",
      "incomplete_value": false,
      "site": "008b2ae8",
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
            "const:f93:8"
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
      "definition_site": "008b3b44",
      "incomplete_value": false,
      "site": "008b3b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b2b98",
      "incomplete_value": false,
      "site": "008b2ba0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
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
      "unmatched:008b2a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b4108"
      ]
    ],
    [
      "008b3a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008b2adc"
      ]
    ],
    [
      "unmatched:008b2acc",
      "READ",
      [
        "storage",
        "Stack[-0x87]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b39e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b4108"
      ]
    ],
    [
      "008b3a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b3a88"
      ]
    ],
    [
      "008b3a68",
      "READ",
      [
        "storage",
        "Stack[-0x87]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b2ae8 ["INT_ADD", "register:40f0:8", ["const:8b2ae8:8", "const:4:8"]]
- 008b2ae8 ["CALL", null, ["callee:004421f4:8"]]
+ 008b3a94 ["INT_ADD", "register:40f0:8", ["const:8b3a94:8", "const:4:8"]]
+ 008b3a94 ["CALL", null, ["callee:004421f4:8"]]
- 008b2ba0 ["INT_ADD", "register:40f0:8", ["const:8b2ba0:8", "const:4:8"]]
- 008b2ba0 ["CALL", null, ["callee:004421f4:8"]]
+ 008b3b4c ["INT_ADD", "register:40f0:8", ["const:8b3b4c:8", "const:4:8"]]
+ 008b3b4c ["CALL", null, ["callee:004421f4:8"]]
- 008b2ca0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008b2ca0 ["CBRANCH", null, ["local:b77:8", "tmp:0:1"]]
+ 008b3b98 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008b3b98 ["CBRANCH", null, ["local:b86:8", "tmp:0:1"]]
~~~


<a id="compare-ae7e01a1b46b49754d0e22b5bcdf4fe0"></a>

### [`008b3288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3288.md) → [`008b4234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b4/008b4234.md) FUN_008b4234

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008b2960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b2/008b2960.md) [`008b3288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3288.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008b390c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b3/008b390c.md) [`008b4234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b4/008b4234.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.69% / 新版 83.69%

優先判定に残った影響 `call_argument_candidate` 21件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b3378",
      "incomplete_value": true,
      "site": "008b3384",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "live",
            "register:40c0:8"
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
      "definition_site": "008b4394",
      "incomplete_value": false,
      "site": "008b439c",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b33e8",
      "incomplete_value": false,
      "site": "008b33f0",
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
            "const:f93:8"
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
      "definition_site": "008b43b8",
      "incomplete_value": false,
      "site": "008b43c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b340c",
      "incomplete_value": false,
      "site": "008b3418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f29:8"
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
      "unmatched:008b32e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b4468"
      ]
    ],
    [
      "unmatched:008b3370",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b3374",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b4334"
      ]
    ]
  ],
  "added": [
    [
      "008b4290",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b4468"
      ]
    ],
    [
      "008b431c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "008b4320",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b4334"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b3384 ["INT_ADD", "register:40f0:8", ["const:8b3384:8", "const:4:8"]]
- 008b3384 ["CALL", null, ["callee:00c58fe0:8"]]
+ 008b4330 ["INT_ADD", "register:40f0:8", ["const:8b4330:8", "const:4:8"]]
+ 008b4330 ["CALL", null, ["callee:00c58fe0:8"]]
- 008b33f0 ["INT_ADD", "register:40f0:8", ["const:8b33f0:8", "const:4:8"]]
- 008b33f0 ["CALL", null, ["callee:004421f4:8"]]
+ 008b439c ["INT_ADD", "register:40f0:8", ["const:8b439c:8", "const:4:8"]]
+ 008b439c ["CALL", null, ["callee:004421f4:8"]]
- 008b3418 ["INT_ADD", "register:40f0:8", ["const:8b3418:8", "const:4:8"]]
- 008b3418 ["CALL", null, ["callee:00442b54:8"]]
+ 008b43c4 ["INT_ADD", "register:40f0:8", ["const:8b43c4:8", "const:4:8"]]
+ 008b43c4 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-8898c8382941c89ace296829fe5f1195"></a>

### [`008b3ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3ab4.md) → [`008b4a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b4/008b4a60.md) FUN_008b4a60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008b3288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3288.md) [`008b3ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3ab4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008b4234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b4/008b4234.md) [`008b4a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b4/008b4a60.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.94% / 新版 83.94%

優先判定に残った影響 `call_argument_candidate` 16件, `store_condition` 1件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b4bbc",
      "incomplete_value": false,
      "site": "008b4bc4",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b3c10",
      "incomplete_value": false,
      "site": "008b3c18",
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
            "const:f93:8"
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
      "definition_site": "008b4d2c",
      "incomplete_value": false,
      "site": "008b4d38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b3c34",
      "incomplete_value": false,
      "site": "008b3c40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f29:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b4c80",
      "incomplete_value": true,
      "site": "008b4c88",
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
            "const:38:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b3ae0",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b3aec",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b3b0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b4c90"
      ]
    ]
  ],
  "added": [
    [
      "008b4a8c",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ],
    [
      "008b4a98",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008b4ab8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b4c90"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b3c18 ["INT_ADD", "register:40f0:8", ["const:8b3c18:8", "const:4:8"]]
- 008b3c18 ["CALL", null, ["callee:004421f4:8"]]
+ 008b4bc4 ["INT_ADD", "register:40f0:8", ["const:8b4bc4:8", "const:4:8"]]
+ 008b4bc4 ["CALL", null, ["callee:004421f4:8"]]
- 008b3c40 ["INT_ADD", "register:40f0:8", ["const:8b3c40:8", "const:4:8"]]
- 008b3c40 ["CALL", null, ["callee:00442b54:8"]]
+ 008b4d38 ["INT_ADD", "register:40f0:8", ["const:8b4d38:8", "const:4:8"]]
+ 008b4d38 ["CALL", null, ["callee:00442b54:8"]]
- 008b3cdc ["INT_ADD", "register:40f0:8", ["const:8b3cdc:8", "const:4:8"]]
- 008b3cdc ["CALL", null, ["callee:00442be4:8"]]
+ 008b4c88 ["INT_ADD", "register:40f0:8", ["const:8b4c88:8", "const:4:8"]]
+ 008b4c88 ["CALL", null, ["callee:00442be4:8"]]
~~~


<a id="compare-455723e514282de9f671d1b578a6fdbe"></a>

### [`008b42cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b42cc.md) → [`008b5278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b5/008b5278.md) FUN_008b5278

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008b3ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3ab4.md) [`008b42cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b42cc.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008b4a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b4/008b4a60.md) [`008b5278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b5/008b5278.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.80% / 新版 84.80%

優先判定に残った影響 `call_argument_candidate` 23件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b53d4",
      "incomplete_value": false,
      "site": "008b53dc",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b4428",
      "incomplete_value": false,
      "site": "008b4430",
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
            "const:f93:8"
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
      "definition_site": "008b53e8",
      "incomplete_value": true,
      "site": "008b53ec",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40c8:4"
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
    "new": null,
    "old": {
      "definition_site": "008b44ec",
      "incomplete_value": true,
      "site": "008b44f4",
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
            "const:38:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b436c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b52f4"
      ]
    ],
    [
      "008b540c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b5374"
      ]
    ],
    [
      "unmatched:008b4428",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b5318",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b52f4"
      ]
    ],
    [
      "008b5360",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b5374"
      ]
    ],
    [
      "008b53d4",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b4430 ["INT_ADD", "register:40f0:8", ["const:8b4430:8", "const:4:8"]]
- 008b4430 ["CALL", null, ["callee:004421f4:8"]]
+ 008b53dc ["INT_ADD", "register:40f0:8", ["const:8b53dc:8", "const:4:8"]]
+ 008b53dc ["CALL", null, ["callee:004421f4:8"]]
- 008b4440 ["INT_ADD", "register:40f0:8", ["const:8b4440:8", "const:4:8"]]
- 008b4440 ["CALL", null, ["callee:00c58ff0:8"]]
+ 008b53ec ["INT_ADD", "register:40f0:8", ["const:8b53ec:8", "const:4:8"]]
+ 008b53ec ["CALL", null, ["callee:00c58ff0:8"]]
- 008b44f4 ["INT_ADD", "register:40f0:8", ["const:8b44f4:8", "const:4:8"]]
- 008b44f4 ["CALL", null, ["callee:00442be4:8"]]
+ 008b54a0 ["INT_ADD", "register:40f0:8", ["const:8b54a0:8", "const:4:8"]]
+ 008b54a0 ["CALL", null, ["callee:00442be4:8"]]
~~~


<a id="compare-1dd3d64fecb5eaa08fde7a4d346a5e60"></a>

### [`008b4ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b4ae4.md) → [`008b5a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b5/008b5a90.md) FUN_008b5a90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`008b42cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b42cc.md) [`008b4ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b4ae4.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`008b5278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b5/008b5278.md) [`008b5a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b5/008b5a90.md) [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.06% / 新版 85.06%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b5be8",
      "incomplete_value": false,
      "site": "008b5bf0",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b4c3c",
      "incomplete_value": false,
      "site": "008b4c44",
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
            "const:f93:8"
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
      "definition_site": "008b5d58",
      "incomplete_value": false,
      "site": "008b5d64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b4c60",
      "incomplete_value": false,
      "site": "008b4c6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f29:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b5d40",
      "incomplete_value": false,
      "site": "008b5d48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b4d94",
      "incomplete_value": false,
      "site": "008b4d9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b4ae8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b4aec",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b4af0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b5a94",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008b5a98",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008b5a9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b4c44 ["INT_ADD", "register:40f0:8", ["const:8b4c44:8", "const:4:8"]]
- 008b4c44 ["CALL", null, ["callee:004421f4:8"]]
+ 008b5bf0 ["INT_ADD", "register:40f0:8", ["const:8b5bf0:8", "const:4:8"]]
+ 008b5bf0 ["CALL", null, ["callee:004421f4:8"]]
- 008b4c6c ["INT_ADD", "register:40f0:8", ["const:8b4c6c:8", "const:4:8"]]
- 008b4c6c ["CALL", null, ["callee:00442b54:8"]]
+ 008b5d64 ["INT_ADD", "register:40f0:8", ["const:8b5d64:8", "const:4:8"]]
+ 008b5d64 ["CALL", null, ["callee:00442b54:8"]]
- 008b4d9c ["INT_ADD", "register:40f0:8", ["const:8b4d9c:8", "const:4:8"]]
- 008b4d9c ["CALL", null, ["callee:004421f4:8"]]
+ 008b5d48 ["INT_ADD", "register:40f0:8", ["const:8b5d48:8", "const:4:8"]]
+ 008b5d48 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-8de873903e1c29b97c926b50d38327a3"></a>

### [`008b52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b52e8.md) → [`008b6294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b6/008b6294.md) FUN_008b6294

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008a402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a402c.md) [`008b52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b52e8.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008a4fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4fd8.md) [`008b6294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b6/008b6294.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.73% / 新版 87.73%

優先判定に残った影響 `call_argument_candidate` 28件, `store_condition` 1件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b637c",
      "incomplete_value": true,
      "site": "008b6388",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "live",
            "register:40b0:8"
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
      "definition_site": "008b63f0",
      "incomplete_value": false,
      "site": "008b63f8",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b5444",
      "incomplete_value": false,
      "site": "008b544c",
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
            "const:f93:8"
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
      "definition_site": "008b6414",
      "incomplete_value": false,
      "site": "008b6420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b5468",
      "incomplete_value": false,
      "site": "008b5474",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f29:8"
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
      "unmatched:008b53a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b6ab0"
      ]
    ],
    [
      "008b6350",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b63ec"
      ]
    ],
    [
      "008b63f0",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b6350",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b6ab0"
      ]
    ],
    [
      "008b6398",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b63ec"
      ]
    ],
    [
      "008b63f0",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b53dc ["INT_ADD", "register:40f0:8", ["const:8b53dc:8", "const:4:8"]]
- 008b53dc ["CALL", null, ["callee:00c58fe0:8"]]
+ 008b6388 ["INT_ADD", "register:40f0:8", ["const:8b6388:8", "const:4:8"]]
+ 008b6388 ["CALL", null, ["callee:00c58fe0:8"]]
- 008b544c ["INT_ADD", "register:40f0:8", ["const:8b544c:8", "const:4:8"]]
- 008b544c ["CALL", null, ["callee:004421f4:8"]]
+ 008b63f8 ["INT_ADD", "register:40f0:8", ["const:8b63f8:8", "const:4:8"]]
+ 008b63f8 ["CALL", null, ["callee:004421f4:8"]]
- 008b5474 ["INT_ADD", "register:40f0:8", ["const:8b5474:8", "const:4:8"]]
- 008b5474 ["CALL", null, ["callee:00442b54:8"]]
+ 008b6420 ["INT_ADD", "register:40f0:8", ["const:8b6420:8", "const:4:8"]]
+ 008b6420 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-76712b1ff3b84ab3e1dfc87664b95ed0"></a>

### [`008b5c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b5c54.md) → [`008b6c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b6/008b6c00.md) FUN_008b6c00

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`008b52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b52e8.md) [`008b5c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b5c54.md) [`00a98194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98194.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`008b6294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b6/008b6294.md) [`008b6c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b6/008b6c00.md) [`00a99188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99188.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.75% / 新版 80.75%

優先判定に残った影響 `call_argument_candidate` 32件, `store_condition` 2件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b5d44",
      "incomplete_value": true,
      "site": "008b5d54",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b6cfc",
      "incomplete_value": true,
      "site": "008b6d00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b5d50",
      "incomplete_value": true,
      "site": "008b5d54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
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
    "new": null,
    "old": {
      "definition_site": "008b5d48",
      "incomplete_value": true,
      "site": "008b5d54",
      "value": [
        "live",
        "register:40e0:8"
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
      "unmatched:008b5c58",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b5c5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b5c60",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b6c04",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008b6c08",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008b6c0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b5d54 ["INT_ADD", "register:40f0:8", ["const:8b5d54:8", "const:4:8"]]
- 008b5d54 ["CALL", null, ["callee:00c58fe0:8"]]
+ 008b6d00 ["INT_ADD", "register:40f0:8", ["const:8b6d00:8", "const:4:8"]]
+ 008b6d00 ["CALL", null, ["callee:00c58fe0:8"]]
- 008b5dc8 ["INT_ADD", "register:40f0:8", ["const:8b5dc8:8", "const:4:8"]]
- 008b5dc8 ["CALL", null, ["callee:004421f4:8"]]
+ 008b6d74 ["INT_ADD", "register:40f0:8", ["const:8b6d74:8", "const:4:8"]]
+ 008b6d74 ["CALL", null, ["callee:004421f4:8"]]
- 008b5e80 ["INT_ADD", "register:40f0:8", ["const:8b5e80:8", "const:4:8"]]
- 008b5e80 ["CALL", null, ["callee:004421f4:8"]]
+ 008b6e2c ["INT_ADD", "register:40f0:8", ["const:8b6e2c:8", "const:4:8"]]
+ 008b6e2c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-3e94af60137e13e8ac60d4afd32fb402"></a>

### [`008b6524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6524.md) → [`008b74d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b74d0.md) _INIT_168

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b761c",
      "incomplete_value": true,
      "site": "008b7630",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b7624",
      "incomplete_value": true,
      "site": "008b7630",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b7628",
      "incomplete_value": true,
      "site": "008b7630",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b6554",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b6560",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008b6568",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b7500",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008b750c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008b7514",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b6684 ["INT_ADD", "register:40f0:8", ["const:8b6684:8", "const:4:8"]]
- 008b6684 ["CALL", null, ["callee:0043bb58:8"]]
+ 008b7630 ["INT_ADD", "register:40f0:8", ["const:8b7630:8", "const:4:8"]]
+ 008b7630 ["CALL", null, ["callee:0043bb58:8"]]
- 008b66ac ["INT_ADD", "register:40f0:8", ["const:8b66ac:8", "const:4:8"]]
- 008b66ac ["CALL", null, ["callee:0043bb58:8"]]
+ 008b7658 ["INT_ADD", "register:40f0:8", ["const:8b7658:8", "const:4:8"]]
+ 008b7658 ["CALL", null, ["callee:0043bb58:8"]]
- 008b66fc ["INT_ADD", "register:40f0:8", ["const:8b66fc:8", "const:4:8"]]
- 008b66fc ["CALL", null, ["callee:0043bb58:8"]]
+ 008b76a8 ["INT_ADD", "register:40f0:8", ["const:8b76a8:8", "const:4:8"]]
+ 008b76a8 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-f8e6d8ef13e4dcd03fab2eb4f9f90736"></a>

### [`008b6930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6930.md) → [`008b78dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b78dc.md) FUN_008b78dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) · 呼出先 5件 [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) [`008b7b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7b3c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md) · 呼出先 5件 [`008b8a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a1c.md) [`008b8ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8ae8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.47% / 新版 82.47%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b69f0",
      "incomplete_value": true,
      "site": "008b69fc",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b69f4",
      "incomplete_value": true,
      "site": "008b69fc",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b79dc",
      "incomplete_value": false,
      "site": "008b79f8",
      "value": [
        "leaf",
        "const:18:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b6954",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b698c",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008b6994",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008b7900",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008b7938",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "008b7940",
      "DATA",
      [
        "storage",
        "00c8c7f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b69fc ["INT_ADD", "register:40f0:8", ["const:8b69fc:8", "const:4:8"]]
- 008b69fc ["CALL", null, ["callee:008b8ae8:8"]]
+ 008b79a8 ["INT_ADD", "register:40f0:8", ["const:8b79a8:8", "const:4:8"]]
+ 008b79a8 ["CALL", null, ["callee:008b8ae8:8"]]
- 008b6a4c ["INT_ADD", "register:40f0:8", ["const:8b6a4c:8", "const:4:8"]]
- 008b6a4c ["CALL", null, ["callee:00c58f30:8"]]
+ 008b79f8 ["INT_ADD", "register:40f0:8", ["const:8b79f8:8", "const:4:8"]]
+ 008b79f8 ["CALL", null, ["callee:00c58f30:8"]]
- 008b6950 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:28:8"]]
- 008b6950 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4d83f3887a075d19f6dc04adeb3a0a18"></a>

### [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) → [`008b7a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7a60.md) FUN_008b7a60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 12件 [`00697808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697808.md) [`006989f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006989f0.md) [`006990a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006990a4.md) [`007f4750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4750.md) [`007fa9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9e8.md) · 呼出先 12件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)
- 新版 呼出元 12件 [`00697bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697bb8.md) [`00698da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/00698da0.md) [`00699454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699454.md) [`007f56b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f56b4.md) [`007fb94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb94c.md) · 呼出先 12件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048dfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048dfac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.71% / 新版 83.71%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b6ad0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b6ae8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b7bb0"
      ]
    ],
    [
      "unmatched:008b6b5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b7b30"
      ]
    ]
  ],
  "added": [
    [
      "008b7a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008b7a94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b7bb0"
      ]
    ],
    [
      "008b7ac8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b7b30"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b6acc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 008b6acc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008b6ad0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008b6ad0 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008b6ad0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 008b6ad8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008b6ad8 ["CBRANCH", null, ["local:b46:8", "tmp:0:1"]]
+ 008b7a84 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008b7a84 ["CBRANCH", null, ["local:b45:8", "tmp:0:1"]]
~~~


<a id="compare-bde87fa4075a5949ebc70cfe0c9a9de7"></a>

### [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) → [`008b7da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7da0.md) FUN_008b7da0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 60件 [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) [`0060eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060eb90.md) [`00612324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00612/00612324.md) [`00613ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/00613ca4.md) [`0061544c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/0061544c.md) · 呼出先 3件 [`00a468ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a468ec.md) [`00a46c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c88.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 60件 [`005c80f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c80f0.md) [`0060ef40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060ef40.md) [`006126d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00612/006126d4.md) [`00614054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00614/00614054.md) [`006157fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00615/006157fc.md) · 呼出先 3件 [`00a478e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a478e0.md) [`00a47c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c7c.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b7de0",
      "incomplete_value": true,
      "site": "008b7de8",
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
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:608:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b6e34",
      "incomplete_value": true,
      "site": "008b6e3c",
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
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:638:8"
              ]
            ]
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
      "definition_site": "008b7de4",
      "incomplete_value": true,
      "site": "008b7de8",
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
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:610:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b6e38",
      "incomplete_value": true,
      "site": "008b6e3c",
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
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:640:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b7de0",
      "READ",
      [
        "storage",
        "00c9b638",
        null,
        "pointer"
      ]
    ],
    [
      "008b7de0",
      "PARAM",
      [
        "storage",
        "00c8b848",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008b7de4",
      "READ",
      [
        "storage",
        "00c9b640",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008b7de0",
      "READ",
      [
        "storage",
        "00c9c608",
        null,
        "pointer"
      ]
    ],
    [
      "008b7de0",
      "PARAM",
      [
        "storage",
        "00c8c818",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008b7de4",
      "READ",
      [
        "storage",
        "00c9c610",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b6e3c ["INT_ADD", "register:40f0:8", ["const:8b6e3c:8", "const:4:8"]]
- 008b6e3c ["CALL", null, ["callee:00c596b0:8"]]
+ 008b7de8 ["INT_ADD", "register:40f0:8", ["const:8b7de8:8", "const:4:8"]]
+ 008b7de8 ["CALL", null, ["callee:00c596b0:8"]]
- 008b6e28 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 008b7dd4 ["COPY", "register:4008:8", ["const:c9c000:8"]]
- 008b6e2c ["COPY", "register:4010:8", ["const:c9b000:8"]]
+ 008b7dd8 ["COPY", "register:4010:8", ["const:c9c000:8"]]
~~~


<a id="compare-6122c4db30eced440c0e9b51458eec8d"></a>

### [`008b6ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ea8.md) → [`008b7e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7e54.md) FUN_008b7e54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 2件 [`00630b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00630/00630b1c.md) [`00781c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781c28.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00630ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00630/00630ecc.md) [`00782004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00782/00782004.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-59c7cef5d0f76e3272b493741d4783a4"></a>

### [`008b6ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ed0.md) → [`008b7e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7e7c.md) FUN_008b7e7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 0件 
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 90.91% / 新版 90.91%

~~~diff
- 008b6edc ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008b6edc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008b7e88 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008b7e88 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008b6eec ["CBRANCH", null, ["local:b4:8", "register:102:1"]]
+ 008b7e98 ["CBRANCH", null, ["local:b3:8", "register:102:1"]]
- 008b6ef4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fffffffffffffffc:8"]]
- 008b6ef4 ["LOAD", "register:5000:4", ["const:1b1:8", "tmp:0:8"]]
- 008b6ef4 ["COPY", "register:5004:4", ["const:0:4"]]
- 008b6ef4 ["COPY", "register:5008:8", ["const:0:8"]]
~~~


<a id="compare-d33f098b2566bdf05d498f6dfb2fd464"></a>

### [`008b6f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f0c.md) → [`008b7eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7eb8.md) FUN_008b7eb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 7件 [`0062b518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062b/0062b518.md) [`0068aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068aae0.md) [`006d3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d3/006d3e94.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`008bf91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf91c.md) · 呼出先 0件 
- 新版 呼出元 7件 [`0062b8c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062b/0062b8c8.md) [`0068ae90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068a/0068ae90.md) [`006d4244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d4/006d4244.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) [`008c08c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c0/008c08c8.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-b5a0a08ebc7094fe1d1cc0156d23dc63"></a>

### [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) → [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md) FUN_008b7ff0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 75件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606514.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008b6930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6930.md) [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 74件 [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006068c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/006068c4.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008b78dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b78dc.md) [`008b8a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a1c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.89% / 新版 92.89%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b8164",
      "incomplete_value": true,
      "site": "008b8164",
      "value": [
        "INT_ADD",
        "8",
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
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b71b8",
      "incomplete_value": true,
      "site": "008b71b8",
      "value": [
        "INT_ADD",
        "8",
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
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 37,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b815c",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "008b8164",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ],
    [
      "008b818c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008b71f4"
      ]
    ]
  ],
  "added": [
    [
      "008b815c",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "008b8164",
      "DATA",
      [
        "storage",
        "00c8c7f8",
        null,
        "undefined *"
      ]
    ],
    [
      "008b818c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b81a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b7090 ["INT_ADD", "register:40f0:8", ["const:8b7090:8", "const:4:8"]]
- 008b7090 ["CALL", null, ["callee:00c58f30:8"]]
+ 008b803c ["INT_ADD", "register:40f0:8", ["const:8b803c:8", "const:4:8"]]
+ 008b803c ["CALL", null, ["callee:00c58f30:8"]]
- 008b70f8 ["INT_ADD", "register:40f0:8", ["const:8b70f8:8", "const:4:8"]]
- 008b70f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 008b80a4 ["INT_ADD", "register:40f0:8", ["const:8b80a4:8", "const:4:8"]]
+ 008b80a4 ["CALL", null, ["callee:00c58f30:8"]]
- 008b7130 ["INT_ADD", "register:40f0:8", ["const:8b7130:8", "const:4:8"]]
- 008b7130 ["CALL", null, ["callee:0043bf04:8"]]
+ 008b80dc ["INT_ADD", "register:40f0:8", ["const:8b80dc:8", "const:4:8"]]
+ 008b80dc ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-5d3451ae63e2deec5e45694241769e50"></a>

### [`008b7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7424.md) → [`008b83d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b83d0.md) FUN_008b83d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008b7ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7ca4.md) · 呼出先 3件 [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008b8c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8c50.md) · 呼出先 3件 [`008b8a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a1c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.23% / 新版 94.23%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b8468",
      "incomplete_value": true,
      "site": "008b846c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "unmatched:008b74a8",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008b74b0",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008b8454",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "008b845c",
      "DATA",
      [
        "storage",
        "00c8c7f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b74c0 ["INT_ADD", "register:40f0:8", ["const:8b74c0:8", "const:4:8"]]
- 008b74c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 008b846c ["INT_ADD", "register:40f0:8", ["const:8b846c:8", "const:4:8"]]
+ 008b846c ["CALL", null, ["callee:00c58f50:8"]]
- 008b745c ["INT_ADD", "register:40f0:8", ["const:8b745c:8", "const:4:8"]]
- 008b745c ["CALL", null, ["callee:00c58f50:8"]]
+ 008b8408 ["INT_ADD", "register:40f0:8", ["const:8b8408:8", "const:4:8"]]
+ 008b8408 ["CALL", null, ["callee:00c58f50:8"]]
- 008b746c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 008b8418 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-87867b189e264816e0c8d30d7f1bf275"></a>

### [`008b74f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b74f4.md) → [`008b84a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b84a0.md) FUN_008b84a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048dfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048dfac.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.98% / 新版 90.98%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b84d8",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b752c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b877c",
      "incomplete_value": true,
      "site": "008b8784",
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
                "register:40b0:8"
              ],
              [
                "leaf",
                "const:28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b8874",
      "incomplete_value": true,
      "site": "008b8878",
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
    "ordinal": 11,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b84d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008b759c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b8538"
      ]
    ],
    [
      "unmatched:008b75c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b882c"
      ]
    ]
  ],
  "added": [
    [
      "008b84d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008b8548",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b8538"
      ]
    ],
    [
      "008b856c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b882c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b752c ["INT_ADD", "register:40f0:8", ["const:8b752c:8", "const:4:8"]]
- 008b752c ["CALL", null, ["ram:48cd38:8"]]
+ 008b84d8 ["INT_ADD", "register:40f0:8", ["const:8b84d8:8", "const:4:8"]]
+ 008b84d8 ["CALL", null, ["ram:48d058:8"]]
- 008b77d8 ["INT_ADD", "register:40f0:8", ["const:8b77d8:8", "const:4:8"]]
- 008b77d8 ["CALL", null, ["callee:008b7a60:8"]]
+ 008b8784 ["INT_ADD", "register:40f0:8", ["const:8b8784:8", "const:4:8"]]
+ 008b8784 ["CALL", null, ["callee:008b7a60:8"]]
- 008b78cc ["INT_ADD", "register:40f0:8", ["const:8b78cc:8", "const:4:8"]]
- 008b78cc ["CALL", null, ["callee:00470ba0:8"]]
+ 008b8878 ["INT_ADD", "register:40f0:8", ["const:8b8878:8", "const:4:8"]]
+ 008b8878 ["CALL", null, ["callee:00470ba0:8"]]
~~~


<a id="compare-a2ee0e1c49de7e9c8784b8761cee1d53"></a>

### [`008b7930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7930.md) → [`008b88dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b88dc.md) FUN_008b88dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 20件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) [`006b2490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2490.md) · 呼出先 0件 
- 新版 呼出元 20件 [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`0061343c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00613/0061343c.md) [`0061491c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00614/0061491c.md) [`006b2840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2840.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b7978",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b891c"
      ]
    ]
  ],
  "added": [
    [
      "008b8924",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b891c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b7958 ["INT_EQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
- 008b7958 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 008b8904 ["INT_EQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
+ 008b8904 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 008b7964 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
+ 008b8910 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
- 008b796c ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 008b796c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 008b8918 ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 008b8918 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-bc174a2762f8c52b45a4c5f38f31f3ab"></a>

### [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) → [`008b894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b894c.md) FUN_008b894c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 27件 [`006583e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006583e4.md) [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) [`0068bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bb28.md) [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) · 呼出先 2件 [`008b7ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7ca4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 27件 [`00658794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658794.md) [`0065a28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065a/0065a28c.md) [`0065c21c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065c/0065c21c.md) [`0068bed8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068b/0068bed8.md) [`0069722c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/0069722c.md) · 呼出先 2件 [`008b8c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8c50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 52.63% / 新版 52.63%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b896c",
      "incomplete_value": true,
      "site": "008b8970",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:30:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b79c0",
      "incomplete_value": true,
      "site": "008b79c4",
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
            "const:4:8"
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
      "unmatched:008b79a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b79a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b79b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b8950",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008b8954",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008b8964",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b79c4 ["INT_ADD", "register:40f0:8", ["const:8b79c4:8", "const:4:8"]]
- 008b79c4 ["CALL", null, ["callee:008b8c50:8"]]
+ 008b8970 ["INT_ADD", "register:40f0:8", ["const:8b8970:8", "const:4:8"]]
+ 008b8970 ["CALL", null, ["callee:008b8c50:8"]]
- 008b79a0 ["INT_SUB", "register:8:8", ["register:8:8", "const:30:8"]]
- 008b79a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008b79a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008b79a4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008b79a4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8271e51da1423151bc9f40f17a6221b5"></a>

### [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) → [`008b8998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8998.md) FUN_008b8998

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 14件 [`0067e838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e838.md) [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 1件 [`00869acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869acc.md)
- 新版 呼出元 14件 [`0067ebe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067ebe8.md) [`006b3c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3c14.md) [`006b3fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3fac.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 1件 [`0086aa78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aa78.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b7a04 ["INT_ADD", "register:40f0:8", ["const:8b7a04:8", "const:4:8"]]
- 008b7a04 ["CALL", null, ["callee:0086aa78:8"]]
+ 008b89b0 ["INT_ADD", "register:40f0:8", ["const:8b89b0:8", "const:4:8"]]
+ 008b89b0 ["CALL", null, ["callee:0086aa78:8"]]
~~~


<a id="compare-0755b30c2750a41dcc714ecffed16b35"></a>

### [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) → [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) FUN_008b89cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 186件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`005c7260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7260.md) [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) [`005c8800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8800.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 0件 
- 新版 呼出元 186件 [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) [`005c7610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c7/005c7610.md) [`005c80f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c80f0.md) [`005c8bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c8bb0.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b7a54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b8a0c"
      ]
    ]
  ],
  "added": [
    [
      "008b8a00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b8a0c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b7a24 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 008b7a24 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008b89d0 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 008b89d0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 008b7a48 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 008b89f4 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 008b7a54 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008b7a54 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 008b7a54 ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
~~~


<a id="compare-83f45c8f75e54cef45d3b0bc66a51ddb"></a>

### [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) → [`008b8a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a1c.md) FUN_008b8a1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`008b6930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6930.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) [`008b7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7424.md) [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) · 呼出先 3件 [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`008b78dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b78dc.md) [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md) [`008b83d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b83d0.md) [`008b8a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a1c.md) · 呼出先 3件 [`008b8a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a1c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.51% / 新版 74.51%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b8a8c",
      "incomplete_value": true,
      "site": "008b8a98",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:008b7a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b7a94",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b7aa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b8ab8"
      ]
    ]
  ],
  "added": [
    [
      "008b8a30",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008b8a40",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "008b8a4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008b8ab8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b7aec ["INT_ADD", "register:40f0:8", ["const:8b7aec:8", "const:4:8"]]
- 008b7aec ["CALL", null, ["local:b0:8"]]
+ 008b8a98 ["INT_ADD", "register:40f0:8", ["const:8b8a98:8", "const:4:8"]]
+ 008b8a98 ["CALL", null, ["local:b0:8"]]
- 008b7a84 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008b7a84 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008b7a84 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 008b7a84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008b7a88 ["COPY", "tmp:0:8", ["const:10:8"]]
- 008b7a88 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 008b7a88 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 008b7a88 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-04b807c25a5385487ee76c2189a4ab32"></a>

### [`008b7b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7b3c.md) → [`008b8ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8ae8.md) FUN_008b8ae8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008b6930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6930.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008b78dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b78dc.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 84.27% / 新版 84.27%

優先判定に残った影響 `unresolved_call_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b7bb8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:008b7c0c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:008b7c34",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008b8b64",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "008b8bb8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "008b8be0",
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
- 008b7b60 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 008b8b0c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 008b7b80 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 008b8b2c ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
- 008b7b8c ["BRANCH", null, ["local:b13:8"]]
+ 008b8b38 ["BRANCH", null, ["local:b14:8"]]
~~~


<a id="compare-fdce964b9d6978e134753183dd4373e8"></a>

### [`008b7d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7d78.md) → [`008b8d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8d24.md) _INIT_169

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.27% / 新版 76.27%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b8e7c",
      "incomplete_value": true,
      "site": "008b8e84",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b7ef0",
      "incomplete_value": true,
      "site": "008b7f00",
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
            "const:8:8"
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
    "new": null,
    "old": {
      "definition_site": "008b7ef4",
      "incomplete_value": true,
      "site": "008b7f00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:40:8"
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
      "unmatched:008b7da8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b7db4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008b7dbc",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b8d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008b8d60",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008b8d68",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b7ed8 ["INT_ADD", "register:40f0:8", ["const:8b7ed8:8", "const:4:8"]]
- 008b7ed8 ["CALL", null, ["callee:0043bb58:8"]]
+ 008b8e84 ["INT_ADD", "register:40f0:8", ["const:8b8e84:8", "const:4:8"]]
+ 008b8e84 ["CALL", null, ["callee:0043bb58:8"]]
- 008b7f00 ["INT_ADD", "register:40f0:8", ["const:8b7f00:8", "const:4:8"]]
- 008b7f00 ["CALL", null, ["callee:0043bb58:8"]]
+ 008b8eac ["INT_ADD", "register:40f0:8", ["const:8b8eac:8", "const:4:8"]]
+ 008b8eac ["CALL", null, ["callee:0043bb58:8"]]
- 008b7f14 ["INT_ADD", "register:40f0:8", ["const:8b7f14:8", "const:4:8"]]
- 008b7f14 ["CALL", null, ["callee:0043bb58:8"]]
+ 008b8ec0 ["INT_ADD", "register:40f0:8", ["const:8b8ec0:8", "const:4:8"]]
+ 008b8ec0 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-6de0142c26baac93a4e788ab9444d64f"></a>

### [`008b8108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b8108.md) → [`008b90b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b90b4.md) FUN_008b90b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) · 呼出先 10件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`008bbb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbb1c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`008b9358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b9358.md) · 呼出先 10件 [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048aea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea0.md) [`008bcac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcac8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.00% / 新版 65.00%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b81d8",
      "incomplete_value": false,
      "site": "008b81f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca5000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b81dc",
      "incomplete_value": true,
      "site": "008b81f8",
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
                "const:c9a000:8"
              ],
              [
                "leaf",
                "const:d70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b91f8",
      "incomplete_value": false,
      "site": "008b91fc",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b8118",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b811c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b8120",
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
      "008b90c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008b90c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008b90cc",
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
- 008b81f8 ["INT_ADD", "register:40f0:8", ["const:8b81f8:8", "const:4:8"]]
- 008b81f8 ["CALL", null, ["callee:0047ec3c:8"]]
+ 008b91a4 ["INT_ADD", "register:40f0:8", ["const:8b91a4:8", "const:4:8"]]
+ 008b91a4 ["CALL", null, ["callee:0047ec3c:8"]]
- 008b8250 ["INT_ADD", "register:40f0:8", ["const:8b8250:8", "const:4:8"]]
- 008b8250 ["CALL", null, ["callee:00c54d90:8"]]
+ 008b91fc ["INT_ADD", "register:40f0:8", ["const:8b91fc:8", "const:4:8"]]
+ 008b91fc ["CALL", null, ["callee:00c54d90:8"]]
- 008b8118 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 008b8118 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 008b8118 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 008b8118 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-3f3c1a176e5c501b512396562163ea19"></a>

### [`008b835c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b835c.md) → [`008b9308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b9308.md) FUN_008b9308

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b8378 ["INT_ADD", "register:40f0:8", ["const:8b8378:8", "const:4:8"]]
- 008b8378 ["CALL", null, ["callee:00c54d90:8"]]
+ 008b9324 ["INT_ADD", "register:40f0:8", ["const:8b9324:8", "const:4:8"]]
+ 008b9324 ["CALL", null, ["callee:00c54d90:8"]]
- 008b8398 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b8398 ["INT_ADD", "register:40f0:8", ["const:8b8398:8", "const:4:8"]]
- 008b8398 ["CALLIND", null, ["register:0:8"]]
+ 008b9344 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b9344 ["INT_ADD", "register:40f0:8", ["const:8b9344:8", "const:4:8"]]
+ 008b9344 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8154a2e6f426b23091ef90e24610d26c"></a>

### [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) → [`008b9358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b9358.md) FUN_008b9358

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md) · 呼出先 20件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md)
- 新版 呼出元 3件 [`008bb86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bb86c.md) [`008bbccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbccc.md) [`008bc0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc0f0.md) · 呼出先 20件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.74% / 新版 86.74%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 3件, `unresolved_branch_alignment` 24件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008b8430",
      "incomplete_value": true,
      "site": "008b8438",
      "value": [
        "live",
        "register:4030:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b9770",
      "incomplete_value": true,
      "site": "008b9778",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:6:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 12,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b997c",
      "incomplete_value": true,
      "site": "008b9988",
      "value": [
        "live",
        "register:40d0:8"
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b83e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b842c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b84d0",
      "READ",
      [
        "storage",
        "002c2ec0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b9390",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008b93d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "008b947c",
      "READ",
      [
        "storage",
        "002c2f10",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b8438 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b8438 ["INT_ADD", "register:40f0:8", ["const:8b8438:8", "const:4:8"]]
- 008b8438 ["CALLIND", null, ["register:0:8"]]
+ 008b93e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b93e4 ["INT_ADD", "register:40f0:8", ["const:8b93e4:8", "const:4:8"]]
+ 008b93e4 ["CALLIND", null, ["register:0:8"]]
- 008b87cc ["INT_ADD", "register:40f0:8", ["const:8b87cc:8", "const:4:8"]]
- 008b87cc ["CALL", null, ["callee:00c59070:8"]]
+ 008b9778 ["INT_ADD", "register:40f0:8", ["const:8b9778:8", "const:4:8"]]
+ 008b9778 ["CALL", null, ["callee:00c59070:8"]]
- 008b89dc ["INT_ADD", "register:40f0:8", ["const:8b89dc:8", "const:4:8"]]
- 008b89dc ["CALL", null, ["callee:00c58fe0:8"]]
+ 008b9988 ["INT_ADD", "register:40f0:8", ["const:8b9988:8", "const:4:8"]]
+ 008b9988 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-33c8c8b7dc51eeec1b904f1dbd443b52"></a>

### [`008b9138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9138.md) → [`008ba0e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba0e4.md) FUN_008ba0e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b9178",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ba114"
      ]
    ]
  ],
  "added": [
    [
      "008ba124",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ba114"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b914c ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 008b914c ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 008ba0f8 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 008ba0f8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 008b9164 ["BRANCH", null, ["local:b9:8"]]
+ 008ba110 ["BRANCH", null, ["local:b8:8"]]
- 008b9170 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
+ 008ba11c ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-bdf0473ae824998f493268a853351247"></a>

### [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) → [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) FUN_008ba17c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 343件 [`005d9cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9cd4.md) [`005d9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f8c.md) [`005db00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db00c.md) [`005db0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db0b4.md) [`005db834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db834.md) · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 343件 [`005da084`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da084.md) [`005da33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da33c.md) [`005db3bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db3bc.md) [`005db464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db464.md) [`005dbbe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbbe4.md) · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.14% / 新版 77.14%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008b91fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b9204",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008b9208",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ba1f0"
      ]
    ]
  ],
  "added": [
    [
      "008ba1a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008ba1b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008ba1b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ba1f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b91fc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008b91fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 008b9200 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:50:8"]]
- 008b9200 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 008b9204 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 008b9204 ["COPY", "tmp:1:4", ["register:4048:4"]]
- 008b9204 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:8:8"]]
- 008b9204 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:4"]]
~~~


<a id="compare-dd135c7aa076adfbaed6aa55cb2c04e9"></a>

### [`008b9864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9864.md) → [`008ba810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba810.md) FUN_008ba810

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 11件 [`00695564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695564.md) [`00696768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696768.md) [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) [`006992d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992d4.md) [`006af7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af7a0.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 11件 [`00695914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00695/00695914.md) [`00696b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696b18.md) [`006983dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/006983dc.md) [`00699684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699684.md) [`006afb50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afb50.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "008ba83c",
      "incomplete_value": true,
      "site": "008ba848",
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
      "definition_site": "008b9890",
      "incomplete_value": true,
      "site": "008b989c",
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
      "008ba838",
      "READ",
      [
        "storage",
        "00c9b578",
        null,
        "pointer"
      ]
    ],
    [
      "008ba83c",
      "DATA",
      [
        "storage",
        "00ca4554",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ba838",
      "READ",
      [
        "storage",
        "00c9c548",
        null,
        "pointer"
      ]
    ],
    [
      "008ba83c",
      "DATA",
      [
        "storage",
        "00ca5524",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b9880 ["INT_ADD", "register:40f0:8", ["const:8b9880:8", "const:4:8"]]
- 008b9880 ["CALL", null, ["callee:008524fc:8"]]
+ 008ba82c ["INT_ADD", "register:40f0:8", ["const:8ba82c:8", "const:4:8"]]
+ 008ba82c ["CALL", null, ["callee:008524fc:8"]]
- 008b9884 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 008ba830 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 008b988c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:578:8"]]
- 008b988c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 008ba838 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:548:8"]]
+ 008ba838 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fa2d0fbf119d8cc92c5a4f06f24fe1ee"></a>

### [`008b98b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b8.md) → [`008ba864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba864.md) FUN_008ba864

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008bb594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb594.md) · 呼出先 12件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md)
- 新版 呼出元 1件 [`008bc540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc540.md) · 呼出先 12件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085c2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2e4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.35% / 新版 99.35%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008bab10",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b9b64",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008bab68",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b9bbc",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "008bab10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008bab68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008bab10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008bab68",
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
- 008b9b64 ["INT_ADD", "register:40f0:8", ["const:8b9b64:8", "const:4:8"]]
- 008b9b64 ["CALL", null, ["ram:47ad34:8"]]
+ 008bab10 ["INT_ADD", "register:40f0:8", ["const:8bab10:8", "const:4:8"]]
+ 008bab10 ["CALL", null, ["ram:47b054:8"]]
- 008b9bbc ["INT_ADD", "register:40f0:8", ["const:8b9bbc:8", "const:4:8"]]
- 008b9bbc ["CALL", null, ["ram:47ad34:8"]]
+ 008bab68 ["INT_ADD", "register:40f0:8", ["const:8bab68:8", "const:4:8"]]
+ 008bab68 ["CALL", null, ["ram:47b054:8"]]
- 008b993c ["INT_ADD", "register:40f0:8", ["const:8b993c:8", "const:4:8"]]
- 008b993c ["CALL", null, ["callee:008524fc:8"]]
+ 008ba8e8 ["INT_ADD", "register:40f0:8", ["const:8ba8e8:8", "const:4:8"]]
+ 008ba8e8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-75454af7c723385c0c428e900509d6a5"></a>

### [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) → [`008bbccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbccc.md) FUN_008bbccc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 81件 [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) [`005db4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db4c8.md) [`005db900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db900.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) [`008bc568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc568.md)
- 新版 呼出元 81件 [`005d9374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9374.md) [`005db878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db878.md) [`005dbcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbcb0.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b9358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b9358.md) [`008bbc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbc90.md) [`008bd514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd514.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.80% / 新版 88.80%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 10件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008bbeb4",
      "incomplete_value": true,
      "site": "008bbeb4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008baf60",
      "incomplete_value": true,
      "site": "008baf60",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008bae10",
      "incomplete_value": true,
      "site": "008bae30",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008bae14",
      "incomplete_value": false,
      "site": "008bae30",
      "value": [
        "leaf",
        "const:1:8"
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
      "unmatched:008bae3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008bae4c"
      ]
    ],
    [
      "unmatched:008bae40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008bae60"
      ]
    ],
    [
      "unmatched:008bae60",
      "READ",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008bbde8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bbdf8"
      ]
    ],
    [
      "008bbdec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bbe0c"
      ]
    ],
    [
      "008bbe0c",
      "READ",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008bae30 ["INT_ADD", "register:40f0:8", ["const:8bae30:8", "const:4:8"]]
- 008bae30 ["CALL", null, ["callee:008b9358:8"]]
+ 008bbddc ["INT_ADD", "register:40f0:8", ["const:8bbddc:8", "const:4:8"]]
+ 008bbddc ["CALL", null, ["callee:008b9358:8"]]
- 008baf18 ["INT_ADD", "register:40f0:8", ["const:8baf18:8", "const:4:8"]]
- 008baf18 ["CALL", null, ["callee:00c58f30:8"]]
+ 008bbec4 ["INT_ADD", "register:40f0:8", ["const:8bbec4:8", "const:4:8"]]
+ 008bbec4 ["CALL", null, ["callee:00c58f30:8"]]
- 008baf60 ["INT_EQUAL", "tmp:0:1", ["register:40c8:8", "const:0:8"]]
- 008baf60 ["CBRANCH", null, ["local:b99:8", "tmp:0:1"]]
+ 008bbeb4 ["INT_EQUAL", "tmp:0:1", ["register:40d8:8", "const:0:8"]]
+ 008bbeb4 ["CBRANCH", null, ["local:b87:8", "tmp:0:1"]]
~~~


<a id="compare-5a548dad30ceb827def5e495f70491ae"></a>

### [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md) → [`008bc0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc0f0.md) FUN_008bc0f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 45件 [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) [`005db900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db900.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`00616284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616284.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) [`008bc568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc568.md)
- 新版 呼出元 45件 [`005d9374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9374.md) [`005dbcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbcb0.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`00616634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616634.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b9358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b9358.md) [`008bbc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbc90.md) [`008bd514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd514.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.00% / 新版 72.00%

優先判定に残った影響 `call_argument_candidate` 14件, `store_condition` 3件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008bb234",
      "incomplete_value": true,
      "site": "008bb254",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008bb238",
      "incomplete_value": false,
      "site": "008bb254",
      "value": [
        "leaf",
        "const:2:8"
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008bb23c",
      "incomplete_value": true,
      "site": "008bb254",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 4,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008bb148",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008bb14c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008bb150",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008bc0f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008bc0f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008bc0fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008bb254 ["INT_ADD", "register:40f0:8", ["const:8bb254:8", "const:4:8"]]
- 008bb254 ["CALL", null, ["callee:008b9358:8"]]
+ 008bc200 ["INT_ADD", "register:40f0:8", ["const:8bc200:8", "const:4:8"]]
+ 008bc200 ["CALL", null, ["callee:008b9358:8"]]
- 008bb394 ["INT_ADD", "register:40f0:8", ["const:8bb394:8", "const:4:8"]]
- 008bb394 ["CALL", null, ["callee:00c58f30:8"]]
+ 008bc340 ["INT_ADD", "register:40f0:8", ["const:8bc340:8", "const:4:8"]]
+ 008bc340 ["CALL", null, ["callee:00c58f30:8"]]
- 008bb3e0 ["INT_ADD", "register:40f0:8", ["const:8bb3e0:8", "const:4:8"]]
- 008bb3e0 ["CALL", null, ["callee:00c590a0:8"]]
+ 008bc38c ["INT_ADD", "register:40f0:8", ["const:8bc38c:8", "const:4:8"]]
+ 008bc38c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-7d4831d77ad9854e5ca42b988198881e"></a>

### [`008bb584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb584.md) → [`008bc530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc530.md) FUN_008bc530

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 15件 [`005c7260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7260.md) [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 0件 
- 新版 呼出元 15件 [`005c7610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c7/005c7610.md) [`006b3fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3fac.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`006e6178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e6/006e6178.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-1c6f0a40cbadf8067f3ff28fbbce2efb"></a>

### [`008bb594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb594.md) → [`008bc540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc540.md) FUN_008bc540

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00869b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869b94.md) [`008b98b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b8.md) [`008bc57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc57c.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 9件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0086ab40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ab40.md) [`008ba864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba864.md) [`008bd528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd528.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 3件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008bb664",
      "incomplete_value": true,
      "site": "008bb678",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "008bb668",
      "incomplete_value": true,
      "site": "008bb678",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008bb66c",
      "incomplete_value": true,
      "site": "008bb678",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:008bb5d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bc6c4"
      ]
    ],
    [
      "unmatched:008bb624",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bc968"
      ]
    ],
    [
      "unmatched:008bb68c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f50"
      ]
    ]
  ],
  "added": [
    [
      "008bc580",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bc6c4"
      ]
    ],
    [
      "008bc5d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bc968"
      ]
    ],
    [
      "008bc63c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008bc59c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008bb678 ["INT_ADD", "register:40f0:8", ["const:8bb678:8", "const:4:8"]]
- 008bb678 ["CALL", null, ["callee:00c590a0:8"]]
+ 008bc624 ["INT_ADD", "register:40f0:8", ["const:8bc624:8", "const:4:8"]]
+ 008bc624 ["CALL", null, ["callee:00c590a0:8"]]
- 008bb6c0 ["INT_ADD", "register:40f0:8", ["const:8bb6c0:8", "const:4:8"]]
- 008bb6c0 ["CALL", null, ["callee:008ba864:8"]]
+ 008bc66c ["INT_ADD", "register:40f0:8", ["const:8bc66c:8", "const:4:8"]]
+ 008bc66c ["CALL", null, ["callee:008ba864:8"]]
- 008bb8ec ["INT_ADD", "register:40f0:8", ["const:8bb8ec:8", "const:4:8"]]
- 008bb8ec ["CALL", null, ["callee:00c590a0:8"]]
+ 008bc898 ["INT_ADD", "register:40f0:8", ["const:8bc898:8", "const:4:8"]]
+ 008bc898 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-265b8a52d300c249e48ec848475d1ddc"></a>

### [`008bbab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbab8.md) → [`008bca64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bca64.md) FUN_008bca64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008acdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acdac.md) · 呼出先 2件 [`00869b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869b94.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008add58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008add58.md) · 呼出先 2件 [`0086ab40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ab40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "008bbb00",
      "incomplete_value": true,
      "site": "008bbb04",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 008bbb04 ["INT_ADD", "register:40f0:8", ["const:8bbb04:8", "const:4:8"]]
- 008bbb04 ["CALL", null, ["callee:00c58f50:8"]]
+ 008bcab0 ["INT_ADD", "register:40f0:8", ["const:8bcab0:8", "const:4:8"]]
+ 008bcab0 ["CALL", null, ["callee:00c58f50:8"]]
- 008bbad0 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 008bca7c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 008bbae8 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 008bca94 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
~~~


