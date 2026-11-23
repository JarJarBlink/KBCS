# v16.0.2 → v16.0.3 · 最優先の変更候補 (29)

[一覧の目次](README.md)

<a id="compare-152b765d84c56f1a2e8c7bb8ab0d487e"></a>

### [`00616284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616284.md) → [`00616634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616634.md) FUN_00616634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 18件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)
- 新版 呼出元 0件  · 呼出先 18件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.44% / 新版 87.44%

優先判定に残った影響 `call_argument_candidate` 14件, `call_target` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00616678",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006162c8",
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
      "site": "00616694",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006162e4",
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
      "definition_site": "00616360",
      "incomplete_value": false,
      "site": "00616364",
      "value": [
        "leaf",
        "const:66:8"
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
      "unmatched:00616298",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00616678",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00616694",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00616648",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00616678",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00616694",
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
- 006162c8 ["INT_ADD", "register:40f0:8", ["const:6162c8:8", "const:4:8"]]
- 006162c8 ["CALL", null, ["ram:47ad34:8"]]
+ 00616678 ["INT_ADD", "register:40f0:8", ["const:616678:8", "const:4:8"]]
+ 00616678 ["CALL", null, ["ram:47b054:8"]]
- 006162e4 ["INT_ADD", "register:40f0:8", ["const:6162e4:8", "const:4:8"]]
- 006162e4 ["CALL", null, ["ram:47ad34:8"]]
+ 00616694 ["INT_ADD", "register:40f0:8", ["const:616694:8", "const:4:8"]]
+ 00616694 ["CALL", null, ["ram:47b054:8"]]
- 00616364 ["INT_ADD", "register:40f0:8", ["const:616364:8", "const:4:8"]]
- 00616364 ["CALL", null, ["callee:00aa44c4:8"]]
+ 00616714 ["INT_ADD", "register:40f0:8", ["const:616714:8", "const:4:8"]]
+ 00616714 ["CALL", null, ["callee:00aa44c4:8"]]
~~~


<a id="compare-5864e69acba7107bc0fa7ec88af5c0f9"></a>

### [`006166f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/006166f4.md) → [`00616aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616aa4.md) FUN_00616aa4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 37.50% / 新版 37.50%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006166f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006166f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061671c",
      "DATA",
      [
        "storage",
        "00c71af8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00616aa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00616aa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00616acc",
      "DATA",
      [
        "storage",
        "00c72ac8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006166f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006166f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006166f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006166f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006166f8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006166f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006166fc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-d3fbce671a4707653a8216a8286bc558"></a>

### [`00616734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616734.md) → [`00616ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616ae4.md) FUN_00616ae4

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
      "unmatched:0061673c",
      "DATA",
      [
        "storage",
        "00c71af8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00616aec",
      "DATA",
      [
        "storage",
        "00c72ac8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00616734 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 00616738 ["COPY", "tmp:0:8", ["const:af8:8"]]
- 00616738 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00616738 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00616738 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061673c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061673c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-e044fb97f95b50346290c080ac362489"></a>

### [`0061675c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/0061675c.md) → [`00616b0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616b0c.md) FUN_00616b0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047ce68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce68.md) [`00616988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616988.md) [`0061698c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/0061698c.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d188.md) [`00616d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616d38.md) [`00616d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616d3c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.24% / 新版 68.24%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006167a4",
      "incomplete_value": false,
      "site": "006167ac",
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
    "new": {
      "definition_site": "00616ba4",
      "incomplete_value": true,
      "site": "00616ba8",
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006167f4",
      "incomplete_value": true,
      "site": "006167f8",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00616bd4",
      "incomplete_value": true,
      "site": "00616bf4",
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
                "const:22a0:8"
              ]
            ]
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
      "unmatched:00616760",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00616764",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00616768",
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
      "00616b10",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00616b14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00616b18",
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
- 006167ac ["INT_ADD", "register:40f0:8", ["const:6167ac:8", "const:4:8"]]
- 006167ac ["CALL", null, ["callee:0047d134:8"]]
+ 00616b5c ["INT_ADD", "register:40f0:8", ["const:616b5c:8", "const:4:8"]]
+ 00616b5c ["CALL", null, ["callee:0047d134:8"]]
- 006167f8 ["INT_ADD", "register:40f0:8", ["const:6167f8:8", "const:4:8"]]
- 006167f8 ["CALL", null, ["callee:008b7f1c:8"]]
+ 00616ba8 ["INT_ADD", "register:40f0:8", ["const:616ba8:8", "const:4:8"]]
+ 00616ba8 ["CALL", null, ["callee:008b7f1c:8"]]
- 00616844 ["INT_ADD", "register:40f0:8", ["const:616844:8", "const:4:8"]]
- 00616844 ["CALL", null, ["callee:0088942c:8"]]
+ 00616bf4 ["INT_ADD", "register:40f0:8", ["const:616bf4:8", "const:4:8"]]
+ 00616bf4 ["CALL", null, ["callee:0088942c:8"]]
~~~


<a id="compare-113daf88287e809b8ad5ffe40c62d733"></a>

### [`00616928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616928.md) → [`00616cd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616cd8.md) FUN_00616cd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00616950",
      "DATA",
      [
        "storage",
        "00c71b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00616d00",
      "DATA",
      [
        "storage",
        "00c72b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061693c ["INT_ADD", "register:40f0:8", ["const:61693c:8", "const:4:8"]]
- 0061693c ["CALL", null, ["callee:00c58f30:8"]]
+ 00616cec ["INT_ADD", "register:40f0:8", ["const:616cec:8", "const:4:8"]]
+ 00616cec ["CALL", null, ["callee:00c58f30:8"]]
- 00616948 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 00616cf8 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061694c ["COPY", "tmp:0:8", ["const:b68:8"]]
- 0061694c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061694c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061694c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-18c17865ac833eaf6d5f2ee86d08aaff"></a>

### [`00616968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616968.md) → [`00616d18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616d18.md) FUN_00616d18

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
      "unmatched:00616970",
      "DATA",
      [
        "storage",
        "00c71b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00616d20",
      "DATA",
      [
        "storage",
        "00c72b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00616968 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 0061696c ["COPY", "tmp:0:8", ["const:b68:8"]]
- 0061696c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061696c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061696c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00616970 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00616970 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-56bc59a03c7d03646ea6746f8f2f0caf"></a>

### [`00616990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616990.md) → [`00616d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616d40.md) FUN_00616d40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 23件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 23件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d268.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.71% / 新版 83.71%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00616d94",
      "incomplete_value": false,
      "site": "00616da8",
      "value": [
        "leaf",
        "const:6:8"
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
      "definition_site": "00616e7c",
      "incomplete_value": true,
      "site": "00616e84",
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
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00616b40",
      "incomplete_value": false,
      "site": "00616b48",
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
      "unmatched:00616994",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00616998",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061699c",
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
      "00616d44",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00616d48",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00616d4c",
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
- 006169f8 ["INT_ADD", "register:40f0:8", ["const:6169f8:8", "const:4:8"]]
- 006169f8 ["CALL", null, ["callee:0071c868:8"]]
+ 00616da8 ["INT_ADD", "register:40f0:8", ["const:616da8:8", "const:4:8"]]
+ 00616da8 ["CALL", null, ["callee:0071c868:8"]]
- 00616ad4 ["INT_ADD", "register:40f0:8", ["const:616ad4:8", "const:4:8"]]
- 00616ad4 ["CALL", null, ["callee:005cd4e0:8"]]
+ 00616e84 ["INT_ADD", "register:40f0:8", ["const:616e84:8", "const:4:8"]]
+ 00616e84 ["CALL", null, ["callee:005cd4e0:8"]]
- 00616b48 ["INT_ADD", "register:40f0:8", ["const:616b48:8", "const:4:8"]]
- 00616b48 ["CALL", null, ["callee:008892b0:8"]]
+ 00616ef8 ["INT_ADD", "register:40f0:8", ["const:616ef8:8", "const:4:8"]]
+ 00616ef8 ["CALL", null, ["callee:008892b0:8"]]
~~~


<a id="compare-4c8e40bc86f8a798ddf6425a86f76cd3"></a>

### [`00616e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616e8c.md) → [`0061723c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061723c.md) FUN_0061723c

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
      "unmatched:00616eb0",
      "DATA",
      [
        "storage",
        "00c71bd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00617260",
      "DATA",
      [
        "storage",
        "00c72ba8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00616ea0 ["INT_ADD", "register:40f0:8", ["const:616ea0:8", "const:4:8"]]
- 00616ea0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00617250 ["INT_ADD", "register:40f0:8", ["const:617250:8", "const:4:8"]]
+ 00617250 ["CALL", null, ["callee:00c58f30:8"]]
- 00616ea8 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 00617258 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 00616eac ["COPY", "tmp:0:8", ["const:bd8:8"]]
- 00616eac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00616eac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00616eac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fde51eda2ee5838dbe9ed9d5856de66f"></a>

### [`00616ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616ec4.md) → [`00617274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617274.md) FUN_00617274

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
      "definition_site": "00617278",
      "incomplete_value": false,
      "site": "0061727c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:ba8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00616ec8",
      "incomplete_value": false,
      "site": "00616ecc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
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
      "0061727c",
      "DATA",
      [
        "storage",
        "00c71bd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061727c",
      "DATA",
      [
        "storage",
        "00c72ba8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00616ec4 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 00617274 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 00616ec8 ["COPY", "tmp:0:8", ["const:bd8:8"]]
- 00616ec8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00616ec8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00616ec8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00617278 ["COPY", "tmp:0:8", ["const:ba8:8"]]
+ 00617278 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00617278 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00617278 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-310174b5cb899ab78d7398be74d5773a"></a>

### [`00616f44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616f44.md) → [`006172f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006172f4.md) FUN_006172f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 35.71% / 新版 35.71%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00616f44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00616f48",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00616f68",
      "DATA",
      [
        "storage",
        "00c71c58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006172f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006172f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00617318",
      "DATA",
      [
        "storage",
        "00c72c28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00616f44 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00616f44 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00616f44 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00616f44 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00616f48 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00616f48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00616f4c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-6262b5919fa8d9eed4be5b54d96e644e"></a>

### [`00616f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616f7c.md) → [`0061732c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061732c.md) FUN_0061732c

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
      "definition_site": "00617330",
      "incomplete_value": false,
      "site": "00617334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:c28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00616f80",
      "incomplete_value": false,
      "site": "00616f84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:c58:8"
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
      "00617334",
      "DATA",
      [
        "storage",
        "00c71c58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00617334",
      "DATA",
      [
        "storage",
        "00c72c28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00616f7c ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 0061732c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 00616f80 ["COPY", "tmp:0:8", ["const:c58:8"]]
- 00616f80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00616f80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00616f80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00617330 ["COPY", "tmp:0:8", ["const:c28:8"]]
+ 00617330 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00617330 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00617330 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d372ea86c2f8b86e8965e44d05ce5712"></a>

### [`00616f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616f9c.md) → [`0061734c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061734c.md) FUN_0061734c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00616fcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0061737c",
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
- 00616fa4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00616fa4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00617354 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00617354 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00616fac ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00616fac ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 0061735c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 0061735c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00616fcc ["INT_ADD", "register:40f0:8", ["const:616fcc:8", "const:4:8"]]
- 00616fcc ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-2a47473115727260d55037f1450189b4"></a>

### [`00617030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617030.md) → [`006173e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006173e0.md) FUN_006173e0

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
      "definition_site": "006173f4",
      "incomplete_value": false,
      "site": "006173f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00617044",
      "incomplete_value": false,
      "site": "00617048",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:d08:8"
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
      "006173f8",
      "DATA",
      [
        "storage",
        "00c71d08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006173f8",
      "DATA",
      [
        "storage",
        "00c72cd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061703c ["INT_ADD", "register:40f0:8", ["const:61703c:8", "const:4:8"]]
- 0061703c ["CALL", null, ["callee:00c58f30:8"]]
+ 006173ec ["INT_ADD", "register:40f0:8", ["const:6173ec:8", "const:4:8"]]
+ 006173ec ["CALL", null, ["callee:00c58f30:8"]]
- 00617040 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 006173f0 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 00617044 ["COPY", "tmp:0:8", ["const:d08:8"]]
- 00617044 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00617044 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00617044 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006173f4 ["COPY", "tmp:0:8", ["const:cd8:8"]]
+ 006173f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006173f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006173f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f23de85645150ad1e56ab68ae1adde23"></a>

### [`0061709c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/0061709c.md) → [`0061744c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061744c.md) FUN_0061744c

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
      "unmatched:006170c0",
      "DATA",
      [
        "storage",
        "00c71d98",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006170c4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006170c8",
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
      "00617470",
      "DATA",
      [
        "storage",
        "00c72d68",
        null,
        "undefined *"
      ]
    ],
    [
      "00617474",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00617478",
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
- 006170b0 ["INT_ADD", "register:40f0:8", ["const:6170b0:8", "const:4:8"]]
- 006170b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00617460 ["INT_ADD", "register:40f0:8", ["const:617460:8", "const:4:8"]]
+ 00617460 ["CALL", null, ["callee:00c58f30:8"]]
- 006170b8 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 00617468 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 006170bc ["COPY", "tmp:0:8", ["const:d98:8"]]
- 006170bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006170bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006170bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3187314dee9a7a117bbe3e38f676b28a"></a>

### [`006170d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006170d0.md) → [`00617480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617480.md) FUN_00617480

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
      "definition_site": "0061748c",
      "incomplete_value": false,
      "site": "0061748c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006170dc",
      "incomplete_value": false,
      "site": "006170dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "0061748c",
      "DATA",
      [
        "storage",
        "00c71d98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061748c",
      "DATA",
      [
        "storage",
        "00c72d68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006170d4 ["COPY", "register:4048:8", ["const:c71000:8"]]
+ 00617484 ["COPY", "register:4048:8", ["const:c72000:8"]]
- 006170d8 ["COPY", "tmp:0:8", ["const:d98:8"]]
- 006170d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006170d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006170d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00617488 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 00617488 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00617488 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00617488 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9088404cddd3e0cbaf9ded3d03bb0f33"></a>

### [`006170ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006170ec.md) → [`0061749c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061749c.md) FUN_0061749c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`0082010c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00820/0082010c.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`008210b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00821/008210b8.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.74% / 新版 90.74%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006174c0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00617110",
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
      "site": "006174dc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061712c",
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
      "definition_site": "00617180",
      "incomplete_value": true,
      "site": "00617188",
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
            "register:40a0:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006174c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006174dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:0061715c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0082010c"
      ]
    ]
  ],
  "added": [
    [
      "006174c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006174dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0061750c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008210b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00617110 ["INT_ADD", "register:40f0:8", ["const:617110:8", "const:4:8"]]
- 00617110 ["CALL", null, ["ram:47ad34:8"]]
+ 006174c0 ["INT_ADD", "register:40f0:8", ["const:6174c0:8", "const:4:8"]]
+ 006174c0 ["CALL", null, ["ram:47b054:8"]]
- 0061712c ["INT_ADD", "register:40f0:8", ["const:61712c:8", "const:4:8"]]
- 0061712c ["CALL", null, ["ram:47ad34:8"]]
+ 006174dc ["INT_ADD", "register:40f0:8", ["const:6174dc:8", "const:4:8"]]
+ 006174dc ["CALL", null, ["ram:47b054:8"]]
- 00617188 ["INT_ADD", "register:40f0:8", ["const:617188:8", "const:4:8"]]
- 00617188 ["CALL", null, ["callee:008b89cc:8"]]
+ 00617538 ["INT_ADD", "register:40f0:8", ["const:617538:8", "const:4:8"]]
+ 00617538 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-c0cd766db153aa0dafc9627866088dfa"></a>

### [`006171ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006171ec.md) → [`0061759c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061759c.md) FUN_0061759c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0060df44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060d/0060df44.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`006173b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006173b0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0060e2f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e2f4.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00617760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617760.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.83% / 新版 93.83%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006172a4",
      "incomplete_value": true,
      "site": "006172bc",
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
            "const:20:8"
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
    "new": null,
    "old": {
      "definition_site": "006172a8",
      "incomplete_value": true,
      "site": "006172bc",
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
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006172ac",
      "incomplete_value": true,
      "site": "006172bc",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 3,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006171f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061721c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00617288",
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
      "006175a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006175cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00617638",
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
- 006172bc ["INT_ADD", "register:40f0:8", ["const:6172bc:8", "const:4:8"]]
- 006172bc ["CALL", null, ["callee:00617760:8"]]
+ 0061766c ["INT_ADD", "register:40f0:8", ["const:61766c:8", "const:4:8"]]
+ 0061766c ["CALL", null, ["callee:00617760:8"]]
- 006171ec ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 006171f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006171f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006171f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 006171f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-005946668bf8fcfe0d6039cdda59eb26"></a>

### [`006173b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006173b0.md) → [`00617760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617760.md) FUN_00617760

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006171ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006171ec.md) [`006173b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006173b0.md) [`0061bc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061b/0061bc10.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`004412f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004412f8.md)
- 新版 呼出元 3件 [`0061759c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061759c.md) [`00617760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617760.md) [`0061bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061bfc0.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`00441618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441618.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.88% / 新版 79.88%

優先判定に残った影響 `call_argument_candidate` 50件, `store_condition` 3件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061785c",
      "incomplete_value": true,
      "site": "00617860",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40e0:8"
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
      "definition_site": "006174ac",
      "incomplete_value": true,
      "site": "006174b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40e0:8"
          ],
          [
            "live",
            "register:4040:8"
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
      "definition_site": "00617524",
      "incomplete_value": true,
      "site": "0061752c",
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
            "const:30:8"
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
      "definition_site": "00617520",
      "incomplete_value": true,
      "site": "0061752c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006173e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:006173ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00617404",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00617900"
      ]
    ]
  ],
  "added": [
    [
      "00617790",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0061779c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f8]",
        null,
        null
      ]
    ],
    [
      "006177b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00617900"
      ]
    ]
  ]
}
~~~


~~~diff
- 006174b0 ["INT_ADD", "register:40f0:8", ["const:6174b0:8", "const:4:8"]]
- 006174b0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00617860 ["INT_ADD", "register:40f0:8", ["const:617860:8", "const:4:8"]]
+ 00617860 ["CALL", null, ["callee:00c58fe0:8"]]
- 0061752c ["INT_ADD", "register:40f0:8", ["const:61752c:8", "const:4:8"]]
- 0061752c ["CALL", null, ["callee:004421f4:8"]]
+ 006178dc ["INT_ADD", "register:40f0:8", ["const:6178dc:8", "const:4:8"]]
+ 006178dc ["CALL", null, ["callee:004421f4:8"]]
- 006175e0 ["INT_ADD", "register:40f0:8", ["const:6175e0:8", "const:4:8"]]
- 006175e0 ["CALL", null, ["callee:004421f4:8"]]
+ 00617990 ["INT_ADD", "register:40f0:8", ["const:617990:8", "const:4:8"]]
+ 00617990 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-ac95e3ff82ae2a0d666794b40ef52b64"></a>

### [`00617f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617f84.md) → [`00618334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/00618334.md) FUN_00618334

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
      "definition_site": "00618358",
      "incomplete_value": false,
      "site": "00618358",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00617fa8",
      "incomplete_value": false,
      "site": "00617fa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "00618358",
      "DATA",
      [
        "storage",
        "00c71e18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00618358",
      "DATA",
      [
        "storage",
        "00c72de8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00617f98 ["INT_ADD", "register:40f0:8", ["const:617f98:8", "const:4:8"]]
- 00617f98 ["CALL", null, ["callee:00c58f30:8"]]
+ 00618348 ["INT_ADD", "register:40f0:8", ["const:618348:8", "const:4:8"]]
+ 00618348 ["CALL", null, ["callee:00c58f30:8"]]
- 00617fa0 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 00618350 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 00617fa4 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 00617fa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00617fa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00617fa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00618354 ["COPY", "tmp:0:8", ["const:de8:8"]]
+ 00618354 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00618354 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00618354 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dc364e09b51d215b37836236663b0649"></a>

### [`00617fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617fb8.md) → [`00618368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/00618368.md) FUN_00618368

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00617fc4",
      "DATA",
      [
        "storage",
        "00c71e18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00618374",
      "DATA",
      [
        "storage",
        "00c72de8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00617fbc ["COPY", "register:4048:8", ["const:c71000:8"]]
+ 0061836c ["COPY", "register:4048:8", ["const:c72000:8"]]
- 00617fc0 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 00617fc0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00617fc0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00617fc0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00617fc4 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00617fc4 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 00617fc4 ["COPY", "tmp:2:8", ["register:4008:8"]]
- 00617fc4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e823412e34189049578bd0c6e627cb52"></a>

### [`00617fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617fd4.md) → [`00618384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/00618384.md) FUN_00618384

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00597684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597684.md) [`00618208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618208.md) [`0061820c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/0061820c.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005979a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005979a4.md) [`006185b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185b8.md) [`006185bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185bc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.16% / 新版 78.16%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006183dc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061802c",
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
      "definition_site": "0061841c",
      "incomplete_value": true,
      "site": "00618420",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061806c",
      "incomplete_value": true,
      "site": "00618070",
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
            "const:2f38:8"
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
      "unmatched:00617ff4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "006183bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00618104"
      ]
    ],
    [
      "unmatched:00618010",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006183a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "006183bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006184b4"
      ]
    ],
    [
      "006183c0",
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
- 0061802c ["INT_ADD", "register:40f0:8", ["const:61802c:8", "const:4:8"]]
- 0061802c ["CALL", null, ["ram:47ad34:8"]]
+ 006183dc ["INT_ADD", "register:40f0:8", ["const:6183dc:8", "const:4:8"]]
+ 006183dc ["CALL", null, ["ram:47b054:8"]]
- 00618070 ["INT_ADD", "register:40f0:8", ["const:618070:8", "const:4:8"]]
- 00618070 ["CALL", null, ["callee:008b89cc:8"]]
+ 00618420 ["INT_ADD", "register:40f0:8", ["const:618420:8", "const:4:8"]]
+ 00618420 ["CALL", null, ["callee:008b89cc:8"]]
- 00617ff0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:28:8"]]
- 00617ff0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-459c9d6ef6b47b8cc2ec803c50abb5ba"></a>

### [`006181a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/006181a8.md) → [`00618558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/00618558.md) FUN_00618558

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 37.50% / 新版 37.50%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006181a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006181ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006181d0",
      "DATA",
      [
        "storage",
        "00c71e88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00618558",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061855c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00618580",
      "DATA",
      [
        "storage",
        "00c72e58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006181a8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006181a8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006181a8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006181a8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006181ac ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006181ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006181b0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-27284a23a0b77435b4760fbd0208f85e"></a>

### [`006181e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/006181e8.md) → [`00618598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/00618598.md) FUN_00618598

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
      "unmatched:006181f0",
      "DATA",
      [
        "storage",
        "00c71e88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006185a0",
      "DATA",
      [
        "storage",
        "00c72e58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006181e8 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 006181ec ["COPY", "tmp:0:8", ["const:e88:8"]]
- 006181ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006181ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006181ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006181f0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006181f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-442fa4f370b75347940e86e0477b39c6"></a>

### [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) → [`006185f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185f0.md) FUN_006185f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00618210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618210.md) · 呼出先 31件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00550c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c68.md)
- 新版 呼出元 1件 [`006185c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185c0.md) · 呼出先 31件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00550f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f88.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.34% / 新版 81.34%

優先判定に残った影響 `call_argument_candidate` 44件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 24件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 52件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00618688",
      "incomplete_value": true,
      "site": "0061868c",
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
                "const:ffffffffffffffc0:8"
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
      "definition_site": "006186a4",
      "incomplete_value": true,
      "site": "006186c4",
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
                "const:ffffffffffffff70:8"
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
      "definition_site": "006186c0",
      "incomplete_value": true,
      "site": "006186c4",
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
      "unmatched:00618240",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00618244",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00618248",
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
      "006185f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006185f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006185f8",
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
- 006182dc ["INT_ADD", "register:40f0:8", ["const:6182dc:8", "const:4:8"]]
- 006182dc ["CALL", null, ["callee:00c58f50:8"]]
+ 0061868c ["INT_ADD", "register:40f0:8", ["const:61868c:8", "const:4:8"]]
+ 0061868c ["CALL", null, ["callee:00c58f50:8"]]
- 00618314 ["INT_ADD", "register:40f0:8", ["const:618314:8", "const:4:8"]]
- 00618314 ["CALL", null, ["callee:005517c4:8"]]
+ 006186c4 ["INT_ADD", "register:40f0:8", ["const:6186c4:8", "const:4:8"]]
+ 006186c4 ["CALL", null, ["callee:005517c4:8"]]
- 006183a8 ["INT_ADD", "register:40f0:8", ["const:6183a8:8", "const:4:8"]]
- 006183a8 ["CALL", null, ["callee:0055ca30:8"]]
+ 00618758 ["INT_ADD", "register:40f0:8", ["const:618758:8", "const:4:8"]]
+ 00618758 ["CALL", null, ["callee:0055ca30:8"]]
~~~


<a id="compare-b46abb9663a450db64f3fb95901c849e"></a>

### [`00619cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00619/00619cb8.md) → [`0061a068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a068.md) FUN_0061a068

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0061a188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a188.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`006185f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185f0.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0061a538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a538.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061a0ec",
      "incomplete_value": true,
      "site": "0061a0f4",
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
            "const:20:8"
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
      "definition_site": "0061a0f0",
      "incomplete_value": true,
      "site": "0061a0f4",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061a0e8",
      "incomplete_value": true,
      "site": "0061a0f4",
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
                "register:4008:8"
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
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00619cec",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00619d04",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00619d5c",
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
      "0061a09c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0061a0b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0061a10c",
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
- 00619d44 ["INT_ADD", "register:40f0:8", ["const:619d44:8", "const:4:8"]]
- 00619d44 ["CALL", null, ["callee:0043be80:8"]]
+ 0061a0f4 ["INT_ADD", "register:40f0:8", ["const:61a0f4:8", "const:4:8"]]
+ 0061a0f4 ["CALL", null, ["callee:0043be80:8"]]
- 00619d70 ["INT_ADD", "register:40f0:8", ["const:619d70:8", "const:4:8"]]
- 00619d70 ["CALL", null, ["callee:0043be80:8"]]
+ 0061a120 ["INT_ADD", "register:40f0:8", ["const:61a120:8", "const:4:8"]]
+ 0061a120 ["CALL", null, ["callee:0043be80:8"]]
- 00619d8c ["INT_ADD", "register:40f0:8", ["const:619d8c:8", "const:4:8"]]
- 00619d8c ["CALL", null, ["callee:0061a538:8"]]
+ 0061a13c ["INT_ADD", "register:40f0:8", ["const:61a13c:8", "const:4:8"]]
+ 0061a13c ["CALL", null, ["callee:0061a538:8"]]
~~~


<a id="compare-7534e0f6678dd0e99b6d42b85f6fee03"></a>

### [`00619e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00619/00619e80.md) → [`0061a230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a230.md) FUN_0061a230

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) [`006a7518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7518.md) [`0082f180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082f/0082f180.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0061b9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061b/0061b9dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`006185f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185f0.md) [`006a78c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a78c8.md) [`0083012c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00830/0083012c.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0061bd8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061bd8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.63% / 新版 81.63%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00619f78",
      "incomplete_value": true,
      "site": "00619f7c",
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
      "definition_site": "00619fa0",
      "incomplete_value": true,
      "site": "00619fa4",
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
      "unmatched:00619e84",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00619e88",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00619e8c",
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
      "0061a234",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0061a238",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061a23c",
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
- 00619f7c ["INT_ADD", "register:40f0:8", ["const:619f7c:8", "const:4:8"]]
- 00619f7c ["CALL", null, ["callee:0061bd8c:8"]]
+ 0061a32c ["INT_ADD", "register:40f0:8", ["const:61a32c:8", "const:4:8"]]
+ 0061a32c ["CALL", null, ["callee:0061bd8c:8"]]
- 00619fa4 ["INT_ADD", "register:40f0:8", ["const:619fa4:8", "const:4:8"]]
- 00619fa4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0061a354 ["INT_ADD", "register:40f0:8", ["const:61a354:8", "const:4:8"]]
+ 0061a354 ["CALL", null, ["callee:00c58f50:8"]]
- 00619e80 ["INT_SUB", "register:8:8", ["register:8:8", "const:c0:8"]]
~~~


<a id="compare-62ab5b1d10e9dee829b6a743938ad973"></a>

### [`0061a0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a0b4.md) → [`0061a464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a464.md) FUN_0061a464

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
      "definition_site": "0061a484",
      "incomplete_value": false,
      "site": "0061a488",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:ec8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061a0d4",
      "incomplete_value": false,
      "site": "0061a0d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
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
      "0061a488",
      "DATA",
      [
        "storage",
        "00c71ef8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061a488",
      "DATA",
      [
        "storage",
        "00c72ec8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061a0c8 ["INT_ADD", "register:40f0:8", ["const:61a0c8:8", "const:4:8"]]
- 0061a0c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061a478 ["INT_ADD", "register:40f0:8", ["const:61a478:8", "const:4:8"]]
+ 0061a478 ["CALL", null, ["callee:00c58f30:8"]]
- 0061a0d0 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 0061a480 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061a0d4 ["COPY", "tmp:0:8", ["const:ef8:8"]]
- 0061a0d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061a0d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061a0d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061a484 ["COPY", "tmp:0:8", ["const:ec8:8"]]
+ 0061a484 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061a484 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061a484 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3880db229597e07191a31f279de6e58e"></a>

### [`0061a0ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a0ec.md) → [`0061a49c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a49c.md) FUN_0061a49c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061a0f4",
      "DATA",
      [
        "storage",
        "00c71ef8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061a4a4",
      "DATA",
      [
        "storage",
        "00c72ec8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061a0ec ["COPY", "register:4040:8", ["const:c71000:8"]]
- 0061a0f0 ["COPY", "tmp:0:8", ["const:ef8:8"]]
- 0061a0f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061a0f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061a0f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061a0f4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061a0f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-32c3a930164430457309de8aebbe6cd5"></a>

### [`0061a10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a10c.md) → [`0061a4bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a4bc.md) FUN_0061a4bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0058fbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fbc0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0058fee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fee0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061a14c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0061a4fc",
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
- 0061a124 ["INT2FLOAT", "register:5060:4", ["register:5020:4"]]
- 0061a124 ["COPY", "register:5064:4", ["const:0:4"]]
- 0061a124 ["COPY", "register:5068:8", ["const:0:8"]]
- 0061a124 ["COPY", "register:5070:8", ["const:0:8"]]
- 0061a130 ["INT_ADD", "register:40f0:8", ["const:61a130:8", "const:4:8"]]
- 0061a130 ["CALL", null, ["callee:0058fee0:8"]]
+ 0061a4e0 ["INT_ADD", "register:40f0:8", ["const:61a4e0:8", "const:4:8"]]
+ 0061a4e0 ["CALL", null, ["callee:0058fee0:8"]]
- 0061a140 ["INT_ADD", "register:40f0:8", ["const:61a140:8", "const:4:8"]]
- 0061a140 ["CALL", null, ["callee:008524fc:8"]]
+ 0061a4f0 ["INT_ADD", "register:40f0:8", ["const:61a4f0:8", "const:4:8"]]
+ 0061a4f0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-10c99ca5b8cfd3a23f087b6d1d3c0368"></a>

### [`0061a188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a188.md) → [`0061a538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a538.md) FUN_0061a538

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00619cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00619/00619cb8.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0061a354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a354.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0061a068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a068.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0061a704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a704.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.93% / 新版 81.93%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0061a1e0",
      "incomplete_value": true,
      "site": "0061a1e8",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0061a1e0",
      "incomplete_value": true,
      "site": "0061a1e8",
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061a5e8",
      "incomplete_value": true,
      "site": "0061a5f0",
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
      "unmatched:0061a18c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061a190",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061a194",
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
      "0061a53c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0061a540",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061a544",
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
- 0061a1e8 ["INT_ADD", "register:40f0:8", ["const:61a1e8:8", "const:4:8"]]
- 0061a1e8 ["CALL", null, ["callee:0043be80:8"]]
+ 0061a598 ["INT_ADD", "register:40f0:8", ["const:61a598:8", "const:4:8"]]
+ 0061a598 ["CALL", null, ["callee:0043be80:8"]]
- 0061a240 ["INT_ADD", "register:40f0:8", ["const:61a240:8", "const:4:8"]]
- 0061a240 ["CALL", null, ["callee:0043be80:8"]]
+ 0061a5f0 ["INT_ADD", "register:40f0:8", ["const:61a5f0:8", "const:4:8"]]
+ 0061a5f0 ["CALL", null, ["callee:0043be80:8"]]
- 0061a2c0 ["INT_ADD", "register:40f0:8", ["const:61a2c0:8", "const:4:8"]]
- 0061a2c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0061a670 ["INT_ADD", "register:40f0:8", ["const:61a670:8", "const:4:8"]]
+ 0061a670 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1a44f8716fae19d55a913c27b4ba3599"></a>

### [`0061a354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a354.md) → [`0061a704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a704.md) FUN_0061a704

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0061a188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a188.md) [`0061a354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a354.md) [`0097c4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097c/0097c4fc.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`0061a538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a538.md) [`0061a704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a704.md) [`0097d4a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097d/0097d4a8.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.05% / 新版 78.05%

優先判定に残った影響 `call_argument_candidate` 38件, `store_condition` 5件, `unresolved_branch_alignment` 21件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 30件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061a804",
      "incomplete_value": true,
      "site": "0061a808",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
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
      "definition_site": "0061a454",
      "incomplete_value": true,
      "site": "0061a458",
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
            "register:4040:8"
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
      "definition_site": "0061a87c",
      "incomplete_value": true,
      "site": "0061a884",
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
            "const:30:8"
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
      "definition_site": "0061a878",
      "incomplete_value": false,
      "site": "0061a884",
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
    "old": null,
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
      "unmatched:0061a354",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061a358",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061a35c",
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
      "0061a704",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0061a708",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0061a70c",
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
- 0061a458 ["INT_ADD", "register:40f0:8", ["const:61a458:8", "const:4:8"]]
- 0061a458 ["CALL", null, ["callee:00c58fe0:8"]]
+ 0061a808 ["INT_ADD", "register:40f0:8", ["const:61a808:8", "const:4:8"]]
+ 0061a808 ["CALL", null, ["callee:00c58fe0:8"]]
- 0061a4d4 ["INT_ADD", "register:40f0:8", ["const:61a4d4:8", "const:4:8"]]
- 0061a4d4 ["CALL", null, ["callee:004421f4:8"]]
+ 0061a884 ["INT_ADD", "register:40f0:8", ["const:61a884:8", "const:4:8"]]
+ 0061a884 ["CALL", null, ["callee:004421f4:8"]]
- 0061a588 ["INT_ADD", "register:40f0:8", ["const:61a588:8", "const:4:8"]]
- 0061a588 ["CALL", null, ["callee:004421f4:8"]]
+ 0061a938 ["INT_ADD", "register:40f0:8", ["const:61a938:8", "const:4:8"]]
+ 0061a938 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-b71b33fd4703284ecf3b1b96fbc60125"></a>

### [`0061af38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061af38.md) → [`0061b2e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061b2e8.md) FUN_0061b2e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0061a354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a354.md) [`0061af38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061af38.md) [`0072c3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c3d8.md) [`007f0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0e2c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`004412f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004412f8.md)
- 新版 呼出元 4件 [`0061a704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a704.md) [`0061b2e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061b2e8.md) [`0072c788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072c788.md) [`007f1d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1d90.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`00441618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441618.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.97% / 新版 84.97%

優先判定に残った影響 `call_argument_candidate` 29件, `store_condition` 1件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061b444",
      "incomplete_value": true,
      "site": "0061b44c",
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
      "definition_site": "0061b094",
      "incomplete_value": false,
      "site": "0061b09c",
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
      "definition_site": "0061b468",
      "incomplete_value": false,
      "site": "0061b474",
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
      "definition_site": "0061b0b8",
      "incomplete_value": false,
      "site": "0061b0c4",
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
      "definition_site": "0061b4b0",
      "incomplete_value": true,
      "site": "0061b4c0",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:40c0:8"
              ],
              [
                "live",
                "register:40b0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061b100",
      "incomplete_value": true,
      "site": "0061b110",
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
            "const:2:8"
          ]
        ]
      ]
    },
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
      "unmatched:0061af8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061b518"
      ]
    ],
    [
      "unmatched:0061afa4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061b518"
      ]
    ],
    [
      "unmatched:0061b01c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061b3e0"
      ]
    ]
  ],
  "added": [
    [
      "0061b33c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061b518"
      ]
    ],
    [
      "0061b354",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061b518"
      ]
    ],
    [
      "0061b3cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061b3e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061b09c ["INT_ADD", "register:40f0:8", ["const:61b09c:8", "const:4:8"]]
- 0061b09c ["CALL", null, ["callee:004421f4:8"]]
+ 0061b44c ["INT_ADD", "register:40f0:8", ["const:61b44c:8", "const:4:8"]]
+ 0061b44c ["CALL", null, ["callee:004421f4:8"]]
- 0061b0c4 ["INT_ADD", "register:40f0:8", ["const:61b0c4:8", "const:4:8"]]
- 0061b0c4 ["CALL", null, ["callee:00442b54:8"]]
+ 0061b474 ["INT_ADD", "register:40f0:8", ["const:61b474:8", "const:4:8"]]
+ 0061b474 ["CALL", null, ["callee:00442b54:8"]]
- 0061b110 ["INT_ADD", "register:40f0:8", ["const:61b110:8", "const:4:8"]]
- 0061b110 ["CALL", null, ["callee:00442120:8"]]
+ 0061b4c0 ["INT_ADD", "register:40f0:8", ["const:61b4c0:8", "const:4:8"]]
+ 0061b4c0 ["CALL", null, ["callee:00442120:8"]]
~~~


<a id="compare-f9848685608d87f8b7f560a38579f2c2"></a>

### [`0061b9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061b/0061b9dc.md) → [`0061bd8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061bd8c.md) FUN_0061bd8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00619e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00619/00619e80.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0061bc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061b/0061bc10.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0061a230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a230.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0061bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061bfc0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.99% / 新版 98.99%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 0061ba3c ["INT_ADD", "register:40f0:8", ["const:61ba3c:8", "const:4:8"]]
- 0061ba3c ["CALL", null, ["callee:0043be80:8"]]
+ 0061bdec ["INT_ADD", "register:40f0:8", ["const:61bdec:8", "const:4:8"]]
+ 0061bdec ["CALL", null, ["callee:0043be80:8"]]
- 0061ba68 ["INT_ADD", "register:40f0:8", ["const:61ba68:8", "const:4:8"]]
- 0061ba68 ["CALL", null, ["callee:0043be80:8"]]
+ 0061be18 ["INT_ADD", "register:40f0:8", ["const:61be18:8", "const:4:8"]]
+ 0061be18 ["CALL", null, ["callee:0043be80:8"]]
- 0061ba94 ["INT_ADD", "register:40f0:8", ["const:61ba94:8", "const:4:8"]]
- 0061ba94 ["CALL", null, ["callee:0043be80:8"]]
+ 0061be44 ["INT_ADD", "register:40f0:8", ["const:61be44:8", "const:4:8"]]
+ 0061be44 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-6bcedb13b160a7d9dbe1149fd0c8dfa7"></a>

### [`0061bc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061b/0061bc10.md) → [`0061bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061bfc0.md) FUN_0061bfc0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0061b9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061b/0061b9dc.md) [`0061bc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061b/0061bc10.md) [`00b31bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b31bf4.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`0061bd8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061bd8c.md) [`0061bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061b/0061bfc0.md) [`00b32be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b32be8.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.64% / 新版 85.64%

優先判定に残った影響 `call_argument_candidate` 27件, `store_condition` 2件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 26件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061c134",
      "incomplete_value": false,
      "site": "0061c13c",
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
      "definition_site": "0061bd84",
      "incomplete_value": false,
      "site": "0061bd8c",
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
      "definition_site": "0061c1e8",
      "incomplete_value": false,
      "site": "0061c1f0",
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
      "definition_site": "0061be38",
      "incomplete_value": false,
      "site": "0061be40",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0061be54",
      "incomplete_value": true,
      "site": "0061be60",
      "value": [
        "live",
        "register:40c0:8"
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
      "unmatched:0061bc10",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061bc14",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061bc18",
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
      "0061bfc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0061bfc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0061bfc8",
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
- 0061bcb4 ["BRANCH", null, ["local:b22:8"]]
+ 0061c064 ["BRANCH", null, ["local:b23:8"]]
- 0061bd8c ["INT_ADD", "register:40f0:8", ["const:61bd8c:8", "const:4:8"]]
- 0061bd8c ["CALL", null, ["callee:004421f4:8"]]
+ 0061c13c ["INT_ADD", "register:40f0:8", ["const:61c13c:8", "const:4:8"]]
+ 0061c13c ["CALL", null, ["callee:004421f4:8"]]
- 0061be40 ["INT_ADD", "register:40f0:8", ["const:61be40:8", "const:4:8"]]
- 0061be40 ["CALL", null, ["callee:004421f4:8"]]
+ 0061c1f0 ["INT_ADD", "register:40f0:8", ["const:61c1f0:8", "const:4:8"]]
+ 0061c1f0 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-8e935aa3dbcca0d8879b027482028c2f"></a>

### [`0061ca1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061ca1c.md) → [`0061cdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cdcc.md) FUN_0061cdcc

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
      "unmatched:0061ca34",
      "DATA",
      [
        "storage",
        "00c71f98",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061ca38",
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
      "0061cde4",
      "DATA",
      [
        "storage",
        "00c72f68",
        null,
        "undefined *"
      ]
    ],
    [
      "0061cde8",
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
- 0061ca28 ["INT_ADD", "register:40f0:8", ["const:61ca28:8", "const:4:8"]]
- 0061ca28 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061cdd8 ["INT_ADD", "register:40f0:8", ["const:61cdd8:8", "const:4:8"]]
+ 0061cdd8 ["CALL", null, ["callee:00c58f30:8"]]
- 0061ca2c ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 0061cddc ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061ca30 ["COPY", "tmp:0:8", ["const:f98:8"]]
- 0061ca30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061ca30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061ca30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cf8839bfb51523ebfe71d41bea7741e1"></a>

### [`0061ca40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061ca40.md) → [`0061cdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cdf0.md) FUN_0061cdf0

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
      "definition_site": "0061cdf4",
      "incomplete_value": false,
      "site": "0061cdf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061ca44",
      "incomplete_value": false,
      "site": "0061ca48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:f98:8"
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
      "0061cdf8",
      "DATA",
      [
        "storage",
        "00c71f98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061cdf8",
      "DATA",
      [
        "storage",
        "00c72f68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061ca40 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 0061cdf0 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061ca44 ["COPY", "tmp:0:8", ["const:f98:8"]]
- 0061ca44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061ca44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061ca44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061cdf4 ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 0061cdf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061cdf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061cdf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9969554a7a260e1324a9d932a1477be2"></a>

### [`0061ca58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061ca58.md) → [`0061ce08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061ce08.md) FUN_0061ce08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061ca60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061ce4c"
      ]
    ],
    [
      "unmatched:0061ca7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0061ce10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061ce4c"
      ]
    ],
    [
      "0061ce2c",
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
- 0061ca58 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 0061ca58 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 0061ca58 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 0061ca5c ["COPY", "tmp:0:4", ["const:2:4"]]
- 0061ca5c ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 0061ca5c ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 0061ca5c ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 0061ca60 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0061ca60 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-45c978518d89e8ff749e52db5522a782"></a>

### [`0061cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cacc.md) → [`0061ce7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061ce7c.md) FUN_0061ce7c

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
      "unmatched:0061caf0",
      "DATA",
      [
        "storage",
        "00c72018",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061caf4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061caf8",
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
      "0061cea0",
      "DATA",
      [
        "storage",
        "00c72fe8",
        null,
        "undefined *"
      ]
    ],
    [
      "0061cea4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0061cea8",
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
- 0061cae0 ["INT_ADD", "register:40f0:8", ["const:61cae0:8", "const:4:8"]]
- 0061cae0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061ce90 ["INT_ADD", "register:40f0:8", ["const:61ce90:8", "const:4:8"]]
+ 0061ce90 ["CALL", null, ["callee:00c58f30:8"]]
- 0061caec ["COPY", "tmp:0:8", ["const:18:8"]]
- 0061caec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061caec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061caec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061caf0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0061caf0 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 0061caf0 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 0061caf0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-34e12130c59e1b256300f8f64b05e778"></a>

### [`0061cb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cb00.md) → [`0061ceb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061ceb0.md) FUN_0061ceb0

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
      "definition_site": "0061cebc",
      "incomplete_value": false,
      "site": "0061cebc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061cb0c",
      "incomplete_value": false,
      "site": "0061cb0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:18:8"
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
      "0061cebc",
      "DATA",
      [
        "storage",
        "00c72018",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061cebc",
      "DATA",
      [
        "storage",
        "00c72fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061cb08 ["COPY", "tmp:0:8", ["const:18:8"]]
- 0061cb08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0061cb08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0061cb08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0061ceb8 ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 0061ceb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0061ceb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0061ceb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4852d19f83c29a0d3021fa23301fc733"></a>

### [`0061cb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cb60.md) → [`0061cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cf10.md) FUN_0061cf10

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
      "unmatched:0061cb78",
      "DATA",
      [
        "storage",
        "00c720a8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061cb7c",
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
      "0061cf28",
      "DATA",
      [
        "storage",
        "00c73078",
        null,
        "undefined *"
      ]
    ],
    [
      "0061cf2c",
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
- 0061cb6c ["INT_ADD", "register:40f0:8", ["const:61cb6c:8", "const:4:8"]]
- 0061cb6c ["CALL", null, ["callee:00c58f30:8"]]
+ 0061cf1c ["INT_ADD", "register:40f0:8", ["const:61cf1c:8", "const:4:8"]]
+ 0061cf1c ["CALL", null, ["callee:00c58f30:8"]]
- 0061cb70 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061cf20 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061cb74 ["COPY", "tmp:0:8", ["const:a8:8"]]
- 0061cb74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061cb74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061cb74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aaa4f076e99754c8f48db78ef42a89fb"></a>

### [`0061cb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cb84.md) → [`0061cf34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cf34.md) FUN_0061cf34

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
      "unmatched:0061cb8c",
      "DATA",
      [
        "storage",
        "00c720a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061cf3c",
      "DATA",
      [
        "storage",
        "00c73078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061cb84 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061cb88 ["COPY", "tmp:0:8", ["const:a8:8"]]
- 0061cb88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061cb88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061cb88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061cb8c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061cb8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-0c6fc6d625fca3fe75573f07aa646ed0"></a>

### [`0061cb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cb9c.md) → [`0061cf4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cf4c.md) FUN_0061cf4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0061cbc8",
      "incomplete_value": false,
      "site": "0061cbd0",
      "value": [
        "leaf",
        "const:b:8"
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
      "unmatched:0061cbc4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:0061cc3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d008"
      ]
    ],
    [
      "unmatched:0061cc64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d040"
      ]
    ]
  ],
  "added": [
    [
      "0061cf74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0061cfec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d008"
      ]
    ],
    [
      "0061d014",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d040"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061cbd0 ["INT_ADD", "register:40f0:8", ["const:61cbd0:8", "const:4:8"]]
- 0061cbd0 ["CALL", null, ["callee:0047d134:8"]]
+ 0061cf80 ["INT_ADD", "register:40f0:8", ["const:61cf80:8", "const:4:8"]]
+ 0061cf80 ["CALL", null, ["callee:0047d134:8"]]
- 0061cbb4 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 0061cf64 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 0061cbbc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0061cbbc ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 0061cf6c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0061cf6c ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
~~~


<a id="compare-8d5efa20aa6a0475635601482ad68bdd"></a>

### [`0061ccf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061ccf8.md) → [`0061d0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d0a8.md) FUN_0061d0a8

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
      "unmatched:0061cd10",
      "DATA",
      [
        "storage",
        "00c72128",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061cd14",
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
      "0061d0c0",
      "DATA",
      [
        "storage",
        "00c730f8",
        null,
        "undefined *"
      ]
    ],
    [
      "0061d0c4",
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
- 0061cd04 ["INT_ADD", "register:40f0:8", ["const:61cd04:8", "const:4:8"]]
- 0061cd04 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061d0b4 ["INT_ADD", "register:40f0:8", ["const:61d0b4:8", "const:4:8"]]
+ 0061d0b4 ["CALL", null, ["callee:00c58f30:8"]]
- 0061cd08 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d0b8 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061cd0c ["COPY", "tmp:0:8", ["const:128:8"]]
- 0061cd0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061cd0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061cd0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-908bd5bac3ca9c45277b6bda6e34409f"></a>

### [`0061cd1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cd1c.md) → [`0061d0cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d0cc.md) FUN_0061d0cc

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
      "definition_site": "0061d0d0",
      "incomplete_value": false,
      "site": "0061d0d4",
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
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061cd20",
      "incomplete_value": false,
      "site": "0061cd24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:128:8"
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
      "0061d0d4",
      "DATA",
      [
        "storage",
        "00c72128",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061d0d4",
      "DATA",
      [
        "storage",
        "00c730f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061cd1c ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d0cc ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061cd20 ["COPY", "tmp:0:8", ["const:128:8"]]
- 0061cd20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061cd20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061cd20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061d0d0 ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 0061d0d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d0d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d0d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-398a86989f9f8f868290dbe265040960"></a>

### [`0061cd34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cd34.md) → [`0061d0e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d0e4.md) FUN_0061d0e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0061cd60",
      "incomplete_value": false,
      "site": "0061cd68",
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
      "definition_site": "0061cd64",
      "incomplete_value": false,
      "site": "0061cd68",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061cddc"
      ],
      [
        "FALL_THROUGH",
        "0061d18c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061d18c",
      "incomplete_value": true,
      "site": "0061d190",
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
      "definition_site": "0061cddc",
      "incomplete_value": true,
      "site": "0061cde0",
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
                "register:40a0:8"
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
    "ordinal": 10,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061cd5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0061d154",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0061cdd8"
      ]
    ],
    [
      "unmatched:0061cdd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d1a0"
      ]
    ]
  ],
  "added": [
    [
      "0061d10c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0061d154",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d188"
      ]
    ],
    [
      "0061d184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d1a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061cd68 ["INT_ADD", "register:40f0:8", ["const:61cd68:8", "const:4:8"]]
- 0061cd68 ["CALL", null, ["callee:0047d134:8"]]
+ 0061d118 ["INT_ADD", "register:40f0:8", ["const:61d118:8", "const:4:8"]]
+ 0061d118 ["CALL", null, ["callee:0047d134:8"]]
- 0061cd5c ["INT_ADD", "register:40f0:8", ["const:61cd5c:8", "const:4:8"]]
- 0061cd5c ["CALL", null, ["ram:47ad34:8"]]
- 0061cd80 ["INT_ADD", "register:40f0:8", ["const:61cd80:8", "const:4:8"]]
- 0061cd80 ["CALL", null, ["callee:008524fc:8"]]
+ 0061d130 ["INT_ADD", "register:40f0:8", ["const:61d130:8", "const:4:8"]]
+ 0061d130 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-3b67f48faf1200b78defcabf2befadb0"></a>

### [`0061ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061ce90.md) → [`0061d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d240.md) FUN_0061d240

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
      "definition_site": "0061d254",
      "incomplete_value": false,
      "site": "0061d258",
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
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061cea4",
      "incomplete_value": false,
      "site": "0061cea8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
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
      "0061d258",
      "DATA",
      [
        "storage",
        "00c721a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061d258",
      "DATA",
      [
        "storage",
        "00c73178",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061ce9c ["INT_ADD", "register:40f0:8", ["const:61ce9c:8", "const:4:8"]]
- 0061ce9c ["CALL", null, ["callee:00c58f30:8"]]
+ 0061d24c ["INT_ADD", "register:40f0:8", ["const:61d24c:8", "const:4:8"]]
+ 0061d24c ["CALL", null, ["callee:00c58f30:8"]]
- 0061cea0 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d250 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061cea4 ["COPY", "tmp:0:8", ["const:1a8:8"]]
- 0061cea4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061cea4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061cea4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061d254 ["COPY", "tmp:0:8", ["const:178:8"]]
+ 0061d254 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d254 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d254 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-df27f48890f1ac1442c12aa6df5c7aec"></a>

### [`0061ceb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061ceb4.md) → [`0061d264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d264.md) FUN_0061d264

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
      "definition_site": "0061d268",
      "incomplete_value": false,
      "site": "0061d26c",
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
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061ceb8",
      "incomplete_value": false,
      "site": "0061cebc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
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
      "0061d26c",
      "DATA",
      [
        "storage",
        "00c721a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061d26c",
      "DATA",
      [
        "storage",
        "00c73178",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061ceb4 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d264 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061ceb8 ["COPY", "tmp:0:8", ["const:1a8:8"]]
- 0061ceb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061ceb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061ceb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061d268 ["COPY", "tmp:0:8", ["const:178:8"]]
+ 0061d268 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d268 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d268 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dcc04f7b9f21552058080299f6e0578d"></a>

### [`0061cecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cecc.md) → [`0061d27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d27c.md) FUN_0061d27c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061d2a4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061cef4",
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
      "0061d2a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0061d2a4",
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
- 0061cef4 ["INT_ADD", "register:40f0:8", ["const:61cef4:8", "const:4:8"]]
- 0061cef4 ["CALL", null, ["ram:47ad34:8"]]
+ 0061d2a4 ["INT_ADD", "register:40f0:8", ["const:61d2a4:8", "const:4:8"]]
+ 0061d2a4 ["CALL", null, ["ram:47b054:8"]]
- 0061ceec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0061ceec ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 0061d29c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0061d29c ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
- 0061cf00 ["INT_ADD", "register:40f0:8", ["const:61cf00:8", "const:4:8"]]
- 0061cf00 ["CALL", null, ["callee:0047d134:8"]]
+ 0061d2b0 ["INT_ADD", "register:40f0:8", ["const:61d2b0:8", "const:4:8"]]
+ 0061d2b0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-d31d5cfa45db27eb59f1bad55d384843"></a>

### [`0061d028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d028.md) → [`0061d3d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d3d8.md) FUN_0061d3d8

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
      "unmatched:0061d040",
      "DATA",
      [
        "storage",
        "00c72228",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061d044",
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
      "0061d3f0",
      "DATA",
      [
        "storage",
        "00c731f8",
        null,
        "undefined *"
      ]
    ],
    [
      "0061d3f4",
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
- 0061d034 ["INT_ADD", "register:40f0:8", ["const:61d034:8", "const:4:8"]]
- 0061d034 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061d3e4 ["INT_ADD", "register:40f0:8", ["const:61d3e4:8", "const:4:8"]]
+ 0061d3e4 ["CALL", null, ["callee:00c58f30:8"]]
- 0061d038 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d3e8 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061d03c ["COPY", "tmp:0:8", ["const:228:8"]]
- 0061d03c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d03c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d03c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bf9a97c911f778c00c7a3d5400a2cf4b"></a>

### [`0061d04c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d04c.md) → [`0061d3fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d3fc.md) FUN_0061d3fc

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
      "unmatched:0061d054",
      "DATA",
      [
        "storage",
        "00c72228",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061d404",
      "DATA",
      [
        "storage",
        "00c731f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d04c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061d050 ["COPY", "tmp:0:8", ["const:228:8"]]
- 0061d050 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d050 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d050 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061d054 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061d054 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-0cf1eca300bcbd945a5ecfbdbb78ac99"></a>

### [`0061d064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d064.md) → [`0061d414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d414.md) FUN_0061d414

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.53% / 新版 85.53%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061d43c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061d08c",
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
      "unmatched:0061d064",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061d068",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061d06c",
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
      "0061d414",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061d418",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061d41c",
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
- 0061d08c ["INT_ADD", "register:40f0:8", ["const:61d08c:8", "const:4:8"]]
- 0061d08c ["CALL", null, ["ram:47ad34:8"]]
+ 0061d43c ["INT_ADD", "register:40f0:8", ["const:61d43c:8", "const:4:8"]]
+ 0061d43c ["CALL", null, ["ram:47b054:8"]]
- 0061d064 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061d064 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061d064 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0061d064 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061d068 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0061d068 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-01bbc6c80e11e86defa4d401464e664e"></a>

### [`0061d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d1c0.md) → [`0061d570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d570.md) FUN_0061d570

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
      "definition_site": "0061d584",
      "incomplete_value": false,
      "site": "0061d588",
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
            "const:278:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061d1d4",
      "incomplete_value": false,
      "site": "0061d1d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
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
      "0061d588",
      "DATA",
      [
        "storage",
        "00c722a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061d588",
      "DATA",
      [
        "storage",
        "00c73278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d1cc ["INT_ADD", "register:40f0:8", ["const:61d1cc:8", "const:4:8"]]
- 0061d1cc ["CALL", null, ["callee:00c58f30:8"]]
+ 0061d57c ["INT_ADD", "register:40f0:8", ["const:61d57c:8", "const:4:8"]]
+ 0061d57c ["CALL", null, ["callee:00c58f30:8"]]
- 0061d1d0 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d580 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061d1d4 ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 0061d1d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d1d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d1d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061d584 ["COPY", "tmp:0:8", ["const:278:8"]]
+ 0061d584 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d584 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d584 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-02a9e15afdf85810a8ce6b02493d6282"></a>

### [`0061d1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d1e4.md) → [`0061d594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d594.md) FUN_0061d594

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
      "unmatched:0061d1ec",
      "DATA",
      [
        "storage",
        "00c722a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061d59c",
      "DATA",
      [
        "storage",
        "00c73278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d1e4 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061d1e8 ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 0061d1e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d1e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d1e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061d1ec ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061d1ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-625b05f2032cc5dec936282a652ca484"></a>

### [`0061d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d1fc.md) → [`0061d5ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d5ac.md) FUN_0061d5ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061d5d4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061d224",
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
      "0061d5d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:0061d2c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d6a0"
      ]
    ]
  ],
  "added": [
    [
      "0061d5d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0061d674",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061d6a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d224 ["INT_ADD", "register:40f0:8", ["const:61d224:8", "const:4:8"]]
- 0061d224 ["CALL", null, ["ram:47ad34:8"]]
+ 0061d5d4 ["INT_ADD", "register:40f0:8", ["const:61d5d4:8", "const:4:8"]]
+ 0061d5d4 ["CALL", null, ["ram:47b054:8"]]
- 0061d21c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0061d21c ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 0061d5cc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0061d5cc ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 0061d230 ["INT_ADD", "register:40f0:8", ["const:61d230:8", "const:4:8"]]
- 0061d230 ["CALL", null, ["callee:0047d134:8"]]
+ 0061d5e0 ["INT_ADD", "register:40f0:8", ["const:61d5e0:8", "const:4:8"]]
+ 0061d5e0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-db0065a3ae7ed0f4dc0cdc2aca265779"></a>

### [`0061d358`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d358.md) → [`0061d708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d708.md) FUN_0061d708

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
      "unmatched:0061d370",
      "DATA",
      [
        "storage",
        "00c72328",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061d374",
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
      "0061d720",
      "DATA",
      [
        "storage",
        "00c732f8",
        null,
        "undefined *"
      ]
    ],
    [
      "0061d724",
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
- 0061d364 ["INT_ADD", "register:40f0:8", ["const:61d364:8", "const:4:8"]]
- 0061d364 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061d714 ["INT_ADD", "register:40f0:8", ["const:61d714:8", "const:4:8"]]
+ 0061d714 ["CALL", null, ["callee:00c58f30:8"]]
- 0061d368 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d718 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061d36c ["COPY", "tmp:0:8", ["const:328:8"]]
- 0061d36c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d36c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d36c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-31fe4a15fc7c90052c3b77801ba5b2a3"></a>

### [`0061d37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d37c.md) → [`0061d72c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d72c.md) FUN_0061d72c

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
      "unmatched:0061d384",
      "DATA",
      [
        "storage",
        "00c72328",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061d734",
      "DATA",
      [
        "storage",
        "00c732f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d37c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061d380 ["COPY", "tmp:0:8", ["const:328:8"]]
- 0061d380 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d380 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d380 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061d384 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061d384 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-d1fbbc42c3bb471fde804423fd572716"></a>

### [`0061d394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d394.md) → [`0061d744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d744.md) FUN_0061d744

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061d428"
      ],
      [
        "FALL_THROUGH",
        "0061d7d8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061d7d8",
      "incomplete_value": true,
      "site": "0061d7ec",
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
    "old": {
      "definition_site": "0061d428",
      "incomplete_value": true,
      "site": "0061d43c",
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
    "ordinal": 5,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061d394",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061d398",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061d39c",
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
      "0061d744",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061d748",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061d74c",
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
- 0061d394 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061d394 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061d394 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0061d394 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061d398 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0061d398 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0061d39c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0061d39c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0061d39c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0061d39c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d522daf72183bee5eac70d9a90000e8b"></a>

### [`0061d5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d5f0.md) → [`0061d9a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d9a0.md) FUN_0061d9a0

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
      "unmatched:0061d608",
      "DATA",
      [
        "storage",
        "00c723a8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061d60c",
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
      "0061d9b8",
      "DATA",
      [
        "storage",
        "00c73378",
        null,
        "undefined *"
      ]
    ],
    [
      "0061d9bc",
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
- 0061d5fc ["INT_ADD", "register:40f0:8", ["const:61d5fc:8", "const:4:8"]]
- 0061d5fc ["CALL", null, ["callee:00c58f30:8"]]
+ 0061d9ac ["INT_ADD", "register:40f0:8", ["const:61d9ac:8", "const:4:8"]]
+ 0061d9ac ["CALL", null, ["callee:00c58f30:8"]]
- 0061d600 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d9b0 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061d604 ["COPY", "tmp:0:8", ["const:3a8:8"]]
- 0061d604 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d604 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d604 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7c7e7beee3fcb05def427e9961104bcf"></a>

### [`0061d614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d614.md) → [`0061d9c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d9c4.md) FUN_0061d9c4

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
      "definition_site": "0061d9c8",
      "incomplete_value": false,
      "site": "0061d9cc",
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
            "const:378:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061d618",
      "incomplete_value": false,
      "site": "0061d61c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:3a8:8"
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
      "0061d9cc",
      "DATA",
      [
        "storage",
        "00c723a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061d9cc",
      "DATA",
      [
        "storage",
        "00c73378",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d614 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061d9c4 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061d618 ["COPY", "tmp:0:8", ["const:3a8:8"]]
- 0061d618 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d618 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d618 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061d9c8 ["COPY", "tmp:0:8", ["const:378:8"]]
+ 0061d9c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d9c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061d9c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-101b7bf6210ffb089066b3d310cea782"></a>

### [`0061d62c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d62c.md) → [`0061d9dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d9dc.md) FUN_0061d9dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061d710"
      ],
      [
        "FALL_THROUGH",
        "0061dac0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061dac0",
      "incomplete_value": true,
      "site": "0061dac4",
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
      "definition_site": "0061d710",
      "incomplete_value": true,
      "site": "0061d714",
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
    "ordinal": 13,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061d62c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061d630",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061d634",
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
      "0061d9dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061d9e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061d9e4",
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
- 0061d62c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061d62c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061d62c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0061d62c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061d630 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0061d630 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0061d634 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0061d634 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0061d634 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0061d634 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-51c6b126607c23e43e388b6bcf588048"></a>

### [`0061d788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d788.md) → [`0061db38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061db38.md) FUN_0061db38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061d7a0",
      "DATA",
      [
        "storage",
        "00c72428",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061db50",
      "DATA",
      [
        "storage",
        "00c733f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d794 ["INT_ADD", "register:40f0:8", ["const:61d794:8", "const:4:8"]]
- 0061d794 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061db44 ["INT_ADD", "register:40f0:8", ["const:61db44:8", "const:4:8"]]
+ 0061db44 ["CALL", null, ["callee:00c58f30:8"]]
- 0061d798 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061db48 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061d79c ["COPY", "tmp:0:8", ["const:428:8"]]
- 0061d79c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d79c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d79c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-70eeb0a5e173b542ea5f91e4da3714a2"></a>

### [`0061d7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d7ac.md) → [`0061db5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061db5c.md) FUN_0061db5c

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
      "definition_site": "0061db60",
      "incomplete_value": false,
      "site": "0061db64",
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
            "const:3f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061d7b0",
      "incomplete_value": false,
      "site": "0061d7b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:428:8"
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
      "0061db64",
      "DATA",
      [
        "storage",
        "00c72428",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061db64",
      "DATA",
      [
        "storage",
        "00c733f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d7ac ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061db5c ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061d7b0 ["COPY", "tmp:0:8", ["const:428:8"]]
- 0061d7b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d7b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d7b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061db60 ["COPY", "tmp:0:8", ["const:3f8:8"]]
+ 0061db60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061db60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061db60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7855c2fb98dcc691620c2d92088c8600"></a>

### [`0061d7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d7c4.md) → [`0061db74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061db74.md) FUN_0061db74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061d8a8"
      ],
      [
        "FALL_THROUGH",
        "0061dc58"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061dc58",
      "incomplete_value": true,
      "site": "0061dc5c",
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
      "definition_site": "0061d8a8",
      "incomplete_value": true,
      "site": "0061d8ac",
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
    "ordinal": 13,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061d7ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:0061d828",
      "DATA",
      [
        "storage",
        "00338118",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:0061d834",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061dc18"
      ]
    ]
  ],
  "added": [
    [
      "0061db9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0061dbd8",
      "DATA",
      [
        "storage",
        "00338118",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "0061dbe4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061dc18"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d7dc ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 0061db8c ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 0061d7ec ["INT_ADD", "register:40f0:8", ["const:61d7ec:8", "const:4:8"]]
- 0061d7ec ["CALL", null, ["ram:47ad34:8"]]
- 0061d7f8 ["INT_ADD", "register:40f0:8", ["const:61d7f8:8", "const:4:8"]]
- 0061d7f8 ["CALL", null, ["callee:0047d134:8"]]
+ 0061dba8 ["INT_ADD", "register:40f0:8", ["const:61dba8:8", "const:4:8"]]
+ 0061dba8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-9fea9e5c649eb1f6b42d3b4af66d59d4"></a>

### [`0061d920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d920.md) → [`0061dcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dcd0.md) FUN_0061dcd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0061d928",
      "incomplete_value": false,
      "site": "0061d92c",
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
      "unmatched:0061d938",
      "DATA",
      [
        "storage",
        "00c724a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061dce8",
      "DATA",
      [
        "storage",
        "00c73478",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d92c ["INT_ADD", "register:40f0:8", ["const:61d92c:8", "const:4:8"]]
- 0061d92c ["CALL", null, ["callee:00c58f30:8"]]
+ 0061dcdc ["INT_ADD", "register:40f0:8", ["const:61dcdc:8", "const:4:8"]]
+ 0061dcdc ["CALL", null, ["callee:00c58f30:8"]]
- 0061d930 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061dce0 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061d934 ["COPY", "tmp:0:8", ["const:4a8:8"]]
- 0061d934 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d934 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d934 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a84593ae098682564ce79adb9e9d6eb"></a>

### [`0061d944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d944.md) → [`0061dcf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dcf4.md) FUN_0061dcf4

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
      "unmatched:0061d94c",
      "DATA",
      [
        "storage",
        "00c724a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061dcfc",
      "DATA",
      [
        "storage",
        "00c73478",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061d944 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061d948 ["COPY", "tmp:0:8", ["const:4a8:8"]]
- 0061d948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061d948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061d948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061d94c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061d94c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-02a64849c59fb17b79b29316fe95f4d9"></a>

### [`0061d95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d95c.md) → [`0061dd0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dd0c.md) FUN_0061dd0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.74% / 新版 69.74%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061da04"
      ],
      [
        "FALL_THROUGH",
        "0061ddb4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061ddb4",
      "incomplete_value": true,
      "site": "0061ddb8",
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
                "register:40a0:8"
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
      "definition_site": "0061da04",
      "incomplete_value": true,
      "site": "0061da08",
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
    "ordinal": 10,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061da04"
      ],
      [
        "FALL_THROUGH",
        "0061ddb4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061ddb4",
      "incomplete_value": true,
      "site": "0061ddc0",
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
                "register:40a0:8"
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
      "definition_site": "0061da04",
      "incomplete_value": true,
      "site": "0061da10",
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
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061da04"
      ],
      [
        "FALL_THROUGH",
        "0061ddb4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061ddb4",
      "incomplete_value": true,
      "site": "0061ddc0",
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
                "register:40a0:8"
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
      "definition_site": "0061da04",
      "incomplete_value": true,
      "site": "0061da10",
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
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061d95c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061d960",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061d964",
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
      "0061dd0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061dd10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061dd14",
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
- 0061d95c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061d95c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061d95c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0061d95c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061d960 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0061d960 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0061d964 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0061d964 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0061d964 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0061d964 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2a65c783d9b8791f3d01e28e350b607c"></a>

### [`0061dab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dab8.md) → [`0061de68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061de68.md) FUN_0061de68

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
    "new": null,
    "old": {
      "definition_site": "0061dac0",
      "incomplete_value": false,
      "site": "0061dac4",
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
      "unmatched:0061dad0",
      "DATA",
      [
        "storage",
        "00c72528",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061dad4",
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
      "0061de80",
      "DATA",
      [
        "storage",
        "00c734f8",
        null,
        "undefined *"
      ]
    ],
    [
      "0061de84",
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
- 0061dac4 ["INT_ADD", "register:40f0:8", ["const:61dac4:8", "const:4:8"]]
- 0061dac4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061de74 ["INT_ADD", "register:40f0:8", ["const:61de74:8", "const:4:8"]]
+ 0061de74 ["CALL", null, ["callee:00c58f30:8"]]
- 0061dac8 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061de78 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061dacc ["COPY", "tmp:0:8", ["const:528:8"]]
- 0061dacc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061dacc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061dacc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5977bb789f41b038d7c8c681819e986a"></a>

### [`0061dadc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dadc.md) → [`0061de8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061de8c.md) FUN_0061de8c

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
      "unmatched:0061dae4",
      "DATA",
      [
        "storage",
        "00c72528",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061de94",
      "DATA",
      [
        "storage",
        "00c734f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061dadc ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061dae0 ["COPY", "tmp:0:8", ["const:528:8"]]
- 0061dae0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061dae0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061dae0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061dae4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061dae4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-72fc87ac915371e78cea139a9447daae"></a>

### [`0061daf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061daf4.md) → [`0061dea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dea4.md) FUN_0061dea4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061dbd8"
      ],
      [
        "FALL_THROUGH",
        "0061df88"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061df88",
      "incomplete_value": true,
      "site": "0061df8c",
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
      "definition_site": "0061dbd8",
      "incomplete_value": true,
      "site": "0061dbdc",
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
    "ordinal": 13,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0061df44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061def0"
      ]
    ],
    [
      "unmatched:0061db14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061dfc4"
      ]
    ],
    [
      "unmatched:0061db1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0061debc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061def0"
      ]
    ],
    [
      "0061dec4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061dfc4"
      ]
    ],
    [
      "0061decc",
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
- 0061db0c ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 0061df44 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
- 0061db10 ["COPY", "tmp:0:4", ["const:2:4"]]
- 0061db10 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 0061db10 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 0061db10 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 0061db14 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0061db14 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
~~~


<a id="compare-db47c409598e7bed2fb71b516c528d32"></a>

### [`0061dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dc50.md) → [`0061e000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e000.md) FUN_0061e000

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
      "unmatched:0061dc50",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061dc5c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:0061dc68",
      "DATA",
      [
        "storage",
        "00c725a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e000",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0061e00c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "0061e018",
      "DATA",
      [
        "storage",
        "00c73578",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061dc50 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061dc50 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061dc50 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0061dc50 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061dc54 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0061dc58 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-80fa1b72e24465eb8a0a9a52c165049e"></a>

### [`0061dc74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dc74.md) → [`0061e024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e024.md) FUN_0061e024

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
      "unmatched:0061dc7c",
      "DATA",
      [
        "storage",
        "00c725a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e02c",
      "DATA",
      [
        "storage",
        "00c73578",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061dc74 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061dc78 ["COPY", "tmp:0:8", ["const:5a8:8"]]
- 0061dc78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061dc78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061dc78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061dc7c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061dc7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-45a173c25dabf7d775a75eed9757e99d"></a>

### [`0061dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dc8c.md) → [`0061e03c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e03c.md) FUN_0061e03c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.79% / 新版 71.79%

優先判定に残った影響 `store_condition` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061dd3c"
      ],
      [
        "FALL_THROUGH",
        "0061e0ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061e0ec",
      "incomplete_value": true,
      "site": "0061e0f0",
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
      "definition_site": "0061dd3c",
      "incomplete_value": true,
      "site": "0061dd40",
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
                "register:40a0:8"
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
    "ordinal": 10,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061dd3c"
      ],
      [
        "FALL_THROUGH",
        "0061e0ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061e0ec",
      "incomplete_value": true,
      "site": "0061e0f8",
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
      "definition_site": "0061dd3c",
      "incomplete_value": true,
      "site": "0061dd48",
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
                "register:40a0:8"
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
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061dd3c"
      ],
      [
        "FALL_THROUGH",
        "0061e0ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061e0ec",
      "incomplete_value": true,
      "site": "0061e0f8",
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
      "definition_site": "0061dd3c",
      "incomplete_value": true,
      "site": "0061dd48",
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
                "register:40a0:8"
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
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061dc8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061dc90",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061dc94",
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
      "0061e03c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061e040",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061e044",
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
- 0061dc8c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061dc8c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061dc8c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0061dc8c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061dc90 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0061dc90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0061dc94 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0061dc94 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0061dc94 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0061dc94 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-3f7e75218f1ddf256beecd8ee2055cfe"></a>

### [`0061ddf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061ddf0.md) → [`0061e1a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e1a0.md) FUN_0061e1a0

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
      "unmatched:0061de08",
      "DATA",
      [
        "storage",
        "00c72628",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061de0c",
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
      "0061e1b8",
      "DATA",
      [
        "storage",
        "00c735f8",
        null,
        "undefined *"
      ]
    ],
    [
      "0061e1bc",
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
- 0061ddfc ["INT_ADD", "register:40f0:8", ["const:61ddfc:8", "const:4:8"]]
- 0061ddfc ["CALL", null, ["callee:00c58f30:8"]]
+ 0061e1ac ["INT_ADD", "register:40f0:8", ["const:61e1ac:8", "const:4:8"]]
+ 0061e1ac ["CALL", null, ["callee:00c58f30:8"]]
- 0061de00 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061e1b0 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061de04 ["COPY", "tmp:0:8", ["const:628:8"]]
- 0061de04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061de04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061de04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-977fd0a689ed873ef69c099afcec28d9"></a>

### [`0061de14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061de14.md) → [`0061e1c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e1c4.md) FUN_0061e1c4

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
      "definition_site": "0061e1c8",
      "incomplete_value": false,
      "site": "0061e1cc",
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
            "const:5f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061de18",
      "incomplete_value": false,
      "site": "0061de1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:628:8"
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
      "0061e1cc",
      "DATA",
      [
        "storage",
        "00c72628",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e1cc",
      "DATA",
      [
        "storage",
        "00c735f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061de14 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061e1c4 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061de18 ["COPY", "tmp:0:8", ["const:628:8"]]
- 0061de18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061de18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061de18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061e1c8 ["COPY", "tmp:0:8", ["const:5f8:8"]]
+ 0061e1c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061e1c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061e1c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a625082777ffff2368b79e1620df958a"></a>

### [`0061de2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061de2c.md) → [`0061e1dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e1dc.md) FUN_0061e1dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.89% / 新版 82.89%

優先判定に残った影響 `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061e204",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061de54",
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
    "guard": [
      [
        "FALL_THROUGH",
        "0061df10"
      ],
      [
        "FALL_THROUGH",
        "0061e2c0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061e2c0",
      "incomplete_value": true,
      "site": "0061e2c4",
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
      "definition_site": "0061df10",
      "incomplete_value": true,
      "site": "0061df14",
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
    "ordinal": 13,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0061e204",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:0061de90",
      "DATA",
      [
        "storage",
        "00338118",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:0061de9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061e280"
      ]
    ]
  ],
  "added": [
    [
      "0061e204",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0061e240",
      "DATA",
      [
        "storage",
        "00338118",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "0061e24c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061e280"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061de54 ["INT_ADD", "register:40f0:8", ["const:61de54:8", "const:4:8"]]
- 0061de54 ["CALL", null, ["ram:47ad34:8"]]
+ 0061e204 ["INT_ADD", "register:40f0:8", ["const:61e204:8", "const:4:8"]]
+ 0061e204 ["CALL", null, ["ram:47b054:8"]]
- 0061de44 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 0061e1f4 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 0061de4c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0061de4c ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 0061e1fc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0061e1fc ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
~~~


<a id="compare-62958fc3e8ae2f783b6f1b7e5e4642f9"></a>

### [`0061df88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061df88.md) → [`0061e338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e338.md) FUN_0061e338

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
      "unmatched:0061dfa0",
      "DATA",
      [
        "storage",
        "00c726a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e350",
      "DATA",
      [
        "storage",
        "00c73678",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061df94 ["INT_ADD", "register:40f0:8", ["const:61df94:8", "const:4:8"]]
- 0061df94 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061e344 ["INT_ADD", "register:40f0:8", ["const:61e344:8", "const:4:8"]]
+ 0061e344 ["CALL", null, ["callee:00c58f30:8"]]
- 0061df98 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061e348 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061df9c ["COPY", "tmp:0:8", ["const:6a8:8"]]
- 0061df9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061df9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061df9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-50b7eb783af715e677236c1d02858693"></a>

### [`0061dfac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dfac.md) → [`0061e35c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e35c.md) FUN_0061e35c

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
      "unmatched:0061dfb4",
      "DATA",
      [
        "storage",
        "00c726a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e364",
      "DATA",
      [
        "storage",
        "00c73678",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061dfac ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061dfb0 ["COPY", "tmp:0:8", ["const:6a8:8"]]
- 0061dfb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061dfb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061dfb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061dfb4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061dfb4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-7d9fe124ea40d5a51954f5ba02b24d88"></a>

### [`0061dfc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dfc4.md) → [`0061e374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e374.md) FUN_0061e374

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.32% / 新版 76.32%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061e39c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0061dfec",
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
      "unmatched:0061dfc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061dfc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061dfcc",
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
      "0061e374",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061e378",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061e37c",
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
- 0061dfec ["INT_ADD", "register:40f0:8", ["const:61dfec:8", "const:4:8"]]
- 0061dfec ["CALL", null, ["ram:47ad34:8"]]
+ 0061e39c ["INT_ADD", "register:40f0:8", ["const:61e39c:8", "const:4:8"]]
+ 0061e39c ["CALL", null, ["ram:47b054:8"]]
- 0061dfc4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061dfc4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061dfc4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0061dfc4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061dfc8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0061dfc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-19f2ea289aba8d1b85cb15c57fe949e8"></a>

### [`0061e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e120.md) → [`0061e4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e4d0.md) FUN_0061e4d0

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
      "unmatched:0061e138",
      "DATA",
      [
        "storage",
        "00c72728",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061e13c",
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
      "0061e4e8",
      "DATA",
      [
        "storage",
        "00c736f8",
        null,
        "undefined *"
      ]
    ],
    [
      "0061e4ec",
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
- 0061e12c ["INT_ADD", "register:40f0:8", ["const:61e12c:8", "const:4:8"]]
- 0061e12c ["CALL", null, ["callee:00c58f30:8"]]
+ 0061e4dc ["INT_ADD", "register:40f0:8", ["const:61e4dc:8", "const:4:8"]]
+ 0061e4dc ["CALL", null, ["callee:00c58f30:8"]]
- 0061e130 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061e4e0 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061e134 ["COPY", "tmp:0:8", ["const:728:8"]]
- 0061e134 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061e134 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061e134 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b999291904ca20a1f8f87f6f3a5f360d"></a>

### [`0061e144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e144.md) → [`0061e4f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e4f4.md) FUN_0061e4f4

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
      "definition_site": "0061e4f8",
      "incomplete_value": false,
      "site": "0061e4fc",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061e148",
      "incomplete_value": false,
      "site": "0061e14c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:728:8"
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
      "0061e4fc",
      "DATA",
      [
        "storage",
        "00c72728",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e4fc",
      "DATA",
      [
        "storage",
        "00c736f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e144 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061e4f4 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061e148 ["COPY", "tmp:0:8", ["const:728:8"]]
- 0061e148 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061e148 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061e148 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061e4f8 ["COPY", "tmp:0:8", ["const:6f8:8"]]
+ 0061e4f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061e4f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061e4f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-11936d237e817a75b7337d457a310741"></a>

### [`0061e15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e15c.md) → [`0061e50c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e50c.md) FUN_0061e50c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061e184",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:0061e238",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061e600"
      ]
    ]
  ],
  "added": [
    [
      "0061e534",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0061e5e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061e600"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e174 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 0061e524 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 0061e184 ["INT_ADD", "register:40f0:8", ["const:61e184:8", "const:4:8"]]
- 0061e184 ["CALL", null, ["ram:47ad34:8"]]
- 0061e190 ["INT_ADD", "register:40f0:8", ["const:61e190:8", "const:4:8"]]
- 0061e190 ["CALL", null, ["callee:0047d134:8"]]
+ 0061e540 ["INT_ADD", "register:40f0:8", ["const:61e540:8", "const:4:8"]]
+ 0061e540 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-e82d13c2f0eeb6b662873a49747e3637"></a>

### [`0061e2b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e2b8.md) → [`0061e668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e668.md) FUN_0061e668

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
      "unmatched:0061e2b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061e2c4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:0061e2d0",
      "DATA",
      [
        "storage",
        "00c727a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e668",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0061e674",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "0061e680",
      "DATA",
      [
        "storage",
        "00c73778",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e2b8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061e2b8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061e2b8 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0061e2b8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061e2bc ["COPY", "register:40e8:8", ["register:8:8"]]
- 0061e2c0 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-e47eb1355a44822b2e26a7f6ecd75203"></a>

### [`0061e2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e2dc.md) → [`0061e68c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e68c.md) FUN_0061e68c

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
      "unmatched:0061e2e4",
      "DATA",
      [
        "storage",
        "00c727a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e694",
      "DATA",
      [
        "storage",
        "00c73778",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e2dc ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061e2e0 ["COPY", "tmp:0:8", ["const:7a8:8"]]
- 0061e2e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061e2e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061e2e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061e2e4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061e2e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-eb594938d52ca32e980f22ece62f2973"></a>

### [`0061e2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e2f4.md) → [`0061e6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e6a4.md) FUN_0061e6a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.49% / 新版 73.49%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061e3a4"
      ],
      [
        "FALL_THROUGH",
        "0061e754"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061e754",
      "incomplete_value": true,
      "site": "0061e758",
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
                "register:40a0:8"
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
      "definition_site": "0061e3a4",
      "incomplete_value": true,
      "site": "0061e3a8",
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
    "ordinal": 10,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061e3a4"
      ],
      [
        "FALL_THROUGH",
        "0061e754"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061e754",
      "incomplete_value": true,
      "site": "0061e760",
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
                "register:40a0:8"
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
      "definition_site": "0061e3a4",
      "incomplete_value": true,
      "site": "0061e3b0",
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
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0061e3a4"
      ],
      [
        "FALL_THROUGH",
        "0061e754"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0061e754",
      "incomplete_value": true,
      "site": "0061e760",
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
                "register:40a0:8"
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
      "definition_site": "0061e3a4",
      "incomplete_value": true,
      "site": "0061e3b0",
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
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061e2f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061e2f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061e2fc",
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
      "0061e6a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061e6a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061e6ac",
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
- 0061e2f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061e2f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061e2f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0061e2f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0061e2f8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0061e2f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0061e2fc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0061e2fc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0061e2fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0061e2fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-464698ad712db652cde5a6be9715ae98"></a>

### [`0061e46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e46c.md) → [`0061e81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e81c.md) FUN_0061e81c

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
      "unmatched:0061e484",
      "DATA",
      [
        "storage",
        "00c72828",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061e488",
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
      "0061e834",
      "DATA",
      [
        "storage",
        "00c737f8",
        null,
        "undefined *"
      ]
    ],
    [
      "0061e838",
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
- 0061e478 ["INT_ADD", "register:40f0:8", ["const:61e478:8", "const:4:8"]]
- 0061e478 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061e828 ["INT_ADD", "register:40f0:8", ["const:61e828:8", "const:4:8"]]
+ 0061e828 ["CALL", null, ["callee:00c58f30:8"]]
- 0061e47c ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061e82c ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061e480 ["COPY", "tmp:0:8", ["const:828:8"]]
- 0061e480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061e480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061e480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-23e9eeb26742ca97545a0fb8ad171d70"></a>

### [`0061e490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e490.md) → [`0061e840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e840.md) FUN_0061e840

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
      "unmatched:0061e498",
      "DATA",
      [
        "storage",
        "00c72828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e848",
      "DATA",
      [
        "storage",
        "00c737f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e490 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061e840 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061e494 ["COPY", "tmp:0:8", ["const:828:8"]]
- 0061e494 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061e494 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061e494 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061e498 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061e498 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-75d09fc9df5c4e9a0724e905dd34720d"></a>

### [`0061e588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e588.md) → [`0061e938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e938.md) FUN_0061e938

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
      "unmatched:0061e5ac",
      "DATA",
      [
        "storage",
        "00c728a8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0061e5b0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061e5b4",
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
      "0061e95c",
      "DATA",
      [
        "storage",
        "00c73878",
        null,
        "undefined *"
      ]
    ],
    [
      "0061e960",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0061e964",
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
- 0061e59c ["INT_ADD", "register:40f0:8", ["const:61e59c:8", "const:4:8"]]
- 0061e59c ["CALL", null, ["callee:00c58f30:8"]]
+ 0061e94c ["INT_ADD", "register:40f0:8", ["const:61e94c:8", "const:4:8"]]
+ 0061e94c ["CALL", null, ["callee:00c58f30:8"]]
- 0061e5a4 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061e954 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061e5a8 ["COPY", "tmp:0:8", ["const:8a8:8"]]
- 0061e5a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061e5a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061e5a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bf08f01d5dec5aa2a38eff0774a9409e"></a>

### [`0061e5bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e5bc.md) → [`0061e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e96c.md) FUN_0061e96c

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
      "unmatched:0061e5c8",
      "DATA",
      [
        "storage",
        "00c728a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061e978",
      "DATA",
      [
        "storage",
        "00c73878",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e5bc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0061e5bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0061e5c0 ["COPY", "register:4048:8", ["const:c72000:8"]]
- 0061e5c4 ["COPY", "tmp:0:8", ["const:8a8:8"]]
- 0061e5c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0061e5c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0061e5c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-074eec90dc8be659d759a439dcb1c495"></a>

### [`0061e5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e5d8.md) → [`0061e988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e988.md) FUN_0061e988

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00747428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747428.md) [`00747430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747430.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`007477d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007477d8.md) [`007477e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007477e0.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.05% / 新版 78.05%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061e9e0",
      "incomplete_value": true,
      "site": "0061e9e8",
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
            "const:be0:8"
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
      "definition_site": "0061e9e4",
      "incomplete_value": false,
      "site": "0061e9e8",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061ea08",
      "incomplete_value": true,
      "site": "0061ea10",
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
            "const:be0:8"
          ]
        ]
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
      "unmatched:0061e5d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061e5dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061e5ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061e9bc"
      ]
    ]
  ],
  "added": [
    [
      "0061e988",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061e98c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0061e99c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0061e9bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e638 ["INT_ADD", "register:40f0:8", ["const:61e638:8", "const:4:8"]]
- 0061e638 ["CALL", null, ["callee:007477e0:8"]]
+ 0061e9e8 ["INT_ADD", "register:40f0:8", ["const:61e9e8:8", "const:4:8"]]
+ 0061e9e8 ["CALL", null, ["callee:007477e0:8"]]
- 0061e660 ["INT_ADD", "register:40f0:8", ["const:61e660:8", "const:4:8"]]
- 0061e660 ["CALL", null, ["callee:007477e0:8"]]
+ 0061ea10 ["INT_ADD", "register:40f0:8", ["const:61ea10:8", "const:4:8"]]
+ 0061ea10 ["CALL", null, ["callee:007477e0:8"]]
- 0061e5d8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061e5d8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061e5d8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0061e5d8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-c0bbae31d526f53cd1822bf66698db01"></a>

### [`0061e6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e6ac.md) → [`0061ea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea5c.md) FUN_0061ea5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0061ea70",
      "incomplete_value": false,
      "site": "0061ea74",
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
            "const:8f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061e6c0",
      "incomplete_value": false,
      "site": "0061e6c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:928:8"
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
      "0061ea74",
      "DATA",
      [
        "storage",
        "00c72928",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061ea74",
      "DATA",
      [
        "storage",
        "00c738f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e6b0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0061e6b8 ["INT_ADD", "register:40f0:8", ["const:61e6b8:8", "const:4:8"]]
- 0061e6b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061ea68 ["INT_ADD", "register:40f0:8", ["const:61ea68:8", "const:4:8"]]
+ 0061ea68 ["CALL", null, ["callee:00c58f30:8"]]
- 0061e6bc ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061ea6c ["COPY", "register:4040:8", ["const:c73000:8"]]
~~~


<a id="compare-fd23b8e29fa05df482ad41d3736b9fdb"></a>

### [`0061e6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e6d0.md) → [`0061ea80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea80.md) FUN_0061ea80

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
      "definition_site": "0061ea84",
      "incomplete_value": false,
      "site": "0061ea88",
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
            "const:8f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061e6d4",
      "incomplete_value": false,
      "site": "0061e6d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:928:8"
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
      "0061ea88",
      "DATA",
      [
        "storage",
        "00c72928",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061ea88",
      "DATA",
      [
        "storage",
        "00c738f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061e6d0 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061ea80 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061e6d4 ["COPY", "tmp:0:8", ["const:928:8"]]
- 0061e6d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061e6d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061e6d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061ea84 ["COPY", "tmp:0:8", ["const:8f8:8"]]
+ 0061ea84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061ea84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061ea84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-69df58a6a158813f570137078fce6b89"></a>

### [`0061e6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e6e8.md) → [`0061ea98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea98.md) FUN_0061ea98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 0件  · 呼出先 24件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.44% / 新版 70.44%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 21件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0061eb1c",
      "incomplete_value": true,
      "site": "0061eb1c",
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
      "definition_site": "0061e76c",
      "incomplete_value": true,
      "site": "0061e76c",
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
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061eb2c",
      "incomplete_value": true,
      "site": "0061eb34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4010:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061eb90",
      "incomplete_value": true,
      "site": "0061eba8",
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
    "old": {
      "definition_site": "0061e7e0",
      "incomplete_value": true,
      "site": "0061e7f8",
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
      "unmatched:0061e6ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061e6f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061e6f4",
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
      "0061ea9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0061eaa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0061eaa4",
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
- 0061e784 ["INT_ADD", "register:40f0:8", ["const:61e784:8", "const:4:8"]]
- 0061e784 ["CALL", null, ["callee:00c596b0:8"]]
+ 0061eb34 ["INT_ADD", "register:40f0:8", ["const:61eb34:8", "const:4:8"]]
+ 0061eb34 ["CALL", null, ["callee:00c596b0:8"]]
- 0061e7f8 ["INT_ADD", "register:40f0:8", ["const:61e7f8:8", "const:4:8"]]
- 0061e7f8 ["CALL", null, ["callee:008bb86c:8"]]
+ 0061eba8 ["INT_ADD", "register:40f0:8", ["const:61eba8:8", "const:4:8"]]
+ 0061eba8 ["CALL", null, ["callee:008bb86c:8"]]
- 0061e860 ["INT_ADD", "register:40f0:8", ["const:61e860:8", "const:4:8"]]
- 0061e860 ["CALL", null, ["callee:0071d53c:8"]]
+ 0061ec10 ["INT_ADD", "register:40f0:8", ["const:61ec10:8", "const:4:8"]]
+ 0061ec10 ["CALL", null, ["callee:0071d53c:8"]]
~~~


<a id="compare-9120325d9ca9fef0cca99be807e583b0"></a>

### [`0061eb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061eb28.md) → [`0061eed8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eed8.md) FUN_0061eed8

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
      "definition_site": "0061eeec",
      "incomplete_value": false,
      "site": "0061eef0",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061eb3c",
      "incomplete_value": false,
      "site": "0061eb40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:998:8"
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
      "0061eef0",
      "DATA",
      [
        "storage",
        "00c72998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061eef0",
      "DATA",
      [
        "storage",
        "00c73968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061eb34 ["INT_ADD", "register:40f0:8", ["const:61eb34:8", "const:4:8"]]
- 0061eb34 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061eee4 ["INT_ADD", "register:40f0:8", ["const:61eee4:8", "const:4:8"]]
+ 0061eee4 ["CALL", null, ["callee:00c58f30:8"]]
- 0061eb38 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061eee8 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061eb3c ["COPY", "tmp:0:8", ["const:998:8"]]
- 0061eb3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061eb3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061eb3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061eeec ["COPY", "tmp:0:8", ["const:968:8"]]
+ 0061eeec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061eeec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061eeec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-19bf94b81417b7e26ab0058b678aeb02"></a>

### [`0061eb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061eb4c.md) → [`0061eefc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eefc.md) FUN_0061eefc

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
      "unmatched:0061eb54",
      "DATA",
      [
        "storage",
        "00c72998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061ef04",
      "DATA",
      [
        "storage",
        "00c73968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061eb4c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 0061eb50 ["COPY", "tmp:0:8", ["const:998:8"]]
- 0061eb50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061eb50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061eb50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0061eb54 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0061eb54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-ea4deff43a2198b6180f4a75b4ddcde7"></a>

### [`0061eb64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061eb64.md) → [`0061ef14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ef14.md) FUN_0061ef14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0061eb6c ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 0061ef1c ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 0061eb74 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0061eb74 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0061ef24 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0061ef24 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 0061eb8c ["INT_ADD", "register:40f0:8", ["const:61eb8c:8", "const:4:8"]]
- 0061eb8c ["CALL", null, ["callee:008524fc:8"]]
+ 0061ef3c ["INT_ADD", "register:40f0:8", ["const:61ef3c:8", "const:4:8"]]
+ 0061ef3c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-83d867df55b3bced5294fb2f90dda211"></a>

### [`0061ebe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ebe8.md) → [`0061ef98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ef98.md) FUN_0061ef98

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
      "definition_site": "0061efac",
      "incomplete_value": false,
      "site": "0061efb0",
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
            "const:9f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061ebfc",
      "incomplete_value": false,
      "site": "0061ec00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:a28:8"
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
      "0061efb0",
      "DATA",
      [
        "storage",
        "00c72a28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061efb0",
      "DATA",
      [
        "storage",
        "00c739f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061ebf4 ["INT_ADD", "register:40f0:8", ["const:61ebf4:8", "const:4:8"]]
- 0061ebf4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0061efa4 ["INT_ADD", "register:40f0:8", ["const:61efa4:8", "const:4:8"]]
+ 0061efa4 ["CALL", null, ["callee:00c58f30:8"]]
- 0061ebf8 ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061efa8 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061ebfc ["COPY", "tmp:0:8", ["const:a28:8"]]
- 0061ebfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061ebfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061ebfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061efac ["COPY", "tmp:0:8", ["const:9f8:8"]]
+ 0061efac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061efac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061efac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-87fb6db8c473e3a4f10c4cc8d157df6c"></a>

### [`0061ec0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ec0c.md) → [`0061efbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061efbc.md) FUN_0061efbc

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
      "definition_site": "0061efc0",
      "incomplete_value": false,
      "site": "0061efc4",
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
            "const:9f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0061ec10",
      "incomplete_value": false,
      "site": "0061ec14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:a28:8"
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
      "0061efc4",
      "DATA",
      [
        "storage",
        "00c72a28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0061efc4",
      "DATA",
      [
        "storage",
        "00c739f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0061ec0c ["COPY", "register:4040:8", ["const:c72000:8"]]
+ 0061efbc ["COPY", "register:4040:8", ["const:c73000:8"]]
- 0061ec10 ["COPY", "tmp:0:8", ["const:a28:8"]]
- 0061ec10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0061ec10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0061ec10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0061efc0 ["COPY", "tmp:0:8", ["const:9f8:8"]]
+ 0061efc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0061efc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0061efc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c49815de297f02ec21f34f16823db25"></a>

### [`0061ec50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ec50.md) → [`0061f000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061f/0061f000.md) FUN_0061f000

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0060fe9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060f/0060fe9c.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0061ee34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ee34.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0061024c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/0061024c.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0061f1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061f/0061f1e4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 79.78% / 新版 79.78%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061f0d8",
      "incomplete_value": true,
      "site": "0061f0ec",
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
      "definition_site": "0061f0dc",
      "incomplete_value": false,
      "site": "0061f0ec",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061f0e0",
      "incomplete_value": true,
      "site": "0061f0ec",
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
    "ordinal": 3,
    "slot": 6
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061ec54",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061ec58",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061ec5c",
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
      "0061f004",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0061f008",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0061f00c",
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
- 0061ed3c ["INT_ADD", "register:40f0:8", ["const:61ed3c:8", "const:4:8"]]
- 0061ed3c ["CALL", null, ["callee:0061f1e4:8"]]
+ 0061f0ec ["INT_ADD", "register:40f0:8", ["const:61f0ec:8", "const:4:8"]]
+ 0061f0ec ["CALL", null, ["callee:0061f1e4:8"]]
- 0061ec50 ["INT_SUB", "register:8:8", ["register:8:8", "const:b0:8"]]
- 0061ec54 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0061ec54 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0061ec54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 0061ec54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b6d6a90b8a4d70fea511e902a15d765c"></a>

### [`0061ee34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ee34.md) → [`0061f1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061f/0061f1e4.md) FUN_0061f1e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0061ec50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ec50.md) [`0061ee34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ee34.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0061f000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061f/0061f000.md) [`0061f1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061f/0061f1e4.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.73% / 新版 75.73%

優先判定に残った影響 `call_argument_candidate` 22件, `store_condition` 1件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 11件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0061eeb4",
      "incomplete_value": false,
      "site": "0061eeb8",
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
    "new": null,
    "old": {
      "definition_site": "0061efb0",
      "incomplete_value": true,
      "site": "0061efb8",
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
            "const:30:8"
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
      "definition_site": "0061efac",
      "incomplete_value": false,
      "site": "0061efb8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0061ee48",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061ee54",
      "WRITE",
      [
        "storage",
        "Stack[-0x200]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061ee5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x204]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0061f1f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0061f204",
      "WRITE",
      [
        "storage",
        "Stack[-0x200]",
        null,
        null
      ]
    ],
    [
      "0061f20c",
      "WRITE",
      [
        "storage",
        "Stack[-0x204]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0061eeb8 ["INT_ADD", "register:40f0:8", ["const:61eeb8:8", "const:4:8"]]
- 0061eeb8 ["CALL", null, ["callee:00c59070:8"]]
+ 0061f268 ["INT_ADD", "register:40f0:8", ["const:61f268:8", "const:4:8"]]
+ 0061f268 ["CALL", null, ["callee:00c59070:8"]]
- 0061efb8 ["INT_ADD", "register:40f0:8", ["const:61efb8:8", "const:4:8"]]
- 0061efb8 ["CALL", null, ["callee:004421f4:8"]]
+ 0061f368 ["INT_ADD", "register:40f0:8", ["const:61f368:8", "const:4:8"]]
+ 0061f368 ["CALL", null, ["callee:004421f4:8"]]
- 0061f06c ["INT_ADD", "register:40f0:8", ["const:61f06c:8", "const:4:8"]]
- 0061f06c ["CALL", null, ["callee:004421f4:8"]]
+ 0061f41c ["INT_ADD", "register:40f0:8", ["const:61f41c:8", "const:4:8"]]
+ 0061f41c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-f7ea92d040d16c6d3000fa2e219574a7"></a>

### [`0061fa14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061f/0061fa14.md) → [`0061fdc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061f/0061fdc4.md) FUN_0061fdc4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0061ee34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ee34.md) [`0061fa14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061f/0061fa14.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0061f1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061f/0061f1e4.md) [`0061fdc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061f/0061fdc4.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.80% / 新版 75.80%

優先判定に残った影響 `call_argument_candidate` 30件, `store_condition` 6件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 10件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0061fe44",
      "incomplete_value": false,
      "site": "0061fe48",
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
    "new": null,
    "old": {
      "definition_site": "0061fb8c",
      "incomplete_value": false,
      "site": "0061fb94",
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
      "definition_site": "0061fff0",
      "incomplete_value": false,
      "site": "0061fff8",
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
      "definition_site": "0061fc40",
      "incomplete_value": true,
      "site": "0061fc48",
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
      "unmatched:0061fa3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x184]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061fa40",
      "WRITE",
      [
        "storage",
        "Stack[-0x190]",
        null,
        null
      ]
    ],
    [
      "unmatched:0061fa4c",
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
      "0061fdec",
      "WRITE",
      [
        "storage",
        "Stack[-0x184]",
        null,
        null
      ]
    ],
    [
      "0061fdf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x190]",
        null,
        null
      ]
    ],
    [
      "0061fdfc",
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
- 0061fa98 ["INT_ADD", "register:40f0:8", ["const:61fa98:8", "const:4:8"]]
- 0061fa98 ["CALL", null, ["callee:00c59070:8"]]
+ 0061fe48 ["INT_ADD", "register:40f0:8", ["const:61fe48:8", "const:4:8"]]
+ 0061fe48 ["CALL", null, ["callee:00c59070:8"]]
- 0061fa9c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0061fa9c ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 0061fe4c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0061fe4c ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
- 0061fb94 ["INT_ADD", "register:40f0:8", ["const:61fb94:8", "const:4:8"]]
- 0061fb94 ["CALL", null, ["callee:004421f4:8"]]
+ 0061ff44 ["INT_ADD", "register:40f0:8", ["const:61ff44:8", "const:4:8"]]
+ 0061ff44 ["CALL", null, ["callee:004421f4:8"]]
~~~


