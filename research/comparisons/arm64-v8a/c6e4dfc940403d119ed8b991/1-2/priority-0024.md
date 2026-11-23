# v16.0.2 → v16.0.3 · 最優先の変更候補 (24)

[一覧の目次](README.md)

<a id="compare-ac2dfe29db3082d2fd92e59f6c90f6b8"></a>

### [`005b6b28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6b28.md) → [`005b6ed8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6ed8.md) FUN_005b6ed8

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
      "unmatched:005b6b4c",
      "DATA",
      [
        "storage",
        "00c70430",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b6b50",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6b54",
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
      "005b6efc",
      "DATA",
      [
        "storage",
        "00c71400",
        null,
        "undefined *"
      ]
    ],
    [
      "005b6f00",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6f04",
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
- 005b6b3c ["INT_ADD", "register:40f0:8", ["const:5b6b3c:8", "const:4:8"]]
- 005b6b3c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6eec ["INT_ADD", "register:40f0:8", ["const:5b6eec:8", "const:4:8"]]
+ 005b6eec ["CALL", null, ["callee:00c58f30:8"]]
- 005b6b44 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b6ef4 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6b48 ["COPY", "tmp:0:8", ["const:430:8"]]
- 005b6b48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6b48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6b48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ef7c5e16092dadd75e58b6a19587ea41"></a>

### [`005b6b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6b5c.md) → [`005b6f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6f0c.md) FUN_005b6f0c

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
      "definition_site": "005b6f18",
      "incomplete_value": false,
      "site": "005b6f18",
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
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6b68",
      "incomplete_value": false,
      "site": "005b6b68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:430:8"
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
      "005b6f18",
      "DATA",
      [
        "storage",
        "00c70430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6f18",
      "DATA",
      [
        "storage",
        "00c71400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6b60 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b6f10 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b6b64 ["COPY", "tmp:0:8", ["const:430:8"]]
- 005b6b64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b6b64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b6b64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b6f14 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 005b6f14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6f14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6f14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-63e3d1e0506e9ac844530b8f489c61fe"></a>

### [`005b6b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6b78.md) → [`005b6f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6f28.md) FUN_005b6f28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005b6e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6e2c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`005b71dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b71dc.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b6bdc",
      "incomplete_value": false,
      "site": "005b6bec",
      "value": [
        "leaf",
        "const:58:8"
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
      "definition_site": "005b6ca8",
      "incomplete_value": true,
      "site": "005b6cb0",
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
              [
                "live",
                "register:8:8"
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
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b6cac",
      "incomplete_value": true,
      "site": "005b6cb0",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:005b6b9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6bcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b70bc"
      ]
    ],
    [
      "unmatched:005b6c04",
      "DATA",
      [
        "storage",
        "00c704b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b6f4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "005b6f7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b70bc"
      ]
    ],
    [
      "005b6fb4",
      "DATA",
      [
        "storage",
        "00c71480",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6bec ["INT_ADD", "register:40f0:8", ["const:5b6bec:8", "const:4:8"]]
- 005b6bec ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6f9c ["INT_ADD", "register:40f0:8", ["const:5b6f9c:8", "const:4:8"]]
+ 005b6f9c ["CALL", null, ["callee:00c58f30:8"]]
- 005b6cb0 ["INT_ADD", "register:40f0:8", ["const:5b6cb0:8", "const:4:8"]]
- 005b6cb0 ["CALL", null, ["callee:00c594d0:8"]]
+ 005b7060 ["INT_ADD", "register:40f0:8", ["const:5b7060:8", "const:4:8"]]
+ 005b7060 ["CALL", null, ["callee:00c594d0:8"]]
- 005b6b98 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:28:8"]]
- 005b6b98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6986e72731c0ae6d50ff4bcca645886c"></a>

### [`005b6d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6d9c.md) → [`005b714c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b714c.md) FUN_005b714c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b6db8 ["INT_ADD", "register:40f0:8", ["const:5b6db8:8", "const:4:8"]]
- 005b6db8 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b7168 ["INT_ADD", "register:40f0:8", ["const:5b7168:8", "const:4:8"]]
+ 005b7168 ["CALL", null, ["callee:00c54d90:8"]]
- 005b6dd8 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b6dd8 ["INT_ADD", "register:40f0:8", ["const:5b6dd8:8", "const:4:8"]]
- 005b6dd8 ["CALLIND", null, ["register:0:8"]]
+ 005b7188 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b7188 ["INT_ADD", "register:40f0:8", ["const:5b7188:8", "const:4:8"]]
+ 005b7188 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7ac72df805df4836e6057baf54879ea3"></a>

### [`005b6dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6dec.md) → [`005b719c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b719c.md) FUN_005b719c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b71a0",
      "incomplete_value": false,
      "site": "005b71a4",
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
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6df0",
      "incomplete_value": false,
      "site": "005b6df4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
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
      "005b71a4",
      "DATA",
      [
        "storage",
        "00c704b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b71a4",
      "DATA",
      [
        "storage",
        "00c71480",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6dec ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b719c ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6df0 ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 005b6df0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6df0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6df0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b71a0 ["COPY", "tmp:0:8", ["const:480:8"]]
+ 005b71a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b71a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b71a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f1b1c887ee002032092b7e8ccd950077"></a>

### [`005b6dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6dfc.md) → [`005b71ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b71ac.md) FUN_005b71ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b71bc",
      "incomplete_value": false,
      "site": "005b71c4",
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
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6e0c",
      "incomplete_value": false,
      "site": "005b6e14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
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
      "005b71c4",
      "DATA",
      [
        "storage",
        "00c704b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b71c4",
      "DATA",
      [
        "storage",
        "00c71480",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6e08 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b71b8 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6e0c ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 005b6e0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6e0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6e0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b71bc ["COPY", "tmp:0:8", ["const:480:8"]]
+ 005b71bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b71bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b71bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b6e18 ["INT_ADD", "register:40f0:8", ["const:5b6e18:8", "const:4:8"]]
- 005b6e18 ["CALL", null, ["callee:00c58f40:8"]]
+ 005b71c8 ["INT_ADD", "register:40f0:8", ["const:5b71c8:8", "const:4:8"]]
+ 005b71c8 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-bde73d0a010e9d4edd1829d28ac48933"></a>

### [`005b6e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6e2c.md) → [`005b71dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b71dc.md) FUN_005b71dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b6b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6b78.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b6f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6f28.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b7218",
      "incomplete_value": true,
      "site": "005b721c",
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
                "const:38:8"
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
    "new": null,
    "old": {
      "definition_site": "005b6e78",
      "incomplete_value": true,
      "site": "005b6e80",
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
  }
]
~~~


~~~diff
- 005b6e6c ["INT_ADD", "register:40f0:8", ["const:5b6e6c:8", "const:4:8"]]
- 005b6e6c ["CALL", null, ["callee:00c58f50:8"]]
+ 005b721c ["INT_ADD", "register:40f0:8", ["const:5b721c:8", "const:4:8"]]
+ 005b721c ["CALL", null, ["callee:00c58f50:8"]]
- 005b6e80 ["INT_ADD", "register:40f0:8", ["const:5b6e80:8", "const:4:8"]]
- 005b6e80 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b7230 ["INT_ADD", "register:40f0:8", ["const:5b7230:8", "const:4:8"]]
+ 005b7230 ["CALL", null, ["callee:00c54d90:8"]]
- 005b6e50 ["INT_NOTEQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 005b6e50 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 005b7200 ["INT_NOTEQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 005b7200 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-2aadf37871061712b51dc1ed5e0a1b9b"></a>

### [`005b6ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6ebc.md) → [`005b726c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b726c.md) FUN_005b726c

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
      "unmatched:005b6ee0",
      "DATA",
      [
        "storage",
        "00c70510",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b6ee4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6ee8",
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
      "005b7290",
      "DATA",
      [
        "storage",
        "00c714e0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b7294",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b7298",
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
- 005b6ed0 ["INT_ADD", "register:40f0:8", ["const:5b6ed0:8", "const:4:8"]]
- 005b6ed0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b7280 ["INT_ADD", "register:40f0:8", ["const:5b7280:8", "const:4:8"]]
+ 005b7280 ["CALL", null, ["callee:00c58f30:8"]]
- 005b6ed8 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b7288 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6edc ["COPY", "tmp:0:8", ["const:510:8"]]
- 005b6edc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6edc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6edc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d17d3b074ab14773a17e35242cc549c1"></a>

### [`005b6ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6ef0.md) → [`005b72a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b72a0.md) FUN_005b72a0

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
      "definition_site": "005b72ac",
      "incomplete_value": false,
      "site": "005b72ac",
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
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6efc",
      "incomplete_value": false,
      "site": "005b6efc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:510:8"
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
      "005b72ac",
      "DATA",
      [
        "storage",
        "00c70510",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b72ac",
      "DATA",
      [
        "storage",
        "00c714e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6ef4 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b72a4 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b6ef8 ["COPY", "tmp:0:8", ["const:510:8"]]
- 005b6ef8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b6ef8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b6ef8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b72a8 ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 005b72a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b72a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b72a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d7002f3472d82da8beafb4bf8c88dfb8"></a>

### [`005b7008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7008.md) → [`005b73b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b73b8.md) FUN_005b73b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b73c8",
      "incomplete_value": false,
      "site": "005b73cc",
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
      "unmatched:005b702c",
      "DATA",
      [
        "storage",
        "00c70590",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b7030",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7034",
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
      "005b73dc",
      "DATA",
      [
        "storage",
        "00c71560",
        null,
        "undefined *"
      ]
    ],
    [
      "005b73e0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b73e4",
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
- 005b701c ["INT_ADD", "register:40f0:8", ["const:5b701c:8", "const:4:8"]]
- 005b701c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b73cc ["INT_ADD", "register:40f0:8", ["const:5b73cc:8", "const:4:8"]]
+ 005b73cc ["CALL", null, ["callee:00c58f30:8"]]
- 005b7024 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b73d4 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b7028 ["COPY", "tmp:0:8", ["const:590:8"]]
- 005b7028 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b7028 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b7028 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c7e4f908f45d1f5cc9079076e6866551"></a>

### [`005b703c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b703c.md) → [`005b73ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b73ec.md) FUN_005b73ec

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
      "unmatched:005b7048",
      "DATA",
      [
        "storage",
        "00c70590",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b73f8",
      "DATA",
      [
        "storage",
        "00c71560",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b703c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005b703c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005b7040 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b7044 ["COPY", "tmp:0:8", ["const:590:8"]]
- 005b7044 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b7044 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b7044 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-98a765778b027c7539c8a3df84194622"></a>

### [`005b7058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7058.md) → [`005b7408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7408.md) FUN_005b7408

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b7070",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7098",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7434"
      ]
    ]
  ],
  "added": [
    [
      "005b7420",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "005b7448",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7434"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7070 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 005b7070 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 005b707c ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 005b707c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 005b742c ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 005b742c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 005b7098 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 005b7098 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-7c29273adf4064099fa0e4df48d83c3a"></a>

### [`005b7134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7134.md) → [`005b74e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b74e4.md) FUN_005b74e4

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
      "unmatched:005b7158",
      "DATA",
      [
        "storage",
        "00c70610",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b715c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7160",
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
      "005b7508",
      "DATA",
      [
        "storage",
        "00c715e0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b750c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b7510",
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
- 005b7148 ["INT_ADD", "register:40f0:8", ["const:5b7148:8", "const:4:8"]]
- 005b7148 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b74f8 ["INT_ADD", "register:40f0:8", ["const:5b74f8:8", "const:4:8"]]
+ 005b74f8 ["CALL", null, ["callee:00c58f30:8"]]
- 005b7150 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b7500 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b7154 ["COPY", "tmp:0:8", ["const:610:8"]]
- 005b7154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b7154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b7154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-55e40d97110027e9cba5e2908ba42df2"></a>

### [`005b7168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7168.md) → [`005b7518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7518.md) FUN_005b7518

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
      "unmatched:005b7174",
      "DATA",
      [
        "storage",
        "00c70610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b7524",
      "DATA",
      [
        "storage",
        "00c715e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7168 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005b7168 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005b716c ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b7170 ["COPY", "tmp:0:8", ["const:610:8"]]
- 005b7170 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b7170 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b7170 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7a7381321f83cb82d2420d8f131300d9"></a>

### [`005b71c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b71c4.md) → [`005b7574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7574.md) FUN_005b7574

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b3bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3bb4.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`005b3f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3f64.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 63.64% / 新版 63.64%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b7278",
      "incomplete_value": true,
      "site": "005b7280",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b763c",
      "incomplete_value": false,
      "site": "005b7640",
      "value": [
        "leaf",
        "const:1:8"
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
      "definition_site": "005b7638",
      "incomplete_value": true,
      "site": "005b7640",
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
      "unmatched:005b71f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b71f4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:005b7204",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b75a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005b75a4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "005b75b4",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7280 ["INT_ADD", "register:40f0:8", ["const:5b7280:8", "const:4:8"]]
- 005b7280 ["CALL", null, ["callee:00c58f20:8"]]
+ 005b7630 ["INT_ADD", "register:40f0:8", ["const:5b7630:8", "const:4:8"]]
+ 005b7630 ["CALL", null, ["callee:00c58f20:8"]]
- 005b7290 ["INT_ADD", "register:40f0:8", ["const:5b7290:8", "const:4:8"]]
- 005b7290 ["CALL", null, ["callee:00c54d60:8"]]
+ 005b7640 ["INT_ADD", "register:40f0:8", ["const:5b7640:8", "const:4:8"]]
+ 005b7640 ["CALL", null, ["callee:00c54d60:8"]]
- 005b729c ["INT_ADD", "register:40f0:8", ["const:5b729c:8", "const:4:8"]]
- 005b729c ["CALL", null, ["callee:00c54d60:8"]]
+ 005b764c ["INT_ADD", "register:40f0:8", ["const:5b764c:8", "const:4:8"]]
+ 005b764c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-1d0f94e05f3755108e92d9f21e8273e5"></a>

### [`005b733c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b733c.md) → [`005b76ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b76ec.md) FUN_005b76ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b7344",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005b7348",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f40"
      ]
    ]
  ],
  "added": [
    [
      "005b76f4",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "005b76f8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f40"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b733c ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b7340 ["COPY", "tmp:0:8", ["const:690:8"]]
- 005b7340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b7340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b7340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b7344 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 005b7344 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-49b647a5dca689d17e2f6b92f7cec8c3"></a>

### [`005b734c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b734c.md) → [`005b76fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b76fc.md) FUN_005b76fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b7364",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b7714",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7358 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b7708 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b735c ["COPY", "tmp:0:8", ["const:690:8"]]
- 005b735c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b735c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b735c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b7360 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-39ef2806d1eecca0c7a329bd350d2d3f"></a>

### [`005b738c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b738c.md) → [`005b773c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b773c.md) FUN_005b773c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b73a4",
      "DATA",
      [
        "storage",
        "00c706e0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b73a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7768"
      ]
    ]
  ],
  "added": [
    [
      "005b7754",
      "DATA",
      [
        "storage",
        "00c716b0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b7758",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7768"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b738c ["COPY", "register:4040:8", ["register:4000:8"]]
- 005b7390 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 005b7390 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 005b7394 ["COPY", "register:4050:8", ["const:c70000:8"]]
~~~


<a id="compare-e8854763db0090e340af960b28f6f050"></a>

### [`005b73d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b73d0.md) → [`005b7780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7780.md) FUN_005b7780

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b7798",
      "incomplete_value": false,
      "site": "005b77a4",
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
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b73e8",
      "incomplete_value": false,
      "site": "005b73f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "005b77a4",
      "DATA",
      [
        "storage",
        "00c706e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b77a4",
      "DATA",
      [
        "storage",
        "00c716b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b73e4 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b7794 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b73e8 ["COPY", "tmp:0:8", ["const:6e0:8"]]
- 005b73e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b73e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b73e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b7798 ["COPY", "tmp:0:8", ["const:6b0:8"]]
+ 005b7798 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b7798 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b7798 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b73fc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005b73fc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 005b77ac ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005b77ac ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-c1354709830f9e2cb85a151be7c13c9c"></a>

### [`005b742c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b742c.md) → [`005b77dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b77dc.md) FUN_005b77dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.17% / 新版 55.17%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b742c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7430",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7458",
      "DATA",
      [
        "storage",
        "00c706e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b77dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b77e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b7808",
      "DATA",
      [
        "storage",
        "00c716b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b742c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b742c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b742c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b742c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b7430 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005b7430 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005b7430 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005b7430 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005b7434 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-ee9cdc033393634b7724f6dfb74f500a"></a>

### [`005b74b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b74b4.md) → [`005b7864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7864.md) FUN_005b7864

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.07% / 新版 62.07%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b74b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b74b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b74d0",
      "DATA",
      [
        "storage",
        "00c706e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b7864",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b7868",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b7880",
      "DATA",
      [
        "storage",
        "00c716b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b74b4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b74b4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b74b4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b74b4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b74b8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b74b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b74bc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-dcf822ff020bdea6f6c2b8fc2cab2d1a"></a>

### [`005b75b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b75b0.md) → [`005b7960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7960.md) FUN_005b7960

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0059da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059da88.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0059dda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059d/0059dda8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.14% / 新版 77.14%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b75b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b75b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b75bc",
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
      "005b7964",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b7968",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b796c",
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
- 005b75b0 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 005b75b4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b75b4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b75b4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 005b75b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005b75b8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005b75b8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005b75b8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005b75b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-252ebe2fbfdf1db6cb92ac0ca6c1ece3"></a>

### [`005b7724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7724.md) → [`005b7ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7ad4.md) FUN_005b7ad4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b7734",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7af8"
      ]
    ]
  ],
  "added": [
    [
      "005b7ae4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7af8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7734 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 005b7734 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 005b7740 ["INT_ADD", "register:40f0:8", ["const:5b7740:8", "const:4:8"]]
- 005b7740 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b7af0 ["INT_ADD", "register:40f0:8", ["const:5b7af0:8", "const:4:8"]]
+ 005b7af0 ["CALL", null, ["callee:00c54d90:8"]]
- 005b7744 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005b7744 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 005b7af4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005b7af4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-3df94bb10a17571a24149eca685b7efd"></a>

### [`005b7774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7774.md) → [`005b7b24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7b24.md) FUN_005b7b24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005b1e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1e64.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b2214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2214.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b7b64",
      "incomplete_value": false,
      "site": "005b7b68",
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
                "const:c6e000:8"
              ],
              [
                "leaf",
                "const:ab0:8"
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
      "definition_site": "005b77b4",
      "incomplete_value": false,
      "site": "005b77b8",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "005b7b68",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b7b68",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7794 ["INT_ADD", "register:40f0:8", ["const:5b7794:8", "const:4:8"]]
- 005b7794 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b7b44 ["INT_ADD", "register:40f0:8", ["const:5b7b44:8", "const:4:8"]]
+ 005b7b44 ["CALL", null, ["callee:00c58f50:8"]]
- 005b77a4 ["INT_ADD", "register:40f0:8", ["const:5b77a4:8", "const:4:8"]]
- 005b77a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b7b54 ["INT_ADD", "register:40f0:8", ["const:5b7b54:8", "const:4:8"]]
+ 005b7b54 ["CALL", null, ["callee:00c58f50:8"]]
- 005b77a8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005b7b58 ["COPY", "register:4040:8", ["const:c6e000:8"]]
~~~


<a id="compare-daeb8a2f7bc1689526cefa5f4c85bbb0"></a>

### [`005b77ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b77ec.md) → [`005b7b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7b9c.md) FUN_005b7b9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1e64.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`005b2214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2214.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b7bd4",
      "incomplete_value": false,
      "site": "005b7bdc",
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
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b7824",
      "incomplete_value": false,
      "site": "005b782c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:690:8"
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
      "005b7bdc",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "005b7c94",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b7bdc",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "005b7c94",
      "READ",
      [
        "storage",
        "00c71670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b781c ["INT_ADD", "register:40f0:8", ["const:5b781c:8", "const:4:8"]]
- 005b781c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b7bcc ["INT_ADD", "register:40f0:8", ["const:5b7bcc:8", "const:4:8"]]
+ 005b7bcc ["CALL", null, ["callee:00c58f30:8"]]
- 005b7820 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b7bd0 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b7824 ["COPY", "tmp:0:8", ["const:690:8"]]
- 005b7824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b7824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b7824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b7bd4 ["COPY", "tmp:0:8", ["const:660:8"]]
+ 005b7bd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b7bd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b7bd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f16132e6f0c4f29a777caaa2781a88b2"></a>

### [`005b7964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7964.md) → [`005b7d14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7d14.md) FUN_005b7d14

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
      "definition_site": "005b7d20",
      "incomplete_value": false,
      "site": "005b7d2c",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b7970",
      "incomplete_value": false,
      "site": "005b797c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
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
      "005b7d2c",
      "DATA",
      [
        "storage",
        "00c70770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b7d2c",
      "DATA",
      [
        "storage",
        "00c71740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b796c ["COPY", "register:4050:8", ["const:c70000:8"]]
+ 005b7d1c ["COPY", "register:4050:8", ["const:c71000:8"]]
- 005b7970 ["COPY", "tmp:0:8", ["const:770:8"]]
- 005b7970 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005b7970 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005b7970 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005b7d20 ["COPY", "tmp:0:8", ["const:740:8"]]
+ 005b7d20 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005b7d20 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005b7d20 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-d8ac12c5703a85d9e974b22e68c18c2f"></a>

### [`005b79a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b79a8.md) → [`005b7d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7d58.md) FUN_005b7d58

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
      "definition_site": "005b7d70",
      "incomplete_value": false,
      "site": "005b7d7c",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b79c0",
      "incomplete_value": false,
      "site": "005b79cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:770:8"
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
      "005b7d7c",
      "DATA",
      [
        "storage",
        "00c70770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b7d7c",
      "DATA",
      [
        "storage",
        "00c71740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b79bc ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b7d6c ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b79c0 ["COPY", "tmp:0:8", ["const:770:8"]]
- 005b79c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b79c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b79c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b7d70 ["COPY", "tmp:0:8", ["const:740:8"]]
+ 005b7d70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b7d70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b7d70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b79f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b79f0 ["INT_ADD", "register:40f0:8", ["const:5b79f0:8", "const:4:8"]]
- 005b79f0 ["CALLIND", null, ["register:0:8"]]
+ 005b7da0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b7da0 ["INT_ADD", "register:40f0:8", ["const:5b7da0:8", "const:4:8"]]
+ 005b7da0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7f3f0e523c70883d696e0277ceae5f39"></a>

### [`005b7a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7a04.md) → [`005b7db4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7db4.md) FUN_005b7db4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "005b7a68",
      "incomplete_value": true,
      "site": "005b7a74",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005b7a30",
      "DATA",
      [
        "storage",
        "00c70770",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b7a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7e00"
      ]
    ]
  ],
  "added": [
    [
      "005b7de0",
      "DATA",
      [
        "storage",
        "00c71740",
        null,
        "undefined *"
      ]
    ],
    [
      "005b7de4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7e00"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7a18 ["INT_ADD", "register:40f0:8", ["const:5b7a18:8", "const:4:8"]]
- 005b7a18 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b7dc8 ["INT_ADD", "register:40f0:8", ["const:5b7dc8:8", "const:4:8"]]
+ 005b7dc8 ["CALL", null, ["callee:00c58f30:8"]]
- 005b7a24 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b7dd4 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b7a28 ["COPY", "tmp:0:8", ["const:770:8"]]
- 005b7a28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b7a28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b7a28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7ba4504716b6c126700f84e2978c8863"></a>

### [`005b7a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7a8c.md) → [`005b7e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7e3c.md) FUN_005b7e3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 79.31% / 新版 79.31%

優先判定に残った影響 `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b7e58",
      "incomplete_value": false,
      "site": "005b7e58",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b7aa8",
      "incomplete_value": false,
      "site": "005b7aa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:770:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005b7ab8"
      ],
      [
        "FALL_THROUGH",
        "005b7e68"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b7e64",
      "incomplete_value": true,
      "site": "005b7e7c",
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b7acc",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005b7ab8"
      ],
      [
        "CONDITIONAL_JUMP",
        "005b7e68"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b7e64",
      "incomplete_value": true,
      "site": "005b7e94",
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b7ae4",
      "value": [
        "live",
        "register:101:1"
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
      "005b7e58",
      "DATA",
      [
        "storage",
        "00c70770",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b7ab8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7e94"
      ]
    ]
  ],
  "added": [
    [
      "005b7e58",
      "DATA",
      [
        "storage",
        "00c71740",
        null,
        "undefined *"
      ]
    ],
    [
      "005b7e68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7e94"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7aa0 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b7e50 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b7aa4 ["COPY", "tmp:0:8", ["const:770:8"]]
- 005b7aa4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b7aa4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b7aa4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b7e54 ["COPY", "tmp:0:8", ["const:740:8"]]
+ 005b7e54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b7e54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b7e54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005b7aac ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005b7aac ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005b7e5c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 005b7e5c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-efc813281dfcff2b69077588e9d8ab1f"></a>

### [`005b7b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7b38.md) → [`005b7ee8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7ee8.md) FUN_005b7ee8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b1e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1e64.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b2214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2214.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b7b54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7f14"
      ]
    ],
    [
      "unmatched:005b7b74",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005b7f04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b7f14"
      ]
    ],
    [
      "005b7f24",
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
- 005b7b4c ["COPY", "tmp:0:8", ["const:10:8"]]
- 005b7b4c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005b7b4c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005b7b4c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 005b7b50 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 005b7b50 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 005b7b50 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 005b7b50 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 005b7b54 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-dcb91e9e69db21d5348bf324e7c182fe"></a>

### [`005b7b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7b88.md) → [`005b7f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7f38.md) FUN_005b7f38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.02% / 新版 73.02%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b7bbc",
      "incomplete_value": false,
      "site": "005b7bc0",
      "value": [
        "leaf",
        "const:1:8"
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
      "definition_site": "005b7bb8",
      "incomplete_value": true,
      "site": "005b7bc0",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b7fd0",
      "incomplete_value": true,
      "site": "005b7fd8",
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
      "unmatched:005b7b8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7b90",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7b94",
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
      "005b7f3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b7f40",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b7f44",
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
- 005b7bc0 ["INT_ADD", "register:40f0:8", ["const:5b7bc0:8", "const:4:8"]]
- 005b7bc0 ["CALL", null, ["callee:00c54d60:8"]]
+ 005b7f70 ["INT_ADD", "register:40f0:8", ["const:5b7f70:8", "const:4:8"]]
+ 005b7f70 ["CALL", null, ["callee:00c54d60:8"]]
- 005b7c28 ["INT_ADD", "register:40f0:8", ["const:5b7c28:8", "const:4:8"]]
- 005b7c28 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b7fd8 ["INT_ADD", "register:40f0:8", ["const:5b7fd8:8", "const:4:8"]]
+ 005b7fd8 ["CALL", null, ["callee:00c54d90:8"]]
- 005b7b88 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
~~~


<a id="compare-9d8feda09dcc77cdf44e7f2a9ac407f9"></a>

### [`005b7d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7d38.md) → [`005b80e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b80e8.md) FUN_005b80e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b3638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3638.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`005b39e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b39e8.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 94.81% / 新版 94.81%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b8120",
      "incomplete_value": false,
      "site": "005b8128",
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
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b7d70",
      "incomplete_value": false,
      "site": "005b7d78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:690:8"
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
      "005b8128",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "005b81e0",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b7e34",
      "COMPUTED_CALL",
      [
        "mapped_function",
        "005b772c"
      ]
    ]
  ],
  "added": [
    [
      "005b8128",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "005b81e0",
      "READ",
      [
        "storage",
        "00c71670",
        null,
        "undefined *"
      ]
    ],
    [
      "005b81e4",
      "COMPUTED_CALL",
      [
        "mapped_function",
        "005b772c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7d68 ["INT_ADD", "register:40f0:8", ["const:5b7d68:8", "const:4:8"]]
- 005b7d68 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b8118 ["INT_ADD", "register:40f0:8", ["const:5b8118:8", "const:4:8"]]
+ 005b8118 ["CALL", null, ["callee:00c58f30:8"]]
- 005b7d6c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b811c ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b7d70 ["COPY", "tmp:0:8", ["const:690:8"]]
- 005b7d70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b7d70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b7d70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b8120 ["COPY", "tmp:0:8", ["const:660:8"]]
+ 005b8120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b8120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b8120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a11a2885f6adfe4534d6d4c30e0ce5db"></a>

### [`005b7eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7eb0.md) → [`005b8260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8260.md) FUN_005b8260

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b7ec8",
      "DATA",
      [
        "storage",
        "00c707f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b7ecc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b828c"
      ]
    ]
  ],
  "added": [
    [
      "005b8278",
      "DATA",
      [
        "storage",
        "00c717c0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b827c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b828c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7eb0 ["COPY", "register:4040:8", ["register:4000:8"]]
- 005b7eb4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 005b7eb4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 005b7eb8 ["COPY", "register:4050:8", ["const:c70000:8"]]
~~~


<a id="compare-67770160fdf2334e3c0f5d9f8756466d"></a>

### [`005b7ef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7ef4.md) → [`005b82a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b82a4.md) FUN_005b82a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 47.83% / 新版 47.83%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b7ef4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7ef8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7f18",
      "DATA",
      [
        "storage",
        "00c707f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b82a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b82a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b82c8",
      "DATA",
      [
        "storage",
        "00c717c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7ef4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b7ef4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b7ef4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b7ef4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b7ef8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b7ef8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b7efc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-5e8f54dc32806741ce0d7decaa26b69e"></a>

### [`005b7f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7f50.md) → [`005b8300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8300.md) FUN_005b8300

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.52% / 新版 65.52%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005b7f8c"
      ],
      [
        "CONDITIONAL_JUMP",
        "005b833c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b8338",
      "incomplete_value": true,
      "site": "005b8358",
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
                "register:4000:8"
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b7fa8",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:005b7f7c",
      "DATA",
      [
        "storage",
        "00c707f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b7f80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b834c"
      ]
    ],
    [
      "unmatched:005b7f8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8354"
      ]
    ]
  ],
  "added": [
    [
      "005b832c",
      "DATA",
      [
        "storage",
        "00c717c0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b8330",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b834c"
      ]
    ],
    [
      "005b833c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8354"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7f64 ["INT_ADD", "register:40f0:8", ["const:5b7f64:8", "const:4:8"]]
- 005b7f64 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b8314 ["INT_ADD", "register:40f0:8", ["const:5b8314:8", "const:4:8"]]
+ 005b8314 ["CALL", null, ["callee:00c58f30:8"]]
- 005b7f70 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b8320 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b7f74 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 005b7f74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b7f74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b7f74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d14f3bb5c2a2ee892f17c74402e3119c"></a>

### [`005b7fd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7fd8.md) → [`005b8388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8388.md) FUN_005b8388

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 72.41% / 新版 72.41%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b7fd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7fdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b7ff4",
      "DATA",
      [
        "storage",
        "00c707f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b8388",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b838c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b83a4",
      "DATA",
      [
        "storage",
        "00c717c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b7fd8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b7fd8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b7fd8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b7fd8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b7fdc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b7fdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b7fe0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-21deb835f70c6a06e96e234e3bffe5f0"></a>

### [`005b80d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b80d4.md) → [`005b8484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8484.md) FUN_005b8484

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 62.50% / 新版 62.50%

~~~diff
- 005b80d8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005b80d8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 005b8488 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005b8488 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005b80dc ["COPY", "tmp:0:8", ["register:4000:8"]]
- 005b80dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005b80e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:30:8"]]
- 005b80e0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-38d296f47b290e141e2b7b6de5f334cf"></a>

### [`005b811c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b811c.md) → [`005b84cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b84cc.md) FUN_005b84cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b279c.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`005b2b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2b4c.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.22% / 新版 79.22%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b81d0",
      "incomplete_value": true,
      "site": "005b81d8",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "005b81fc",
      "incomplete_value": false,
      "site": "005b8204",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b85cc",
      "incomplete_value": true,
      "site": "005b85d0",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005b815c",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005b8178",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b8184",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00598230"
      ]
    ]
  ],
  "added": [
    [
      "005b850c",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "005b8528",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005b8534",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00598230"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b81d8 ["INT_ADD", "register:40f0:8", ["const:5b81d8:8", "const:4:8"]]
- 005b81d8 ["CALL", null, ["callee:00c58f20:8"]]
+ 005b8588 ["INT_ADD", "register:40f0:8", ["const:5b8588:8", "const:4:8"]]
+ 005b8588 ["CALL", null, ["callee:00c58f20:8"]]
- 005b8204 ["INT_ADD", "register:40f0:8", ["const:5b8204:8", "const:4:8"]]
- 005b8204 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b85b4 ["INT_ADD", "register:40f0:8", ["const:5b85b4:8", "const:4:8"]]
+ 005b85b4 ["CALL", null, ["callee:00c54d90:8"]]
- 005b8220 ["INT_ADD", "register:40f0:8", ["const:5b8220:8", "const:4:8"]]
- 005b8220 ["CALL", null, ["callee:00c58f20:8"]]
+ 005b85d0 ["INT_ADD", "register:40f0:8", ["const:5b85d0:8", "const:4:8"]]
+ 005b85d0 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-785497f8dacc8eb70d6cc295c5249cf5"></a>

### [`005b8294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8294.md) → [`005b8644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8644.md) FUN_005b8644

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b82ac",
      "DATA",
      [
        "storage",
        "00c70870",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b82b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8670"
      ]
    ]
  ],
  "added": [
    [
      "005b865c",
      "DATA",
      [
        "storage",
        "00c71840",
        null,
        "undefined *"
      ]
    ],
    [
      "005b8660",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8670"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8294 ["COPY", "register:4040:8", ["register:4000:8"]]
- 005b8298 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 005b8298 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 005b829c ["COPY", "register:4050:8", ["const:c70000:8"]]
~~~


<a id="compare-76789f79cf1b64076be906dcc38032c7"></a>

### [`005b82d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b82d8.md) → [`005b8688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8688.md) FUN_005b8688

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 47.83% / 新版 47.83%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b82d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b82dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b82fc",
      "DATA",
      [
        "storage",
        "00c70870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b8688",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b868c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b86ac",
      "DATA",
      [
        "storage",
        "00c71840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b82d8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b82d8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b82d8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b82d8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b82dc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b82dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b82e0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-eabac95c6748b8390455816806ada5f7"></a>

### [`005b8334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8334.md) → [`005b86e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b86e4.md) FUN_005b86e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.52% / 新版 65.52%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005b8370"
      ],
      [
        "CONDITIONAL_JUMP",
        "005b8720"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b871c",
      "incomplete_value": true,
      "site": "005b873c",
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
                "register:4000:8"
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b838c",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:005b8360",
      "DATA",
      [
        "storage",
        "00c70870",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b8364",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8730"
      ]
    ],
    [
      "unmatched:005b8370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8738"
      ]
    ]
  ],
  "added": [
    [
      "005b8710",
      "DATA",
      [
        "storage",
        "00c71840",
        null,
        "undefined *"
      ]
    ],
    [
      "005b8714",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8730"
      ]
    ],
    [
      "005b8720",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8738"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8348 ["INT_ADD", "register:40f0:8", ["const:5b8348:8", "const:4:8"]]
- 005b8348 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b86f8 ["INT_ADD", "register:40f0:8", ["const:5b86f8:8", "const:4:8"]]
+ 005b86f8 ["CALL", null, ["callee:00c58f30:8"]]
- 005b8354 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b8704 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b8358 ["COPY", "tmp:0:8", ["const:870:8"]]
- 005b8358 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b8358 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b8358 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b70eaa53b6e11beae6dba7278319a533"></a>

### [`005b83bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b83bc.md) → [`005b876c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b876c.md) FUN_005b876c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 62.07% / 新版 62.07%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005b83e8"
      ],
      [
        "FALL_THROUGH",
        "005b8798"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b8794",
      "incomplete_value": true,
      "site": "005b87ac",
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
                "register:4048:8"
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
      "site": "005b83fc",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005b83e8"
      ],
      [
        "CONDITIONAL_JUMP",
        "005b8798"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b8794",
      "incomplete_value": true,
      "site": "005b87c4",
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
                "register:4048:8"
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
      "site": "005b8414",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:005b83d8",
      "DATA",
      [
        "storage",
        "00c70870",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b83dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b87b4"
      ]
    ],
    [
      "unmatched:005b83e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b87c4"
      ]
    ]
  ],
  "added": [
    [
      "005b8788",
      "DATA",
      [
        "storage",
        "00c71840",
        null,
        "undefined *"
      ]
    ],
    [
      "005b878c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b87b4"
      ]
    ],
    [
      "005b8798",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b87c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b83d0 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b8780 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b83d4 ["COPY", "tmp:0:8", ["const:870:8"]]
- 005b83d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b83d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b83d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005b83d8 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 005b83d8 ["COPY", "tmp:1:8", ["register:4008:8"]]
- 005b83d8 ["INT_ADD", "register:4008:8", ["register:4008:8", "const:10:8"]]
- 005b83d8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-98f66d87bf85338a36891f44567b6fd4"></a>

### [`005b8468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8468.md) → [`005b8818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8818.md) FUN_005b8818

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b279c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b2b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2b4c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b8484",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8844"
      ]
    ]
  ],
  "added": [
    [
      "005b8834",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8844"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b847c ["COPY", "tmp:0:8", ["const:10:8"]]
- 005b847c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005b847c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005b847c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 005b8480 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 005b8480 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 005b8480 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 005b8480 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 005b8484 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-c5d167e8705fd989e8265c9315e10127"></a>

### [`005b84b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b84b8.md) → [`005b8868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8868.md) FUN_005b8868

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005b84bc"
      ],
      [
        "CONDITIONAL_JUMP",
        "005b886c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b886c",
      "incomplete_value": true,
      "site": "005b887c",
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
      "definition_site": "005b84bc",
      "incomplete_value": true,
      "site": "005b84cc",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005b84bc"
      ],
      [
        "CONDITIONAL_JUMP",
        "005b886c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b886c",
      "incomplete_value": true,
      "site": "005b887c",
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
      "definition_site": "005b84bc",
      "incomplete_value": true,
      "site": "005b84cc",
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
      "unmatched:005b84bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b887c"
      ]
    ],
    [
      "unmatched:005b84d4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0045a0d4"
      ]
    ]
  ],
  "added": [
    [
      "005b886c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b887c"
      ]
    ],
    [
      "005b8884",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0045a0d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b84b8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 005b84b8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 005b84bc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005b84bc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005b84d0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-bb2ebf28e87ff7859128ac8d020094a0"></a>

### [`005b8500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8500.md) → [`005b88b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b88b0.md) FUN_005b88b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b4060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4060.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`005b4410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4410.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b8914",
      "incomplete_value": true,
      "site": "005b8918",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": {
      "definition_site": "005b8564",
      "incomplete_value": true,
      "site": "005b8568",
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
            "const:20:8"
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
      "definition_site": "005b8560",
      "incomplete_value": true,
      "site": "005b8568",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b8964",
      "incomplete_value": true,
      "site": "005b896c",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:005b8504",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b8508",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b850c",
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
      "005b88b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005b88b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b88bc",
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
- 005b8568 ["INT_ADD", "register:40f0:8", ["const:5b8568:8", "const:4:8"]]
- 005b8568 ["CALL", null, ["callee:00598230:8"]]
+ 005b8918 ["INT_ADD", "register:40f0:8", ["const:5b8918:8", "const:4:8"]]
+ 005b8918 ["CALL", null, ["callee:00598230:8"]]
- 005b85bc ["INT_ADD", "register:40f0:8", ["const:5b85bc:8", "const:4:8"]]
- 005b85bc ["CALL", null, ["callee:00c58f20:8"]]
+ 005b896c ["INT_ADD", "register:40f0:8", ["const:5b896c:8", "const:4:8"]]
+ 005b896c ["CALL", null, ["callee:00c58f20:8"]]
- 005b85cc ["INT_ADD", "register:40f0:8", ["const:5b85cc:8", "const:4:8"]]
- 005b85cc ["CALL", null, ["callee:00c54d60:8"]]
+ 005b897c ["INT_ADD", "register:40f0:8", ["const:5b897c:8", "const:4:8"]]
+ 005b897c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-2a015e2a908257f02b2ac87b1fbdda94"></a>

### [`005b8678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8678.md) → [`005b8a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8a28.md) FUN_005b8a28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b8690",
      "DATA",
      [
        "storage",
        "00c708f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b8694",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8a54"
      ]
    ]
  ],
  "added": [
    [
      "005b8a40",
      "DATA",
      [
        "storage",
        "00c718c0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b8a44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8a54"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8678 ["COPY", "register:4040:8", ["register:4000:8"]]
- 005b867c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 005b867c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 005b8680 ["COPY", "register:4050:8", ["const:c70000:8"]]
~~~


<a id="compare-2f3cb6e1729c05b8076af792c48a82d2"></a>

### [`005b86bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b86bc.md) → [`005b8a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8a6c.md) FUN_005b8a6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 56.52% / 新版 56.52%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b86bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b86c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b86e0",
      "DATA",
      [
        "storage",
        "00c708f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b8a6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b8a70",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b8a90",
      "DATA",
      [
        "storage",
        "00c718c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b86bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b86bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b86bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b86bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b86c0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b86c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b86c4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-72fb4182b19f7d2543a7e8b58beec2e5"></a>

### [`005b8718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8718.md) → [`005b8ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8ac8.md) FUN_005b8ac8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.97% / 新版 68.97%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005b8754"
      ],
      [
        "CONDITIONAL_JUMP",
        "005b8b04"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b8b00",
      "incomplete_value": true,
      "site": "005b8b20",
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
                "register:4000:8"
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b8770",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:005b8744",
      "DATA",
      [
        "storage",
        "00c708f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b8748",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8b14"
      ]
    ],
    [
      "unmatched:005b8754",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8b1c"
      ]
    ]
  ],
  "added": [
    [
      "005b8af4",
      "DATA",
      [
        "storage",
        "00c718c0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b8af8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8b14"
      ]
    ],
    [
      "005b8b04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8b1c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b872c ["INT_ADD", "register:40f0:8", ["const:5b872c:8", "const:4:8"]]
- 005b872c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b8adc ["INT_ADD", "register:40f0:8", ["const:5b8adc:8", "const:4:8"]]
+ 005b8adc ["CALL", null, ["callee:00c58f30:8"]]
- 005b8738 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b8ae8 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b873c ["COPY", "tmp:0:8", ["const:8f0:8"]]
- 005b873c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b873c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b873c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6357e22aad76fd92fb31fbf6150181a0"></a>

### [`005b87a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b87a0.md) → [`005b8b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8b50.md) FUN_005b8b50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 75.86% / 新版 75.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b8b6c",
      "incomplete_value": false,
      "site": "005b8b6c",
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
            "const:8c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b87bc",
      "incomplete_value": false,
      "site": "005b87bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:8f0:8"
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
      "005b8b6c",
      "DATA",
      [
        "storage",
        "00c708f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b8808",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b880c",
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
      "005b8b6c",
      "DATA",
      [
        "storage",
        "00c718c0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b8bb8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b8bbc",
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
- 005b87b4 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b8b64 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b87b8 ["COPY", "tmp:0:8", ["const:8f0:8"]]
- 005b87b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b87b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b87b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b8b68 ["COPY", "tmp:0:8", ["const:8c0:8"]]
+ 005b8b68 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b8b68 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b8b68 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005b87dc ["COPY", "register:0:8", ["register:4048:8"]]
- 005b87dc ["INT_ADD", "register:40f0:8", ["const:5b87dc:8", "const:4:8"]]
- 005b87dc ["CALLIND", null, ["register:0:8"]]
+ 005b8b8c ["COPY", "register:0:8", ["register:4048:8"]]
+ 005b8b8c ["INT_ADD", "register:40f0:8", ["const:5b8b8c:8", "const:4:8"]]
+ 005b8b8c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5a029d70e184b075be5f51214b5479b9"></a>

### [`005b889c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b889c.md) → [`005b8c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8c4c.md) FUN_005b8c4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.94% / 新版 94.94%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b88d0",
      "incomplete_value": false,
      "site": "005b88d4",
      "value": [
        "leaf",
        "const:1:8"
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
      "definition_site": "005b88cc",
      "incomplete_value": true,
      "site": "005b88d4",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b8cd8",
      "incomplete_value": true,
      "site": "005b8ce0",
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
      "unmatched:005b88bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b88c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b894c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005b8c6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005b8c74",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005b8cfc",
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
- 005b88d4 ["INT_ADD", "register:40f0:8", ["const:5b88d4:8", "const:4:8"]]
- 005b88d4 ["CALL", null, ["callee:00c54d60:8"]]
+ 005b8c84 ["INT_ADD", "register:40f0:8", ["const:5b8c84:8", "const:4:8"]]
+ 005b8c84 ["CALL", null, ["callee:00c54d60:8"]]
- 005b8930 ["INT_ADD", "register:40f0:8", ["const:5b8930:8", "const:4:8"]]
- 005b8930 ["CALL", null, ["callee:0043be80:8"]]
+ 005b8ce0 ["INT_ADD", "register:40f0:8", ["const:5b8ce0:8", "const:4:8"]]
+ 005b8ce0 ["CALL", null, ["callee:0043be80:8"]]
- 005b88bc ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005b88bc ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 005b88bc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-26a224314506c04757ab9fdf576db598"></a>

### [`005b8aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8aa4.md) → [`005b8e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8e54.md) FUN_005b8e54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b45d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b45d0.md) · 呼出先 7件 [`005aca50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca50.md) [`005b8c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8c5c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`005b4980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4980.md) · 呼出先 7件 [`005ace00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ace00.md) [`005b900c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b900c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.21% / 新版 92.21%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b8f54",
      "incomplete_value": true,
      "site": "005b8f58",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005b8ae4",
      "DATA",
      [
        "storage",
        "00c70970",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005b8b00",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b8b18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8ed8"
      ]
    ]
  ],
  "added": [
    [
      "005b8e94",
      "DATA",
      [
        "storage",
        "00c71940",
        null,
        "pointer"
      ]
    ],
    [
      "005b8eb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005b8ec8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b8ed8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8ba8 ["INT_ADD", "register:40f0:8", ["const:5b8ba8:8", "const:4:8"]]
- 005b8ba8 ["CALL", null, ["callee:00c58f20:8"]]
+ 005b8f58 ["INT_ADD", "register:40f0:8", ["const:5b8f58:8", "const:4:8"]]
+ 005b8f58 ["CALL", null, ["callee:00c58f20:8"]]
- 005b8ad4 ["INT_ADD", "register:40f0:8", ["const:5b8ad4:8", "const:4:8"]]
- 005b8ad4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b8e84 ["INT_ADD", "register:40f0:8", ["const:5b8e84:8", "const:4:8"]]
+ 005b8e84 ["CALL", null, ["callee:00c58f30:8"]]
- 005b8ad8 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b8e88 ["COPY", "register:4040:8", ["const:c71000:8"]]
~~~


<a id="compare-66c87e0082944376eb5cf9306438ead2"></a>

### [`005b8c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8c1c.md) → [`005b8fcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8fcc.md) FUN_005b8fcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b8fd0",
      "incomplete_value": false,
      "site": "005b8fd4",
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
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b8c20",
      "incomplete_value": false,
      "site": "005b8c24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:970:8"
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
      "005b8fd4",
      "DATA",
      [
        "storage",
        "00c70970",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b8fd4",
      "DATA",
      [
        "storage",
        "00c71940",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8c1c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b8fcc ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b8c20 ["COPY", "tmp:0:8", ["const:970:8"]]
- 005b8c20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b8c20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b8c20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b8fd0 ["COPY", "tmp:0:8", ["const:940:8"]]
+ 005b8fd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b8fd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b8fd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d7282aaaeff84deca241c8a792cb0a96"></a>

### [`005b8c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8c2c.md) → [`005b8fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8fdc.md) FUN_005b8fdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b8fec",
      "incomplete_value": false,
      "site": "005b8ff4",
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
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b8c3c",
      "incomplete_value": false,
      "site": "005b8c44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:970:8"
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
      "005b8ff4",
      "DATA",
      [
        "storage",
        "00c70970",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b8ff4",
      "DATA",
      [
        "storage",
        "00c71940",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8c38 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b8fe8 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b8c3c ["COPY", "tmp:0:8", ["const:970:8"]]
- 005b8c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b8c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b8c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b8fec ["COPY", "tmp:0:8", ["const:940:8"]]
+ 005b8fec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b8fec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b8fec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b8c48 ["INT_ADD", "register:40f0:8", ["const:5b8c48:8", "const:4:8"]]
- 005b8c48 ["CALL", null, ["callee:00c58f40:8"]]
+ 005b8ff8 ["INT_ADD", "register:40f0:8", ["const:5b8ff8:8", "const:4:8"]]
+ 005b8ff8 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-c82fea727cf87859cfc827553f2395a5"></a>

### [`005b8c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8c6c.md) → [`005b901c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b901c.md) FUN_005b901c

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
      "definition_site": "005b9028",
      "incomplete_value": false,
      "site": "005b9034",
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
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b8c78",
      "incomplete_value": false,
      "site": "005b8c84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:9c0:8"
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
      "005b9034",
      "DATA",
      [
        "storage",
        "00c709c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b9034",
      "DATA",
      [
        "storage",
        "00c71990",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8c74 ["COPY", "register:4050:8", ["const:c70000:8"]]
+ 005b9024 ["COPY", "register:4050:8", ["const:c71000:8"]]
- 005b8c78 ["COPY", "tmp:0:8", ["const:9c0:8"]]
- 005b8c78 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005b8c78 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005b8c78 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005b9028 ["COPY", "tmp:0:8", ["const:990:8"]]
+ 005b9028 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9028 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9028 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-471afe6ff83b9c5eff8420ce70c5becf"></a>

### [`005b8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8cb0.md) → [`005b9060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9060.md) FUN_005b9060

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
      "definition_site": "005b9078",
      "incomplete_value": false,
      "site": "005b9084",
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
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b8cc8",
      "incomplete_value": false,
      "site": "005b8cd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:9c0:8"
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
      "005b9084",
      "DATA",
      [
        "storage",
        "00c709c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b9084",
      "DATA",
      [
        "storage",
        "00c71990",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8cc4 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b9074 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b8cc8 ["COPY", "tmp:0:8", ["const:9c0:8"]]
- 005b8cc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b8cc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b8cc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b9078 ["COPY", "tmp:0:8", ["const:990:8"]]
+ 005b9078 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b9078 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b9078 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b8cf8 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b8cf8 ["INT_ADD", "register:40f0:8", ["const:5b8cf8:8", "const:4:8"]]
- 005b8cf8 ["CALLIND", null, ["register:0:8"]]
+ 005b90a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b90a8 ["INT_ADD", "register:40f0:8", ["const:5b90a8:8", "const:4:8"]]
+ 005b90a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b400522dc4f74d25014e86337d4e7409"></a>

### [`005b8d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8d0c.md) → [`005b90bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b90bc.md) FUN_005b90bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b90e8",
      "incomplete_value": false,
      "site": "005b90e8",
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
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b8d38",
      "incomplete_value": false,
      "site": "005b8d38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:9c0:8"
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
      "005b90e8",
      "DATA",
      [
        "storage",
        "00c709c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b90e8",
      "DATA",
      [
        "storage",
        "00c71990",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8d20 ["INT_ADD", "register:40f0:8", ["const:5b8d20:8", "const:4:8"]]
- 005b8d20 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b90d0 ["INT_ADD", "register:40f0:8", ["const:5b90d0:8", "const:4:8"]]
+ 005b90d0 ["CALL", null, ["callee:00c58f30:8"]]
- 005b8d2c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b90dc ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b8d30 ["COPY", "tmp:0:8", ["const:9c0:8"]]
- 005b8d30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b8d30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b8d30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b90e0 ["COPY", "tmp:0:8", ["const:990:8"]]
+ 005b90e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b90e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b90e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bfed0c60624ef66e13284bbd9818d505"></a>

### [`005b8d94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8d94.md) → [`005b9144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9144.md) FUN_005b9144

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b9160",
      "incomplete_value": false,
      "site": "005b9160",
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
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b8db0",
      "incomplete_value": false,
      "site": "005b8db0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:9c0:8"
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
      "005b9160",
      "DATA",
      [
        "storage",
        "00c709c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b9160",
      "DATA",
      [
        "storage",
        "00c71990",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b8da8 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b9158 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b8dac ["COPY", "tmp:0:8", ["const:9c0:8"]]
- 005b8dac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b8dac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b8dac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b915c ["COPY", "tmp:0:8", ["const:990:8"]]
+ 005b915c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b915c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b915c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005b8dd0 ["COPY", "register:0:8", ["register:4048:8"]]
- 005b8dd0 ["INT_ADD", "register:40f0:8", ["const:5b8dd0:8", "const:4:8"]]
- 005b8dd0 ["CALLIND", null, ["register:0:8"]]
+ 005b9180 ["COPY", "register:0:8", ["register:4048:8"]]
+ 005b9180 ["INT_ADD", "register:40f0:8", ["const:5b9180:8", "const:4:8"]]
+ 005b9180 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4a4968bd6f0b4db7b711e9208a4a8e3e"></a>

### [`005b8ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8ff4.md) → [`005b93a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b93a4.md) FUN_005b93a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b4ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4ad8.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`005b4e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4e88.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b93dc",
      "incomplete_value": false,
      "site": "005b93e4",
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
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b902c",
      "incomplete_value": false,
      "site": "005b9034",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:690:8"
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
      "005b93e4",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "005b949c",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b93e4",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "005b949c",
      "READ",
      [
        "storage",
        "00c71670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b9024 ["INT_ADD", "register:40f0:8", ["const:5b9024:8", "const:4:8"]]
- 005b9024 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b93d4 ["INT_ADD", "register:40f0:8", ["const:5b93d4:8", "const:4:8"]]
+ 005b93d4 ["CALL", null, ["callee:00c58f30:8"]]
- 005b9028 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b93d8 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b902c ["COPY", "tmp:0:8", ["const:690:8"]]
- 005b902c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b902c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b902c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b93dc ["COPY", "tmp:0:8", ["const:660:8"]]
+ 005b93dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b93dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b93dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ffadb1b4147b33d659d13d4a95493529"></a>

### [`005b916c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b916c.md) → [`005b951c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b951c.md) FUN_005b951c

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
      "definition_site": "005b9528",
      "incomplete_value": false,
      "site": "005b9534",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b9178",
      "incomplete_value": false,
      "site": "005b9184",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:a40:8"
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
      "005b9534",
      "DATA",
      [
        "storage",
        "00c70a40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b9534",
      "DATA",
      [
        "storage",
        "00c71a10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b9174 ["COPY", "register:4050:8", ["const:c70000:8"]]
+ 005b9524 ["COPY", "register:4050:8", ["const:c71000:8"]]
- 005b9178 ["COPY", "tmp:0:8", ["const:a40:8"]]
- 005b9178 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005b9178 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005b9178 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005b9528 ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 005b9528 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9528 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9528 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-9805ac0f2bb92c164ba8cce176731746"></a>

### [`005b91b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b91b0.md) → [`005b9560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9560.md) FUN_005b9560

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
      "definition_site": "005b9578",
      "incomplete_value": false,
      "site": "005b9584",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b91c8",
      "incomplete_value": false,
      "site": "005b91d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:a40:8"
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
      "005b9584",
      "DATA",
      [
        "storage",
        "00c70a40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b9584",
      "DATA",
      [
        "storage",
        "00c71a10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b91c4 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b9574 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b91c8 ["COPY", "tmp:0:8", ["const:a40:8"]]
- 005b91c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b91c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b91c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b9578 ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 005b9578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b9578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b9578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b91f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b91f8 ["INT_ADD", "register:40f0:8", ["const:5b91f8:8", "const:4:8"]]
- 005b91f8 ["CALLIND", null, ["register:0:8"]]
+ 005b95a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b95a8 ["INT_ADD", "register:40f0:8", ["const:5b95a8:8", "const:4:8"]]
+ 005b95a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-138ca8e6783350d6ad323313011c9bb6"></a>

### [`005b920c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b920c.md) → [`005b95bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b95bc.md) FUN_005b95bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b95e8",
      "incomplete_value": false,
      "site": "005b95e8",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b9238",
      "incomplete_value": false,
      "site": "005b9238",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:a40:8"
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
      "005b95e8",
      "DATA",
      [
        "storage",
        "00c70a40",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b9254",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005b95e8",
      "DATA",
      [
        "storage",
        "00c71a10",
        null,
        "undefined *"
      ]
    ],
    [
      "005b9604",
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
- 005b9220 ["INT_ADD", "register:40f0:8", ["const:5b9220:8", "const:4:8"]]
- 005b9220 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b95d0 ["INT_ADD", "register:40f0:8", ["const:5b95d0:8", "const:4:8"]]
+ 005b95d0 ["CALL", null, ["callee:00c58f30:8"]]
- 005b922c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b95dc ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b9230 ["COPY", "tmp:0:8", ["const:a40:8"]]
- 005b9230 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b9230 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b9230 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b95e0 ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 005b95e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b95e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b95e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0c3eafa0746b4e37cd5bfe6e97df18ad"></a>

### [`005b9294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9294.md) → [`005b9644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9644.md) FUN_005b9644

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b9660",
      "incomplete_value": false,
      "site": "005b9660",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b92b0",
      "incomplete_value": false,
      "site": "005b92b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:a40:8"
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
      "005b9660",
      "DATA",
      [
        "storage",
        "00c70a40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b9660",
      "DATA",
      [
        "storage",
        "00c71a10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b92a8 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b9658 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b92ac ["COPY", "tmp:0:8", ["const:a40:8"]]
- 005b92ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b92ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b92ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b965c ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 005b965c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b965c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b965c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005b92c0 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 005b9670 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-f4032ad0d635a69ac3145f3a5deeeb83"></a>

### [`005b9340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9340.md) → [`005b96f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b96f0.md) FUN_005b96f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b4ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4ad8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b4e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4e88.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b937c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005b972c",
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
- 005b9360 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005b9360 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 005b9710 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005b9710 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 005b9378 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005b9378 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 005b9378 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 005b9378 ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
- 005b937c ["COPY", "register:0:8", ["register:4040:8"]]
- 005b937c ["INT_ADD", "register:40f0:8", ["const:5b937c:8", "const:4:8"]]
- 005b937c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7eb5915709ca07c067776b758a2d5e6e"></a>

### [`005b93d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b93d8.md) → [`005b9788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9788.md) FUN_005b9788

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change` · `reordered`

- 旧版 呼出元 1件 [`005b2cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2cd0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b3080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3080.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.15% / 新版 83.15%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b93f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b93fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b98c4"
      ]
    ],
    [
      "unmatched:005b9414",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b97dc"
      ]
    ]
  ],
  "added": [
    [
      "005b97a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005b97ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b98c4"
      ]
    ],
    [
      "005b97c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b97dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b93e8 ["COPY", "tmp:0:8", ["const:30:8"]]
- 005b93e8 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 005b93e8 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 005b93e8 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 005b93ec ["COPY", "register:40a8:8", ["register:1660:8"]]
- 005b93f0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 005b93f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-054606b4b8b050940e41d710ec888230"></a>

### [`005b9540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9540.md) → [`00889e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889e80.md) FUN_00889e80

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change` · `reordered`

- 旧版 呼出元 1件 [`005b2f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2f28.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.76% / 新版 88.76%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005b9584"
      ],
      [
        "FALL_THROUGH",
        "00889ec4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00889ec0",
      "incomplete_value": true,
      "site": "00889ec8",
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
                "register:4098:8"
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
      "site": "005b9588",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005b9584"
      ],
      [
        "FALL_THROUGH",
        "00889ec4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00889ec0",
      "incomplete_value": true,
      "site": "00889ecc",
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
                "register:4098:8"
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
      "site": "005b958c",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005b9584"
      ],
      [
        "CONDITIONAL_JUMP",
        "00889ec4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00889ec0",
      "incomplete_value": true,
      "site": "00889f38",
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
                "register:4098:8"
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
      "site": "005b95f8",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:005b9560",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00889ea4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005b967c"
      ]
    ],
    [
      "unmatched:005b9584",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00889f0c"
      ]
    ]
  ],
  "added": [
    [
      "00889ea0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00889ea4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00889fbc"
      ]
    ],
    [
      "00889ec4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00889f0c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b9560 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005b9560 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 005b9560 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 005b9564 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 00889ea4 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
- 005b957c ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 00889ebc ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-d2d3db2534a6acbbbb0c9a5df2bbe015"></a>

### [`005b96a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b96a8.md) → [`005b9a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9a58.md) _INIT_61

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change` · `reordered`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 59.89% / 新版 59.89%

優先判定に残った影響 `call_argument_candidate` 19件, `unresolved_store_alignment` 25件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b97f4",
      "incomplete_value": true,
      "site": "005b9808",
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
      "definition_site": "005b9bbc",
      "incomplete_value": true,
      "site": "005b9bcc",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b9bc0",
      "incomplete_value": true,
      "site": "005b9bcc",
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
            "const:20:8"
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
      "unmatched:005b96d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b96e4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005b96ec",
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
      "005b9a88",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005b9a94",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005b9a9c",
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
- 005b9808 ["INT_ADD", "register:40f0:8", ["const:5b9808:8", "const:4:8"]]
- 005b9808 ["CALL", null, ["callee:0043bb58:8"]]
+ 005b9bb8 ["INT_ADD", "register:40f0:8", ["const:5b9bb8:8", "const:4:8"]]
+ 005b9bb8 ["CALL", null, ["callee:0043bb58:8"]]
- 005b981c ["INT_ADD", "register:40f0:8", ["const:5b981c:8", "const:4:8"]]
- 005b981c ["CALL", null, ["callee:0043bb58:8"]]
+ 005b9bcc ["INT_ADD", "register:40f0:8", ["const:5b9bcc:8", "const:4:8"]]
+ 005b9bcc ["CALL", null, ["callee:0043bb58:8"]]
- 005b9830 ["INT_ADD", "register:40f0:8", ["const:5b9830:8", "const:4:8"]]
- 005b9830 ["CALL", null, ["callee:0043bb58:8"]]
+ 005b9be0 ["INT_ADD", "register:40f0:8", ["const:5b9be0:8", "const:4:8"]]
+ 005b9be0 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-b91a501795a1b38a8847d8a9f98ae4d1"></a>

### [`005b9ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9ad8.md) → [`005b9e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9e88.md) FUN_005b9e88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) · 呼出先 2件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)
- 新版 呼出元 1件 [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) · 呼出先 2件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b9ea4",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b9af4",
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
      "005b9ea4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "005b9ea4",
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
- 005b9af4 ["INT_ADD", "register:40f0:8", ["const:5b9af4:8", "const:4:8"]]
- 005b9af4 ["CALL", null, ["ram:48cd38:8"]]
+ 005b9ea4 ["INT_ADD", "register:40f0:8", ["const:5b9ea4:8", "const:4:8"]]
+ 005b9ea4 ["CALL", null, ["ram:48d058:8"]]
- 005b9af8 ["INT_ADD", "register:40f0:8", ["const:5b9af8:8", "const:4:8"]]
- 005b9af8 ["CALL", null, ["callee:0048d1e4:8"]]
+ 005b9ea8 ["INT_ADD", "register:40f0:8", ["const:5b9ea8:8", "const:4:8"]]
+ 005b9ea8 ["CALL", null, ["callee:0048d1e4:8"]]
~~~


<a id="compare-54331677af5213219d9448e7d2ccddd4"></a>

### [`005b9b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b20.md) → [`005b9ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9ed0.md) FUN_005b9ed0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 3件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005b9b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b94.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 3件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`005b9f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9f44.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b9ef0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b9b40",
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
      "005b9ef0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "005b9ef0",
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
- 005b9b40 ["INT_ADD", "register:40f0:8", ["const:5b9b40:8", "const:4:8"]]
- 005b9b40 ["CALL", null, ["ram:48cd38:8"]]
+ 005b9ef0 ["INT_ADD", "register:40f0:8", ["const:5b9ef0:8", "const:4:8"]]
+ 005b9ef0 ["CALL", null, ["ram:48d058:8"]]
- 005b9b44 ["INT_ADD", "register:40f0:8", ["const:5b9b44:8", "const:4:8"]]
- 005b9b44 ["CALL", null, ["callee:0048d1e4:8"]]
+ 005b9ef4 ["INT_ADD", "register:40f0:8", ["const:5b9ef4:8", "const:4:8"]]
+ 005b9ef4 ["CALL", null, ["callee:0048d1e4:8"]]
- 005b9b6c ["INT_ADD", "register:40f0:8", ["const:5b9b6c:8", "const:4:8"]]
- 005b9b6c ["CALL", null, ["callee:005b9f44:8"]]
+ 005b9f1c ["INT_ADD", "register:40f0:8", ["const:5b9f1c:8", "const:4:8"]]
+ 005b9f1c ["CALL", null, ["callee:005b9f44:8"]]
~~~


<a id="compare-9d7b04e789f1d4ea9e7978b326dc2379"></a>

### [`005b9b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b94.md) → [`005b9f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9f44.md) FUN_005b9f44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b9b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b20.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`005b9ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9ed0.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 88.36% / 新版 88.36%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b9f94",
      "incomplete_value": false,
      "site": "005b9f9c",
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
      "definition_site": "005b9be4",
      "incomplete_value": false,
      "site": "005b9bec",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b9fc4",
      "incomplete_value": false,
      "site": "005b9fd0",
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
            "const:930:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b9c14",
      "incomplete_value": false,
      "site": "005b9c20",
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
            "const:970:8"
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
      "definition_site": "005b9e4c",
      "incomplete_value": true,
      "site": "005b9e50",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005b9f9c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005b9fc4",
      "PARAM",
      [
        "storage",
        "00ca6970",
        null,
        null
      ]
    ],
    [
      "unmatched:005b9d7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ba110"
      ]
    ]
  ],
  "added": [
    [
      "005b9f9c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "005b9fc4",
      "PARAM",
      [
        "storage",
        "00ca7930",
        null,
        null
      ]
    ],
    [
      "005ba12c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ba110"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b9c20 ["INT_ADD", "register:40f0:8", ["const:5b9c20:8", "const:4:8"]]
- 005b9c20 ["CALL", null, ["callee:00493168:8"]]
+ 005b9fd0 ["INT_ADD", "register:40f0:8", ["const:5b9fd0:8", "const:4:8"]]
+ 005b9fd0 ["CALL", null, ["callee:00493168:8"]]
- 005b9e50 ["INT_ADD", "register:40f0:8", ["const:5b9e50:8", "const:4:8"]]
- 005b9e50 ["CALL", null, ["callee:005ba2d4:8"]]
+ 005ba200 ["INT_ADD", "register:40f0:8", ["const:5ba200:8", "const:4:8"]]
+ 005ba200 ["CALL", null, ["callee:005ba2d4:8"]]
- 005b9bdc ["INT_ADD", "register:40f0:8", ["const:5b9bdc:8", "const:4:8"]]
- 005b9bdc ["CALL", null, ["callee:00488180:8"]]
+ 005b9f8c ["INT_ADD", "register:40f0:8", ["const:5b9f8c:8", "const:4:8"]]
+ 005b9f8c ["CALL", null, ["callee:00488180:8"]]
~~~


<a id="compare-85b38ba0aaea312b15454c30eb5c17bb"></a>

### [`005b9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f24.md) → [`005ba2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005ba2d4.md) FUN_005ba2d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 16件 [`005b9b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b94.md) [`005b9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f24.md) [`005c6340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c6340.md) [`0081a86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081a/0081a86c.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 2件 [`005b9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f24.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 16件 [`005b9f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9f44.md) [`005ba2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005ba2d4.md) [`005c66f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c66f0.md) [`0081b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081b/0081b818.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 2件 [`005ba2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005ba2d4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b9f24 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005b9f24 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 005ba2d4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005ba2d4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 005b9f40 ["INT_ADD", "register:40f0:8", ["const:5b9f40:8", "const:4:8"]]
- 005b9f40 ["CALL", null, ["local:b0:8"]]
+ 005ba2f0 ["INT_ADD", "register:40f0:8", ["const:5ba2f0:8", "const:4:8"]]
+ 005ba2f0 ["CALL", null, ["local:b0:8"]]
- 005b9f4c ["INT_ADD", "register:40f0:8", ["const:5b9f4c:8", "const:4:8"]]
- 005b9f4c ["CALL", null, ["local:b0:8"]]
+ 005ba2fc ["INT_ADD", "register:40f0:8", ["const:5ba2fc:8", "const:4:8"]]
+ 005ba2fc ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-e492b417b9380a336af3379b87d70a3d"></a>

### [`005b9f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f74.md) → [`005ba324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005ba324.md) _INIT_62

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.41% / 新版 70.41%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_store_alignment` 21件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ba19c",
      "incomplete_value": false,
      "site": "005ba1ac",
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
      "definition_site": "005ba554",
      "incomplete_value": true,
      "site": "005ba55c",
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
            "const:918:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ba1a4",
      "incomplete_value": false,
      "site": "005ba1ac",
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
            "const:958:8"
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
      "definition_site": "005ba558",
      "incomplete_value": true,
      "site": "005ba55c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "005ba1a8",
      "incomplete_value": false,
      "site": "005ba1ac",
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
      "unmatched:005b9f78",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b9f7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b9f80",
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
      "005ba328",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005ba32c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ba330",
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
- 005ba1ac ["INT_ADD", "register:40f0:8", ["const:5ba1ac:8", "const:4:8"]]
- 005ba1ac ["CALL", null, ["callee:00c58ed0:8"]]
+ 005ba55c ["INT_ADD", "register:40f0:8", ["const:5ba55c:8", "const:4:8"]]
+ 005ba55c ["CALL", null, ["callee:00c58ed0:8"]]
- 005ba1f4 ["INT_ADD", "register:40f0:8", ["const:5ba1f4:8", "const:4:8"]]
- 005ba1f4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 005ba5a4 ["INT_ADD", "register:40f0:8", ["const:5ba5a4:8", "const:4:8"]]
+ 005ba5a4 ["CALL", null, ["callee:00c58ed0:8"]]
- 005ba220 ["INT_ADD", "register:40f0:8", ["const:5ba220:8", "const:4:8"]]
- 005ba220 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ba5d0 ["INT_ADD", "register:40f0:8", ["const:5ba5d0:8", "const:4:8"]]
+ 005ba5d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3c2d430bb1d081ca8da1234ef92db7d0"></a>

### [`005ba350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba350.md) → [`005ba700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005ba700.md) FUN_005ba700

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) · 呼出先 12件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) · 呼出先 12件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00598228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598228.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.56% / 新版 71.56%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ba7dc",
      "incomplete_value": true,
      "site": "005ba7e4",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "005ba42c",
      "incomplete_value": false,
      "site": "005ba434",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ba8d0",
      "incomplete_value": false,
      "site": "005ba8f0",
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
      "definition_site": "005ba520",
      "incomplete_value": false,
      "site": "005ba540",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ba8d4",
      "incomplete_value": true,
      "site": "005ba8f0",
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
                "const:d30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ba524",
      "incomplete_value": true,
      "site": "005ba540",
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
                "const:d60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ba354",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ba358",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ba35c",
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
      "005ba704",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005ba708",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005ba70c",
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
- 005ba434 ["INT_ADD", "register:40f0:8", ["const:5ba434:8", "const:4:8"]]
- 005ba434 ["CALL", null, ["callee:0047e96c:8"]]
+ 005ba7e4 ["INT_ADD", "register:40f0:8", ["const:5ba7e4:8", "const:4:8"]]
+ 005ba7e4 ["CALL", null, ["callee:0047e96c:8"]]
- 005ba540 ["INT_ADD", "register:40f0:8", ["const:5ba540:8", "const:4:8"]]
- 005ba540 ["CALL", null, ["callee:0047ec3c:8"]]
+ 005ba8f0 ["INT_ADD", "register:40f0:8", ["const:5ba8f0:8", "const:4:8"]]
+ 005ba8f0 ["CALL", null, ["callee:0047ec3c:8"]]
- 005ba668 ["INT_ADD", "register:40f0:8", ["const:5ba668:8", "const:4:8"]]
- 005ba668 ["CALL", null, ["callee:00c58ef0:8"]]
+ 005baa18 ["INT_ADD", "register:40f0:8", ["const:5baa18:8", "const:4:8"]]
+ 005baa18 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-529139678b8f714e1cf16effe40415fb"></a>

### [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) → [`005bab88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bab88.md) FUN_005bab88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005bae34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bae34.md) · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047b800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b800.md) [`0047b808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b808.md) [`0047b88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b88c.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md)
- 新版 呼出元 1件 [`005bb1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb1e4.md) · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047bb20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047bb20.md) [`0047bb28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047bb28.md) [`0047bbac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047bbac.md) [`0047d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d268.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.61% / 新版 86.61%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 3件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005baba0",
      "value": [
        "leaf",
        "ram:84f5a0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ba7f0",
      "value": [
        "leaf",
        "ram:84e5f4:8"
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
      "site": "005babb4",
      "value": [
        "leaf",
        "ram:b12cac:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ba804",
      "value": [
        "leaf",
        "ram:b11cb8:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005babdc",
      "value": [
        "leaf",
        "ram:b204b8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ba82c",
      "value": [
        "leaf",
        "ram:b1f4c4:8"
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
      "005baba0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0084e5f4"
      ]
    ],
    [
      "005babb4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b11cb8"
      ]
    ],
    [
      "005babdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b1f4c4"
      ]
    ]
  ],
  "added": [
    [
      "005baba0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0084f5a0"
      ]
    ],
    [
      "005babb4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b12cac"
      ]
    ],
    [
      "005babdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b204b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ba7f0 ["INT_ADD", "register:40f0:8", ["const:5ba7f0:8", "const:4:8"]]
- 005ba7f0 ["CALL", null, ["ram:84e5f4:8"]]
+ 005baba0 ["INT_ADD", "register:40f0:8", ["const:5baba0:8", "const:4:8"]]
+ 005baba0 ["CALL", null, ["ram:84f5a0:8"]]
- 005ba804 ["INT_ADD", "register:40f0:8", ["const:5ba804:8", "const:4:8"]]
- 005ba804 ["CALL", null, ["ram:b11cb8:8"]]
+ 005babb4 ["INT_ADD", "register:40f0:8", ["const:5babb4:8", "const:4:8"]]
+ 005babb4 ["CALL", null, ["ram:b12cac:8"]]
- 005ba82c ["INT_ADD", "register:40f0:8", ["const:5ba82c:8", "const:4:8"]]
- 005ba82c ["CALL", null, ["ram:b1f4c4:8"]]
+ 005babdc ["INT_ADD", "register:40f0:8", ["const:5babdc:8", "const:4:8"]]
+ 005babdc ["CALL", null, ["ram:b204b8:8"]]
~~~


<a id="compare-b6b766d116167db3c24c8fb216b717fa"></a>

### [`005ba998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba998.md) → [`005bad48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bad48.md) FUN_005bad48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`005bae0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bae0c.md) [`005baedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005baedc.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`005bb1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb1bc.md) [`005bb28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb28c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.36% / 新版 87.36%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005badec",
      "incomplete_value": false,
      "site": "005badf8",
      "value": [
        "leaf",
        "const:5bb28c:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005badd0",
      "incomplete_value": true,
      "site": "005badf8",
      "value": [
        "live",
        "register:4000:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005baa50",
      "incomplete_value": true,
      "site": "005baa54",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:005ba9bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005bad90",
      "DATA",
      [
        "storage",
        "00c70b20",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005baa28",
      "READ",
      [
        "storage",
        "002c2d90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005bad6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005bad90",
      "DATA",
      [
        "storage",
        "00c71af0",
        null,
        "pointer"
      ]
    ],
    [
      "005badd8",
      "READ",
      [
        "storage",
        "002c2de0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005baa48 ["INT_ADD", "register:40f0:8", ["const:5baa48:8", "const:4:8"]]
- 005baa48 ["CALL", null, ["callee:00c591b0:8"]]
+ 005badf8 ["INT_ADD", "register:40f0:8", ["const:5badf8:8", "const:4:8"]]
+ 005badf8 ["CALL", null, ["callee:00c591b0:8"]]
- 005baa54 ["INT_ADD", "register:40f0:8", ["const:5baa54:8", "const:4:8"]]
- 005baa54 ["CALL", null, ["callee:00c595b0:8"]]
+ 005bae04 ["INT_ADD", "register:40f0:8", ["const:5bae04:8", "const:4:8"]]
+ 005bae04 ["CALL", null, ["callee:00c595b0:8"]]
- 005baa68 ["INT_ADD", "register:40f0:8", ["const:5baa68:8", "const:4:8"]]
- 005baa68 ["CALL", null, ["callee:00c595c0:8"]]
+ 005bae18 ["INT_ADD", "register:40f0:8", ["const:5bae18:8", "const:4:8"]]
+ 005bae18 ["CALL", null, ["callee:00c595c0:8"]]
~~~


<a id="compare-8f8ec3440315b744fae781bf99fd4b60"></a>

### [`005baba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005baba4.md) → [`005baf54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005baf54.md) FUN_005baf54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c585b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59580.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005baf78",
      "incomplete_value": true,
      "site": "005baf7c",
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
                "const:50:8"
              ]
            ]
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005babe0",
      "incomplete_value": true,
      "site": "005babe8",
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
      "unmatched:005baba4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005baba8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005babc0",
      "DATA",
      [
        "storage",
        "00c70ac0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005baf54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005baf58",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005baf70",
      "DATA",
      [
        "storage",
        "00c71a90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005babcc ["INT_ADD", "register:40f0:8", ["const:5babcc:8", "const:4:8"]]
- 005babcc ["CALL", null, ["callee:00c58f50:8"]]
+ 005baf7c ["INT_ADD", "register:40f0:8", ["const:5baf7c:8", "const:4:8"]]
+ 005baf7c ["CALL", null, ["callee:00c58f50:8"]]
- 005babe8 ["INT_ADD", "register:40f0:8", ["const:5babe8:8", "const:4:8"]]
- 005babe8 ["CALL", null, ["callee:00c54d90:8"]]
+ 005baf98 ["INT_ADD", "register:40f0:8", ["const:5baf98:8", "const:4:8"]]
+ 005baf98 ["CALL", null, ["callee:00c54d90:8"]]
- 005baba4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005baba4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005baba4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005baba4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-2eec097fe1627103c75d8202f8ee3cd2"></a>

### [`005bac58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bac58.md) → [`005bb008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb008.md) FUN_005bb008

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c585b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59580.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 48.78% / 新版 48.78%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005bac84",
      "incomplete_value": true,
      "site": "005bac88",
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
            "const:38:8"
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
      "definition_site": "005bacb4",
      "incomplete_value": true,
      "site": "005bacb8",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bb078",
      "incomplete_value": false,
      "site": "005bb07c",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "unmatched:005bac58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bac5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bac74",
      "DATA",
      [
        "storage",
        "00c70ac0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005bb008",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005bb00c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005bb024",
      "DATA",
      [
        "storage",
        "00c71a90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bac88 ["INT_ADD", "register:40f0:8", ["const:5bac88:8", "const:4:8"]]
- 005bac88 ["CALL", null, ["callee:00c59580:8"]]
+ 005bb038 ["INT_ADD", "register:40f0:8", ["const:5bb038:8", "const:4:8"]]
+ 005bb038 ["CALL", null, ["callee:00c59580:8"]]
- 005bacb8 ["INT_ADD", "register:40f0:8", ["const:5bacb8:8", "const:4:8"]]
- 005bacb8 ["CALL", null, ["callee:00c58f20:8"]]
+ 005bb068 ["INT_ADD", "register:40f0:8", ["const:5bb068:8", "const:4:8"]]
+ 005bb068 ["CALL", null, ["callee:00c58f20:8"]]
- 005baccc ["INT_ADD", "register:40f0:8", ["const:5baccc:8", "const:4:8"]]
- 005baccc ["CALL", null, ["callee:00c54d90:8"]]
+ 005bb07c ["INT_ADD", "register:40f0:8", ["const:5bb07c:8", "const:4:8"]]
+ 005bb07c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-741d80abd10d68a10578f55bd3581a68"></a>

### [`005bad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bad10.md) → [`005bb0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb0c0.md) FUN_005bb0c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b36200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36200.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b371f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b371f4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 63.16% / 新版 63.16%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005bad14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bad18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bad2c",
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
      "005bb0c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005bb0c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005bb0dc",
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
- 005bad10 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 005bad14 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005bad14 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005bad14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005bad14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005bad18 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005bad18 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005bad18 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 005bad18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-017348485f37d49877d889f212e857d9"></a>

### [`005badb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005badb8.md) → [`005bb168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb168.md) FUN_005bb168

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59170.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.95% / 新版 80.95%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005bade4",
      "incomplete_value": true,
      "site": "005bade8",
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
            "const:18:8"
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
      "unmatched:005badd0",
      "READ",
      [
        "storage",
        "00c9ad20",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005baddc",
      "DATA",
      [
        "storage",
        "00c92da8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005bb180",
      "READ",
      [
        "storage",
        "00c9bcf0",
        null,
        "pointer"
      ]
    ],
    [
      "005bb18c",
      "DATA",
      [
        "storage",
        "00c93d78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bade8 ["INT_ADD", "register:40f0:8", ["const:5bade8:8", "const:4:8"]]
- 005bade8 ["CALL", null, ["callee:00c58f00:8"]]
+ 005bb198 ["INT_ADD", "register:40f0:8", ["const:5bb198:8", "const:4:8"]]
+ 005bb198 ["CALL", null, ["callee:00c58f00:8"]]
- 005badc4 ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 005bb174 ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 005badd0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d20:8"]]
- 005badd0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e3d59fc19b744bf28274b1024f2a12a7"></a>

### [`005bae0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bae0c.md) → [`005bb1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb1bc.md) FUN_005bb1bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005ba998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba998.md) · 呼出先 2件 [`00c58600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58600.md) [`00c58610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58610.md)
- 新版 呼出元 1件 [`005bad48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bad48.md) · 呼出先 2件 [`00c595d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595d0.md) [`00c595e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595e0.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005bae0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bae10",
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
      "005bb1bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005bb1c0",
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
- 005bae0c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005bae0c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005bae0c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005bae0c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005bae10 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005bae10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005bae14 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-0010af965fdec3d600df44fb5a5d3675"></a>

### [`005baedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005baedc.md) → [`005bb28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb28c.md) FUN_005bb28c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005ba998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba998.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c58210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 1件 [`005bad48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bad48.md) · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c591d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591d0.md) [`00c591e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591e0.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.62% / 新版 97.62%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005baf48",
      "incomplete_value": true,
      "site": "005baf4c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bb310",
      "incomplete_value": true,
      "site": "005bb314",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 1
  }
]
~~~


~~~diff
- 005baf4c ["INT_ADD", "register:40f0:8", ["const:5baf4c:8", "const:4:8"]]
- 005baf4c ["CALL", null, ["callee:00c58f50:8"]]
+ 005bb2fc ["INT_ADD", "register:40f0:8", ["const:5bb2fc:8", "const:4:8"]]
+ 005bb2fc ["CALL", null, ["callee:00c58f50:8"]]
- 005baf64 ["INT_ADD", "register:40f0:8", ["const:5baf64:8", "const:4:8"]]
- 005baf64 ["CALL", null, ["callee:00c58f50:8"]]
+ 005bb314 ["INT_ADD", "register:40f0:8", ["const:5bb314:8", "const:4:8"]]
+ 005bb314 ["CALL", null, ["callee:00c58f50:8"]]
- 005baf04 ["INT_ADD", "register:40f0:8", ["const:5baf04:8", "const:4:8"]]
- 005baf04 ["CALL", null, ["callee:00c591d0:8"]]
+ 005bb2b4 ["INT_ADD", "register:40f0:8", ["const:5bb2b4:8", "const:4:8"]]
+ 005bb2b4 ["CALL", null, ["callee:00c591d0:8"]]
~~~


<a id="compare-6d19eb281bdf60cf435a9983cc3d8816"></a>

### [`005bafa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bafa8.md) → [`005bb358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb358.md) FUN_005bb358

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bb37c",
      "incomplete_value": true,
      "site": "005bb380",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:005bafc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005bb38c"
      ]
    ]
  ],
  "added": [
    [
      "005bb378",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005bb38c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bafd0 ["INT_ADD", "register:40f0:8", ["const:5bafd0:8", "const:4:8"]]
- 005bafd0 ["CALL", null, ["callee:00c591f0:8"]]
+ 005bb380 ["INT_ADD", "register:40f0:8", ["const:5bb380:8", "const:4:8"]]
+ 005bb380 ["CALL", null, ["callee:00c591f0:8"]]
- 005bafbc ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 005bafbc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 005bb36c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 005bb36c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 005bafc8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 005bafc8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-cfbc59147e3b8e0ec172e44218ffee5c"></a>

### [`005baff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005baff8.md) → [`005bb3a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb3a8.md) _INIT_63

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bb518",
      "incomplete_value": true,
      "site": "005bb51c",
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
      "definition_site": "005bb50c",
      "incomplete_value": true,
      "site": "005bb51c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bb510",
      "incomplete_value": true,
      "site": "005bb51c",
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
            "const:20:8"
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
      "unmatched:005bb028",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bb034",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005bb03c",
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
      "005bb3d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005bb3e4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005bb3ec",
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
- 005bb16c ["INT_ADD", "register:40f0:8", ["const:5bb16c:8", "const:4:8"]]
- 005bb16c ["CALL", null, ["callee:0043bb58:8"]]
+ 005bb51c ["INT_ADD", "register:40f0:8", ["const:5bb51c:8", "const:4:8"]]
+ 005bb51c ["CALL", null, ["callee:0043bb58:8"]]
- 005bb22c ["INT_ADD", "register:40f0:8", ["const:5bb22c:8", "const:4:8"]]
- 005bb22c ["CALL", null, ["callee:00c58ed0:8"]]
+ 005bb5dc ["INT_ADD", "register:40f0:8", ["const:5bb5dc:8", "const:4:8"]]
+ 005bb5dc ["CALL", null, ["callee:00c58ed0:8"]]
- 005bb008 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 005bb008 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 005bb008 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 005bb008 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-ccfb01cfd71c714b500dc46980689624"></a>

### [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) → [`005bb738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb738.md) FUN_005bb738

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 5件 [`005bb3c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb3c4.md) [`005bb738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb738.md) [`005bbf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bbf54.md) [`005bc278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc278.md) [`005bc558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc558.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 5件 [`005bb774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb774.md) [`005bbae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bbae8.md) [`005bc304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bc304.md) [`005bc628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bc628.md) [`005bc908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bc908.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bb754",
      "incomplete_value": true,
      "site": "005bb758",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 005bb3a8 ["INT_ADD", "register:40f0:8", ["const:5bb3a8:8", "const:4:8"]]
- 005bb3a8 ["CALL", null, ["callee:005bc304:8"]]
+ 005bb758 ["INT_ADD", "register:40f0:8", ["const:5bb758:8", "const:4:8"]]
+ 005bb758 ["CALL", null, ["callee:005bc304:8"]]
- 005bb398 ["INT_ADD", "register:40f0:8", ["const:5bb398:8", "const:4:8"]]
- 005bb398 ["CALL", null, ["callee:005bb774:8"]]
+ 005bb748 ["INT_ADD", "register:40f0:8", ["const:5bb748:8", "const:4:8"]]
+ 005bb748 ["CALL", null, ["callee:005bb774:8"]]
- 005bb3a0 ["INT_ADD", "register:40f0:8", ["const:5bb3a0:8", "const:4:8"]]
- 005bb3a0 ["CALL", null, ["callee:005bbae8:8"]]
+ 005bb750 ["INT_ADD", "register:40f0:8", ["const:5bb750:8", "const:4:8"]]
+ 005bb750 ["CALL", null, ["callee:005bbae8:8"]]
~~~


<a id="compare-d004848c45da83e936213691ef1a4601"></a>

### [`005bb3c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb3c4.md) → [`005bb774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb774.md) FUN_005bb774

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`005bb738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb738.md) · 呼出先 14件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.59% / 新版 82.59%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bb9f0",
      "incomplete_value": true,
      "site": "005bb9f4",
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
      "definition_site": "005bb640",
      "incomplete_value": true,
      "site": "005bb644",
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
    "ordinal": 42,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bb9ec",
      "incomplete_value": true,
      "site": "005bb9f8",
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
      "definition_site": "005bb63c",
      "incomplete_value": true,
      "site": "005bb648",
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
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "005bba04",
      "incomplete_value": true,
      "site": "005bba04",
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
      "definition_site": "005bb654",
      "incomplete_value": true,
      "site": "005bb654",
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
    "ordinal": 44,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005bb3d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bb3d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bb3dc",
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
      "005bb784",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005bb788",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005bb78c",
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
- 005bb428 ["INT_ADD", "register:40f0:8", ["const:5bb428:8", "const:4:8"]]
- 005bb428 ["CALL", null, ["callee:00c58f30:8"]]
+ 005bb7d8 ["INT_ADD", "register:40f0:8", ["const:5bb7d8:8", "const:4:8"]]
+ 005bb7d8 ["CALL", null, ["callee:00c58f30:8"]]
- 005bb48c ["INT_ADD", "register:40f0:8", ["const:5bb48c:8", "const:4:8"]]
- 005bb48c ["CALL", null, ["callee:0043bf04:8"]]
+ 005bb83c ["INT_ADD", "register:40f0:8", ["const:5bb83c:8", "const:4:8"]]
+ 005bb83c ["CALL", null, ["callee:0043bf04:8"]]
- 005bb4e4 ["INT_ADD", "register:40f0:8", ["const:5bb4e4:8", "const:4:8"]]
- 005bb4e4 ["CALL", null, ["callee:00487c9c:8"]]
+ 005bb894 ["INT_ADD", "register:40f0:8", ["const:5bb894:8", "const:4:8"]]
+ 005bb894 ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-b7da38cde3dc0992521975e689528bbe"></a>

### [`005bb738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb738.md) → [`005bbae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bbae8.md) FUN_005bbae8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`005bb738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb738.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 54.03% / 新版 54.03%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 7件, `unresolved_branch_alignment` 33件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 66件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005bbb28",
      "incomplete_value": false,
      "site": "005bbb2c",
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
      "definition_site": "005bb778",
      "incomplete_value": false,
      "site": "005bb77c",
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
      "definition_site": "005bbb44",
      "incomplete_value": true,
      "site": "005bbb54",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:9af:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bb794",
      "incomplete_value": true,
      "site": "005bb7a4",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:8e2:8"
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
      "definition_site": "005bbb48",
      "incomplete_value": true,
      "site": "005bbb58",
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bb798",
      "incomplete_value": true,
      "site": "005bb7a8",
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
                "const:10:8"
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
      "005bbb2c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005bbb44",
      "READ",
      [
        "storage",
        "002ad8e2",
        null,
        "string"
      ]
    ],
    [
      "005bbb48",
      "READ",
      [
        "storage",
        "002ad8f2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005bbb2c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "005bbb44",
      "READ",
      [
        "storage",
        "002ad9af",
        null,
        "string"
      ]
    ],
    [
      "005bbb48",
      "READ",
      [
        "storage",
        "002ad9bf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bbae0 ["INT_ADD", "register:40f0:8", ["const:5bbae0:8", "const:4:8"]]
- 005bbae0 ["CALL", null, ["callee:00487c9c:8"]]
+ 005bbe90 ["INT_ADD", "register:40f0:8", ["const:5bbe90:8", "const:4:8"]]
+ 005bbe90 ["CALL", null, ["callee:00487c9c:8"]]
- 005bbb2c ["COPY", "register:4000:8", ["const:98:8"]]
- 005bbb54 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:40:8"]]
- 005bbb54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 005bbb54 ["INT_ADD", "tmp:1:8", ["tmp:0:8", "const:10:8"]]
- 005bbb54 ["STORE", null, ["const:1b1:8", "tmp:1:8", "register:5000:16"]]
~~~


<a id="compare-4dfcbd83af3a6c6862a827eb20fd69a1"></a>

### [`005bbf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bbf54.md) → [`005bc304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bc304.md) FUN_005bc304

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`005bb738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb738.md) · 呼出先 15件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.16% / 新版 85.16%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bc52c",
      "incomplete_value": true,
      "site": "005bc530",
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
      "definition_site": "005bc17c",
      "incomplete_value": true,
      "site": "005bc180",
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
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005bc094",
      "incomplete_value": true,
      "site": "005bc0ac",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005bc098",
      "incomplete_value": true,
      "site": "005bc0ac",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:005bbf9c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005bbf9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bbfb8",
      "READ",
      [
        "storage",
        "002a214a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005bc34c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "005bc34c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "005bc368",
      "READ",
      [
        "storage",
        "002a2215",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bc0ac ["INT_ADD", "register:40f0:8", ["const:5bc0ac:8", "const:4:8"]]
- 005bc0ac ["CALL", null, ["callee:00c590a0:8"]]
+ 005bc45c ["INT_ADD", "register:40f0:8", ["const:5bc45c:8", "const:4:8"]]
+ 005bc45c ["CALL", null, ["callee:00c590a0:8"]]
- 005bc10c ["INT_ADD", "register:40f0:8", ["const:5bc10c:8", "const:4:8"]]
- 005bc10c ["CALL", null, ["callee:00487c9c:8"]]
+ 005bc4bc ["INT_ADD", "register:40f0:8", ["const:5bc4bc:8", "const:4:8"]]
+ 005bc4bc ["CALL", null, ["callee:00487c9c:8"]]
- 005bc138 ["INT_ADD", "register:40f0:8", ["const:5bc138:8", "const:4:8"]]
- 005bc138 ["CALL", null, ["callee:004889b8:8"]]
+ 005bc4e8 ["INT_ADD", "register:40f0:8", ["const:5bc4e8:8", "const:4:8"]]
+ 005bc4e8 ["CALL", null, ["callee:004889b8:8"]]
~~~


<a id="compare-aaad41784a083ad93fbc587a53dcabdf"></a>

### [`005bc278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc278.md) → [`005bc628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bc628.md) FUN_005bc628

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md)
- 新版 呼出元 1件 [`005bb738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb738.md) · 呼出先 15件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.85% / 新版 65.85%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 23件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bc7fc",
      "incomplete_value": true,
      "site": "005bc800",
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
      "definition_site": "005bc44c",
      "incomplete_value": true,
      "site": "005bc450",
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
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bc6b0",
      "incomplete_value": true,
      "site": "005bc6c0",
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
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bc6b4",
      "incomplete_value": true,
      "site": "005bc6c0",
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
      "unmatched:005bc27c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bc280",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bc284",
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
      "005bc62c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005bc630",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005bc634",
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
- 005bc310 ["INT_ADD", "register:40f0:8", ["const:5bc310:8", "const:4:8"]]
- 005bc310 ["CALL", null, ["callee:00b1217c:8"]]
+ 005bc6c0 ["INT_ADD", "register:40f0:8", ["const:5bc6c0:8", "const:4:8"]]
+ 005bc6c0 ["CALL", null, ["callee:00b1217c:8"]]
- 005bc3b8 ["INT_ADD", "register:40f0:8", ["const:5bc3b8:8", "const:4:8"]]
- 005bc3b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005bc768 ["INT_ADD", "register:40f0:8", ["const:5bc768:8", "const:4:8"]]
+ 005bc768 ["CALL", null, ["callee:00c58f30:8"]]
- 005bc3e4 ["INT_ADD", "register:40f0:8", ["const:5bc3e4:8", "const:4:8"]]
- 005bc3e4 ["CALL", null, ["callee:00c590a0:8"]]
+ 005bc794 ["INT_ADD", "register:40f0:8", ["const:5bc794:8", "const:4:8"]]
+ 005bc794 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-7545e7c737d3181a91fadd67b55dc6cc"></a>

### [`005bc558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc558.md) → [`005bc908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bc908.md) FUN_005bc908

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`005bb738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb738.md) · 呼出先 14件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.94% / 新版 81.94%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bcaf0",
      "incomplete_value": true,
      "site": "005bcaf4",
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
      "definition_site": "005bc740",
      "incomplete_value": true,
      "site": "005bc744",
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
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bc954",
      "incomplete_value": true,
      "site": "005bc95c",
      "value": [
        "INT_SUB",
        "8",
        [
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
                "const:68:8"
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005bc94c",
      "incomplete_value": true,
      "site": "005bc95c",
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
                "const:68:8"
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
      "unmatched:005bc56c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bc570",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bc5a8",
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
      "005bc91c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005bc920",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005bc958",
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
- 005bc5ac ["INT_ADD", "register:40f0:8", ["const:5bc5ac:8", "const:4:8"]]
- 005bc5ac ["CALL", null, ["callee:005c1b8c:8"]]
+ 005bc95c ["INT_ADD", "register:40f0:8", ["const:5bc95c:8", "const:4:8"]]
+ 005bc95c ["CALL", null, ["callee:005c1b8c:8"]]
- 005bc5fc ["INT_ADD", "register:40f0:8", ["const:5bc5fc:8", "const:4:8"]]
- 005bc5fc ["CALL", null, ["callee:00b1217c:8"]]
+ 005bc9ac ["INT_ADD", "register:40f0:8", ["const:5bc9ac:8", "const:4:8"]]
+ 005bc9ac ["CALL", null, ["callee:00b1217c:8"]]
- 005bc648 ["INT_ADD", "register:40f0:8", ["const:5bc648:8", "const:4:8"]]
- 005bc648 ["CALL", null, ["callee:00487ee0:8"]]
+ 005bc9f8 ["INT_ADD", "register:40f0:8", ["const:5bc9f8:8", "const:4:8"]]
+ 005bc9f8 ["CALL", null, ["callee:00487ee0:8"]]
~~~


<a id="compare-07f04dfa93d9a96f432cea9b17551dd8"></a>

### [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) → [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) FUN_005bcbbc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00af01a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af01a4.md) [`00af075c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af075c.md) · 呼出先 59件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md)
- 新版 呼出元 2件 [`00af1198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1198.md) [`00af1750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1750.md) · 呼出先 59件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.38% / 新版 80.38%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 42件, `store_condition` 14件, `store_value` 2件, `unresolved_branch_alignment` 131件, `unresolved_call_alignment` 41件, `unresolved_store_alignment` 159件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005be218",
      "incomplete_value": true,
      "site": "005be220",
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
                "const:820:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bde68",
      "incomplete_value": true,
      "site": "005bde70",
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
                "const:7d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 213,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005beac0",
      "incomplete_value": true,
      "site": "005bead0",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:9c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005be710",
      "incomplete_value": true,
      "site": "005be720",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:8fb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 311,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005beacc",
      "incomplete_value": true,
      "site": "005bead4",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005be71c",
      "incomplete_value": true,
      "site": "005be724",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 312,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005bc80c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bc810",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:005bc814",
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
      "005bcbbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "005bcbc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "005bcbc4",
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
- 005bca80 ["INT_ADD", "register:40f0:8", ["const:5bca80:8", "const:4:8"]]
- 005bca80 ["CALL", null, ["callee:005c08e0:8"]]
+ 005bce30 ["INT_ADD", "register:40f0:8", ["const:5bce30:8", "const:4:8"]]
+ 005bce30 ["CALL", null, ["callee:005c08e0:8"]]
- 005bd244 ["INT_ADD", "register:40f0:8", ["const:5bd244:8", "const:4:8"]]
- 005bd244 ["CALL", null, ["callee:00b050e8:8"]]
+ 005bd5f4 ["INT_ADD", "register:40f0:8", ["const:5bd5f4:8", "const:4:8"]]
+ 005bd5f4 ["CALL", null, ["callee:00b050e8:8"]]
- 005bd5e8 ["INT_ADD", "register:40f0:8", ["const:5bd5e8:8", "const:4:8"]]
- 005bd5e8 ["CALL", null, ["callee:0043bf04:8"]]
+ 005bd998 ["INT_ADD", "register:40f0:8", ["const:5bd998:8", "const:4:8"]]
+ 005bd998 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-f9a2cee9fbf417ee25b5de9b95e1f567"></a>

### [`005c0530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0530.md) → [`005c08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c0/005c08e0.md) FUN_005c08e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 10件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008c7b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c7/008c7b94.md) [`00ad6af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6af8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 10件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) [`008c8b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c8/008c8b40.md) [`00ad7aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7aec.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c0a98",
      "incomplete_value": true,
      "site": "005c0a9c",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40a0:8"
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
      "definition_site": "005c06e8",
      "incomplete_value": true,
      "site": "005c06ec",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:40a8:8"
              ],
              [
                "live",
                "register:40a0:8"
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005c076c"
      ],
      [
        "FALL_THROUGH",
        "005c0b1c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005c0b1c",
      "incomplete_value": true,
      "site": "005c0b20",
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
      "definition_site": "005c076c",
      "incomplete_value": true,
      "site": "005c0770",
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
    "ordinal": 38,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c0558",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c093c"
      ]
    ],
    [
      "unmatched:005c0578",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c0918"
      ]
    ],
    [
      "unmatched:005c05b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c09e0"
      ]
    ]
  ],
  "added": [
    [
      "005c0908",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c093c"
      ]
    ],
    [
      "005c0928",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c0918"
      ]
    ],
    [
      "005c0968",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c09e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c06ec ["INT_ADD", "register:40f0:8", ["const:5c06ec:8", "const:4:8"]]
- 005c06ec ["CALL", null, ["callee:00c594f0:8"]]
+ 005c0a9c ["INT_ADD", "register:40f0:8", ["const:5c0a9c:8", "const:4:8"]]
+ 005c0a9c ["CALL", null, ["callee:00c594f0:8"]]
- 005c0550 ["INT_ADD", "register:40b8:8", ["register:40b8:8", "const:8:8"]]
- 005c0550 ["LOAD", "register:4040:8", ["const:1b1:8", "register:40b8:8"]]
- 005c0554 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005c0554 ["COPY", "tmp:1:4", ["const:0:4"]]
- 005c0554 ["COPY", "tmp:2:4", ["register:4008:4"]]
- 005c0554 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
~~~


<a id="compare-07e68d8b87791cf836d073f7872881b0"></a>

### [`005c07b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c07b0.md) → [`005c0b60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c0/005c0b60.md) FUN_005c0b60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.91% / 新版 92.91%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c08e0",
      "incomplete_value": false,
      "site": "005c08e8",
      "value": [
        "leaf",
        "const:98:8"
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
      "unmatched:005c07b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c07b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c07b8",
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
      "005c0b60",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005c0b64",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005c0b68",
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
- 005c08e8 ["INT_ADD", "register:40f0:8", ["const:5c08e8:8", "const:4:8"]]
- 005c08e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005c0c98 ["INT_ADD", "register:40f0:8", ["const:5c0c98:8", "const:4:8"]]
+ 005c0c98 ["CALL", null, ["callee:00c58f30:8"]]
- 005c07b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c07b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c07b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 005c07b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c07b4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005c07b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
~~~


<a id="compare-1a2fabc84bb54b1405660f574cfde88b"></a>

### [`005c09ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c09ac.md) → [`005c0d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c0/005c0d5c.md) FUN_005c0d5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.30% / 新版 87.30%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "005c0b84",
      "incomplete_value": true,
      "site": "005c0ba0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "live",
                "register:4048:4"
              ]
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
      "005c0d98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005c09fc"
      ]
    ],
    [
      "unmatched:005c09f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c0dcc"
      ]
    ],
    [
      "unmatched:005c0a08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c0da0"
      ]
    ]
  ],
  "added": [
    [
      "005c0d98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c0dac"
      ]
    ],
    [
      "005c0da8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c0dcc"
      ]
    ],
    [
      "005c0db8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c0da0"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c09e8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005c09e8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005c0d98 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 005c0d98 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 005c09f8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005c09f8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 005c09fc ["COPY", "register:40b8:8", ["register:4040:8"]]
~~~


<a id="compare-8b5a5392ca9d4000e35325007d5a07a1"></a>

### [`005c0ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ba4.md) → [`005c0f54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c0/005c0f54.md) FUN_005c0f54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 1件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 1件 [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005c0bbc ["INT_ADD", "register:40f0:8", ["const:5c0bbc:8", "const:4:8"]]
- 005c0bbc ["CALL", null, ["callee:005c426c:8"]]
+ 005c0f6c ["INT_ADD", "register:40f0:8", ["const:5c0f6c:8", "const:4:8"]]
+ 005c0f6c ["CALL", null, ["callee:005c426c:8"]]
~~~


<a id="compare-966d8959a72826065bdf69b44919267b"></a>

### [`005c0bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0bd8.md) → [`005c0f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c0/005c0f88.md) FUN_005c0f88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.24% / 新版 94.24%

優先判定に残った影響 `unresolved_store_alignment` 12件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c0bdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c0be0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c0be4",
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
      "005c0f8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005c0f90",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005c0f94",
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
- 005c0bd8 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 005c0bdc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c0bdc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c0bdc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005c0bdc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005c0be0 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 005c0be0 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 005c0be0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 005c0be0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d2867342d192c8a8a7746046acfc1360"></a>

### [`005c0ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ecc.md) → [`005c127c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c127c.md) FUN_005c127c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c1390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1390.md) [`00743de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743de8.md)
- 新版 呼出元 1件 [`00ad19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005c1740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1740.md) [`00744198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744198.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 95.04% / 新版 95.04%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c1044",
      "incomplete_value": true,
      "site": "005c1058",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "005c1048",
      "incomplete_value": true,
      "site": "005c1058",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "005c104c",
      "incomplete_value": true,
      "site": "005c1058",
      "value": [
        "live",
        "register:40d0:8"
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
      "unmatched:005c1088",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c144c"
      ]
    ],
    [
      "unmatched:005c12a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c173c"
      ]
    ],
    [
      "unmatched:005c1308",
      "READ",
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
      "005c1438",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c144c"
      ]
    ],
    [
      "005c1654",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c173c"
      ]
    ],
    [
      "005c16b8",
      "READ",
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
- 005c1058 ["INT_ADD", "register:40f0:8", ["const:5c1058:8", "const:4:8"]]
- 005c1058 ["CALL", null, ["callee:00c590a0:8"]]
+ 005c1408 ["INT_ADD", "register:40f0:8", ["const:5c1408:8", "const:4:8"]]
+ 005c1408 ["CALL", null, ["callee:00c590a0:8"]]
- 005c1164 ["INT_ADD", "register:40f0:8", ["const:5c1164:8", "const:4:8"]]
- 005c1164 ["CALL", null, ["callee:00c594f0:8"]]
+ 005c1514 ["INT_ADD", "register:40f0:8", ["const:5c1514:8", "const:4:8"]]
+ 005c1514 ["CALL", null, ["callee:00c594f0:8"]]
- 005c1228 ["INT_ADD", "register:40f0:8", ["const:5c1228:8", "const:4:8"]]
- 005c1228 ["CALL", null, ["callee:00c590a0:8"]]
+ 005c15d8 ["INT_ADD", "register:40f0:8", ["const:5c15d8:8", "const:4:8"]]
+ 005c15d8 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-1f7fc6c4749de8de212bc2a76c732613"></a>

### [`005c1390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1390.md) → [`005c1740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1740.md) FUN_005c1740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005c0ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ecc.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) [`00aec9fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aec/00aec9fc.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`005c127c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c127c.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) [`00aed9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aed/00aed9f0.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.45% / 新版 77.45%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `store_destination` 1件, `store_value` 1件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c192c",
      "value": [
        "live",
        "register:40d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c16e0",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 57,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "005c1930",
      "incomplete_value": true,
      "site": "005c1930",
      "value": [
        "live",
        "register:40d0:8"
      ]
    },
    "old": {
      "definition_site": "005c16e4",
      "incomplete_value": true,
      "site": "005c16e4",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "ordinal": 58,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c1784",
      "incomplete_value": true,
      "site": "005c1798",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
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
      "unmatched:005c13d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c17bc"
      ]
    ],
    [
      "unmatched:005c13fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1810"
      ]
    ],
    [
      "005c1820",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005c14a4"
      ]
    ]
  ],
  "added": [
    [
      "005c1780",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c17bc"
      ]
    ],
    [
      "005c17ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1810"
      ]
    ],
    [
      "005c1820",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1854"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c16e0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 005c16e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
+ 005c192c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
+ 005c192c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
- 005c16e4 ["COPY", "tmp:0:8", ["register:40c8:8"]]
- 005c16e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 005c1930 ["COPY", "tmp:0:8", ["register:40d0:8"]]
+ 005c1930 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 005c1798 ["INT_ADD", "register:40f0:8", ["const:5c1798:8", "const:4:8"]]
- 005c1798 ["CALL", null, ["callee:00c590a0:8"]]
+ 005c1b48 ["INT_ADD", "register:40f0:8", ["const:5c1b48:8", "const:4:8"]]
+ 005c1b48 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-3f1b1ad25599500fab078a7cf9f7aa16"></a>

### [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) → [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) FUN_005c1b8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 155件 [`005bb738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb738.md) [`005bc558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc558.md) [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 155件 [`005bbae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bbae8.md) [`005bc908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bc908.md) [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c1bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1bd0.md) · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "005c1800",
      "incomplete_value": true,
      "site": "005c1808",
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
- 005c1808 ["INT_ADD", "register:40f0:8", ["const:5c1808:8", "const:4:8"]]
- 005c1808 ["CALL", null, ["local:b0:8"]]
+ 005c1bb8 ["INT_ADD", "register:40f0:8", ["const:5c1bb8:8", "const:4:8"]]
+ 005c1bb8 ["CALL", null, ["local:b0:8"]]
- 005c17dc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005c17dc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005c1b8c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005c1b8c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 005c17fc ["INT_ADD", "register:40f0:8", ["const:5c17fc:8", "const:4:8"]]
- 005c17fc ["CALL", null, ["local:b0:8"]]
+ 005c1bac ["INT_ADD", "register:40f0:8", ["const:5c1bac:8", "const:4:8"]]
+ 005c1bac ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-45f0679347d18757be22824ef6654d95"></a>

### [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) → [`005c1bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1bd0.md) FUN_005c1bd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 15件 [`005bb3c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb3c4.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 15件 [`005bb774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb774.md) [`005c1bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1bd0.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c1bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1bd0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c1824",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c1828",
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
      "005c1bd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c1bd8",
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
- 005c1820 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005c1820 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005c1bd0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005c1bd0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005c1824 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c1824 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c1824 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005c1824 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c1828 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005c1828 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005c1828 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005c1828 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ecc1d28709e4edaf84d3a9dc019b93f7"></a>

### [`005c1870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1870.md) → [`005c1c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1c20.md) FUN_005c1c20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005bbf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bbf54.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`005bc304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bc304.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c1c2c",
      "incomplete_value": false,
      "site": "005c1c30",
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
      "definition_site": "005c187c",
      "incomplete_value": false,
      "site": "005c1880",
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
      "005c1c2c",
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
      "005c1c2c",
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
- 005c1880 ["INT_ADD", "register:40f0:8", ["const:5c1880:8", "const:4:8"]]
- 005c1880 ["CALL", null, ["callee:0043bad8:8"]]
+ 005c1c30 ["INT_ADD", "register:40f0:8", ["const:5c1c30:8", "const:4:8"]]
+ 005c1c30 ["CALL", null, ["callee:0043bad8:8"]]
- 005c1878 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005c1c28 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005c187c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005c187c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005c187c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005c187c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005c1c2c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005c1c2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005c1c2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005c1c2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-023a56e66ddb70b6e1bd121f73432fad"></a>

### [`005c1884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1884.md) → [`005c1c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1c34.md) FUN_005c1c34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 9件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`0068483c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/0068483c.md) [`00743648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743648.md) [`007444d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007444d0.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 2件 [`005c1a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1a3c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 9件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`00684bec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00684/00684bec.md) [`007439f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00743/007439f8.md) [`00744880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744880.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 2件 [`005c1dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1dec.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 54.55% / 新版 54.55%

優先判定に残った影響 `unresolved_branch_alignment` 8件, `unresolved_store_alignment` 23件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c1888",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c188c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c1890",
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
      "005c1c38",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005c1c3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c1c40",
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
- 005c1884 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 005c1888 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c1888 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c1888 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 005c1888 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005c188c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:60:8"]]
- 005c188c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


