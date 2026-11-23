# v16.0.2 → v16.0.3 · 最優先の変更候補 (33)

[一覧の目次](README.md)

<a id="compare-3068c4fe534a22657002d58ec1ee217f"></a>

### [`0065f038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f038.md) → [`0065f3e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f3e8.md) FUN_0065f3e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0065f008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f008.md) · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 1件 [`0065f3b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f3b8.md) · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_target` 2件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f408",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f058",
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
      "site": "0065f414",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f064",
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
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0065f048"
      ],
      [
        "CONDITIONAL_JUMP",
        "0065f3f8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f444",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "0065f044",
      "incomplete_value": true,
      "site": "0065f094",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:4:4"
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
      "unmatched:0065f048",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0065f428"
      ]
    ],
    [
      "0065f408",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065f414",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0065f3f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0065f428"
      ]
    ],
    [
      "0065f408",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0065f414",
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
- 0065f058 ["INT_ADD", "register:40f0:8", ["const:65f058:8", "const:4:8"]]
- 0065f058 ["CALL", null, ["ram:47ad34:8"]]
+ 0065f408 ["INT_ADD", "register:40f0:8", ["const:65f408:8", "const:4:8"]]
+ 0065f408 ["CALL", null, ["ram:47b054:8"]]
- 0065f064 ["INT_ADD", "register:40f0:8", ["const:65f064:8", "const:4:8"]]
- 0065f064 ["CALL", null, ["ram:47ad34:8"]]
+ 0065f414 ["INT_ADD", "register:40f0:8", ["const:65f414:8", "const:4:8"]]
+ 0065f414 ["CALL", null, ["ram:47b054:8"]]
- 0065f048 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-f49cede8aef133ca433c3bd3e4bc37d4"></a>

### [`0065f0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f0bc.md) → [`0065f46c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f46c.md) FUN_0065f46c

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
      "unmatched:0065f0e4",
      "DATA",
      [
        "storage",
        "00c74598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f494",
      "DATA",
      [
        "storage",
        "00c75568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065f0d0 ["INT_ADD", "register:40f0:8", ["const:65f0d0:8", "const:4:8"]]
- 0065f0d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0065f480 ["INT_ADD", "register:40f0:8", ["const:65f480:8", "const:4:8"]]
+ 0065f480 ["CALL", null, ["callee:00c58f30:8"]]
- 0065f0dc ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065f48c ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065f0e0 ["COPY", "tmp:0:8", ["const:598:8"]]
- 0065f0e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065f0e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065f0e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fc72e3d74f147a5a92b804976b5e36a1"></a>

### [`0065f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f0fc.md) → [`0065f4ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f4ac.md) FUN_0065f4ac

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
      "unmatched:0065f104",
      "DATA",
      [
        "storage",
        "00c74598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f4b4",
      "DATA",
      [
        "storage",
        "00c75568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065f0fc ["COPY", "register:4040:8", ["const:c74000:8"]]
- 0065f100 ["COPY", "tmp:0:8", ["const:598:8"]]
- 0065f100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065f100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065f100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0065f104 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0065f104 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-52893173a5d4674f7d016d506e364ad7"></a>

### [`0065f618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f618.md) → [`0065f9c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f9c8.md) FUN_0065f9c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 37.50% / 新版 37.50%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0065f628",
      "incomplete_value": false,
      "site": "0065f62c",
      "value": [
        "leaf",
        "const:20:8"
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
      "unmatched:0065f618",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065f61c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065f640",
      "DATA",
      [
        "storage",
        "00c74618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f9c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0065f9cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0065f9f0",
      "DATA",
      [
        "storage",
        "00c755e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065f62c ["INT_ADD", "register:40f0:8", ["const:65f62c:8", "const:4:8"]]
- 0065f62c ["CALL", null, ["callee:00c58f30:8"]]
+ 0065f9dc ["INT_ADD", "register:40f0:8", ["const:65f9dc:8", "const:4:8"]]
+ 0065f9dc ["CALL", null, ["callee:00c58f30:8"]]
- 0065f618 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0065f618 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0065f618 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0065f618 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0065f61c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0065f61c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-6027ff2a9c8c4a91780a47e8b69089bd"></a>

### [`0065f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f658.md) → [`0065fa08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065fa08.md) FUN_0065fa08

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
      "definition_site": "0065fa0c",
      "incomplete_value": false,
      "site": "0065fa10",
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
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065f65c",
      "incomplete_value": false,
      "site": "0065f660",
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
            "const:618:8"
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
      "0065fa10",
      "DATA",
      [
        "storage",
        "00c74618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065fa10",
      "DATA",
      [
        "storage",
        "00c755e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065f658 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065fa08 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065f65c ["COPY", "tmp:0:8", ["const:618:8"]]
- 0065f65c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065f65c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065f65c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065fa0c ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 0065fa0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065fa0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065fa0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8d12929b283420d910283347b6a173ef"></a>

### [`0065f6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f6b0.md) → [`0065fa60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065fa60.md) FUN_0065fa60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0065f680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f680.md) · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md)
- 新版 呼出元 1件 [`0065fa30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065fa30.md) · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0065c21c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065c/0065c21c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.93% / 新版 82.93%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065faa8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f6f8",
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
      "definition_site": "0065f708",
      "incomplete_value": false,
      "site": "0065f70c",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:0065f6b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065f6b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065f6b8",
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
      "0065fa60",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0065fa64",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0065fa68",
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
- 0065f6f8 ["INT_ADD", "register:40f0:8", ["const:65f6f8:8", "const:4:8"]]
- 0065f6f8 ["CALL", null, ["ram:47ad34:8"]]
+ 0065faa8 ["INT_ADD", "register:40f0:8", ["const:65faa8:8", "const:4:8"]]
+ 0065faa8 ["CALL", null, ["ram:47b054:8"]]
- 0065f70c ["INT_ADD", "register:40f0:8", ["const:65f70c:8", "const:4:8"]]
- 0065f70c ["CALL", null, ["callee:0047d134:8"]]
+ 0065fabc ["INT_ADD", "register:40f0:8", ["const:65fabc:8", "const:4:8"]]
+ 0065fabc ["CALL", null, ["callee:0047d134:8"]]
- 0065f6b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0065f6b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0065f6b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0065f6b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-90425139b65fb884d8e49c9a8b7c040d"></a>

### [`0065f758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f758.md) → [`0065fb08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065fb08.md) FUN_0065fb08

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
      "unmatched:0065f780",
      "DATA",
      [
        "storage",
        "00c74698",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0065f78c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065f790",
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
      "0065fb30",
      "DATA",
      [
        "storage",
        "00c75668",
        null,
        "undefined *"
      ]
    ],
    [
      "0065fb3c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0065fb40",
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
- 0065f76c ["INT_ADD", "register:40f0:8", ["const:65f76c:8", "const:4:8"]]
- 0065f76c ["CALL", null, ["callee:00c58f30:8"]]
+ 0065fb1c ["INT_ADD", "register:40f0:8", ["const:65fb1c:8", "const:4:8"]]
+ 0065fb1c ["CALL", null, ["callee:00c58f30:8"]]
- 0065f778 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065fb28 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065f77c ["COPY", "tmp:0:8", ["const:698:8"]]
- 0065f77c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065f77c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065f77c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e18524f3ee9fc54f5129564fdc1f2f6e"></a>

### [`0065f798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f798.md) → [`0065fb48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065fb48.md) FUN_0065fb48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 62.50% / 新版 62.50%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0065f7a0",
      "DATA",
      [
        "storage",
        "00c74698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065fb50",
      "DATA",
      [
        "storage",
        "00c75668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065f798 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 0065f79c ["COPY", "tmp:0:8", ["const:698:8"]]
- 0065f79c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065f79c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065f79c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0065f7a0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0065f7a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a2dfecc52425fb7d98b1c1ae702b241e"></a>

### [`0065ff84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065ff84.md) → [`00660334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00660/00660334.md) FUN_00660334

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0065ff9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00660398"
      ]
    ],
    [
      "unmatched:0065ffd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006603a8"
      ]
    ]
  ],
  "added": [
    [
      "0066034c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00660398"
      ]
    ],
    [
      "00660380",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006603a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ff9c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 0065ff9c ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 0065ffa4 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 0065ffa4 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
+ 00660354 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00660354 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 0065ffac ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 0065ffac ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
+ 0066035c ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 0066035c ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
~~~


<a id="compare-c6c47ea71a87e86bade4768e31aa5942"></a>

### [`00660018`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00660/00660018.md) → [`006603c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00660/006603c8.md) _INIT_83

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00660514",
      "incomplete_value": true,
      "site": "00660528",
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
      "definition_site": "0066051c",
      "incomplete_value": true,
      "site": "00660528",
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
      "definition_site": "00660520",
      "incomplete_value": true,
      "site": "00660528",
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
      "unmatched:00660048",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00660054",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00660070",
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
      "006603f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00660404",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00660420",
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
- 00660178 ["INT_ADD", "register:40f0:8", ["const:660178:8", "const:4:8"]]
- 00660178 ["CALL", null, ["callee:0043bb58:8"]]
+ 00660528 ["INT_ADD", "register:40f0:8", ["const:660528:8", "const:4:8"]]
+ 00660528 ["CALL", null, ["callee:0043bb58:8"]]
- 0066018c ["INT_ADD", "register:40f0:8", ["const:66018c:8", "const:4:8"]]
- 0066018c ["CALL", null, ["callee:0043bb58:8"]]
+ 0066053c ["INT_ADD", "register:40f0:8", ["const:66053c:8", "const:4:8"]]
+ 0066053c ["CALL", null, ["callee:0043bb58:8"]]
- 006601b4 ["INT_ADD", "register:40f0:8", ["const:6601b4:8", "const:4:8"]]
- 006601b4 ["CALL", null, ["callee:0043bb58:8"]]
+ 00660564 ["INT_ADD", "register:40f0:8", ["const:660564:8", "const:4:8"]]
+ 00660564 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-ecc3e76af714c8af88787b2e683c3761"></a>

### [`006603a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00660/006603a8.md) → [`00660758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00660/00660758.md) FUN_00660758

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046da84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da84.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046dda4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.12% / 新版 73.12%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006604f8"
      ],
      [
        "FALL_THROUGH",
        "006608a8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006608a8",
      "incomplete_value": true,
      "site": "006608b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "INT_SLESS",
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
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:40d8:4"
              ],
              [
                "live",
                "register:40c8:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006604f8",
      "incomplete_value": true,
      "site": "00660504",
      "value": [
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
    },
    "ordinal": 24,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006607fc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006608f0"
      ]
    ],
    [
      "00660808",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006608f0"
      ]
    ],
    [
      "unmatched:00660468",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00660800"
      ]
    ]
  ],
  "added": [
    [
      "006607fc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0066082c"
      ]
    ],
    [
      "00660808",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066082c"
      ]
    ],
    [
      "00660818",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00660800"
      ]
    ]
  ]
}
~~~


~~~diff
- 006603d0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006603d0 ["CBRANCH", null, ["local:b93:8", "tmp:0:1"]]
+ 00660780 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00660780 ["CBRANCH", null, ["local:b96:8", "tmp:0:1"]]
- 006603ec ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 006603ec ["CBRANCH", null, ["local:b93:8", "tmp:0:1"]]
+ 0066079c ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 0066079c ["CBRANCH", null, ["local:b96:8", "tmp:0:1"]]
- 0066041c ["INT_ADD", "register:40f0:8", ["const:66041c:8", "const:4:8"]]
- 0066041c ["CALL", null, ["callee:0043bf04:8"]]
+ 006607cc ["INT_ADD", "register:40f0:8", ["const:6607cc:8", "const:4:8"]]
+ 006607cc ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-9f5814398c12f97f691d88c547a69347"></a>

### [`00660978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00660/00660978.md) → [`00660d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00660/00660d28.md) FUN_00660d28

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 33.98% / 新版 33.98%

優先判定に残った影響 `call_argument_candidate` 12件, `store_condition` 4件, `unresolved_branch_alignment` 160件, `unresolved_call_alignment` 58件, `unresolved_store_alignment` 273件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00660f24",
      "incomplete_value": true,
      "site": "00660f2c",
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
    "old": null,
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00660f28",
      "incomplete_value": false,
      "site": "00660f2c",
      "value": [
        "leaf",
        "const:2:8"
      ]
    },
    "old": null,
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00661174",
      "incomplete_value": true,
      "site": "0066117c",
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
    "old": null,
    "ordinal": 22,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006609a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x260]",
        null,
        null
      ]
    ],
    [
      "unmatched:006609b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006609b4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ]
  ],
  "added": [
    [
      "00660d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x260]",
        null,
        null
      ]
    ],
    [
      "00660d60",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00660d64",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ]
  ]
}
~~~


~~~diff
- 00660b7c ["INT_ADD", "register:40f0:8", ["const:660b7c:8", "const:4:8"]]
- 00660b7c ["CALL", null, ["callee:00487c9c:8"]]
+ 00660f2c ["INT_ADD", "register:40f0:8", ["const:660f2c:8", "const:4:8"]]
+ 00660f2c ["CALL", null, ["callee:00487c9c:8"]]
- 00660dcc ["INT_ADD", "register:40f0:8", ["const:660dcc:8", "const:4:8"]]
- 00660dcc ["CALL", null, ["callee:00487c9c:8"]]
+ 0066117c ["INT_ADD", "register:40f0:8", ["const:66117c:8", "const:4:8"]]
+ 0066117c ["CALL", null, ["callee:00487c9c:8"]]
- 00660e94 ["INT_ADD", "register:40f0:8", ["const:660e94:8", "const:4:8"]]
- 00660e94 ["CALL", null, ["callee:00487c9c:8"]]
+ 00661244 ["INT_ADD", "register:40f0:8", ["const:661244:8", "const:4:8"]]
+ 00661244 ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-b4758ffcc4a528b1a957219d413a3186"></a>

### [`0066242c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/0066242c.md) → [`006627dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/006627dc.md) FUN_006627dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`00662618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662618.md) [`009e3140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3140.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00aeb030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aeb/00aeb030.md) [`00b0a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a890.md) · 呼出先 6件 [`006b262c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b262c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00903f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903f98.md) [`00acebcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ace/00acebcc.md) [`00acecc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ace/00acecc4.md)
- 新版 呼出元 5件 [`006629c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/006629c8.md) [`009e40ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e40ec.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) [`00aec024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aec/00aec024.md) [`00b0b884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0b884.md) · 呼出先 6件 [`006b29dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b29dc.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00904f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904f44.md) [`00acfbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acf/00acfbc0.md) [`00acfcb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acf/00acfcb8.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 97.56% / 新版 97.56%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0066287c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b262c"
      ]
    ]
  ],
  "added": [
    [
      "0066287c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b29dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00662438 ["INT_ADD", "register:40f0:8", ["const:662438:8", "const:4:8"]]
- 00662438 ["CALL", null, ["callee:008524fc:8"]]
+ 006627e8 ["INT_ADD", "register:40f0:8", ["const:6627e8:8", "const:4:8"]]
+ 006627e8 ["CALL", null, ["callee:008524fc:8"]]
- 0066244c ["INT_ADD", "register:40f0:8", ["const:66244c:8", "const:4:8"]]
- 0066244c ["CALL", null, ["callee:00904f44:8"]]
+ 006627fc ["INT_ADD", "register:40f0:8", ["const:6627fc:8", "const:4:8"]]
+ 006627fc ["CALL", null, ["callee:00904f44:8"]]
- 00662450 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00662450 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00662450 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00662450 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00662800 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00662800 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00662800 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00662800 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-7a5bbd2080aec380b9463cb7917d87da"></a>

### [`006624d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006624d0.md) → [`00662880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662880.md) FUN_00662880

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 7件 [`006627d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006627d8.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`009e3140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3140.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 6件 [`006b2668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2668.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00903f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903f98.md) [`00acebcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ace/00acebcc.md) [`00acecc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ace/00acecc4.md)
- 新版 呼出元 7件 [`00662b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662b88.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`009e40ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e40ec.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 6件 [`006b2a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2a18.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00904f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904f44.md) [`00acfbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acf/00acfbc0.md) [`00acfcb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acf/00acfcb8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.56% / 新版 97.56%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00662534",
      "incomplete_value": true,
      "site": "00662538",
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
      "unmatched:00662570",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b2668"
      ]
    ]
  ],
  "added": [
    [
      "00662920",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b2a18"
      ]
    ]
  ]
}
~~~


~~~diff
- 00662538 ["INT_ADD", "register:40f0:8", ["const:662538:8", "const:4:8"]]
- 00662538 ["CALL", null, ["callee:00acfcb8:8"]]
+ 006628e8 ["INT_ADD", "register:40f0:8", ["const:6628e8:8", "const:4:8"]]
+ 006628e8 ["CALL", null, ["callee:00acfcb8:8"]]
- 006624dc ["INT_ADD", "register:40f0:8", ["const:6624dc:8", "const:4:8"]]
- 006624dc ["CALL", null, ["callee:008524fc:8"]]
+ 0066288c ["INT_ADD", "register:40f0:8", ["const:66288c:8", "const:4:8"]]
+ 0066288c ["CALL", null, ["callee:008524fc:8"]]
- 006624f0 ["INT_ADD", "register:40f0:8", ["const:6624f0:8", "const:4:8"]]
- 006624f0 ["CALL", null, ["callee:00904f44:8"]]
+ 006628a0 ["INT_ADD", "register:40f0:8", ["const:6628a0:8", "const:4:8"]]
+ 006628a0 ["CALL", null, ["callee:00904f44:8"]]
~~~


<a id="compare-f8f99ea730e6cab271fcf99838ba2515"></a>

### [`00662574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662574.md) → [`00662924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662924.md) FUN_00662924

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 6件 [`006626f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006626f8.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`009e3140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3140.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00aeb030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aeb/00aeb030.md) · 呼出先 6件 [`006b26a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b26a4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00903f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903f98.md) [`00acebcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ace/00acebcc.md) [`00acecc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ace/00acecc4.md)
- 新版 呼出元 6件 [`00662aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662aa8.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`009e40ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e40ec.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) [`00aec024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aec/00aec024.md) · 呼出先 6件 [`006b2a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2a54.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00904f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904f44.md) [`00acfbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acf/00acfbc0.md) [`00acfcb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acf/00acfcb8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00662584",
      "incomplete_value": true,
      "site": "00662594",
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
            "const:578:8"
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
      "definition_site": "00662588",
      "incomplete_value": false,
      "site": "00662594",
      "value": [
        "leaf",
        "const:ffffffff:8"
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
      "definition_site": "0066258c",
      "incomplete_value": false,
      "site": "00662594",
      "value": [
        "leaf",
        "const:ffffffff:8"
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
      "unmatched:006625a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00662968"
      ]
    ],
    [
      "unmatched:00662614",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b26a4"
      ]
    ]
  ],
  "added": [
    [
      "00662958",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00662968"
      ]
    ],
    [
      "006629c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b2a54"
      ]
    ]
  ]
}
~~~


~~~diff
- 00662594 ["INT_ADD", "register:40f0:8", ["const:662594:8", "const:4:8"]]
- 00662594 ["CALL", null, ["callee:00904f44:8"]]
+ 00662944 ["INT_ADD", "register:40f0:8", ["const:662944:8", "const:4:8"]]
+ 00662944 ["CALL", null, ["callee:00904f44:8"]]
- 006625ec ["INT_ADD", "register:40f0:8", ["const:6625ec:8", "const:4:8"]]
- 006625ec ["CALL", null, ["callee:00ad021c:8"]]
+ 0066299c ["INT_ADD", "register:40f0:8", ["const:66299c:8", "const:4:8"]]
+ 0066299c ["CALL", null, ["callee:00ad021c:8"]]
- 00662580 ["INT_ADD", "register:40f0:8", ["const:662580:8", "const:4:8"]]
- 00662580 ["CALL", null, ["callee:008524fc:8"]]
+ 00662930 ["INT_ADD", "register:40f0:8", ["const:662930:8", "const:4:8"]]
+ 00662930 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6dce109e20591080cbd59e5692696a61"></a>

### [`00662618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662618.md) → [`006629c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/006629c8.md) FUN_006629c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00aa8514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa8/00aa8514.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0066242c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/0066242c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) [`00aa9508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa9/00aa9508.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006627dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/006627dc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00662618",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066261c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00662620",
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
      "006629c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006629cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006629d0",
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
- 00662618 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00662618 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00662618 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00662618 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0066261c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0066261c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 00662620 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00662620 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00662620 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00662620 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d02cd329d6af793a3c4f507f161cb21c"></a>

### [`006626f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006626f8.md) → [`00662aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662aa8.md) FUN_00662aa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00662574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662574.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00662924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662924.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006626f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006626fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00662700",
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
      "00662aa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00662aac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00662ab0",
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
- 006626f8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006626f8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006626f8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 006626f8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006626fc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006626fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 00662700 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00662700 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00662700 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00662700 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-cbefa45f35617024f3b02410586b7b16"></a>

### [`006628b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006628b8.md) → [`00662c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662c68.md) FUN_00662c68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005afe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afe48.md) · 呼出先 3件 [`0046da84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da84.md) [`006b2734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2734.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005b01f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b01f8.md) · 呼出先 3件 [`0046dda4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda4.md) [`006b2ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2ae4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.04% / 新版 89.04%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006628b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006628bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x18]",
        null,
        null
      ]
    ],
    [
      "unmatched:006628c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00662c68",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00662c6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x18]",
        null,
        null
      ]
    ],
    [
      "00662c70",
      "WRITE",
      [
        "storage",
        "Stack[-0x8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006628b8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006628b8 ["STORE", null, ["const:1b1:8", "register:8:8", "register:5100:8"]]
- 006628bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006628bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006628bc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:8:8"]]
- 006628bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006628c0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:18:8"]]
- 006628c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-4790e49338e53fbadced86849e4d8ca7"></a>

### [`006629dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006629dc.md) → [`00662d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662d8c.md) FUN_00662d8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`00660978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00660/00660978.md) [`006629dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006629dc.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848680.md) · 呼出先 3件 [`006629dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006629dc.md) [`00662a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662a2c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00660d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00660/00660d28.md) [`00662d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662d8c.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084962c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/0084962c.md) · 呼出先 3件 [`00662d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662d8c.md) [`00662ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662ddc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "006629f8",
      "incomplete_value": true,
      "site": "006629fc",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00662a00",
      "incomplete_value": true,
      "site": "00662a08",
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
- 006629fc ["INT_ADD", "register:40f0:8", ["const:6629fc:8", "const:4:8"]]
- 006629fc ["CALL", null, ["local:b0:8"]]
+ 00662dac ["INT_ADD", "register:40f0:8", ["const:662dac:8", "const:4:8"]]
+ 00662dac ["CALL", null, ["local:b0:8"]]
- 00662a08 ["INT_ADD", "register:40f0:8", ["const:662a08:8", "const:4:8"]]
- 00662a08 ["CALL", null, ["local:b0:8"]]
+ 00662db8 ["INT_ADD", "register:40f0:8", ["const:662db8:8", "const:4:8"]]
+ 00662db8 ["CALL", null, ["local:b0:8"]]
- 006629dc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 006629dc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00662d8c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00662d8c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-aafda0519cf102f5edff25fb9b170802"></a>

### [`00662a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662a7c.md) → [`00662e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662e2c.md) FUN_00662e2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00660978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00660/00660978.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00660d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00660/00660d28.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00662a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00662a88",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00662a8c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "00662e2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00662e38",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "00662e3c",
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
- 00662a7c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00662a7c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00662a7c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00662a7c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00662a80 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00662a84 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-801b4497713e9c5bb26b180075ce2e06"></a>

### [`00662a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662a90.md) → [`00662e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662e40.md) FUN_00662e40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00660978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00660/00660978.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00660d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00660/00660d28.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00662a90",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00662a9c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00662aa0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "00662e40",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00662e4c",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "00662e50",
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
- 00662a90 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00662a90 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00662a90 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00662a90 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00662a94 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00662a98 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-91065b8ce638c3841c0ab0b045667942"></a>

### [`00662aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662aa4.md) → [`00662e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662e54.md) _INIT_84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 72.32% / 新版 72.32%

優先判定に残った影響 `call_argument_candidate` 15件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00662fa0",
      "incomplete_value": true,
      "site": "00662fb4",
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
      "definition_site": "00662fa8",
      "incomplete_value": true,
      "site": "00662fb4",
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
      "definition_site": "00662fac",
      "incomplete_value": true,
      "site": "00662fb4",
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
      "unmatched:00662ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00662ae0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00662ae8",
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
      "00662e84",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00662e90",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00662e98",
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
- 00662c04 ["INT_ADD", "register:40f0:8", ["const:662c04:8", "const:4:8"]]
- 00662c04 ["CALL", null, ["callee:0043bb58:8"]]
+ 00662fb4 ["INT_ADD", "register:40f0:8", ["const:662fb4:8", "const:4:8"]]
+ 00662fb4 ["CALL", null, ["callee:0043bb58:8"]]
- 00662c40 ["INT_ADD", "register:40f0:8", ["const:662c40:8", "const:4:8"]]
- 00662c40 ["CALL", null, ["callee:0043bb58:8"]]
+ 00662ff0 ["INT_ADD", "register:40f0:8", ["const:662ff0:8", "const:4:8"]]
+ 00662ff0 ["CALL", null, ["callee:0043bb58:8"]]
- 00662c54 ["INT_ADD", "register:40f0:8", ["const:662c54:8", "const:4:8"]]
- 00662c54 ["CALL", null, ["callee:0043bb58:8"]]
+ 00663004 ["INT_ADD", "register:40f0:8", ["const:663004:8", "const:4:8"]]
+ 00663004 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-b7f83893241818025741bdf5d35dbd2f"></a>

### [`00662e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662e34.md) → [`006631e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00663/006631e4.md) FUN_006631e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 22件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.04% / 新版 58.04%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 48件, `unresolved_call_alignment` 19件, `unresolved_store_alignment` 74件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00663270",
      "incomplete_value": true,
      "site": "00663280",
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
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00663274",
      "incomplete_value": true,
      "site": "00663280",
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
    "old": null,
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00663388",
      "incomplete_value": true,
      "site": "00663390",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 13,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00662e34",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00662e38",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00662e3c",
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
      "006631e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006631e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006631ec",
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
- 00662ed0 ["INT_ADD", "register:40f0:8", ["const:662ed0:8", "const:4:8"]]
- 00662ed0 ["CALL", null, ["callee:00b1217c:8"]]
+ 00663280 ["INT_ADD", "register:40f0:8", ["const:663280:8", "const:4:8"]]
+ 00663280 ["CALL", null, ["callee:00b1217c:8"]]
- 00662fe0 ["INT_ADD", "register:40f0:8", ["const:662fe0:8", "const:4:8"]]
- 00662fe0 ["CALL", null, ["callee:00493e80:8"]]
+ 00663390 ["INT_ADD", "register:40f0:8", ["const:663390:8", "const:4:8"]]
+ 00663390 ["CALL", null, ["callee:00493e80:8"]]
+ 006633a8 ["COPY", "tmp:0:4", ["const:7:4"]]
+ 006633a8 ["INT_LESSEQUAL", "register:105:1", ["const:7:4", "register:4048:4"]]
+ 006633a8 ["INT_SBORROW", "register:106:1", ["register:4048:4", "const:7:4"]]
+ 006633a8 ["INT_SUB", "tmp:1:4", ["register:4048:4", "tmp:0:4"]]
~~~


<a id="compare-91fe479297bbf1fca4aa9e783d7a4e32"></a>

### [`00663bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00663/00663bd0.md) → [`00663f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00663/00663f80.md) FUN_00663f80

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006653d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/006653d0.md) [`0066540c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/0066540c.md) [`0066544c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/0066544c.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`00664acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664acc.md) [`00665360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665360.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`00665780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665780.md) [`006657bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/006657bc.md) [`006657fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/006657fc.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00664bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664bb0.md) [`00664e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664e7c.md) [`00665710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665710.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.48% / 新版 70.48%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006641c8"
      ],
      [
        "FALL_THROUGH",
        "00664578"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00664578",
      "incomplete_value": true,
      "site": "0066457c",
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
    "old": {
      "definition_site": "006641c8",
      "incomplete_value": true,
      "site": "006641cc",
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
    "ordinal": 90,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00663c7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00664010"
      ]
    ],
    [
      "006640dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00663d40"
      ]
    ],
    [
      "unmatched:00663d30",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00663d64"
      ]
    ]
  ],
  "added": [
    [
      "0066402c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00664010"
      ]
    ],
    [
      "006640dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006640f0"
      ]
    ],
    [
      "006640e0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00664114"
      ]
    ]
  ]
}
~~~


~~~diff
- 00663bf8 ["INT_ADD", "register:40f0:8", ["const:663bf8:8", "const:4:8"]]
- 00663bf8 ["CALL", null, ["callee:00665710:8"]]
+ 00663fa8 ["INT_ADD", "register:40f0:8", ["const:663fa8:8", "const:4:8"]]
+ 00663fa8 ["CALL", null, ["callee:00665710:8"]]
- 00663c04 ["INT_ADD", "register:40f0:8", ["const:663c04:8", "const:4:8"]]
- 00663c04 ["CALL", null, ["callee:00664bb0:8"]]
+ 00663fb4 ["INT_ADD", "register:40f0:8", ["const:663fb4:8", "const:4:8"]]
+ 00663fb4 ["CALL", null, ["callee:00664bb0:8"]]
- 00663c10 ["INT_ADD", "register:40f0:8", ["const:663c10:8", "const:4:8"]]
- 00663c10 ["CALL", null, ["callee:00664e7c:8"]]
+ 00663fc0 ["INT_ADD", "register:40f0:8", ["const:663fc0:8", "const:4:8"]]
+ 00663fc0 ["CALL", null, ["callee:00664e7c:8"]]
~~~


<a id="compare-36b9692283ddc7eef488b6ae266876b6"></a>

### [`006641f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006641f4.md) → [`006645a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/006645a4.md) FUN_006645a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00662e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662e34.md) [`006641f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006641f4.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 3件 [`006641f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006641f4.md) [`00664244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664244.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`006631e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00663/006631e4.md) [`006645a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/006645a4.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 3件 [`006645a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/006645a4.md) [`006645f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/006645f4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 65.00% / 新版 65.00%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006645c0",
      "incomplete_value": true,
      "site": "006645c4",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "00664210",
      "incomplete_value": true,
      "site": "00664214",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0066421c",
      "incomplete_value": true,
      "site": "00664220",
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
      "definition_site": "00664218",
      "incomplete_value": true,
      "site": "00664220",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006641f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006641fc",
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
      "006645a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006645ac",
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
- 00664214 ["INT_ADD", "register:40f0:8", ["const:664214:8", "const:4:8"]]
- 00664214 ["CALL", null, ["local:b0:8"]]
+ 006645c4 ["INT_ADD", "register:40f0:8", ["const:6645c4:8", "const:4:8"]]
+ 006645c4 ["CALL", null, ["local:b0:8"]]
- 00664220 ["INT_ADD", "register:40f0:8", ["const:664220:8", "const:4:8"]]
- 00664220 ["CALL", null, ["local:b0:8"]]
+ 006645d0 ["INT_ADD", "register:40f0:8", ["const:6645d0:8", "const:4:8"]]
+ 006645d0 ["CALL", null, ["local:b0:8"]]
- 0066422c ["INT_ADD", "register:40f0:8", ["const:66422c:8", "const:4:8"]]
- 0066422c ["CALL", null, ["callee:006645f4:8"]]
+ 006645dc ["INT_ADD", "register:40f0:8", ["const:6645dc:8", "const:4:8"]]
+ 006645dc ["CALL", null, ["callee:006645f4:8"]]
~~~


<a id="compare-8ab31d34d703b088d87b404a9901a5cb"></a>

### [`00664244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664244.md) → [`006645f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/006645f4.md) FUN_006645f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006641f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006641f4.md) [`00664244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664244.md) · 呼出先 2件 [`00664244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664244.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`006645a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/006645a4.md) [`006645f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/006645f4.md) · 呼出先 2件 [`006645f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/006645f4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066461c",
      "incomplete_value": true,
      "site": "00664620",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00664618",
      "incomplete_value": true,
      "site": "00664620",
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
                "const:8:8"
              ]
            ]
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
      "unmatched:00664248",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066424c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00664250",
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
      "006645f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006645fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00664600",
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
- 00664270 ["INT_ADD", "register:40f0:8", ["const:664270:8", "const:4:8"]]
- 00664270 ["CALL", null, ["local:b0:8"]]
+ 00664620 ["INT_ADD", "register:40f0:8", ["const:664620:8", "const:4:8"]]
+ 00664620 ["CALL", null, ["local:b0:8"]]
- 00664244 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00664244 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 006645f4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006645f4 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00664248 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00664248 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00664248 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00664248 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-04ab0ea67ebe47813d3c052c492ed853"></a>

### [`006642d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006642d8.md) → [`00664688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664688.md) FUN_00664688

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00662e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662e34.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0066445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/0066445c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`006631e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00663/006631e4.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0066480c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/0066480c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.81% / 新版 93.81%

優先判定に残った影響 `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006642d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006642dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006642e0",
      "WRITE",
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
      "00664688",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0066468c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00664690",
      "WRITE",
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
- 006642d8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006642d8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006642d8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 006642d8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006642dc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006642dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 006642e0 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 006642e0 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 006642e0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006642e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c6074a9f430ae8170f8d4b56927052f4"></a>

### [`0066445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/0066445c.md) → [`0066480c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/0066480c.md) FUN_0066480c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006642d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006642d8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00664688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664688.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00664818",
      "incomplete_value": false,
      "site": "0066481c",
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
      "definition_site": "00664468",
      "incomplete_value": false,
      "site": "0066446c",
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
      "00664818",
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
      "00664818",
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
- 0066446c ["INT_ADD", "register:40f0:8", ["const:66446c:8", "const:4:8"]]
- 0066446c ["CALL", null, ["callee:0043bad8:8"]]
+ 0066481c ["INT_ADD", "register:40f0:8", ["const:66481c:8", "const:4:8"]]
+ 0066481c ["CALL", null, ["callee:0043bad8:8"]]
- 00664464 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00664814 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00664468 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00664468 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00664468 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00664468 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00664818 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00664818 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00664818 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00664818 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0a0d7ac163760bf26640af9cc77b1698"></a>

### [`00664470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664470.md) → [`00664820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664820.md) _INIT_85

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 65.54% / 新版 65.54%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 31件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006645cc",
      "incomplete_value": true,
      "site": "006645d0",
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
    "new": null,
    "old": {
      "definition_site": "006645c8",
      "incomplete_value": true,
      "site": "006645d0",
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
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00664624",
      "incomplete_value": true,
      "site": "00664634",
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
      "unmatched:006644a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006644ac",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006644c8",
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
      "00664850",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0066485c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00664878",
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
- 006645d0 ["INT_ADD", "register:40f0:8", ["const:6645d0:8", "const:4:8"]]
- 006645d0 ["CALL", null, ["callee:0043bb58:8"]]
+ 00664980 ["INT_ADD", "register:40f0:8", ["const:664980:8", "const:4:8"]]
+ 00664980 ["CALL", null, ["callee:0043bb58:8"]]
- 00664634 ["INT_ADD", "register:40f0:8", ["const:664634:8", "const:4:8"]]
- 00664634 ["CALL", null, ["callee:0043bb58:8"]]
+ 006649e4 ["INT_ADD", "register:40f0:8", ["const:6649e4:8", "const:4:8"]]
+ 006649e4 ["CALL", null, ["callee:0043bb58:8"]]
- 00664648 ["INT_ADD", "register:40f0:8", ["const:664648:8", "const:4:8"]]
- 00664648 ["CALL", null, ["callee:0043bb58:8"]]
+ 006649f8 ["INT_ADD", "register:40f0:8", ["const:6649f8:8", "const:4:8"]]
+ 006649f8 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-bed414897d3843660c467fb10a142253"></a>

### [`0066499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/0066499c.md) → [`00664d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664d4c.md) FUN_00664d4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`005e1bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1bf8.md) [`006ab3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ab/006ab3dc.md) [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`00912b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00912/00912b08.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 5件 [`005e1fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1fa8.md) [`006ab78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ab/006ab78c.md) [`008ee1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ee/008ee1b8.md) [`009059b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009059b4.md) [`00913ab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00913/00913ab4.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 58.33% / 新版 58.33%

~~~diff
- 006649b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006649b4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006649b4 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
+ 00664d64 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00664d64 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00664d64 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
- 006649c0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006649c0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006649c0 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
+ 00664d70 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00664d70 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00664d70 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
- 006649c4 ["INT_ADD", "register:40f0:8", ["const:6649c4:8", "const:4:8"]]
- 006649c4 ["CALL", null, ["callee:008524fc:8"]]
+ 00664d74 ["INT_ADD", "register:40f0:8", ["const:664d74:8", "const:4:8"]]
+ 00664d74 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-eaf115842d84ff87df0186e3d69ca137"></a>

### [`00664a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664a2c.md) → [`00664ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664ddc.md) FUN_00664ddc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 9件 [`00752644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/00752644.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) · 呼出先 2件 [`0082eb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb84.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 9件 [`007529f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/007529f4.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`008ee1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ee/008ee1b8.md) [`0094826c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) [`009627a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009627a0.md) · 呼出先 2件 [`0082fb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082f/0082fb30.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 72.50% / 新版 72.50%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00664a74",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00664e24",
      "WRITE",
      [
        "storage",
        "00ca4f3c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00664a3c ["INT_ADD", "register:40f0:8", ["const:664a3c:8", "const:4:8"]]
- 00664a3c ["CALL", null, ["callee:008524fc:8"]]
+ 00664dec ["INT_ADD", "register:40f0:8", ["const:664dec:8", "const:4:8"]]
+ 00664dec ["CALL", null, ["callee:008524fc:8"]]
- 00664a48 ["COPY", "register:4040:8", ["const:ca3000:8"]]
+ 00664df8 ["COPY", "register:4040:8", ["const:ca4000:8"]]
- 00664a4c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d70:8"]]
- 00664a4c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00664a4c ["INT_ZEXT", "register:4058:8", ["tmp:1:1"]]
~~~


<a id="compare-a43947e6d6914830f81865d478881207"></a>

### [`00664acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664acc.md) → [`00664e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664e7c.md) FUN_00664e7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 9件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`00663bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00663/00663bd0.md) [`0081ded8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081d/0081ded8.md) [`0098ca18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098ca18.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2f91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f91c.md)
- 新版 呼出元 9件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`00663f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00663/00663f80.md) [`0081ee84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081e/0081ee84.md) [`0098d9c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098d/0098d9c4.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b30910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30910.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00664acc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00664ad0",
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
      "00664e7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00664e80",
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
- 00664acc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00664acc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00664acc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00664acc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00664ad0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00664ad0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00664ad4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-5944cb5df310c8bf696e23693c625957"></a>

### [`00664b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664b70.md) → [`00664f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664f20.md) FUN_00664f20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`0098ca18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098ca18.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2f88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f88c.md)
- 新版 呼出元 2件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`0098d9c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098d/0098d9c4.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b30880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30880.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 63.64% / 新版 63.64%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00664b90",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00664b94",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00664b98",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b30880"
      ]
    ]
  ],
  "added": [
    [
      "00664f40",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00664f44",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00664f48",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b30880"
      ]
    ]
  ]
}
~~~


~~~diff
- 00664b80 ["INT_ADD", "register:40f0:8", ["const:664b80:8", "const:4:8"]]
- 00664b80 ["CALL", null, ["callee:008524fc:8"]]
+ 00664f30 ["INT_ADD", "register:40f0:8", ["const:664f30:8", "const:4:8"]]
+ 00664f30 ["CALL", null, ["callee:008524fc:8"]]
- 00664b8c ["COPY", "tmp:0:8", ["const:d74:8"]]
- 00664b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00664b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00664b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00664b90 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00664b90 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ff01fc1a7b1cc3537da5a81942cd7035"></a>

### [`00664b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664b9c.md) → [`00664f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664f4c.md) FUN_00664f4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0075d5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d5e0.md) [`00901ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901ee4.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0075d990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075d990.md) [`00902e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902e90.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 46.43% / 新版 46.43%

~~~diff
- 00664bac ["INT_ADD", "register:40f0:8", ["const:664bac:8", "const:4:8"]]
- 00664bac ["CALL", null, ["callee:008524fc:8"]]
+ 00664f5c ["INT_ADD", "register:40f0:8", ["const:664f5c:8", "const:4:8"]]
+ 00664f5c ["CALL", null, ["callee:008524fc:8"]]
- 00664bb4 ["INT_LEFT", "tmp:0:8", ["register:4040:8", "const:8:4"]]
- 00664bb4 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00664bb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:1:8"]]
- 00664bb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:1:8"]]
- 00664bb8 ["INT_LEFT", "tmp:0:8", ["const:4b:8", "const:c:4"]]
- 00664bb8 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00664bb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:1:8"]]
- 00664bb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:1:8"]]
~~~


<a id="compare-d6d9f785da68c2298b91a18917a10404"></a>

### [`00664c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c0c.md) → [`00664fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664fbc.md) FUN_00664fbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 14件 [`005c5f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c5/005c5f90.md) [`005cc724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc724.md) [`00687ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687ea0.md) [`006d5950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5950.md) [`006d8d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8d58.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2f88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f88c.md) [`00b2f91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f91c.md)
- 新版 呼出元 14件 [`005c6340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6340.md) [`005ccad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccad4.md) [`00688250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00688/00688250.md) [`006d5d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d5/006d5d00.md) [`006d9108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d9/006d9108.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b30880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30880.md) [`00b30910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30910.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00664ff8",
      "incomplete_value": true,
      "site": "00664ffc",
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
              [
                "live",
                "register:40a8:8"
              ]
            ]
          ],
          [
            "live",
            "register:40a0:8"
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


~~~diff
- 00664c4c ["INT_ADD", "register:40f0:8", ["const:664c4c:8", "const:4:8"]]
- 00664c4c ["CALL", null, ["callee:00b30880:8"]]
+ 00664ffc ["INT_ADD", "register:40f0:8", ["const:664ffc:8", "const:4:8"]]
+ 00664ffc ["CALL", null, ["callee:00b30880:8"]]
- 00664c20 ["INT_ADD", "register:40f0:8", ["const:664c20:8", "const:4:8"]]
- 00664c20 ["CALL", null, ["callee:008524fc:8"]]
+ 00664fd0 ["INT_ADD", "register:40f0:8", ["const:664fd0:8", "const:4:8"]]
+ 00664fd0 ["CALL", null, ["callee:008524fc:8"]]
- 00664c38 ["INT_ADD", "register:40f0:8", ["const:664c38:8", "const:4:8"]]
- 00664c38 ["CALL", null, ["callee:00b30910:8"]]
+ 00664fe8 ["INT_ADD", "register:40f0:8", ["const:664fe8:8", "const:4:8"]]
+ 00664fe8 ["CALL", null, ["callee:00b30910:8"]]
~~~


<a id="compare-1d093e54ffe9e85385af849809d532c5"></a>

### [`00664c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c68.md) → [`00665018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665018.md) FUN_00665018

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) · 呼出先 3件 [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2f91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f91c.md)
- 新版 呼出元 1件 [`0094826c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) · 呼出先 3件 [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b30910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30910.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 63.93% / 新版 63.93%

アドレスに依存する影響 `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00664c68",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00664c6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00664c70",
      "WRITE",
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
      "00665018",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0066501c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00665020",
      "WRITE",
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
- 00664c68 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00664c68 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00664c68 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00664c68 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00664c6c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00664c6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 00664c70 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00664c70 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00664c70 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00664c70 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-07d9cd32908376915e72a501acc15466"></a>

### [`00664d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664d5c.md) → [`0066510c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/0066510c.md) FUN_0066510c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 3件 [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2f88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f88c.md)
- 新版 呼出元 1件 [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) · 呼出先 3件 [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b30880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30880.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.21% / 新版 67.21%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00664dcc",
      "incomplete_value": true,
      "site": "00664dd0",
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
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:a5c:8"
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
      "unmatched:00664d6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00664d78",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ],
  "added": [
    [
      "0066511c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00665194",
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
- 00664dd0 ["INT_ADD", "register:40f0:8", ["const:664dd0:8", "const:4:8"]]
- 00664dd0 ["CALL", null, ["callee:00b30880:8"]]
+ 00665180 ["INT_ADD", "register:40f0:8", ["const:665180:8", "const:4:8"]]
+ 00665180 ["CALL", null, ["callee:00b30880:8"]]
- 00664d6c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00664d6c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00664d6c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00664d6c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00664d70 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-ff9b5a621abe95bd032f59c6386018ad"></a>

### [`00664e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664e80.md) → [`00665230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665230.md) FUN_00665230

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 12件 [`005cc724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc724.md) [`006d5950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5950.md) [`006d5b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5b5c.md) [`006d5bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5bf8.md) [`006d5e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5e58.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fa54.md)
- 新版 呼出元 12件 [`005ccad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccad4.md) [`006d5d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d5/006d5d00.md) [`006d5f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d5/006d5f0c.md) [`006d5fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d5/006d5fa8.md) [`006d6208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d6/006d6208.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b30a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a48.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00665250",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:00664ea8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00665264"
      ]
    ],
    [
      "unmatched:00664f20",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b30a48"
      ]
    ]
  ],
  "added": [
    [
      "00665250",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "byte[31]"
      ]
    ],
    [
      "00665258",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00665264"
      ]
    ],
    [
      "006652d0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b30a48"
      ]
    ]
  ]
}
~~~


~~~diff
- 00664e90 ["INT_ADD", "register:40f0:8", ["const:664e90:8", "const:4:8"]]
- 00664e90 ["CALL", null, ["callee:008524fc:8"]]
+ 00665240 ["INT_ADD", "register:40f0:8", ["const:665240:8", "const:4:8"]]
+ 00665240 ["CALL", null, ["callee:008524fc:8"]]
- 00664ea8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00664ea8 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00664ea8 ["CBRANCH", null, ["local:b2:8", "tmp:1:1"]]
- 00664eb0 ["BRANCH", null, ["local:b17:8"]]
+ 00665260 ["BRANCH", null, ["local:b23:8"]]
~~~


<a id="compare-9b0810d9b9023a2774dd0069aa3e89df"></a>

### [`00665078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665078.md) → [`00665428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665428.md) FUN_00665428

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`0075d5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d5e0.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0075d990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075d990.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0066507c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006650a0",
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
      "0066542c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00665450",
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
- 0066507c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0066507c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0066507c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0066507c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00665080 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0066508c ["INT_ADD", "register:40f0:8", ["const:66508c:8", "const:4:8"]]
- 0066508c ["CALL", null, ["callee:008524fc:8"]]
+ 0066543c ["INT_ADD", "register:40f0:8", ["const:66543c:8", "const:4:8"]]
+ 0066543c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-cc057928039c0bc166bfb0c5f74be3e4"></a>

### [`006650e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/006650e0.md) → [`00665490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665490.md) FUN_00665490

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0075d5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d5e0.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0075d990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075d990.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 60.71% / 新版 60.71%

~~~diff
- 006650f0 ["INT_ADD", "register:40f0:8", ["const:6650f0:8", "const:4:8"]]
- 006650f0 ["CALL", null, ["callee:008524fc:8"]]
+ 006654a0 ["INT_ADD", "register:40f0:8", ["const:6654a0:8", "const:4:8"]]
+ 006654a0 ["CALL", null, ["callee:008524fc:8"]]
- 00665108 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fe:8"]]
- 00665108 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00665108 ["INT_ZEXT", "register:4050:8", ["tmp:1:1"]]
- 0066510c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ff:8"]]
- 0066510c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0066510c ["INT_ZEXT", "register:4058:8", ["tmp:1:1"]]
~~~


<a id="compare-1f3ab9237be1f6945cb48a7ae1be1064"></a>

### [`0066529c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/0066529c.md) → [`0066564c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/0066564c.md) FUN_0066564c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 3件 [`00665150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665150.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2f91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f91c.md)
- 新版 呼出元 2件 [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) · 呼出先 3件 [`00665500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665500.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b30910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30910.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.88% / 新版 93.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066567c",
      "incomplete_value": true,
      "site": "00665680",
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
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:d74:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006652cc",
      "incomplete_value": true,
      "site": "006652d0",
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
            "const:d74:8"
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
- 006652d0 ["INT_ADD", "register:40f0:8", ["const:6652d0:8", "const:4:8"]]
- 006652d0 ["CALL", null, ["callee:00b30910:8"]]
+ 00665680 ["INT_ADD", "register:40f0:8", ["const:665680:8", "const:4:8"]]
+ 00665680 ["CALL", null, ["callee:00b30910:8"]]
- 006652b4 ["INT_ADD", "register:40f0:8", ["const:6652b4:8", "const:4:8"]]
- 006652b4 ["CALL", null, ["callee:00665500:8"]]
+ 00665664 ["INT_ADD", "register:40f0:8", ["const:665664:8", "const:4:8"]]
+ 00665664 ["CALL", null, ["callee:00665500:8"]]
- 006652b8 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 006652b8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006652b8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006652b8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00665668 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00665668 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00665668 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00665668 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-b6eb296b3464154a4e0979549fbe90f1"></a>

### [`006653d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/006653d0.md) → [`00665780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665780.md) FUN_00665780

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 2件 [`00663bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00663/00663bd0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0094826c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) · 呼出先 2件 [`00663f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00663/00663f80.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 006653e0 ["INT_ADD", "register:40f0:8", ["const:6653e0:8", "const:4:8"]]
- 006653e0 ["CALL", null, ["callee:008524fc:8"]]
+ 00665790 ["INT_ADD", "register:40f0:8", ["const:665790:8", "const:4:8"]]
+ 00665790 ["CALL", null, ["callee:008524fc:8"]]
- 006653ec ["INT_ADD", "register:40f0:8", ["const:6653ec:8", "const:4:8"]]
- 006653ec ["CALL", null, ["callee:00663f80:8"]]
+ 0066579c ["INT_ADD", "register:40f0:8", ["const:66579c:8", "const:4:8"]]
+ 0066579c ["CALL", null, ["callee:00663f80:8"]]
- 00665408 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00665408 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-81c748027bc471545172fd03b3724c18"></a>

### [`00665da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665da4.md) → [`00666154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666154.md) FUN_00666154

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 14件 [`006a7518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7518.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`008d0d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0d0c.md) [`008ec2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec2f4.md) [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) · 呼出先 12件 [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 14件 [`006a78c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a78c8.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`008d1cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1cb8.md) [`008ed2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ed/008ed2a0.md) [`008ee1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ee/008ee1b8.md) · 呼出先 12件 [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 79.30% / 新版 79.30%

優先判定に残った影響 `call_argument_candidate` 12件, `store_destination` 14件, `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00666218",
      "incomplete_value": true,
      "site": "00666228",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:4e2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00665e68",
      "incomplete_value": true,
      "site": "00665e78",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:498:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0066625c",
      "incomplete_value": true,
      "site": "0066625c",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:48a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00665eac",
      "incomplete_value": true,
      "site": "00665eac",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:3bb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006662bc",
      "incomplete_value": true,
      "site": "006662d4",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:461:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00665f0c",
      "incomplete_value": true,
      "site": "00665f24",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:392:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00666204",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00666218",
      "READ",
      [
        "storage",
        "002c1498",
        null,
        "string"
      ]
    ],
    [
      "0066624c",
      "READ",
      [
        "storage",
        "002b83bb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00666204",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00666218",
      "READ",
      [
        "storage",
        "002c14e2",
        null,
        "string"
      ]
    ],
    [
      "0066624c",
      "READ",
      [
        "storage",
        "002b848a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00665ecc ["INT_ADD", "register:40f0:8", ["const:665ecc:8", "const:4:8"]]
- 00665ecc ["CALL", null, ["callee:0047e96c:8"]]
+ 0066627c ["INT_ADD", "register:40f0:8", ["const:66627c:8", "const:4:8"]]
+ 0066627c ["CALL", null, ["callee:0047e96c:8"]]
- 00665fb8 ["INT_ADD", "register:40f0:8", ["const:665fb8:8", "const:4:8"]]
- 00665fb8 ["CALL", null, ["callee:0047e96c:8"]]
+ 00666368 ["INT_ADD", "register:40f0:8", ["const:666368:8", "const:4:8"]]
+ 00666368 ["CALL", null, ["callee:0047e96c:8"]]
- 00666078 ["INT_ADD", "register:40f0:8", ["const:666078:8", "const:4:8"]]
- 00666078 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00666428 ["INT_ADD", "register:40f0:8", ["const:666428:8", "const:4:8"]]
+ 00666428 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-9a779e427588abcf9103f62e3c5ac19a"></a>

### [`00666360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666360.md) → [`00666710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666710.md) FUN_00666710

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`007de918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007de/007de918.md) [`008bc920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc920.md) [`008c4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4974.md) [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008db670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db670.md) · 呼出先 12件 [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md)
- 新版 呼出元 7件 [`007df87c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007df/007df87c.md) [`008bd8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd8cc.md) [`008c5920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5920.md) [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) [`008dc61c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008dc/008dc61c.md) · 呼出先 12件 [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00633764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633764.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 79.30% / 新版 79.30%

優先判定に残った影響 `call_argument_candidate` 12件, `store_destination` 14件, `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006667d4",
      "incomplete_value": true,
      "site": "006667e4",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:4e2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00666424",
      "incomplete_value": true,
      "site": "00666434",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:498:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00666818",
      "incomplete_value": true,
      "site": "00666818",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:48a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00666468",
      "incomplete_value": true,
      "site": "00666468",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:3bb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00666878",
      "incomplete_value": true,
      "site": "00666890",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:461:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006664c8",
      "incomplete_value": true,
      "site": "006664e0",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:392:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006667c0",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006667d4",
      "READ",
      [
        "storage",
        "002c1498",
        null,
        "string"
      ]
    ],
    [
      "00666808",
      "READ",
      [
        "storage",
        "002b83bb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006667c0",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "006667d4",
      "READ",
      [
        "storage",
        "002c14e2",
        null,
        "string"
      ]
    ],
    [
      "00666808",
      "READ",
      [
        "storage",
        "002b848a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00666488 ["INT_ADD", "register:40f0:8", ["const:666488:8", "const:4:8"]]
- 00666488 ["CALL", null, ["callee:00633764:8"]]
+ 00666838 ["INT_ADD", "register:40f0:8", ["const:666838:8", "const:4:8"]]
+ 00666838 ["CALL", null, ["callee:00633764:8"]]
- 00666574 ["INT_ADD", "register:40f0:8", ["const:666574:8", "const:4:8"]]
- 00666574 ["CALL", null, ["callee:00633764:8"]]
+ 00666924 ["INT_ADD", "register:40f0:8", ["const:666924:8", "const:4:8"]]
+ 00666924 ["CALL", null, ["callee:00633764:8"]]
- 00666634 ["INT_ADD", "register:40f0:8", ["const:666634:8", "const:4:8"]]
- 00666634 ["CALL", null, ["callee:00c58ef0:8"]]
+ 006669e4 ["INT_ADD", "register:40f0:8", ["const:6669e4:8", "const:4:8"]]
+ 006669e4 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-82e62cd9a908a387df686f2e7cad4e4d"></a>

### [`006667e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/006667e8.md) → [`00666b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666b98.md) FUN_00666b98

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`00984c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00984/00984c88.md) [`009f4ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4ff8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) · 呼出先 12件 [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 4件 [`009627a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009627a0.md) [`00985c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00985/00985c34.md) [`009f5fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5fa4.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) · 呼出先 12件 [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 78.22% / 新版 78.22%

優先判定に残った影響 `call_argument_candidate` 12件, `store_destination` 14件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00666c58",
      "incomplete_value": true,
      "site": "00666c68",
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
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:a20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006668a8",
      "incomplete_value": true,
      "site": "006668b8",
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
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:8c8:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00666c9c",
      "incomplete_value": true,
      "site": "00666c9c",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:168:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006668ec",
      "incomplete_value": true,
      "site": "006668ec",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:11e:8"
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
      "definition_site": "00666d0c",
      "incomplete_value": true,
      "site": "00666d0c",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:b00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066695c",
      "incomplete_value": true,
      "site": "0066695c",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:a33:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00666c44",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00666c58",
      "READ",
      [
        "storage",
        "002a68c8",
        null,
        "string"
      ]
    ],
    [
      "00666c8c",
      "READ",
      [
        "storage",
        "002c011e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00666c44",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00666c58",
      "READ",
      [
        "storage",
        "002a6a20",
        null,
        "string"
      ]
    ],
    [
      "00666c8c",
      "READ",
      [
        "storage",
        "002c0168",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066690c ["INT_ADD", "register:40f0:8", ["const:66690c:8", "const:4:8"]]
- 0066690c ["CALL", null, ["callee:0047e96c:8"]]
+ 00666cbc ["INT_ADD", "register:40f0:8", ["const:666cbc:8", "const:4:8"]]
+ 00666cbc ["CALL", null, ["callee:0047e96c:8"]]
- 006669f4 ["INT_ADD", "register:40f0:8", ["const:6669f4:8", "const:4:8"]]
- 006669f4 ["CALL", null, ["callee:0047e96c:8"]]
+ 00666da4 ["INT_ADD", "register:40f0:8", ["const:666da4:8", "const:4:8"]]
+ 00666da4 ["CALL", null, ["callee:0047e96c:8"]]
- 00666ab4 ["INT_ADD", "register:40f0:8", ["const:666ab4:8", "const:4:8"]]
- 00666ab4 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00666e64 ["INT_ADD", "register:40f0:8", ["const:666e64:8", "const:4:8"]]
+ 00666e64 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-364f9210d01ca7956e3f9939592a95a0"></a>

### [`00666c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666c68.md) → [`00667018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00667/00667018.md) FUN_00667018

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00982dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982dc0.md) [`00acfd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00acf/00acfd30.md) · 呼出先 12件 [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 2件 [`00983d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983d6c.md) [`00ad0d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad0/00ad0d24.md) · 呼出先 12件 [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 78.22% / 新版 78.22%

優先判定に残った影響 `call_argument_candidate` 12件, `store_destination` 14件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006670d8",
      "incomplete_value": true,
      "site": "006670e8",
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
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:a20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00666d28",
      "incomplete_value": true,
      "site": "00666d38",
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
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:8c8:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0066711c",
      "incomplete_value": true,
      "site": "0066711c",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:168:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00666d6c",
      "incomplete_value": true,
      "site": "00666d6c",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:11e:8"
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
      "definition_site": "0066718c",
      "incomplete_value": true,
      "site": "0066718c",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:b00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00666ddc",
      "incomplete_value": true,
      "site": "00666ddc",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:a33:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006670c4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006670d8",
      "READ",
      [
        "storage",
        "002a68c8",
        null,
        "string"
      ]
    ],
    [
      "0066710c",
      "READ",
      [
        "storage",
        "002c011e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006670c4",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "006670d8",
      "READ",
      [
        "storage",
        "002a6a20",
        null,
        "string"
      ]
    ],
    [
      "0066710c",
      "READ",
      [
        "storage",
        "002c0168",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00666d8c ["INT_ADD", "register:40f0:8", ["const:666d8c:8", "const:4:8"]]
- 00666d8c ["CALL", null, ["callee:00633764:8"]]
+ 0066713c ["INT_ADD", "register:40f0:8", ["const:66713c:8", "const:4:8"]]
+ 0066713c ["CALL", null, ["callee:00633764:8"]]
- 00666e74 ["INT_ADD", "register:40f0:8", ["const:666e74:8", "const:4:8"]]
- 00666e74 ["CALL", null, ["callee:00633764:8"]]
+ 00667224 ["INT_ADD", "register:40f0:8", ["const:667224:8", "const:4:8"]]
+ 00667224 ["CALL", null, ["callee:00633764:8"]]
- 00666f34 ["INT_ADD", "register:40f0:8", ["const:666f34:8", "const:4:8"]]
- 00666f34 ["CALL", null, ["callee:00c58ef0:8"]]
+ 006672e4 ["INT_ADD", "register:40f0:8", ["const:6672e4:8", "const:4:8"]]
+ 006672e4 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-2e6a564a577a5f22916980cae98dc835"></a>

### [`006670e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00667/006670e8.md) → [`00667498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00667/00667498.md) FUN_00667498

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`005e1bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1bf8.md) [`006ab3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ab/006ab3dc.md) [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`00912b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00912/00912b08.md) · 呼出先 6件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`005e1fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1fa8.md) [`006ab78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ab/006ab78c.md) [`008ee1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ee/008ee1b8.md) [`009059b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009059b4.md) [`00913ab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00913/00913ab4.md) · 呼出先 6件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006675bc",
      "incomplete_value": true,
      "site": "006675bc",
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
                "const:334:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066720c",
      "incomplete_value": true,
      "site": "0066720c",
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
                "const:2f4:8"
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
      "006675b8",
      "READ",
      [
        "storage",
        "002a02f4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006675b8",
      "READ",
      [
        "storage",
        "002a0334",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066712c ["INT_ADD", "register:40f0:8", ["const:66712c:8", "const:4:8"]]
- 0066712c ["CALL", null, ["callee:008524fc:8"]]
+ 006674dc ["INT_ADD", "register:40f0:8", ["const:6674dc:8", "const:4:8"]]
+ 006674dc ["CALL", null, ["callee:008524fc:8"]]
- 006671bc ["INT_ADD", "register:40f0:8", ["const:6671bc:8", "const:4:8"]]
- 006671bc ["CALL", null, ["callee:00448254:8"]]
+ 0066756c ["INT_ADD", "register:40f0:8", ["const:66756c:8", "const:4:8"]]
+ 0066756c ["CALL", null, ["callee:00448254:8"]]
- 00667204 ["COPY", "tmp:0:8", ["const:2f4:8"]]
- 00667204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00667204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00667204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006675b4 ["COPY", "tmp:0:8", ["const:334:8"]]
+ 006675b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006675b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006675b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-665a82b2ce1ded4fca831dd98f3fb613"></a>

### [`006673a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00667/006673a4.md) → [`00667754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00667/00667754.md) FUN_00667754

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`006db438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006db438.md) [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`0090b95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090b/0090b95c.md) [`00a6fdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6fdf8.md) [`00a735a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a73/00a735a0.md) · 呼出先 6件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 7件 [`006db7e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006db/006db7e8.md) [`009059b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009059b4.md) [`0090c908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090c/0090c908.md) [`00a70dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a70dec.md) [`00a74594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a74/00a74594.md) · 呼出先 6件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.38% / 新版 91.38%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00667800",
      "incomplete_value": true,
      "site": "00667810",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:4f4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00667450",
      "incomplete_value": true,
      "site": "00667460",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:4aa:8"
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
      "definition_site": "0066783c",
      "incomplete_value": true,
      "site": "00667854",
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
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:591:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066748c",
      "incomplete_value": true,
      "site": "006674a4",
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
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:4c6:8"
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
      "definition_site": "00667870",
      "incomplete_value": true,
      "site": "00667870",
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
                "const:334:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006674c0",
      "incomplete_value": true,
      "site": "006674c0",
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
                "const:2f4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00667800",
      "READ",
      [
        "storage",
        "002c14aa",
        null,
        "string"
      ]
    ],
    [
      "0066783c",
      "READ",
      [
        "storage",
        "002a44c6",
        null,
        "string"
      ]
    ],
    [
      "00667864",
      "READ",
      [
        "storage",
        "002a02f4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00667800",
      "READ",
      [
        "storage",
        "002c14f4",
        null,
        "string"
      ]
    ],
    [
      "0066783c",
      "READ",
      [
        "storage",
        "002a4591",
        null,
        "string"
      ]
    ],
    [
      "00667864",
      "READ",
      [
        "storage",
        "002a0334",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006673e0 ["INT_ADD", "register:40f0:8", ["const:6673e0:8", "const:4:8"]]
- 006673e0 ["CALL", null, ["callee:008524fc:8"]]
+ 00667790 ["INT_ADD", "register:40f0:8", ["const:667790:8", "const:4:8"]]
+ 00667790 ["CALL", null, ["callee:008524fc:8"]]
- 00667448 ["COPY", "tmp:0:8", ["const:4aa:8"]]
- 00667448 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00667448 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00667448 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006677f8 ["COPY", "tmp:0:8", ["const:4f4:8"]]
+ 006677f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006677f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006677f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00667470 ["INT_ADD", "register:40f0:8", ["const:667470:8", "const:4:8"]]
- 00667470 ["CALL", null, ["callee:00448254:8"]]
+ 00667820 ["INT_ADD", "register:40f0:8", ["const:667820:8", "const:4:8"]]
+ 00667820 ["CALL", null, ["callee:00448254:8"]]
~~~


<a id="compare-ddbc787e9da39cb7038cb492b22896eb"></a>

### [`00667660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00667/00667660.md) → [`00667a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00667/00667a10.md) FUN_00667a10

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0066622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/0066622c.md) [`00667660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00667/00667660.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`006665dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/006665dc.md) [`00667a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00667/00667a10.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.70% / 新版 98.70%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00667b70",
      "incomplete_value": false,
      "site": "00667b78",
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
      "definition_site": "006677c0",
      "incomplete_value": false,
      "site": "006677c8",
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
      "definition_site": "00667b94",
      "incomplete_value": false,
      "site": "00667ba0",
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
      "definition_site": "006677e4",
      "incomplete_value": false,
      "site": "006677f0",
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
      "definition_site": "00667cc8",
      "incomplete_value": false,
      "site": "00667cd0",
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
      "definition_site": "00667918",
      "incomplete_value": false,
      "site": "00667920",
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
      "00667b70",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00667b94",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00667cc8",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00667b70",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00667b94",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00667cc8",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006677c8 ["INT_ADD", "register:40f0:8", ["const:6677c8:8", "const:4:8"]]
- 006677c8 ["CALL", null, ["callee:004421f4:8"]]
+ 00667b78 ["INT_ADD", "register:40f0:8", ["const:667b78:8", "const:4:8"]]
+ 00667b78 ["CALL", null, ["callee:004421f4:8"]]
- 006677f0 ["INT_ADD", "register:40f0:8", ["const:6677f0:8", "const:4:8"]]
- 006677f0 ["CALL", null, ["callee:00442b54:8"]]
+ 00667ba0 ["INT_ADD", "register:40f0:8", ["const:667ba0:8", "const:4:8"]]
+ 00667ba0 ["CALL", null, ["callee:00442b54:8"]]
- 00667920 ["INT_ADD", "register:40f0:8", ["const:667920:8", "const:4:8"]]
- 00667920 ["CALL", null, ["callee:004421f4:8"]]
+ 00667cd0 ["INT_ADD", "register:40f0:8", ["const:667cd0:8", "const:4:8"]]
+ 00667cd0 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-aea2335d94e200f4d56627ddcb2dccbd"></a>

### [`00667fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00667/00667fd0.md) → [`00668380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00668/00668380.md) _INIT_86

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
      "definition_site": "006683bc",
      "incomplete_value": true,
      "site": "006683d8",
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
      "definition_site": "0066800c",
      "incomplete_value": true,
      "site": "00668028",
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
      "definition_site": "006683e0",
      "incomplete_value": true,
      "site": "006683fc",
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
      "definition_site": "00668030",
      "incomplete_value": true,
      "site": "0066804c",
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
      "definition_site": "00668400",
      "incomplete_value": true,
      "site": "0066841c",
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
      "definition_site": "00668050",
      "incomplete_value": true,
      "site": "0066806c",
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
      "006683bc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006683e0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00668400",
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
      "006683bc",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006683e0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00668400",
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
- 00668130 ["INT_ADD", "register:40f0:8", ["const:668130:8", "const:4:8"]]
- 00668130 ["CALL", null, ["callee:0043bb58:8"]]
+ 006684e0 ["INT_ADD", "register:40f0:8", ["const:6684e0:8", "const:4:8"]]
+ 006684e0 ["CALL", null, ["callee:0043bb58:8"]]
- 00668204 ["INT_ADD", "register:40f0:8", ["const:668204:8", "const:4:8"]]
- 00668204 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006685b4 ["INT_ADD", "register:40f0:8", ["const:6685b4:8", "const:4:8"]]
+ 006685b4 ["CALL", null, ["callee:00c58ed0:8"]]
- 00667ff8 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 006683a8 ["COPY", "register:4098:8", ["const:ca7000:8"]]
~~~


<a id="compare-b9dc90e6947fbf383e4e57a71c6f07fb"></a>

### [`006684a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00668/006684a4.md) → [`00668854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00668/00668854.md) FUN_00668854

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`004881b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/004881b8.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004884d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004884d8.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 92.51% / 新版 92.51%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00668890",
      "incomplete_value": false,
      "site": "00668898",
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
      "definition_site": "006684e0",
      "incomplete_value": false,
      "site": "006684e8",
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
      "definition_site": "006688b0",
      "incomplete_value": true,
      "site": "006688bc",
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
                "const:710:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00668500",
      "incomplete_value": true,
      "site": "0066850c",
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
                "const:641:8"
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
      "definition_site": "00668a98",
      "incomplete_value": true,
      "site": "00668a9c",
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
      "definition_site": "006686e8",
      "incomplete_value": true,
      "site": "006686ec",
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
    "ordinal": 40,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00668898",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "006688b0",
      "READ",
      [
        "storage",
        "002b7641",
        null,
        "string"
      ]
    ],
    [
      "00668a88",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00668898",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "006688b0",
      "READ",
      [
        "storage",
        "002b7710",
        null,
        "string"
      ]
    ],
    [
      "00668a88",
      "READ",
      [
        "storage",
        "00c9bc50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006684d8 ["INT_ADD", "register:40f0:8", ["const:6684d8:8", "const:4:8"]]
- 006684d8 ["CALL", null, ["callee:00488180:8"]]
+ 00668888 ["INT_ADD", "register:40f0:8", ["const:668888:8", "const:4:8"]]
+ 00668888 ["CALL", null, ["callee:00488180:8"]]
- 006684dc ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0066888c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 006684e0 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 006684e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006684e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006684e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00668890 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00668890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00668890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00668890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6b684ed8719e8d220c7294330aaec268"></a>

### [`00668aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00668/00668aa0.md) → [`00668e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00668/00668e50.md) _INIT_87

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
      "definition_site": "00668e8c",
      "incomplete_value": true,
      "site": "00668ea8",
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
      "definition_site": "00668adc",
      "incomplete_value": true,
      "site": "00668af8",
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
      "definition_site": "00668eb0",
      "incomplete_value": true,
      "site": "00668ecc",
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
      "definition_site": "00668b00",
      "incomplete_value": true,
      "site": "00668b1c",
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
      "definition_site": "00668ed0",
      "incomplete_value": true,
      "site": "00668eec",
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
      "definition_site": "00668b20",
      "incomplete_value": true,
      "site": "00668b3c",
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
      "00668e8c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00668eb0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00668ed0",
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
      "00668e8c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00668eb0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00668ed0",
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
- 00668c00 ["INT_ADD", "register:40f0:8", ["const:668c00:8", "const:4:8"]]
- 00668c00 ["CALL", null, ["callee:0043bb58:8"]]
+ 00668fb0 ["INT_ADD", "register:40f0:8", ["const:668fb0:8", "const:4:8"]]
+ 00668fb0 ["CALL", null, ["callee:0043bb58:8"]]
- 00668cd4 ["INT_ADD", "register:40f0:8", ["const:668cd4:8", "const:4:8"]]
- 00668cd4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00669084 ["INT_ADD", "register:40f0:8", ["const:669084:8", "const:4:8"]]
+ 00669084 ["CALL", null, ["callee:00c58ed0:8"]]
- 00668ac8 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 00668e78 ["COPY", "register:4098:8", ["const:ca7000:8"]]
~~~


<a id="compare-eed97339afe8614c3f21d35d2fc88832"></a>

### [`00668e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00668/00668e30.md) → [`006691e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00669/006691e0.md) FUN_006691e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 23件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 23件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.88% / 新版 95.88%

優先判定に残った影響 `call_argument_candidate` 9件, `store_destination` 1件, `store_value` 10件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00669224",
      "incomplete_value": false,
      "site": "00669230",
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
      "definition_site": "00668e74",
      "incomplete_value": false,
      "site": "00668e80",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00669268",
      "incomplete_value": true,
      "site": "00669280",
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
                "const:2b9000:8"
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
    "old": {
      "definition_site": "00668eb8",
      "incomplete_value": true,
      "site": "00668ed0",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:140:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00669dbc",
      "incomplete_value": true,
      "site": "00669dc8",
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
                "const:806:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00669a0c",
      "incomplete_value": true,
      "site": "00669a18",
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
                "const:739:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 133,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00669230",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00669268",
      "READ",
      [
        "storage",
        "002b9140",
        null,
        "string"
      ]
    ],
    [
      "00669494",
      "READ",
      [
        "storage",
        "002ad95d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00669230",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00669268",
      "READ",
      [
        "storage",
        "002b920f",
        null,
        "string"
      ]
    ],
    [
      "00669494",
      "READ",
      [
        "storage",
        "002ada2a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006691d4 ["INT_ADD", "register:40f0:8", ["const:6691d4:8", "const:4:8"]]
- 006691d4 ["CALL", null, ["callee:0066bee4:8"]]
+ 00669584 ["INT_ADD", "register:40f0:8", ["const:669584:8", "const:4:8"]]
+ 00669584 ["CALL", null, ["callee:0066bee4:8"]]
- 00669384 ["INT_ADD", "register:40f0:8", ["const:669384:8", "const:4:8"]]
- 00669384 ["CALL", null, ["callee:0066bee4:8"]]
+ 00669734 ["INT_ADD", "register:40f0:8", ["const:669734:8", "const:4:8"]]
+ 00669734 ["CALL", null, ["callee:0066bee4:8"]]
- 00669554 ["INT_ADD", "register:40f0:8", ["const:669554:8", "const:4:8"]]
- 00669554 ["CALL", null, ["callee:0066bee4:8"]]
+ 00669904 ["INT_ADD", "register:40f0:8", ["const:669904:8", "const:4:8"]]
+ 00669904 ["CALL", null, ["callee:0066bee4:8"]]
~~~


<a id="compare-377b10073841c6ebf11c76c0dda808c8"></a>

### [`0066a448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a448.md) → [`0066a7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066a7f8.md) FUN_0066a7f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 14件 [`005e7f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7f7c.md) [`005f57d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f5/005f57d0.md) [`0066a65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a65c.md) [`0066acdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066acdc.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 4件 [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 14件 [`005e832c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e832c.md) [`005f5b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f5/005f5b80.md) [`0066aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066aa0c.md) [`0066b08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b08c.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 4件 [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.34% / 新版 96.34%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066a88c",
      "incomplete_value": false,
      "site": "0066a894",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066a4dc",
      "incomplete_value": false,
      "site": "0066a4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066a8f0",
      "incomplete_value": false,
      "site": "0066a908",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066a540",
      "incomplete_value": false,
      "site": "0066a558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
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
      "0066a88c",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "0066a8f0",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0066a88c",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "0066a8f0",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0066a4e4 ["INT_ADD", "register:40f0:8", ["const:66a4e4:8", "const:4:8"]]
- 0066a4e4 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066a894 ["INT_ADD", "register:40f0:8", ["const:66a894:8", "const:4:8"]]
+ 0066a894 ["CALL", null, ["callee:0066bee4:8"]]
- 0066a558 ["INT_ADD", "register:40f0:8", ["const:66a558:8", "const:4:8"]]
- 0066a558 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066a908 ["INT_ADD", "register:40f0:8", ["const:66a908:8", "const:4:8"]]
+ 0066a908 ["CALL", null, ["callee:0066bee4:8"]]
- 0066a4d0 ["COPY", "tmp:0:8", ["const:735:8"]]
- 0066a4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0066a4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0066a4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0066a880 ["COPY", "tmp:0:8", ["const:785:8"]]
+ 0066a880 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0066a880 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0066a880 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ba57fdf57e93c71135c04127c1c32117"></a>

### [`0066a5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a5c4.md) → [`0066a974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066a974.md) FUN_0066a974

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005e7544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7544.md) [`007c97a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c9/007c97a4.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 2件 [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`005e78f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e78f4.md) [`007ca708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ca/007ca708.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 2件 [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066a9cc",
      "incomplete_value": false,
      "site": "0066a9e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066a61c",
      "incomplete_value": false,
      "site": "0066a630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
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
      "0066a9cc",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0066a9cc",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0066a630 ["INT_ADD", "register:40f0:8", ["const:66a630:8", "const:4:8"]]
- 0066a630 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066a9e0 ["INT_ADD", "register:40f0:8", ["const:66a9e0:8", "const:4:8"]]
+ 0066a9e0 ["CALL", null, ["callee:0066bee4:8"]]
- 0066a61c ["COPY", "tmp:0:8", ["const:735:8"]]
- 0066a61c ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 0066a61c ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 0066a61c ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 0066a9cc ["COPY", "tmp:0:8", ["const:785:8"]]
+ 0066a9cc ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 0066a9cc ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 0066a9cc ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
- 0066a658 ["INT_ADD", "register:40f0:8", ["const:66a658:8", "const:4:8"]]
- 0066a658 ["CALL", null, ["callee:00c58f80:8"]]
+ 0066aa08 ["INT_ADD", "register:40f0:8", ["const:66aa08:8", "const:4:8"]]
+ 0066aa08 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-783ca342552efd50b288c390c98bd03c"></a>

### [`0066a65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a65c.md) → [`0066aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066aa0c.md) FUN_0066aa0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 19件 [`005b070c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b070c.md) [`005e2e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e2/005e2e80.md) [`005e7544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7544.md) [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0066b5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b5e0.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0066a448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a448.md) [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md)
- 新版 呼出元 19件 [`005b0abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0abc.md) [`005e3230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e3/005e3230.md) [`005e78f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e78f4.md) [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`0066b990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b990.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0066a7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066a7f8.md) [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.97% / 新版 97.97%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066aa68",
      "incomplete_value": false,
      "site": "0066aa80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066a6b8",
      "incomplete_value": false,
      "site": "0066a6d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066aa94",
      "incomplete_value": false,
      "site": "0066aaac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066a6e4",
      "incomplete_value": false,
      "site": "0066a6fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
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
      "definition_site": "0066ab74",
      "incomplete_value": false,
      "site": "0066ab8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066a7c4",
      "incomplete_value": false,
      "site": "0066a7dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0066aa68",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "0066aa94",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "0066ab74",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0066aa68",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "0066aa94",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "0066ab74",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0066a6d0 ["INT_ADD", "register:40f0:8", ["const:66a6d0:8", "const:4:8"]]
- 0066a6d0 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066aa80 ["INT_ADD", "register:40f0:8", ["const:66aa80:8", "const:4:8"]]
+ 0066aa80 ["CALL", null, ["callee:0066bee4:8"]]
- 0066a6fc ["INT_ADD", "register:40f0:8", ["const:66a6fc:8", "const:4:8"]]
- 0066a6fc ["CALL", null, ["callee:0066bee4:8"]]
+ 0066aaac ["INT_ADD", "register:40f0:8", ["const:66aaac:8", "const:4:8"]]
+ 0066aaac ["CALL", null, ["callee:0066bee4:8"]]
- 0066a7dc ["INT_ADD", "register:40f0:8", ["const:66a7dc:8", "const:4:8"]]
- 0066a7dc ["CALL", null, ["callee:0066bee4:8"]]
+ 0066ab8c ["INT_ADD", "register:40f0:8", ["const:66ab8c:8", "const:4:8"]]
+ 0066ab8c ["CALL", null, ["callee:0066bee4:8"]]
~~~


<a id="compare-cc8114c5f61009c1f76946e7446bbdef"></a>

### [`0066a8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a8ac.md) → [`0066ac5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066ac5c.md) FUN_0066ac5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.56% / 新版 86.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066ace4",
      "incomplete_value": false,
      "site": "0066acf0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066a934",
      "incomplete_value": false,
      "site": "0066a940",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
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
      "0066ace4",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "0066ad08",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "0066adcc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0066aa50"
      ]
    ]
  ],
  "added": [
    [
      "0066ace4",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "0066ad08",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "0066adcc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0066ae00"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066a940 ["INT_ADD", "register:40f0:8", ["const:66a940:8", "const:4:8"]]
- 0066a940 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066acf0 ["INT_ADD", "register:40f0:8", ["const:66acf0:8", "const:4:8"]]
+ 0066acf0 ["CALL", null, ["callee:0066bee4:8"]]
- 0066a8ec ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0066a8ec ["CBRANCH", null, ["local:b57:8", "tmp:0:1"]]
+ 0066ac9c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0066ac9c ["CBRANCH", null, ["local:b58:8", "tmp:0:1"]]
- 0066a8fc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0066a8fc ["CBRANCH", null, ["local:b57:8", "tmp:0:1"]]
+ 0066acac ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0066acac ["CBRANCH", null, ["local:b58:8", "tmp:0:1"]]
~~~


<a id="compare-b80b228c7a6ec4d62391e4b7193da8dd"></a>

### [`0066acdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066acdc.md) → [`0066b08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b08c.md) FUN_0066b08c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0066ae90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066ae90.md) [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0066a448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a448.md) [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0066b240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b240.md) [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0066a7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066a7f8.md) [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.65% / 新版 81.65%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066b0ac",
      "incomplete_value": false,
      "site": "0066b0c0",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0066ad2c",
      "incomplete_value": true,
      "site": "0066ad44",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0066ad28",
      "incomplete_value": false,
      "site": "0066ad44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
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
      "unmatched:0066ad0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066ad28",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "unmatched:0066ad3c",
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
      "0066b0bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "0066b0d8",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "0066b0ec",
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
- 0066ad10 ["INT_ADD", "register:40f0:8", ["const:66ad10:8", "const:4:8"]]
- 0066ad10 ["CALL", null, ["callee:0066a7f8:8"]]
+ 0066b0c0 ["INT_ADD", "register:40f0:8", ["const:66b0c0:8", "const:4:8"]]
+ 0066b0c0 ["CALL", null, ["callee:0066a7f8:8"]]
- 0066ad44 ["INT_ADD", "register:40f0:8", ["const:66ad44:8", "const:4:8"]]
- 0066ad44 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066b0f4 ["INT_ADD", "register:40f0:8", ["const:66b0f4:8", "const:4:8"]]
+ 0066b0f4 ["CALL", null, ["callee:0066bee4:8"]]
- 0066adb4 ["INT_ADD", "register:40f0:8", ["const:66adb4:8", "const:4:8"]]
- 0066adb4 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066b164 ["INT_ADD", "register:40f0:8", ["const:66b164:8", "const:4:8"]]
+ 0066b164 ["CALL", null, ["callee:0066bee4:8"]]
~~~


<a id="compare-44cba71983d2cd48b299aeae12ffba60"></a>

### [`0066ae90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066ae90.md) → [`0066b240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b240.md) FUN_0066b240

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 6件 [`0066acdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066acdc.md) [`0066af74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066af74.md) [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a323f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a323f4.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 6件 [`0066b08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b08c.md) [`0066b324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b324.md) [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a333e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a33/00a333e8.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.46% / 新版 82.46%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0066ae94",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066ae98",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066ae9c",
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
      "0066b244",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0066b248",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0066b24c",
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
- 0066ae90 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 0066ae94 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0066ae94 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0066ae94 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0066ae94 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0066ae98 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:30:8"]]
- 0066ae98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-ab475956e144cc2c67fd6a8eef95f87e"></a>

### [`0066af74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066af74.md) → [`0066b324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b324.md) FUN_0066b324

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0066ae90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066ae90.md) [`0066b178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b178.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`0066b240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b240.md) [`0066b528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b528.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.74% / 新版 89.74%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0066b094",
      "incomplete_value": true,
      "site": "0066b098",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:0066af74",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066af78",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066af7c",
      "WRITE",
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
      "0066b324",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0066b328",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0066b32c",
      "WRITE",
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
- 0066b098 ["INT_ADD", "register:40f0:8", ["const:66b098:8", "const:4:8"]]
- 0066b098 ["CALL", null, ["callee:00c58f50:8"]]
+ 0066b448 ["INT_ADD", "register:40f0:8", ["const:66b448:8", "const:4:8"]]
+ 0066b448 ["CALL", null, ["callee:00c58f50:8"]]
- 0066af74 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0066af74 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0066af74 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 0066af74 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0066af78 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0066af78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
~~~


<a id="compare-01917e68b27c89c219135dbfb5d8f7f3"></a>

### [`0066b0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b0ac.md) → [`0066b45c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b45c.md) FUN_0066b45c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 3件 [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 3件 [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 60.78% / 新版 60.78%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066b4b8",
      "incomplete_value": false,
      "site": "0066b4d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066b108",
      "incomplete_value": false,
      "site": "0066b120",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
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
      "unmatched:0066b0b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066b0b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066b0b8",
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
      "0066b460",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0066b464",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0066b468",
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
- 0066b120 ["INT_ADD", "register:40f0:8", ["const:66b120:8", "const:4:8"]]
- 0066b120 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066b4d0 ["INT_ADD", "register:40f0:8", ["const:66b4d0:8", "const:4:8"]]
+ 0066b4d0 ["CALL", null, ["callee:0066bee4:8"]]
- 0066b0ac ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 0066b0b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0066b0b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0066b0b0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0066b0b0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d30bc2c55662feef2b9ebc8c4c6999b4"></a>

### [`0066b178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b178.md) → [`0066b528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b528.md) FUN_0066b528

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 3件 [`0066af74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066af74.md) [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 3件 [`0066b324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b324.md) [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.44% / 新版 84.44%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066b598",
      "incomplete_value": false,
      "site": "0066b5a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066b1e8",
      "incomplete_value": true,
      "site": "0066b1f0",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:0066b1b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066b558"
      ]
    ],
    [
      "unmatched:0066b1d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066b1e8",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0066b568",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066b558"
      ]
    ],
    [
      "0066b584",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0066b598",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0066b1f0 ["INT_ADD", "register:40f0:8", ["const:66b1f0:8", "const:4:8"]]
- 0066b1f0 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066b5a0 ["INT_ADD", "register:40f0:8", ["const:66b5a0:8", "const:4:8"]]
+ 0066b5a0 ["CALL", null, ["callee:0066bee4:8"]]
- 0066b1a4 ["BRANCH", null, ["local:b9:8"]]
+ 0066b554 ["BRANCH", null, ["local:b10:8"]]
- 0066b1ac ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0066b1ac ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 0066b55c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0066b55c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-7c361a8cb7d333e7c07fe77c95eec0ac"></a>

### [`0066b22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b22c.md) → [`0066b5dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b5dc.md) FUN_0066b5dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066b660",
      "incomplete_value": false,
      "site": "0066b678",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066b2b0",
      "incomplete_value": false,
      "site": "0066b2c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
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
      "unmatched:0066b24c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066b254",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066b26c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066b750"
      ]
    ]
  ],
  "added": [
    [
      "0066b5fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0066b604",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "0066b61c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066b750"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066b2c8 ["INT_ADD", "register:40f0:8", ["const:66b2c8:8", "const:4:8"]]
- 0066b2c8 ["CALL", null, ["callee:0066bee4:8"]]
+ 0066b678 ["INT_ADD", "register:40f0:8", ["const:66b678:8", "const:4:8"]]
+ 0066b678 ["CALL", null, ["callee:0066bee4:8"]]
- 0066b240 ["COPY", "tmp:0:8", ["const:20:8"]]
- 0066b240 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 0066b240 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 0066b240 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 0066b244 ["COPY", "register:40a0:8", ["register:1660:8"]]
~~~


<a id="compare-f66a9484a90e69ccb626c8b03180ff97"></a>

### [`0066b3a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b3a4.md) → [`0066b754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b754.md) FUN_0066b754

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.69% / 新版 84.69%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0066b410",
      "incomplete_value": true,
      "site": "0066b414",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066b874",
      "incomplete_value": true,
      "site": "0066b888",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066b878",
      "incomplete_value": true,
      "site": "0066b888",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
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
      "unmatched:0066b47c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066b8d0"
      ]
    ]
  ],
  "added": [
    [
      "0066b82c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066b8d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066b414 ["INT_ADD", "register:40f0:8", ["const:66b414:8", "const:4:8"]]
- 0066b414 ["CALL", null, ["callee:00480658:8"]]
+ 0066b7c4 ["INT_ADD", "register:40f0:8", ["const:66b7c4:8", "const:4:8"]]
+ 0066b7c4 ["CALL", null, ["callee:00480658:8"]]
- 0066b4d8 ["INT_ADD", "register:40f0:8", ["const:66b4d8:8", "const:4:8"]]
- 0066b4d8 ["CALL", null, ["callee:00c590a0:8"]]
+ 0066b888 ["INT_ADD", "register:40f0:8", ["const:66b888:8", "const:4:8"]]
+ 0066b888 ["CALL", null, ["callee:00c590a0:8"]]
- 0066b3d4 ["INT_ADD", "register:40f0:8", ["const:66b3d4:8", "const:4:8"]]
- 0066b3d4 ["CALL", null, ["callee:00480478:8"]]
+ 0066b784 ["INT_ADD", "register:40f0:8", ["const:66b784:8", "const:4:8"]]
+ 0066b784 ["CALL", null, ["callee:00480478:8"]]
~~~


<a id="compare-0086f537c1d8ce85dc14bbb4597db372"></a>

### [`0066b52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b52c.md) → [`0066b8dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b8dc.md) FUN_0066b8dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 3件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md) [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md)

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
      "definition_site": "0066b570",
      "incomplete_value": true,
      "site": "0066b574",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "0066b56c",
      "incomplete_value": true,
      "site": "0066b574",
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
    "ordinal": 1,
    "slot": 2
  }
]
~~~


~~~diff
- 0066b574 ["INT_ADD", "register:40f0:8", ["const:66b574:8", "const:4:8"]]
- 0066b574 ["CALL", null, ["callee:00480e98:8"]]
+ 0066b924 ["INT_ADD", "register:40f0:8", ["const:66b924:8", "const:4:8"]]
+ 0066b924 ["CALL", null, ["callee:00480e98:8"]]
- 0066b558 ["INT_ADD", "register:40f0:8", ["const:66b558:8", "const:4:8"]]
- 0066b558 ["CALL", null, ["callee:00480e98:8"]]
+ 0066b908 ["INT_ADD", "register:40f0:8", ["const:66b908:8", "const:4:8"]]
+ 0066b908 ["CALL", null, ["callee:00480e98:8"]]
- 0066b564 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 0066b914 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-06c4f883cdc7a47e9c5f35e64d54ca70"></a>

### [`0066b5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b5e0.md) → [`0066b990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b990.md) FUN_0066b990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0066a65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a65c.md) [`0066b704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b704.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`0066aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066aa0c.md) [`0066bab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bab4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066b9b0",
      "incomplete_value": true,
      "site": "0066b9b8",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "0066b9ac",
      "incomplete_value": true,
      "site": "0066b9b8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4000:4"
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
      "definition_site": "0066b9b4",
      "incomplete_value": false,
      "site": "0066b9b8",
      "value": [
        "leaf",
        "const:c:8"
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
      "0066ba98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0066ba98",
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
- 0066b608 ["INT_ADD", "register:40f0:8", ["const:66b608:8", "const:4:8"]]
- 0066b608 ["CALL", null, ["callee:0066aa0c:8"]]
+ 0066b9b8 ["INT_ADD", "register:40f0:8", ["const:66b9b8:8", "const:4:8"]]
+ 0066b9b8 ["CALL", null, ["callee:0066aa0c:8"]]
- 0066b6e8 ["INT_ADD", "register:40f0:8", ["const:66b6e8:8", "const:4:8"]]
- 0066b6e8 ["CALL", null, ["ram:47ad34:8"]]
+ 0066ba98 ["INT_ADD", "register:40f0:8", ["const:66ba98:8", "const:4:8"]]
+ 0066ba98 ["CALL", null, ["ram:47b054:8"]]
- 0066b5f8 ["INT_ADD", "register:40f0:8", ["const:66b5f8:8", "const:4:8"]]
- 0066b5f8 ["CALL", null, ["callee:00803b14:8"]]
+ 0066b9a8 ["INT_ADD", "register:40f0:8", ["const:66b9a8:8", "const:4:8"]]
+ 0066b9a8 ["CALL", null, ["callee:00803b14:8"]]
~~~


<a id="compare-4ec63a4bae7aa23f8013d9ee27cbe893"></a>

### [`0066b704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b704.md) → [`0066bab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bab4.md) FUN_0066bab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0066b5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b5e0.md) · 呼出先 7件 [`005e0f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0f2c.md) [`005e1b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md) [`00af398c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af398c.md) [`00af3a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3a4c.md) [`00af3e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3e60.md)
- 新版 呼出元 1件 [`0066b990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b990.md) · 呼出先 7件 [`005e12dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e12dc.md) [`005e1f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f20.md) [`00af4980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4980.md) [`00af4a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4a40.md) [`00af4e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4e54.md)

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
      "definition_site": "0066b744",
      "incomplete_value": false,
      "site": "0066b74c",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0066b748",
      "incomplete_value": true,
      "site": "0066b74c",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0066b77c",
      "incomplete_value": true,
      "site": "0066b788",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4000:4"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 3
  }
]
~~~


~~~diff
- 0066b74c ["INT_ADD", "register:40f0:8", ["const:66b74c:8", "const:4:8"]]
- 0066b74c ["CALL", null, ["callee:00af4a40:8"]]
+ 0066bafc ["INT_ADD", "register:40f0:8", ["const:66bafc:8", "const:4:8"]]
+ 0066bafc ["CALL", null, ["callee:00af4a40:8"]]
- 0066b788 ["INT_ADD", "register:40f0:8", ["const:66b788:8", "const:4:8"]]
- 0066b788 ["CALL", null, ["callee:00af6494:8"]]
+ 0066bb38 ["INT_ADD", "register:40f0:8", ["const:66bb38:8", "const:4:8"]]
+ 0066bb38 ["CALL", null, ["callee:00af6494:8"]]
- 0066b720 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 0066bad0 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-43df9ddffb23278f21b464b3625ccc66"></a>

### [`0066b79c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b79c.md) → [`0066bb4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bb4c.md) FUN_0066bb4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 5件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0066a65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a65c.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 5件 [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`0066aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066aa0c.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0066b7b0 ["INT_ADD", "register:40f0:8", ["const:66b7b0:8", "const:4:8"]]
- 0066b7b0 ["CALL", null, ["callee:00803b14:8"]]
+ 0066bb60 ["INT_ADD", "register:40f0:8", ["const:66bb60:8", "const:4:8"]]
+ 0066bb60 ["CALL", null, ["callee:00803b14:8"]]
- 0066b7c0 ["INT_ADD", "register:40f0:8", ["const:66b7c0:8", "const:4:8"]]
- 0066b7c0 ["CALL", null, ["callee:0066aa0c:8"]]
+ 0066bb70 ["INT_ADD", "register:40f0:8", ["const:66bb70:8", "const:4:8"]]
+ 0066bb70 ["CALL", null, ["callee:0066aa0c:8"]]
- 0066b7c4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0066b7c4 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 0066bb74 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0066bb74 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
~~~


<a id="compare-cc112a7505922b04580100e57d3208bf"></a>

### [`0066b85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b85c.md) → [`0066bc0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bc0c.md) FUN_0066bc0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 3件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0066a65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a65c.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md)
- 新版 呼出元 1件 [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 3件 [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`0066aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066aa0c.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 0066b870 ["INT_ADD", "register:40f0:8", ["const:66b870:8", "const:4:8"]]
- 0066b870 ["CALL", null, ["callee:00803b14:8"]]
+ 0066bc20 ["INT_ADD", "register:40f0:8", ["const:66bc20:8", "const:4:8"]]
+ 0066bc20 ["CALL", null, ["callee:00803b14:8"]]
- 0066b880 ["INT_ADD", "register:40f0:8", ["const:66b880:8", "const:4:8"]]
- 0066b880 ["CALL", null, ["callee:0066aa0c:8"]]
+ 0066bc30 ["INT_ADD", "register:40f0:8", ["const:66bc30:8", "const:4:8"]]
+ 0066bc30 ["CALL", null, ["callee:0066aa0c:8"]]
- 0066b894 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 0066b894 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 0066b894 ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
+ 0066bc44 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 0066bc44 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 0066bc44 ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
~~~


<a id="compare-d6a169101f4ca1d558e2fd8528084a8b"></a>

### [`0066b8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b8c4.md) → [`0066bc74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bc74.md) FUN_0066bc74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 3件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0066a65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a65c.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md)
- 新版 呼出元 1件 [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 3件 [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`0066aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066aa0c.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0066b90c"
      ],
      [
        "FALL_THROUGH",
        "0066bcbc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0066bcbc",
      "incomplete_value": true,
      "site": "0066bcf0",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              [
                "live",
                "register:102:1"
              ]
            ]
          ],
          [
            "live",
            "register:101:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066b90c",
      "incomplete_value": true,
      "site": "0066b940",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_LESSEQUAL"
            ]
          ],
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
      "unmatched:0066b90c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066bd00"
      ]
    ]
  ],
  "added": [
    [
      "0066bcbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066bd00"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066b8dc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0066b8dc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0066bc8c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0066bc8c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 0066b8e8 ["INT_ADD", "register:40f0:8", ["const:66b8e8:8", "const:4:8"]]
- 0066b8e8 ["CALL", null, ["callee:00803b14:8"]]
+ 0066bc98 ["INT_ADD", "register:40f0:8", ["const:66bc98:8", "const:4:8"]]
+ 0066bc98 ["CALL", null, ["callee:00803b14:8"]]
- 0066b8f8 ["INT_ADD", "register:40f0:8", ["const:66b8f8:8", "const:4:8"]]
- 0066b8f8 ["CALL", null, ["callee:0066aa0c:8"]]
+ 0066bca8 ["INT_ADD", "register:40f0:8", ["const:66bca8:8", "const:4:8"]]
+ 0066bca8 ["CALL", null, ["callee:0066aa0c:8"]]
~~~


<a id="compare-91cd9bd7ef94eb54a7848b75bbc1fed0"></a>

### [`0066b95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b95c.md) → [`0066bd0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bd0c.md) FUN_0066bd0c

根拠 `leaf_bytes_and_unique_code_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 0件 
- 新版 呼出元 1件 [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-ea201526e0cfd3565eb91af0bd0c9a64"></a>

### [`0066b988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b988.md) → [`0066bd38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bd38.md) FUN_0066bd38

根拠 `leaf_bytes_and_unique_code_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) · 呼出先 0件 
- 新版 呼出元 2件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-385fa7b3ee560acdcab424baccd331b6"></a>

### [`0066b994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b994.md) → [`0066bd44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bd44.md) FUN_0066bd44

根拠 `leaf_bytes_and_unique_code_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 2件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 0件 
- 新版 呼出元 2件 [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-2e8f530054326bfbaf101429902aaa25"></a>

### [`0066b9ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b9ac.md) → [`0066bd5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bd5c.md) FUN_0066bd5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a2e0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2e/00a2e0b8.md) · 呼出先 1件 [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md)
- 新版 呼出元 1件 [`00a2f0ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2f/00a2f0ac.md) · 呼出先 1件 [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0066b9bc",
      "incomplete_value": true,
      "site": "0066b9c4",
      "value": [
        "live",
        "register:4008:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 0066b9c4 ["INT_ADD", "register:40f0:8", ["const:66b9c4:8", "const:4:8"]]
- 0066b9c4 ["CALL", null, ["callee:00480538:8"]]
+ 0066bd74 ["INT_ADD", "register:40f0:8", ["const:66bd74:8", "const:4:8"]]
+ 0066bd74 ["CALL", null, ["callee:00480538:8"]]
- 0066b9d0 ["INT_ADD", "register:40f0:8", ["const:66b9d0:8", "const:4:8"]]
- 0066b9d0 ["CALL", null, ["callee:00480538:8"]]
+ 0066bd80 ["INT_ADD", "register:40f0:8", ["const:66bd80:8", "const:4:8"]]
+ 0066bd80 ["CALL", null, ["callee:00480538:8"]]
~~~


<a id="compare-a7be4be4258581e63d01d58a30ee034e"></a>

### [`0066b9e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b9e4.md) → [`0066bd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bd94.md) FUN_0066bd94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a2e5bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2e/00a2e5bc.md) · 呼出先 1件 [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)
- 新版 呼出元 1件 [`00a2f5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2f/00a2f5b0.md) · 呼出先 1件 [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066bdac",
      "incomplete_value": true,
      "site": "0066bdb4",
      "value": [
        "live",
        "register:4008:8"
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
      "definition_site": "0066bdb0",
      "incomplete_value": true,
      "site": "0066bdb4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4040:4"
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


~~~diff
- 0066ba04 ["INT_ADD", "register:40f0:8", ["const:66ba04:8", "const:4:8"]]
- 0066ba04 ["CALL", null, ["callee:00480f48:8"]]
+ 0066bdb4 ["INT_ADD", "register:40f0:8", ["const:66bdb4:8", "const:4:8"]]
+ 0066bdb4 ["CALL", null, ["callee:00480f48:8"]]
~~~


<a id="compare-429d841fdd3bca95a00d55422d53f335"></a>

### [`0066ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066ba1c.md) → [`0066bdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bdcc.md) FUN_0066bdcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`00668e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00668/00668e30.md) [`0066ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066ba1c.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008498d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008498d4.md) · 呼出先 3件 [`0066ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066ba1c.md) [`0066ba94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066ba94.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`006691e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00669/006691e0.md) [`0066bdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bdcc.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a880.md) · 呼出先 3件 [`0066bdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bdcc.md) [`0066be44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066be44.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0066ba1c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0066ba1c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 0066bdcc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0066bdcc ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 0066ba38 ["INT_ADD", "register:40f0:8", ["const:66ba38:8", "const:4:8"]]
- 0066ba38 ["CALL", null, ["local:b0:8"]]
+ 0066bde8 ["INT_ADD", "register:40f0:8", ["const:66bde8:8", "const:4:8"]]
+ 0066bde8 ["CALL", null, ["local:b0:8"]]
- 0066ba44 ["INT_ADD", "register:40f0:8", ["const:66ba44:8", "const:4:8"]]
- 0066ba44 ["CALL", null, ["local:b0:8"]]
+ 0066bdf4 ["INT_ADD", "register:40f0:8", ["const:66bdf4:8", "const:4:8"]]
+ 0066bdf4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-3a71eefafe948da76ed8c599d916d4cf"></a>

### [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) → [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) FUN_0066bee4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 10件 [`00668e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00668/00668e30.md) [`0066a448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a448.md) [`0066a5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a5c4.md) [`0066a65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a65c.md) [`0066a8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a8ac.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0066bc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bc90.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 10件 [`006691e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00669/006691e0.md) [`0066a7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066a7f8.md) [`0066a974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066a974.md) [`0066aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066aa0c.md) [`0066ac5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066ac5c.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0066c040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066c/0066c040.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.51% / 新版 88.51%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "0066bc70",
      "incomplete_value": true,
      "site": "0066bc88",
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
        "0066bc18"
      ],
      [
        "FALL_THROUGH",
        "0066bfc8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0066bfc8",
      "incomplete_value": true,
      "site": "0066bfcc",
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
    "old": {
      "definition_site": "0066bc18",
      "incomplete_value": true,
      "site": "0066bc1c",
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
    "ordinal": 30,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0066bb60",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066bb70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066bf5c"
      ]
    ],
    [
      "unmatched:0066bb84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066bf5c"
      ]
    ]
  ],
  "added": [
    [
      "0066bf10",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0066bf20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066bf5c"
      ]
    ],
    [
      "0066bf34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0066bf5c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066bb60 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0066bb60 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0066bb60 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 0066bb64 ["INT_ADD", "register:40c0:8", ["register:40c0:8", "const:8:8"]]
- 0066bb64 ["LOAD", "register:4048:8", ["const:1b1:8", "register:40c0:8"]]
- 0066bb68 ["COPY", "register:40b8:8", ["register:40c0:8"]]
~~~


<a id="compare-970cc87b78b0ede907bec7243d617493"></a>

### [`0066bc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bc90.md) → [`0066c040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066c/0066c040.md) FUN_0066c040

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0066bb34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bb34.md) · 呼出先 2件 [`0066ba94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066ba94.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0066bee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bee4.md) · 呼出先 2件 [`0066be44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066be44.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 0066bca4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 0066bca4 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 0066c054 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 0066c054 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 0066bcac ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 0066bcac ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 0066c05c ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 0066c05c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 0066bcb4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0066bcb4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0066bcb4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0066bcb4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0066c064 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0066c064 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0066c064 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0066c064 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-91caf3a5aaefe4dd4d28f7c90a6a6acd"></a>

### [`0066bd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bd04.md) → [`0066c0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066c/0066c0b4.md) _INIT_88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 48.59% / 新版 48.59%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 45件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066c210",
      "incomplete_value": false,
      "site": "0066c214",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca7000:8"
          ],
          [
            "leaf",
            "const:e00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066be60",
      "incomplete_value": false,
      "site": "0066be64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:e40:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066c200",
      "incomplete_value": false,
      "site": "0066c214",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:e00:8"
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
      "definition_site": "0066be50",
      "incomplete_value": false,
      "site": "0066be64",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:e40:8"
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066c208",
      "incomplete_value": true,
      "site": "0066c214",
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
                "const:120:8"
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
      "definition_site": "0066be58",
      "incomplete_value": true,
      "site": "0066be64",
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
      "unmatched:0066bd08",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066bd0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0066bd10",
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
      "0066c0b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0066c0bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0066c0c0",
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
- 0066be64 ["INT_ADD", "register:40f0:8", ["const:66be64:8", "const:4:8"]]
- 0066be64 ["CALL", null, ["callee:0043bb58:8"]]
+ 0066c214 ["INT_ADD", "register:40f0:8", ["const:66c214:8", "const:4:8"]]
+ 0066c214 ["CALL", null, ["callee:0043bb58:8"]]
- 0066bf38 ["INT_ADD", "register:40f0:8", ["const:66bf38:8", "const:4:8"]]
- 0066bf38 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0066c2e8 ["INT_ADD", "register:40f0:8", ["const:66c2e8:8", "const:4:8"]]
+ 0066c2e8 ["CALL", null, ["callee:00c58ed0:8"]]
- 0066bd04 ["INT_SUB", "register:8:8", ["register:8:8", "const:120:8"]]
~~~


<a id="compare-46f2fa2d1c186c619a7a62bec44b3ad7"></a>

### [`0066d148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d148.md) → [`0066d4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4f8.md) FUN_0066d4f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0066d13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d13c.md) · 呼出先 10件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00b35884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35884.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0066d4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4ec.md) · 呼出先 10件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00b36878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36878.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.03% / 新版 97.03%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0066d6e8",
      "incomplete_value": false,
      "site": "0066d6f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29f000:8"
          ],
          [
            "leaf",
            "const:f2c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066d338",
      "incomplete_value": false,
      "site": "0066d340",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29f000:8"
          ],
          [
            "leaf",
            "const:eec:8"
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
      "definition_site": "0066d72c",
      "incomplete_value": false,
      "site": "0066d734",
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
            "const:fba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066d37c",
      "incomplete_value": false,
      "site": "0066d384",
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
            "const:f7a:8"
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
      "0066d594",
      "PARAM",
      [
        "storage",
        "002a9a8b",
        null,
        null
      ]
    ],
    [
      "0066d5a4",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ],
    [
      "0066d5b0",
      "PARAM",
      [
        "storage",
        "002ad988",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0066d594",
      "PARAM",
      [
        "storage",
        "002a9b58",
        null,
        null
      ]
    ],
    [
      "0066d5a4",
      "PARAM",
      [
        "storage",
        "002b5f9c",
        null,
        null
      ]
    ],
    [
      "0066d5b0",
      "PARAM",
      [
        "storage",
        "002ada55",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0066d340 ["INT_ADD", "register:40f0:8", ["const:66d340:8", "const:4:8"]]
- 0066d340 ["CALL", null, ["callee:00c59010:8"]]
+ 0066d6f0 ["INT_ADD", "register:40f0:8", ["const:66d6f0:8", "const:4:8"]]
+ 0066d6f0 ["CALL", null, ["callee:00c59010:8"]]
- 0066d384 ["INT_ADD", "register:40f0:8", ["const:66d384:8", "const:4:8"]]
- 0066d384 ["CALL", null, ["callee:00c59010:8"]]
+ 0066d734 ["INT_ADD", "register:40f0:8", ["const:66d734:8", "const:4:8"]]
+ 0066d734 ["CALL", null, ["callee:00c59010:8"]]
- 0066d1ac ["COPY", "tmp:0:8", ["const:ecd:8"]]
- 0066d1ac ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 0066d1ac ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 0066d1ac ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
+ 0066d55c ["COPY", "tmp:0:8", ["const:f9c:8"]]
+ 0066d55c ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
+ 0066d55c ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
+ 0066d55c ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
~~~


<a id="compare-cd2a452e88e9da3430dab7944d5a13e9"></a>

### [`0066d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d6e0.md) → [`0066da90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066da90.md) FUN_0066da90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 38件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)
- 新版 呼出元 2件 [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 38件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.57% / 新版 91.57%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 34件, `call_target` 1件, `store_destination` 25件, `store_value` 15件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0066dad8",
      "incomplete_value": false,
      "site": "0066dad8",
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
      "definition_site": "0066d728",
      "incomplete_value": false,
      "site": "0066d728",
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
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0066dad0",
      "incomplete_value": true,
      "site": "0066dad8",
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
      "definition_site": "0066d720",
      "incomplete_value": true,
      "site": "0066d728",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0066dadc",
      "incomplete_value": false,
      "site": "0066dadc",
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
      "definition_site": "0066d72c",
      "incomplete_value": false,
      "site": "0066d72c",
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
      "0066dad0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0066dad4",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "0066dad8",
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
      "0066dad0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0066dad4",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "0066dad8",
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
- 0066d728 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 0066d728 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 0066dad8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 0066dad8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 0066d72c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a78:8"]]
- 0066d72c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 0066dadc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a38:8"]]
+ 0066dadc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 0066d754 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a78:8"]]
- 0066d754 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
+ 0066db04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a38:8"]]
+ 0066db04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
~~~


<a id="compare-dbdf7d8b97eef64606c3afe6d593fe6e"></a>

### [`0066e990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066e/0066e990.md) → [`0066ed40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066e/0066ed40.md) FUN_0066ed40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0066d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d6e0.md) · 呼出先 24件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b8.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)
- 新版 呼出元 1件 [`0066da90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066da90.md) · 呼出先 24件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead0.md) [`0046ead8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead8.md) [`0046eae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eae0.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 86.07% / 新版 86.07%

優先判定に残った影響 `call_argument_candidate` 30件, `store_destination` 21件, `store_value` 20件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0066edd4",
      "incomplete_value": true,
      "site": "0066edd4",
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
                "const:6ac:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066ea24",
      "incomplete_value": true,
      "site": "0066ea24",
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
                "const:5ce:8"
              ]
            ]
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
      "definition_site": "0066edd8",
      "incomplete_value": true,
      "site": "0066edd8",
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
                "const:5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066ea28",
      "incomplete_value": true,
      "site": "0066ea28",
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
                "const:5:8"
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
      "definition_site": "0066ee1c",
      "incomplete_value": true,
      "site": "0066ee38",
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
                "const:2b3000:8"
              ],
              [
                "leaf",
                "const:eb1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066ea6c",
      "incomplete_value": true,
      "site": "0066ea88",
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
                "const:2b3000:8"
              ],
              [
                "leaf",
                "const:dd3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0066ed70",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0066ed80",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0066ed88",
      "PARAM",
      [
        "storage",
        "00c74708",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0066ed70",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0066ed80",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0066ed88",
      "PARAM",
      [
        "storage",
        "00c756d8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066efac ["COPY", "tmp:0:8", ["const:0:8"]]
- 0066efac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0066efac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0066efac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0066f35c ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 0066f35c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0066f35c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0066f35c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 0066f328 ["INT_ADD", "register:40f0:8", ["const:66f328:8", "const:4:8"]]
- 0066f328 ["CALL", null, ["callee:00c58f50:8"]]
+ 0066f6d8 ["INT_ADD", "register:40f0:8", ["const:66f6d8:8", "const:4:8"]]
+ 0066f6d8 ["CALL", null, ["callee:00c58f50:8"]]
- 0066f604 ["COPY", "register:4010:8", ["const:c63000:8"]]
+ 0066f9b4 ["COPY", "register:4010:8", ["const:c64000:8"]]
~~~


<a id="compare-78d15eb216fb7ceb6a1ef36b9c157f27"></a>

### [`0066f878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066f/0066f878.md) → [`0066fc28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066f/0066fc28.md) FUN_0066fc28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0066d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d6e0.md) [`0066ffb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066f/0066ffb4.md) · 呼出先 15件 [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00498210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498210.md)
- 新版 呼出元 2件 [`0066da90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066da90.md) [`00670364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00670/00670364.md) · 呼出先 15件 [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`00498530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498530.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 89.03% / 新版 89.03%

優先判定に残った影響 `call_argument_candidate` 16件, `store_destination` 8件, `store_value` 4件

アドレスに依存する影響 `branch_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0066fccc",
      "incomplete_value": false,
      "site": "0066fccc",
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
            "const:f40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066f91c",
      "incomplete_value": false,
      "site": "0066f91c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca3000:8"
          ],
          [
            "leaf",
            "const:f70:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0066fe48",
      "incomplete_value": true,
      "site": "0066fe58",
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
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:e0c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066fa98",
      "incomplete_value": true,
      "site": "0066faa8",
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
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:dc2:8"
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
      "definition_site": "0066fea0",
      "incomplete_value": true,
      "site": "0066feb8",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:cb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0066faf0",
      "incomplete_value": true,
      "site": "0066fb08",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:81:8"
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
      "0066fc64",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0066fc70",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0066fc78",
      "PARAM",
      [
        "storage",
        "00c74708",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0066fc64",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0066fc70",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0066fc78",
      "PARAM",
      [
        "storage",
        "00c756d8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0066f8d4 ["INT_ADD", "register:40f0:8", ["const:66f8d4:8", "const:4:8"]]
- 0066f8d4 ["CALL", null, ["callee:00c596b0:8"]]
+ 0066fc84 ["INT_ADD", "register:40f0:8", ["const:66fc84:8", "const:4:8"]]
+ 0066fc84 ["CALL", null, ["callee:00c596b0:8"]]
- 0066f91c ["INT_ADD", "tmp:0:8", ["register:4060:8", "const:f70:8"]]
- 0066f91c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4058:4"]]
+ 0066fccc ["INT_ADD", "tmp:0:8", ["register:4060:8", "const:f40:8"]]
+ 0066fccc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4058:4"]]
- 0066fa50 ["COPY", "register:0:8", ["register:4040:8"]]
- 0066fa50 ["INT_ADD", "register:40f0:8", ["const:66fa50:8", "const:4:8"]]
- 0066fa50 ["CALLIND", null, ["register:0:8"]]
+ 0066fe00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0066fe00 ["INT_ADD", "register:40f0:8", ["const:66fe00:8", "const:4:8"]]
+ 0066fe00 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-92728b42bb1cad4961f3677dcd370d37"></a>

### [`0066ffb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066f/0066ffb4.md) → [`00670364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00670/00670364.md) FUN_00670364

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 20件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0066f878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066f/0066f878.md) [`00672e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672e00.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 20件 [`0046f0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f0ec.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0066fc28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066f/0066fc28.md) [`006731b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/006731b0.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.68% / 新版 96.68%

優先判定に残った影響 `call_target` 6件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00670488",
      "incomplete_value": false,
      "site": "00670494",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006700d8",
      "incomplete_value": false,
      "site": "006700e4",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006705f8",
      "incomplete_value": false,
      "site": "00670600",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00670248",
      "incomplete_value": false,
      "site": "00670250",
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
            "const:7f0:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00670410",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00670060",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00670410",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00670474",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00670494",
      "DATA",
      [
        "storage",
        "00c74770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00670410",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00670474",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00670494",
      "DATA",
      [
        "storage",
        "00c75740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00670060 ["INT_ADD", "register:40f0:8", ["const:670060:8", "const:4:8"]]
- 00670060 ["CALL", null, ["ram:47ad34:8"]]
+ 00670410 ["INT_ADD", "register:40f0:8", ["const:670410:8", "const:4:8"]]
+ 00670410 ["CALL", null, ["ram:47b054:8"]]
- 006700c4 ["INT_ADD", "register:40f0:8", ["const:6700c4:8", "const:4:8"]]
- 006700c4 ["CALL", null, ["ram:47ad34:8"]]
+ 00670474 ["INT_ADD", "register:40f0:8", ["const:670474:8", "const:4:8"]]
+ 00670474 ["CALL", null, ["ram:47b054:8"]]
- 006704dc ["INT_ADD", "register:40f0:8", ["const:6704dc:8", "const:4:8"]]
- 006704dc ["CALL", null, ["ram:47ad34:8"]]
+ 0067088c ["INT_ADD", "register:40f0:8", ["const:67088c:8", "const:4:8"]]
+ 0067088c ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-1cb8240fc9568e9cbb0454853cd40237"></a>

### [`0067072c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00670/0067072c.md) → [`00670adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00670/00670adc.md) FUN_00670adc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 23件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 23件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 94.32% / 新版 94.32%

優先判定に残った影響 `call_argument_candidate` 22件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00670b14",
      "incomplete_value": true,
      "site": "00670b14",
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
      "definition_site": "00670764",
      "incomplete_value": true,
      "site": "00670764",
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
      "definition_site": "00670b20",
      "incomplete_value": false,
      "site": "00670b34",
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
      "definition_site": "00670770",
      "incomplete_value": false,
      "site": "00670784",
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
      "definition_site": "00670b28",
      "incomplete_value": false,
      "site": "00670b34",
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
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00670778",
      "incomplete_value": false,
      "site": "00670784",
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
            "const:708:8"
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
      "00670b10",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00670b20",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00670b28",
      "PARAM",
      [
        "storage",
        "00c74708",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00670b10",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00670b20",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00670b28",
      "PARAM",
      [
        "storage",
        "00c756d8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00670764 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00670764 ["CBRANCH", null, ["local:b84:8", "tmp:0:1"]]
+ 00670b14 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00670b14 ["CBRANCH", null, ["local:b85:8", "tmp:0:1"]]
- 00670784 ["INT_ADD", "register:40f0:8", ["const:670784:8", "const:4:8"]]
- 00670784 ["CALL", null, ["callee:00c596b0:8"]]
+ 00670b34 ["INT_ADD", "register:40f0:8", ["const:670b34:8", "const:4:8"]]
+ 00670b34 ["CALL", null, ["callee:00c596b0:8"]]
- 00671044 ["INT_ADD", "register:40f0:8", ["const:671044:8", "const:4:8"]]
- 00671044 ["CALL", null, ["callee:004692e8:8"]]
+ 006713f4 ["INT_ADD", "register:40f0:8", ["const:6713f4:8", "const:4:8"]]
+ 006713f4 ["CALL", null, ["callee:004692e8:8"]]
~~~


<a id="compare-f45acd7a1a7a1f340e36a16511ab6a97"></a>

### [`006714ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00671/006714ec.md) → [`0067189c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00671/0067189c.md) FUN_0067189c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0066d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d6e0.md) · 呼出先 22件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`0066da90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066da90.md) · 呼出先 22件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.34% / 新版 57.34%

優先判定に残った影響 `call_argument_candidate` 34件, `unresolved_branch_alignment` 26件, `unresolved_call_alignment` 38件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 121件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006719a4",
      "incomplete_value": false,
      "site": "006719ac",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006715f4",
      "incomplete_value": true,
      "site": "006715fc",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0067199c",
      "incomplete_value": true,
      "site": "006719ac",
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
            "const:50:8"
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
      "definition_site": "006719a0",
      "incomplete_value": true,
      "site": "006719ac",
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
            "const:70:8"
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
      "unmatched:006714f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006714f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006714f8",
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
      "006718a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006718a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006718a8",
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
- 006715fc ["INT_ADD", "register:40f0:8", ["const:6715fc:8", "const:4:8"]]
- 006715fc ["CALL", null, ["callee:0047e96c:8"]]
+ 006719ac ["INT_ADD", "register:40f0:8", ["const:6719ac:8", "const:4:8"]]
+ 006719ac ["CALL", null, ["callee:0047e96c:8"]]
- 006716b4 ["INT_ADD", "register:40f0:8", ["const:6716b4:8", "const:4:8"]]
- 006716b4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00671a64 ["INT_ADD", "register:40f0:8", ["const:671a64:8", "const:4:8"]]
+ 00671a64 ["CALL", null, ["callee:00c54d90:8"]]
- 006716d0 ["INT_ADD", "register:40f0:8", ["const:6716d0:8", "const:4:8"]]
- 006716d0 ["CALL", null, ["callee:00c58f20:8"]]
+ 00671a80 ["INT_ADD", "register:40f0:8", ["const:671a80:8", "const:4:8"]]
+ 00671a80 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-5ebdc0066b1a22e6bca70a93d9dda052"></a>

### [`006726f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/006726f0.md) → [`00672aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672aa0.md) FUN_00672aa0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00672718",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00672adc"
      ]
    ]
  ],
  "added": [
    [
      "00672ac8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00672adc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00672714 ["INT_LESSEQUAL", "register:105:1", ["register:40a8:8", "register:40b0:8"]]
- 00672714 ["INT_SBORROW", "register:106:1", ["register:40b0:8", "register:40a8:8"]]
- 00672714 ["INT_SUB", "tmp:0:8", ["register:40b0:8", "register:40a8:8"]]
- 00672714 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00672718 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00672718 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0067271c ["BRANCH", null, ["local:b8:8"]]
+ 00672acc ["BRANCH", null, ["local:b9:8"]]
~~~


<a id="compare-155ff0dc95b99e610e697528aefb149d"></a>

### [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) → [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) FUN_00672b38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 15件 [`00672944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672944.md) [`0067b834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067b/0067b834.md) [`0067b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067b/0067b920.md) [`007f074c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f074c.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 15件 [`00672cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672cf4.md) [`0067bbe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067b/0067bbe4.md) [`0067bcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067b/0067bcd0.md) [`007f16b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f16b0.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.19% / 新版 76.19%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00672b50",
      "incomplete_value": true,
      "site": "00672b58",
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
      "unmatched:00672788",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0067278c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006727ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00672b78"
      ]
    ]
  ],
  "added": [
    [
      "00672b38",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00672b3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00672b5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00672b78"
      ]
    ]
  ]
}
~~~


~~~diff
- 006727a8 ["INT_ADD", "register:40f0:8", ["const:6727a8:8", "const:4:8"]]
- 006727a8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00672b58 ["INT_ADD", "register:40f0:8", ["const:672b58:8", "const:4:8"]]
+ 00672b58 ["CALL", null, ["callee:00c54d90:8"]]
- 00672788 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00672788 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00672788 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00672788 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0067278c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0067278c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0067278c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0067278c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-58998354bca30894b7e2be02a4c2802a"></a>

### [`006728d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/006728d8.md) → [`00672c88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672c88.md) FUN_00672c88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.19% / 新版 85.19%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006728d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006728dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006728e0",
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
      "00672c88",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00672c8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00672c90",
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
- 006728d8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006728d8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006728d8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 006728d8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006728dc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006728dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 006728e0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006728e0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006728e0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006728e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-10cb86c9b3633ade51e20a2fb3d14d63"></a>

### [`00672944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672944.md) → [`00672cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672cf4.md) FUN_00672cf4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00672b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b64.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467dcc.md) [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00672f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f14.md) · 呼出先 7件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`004680ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004680ec.md) [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.59% / 新版 72.59%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00672afc",
      "incomplete_value": true,
      "site": "00672b00",
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
            "const:178:8"
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
      "definition_site": "00672b24",
      "incomplete_value": false,
      "site": "00672b28",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "00672b20",
      "incomplete_value": true,
      "site": "00672b28",
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
      "unmatched:00672960",
      "DATA",
      [
        "storage",
        "00c74730",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00672980",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00672d4c"
      ]
    ],
    [
      "unmatched:00672a04",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ]
  ],
  "added": [
    [
      "00672d10",
      "DATA",
      [
        "storage",
        "00c75700",
        null,
        "pointer"
      ]
    ],
    [
      "00672d30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00672d4c"
      ]
    ],
    [
      "00672db4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ]
  ]
}
~~~


~~~diff
- 00672b00 ["INT_ADD", "register:40f0:8", ["const:672b00:8", "const:4:8"]]
- 00672b00 ["CALL", null, ["callee:00672b38:8"]]
+ 00672eb0 ["INT_ADD", "register:40f0:8", ["const:672eb0:8", "const:4:8"]]
+ 00672eb0 ["CALL", null, ["callee:00672b38:8"]]
- 00672b28 ["INT_ADD", "register:40f0:8", ["const:672b28:8", "const:4:8"]]
- 00672b28 ["CALL", null, ["callee:00c54d90:8"]]
+ 00672ed8 ["INT_ADD", "register:40f0:8", ["const:672ed8:8", "const:4:8"]]
+ 00672ed8 ["CALL", null, ["callee:00c54d90:8"]]
- 00672958 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 00672d08 ["COPY", "register:4040:8", ["const:c75000:8"]]
~~~


<a id="compare-78933a06155432a726d87b3833a3a560"></a>

### [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) → [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) FUN_00672f38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 12件 [`00672944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672944.md) [`00672da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672da4.md) [`0067b834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067b/0067b834.md) [`0067b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067b/0067b920.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 12件 [`00672cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672cf4.md) [`00673154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/00673154.md) [`0067bbe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067b/0067bbe4.md) [`0067bcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067b/0067bcd0.md) [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.04% / 新版 77.04%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00672cfc",
      "incomplete_value": true,
      "site": "00672d04",
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
      "unmatched:00672b88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00672b8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00672ba4",
      "DATA",
      [
        "storage",
        "00c74750",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00672f38",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00672f3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00672f54",
      "DATA",
      [
        "storage",
        "00c75720",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00672d04 ["INT_ADD", "register:40f0:8", ["const:672d04:8", "const:4:8"]]
- 00672d04 ["CALL", null, ["callee:00c54d90:8"]]
+ 006730b4 ["INT_ADD", "register:40f0:8", ["const:6730b4:8", "const:4:8"]]
+ 006730b4 ["CALL", null, ["callee:00c54d90:8"]]
- 00672b88 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00672b88 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00672b88 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00672b88 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00672b8c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00672b8c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00672b8c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00672b8c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ba68a76318f585ac1de2cfb86925b7a9"></a>

### [`00672da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672da4.md) → [`00673154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/00673154.md) FUN_00673154

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00672db4 ["INT_ADD", "register:40f0:8", ["const:672db4:8", "const:4:8"]]
- 00672db4 ["CALL", null, ["callee:00672f38:8"]]
+ 00673164 ["INT_ADD", "register:40f0:8", ["const:673164:8", "const:4:8"]]
+ 00673164 ["CALL", null, ["callee:00672f38:8"]]
~~~


<a id="compare-7561fc70df149702c7449cf01ececc07"></a>

### [`00672dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672dcc.md) → [`0067317c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/0067317c.md) FUN_0067317c

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
      "unmatched:00672de4",
      "DATA",
      [
        "storage",
        "00c74770",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00672de8",
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
      "00673194",
      "DATA",
      [
        "storage",
        "00c75740",
        null,
        "undefined *"
      ]
    ],
    [
      "00673198",
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
- 00672dd8 ["INT_ADD", "register:40f0:8", ["const:672dd8:8", "const:4:8"]]
- 00672dd8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00673188 ["INT_ADD", "register:40f0:8", ["const:673188:8", "const:4:8"]]
+ 00673188 ["CALL", null, ["callee:00c58f30:8"]]
- 00672ddc ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0067318c ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00672de0 ["COPY", "tmp:0:8", ["const:770:8"]]
- 00672de0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00672de0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00672de0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-50269938cadcc5559e0c1b95e0f5047a"></a>

### [`00672df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672df0.md) → [`006731a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/006731a0.md) FUN_006731a0

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
      "unmatched:00672df8",
      "DATA",
      [
        "storage",
        "00c74770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006731a8",
      "DATA",
      [
        "storage",
        "00c75740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00672df0 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00672df4 ["COPY", "tmp:0:8", ["const:770:8"]]
- 00672df4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00672df4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00672df4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00672df8 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00672df8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a79198633ffc2a66d35564a32e48dafd"></a>

### [`00672e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672e08.md) → [`006731b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/006731b8.md) FUN_006731b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006731dc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00672e2c",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00672e30",
      "incomplete_value": false,
      "site": "00672e38",
      "value": [
        "leaf",
        "const:b:8"
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
      "definition_site": "00672e34",
      "incomplete_value": false,
      "site": "00672e38",
      "value": [
        "leaf",
        "const:0:8"
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
      "006731dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006731dc",
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
- 00672e2c ["INT_ADD", "register:40f0:8", ["const:672e2c:8", "const:4:8"]]
- 00672e2c ["CALL", null, ["ram:47ad34:8"]]
+ 006731dc ["INT_ADD", "register:40f0:8", ["const:6731dc:8", "const:4:8"]]
+ 006731dc ["CALL", null, ["ram:47b054:8"]]
- 00672e38 ["INT_ADD", "register:40f0:8", ["const:672e38:8", "const:4:8"]]
- 00672e38 ["CALL", null, ["callee:0047d134:8"]]
+ 006731e8 ["INT_ADD", "register:40f0:8", ["const:6731e8:8", "const:4:8"]]
+ 006731e8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-834644acf81c18a84b44aae51281a74f"></a>

### [`00672e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672e7c.md) → [`0067322c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/0067322c.md) FUN_0067322c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00672e94",
      "DATA",
      [
        "storage",
        "00c747f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00673244",
      "DATA",
      [
        "storage",
        "00c757c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00672e88 ["INT_ADD", "register:40f0:8", ["const:672e88:8", "const:4:8"]]
- 00672e88 ["CALL", null, ["callee:00c58f30:8"]]
+ 00673238 ["INT_ADD", "register:40f0:8", ["const:673238:8", "const:4:8"]]
+ 00673238 ["CALL", null, ["callee:00c58f30:8"]]
- 00672e8c ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0067323c ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00672e90 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 00672e90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00672e90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00672e90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a653cdea79021b02f921a33ea1f5f7cb"></a>

### [`00672ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672ea0.md) → [`00673250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/00673250.md) FUN_00673250

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
      "definition_site": "00673254",
      "incomplete_value": false,
      "site": "00673258",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00672ea4",
      "incomplete_value": false,
      "site": "00672ea8",
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
            "const:7f0:8"
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
      "00673258",
      "DATA",
      [
        "storage",
        "00c747f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00673258",
      "DATA",
      [
        "storage",
        "00c757c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00672ea0 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 00673250 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00672ea4 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 00672ea4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00672ea4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00672ea4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00673254 ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 00673254 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00673254 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00673254 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-311496b107366ff46609bf88b21cba64"></a>

### [`00672eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672eb8.md) → [`00673268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/00673268.md) FUN_00673268

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 8件 [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 50.62% / 新版 50.62%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006732b8",
      "incomplete_value": false,
      "site": "006732c8",
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
      "definition_site": "00672f08",
      "incomplete_value": false,
      "site": "00672f18",
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
      "definition_site": "006732c0",
      "incomplete_value": false,
      "site": "006732c8",
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
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00672f10",
      "incomplete_value": false,
      "site": "00672f18",
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
            "const:708:8"
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
      "unmatched:00672ec8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00672ecc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00672ed0",
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
      "00673278",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0067327c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00673280",
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
- 00672f18 ["INT_ADD", "register:40f0:8", ["const:672f18:8", "const:4:8"]]
- 00672f18 ["CALL", null, ["callee:00c596b0:8"]]
+ 006732c8 ["INT_ADD", "register:40f0:8", ["const:6732c8:8", "const:4:8"]]
+ 006732c8 ["CALL", null, ["callee:00c596b0:8"]]
- 006732c8 ["FLOAT_ADD", "register:5000:8", ["register:5000:8", "register:5020:8"]]
- 006732c8 ["COPY", "register:5008:8", ["const:0:8"]]
- 006732c8 ["COPY", "register:5010:8", ["const:0:8"]]
- 006732c8 ["COPY", "register:5018:8", ["const:0:8"]]
- 00672ec8 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00672ec8 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00672ec8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00672ec8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-dbda9f716e137dbf17cf9d12c2ca6aaa"></a>

### [`006733f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00673/006733f0.md) → [`006737a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/006737a0.md) _INIT_90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.53% / 新版 78.53%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006739c0",
      "incomplete_value": false,
      "site": "006739d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:43b000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00673610",
      "incomplete_value": false,
      "site": "00673624",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:43a000:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "definition_site": "006739c8",
      "incomplete_value": false,
      "site": "006739d4",
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
            "const:670:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00673618",
      "incomplete_value": false,
      "site": "00673624",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca7000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006739d0",
      "incomplete_value": false,
      "site": "006739d4",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00673620",
      "incomplete_value": false,
      "site": "00673624",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
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
      "unmatched:00673420",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0067342c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00673448",
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
      "006737d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "006737dc",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006737f8",
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
- 00673624 ["INT_ADD", "register:40f0:8", ["const:673624:8", "const:4:8"]]
- 00673624 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006739d4 ["INT_ADD", "register:40f0:8", ["const:6739d4:8", "const:4:8"]]
+ 006739d4 ["CALL", null, ["callee:00c58ed0:8"]]
- 00673400 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 00673400 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00673400 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00673400 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00673404 ["COPY", "register:40a8:8", ["register:1660:8"]]
~~~


<a id="compare-34c22c3a763a01198e4dfc982af6b158"></a>

### [`00673780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00673/00673780.md) → [`00673b30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00673/00673b30.md) _INIT_91

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.36% / 新版 81.36%

優先判定に残った影響 `call_argument_candidate` 19件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00673ca8",
      "incomplete_value": true,
      "site": "00673cb8",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00673cac",
      "incomplete_value": true,
      "site": "00673cb8",
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
    "old": null,
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00673cb0",
      "incomplete_value": true,
      "site": "00673cb8",
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
    "old": null,
    "ordinal": 2,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006737b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006737bc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006737d8",
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
      "00673b60",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00673b6c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00673b88",
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
- 00673908 ["INT_ADD", "register:40f0:8", ["const:673908:8", "const:4:8"]]
- 00673908 ["CALL", null, ["callee:0043bb58:8"]]
+ 00673cb8 ["INT_ADD", "register:40f0:8", ["const:673cb8:8", "const:4:8"]]
+ 00673cb8 ["CALL", null, ["callee:0043bb58:8"]]
- 0067391c ["INT_ADD", "register:40f0:8", ["const:67391c:8", "const:4:8"]]
- 0067391c ["CALL", null, ["callee:0043bb58:8"]]
+ 00673ccc ["INT_ADD", "register:40f0:8", ["const:673ccc:8", "const:4:8"]]
+ 00673ccc ["CALL", null, ["callee:0043bb58:8"]]
- 00673930 ["INT_ADD", "register:40f0:8", ["const:673930:8", "const:4:8"]]
- 00673930 ["CALL", null, ["callee:0043bb58:8"]]
+ 00673ce0 ["INT_ADD", "register:40f0:8", ["const:673ce0:8", "const:4:8"]]
+ 00673ce0 ["CALL", null, ["callee:0043bb58:8"]]
~~~


