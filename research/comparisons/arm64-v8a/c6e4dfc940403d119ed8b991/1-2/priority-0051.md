# v16.0.2 → v16.0.3 · 最優先の変更候補 (51)

[一覧の目次](README.md)

<a id="compare-20be997212f71e482c8b107fc53374c7"></a>

### [`00830df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830df8.md) → [`00831da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831da4.md) FUN_00831da4

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
      "definition_site": "00831dc0",
      "incomplete_value": false,
      "site": "00831dc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830e14",
      "incomplete_value": false,
      "site": "00830e14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:708:8"
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
      "00831dc0",
      "DATA",
      [
        "storage",
        "00c7e708",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831dc0",
      "DATA",
      [
        "storage",
        "00c7f6d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830e0c ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00831db8 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00830e10 ["COPY", "tmp:0:8", ["const:708:8"]]
- 00830e10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00830e10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00830e10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00831dbc ["COPY", "tmp:0:8", ["const:6d8:8"]]
+ 00831dbc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00831dbc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00831dbc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00830e34 ["COPY", "register:0:8", ["register:4048:8"]]
- 00830e34 ["INT_ADD", "register:40f0:8", ["const:830e34:8", "const:4:8"]]
- 00830e34 ["CALLIND", null, ["register:0:8"]]
+ 00831de0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00831de0 ["INT_ADD", "register:40f0:8", ["const:831de0:8", "const:4:8"]]
+ 00831de0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1749ab376cffca5c2f6d91384bf7404e"></a>

### [`00830ef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830ef4.md) → [`00831ea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831ea0.md) FUN_00831ea0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00acad38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acad38.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00acbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acb/00acbd2c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831ec8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00830f1c",
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
      "00831ec8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00831ec8",
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
- 00830f1c ["INT_ADD", "register:40f0:8", ["const:830f1c:8", "const:4:8"]]
- 00830f1c ["CALL", null, ["ram:47ad34:8"]]
+ 00831ec8 ["INT_ADD", "register:40f0:8", ["const:831ec8:8", "const:4:8"]]
+ 00831ec8 ["CALL", null, ["ram:47b054:8"]]
- 00830f28 ["INT_ADD", "register:40f0:8", ["const:830f28:8", "const:4:8"]]
- 00830f28 ["CALL", null, ["callee:0047d134:8"]]
+ 00831ed4 ["INT_ADD", "register:40f0:8", ["const:831ed4:8", "const:4:8"]]
+ 00831ed4 ["CALL", null, ["callee:0047d134:8"]]
- 00830f4c ["INT_ADD", "register:40f0:8", ["const:830f4c:8", "const:4:8"]]
- 00830f4c ["CALL", null, ["callee:008524fc:8"]]
+ 00831ef8 ["INT_ADD", "register:40f0:8", ["const:831ef8:8", "const:4:8"]]
+ 00831ef8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c83e299e70dbebc74191c9da2edbbcf1"></a>

### [`00830f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830f9c.md) → [`00831f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831f48.md) FUN_00831f48

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
      "definition_site": "00831f54",
      "incomplete_value": false,
      "site": "00831f60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830fa8",
      "incomplete_value": false,
      "site": "00830fb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:788:8"
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
      "00831f60",
      "DATA",
      [
        "storage",
        "00c7e788",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831f60",
      "DATA",
      [
        "storage",
        "00c7f758",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830fa4 ["COPY", "register:4050:8", ["const:c7e000:8"]]
+ 00831f50 ["COPY", "register:4050:8", ["const:c7f000:8"]]
- 00830fa8 ["COPY", "tmp:0:8", ["const:788:8"]]
- 00830fa8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00830fa8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00830fa8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00831f54 ["COPY", "tmp:0:8", ["const:758:8"]]
+ 00831f54 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00831f54 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00831f54 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-871248aa481f5a198cb56c04b5f70aa5"></a>

### [`00830fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830fe0.md) → [`00831f8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831f8c.md) FUN_00831f8c

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
      "definition_site": "00831fa4",
      "incomplete_value": false,
      "site": "00831fb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830ff8",
      "incomplete_value": false,
      "site": "00831004",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:788:8"
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
      "00831fb0",
      "DATA",
      [
        "storage",
        "00c7e788",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831fb0",
      "DATA",
      [
        "storage",
        "00c7f758",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830ff4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00831fa0 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00830ff8 ["COPY", "tmp:0:8", ["const:788:8"]]
- 00830ff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00830ff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00830ff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00831fa4 ["COPY", "tmp:0:8", ["const:758:8"]]
+ 00831fa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00831fa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00831fa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00831028 ["COPY", "register:0:8", ["register:4040:8"]]
- 00831028 ["INT_ADD", "register:40f0:8", ["const:831028:8", "const:4:8"]]
- 00831028 ["CALLIND", null, ["register:0:8"]]
+ 00831fd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00831fd4 ["INT_ADD", "register:40f0:8", ["const:831fd4:8", "const:4:8"]]
+ 00831fd4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-66ff1ba05d1d7cdd1c39baf41bbf57c1"></a>

### [`0083103c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/0083103c.md) → [`00831fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831fe8.md) FUN_00831fe8

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
      "definition_site": "00832014",
      "incomplete_value": false,
      "site": "00832014",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831068",
      "incomplete_value": false,
      "site": "00831068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:788:8"
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
      "00832014",
      "DATA",
      [
        "storage",
        "00c7e788",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832014",
      "DATA",
      [
        "storage",
        "00c7f758",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831050 ["INT_ADD", "register:40f0:8", ["const:831050:8", "const:4:8"]]
- 00831050 ["CALL", null, ["callee:00c58f30:8"]]
+ 00831ffc ["INT_ADD", "register:40f0:8", ["const:831ffc:8", "const:4:8"]]
+ 00831ffc ["CALL", null, ["callee:00c58f30:8"]]
- 0083105c ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00832008 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00831060 ["COPY", "tmp:0:8", ["const:788:8"]]
- 00831060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0083200c ["COPY", "tmp:0:8", ["const:758:8"]]
+ 0083200c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0083200c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0083200c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-244065f68172aa10fe12c06c06826236"></a>

### [`008310c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008310c4.md) → [`00832070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832070.md) FUN_00832070

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008310e4"
      ],
      [
        "CONDITIONAL_JUMP",
        "00832090"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00832090",
      "incomplete_value": true,
      "site": "008320b8",
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
      "definition_site": "008310e4",
      "incomplete_value": true,
      "site": "0083110c",
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
      "unmatched:008310e0",
      "DATA",
      [
        "storage",
        "00c7e788",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008310e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008320b8"
      ]
    ]
  ],
  "added": [
    [
      "0083208c",
      "DATA",
      [
        "storage",
        "00c7f758",
        null,
        "undefined *"
      ]
    ],
    [
      "00832090",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008320b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008310d8 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00832084 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 008310dc ["COPY", "tmp:0:8", ["const:788:8"]]
- 008310dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008310dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008310dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008310e0 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 008310e0 ["COPY", "tmp:1:8", ["register:4008:8"]]
- 008310e0 ["INT_ADD", "register:4008:8", ["register:4008:8", "const:10:8"]]
- 008310e0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-5c8d82fdc670971fa7cfd4cf63ea2c38"></a>

### [`008311c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008311c0.md) → [`0083216c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/0083216c.md) FUN_0083216c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00832194",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008311e8",
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
      "00832194",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00832194",
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
- 008311e8 ["INT_ADD", "register:40f0:8", ["const:8311e8:8", "const:4:8"]]
- 008311e8 ["CALL", null, ["ram:47ad34:8"]]
+ 00832194 ["INT_ADD", "register:40f0:8", ["const:832194:8", "const:4:8"]]
+ 00832194 ["CALL", null, ["ram:47b054:8"]]
- 008311f4 ["INT_ADD", "register:40f0:8", ["const:8311f4:8", "const:4:8"]]
- 008311f4 ["CALL", null, ["callee:0047d134:8"]]
+ 008321a0 ["INT_ADD", "register:40f0:8", ["const:8321a0:8", "const:4:8"]]
+ 008321a0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-197597d0fc5dd801a2f69262fa0c137e"></a>

### [`00831238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831238.md) → [`008321e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/008321e4.md) FUN_008321e4

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
      "unmatched:0083125c",
      "DATA",
      [
        "storage",
        "00c7e808",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00831260",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00831264",
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
      "00832208",
      "DATA",
      [
        "storage",
        "00c7f7d8",
        null,
        "undefined *"
      ]
    ],
    [
      "0083220c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00832210",
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
- 0083124c ["INT_ADD", "register:40f0:8", ["const:83124c:8", "const:4:8"]]
- 0083124c ["CALL", null, ["callee:00c58f30:8"]]
+ 008321f8 ["INT_ADD", "register:40f0:8", ["const:8321f8:8", "const:4:8"]]
+ 008321f8 ["CALL", null, ["callee:00c58f30:8"]]
- 00831254 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00832200 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00831258 ["COPY", "tmp:0:8", ["const:808:8"]]
- 00831258 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831258 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831258 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-57c4f0b0fb5ce6112620707dfeed7ef3"></a>

### [`0083126c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/0083126c.md) → [`00832218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832218.md) FUN_00832218

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
      "definition_site": "00832224",
      "incomplete_value": false,
      "site": "00832224",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:7d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831278",
      "incomplete_value": false,
      "site": "00831278",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:808:8"
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
      "00832224",
      "DATA",
      [
        "storage",
        "00c7e808",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832224",
      "DATA",
      [
        "storage",
        "00c7f7d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831270 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 0083221c ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00831274 ["COPY", "tmp:0:8", ["const:808:8"]]
- 00831274 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831274 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831274 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00832220 ["COPY", "tmp:0:8", ["const:7d8:8"]]
+ 00832220 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00832220 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00832220 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6e68dc8e5cf6f44ca1e1c82d270aa23a"></a>

### [`00831288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831288.md) → [`00832234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832234.md) FUN_00832234

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
      "unmatched:008312ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00832258",
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
- 00831290 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00831290 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0083223c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0083223c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00831298 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00831298 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00832244 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00832244 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008312ac ["INT_ADD", "register:40f0:8", ["const:8312ac:8", "const:4:8"]]
- 008312ac ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-b10590ef9755f3d279a32eb8afb9aba5"></a>

### [`008312fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008312fc.md) → [`008322a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/008322a8.md) FUN_008322a8

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
      "unmatched:00831320",
      "DATA",
      [
        "storage",
        "00c7e888",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00831324",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00831328",
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
      "008322cc",
      "DATA",
      [
        "storage",
        "00c7f858",
        null,
        "undefined *"
      ]
    ],
    [
      "008322d0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008322d4",
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
- 00831310 ["INT_ADD", "register:40f0:8", ["const:831310:8", "const:4:8"]]
- 00831310 ["CALL", null, ["callee:00c58f30:8"]]
+ 008322bc ["INT_ADD", "register:40f0:8", ["const:8322bc:8", "const:4:8"]]
+ 008322bc ["CALL", null, ["callee:00c58f30:8"]]
- 00831318 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 008322c4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 0083131c ["COPY", "tmp:0:8", ["const:888:8"]]
- 0083131c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0083131c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0083131c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5b935b9fc59105501c4a41013a79b2d4"></a>

### [`00831330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831330.md) → [`008322dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/008322dc.md) FUN_008322dc

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
      "unmatched:0083133c",
      "DATA",
      [
        "storage",
        "00c7e888",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008322e8",
      "DATA",
      [
        "storage",
        "00c7f858",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831330 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00831330 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00831334 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 00831338 ["COPY", "tmp:0:8", ["const:888:8"]]
- 00831338 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831338 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831338 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-66b0c46cfff8ff130f8b44daea6ec439"></a>

### [`0083134c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/0083134c.md) → [`008322f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/008322f8.md) FUN_008322f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 20件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0081fe20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081f/0081fe20.md) [`008290d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00829/008290d4.md)
- 新版 呼出元 0件  · 呼出先 20件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00820dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00820/00820dcc.md) [`0082a080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082a/0082a080.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.02% / 新版 89.02%

優先判定に残った影響 `call_target` 1件, `store_value` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008323d0",
      "incomplete_value": true,
      "site": "008323e0",
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
                "const:17c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831424",
      "incomplete_value": true,
      "site": "00831434",
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
                "const:9e:8"
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
      "definition_site": "008323e4",
      "incomplete_value": true,
      "site": "008323e4",
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
      "definition_site": "00831438",
      "incomplete_value": true,
      "site": "00831438",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008323d8",
      "incomplete_value": true,
      "site": "008323e8",
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
                "const:4e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083142c",
      "incomplete_value": true,
      "site": "0083143c",
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
                "const:490:8"
              ]
            ]
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
      "unmatched:00831390",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00831398",
      "READ",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008313a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008326a0"
      ]
    ]
  ],
  "added": [
    [
      "0083233c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00832344",
      "READ",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0083234c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008326a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008314d8 ["INT_ADD", "register:40f0:8", ["const:8314d8:8", "const:4:8"]]
- 008314d8 ["CALL", null, ["ram:47ad34:8"]]
+ 00832484 ["INT_ADD", "register:40f0:8", ["const:832484:8", "const:4:8"]]
+ 00832484 ["CALL", null, ["ram:47b054:8"]]
- 0083137c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0083137c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00832328 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00832328 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00831384 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 00832330 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
~~~


<a id="compare-8d5d27b68b62ce3209343c9d00f26cc5"></a>

### [`00831724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831724.md) → [`008326d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/008326d0.md) FUN_008326d0

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
      "definition_site": "008326f4",
      "incomplete_value": false,
      "site": "008326f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831748",
      "incomplete_value": false,
      "site": "00831748",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:8f8:8"
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
      "008326f4",
      "DATA",
      [
        "storage",
        "00c7e8f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008326f4",
      "DATA",
      [
        "storage",
        "00c7f8c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831738 ["INT_ADD", "register:40f0:8", ["const:831738:8", "const:4:8"]]
- 00831738 ["CALL", null, ["callee:00c58f30:8"]]
+ 008326e4 ["INT_ADD", "register:40f0:8", ["const:8326e4:8", "const:4:8"]]
+ 008326e4 ["CALL", null, ["callee:00c58f30:8"]]
- 00831740 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 008326ec ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00831744 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 00831744 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831744 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831744 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008326f0 ["COPY", "tmp:0:8", ["const:8c8:8"]]
+ 008326f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008326f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008326f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-28492376bd786579c13d6f477d03cfcf"></a>

### [`00831758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831758.md) → [`00832704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832704.md) FUN_00832704

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
      "definition_site": "00832710",
      "incomplete_value": false,
      "site": "00832710",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831764",
      "incomplete_value": false,
      "site": "00831764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:8f8:8"
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
      "00832710",
      "DATA",
      [
        "storage",
        "00c7e8f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832710",
      "DATA",
      [
        "storage",
        "00c7f8c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083175c ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00832708 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00831760 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 00831760 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831760 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831760 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0083270c ["COPY", "tmp:0:8", ["const:8c8:8"]]
+ 0083270c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0083270c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0083270c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cffff1e1380b4af924cf4dfe74cbd77d"></a>

### [`00831774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831774.md) → [`00832720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832720.md) FUN_00832720

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "00832744",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831798",
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
      "00832744",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00832744",
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
- 00831798 ["INT_ADD", "register:40f0:8", ["const:831798:8", "const:4:8"]]
- 00831798 ["CALL", null, ["ram:47ad34:8"]]
+ 00832744 ["INT_ADD", "register:40f0:8", ["const:832744:8", "const:4:8"]]
+ 00832744 ["CALL", null, ["ram:47b054:8"]]
- 008317a4 ["INT_ADD", "register:40f0:8", ["const:8317a4:8", "const:4:8"]]
- 008317a4 ["CALL", null, ["callee:0047d134:8"]]
+ 00832750 ["INT_ADD", "register:40f0:8", ["const:832750:8", "const:4:8"]]
+ 00832750 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-bee52ae021441aaccf1b8b4c49d13ff1"></a>

### [`008317e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008317e4.md) → [`00832790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832790.md) FUN_00832790

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008295cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00829/008295cc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`0082a578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082a/0082a578.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0083279c",
      "incomplete_value": false,
      "site": "008327a0",
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
      "definition_site": "008317f0",
      "incomplete_value": false,
      "site": "008317f4",
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
      "0083279c",
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
      "0083279c",
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
- 008317f4 ["INT_ADD", "register:40f0:8", ["const:8317f4:8", "const:4:8"]]
- 008317f4 ["CALL", null, ["callee:00442c90:8"]]
+ 008327a0 ["INT_ADD", "register:40f0:8", ["const:8327a0:8", "const:4:8"]]
+ 008327a0 ["CALL", null, ["callee:00442c90:8"]]
- 008317ec ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00832798 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008317f0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008317f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008317f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008317f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0083279c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0083279c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0083279c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0083279c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-54c9412b09568f25c066f37ff2b24831"></a>

### [`008317fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008317fc.md) → [`008327a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/008327a8.md) FUN_008327a8

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
      "definition_site": "008327cc",
      "incomplete_value": false,
      "site": "008327cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:958:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831820",
      "incomplete_value": false,
      "site": "00831820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:988:8"
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
      "008327cc",
      "DATA",
      [
        "storage",
        "00c7e988",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008327cc",
      "DATA",
      [
        "storage",
        "00c7f958",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831810 ["INT_ADD", "register:40f0:8", ["const:831810:8", "const:4:8"]]
- 00831810 ["CALL", null, ["callee:00c58f30:8"]]
+ 008327bc ["INT_ADD", "register:40f0:8", ["const:8327bc:8", "const:4:8"]]
+ 008327bc ["CALL", null, ["callee:00c58f30:8"]]
- 00831818 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 008327c4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 0083181c ["COPY", "tmp:0:8", ["const:988:8"]]
- 0083181c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0083181c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0083181c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008327c8 ["COPY", "tmp:0:8", ["const:958:8"]]
+ 008327c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008327c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008327c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-751ad93b8df61f9115203a7b8fcd5dae"></a>

### [`00831830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831830.md) → [`008327dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/008327dc.md) FUN_008327dc

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
      "definition_site": "008327e8",
      "incomplete_value": false,
      "site": "008327e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:958:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083183c",
      "incomplete_value": false,
      "site": "0083183c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:988:8"
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
      "008327e8",
      "DATA",
      [
        "storage",
        "00c7e988",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008327e8",
      "DATA",
      [
        "storage",
        "00c7f958",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831834 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 008327e0 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00831838 ["COPY", "tmp:0:8", ["const:988:8"]]
- 00831838 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831838 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831838 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008327e4 ["COPY", "tmp:0:8", ["const:958:8"]]
+ 008327e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008327e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008327e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4fd3c85fc4ae54e78b363ea217c8d3b6"></a>

### [`0083184c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/0083184c.md) → [`008327f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/008327f8.md) FUN_008327f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00826e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00826/00826e14.md) [`00827718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00827/00827718.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00827dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00827/00827dc0.md) [`008286c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00828/008286c4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00832830",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831884",
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
    "new": {
      "definition_site": "008329dc",
      "incomplete_value": false,
      "site": "008329e0",
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
      "definition_site": "00831a30",
      "incomplete_value": false,
      "site": "00831a34",
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
      "00832830",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00832984",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00827970"
      ]
    ],
    [
      "008329dc",
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
      "00832830",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00832984",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0082891c"
      ]
    ],
    [
      "008329dc",
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
- 00831884 ["INT_ADD", "register:40f0:8", ["const:831884:8", "const:4:8"]]
- 00831884 ["CALL", null, ["ram:47ad34:8"]]
+ 00832830 ["INT_ADD", "register:40f0:8", ["const:832830:8", "const:4:8"]]
+ 00832830 ["CALL", null, ["ram:47b054:8"]]
- 00831a34 ["INT_ADD", "register:40f0:8", ["const:831a34:8", "const:4:8"]]
- 00831a34 ["CALL", null, ["callee:00442c90:8"]]
+ 008329e0 ["INT_ADD", "register:40f0:8", ["const:8329e0:8", "const:4:8"]]
+ 008329e0 ["CALL", null, ["callee:00442c90:8"]]
- 00831874 ["CBRANCH", null, ["local:b18:8", "register:101:1"]]
+ 00832820 ["CBRANCH", null, ["local:b19:8", "register:101:1"]]
~~~


<a id="compare-3705e3db82867d5831faba2cfd114268"></a>

### [`00831d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831d40.md) → [`00832cec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832cec.md) FUN_00832cec

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
      "unmatched:00831d64",
      "DATA",
      [
        "storage",
        "00c7ea08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00831d6c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00831d70",
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
      "00832d10",
      "DATA",
      [
        "storage",
        "00c7f9d8",
        null,
        "undefined *"
      ]
    ],
    [
      "00832d18",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00832d1c",
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
- 00831d54 ["INT_ADD", "register:40f0:8", ["const:831d54:8", "const:4:8"]]
- 00831d54 ["CALL", null, ["callee:00c58f30:8"]]
+ 00832d00 ["INT_ADD", "register:40f0:8", ["const:832d00:8", "const:4:8"]]
+ 00832d00 ["CALL", null, ["callee:00c58f30:8"]]
- 00831d5c ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00832d08 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00831d60 ["COPY", "tmp:0:8", ["const:a08:8"]]
- 00831d60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831d60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831d60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e81c545266647556110bfab2edc8c578"></a>

### [`00831d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831d78.md) → [`00832d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832d24.md) FUN_00832d24

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
      "definition_site": "00832d28",
      "incomplete_value": false,
      "site": "00832d2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831d7c",
      "incomplete_value": false,
      "site": "00831d80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "00832d2c",
      "DATA",
      [
        "storage",
        "00c7ea08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832d2c",
      "DATA",
      [
        "storage",
        "00c7f9d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831d78 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00832d24 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00831d7c ["COPY", "tmp:0:8", ["const:a08:8"]]
- 00831d7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831d7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831d7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00832d28 ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 00832d28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00832d28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00832d28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7f3d04e706cd149560da722d804cc82b"></a>

### [`00831d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831d98.md) → [`00832d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832d44.md) FUN_00832d44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082c8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c8bc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0082d868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082d/0082d868.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 97.30% / 新版 97.30%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00832d6c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831dc0",
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
      "site": "00832d78",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831dcc",
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
      "00832d6c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00832d78",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00832d6c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00832d78",
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
- 00831dc0 ["INT_ADD", "register:40f0:8", ["const:831dc0:8", "const:4:8"]]
- 00831dc0 ["CALL", null, ["ram:47ad34:8"]]
+ 00832d6c ["INT_ADD", "register:40f0:8", ["const:832d6c:8", "const:4:8"]]
+ 00832d6c ["CALL", null, ["ram:47b054:8"]]
- 00831dcc ["INT_ADD", "register:40f0:8", ["const:831dcc:8", "const:4:8"]]
- 00831dcc ["CALL", null, ["ram:47ad34:8"]]
+ 00832d78 ["INT_ADD", "register:40f0:8", ["const:832d78:8", "const:4:8"]]
+ 00832d78 ["CALL", null, ["ram:47b054:8"]]
- 00831dbc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00831dbc ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00832d68 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00832d68 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-50bd5e6b54c22c7d110e535a29f2a090"></a>

### [`00831eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831eec.md) → [`00832e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832e98.md) FUN_00832e98

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
      "unmatched:00831f10",
      "DATA",
      [
        "storage",
        "00c7ea88",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00831f14",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00831f18",
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
      "00832ebc",
      "DATA",
      [
        "storage",
        "00c7fa58",
        null,
        "undefined *"
      ]
    ],
    [
      "00832ec0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00832ec4",
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
- 00831f00 ["INT_ADD", "register:40f0:8", ["const:831f00:8", "const:4:8"]]
- 00831f00 ["CALL", null, ["callee:00c58f30:8"]]
+ 00832eac ["INT_ADD", "register:40f0:8", ["const:832eac:8", "const:4:8"]]
+ 00832eac ["CALL", null, ["callee:00c58f30:8"]]
- 00831f08 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00832eb4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00831f0c ["COPY", "tmp:0:8", ["const:a88:8"]]
- 00831f0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831f0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831f0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f9ba5f09915e87a53184f0a2770cc2cd"></a>

### [`00831f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831f20.md) → [`00832ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832ecc.md) FUN_00832ecc

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
      "definition_site": "00832ed8",
      "incomplete_value": false,
      "site": "00832ed8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831f2c",
      "incomplete_value": false,
      "site": "00831f2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "00832ed8",
      "DATA",
      [
        "storage",
        "00c7ea88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832ed8",
      "DATA",
      [
        "storage",
        "00c7fa58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831f24 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00832ed0 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00831f28 ["COPY", "tmp:0:8", ["const:a88:8"]]
- 00831f28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831f28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831f28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00832ed4 ["COPY", "tmp:0:8", ["const:a58:8"]]
+ 00832ed4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00832ed4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00832ed4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-beb7f57ebd632ad6cd19c4fdf69d6f86"></a>

### [`00831f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831f3c.md) → [`00832ee8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832ee8.md) FUN_00832ee8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082c8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c8bc.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0082d868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082d/0082d868.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47920.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00832f0c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831f60",
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
      "site": "00832f18",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831f6c",
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
      "definition_site": "00832f34",
      "incomplete_value": true,
      "site": "00832f44",
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
      "00832f0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00832f18",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00832f0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00832f18",
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
- 00831f60 ["INT_ADD", "register:40f0:8", ["const:831f60:8", "const:4:8"]]
- 00831f60 ["CALL", null, ["ram:47ad34:8"]]
+ 00832f0c ["INT_ADD", "register:40f0:8", ["const:832f0c:8", "const:4:8"]]
+ 00832f0c ["CALL", null, ["ram:47b054:8"]]
- 00831f6c ["INT_ADD", "register:40f0:8", ["const:831f6c:8", "const:4:8"]]
- 00831f6c ["CALL", null, ["ram:47ad34:8"]]
+ 00832f18 ["INT_ADD", "register:40f0:8", ["const:832f18:8", "const:4:8"]]
+ 00832f18 ["CALL", null, ["ram:47b054:8"]]
- 00831f98 ["INT_ADD", "register:40f0:8", ["const:831f98:8", "const:4:8"]]
- 00831f98 ["CALL", null, ["callee:008b7ea8:8"]]
+ 00832f44 ["INT_ADD", "register:40f0:8", ["const:832f44:8", "const:4:8"]]
+ 00832f44 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-e05d6da38ef16799edffe00472e3b899"></a>

### [`00831ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831ffc.md) → [`00832fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832fa8.md) FUN_00832fa8

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
      "definition_site": "00832fcc",
      "incomplete_value": false,
      "site": "00832fcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00832020",
      "incomplete_value": false,
      "site": "00832020",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:b08:8"
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
      "00832fcc",
      "DATA",
      [
        "storage",
        "00c7eb08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832fcc",
      "DATA",
      [
        "storage",
        "00c7fad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00832010 ["INT_ADD", "register:40f0:8", ["const:832010:8", "const:4:8"]]
- 00832010 ["CALL", null, ["callee:00c58f30:8"]]
+ 00832fbc ["INT_ADD", "register:40f0:8", ["const:832fbc:8", "const:4:8"]]
+ 00832fbc ["CALL", null, ["callee:00c58f30:8"]]
- 00832018 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00832fc4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 0083201c ["COPY", "tmp:0:8", ["const:b08:8"]]
- 0083201c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0083201c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0083201c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00832fc8 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00832fc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00832fc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00832fc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6e276bec1c887d2f02f4896a2b34e798"></a>

### [`00832030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/00832030.md) → [`00832fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832fdc.md) FUN_00832fdc

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
      "definition_site": "00832fe8",
      "incomplete_value": false,
      "site": "00832fe8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083203c",
      "incomplete_value": false,
      "site": "0083203c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:b08:8"
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
      "00832fe8",
      "DATA",
      [
        "storage",
        "00c7eb08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832fe8",
      "DATA",
      [
        "storage",
        "00c7fad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00832034 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00832fe0 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00832038 ["COPY", "tmp:0:8", ["const:b08:8"]]
- 00832038 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00832038 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00832038 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00832fe4 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00832fe4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00832fe4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00832fe4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c3b6acaadfb85ac3ab576008759e915d"></a>

### [`0083204c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083204c.md) → [`00832ff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832ff8.md) FUN_00832ff8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082d2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082d/0082d2e8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0082e294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082e/0082e294.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00833018",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0083206c",
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
      "site": "00833024",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00832078",
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
      "00833018",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00833024",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00833048",
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
      "00833018",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00833024",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00833048",
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
- 0083206c ["INT_ADD", "register:40f0:8", ["const:83206c:8", "const:4:8"]]
- 0083206c ["CALL", null, ["ram:47ad34:8"]]
+ 00833018 ["INT_ADD", "register:40f0:8", ["const:833018:8", "const:4:8"]]
+ 00833018 ["CALL", null, ["ram:47b054:8"]]
- 00832078 ["INT_ADD", "register:40f0:8", ["const:832078:8", "const:4:8"]]
- 00832078 ["CALL", null, ["ram:47ad34:8"]]
+ 00833024 ["INT_ADD", "register:40f0:8", ["const:833024:8", "const:4:8"]]
+ 00833024 ["CALL", null, ["ram:47b054:8"]]
- 0083208c ["INT_ADD", "register:40f0:8", ["const:83208c:8", "const:4:8"]]
- 0083208c ["CALL", null, ["callee:008524fc:8"]]
+ 00833038 ["INT_ADD", "register:40f0:8", ["const:833038:8", "const:4:8"]]
+ 00833038 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-fbeef373520c5f48cebc0ae0e4fb4a0a"></a>

### [`008320dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/008320dc.md) → [`00833088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00833/00833088.md) FUN_00833088

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
      "definition_site": "008330ac",
      "incomplete_value": false,
      "site": "008330ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00832100",
      "incomplete_value": false,
      "site": "00832100",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:b88:8"
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
      "008330ac",
      "DATA",
      [
        "storage",
        "00c7eb88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008330ac",
      "DATA",
      [
        "storage",
        "00c7fb58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008320f0 ["INT_ADD", "register:40f0:8", ["const:8320f0:8", "const:4:8"]]
- 008320f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0083309c ["INT_ADD", "register:40f0:8", ["const:83309c:8", "const:4:8"]]
+ 0083309c ["CALL", null, ["callee:00c58f30:8"]]
- 008320f8 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 008330a4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 008320fc ["COPY", "tmp:0:8", ["const:b88:8"]]
- 008320fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008320fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008320fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008330a8 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 008330a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008330a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008330a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e93e2fb9f4b21839a9019d26551ce493"></a>

### [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) → [`008330d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00833/008330d8.md) FUN_008330d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 41件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 0件  · 呼出先 41件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 88.60% / 新版 88.60%

優先判定に残った影響 `call_argument_candidate` 11件, `call_target` 3件, `store_value` 2件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 31件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00833d2c",
      "incomplete_value": false,
      "site": "00833d2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00832d80",
      "incomplete_value": false,
      "site": "00832d80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:c78:8"
          ]
        ]
      ]
    },
    "ordinal": 105,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00833e2c",
      "incomplete_value": false,
      "site": "00833e2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00832e80",
      "incomplete_value": false,
      "site": "00832e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "ordinal": 122,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00833124",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00832178",
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
      "unmatched:0083212c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00832130",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00832134",
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
      "008330d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008330dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008330e0",
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
- 00832178 ["INT_ADD", "register:40f0:8", ["const:832178:8", "const:4:8"]]
- 00832178 ["CALL", null, ["ram:47ad34:8"]]
+ 00833124 ["INT_ADD", "register:40f0:8", ["const:833124:8", "const:4:8"]]
+ 00833124 ["CALL", null, ["ram:47b054:8"]]
- 0083219c ["INT_ADD", "register:40f0:8", ["const:83219c:8", "const:4:8"]]
- 0083219c ["CALL", null, ["ram:47ad34:8"]]
+ 00833148 ["INT_ADD", "register:40f0:8", ["const:833148:8", "const:4:8"]]
+ 00833148 ["CALL", null, ["ram:47b054:8"]]
- 008327c8 ["INT_ADD", "register:40f0:8", ["const:8327c8:8", "const:4:8"]]
- 008327c8 ["CALL", null, ["callee:008bbccc:8"]]
+ 00833774 ["INT_ADD", "register:40f0:8", ["const:833774:8", "const:4:8"]]
+ 00833774 ["CALL", null, ["callee:008bbccc:8"]]
~~~


<a id="compare-e8f0b72d335a06d735569b65eb5eeae0"></a>

### [`0083336c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083336c.md) → [`00834318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834318.md) FUN_00834318

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) [`0083336c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083336c.md) [`0083371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083371c.md) · 呼出先 5件 [`0081d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081d/0081d560.md) [`0083336c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083336c.md) [`0083371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083371c.md) [`00833a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/00833a94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`008330d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00833/008330d8.md) [`00834318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834318.md) [`008346c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/008346c8.md) · 呼出先 5件 [`0081e50c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081e/0081e50c.md) [`00834318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834318.md) [`008346c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/008346c8.md) [`00834a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834a40.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.59% / 新版 85.59%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008344c0",
      "incomplete_value": true,
      "site": "008344d4",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "008344c4",
      "incomplete_value": true,
      "site": "008344d4",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "008344c8",
      "incomplete_value": true,
      "site": "008344d4",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": null,
    "ordinal": 13,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008333d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081d560"
      ]
    ],
    [
      "unmatched:008333e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081d560"
      ]
    ],
    [
      "unmatched:0083346c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081d560"
      ]
    ]
  ],
  "added": [
    [
      "00834380",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081e50c"
      ]
    ],
    [
      "00834394",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081e50c"
      ]
    ],
    [
      "00834418",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081e50c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00833528 ["INT_ADD", "register:40f0:8", ["const:833528:8", "const:4:8"]]
- 00833528 ["CALL", null, ["local:b0:8"]]
+ 008344d4 ["INT_ADD", "register:40f0:8", ["const:8344d4:8", "const:4:8"]]
+ 008344d4 ["CALL", null, ["local:b0:8"]]
- 008333b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008333b4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00834360 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00834360 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 008333c0 ["INT_ADD", "register:40f0:8", ["const:8333c0:8", "const:4:8"]]
- 008333c0 ["CALL", null, ["callee:008524fc:8"]]
+ 0083436c ["INT_ADD", "register:40f0:8", ["const:83436c:8", "const:4:8"]]
+ 0083436c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-398d23014e60717f684ca42a918672b0"></a>

### [`0083371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083371c.md) → [`008346c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/008346c8.md) FUN_008346c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0083336c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083336c.md) · 呼出先 3件 [`0081d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081d/0081d560.md) [`0083336c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083336c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00834318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834318.md) · 呼出先 3件 [`0081e50c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081e/0081e50c.md) [`00834318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834318.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.34% / 新版 92.34%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00834724",
      "value": [
        "leaf",
        "ram:81e50c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00833778",
      "value": [
        "leaf",
        "ram:81d560:8"
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
      "site": "00834738",
      "value": [
        "leaf",
        "ram:81e50c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0083378c",
      "value": [
        "leaf",
        "ram:81d560:8"
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
      "00834724",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081d560"
      ]
    ],
    [
      "00834738",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081d560"
      ]
    ],
    [
      "unmatched:00833830",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081d560"
      ]
    ]
  ],
  "added": [
    [
      "00834724",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081e50c"
      ]
    ],
    [
      "00834738",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081e50c"
      ]
    ],
    [
      "008347dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081e50c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00833778 ["INT_ADD", "register:40f0:8", ["const:833778:8", "const:4:8"]]
- 00833778 ["CALL", null, ["ram:81d560:8"]]
+ 00834724 ["INT_ADD", "register:40f0:8", ["const:834724:8", "const:4:8"]]
+ 00834724 ["CALL", null, ["ram:81e50c:8"]]
- 0083378c ["INT_ADD", "register:40f0:8", ["const:83378c:8", "const:4:8"]]
- 0083378c ["CALL", null, ["ram:81d560:8"]]
+ 00834738 ["INT_ADD", "register:40f0:8", ["const:834738:8", "const:4:8"]]
+ 00834738 ["CALL", null, ["ram:81e50c:8"]]
- 00833764 ["INT_ADD", "register:40f0:8", ["const:833764:8", "const:4:8"]]
- 00833764 ["CALL", null, ["callee:008524fc:8"]]
+ 00834710 ["INT_ADD", "register:40f0:8", ["const:834710:8", "const:4:8"]]
+ 00834710 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a704e30803c11cd869fd98704ae4b567"></a>

### [`00833a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/00833a94.md) → [`00834a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834a40.md) FUN_00834a40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0083336c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/0083336c.md) [`00833a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/00833a94.md) · 呼出先 4件 [`0081d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081d/0081d560.md) [`00833a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00833/00833a94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`00834318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834318.md) [`00834a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834a40.md) · 呼出先 4件 [`0081e50c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081e/0081e50c.md) [`00834a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00834/00834a40.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.77% / 新版 86.77%

優先判定に残った影響 `call_argument_candidate` 8件, `call_target` 4件, `store_condition` 2件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00834ab8",
      "value": [
        "leaf",
        "ram:81e50c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00833b0c",
      "value": [
        "leaf",
        "ram:81d560:8"
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
      "site": "00834acc",
      "value": [
        "leaf",
        "ram:81e50c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00833b20",
      "value": [
        "leaf",
        "ram:81d560:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00834d1c",
      "incomplete_value": true,
      "site": "00834d30",
      "value": [
        "live",
        "register:40d8:8"
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
      "unmatched:00833aa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00833aa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00833aac",
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
      "00834a50",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00834a54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00834a58",
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
- 00833b0c ["INT_ADD", "register:40f0:8", ["const:833b0c:8", "const:4:8"]]
- 00833b0c ["CALL", null, ["ram:81d560:8"]]
+ 00834ab8 ["INT_ADD", "register:40f0:8", ["const:834ab8:8", "const:4:8"]]
+ 00834ab8 ["CALL", null, ["ram:81e50c:8"]]
- 00833b20 ["INT_ADD", "register:40f0:8", ["const:833b20:8", "const:4:8"]]
- 00833b20 ["CALL", null, ["ram:81d560:8"]]
+ 00834acc ["INT_ADD", "register:40f0:8", ["const:834acc:8", "const:4:8"]]
+ 00834acc ["CALL", null, ["ram:81e50c:8"]]
- 00833d84 ["INT_ADD", "register:40f0:8", ["const:833d84:8", "const:4:8"]]
- 00833d84 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00834d30 ["INT_ADD", "register:40f0:8", ["const:834d30:8", "const:4:8"]]
+ 00834d30 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-c6d91bc194d77a3b3a3020a6c6efd650"></a>

### [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) → [`00835138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835138.md) FUN_00835138

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 7件 [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) [`008351c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008351c0.md) [`008352c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008352c4.md) [`00835558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835558.md) [`0083565c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/0083565c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 7件 [`008330d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00833/008330d8.md) [`0083616c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/0083616c.md) [`00836270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836270.md) [`00836504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836504.md) [`00836608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836608.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0083418c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00834198",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0083419c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "00835138",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00835144",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "00835148",
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
- 0083418c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0083418c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0083418c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0083418c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00834190 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00834194 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-effa14238c9163ecb609af131472f733"></a>

### [`008341a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/008341a0.md) → [`0083514c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/0083514c.md) FUN_0083514c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) [`008341a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/008341a0.md) [`00834668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/00834668.md) · 呼出先 3件 [`008341a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/008341a0.md) [`00834668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/00834668.md) [`00834990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/00834990.md)
- 新版 呼出元 3件 [`008330d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00833/008330d8.md) [`0083514c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/0083514c.md) [`00835614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835614.md) · 呼出先 3件 [`0083514c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/0083514c.md) [`00835614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835614.md) [`0083593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/0083593c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.07% / 新版 80.07%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 9件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008351f0",
      "incomplete_value": true,
      "site": "00835204",
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
    "new": {
      "definition_site": "008351f4",
      "incomplete_value": true,
      "site": "00835204",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "008351f8",
      "incomplete_value": true,
      "site": "00835204",
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
      "unmatched:00834228",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835360"
      ]
    ],
    [
      "unmatched:00834284",
      "READ",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00834288",
      "READ",
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
      "008351d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835360"
      ]
    ],
    [
      "00835230",
      "READ",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00835234",
      "READ",
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
- 00834258 ["INT_ADD", "register:40f0:8", ["const:834258:8", "const:4:8"]]
- 00834258 ["CALL", null, ["local:b0:8"]]
+ 00835204 ["INT_ADD", "register:40f0:8", ["const:835204:8", "const:4:8"]]
+ 00835204 ["CALL", null, ["local:b0:8"]]
- 008341c0 ["CBRANCH", null, ["local:b3:8", "register:102:1"]]
+ 0083516c ["CBRANCH", null, ["local:b2:8", "register:102:1"]]
- 008341e0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008341e0 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 0083518c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0083518c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-ed8610a0f09015000052ca3c72b62c7c"></a>

### [`00834668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/00834668.md) → [`00835614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835614.md) FUN_00835614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008341a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/008341a0.md) · 呼出先 1件 [`008341a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/008341a0.md)
- 新版 呼出元 1件 [`0083514c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/0083514c.md) · 呼出先 1件 [`0083514c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/0083514c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.09% / 新版 91.09%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00834688",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835654"
      ]
    ],
    [
      "unmatched:00834744",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835924"
      ]
    ],
    [
      "unmatched:008347e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835750"
      ]
    ]
  ],
  "added": [
    [
      "00835634",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835654"
      ]
    ],
    [
      "008356f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835924"
      ]
    ],
    [
      "00835794",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835750"
      ]
    ]
  ]
}
~~~


~~~diff
- 00834680 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
- 00834680 ["CBRANCH", null, ["local:b52:8", "tmp:0:1"]]
+ 0083562c ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
+ 0083562c ["CBRANCH", null, ["local:b59:8", "tmp:0:1"]]
- 00834688 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 00834690 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00834690 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 0083563c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0083563c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-512606932f1ce9c0babc831616b3f6ea"></a>

### [`00834fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/00834fec.md) → [`00835f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835f98.md) FUN_00835f98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00834990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/00834990.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0083593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/0083593c.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.48% / 新版 93.48%

アドレスに依存する影響 `unresolved_branch_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00835fec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0083508c"
      ]
    ],
    [
      "unmatched:00835088",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835ff0"
      ]
    ],
    [
      "unmatched:00835090",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008360f4"
      ]
    ]
  ],
  "added": [
    [
      "00835fec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00836038"
      ]
    ],
    [
      "00836034",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00835ff0"
      ]
    ],
    [
      "0083603c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008360f4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00834ff8 ["CBRANCH", null, ["local:b25:8", "register:101:1"]]
+ 00835fa4 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
- 00835000 ["CBRANCH", null, ["local:b27:8", "register:101:1"]]
+ 00835fac ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 00835040 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 00835fec ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-1879555916de497413343184b5ccc2ec"></a>

### [`0083515c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/0083515c.md) → [`00836108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836108.md) FUN_00836108

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
      "definition_site": "00836114",
      "incomplete_value": false,
      "site": "00836118",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:bc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835168",
      "incomplete_value": false,
      "site": "0083516c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:bf8:8"
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
      "00836118",
      "DATA",
      [
        "storage",
        "00c7ebf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00836118",
      "DATA",
      [
        "storage",
        "00c7fbc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835164 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00836110 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00835168 ["COPY", "tmp:0:8", ["const:bf8:8"]]
- 00835168 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00835168 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00835168 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00836114 ["COPY", "tmp:0:8", ["const:bc8:8"]]
+ 00836114 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00836114 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00836114 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d523a94bd658f4e22785acc92001dcb9"></a>

### [`00835180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835180.md) → [`0083612c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/0083612c.md) FUN_0083612c

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
      "definition_site": "00836134",
      "incomplete_value": false,
      "site": "00836138",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:bc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835188",
      "incomplete_value": false,
      "site": "0083518c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:bf8:8"
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
      "00836138",
      "DATA",
      [
        "storage",
        "00c7ebf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00836138",
      "DATA",
      [
        "storage",
        "00c7fbc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835184 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00836130 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00835188 ["COPY", "tmp:0:8", ["const:bf8:8"]]
- 00835188 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00835188 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00835188 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00836134 ["COPY", "tmp:0:8", ["const:bc8:8"]]
+ 00836134 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00836134 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00836134 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008351ac ["INT_ADD", "register:40f0:8", ["const:8351ac:8", "const:4:8"]]
- 008351ac ["CALL", null, ["callee:00c58f50:8"]]
+ 00836158 ["INT_ADD", "register:40f0:8", ["const:836158:8", "const:4:8"]]
+ 00836158 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-8721d9df2ecace845a013e9ef9d5738c"></a>

### [`008351c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008351c0.md) → [`0083616c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/0083616c.md) FUN_0083616c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00835138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835138.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00836184",
      "incomplete_value": false,
      "site": "00836188",
      "value": [
        "leaf",
        "const:28:8"
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
      "definition_site": "008361f4",
      "incomplete_value": true,
      "site": "0083621c",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00836218",
      "incomplete_value": true,
      "site": "0083621c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_RIGHT",
              [
                "leaf",
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083526c",
      "incomplete_value": true,
      "site": "00835270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4050:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_RIGHT",
              [
                "leaf",
                "const:c:8"
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
      "unmatched:008351f4",
      "DATA",
      [
        "storage",
        "00c7ebf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008361a0",
      "DATA",
      [
        "storage",
        "00c7fbc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008351dc ["INT_ADD", "register:40f0:8", ["const:8351dc:8", "const:4:8"]]
- 008351dc ["CALL", null, ["callee:00c58f30:8"]]
+ 00836188 ["INT_ADD", "register:40f0:8", ["const:836188:8", "const:4:8"]]
+ 00836188 ["CALL", null, ["callee:00c58f30:8"]]
- 00835270 ["INT_ADD", "register:40f0:8", ["const:835270:8", "const:4:8"]]
- 00835270 ["CALL", null, ["callee:00c590a0:8"]]
+ 0083621c ["INT_ADD", "register:40f0:8", ["const:83621c:8", "const:4:8"]]
+ 0083621c ["CALL", null, ["callee:00c590a0:8"]]
- 008351e4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00836190 ["COPY", "register:4040:8", ["const:c7f000:8"]]
~~~


<a id="compare-1e34c64e060dbac147901e31e310ed2c"></a>

### [`008352c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008352c4.md) → [`00836270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836270.md) FUN_00836270

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00835138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835138.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 59.32% / 新版 59.32%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008352f4",
      "DATA",
      [
        "storage",
        "00c7ebf8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00835324",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00836334"
      ]
    ],
    [
      "unmatched:00835368",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c590a0"
      ]
    ]
  ],
  "added": [
    [
      "008362a0",
      "DATA",
      [
        "storage",
        "00c7fbc8",
        null,
        "undefined *"
      ]
    ],
    [
      "008362d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00836334"
      ]
    ],
    [
      "00836314",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c590a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008352e8 ["COPY", "register:4050:8", ["const:c7e000:8"]]
+ 00836294 ["COPY", "register:4050:8", ["const:c7f000:8"]]
- 008352ec ["COPY", "tmp:0:8", ["const:bf8:8"]]
- 008352ec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008352ec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008352ec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 008352f0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 008352f0 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 008352f0 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 008352f0 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-68b65ea3de392a629b338d5cc8aa3c27"></a>

### [`008353c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008353c8.md) → [`00836374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836374.md) FUN_00836374

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008330d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00833/008330d8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_condition` 4件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008353cc"
      ],
      [
        "FALL_THROUGH",
        "00836378"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00836378",
      "incomplete_value": true,
      "site": "0083637c",
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
      "definition_site": "008353cc",
      "incomplete_value": true,
      "site": "008353d0",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008353cc"
      ],
      [
        "FALL_THROUGH",
        "00836378"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00836378",
      "incomplete_value": true,
      "site": "0083637c",
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
      "definition_site": "008353cc",
      "incomplete_value": true,
      "site": "008353d0",
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
        "008353cc"
      ],
      [
        "FALL_THROUGH",
        "00836378"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00836378",
      "incomplete_value": true,
      "site": "00836380",
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
      "definition_site": "008353cc",
      "incomplete_value": true,
      "site": "008353d4",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008353cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008363a4"
      ]
    ]
  ],
  "added": [
    [
      "00836378",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008363a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008353c8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 008353c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008353cc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008353cc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008353e8 ["INT_ADD", "register:40f0:8", ["const:8353e8:8", "const:4:8"]]
- 008353e8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00836394 ["INT_ADD", "register:40f0:8", ["const:836394:8", "const:4:8"]]
+ 00836394 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-c73310ad748fea09df24f6e70787ed3f"></a>

### [`008353fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008353fc.md) → [`008363a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/008363a8.md) FUN_008363a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a842c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a842c4.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008363dc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00835430",
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
      "008363dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008363dc",
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
- 00835430 ["INT_ADD", "register:40f0:8", ["const:835430:8", "const:4:8"]]
- 00835430 ["CALL", null, ["ram:47ad34:8"]]
+ 008363dc ["INT_ADD", "register:40f0:8", ["const:8363dc:8", "const:4:8"]]
+ 008363dc ["CALL", null, ["ram:47b054:8"]]
- 00835418 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00835418 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008363c4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008363c4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00835424 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 008363d0 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
~~~


<a id="compare-25e7e9b9bf25513e7341732b7f2e238e"></a>

### [`008354f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008354f4.md) → [`008364a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/008364a0.md) FUN_008364a0

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
      "definition_site": "008364ac",
      "incomplete_value": false,
      "site": "008364b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835500",
      "incomplete_value": false,
      "site": "00835504",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
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
      "008364b0",
      "DATA",
      [
        "storage",
        "00c7ec78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008364b0",
      "DATA",
      [
        "storage",
        "00c7fc48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008354fc ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 008364a8 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00835500 ["COPY", "tmp:0:8", ["const:c78:8"]]
- 00835500 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00835500 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00835500 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008364ac ["COPY", "tmp:0:8", ["const:c48:8"]]
+ 008364ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008364ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008364ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-221c8699f4f4b6fd7fab0af4111abcc4"></a>

### [`00835518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835518.md) → [`008364c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/008364c4.md) FUN_008364c4

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
      "definition_site": "008364cc",
      "incomplete_value": false,
      "site": "008364d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835520",
      "incomplete_value": false,
      "site": "00835524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
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
      "008364d0",
      "DATA",
      [
        "storage",
        "00c7ec78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008364d0",
      "DATA",
      [
        "storage",
        "00c7fc48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083551c ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 008364c8 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00835520 ["COPY", "tmp:0:8", ["const:c78:8"]]
- 00835520 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00835520 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00835520 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008364cc ["COPY", "tmp:0:8", ["const:c48:8"]]
+ 008364cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008364cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008364cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00835544 ["INT_ADD", "register:40f0:8", ["const:835544:8", "const:4:8"]]
- 00835544 ["CALL", null, ["callee:00c58f50:8"]]
+ 008364f0 ["INT_ADD", "register:40f0:8", ["const:8364f0:8", "const:4:8"]]
+ 008364f0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4a89c5404b13f757d16bf0df89ba1e1c"></a>

### [`00835558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835558.md) → [`00836504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836504.md) FUN_00836504

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00835138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835138.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.15% / 新版 86.15%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0083558c",
      "DATA",
      [
        "storage",
        "00c7ec78",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008355a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008365c0"
      ]
    ]
  ],
  "added": [
    [
      "00836538",
      "DATA",
      [
        "storage",
        "00c7fc48",
        null,
        "undefined *"
      ]
    ],
    [
      "0083654c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008365c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835574 ["INT_ADD", "register:40f0:8", ["const:835574:8", "const:4:8"]]
- 00835574 ["CALL", null, ["callee:00c58f30:8"]]
+ 00836520 ["INT_ADD", "register:40f0:8", ["const:836520:8", "const:4:8"]]
+ 00836520 ["CALL", null, ["callee:00c58f30:8"]]
- 0083557c ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00836528 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00835580 ["COPY", "tmp:0:8", ["const:c78:8"]]
- 00835580 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00835580 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00835580 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a413f05692c4659c4b2b3460ba168a68"></a>

### [`0083565c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/0083565c.md) → [`00836608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836608.md) FUN_00836608

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00835138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835138.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 61.02% / 新版 61.02%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0083666c",
      "incomplete_value": true,
      "site": "00836670",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00836684",
      "incomplete_value": true,
      "site": "008366ac",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "008366a8",
      "incomplete_value": true,
      "site": "008366ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_RIGHT",
              [
                "leaf",
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008356fc",
      "incomplete_value": true,
      "site": "00835700",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4050:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_RIGHT",
              [
                "leaf",
                "const:c:8"
              ]
            ]
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
      "unmatched:0083568c",
      "DATA",
      [
        "storage",
        "00c7ec78",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008356bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008366cc"
      ]
    ]
  ],
  "added": [
    [
      "00836638",
      "DATA",
      [
        "storage",
        "00c7fc48",
        null,
        "undefined *"
      ]
    ],
    [
      "00836668",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008366cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008356c4 ["INT_ADD", "register:40f0:8", ["const:8356c4:8", "const:4:8"]]
- 008356c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00836670 ["INT_ADD", "register:40f0:8", ["const:836670:8", "const:4:8"]]
+ 00836670 ["CALL", null, ["callee:00c58f30:8"]]
- 00835700 ["INT_ADD", "register:40f0:8", ["const:835700:8", "const:4:8"]]
- 00835700 ["CALL", null, ["callee:00c590a0:8"]]
+ 008366ac ["INT_ADD", "register:40f0:8", ["const:8366ac:8", "const:4:8"]]
+ 008366ac ["CALL", null, ["callee:00c590a0:8"]]
- 0083567c ["COPY", "tmp:0:8", ["const:0:8"]]
- 0083567c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 0083567c ["INT_ADD", "register:40a8:8", ["register:40a8:8", "const:10:8"]]
- 0083567c ["STORE", null, ["const:1b1:8", "register:40a8:8", "tmp:1:8"]]
~~~


<a id="compare-d0b0f6d538f4d472e10a6bb5d7d7e628"></a>

### [`00835794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835794.md) → [`00836740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836740.md) FUN_00836740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md) [`0085b324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b324.md) [`0085b32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b32c.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md)
- 新版 呼出元 0件  · 呼出先 11件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085c2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2b0.md) [`0085c2d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2d0.md) [`0085c2d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2d8.md) [`0085c2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2e4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 94.50% / 新版 94.50%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00836798",
      "incomplete_value": true,
      "site": "00836798",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "8",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008357ec",
      "incomplete_value": true,
      "site": "008357ec",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "8",
            [
              "INT2FLOAT",
              "LOAD"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008368ac",
      "incomplete_value": false,
      "site": "008368bc",
      "value": [
        "leaf",
        "const:e3:8"
      ]
    },
    "old": null,
    "ordinal": 17,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00835794",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00835798",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0083579c",
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
      "00836740",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00836744",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00836748",
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
- 00835910 ["INT_ADD", "register:40f0:8", ["const:835910:8", "const:4:8"]]
- 00835910 ["CALL", null, ["callee:009dde40:8"]]
+ 008368bc ["INT_ADD", "register:40f0:8", ["const:8368bc:8", "const:4:8"]]
+ 008368bc ["CALL", null, ["callee:009dde40:8"]]
- 00835794 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00835794 ["STORE", null, ["const:1b1:8", "register:8:8", "register:5100:8"]]
- 00835798 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00835798 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00835798 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:8:8"]]
- 00835798 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-fa560a4205c880b5215bd32202ffa92d"></a>

### [`00835970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835970.md) → [`0083691c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/0083691c.md) FUN_0083691c

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
      "definition_site": "00836928",
      "incomplete_value": false,
      "site": "0083692c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083597c",
      "incomplete_value": false,
      "site": "00835980",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
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
      "0083692c",
      "DATA",
      [
        "storage",
        "00c7ecf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083692c",
      "DATA",
      [
        "storage",
        "00c7fcc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835978 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00836924 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0083597c ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 0083597c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0083597c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0083597c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00836928 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 00836928 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00836928 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00836928 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-dd7d180f2aee90a731477a9b17d01d7f"></a>

### [`00835994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835994.md) → [`00836940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836940.md) FUN_00836940

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
        "008359a4"
      ],
      [
        "FALL_THROUGH",
        "00836950"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00836950",
      "incomplete_value": true,
      "site": "00836954",
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
      "definition_site": "008359a4",
      "incomplete_value": true,
      "site": "008359a8",
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
        "008359a4"
      ],
      [
        "FALL_THROUGH",
        "00836950"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00836950",
      "incomplete_value": true,
      "site": "00836954",
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
      "definition_site": "008359a4",
      "incomplete_value": true,
      "site": "008359a8",
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
        "008359a4"
      ],
      [
        "FALL_THROUGH",
        "00836950"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00836950",
      "incomplete_value": true,
      "site": "00836958",
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
      "definition_site": "008359a4",
      "incomplete_value": true,
      "site": "008359ac",
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
      "unmatched:008359a0",
      "DATA",
      [
        "storage",
        "00c7ecf8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008359a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083697c"
      ]
    ]
  ],
  "added": [
    [
      "0083694c",
      "DATA",
      [
        "storage",
        "00c7fcc8",
        null,
        "undefined *"
      ]
    ],
    [
      "00836950",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083697c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835994 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 00835994 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00835998 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 0083599c ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 0083599c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0083599c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0083599c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d2fc210f62c576004f5ca21d92fe8ce5"></a>

### [`008359d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008359d4.md) → [`00836980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836980.md) FUN_00836980

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00835138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835138.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008369b4",
      "incomplete_value": false,
      "site": "008369b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835a08",
      "incomplete_value": false,
      "site": "00835a08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
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
      "008369b4",
      "DATA",
      [
        "storage",
        "00c7ecf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008369b4",
      "DATA",
      [
        "storage",
        "00c7fcc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008359f0 ["INT_ADD", "register:40f0:8", ["const:8359f0:8", "const:4:8"]]
- 008359f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0083699c ["INT_ADD", "register:40f0:8", ["const:83699c:8", "const:4:8"]]
+ 0083699c ["CALL", null, ["callee:00c58f30:8"]]
- 008359f8 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 008369a4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 008359fc ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 008359fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008359fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008359fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008369a8 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 008369a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008369a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008369a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d1c6719a04b42c4e6a01e14ad269f7c5"></a>

### [`00835ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835ad8.md) → [`00836a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836a84.md) FUN_00836a84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00835138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00835/00835138.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00836ab4",
      "incomplete_value": false,
      "site": "00836ab4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835b08",
      "incomplete_value": false,
      "site": "00835b08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00836ab4",
      "DATA",
      [
        "storage",
        "00c7ecf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00836ab4",
      "DATA",
      [
        "storage",
        "00c7fcc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835afc ["COPY", "register:4050:8", ["const:c7e000:8"]]
+ 00836aa8 ["COPY", "register:4050:8", ["const:c7f000:8"]]
- 00835b00 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 00835b00 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00835b00 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00835b00 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00836aac ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 00836aac ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00836aac ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00836aac ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00835b40 ["INT_ADD", "register:40f0:8", ["const:835b40:8", "const:4:8"]]
- 00835b40 ["CALL", null, ["callee:00c58f30:8"]]
+ 00836aec ["INT_ADD", "register:40f0:8", ["const:836aec:8", "const:4:8"]]
+ 00836aec ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-5c05da48dae6573b6e421bb7b86ad8d5"></a>

### [`00835c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835c10.md) → [`00836bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836bbc.md) FUN_00836bbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`0055a624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a624.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00862900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/00862900.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00468114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468114.md) [`0055a944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a944.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008638ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00863/008638ac.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00836c54",
      "incomplete_value": true,
      "site": "00836c58",
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
      "definition_site": "00835ca8",
      "incomplete_value": true,
      "site": "00835cac",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00836c40",
      "incomplete_value": false,
      "site": "00836c58",
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
      "definition_site": "00835c94",
      "incomplete_value": false,
      "site": "00835cac",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00836c4c",
      "incomplete_value": false,
      "site": "00836c58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:5b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835ca0",
      "incomplete_value": false,
      "site": "00835cac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:5e0:8"
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
      "00836c40",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00836c44",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00836c4c",
      "PARAM",
      [
        "storage",
        "00c7e5e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00836c40",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00836c44",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00836c4c",
      "PARAM",
      [
        "storage",
        "00c7f5b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835cac ["INT_ADD", "register:40f0:8", ["const:835cac:8", "const:4:8"]]
- 00835cac ["CALL", null, ["callee:00c596b0:8"]]
+ 00836c58 ["INT_ADD", "register:40f0:8", ["const:836c58:8", "const:4:8"]]
+ 00836c58 ["CALL", null, ["callee:00c596b0:8"]]
- 00835c38 ["INT_ADD", "register:40f0:8", ["const:835c38:8", "const:4:8"]]
- 00835c38 ["CALL", null, ["callee:008ba294:8"]]
+ 00836be4 ["INT_ADD", "register:40f0:8", ["const:836be4:8", "const:4:8"]]
+ 00836be4 ["CALL", null, ["callee:008ba294:8"]]
- 00835c44 ["INT_ADD", "register:40f0:8", ["const:835c44:8", "const:4:8"]]
- 00835c44 ["CALL", null, ["callee:008ba29c:8"]]
+ 00836bf0 ["INT_ADD", "register:40f0:8", ["const:836bf0:8", "const:4:8"]]
+ 00836bf0 ["CALL", null, ["callee:008ba29c:8"]]
~~~


<a id="compare-103d8f1e57e75d6d7db88fbce18e620b"></a>

### [`00835dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835dc4.md) → [`00836d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836d70.md) FUN_00836d70

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
      "definition_site": "00836d84",
      "incomplete_value": false,
      "site": "00836d88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835dd8",
      "incomplete_value": false,
      "site": "00835ddc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
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
      "00836d88",
      "DATA",
      [
        "storage",
        "00c7ed78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00836d88",
      "DATA",
      [
        "storage",
        "00c7fd48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835dd0 ["INT_ADD", "register:40f0:8", ["const:835dd0:8", "const:4:8"]]
- 00835dd0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00836d7c ["INT_ADD", "register:40f0:8", ["const:836d7c:8", "const:4:8"]]
+ 00836d7c ["CALL", null, ["callee:00c58f30:8"]]
- 00835dd4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00836d80 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00835dd8 ["COPY", "tmp:0:8", ["const:d78:8"]]
- 00835dd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00835dd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00835dd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00836d84 ["COPY", "tmp:0:8", ["const:d48:8"]]
+ 00836d84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00836d84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00836d84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3e9822af5e9fad1c1eb8bcbfaa8d3837"></a>

### [`00835de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835de8.md) → [`00836d94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836d94.md) FUN_00836d94

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
      "definition_site": "00836d98",
      "incomplete_value": false,
      "site": "00836d9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835dec",
      "incomplete_value": false,
      "site": "00835df0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
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
      "00836d9c",
      "DATA",
      [
        "storage",
        "00c7ed78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00836d9c",
      "DATA",
      [
        "storage",
        "00c7fd48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835de8 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00836d94 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00835dec ["COPY", "tmp:0:8", ["const:d78:8"]]
- 00835dec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00835dec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00835dec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00836d98 ["COPY", "tmp:0:8", ["const:d48:8"]]
+ 00836d98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00836d98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00836d98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eb6ed742089f91e82db258f234ea270b"></a>

### [`00835e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835e00.md) → [`00836dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836dac.md) FUN_00836dac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "00836dd0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00835e24",
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
      "00836dd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00836dd0",
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
- 00835e24 ["INT_ADD", "register:40f0:8", ["const:835e24:8", "const:4:8"]]
- 00835e24 ["CALL", null, ["ram:47ad34:8"]]
+ 00836dd0 ["INT_ADD", "register:40f0:8", ["const:836dd0:8", "const:4:8"]]
+ 00836dd0 ["CALL", null, ["ram:47b054:8"]]
- 00835e30 ["INT_ADD", "register:40f0:8", ["const:835e30:8", "const:4:8"]]
- 00835e30 ["CALL", null, ["callee:0047d134:8"]]
+ 00836ddc ["INT_ADD", "register:40f0:8", ["const:836ddc:8", "const:4:8"]]
+ 00836ddc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-9c733346054b967a59e9a499770a8c62"></a>

### [`00836024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836024.md) → [`00836fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836fd0.md) FUN_00836fd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00835e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835e70.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00836e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836e1c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00836fdc",
      "incomplete_value": false,
      "site": "00836fe0",
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
      "definition_site": "00836030",
      "incomplete_value": false,
      "site": "00836034",
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
      "00836fdc",
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
      "00836fdc",
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
- 00836034 ["INT_ADD", "register:40f0:8", ["const:836034:8", "const:4:8"]]
- 00836034 ["CALL", null, ["callee:0043bad8:8"]]
+ 00836fe0 ["INT_ADD", "register:40f0:8", ["const:836fe0:8", "const:4:8"]]
+ 00836fe0 ["CALL", null, ["callee:0043bad8:8"]]
- 0083602c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00836fd8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00836030 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00836030 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00836030 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00836030 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00836fdc ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00836fdc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00836fdc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00836fdc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-edc164faa0750e229ddd17daf999d842"></a>

### [`00836038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836038.md) → [`00836fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836fe4.md) FUN_00836fe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0082c8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c8bc.md) [`00836038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836038.md) [`00836838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836838.md) · 呼出先 7件 [`00836038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836038.md) [`0083669c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/0083669c.md) [`00836838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836838.md) [`00836dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836dc8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 3件 [`0082d868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082d/0082d868.md) [`00836fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836fe4.md) [`008377e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/008377e4.md) · 呼出先 7件 [`00836fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836fe4.md) [`00837648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837648.md) [`008377e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/008377e4.md) [`00837d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837d74.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 96.96% / 新版 96.96%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00836078",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00837644"
      ]
    ],
    [
      "unmatched:00836354",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083732c"
      ]
    ],
    [
      "unmatched:00836360",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ]
  ],
  "added": [
    [
      "00837024",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00837644"
      ]
    ],
    [
      "00837300",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083732c"
      ]
    ],
    [
      "0083730c",
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
- 00836068 ["CBRANCH", null, ["local:b3:8", "register:102:1"]]
+ 00837014 ["CBRANCH", null, ["local:b4:8", "register:102:1"]]
- 00836078 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00836078 ["CBRANCH", null, ["local:b66:8", "tmp:0:1"]]
- 008360a4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008360a4 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 00837050 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00837050 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
~~~


<a id="compare-12f371c1a3c468b536cd5cbb114680ca"></a>

### [`00836838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836838.md) → [`008377e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/008377e4.md) FUN_008377e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00836038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836038.md) · 呼出先 5件 [`00836038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836038.md) [`0083669c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/0083669c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00836fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836fe4.md) · 呼出先 5件 [`00836fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836fe4.md) [`00837648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837648.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 99.02% / 新版 99.02%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00836c7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00837bf0"
      ]
    ]
  ],
  "added": [
    [
      "00837c28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00837bf0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00836864 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
- 00836864 ["CBRANCH", null, ["local:b44:8", "tmp:0:1"]]
+ 00837810 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
+ 00837810 ["CBRANCH", null, ["local:b43:8", "tmp:0:1"]]
- 0083689c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0083689c ["CBRANCH", null, ["local:b46:8", "tmp:0:1"]]
+ 00837848 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00837848 ["CBRANCH", null, ["local:b45:8", "tmp:0:1"]]
- 008368b8 ["BRANCH", null, ["local:b45:8"]]
+ 00837864 ["BRANCH", null, ["local:b44:8"]]
~~~


<a id="compare-bdd7bfea013b373d093ea34a990cb199"></a>

### [`00836d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836d3c.md) → [`00837ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837ce8.md) FUN_00837ce8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00836d80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00837d64"
      ]
    ]
  ],
  "added": [
    [
      "00837d2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00837d64"
      ]
    ]
  ]
}
~~~


~~~diff
- 00836d44 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00836d44 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00837cf0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00837cf0 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 00836d60 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00836d60 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00837d0c ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00837d0c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00836d6c ["BRANCH", null, ["local:b4:8"]]
+ 00837d18 ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-a9838d890145056d741b5995bfa43c5a"></a>

### [`00836dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836dc8.md) → [`00837d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837d74.md) FUN_00837d74

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00836038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836038.md) [`00836dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836dc8.md) · 呼出先 6件 [`0083669c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/0083669c.md) [`00836dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836dc8.md) [`008375e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00837/008375e0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`00836fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836fe4.md) [`00837d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837d74.md) · 呼出先 6件 [`00837648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837648.md) [`00837d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837d74.md) [`0083858c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00838/0083858c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.04% / 新版 85.04%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008372e4",
      "incomplete_value": true,
      "site": "008372e8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008382e0",
      "incomplete_value": true,
      "site": "008382e4",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0083737c",
      "incomplete_value": false,
      "site": "00837384",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 18,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00836e54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00837de4"
      ]
    ],
    [
      "unmatched:00836f94",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ],
    [
      "unmatched:008370d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008384c0"
      ]
    ]
  ],
  "added": [
    [
      "00837e00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00837de4"
      ]
    ],
    [
      "00837f40",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ],
    [
      "0083807c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008384c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008372e8 ["INT_ADD", "register:40f0:8", ["const:8372e8:8", "const:4:8"]]
- 008372e8 ["CALL", null, ["callee:00c58f20:8"]]
+ 00838294 ["INT_ADD", "register:40f0:8", ["const:838294:8", "const:4:8"]]
+ 00838294 ["CALL", null, ["callee:00c58f20:8"]]
- 00837338 ["INT_ADD", "register:40f0:8", ["const:837338:8", "const:4:8"]]
- 00837338 ["CALL", null, ["callee:00c58f20:8"]]
+ 008382e4 ["INT_ADD", "register:40f0:8", ["const:8382e4:8", "const:4:8"]]
+ 008382e4 ["CALL", null, ["callee:00c58f20:8"]]
- 00837384 ["INT_ADD", "register:40f0:8", ["const:837384:8", "const:4:8"]]
- 00837384 ["CALL", null, ["callee:00c54d90:8"]]
+ 00838330 ["INT_ADD", "register:40f0:8", ["const:838330:8", "const:4:8"]]
+ 00838330 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-359f9890bca2907cc29284b075de6b92"></a>

### [`008375e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00837/008375e0.md) → [`0083858c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00838/0083858c.md) FUN_0083858c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00836dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836dc8.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00837d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00837/00837d74.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.62% / 新版 89.62%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00837618",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:008376b4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ],
    [
      "unmatched:008376b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00838680"
      ]
    ]
  ],
  "added": [
    [
      "008385c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00838660",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ],
    [
      "00838664",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00838680"
      ]
    ]
  ]
}
~~~


~~~diff
- 00837608 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 00837608 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0083760c ["COPY", "register:40a8:8", ["register:4008:8"]]
- 00837610 ["COPY", "register:40c0:8", ["register:4098:8"]]
~~~


<a id="compare-a90c42caeb0e1b4115841ecfcafcea43"></a>

### [`00837930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00837/00837930.md) → [`008388dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00838/008388dc.md) FUN_008388dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0082ee78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082ee78.md) · 呼出先 12件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0067e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e1dc.md) [`00862ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/00862ca8.md) [`00864590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864590.md)
- 新版 呼出元 1件 [`0082fe24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082f/0082fe24.md) · 呼出先 12件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0067e58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e58c.md) [`00863c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00863/00863c54.md) [`0086553c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00865/0086553c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 23.09% / 新版 23.09%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 88件, `unresolved_call_alignment` 95件, `unresolved_store_alignment` 147件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00838994",
      "incomplete_value": false,
      "site": "0083899c",
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
      "definition_site": "008379e8",
      "incomplete_value": false,
      "site": "008379f0",
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
      "definition_site": "00838c44",
      "incomplete_value": false,
      "site": "00838c48",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "old": null,
    "ordinal": 27,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00838c40",
      "incomplete_value": true,
      "site": "00838c48",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 27,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00837974",
      "DATA",
      [
        "storage",
        "00c7ee08",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00837984",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00837988",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008394b4"
      ]
    ]
  ],
  "added": [
    [
      "00838920",
      "DATA",
      [
        "storage",
        "00c7fdd8",
        null,
        "pointer"
      ]
    ],
    [
      "00838930",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00838934",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008394b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008379f0 ["INT_ADD", "register:40f0:8", ["const:8379f0:8", "const:4:8"]]
- 008379f0 ["CALL", null, ["callee:0047e96c:8"]]
+ 0083899c ["INT_ADD", "register:40f0:8", ["const:83899c:8", "const:4:8"]]
+ 0083899c ["CALL", null, ["callee:0047e96c:8"]]
- 00837c9c ["INT_ADD", "register:40f0:8", ["const:837c9c:8", "const:4:8"]]
- 00837c9c ["CALL", null, ["callee:00c54d90:8"]]
+ 00838c48 ["INT_ADD", "register:40f0:8", ["const:838c48:8", "const:4:8"]]
+ 00838c48 ["CALL", null, ["callee:00c54d90:8"]]
- 00837ff8 ["INT_ADD", "register:40f0:8", ["const:837ff8:8", "const:4:8"]]
- 00837ff8 ["CALL", null, ["callee:0047e96c:8"]]
+ 00838fa4 ["INT_ADD", "register:40f0:8", ["const:838fa4:8", "const:4:8"]]
+ 00838fa4 ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-9038ce3ecb047bb99fee525edbdf1d65"></a>

### [`008388e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/008388e0.md) → [`0083988c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/0083988c.md) FUN_0083988c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008388fc",
      "DATA",
      [
        "storage",
        "00c7ee08",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00838900",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008398d8"
      ]
    ],
    [
      "unmatched:0083890c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ]
  ],
  "added": [
    [
      "008398a8",
      "DATA",
      [
        "storage",
        "00c7fdd8",
        null,
        "pointer"
      ]
    ],
    [
      "008398ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008398d8"
      ]
    ],
    [
      "008398b8",
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
- 008388f4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 008398a0 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 008388f8 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 008388f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008388f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008388f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008388fc ["COPY", "tmp:0:8", ["register:4000:8"]]
- 008388fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-f88e6a97c0b4dc9aa5b80c88e9ea80ae"></a>

### [`008389a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/008389a8.md) → [`00839954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839954.md) FUN_00839954

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00838a60",
      "incomplete_value": true,
      "site": "00838a64",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:008389c4",
      "DATA",
      [
        "storage",
        "00c7ee08",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008389d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008399a0"
      ]
    ],
    [
      "unmatched:00838a08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008399d0"
      ]
    ]
  ],
  "added": [
    [
      "00839970",
      "DATA",
      [
        "storage",
        "00c7fdd8",
        null,
        "pointer"
      ]
    ],
    [
      "00839984",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008399a0"
      ]
    ],
    [
      "008399b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008399d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838a64 ["INT_ADD", "register:40f0:8", ["const:838a64:8", "const:4:8"]]
- 00838a64 ["CALL", null, ["callee:00682714:8"]]
+ 00839a10 ["INT_ADD", "register:40f0:8", ["const:839a10:8", "const:4:8"]]
+ 00839a10 ["CALL", null, ["callee:00682714:8"]]
- 008389bc ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00839968 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 008389c0 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 008389c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008389c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008389c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4432f0d6e860208e3e793c85c1cb7bd4"></a>

### [`00838a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838a7c.md) → [`00839a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839a28.md) FUN_00839a28

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
      "definition_site": "00839a4c",
      "incomplete_value": false,
      "site": "00839a4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838aa0",
      "incomplete_value": false,
      "site": "00838aa0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
      "00839a4c",
      "DATA",
      [
        "storage",
        "00c7ee28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00839a4c",
      "DATA",
      [
        "storage",
        "00c7fdf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838a90 ["INT_ADD", "register:40f0:8", ["const:838a90:8", "const:4:8"]]
- 00838a90 ["CALL", null, ["callee:00c58f30:8"]]
+ 00839a3c ["INT_ADD", "register:40f0:8", ["const:839a3c:8", "const:4:8"]]
+ 00839a3c ["CALL", null, ["callee:00c58f30:8"]]
- 00838a98 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00839a44 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00838a9c ["COPY", "tmp:0:8", ["const:e28:8"]]
- 00838a9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838a9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838a9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00839a48 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 00839a48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00839a48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00839a48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7c6eab20ce9523744cd315b3a5c14d14"></a>

### [`00838ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838ab0.md) → [`00839a5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839a5c.md) FUN_00839a5c

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
      "definition_site": "00839a68",
      "incomplete_value": false,
      "site": "00839a68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838abc",
      "incomplete_value": false,
      "site": "00838abc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
      "00839a68",
      "DATA",
      [
        "storage",
        "00c7ee28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00839a68",
      "DATA",
      [
        "storage",
        "00c7fdf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838ab4 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00839a60 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00838ab8 ["COPY", "tmp:0:8", ["const:e28:8"]]
- 00838ab8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838ab8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838ab8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00839a64 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 00839a64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00839a64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00839a64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5a4f0ff0c570e951a15515f43393ab4f"></a>

### [`00838b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838b18.md) → [`00839ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839ac4.md) FUN_00839ac4

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
      "unmatched:00838b3c",
      "DATA",
      [
        "storage",
        "00c7eea8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00838b40",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00838b44",
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
      "00839ae8",
      "DATA",
      [
        "storage",
        "00c7fe78",
        null,
        "undefined *"
      ]
    ],
    [
      "00839aec",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00839af0",
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
- 00838b2c ["INT_ADD", "register:40f0:8", ["const:838b2c:8", "const:4:8"]]
- 00838b2c ["CALL", null, ["callee:00c58f30:8"]]
+ 00839ad8 ["INT_ADD", "register:40f0:8", ["const:839ad8:8", "const:4:8"]]
+ 00839ad8 ["CALL", null, ["callee:00c58f30:8"]]
- 00838b34 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00839ae0 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00838b38 ["COPY", "tmp:0:8", ["const:ea8:8"]]
- 00838b38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838b38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838b38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1829931f1a98bf97baa62a1ee0e245fc"></a>

### [`00838b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838b4c.md) → [`00839af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839af8.md) FUN_00839af8

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
      "definition_site": "00839b04",
      "incomplete_value": false,
      "site": "00839b04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:e78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838b58",
      "incomplete_value": false,
      "site": "00838b58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:ea8:8"
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
      "00839b04",
      "DATA",
      [
        "storage",
        "00c7eea8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00839b04",
      "DATA",
      [
        "storage",
        "00c7fe78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838b50 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00839afc ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00838b54 ["COPY", "tmp:0:8", ["const:ea8:8"]]
- 00838b54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838b54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838b54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00839b00 ["COPY", "tmp:0:8", ["const:e78:8"]]
+ 00839b00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00839b00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00839b00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8f7274c9bc3060ec8db8c303f57b44d7"></a>

### [`00838ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838ba8.md) → [`00839b54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839b54.md) FUN_00839b54

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
      "unmatched:00838bcc",
      "DATA",
      [
        "storage",
        "00c7ef28",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00838bd0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00838bd4",
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
      "00839b78",
      "DATA",
      [
        "storage",
        "00c7fef8",
        null,
        "undefined *"
      ]
    ],
    [
      "00839b7c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00839b80",
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
- 00838bbc ["INT_ADD", "register:40f0:8", ["const:838bbc:8", "const:4:8"]]
- 00838bbc ["CALL", null, ["callee:00c58f30:8"]]
+ 00839b68 ["INT_ADD", "register:40f0:8", ["const:839b68:8", "const:4:8"]]
+ 00839b68 ["CALL", null, ["callee:00c58f30:8"]]
- 00838bc4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00839b70 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00838bc8 ["COPY", "tmp:0:8", ["const:f28:8"]]
- 00838bc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838bc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838bc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4e513f5c4fc399d604c4537dfd23b605"></a>

### [`00838bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838bdc.md) → [`00839b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839b88.md) FUN_00839b88

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
      "definition_site": "00839b94",
      "incomplete_value": false,
      "site": "00839b94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838be8",
      "incomplete_value": false,
      "site": "00838be8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00839b94",
      "DATA",
      [
        "storage",
        "00c7ef28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00839b94",
      "DATA",
      [
        "storage",
        "00c7fef8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838be0 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00839b8c ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00838be4 ["COPY", "tmp:0:8", ["const:f28:8"]]
- 00838be4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838be4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838be4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00839b90 ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 00839b90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00839b90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00839b90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b3a7aaeb823658510c7dec81881a9a2a"></a>

### [`00838bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838bf8.md) → [`00839ba4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839ba4.md) FUN_00839ba4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0082d2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082d/0082d2e8.md) [`00838d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d58.md) [`00838d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d5c.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0082e294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082e/0082e294.md) [`00839d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839d04.md) [`00839d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839d08.md) [`00acbc38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acb/00acbc38.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00839bd8",
      "incomplete_value": false,
      "site": "00839bd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838c2c",
      "incomplete_value": false,
      "site": "00838c2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:f98:8"
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
      "00839bd8",
      "DATA",
      [
        "storage",
        "00c7ef98",
        null,
        "undefined *"
      ]
    ],
    [
      "00839c14",
      "READ",
      [
        "storage",
        "00c7efb8",
        null,
        "pointer"
      ]
    ],
    [
      "00839c14",
      "READ",
      [
        "storage",
        "00c7efc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00839bd8",
      "DATA",
      [
        "storage",
        "00c7ff68",
        null,
        "undefined *"
      ]
    ],
    [
      "00839c14",
      "READ",
      [
        "storage",
        "00c7ff88",
        null,
        "pointer"
      ]
    ],
    [
      "00839c14",
      "READ",
      [
        "storage",
        "00c7ff90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838c1c ["INT_ADD", "register:40f0:8", ["const:838c1c:8", "const:4:8"]]
- 00838c1c ["CALL", null, ["callee:0082e294:8"]]
+ 00839bc8 ["INT_ADD", "register:40f0:8", ["const:839bc8:8", "const:4:8"]]
+ 00839bc8 ["CALL", null, ["callee:0082e294:8"]]
- 00838c20 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00839bcc ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00838c24 ["COPY", "tmp:0:8", ["const:f98:8"]]
- 00838c24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838c24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838c24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00839bd0 ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 00839bd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00839bd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00839bd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c67c9ec96dcc4456096d6d58e798d470"></a>

### [`00838d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d10.md) → [`00839cbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839cbc.md) FUN_00839cbc

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
      "definition_site": "00839ce0",
      "incomplete_value": false,
      "site": "00839ce0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838d34",
      "incomplete_value": false,
      "site": "00838d34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:f98:8"
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
      "00839ce0",
      "DATA",
      [
        "storage",
        "00c7ef98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00839ce0",
      "DATA",
      [
        "storage",
        "00c7ff68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838d24 ["INT_ADD", "register:40f0:8", ["const:838d24:8", "const:4:8"]]
- 00838d24 ["CALL", null, ["callee:00c58f30:8"]]
+ 00839cd0 ["INT_ADD", "register:40f0:8", ["const:839cd0:8", "const:4:8"]]
+ 00839cd0 ["CALL", null, ["callee:00c58f30:8"]]
- 00838d2c ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00839cd8 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00838d30 ["COPY", "tmp:0:8", ["const:f98:8"]]
- 00838d30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838d30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838d30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00839cdc ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 00839cdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00839cdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00839cdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e0169fb5a3de6c36f5d8224158e23ecb"></a>

### [`00838d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d44.md) → [`00839cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839cf0.md) FUN_00839cf0

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
      "definition_site": "00839cfc",
      "incomplete_value": false,
      "site": "00839cfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838d50",
      "incomplete_value": false,
      "site": "00838d50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
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
      "00839cfc",
      "DATA",
      [
        "storage",
        "00c7ef98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00839cfc",
      "DATA",
      [
        "storage",
        "00c7ff68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838d48 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00839cf4 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00838d4c ["COPY", "tmp:0:8", ["const:f98:8"]]
- 00838d4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838d4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838d4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00839cf8 ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 00839cf8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00839cf8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00839cf8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0a70f58835094a72ebcec4975b627c82"></a>

### [`00838d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d60.md) → [`00839d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839d0c.md) FUN_00839d0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`00ac86ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac86ac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 5件 [`007566ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00756/007566ac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085cb74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085cb74.md) [`00ac96a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac9/00ac96a0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.00% / 新版 74.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00839d2c",
      "incomplete_value": true,
      "site": "00839d30",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838d80",
      "incomplete_value": true,
      "site": "00838d84",
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
            "const:d90:8"
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
      "definition_site": "00838de4",
      "incomplete_value": true,
      "site": "00838dec",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
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
      "unmatched:00838d98",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00838d9c",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00838da4",
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
      "00839d44",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00839d48",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00839d50",
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
- 00838d84 ["INT_ADD", "register:40f0:8", ["const:838d84:8", "const:4:8"]]
- 00838d84 ["CALL", null, ["callee:00ac96a0:8"]]
+ 00839d30 ["INT_ADD", "register:40f0:8", ["const:839d30:8", "const:4:8"]]
+ 00839d30 ["CALL", null, ["callee:00ac96a0:8"]]
- 00838dec ["INT_ADD", "register:40f0:8", ["const:838dec:8", "const:4:8"]]
- 00838dec ["CALL", null, ["callee:0085cb74:8"]]
+ 00839d98 ["INT_ADD", "register:40f0:8", ["const:839d98:8", "const:4:8"]]
+ 00839d98 ["CALL", null, ["callee:0085cb74:8"]]
- 00838d78 ["INT_ADD", "register:40f0:8", ["const:838d78:8", "const:4:8"]]
- 00838d78 ["CALL", null, ["callee:008524fc:8"]]
+ 00839d24 ["INT_ADD", "register:40f0:8", ["const:839d24:8", "const:4:8"]]
+ 00839d24 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-71ccc417a566dae0441b7d953bf545f5"></a>

### [`00838e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838e64.md) → [`00839e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839e10.md) _INIT_153

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 66.10% / 新版 66.10%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00839fb0",
      "incomplete_value": true,
      "site": "00839fc0",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00839fb4",
      "incomplete_value": true,
      "site": "00839fc0",
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
            "const:80:8"
          ]
        ]
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
      "definition_site": "00839fc4",
      "incomplete_value": true,
      "site": "00839fd4",
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
      "unmatched:00838e94",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00838ea0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00838ea8",
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
      "00839e40",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00839e4c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00839e54",
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
- 00839014 ["INT_ADD", "register:40f0:8", ["const:839014:8", "const:4:8"]]
- 00839014 ["CALL", null, ["callee:0043bb58:8"]]
+ 00839fc0 ["INT_ADD", "register:40f0:8", ["const:839fc0:8", "const:4:8"]]
+ 00839fc0 ["CALL", null, ["callee:0043bb58:8"]]
- 00839028 ["INT_ADD", "register:40f0:8", ["const:839028:8", "const:4:8"]]
- 00839028 ["CALL", null, ["callee:0043bb58:8"]]
+ 00839fd4 ["INT_ADD", "register:40f0:8", ["const:839fd4:8", "const:4:8"]]
+ 00839fd4 ["CALL", null, ["callee:0043bb58:8"]]
- 00839098 ["INT_ADD", "register:40f0:8", ["const:839098:8", "const:4:8"]]
- 00839098 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0083a044 ["INT_ADD", "register:40f0:8", ["const:83a044:8", "const:4:8"]]
+ 0083a044 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-9fde7344f10094d5cd32381f9926cb96"></a>

### [`008391f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/008391f4.md) → [`0083a1a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083a1a0.md) _INIT_154

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.79% / 新版 80.79%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0083a310",
      "incomplete_value": true,
      "site": "0083a314",
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
      "definition_site": "0083a304",
      "incomplete_value": true,
      "site": "0083a314",
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
      "definition_site": "0083a308",
      "incomplete_value": true,
      "site": "0083a314",
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
      "unmatched:008391f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008391fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00839200",
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
      "0083a1a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0083a1a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0083a1ac",
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
- 00839368 ["INT_ADD", "register:40f0:8", ["const:839368:8", "const:4:8"]]
- 00839368 ["CALL", null, ["callee:0043bb58:8"]]
+ 0083a314 ["INT_ADD", "register:40f0:8", ["const:83a314:8", "const:4:8"]]
+ 0083a314 ["CALL", null, ["callee:0043bb58:8"]]
- 0083937c ["INT_ADD", "register:40f0:8", ["const:83937c:8", "const:4:8"]]
- 0083937c ["CALL", null, ["callee:0043bb58:8"]]
+ 0083a328 ["INT_ADD", "register:40f0:8", ["const:83a328:8", "const:4:8"]]
+ 0083a328 ["CALL", null, ["callee:0043bb58:8"]]
- 008393a4 ["INT_ADD", "register:40f0:8", ["const:8393a4:8", "const:4:8"]]
- 008393a4 ["CALL", null, ["callee:0043bb58:8"]]
+ 0083a350 ["INT_ADD", "register:40f0:8", ["const:83a350:8", "const:4:8"]]
+ 0083a350 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-85f49206a338fdf55edb8c04bc4963d6"></a>

### [`00839644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839644.md) → [`0083a5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083a5f0.md) FUN_0083a5f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480558.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480878.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.41% / 新版 91.41%

優先判定に残った影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008397b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008397c4"
      ]
    ],
    [
      "unmatched:008397b4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0083a794"
      ]
    ],
    [
      "unmatched:008397c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083a794"
      ]
    ]
  ],
  "added": [
    [
      "0083a75c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083a770"
      ]
    ],
    [
      "0083a760",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0083a794"
      ]
    ],
    [
      "0083a76c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083a794"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083966c ["INT_ADD", "register:40f0:8", ["const:83966c:8", "const:4:8"]]
- 0083966c ["CALL", null, ["callee:00480878:8"]]
+ 0083a618 ["INT_ADD", "register:40f0:8", ["const:83a618:8", "const:4:8"]]
+ 0083a618 ["CALL", null, ["callee:00480878:8"]]
- 00839674 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00839674 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
+ 0083a620 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 0083a620 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 00839684 ["BRANCH", null, ["local:b5:8"]]
+ 0083a630 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-f3f27eeb681a8609c1b11450c9d14fa1"></a>

### [`00839844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839844.md) → [`0083a7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083a7f0.md) FUN_0083a7f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) · 呼出先 2件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480f78.md)
- 新版 呼出元 1件 [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) · 呼出先 2件 [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481298.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 92.54% / 新版 92.54%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00839918",
      "incomplete_value": true,
      "site": "0083991c",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00839914",
      "incomplete_value": true,
      "site": "0083991c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "1",
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
      "unmatched:008398f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083a890"
      ]
    ]
  ],
  "added": [
    [
      "0083a8a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083a890"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083991c ["INT_ADD", "register:40f0:8", ["const:83991c:8", "const:4:8"]]
- 0083991c ["CALL", null, ["callee:004810a8:8"]]
+ 0083a8c8 ["INT_ADD", "register:40f0:8", ["const:83a8c8:8", "const:4:8"]]
+ 0083a8c8 ["CALL", null, ["callee:004810a8:8"]]
- 00839868 ["INT_ADD", "register:40f0:8", ["const:839868:8", "const:4:8"]]
- 00839868 ["CALL", null, ["callee:00481298:8"]]
+ 0083a814 ["INT_ADD", "register:40f0:8", ["const:83a814:8", "const:4:8"]]
+ 0083a814 ["CALL", null, ["callee:00481298:8"]]
- 00839878 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00839878 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 0083a824 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0083a824 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-e26ae2f93c03e4c26b80a485eb9ec331"></a>

### [`00839950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839950.md) → [`0083a8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083a8fc.md) FUN_0083a8fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0062c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062c/0062c100.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0062c4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062c/0062c4b0.md) [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0083a95c",
      "incomplete_value": false,
      "site": "0083a964",
      "value": [
        "leaf",
        "const:28:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 008399b8 ["INT_ADD", "register:40f0:8", ["const:8399b8:8", "const:4:8"]]
- 008399b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0083a964 ["INT_ADD", "register:40f0:8", ["const:83a964:8", "const:4:8"]]
+ 0083a964 ["CALL", null, ["callee:00c58f30:8"]]
- 008399a0 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008399a0 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 0083a94c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 0083a94c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 008399e0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008399e0 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 0083a98c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0083a98c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-0ee5d20b2e1d8c8f61e6773de596261b"></a>

### [`00839a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839a64.md) → [`0083aa10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083aa10.md) FUN_0083aa10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0062c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062c/0062c100.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0062c4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062c/0062c4b0.md) [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.96% / 新版 97.96%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00839abc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083aa50"
      ]
    ]
  ],
  "added": [
    [
      "0083aa68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083aa50"
      ]
    ]
  ]
}
~~~


~~~diff
- 00839a94 ["BRANCH", null, ["local:b7:8"]]
+ 0083aa40 ["BRANCH", null, ["local:b9:8"]]
- 00839aa0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00839aa0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 0083aa4c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0083aa4c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 00839ab4 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00839ab4 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 0083aa60 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 0083aa60 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
~~~


<a id="compare-9b31aa94cfaca25e0600b7454bf1a731"></a>

### [`00839b28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839b28.md) → [`0083aad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083aad4.md) FUN_0083aad4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00839b2c ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00839b2c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0083aad8 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 0083aad8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00839b50 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 0083aafc ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 00839b5c ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00839b5c ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00839b5c ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
+ 0083ab08 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 0083ab08 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 0083ab08 ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
~~~


<a id="compare-86fd3fc249391b94088795330d159e82"></a>

### [`00839b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839b70.md) → [`0083ab1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083ab1c.md) FUN_0083ab1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a89b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89b40.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a35bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a35bec.md) [`00a378c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a37/00a378c8.md) [`00a37f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a37/00a37f30.md) [`00a38c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38c10.md)
- 新版 呼出元 1件 [`00a8ab34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8a/00a8ab34.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00a36be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a36/00a36be0.md) [`00a388bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a38/00a388bc.md) [`00a38f24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a38/00a38f24.md) [`00a39c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39c04.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00839ba8",
      "incomplete_value": true,
      "site": "00839bac",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00839bec",
      "incomplete_value": true,
      "site": "00839bf0",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00839b70",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00839b74",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00839b78",
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
      "0083ab1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0083ab20",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0083ab24",
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
- 00839bac ["INT_ADD", "register:40f0:8", ["const:839bac:8", "const:4:8"]]
- 00839bac ["CALL", null, ["callee:0043bf04:8"]]
+ 0083ab58 ["INT_ADD", "register:40f0:8", ["const:83ab58:8", "const:4:8"]]
+ 0083ab58 ["CALL", null, ["callee:0043bf04:8"]]
- 00839bf0 ["INT_ADD", "register:40f0:8", ["const:839bf0:8", "const:4:8"]]
- 00839bf0 ["CALL", null, ["callee:00a388bc:8"]]
+ 0083ab9c ["INT_ADD", "register:40f0:8", ["const:83ab9c:8", "const:4:8"]]
+ 0083ab9c ["CALL", null, ["callee:00a388bc:8"]]
- 00839b70 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00839b70 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00839b70 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00839b70 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-af3d5595fa19f8670ac5c46a15a3d10c"></a>

### [`00839d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839d50.md) → [`0083acfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083acfc.md) FUN_0083acfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0075bdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075b/0075bdcc.md) [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00839d58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083ad10"
      ]
    ]
  ],
  "added": [
    [
      "0083ad04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0083ad10"
      ]
    ]
  ]
}
~~~


~~~diff
- 00839d50 ["INT_SUB", "tmp:0:4", ["register:4000:4", "const:384:4"]]
- 00839d50 ["INT_ZEXT", "register:4040:8", ["tmp:0:4"]]
- 00839d54 ["COPY", "tmp:0:4", ["const:64:4"]]
- 00839d54 ["INT_LESSEQUAL", "register:105:1", ["const:64:4", "register:4040:4"]]
- 00839d54 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:64:4"]]
- 00839d54 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 00839d58 ["CBRANCH", null, ["local:b2:8", "register:102:1"]]
~~~


<a id="compare-348b86d22b7a8db144e27886bc891ecb"></a>

### [`00839da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839da4.md) → [`0083ad50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083ad50.md) _INIT_155

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00839584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839584.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`0083a530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083a530.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.90% / 新版 79.90%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00839ef0",
      "incomplete_value": true,
      "site": "00839f04",
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
    "new": null,
    "old": {
      "definition_site": "00839ef8",
      "incomplete_value": true,
      "site": "00839f04",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00839efc",
      "incomplete_value": true,
      "site": "00839f04",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00839dd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00839de0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00839dfc",
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
      "0083ad80",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0083ad8c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0083ada8",
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
- 00839f04 ["INT_ADD", "register:40f0:8", ["const:839f04:8", "const:4:8"]]
- 00839f04 ["CALL", null, ["callee:0043bb58:8"]]
+ 0083aeb0 ["INT_ADD", "register:40f0:8", ["const:83aeb0:8", "const:4:8"]]
+ 0083aeb0 ["CALL", null, ["callee:0043bb58:8"]]
- 00839f18 ["INT_ADD", "register:40f0:8", ["const:839f18:8", "const:4:8"]]
- 00839f18 ["CALL", null, ["callee:0043bb58:8"]]
+ 0083aec4 ["INT_ADD", "register:40f0:8", ["const:83aec4:8", "const:4:8"]]
+ 0083aec4 ["CALL", null, ["callee:0043bb58:8"]]
- 00839f68 ["INT_ADD", "register:40f0:8", ["const:839f68:8", "const:4:8"]]
- 00839f68 ["CALL", null, ["callee:0043bb58:8"]]
+ 0083af14 ["INT_ADD", "register:40f0:8", ["const:83af14:8", "const:4:8"]]
+ 0083af14 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-7c4d43db47917b2d06616c3893c6f73b"></a>

### [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) → [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) FUN_0083b124

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0084a098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084a/0084a098.md) · 呼出先 150件 [`0044ab50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ab50.md) [`0044ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ab78.md) [`0044d730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d730.md) [`0044d848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d848.md) [`0044e108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e108.md)
- 新版 呼出元 1件 [`0084b044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084b/0084b044.md) · 呼出先 148件 [`0044d820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044d820.md) [`0044dc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044dc80.md) [`0044e1f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044e/0044e1f8.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.60% / 新版 88.60%

優先判定に残った影響 `call_argument_candidate` 44件, `store_condition` 5件, `unresolved_branch_alignment` 154件, `unresolved_call_alignment` 45件, `unresolved_store_alignment` 48件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0083a1bc",
      "incomplete_value": true,
      "site": "0083a1cc",
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
                "const:700:8"
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
      "definition_site": "0083a1d8",
      "incomplete_value": true,
      "site": "0083a1dc",
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
                "register:4098:8"
              ],
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:da0:8"
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
      "definition_site": "0083a1d0",
      "incomplete_value": true,
      "site": "0083a1dc",
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
                "const:6e0:8"
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
      "unmatched:0083a17c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0083a180",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0083a184",
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
      "0083b128",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0083b12c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0083b130",
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
- 0083a1cc ["INT_ADD", "register:40f0:8", ["const:83a1cc:8", "const:4:8"]]
- 0083a1cc ["CALL", null, ["callee:00866a88:8"]]
+ 0083b178 ["INT_ADD", "register:40f0:8", ["const:83b178:8", "const:4:8"]]
+ 0083b178 ["CALL", null, ["callee:00866a88:8"]]
- 0083a1dc ["INT_ADD", "register:40f0:8", ["const:83a1dc:8", "const:4:8"]]
- 0083a1dc ["CALL", null, ["callee:00676e50:8"]]
+ 0083b188 ["INT_ADD", "register:40f0:8", ["const:83b188:8", "const:4:8"]]
+ 0083b188 ["CALL", null, ["callee:00676e50:8"]]
- 0083a1fc ["INT_ADD", "register:40f0:8", ["const:83a1fc:8", "const:4:8"]]
- 0083a1fc ["CALL", null, ["callee:00676e50:8"]]
+ 0083b1a8 ["INT_ADD", "register:40f0:8", ["const:83b1a8:8", "const:4:8"]]
+ 0083b1a8 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-4224e17caea515dbd50c2cc791fd7a98"></a>

### [`0083f2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f2dc.md) → [`00840288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840288.md) FUN_00840288

根拠 `leaf_bytes_and_unique_code_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 2件 [`008939b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008939b4.md) [`00a52e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52e94.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00894960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894960.md) [`00a53e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53e88.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-398adfcd0fea15dddf68696377957b34"></a>

### [`0083f2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f2e8.md) → [`00840294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840294.md) FUN_00840294

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0085b190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b190.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0085c13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c13c.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0083f2f8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0083f2f8 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
+ 008402a4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008402a4 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
- 0083f318 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 0083f318 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
+ 008402c4 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008402c4 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
- 0083f324 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0083f324 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
+ 008402d0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008402d0 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
~~~


<a id="compare-1fd01958066766c3027c7f9635a45445"></a>

### [`0083f4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f4c0.md) → [`0084046c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/0084046c.md) FUN_0084046c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00814c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00814/00814c50.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00491410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00491/00491410.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00815bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00815/00815bb4.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`00491730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00491/00491730.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_argument_candidate, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.86% / 新版 85.86%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008404f0",
      "incomplete_value": true,
      "site": "008404fc",
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
                "const:4b6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083f544",
      "incomplete_value": true,
      "site": "0083f550",
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
                "const:3e7:8"
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
      "definition_site": "00840544",
      "incomplete_value": true,
      "site": "00840554",
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
      "definition_site": "0083f598",
      "incomplete_value": true,
      "site": "0083f5a8",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00840540",
      "incomplete_value": true,
      "site": "0084055c",
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
                "const:7f1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083f594",
      "incomplete_value": true,
      "site": "0083f5b0",
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
                "const:726:8"
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
      "00840498",
      "READ",
      [
        "storage",
        "00c9ad78",
        null,
        "pointer"
      ]
    ],
    [
      "008404a4",
      "READ",
      [
        "storage",
        "00ca5250",
        null,
        "undefined1"
      ]
    ],
    [
      "008404ac",
      "READ",
      [
        "storage",
        "00ca5250",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00840498",
      "READ",
      [
        "storage",
        "00c9bd48",
        null,
        "pointer"
      ]
    ],
    [
      "008404a4",
      "READ",
      [
        "storage",
        "00ca6210",
        null,
        "undefined1"
      ]
    ],
    [
      "008404ac",
      "READ",
      [
        "storage",
        "00ca6210",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083f728 ["INT_ADD", "register:40f0:8", ["const:83f728:8", "const:4:8"]]
- 0083f728 ["CALL", null, ["callee:00c594d0:8"]]
+ 008406d4 ["INT_ADD", "register:40f0:8", ["const:8406d4:8", "const:4:8"]]
+ 008406d4 ["CALL", null, ["callee:00c594d0:8"]]
- 0083f72c ["INT_ADD", "register:40f0:8", ["const:83f72c:8", "const:4:8"]]
- 0083f72c ["CALL", null, ["ram:48cd38:8"]]
+ 008406d8 ["INT_ADD", "register:40f0:8", ["const:8406d8:8", "const:4:8"]]
+ 008406d8 ["CALL", null, ["ram:48d058:8"]]
- 0083f4e0 ["COPY", "register:40b8:8", ["const:c9a000:8"]]
+ 0084048c ["COPY", "register:40b8:8", ["const:c9b000:8"]]
~~~


<a id="compare-d0aa8468156d7590df20c5c95b593114"></a>

### [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) → [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) FUN_00840888

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0084a098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084a/0084a098.md) · 呼出先 39件 [`0044e108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e108.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`00472a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472a40.md) [`0048cd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd08.md)
- 新版 呼出元 1件 [`0084b044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084b/0084b044.md) · 呼出先 38件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) [`00472d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472d60.md) [`0048d028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d028.md) [`005979bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005979bc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.30% / 新版 81.30%

優先判定に残った影響 `call_argument_candidate` 61件, `store_condition` 47件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 560件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00841994",
      "incomplete_value": true,
      "site": "008419b0",
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
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:340:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008409e8",
      "incomplete_value": true,
      "site": "00840a04",
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
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:2f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 649,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00840dac",
      "incomplete_value": true,
      "site": "00840db8",
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
                "leaf",
                "const:f8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1118:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083fe00",
      "incomplete_value": true,
      "site": "0083fe0c",
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
            "const:1118:8"
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
      "definition_site": "00841498",
      "incomplete_value": true,
      "site": "008414a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008404ec",
      "incomplete_value": true,
      "site": "008404f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:2618:8"
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
      "unmatched:0083f9d8",
      "DATA",
      [
        "storage",
        "00c7f028",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0083fdf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:0083fdf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x1e8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00840984",
      "DATA",
      [
        "storage",
        "00c7fff8",
        null,
        "undefined *"
      ]
    ],
    [
      "00840d9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00840da4",
      "WRITE",
      [
        "storage",
        "Stack[-0x1e8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0083fe0c ["INT_ADD", "register:40f0:8", ["const:83fe0c:8", "const:4:8"]]
- 0083fe0c ["CALL", null, ["callee:0046f258:8"]]
+ 00840db8 ["INT_ADD", "register:40f0:8", ["const:840db8:8", "const:4:8"]]
+ 00840db8 ["CALL", null, ["callee:0046f258:8"]]
- 008404f8 ["INT_ADD", "register:40f0:8", ["const:8404f8:8", "const:4:8"]]
- 008404f8 ["CALL", null, ["callee:0046f258:8"]]
+ 008414a4 ["INT_ADD", "register:40f0:8", ["const:8414a4:8", "const:4:8"]]
+ 008414a4 ["CALL", null, ["callee:0046f258:8"]]
- 00840534 ["INT_ADD", "register:40f0:8", ["const:840534:8", "const:4:8"]]
- 00840534 ["CALL", null, ["callee:00b3cef8:8"]]
+ 008414e0 ["INT_ADD", "register:40f0:8", ["const:8414e0:8", "const:4:8"]]
+ 008414e0 ["CALL", null, ["callee:00b3cef8:8"]]
~~~


<a id="compare-81719b5ca680228fb588a5162e97f9b8"></a>

### [`00846520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846520.md) → [`008474cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/008474cc.md) FUN_008474cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00846534",
      "incomplete_value": true,
      "site": "00846538",
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
            "const:1d8:8"
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
    "new": null,
    "old": {
      "definition_site": "0084652c",
      "incomplete_value": true,
      "site": "00846538",
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
                "const:1e0:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00846540"
      ],
      [
        "FALL_THROUGH",
        "008474ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008474ec",
      "incomplete_value": true,
      "site": "008474f0",
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
      "definition_site": "00846540",
      "incomplete_value": true,
      "site": "00846544",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00846540",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847500"
      ]
    ]
  ],
  "added": [
    [
      "008474ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847500"
      ]
    ]
  ]
}
~~~


~~~diff
- 00846538 ["INT_ADD", "register:40f0:8", ["const:846538:8", "const:4:8"]]
- 00846538 ["CALL", null, ["callee:005c426c:8"]]
+ 008474e4 ["INT_ADD", "register:40f0:8", ["const:8474e4:8", "const:4:8"]]
+ 008474e4 ["CALL", null, ["callee:005c426c:8"]]
- 00846540 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00846540 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 008474ec ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008474ec ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-d1f711678101a0fd20a4c6d610b3dd0c"></a>

### [`00846560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846560.md) → [`0084750c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/0084750c.md) FUN_0084750c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 1件 [`00b3bf04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf04.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 1件 [`00b3cef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cef8.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0084658c",
      "incomplete_value": true,
      "site": "00846590",
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
            "const:20:8"
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
      "definition_site": "008465f4",
      "incomplete_value": true,
      "site": "008465f8",
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
    "ordinal": 17,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00847610",
      "incomplete_value": true,
      "site": "00847614",
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
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 31,
    "slot": 1
  }
]
~~~


~~~diff
- 00846590 ["INT_ADD", "register:40f0:8", ["const:846590:8", "const:4:8"]]
- 00846590 ["CALL", null, ["callee:00b3cef8:8"]]
+ 0084753c ["INT_ADD", "register:40f0:8", ["const:84753c:8", "const:4:8"]]
+ 0084753c ["CALL", null, ["callee:00b3cef8:8"]]
- 008465f8 ["INT_ADD", "register:40f0:8", ["const:8465f8:8", "const:4:8"]]
- 008465f8 ["CALL", null, ["callee:00b3cef8:8"]]
+ 008475a4 ["INT_ADD", "register:40f0:8", ["const:8475a4:8", "const:4:8"]]
+ 008475a4 ["CALL", null, ["callee:00b3cef8:8"]]
- 00846668 ["INT_ADD", "register:40f0:8", ["const:846668:8", "const:4:8"]]
- 00846668 ["CALL", null, ["callee:00b3cef8:8"]]
+ 00847614 ["INT_ADD", "register:40f0:8", ["const:847614:8", "const:4:8"]]
+ 00847614 ["CALL", null, ["callee:00b3cef8:8"]]
~~~


<a id="compare-e5ed63c029a6f3f56b0476294ebdfc27"></a>

### [`008466c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/008466c4.md) → [`00847670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847670.md) FUN_00847670

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 2件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.81% / 新版 69.81%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0084674c",
      "incomplete_value": true,
      "site": "00846750",
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
                "register:40b0:8"
              ],
              [
                "leaf",
                "const:d0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:100:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 00846750 ["INT_ADD", "register:40f0:8", ["const:846750:8", "const:4:8"]]
- 00846750 ["CALL", null, ["callee:0046f258:8"]]
+ 008476fc ["INT_ADD", "register:40f0:8", ["const:8476fc:8", "const:4:8"]]
+ 008476fc ["CALL", null, ["callee:0046f258:8"]]
- 00846718 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00846718 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00846718 ["INT_ADD", "register:4040:8", ["register:4040:8", "const:a0:8"]]
- 00846718 ["STORE", null, ["const:1b1:8", "register:4040:8", "tmp:1:8"]]
- 0084671c ["COPY", "tmp:0:8", ["const:0:8"]]
- 0084671c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 0084671c ["COPY", "tmp:2:8", ["register:4040:8"]]
- 0084671c ["INT_ADD", "tmp:3:8", ["register:4000:8", "const:90:8"]]
~~~


<a id="compare-275ad361b228996645e5c08d613c7ddd"></a>

### [`00846924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846924.md) → [`008478d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/008478d0.md) FUN_008478d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008472f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008472f4.md) · 呼出先 5件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008482a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008482a0.md) · 呼出先 5件 [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`0078e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e0e0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00847968",
      "incomplete_value": true,
      "site": "0084796c",
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
    "old": null,
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00847964",
      "incomplete_value": true,
      "site": "0084796c",
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
    "old": null,
    "ordinal": 7,
    "slot": 2
  }
]
~~~


~~~diff
- 008469c0 ["INT_ADD", "register:40f0:8", ["const:8469c0:8", "const:4:8"]]
- 008469c0 ["CALL", null, ["callee:00676e50:8"]]
+ 0084796c ["INT_ADD", "register:40f0:8", ["const:84796c:8", "const:4:8"]]
+ 0084796c ["CALL", null, ["callee:00676e50:8"]]
- 00846960 ["COPY", "register:0:8", ["register:4040:8"]]
- 00846960 ["INT_ADD", "register:40f0:8", ["const:846960:8", "const:4:8"]]
- 00846960 ["CALLIND", null, ["register:0:8"]]
+ 0084790c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0084790c ["INT_ADD", "register:40f0:8", ["const:84790c:8", "const:4:8"]]
+ 0084790c ["CALLIND", null, ["register:0:8"]]
- 00846970 ["INT_ADD", "register:40f0:8", ["const:846970:8", "const:4:8"]]
- 00846970 ["CALL", null, ["callee:00c58f50:8"]]
+ 0084791c ["INT_ADD", "register:40f0:8", ["const:84791c:8", "const:4:8"]]
+ 0084791c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-20216fb9723c9a44f8d488545790971a"></a>

### [`008469fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/008469fc.md) → [`008479a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/008479a8.md) FUN_008479a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 6件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`008689b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008689b8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 6件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00869964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869964.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008479c0",
      "incomplete_value": true,
      "site": "008479c4",
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
            "const:3e8:8"
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
      "definition_site": "008479b8",
      "incomplete_value": true,
      "site": "008479c4",
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
                "const:3f0:8"
              ]
            ]
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
- 00846a18 ["INT_ADD", "register:40f0:8", ["const:846a18:8", "const:4:8"]]
- 00846a18 ["CALL", null, ["callee:005c1b8c:8"]]
+ 008479c4 ["INT_ADD", "register:40f0:8", ["const:8479c4:8", "const:4:8"]]
+ 008479c4 ["CALL", null, ["callee:005c1b8c:8"]]
- 00846a20 ["BRANCH", null, ["local:b3:8"]]
+ 008479cc ["BRANCH", null, ["local:b2:8"]]
- 00846a2c ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 008479d8 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
~~~


<a id="compare-86d64959fdead8d7d0f5ee9d1aaaf0c5"></a>

### [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) → [`00847c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847c54.md) FUN_00847c54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 5件 [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) [`00868a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868a50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 5件 [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md) [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) [`0086806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/0086806c.md) [`008699fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008699fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00847cec",
      "incomplete_value": true,
      "site": "00847cf0",
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
            "const:7360:8"
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
      "unmatched:00846d18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847cdc"
      ]
    ]
  ],
  "added": [
    [
      "00847cc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847cdc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00846d44 ["INT_ADD", "register:40f0:8", ["const:846d44:8", "const:4:8"]]
- 00846d44 ["CALL", null, ["callee:008699fc:8"]]
+ 00847cf0 ["INT_ADD", "register:40f0:8", ["const:847cf0:8", "const:4:8"]]
+ 00847cf0 ["CALL", null, ["callee:008699fc:8"]]
- 00846ccc ["INT_ADD", "register:40f0:8", ["const:846ccc:8", "const:4:8"]]
- 00846ccc ["CALL", null, ["callee:006a2f80:8"]]
+ 00847c78 ["INT_ADD", "register:40f0:8", ["const:847c78:8", "const:4:8"]]
+ 00847c78 ["CALL", null, ["callee:006a2f80:8"]]
- 00846cd4 ["INT_ADD", "register:40f0:8", ["const:846cd4:8", "const:4:8"]]
- 00846cd4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00847c80 ["INT_ADD", "register:40f0:8", ["const:847c80:8", "const:4:8"]]
+ 00847c80 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ba7c3b3823693e6939c2a142a85773fa"></a>

### [`00846d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846d68.md) → [`00847d14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847d14.md) FUN_00847d14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 7件 [`005b9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f24.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`005d8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8ca4.md) [`00847734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847734.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 7件 [`005ba2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005ba2d4.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`005d9054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9054.md) [`008486e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008486e0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.47% / 新版 76.47%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00847d70",
      "incomplete_value": true,
      "site": "00847d74",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00846d68",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00846d6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00846d70",
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
      "00847d14",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00847d18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00847d1c",
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
- 00846dc8 ["INT_ADD", "register:40f0:8", ["const:846dc8:8", "const:4:8"]]
- 00846dc8 ["CALL", null, ["callee:00c58f20:8"]]
+ 00847d74 ["INT_ADD", "register:40f0:8", ["const:847d74:8", "const:4:8"]]
+ 00847d74 ["CALL", null, ["callee:00c58f20:8"]]
- 00846d68 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00846d68 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00846d68 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00846d68 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00846d6c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00846d6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-70612b401d4d47b33052814b3beaee3f"></a>

### [`00846ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ebc.md) → [`00847e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847e68.md) FUN_00847e68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 5件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 5件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00846f08",
      "incomplete_value": false,
      "site": "00846f0c",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "00846f04",
      "incomplete_value": true,
      "site": "00846f0c",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00846f88",
      "incomplete_value": false,
      "site": "00846f8c",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "unmatched:00846f10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847ed8"
      ]
    ],
    [
      "unmatched:00846f60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847f28"
      ]
    ],
    [
      "unmatched:00846f98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847f58"
      ]
    ]
  ],
  "added": [
    [
      "00847ebc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847ed8"
      ]
    ],
    [
      "00847f0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847f28"
      ]
    ],
    [
      "00847f44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847f58"
      ]
    ]
  ]
}
~~~


~~~diff
- 00846f0c ["INT_ADD", "register:40f0:8", ["const:846f0c:8", "const:4:8"]]
- 00846f0c ["CALL", null, ["callee:00c54d90:8"]]
+ 00847eb8 ["INT_ADD", "register:40f0:8", ["const:847eb8:8", "const:4:8"]]
+ 00847eb8 ["CALL", null, ["callee:00c54d90:8"]]
- 00846f8c ["INT_ADD", "register:40f0:8", ["const:846f8c:8", "const:4:8"]]
- 00846f8c ["CALL", null, ["callee:00c54d90:8"]]
+ 00847f38 ["INT_ADD", "register:40f0:8", ["const:847f38:8", "const:4:8"]]
+ 00847f38 ["CALL", null, ["callee:00c54d90:8"]]
- 00846ed0 ["INT_ADD", "register:40f0:8", ["const:846ed0:8", "const:4:8"]]
- 00846ed0 ["CALL", null, ["callee:0046ec04:8"]]
+ 00847e7c ["INT_ADD", "register:40f0:8", ["const:847e7c:8", "const:4:8"]]
+ 00847e7c ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-6132e01b5d73d59104c9632be523ca22"></a>

### [`00846ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ffc.md) → [`00847fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847fa8.md) FUN_00847fa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 3件 [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 3件 [`0078e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e0e0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.93% / 新版 70.93%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00847080",
      "incomplete_value": false,
      "site": "00847084",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "0084707c",
      "incomplete_value": true,
      "site": "00847084",
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
      "unmatched:00846ffc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00847000",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00847020",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847fe8"
      ]
    ]
  ],
  "added": [
    [
      "00847fa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00847fac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00847fcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00847fe8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00847084 ["INT_ADD", "register:40f0:8", ["const:847084:8", "const:4:8"]]
- 00847084 ["CALL", null, ["callee:00c54d90:8"]]
+ 00848030 ["INT_ADD", "register:40f0:8", ["const:848030:8", "const:4:8"]]
+ 00848030 ["CALL", null, ["callee:00c54d90:8"]]
- 00846ffc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00846ffc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00846ffc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00846ffc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00847000 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00847000 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00847000 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00847000 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


