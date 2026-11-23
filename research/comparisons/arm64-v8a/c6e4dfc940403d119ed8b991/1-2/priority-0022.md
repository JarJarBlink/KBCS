# v16.0.2 → v16.0.3 · 最優先の変更候補 (22)

[一覧の目次](README.md)

<a id="compare-c9be272d06fccb1973a27345564717d4"></a>

### [`005a894c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a894c.md) → [`005a8cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8cfc.md) _INIT_54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.36% / 新版 81.36%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a8e6c",
      "incomplete_value": true,
      "site": "005a8e70",
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
      "definition_site": "005a8e88",
      "incomplete_value": true,
      "site": "005a8e98",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a8e8c",
      "incomplete_value": true,
      "site": "005a8e98",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:005a897c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a8988",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005a8990",
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
      "005a8d2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005a8d38",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a8d40",
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
- 005a8ac0 ["INT_ADD", "register:40f0:8", ["const:5a8ac0:8", "const:4:8"]]
- 005a8ac0 ["CALL", null, ["callee:0043bb58:8"]]
+ 005a8e70 ["INT_ADD", "register:40f0:8", ["const:5a8e70:8", "const:4:8"]]
+ 005a8e70 ["CALL", null, ["callee:0043bb58:8"]]
- 005a8ae8 ["INT_ADD", "register:40f0:8", ["const:5a8ae8:8", "const:4:8"]]
- 005a8ae8 ["CALL", null, ["callee:0043bb58:8"]]
+ 005a8e98 ["INT_ADD", "register:40f0:8", ["const:5a8e98:8", "const:4:8"]]
+ 005a8e98 ["CALL", null, ["callee:0043bb58:8"]]
- 005a8b24 ["INT_ADD", "register:40f0:8", ["const:5a8b24:8", "const:4:8"]]
- 005a8b24 ["CALL", null, ["callee:0043bb58:8"]]
+ 005a8ed4 ["INT_ADD", "register:40f0:8", ["const:5a8ed4:8", "const:4:8"]]
+ 005a8ed4 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-da946a1f8f890d6a286e25134a0a32be"></a>

### [`005a8cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8cdc.md) → [`005a908c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a908c.md) FUN_005a908c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005a8e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8e68.md) · 呼出先 2件 [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`005a9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d64.md)
- 新版 呼出元 1件 [`005a9218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9218.md) · 呼出先 2件 [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`005aa114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa114.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.21% / 新版 71.21%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a9170",
      "incomplete_value": true,
      "site": "005a9174",
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
                "const:3:8"
              ]
            ]
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a8dc0",
      "incomplete_value": true,
      "site": "005a8dc4",
      "value": [
        "INT_MULT",
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
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a8cf8",
      "READ",
      [
        "storage",
        "Stack[0x18]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a8cfc",
      "READ",
      [
        "storage",
        "Stack[0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a8d04",
      "READ",
      [
        "storage",
        "Stack[0x8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005a90a8",
      "READ",
      [
        "storage",
        "Stack[0x18]",
        null,
        null
      ]
    ],
    [
      "005a90ac",
      "READ",
      [
        "storage",
        "Stack[0x10]",
        null,
        null
      ]
    ],
    [
      "005a90b4",
      "READ",
      [
        "storage",
        "Stack[0x8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005a8dc4 ["INT_ADD", "register:40f0:8", ["const:5a8dc4:8", "const:4:8"]]
- 005a8dc4 ["CALL", null, ["callee:005aa114:8"]]
+ 005a9174 ["INT_ADD", "register:40f0:8", ["const:5a9174:8", "const:4:8"]]
+ 005a9174 ["CALL", null, ["callee:005aa114:8"]]
- 005a8cf8 ["INT_ADD", "tmp:0:8", ["register:40e8:8", "const:78:8"]]
- 005a8cf8 ["LOAD", "register:40e0:8", ["const:1b1:8", "tmp:0:8"]]
- 005a8cfc ["INT_ADD", "tmp:0:8", ["register:40e8:8", "const:70:8"]]
- 005a8cfc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 005a8cfc ["INT_ZEXT", "register:40c8:8", ["tmp:1:1"]]
~~~


<a id="compare-7a7e047a0cfb22579398e5010bac012c"></a>

### [`005a8e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8e68.md) → [`005a9218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9218.md) FUN_005a9218

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005a8cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8cdc.md) [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`009b3188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3188.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005a908c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a908c.md) [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md) [`009b4134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4134.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.12% / 新版 66.12%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 45件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a927c",
      "incomplete_value": true,
      "site": "005a9280",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:110:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a8ecc",
      "incomplete_value": true,
      "site": "005a8ed0",
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
                "register:8:8"
              ],
              [
                "leaf",
                "const:110:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
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
      "definition_site": "005a9338",
      "incomplete_value": true,
      "site": "005a9340",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a8f88",
      "incomplete_value": true,
      "site": "005a8f90",
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
                "register:40a8:8"
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a91f0",
      "incomplete_value": true,
      "site": "005a91f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a8e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a8e70",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a8e74",
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
      "005a921c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005a9220",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005a9224",
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
- 005a8ed0 ["INT_ADD", "register:40f0:8", ["const:5a8ed0:8", "const:4:8"]]
- 005a8ed0 ["CALL", null, ["callee:004413ec:8"]]
+ 005a9280 ["INT_ADD", "register:40f0:8", ["const:5a9280:8", "const:4:8"]]
+ 005a9280 ["CALL", null, ["callee:004413ec:8"]]
- 005a8f90 ["INT_ADD", "register:40f0:8", ["const:5a8f90:8", "const:4:8"]]
- 005a8f90 ["CALL", null, ["callee:004413ec:8"]]
+ 005a9340 ["INT_ADD", "register:40f0:8", ["const:5a9340:8", "const:4:8"]]
+ 005a9340 ["CALL", null, ["callee:004413ec:8"]]
- 005a91f8 ["INT_ADD", "register:40f0:8", ["const:5a91f8:8", "const:4:8"]]
- 005a91f8 ["CALL", null, ["callee:004413ec:8"]]
+ 005a95a8 ["INT_ADD", "register:40f0:8", ["const:5a95a8:8", "const:4:8"]]
+ 005a95a8 ["CALL", null, ["callee:004413ec:8"]]
~~~


<a id="compare-155571b632d3d69fbec09f692e64940d"></a>

### [`005a9734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9734.md) → [`005a9ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9ae4.md) FUN_005a9ae4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a9764",
      "incomplete_value": true,
      "site": "005a976c",
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
            "const:10:8"
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
      "definition_site": "005a9b18",
      "incomplete_value": true,
      "site": "005a9b1c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "005a9768",
      "incomplete_value": true,
      "site": "005a976c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:88:8"
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
      "unmatched:005a9734",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9738",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a973c",
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
      "005a9ae4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005a9ae8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a9aec",
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
- 005a976c ["INT_ADD", "register:40f0:8", ["const:5a976c:8", "const:4:8"]]
- 005a976c ["CALL", null, ["callee:005aa574:8"]]
+ 005a9b1c ["INT_ADD", "register:40f0:8", ["const:5a9b1c:8", "const:4:8"]]
+ 005a9b1c ["CALL", null, ["callee:005aa574:8"]]
- 005a9734 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a9734 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a9734 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005a9734 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a9738 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a9738 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-d18b4278be161f6181953c33731736e8"></a>

### [`005a97a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a97a0.md) → [`005a9b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9b50.md) FUN_005a9b50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)
- 新版 呼出元 1件 [`009b63bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b63bc.md) · 呼出先 1件 [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a97cc",
      "DATA",
      [
        "storage",
        "00c6f1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a9b7c",
      "DATA",
      [
        "storage",
        "00c70170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a97bc ["INT_ADD", "register:40f0:8", ["const:5a97bc:8", "const:4:8"]]
- 005a97bc ["CALL", null, ["callee:0059bc68:8"]]
+ 005a9b6c ["INT_ADD", "register:40f0:8", ["const:5a9b6c:8", "const:4:8"]]
+ 005a9b6c ["CALL", null, ["callee:0059bc68:8"]]
- 005a97c0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005a9b70 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005a97c4 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 005a97c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a97c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a97c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a96ef74ef9076ad8aab39623500a0a5"></a>

### [`005a97fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a97fc.md) → [`005a9bac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9bac.md) FUN_005a9bac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ff0.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md) [`00c59010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59010.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a9be4",
      "incomplete_value": false,
      "site": "005a9bf0",
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
            "const:e01:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a9834",
      "incomplete_value": false,
      "site": "005a9840",
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
            "const:d2a:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a9c10",
      "incomplete_value": true,
      "site": "005a9c18",
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
            "const:81e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a9860",
      "incomplete_value": false,
      "site": "005a9868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:6c6:8"
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
      "unmatched:005a9800",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9804",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9808",
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
      "005a9bb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005a9bb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a9bb8",
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
- 005a9840 ["INT_ADD", "register:40f0:8", ["const:5a9840:8", "const:4:8"]]
- 005a9840 ["CALL", null, ["callee:00c59000:8"]]
+ 005a9bf0 ["INT_ADD", "register:40f0:8", ["const:5a9bf0:8", "const:4:8"]]
+ 005a9bf0 ["CALL", null, ["callee:00c59000:8"]]
- 005a9868 ["INT_ADD", "register:40f0:8", ["const:5a9868:8", "const:4:8"]]
- 005a9868 ["CALL", null, ["callee:00c59010:8"]]
+ 005a9c18 ["INT_ADD", "register:40f0:8", ["const:5a9c18:8", "const:4:8"]]
+ 005a9c18 ["CALL", null, ["callee:00c59010:8"]]
- 005a97fc ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
~~~


<a id="compare-c15ee88c2036c1c05c05b06b792c5a97"></a>

### [`005a99ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a99ac.md) → [`005a9d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9d5c.md) FUN_005a9d5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0045986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/0045986c.md) [`00597150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597150.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00459b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459b8c.md) [`00597470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597470.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 56.94% / 新版 56.94%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a9a6c",
      "incomplete_value": true,
      "site": "005a9a78",
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
      "unmatched:005a99b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a99b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a99b8",
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
      "005a9d60",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005a9d64",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a9d68",
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
- 005a9a78 ["INT_ADD", "register:40f0:8", ["const:5a9a78:8", "const:4:8"]]
- 005a9a78 ["CALL", null, ["callee:00459b8c:8"]]
+ 005a9e28 ["INT_ADD", "register:40f0:8", ["const:5a9e28:8", "const:4:8"]]
+ 005a9e28 ["CALL", null, ["callee:00459b8c:8"]]
- 005a99ac ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 005a99b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a99b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a99b0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 005a99b0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2da3ae1dda7a4e6104904c4cb5cf5607"></a>

### [`005a9b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9b50.md) → [`005a9f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9f00.md) FUN_005a9f00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 44.44% / 新版 44.44%

優先判定に残った影響 `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a9b50",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9b54",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9b74",
      "DATA",
      [
        "storage",
        "00c6f2a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a9f00",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a9f04",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a9f24",
      "DATA",
      [
        "storage",
        "00c70278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a9b50 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a9b50 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a9b50 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005a9b50 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a9b54 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a9b54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005a9b58 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-59382972762463ad129dc70118e4fe64"></a>

### [`005a9b98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9b98.md) → [`005a9f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9f48.md) FUN_005a9f48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.00% / 新版 84.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a9bd0",
      "incomplete_value": true,
      "site": "005a9bd4",
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
      "unmatched:005a9bc8",
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
      "005a9f78",
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
- 005a9bd4 ["INT_ADD", "register:40f0:8", ["const:5a9bd4:8", "const:4:8"]]
- 005a9bd4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a9f84 ["INT_ADD", "register:40f0:8", ["const:5a9f84:8", "const:4:8"]]
+ 005a9f84 ["CALL", null, ["callee:00c58f50:8"]]
- 005a9bac ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 005a9bac ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 005a9bac ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 005a9bac ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 005a9f5c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 005a9f5c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 005a9f5c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 005a9f5c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 005a9bb4 ["INT_ADD", "register:40f0:8", ["const:5a9bb4:8", "const:4:8"]]
- 005a9bb4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a9f64 ["INT_ADD", "register:40f0:8", ["const:5a9f64:8", "const:4:8"]]
+ 005a9f64 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2b6e25eaccd2edaf11d98609e2f68cdc"></a>

### [`005a9bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9bfc.md) → [`005a9fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9fac.md) FUN_005a9fac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a9bfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9c00",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9c18",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f50"
      ]
    ]
  ],
  "added": [
    [
      "005a9fac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a9fb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a9fdc",
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
- 005a9bfc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a9bfc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a9bfc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005a9bfc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a9c00 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a9c00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005a9c04 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-fcaaffc763d18181cd04a4789e04cd12"></a>

### [`005a9c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9c5c.md) → [`005aa00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa00c.md) FUN_005aa00c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005a9d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d40.md) [`005aa294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa294.md) · 呼出先 2件 [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005aa0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa0f0.md) [`005aa644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa644.md) · 呼出先 2件 [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aa040",
      "incomplete_value": true,
      "site": "005aa044",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a9c90",
      "incomplete_value": true,
      "site": "005a9c94",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aa07c",
      "incomplete_value": true,
      "site": "005aa080",
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
                "const:40:8"
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
      "unmatched:005a9c5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9c60",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9ce0",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005aa00c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005aa010",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005aa090",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a9c94 ["INT_ADD", "register:40f0:8", ["const:5a9c94:8", "const:4:8"]]
- 005a9c94 ["CALL", null, ["callee:005aa574:8"]]
+ 005aa044 ["INT_ADD", "register:40f0:8", ["const:5aa044:8", "const:4:8"]]
+ 005aa044 ["CALL", null, ["callee:005aa574:8"]]
- 005a9cd0 ["INT_ADD", "register:40f0:8", ["const:5a9cd0:8", "const:4:8"]]
- 005a9cd0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005aa080 ["INT_ADD", "register:40f0:8", ["const:5aa080:8", "const:4:8"]]
+ 005aa080 ["CALL", null, ["callee:00c58f50:8"]]
- 005a9c5c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a9c5c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a9c5c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005a9c5c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-4194f1acc78d2099b60ee799ef0a58ea"></a>

### [`005a9d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d40.md) → [`005aa0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa0f0.md) FUN_005aa0f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005a9c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9c5c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005aa00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa00c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a9d50 ["INT_ADD", "register:40f0:8", ["const:5a9d50:8", "const:4:8"]]
- 005a9d50 ["CALL", null, ["callee:005aa00c:8"]]
+ 005aa100 ["INT_ADD", "register:40f0:8", ["const:5aa100:8", "const:4:8"]]
+ 005aa100 ["CALL", null, ["callee:005aa00c:8"]]
~~~


<a id="compare-2d021e04bf4fdff3f89cfb1ff733b791"></a>

### [`005a9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d64.md) → [`005aa114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa114.md) FUN_005aa114

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005a8cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8cdc.md) [`00749a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749a2c.md) [`009b6cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6cac.md) · 呼出先 6件 [`005a9ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9ea4.md) [`005a9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f24.md) [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`005a908c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a908c.md) [`00749ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749ddc.md) [`009b7c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7c58.md) · 呼出先 6件 [`005aa254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa254.md) [`005aa2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa2d4.md) [`005aa344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa344.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 7件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aa168",
      "incomplete_value": true,
      "site": "005aa16c",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a9db8",
      "incomplete_value": true,
      "site": "005a9dbc",
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005a9da8"
      ],
      [
        "FALL_THROUGH",
        "005aa158"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005aa154",
      "incomplete_value": true,
      "site": "005aa184",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_XOR",
            "8",
            [
              "INT_OR",
              [
                "leaf",
                "const:e000000000000003:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a9da4",
      "incomplete_value": true,
      "site": "005a9dd4",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_XOR",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "leaf",
                "const:e000000000000003:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
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
        "005a9da8"
      ],
      [
        "FALL_THROUGH",
        "005aa158"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005aa154",
      "incomplete_value": true,
      "site": "005aa184",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_XOR",
            "8",
            [
              "INT_OR",
              [
                "leaf",
                "const:e000000000000003:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a9da4",
      "incomplete_value": true,
      "site": "005a9dd4",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_XOR",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "leaf",
                "const:e000000000000003:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
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
      "unmatched:005a9d68",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9d6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9d70",
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
      "005aa118",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005aa11c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005aa120",
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
- 005a9dbc ["INT_ADD", "register:40f0:8", ["const:5a9dbc:8", "const:4:8"]]
- 005a9dbc ["CALL", null, ["callee:00c58f30:8"]]
+ 005aa16c ["INT_ADD", "register:40f0:8", ["const:5aa16c:8", "const:4:8"]]
+ 005aa16c ["CALL", null, ["callee:00c58f30:8"]]
- 005a9d64 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 005a9d68 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a9d68 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a9d68 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 005a9d68 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-03e6cc7a741c073abd7c7429485054a2"></a>

### [`005a9ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9ea4.md) → [`005aa254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa254.md) FUN_005aa254

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005a9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d64.md) · 呼出先 2件 [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005aa114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa114.md) · 呼出先 2件 [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a9ef0",
      "incomplete_value": true,
      "site": "005a9ef8",
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
            "const:10:8"
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
      "definition_site": "005aa2a4",
      "incomplete_value": true,
      "site": "005aa2a8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "005a9ef4",
      "incomplete_value": true,
      "site": "005a9ef8",
      "value": [
        "INT_SUB",
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
      "unmatched:005a9ed4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa26c"
      ]
    ],
    [
      "unmatched:005a9ee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa2bc"
      ]
    ],
    [
      "005aa2b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005a9eec"
      ]
    ]
  ],
  "added": [
    [
      "005aa284",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa26c"
      ]
    ],
    [
      "005aa294",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa2bc"
      ]
    ],
    [
      "005aa2b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa29c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a9ef8 ["INT_ADD", "register:40f0:8", ["const:5a9ef8:8", "const:4:8"]]
- 005a9ef8 ["CALL", null, ["callee:005aa574:8"]]
+ 005aa2a8 ["INT_ADD", "register:40f0:8", ["const:5aa2a8:8", "const:4:8"]]
+ 005aa2a8 ["CALL", null, ["callee:005aa574:8"]]
- 005a9ed4 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 005a9ed4 ["CBRANCH", null, ["local:b1:8", "tmp:0:1"]]
- 005a9ed8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8:8"]]
- 005a9ed8 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9de2cbe8b10eb8c5c8b0777ddf7cc9a6"></a>

### [`005a9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f24.md) → [`005aa2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa2d4.md) FUN_005aa2d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005a9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d64.md) [`009b5dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5dd8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`005aa114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa114.md) [`009b6d84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6d84.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a9f24",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9f30",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005a9f34",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "005aa2d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005aa2e0",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "005aa2e4",
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
- 005a9f24 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a9f24 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a9f24 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 005a9f24 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a9f28 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005a9f2c ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-30dfb63e324e0933a97d49e11a062c9f"></a>

### [`005a9f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f38.md) → [`005aa2e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa2e8.md) FUN_005aa2e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a9f74",
      "incomplete_value": true,
      "site": "005a9f78",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005a9f64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa334"
      ]
    ]
  ],
  "added": [
    [
      "005aa314",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa334"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a9f78 ["INT_ADD", "register:40f0:8", ["const:5a9f78:8", "const:4:8"]]
- 005a9f78 ["CALL", null, ["callee:005aa574:8"]]
+ 005aa328 ["INT_ADD", "register:40f0:8", ["const:5aa328:8", "const:4:8"]]
+ 005aa328 ["CALL", null, ["callee:005aa574:8"]]
- 005a9f50 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005a9f64 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
~~~


<a id="compare-94adf3d28af9779c96c8d1f4f0e86eb1"></a>

### [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md) → [`005aa344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa344.md) FUN_005aa344

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`005a9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d64.md) [`00749a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749a2c.md) [`009aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa678.md) [`009b3188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3188.md) [`009b5dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5dd8.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005aa0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa0bc.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 5件 [`005aa114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa114.md) [`00749ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749ddc.md) [`009ab624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009ab624.md) [`009b4134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4134.md) [`009b6d84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6d84.md) · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005aa46c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa46c.md) [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.08% / 新版 81.08%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 4件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005aa028",
      "incomplete_value": true,
      "site": "005aa02c",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aa3fc",
      "incomplete_value": true,
      "site": "005aa404",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aa400",
      "incomplete_value": true,
      "site": "005aa404",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:38:8"
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
      "unmatched:005a9f94",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a9f98",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005aa000",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa3fc"
      ]
    ]
  ],
  "added": [
    [
      "005aa344",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005aa348",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005aa3b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa3fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa02c ["INT_ADD", "register:40f0:8", ["const:5aa02c:8", "const:4:8"]]
- 005aa02c ["CALL", null, ["callee:00c58f30:8"]]
+ 005aa3dc ["INT_ADD", "register:40f0:8", ["const:5aa3dc:8", "const:4:8"]]
+ 005aa3dc ["CALL", null, ["callee:00c58f30:8"]]
- 005aa054 ["INT_ADD", "register:40f0:8", ["const:5aa054:8", "const:4:8"]]
- 005aa054 ["CALL", null, ["callee:005aa46c:8"]]
+ 005aa404 ["INT_ADD", "register:40f0:8", ["const:5aa404:8", "const:4:8"]]
+ 005aa404 ["CALL", null, ["callee:005aa46c:8"]]
- 005aa074 ["INT_ADD", "register:40f0:8", ["const:5aa074:8", "const:4:8"]]
- 005aa074 ["CALL", null, ["callee:005aa560:8"]]
+ 005aa424 ["INT_ADD", "register:40f0:8", ["const:5aa424:8", "const:4:8"]]
+ 005aa424 ["CALL", null, ["callee:005aa560:8"]]
~~~


<a id="compare-d13ddc0f797f382b47cbaafdc38b9136"></a>

### [`005aa0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa0bc.md) → [`005aa46c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa46c.md) FUN_005aa46c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 1件 [`005aa344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa344.md) · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005aa14c",
      "incomplete_value": true,
      "site": "005aa154",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005aa14c",
      "incomplete_value": true,
      "site": "005aa154",
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
                "const:40:8"
              ]
            ]
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
      "unmatched:005aa0bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005aa0c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005aa11c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa4b0"
      ]
    ]
  ],
  "added": [
    [
      "005aa46c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005aa470",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005aa4cc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa4dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa154 ["INT_ADD", "register:40f0:8", ["const:5aa154:8", "const:4:8"]]
- 005aa154 ["CALL", null, ["callee:0043be80:8"]]
+ 005aa504 ["INT_ADD", "register:40f0:8", ["const:5aa504:8", "const:4:8"]]
+ 005aa504 ["CALL", null, ["callee:0043be80:8"]]
- 005aa0bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005aa0bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005aa0bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005aa0bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005aa0c0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005aa0c0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005aa0c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005aa0c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-25fc2dcd5bfb36c4d94e63c54ad7b50d"></a>

### [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) → [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) FUN_005aa560

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 12件 [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md) [`005aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa678.md) [`005ab7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab7e0.md) [`00747b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747b08.md) [`00748264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748264.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 12件 [`005aa344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa344.md) [`005aaa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aaa28.md) [`005abb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005abb90.md) [`00747eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747eb8.md) [`00748614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748614.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aa56c",
      "incomplete_value": false,
      "site": "005aa570",
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
      "definition_site": "005aa1bc",
      "incomplete_value": false,
      "site": "005aa1c0",
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
      "005aa56c",
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
      "005aa56c",
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
- 005aa1c0 ["INT_ADD", "register:40f0:8", ["const:5aa1c0:8", "const:4:8"]]
- 005aa1c0 ["CALL", null, ["callee:0043bad8:8"]]
+ 005aa570 ["INT_ADD", "register:40f0:8", ["const:5aa570:8", "const:4:8"]]
+ 005aa570 ["CALL", null, ["callee:0043bad8:8"]]
- 005aa1b8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005aa568 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005aa1bc ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005aa1bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005aa1bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005aa1bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005aa56c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005aa56c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005aa56c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005aa56c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-84b280234ffe3c313c73c478b499a96f"></a>

### [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) → [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md) FUN_005aa574

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 9件 [`005a8e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8e68.md) [`005a9734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9734.md) [`005a9c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9c5c.md) [`005a9ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9ea4.md) [`005a9f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f38.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 9件 [`005a9218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9218.md) [`005a9ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a9/005a9ae4.md) [`005aa00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa00c.md) [`005aa254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa254.md) [`005aa2e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa2e8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aa5c0",
      "incomplete_value": true,
      "site": "005aa5c4",
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
                "const:80:8"
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
      "definition_site": "005aa5d0",
      "incomplete_value": true,
      "site": "005aa5d4",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aa5e0",
      "incomplete_value": true,
      "site": "005aa5e4",
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
                "const:48:8"
              ]
            ]
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
      "unmatched:005aa1c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005aa1c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005aa1f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa5ac"
      ]
    ]
  ],
  "added": [
    [
      "005aa574",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005aa578",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005aa5a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aa5ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa214 ["INT_ADD", "register:40f0:8", ["const:5aa214:8", "const:4:8"]]
- 005aa214 ["CALL", null, ["callee:00c58f50:8"]]
+ 005aa5c4 ["INT_ADD", "register:40f0:8", ["const:5aa5c4:8", "const:4:8"]]
+ 005aa5c4 ["CALL", null, ["callee:00c58f50:8"]]
- 005aa224 ["INT_ADD", "register:40f0:8", ["const:5aa224:8", "const:4:8"]]
- 005aa224 ["CALL", null, ["callee:00c58f50:8"]]
+ 005aa5d4 ["INT_ADD", "register:40f0:8", ["const:5aa5d4:8", "const:4:8"]]
+ 005aa5d4 ["CALL", null, ["callee:00c58f50:8"]]
- 005aa234 ["INT_ADD", "register:40f0:8", ["const:5aa234:8", "const:4:8"]]
- 005aa234 ["CALL", null, ["callee:00c58f50:8"]]
+ 005aa5e4 ["INT_ADD", "register:40f0:8", ["const:5aa5e4:8", "const:4:8"]]
+ 005aa5e4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3af3cacc66dadfd1b9d4b4fb5fc254b1"></a>

### [`005aa254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa254.md) → [`005aa604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa604.md) FUN_005aa604

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
      "definition_site": "005aa608",
      "incomplete_value": false,
      "site": "005aa60c",
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
            "const:228:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aa258",
      "incomplete_value": false,
      "site": "005aa25c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:258:8"
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
      "005aa60c",
      "DATA",
      [
        "storage",
        "00c6f258",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005aa60c",
      "DATA",
      [
        "storage",
        "00c70228",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa254 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005aa604 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005aa258 ["COPY", "tmp:0:8", ["const:258:8"]]
- 005aa258 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005aa258 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005aa258 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005aa608 ["COPY", "tmp:0:8", ["const:228:8"]]
+ 005aa608 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005aa608 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005aa608 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-124becfe5f5061ea4a119365a2efe619"></a>

### [`005aa264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa264.md) → [`005aa614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa614.md) FUN_005aa614

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
      "unmatched:005aa27c",
      "DATA",
      [
        "storage",
        "00c6f258",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005aa62c",
      "DATA",
      [
        "storage",
        "00c70228",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa270 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005aa620 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005aa274 ["COPY", "tmp:0:8", ["const:258:8"]]
- 005aa274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005aa274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005aa274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005aa278 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-d848f3e82a99a932268ea1de2e615ab8"></a>

### [`005aa2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa2a0.md) → [`005aa650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa650.md) FUN_005aa650

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
      "definition_site": "005aa654",
      "incomplete_value": false,
      "site": "005aa658",
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
            "const:278:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aa2a4",
      "incomplete_value": false,
      "site": "005aa2a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
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
      "005aa658",
      "DATA",
      [
        "storage",
        "00c6f2a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005aa658",
      "DATA",
      [
        "storage",
        "00c70278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa2a0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005aa650 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005aa2a4 ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 005aa2a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005aa2a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005aa2a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005aa654 ["COPY", "tmp:0:8", ["const:278:8"]]
+ 005aa654 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005aa654 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005aa654 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3adc5dd03f24eedb961ec411469f82a8"></a>

### [`005aa2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa2b0.md) → [`005aa660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa660.md) FUN_005aa660

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
      "unmatched:005aa2c8",
      "DATA",
      [
        "storage",
        "00c6f2a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005aa678",
      "DATA",
      [
        "storage",
        "00c70278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa2bc ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005aa66c ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005aa2c0 ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 005aa2c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005aa2c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005aa2c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005aa2c4 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-aa942668a37dd74f669af2411e3c0fa8"></a>

### [`005aa2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa2e8.md) → [`005aa698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa698.md) _INIT_55

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
      "definition_site": "005aa6d4",
      "incomplete_value": true,
      "site": "005aa6f0",
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
      "definition_site": "005aa324",
      "incomplete_value": true,
      "site": "005aa340",
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
      "definition_site": "005aa6f8",
      "incomplete_value": true,
      "site": "005aa714",
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
      "definition_site": "005aa348",
      "incomplete_value": true,
      "site": "005aa364",
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
      "definition_site": "005aa718",
      "incomplete_value": true,
      "site": "005aa734",
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
      "definition_site": "005aa368",
      "incomplete_value": true,
      "site": "005aa384",
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
      "005aa6d4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005aa6f8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005aa718",
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
      "005aa6d4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005aa6f8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005aa718",
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
- 005aa448 ["INT_ADD", "register:40f0:8", ["const:5aa448:8", "const:4:8"]]
- 005aa448 ["CALL", null, ["callee:0043bb58:8"]]
+ 005aa7f8 ["INT_ADD", "register:40f0:8", ["const:5aa7f8:8", "const:4:8"]]
+ 005aa7f8 ["CALL", null, ["callee:0043bb58:8"]]
- 005aa51c ["INT_ADD", "register:40f0:8", ["const:5aa51c:8", "const:4:8"]]
- 005aa51c ["CALL", null, ["callee:00c58ed0:8"]]
+ 005aa8cc ["INT_ADD", "register:40f0:8", ["const:5aa8cc:8", "const:4:8"]]
+ 005aa8cc ["CALL", null, ["callee:00c58ed0:8"]]
- 005aa310 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005aa6c0 ["COPY", "register:4098:8", ["const:ca7000:8"]]
~~~


<a id="compare-e5425f034aaf9d1422bb4facda30f917"></a>

### [`005aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa678.md) → [`005aaa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aaa28.md) FUN_005aaa28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005aa7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa7ec.md) · 呼出先 6件 [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005aab9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aab9c.md) · 呼出先 6件 [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.70% / 新版 95.70%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005aaa5c",
      "incomplete_value": false,
      "site": "005aaa60",
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
            "const:2c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aa6ac",
      "incomplete_value": false,
      "site": "005aa6b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:2f8:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005aab58",
      "incomplete_value": false,
      "site": "005aab5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aa7a8",
      "incomplete_value": false,
      "site": "005aa7ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005aaa60",
      "DATA",
      [
        "storage",
        "00c6f2f8",
        null,
        "pointer"
      ]
    ],
    [
      "005aab5c",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005aaa60",
      "DATA",
      [
        "storage",
        "00c702c8",
        null,
        "pointer"
      ]
    ],
    [
      "005aab5c",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa6a4 ["INT_ADD", "register:40f0:8", ["const:5aa6a4:8", "const:4:8"]]
- 005aa6a4 ["CALL", null, ["callee:0059bc3c:8"]]
+ 005aaa54 ["INT_ADD", "register:40f0:8", ["const:5aaa54:8", "const:4:8"]]
+ 005aaa54 ["CALL", null, ["callee:0059bc3c:8"]]
- 005aa6a8 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005aaa58 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005aa6ac ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 005aa6ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005aa6ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005aa6ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005aaa5c ["COPY", "tmp:0:8", ["const:2c8:8"]]
+ 005aaa5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005aaa5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005aaa5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8eaf5868bc642eec37caf25341dba83c"></a>

### [`005aa7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa7ec.md) → [`005aab9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aab9c.md) FUN_005aab9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa678.md) [`009b37ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b37ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005aaa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aaa28.md) [`009b4798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4798.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.76% / 新版 95.76%

優先判定に残った影響 `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005aabf8",
      "incomplete_value": true,
      "site": "005aabf8",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:2b4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aa848",
      "incomplete_value": true,
      "site": "005aa848",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1e5:8"
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
      "definition_site": "005aad30",
      "incomplete_value": true,
      "site": "005aad30",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:f20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aa980",
      "incomplete_value": true,
      "site": "005aa980",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:ee0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005aae64",
      "incomplete_value": true,
      "site": "005aae64",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:14d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aaab4",
      "incomplete_value": true,
      "site": "005aaab4",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:7e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005aabe8",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "005aad1c",
      "READ",
      [
        "storage",
        "0029fee0",
        null,
        "string"
      ]
    ],
    [
      "005aae54",
      "READ",
      [
        "storage",
        "002b907e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005aabe8",
      "READ",
      [
        "storage",
        "002b72b4",
        null,
        "string"
      ]
    ],
    [
      "005aad1c",
      "READ",
      [
        "storage",
        "0029ff20",
        null,
        "string"
      ]
    ],
    [
      "005aae54",
      "READ",
      [
        "storage",
        "002b914d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aa834 ["COPY", "tmp:0:8", ["const:1e5:8"]]
- 005aa834 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005aa834 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005aa834 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005aabe4 ["COPY", "tmp:0:8", ["const:2b4:8"]]
+ 005aabe4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005aabe4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005aabe4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005aa854 ["INT_ADD", "register:40f0:8", ["const:5aa854:8", "const:4:8"]]
- 005aa854 ["CALL", null, ["callee:004413ec:8"]]
+ 005aac04 ["INT_ADD", "register:40f0:8", ["const:5aac04:8", "const:4:8"]]
+ 005aac04 ["CALL", null, ["callee:004413ec:8"]]
- 005aa870 ["COPY", "register:0:8", ["register:4040:8"]]
- 005aa870 ["INT_ADD", "register:40f0:8", ["const:5aa870:8", "const:4:8"]]
- 005aa870 ["CALLIND", null, ["register:0:8"]]
+ 005aac20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005aac20 ["INT_ADD", "register:40f0:8", ["const:5aac20:8", "const:4:8"]]
+ 005aac20 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-01ccca3a424c576856cc768a4c902260"></a>

### [`005aaec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aaec8.md) → [`005ab278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab278.md) FUN_005ab278

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)
- 新版 呼出元 1件 [`009b5900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5900.md) · 呼出先 1件 [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ab29c",
      "incomplete_value": false,
      "site": "005ab2a4",
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
            "const:2e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aaeec",
      "incomplete_value": false,
      "site": "005aaef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:318:8"
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
      "005ab2a4",
      "DATA",
      [
        "storage",
        "00c6f318",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ab2a4",
      "DATA",
      [
        "storage",
        "00c702e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aaee4 ["INT_ADD", "register:40f0:8", ["const:5aaee4:8", "const:4:8"]]
- 005aaee4 ["CALL", null, ["callee:0059bc68:8"]]
+ 005ab294 ["INT_ADD", "register:40f0:8", ["const:5ab294:8", "const:4:8"]]
+ 005ab294 ["CALL", null, ["callee:0059bc68:8"]]
- 005aaee8 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ab298 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005aaeec ["COPY", "tmp:0:8", ["const:318:8"]]
- 005aaeec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005aaeec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005aaeec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ab29c ["COPY", "tmp:0:8", ["const:2e8:8"]]
+ 005ab29c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab29c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab29c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e3f4575d3b29b29e8a10d06b79190224"></a>

### [`005aaf24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aaf24.md) → [`005ab2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab2d4.md) FUN_005ab2d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ff0.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md) [`00c59010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59010.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.74% / 新版 96.74%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ab30c",
      "incomplete_value": false,
      "site": "005ab318",
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
            "const:e01:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aaf5c",
      "incomplete_value": false,
      "site": "005aaf68",
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
            "const:d2a:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ab338",
      "incomplete_value": false,
      "site": "005ab340",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:81e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aaf88",
      "incomplete_value": false,
      "site": "005aaf90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:6c6:8"
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
      "definition_site": "005ab39c",
      "incomplete_value": false,
      "site": "005ab3a4",
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
            "const:e0f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005aafec",
      "incomplete_value": false,
      "site": "005aaff4",
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
            "const:d38:8"
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
      "005ab30c",
      "PARAM",
      [
        "storage",
        "002b0d2a",
        null,
        "string"
      ]
    ],
    [
      "005ab338",
      "PARAM",
      [
        "storage",
        "002a56c6",
        null,
        "string"
      ]
    ],
    [
      "005ab39c",
      "PARAM",
      [
        "storage",
        "002b0d38",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005ab30c",
      "PARAM",
      [
        "storage",
        "002b0e01",
        null,
        "string"
      ]
    ],
    [
      "005ab338",
      "PARAM",
      [
        "storage",
        "002a581e",
        null,
        "string"
      ]
    ],
    [
      "005ab39c",
      "PARAM",
      [
        "storage",
        "002b0e0f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aaf68 ["INT_ADD", "register:40f0:8", ["const:5aaf68:8", "const:4:8"]]
- 005aaf68 ["CALL", null, ["callee:00c59000:8"]]
+ 005ab318 ["INT_ADD", "register:40f0:8", ["const:5ab318:8", "const:4:8"]]
+ 005ab318 ["CALL", null, ["callee:00c59000:8"]]
- 005aaf90 ["INT_ADD", "register:40f0:8", ["const:5aaf90:8", "const:4:8"]]
- 005aaf90 ["CALL", null, ["callee:00c59010:8"]]
+ 005ab340 ["INT_ADD", "register:40f0:8", ["const:5ab340:8", "const:4:8"]]
+ 005ab340 ["CALL", null, ["callee:00c59010:8"]]
- 005aaff4 ["INT_ADD", "register:40f0:8", ["const:5aaff4:8", "const:4:8"]]
- 005aaff4 ["CALL", null, ["callee:00c59010:8"]]
+ 005ab3a4 ["INT_ADD", "register:40f0:8", ["const:5ab3a4:8", "const:4:8"]]
+ 005ab3a4 ["CALL", null, ["callee:00c59010:8"]]
~~~


<a id="compare-27151ad7c5412cd9e0eb0a4278db946b"></a>

### [`005ab16c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab16c.md) → [`005ab51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab51c.md) FUN_005ab51c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ab538",
      "incomplete_value": false,
      "site": "005ab540",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab188",
      "incomplete_value": false,
      "site": "005ab190",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ab550",
      "incomplete_value": false,
      "site": "005ab550",
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
            "const:340:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab1a0",
      "incomplete_value": false,
      "site": "005ab1a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:370:8"
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
      "005ab540",
      "DATA",
      [
        "storage",
        "00c6f420",
        null,
        "undefined *"
      ]
    ],
    [
      "005ab550",
      "DATA",
      [
        "storage",
        "00c6f370",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ab540",
      "DATA",
      [
        "storage",
        "00c703f0",
        null,
        "undefined *"
      ]
    ],
    [
      "005ab550",
      "DATA",
      [
        "storage",
        "00c70340",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab180 ["INT_ADD", "register:40f0:8", ["const:5ab180:8", "const:4:8"]]
- 005ab180 ["CALL", null, ["callee:00c58f30:8"]]
+ 005ab530 ["INT_ADD", "register:40f0:8", ["const:5ab530:8", "const:4:8"]]
+ 005ab530 ["CALL", null, ["callee:00c58f30:8"]]
- 005ab184 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ab534 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ab188 ["COPY", "tmp:0:8", ["const:420:8"]]
- 005ab188 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ab188 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ab188 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ab538 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 005ab538 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab538 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab538 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-09ab3dd943117972dfee931ed51142dc"></a>

### [`005ab1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab1b4.md) → [`005ab564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab564.md) FUN_005ab564

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ab590",
      "incomplete_value": false,
      "site": "005ab594",
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
      "definition_site": "005ab1e0",
      "incomplete_value": false,
      "site": "005ab1e4",
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
      "005ab594",
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
      "005ab594",
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
- 005ab1d0 ["INT_ADD", "register:40f0:8", ["const:5ab1d0:8", "const:4:8"]]
- 005ab1d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab580 ["INT_ADD", "register:40f0:8", ["const:5ab580:8", "const:4:8"]]
+ 005ab580 ["CALL", null, ["callee:00c58f50:8"]]
- 005ab1d4 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005ab584 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005ab1d8 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005ab1d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ab1d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ab1d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ab588 ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 005ab588 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab588 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab588 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0944b1c82b61c1a7726ed10d0e4c05ff"></a>

### [`005ab218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab218.md) → [`005ab5c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab5c8.md) FUN_005ab5c8

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
      "definition_site": "005ab5f4",
      "incomplete_value": false,
      "site": "005ab5f8",
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
      "definition_site": "005ab244",
      "incomplete_value": false,
      "site": "005ab248",
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
      "005ab5f8",
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
      "005ab5f8",
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
- 005ab234 ["INT_ADD", "register:40f0:8", ["const:5ab234:8", "const:4:8"]]
- 005ab234 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab5e4 ["INT_ADD", "register:40f0:8", ["const:5ab5e4:8", "const:4:8"]]
+ 005ab5e4 ["CALL", null, ["callee:00c58f50:8"]]
- 005ab238 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005ab5e8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005ab23c ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005ab23c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ab23c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ab23c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ab5ec ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 005ab5ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab5ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab5ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8eca147eb207ca411be279a913b46c4"></a>

### [`005ab278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab278.md) → [`005ab628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab628.md) FUN_005ab628

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ab670",
      "incomplete_value": false,
      "site": "005ab674",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab2c0",
      "incomplete_value": false,
      "site": "005ab2c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005ab674",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ab674",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab294 ["INT_ADD", "register:40f0:8", ["const:5ab294:8", "const:4:8"]]
- 005ab294 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab644 ["INT_ADD", "register:40f0:8", ["const:5ab644:8", "const:4:8"]]
+ 005ab644 ["CALL", null, ["callee:00c58f50:8"]]
- 005ab2a4 ["INT_ADD", "register:40f0:8", ["const:5ab2a4:8", "const:4:8"]]
- 005ab2a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab654 ["INT_ADD", "register:40f0:8", ["const:5ab654:8", "const:4:8"]]
+ 005ab654 ["CALL", null, ["callee:00c58f50:8"]]
- 005ab2b4 ["INT_ADD", "register:40f0:8", ["const:5ab2b4:8", "const:4:8"]]
- 005ab2b4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab664 ["INT_ADD", "register:40f0:8", ["const:5ab664:8", "const:4:8"]]
+ 005ab664 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-fb264909a624933702558f56faf2ed8a"></a>

### [`005ab2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab2e8.md) → [`005ab698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab698.md) FUN_005ab698

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ab6e0",
      "incomplete_value": false,
      "site": "005ab6e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab330",
      "incomplete_value": false,
      "site": "005ab334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005ab6e4",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ab6e4",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab304 ["INT_ADD", "register:40f0:8", ["const:5ab304:8", "const:4:8"]]
- 005ab304 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab6b4 ["INT_ADD", "register:40f0:8", ["const:5ab6b4:8", "const:4:8"]]
+ 005ab6b4 ["CALL", null, ["callee:00c58f50:8"]]
- 005ab314 ["INT_ADD", "register:40f0:8", ["const:5ab314:8", "const:4:8"]]
- 005ab314 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab6c4 ["INT_ADD", "register:40f0:8", ["const:5ab6c4:8", "const:4:8"]]
+ 005ab6c4 ["CALL", null, ["callee:00c58f50:8"]]
- 005ab324 ["INT_ADD", "register:40f0:8", ["const:5ab324:8", "const:4:8"]]
- 005ab324 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab6d4 ["INT_ADD", "register:40f0:8", ["const:5ab6d4:8", "const:4:8"]]
+ 005ab6d4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b5e4a7e538a00dec7c92537fa94f5c7b"></a>

### [`005ab354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab354.md) → [`005ab704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab704.md) FUN_005ab704

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
      "definition_site": "005ab708",
      "incomplete_value": false,
      "site": "005ab70c",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab358",
      "incomplete_value": false,
      "site": "005ab35c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
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
      "005ab70c",
      "DATA",
      [
        "storage",
        "00c6f3d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ab70c",
      "DATA",
      [
        "storage",
        "00c703a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab354 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ab704 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ab358 ["COPY", "tmp:0:8", ["const:3d0:8"]]
- 005ab358 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ab358 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ab358 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ab708 ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 005ab708 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab708 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab708 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a56d05fdbd056278a8d323b98b16791"></a>

### [`005ab364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab364.md) → [`005ab714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab714.md) FUN_005ab714

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
      "definition_site": "005ab724",
      "incomplete_value": false,
      "site": "005ab72c",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab374",
      "incomplete_value": false,
      "site": "005ab37c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
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
      "005ab72c",
      "DATA",
      [
        "storage",
        "00c6f3d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ab72c",
      "DATA",
      [
        "storage",
        "00c703a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab370 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ab720 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ab374 ["COPY", "tmp:0:8", ["const:3d0:8"]]
- 005ab374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ab374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ab374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ab724 ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 005ab724 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab724 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab724 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005ab380 ["INT_ADD", "register:40f0:8", ["const:5ab380:8", "const:4:8"]]
- 005ab380 ["CALL", null, ["callee:00c58f40:8"]]
+ 005ab730 ["INT_ADD", "register:40f0:8", ["const:5ab730:8", "const:4:8"]]
+ 005ab730 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-d8bb6d1071017f0f1d57a639978f73a9"></a>

### [`005ab394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab394.md) → [`005ab744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab744.md) FUN_005ab744

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ab78c",
      "incomplete_value": false,
      "site": "005ab790",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab3dc",
      "incomplete_value": false,
      "site": "005ab3e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005ab790",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ab790",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab3b0 ["INT_ADD", "register:40f0:8", ["const:5ab3b0:8", "const:4:8"]]
- 005ab3b0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab760 ["INT_ADD", "register:40f0:8", ["const:5ab760:8", "const:4:8"]]
+ 005ab760 ["CALL", null, ["callee:00c58f50:8"]]
- 005ab3c0 ["INT_ADD", "register:40f0:8", ["const:5ab3c0:8", "const:4:8"]]
- 005ab3c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab770 ["INT_ADD", "register:40f0:8", ["const:5ab770:8", "const:4:8"]]
+ 005ab770 ["CALL", null, ["callee:00c58f50:8"]]
- 005ab3d0 ["INT_ADD", "register:40f0:8", ["const:5ab3d0:8", "const:4:8"]]
- 005ab3d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ab780 ["INT_ADD", "register:40f0:8", ["const:5ab780:8", "const:4:8"]]
+ 005ab780 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0d926ead6257edd9d5cd1dd5ec8cf7d8"></a>

### [`005ab408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab408.md) → [`005ab7b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab7b8.md) FUN_005ab7b8

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
      "definition_site": "005ab7bc",
      "incomplete_value": false,
      "site": "005ab7c0",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab40c",
      "incomplete_value": false,
      "site": "005ab410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:420:8"
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
      "005ab7c0",
      "DATA",
      [
        "storage",
        "00c6f420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ab7c0",
      "DATA",
      [
        "storage",
        "00c703f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab408 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ab7b8 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ab40c ["COPY", "tmp:0:8", ["const:420:8"]]
- 005ab40c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ab40c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ab40c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ab7bc ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 005ab7bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab7bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab7bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f6f74c60a51154a397ed5975973c03a2"></a>

### [`005ab418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab418.md) → [`005ab7c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab7c8.md) FUN_005ab7c8

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
      "definition_site": "005ab7d8",
      "incomplete_value": false,
      "site": "005ab7e0",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab428",
      "incomplete_value": false,
      "site": "005ab430",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:420:8"
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
      "005ab7e0",
      "DATA",
      [
        "storage",
        "00c6f420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ab7e0",
      "DATA",
      [
        "storage",
        "00c703f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab424 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ab7d4 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ab428 ["COPY", "tmp:0:8", ["const:420:8"]]
- 005ab428 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ab428 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ab428 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ab7d8 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 005ab7d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab7d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ab7d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005ab434 ["INT_ADD", "register:40f0:8", ["const:5ab434:8", "const:4:8"]]
- 005ab434 ["CALL", null, ["callee:00c58f40:8"]]
+ 005ab7e4 ["INT_ADD", "register:40f0:8", ["const:5ab7e4:8", "const:4:8"]]
+ 005ab7e4 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-f6022bb54786cdc5596e85650b88792c"></a>

### [`005ab450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab450.md) → [`005ab800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005ab800.md) _INIT_56

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
      "definition_site": "005ab83c",
      "incomplete_value": true,
      "site": "005ab858",
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
      "definition_site": "005ab48c",
      "incomplete_value": true,
      "site": "005ab4a8",
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
      "definition_site": "005ab860",
      "incomplete_value": true,
      "site": "005ab87c",
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
      "definition_site": "005ab4b0",
      "incomplete_value": true,
      "site": "005ab4cc",
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
      "definition_site": "005ab880",
      "incomplete_value": true,
      "site": "005ab89c",
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
      "definition_site": "005ab4d0",
      "incomplete_value": true,
      "site": "005ab4ec",
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
      "005ab83c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005ab860",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005ab880",
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
      "005ab83c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005ab860",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005ab880",
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
- 005ab5b0 ["INT_ADD", "register:40f0:8", ["const:5ab5b0:8", "const:4:8"]]
- 005ab5b0 ["CALL", null, ["callee:0043bb58:8"]]
+ 005ab960 ["INT_ADD", "register:40f0:8", ["const:5ab960:8", "const:4:8"]]
+ 005ab960 ["CALL", null, ["callee:0043bb58:8"]]
- 005ab684 ["INT_ADD", "register:40f0:8", ["const:5ab684:8", "const:4:8"]]
- 005ab684 ["CALL", null, ["callee:00c58ed0:8"]]
+ 005aba34 ["INT_ADD", "register:40f0:8", ["const:5aba34:8", "const:4:8"]]
+ 005aba34 ["CALL", null, ["callee:00c58ed0:8"]]
- 005ab478 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005ab828 ["COPY", "register:4098:8", ["const:ca7000:8"]]
~~~


<a id="compare-b40441162b5395757dd0cc370e00b97e"></a>

### [`005ab7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab7e0.md) → [`005abb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005abb90.md) FUN_005abb90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005ab954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab954.md) · 呼出先 6件 [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005abd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005abd04.md) · 呼出先 6件 [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.70% / 新版 95.70%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005abbc4",
      "incomplete_value": false,
      "site": "005abbc8",
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
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab814",
      "incomplete_value": false,
      "site": "005ab818",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:470:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005abcc0",
      "incomplete_value": false,
      "site": "005abcc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab910",
      "incomplete_value": false,
      "site": "005ab914",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005abbc8",
      "DATA",
      [
        "storage",
        "00c6f470",
        null,
        "pointer"
      ]
    ],
    [
      "005abcc4",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005abbc8",
      "DATA",
      [
        "storage",
        "00c70440",
        null,
        "pointer"
      ]
    ],
    [
      "005abcc4",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ab80c ["INT_ADD", "register:40f0:8", ["const:5ab80c:8", "const:4:8"]]
- 005ab80c ["CALL", null, ["callee:0059bc3c:8"]]
+ 005abbbc ["INT_ADD", "register:40f0:8", ["const:5abbbc:8", "const:4:8"]]
+ 005abbbc ["CALL", null, ["callee:0059bc3c:8"]]
- 005ab810 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005abbc0 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ab814 ["COPY", "tmp:0:8", ["const:470:8"]]
- 005ab814 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ab814 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ab814 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005abbc4 ["COPY", "tmp:0:8", ["const:440:8"]]
+ 005abbc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005abbc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005abbc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea5ab107f34e768e71c2667ffcdc4c85"></a>

### [`005ab954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab954.md) → [`005abd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005abd04.md) FUN_005abd04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005ab7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab7e0.md) [`009b37ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b37ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005abb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ab/005abb90.md) [`009b4798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4798.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.23% / 新版 82.23%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 4件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005abd60",
      "incomplete_value": true,
      "site": "005abd60",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:2b4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ab9b0",
      "incomplete_value": true,
      "site": "005ab9b0",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1e5:8"
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
      "definition_site": "005abe98",
      "incomplete_value": true,
      "site": "005abe98",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:f20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005abae8",
      "incomplete_value": true,
      "site": "005abae8",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:ee0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005abfcc",
      "incomplete_value": true,
      "site": "005abfcc",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:14d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005abc1c",
      "incomplete_value": true,
      "site": "005abc1c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:7e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005abd50",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "005abe84",
      "READ",
      [
        "storage",
        "0029fee0",
        null,
        "string"
      ]
    ],
    [
      "005abf34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005abd30"
      ]
    ]
  ],
  "added": [
    [
      "005abd50",
      "READ",
      [
        "storage",
        "002b72b4",
        null,
        "string"
      ]
    ],
    [
      "005abe84",
      "READ",
      [
        "storage",
        "0029ff20",
        null,
        "string"
      ]
    ],
    [
      "005abf34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ac0e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 005abe88 ["INT_ADD", "register:40f0:8", ["const:5abe88:8", "const:4:8"]]
- 005abe88 ["CALL", null, ["callee:005abb90:8"]]
+ 005ac238 ["INT_ADD", "register:40f0:8", ["const:5ac238:8", "const:4:8"]]
+ 005ac238 ["CALL", null, ["callee:005abb90:8"]]
- 005ab99c ["COPY", "tmp:0:8", ["const:1e5:8"]]
- 005ab99c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005ab99c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005ab99c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005abd4c ["COPY", "tmp:0:8", ["const:2b4:8"]]
+ 005abd4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005abd4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005abd4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005ab9bc ["INT_ADD", "register:40f0:8", ["const:5ab9bc:8", "const:4:8"]]
- 005ab9bc ["CALL", null, ["callee:004413ec:8"]]
+ 005abd6c ["INT_ADD", "register:40f0:8", ["const:5abd6c:8", "const:4:8"]]
+ 005abd6c ["CALL", null, ["callee:004413ec:8"]]
~~~


<a id="compare-5a91a2d04c74b2c6200d9705b6a9f191"></a>

### [`005ac030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac030.md) → [`005ac3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac3e0.md) FUN_005ac3e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)
- 新版 呼出元 1件 [`009b5164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5164.md) · 呼出先 1件 [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 58.33% / 新版 58.33%

優先判定に残った影響 `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ac030",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac034",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac038",
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
      "005ac3e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005ac3e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ac3e8",
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
- 005ac030 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ac030 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ac030 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005ac030 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ac034 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005ac034 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005ac034 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005ac034 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005ac038 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005ac038 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005ac038 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005ac038 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-07d2db3a0bf4faf442383e504f92169e"></a>

### [`005ac094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac094.md) → [`005ac444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac444.md) FUN_005ac444

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ff0.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md) [`00c59010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59010.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.83% / 新版 72.83%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ac480",
      "incomplete_value": true,
      "site": "005ac488",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ac47c",
      "incomplete_value": false,
      "site": "005ac488",
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
            "const:e01:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ac0f8",
      "incomplete_value": false,
      "site": "005ac100",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:6c6:8"
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
      "unmatched:005ac098",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac09c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac0a0",
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
      "005ac448",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005ac44c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ac450",
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
- 005ac0d8 ["INT_ADD", "register:40f0:8", ["const:5ac0d8:8", "const:4:8"]]
- 005ac0d8 ["CALL", null, ["callee:00c59000:8"]]
+ 005ac488 ["INT_ADD", "register:40f0:8", ["const:5ac488:8", "const:4:8"]]
+ 005ac488 ["CALL", null, ["callee:00c59000:8"]]
- 005ac100 ["INT_ADD", "register:40f0:8", ["const:5ac100:8", "const:4:8"]]
- 005ac100 ["CALL", null, ["callee:00c59010:8"]]
+ 005ac4b0 ["INT_ADD", "register:40f0:8", ["const:5ac4b0:8", "const:4:8"]]
+ 005ac4b0 ["CALL", null, ["callee:00c59010:8"]]
- 005ac164 ["INT_ADD", "register:40f0:8", ["const:5ac164:8", "const:4:8"]]
- 005ac164 ["CALL", null, ["callee:00c59010:8"]]
+ 005ac514 ["INT_ADD", "register:40f0:8", ["const:5ac514:8", "const:4:8"]]
+ 005ac514 ["CALL", null, ["callee:00c59010:8"]]
~~~


<a id="compare-db876119292ad562444c7973233c9a74"></a>

### [`005ac2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac2dc.md) → [`005ac68c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac68c.md) FUN_005ac68c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0059bf84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bf84.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00451afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451afc.md) [`0059c2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059c/0059c2a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ff0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ac338",
      "incomplete_value": true,
      "site": "005ac344",
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
      "unmatched:005ac300",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005ac6b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac344 ["INT_ADD", "register:40f0:8", ["const:5ac344:8", "const:4:8"]]
- 005ac344 ["CALL", null, ["callee:00451afc:8"]]
+ 005ac6f4 ["INT_ADD", "register:40f0:8", ["const:5ac6f4:8", "const:4:8"]]
+ 005ac6f4 ["CALL", null, ["callee:00451afc:8"]]
- 005ac2fc ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:28:8"]]
- 005ac2fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005ac300 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005ac300 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 005ac300 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-72916c83fb6d3bd96e65866cada83ce1"></a>

### [`005ac3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac3dc.md) → [`005ac78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac78c.md) FUN_005ac78c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 61.11% / 新版 61.11%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ac3e8",
      "incomplete_value": false,
      "site": "005ac3f0",
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
      "unmatched:005ac400",
      "DATA",
      [
        "storage",
        "00c6f598",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005ac410",
      "DATA",
      [
        "storage",
        "00c6f4e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ac7b0",
      "DATA",
      [
        "storage",
        "00c70568",
        null,
        "undefined *"
      ]
    ],
    [
      "005ac7c0",
      "DATA",
      [
        "storage",
        "00c704b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac3f0 ["INT_ADD", "register:40f0:8", ["const:5ac3f0:8", "const:4:8"]]
- 005ac3f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005ac7a0 ["INT_ADD", "register:40f0:8", ["const:5ac7a0:8", "const:4:8"]]
+ 005ac7a0 ["CALL", null, ["callee:00c58f30:8"]]
- 005ac3f4 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ac7a4 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ac3f8 ["COPY", "tmp:0:8", ["const:598:8"]]
- 005ac3f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ac3f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ac3f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9cf3ac3742f4e4d56be72c15c47998a6"></a>

### [`005ac424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac424.md) → [`005ac7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac7d4.md) FUN_005ac7d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 68.00% / 新版 68.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ac424",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac428",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac454",
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
      "005ac7d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ac7d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005ac804",
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
- 005ac424 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ac424 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ac424 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ac424 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ac428 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ac428 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005ac42c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-59d946cb78df7a48758ac892efb960fa"></a>

### [`005ac488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac488.md) → [`005ac838`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac838.md) FUN_005ac838

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ac4b8",
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
      "005ac868",
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
- 005ac4a4 ["INT_ADD", "register:40f0:8", ["const:5ac4a4:8", "const:4:8"]]
- 005ac4a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ac854 ["INT_ADD", "register:40f0:8", ["const:5ac854:8", "const:4:8"]]
+ 005ac854 ["CALL", null, ["callee:00c58f50:8"]]
- 005ac4a8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005ac858 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005ac4ac ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005ac4ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ac4ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ac4ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b0c7a9b949ccda834d1622ebc2a8b67c"></a>

### [`005ac4e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac4e8.md) → [`005ac898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac898.md) FUN_005ac898

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ac8e0",
      "incomplete_value": false,
      "site": "005ac8e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ac530",
      "incomplete_value": false,
      "site": "005ac534",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "definition_site": "005ac8c0",
      "incomplete_value": true,
      "site": "005ac8c4",
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005ac4fc"
      ],
      [
        "FALL_THROUGH",
        "005ac8ac"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005ac8ac",
      "incomplete_value": true,
      "site": "005ac8b0",
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
      "definition_site": "005ac4fc",
      "incomplete_value": true,
      "site": "005ac500",
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
      "unmatched:005ac4e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac4ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac4fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ac8b8"
      ]
    ]
  ],
  "added": [
    [
      "005ac898",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ac89c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005ac8ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ac8b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac514 ["INT_ADD", "register:40f0:8", ["const:5ac514:8", "const:4:8"]]
- 005ac514 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ac8c4 ["INT_ADD", "register:40f0:8", ["const:5ac8c4:8", "const:4:8"]]
+ 005ac8c4 ["CALL", null, ["callee:00c58f50:8"]]
- 005ac4e8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ac4e8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ac4e8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ac4e8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ac4ec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ac4ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-75baec27215bcfd0b5d2274404b04b73"></a>

### [`005ac558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac558.md) → [`005ac908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac908.md) FUN_005ac908

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ac580",
      "incomplete_value": true,
      "site": "005ac584",
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
      "unmatched:005ac5a4",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ac954",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac584 ["INT_ADD", "register:40f0:8", ["const:5ac584:8", "const:4:8"]]
- 005ac584 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ac934 ["INT_ADD", "register:40f0:8", ["const:5ac934:8", "const:4:8"]]
+ 005ac934 ["CALL", null, ["callee:00c58f50:8"]]
- 005ac574 ["INT_ADD", "register:40f0:8", ["const:5ac574:8", "const:4:8"]]
- 005ac574 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ac924 ["INT_ADD", "register:40f0:8", ["const:5ac924:8", "const:4:8"]]
+ 005ac924 ["CALL", null, ["callee:00c58f50:8"]]
- 005ac57c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 005ac57c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 005ac57c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 005ac57c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 005ac92c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 005ac92c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 005ac92c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 005ac92c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-1a1fa4d1e81ac53c7d7bb7de456230a4"></a>

### [`005ac5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac5c4.md) → [`005ac974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac974.md) FUN_005ac974

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
      "definition_site": "005ac978",
      "incomplete_value": false,
      "site": "005ac97c",
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
            "const:518:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ac5c8",
      "incomplete_value": false,
      "site": "005ac5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:548:8"
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
      "005ac97c",
      "DATA",
      [
        "storage",
        "00c6f548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ac97c",
      "DATA",
      [
        "storage",
        "00c70518",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac5c4 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ac974 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ac5c8 ["COPY", "tmp:0:8", ["const:548:8"]]
- 005ac5c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ac5c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ac5c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005ac978 ["COPY", "tmp:0:8", ["const:518:8"]]
+ 005ac978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005ac978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005ac978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-649d077b266d806f852eaeb79d7e82e1"></a>

### [`005ac5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac5d4.md) → [`005ac984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac984.md) FUN_005ac984

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 41.67% / 新版 41.67%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ac5d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac5d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac5ec",
      "DATA",
      [
        "storage",
        "00c6f548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ac984",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ac988",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005ac99c",
      "DATA",
      [
        "storage",
        "00c70518",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac5d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ac5d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ac5d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ac5d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ac5d8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ac5d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005ac5dc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-93f1eb3c70943104e6dd1c765b8581bd"></a>

### [`005ac604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac604.md) → [`005ac9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ac9b4.md) FUN_005ac9b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ac9fc",
      "incomplete_value": false,
      "site": "005aca00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ac64c",
      "incomplete_value": false,
      "site": "005ac650",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
    "new": null,
    "old": {
      "definition_site": "005ac62c",
      "incomplete_value": true,
      "site": "005ac630",
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
                "const:70:8"
              ]
            ]
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
      "005aca00",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005aca00",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac630 ["INT_ADD", "register:40f0:8", ["const:5ac630:8", "const:4:8"]]
- 005ac630 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ac9e0 ["INT_ADD", "register:40f0:8", ["const:5ac9e0:8", "const:4:8"]]
+ 005ac9e0 ["CALL", null, ["callee:00c58f50:8"]]
- 005ac618 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005ac618 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 005ac9c8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005ac9c8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 005ac620 ["INT_ADD", "register:40f0:8", ["const:5ac620:8", "const:4:8"]]
- 005ac620 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ac9d0 ["INT_ADD", "register:40f0:8", ["const:5ac9d0:8", "const:4:8"]]
+ 005ac9d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d8ff40df3cfcb57d2619ef0b7578c73b"></a>

### [`005ac678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac678.md) → [`005aca28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005aca28.md) FUN_005aca28

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
      "definition_site": "005aca2c",
      "incomplete_value": false,
      "site": "005aca30",
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
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ac67c",
      "incomplete_value": false,
      "site": "005ac680",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "005aca30",
      "DATA",
      [
        "storage",
        "00c6f598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005aca30",
      "DATA",
      [
        "storage",
        "00c70568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac678 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005aca28 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ac67c ["COPY", "tmp:0:8", ["const:598:8"]]
- 005ac67c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ac67c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ac67c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005aca2c ["COPY", "tmp:0:8", ["const:568:8"]]
+ 005aca2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005aca2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005aca2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7786e439c648d57f5f48e9d4a17b96f0"></a>

### [`005ac688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac688.md) → [`005aca38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005aca38.md) FUN_005aca38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 41.67% / 新版 41.67%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ac688",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac68c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac6a0",
      "DATA",
      [
        "storage",
        "00c6f598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005aca38",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005aca3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005aca50",
      "DATA",
      [
        "storage",
        "00c70568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ac688 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ac688 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ac688 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ac688 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ac68c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ac68c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005ac690 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-59eb41cd7d0bfd96335405f85a2f0aea"></a>

### [`005ac6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac6c0.md) → [`005aca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005aca70.md) _INIT_57

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 79.10% / 新版 79.10%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ac840",
      "incomplete_value": true,
      "site": "005ac848",
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
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005acc38",
      "incomplete_value": true,
      "site": "005acc48",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005acc3c",
      "incomplete_value": true,
      "site": "005acc48",
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
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ac6f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ac6fc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005ac704",
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
      "005acaa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005acaac",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005acab4",
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
- 005ac848 ["INT_ADD", "register:40f0:8", ["const:5ac848:8", "const:4:8"]]
- 005ac848 ["CALL", null, ["callee:0043bb58:8"]]
+ 005acbf8 ["INT_ADD", "register:40f0:8", ["const:5acbf8:8", "const:4:8"]]
+ 005acbf8 ["CALL", null, ["callee:0043bb58:8"]]
- 005ac898 ["INT_ADD", "register:40f0:8", ["const:5ac898:8", "const:4:8"]]
- 005ac898 ["CALL", null, ["callee:0043bb58:8"]]
+ 005acc48 ["INT_ADD", "register:40f0:8", ["const:5acc48:8", "const:4:8"]]
+ 005acc48 ["CALL", null, ["callee:0043bb58:8"]]
- 005ac8f4 ["INT_ADD", "register:40f0:8", ["const:5ac8f4:8", "const:4:8"]]
- 005ac8f4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 005acca4 ["INT_ADD", "register:40f0:8", ["const:5acca4:8", "const:4:8"]]
+ 005acca4 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-4c69f3ffea388bc9393540436457a0b3"></a>

### [`005aca50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca50.md) → [`005ace00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ace00.md) FUN_005ace00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b8aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8aa4.md) · 呼出先 1件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md)
- 新版 呼出元 1件 [`005b8e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8e54.md) · 呼出先 1件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005aca70",
      "DATA",
      [
        "storage",
        "00c6f5e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ace20",
      "DATA",
      [
        "storage",
        "00c705b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005aca60 ["INT_ADD", "register:40f0:8", ["const:5aca60:8", "const:4:8"]]
- 005aca60 ["CALL", null, ["callee:00598230:8"]]
+ 005ace10 ["INT_ADD", "register:40f0:8", ["const:5ace10:8", "const:4:8"]]
+ 005ace10 ["CALL", null, ["callee:00598230:8"]]
- 005aca64 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ace14 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005aca68 ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 005aca68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005aca68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005aca68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9475759c270779509df1054fd406104b"></a>

### [`005aca84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca84.md) → [`005ace34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ace34.md) FUN_005ace34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00597f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f3c.md) [`0059a4d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a4d8.md) [`005acec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005acec0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0059825c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059825c.md) [`0059a7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a7f8.md) [`005ad270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad270.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.09% / 新版 80.09%

優先判定に残った影響 `call_argument_candidate` 9件, `store_value` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ad040",
      "incomplete_value": false,
      "site": "005ad048",
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
            "const:600:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005acc90",
      "incomplete_value": false,
      "site": "005acc98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:630:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005acacc",
      "incomplete_value": false,
      "site": "005acad0",
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
      "definition_site": "005acac8",
      "incomplete_value": true,
      "site": "005acad0",
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
      "unmatched:005aca88",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005aca8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005aca90",
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
      "005ace38",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005ace3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005ace40",
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
- 005acad0 ["INT_ADD", "register:40f0:8", ["const:5acad0:8", "const:4:8"]]
- 005acad0 ["CALL", null, ["callee:00c54d90:8"]]
+ 005ace80 ["INT_ADD", "register:40f0:8", ["const:5ace80:8", "const:4:8"]]
+ 005ace80 ["CALL", null, ["callee:00c54d90:8"]]
- 005acb00 ["INT_ADD", "register:40f0:8", ["const:5acb00:8", "const:4:8"]]
- 005acb00 ["CALL", null, ["callee:00c54d90:8"]]
+ 005aceb0 ["INT_ADD", "register:40f0:8", ["const:5aceb0:8", "const:4:8"]]
+ 005aceb0 ["CALL", null, ["callee:00c54d90:8"]]
- 005acb80 ["INT_ADD", "register:40f0:8", ["const:5acb80:8", "const:4:8"]]
- 005acb80 ["CALL", null, ["callee:00c54d90:8"]]
+ 005acf30 ["INT_ADD", "register:40f0:8", ["const:5acf30:8", "const:4:8"]]
+ 005acf30 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-1f7e709aa3a3c7f48787c50f3b3b5cbc"></a>

### [`005ace70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ace70.md) → [`005ad220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad220.md) FUN_005ad220

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005ace80 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 005ace80 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 005ad230 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 005ad230 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 005ace8c ["INT_ADD", "register:40f0:8", ["const:5ace8c:8", "const:4:8"]]
- 005ace8c ["CALL", null, ["callee:00c54d90:8"]]
+ 005ad23c ["INT_ADD", "register:40f0:8", ["const:5ad23c:8", "const:4:8"]]
+ 005ad23c ["CALL", null, ["callee:00c54d90:8"]]
- 005ace90 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005ace90 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005ad240 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005ad240 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-a0f1ffb7402ecbe9e2f0d88d02c0c574"></a>

### [`005acec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005acec0.md) → [`005ad270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad270.md) FUN_005ad270

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005aca84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca84.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005ace34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ace34.md) · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005aced8",
      "incomplete_value": true,
      "site": "005acedc",
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
                "const:20:8"
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
      "unmatched:005acec0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005acec4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005acee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad2a4"
      ]
    ]
  ],
  "added": [
    [
      "005ad270",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ad274",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005ad294",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad2a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005acedc ["INT_ADD", "register:40f0:8", ["const:5acedc:8", "const:4:8"]]
- 005acedc ["CALL", null, ["callee:00c58f50:8"]]
+ 005ad28c ["INT_ADD", "register:40f0:8", ["const:5ad28c:8", "const:4:8"]]
+ 005ad28c ["CALL", null, ["callee:00c58f50:8"]]
- 005acec0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005acec0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005acec0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005acec0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005acec4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005acec4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-a8d1c891253bdec996fac89706bad287"></a>

### [`005acf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005acf00.md) → [`005ad2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad2b0.md) FUN_005ad2b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00597f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f3c.md) [`005ae8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae8c4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0059825c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059825c.md) [`005aec74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aec74.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.72% / 新版 88.72%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ad474",
      "incomplete_value": false,
      "site": "005ad47c",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ad0c4",
      "incomplete_value": false,
      "site": "005ad0cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ad318",
      "incomplete_value": true,
      "site": "005ad31c",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "005acfd4",
      "incomplete_value": true,
      "site": "005acfdc",
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
      "unmatched:005acf28",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005acf54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad320"
      ]
    ],
    [
      "unmatched:005acf84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad350"
      ]
    ]
  ],
  "added": [
    [
      "005ad2d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005ad304",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad320"
      ]
    ],
    [
      "005ad334",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad350"
      ]
    ]
  ]
}
~~~


~~~diff
- 005acf6c ["INT_ADD", "register:40f0:8", ["const:5acf6c:8", "const:4:8"]]
- 005acf6c ["CALL", null, ["callee:00c58f20:8"]]
+ 005ad31c ["INT_ADD", "register:40f0:8", ["const:5ad31c:8", "const:4:8"]]
+ 005ad31c ["CALL", null, ["callee:00c58f20:8"]]
- 005acfdc ["INT_ADD", "register:40f0:8", ["const:5acfdc:8", "const:4:8"]]
- 005acfdc ["CALL", null, ["callee:004413ec:8"]]
+ 005ad38c ["INT_ADD", "register:40f0:8", ["const:5ad38c:8", "const:4:8"]]
+ 005ad38c ["CALL", null, ["callee:004413ec:8"]]
- 005ad03c ["INT_ADD", "register:40f0:8", ["const:5ad03c:8", "const:4:8"]]
- 005ad03c ["CALL", null, ["callee:00c58f20:8"]]
+ 005ad3ec ["INT_ADD", "register:40f0:8", ["const:5ad3ec:8", "const:4:8"]]
+ 005ad3ec ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-de105fb88bb20863fd5e90e4f2f21c8c"></a>

### [`005ad2c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad2c8.md) → [`005ad678`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad678.md) FUN_005ad678

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ad2c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad2cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad318",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005ad678",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ad67c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005ad6c8",
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
- 005ad2c8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ad2c8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ad2c8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ad2c8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ad2cc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ad2cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005ad2d0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-95ddf2ef33773531e4fc8703b52a4e11"></a>

### [`005ad32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad32c.md) → [`005ad6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad6dc.md) FUN_005ad6dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b45d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b45d0.md) · 呼出先 2件 [`005af7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005af7c0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b4980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4980.md) · 呼出先 2件 [`005afb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005af/005afb70.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.63% / 新版 68.63%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ad330",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad334",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad348",
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
      "005ad6e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ad6e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005ad6f8",
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
- 005ad32c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 005ad330 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ad330 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ad330 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005ad330 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005ad334 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005ad334 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005ad334 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 005ad334 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6718bd6f5f4270e8f768d15228fb82a9"></a>

### [`005ad3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad3f8.md) → [`005ad7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad7a8.md) FUN_005ad7a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b45d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b45d0.md) · 呼出先 2件 [`0058f474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f474.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b4980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4980.md) · 呼出先 2件 [`0058f794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f794.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.31% / 新版 84.31%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005ad424"
      ],
      [
        "FALL_THROUGH",
        "005ad7d4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005ad7d0",
      "incomplete_value": true,
      "site": "005ad7e8",
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
                "register:4008:8"
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
      "site": "005ad438",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005ad41c"
      ],
      [
        "CONDITIONAL_JUMP",
        "005ad7cc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005ad7cc",
      "incomplete_value": true,
      "site": "005ad7f0",
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
      "definition_site": "005ad41c",
      "incomplete_value": true,
      "site": "005ad440",
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
        "005ad424"
      ],
      [
        "CONDITIONAL_JUMP",
        "005ad7d4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005ad7d0",
      "incomplete_value": true,
      "site": "005ad804",
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
                "register:4008:8"
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
      "site": "005ad454",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:005ad414",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad41c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad7f0"
      ]
    ],
    [
      "unmatched:005ad424",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad7f8"
      ]
    ]
  ],
  "added": [
    [
      "005ad7c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "005ad7cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad7f0"
      ]
    ],
    [
      "005ad7d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ad7f8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ad414 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005ad414 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 005ad414 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 005ad418 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:20:8"]]
- 005ad418 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005ad41c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005ad41c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-c6c4530eb0e199a369f92bbae02291b0"></a>

### [`005ad550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad550.md) → [`005ad900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad900.md) FUN_005ad900

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00599e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599e94.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0059a1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a1b4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 40.54% / 新版 40.54%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ad550",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad554",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad574",
      "DATA",
      [
        "storage",
        "00c6f5e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ad900",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ad904",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005ad924",
      "DATA",
      [
        "storage",
        "00c705b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ad550 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ad550 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ad550 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ad550 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ad554 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ad554 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005ad564 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005ad914 ["COPY", "register:4040:8", ["const:c70000:8"]]
~~~


<a id="compare-fd3537bc4ec7cfb44112a1abe0bd5902"></a>

### [`005ad5e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad5e4.md) → [`005ad994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad994.md) FUN_005ad994

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ad600",
      "DATA",
      [
        "storage",
        "00c6f630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ad9b0",
      "DATA",
      [
        "storage",
        "00c70600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ad5f8 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005ad9a8 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005ad5fc ["COPY", "tmp:0:8", ["const:630:8"]]
- 005ad5fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005ad5fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005ad5fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005ad600 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 005ad600 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-488f15cf1a6689a0c987ca947db3de90"></a>

### [`005ad630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad630.md) → [`005ad9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad9e0.md) FUN_005ad9e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ada04",
      "incomplete_value": true,
      "site": "005ada08",
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
                "const:28:8"
              ]
            ]
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
      "unmatched:005ad64c",
      "DATA",
      [
        "storage",
        "00c6f630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ad9fc",
      "DATA",
      [
        "storage",
        "00c70600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ad658 ["INT_ADD", "register:40f0:8", ["const:5ad658:8", "const:4:8"]]
- 005ad658 ["CALL", null, ["callee:00c58f50:8"]]
+ 005ada08 ["INT_ADD", "register:40f0:8", ["const:5ada08:8", "const:4:8"]]
+ 005ada08 ["CALL", null, ["callee:00c58f50:8"]]
- 005ad644 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005ad9f4 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005ad648 ["COPY", "tmp:0:8", ["const:630:8"]]
- 005ad648 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005ad648 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005ad648 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7a6ea90d9321bd0d42da7dea23edfff4"></a>

### [`005ad678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad678.md) → [`005ada28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ada28.md) FUN_005ada28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.87% / 新版 83.87%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ad688",
      "incomplete_value": false,
      "site": "005ad68c",
      "value": [
        "leaf",
        "const:30:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ada88",
      "incomplete_value": true,
      "site": "005ada90",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ada88",
      "incomplete_value": true,
      "site": "005ada90",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:005ad6a0",
      "DATA",
      [
        "storage",
        "00c6f630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ada50",
      "DATA",
      [
        "storage",
        "00c70600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ad68c ["INT_ADD", "register:40f0:8", ["const:5ad68c:8", "const:4:8"]]
- 005ad68c ["CALL", null, ["callee:00c58f30:8"]]
+ 005ada3c ["INT_ADD", "register:40f0:8", ["const:5ada3c:8", "const:4:8"]]
+ 005ada3c ["CALL", null, ["callee:00c58f30:8"]]
- 005ad6e0 ["INT_ADD", "register:40f0:8", ["const:5ad6e0:8", "const:4:8"]]
- 005ad6e0 ["CALL", null, ["callee:0043be80:8"]]
+ 005ada90 ["INT_ADD", "register:40f0:8", ["const:5ada90:8", "const:4:8"]]
+ 005ada90 ["CALL", null, ["callee:0043be80:8"]]
- 005ad698 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005ada48 ["COPY", "register:4048:8", ["const:c70000:8"]]
~~~


<a id="compare-ff953467cc05aedacc2f8fbb11ce20e3"></a>

### [`005ad718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad718.md) → [`005adac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adac8.md) FUN_005adac8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005adb24",
      "incomplete_value": true,
      "site": "005adb28",
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005adb20",
      "incomplete_value": true,
      "site": "005adb28",
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
      "definition_site": "005adb20",
      "incomplete_value": true,
      "site": "005adb28",
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
                "const:20:8"
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
      "unmatched:005ad718",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad71c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad738",
      "DATA",
      [
        "storage",
        "00c6f630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005adac8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005adacc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005adae8",
      "DATA",
      [
        "storage",
        "00c70600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ad778 ["INT_ADD", "register:40f0:8", ["const:5ad778:8", "const:4:8"]]
- 005ad778 ["CALL", null, ["callee:0043be80:8"]]
+ 005adb28 ["INT_ADD", "register:40f0:8", ["const:5adb28:8", "const:4:8"]]
+ 005adb28 ["CALL", null, ["callee:0043be80:8"]]
- 005ad718 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ad718 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ad718 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ad718 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ad71c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005ad71c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005ad71c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005ad71c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ae2029d12114a4c43fa9e54aaed98208"></a>

### [`005ad7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad7a4.md) → [`005adb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adb54.md) FUN_005adb54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ad7a8",
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
      "005adb58",
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
- 005ad7a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ad7a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005ad7ac ["COPY", "register:40e8:8", ["register:8:8"]]
- 005ad7c0 ["INT_ADD", "register:40f0:8", ["const:5ad7c0:8", "const:4:8"]]
- 005ad7c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005adb70 ["INT_ADD", "register:40f0:8", ["const:5adb70:8", "const:4:8"]]
+ 005adb70 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ef5835b315a1ff35c650a7ed695ab34f"></a>

### [`005ad7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad7e4.md) → [`005adb94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adb94.md) FUN_005adb94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005aca84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca84.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005ace34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ace34.md) · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ad7e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad7e8",
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
      "005adb94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005adb98",
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
- 005ad7e4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ad7e4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ad7e4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ad7e4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ad7e8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ad7e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005ad7ec ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-cc486ca6a1062d44400f9bf69dafb959"></a>

### [`005ad820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad820.md) → [`005adbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adbd0.md) FUN_005adbd0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 27件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0044fcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044fcfc.md) [`004501c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/004501c0.md) [`00450790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/00450790.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 27件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0045001c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/0045001c.md) [`004504e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/004504e0.md) [`00450ab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/00450ab0.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.56% / 新版 70.56%

優先判定に残った影響 `call_argument_candidate` 15件, `store_condition` 4件, `unresolved_branch_alignment` 35件, `unresolved_call_alignment` 22件, `unresolved_store_alignment` 35件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005adad4",
      "incomplete_value": true,
      "site": "005adadc",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "005adad8",
      "incomplete_value": true,
      "site": "005adadc",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005adad0",
      "incomplete_value": true,
      "site": "005adadc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ad824",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad828",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ad82c",
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
      "005adbd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005adbd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005adbdc",
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
- 005ad968 ["CBRANCH", null, ["local:b36:8", "register:101:1"]]
+ 005add18 ["CBRANCH", null, ["local:b37:8", "register:101:1"]]
- 005adadc ["INT_ADD", "register:40f0:8", ["const:5adadc:8", "const:4:8"]]
- 005adadc ["CALL", null, ["callee:00450ab0:8"]]
+ 005ade8c ["INT_ADD", "register:40f0:8", ["const:5ade8c:8", "const:4:8"]]
+ 005ade8c ["CALL", null, ["callee:00450ab0:8"]]
- 005adaf0 ["COPY", "register:0:8", ["register:4048:8"]]
- 005adaf0 ["INT_ADD", "register:40f0:8", ["const:5adaf0:8", "const:4:8"]]
- 005adaf0 ["CALLIND", null, ["register:0:8"]]
+ 005adea0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 005adea0 ["INT_ADD", "register:40f0:8", ["const:5adea0:8", "const:4:8"]]
+ 005adea0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d7c80971204c55b3613f6cdccbe9047f"></a>

### [`005ae628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae628.md) → [`005ae9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005ae9d8.md) FUN_005ae9d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 8件 [`005ad820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad820.md) [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) [`007522f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522f0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)
- 新版 呼出元 8件 [`005adbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adbd0.md) [`005d9374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9374.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`006e6178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e6/006e6178.md) [`007526a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/007526a0.md) · 呼出先 1件 [`00c59020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59020.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ae640",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c59020"
      ]
    ]
  ],
  "added": [
    [
      "005ae9f0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c59020"
      ]
    ]
  ]
}
~~~


<a id="compare-a8586cc1b9b9efcef1383d4a17a996ac"></a>

### [`005ae644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae644.md) → [`005ae9f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005ae9f4.md) FUN_005ae9f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aea18",
      "incomplete_value": true,
      "site": "005aea1c",
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
                "const:28:8"
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
    "new": {
      "definition_site": "005aea2c",
      "incomplete_value": false,
      "site": "005aea30",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "005aea28",
      "incomplete_value": true,
      "site": "005aea30",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ae644",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ae648",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ae660",
      "DATA",
      [
        "storage",
        "00c6f6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005ae9f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ae9f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005aea10",
      "DATA",
      [
        "storage",
        "00c70680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ae66c ["INT_ADD", "register:40f0:8", ["const:5ae66c:8", "const:4:8"]]
- 005ae66c ["CALL", null, ["callee:00c58f50:8"]]
+ 005aea1c ["INT_ADD", "register:40f0:8", ["const:5aea1c:8", "const:4:8"]]
+ 005aea1c ["CALL", null, ["callee:00c58f50:8"]]
- 005ae680 ["INT_ADD", "register:40f0:8", ["const:5ae680:8", "const:4:8"]]
- 005ae680 ["CALL", null, ["callee:00c54d90:8"]]
+ 005aea30 ["INT_ADD", "register:40f0:8", ["const:5aea30:8", "const:4:8"]]
+ 005aea30 ["CALL", null, ["callee:00c54d90:8"]]
- 005ae644 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ae644 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ae644 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ae644 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-2c6000b332df325445f4bfac0addf307"></a>

### [`005ae6b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae6b4.md) → [`005aea64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aea64.md) FUN_005aea64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.37% / 新版 70.37%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aea88",
      "incomplete_value": true,
      "site": "005aea8c",
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
                "const:28:8"
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
    "new": {
      "definition_site": "005aea98",
      "incomplete_value": true,
      "site": "005aeaa0",
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
      "unmatched:005ae6b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ae6b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ae6d0",
      "DATA",
      [
        "storage",
        "00c6f6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005aea64",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005aea68",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005aea80",
      "DATA",
      [
        "storage",
        "00c70680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ae6dc ["INT_ADD", "register:40f0:8", ["const:5ae6dc:8", "const:4:8"]]
- 005ae6dc ["CALL", null, ["callee:00c58f50:8"]]
+ 005aea8c ["INT_ADD", "register:40f0:8", ["const:5aea8c:8", "const:4:8"]]
+ 005aea8c ["CALL", null, ["callee:00c58f50:8"]]
- 005ae6f0 ["INT_ADD", "register:40f0:8", ["const:5ae6f0:8", "const:4:8"]]
- 005ae6f0 ["CALL", null, ["callee:00c54d90:8"]]
+ 005aeaa0 ["INT_ADD", "register:40f0:8", ["const:5aeaa0:8", "const:4:8"]]
+ 005aeaa0 ["CALL", null, ["callee:00c54d90:8"]]
- 005ae6b4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ae6b4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ae6b4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ae6b4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b85d02bda43a7de32d89264496805da1"></a>

### [`005ae720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae720.md) → [`005aead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aead0.md) FUN_005aead0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ae748",
      "DATA",
      [
        "storage",
        "00c6f6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005aeaf8",
      "DATA",
      [
        "storage",
        "00c70680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ae738 ["INT_ADD", "register:40f0:8", ["const:5ae738:8", "const:4:8"]]
- 005ae738 ["CALL", null, ["callee:00c58f30:8"]]
+ 005aeae8 ["INT_ADD", "register:40f0:8", ["const:5aeae8:8", "const:4:8"]]
+ 005aeae8 ["CALL", null, ["callee:00c58f30:8"]]
- 005ae73c ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005aeaec ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ae740 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 005ae740 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ae740 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ae740 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5bfbc09155058bdcab9e4dcb377022c7"></a>

### [`005ae7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae7c8.md) → [`005aeb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aeb78.md) FUN_005aeb78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ae7e4",
      "DATA",
      [
        "storage",
        "00c6f6b0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005ae800",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aebc0"
      ]
    ]
  ],
  "added": [
    [
      "005aeb94",
      "DATA",
      [
        "storage",
        "00c70680",
        null,
        "undefined *"
      ]
    ],
    [
      "005aebb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005aebc0"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ae7d8 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005aeb88 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005ae7dc ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 005ae7dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ae7dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ae7dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005ae7e0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005ae7e0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-afaeeee33d111fdf7b40599f396b3585"></a>

### [`005ae8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae8c4.md) → [`005aec74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aec74.md) FUN_005aec74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005acf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005acf00.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005ad2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad2b0.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005aec8c",
      "incomplete_value": true,
      "site": "005aec90",
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
                "const:28:8"
              ]
            ]
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
      "unmatched:005ae8c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ae8c8",
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
      "005aec74",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005aec78",
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
- 005ae8e0 ["INT_ADD", "register:40f0:8", ["const:5ae8e0:8", "const:4:8"]]
- 005ae8e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005aec90 ["INT_ADD", "register:40f0:8", ["const:5aec90:8", "const:4:8"]]
+ 005aec90 ["CALL", null, ["callee:00c58f50:8"]]
- 005ae8c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ae8c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ae8c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005ae8c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ae8c8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005ae8c8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005ae8c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005ae8c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e669bd7a407b406aa3134b208682163f"></a>

### [`005ae924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae924.md) → [`005aecd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aecd4.md) FUN_005aecd4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`004501c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/004501c0.md) [`00450790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/00450790.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0045b650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045b/0045b650.md)
- 新版 呼出元 0件  · 呼出先 23件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`004504e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/004504e0.md) [`00450ab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/00450ab0.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0045b970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045b/0045b970.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.43% / 新版 70.43%

優先判定に残った影響 `call_argument_candidate` 14件, `store_condition` 5件, `store_value` 1件, `unresolved_branch_alignment` 39件, `unresolved_call_alignment` 27件, `unresolved_store_alignment` 32件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005af484",
      "incomplete_value": true,
      "site": "005af494",
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
                "const:9db:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005af0d4",
      "incomplete_value": true,
      "site": "005af0e4",
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
                "const:991:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 68,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ae98c",
      "incomplete_value": true,
      "site": "005ae998",
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
      "definition_site": "005aea20",
      "incomplete_value": true,
      "site": "005aea24",
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
            "const:48:8"
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
      "unmatched:005ae928",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ae92c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ae930",
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
      "005aecd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005aecdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005aece0",
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
- 005ae998 ["INT_ADD", "register:40f0:8", ["const:5ae998:8", "const:4:8"]]
- 005ae998 ["CALL", null, ["callee:00c54d60:8"]]
+ 005aed48 ["INT_ADD", "register:40f0:8", ["const:5aed48:8", "const:4:8"]]
+ 005aed48 ["CALL", null, ["callee:00c54d60:8"]]
- 005aea24 ["COPY", "register:0:8", ["register:4048:8"]]
- 005aea24 ["INT_ADD", "register:40f0:8", ["const:5aea24:8", "const:4:8"]]
- 005aea24 ["CALLIND", null, ["register:0:8"]]
+ 005aedd4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 005aedd4 ["INT_ADD", "register:40f0:8", ["const:5aedd4:8", "const:4:8"]]
+ 005aedd4 ["CALLIND", null, ["register:0:8"]]
- 005aebfc ["INT_ADD", "register:40f0:8", ["const:5aebfc:8", "const:4:8"]]
- 005aebfc ["CALL", null, ["callee:00796310:8"]]
+ 005aefac ["INT_ADD", "register:40f0:8", ["const:5aefac:8", "const:4:8"]]
+ 005aefac ["CALL", null, ["callee:00796310:8"]]
~~~


<a id="compare-4535b69488d68390bd8cfcca672bdbe8"></a>

### [`005af7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005af7c0.md) → [`005afb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005af/005afb70.md) FUN_005afb70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005ad32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad32c.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005ad6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad6dc.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.39% / 新版 85.39%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005af7fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005afbc4"
      ]
    ],
    [
      "005afbb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005af84c"
      ]
    ],
    [
      "unmatched:005af848",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005afca8"
      ]
    ]
  ],
  "added": [
    [
      "005afbac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005afbc4"
      ]
    ],
    [
      "005afbb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005afbfc"
      ]
    ],
    [
      "005afbf8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005afca8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005af7e4 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 005afb94 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 005af7fc ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 005af804 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
+ 005afbb4 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
~~~


<a id="compare-82e7cdeda469f105485858dcd9de5b9f"></a>

### [`005af928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005af928.md) → [`005afcd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005af/005afcd8.md) _INIT_58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 79.66% / 新版 79.66%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005afac8",
      "incomplete_value": true,
      "site": "005afad8",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005afadc",
      "incomplete_value": true,
      "site": "005afaec",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005afef8",
      "incomplete_value": false,
      "site": "005aff0c",
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
      "unmatched:005af958",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005af964",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005af980",
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
      "005afd08",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005afd14",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005afd30",
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
- 005afad8 ["INT_ADD", "register:40f0:8", ["const:5afad8:8", "const:4:8"]]
- 005afad8 ["CALL", null, ["callee:0043bb58:8"]]
+ 005afe88 ["INT_ADD", "register:40f0:8", ["const:5afe88:8", "const:4:8"]]
+ 005afe88 ["CALL", null, ["callee:0043bb58:8"]]
- 005afaec ["INT_ADD", "register:40f0:8", ["const:5afaec:8", "const:4:8"]]
- 005afaec ["CALL", null, ["callee:0043bb58:8"]]
+ 005afe9c ["INT_ADD", "register:40f0:8", ["const:5afe9c:8", "const:4:8"]]
+ 005afe9c ["CALL", null, ["callee:0043bb58:8"]]
- 005afb5c ["INT_ADD", "register:40f0:8", ["const:5afb5c:8", "const:4:8"]]
- 005afb5c ["CALL", null, ["callee:00c58ed0:8"]]
+ 005aff0c ["INT_ADD", "register:40f0:8", ["const:5aff0c:8", "const:4:8"]]
+ 005aff0c ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-ee42e3fa790c77b7930d1be34d56ce8b"></a>

### [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) → [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) FUN_005b0068

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 11件 [`005afe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afe2c.md) [`005afe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afe48.md) [`005aff9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005aff9c.md) [`005b0100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0100.md) [`005b0180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0180.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00903f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903f98.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md) [`009e4758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e4758.md)
- 新版 呼出元 11件 [`005b01dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b01dc.md) [`005b01f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b01f8.md) [`005b034c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b034c.md) [`005b04b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b04b0.md) [`005b0530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0530.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00904f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904f44.md) [`009e1fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e1fc0.md) [`009e5704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e5/009e5704.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b01a8",
      "incomplete_value": true,
      "site": "005b01ac",
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
                "const:20:8"
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
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "005b01c4",
      "incomplete_value": true,
      "site": "005b01d8",
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
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005afdec"
      ],
      [
        "FALL_THROUGH",
        "005b019c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005b019c",
      "incomplete_value": true,
      "site": "005b01a0",
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
      "definition_site": "005afdec",
      "incomplete_value": true,
      "site": "005afdf0",
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
      "unmatched:005afd90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b0124"
      ]
    ],
    [
      "unmatched:005afdec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b01a8"
      ]
    ]
  ],
  "added": [
    [
      "005b0140",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b0124"
      ]
    ],
    [
      "005b019c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b01a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005afdfc ["INT_ADD", "register:40f0:8", ["const:5afdfc:8", "const:4:8"]]
- 005afdfc ["CALL", null, ["callee:0043bf04:8"]]
+ 005b01ac ["INT_ADD", "register:40f0:8", ["const:5b01ac:8", "const:4:8"]]
+ 005b01ac ["CALL", null, ["callee:0043bf04:8"]]
- 005afcd0 ["INT_ADD", "register:40f0:8", ["const:5afcd0:8", "const:4:8"]]
- 005afcd0 ["CALL", null, ["callee:008524fc:8"]]
+ 005b0080 ["INT_ADD", "register:40f0:8", ["const:5b0080:8", "const:4:8"]]
+ 005b0080 ["CALL", null, ["callee:008524fc:8"]]
- 005afce4 ["INT_ADD", "register:40f0:8", ["const:5afce4:8", "const:4:8"]]
- 005afce4 ["CALL", null, ["callee:00904f44:8"]]
+ 005b0094 ["INT_ADD", "register:40f0:8", ["const:5b0094:8", "const:4:8"]]
+ 005b0094 ["CALL", null, ["callee:00904f44:8"]]
~~~


<a id="compare-0d61f2189994fa0ca71689d9f22c46ab"></a>

### [`005afe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afe48.md) → [`005b01f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b01f8.md) FUN_005b01f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 8件 [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`006628b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006628b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2d7c.md) [`00903f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903f98.md)
- 新版 呼出元 1件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 8件 [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) [`00662c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662c68.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c3d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3d28.md) [`00904f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904f44.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.65% / 新版 97.65%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b029c",
      "incomplete_value": true,
      "site": "005b02ac",
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
            "const:50:8"
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
    "new": {
      "definition_site": "005b02a0",
      "incomplete_value": false,
      "site": "005b02ac",
      "value": [
        "leaf",
        "const:ffffffff:8"
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b02a4",
      "incomplete_value": false,
      "site": "005b02ac",
      "value": [
        "leaf",
        "const:ffffffff:8"
      ]
    },
    "old": null,
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
      "unmatched:005afe70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b0234"
      ]
    ]
  ],
  "added": [
    [
      "005b0220",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b0234"
      ]
    ]
  ]
}
~~~


~~~diff
- 005afefc ["INT_ADD", "register:40f0:8", ["const:5afefc:8", "const:4:8"]]
- 005afefc ["CALL", null, ["callee:009e1fc0:8"]]
+ 005b02ac ["INT_ADD", "register:40f0:8", ["const:5b02ac:8", "const:4:8"]]
+ 005b02ac ["CALL", null, ["callee:009e1fc0:8"]]
- 005aff34 ["INT_ADD", "register:40f0:8", ["const:5aff34:8", "const:4:8"]]
- 005aff34 ["CALL", null, ["callee:00662c68:8"]]
+ 005b02e4 ["INT_ADD", "register:40f0:8", ["const:5b02e4:8", "const:4:8"]]
+ 005b02e4 ["CALL", null, ["callee:00662c68:8"]]
- 005aff4c ["INT_ADD", "register:40f0:8", ["const:5aff4c:8", "const:4:8"]]
- 005aff4c ["CALL", null, ["callee:00aba2e0:8"]]
+ 005b02fc ["INT_ADD", "register:40f0:8", ["const:5b02fc:8", "const:4:8"]]
+ 005b02fc ["CALL", null, ["callee:00aba2e0:8"]]
~~~


<a id="compare-accc3cdd6bf6b6abe2cafee7c9475ec2"></a>

### [`005aff9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005aff9c.md) → [`005b034c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b034c.md) FUN_005b034c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 4件 [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2d7c.md) [`00ab92ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab9/00ab92ec.md)
- 新版 呼出元 1件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 4件 [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c3d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3d28.md) [`00aba2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aba/00aba2e0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.39% / 新版 89.39%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b0374",
      "incomplete_value": true,
      "site": "005b0378",
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
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "definition_site": "005b0370",
      "incomplete_value": false,
      "site": "005b0378",
      "value": [
        "leaf",
        "const:11:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b0010",
      "incomplete_value": false,
      "site": "005b001c",
      "value": [
        "leaf",
        "const:3:8"
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
      "unmatched:005aff9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005affa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005affa4",
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
      "005b034c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b0350",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b0354",
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
- 005affc8 ["INT_ADD", "register:40f0:8", ["const:5affc8:8", "const:4:8"]]
- 005affc8 ["CALL", null, ["callee:00aba2e0:8"]]
+ 005b0378 ["INT_ADD", "register:40f0:8", ["const:5b0378:8", "const:4:8"]]
+ 005b0378 ["CALL", null, ["callee:00aba2e0:8"]]
- 005b001c ["INT_ADD", "register:40f0:8", ["const:5b001c:8", "const:4:8"]]
- 005b001c ["CALL", null, ["callee:005b0068:8"]]
+ 005b03cc ["INT_ADD", "register:40f0:8", ["const:5b03cc:8", "const:4:8"]]
+ 005b03cc ["CALL", null, ["callee:005b0068:8"]]
- 005b0038 ["INT_ADD", "register:40f0:8", ["const:5b0038:8", "const:4:8"]]
- 005b0038 ["CALL", null, ["callee:00aba2e0:8"]]
+ 005b03e8 ["INT_ADD", "register:40f0:8", ["const:5b03e8:8", "const:4:8"]]
+ 005b03e8 ["CALL", null, ["callee:00aba2e0:8"]]
~~~


<a id="compare-595e146f82c784cd24227cb654f50abe"></a>

### [`005b00a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b00a4.md) → [`005b0454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0454.md) FUN_005b0454

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2d7c.md)
- 新版 呼出元 1件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c3d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3d28.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b00a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b00a8",
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
      "005b0454",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b0458",
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
- 005b00a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b00a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b00a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b00a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b00a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b00a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b00ac ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-c7711200af30f2cb6722d1f7f5dc5f37"></a>

### [`005b0100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0100.md) → [`005b04b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b04b0.md) FUN_005b04b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 4件 [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2d7c.md) [`00ab92ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab9/00ab92ec.md)
- 新版 呼出元 1件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 4件 [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c3d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3d28.md) [`00aba2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aba/00aba2e0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.38% / 新版 84.38%

アドレスに依存する影響 `call_argument_candidate` 5件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b04d8",
      "incomplete_value": true,
      "site": "005b04dc",
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
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b0128",
      "incomplete_value": true,
      "site": "005b012c",
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
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "definition_site": "005b0124",
      "incomplete_value": false,
      "site": "005b012c",
      "value": [
        "leaf",
        "const:2:8"
      ]
    },
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b04f8",
      "incomplete_value": true,
      "site": "005b04fc",
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
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b0148",
      "incomplete_value": true,
      "site": "005b014c",
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
            "const:d00:8"
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
      "unmatched:005b0100",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b0104",
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
      "005b04b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b04b4",
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
- 005b012c ["INT_ADD", "register:40f0:8", ["const:5b012c:8", "const:4:8"]]
- 005b012c ["CALL", null, ["callee:00aba2e0:8"]]
+ 005b04dc ["INT_ADD", "register:40f0:8", ["const:5b04dc:8", "const:4:8"]]
+ 005b04dc ["CALL", null, ["callee:00aba2e0:8"]]
- 005b014c ["INT_ADD", "register:40f0:8", ["const:5b014c:8", "const:4:8"]]
- 005b014c ["CALL", null, ["callee:008c3d28:8"]]
+ 005b04fc ["INT_ADD", "register:40f0:8", ["const:5b04fc:8", "const:4:8"]]
+ 005b04fc ["CALL", null, ["callee:008c3d28:8"]]
- 005b0100 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b0100 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b0100 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b0100 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-9b8ec42c8769a780bcac263cd4be9794"></a>

### [`005b0180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0180.md) → [`005b0530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0530.md) FUN_005b0530

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 8件 [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`005e4f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4f7c.md) [`00800224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800224.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) · 呼出先 8件 [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md) [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) [`005e532c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e5/005e532c.md) [`00801188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801188.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.30% / 新版 70.30%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b0220",
      "incomplete_value": true,
      "site": "005b0224",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b0390",
      "incomplete_value": true,
      "site": "005b03a8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40a0:4"
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
    "new": null,
    "old": {
      "definition_site": "005b0394",
      "incomplete_value": true,
      "site": "005b03a8",
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
      "unmatched:005b0180",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b0184",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b0188",
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
      "005b0530",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b0534",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b0538",
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
- 005b0224 ["INT_ADD", "register:40f0:8", ["const:5b0224:8", "const:4:8"]]
- 005b0224 ["CALL", null, ["callee:00801188:8"]]
+ 005b05d4 ["INT_ADD", "register:40f0:8", ["const:5b05d4:8", "const:4:8"]]
+ 005b05d4 ["CALL", null, ["callee:00801188:8"]]
- 005b03a8 ["INT_ADD", "register:40f0:8", ["const:5b03a8:8", "const:4:8"]]
- 005b03a8 ["CALL", null, ["callee:00a66e50:8"]]
+ 005b0758 ["INT_ADD", "register:40f0:8", ["const:5b0758:8", "const:4:8"]]
+ 005b0758 ["CALL", null, ["callee:00a66e50:8"]]
- 005b04f8 ["INT_ADD", "register:40f0:8", ["const:5b04f8:8", "const:4:8"]]
- 005b04f8 ["CALL", null, ["callee:005e532c:8"]]
+ 005b08a8 ["INT_ADD", "register:40f0:8", ["const:5b08a8:8", "const:4:8"]]
+ 005b08a8 ["CALL", null, ["callee:005e532c:8"]]
~~~


<a id="compare-276b2239007d175159d1d163b080a920"></a>

### [`005b05a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b05a8.md) → [`005b0958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0958.md) FUN_005b0958

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 4件 [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2d7c.md) [`00ab92ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab9/00ab92ec.md)
- 新版 呼出元 1件 [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 4件 [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c3d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3d28.md) [`00aba2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aba/00aba2e0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.63% / 新版 96.63%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b0a80",
      "incomplete_value": true,
      "site": "005b0a84",
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
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b06d0",
      "incomplete_value": true,
      "site": "005b06d4",
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
            "const:d00:8"
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
      "definition_site": "005b0a78",
      "incomplete_value": false,
      "site": "005b0a84",
      "value": [
        "leaf",
        "const:c:8"
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 2
  }
]
~~~


~~~diff
- 005b06d4 ["INT_ADD", "register:40f0:8", ["const:5b06d4:8", "const:4:8"]]
- 005b06d4 ["CALL", null, ["callee:008c3d28:8"]]
+ 005b0a84 ["INT_ADD", "register:40f0:8", ["const:5b0a84:8", "const:4:8"]]
+ 005b0a84 ["CALL", null, ["callee:008c3d28:8"]]
- 005b05cc ["INT_ADD", "register:40f0:8", ["const:5b05cc:8", "const:4:8"]]
- 005b05cc ["CALL", null, ["callee:008524fc:8"]]
+ 005b097c ["INT_ADD", "register:40f0:8", ["const:5b097c:8", "const:4:8"]]
+ 005b097c ["CALL", null, ["callee:008524fc:8"]]
- 005b05d4 ["INT_ADD", "register:40f0:8", ["const:5b05d4:8", "const:4:8"]]
- 005b05d4 ["CALL", null, ["callee:008524fc:8"]]
+ 005b0984 ["INT_ADD", "register:40f0:8", ["const:5b0984:8", "const:4:8"]]
+ 005b0984 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d62daded777262b12a73e9dd49ef382f"></a>

### [`005b070c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b070c.md) → [`005b0abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0abc.md) FUN_005b0abc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005f660c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f6/005f660c.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 11件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`005e1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b58.md) [`005e1b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md)
- 新版 呼出元 4件 [`005f69bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f6/005f69bc.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) [`00a53028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 11件 [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) [`005e1f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f08.md) [`005e1f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f20.md) [`00664bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664bb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_argument_candidate` 7件, `return_value_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b0ae0",
      "incomplete_value": false,
      "site": "005b0ae4",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b0770",
      "incomplete_value": true,
      "site": "005b0778",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b0774",
      "incomplete_value": true,
      "site": "005b0778",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40a0:4"
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
      "unmatched:005b070c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b0710",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b0714",
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
      "005b0abc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005b0ac0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b0ac4",
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
- 005b0734 ["INT_ADD", "register:40f0:8", ["const:5b0734:8", "const:4:8"]]
- 005b0734 ["CALL", null, ["callee:00803b14:8"]]
+ 005b0ae4 ["INT_ADD", "register:40f0:8", ["const:5b0ae4:8", "const:4:8"]]
+ 005b0ae4 ["CALL", null, ["callee:00803b14:8"]]
- 005b0778 ["INT_ADD", "register:40f0:8", ["const:5b0778:8", "const:4:8"]]
- 005b0778 ["CALL", null, ["callee:005e1f20:8"]]
+ 005b0b28 ["INT_ADD", "register:40f0:8", ["const:5b0b28:8", "const:4:8"]]
+ 005b0b28 ["CALL", null, ["callee:005e1f20:8"]]
- 005b07cc ["INT_ADD", "register:40f0:8", ["const:5b07cc:8", "const:4:8"]]
- 005b07cc ["CALL", null, ["callee:008c3d28:8"]]
+ 005b0b7c ["INT_ADD", "register:40f0:8", ["const:5b0b7c:8", "const:4:8"]]
+ 005b0b7c ["CALL", null, ["callee:008c3d28:8"]]
~~~


<a id="compare-7c8bdf7a5103ec848179f0e505a79c4a"></a>

### [`005b088c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b088c.md) → [`005b0c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0c3c.md) _INIT_59

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 15件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b09f0",
      "incomplete_value": true,
      "site": "005b0a00",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b09f4",
      "incomplete_value": true,
      "site": "005b0a00",
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b0dd4",
      "incomplete_value": true,
      "site": "005b0dd8",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005b08bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b08c8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005b08e4",
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
      "005b0c6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005b0c78",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005b0c94",
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
- 005b0a00 ["INT_ADD", "register:40f0:8", ["const:5b0a00:8", "const:4:8"]]
- 005b0a00 ["CALL", null, ["callee:0043bb58:8"]]
+ 005b0db0 ["INT_ADD", "register:40f0:8", ["const:5b0db0:8", "const:4:8"]]
+ 005b0db0 ["CALL", null, ["callee:0043bb58:8"]]
- 005b0a28 ["INT_ADD", "register:40f0:8", ["const:5b0a28:8", "const:4:8"]]
- 005b0a28 ["CALL", null, ["callee:0043bb58:8"]]
+ 005b0dd8 ["INT_ADD", "register:40f0:8", ["const:5b0dd8:8", "const:4:8"]]
+ 005b0dd8 ["CALL", null, ["callee:0043bb58:8"]]
- 005b0a3c ["INT_ADD", "register:40f0:8", ["const:5b0a3c:8", "const:4:8"]]
- 005b0a3c ["CALL", null, ["callee:0043bb58:8"]]
+ 005b0dec ["INT_ADD", "register:40f0:8", ["const:5b0dec:8", "const:4:8"]]
+ 005b0dec ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-23af780f3c2c50d66953abf79930cc0a"></a>

### [`005b0c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0c1c.md) → [`005b0fcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0fcc.md) FUN_005b0fcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005b216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b216c.md) [`005b3180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3180.md) [`005b6958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6958.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005b0c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0c88.md)
- 新版 呼出元 3件 [`005b251c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b251c.md) [`005b3530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3530.md) [`005b6d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6d08.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005b1038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1038.md)

変更の種類 call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b0c4c",
      "incomplete_value": true,
      "site": "005b0c54",
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
      "definition_site": "005b0c4c",
      "incomplete_value": true,
      "site": "005b0c54",
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
                "register:4010:8"
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
      "definition_site": "005b1008",
      "incomplete_value": true,
      "site": "005b100c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005b0c1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b0c20",
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
      "005b0fcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b0fd0",
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
- 005b0c54 ["INT_ADD", "register:40f0:8", ["const:5b0c54:8", "const:4:8"]]
- 005b0c54 ["CALL", null, ["callee:0043be80:8"]]
+ 005b1004 ["INT_ADD", "register:40f0:8", ["const:5b1004:8", "const:4:8"]]
+ 005b1004 ["CALL", null, ["callee:0043be80:8"]]
- 005b0c5c ["INT_ADD", "register:40f0:8", ["const:5b0c5c:8", "const:4:8"]]
- 005b0c5c ["CALL", null, ["callee:005b1038:8"]]
+ 005b100c ["INT_ADD", "register:40f0:8", ["const:5b100c:8", "const:4:8"]]
+ 005b100c ["CALL", null, ["callee:005b1038:8"]]
- 005b0c1c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b0c1c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b0c1c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b0c1c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f0e4fcc01369a30fde5ef309f0ade8b8"></a>

### [`005b0c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0c88.md) → [`005b1038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1038.md) FUN_005b1038

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b0c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0c1c.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)
- 新版 呼出元 1件 [`005b0fcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0fcc.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ff0.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md) [`00c59010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59010.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.33% / 新版 86.33%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b106c",
      "incomplete_value": false,
      "site": "005b1078",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b1000:8"
          ],
          [
            "leaf",
            "const:e8f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b0cbc",
      "incomplete_value": false,
      "site": "005b0cc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b1000:8"
          ],
          [
            "leaf",
            "const:e45:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b1098",
      "incomplete_value": false,
      "site": "005b10a0",
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
            "const:24f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b0ce8",
      "incomplete_value": false,
      "site": "005b0cf0",
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
            "const:20f:8"
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
      "definition_site": "005b0d34",
      "incomplete_value": true,
      "site": "005b0d38",
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
      "unmatched:005b0ca8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b0cbc",
      "PARAM",
      [
        "storage",
        "002b1e45",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005b0cd8",
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
      "005b1058",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005b106c",
      "PARAM",
      [
        "storage",
        "002b1e8f",
        null,
        "string"
      ]
    ],
    [
      "005b1088",
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
- 005b0cc8 ["INT_ADD", "register:40f0:8", ["const:5b0cc8:8", "const:4:8"]]
- 005b0cc8 ["CALL", null, ["callee:00c59000:8"]]
+ 005b1078 ["INT_ADD", "register:40f0:8", ["const:5b1078:8", "const:4:8"]]
+ 005b1078 ["CALL", null, ["callee:00c59000:8"]]
- 005b0cf0 ["INT_ADD", "register:40f0:8", ["const:5b0cf0:8", "const:4:8"]]
- 005b0cf0 ["CALL", null, ["callee:00c59010:8"]]
+ 005b10a0 ["INT_ADD", "register:40f0:8", ["const:5b10a0:8", "const:4:8"]]
+ 005b10a0 ["CALL", null, ["callee:00c59010:8"]]
- 005b0d38 ["INT_ADD", "register:40f0:8", ["const:5b0d38:8", "const:4:8"]]
- 005b0d38 ["CALL", null, ["callee:00c59020:8"]]
+ 005b10e8 ["INT_ADD", "register:40f0:8", ["const:5b10e8:8", "const:4:8"]]
+ 005b10e8 ["CALL", null, ["callee:00c59020:8"]]
~~~


<a id="compare-c6c77284bf13ddaa9ccae434385c2507"></a>

### [`005b0fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0fd4.md) → [`005b1384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1384.md) FUN_005b1384

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`005b5254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5254.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b5604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5604.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b0fd8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 005b0fd8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 005b0fd8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 005b0fd8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 005b1388 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 005b1388 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 005b1388 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 005b1388 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-18954671a6fb5daa8f770bdf88b31217"></a>

### [`005b0fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0fe8.md) → [`005b1398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1398.md) _INIT_60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.97% / 新版 77.97%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b14e4",
      "incomplete_value": true,
      "site": "005b14f8",
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
    "new": null,
    "old": {
      "definition_site": "005b114c",
      "incomplete_value": true,
      "site": "005b115c",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b1150",
      "incomplete_value": true,
      "site": "005b115c",
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
      "unmatched:005b1018",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1024",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005b1040",
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
      "005b13c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005b13d4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005b13f0",
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
- 005b1148 ["INT_ADD", "register:40f0:8", ["const:5b1148:8", "const:4:8"]]
- 005b1148 ["CALL", null, ["callee:0043bb58:8"]]
+ 005b14f8 ["INT_ADD", "register:40f0:8", ["const:5b14f8:8", "const:4:8"]]
+ 005b14f8 ["CALL", null, ["callee:0043bb58:8"]]
- 005b115c ["INT_ADD", "register:40f0:8", ["const:5b115c:8", "const:4:8"]]
- 005b115c ["CALL", null, ["callee:0043bb58:8"]]
+ 005b150c ["INT_ADD", "register:40f0:8", ["const:5b150c:8", "const:4:8"]]
+ 005b150c ["CALL", null, ["callee:0043bb58:8"]]
- 005b1170 ["INT_ADD", "register:40f0:8", ["const:5b1170:8", "const:4:8"]]
- 005b1170 ["CALL", null, ["callee:0043bb58:8"]]
+ 005b1520 ["INT_ADD", "register:40f0:8", ["const:5b1520:8", "const:4:8"]]
+ 005b1520 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-1c79b238fbaf485d40079ad194c1aefa"></a>

### [`005b1378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1378.md) → [`005b1728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1728.md) FUN_005b1728

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 2件 [`00879c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879c10.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) · 呼出先 2件 [`0087abbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087abbc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.57% / 新版 69.57%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b1738",
      "incomplete_value": false,
      "site": "005b173c",
      "value": [
        "leaf",
        "const:8:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 005b138c ["INT_ADD", "register:40f0:8", ["const:5b138c:8", "const:4:8"]]
- 005b138c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b173c ["INT_ADD", "register:40f0:8", ["const:5b173c:8", "const:4:8"]]
+ 005b173c ["CALL", null, ["callee:00c58f30:8"]]
- 005b1394 ["INT_ADD", "register:40f0:8", ["const:5b1394:8", "const:4:8"]]
- 005b1394 ["CALL", null, ["callee:0087abbc:8"]]
+ 005b1744 ["INT_ADD", "register:40f0:8", ["const:5b1744:8", "const:4:8"]]
+ 005b1744 ["CALL", null, ["callee:0087abbc:8"]]
- 005b13a0 ["COPY", "tmp:0:8", ["const:0:8"]]
- 005b13a0 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 005b13a0 ["INT_ADD", "register:4040:8", ["register:4040:8", "const:18:8"]]
- 005b13a0 ["STORE", null, ["const:1b1:8", "register:4040:8", "tmp:1:8"]]
~~~


<a id="compare-a8c36b2e344bd9c6ed239ff66bcf48a8"></a>

### [`005b13e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b13e8.md) → [`005b1798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1798.md) FUN_005b1798

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848644.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 4件 [`005b5260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5260.md) [`005b52d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b52d0.md) [`00879dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879dd4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008495f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/008495f0.md) [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) · 呼出先 4件 [`005b5610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5610.md) [`005b5680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5680.md) [`0087ad80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ad80.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.58% / 新版 81.58%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b13e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b13ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1414",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b17d4"
      ]
    ]
  ],
  "added": [
    [
      "005b1798",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b179c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b17c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b17d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b13e8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b13e8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b13e8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b13e8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b13ec ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005b13ec ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005b13ec ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005b13ec ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005b13f0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-deb11917e4e30130bd46507cd542ea0c"></a>

### [`005b1480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1480.md) → [`005b1830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1830.md) FUN_005b1830

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 2件 [`005b5260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5260.md) [`005b52d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b52d0.md)
- 新版 呼出元 1件 [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 2件 [`005b5610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5610.md) [`005b5680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5680.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.80% / 新版 87.80%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b1860",
      "incomplete_value": true,
      "site": "005b1868",
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
            "const:10:8"
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
    "new": {
      "definition_site": "005b1864",
      "incomplete_value": true,
      "site": "005b1868",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b14b4",
      "incomplete_value": true,
      "site": "005b14b8",
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
                "const:18:8"
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
      "definition_site": "005b14c4",
      "incomplete_value": true,
      "site": "005b14d0",
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
                "const:30:8"
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
      "unmatched:005b1480",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1484",
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
      "005b1830",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b1834",
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
- 005b14b8 ["INT_ADD", "register:40f0:8", ["const:5b14b8:8", "const:4:8"]]
- 005b14b8 ["CALL", null, ["callee:005b5610:8"]]
+ 005b1868 ["INT_ADD", "register:40f0:8", ["const:5b1868:8", "const:4:8"]]
+ 005b1868 ["CALL", null, ["callee:005b5610:8"]]
- 005b14d0 ["INT_ADD", "register:40f0:8", ["const:5b14d0:8", "const:4:8"]]
- 005b14d0 ["CALL", null, ["callee:005b5680:8"]]
+ 005b1880 ["INT_ADD", "register:40f0:8", ["const:5b1880:8", "const:4:8"]]
+ 005b1880 ["CALL", null, ["callee:005b5680:8"]]
- 005b1480 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b1480 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b1480 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b1480 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-e6edf1ce839755a5bb3b6ecf48b81fe7"></a>

### [`005b1554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1554.md) → [`005b1904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1904.md) FUN_005b1904

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005b1524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1524.md) [`005b2b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2b48.md) · 呼出先 8件 [`005b538c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b538c.md) [`005b5390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5390.md) [`005b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5410.md) [`005b5414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5414.md) [`00b36970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36970.md)
- 新版 呼出元 2件 [`005b18d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b18d4.md) [`005b2ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2ef8.md) · 呼出先 8件 [`005b573c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b573c.md) [`005b5740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5740.md) [`005b57c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b57c0.md) [`005b57c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b57c4.md) [`00b37964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37964.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 60.71% / 新版 60.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b193c",
      "incomplete_value": true,
      "site": "005b1940",
      "value": [
        "INT_SUB",
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
    "old": {
      "definition_site": "005b158c",
      "incomplete_value": true,
      "site": "005b1590",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:005b1558",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b155c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1560",
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
      "005b1908",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b190c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b1910",
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
- 005b1590 ["INT_ADD", "register:40f0:8", ["const:5b1590:8", "const:4:8"]]
- 005b1590 ["CALL", null, ["callee:00b37a84:8"]]
+ 005b1940 ["INT_ADD", "register:40f0:8", ["const:5b1940:8", "const:4:8"]]
+ 005b1940 ["CALL", null, ["callee:00b37a84:8"]]
- 005b1554 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 005b1558 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b1558 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b1558 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005b1558 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-568b049be86680270340f1760f1ad827"></a>

### [`005b1690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1690.md) → [`005b1a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1a40.md) FUN_005b1a40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005b1524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1524.md) [`005b2b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2b48.md) · 呼出先 11件 [`005b5714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5714.md) [`005b5718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5718.md) [`005b5798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5798.md) [`005b579c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b579c.md) [`00879dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879dd8.md)
- 新版 呼出元 2件 [`005b18d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b18d4.md) [`005b2ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2ef8.md) · 呼出先 11件 [`005b5ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5ac4.md) [`005b5ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5ac8.md) [`005b5b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5b48.md) [`005b5b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5b4c.md) [`0087ad84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ad84.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 67.16% / 新版 67.16%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b1a60",
      "incomplete_value": false,
      "site": "005b1a70",
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
            "const:4e6:8"
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
      "definition_site": "005b16cc",
      "incomplete_value": true,
      "site": "005b16d0",
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
            "register:40a0:8"
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
      "definition_site": "005b16f0",
      "incomplete_value": true,
      "site": "005b16f4",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:005b1694",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1698",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b169c",
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
      "005b1a44",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b1a48",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b1a4c",
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
- 005b16c0 ["INT_ADD", "register:40f0:8", ["const:5b16c0:8", "const:4:8"]]
- 005b16c0 ["CALL", null, ["callee:00c59230:8"]]
+ 005b1a70 ["INT_ADD", "register:40f0:8", ["const:5b1a70:8", "const:4:8"]]
+ 005b1a70 ["CALL", null, ["callee:00c59230:8"]]
- 005b16d0 ["INT_ADD", "register:40f0:8", ["const:5b16d0:8", "const:4:8"]]
- 005b16d0 ["CALL", null, ["callee:0087ad84:8"]]
+ 005b1a80 ["INT_ADD", "register:40f0:8", ["const:5b1a80:8", "const:4:8"]]
+ 005b1a80 ["CALL", null, ["callee:0087ad84:8"]]
- 005b16f4 ["INT_ADD", "register:40f0:8", ["const:5b16f4:8", "const:4:8"]]
- 005b16f4 ["CALL", null, ["callee:00b35310:8"]]
+ 005b1aa4 ["INT_ADD", "register:40f0:8", ["const:5b1aa4:8", "const:4:8"]]
+ 005b1aa4 ["CALL", null, ["callee:00b35310:8"]]
~~~


<a id="compare-e8361b164c571c5de9d5918a25eb7842"></a>

### [`005b17f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b17f8.md) → [`005b1ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1ba8.md) FUN_005b1ba8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b5394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5394.md) · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md) [`005b1910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1910.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b5744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5744.md) · 呼出先 6件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`004939f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/004939f0.md) [`005b1cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1cc0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.02% / 新版 83.02%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b1864",
      "incomplete_value": true,
      "site": "005b1868",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "005b1860",
      "incomplete_value": true,
      "site": "005b1868",
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
      "unmatched:005b1824",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1828",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:005b1838",
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
      "005b1bd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005b1bd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "005b1be8",
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
- 005b1868 ["INT_ADD", "register:40f0:8", ["const:5b1868:8", "const:4:8"]]
- 005b1868 ["CALL", null, ["callee:004939f0:8"]]
+ 005b1c18 ["INT_ADD", "register:40f0:8", ["const:5b1c18:8", "const:4:8"]]
+ 005b1c18 ["CALL", null, ["callee:004939f0:8"]]
- 005b1824 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005b1824 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 005b1824 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 005b1828 ["INT_ADD", "register:40f0:8", ["const:5b1828:8", "const:4:8"]]
- 005b1828 ["CALL", null, ["ram:48cd38:8"]]
~~~


