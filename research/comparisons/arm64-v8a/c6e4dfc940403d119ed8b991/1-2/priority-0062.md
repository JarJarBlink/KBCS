# v16.0.2 → v16.0.3 · 最優先の変更候補 (62)

[一覧の目次](README.md)

<a id="compare-4b383f7d69a32b5846206aa801875c6c"></a>

### [`008d5cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5cd0.md) → [`008d6c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d6c7c.md) FUN_008d6c7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 1件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md) [`00480aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480aa4.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 94.62% / 新版 94.62%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d6de8",
      "incomplete_value": false,
      "site": "008d6df0",
      "value": [
        "leaf",
        "const:28:8"
      ]
    },
    "old": null,
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d5e80",
      "incomplete_value": true,
      "site": "008d5e88",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 18,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d5ea4"
      ],
      [
        "FALL_THROUGH",
        "008d6e50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d6e50",
      "incomplete_value": true,
      "site": "008d6e60",
      "value": [
        "BOOL_OR",
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
          ],
          [
            "INT_NOTEQUAL",
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
      "definition_site": "008d5ea4",
      "incomplete_value": true,
      "site": "008d5eb4",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "live",
            "register:101:1"
          ],
          [
            "INT_NOTEQUAL",
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
    "ordinal": 39,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d5e04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6dc4"
      ]
    ],
    [
      "unmatched:008d5e24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6db8"
      ]
    ],
    [
      "unmatched:008d5e34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6dc4"
      ]
    ]
  ],
  "added": [
    [
      "008d6db0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6dc4"
      ]
    ],
    [
      "008d6dd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6db8"
      ]
    ],
    [
      "008d6de0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6dc4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d5e44 ["INT_ADD", "register:40f0:8", ["const:8d5e44:8", "const:4:8"]]
- 008d5e44 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d6df0 ["INT_ADD", "register:40f0:8", ["const:8d6df0:8", "const:4:8"]]
+ 008d6df0 ["CALL", null, ["callee:00c58f30:8"]]
- 008d5e88 ["INT_ADD", "register:40f0:8", ["const:8d5e88:8", "const:4:8"]]
- 008d5e88 ["CALL", null, ["callee:00480658:8"]]
+ 008d6e34 ["INT_ADD", "register:40f0:8", ["const:8d6e34:8", "const:4:8"]]
+ 008d6e34 ["CALL", null, ["callee:00480658:8"]]
- 008d5d00 ["INT_ADD", "register:40f0:8", ["const:8d5d00:8", "const:4:8"]]
- 008d5d00 ["CALL", null, ["callee:00480750:8"]]
+ 008d6cac ["INT_ADD", "register:40f0:8", ["const:8d6cac:8", "const:4:8"]]
+ 008d6cac ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-dbf66391b59b261e872c063b4c4b6ec6"></a>

### [`008d5ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5ed8.md) → [`008d6e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d6e84.md) FUN_008d6e84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 85.51% / 新版 85.51%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 6件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "008d6f28",
      "incomplete_value": false,
      "site": "008d6f2c",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
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
      "unmatched:008d5f38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6f04"
      ]
    ],
    [
      "unmatched:008d5f70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6f4c"
      ]
    ],
    [
      "008d6f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6f74"
      ]
    ]
  ],
  "added": [
    [
      "008d6ee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6f04"
      ]
    ],
    [
      "008d6f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6f4c"
      ]
    ],
    [
      "008d6f60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6f74"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d5f30 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d5f30 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 008d5f30 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
+ 008d6edc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d6edc ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 008d6edc ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
- 008d5f34 ["COPY", "register:100:1", ["const:0:1"]]
- 008d5f34 ["COPY", "register:101:1", ["const:0:1"]]
- 008d5f34 ["COPY", "register:102:1", ["const:1:1"]]
- 008d5f34 ["COPY", "register:103:1", ["const:1:1"]]
+ 008d6ee0 ["COPY", "register:100:1", ["const:0:1"]]
+ 008d6ee0 ["COPY", "register:101:1", ["const:0:1"]]
+ 008d6ee0 ["COPY", "register:102:1", ["const:1:1"]]
+ 008d6ee0 ["COPY", "register:103:1", ["const:1:1"]]
- 008d5f38 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d5f38 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 008d5f38 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 008d5f38 ["CBRANCH", null, ["local:b9:8", "tmp:2:1"]]
~~~


<a id="compare-cd2631b8f304c15c4363ed4a75b2dd65"></a>

### [`008d5ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5ff4.md) → [`008d6fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d6fa0.md) FUN_008d6fa0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 2件 [`00a35bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a35bec.md) [`00a38c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38c40.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 2件 [`00a36be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a36/00a36be0.md) [`00a39c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39c34.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d6038 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
+ 008d6fe4 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 008d6060 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d6060 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 008d6060 ["CBRANCH", null, ["local:b11:8", "tmp:1:1"]]
+ 008d700c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d700c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 008d700c ["CBRANCH", null, ["local:b9:8", "tmp:1:1"]]
- 008d6068 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d6068 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 008d6068 ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
+ 008d7014 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d7014 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 008d7014 ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
~~~


<a id="compare-5d0704324a307fa45f9a429859801cf7"></a>

### [`008d615c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d615c.md) → [`008d7108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d7/008d7108.md) FUN_008d7108

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008da7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da7f8.md) [`008daefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008daefc.md) · 呼出先 3件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`008db7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db7a4.md) [`008dbea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008dbea8.md) · 呼出先 3件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 51.71% / 新版 51.71%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 1件, `unresolved_branch_alignment` 43件, `unresolved_call_alignment` 29件, `unresolved_store_alignment` 36件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d7978",
      "incomplete_value": true,
      "site": "008d7978",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d64e4",
      "incomplete_value": true,
      "site": "008d64e4",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d7254",
      "incomplete_value": true,
      "site": "008d7258",
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
                "register:40e8:8"
              ],
              [
                "leaf",
                "const:fffffffffffffff0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d6454",
      "incomplete_value": true,
      "site": "008d645c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d7188",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008d6250"
      ]
    ],
    [
      "unmatched:008d6210",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d71e4"
      ]
    ],
    [
      "unmatched:008d6224",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008d71e8"
      ]
    ]
  ],
  "added": [
    [
      "008d7188",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d71fc"
      ]
    ],
    [
      "008d71bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d71e4"
      ]
    ],
    [
      "008d71d0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008d71e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d62ac ["INT_ADD", "register:40f0:8", ["const:8d62ac:8", "const:4:8"]]
- 008d62ac ["CALL", null, ["callee:00c58f50:8"]]
+ 008d7258 ["INT_ADD", "register:40f0:8", ["const:8d7258:8", "const:4:8"]]
+ 008d7258 ["CALL", null, ["callee:00c58f50:8"]]
- 008d645c ["INT_ADD", "register:40f0:8", ["const:8d645c:8", "const:4:8"]]
- 008d645c ["CALL", null, ["callee:004413ec:8"]]
+ 008d7408 ["INT_ADD", "register:40f0:8", ["const:8d7408:8", "const:4:8"]]
+ 008d7408 ["CALL", null, ["callee:004413ec:8"]]
- 008d64b4 ["INT_ADD", "register:40f0:8", ["const:8d64b4:8", "const:4:8"]]
- 008d64b4 ["CALL", null, ["callee:004413ec:8"]]
+ 008d7538 ["INT_ADD", "register:40f0:8", ["const:8d7538:8", "const:4:8"]]
+ 008d7538 ["CALL", null, ["callee:004413ec:8"]]
~~~


<a id="compare-f482ef8de17e1f47c70b56845da70ee3"></a>

### [`008d6ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d6ce4.md) → [`008d7c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d7/008d7c90.md) FUN_008d7c90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d6cf4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7cb4"
      ]
    ]
  ],
  "added": [
    [
      "008d7ca0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7cb4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d6cf4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 008d6cf4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008d6d00 ["INT_ADD", "register:40f0:8", ["const:8d6d00:8", "const:4:8"]]
- 008d6d00 ["CALL", null, ["callee:00c54d90:8"]]
+ 008d7cac ["INT_ADD", "register:40f0:8", ["const:8d7cac:8", "const:4:8"]]
+ 008d7cac ["CALL", null, ["callee:00c54d90:8"]]
- 008d6d20 ["COPY", "register:0:8", ["register:4040:8"]]
- 008d6d20 ["INT_ADD", "register:40f0:8", ["const:8d6d20:8", "const:4:8"]]
- 008d6d20 ["CALLIND", null, ["register:0:8"]]
+ 008d7ccc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008d7ccc ["INT_ADD", "register:40f0:8", ["const:8d7ccc:8", "const:4:8"]]
+ 008d7ccc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-271f17d2eb8a64ee8648fd5e831ffda0"></a>

### [`008d6d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d6d34.md) → [`008d7ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d7/008d7ce0.md) FUN_008d7ce0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) · 呼出先 19件 [`0044b7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b7e4.md) [`0056192c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/0056192c.md) [`00561b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561b64.md) [`00561d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d2c.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md)
- 新版 呼出元 1件 [`0089e4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089e/0089e4cc.md) · 呼出先 19件 [`0044bb04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044b/0044bb04.md) [`00561c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561c4c.md) [`00561e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561e84.md) [`0056204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/0056204c.md) [`00562094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562094.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.89% / 新版 67.89%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d7f60",
      "incomplete_value": false,
      "site": "008d7f64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d6fb4",
      "incomplete_value": false,
      "site": "008d6fb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:f8:8"
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
      "definition_site": "008d7d34",
      "incomplete_value": false,
      "site": "008d7d3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:644:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d6d88",
      "incomplete_value": false,
      "site": "008d6d90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:579:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d7d64",
      "incomplete_value": true,
      "site": "008d7d6c",
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
                "const:ca8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d6db8",
      "incomplete_value": true,
      "site": "008d6dc0",
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
                "const:cd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d6d38",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d6d3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d6d40",
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
      "008d7ce4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008d7ce8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008d7cec",
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
- 008d6d90 ["INT_ADD", "register:40f0:8", ["const:8d6d90:8", "const:4:8"]]
- 008d6d90 ["CALL", null, ["callee:00c59010:8"]]
+ 008d7d3c ["INT_ADD", "register:40f0:8", ["const:8d7d3c:8", "const:4:8"]]
+ 008d7d3c ["CALL", null, ["callee:00c59010:8"]]
- 008d6dc0 ["INT_ADD", "register:40f0:8", ["const:8d6dc0:8", "const:4:8"]]
- 008d6dc0 ["CALL", null, ["callee:00562094:8"]]
+ 008d7d6c ["INT_ADD", "register:40f0:8", ["const:8d7d6c:8", "const:4:8"]]
+ 008d7d6c ["CALL", null, ["callee:00562094:8"]]
- 008d6ec8 ["INT_ADD", "register:40f0:8", ["const:8d6ec8:8", "const:4:8"]]
- 008d6ec8 ["CALL", null, ["callee:00598168:8"]]
+ 008d7e74 ["INT_ADD", "register:40f0:8", ["const:8d7e74:8", "const:4:8"]]
+ 008d7e74 ["CALL", null, ["callee:00598168:8"]]
~~~


<a id="compare-71261f710c7c4841b12554a19c3133ec"></a>

### [`008d7248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7248.md) → [`008d81f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d81f4.md) FUN_008d81f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.44% / 新版 81.44%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 16件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d859c",
      "incomplete_value": true,
      "site": "008d85a0",
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
      "definition_site": "008d75f0",
      "incomplete_value": true,
      "site": "008d75f4",
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
    "ordinal": 55,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d8598",
      "incomplete_value": true,
      "site": "008d85a4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
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
    "old": {
      "definition_site": "008d75ec",
      "incomplete_value": true,
      "site": "008d75f8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
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
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d85b0",
      "incomplete_value": true,
      "site": "008d85b0",
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
                "const:48:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
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
      "definition_site": "008d7604",
      "incomplete_value": true,
      "site": "008d7604",
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
                "const:48:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 57,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d7248",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d724c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d7250",
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
      "008d81f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d81f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008d81fc",
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
- 008d7280 ["INT_ADD", "register:40f0:8", ["const:8d7280:8", "const:4:8"]]
- 008d7280 ["CALL", null, ["callee:00488180:8"]]
+ 008d822c ["INT_ADD", "register:40f0:8", ["const:8d822c:8", "const:4:8"]]
+ 008d822c ["CALL", null, ["callee:00488180:8"]]
- 008d73a8 ["INT_ADD", "register:40f0:8", ["const:8d73a8:8", "const:4:8"]]
- 008d73a8 ["CALL", null, ["callee:00487c9c:8"]]
+ 008d8354 ["INT_ADD", "register:40f0:8", ["const:8d8354:8", "const:4:8"]]
+ 008d8354 ["CALL", null, ["callee:00487c9c:8"]]
- 008d73f4 ["INT_ADD", "register:40f0:8", ["const:8d73f4:8", "const:4:8"]]
- 008d73f4 ["CALL", null, ["callee:00487c9c:8"]]
+ 008d83a0 ["INT_ADD", "register:40f0:8", ["const:8d83a0:8", "const:4:8"]]
+ 008d83a0 ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-0e7ace3fdc6f75bcdaaa245adc0f6af3"></a>

### [`008d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d773c.md) → [`008d86e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d86e8.md) FUN_008d86e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007c7f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7f48.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 6件 [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 6件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007c8eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8eac.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) · 呼出先 6件 [`008d9238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9238.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.71% / 新版 84.71%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 4件, `unresolved_branch_alignment` 9件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d88c4",
      "incomplete_value": true,
      "site": "008d88c8",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d782c"
      ],
      [
        "FALL_THROUGH",
        "008d87d8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d87d4",
      "incomplete_value": true,
      "site": "008d87f4",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d7828",
      "incomplete_value": true,
      "site": "008d7848",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:1555000000000000:8"
              ]
            ]
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d782c"
      ],
      [
        "FALL_THROUGH",
        "008d87d8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d87d4",
      "incomplete_value": true,
      "site": "008d87f8",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d7828",
      "incomplete_value": true,
      "site": "008d784c",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:1555000000000000:8"
              ]
            ]
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d7740",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d7744",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d7748",
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
      "008d86ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d86f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008d86f4",
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
- 008d791c ["INT_ADD", "register:40f0:8", ["const:8d791c:8", "const:4:8"]]
- 008d791c ["CALL", null, ["callee:00c58f50:8"]]
+ 008d88c8 ["INT_ADD", "register:40f0:8", ["const:8d88c8:8", "const:4:8"]]
+ 008d88c8 ["CALL", null, ["callee:00c58f50:8"]]
- 008d773c ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 008d7740 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d7740 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d7740 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008d7740 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1ef754efa2bdc7bdc7f999fc06eb4376"></a>

### [`008d79e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d79e4.md) → [`008d8990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d8990.md) FUN_008d8990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008d9a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9a94.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00878448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878448.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 1件 [`008daa40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008daa40.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008793f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/008793f4.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.93% / 新版 77.93%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d8b38",
      "incomplete_value": false,
      "site": "008d8b40",
      "value": [
        "leaf",
        "const:50:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d7df8",
      "incomplete_value": true,
      "site": "008d7e00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d7dfc",
      "incomplete_value": false,
      "site": "008d7e00",
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
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d79fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d7a04",
      "WRITE",
      [
        "storage",
        "Stack[-0x10c]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d7a20",
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
      "008d89a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d89b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10c]",
        null,
        null
      ]
    ],
    [
      "008d89cc",
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
- 008d7b94 ["INT_ADD", "register:40f0:8", ["const:8d7b94:8", "const:4:8"]]
- 008d7b94 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d8b40 ["INT_ADD", "register:40f0:8", ["const:8d8b40:8", "const:4:8"]]
+ 008d8b40 ["CALL", null, ["callee:00c58f30:8"]]
- 008d7e00 ["INT_ADD", "register:40f0:8", ["const:8d7e00:8", "const:4:8"]]
- 008d7e00 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 008d8dac ["INT_ADD", "register:40f0:8", ["const:8d8dac:8", "const:4:8"]]
+ 008d8dac ["CALL", null, ["callee:00c5b8d0:8"]]
- 008d79fc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008d79fc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008d79fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:130:8"]]
- 008d79fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8bde093420c1dc7cd045f80a3e1bcdf6"></a>

### [`008d7f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7f30.md) → [`008d8edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d8edc.md) FUN_008d8edc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008d81a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d81a8.md) · 呼出先 3件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008d9154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9154.md) · 呼出先 3件 [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.05% / 新版 74.05%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d7fa4",
      "incomplete_value": true,
      "site": "008d7fa8",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "008d8018",
      "incomplete_value": false,
      "site": "008d801c",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d8014",
      "incomplete_value": true,
      "site": "008d801c",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d7f4c",
      "DATA",
      [
        "storage",
        "00c84688",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d7f60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d8f28"
      ]
    ],
    [
      "unmatched:008d7f90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d8f58"
      ]
    ]
  ],
  "added": [
    [
      "008d8ef8",
      "DATA",
      [
        "storage",
        "00c85658",
        null,
        "undefined *"
      ]
    ],
    [
      "008d8f0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d8f28"
      ]
    ],
    [
      "008d8f3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d8f58"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d7fa8 ["INT_ADD", "register:40f0:8", ["const:8d7fa8:8", "const:4:8"]]
- 008d7fa8 ["CALL", null, ["callee:00c58f20:8"]]
+ 008d8f54 ["INT_ADD", "register:40f0:8", ["const:8d8f54:8", "const:4:8"]]
+ 008d8f54 ["CALL", null, ["callee:00c58f20:8"]]
- 008d801c ["INT_ADD", "register:40f0:8", ["const:8d801c:8", "const:4:8"]]
- 008d801c ["CALL", null, ["callee:00c54d90:8"]]
+ 008d8fc8 ["INT_ADD", "register:40f0:8", ["const:8d8fc8:8", "const:4:8"]]
+ 008d8fc8 ["CALL", null, ["callee:00c54d90:8"]]
- 008d804c ["INT_ADD", "register:40f0:8", ["const:8d804c:8", "const:4:8"]]
- 008d804c ["CALL", null, ["callee:00c54d90:8"]]
+ 008d8ff8 ["INT_ADD", "register:40f0:8", ["const:8d8ff8:8", "const:4:8"]]
+ 008d8ff8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-88137aeabce8c662d92748d7203a31f8"></a>

### [`008d81cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d81cc.md) → [`008d9178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9178.md) FUN_008d9178

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d81f0",
      "incomplete_value": true,
      "site": "008d81f8",
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
            "const:8:8"
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
      "unmatched:008d81e8",
      "DATA",
      [
        "storage",
        "00c846d8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008d81ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d91c4"
      ]
    ],
    [
      "unmatched:008d820c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008d9194",
      "DATA",
      [
        "storage",
        "00c856a8",
        null,
        "pointer"
      ]
    ],
    [
      "008d9198",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d91c4"
      ]
    ],
    [
      "008d91b8",
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
- 008d81f8 ["INT_ADD", "register:40f0:8", ["const:8d81f8:8", "const:4:8"]]
- 008d81f8 ["CALL", null, ["callee:00c54d90:8"]]
+ 008d91a4 ["INT_ADD", "register:40f0:8", ["const:8d91a4:8", "const:4:8"]]
+ 008d91a4 ["CALL", null, ["callee:00c54d90:8"]]
- 008d81e0 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d918c ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d81e4 ["COPY", "tmp:0:8", ["const:6d8:8"]]
- 008d81e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d81e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d81e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-77a5983013309b9205bf4f9debcf5dc7"></a>

### [`008d8228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8228.md) → [`008d91d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d91d4.md) FUN_008d91d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 64.00% / 新版 64.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d91fc",
      "incomplete_value": false,
      "site": "008d9200",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d91f8",
      "incomplete_value": true,
      "site": "008d9200",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:008d8228",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d822c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8244",
      "DATA",
      [
        "storage",
        "00c846d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d91d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008d91d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d91f0",
      "DATA",
      [
        "storage",
        "00c856a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8254 ["INT_ADD", "register:40f0:8", ["const:8d8254:8", "const:4:8"]]
- 008d8254 ["CALL", null, ["callee:00c54d90:8"]]
+ 008d9200 ["INT_ADD", "register:40f0:8", ["const:8d9200:8", "const:4:8"]]
+ 008d9200 ["CALL", null, ["callee:00c54d90:8"]]
- 008d8228 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d8228 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d8228 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008d8228 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008d822c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008d822c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008d822c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008d822c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-13714249d1f9c9f3ea26d8e60f489dd1"></a>

### [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) → [`008d9238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9238.md) FUN_008d9238

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) [`008d4db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d4/008d4db0.md) [`008d7248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7248.md) [`008d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d773c.md) [`008d82a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d82a0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 7件 [`008d3b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d3b38.md) [`008d5d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d5/008d5d5c.md) [`008d81f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d81f4.md) [`008d86e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d86e8.md) [`008d924c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d924c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d9244",
      "incomplete_value": false,
      "site": "008d9248",
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
      "definition_site": "008d8298",
      "incomplete_value": false,
      "site": "008d829c",
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
      "008d9244",
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
      "008d9244",
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
- 008d829c ["INT_ADD", "register:40f0:8", ["const:8d829c:8", "const:4:8"]]
- 008d829c ["CALL", null, ["callee:0043bad8:8"]]
+ 008d9248 ["INT_ADD", "register:40f0:8", ["const:8d9248:8", "const:4:8"]]
+ 008d9248 ["CALL", null, ["callee:0043bad8:8"]]
- 008d8294 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008d9240 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008d8298 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008d8298 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008d8298 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008d8298 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008d9244 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008d9244 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008d9244 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008d9244 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8f6234f5dba361a8de48f712ca359071"></a>

### [`008d8408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8408.md) → [`008d93b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d93b4.md) FUN_008d93b4

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
      "definition_site": "008d93d8",
      "incomplete_value": false,
      "site": "008d93d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:6c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d842c",
      "incomplete_value": false,
      "site": "008d842c",
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
            "const:6f8:8"
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
      "008d93d8",
      "DATA",
      [
        "storage",
        "00c846f8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d93d8",
      "DATA",
      [
        "storage",
        "00c856c8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d841c ["INT_ADD", "register:40f0:8", ["const:8d841c:8", "const:4:8"]]
- 008d841c ["CALL", null, ["callee:00c58f30:8"]]
+ 008d93c8 ["INT_ADD", "register:40f0:8", ["const:8d93c8:8", "const:4:8"]]
+ 008d93c8 ["CALL", null, ["callee:00c58f30:8"]]
- 008d8424 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d93d0 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8428 ["COPY", "tmp:0:8", ["const:6f8:8"]]
- 008d8428 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8428 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8428 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d93d4 ["COPY", "tmp:0:8", ["const:6c8:8"]]
+ 008d93d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d93d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d93d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-100dd56471f8f4a10ab80ec4b7e8964a"></a>

### [`008d843c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d843c.md) → [`008d93e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d93e8.md) FUN_008d93e8

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
      "definition_site": "008d93f4",
      "incomplete_value": false,
      "site": "008d93f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:6c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8448",
      "incomplete_value": false,
      "site": "008d8448",
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
            "const:6f8:8"
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
      "008d93f4",
      "DATA",
      [
        "storage",
        "00c846f8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d93f4",
      "DATA",
      [
        "storage",
        "00c856c8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8440 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008d93ec ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d8444 ["COPY", "tmp:0:8", ["const:6f8:8"]]
- 008d8444 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d8444 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d8444 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d93f0 ["COPY", "tmp:0:8", ["const:6c8:8"]]
+ 008d93f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d93f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d93f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-02fce0bf23fb5dbc45318764b743003f"></a>

### [`008d8458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8458.md) → [`008d9404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9404.md) FUN_008d9404

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md) [`008d85c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d85c4.md) [`008d85c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d85c8.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md) [`008d9570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9570.md) [`008d9574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9574.md) [`00acbc38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acb/00acbc38.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9438",
      "incomplete_value": false,
      "site": "008d9438",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d848c",
      "incomplete_value": false,
      "site": "008d848c",
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
            "const:768:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d9438",
      "DATA",
      [
        "storage",
        "00c84768",
        null,
        "undefined *"
      ]
    ],
    [
      "008d9470",
      "READ",
      [
        "storage",
        "00c84788",
        null,
        "pointer"
      ]
    ],
    [
      "008d9470",
      "READ",
      [
        "storage",
        "00c84790",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9438",
      "DATA",
      [
        "storage",
        "00c85738",
        null,
        "undefined *"
      ]
    ],
    [
      "008d9470",
      "READ",
      [
        "storage",
        "00c85758",
        null,
        "pointer"
      ]
    ],
    [
      "008d9470",
      "READ",
      [
        "storage",
        "00c85760",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d847c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d9428 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8480 ["COPY", "tmp:0:8", ["const:768:8"]]
- 008d8480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d942c ["COPY", "tmp:0:8", ["const:738:8"]]
+ 008d942c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d942c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d942c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d849c ["INT_ADD", "register:40f0:8", ["const:8d849c:8", "const:4:8"]]
- 008d849c ["CALL", null, ["callee:00acbc38:8"]]
+ 008d9448 ["INT_ADD", "register:40f0:8", ["const:8d9448:8", "const:4:8"]]
+ 008d9448 ["CALL", null, ["callee:00acbc38:8"]]
~~~


<a id="compare-19316dc69eb1192bcb2e9a3ad698629b"></a>

### [`008d857c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d857c.md) → [`008d9528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9528.md) FUN_008d9528

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
      "definition_site": "008d954c",
      "incomplete_value": false,
      "site": "008d954c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d85a0",
      "incomplete_value": false,
      "site": "008d85a0",
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
            "const:768:8"
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
      "008d954c",
      "DATA",
      [
        "storage",
        "00c84768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d954c",
      "DATA",
      [
        "storage",
        "00c85738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8590 ["INT_ADD", "register:40f0:8", ["const:8d8590:8", "const:4:8"]]
- 008d8590 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d953c ["INT_ADD", "register:40f0:8", ["const:8d953c:8", "const:4:8"]]
+ 008d953c ["CALL", null, ["callee:00c58f30:8"]]
- 008d8598 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d9544 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d859c ["COPY", "tmp:0:8", ["const:768:8"]]
- 008d859c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d859c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d859c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9548 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 008d9548 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9548 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9548 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5621e24b99ef31c8367e38edeb0df99"></a>

### [`008d85b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d85b0.md) → [`008d955c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d955c.md) FUN_008d955c

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
      "definition_site": "008d9568",
      "incomplete_value": false,
      "site": "008d9568",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d85bc",
      "incomplete_value": false,
      "site": "008d85bc",
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
            "const:768:8"
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
      "008d9568",
      "DATA",
      [
        "storage",
        "00c84768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9568",
      "DATA",
      [
        "storage",
        "00c85738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d85b4 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008d9560 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d85b8 ["COPY", "tmp:0:8", ["const:768:8"]]
- 008d85b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d85b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d85b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d9564 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 008d9564 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9564 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9564 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-14ea0a989596d475bf59676bc372025e"></a>

### [`008d85cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d85cc.md) → [`008d9578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9578.md) FUN_008d9578

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md) [`00ac86ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac86ac.md)
- 新版 呼出元 0件  · 呼出先 6件 [`007566ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00756/007566ac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b8998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8998.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md) [`00ac96a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac9/00ac96a0.md)

変更の種類 branch_value, call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 87.69% / 新版 87.69%

優先判定に残った影響 `branch_value` 1件, `call_target` 1件, `store_destination` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d95f8",
      "incomplete_value": false,
      "site": "008d95f8",
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
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d864c",
      "incomplete_value": false,
      "site": "008d864c",
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
            "const:a68:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d95ec",
      "incomplete_value": true,
      "site": "008d95f8",
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
      "definition_site": "008d8640",
      "incomplete_value": true,
      "site": "008d864c",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d95fc",
      "incomplete_value": false,
      "site": "008d95fc",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8650",
      "incomplete_value": false,
      "site": "008d8650",
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
            "const:a78:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d959c",
      "DATA",
      [
        "storage",
        "0044e330",
        null,
        null
      ]
    ],
    [
      "008d95ec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008d95f0",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008d95ec",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008d95f0",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "008d95f8",
      "WRITE",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d864c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 008d864c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 008d95f8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 008d95f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 008d8650 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:a78:8"]]
- 008d8650 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 008d95fc ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:a38:8"]]
+ 008d95fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 008d8660 ["INT_ADD", "register:40f0:8", ["const:8d8660:8", "const:4:8"]]
- 008d8660 ["CALL", null, ["ram:7562fc:8"]]
+ 008d960c ["INT_ADD", "register:40f0:8", ["const:8d960c:8", "const:4:8"]]
+ 008d960c ["CALL", null, ["ram:7566ac:8"]]
~~~


<a id="compare-802c5473fd76ae4401ec0df2670fed35"></a>

### [`008d8710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8710.md) → [`008d96bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d96bc.md) FUN_008d96bc

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
      "definition_site": "008d96e0",
      "incomplete_value": false,
      "site": "008d96e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8734",
      "incomplete_value": false,
      "site": "008d8734",
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
            "const:7f8:8"
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
      "008d96e0",
      "DATA",
      [
        "storage",
        "00c847f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d96e0",
      "DATA",
      [
        "storage",
        "00c857c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8724 ["INT_ADD", "register:40f0:8", ["const:8d8724:8", "const:4:8"]]
- 008d8724 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d96d0 ["INT_ADD", "register:40f0:8", ["const:8d96d0:8", "const:4:8"]]
+ 008d96d0 ["CALL", null, ["callee:00c58f30:8"]]
- 008d872c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d96d8 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8730 ["COPY", "tmp:0:8", ["const:7f8:8"]]
- 008d8730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d96dc ["COPY", "tmp:0:8", ["const:7c8:8"]]
+ 008d96dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d96dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d96dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5692fe72624c37168670925777d47bb8"></a>

### [`008d8744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8744.md) → [`008d96f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d96f0.md) FUN_008d96f0

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
      "definition_site": "008d96fc",
      "incomplete_value": false,
      "site": "008d96fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8750",
      "incomplete_value": false,
      "site": "008d8750",
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
            "const:7f8:8"
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
      "008d96fc",
      "DATA",
      [
        "storage",
        "00c847f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d96fc",
      "DATA",
      [
        "storage",
        "00c857c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8748 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008d96f4 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d874c ["COPY", "tmp:0:8", ["const:7f8:8"]]
- 008d874c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d874c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d874c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d96f8 ["COPY", "tmp:0:8", ["const:7c8:8"]]
+ 008d96f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d96f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d96f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8100b63267472731a9ef7ce113285a8c"></a>

### [`008d8820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8820.md) → [`008d97cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d97cc.md) FUN_008d97cc

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
      "definition_site": "008d97f0",
      "incomplete_value": false,
      "site": "008d97f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8844",
      "incomplete_value": false,
      "site": "008d8844",
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
            "const:878:8"
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
      "008d97f0",
      "DATA",
      [
        "storage",
        "00c84878",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d97f0",
      "DATA",
      [
        "storage",
        "00c85848",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8834 ["INT_ADD", "register:40f0:8", ["const:8d8834:8", "const:4:8"]]
- 008d8834 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d97e0 ["INT_ADD", "register:40f0:8", ["const:8d97e0:8", "const:4:8"]]
+ 008d97e0 ["CALL", null, ["callee:00c58f30:8"]]
- 008d883c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d97e8 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8840 ["COPY", "tmp:0:8", ["const:878:8"]]
- 008d8840 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8840 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8840 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d97ec ["COPY", "tmp:0:8", ["const:848:8"]]
+ 008d97ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d97ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d97ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ccce1158bef2de7686f3097cba2c3b3"></a>

### [`008d8854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8854.md) → [`008d9800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9800.md) FUN_008d9800

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
      "definition_site": "008d980c",
      "incomplete_value": false,
      "site": "008d980c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8860",
      "incomplete_value": false,
      "site": "008d8860",
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
            "const:878:8"
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
      "008d980c",
      "DATA",
      [
        "storage",
        "00c84878",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d980c",
      "DATA",
      [
        "storage",
        "00c85848",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8858 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008d9804 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d885c ["COPY", "tmp:0:8", ["const:878:8"]]
- 008d885c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d885c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d885c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d9808 ["COPY", "tmp:0:8", ["const:848:8"]]
+ 008d9808 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9808 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9808 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9748c7902481d7d3bb3c86f8e424629e"></a>

### [`008d8870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8870.md) → [`008d981c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d981c.md) FUN_008d981c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.58% / 新版 93.58%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9900",
      "incomplete_value": true,
      "site": "008d9914",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:cb9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8954",
      "incomplete_value": true,
      "site": "008d8968",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:bdb:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d992c",
      "incomplete_value": false,
      "site": "008d9934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8980",
      "incomplete_value": false,
      "site": "008d8988",
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
            "const:8e8:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d9854",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d88a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "008d9854",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d9870",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d98c0",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "008d9854",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008d9870",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008d98c0",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d88a8 ["INT_ADD", "register:40f0:8", ["const:8d88a8:8", "const:4:8"]]
- 008d88a8 ["CALL", null, ["ram:47ad34:8"]]
+ 008d9854 ["INT_ADD", "register:40f0:8", ["const:8d9854:8", "const:4:8"]]
+ 008d9854 ["CALL", null, ["ram:47b054:8"]]
- 008d88c4 ["INT_ADD", "register:40f0:8", ["const:8d88c4:8", "const:4:8"]]
- 008d88c4 ["CALL", null, ["ram:47ad34:8"]]
+ 008d9870 ["INT_ADD", "register:40f0:8", ["const:8d9870:8", "const:4:8"]]
+ 008d9870 ["CALL", null, ["ram:47b054:8"]]
- 008d88f8 ["INT_ADD", "register:40f0:8", ["const:8d88f8:8", "const:4:8"]]
- 008d88f8 ["CALL", null, ["callee:0048d1b0:8"]]
+ 008d98a4 ["INT_ADD", "register:40f0:8", ["const:8d98a4:8", "const:4:8"]]
+ 008d98a4 ["CALL", null, ["callee:0048d1b0:8"]]
~~~


<a id="compare-c2172b7b69e19abb5ec4280d8c9a5ca9"></a>

### [`008d8ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ae0.md) → [`008d9a8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9a8c.md) FUN_008d9a8c

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
      "definition_site": "008d9aa0",
      "incomplete_value": false,
      "site": "008d9aa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8af4",
      "incomplete_value": false,
      "site": "008d8af8",
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
            "const:8e8:8"
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
      "008d9aa4",
      "DATA",
      [
        "storage",
        "00c848e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9aa4",
      "DATA",
      [
        "storage",
        "00c858b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8aec ["INT_ADD", "register:40f0:8", ["const:8d8aec:8", "const:4:8"]]
- 008d8aec ["CALL", null, ["callee:00c58f30:8"]]
+ 008d9a98 ["INT_ADD", "register:40f0:8", ["const:8d9a98:8", "const:4:8"]]
+ 008d9a98 ["CALL", null, ["callee:00c58f30:8"]]
- 008d8af0 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d9a9c ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8af4 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 008d8af4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8af4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8af4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9aa0 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 008d9aa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9aa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9aa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1b9f367ea3670d9589ca4b48811a8999"></a>

### [`008d8b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8b04.md) → [`008d9ab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9ab0.md) FUN_008d9ab0

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
      "definition_site": "008d9ab4",
      "incomplete_value": false,
      "site": "008d9ab8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8b08",
      "incomplete_value": false,
      "site": "008d8b0c",
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
            "const:8e8:8"
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
      "008d9ab8",
      "DATA",
      [
        "storage",
        "00c848e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9ab8",
      "DATA",
      [
        "storage",
        "00c858b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8b04 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d9ab0 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8b08 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 008d8b08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8b08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8b08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9ab4 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 008d9ab4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9ab4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9ab4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-80af676722e9b73a404f93239e794eb7"></a>

### [`008d8b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8b60.md) → [`008d9b0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9b0c.md) FUN_008d9b0c

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
      "definition_site": "008d9b30",
      "incomplete_value": false,
      "site": "008d9b30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:948:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8b84",
      "incomplete_value": false,
      "site": "008d8b84",
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
            "const:978:8"
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
      "008d9b30",
      "DATA",
      [
        "storage",
        "00c84978",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9b30",
      "DATA",
      [
        "storage",
        "00c85948",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8b74 ["INT_ADD", "register:40f0:8", ["const:8d8b74:8", "const:4:8"]]
- 008d8b74 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d9b20 ["INT_ADD", "register:40f0:8", ["const:8d9b20:8", "const:4:8"]]
+ 008d9b20 ["CALL", null, ["callee:00c58f30:8"]]
- 008d8b7c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d9b28 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8b80 ["COPY", "tmp:0:8", ["const:978:8"]]
- 008d8b80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8b80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8b80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9b2c ["COPY", "tmp:0:8", ["const:948:8"]]
+ 008d9b2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9b2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9b2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-876e33a249b3b82fc4ec06ea14ca0797"></a>

### [`008d8b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8b94.md) → [`008d9b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9b40.md) FUN_008d9b40

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
      "definition_site": "008d9b4c",
      "incomplete_value": false,
      "site": "008d9b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:948:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8ba0",
      "incomplete_value": false,
      "site": "008d8ba0",
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
            "const:978:8"
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
      "008d9b4c",
      "DATA",
      [
        "storage",
        "00c84978",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9b4c",
      "DATA",
      [
        "storage",
        "00c85948",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8b98 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008d9b44 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d8b9c ["COPY", "tmp:0:8", ["const:978:8"]]
- 008d8b9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d8b9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d8b9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d9b48 ["COPY", "tmp:0:8", ["const:948:8"]]
+ 008d9b48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9b48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9b48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-27f46c728e561338b9d1d92de5cc9dcd"></a>

### [`008d8bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8bb0.md) → [`008d9b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9b5c.md) FUN_008d9b5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008d51f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d51f8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008d61a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d61a4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d9b7c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8bd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d9b88",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8bdc",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "008d9b7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d9b88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008d9b7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008d9b88",
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
- 008d8bd0 ["INT_ADD", "register:40f0:8", ["const:8d8bd0:8", "const:4:8"]]
- 008d8bd0 ["CALL", null, ["ram:47ad34:8"]]
+ 008d9b7c ["INT_ADD", "register:40f0:8", ["const:8d9b7c:8", "const:4:8"]]
+ 008d9b7c ["CALL", null, ["ram:47b054:8"]]
- 008d8bdc ["INT_ADD", "register:40f0:8", ["const:8d8bdc:8", "const:4:8"]]
- 008d8bdc ["CALL", null, ["ram:47ad34:8"]]
+ 008d9b88 ["INT_ADD", "register:40f0:8", ["const:8d9b88:8", "const:4:8"]]
+ 008d9b88 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-bb4881b1f477071f77cd5a7becbb8cff"></a>

### [`008d8c34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8c34.md) → [`008d9be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9be0.md) FUN_008d9be0

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
      "unmatched:008d8c34",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8c38",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8c58",
      "DATA",
      [
        "storage",
        "00c849f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9be0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008d9be4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d9c04",
      "DATA",
      [
        "storage",
        "00c859c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8c34 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d8c34 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d8c34 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008d8c34 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008d8c38 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008d8c38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 008d8c3c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e59c1b894eb16c91adb04ac3e837ffaa"></a>

### [`008d8c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8c68.md) → [`008d9c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9c14.md) FUN_008d9c14

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
      "definition_site": "008d9c20",
      "incomplete_value": false,
      "site": "008d9c20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8c74",
      "incomplete_value": false,
      "site": "008d8c74",
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
            "const:9f8:8"
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
      "008d9c20",
      "DATA",
      [
        "storage",
        "00c849f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9c20",
      "DATA",
      [
        "storage",
        "00c859c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8c6c ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008d9c18 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d8c70 ["COPY", "tmp:0:8", ["const:9f8:8"]]
- 008d8c70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d8c70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d8c70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d9c1c ["COPY", "tmp:0:8", ["const:9c8:8"]]
+ 008d9c1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9c1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9c1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d896553f6045bcc79eeee6bab0d22ac5"></a>

### [`008d8c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8c84.md) → [`008d9c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9c30.md) FUN_008d9c30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00597684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597684.md) [`008b6eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb0.md) [`008b6eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb8.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005979a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005979a4.md) [`008b7e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7e5c.md) [`008b7e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7e64.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.16% / 新版 78.16%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d9c88",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8cdc",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d8d18",
      "incomplete_value": false,
      "site": "008d8d20",
      "value": [
        "leaf",
        "const:3:8"
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
      "unmatched:008d8c88",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8c8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8c90",
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
      "008d9c34",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008d9c38",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008d9c3c",
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
- 008d8cdc ["INT_ADD", "register:40f0:8", ["const:8d8cdc:8", "const:4:8"]]
- 008d8cdc ["CALL", null, ["ram:47ad34:8"]]
+ 008d9c88 ["INT_ADD", "register:40f0:8", ["const:8d9c88:8", "const:4:8"]]
+ 008d9c88 ["CALL", null, ["ram:47b054:8"]]
- 008d8d20 ["INT_ADD", "register:40f0:8", ["const:8d8d20:8", "const:4:8"]]
- 008d8d20 ["CALL", null, ["callee:008b89cc:8"]]
+ 008d9ccc ["INT_ADD", "register:40f0:8", ["const:8d9ccc:8", "const:4:8"]]
+ 008d9ccc ["CALL", null, ["callee:008b89cc:8"]]
- 008d8c84 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


<a id="compare-4584bdae46b823939980bb90ef588032"></a>

### [`008d8e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8e58.md) → [`008d9e04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9e04.md) FUN_008d9e04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d8e80",
      "DATA",
      [
        "storage",
        "00c84a68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d8e8c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8e90",
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
      "008d9e2c",
      "DATA",
      [
        "storage",
        "00c85a38",
        null,
        "undefined *"
      ]
    ],
    [
      "008d9e38",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d9e3c",
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
- 008d8e6c ["INT_ADD", "register:40f0:8", ["const:8d8e6c:8", "const:4:8"]]
- 008d8e6c ["CALL", null, ["callee:00c58f30:8"]]
+ 008d9e18 ["INT_ADD", "register:40f0:8", ["const:8d9e18:8", "const:4:8"]]
+ 008d9e18 ["CALL", null, ["callee:00c58f30:8"]]
- 008d8e78 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d9e24 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8e7c ["COPY", "tmp:0:8", ["const:a68:8"]]
- 008d8e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c4b3385334dbb7c0eef3d679e6074624"></a>

### [`008d8e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8e98.md) → [`008d9e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9e44.md) FUN_008d9e44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9e48",
      "incomplete_value": false,
      "site": "008d9e4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8e9c",
      "incomplete_value": false,
      "site": "008d8ea0",
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
            "const:a68:8"
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
      "008d9e4c",
      "DATA",
      [
        "storage",
        "00c84a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9e4c",
      "DATA",
      [
        "storage",
        "00c85a38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8e98 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d9e44 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d8e9c ["COPY", "tmp:0:8", ["const:a68:8"]]
- 008d8e9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8e9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8e9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9e48 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 008d9e48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9e48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9e48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fd8d06ea332222966f0a3e91c90d3a77"></a>

### [`008d8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ec0.md) → [`008d9e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9e6c.md) FUN_008d9e6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 22件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`00550c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c68.md)
- 新版 呼出元 0件  · 呼出先 22件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cdb4.md) [`0046ce6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce6c.md) [`00550f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f88.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.63% / 新版 80.63%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9f30",
      "incomplete_value": false,
      "site": "008d9f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8f84",
      "incomplete_value": false,
      "site": "008d8f84",
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
            "const:ad8:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d9f98",
      "incomplete_value": false,
      "site": "008d9f9c",
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
      "definition_site": "008d8fec",
      "incomplete_value": false,
      "site": "008d8ff0",
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
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d9fbc",
      "incomplete_value": false,
      "site": "008d9fc0",
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
      "definition_site": "008d9010",
      "incomplete_value": false,
      "site": "008d9014",
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
      "unmatched:008d8ec4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8ec8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8ecc",
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
      "008d9e70",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d9e74",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008d9e78",
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
- 008d8ff0 ["INT_ADD", "register:40f0:8", ["const:8d8ff0:8", "const:4:8"]]
- 008d8ff0 ["CALL", null, ["callee:0046cdb4:8"]]
+ 008d9f9c ["INT_ADD", "register:40f0:8", ["const:8d9f9c:8", "const:4:8"]]
+ 008d9f9c ["CALL", null, ["callee:0046cdb4:8"]]
- 008d9014 ["INT_ADD", "register:40f0:8", ["const:8d9014:8", "const:4:8"]]
- 008d9014 ["CALL", null, ["callee:0046ce6c:8"]]
+ 008d9fc0 ["INT_ADD", "register:40f0:8", ["const:8d9fc0:8", "const:4:8"]]
+ 008d9fc0 ["CALL", null, ["callee:0046ce6c:8"]]
- 008d9118 ["INT_ADD", "register:40f0:8", ["const:8d9118:8", "const:4:8"]]
- 008d9118 ["CALL", null, ["callee:0046cdb4:8"]]
+ 008da0c4 ["INT_ADD", "register:40f0:8", ["const:8da0c4:8", "const:4:8"]]
+ 008da0c4 ["CALL", null, ["callee:0046cdb4:8"]]
~~~


<a id="compare-6b3b126f03e22b365bc688d0ee42ad70"></a>

### [`008d9460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9460.md) → [`008da40c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da40c.md) FUN_008da40c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d9484",
      "DATA",
      [
        "storage",
        "00c84ad8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d948c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d9490",
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
      "008da430",
      "DATA",
      [
        "storage",
        "00c85aa8",
        null,
        "undefined *"
      ]
    ],
    [
      "008da438",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008da43c",
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
- 008d9468 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008d9474 ["INT_ADD", "register:40f0:8", ["const:8d9474:8", "const:4:8"]]
- 008d9474 ["CALL", null, ["callee:00c58f30:8"]]
+ 008da420 ["INT_ADD", "register:40f0:8", ["const:8da420:8", "const:4:8"]]
+ 008da420 ["CALL", null, ["callee:00c58f30:8"]]
- 008d947c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008da428 ["COPY", "register:4040:8", ["const:c85000:8"]]
~~~


<a id="compare-76bbb62a7e9055817d07b3794daadd9f"></a>

### [`008d9498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9498.md) → [`008da444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da444.md) FUN_008da444

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
      "unmatched:008d94a0",
      "DATA",
      [
        "storage",
        "00c84ad8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da44c",
      "DATA",
      [
        "storage",
        "00c85aa8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9498 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008d949c ["COPY", "tmp:0:8", ["const:ad8:8"]]
- 008d949c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d949c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d949c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d94a0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008d94a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a52470391cef19934663b4907960e860"></a>

### [`008d94b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d94b8.md) → [`008da464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da464.md) FUN_008da464

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0058fbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fbc0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0058fee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fee0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.24% / 新版 95.24%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 008d94dc ["INT_ADD", "register:40f0:8", ["const:8d94dc:8", "const:4:8"]]
- 008d94dc ["CALL", null, ["callee:0058fee0:8"]]
+ 008da488 ["INT_ADD", "register:40f0:8", ["const:8da488:8", "const:4:8"]]
+ 008da488 ["CALL", null, ["callee:0058fee0:8"]]
- 008d94e8 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 008d94e8 ["COPY", "tmp:1:8", ["register:40a0:8"]]
- 008d94e8 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 008d94e8 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
- 008d94ec ["INT_ADD", "register:40f0:8", ["const:8d94ec:8", "const:4:8"]]
- 008d94ec ["CALL", null, ["callee:008524fc:8"]]
+ 008da498 ["INT_ADD", "register:40f0:8", ["const:8da498:8", "const:4:8"]]
+ 008da498 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-9aaf2fafefab6b09e9cbb9e5c5ad380c"></a>

### [`008d9538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9538.md) → [`008da4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da4e4.md) FUN_008da4e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d955c",
      "DATA",
      [
        "storage",
        "00c84b78",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d9560",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d9564",
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
      "008da508",
      "DATA",
      [
        "storage",
        "00c85b48",
        null,
        "undefined *"
      ]
    ],
    [
      "008da50c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008da510",
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
- 008d954c ["INT_ADD", "register:40f0:8", ["const:8d954c:8", "const:4:8"]]
- 008d954c ["CALL", null, ["callee:00c58f30:8"]]
+ 008da4f8 ["INT_ADD", "register:40f0:8", ["const:8da4f8:8", "const:4:8"]]
+ 008da4f8 ["CALL", null, ["callee:00c58f30:8"]]
- 008d9554 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008da500 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9558 ["COPY", "tmp:0:8", ["const:b78:8"]]
- 008d9558 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9558 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9558 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d7bdf77cbffacc7d9b394eb7044c3e5a"></a>

### [`008d956c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d956c.md) → [`008da518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da518.md) FUN_008da518

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
      "definition_site": "008da524",
      "incomplete_value": false,
      "site": "008da524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9578",
      "incomplete_value": false,
      "site": "008d9578",
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
            "const:b78:8"
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
      "008da524",
      "DATA",
      [
        "storage",
        "00c84b78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da524",
      "DATA",
      [
        "storage",
        "00c85b48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9570 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008da51c ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d9574 ["COPY", "tmp:0:8", ["const:b78:8"]]
- 008d9574 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d9574 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d9574 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008da520 ["COPY", "tmp:0:8", ["const:b48:8"]]
+ 008da520 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008da520 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008da520 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6b7e3e9145b7f3774ef35d9c23f7bcb3"></a>

### [`008d9588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9588.md) → [`008da534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da534.md) FUN_008da534

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md) [`008d9758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9758.md) [`008d975c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d975c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md) [`008da704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da704.md) [`008da708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da708.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008da56c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d95c0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008da588",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d95dc",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008da614",
      "incomplete_value": true,
      "site": "008da618",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9668",
      "incomplete_value": true,
      "site": "008d966c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008da56c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008da588",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008da5c8",
      "DATA",
      [
        "storage",
        "00c84be8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da56c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008da588",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008da5c8",
      "DATA",
      [
        "storage",
        "00c85bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d95c0 ["INT_ADD", "register:40f0:8", ["const:8d95c0:8", "const:4:8"]]
- 008d95c0 ["CALL", null, ["ram:47ad34:8"]]
+ 008da56c ["INT_ADD", "register:40f0:8", ["const:8da56c:8", "const:4:8"]]
+ 008da56c ["CALL", null, ["ram:47b054:8"]]
- 008d95dc ["INT_ADD", "register:40f0:8", ["const:8d95dc:8", "const:4:8"]]
- 008d95dc ["CALL", null, ["ram:47ad34:8"]]
+ 008da588 ["INT_ADD", "register:40f0:8", ["const:8da588:8", "const:4:8"]]
+ 008da588 ["CALL", null, ["ram:47b054:8"]]
- 008d966c ["INT_ADD", "register:40f0:8", ["const:8d966c:8", "const:4:8"]]
- 008d966c ["CALL", null, ["callee:008b8a14:8"]]
+ 008da618 ["INT_ADD", "register:40f0:8", ["const:8da618:8", "const:4:8"]]
+ 008da618 ["CALL", null, ["callee:008b8a14:8"]]
~~~


<a id="compare-bd93ff666c0fddf44ba5ee92b3042647"></a>

### [`008d9710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9710.md) → [`008da6bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da6bc.md) FUN_008da6bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d9734",
      "DATA",
      [
        "storage",
        "00c84be8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d9738",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d973c",
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
      "008da6e0",
      "DATA",
      [
        "storage",
        "00c85bb8",
        null,
        "undefined *"
      ]
    ],
    [
      "008da6e4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008da6e8",
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
- 008d9724 ["INT_ADD", "register:40f0:8", ["const:8d9724:8", "const:4:8"]]
- 008d9724 ["CALL", null, ["callee:00c58f30:8"]]
+ 008da6d0 ["INT_ADD", "register:40f0:8", ["const:8da6d0:8", "const:4:8"]]
+ 008da6d0 ["CALL", null, ["callee:00c58f30:8"]]
- 008d972c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008da6d8 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9730 ["COPY", "tmp:0:8", ["const:be8:8"]]
- 008d9730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fcc00325c0b9871530db6a55df09b50c"></a>

### [`008d9744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9744.md) → [`008da6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da6f0.md) FUN_008da6f0

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
      "definition_site": "008da6fc",
      "incomplete_value": false,
      "site": "008da6fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9750",
      "incomplete_value": false,
      "site": "008d9750",
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
            "const:be8:8"
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
      "008da6fc",
      "DATA",
      [
        "storage",
        "00c84be8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da6fc",
      "DATA",
      [
        "storage",
        "00c85bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9748 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008da6f4 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d974c ["COPY", "tmp:0:8", ["const:be8:8"]]
- 008d974c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d974c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d974c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008da6f8 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 008da6f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008da6f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008da6f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1e7eaf01e1c4342f3407d06455f8e0f7"></a>

### [`008d9760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9760.md) → [`008da70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da70c.md) FUN_008da70c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b8998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8998.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.65% / 新版 80.65%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008da760",
      "incomplete_value": true,
      "site": "008da770",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008da764",
      "incomplete_value": false,
      "site": "008da770",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
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
      "unmatched:008d9760",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d9764",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d9768",
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
      "008da70c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008da710",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008da714",
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
- 008d97c4 ["INT_ADD", "register:40f0:8", ["const:8d97c4:8", "const:4:8"]]
- 008d97c4 ["CALL", null, ["callee:008b8a14:8"]]
+ 008da770 ["INT_ADD", "register:40f0:8", ["const:8da770:8", "const:4:8"]]
+ 008da770 ["CALL", null, ["callee:008b8a14:8"]]
- 008d9760 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d9760 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d9760 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 008d9760 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008d9764 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008d9764 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-c2ace74f4301a345079d6ae8fa890eb5"></a>

### [`008d9804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9804.md) → [`008da7b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da7b0.md) FUN_008da7b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 11.11% / 新版 11.11%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d9814",
      "DATA",
      [
        "storage",
        "00c84c78",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d9818",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008da7d0"
      ]
    ],
    [
      "unmatched:008d9820",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f50"
      ]
    ]
  ],
  "added": [
    [
      "008da7c0",
      "DATA",
      [
        "storage",
        "00c85c48",
        null,
        "undefined *"
      ]
    ],
    [
      "008da7c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008da7d0"
      ]
    ],
    [
      "008da7cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f50"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9804 ["COPY", "register:4040:8", ["register:4000:8"]]
- 008d9808 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 008d9808 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 008d980c ["COPY", "register:4048:8", ["const:c84000:8"]]
~~~


<a id="compare-aa6b75dfb11d335078760b3ea47c5ca9"></a>

### [`008d9828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9828.md) → [`008da7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da7d4.md) FUN_008da7d4

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
      "definition_site": "008da7dc",
      "incomplete_value": false,
      "site": "008da7e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9830",
      "incomplete_value": false,
      "site": "008d9834",
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
            "const:c78:8"
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
      "008da7e0",
      "DATA",
      [
        "storage",
        "00c84c78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da7e0",
      "DATA",
      [
        "storage",
        "00c85c48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d982c ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008da7d8 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d9830 ["COPY", "tmp:0:8", ["const:c78:8"]]
- 008d9830 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d9830 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d9830 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008da7dc ["COPY", "tmp:0:8", ["const:c48:8"]]
+ 008da7dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008da7dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008da7dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008d9854 ["INT_ADD", "register:40f0:8", ["const:8d9854:8", "const:4:8"]]
- 008d9854 ["CALL", null, ["callee:00c58f50:8"]]
+ 008da800 ["INT_ADD", "register:40f0:8", ["const:8da800:8", "const:4:8"]]
+ 008da800 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5dde80d3937d932da069d2d00482bfd2"></a>

### [`008d9868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9868.md) → [`008da814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da814.md) FUN_008da814

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`008d9238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9238.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008da84c",
      "incomplete_value": false,
      "site": "008da84c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d98a0",
      "incomplete_value": false,
      "site": "008d98a0",
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
            "const:c78:8"
          ]
        ]
      ]
    },
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
      "008da84c",
      "DATA",
      [
        "storage",
        "00c84c78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da84c",
      "DATA",
      [
        "storage",
        "00c85c48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9884 ["INT_ADD", "register:40f0:8", ["const:8d9884:8", "const:4:8"]]
- 008d9884 ["CALL", null, ["callee:00c58f30:8"]]
+ 008da830 ["INT_ADD", "register:40f0:8", ["const:8da830:8", "const:4:8"]]
+ 008da830 ["CALL", null, ["callee:00c58f30:8"]]
- 008d988c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008da838 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9890 ["COPY", "tmp:0:8", ["const:c78:8"]]
- 008d9890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da83c ["COPY", "tmp:0:8", ["const:c48:8"]]
+ 008da83c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da83c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da83c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-43b159d1a7207b69206a49dc74049569"></a>

### [`008d9960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9960.md) → [`008da90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da90c.md) FUN_008da90c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`008d9238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9238.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008da938",
      "incomplete_value": false,
      "site": "008da938",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d998c",
      "incomplete_value": false,
      "site": "008d998c",
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
            "const:c78:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008da938",
      "DATA",
      [
        "storage",
        "00c84c78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da938",
      "DATA",
      [
        "storage",
        "00c85c48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9978 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008da924 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008d997c ["COPY", "tmp:0:8", ["const:c78:8"]]
- 008d997c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d997c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d997c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008da928 ["COPY", "tmp:0:8", ["const:c48:8"]]
+ 008da928 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008da928 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008da928 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008d99dc ["INT_ADD", "register:40f0:8", ["const:8d99dc:8", "const:4:8"]]
- 008d99dc ["CALL", null, ["callee:00c58f30:8"]]
+ 008da988 ["INT_ADD", "register:40f0:8", ["const:8da988:8", "const:4:8"]]
+ 008da988 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-49140d71cbcfadc2182526cee1ecc603"></a>

### [`008d9b14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9b14.md) → [`008daac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008daac0.md) FUN_008daac0

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
      "definition_site": "008daad4",
      "incomplete_value": false,
      "site": "008daad8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9b28",
      "incomplete_value": false,
      "site": "008d9b2c",
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
            "const:cf8:8"
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
      "008daad8",
      "DATA",
      [
        "storage",
        "00c84cf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008daad8",
      "DATA",
      [
        "storage",
        "00c85cc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9b20 ["INT_ADD", "register:40f0:8", ["const:8d9b20:8", "const:4:8"]]
- 008d9b20 ["CALL", null, ["callee:00c58f30:8"]]
+ 008daacc ["INT_ADD", "register:40f0:8", ["const:8daacc:8", "const:4:8"]]
+ 008daacc ["CALL", null, ["callee:00c58f30:8"]]
- 008d9b24 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008daad0 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9b28 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 008d9b28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9b28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9b28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008daad4 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 008daad4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008daad4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008daad4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7cda2b7dd5b308211679723ed8c7d8d6"></a>

### [`008d9b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9b38.md) → [`008daae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008daae4.md) FUN_008daae4

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
      "definition_site": "008daae8",
      "incomplete_value": false,
      "site": "008daaec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9b3c",
      "incomplete_value": false,
      "site": "008d9b40",
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
            "const:cf8:8"
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
      "008daaec",
      "DATA",
      [
        "storage",
        "00c84cf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008daaec",
      "DATA",
      [
        "storage",
        "00c85cc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9b38 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008daae4 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9b3c ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 008d9b3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9b3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9b3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008daae8 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 008daae8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008daae8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008daae8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e94f496c1247178e6dd0fb27f26133ef"></a>

### [`008d9b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9b94.md) → [`008dab40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008dab40.md) FUN_008dab40

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
      "definition_site": "008dab54",
      "incomplete_value": false,
      "site": "008dab58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9ba8",
      "incomplete_value": false,
      "site": "008d9bac",
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
            "const:d78:8"
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
      "008dab58",
      "DATA",
      [
        "storage",
        "00c84d78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dab58",
      "DATA",
      [
        "storage",
        "00c85d48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9ba0 ["INT_ADD", "register:40f0:8", ["const:8d9ba0:8", "const:4:8"]]
- 008d9ba0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008dab4c ["INT_ADD", "register:40f0:8", ["const:8dab4c:8", "const:4:8"]]
+ 008dab4c ["CALL", null, ["callee:00c58f30:8"]]
- 008d9ba4 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008dab50 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9ba8 ["COPY", "tmp:0:8", ["const:d78:8"]]
- 008d9ba8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9ba8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9ba8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008dab54 ["COPY", "tmp:0:8", ["const:d48:8"]]
+ 008dab54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008dab54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008dab54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dcd637a86e51864c53a80af127e9e2d0"></a>

### [`008d9bb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9bb8.md) → [`008dab64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008dab64.md) FUN_008dab64

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
      "definition_site": "008dab68",
      "incomplete_value": false,
      "site": "008dab6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9bbc",
      "incomplete_value": false,
      "site": "008d9bc0",
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
            "const:d78:8"
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
      "008dab6c",
      "DATA",
      [
        "storage",
        "00c84d78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dab6c",
      "DATA",
      [
        "storage",
        "00c85d48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9bb8 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008dab64 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9bbc ["COPY", "tmp:0:8", ["const:d78:8"]]
- 008d9bbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9bbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9bbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008dab68 ["COPY", "tmp:0:8", ["const:d48:8"]]
+ 008dab68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008dab68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008dab68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c885888f4b4bcf4b553eb2ef67e14c35"></a>

### [`008d9c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c00.md) → [`008dabac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008dabac.md) FUN_008dabac

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
      "definition_site": "008dabcc",
      "incomplete_value": false,
      "site": "008dabd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9c20",
      "incomplete_value": false,
      "site": "008d9c24",
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
            "const:df8:8"
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
      "008dabd0",
      "DATA",
      [
        "storage",
        "00c84df8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dabd0",
      "DATA",
      [
        "storage",
        "00c85dc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9c14 ["INT_ADD", "register:40f0:8", ["const:8d9c14:8", "const:4:8"]]
- 008d9c14 ["CALL", null, ["callee:00c58f30:8"]]
+ 008dabc0 ["INT_ADD", "register:40f0:8", ["const:8dabc0:8", "const:4:8"]]
+ 008dabc0 ["CALL", null, ["callee:00c58f30:8"]]
- 008d9c1c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008dabc8 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9c20 ["COPY", "tmp:0:8", ["const:df8:8"]]
- 008d9c20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9c20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9c20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008dabcc ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 008dabcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008dabcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008dabcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f0c6253a82d9cb76ed8c8d67ad820146"></a>

### [`008d9c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c38.md) → [`008dabe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008dabe4.md) FUN_008dabe4

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
      "definition_site": "008dabe8",
      "incomplete_value": false,
      "site": "008dabec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9c3c",
      "incomplete_value": false,
      "site": "008d9c40",
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
            "const:df8:8"
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
      "008dabec",
      "DATA",
      [
        "storage",
        "00c84df8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dabec",
      "DATA",
      [
        "storage",
        "00c85dc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9c38 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008dabe4 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d9c3c ["COPY", "tmp:0:8", ["const:df8:8"]]
- 008d9c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008dabe8 ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 008dabe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008dabe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008dabe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5ac55f24b8629c2dbda0aa2a641aaca8"></a>

### [`008d9c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c58.md) → [`008dac04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008dac04.md) FUN_008dac04

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 28件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0044da78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044da78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)
- 新版 呼出元 0件  · 呼出先 28件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0044dd98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044dd98.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.32% / 新版 89.32%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `store_value` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008dace0",
      "incomplete_value": true,
      "site": "008dacf8",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:6f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9d34",
      "incomplete_value": true,
      "site": "008d9d4c",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:6a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008dacec",
      "incomplete_value": true,
      "site": "008dacfc",
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
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:3ab:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9d40",
      "incomplete_value": true,
      "site": "008d9d50",
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
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:2de:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008dacec",
      "incomplete_value": true,
      "site": "008dacfc",
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
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9d40",
      "incomplete_value": true,
      "site": "008d9d50",
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
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008dace0",
      "READ",
      [
        "storage",
        "002c26a0",
        null,
        null
      ]
    ],
    [
      "008dacec",
      "READ",
      [
        "storage",
        "002aa2de",
        null,
        "string"
      ]
    ],
    [
      "008dacec",
      "READ",
      [
        "storage",
        "002aa2ee",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008dace0",
      "READ",
      [
        "storage",
        "002c26f0",
        null,
        null
      ]
    ],
    [
      "008dacec",
      "READ",
      [
        "storage",
        "002aa3ab",
        null,
        "string"
      ]
    ],
    [
      "008dacec",
      "READ",
      [
        "storage",
        "002aa3bb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9e64 ["INT_ADD", "register:40f0:8", ["const:8d9e64:8", "const:4:8"]]
- 008d9e64 ["CALL", null, ["ram:48cd38:8"]]
+ 008dae10 ["INT_ADD", "register:40f0:8", ["const:8dae10:8", "const:4:8"]]
+ 008dae10 ["CALL", null, ["ram:48d058:8"]]
- 008d9e80 ["INT_ADD", "register:40f0:8", ["const:8d9e80:8", "const:4:8"]]
- 008d9e80 ["CALL", null, ["callee:00c59010:8"]]
+ 008dae2c ["INT_ADD", "register:40f0:8", ["const:8dae2c:8", "const:4:8"]]
+ 008dae2c ["CALL", null, ["callee:00c59010:8"]]
- 008da038 ["INT_ADD", "register:40f0:8", ["const:8da038:8", "const:4:8"]]
- 008da038 ["CALL", null, ["ram:48cd38:8"]]
+ 008dafe4 ["INT_ADD", "register:40f0:8", ["const:8dafe4:8", "const:4:8"]]
+ 008dafe4 ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-23d1942bba2f781bf51b044ea9f97978"></a>

### [`008da3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da3b8.md) → [`008db364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db364.md) FUN_008db364

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
      "definition_site": "008db378",
      "incomplete_value": false,
      "site": "008db37c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da3cc",
      "incomplete_value": false,
      "site": "008da3d0",
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
            "const:e68:8"
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
      "008db37c",
      "DATA",
      [
        "storage",
        "00c84e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db37c",
      "DATA",
      [
        "storage",
        "00c85e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da3c4 ["INT_ADD", "register:40f0:8", ["const:8da3c4:8", "const:4:8"]]
- 008da3c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008db370 ["INT_ADD", "register:40f0:8", ["const:8db370:8", "const:4:8"]]
+ 008db370 ["CALL", null, ["callee:00c58f30:8"]]
- 008da3c8 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008db374 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da3cc ["COPY", "tmp:0:8", ["const:e68:8"]]
- 008da3cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da3cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da3cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db378 ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 008db378 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db378 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db378 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-67009d3f782855c1893e0f83044e9c9d"></a>

### [`008da3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da3dc.md) → [`008db388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db388.md) FUN_008db388

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
      "definition_site": "008db38c",
      "incomplete_value": false,
      "site": "008db390",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da3e0",
      "incomplete_value": false,
      "site": "008da3e4",
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
            "const:e68:8"
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
      "008db390",
      "DATA",
      [
        "storage",
        "00c84e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db390",
      "DATA",
      [
        "storage",
        "00c85e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da3dc ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008db388 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da3e0 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 008da3e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da3e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da3e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db38c ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 008db38c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db38c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db38c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-de739384c538b534c54357c77a637ef8"></a>

### [`008da438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da438.md) → [`008db3e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db3e4.md) FUN_008db3e4

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
      "definition_site": "008db3f8",
      "incomplete_value": false,
      "site": "008db3fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da44c",
      "incomplete_value": false,
      "site": "008da450",
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
            "const:ee8:8"
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
      "008db3fc",
      "DATA",
      [
        "storage",
        "00c84ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db3fc",
      "DATA",
      [
        "storage",
        "00c85eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da444 ["INT_ADD", "register:40f0:8", ["const:8da444:8", "const:4:8"]]
- 008da444 ["CALL", null, ["callee:00c58f30:8"]]
+ 008db3f0 ["INT_ADD", "register:40f0:8", ["const:8db3f0:8", "const:4:8"]]
+ 008db3f0 ["CALL", null, ["callee:00c58f30:8"]]
- 008da448 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008db3f4 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da44c ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 008da44c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da44c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da44c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db3f8 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 008db3f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db3f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db3f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-66c134e583abcd738d05399a61fea44c"></a>

### [`008da45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da45c.md) → [`008db408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db408.md) FUN_008db408

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
      "definition_site": "008db40c",
      "incomplete_value": false,
      "site": "008db410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da460",
      "incomplete_value": false,
      "site": "008da464",
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
            "const:ee8:8"
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
      "008db410",
      "DATA",
      [
        "storage",
        "00c84ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db410",
      "DATA",
      [
        "storage",
        "00c85eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da45c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008db408 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da460 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 008da460 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da460 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da460 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db40c ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 008db40c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db40c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db40c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-67e22f5f5bab1e60d16cf6a5a7adbfe1"></a>

### [`008da4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da4b8.md) → [`008db464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db464.md) FUN_008db464

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
      "definition_site": "008db478",
      "incomplete_value": false,
      "site": "008db47c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da4cc",
      "incomplete_value": false,
      "site": "008da4d0",
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
            "const:f68:8"
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
      "008db47c",
      "DATA",
      [
        "storage",
        "00c84f68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db47c",
      "DATA",
      [
        "storage",
        "00c85f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da4c4 ["INT_ADD", "register:40f0:8", ["const:8da4c4:8", "const:4:8"]]
- 008da4c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008db470 ["INT_ADD", "register:40f0:8", ["const:8db470:8", "const:4:8"]]
+ 008db470 ["CALL", null, ["callee:00c58f30:8"]]
- 008da4c8 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008db474 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da4cc ["COPY", "tmp:0:8", ["const:f68:8"]]
- 008da4cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da4cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da4cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db478 ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 008db478 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db478 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db478 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fde7dd3a06130aebb71bd7687aa3bedf"></a>

### [`008da4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da4dc.md) → [`008db488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db488.md) FUN_008db488

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
      "definition_site": "008db48c",
      "incomplete_value": false,
      "site": "008db490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da4e0",
      "incomplete_value": false,
      "site": "008da4e4",
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
            "const:f68:8"
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
      "008db490",
      "DATA",
      [
        "storage",
        "00c84f68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db490",
      "DATA",
      [
        "storage",
        "00c85f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da4dc ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008db488 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da4e0 ["COPY", "tmp:0:8", ["const:f68:8"]]
- 008da4e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da4e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da4e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db48c ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 008db48c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db48c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db48c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1a568fe83cae419bdf522f2853c242e2"></a>

### [`008da538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da538.md) → [`008db4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db4e4.md) FUN_008db4e4

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
      "definition_site": "008db4f8",
      "incomplete_value": false,
      "site": "008db4fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da54c",
      "incomplete_value": false,
      "site": "008da550",
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
            "const:fe8:8"
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
      "008db4fc",
      "DATA",
      [
        "storage",
        "00c84fe8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db4fc",
      "DATA",
      [
        "storage",
        "00c85fb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da544 ["INT_ADD", "register:40f0:8", ["const:8da544:8", "const:4:8"]]
- 008da544 ["CALL", null, ["callee:00c58f30:8"]]
+ 008db4f0 ["INT_ADD", "register:40f0:8", ["const:8db4f0:8", "const:4:8"]]
+ 008db4f0 ["CALL", null, ["callee:00c58f30:8"]]
- 008da548 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008db4f4 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da54c ["COPY", "tmp:0:8", ["const:fe8:8"]]
- 008da54c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da54c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da54c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db4f8 ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 008db4f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db4f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db4f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-65881825df9f94d05d7d6b2cbd5d6c73"></a>

### [`008da55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da55c.md) → [`008db508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db508.md) FUN_008db508

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
      "definition_site": "008db50c",
      "incomplete_value": false,
      "site": "008db510",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da560",
      "incomplete_value": false,
      "site": "008da564",
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
            "const:fe8:8"
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
      "008db510",
      "DATA",
      [
        "storage",
        "00c84fe8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db510",
      "DATA",
      [
        "storage",
        "00c85fb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da55c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008db508 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da560 ["COPY", "tmp:0:8", ["const:fe8:8"]]
- 008da560 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da560 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da560 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db50c ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 008db50c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db50c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ec490b150e7c1dfc02d9af30b88c6871"></a>

### [`008da5b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da5b4.md) → [`008db560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db560.md) FUN_008db560

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008db56c",
      "incomplete_value": false,
      "site": "008db578",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da5c0",
      "incomplete_value": false,
      "site": "008da5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:78:8"
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
      "008db578",
      "DATA",
      [
        "storage",
        "00c85078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db578",
      "DATA",
      [
        "storage",
        "00c86048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da5bc ["COPY", "register:4050:8", ["const:c85000:8"]]
+ 008db568 ["COPY", "register:4050:8", ["const:c86000:8"]]
- 008da5c0 ["COPY", "tmp:0:8", ["const:78:8"]]
- 008da5c0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008da5c0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008da5c0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008db56c ["COPY", "tmp:0:8", ["const:48:8"]]
+ 008db56c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008db56c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008db56c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-bb6f3a6173f382541d3878ecf6f03cff"></a>

### [`008da5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da5f8.md) → [`008db5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db5a4.md) FUN_008db5a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008db5bc",
      "incomplete_value": false,
      "site": "008db5c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da610",
      "incomplete_value": false,
      "site": "008da61c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:78:8"
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
      "008db5c8",
      "DATA",
      [
        "storage",
        "00c85078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db5c8",
      "DATA",
      [
        "storage",
        "00c86048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da60c ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008db5b8 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008da610 ["COPY", "tmp:0:8", ["const:78:8"]]
- 008da610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008db5bc ["COPY", "tmp:0:8", ["const:48:8"]]
+ 008db5bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008db5bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008db5bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008da640 ["COPY", "register:0:8", ["register:4040:8"]]
- 008da640 ["INT_ADD", "register:40f0:8", ["const:8da640:8", "const:4:8"]]
- 008da640 ["CALLIND", null, ["register:0:8"]]
+ 008db5ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 008db5ec ["INT_ADD", "register:40f0:8", ["const:8db5ec:8", "const:4:8"]]
+ 008db5ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ff017b0cea15777bcee53dd9af5bca70"></a>

### [`008da654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da654.md) → [`008db600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db600.md) FUN_008db600

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008db628",
      "incomplete_value": false,
      "site": "008db62c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da67c",
      "incomplete_value": false,
      "site": "008da680",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:78:8"
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
      "008db62c",
      "DATA",
      [
        "storage",
        "00c85078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db62c",
      "DATA",
      [
        "storage",
        "00c86048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da668 ["INT_ADD", "register:40f0:8", ["const:8da668:8", "const:4:8"]]
- 008da668 ["CALL", null, ["callee:00c58f30:8"]]
+ 008db614 ["INT_ADD", "register:40f0:8", ["const:8db614:8", "const:4:8"]]
+ 008db614 ["CALL", null, ["callee:00c58f30:8"]]
- 008da678 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008db624 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008da67c ["COPY", "tmp:0:8", ["const:78:8"]]
- 008da67c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008da67c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008da67c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008db628 ["COPY", "tmp:0:8", ["const:48:8"]]
+ 008db628 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008db628 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008db628 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cd86cb2d7f8db7c356ac1f5b6f10f510"></a>

### [`008da6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da6ec.md) → [`008db698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db698.md) FUN_008db698

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008db6b8",
      "incomplete_value": false,
      "site": "008db6bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da70c",
      "incomplete_value": false,
      "site": "008da710",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:78:8"
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
      "008db6bc",
      "DATA",
      [
        "storage",
        "00c85078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008db6bc",
      "DATA",
      [
        "storage",
        "00c86048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da708 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008db6b4 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008da70c ["COPY", "tmp:0:8", ["const:78:8"]]
- 008da70c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008da70c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008da70c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008db6b8 ["COPY", "tmp:0:8", ["const:48:8"]]
+ 008db6b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008db6b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008db6b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008da730 ["COPY", "register:0:8", ["register:4040:8"]]
- 008da730 ["INT_ADD", "register:40f0:8", ["const:8da730:8", "const:4:8"]]
- 008da730 ["CALLIND", null, ["register:0:8"]]
+ 008db6dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008db6dc ["INT_ADD", "register:40f0:8", ["const:8db6dc:8", "const:4:8"]]
+ 008db6dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ae9d884a5149b0d02e7370bf460de521"></a>

### [`008da7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da7f8.md) → [`008db7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db7a4.md) FUN_008db7a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) [`008d615c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d615c.md)
- 新版 呼出元 0件  · 呼出先 10件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) [`00866af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866af8.md) [`008d7108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d7/008d7108.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.92% / 新版 98.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008db86c",
      "incomplete_value": true,
      "site": "008db86c",
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
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:6e9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da8c0",
      "incomplete_value": true,
      "site": "008da8c0",
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
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:6a9:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "008db854",
      "READ",
      [
        "storage",
        "002a06a9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008db854",
      "READ",
      [
        "storage",
        "002a06e9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da83c ["COPY", "register:0:8", ["register:4040:8"]]
- 008da83c ["INT_ADD", "register:40f0:8", ["const:8da83c:8", "const:4:8"]]
- 008da83c ["CALLIND", null, ["register:0:8"]]
+ 008db7e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008db7e8 ["INT_ADD", "register:40f0:8", ["const:8db7e8:8", "const:4:8"]]
+ 008db7e8 ["CALLIND", null, ["register:0:8"]]
- 008da85c ["INT_ADD", "register:40f0:8", ["const:8da85c:8", "const:4:8"]]
- 008da85c ["CALL", null, ["callee:00c54d60:8"]]
+ 008db808 ["INT_ADD", "register:40f0:8", ["const:8db808:8", "const:4:8"]]
+ 008db808 ["CALL", null, ["callee:00c54d60:8"]]
- 008da868 ["INT_ADD", "register:40f0:8", ["const:8da868:8", "const:4:8"]]
- 008da868 ["CALL", null, ["callee:0059728c:8"]]
+ 008db814 ["INT_ADD", "register:40f0:8", ["const:8db814:8", "const:4:8"]]
+ 008db814 ["CALL", null, ["callee:0059728c:8"]]
~~~


<a id="compare-eed4b34ac90a4ddad028150829870156"></a>

### [`008dacc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008dacc4.md) → [`008dbc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008dbc70.md) FUN_008dbc70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008dbc7c",
      "incomplete_value": false,
      "site": "008dbc88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dacd0",
      "incomplete_value": false,
      "site": "008dacdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:f8:8"
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
      "008dbc88",
      "DATA",
      [
        "storage",
        "00c850f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dbc88",
      "DATA",
      [
        "storage",
        "00c860c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008daccc ["COPY", "register:4050:8", ["const:c85000:8"]]
+ 008dbc78 ["COPY", "register:4050:8", ["const:c86000:8"]]
- 008dacd0 ["COPY", "tmp:0:8", ["const:f8:8"]]
- 008dacd0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008dacd0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008dacd0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008dbc7c ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 008dbc7c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008dbc7c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008dbc7c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-3c08dd7bffac813f145772549fb358b7"></a>

### [`008dad08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008dad08.md) → [`008dbcb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008dbcb4.md) FUN_008dbcb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008dbccc",
      "incomplete_value": false,
      "site": "008dbcd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dad20",
      "incomplete_value": false,
      "site": "008dad2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:f8:8"
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
      "008dbcd8",
      "DATA",
      [
        "storage",
        "00c850f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dbcd8",
      "DATA",
      [
        "storage",
        "00c860c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dad1c ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008dbcc8 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008dad20 ["COPY", "tmp:0:8", ["const:f8:8"]]
- 008dad20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008dad20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008dad20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008dbccc ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 008dbccc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008dbccc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008dbccc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008dad50 ["COPY", "register:0:8", ["register:4040:8"]]
- 008dad50 ["INT_ADD", "register:40f0:8", ["const:8dad50:8", "const:4:8"]]
- 008dad50 ["CALLIND", null, ["register:0:8"]]
+ 008dbcfc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008dbcfc ["INT_ADD", "register:40f0:8", ["const:8dbcfc:8", "const:4:8"]]
+ 008dbcfc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-394887bb2d2be030fd75b0a5978b26ab"></a>

### [`008dad64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008dad64.md) → [`008dbd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008dbd10.md) FUN_008dbd10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008dbd38",
      "incomplete_value": false,
      "site": "008dbd3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dad8c",
      "incomplete_value": false,
      "site": "008dad90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:f8:8"
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
      "008dbd3c",
      "DATA",
      [
        "storage",
        "00c850f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dbd3c",
      "DATA",
      [
        "storage",
        "00c860c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dad78 ["INT_ADD", "register:40f0:8", ["const:8dad78:8", "const:4:8"]]
- 008dad78 ["CALL", null, ["callee:00c58f30:8"]]
+ 008dbd24 ["INT_ADD", "register:40f0:8", ["const:8dbd24:8", "const:4:8"]]
+ 008dbd24 ["CALL", null, ["callee:00c58f30:8"]]
- 008dad88 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008dbd34 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008dad8c ["COPY", "tmp:0:8", ["const:f8:8"]]
- 008dad8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008dad8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008dad8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008dbd38 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 008dbd38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008dbd38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008dbd38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-28efe1ed7d43fc2f49038b31f9e95e53"></a>

### [`008dadf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008dadf4.md) → [`008dbda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008dbda0.md) FUN_008dbda0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008dbdbc",
      "incomplete_value": false,
      "site": "008dbdc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dae10",
      "incomplete_value": false,
      "site": "008dae14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:f8:8"
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
      "008dbdc0",
      "DATA",
      [
        "storage",
        "00c850f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dbdc0",
      "DATA",
      [
        "storage",
        "00c860c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dae0c ["COPY", "register:4050:8", ["const:c85000:8"]]
+ 008dbdb8 ["COPY", "register:4050:8", ["const:c86000:8"]]
- 008dae10 ["COPY", "tmp:0:8", ["const:f8:8"]]
- 008dae10 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008dae10 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008dae10 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008dbdbc ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 008dbdbc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008dbdbc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008dbdbc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 008dae38 ["COPY", "register:0:8", ["register:4048:8"]]
- 008dae38 ["INT_ADD", "register:40f0:8", ["const:8dae38:8", "const:4:8"]]
- 008dae38 ["CALLIND", null, ["register:0:8"]]
+ 008dbde4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 008dbde4 ["INT_ADD", "register:40f0:8", ["const:8dbde4:8", "const:4:8"]]
+ 008dbde4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9dc760bab578bfac36856ace3ba777df"></a>

### [`008db1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db1cc.md) → [`008dc178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dc/008dc178.md) _INIT_172

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.80% / 新版 67.80%

優先判定に残った影響 `call_argument_candidate` 15件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 27件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dc2d4",
      "incomplete_value": true,
      "site": "008dc2d8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dc2c4",
      "incomplete_value": true,
      "site": "008dc2d8",
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
      "definition_site": "008dc2cc",
      "incomplete_value": true,
      "site": "008dc2d8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008db1fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db208",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008db224",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008dc1a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008dc1b4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008dc1d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008db32c ["INT_ADD", "register:40f0:8", ["const:8db32c:8", "const:4:8"]]
- 008db32c ["CALL", null, ["callee:0043bb58:8"]]
+ 008dc2d8 ["INT_ADD", "register:40f0:8", ["const:8dc2d8:8", "const:4:8"]]
+ 008dc2d8 ["CALL", null, ["callee:0043bb58:8"]]
- 008db340 ["INT_ADD", "register:40f0:8", ["const:8db340:8", "const:4:8"]]
- 008db340 ["CALL", null, ["callee:0043bb58:8"]]
+ 008dc2ec ["INT_ADD", "register:40f0:8", ["const:8dc2ec:8", "const:4:8"]]
+ 008dc2ec ["CALL", null, ["callee:0043bb58:8"]]
- 008db37c ["INT_ADD", "register:40f0:8", ["const:8db37c:8", "const:4:8"]]
- 008db37c ["CALL", null, ["callee:0043bb58:8"]]
+ 008dc328 ["INT_ADD", "register:40f0:8", ["const:8dc328:8", "const:4:8"]]
+ 008dc328 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-773937939ab3ad8f9af37a9e35b186d6"></a>

### [`008db55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db55c.md) → [`008dc508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dc/008dc508.md) FUN_008dc508

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008ddff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddff4.md) · 呼出先 3件 [`008db670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db670.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008defa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008defa0.md) · 呼出先 3件 [`008dc61c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dc/008dc61c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.77% / 新版 63.77%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008db624",
      "incomplete_value": false,
      "site": "008db628",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "008db620",
      "incomplete_value": true,
      "site": "008db628",
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
            "const:8:8"
          ]
        ]
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
      "unmatched:008db55c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db560",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db564",
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
      "008dc508",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008dc50c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008dc510",
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
- 008db628 ["INT_ADD", "register:40f0:8", ["const:8db628:8", "const:4:8"]]
- 008db628 ["CALL", null, ["callee:00c54d90:8"]]
+ 008dc5d4 ["INT_ADD", "register:40f0:8", ["const:8dc5d4:8", "const:4:8"]]
+ 008dc5d4 ["CALL", null, ["callee:00c54d90:8"]]
- 008db55c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008db55c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008db55c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 008db55c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008db560 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008db560 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
~~~


<a id="compare-9bf14d1bdb2fa7219359202161d215b0"></a>

### [`008db670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db670.md) → [`008dc61c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dc/008dc61c.md) FUN_008dc61c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008db55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db55c.md) [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 4件 [`00666360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666360.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`008dc508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dc/008dc508.md) [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md) · 呼出先 4件 [`00666710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666710.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 3件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dc694",
      "incomplete_value": true,
      "site": "008dc69c",
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
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008db694"
      ],
      [
        "CONDITIONAL_JUMP",
        "008dc640"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008dc640",
      "incomplete_value": true,
      "site": "008dc688",
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
                "register:4000:8"
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
      "definition_site": "008db694",
      "incomplete_value": true,
      "site": "008db6dc",
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008db694"
      ],
      [
        "CONDITIONAL_JUMP",
        "008dc640"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008dc640",
      "incomplete_value": true,
      "site": "008dc688",
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
                "register:4000:8"
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
      "definition_site": "008db694",
      "incomplete_value": true,
      "site": "008db6dc",
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
    "ordinal": 7,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008db694",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dc668"
      ]
    ],
    [
      "unmatched:008db69c",
      "READ",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db6a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dc6f0"
      ]
    ]
  ],
  "added": [
    [
      "008dc640",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dc668"
      ]
    ],
    [
      "008dc648",
      "READ",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008dc650",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dc6f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008db6f0 ["INT_ADD", "register:40f0:8", ["const:8db6f0:8", "const:4:8"]]
- 008db6f0 ["CALL", null, ["callee:00c54d90:8"]]
+ 008dc69c ["INT_ADD", "register:40f0:8", ["const:8dc69c:8", "const:4:8"]]
+ 008dc69c ["CALL", null, ["callee:00c54d90:8"]]
- 008db694 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008db694 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 008db698 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 008db698 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-86389484688ef2c9982d050abdf22baa"></a>

### [`008db748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db748.md) → [`008dc6f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dc/008dc6f4.md) FUN_008dc6f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`00664870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664870.md) [`00665cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665cbc.md) [`00665cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665cf8.md)
- 新版 呼出元 1件 [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md) · 呼出先 14件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00664bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664bb0.md) [`00664c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c20.md) [`0066606c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/0066606c.md) [`006660a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/006660a8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.97% / 新版 63.97%

優先判定に残った影響 `call_argument_candidate` 31件, `store_condition` 4件, `unresolved_branch_alignment` 30件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 38件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dc778",
      "incomplete_value": true,
      "site": "008dc780",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dc788",
      "incomplete_value": true,
      "site": "008dc79c",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dc790",
      "incomplete_value": true,
      "site": "008dc79c",
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
                "const:30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008db7e4",
      "incomplete_value": true,
      "site": "008db7f0",
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
                "const:30:8"
              ]
            ]
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
      "unmatched:008db758",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db75c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db760",
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
      "008dc704",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008dc708",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008dc70c",
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
- 008db7d4 ["INT_ADD", "register:40f0:8", ["const:8db7d4:8", "const:4:8"]]
- 008db7d4 ["CALL", null, ["callee:00676e50:8"]]
+ 008dc780 ["INT_ADD", "register:40f0:8", ["const:8dc780:8", "const:4:8"]]
+ 008dc780 ["CALL", null, ["callee:00676e50:8"]]
- 008db7f0 ["INT_ADD", "register:40f0:8", ["const:8db7f0:8", "const:4:8"]]
- 008db7f0 ["CALL", null, ["callee:00676e50:8"]]
+ 008dc79c ["INT_ADD", "register:40f0:8", ["const:8dc79c:8", "const:4:8"]]
+ 008dc79c ["CALL", null, ["callee:00676e50:8"]]
- 008db80c ["INT_ADD", "register:40f0:8", ["const:8db80c:8", "const:4:8"]]
- 008db80c ["CALL", null, ["callee:00676e50:8"]]
+ 008dc7b8 ["INT_ADD", "register:40f0:8", ["const:8dc7b8:8", "const:4:8"]]
+ 008dc7b8 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-6520c9d6f8a8418d6e1705e14b19b5d0"></a>

### [`008dc174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc174.md) → [`008dd120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dd/008dd120.md) FUN_008dd120

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008ddcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddcac.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 1件 [`008dec58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008dec58.md) · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.29% / 新版 69.29%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dc20c",
      "incomplete_value": false,
      "site": "008dc214",
      "value": [
        "leaf",
        "const:b:8"
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dd3d8",
      "incomplete_value": true,
      "site": "008dd3e0",
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
            "const:4e6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dc42c",
      "incomplete_value": false,
      "site": "008dc434",
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
            "const:38e:8"
          ]
        ]
      ]
    },
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dd41c",
      "incomplete_value": true,
      "site": "008dd420",
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
    "ordinal": 35,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008dc178",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008dc17c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008dc180",
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
      "008dd124",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008dd128",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008dd12c",
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
- 008dc214 ["INT_ADD", "register:40f0:8", ["const:8dc214:8", "const:4:8"]]
- 008dc214 ["CALL", null, ["callee:0047d134:8"]]
+ 008dd1c0 ["INT_ADD", "register:40f0:8", ["const:8dd1c0:8", "const:4:8"]]
+ 008dd1c0 ["CALL", null, ["callee:0047d134:8"]]
- 008dc434 ["INT_ADD", "register:40f0:8", ["const:8dc434:8", "const:4:8"]]
- 008dc434 ["CALL", null, ["callee:00c59230:8"]]
+ 008dd3e0 ["INT_ADD", "register:40f0:8", ["const:8dd3e0:8", "const:4:8"]]
+ 008dd3e0 ["CALL", null, ["callee:00c59230:8"]]
- 008dc474 ["INT_ADD", "register:40f0:8", ["const:8dc474:8", "const:4:8"]]
- 008dc474 ["CALL", null, ["callee:0048d1b4:8"]]
+ 008dd420 ["INT_ADD", "register:40f0:8", ["const:8dd420:8", "const:4:8"]]
+ 008dd420 ["CALL", null, ["callee:0048d1b4:8"]]
~~~


<a id="compare-a24bb9e6f294dbed07455e55f964aec1"></a>

### [`008dc6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc6b8.md) → [`008dd664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dd/008dd664.md) FUN_008dd664

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008dda58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dda58.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468d48.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`008dea04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008dea04.md) · 呼出先 9件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00469068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469068.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 18件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dc700",
      "incomplete_value": true,
      "site": "008dc708",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dc6f4",
      "incomplete_value": false,
      "site": "008dc708",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dc6fc",
      "incomplete_value": false,
      "site": "008dc708",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:168:8"
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
      "unmatched:008dc6e4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008dc6f4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:008dc6fc",
      "PARAM",
      [
        "storage",
        "00c85168",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008dd690",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008dd6a0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008dd6a8",
      "PARAM",
      [
        "storage",
        "00c86138",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dc708 ["INT_ADD", "register:40f0:8", ["const:8dc708:8", "const:4:8"]]
- 008dc708 ["CALL", null, ["callee:00c596b0:8"]]
+ 008dd6b4 ["INT_ADD", "register:40f0:8", ["const:8dd6b4:8", "const:4:8"]]
+ 008dd6b4 ["CALL", null, ["callee:00c596b0:8"]]
- 008dc72c ["INT_ADD", "register:40f0:8", ["const:8dc72c:8", "const:4:8"]]
- 008dc72c ["CALL", null, ["callee:0048af58:8"]]
+ 008dd6d8 ["INT_ADD", "register:40f0:8", ["const:8dd6d8:8", "const:4:8"]]
+ 008dd6d8 ["CALL", null, ["callee:0048af58:8"]]
- 008dc7b8 ["INT_ADD", "register:40f0:8", ["const:8dc7b8:8", "const:4:8"]]
- 008dc7b8 ["CALL", null, ["callee:0048a2ac:8"]]
+ 008dd764 ["INT_ADD", "register:40f0:8", ["const:8dd764:8", "const:4:8"]]
+ 008dd764 ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-f6406d937bc1f402b66d15570831d6b0"></a>

### [`008dc988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc988.md) → [`008dd934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dd/008dd934.md) FUN_008dd934

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 12件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00615f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f20.md) [`0065351c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/0065351c.md)
- 新版 呼出元 1件 [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md) · 呼出先 12件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`006162d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/006162d0.md) [`006538cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006538cc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.96% / 新版 76.96%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 2件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dda7c",
      "incomplete_value": true,
      "site": "008dda84",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dda80",
      "incomplete_value": true,
      "site": "008dda84",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dcd34",
      "incomplete_value": true,
      "site": "008dcd40",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:008dc9b4",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ],
    [
      "unmatched:008dc9bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:008dc9c8",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008dd960",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ],
    [
      "008dd968",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "008dd974",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008dcad8 ["INT_ADD", "register:40f0:8", ["const:8dcad8:8", "const:4:8"]]
- 008dcad8 ["CALL", null, ["callee:006162d0:8"]]
+ 008dda84 ["INT_ADD", "register:40f0:8", ["const:8dda84:8", "const:4:8"]]
+ 008dda84 ["CALL", null, ["callee:006162d0:8"]]
- 008dcd40 ["INT_ADD", "register:40f0:8", ["const:8dcd40:8", "const:4:8"]]
- 008dcd40 ["CALL", null, ["callee:00c590a0:8"]]
+ 008ddcec ["INT_ADD", "register:40f0:8", ["const:8ddcec:8", "const:4:8"]]
+ 008ddcec ["CALL", null, ["callee:00c590a0:8"]]
- 008dc9b4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008dc9b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-3be7042478b89bb641f8c656babe9340"></a>

### [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) → [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md) FUN_008de0f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008ddd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddd08.md) · 呼出先 29件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`008decb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008decb4.md) · 呼出先 29件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination, store_value, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.02% / 新版 89.02%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_destination` 1件, `store_value` 13件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008de4e0",
      "incomplete_value": false,
      "site": "008de4e0",
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
            "const:6ac:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dd534",
      "incomplete_value": false,
      "site": "008dd534",
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
            "const:6dc:8"
          ]
        ]
      ]
    },
    "ordinal": 65,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008de5a8",
      "incomplete_value": true,
      "site": "008de5a8",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:954:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dd5fc",
      "incomplete_value": true,
      "site": "008dd5fc",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:885:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 72,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008de5ac",
      "incomplete_value": true,
      "site": "008de5ac",
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
      "definition_site": "008dd600",
      "incomplete_value": true,
      "site": "008dd600",
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
    "ordinal": 73,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008de1dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00665cbc"
      ]
    ],
    [
      "008de4e0",
      "WRITE",
      [
        "storage",
        "00ca46dc",
        null,
        "undefined4"
      ]
    ],
    [
      "008de598",
      "READ",
      [
        "storage",
        "002b6885",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008de1dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0066606c"
      ]
    ],
    [
      "008de4e0",
      "WRITE",
      [
        "storage",
        "00ca56ac",
        null,
        "undefined4"
      ]
    ],
    [
      "008de598",
      "READ",
      [
        "storage",
        "002b6954",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dd230 ["INT_ADD", "register:40f0:8", ["const:8dd230:8", "const:4:8"]]
- 008dd230 ["CALL", null, ["ram:665cbc:8"]]
+ 008de1dc ["INT_ADD", "register:40f0:8", ["const:8de1dc:8", "const:4:8"]]
+ 008de1dc ["CALL", null, ["ram:66606c:8"]]
- 008dd534 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6dc:8"]]
- 008dd534 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:4"]]
+ 008de4e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6ac:8"]]
+ 008de4e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:4"]]
- 008dd758 ["INT_ADD", "register:40f0:8", ["const:8dd758:8", "const:4:8"]]
- 008dd758 ["CALL", null, ["callee:00c59230:8"]]
+ 008de704 ["INT_ADD", "register:40f0:8", ["const:8de704:8", "const:4:8"]]
+ 008de704 ["CALL", null, ["callee:00c59230:8"]]
~~~


<a id="compare-2a34580440a9e5b703b9322c557103ba"></a>

### [`008dda58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dda58.md) → [`008dea04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008dea04.md) FUN_008dea04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008deaac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008de/008deaac.md) · 呼出先 8件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008dc6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc6b8.md)
- 新版 呼出元 1件 [`008dfa58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008df/008dfa58.md) · 呼出先 8件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008dd664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dd/008dd664.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.63% / 新版 94.63%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008dea28",
      "incomplete_value": true,
      "site": "008dea28",
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
      "definition_site": "008dda7c",
      "incomplete_value": true,
      "site": "008dda7c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dea30",
      "incomplete_value": false,
      "site": "008dea44",
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
      "definition_site": "008dda84",
      "incomplete_value": false,
      "site": "008dda98",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dea38",
      "incomplete_value": false,
      "site": "008dea44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:138:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dda8c",
      "incomplete_value": false,
      "site": "008dda98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:168:8"
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
      "008dea24",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008dea30",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008dea38",
      "PARAM",
      [
        "storage",
        "00c85168",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008dea24",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008dea30",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008dea38",
      "PARAM",
      [
        "storage",
        "00c86138",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dda98 ["INT_ADD", "register:40f0:8", ["const:8dda98:8", "const:4:8"]]
- 008dda98 ["CALL", null, ["callee:00c596b0:8"]]
+ 008dea44 ["INT_ADD", "register:40f0:8", ["const:8dea44:8", "const:4:8"]]
+ 008dea44 ["CALL", null, ["callee:00c596b0:8"]]
- 008ddb08 ["INT_ADD", "register:40f0:8", ["const:8ddb08:8", "const:4:8"]]
- 008ddb08 ["CALL", null, ["callee:008dd664:8"]]
+ 008deab4 ["INT_ADD", "register:40f0:8", ["const:8deab4:8", "const:4:8"]]
+ 008deab4 ["CALL", null, ["callee:008dd664:8"]]
- 008dda70 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 008dea1c ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-552cdd07da8b5b5942cca338f664481e"></a>

### [`008ddcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddcac.md) → [`008dec58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008dec58.md) FUN_008dec58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008ddff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddff4.md) · 呼出先 1件 [`008dc174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc174.md)
- 新版 呼出元 1件 [`008defa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008defa0.md) · 呼出先 1件 [`008dd120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dd/008dd120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ddce8",
      "incomplete_value": true,
      "site": "008ddcec",
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
            "INT_LEFT",
            "8",
            [
              "INT_SEXT",
              [
                "leaf",
                "const:8:4"
              ]
            ]
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
      "unmatched:008ddcd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008deca4"
      ]
    ]
  ],
  "added": [
    [
      "008dec84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008deca4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ddcec ["INT_ADD", "register:40f0:8", ["const:8ddcec:8", "const:4:8"]]
- 008ddcec ["CALL", null, ["callee:008dd120:8"]]
+ 008dec98 ["INT_ADD", "register:40f0:8", ["const:8dec98:8", "const:4:8"]]
+ 008dec98 ["CALL", null, ["callee:008dd120:8"]]
- 008ddcd8 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 008ddcf4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008ddcf4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008deca0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008deca0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-0654315b9db036d2169d782b397bdc80"></a>

### [`008ddd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddd08.md) → [`008decb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008decb4.md) FUN_008decb4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 13件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 13件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md) [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.66% / 新版 90.66%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008dee34",
      "incomplete_value": true,
      "site": "008dee44",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:370:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dde88",
      "incomplete_value": true,
      "site": "008dde98",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:320:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dde30",
      "incomplete_value": false,
      "site": "008dde6c",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dde34",
      "incomplete_value": false,
      "site": "008dde6c",
      "value": [
        "leaf",
        "const:e90:8"
      ]
    },
    "ordinal": 9,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ddd30",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008ddd34",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008ddd3c",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008decdc",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008dece0",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "008dece8",
      "WRITE",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dde6c ["INT_ADD", "register:40f0:8", ["const:8dde6c:8", "const:4:8"]]
- 008dde6c ["CALL", null, ["callee:00c59130:8"]]
+ 008dee18 ["INT_ADD", "register:40f0:8", ["const:8dee18:8", "const:4:8"]]
+ 008dee18 ["CALL", null, ["callee:00c59130:8"]]
- 008dde9c ["INT_ADD", "register:40f0:8", ["const:8dde9c:8", "const:4:8"]]
- 008dde9c ["CALL", null, ["callee:0046cd24:8"]]
+ 008dee48 ["INT_ADD", "register:40f0:8", ["const:8dee48:8", "const:4:8"]]
+ 008dee48 ["CALL", null, ["callee:0046cd24:8"]]
- 008ddd24 ["COPY", "register:40d8:8", ["const:ca4000:8"]]
+ 008decd0 ["COPY", "register:40d8:8", ["const:ca5000:8"]]
~~~


<a id="compare-6485a665ef71b530e407edd355b3815b"></a>

### [`008ddff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddff4.md) → [`008defa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008defa0.md) FUN_008defa0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 24件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 25件 [`0044deb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044deb0.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d51c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.19% / 新版 88.19%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 4件, `store_condition` 13件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008df31c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008de370",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008df41c",
      "incomplete_value": true,
      "site": "008df424",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 17,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008df840",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008de894",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "008df028",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008de0b4",
      "DATA",
      [
        "storage",
        "00332098",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:008de0b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008df0a4"
      ]
    ]
  ],
  "added": [
    [
      "008df028",
      "READ",
      [
        "storage",
        "002c41e8",
        null,
        "undefined8"
      ]
    ],
    [
      "008df060",
      "DATA",
      [
        "storage",
        "00332098",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "008df064",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008df0a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008de370 ["INT_ADD", "register:40f0:8", ["const:8de370:8", "const:4:8"]]
- 008de370 ["CALL", null, ["ram:47ad34:8"]]
+ 008df31c ["INT_ADD", "register:40f0:8", ["const:8df31c:8", "const:4:8"]]
+ 008df31c ["CALL", null, ["ram:47b054:8"]]
- 008de478 ["INT_ADD", "register:40f0:8", ["const:8de478:8", "const:4:8"]]
- 008de478 ["CALL", null, ["callee:0046cd24:8"]]
+ 008df424 ["INT_ADD", "register:40f0:8", ["const:8df424:8", "const:4:8"]]
+ 008df424 ["CALL", null, ["callee:0046cd24:8"]]
- 008de894 ["INT_ADD", "register:40f0:8", ["const:8de894:8", "const:4:8"]]
- 008de894 ["CALL", null, ["ram:47ad34:8"]]
+ 008df840 ["INT_ADD", "register:40f0:8", ["const:8df840:8", "const:4:8"]]
+ 008df840 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-143750f4f190383c46bcfdc05a4f316d"></a>

### [`008deaac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008de/008deaac.md) → [`008dfa58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008df/008dfa58.md) FUN_008dfa58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 25件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 25件 [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md) [`00468fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468fc0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 64.26% / 新版 64.26%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 24件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 20件, `unresolved_store_alignment` 14件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008dfaa8",
      "incomplete_value": true,
      "site": "008dfaa8",
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
      "definition_site": "008deafc",
      "incomplete_value": true,
      "site": "008deafc",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "008dfac8",
      "incomplete_value": true,
      "site": "008dfac8",
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
      "definition_site": "008deb1c",
      "incomplete_value": true,
      "site": "008deb1c",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dfad0",
      "incomplete_value": false,
      "site": "008dfae0",
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
      "definition_site": "008deb24",
      "incomplete_value": false,
      "site": "008deb34",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008deaec",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008dfaa4",
      "READ",
      [
        "storage",
        "00ca5030",
        null,
        "undefined8"
      ]
    ],
    [
      "008dfab8",
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
      "008dfa98",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008dfaa4",
      "READ",
      [
        "storage",
        "00ca5ff0",
        null,
        "undefined8"
      ]
    ],
    [
      "008dfab8",
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
- 008deb34 ["INT_ADD", "register:40f0:8", ["const:8deb34:8", "const:4:8"]]
- 008deb34 ["CALL", null, ["callee:00c596b0:8"]]
+ 008dfae0 ["INT_ADD", "register:40f0:8", ["const:8dfae0:8", "const:4:8"]]
+ 008dfae0 ["CALL", null, ["callee:00c596b0:8"]]
- 008deba0 ["INT_ADD", "register:40f0:8", ["const:8deba0:8", "const:4:8"]]
- 008deba0 ["CALL", null, ["callee:00467ec0:8"]]
+ 008dfb4c ["INT_ADD", "register:40f0:8", ["const:8dfb4c:8", "const:4:8"]]
+ 008dfb4c ["CALL", null, ["callee:00467ec0:8"]]
- 008debac ["INT_ADD", "register:40f0:8", ["const:8debac:8", "const:4:8"]]
- 008debac ["CALL", null, ["callee:0046cd24:8"]]
+ 008dfb58 ["INT_ADD", "register:40f0:8", ["const:8dfb58:8", "const:4:8"]]
+ 008dfb58 ["CALL", null, ["callee:0046cd24:8"]]
~~~


<a id="compare-275e5679a9651902eb401a3e05777d1c"></a>

### [`008e0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0a80.md) → [`008e1a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e1a2c.md) FUN_008e1a2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008e0648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0648.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`008e15f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e15f4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e1a38",
      "incomplete_value": false,
      "site": "008e1a3c",
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
      "definition_site": "008e0a8c",
      "incomplete_value": false,
      "site": "008e0a90",
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
      "008e1a38",
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
      "008e1a38",
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
- 008e0a90 ["INT_ADD", "register:40f0:8", ["const:8e0a90:8", "const:4:8"]]
- 008e0a90 ["CALL", null, ["callee:0043bad8:8"]]
+ 008e1a3c ["INT_ADD", "register:40f0:8", ["const:8e1a3c:8", "const:4:8"]]
+ 008e1a3c ["CALL", null, ["callee:0043bad8:8"]]
- 008e0a88 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008e1a34 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008e0a8c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008e0a8c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e0a8c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e0a8c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e1a38 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008e1a38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e1a38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e1a38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c994ed41c8df2845146fb6bf280abe36"></a>

### [`008e0c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0c84.md) → [`008e1c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e1c30.md) FUN_008e1c30

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008ddd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddd08.md) · 呼出先 13件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00758228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758228.md) [`00863734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00863/00863734.md)
- 新版 呼出元 1件 [`008decb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008decb4.md) · 呼出先 13件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00633764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633764.md) [`007585d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00758/007585d8.md) [`008646e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00864/008646e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.69% / 新版 82.69%

優先判定に残った影響 `call_argument_candidate` 36件, `store_destination` 7件, `store_value` 27件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e1c68",
      "incomplete_value": false,
      "site": "008e1c74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:160:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e0cbc",
      "incomplete_value": false,
      "site": "008e0cc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:190:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e1cb0",
      "incomplete_value": true,
      "site": "008e1cb0",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:49d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e0d04",
      "incomplete_value": true,
      "site": "008e0d04",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:3ce:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e1cc8",
      "incomplete_value": true,
      "site": "008e1cc8",
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
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:f91:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e0d1c",
      "incomplete_value": true,
      "site": "008e0d1c",
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
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:f47:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e1c74",
      "DATA",
      [
        "storage",
        "00c85190",
        null,
        "pointer"
      ]
    ],
    [
      "008e1c80",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008e1ca0",
      "READ",
      [
        "storage",
        "002b63ce",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e1c74",
      "DATA",
      [
        "storage",
        "00c86160",
        null,
        "pointer"
      ]
    ],
    [
      "008e1c80",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008e1ca0",
      "READ",
      [
        "storage",
        "002b649d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e0cb4 ["INT_ADD", "register:40f0:8", ["const:8e0cb4:8", "const:4:8"]]
- 008e0cb4 ["CALL", null, ["callee:007585d8:8"]]
+ 008e1c60 ["INT_ADD", "register:40f0:8", ["const:8e1c60:8", "const:4:8"]]
+ 008e1c60 ["CALL", null, ["callee:007585d8:8"]]
- 008e0cb8 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008e1c64 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e0cbc ["COPY", "tmp:0:8", ["const:190:8"]]
- 008e0cbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e0cbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e0cbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e1c68 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 008e1c68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e1c68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e1c68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e2017f1a807bf27487368069a1b28639"></a>

### [`008e1968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e1/008e1968.md) → [`008e2914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e2/008e2914.md) FUN_008e2914

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e292c",
      "incomplete_value": false,
      "site": "008e2930",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e1980",
      "incomplete_value": false,
      "site": "008e1984",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:400:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e2968",
      "incomplete_value": false,
      "site": "008e296c",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e19bc",
      "incomplete_value": false,
      "site": "008e19c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
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
      "008e2930",
      "DATA",
      [
        "storage",
        "00c78400",
        null,
        "pointer"
      ]
    ],
    [
      "008e296c",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008e2930",
      "DATA",
      [
        "storage",
        "00c793d0",
        null,
        "pointer"
      ]
    ],
    [
      "008e296c",
      "DATA",
      [
        "storage",
        "00c758b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e197c ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 008e2928 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 008e1980 ["COPY", "tmp:0:8", ["const:400:8"]]
- 008e1980 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e1980 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e1980 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e292c ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 008e292c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e292c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e292c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008e1994 ["INT_ADD", "register:40f0:8", ["const:8e1994:8", "const:4:8"]]
- 008e1994 ["CALL", null, ["callee:00c54d90:8"]]
+ 008e2940 ["INT_ADD", "register:40f0:8", ["const:8e2940:8", "const:4:8"]]
+ 008e2940 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-e7d61d35556203c518d0cce01953ce39"></a>

### [`008e1a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e1/008e1a08.md) → [`008e29b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e2/008e29b4.md) _INIT_173

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e29f0",
      "incomplete_value": true,
      "site": "008e2a0c",
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e1a44",
      "incomplete_value": true,
      "site": "008e1a60",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:f66:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e2a14",
      "incomplete_value": true,
      "site": "008e2a30",
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e1a68",
      "incomplete_value": true,
      "site": "008e1a84",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:f79:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e2a34",
      "incomplete_value": true,
      "site": "008e2a50",
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e1a88",
      "incomplete_value": true,
      "site": "008e1aa4",
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
                "const:d6e:8"
              ]
            ]
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
      "008e29f0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008e2a14",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008e2a34",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e29f0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008e2a14",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "008e2a34",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e1b68 ["INT_ADD", "register:40f0:8", ["const:8e1b68:8", "const:4:8"]]
- 008e1b68 ["CALL", null, ["callee:0043bb58:8"]]
+ 008e2b14 ["INT_ADD", "register:40f0:8", ["const:8e2b14:8", "const:4:8"]]
+ 008e2b14 ["CALL", null, ["callee:0043bb58:8"]]
- 008e1c3c ["INT_ADD", "register:40f0:8", ["const:8e1c3c:8", "const:4:8"]]
- 008e1c3c ["CALL", null, ["callee:00c58ed0:8"]]
+ 008e2be8 ["INT_ADD", "register:40f0:8", ["const:8e2be8:8", "const:4:8"]]
+ 008e2be8 ["CALL", null, ["callee:00c58ed0:8"]]
- 008e1a30 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 008e29dc ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-dd64fce3199c359cb0af68095a8fbed6"></a>

### [`008e1d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e1/008e1d98.md) → [`008e2d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e2/008e2d44.md) FUN_008e2d44

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008e5fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5fd0.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`008e6f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e6f7c.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 88.55% / 新版 88.55%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e2d90",
      "incomplete_value": false,
      "site": "008e2d98",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e1de4",
      "incomplete_value": false,
      "site": "008e1dec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e2dbc",
      "incomplete_value": true,
      "site": "008e2dcc",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:375:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e1e10",
      "incomplete_value": true,
      "site": "008e1e20",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:297:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e2dd0",
      "incomplete_value": true,
      "site": "008e2dd0",
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e1e24",
      "incomplete_value": true,
      "site": "008e1e24",
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e2d98",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "008e2dbc",
      "READ",
      [
        "storage",
        "002b4297",
        null,
        "string"
      ]
    ],
    [
      "008e2dc0",
      "READ",
      [
        "storage",
        "002b42a6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e2d98",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "008e2dbc",
      "READ",
      [
        "storage",
        "002b4375",
        null,
        "string"
      ]
    ],
    [
      "008e2dc0",
      "READ",
      [
        "storage",
        "002b4384",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e1dd0 ["INT_ADD", "register:40f0:8", ["const:8e1dd0:8", "const:4:8"]]
- 008e1dd0 ["CALL", null, ["callee:00488180:8"]]
+ 008e2d7c ["INT_ADD", "register:40f0:8", ["const:8e2d7c:8", "const:4:8"]]
+ 008e2d7c ["CALL", null, ["callee:00488180:8"]]
- 008e1de0 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 008e2d8c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 008e1de4 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 008e1de4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e1de4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e1de4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e2d90 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 008e2d90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e2d90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e2d90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-53799e6c77fcc444afafe24c30c54c9d"></a>

### [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) → [`008e38bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e38bc.md) FUN_008e38bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008e5fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5fd0.md) · 呼出先 23件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)
- 新版 呼出元 1件 [`008e6f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e6f7c.md) · 呼出先 23件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 93.70% / 新版 93.70%

優先判定に残った影響 `store_destination` 1件, `store_value` 11件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e3900",
      "incomplete_value": false,
      "site": "008e3908",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e2954",
      "incomplete_value": false,
      "site": "008e295c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e3920",
      "incomplete_value": true,
      "site": "008e392c",
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
                "const:832:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e2974",
      "incomplete_value": true,
      "site": "008e2980",
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
                "const:763:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e3a4c",
      "incomplete_value": true,
      "site": "008e3a4c",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:c9e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e2aa0",
      "incomplete_value": true,
      "site": "008e2aa0",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:bd1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 31,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e3908",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "008e3920",
      "READ",
      [
        "storage",
        "002b8763",
        null,
        "string"
      ]
    ],
    [
      "008e3a3c",
      "READ",
      [
        "storage",
        "002abbd1",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e3908",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "008e3920",
      "READ",
      [
        "storage",
        "002b8832",
        null,
        "string"
      ]
    ],
    [
      "008e3a3c",
      "READ",
      [
        "storage",
        "002abc9e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e2948 ["INT_ADD", "register:40f0:8", ["const:8e2948:8", "const:4:8"]]
- 008e2948 ["CALL", null, ["callee:00488180:8"]]
+ 008e38f4 ["INT_ADD", "register:40f0:8", ["const:8e38f4:8", "const:4:8"]]
+ 008e38f4 ["CALL", null, ["callee:00488180:8"]]
- 008e2950 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 008e38fc ["COPY", "register:4040:8", ["const:c65000:8"]]
- 008e2954 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 008e2954 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e2954 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e2954 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e3900 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 008e3900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e3900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e3900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0dfefd244fa07c56baa40f2fd5592da3"></a>

### [`008e3400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3400.md) → [`008e43ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e43ac.md) FUN_008e43ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008e6700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e6/008e6700.md) · 呼出先 22件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f88.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)
- 新版 呼出元 1件 [`008e76ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e7/008e76ac.md) · 呼出先 22件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f34.md) [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.25% / 新版 84.25%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 4件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e4674",
      "incomplete_value": false,
      "site": "008e4674",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e36c8",
      "incomplete_value": false,
      "site": "008e36c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e47cc",
      "incomplete_value": false,
      "site": "008e47cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:200:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e3820",
      "incomplete_value": false,
      "site": "008e3820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:230:8"
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e49bc",
      "incomplete_value": true,
      "site": "008e49bc",
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
      "definition_site": "008e3a10",
      "incomplete_value": true,
      "site": "008e3a10",
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
    "ordinal": 60,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008e3444",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008e3448",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e4418"
      ]
    ],
    [
      "unmatched:008e3450",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008e43f0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008e43f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e4418"
      ]
    ],
    [
      "008e43fc",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e3460 ["INT_ADD", "register:40f0:8", ["const:8e3460:8", "const:4:8"]]
- 008e3460 ["CALL", null, ["callee:00c596b0:8"]]
+ 008e440c ["INT_ADD", "register:40f0:8", ["const:8e440c:8", "const:4:8"]]
+ 008e440c ["CALL", null, ["callee:00c596b0:8"]]
- 008e3438 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 008e43e4 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 008e3444 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 008e3444 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-293f08f1113b30e549c3e06b5206d7d4"></a>

### [`008e3da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3da4.md) → [`008e4d50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e4d50.md) FUN_008e4d50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 21件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md)
- 新版 呼出元 1件 [`006b3888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3888.md) · 呼出先 21件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046a5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046a5b0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.53% / 新版 99.53%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008e4d9c",
      "incomplete_value": true,
      "site": "008e4d9c",
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
      "definition_site": "008e3df0",
      "incomplete_value": true,
      "site": "008e3df0",
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
      "definition_site": "008e4da4",
      "incomplete_value": false,
      "site": "008e4db4",
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
      "definition_site": "008e3df8",
      "incomplete_value": false,
      "site": "008e3e08",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e4dac",
      "incomplete_value": false,
      "site": "008e4db4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e3e00",
      "incomplete_value": false,
      "site": "008e3e08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
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
      "008e4d98",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008e4da4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e4dac",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008e4d98",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008e4da4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e4dac",
      "PARAM",
      [
        "storage",
        "00c748b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e3e08 ["INT_ADD", "register:40f0:8", ["const:8e3e08:8", "const:4:8"]]
- 008e3e08 ["CALL", null, ["callee:00c596b0:8"]]
+ 008e4db4 ["INT_ADD", "register:40f0:8", ["const:8e4db4:8", "const:4:8"]]
+ 008e4db4 ["CALL", null, ["callee:00c596b0:8"]]
- 008e3de8 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 008e4d94 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 008e3dec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 008e3dec ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 008e4d98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 008e4d98 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1ba3e80eeebff35195528b458b79e163"></a>

### [`008e484c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e484c.md) → [`008e57f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e57f8.md) FUN_008e57f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) · 呼出先 11件 [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00597e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e48.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006b2db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2db0.md) · 呼出先 11件 [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00598168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598168.md) [`005981a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/005981a8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e588c",
      "value": [
        "leaf",
        "ram:a85cac:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e48e0",
      "value": [
        "leaf",
        "ram:a84cb8:8"
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e58c4",
      "value": [
        "leaf",
        "ram:a85ccc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e4918",
      "value": [
        "leaf",
        "ram:a84cd8:8"
      ]
    },
    "ordinal": 8,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e588c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84cb8"
      ]
    ],
    [
      "008e58c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84cd8"
      ]
    ]
  ],
  "added": [
    [
      "008e588c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a85cac"
      ]
    ],
    [
      "008e58c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a85ccc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e48e0 ["INT_ADD", "register:40f0:8", ["const:8e48e0:8", "const:4:8"]]
- 008e48e0 ["CALL", null, ["ram:a84cb8:8"]]
+ 008e588c ["INT_ADD", "register:40f0:8", ["const:8e588c:8", "const:4:8"]]
+ 008e588c ["CALL", null, ["ram:a85cac:8"]]
- 008e4918 ["INT_ADD", "register:40f0:8", ["const:8e4918:8", "const:4:8"]]
- 008e4918 ["CALL", null, ["ram:a84cd8:8"]]
+ 008e58c4 ["INT_ADD", "register:40f0:8", ["const:8e58c4:8", "const:4:8"]]
+ 008e58c4 ["CALL", null, ["ram:a85ccc:8"]]
- 008e4874 ["INT_ADD", "register:40f0:8", ["const:8e4874:8", "const:4:8"]]
- 008e4874 ["CALL", null, ["callee:008524fc:8"]]
+ 008e5820 ["INT_ADD", "register:40f0:8", ["const:8e5820:8", "const:4:8"]]
+ 008e5820 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-92631c0e35aa0313ee7d15ae5c1297db"></a>

### [`008e49f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e49f4.md) → [`008e59a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e59a0.md) FUN_008e59a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008e9ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9ce0.md) · 呼出先 26件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`008eac8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eac8c.md) · 呼出先 26件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 94.62% / 新版 94.62%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e5b28",
      "incomplete_value": true,
      "site": "008e5b3c",
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
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:b8f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e4b7c",
      "incomplete_value": true,
      "site": "008e4b90",
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
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:ab8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e5b40",
      "incomplete_value": true,
      "site": "008e5b40",
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
                "const:d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e4b94",
      "incomplete_value": true,
      "site": "008e4b94",
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
                "const:d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008e5f8c",
      "incomplete_value": false,
      "site": "008e5f8c",
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
                "const:ca5000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
      "definition_site": "008e4fe0",
      "incomplete_value": false,
      "site": "008e4fe0",
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
                "const:ca5000:8"
              ],
              [
                "leaf",
                "const:0:8"
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
    "ordinal": 53,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e5b14",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008e5b28",
      "READ",
      [
        "storage",
        "002aeab8",
        null,
        "string"
      ]
    ],
    [
      "008e5b2c",
      "READ",
      [
        "storage",
        "002aeac5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e5b14",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008e5b28",
      "READ",
      [
        "storage",
        "002aeb8f",
        null,
        "string"
      ]
    ],
    [
      "008e5b2c",
      "READ",
      [
        "storage",
        "002aeb9c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e4bdc ["INT_ADD", "register:40f0:8", ["const:8e4bdc:8", "const:4:8"]]
- 008e4bdc ["CALL", null, ["callee:0047e96c:8"]]
+ 008e5b88 ["INT_ADD", "register:40f0:8", ["const:8e5b88:8", "const:4:8"]]
+ 008e5b88 ["CALL", null, ["callee:0047e96c:8"]]
- 008e4fbc ["INT_ADD", "register:40f0:8", ["const:8e4fbc:8", "const:4:8"]]
- 008e4fbc ["CALL", null, ["callee:00c58ef0:8"]]
+ 008e5f68 ["INT_ADD", "register:40f0:8", ["const:8e5f68:8", "const:4:8"]]
+ 008e5f68 ["CALL", null, ["callee:00c58ef0:8"]]
- 008e4ff8 ["INT_ADD", "register:40f0:8", ["const:8e4ff8:8", "const:4:8"]]
- 008e4ff8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 008e5fa4 ["INT_ADD", "register:40f0:8", ["const:8e5fa4:8", "const:4:8"]]
+ 008e5fa4 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-6a8e81d5d745871fa63254801fae785f"></a>

### [`008e5238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5238.md) → [`008e61e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e61e4.md) FUN_008e61e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008ea310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea310.md) · 呼出先 20件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006df59c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006df59c.md)
- 新版 呼出元 1件 [`008eb2bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb2bc.md) · 呼出先 20件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`006df94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006df/006df94c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 4件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e6254",
      "incomplete_value": true,
      "site": "008e6264",
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
                "const:2f9000:8"
              ],
              [
                "leaf",
                "const:b10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e52a8",
      "incomplete_value": true,
      "site": "008e52b8",
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
                "const:2f9000:8"
              ],
              [
                "leaf",
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e6254",
      "incomplete_value": true,
      "site": "008e6264",
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
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e52a8",
      "incomplete_value": true,
      "site": "008e52b8",
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
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e6904",
      "incomplete_value": true,
      "site": "008e6904",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:656:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e5958",
      "incomplete_value": true,
      "site": "008e5958",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:58b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 85,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e6254",
      "READ",
      [
        "storage",
        "002f9ad0",
        null,
        null
      ]
    ],
    [
      "008e6254",
      "READ",
      [
        "storage",
        "002f9ae0",
        null,
        null
      ]
    ],
    [
      "unmatched:008e53c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e6444"
      ]
    ]
  ],
  "added": [
    [
      "008e6254",
      "READ",
      [
        "storage",
        "002f9b10",
        null,
        null
      ]
    ],
    [
      "008e6254",
      "READ",
      [
        "storage",
        "002f9b20",
        null,
        null
      ]
    ],
    [
      "008e6370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e6444"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e597c ["INT_ADD", "register:40f0:8", ["const:8e597c:8", "const:4:8"]]
- 008e597c ["CALL", null, ["callee:00c59000:8"]]
+ 008e6928 ["INT_ADD", "register:40f0:8", ["const:8e6928:8", "const:4:8"]]
+ 008e6928 ["CALL", null, ["callee:00c59000:8"]]
- 008e5274 ["INT_ADD", "register:40f0:8", ["const:8e5274:8", "const:4:8"]]
- 008e5274 ["CALL", null, ["callee:008524fc:8"]]
+ 008e6220 ["INT_ADD", "register:40f0:8", ["const:8e6220:8", "const:4:8"]]
+ 008e6220 ["CALL", null, ["callee:008524fc:8"]]
- 008e5284 ["INT_ADD", "register:40f0:8", ["const:8e5284:8", "const:4:8"]]
- 008e5284 ["CALL", null, ["callee:00b3cfb0:8"]]
+ 008e6230 ["INT_ADD", "register:40f0:8", ["const:8e6230:8", "const:4:8"]]
+ 008e6230 ["CALL", null, ["callee:00b3cfb0:8"]]
~~~


<a id="compare-eb290d307ecadfbea1f8deab0e9f5d01"></a>

### [`008e5fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5fd0.md) → [`008e6f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e6f7c.md) FUN_008e6f7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)
- 新版 呼出元 1件 [`006b2db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2db0.md) · 呼出先 24件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.96% / 新版 80.96%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008e60c0",
      "incomplete_value": true,
      "site": "008e60c8",
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
            "const:28:8"
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
      "definition_site": "008e60c4",
      "incomplete_value": false,
      "site": "008e60c8",
      "value": [
        "leaf",
        "const:0:8"
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
      "definition_site": "008e60b0",
      "incomplete_value": true,
      "site": "008e60c8",
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
      "unmatched:008e601c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e6fe8"
      ]
    ],
    [
      "unmatched:008e6058",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:008e605c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e759c"
      ]
    ]
  ],
  "added": [
    [
      "008e6fc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e6fe8"
      ]
    ],
    [
      "008e7004",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008e7008",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e759c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e60c8 ["INT_ADD", "register:40f0:8", ["const:8e60c8:8", "const:4:8"]]
- 008e60c8 ["CALL", null, ["callee:00448254:8"]]
+ 008e7074 ["INT_ADD", "register:40f0:8", ["const:8e7074:8", "const:4:8"]]
+ 008e7074 ["CALL", null, ["callee:00448254:8"]]
- 008e60e4 ["INT_ADD", "register:40f0:8", ["const:8e60e4:8", "const:4:8"]]
- 008e60e4 ["CALL", null, ["callee:0047e96c:8"]]
+ 008e7090 ["INT_ADD", "register:40f0:8", ["const:8e7090:8", "const:4:8"]]
+ 008e7090 ["CALL", null, ["callee:0047e96c:8"]]
- 008e61f8 ["INT_ADD", "register:40f0:8", ["const:8e61f8:8", "const:4:8"]]
- 008e61f8 ["CALL", null, ["callee:0046f9cc:8"]]
+ 008e71a4 ["INT_ADD", "register:40f0:8", ["const:8e71a4:8", "const:4:8"]]
+ 008e71a4 ["CALL", null, ["callee:0046f9cc:8"]]
~~~


<a id="compare-eb86cf8b024a8d901860fad5ce6f5292"></a>

### [`008e6700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e6/008e6700.md) → [`008e76ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e7/008e76ac.md) FUN_008e76ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) · 呼出先 42件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0044e9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e9c8.md) [`0044fcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044fcfc.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md)
- 新版 呼出元 1件 [`006b2f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2f64.md) · 呼出先 42件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0044ece8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044e/0044ece8.md) [`0045001c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/0045001c.md) [`0046dcd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dcd4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.76% / 新版 94.76%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 10件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e77a4",
      "incomplete_value": true,
      "site": "008e77a4",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:2ed:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e67f8",
      "incomplete_value": true,
      "site": "008e67f8",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:20f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e7848",
      "incomplete_value": true,
      "site": "008e7848",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:b9e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e689c",
      "incomplete_value": true,
      "site": "008e689c",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:ac0:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e7860",
      "incomplete_value": false,
      "site": "008e7860",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e68b4",
      "incomplete_value": false,
      "site": "008e68b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
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
      "008e7724",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "008e773c",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "008e7754",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "008e7724",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "008e773c",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "dword"
      ]
    ],
    [
      "008e7754",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e67cc ["INT_ADD", "register:40f0:8", ["const:8e67cc:8", "const:4:8"]]
- 008e67cc ["CALL", null, ["ram:48cd38:8"]]
+ 008e7778 ["INT_ADD", "register:40f0:8", ["const:8e7778:8", "const:4:8"]]
+ 008e7778 ["CALL", null, ["ram:48d058:8"]]
- 008e68f8 ["INT_ADD", "register:40f0:8", ["const:8e68f8:8", "const:4:8"]]
- 008e68f8 ["CALL", null, ["ram:48cd38:8"]]
+ 008e78a4 ["INT_ADD", "register:40f0:8", ["const:8e78a4:8", "const:4:8"]]
+ 008e78a4 ["CALL", null, ["ram:48d058:8"]]
- 008e6954 ["INT_ADD", "register:40f0:8", ["const:8e6954:8", "const:4:8"]]
- 008e6954 ["CALL", null, ["ram:47ad34:8"]]
+ 008e7900 ["INT_ADD", "register:40f0:8", ["const:8e7900:8", "const:4:8"]]
+ 008e7900 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-1be289565e3de16ced624a929052e8ab"></a>

### [`008e7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e7/008e7424.md) → [`008e83d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e8/008e83d0.md) FUN_008e83d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 15件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468f8c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md)
- 新版 呼出元 1件 [`006b3888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3888.md) · 呼出先 15件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004692ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692ac.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 84.12% / 新版 84.12%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 15件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 7件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008e8414",
      "incomplete_value": true,
      "site": "008e8414",
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
      "definition_site": "008e7468",
      "incomplete_value": true,
      "site": "008e7468",
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
      "definition_site": "008e841c",
      "incomplete_value": false,
      "site": "008e842c",
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
      "definition_site": "008e7470",
      "incomplete_value": false,
      "site": "008e7480",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e8424",
      "incomplete_value": false,
      "site": "008e842c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e7478",
      "incomplete_value": false,
      "site": "008e7480",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
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
      "008e8410",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008e841c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e8424",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008e8410",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008e841c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e8424",
      "PARAM",
      [
        "storage",
        "00c748b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e7480 ["INT_ADD", "register:40f0:8", ["const:8e7480:8", "const:4:8"]]
- 008e7480 ["CALL", null, ["callee:00c596b0:8"]]
+ 008e842c ["INT_ADD", "register:40f0:8", ["const:8e842c:8", "const:4:8"]]
+ 008e842c ["CALL", null, ["callee:00c596b0:8"]]
- 008e789c ["INT_ADD", "register:40f0:8", ["const:8e789c:8", "const:4:8"]]
- 008e789c ["CALL", null, ["callee:004692ac:8"]]
+ 008e8848 ["INT_ADD", "register:40f0:8", ["const:8e8848:8", "const:4:8"]]
+ 008e8848 ["CALL", null, ["callee:004692ac:8"]]
- 008e7964 ["INT_ADD", "register:40f0:8", ["const:8e7964:8", "const:4:8"]]
- 008e7964 ["CALL", null, ["callee:004692ac:8"]]
+ 008e8910 ["INT_ADD", "register:40f0:8", ["const:8e8910:8", "const:4:8"]]
+ 008e8910 ["CALL", null, ["callee:004692ac:8"]]
~~~


<a id="compare-253ba9329e17f89dc2c674ea918421be"></a>

### [`008e7abc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e7/008e7abc.md) → [`008e8a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e8/008e8a68.md) FUN_008e8a68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md)
- 新版 呼出元 1件 [`006b3888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3888.md) · 呼出先 15件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046ac48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ac48.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.95% / 新版 74.95%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 23件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 15件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008e9168",
      "incomplete_value": true,
      "site": "008e9168",
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
      "definition_site": "008e81bc",
      "incomplete_value": true,
      "site": "008e81bc",
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
    "ordinal": 68,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e8cf0",
      "incomplete_value": true,
      "site": "008e8cf4",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e9170",
      "incomplete_value": false,
      "site": "008e9180",
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
      "definition_site": "008e81c4",
      "incomplete_value": false,
      "site": "008e81d4",
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
    "ordinal": 29,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008e7bf4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e9260"
      ]
    ],
    [
      "unmatched:008e7cf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e8cc0"
      ]
    ],
    [
      "unmatched:008e7d00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e925c"
      ]
    ]
  ],
  "added": [
    [
      "008e8ba0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e9260"
      ]
    ],
    [
      "008e8ca4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e8cc0"
      ]
    ],
    [
      "008e8cac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e925c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e7d48 ["INT_ADD", "register:40f0:8", ["const:8e7d48:8", "const:4:8"]]
- 008e7d48 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e8cf4 ["INT_ADD", "register:40f0:8", ["const:8e8cf4:8", "const:4:8"]]
+ 008e8cf4 ["CALL", null, ["callee:00c58f50:8"]]
- 008e81bc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008e81bc ["CBRANCH", null, ["local:b102:8", "tmp:0:1"]]
+ 008e9168 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008e9168 ["CBRANCH", null, ["local:b101:8", "tmp:0:1"]]
- 008e81d4 ["INT_ADD", "register:40f0:8", ["const:8e81d4:8", "const:4:8"]]
- 008e81d4 ["CALL", null, ["callee:00c596b0:8"]]
+ 008e9180 ["INT_ADD", "register:40f0:8", ["const:8e9180:8", "const:4:8"]]
+ 008e9180 ["CALL", null, ["callee:00c596b0:8"]]
~~~


