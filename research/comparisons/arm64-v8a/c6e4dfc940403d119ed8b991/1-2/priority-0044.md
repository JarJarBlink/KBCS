# v16.0.2 → v16.0.3 · 最優先の変更候補 (44)

[一覧の目次](README.md)

<a id="compare-7af0c7d71cf60a4e6a5b11e8799a6ef6"></a>

### [`0079d944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d944.md) → [`0079dd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079dd20.md) FUN_0079dd20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.67% / 新版 96.67%

~~~diff
- 0079d9a4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0079d9a4 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 0079dd80 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0079dd80 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 0079d9b4 ["COPY", "register:0:8", ["register:4008:8"]]
- 0079d9b4 ["BRANCHIND", null, ["register:0:8"]]
- 0079d9b8 ["INT_ADD", "register:40f0:8", ["const:79d9b8:8", "const:4:8"]]
- 0079d9b8 ["CALL", null, ["callee:0045a0d4:8"]]
+ 0079dd94 ["INT_ADD", "register:40f0:8", ["const:79dd94:8", "const:4:8"]]
+ 0079dd94 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-89a138aa2501c3bca23013662d26e9de"></a>

### [`0079d9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d9ec.md) → [`0079ddc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079ddc8.md) FUN_0079ddc8

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
      "definition_site": "0079ddec",
      "incomplete_value": false,
      "site": "0079ddec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079da10",
      "incomplete_value": false,
      "site": "0079da10",
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
            "const:f38:8"
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
      "0079ddec",
      "DATA",
      [
        "storage",
        "00c79f38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079ddec",
      "DATA",
      [
        "storage",
        "00c7af08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079da00 ["INT_ADD", "register:40f0:8", ["const:79da00:8", "const:4:8"]]
- 0079da00 ["CALL", null, ["callee:00c58f30:8"]]
+ 0079dddc ["INT_ADD", "register:40f0:8", ["const:79dddc:8", "const:4:8"]]
+ 0079dddc ["CALL", null, ["callee:00c58f30:8"]]
- 0079da08 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0079dde4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0079da0c ["COPY", "tmp:0:8", ["const:f38:8"]]
- 0079da0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079da0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079da0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079dde8 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 0079dde8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079dde8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079dde8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-35557d440d6c2f2574123ce17af7c949"></a>

### [`0079da20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079da20.md) → [`0079ddfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079ddfc.md) FUN_0079ddfc

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
      "definition_site": "0079de08",
      "incomplete_value": false,
      "site": "0079de08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079da2c",
      "incomplete_value": false,
      "site": "0079da2c",
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
            "const:f38:8"
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
      "0079de08",
      "DATA",
      [
        "storage",
        "00c79f38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079de08",
      "DATA",
      [
        "storage",
        "00c7af08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079da24 ["COPY", "register:4048:8", ["const:c79000:8"]]
+ 0079de00 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 0079da28 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 0079da28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079da28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079da28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079de04 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 0079de04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079de04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079de04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a1c6b8daf488ed59ea8f36f3e4d53153"></a>

### [`0079da3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079da3c.md) → [`0079de18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079de18.md) FUN_0079de18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00768ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ee8.md) [`0079b2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b2d8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`007692c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/007692c4.md) [`0079b6b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079b/0079b6b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.18% / 新版 93.18%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0079de40",
      "value": [
        "leaf",
        "ram:7692c4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0079da64",
      "value": [
        "leaf",
        "ram:768ee8:8"
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
      "0079de40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768ee8"
      ]
    ],
    [
      "unmatched:0079da8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079de9c"
      ]
    ],
    [
      "unmatched:0079dabc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079dea8"
      ]
    ]
  ],
  "added": [
    [
      "0079de40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007692c4"
      ]
    ],
    [
      "0079de68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079de9c"
      ]
    ],
    [
      "0079de98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079dea8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079da64 ["INT_ADD", "register:40f0:8", ["const:79da64:8", "const:4:8"]]
- 0079da64 ["CALL", null, ["ram:768ee8:8"]]
+ 0079de40 ["INT_ADD", "register:40f0:8", ["const:79de40:8", "const:4:8"]]
+ 0079de40 ["CALL", null, ["ram:7692c4:8"]]
- 0079da5c ["INT_ADD", "register:40f0:8", ["const:79da5c:8", "const:4:8"]]
- 0079da5c ["CALL", null, ["callee:008524fc:8"]]
+ 0079de38 ["INT_ADD", "register:40f0:8", ["const:79de38:8", "const:4:8"]]
+ 0079de38 ["CALL", null, ["callee:008524fc:8"]]
- 0079da8c ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 0079da8c ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-8e36ce2512615cf8c41b3137ddb4b132"></a>

### [`0079db1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079db1c.md) → [`0079def8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079def8.md) FUN_0079def8

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
      "definition_site": "0079df1c",
      "incomplete_value": false,
      "site": "0079df1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079db40",
      "incomplete_value": false,
      "site": "0079db40",
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
            "const:fb8:8"
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
      "0079df1c",
      "DATA",
      [
        "storage",
        "00c79fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079df1c",
      "DATA",
      [
        "storage",
        "00c7af88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079db30 ["INT_ADD", "register:40f0:8", ["const:79db30:8", "const:4:8"]]
- 0079db30 ["CALL", null, ["callee:00c58f30:8"]]
+ 0079df0c ["INT_ADD", "register:40f0:8", ["const:79df0c:8", "const:4:8"]]
+ 0079df0c ["CALL", null, ["callee:00c58f30:8"]]
- 0079db38 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0079df14 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0079db3c ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 0079db3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079db3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079db3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079df18 ["COPY", "tmp:0:8", ["const:f88:8"]]
+ 0079df18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079df18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079df18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-96995180b648e8c3b2c3601aab1eec85"></a>

### [`0079db50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079db50.md) → [`0079df2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079df2c.md) FUN_0079df2c

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
      "definition_site": "0079df38",
      "incomplete_value": false,
      "site": "0079df38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079db5c",
      "incomplete_value": false,
      "site": "0079db5c",
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
            "const:fb8:8"
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
      "0079df38",
      "DATA",
      [
        "storage",
        "00c79fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079df38",
      "DATA",
      [
        "storage",
        "00c7af88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079db54 ["COPY", "register:4048:8", ["const:c79000:8"]]
+ 0079df30 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 0079db58 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 0079db58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079db58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079db58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079df34 ["COPY", "tmp:0:8", ["const:f88:8"]]
+ 0079df34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079df34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079df34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-648f199b9fe25f0ec39a021c2895a5e8"></a>

### [`0079dba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dba0.md) → [`0079df7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079df7c.md) FUN_0079df7c

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
      "definition_site": "0079dfa0",
      "incomplete_value": false,
      "site": "0079dfa0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dbc4",
      "incomplete_value": false,
      "site": "0079dbc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:48:8"
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
      "0079dfa0",
      "DATA",
      [
        "storage",
        "00c7a048",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dfa0",
      "DATA",
      [
        "storage",
        "00c7b018",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dbb4 ["INT_ADD", "register:40f0:8", ["const:79dbb4:8", "const:4:8"]]
- 0079dbb4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0079df90 ["INT_ADD", "register:40f0:8", ["const:79df90:8", "const:4:8"]]
+ 0079df90 ["CALL", null, ["callee:00c58f30:8"]]
- 0079dbbc ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079df98 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079dbc0 ["COPY", "tmp:0:8", ["const:48:8"]]
- 0079dbc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079dbc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079dbc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079df9c ["COPY", "tmp:0:8", ["const:18:8"]]
+ 0079df9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079df9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079df9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9f8ae6bfc32e22b52d5999871eb02733"></a>

### [`0079dbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dbd4.md) → [`0079dfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079dfb0.md) FUN_0079dfb0

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
      "unmatched:0079dbe0",
      "DATA",
      [
        "storage",
        "00c7a048",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dfbc",
      "DATA",
      [
        "storage",
        "00c7b018",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dbd4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0079dbd4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0079dbd8 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 0079dbdc ["COPY", "tmp:0:8", ["const:48:8"]]
- 0079dbdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079dbdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079dbdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7685147f632271dd12fbe8e72520bcee"></a>

### [`0079dbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dbf0.md) → [`0079dfcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079dfcc.md) FUN_0079dfcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0079dc04"
      ],
      [
        "FALL_THROUGH",
        "0079dfe0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0079dfe0",
      "incomplete_value": true,
      "site": "0079dfe4",
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
      "definition_site": "0079dc04",
      "incomplete_value": true,
      "site": "0079dc08",
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
      "unmatched:0079dc04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079dfe8"
      ]
    ]
  ],
  "added": [
    [
      "0079dfe0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079dfe8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dc04 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0079dc04 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0079dc10 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 0079dc10 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 0079dfec ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
+ 0079dfec ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 0079dc2c ["INT_NOTEQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 0079dc2c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0079e008 ["INT_NOTEQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
+ 0079e008 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-38c3ce1d3c836f867df6bd8b6a046037"></a>

### [`0079dc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dc98.md) → [`0079e074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e074.md) FUN_0079e074

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
      "unmatched:0079dcbc",
      "DATA",
      [
        "storage",
        "00c7a0c8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0079dcc0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079dcc4",
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
      "0079e098",
      "DATA",
      [
        "storage",
        "00c7b098",
        null,
        "undefined *"
      ]
    ],
    [
      "0079e09c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079e0a0",
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
- 0079dcac ["INT_ADD", "register:40f0:8", ["const:79dcac:8", "const:4:8"]]
- 0079dcac ["CALL", null, ["callee:00c58f30:8"]]
+ 0079e088 ["INT_ADD", "register:40f0:8", ["const:79e088:8", "const:4:8"]]
+ 0079e088 ["CALL", null, ["callee:00c58f30:8"]]
- 0079dcb4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079e090 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079dcb8 ["COPY", "tmp:0:8", ["const:c8:8"]]
- 0079dcb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079dcb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079dcb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2a36b0e888e57a33b051563d2945d4cd"></a>

### [`0079dccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dccc.md) → [`0079e0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e0a8.md) FUN_0079e0a8

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
      "definition_site": "0079e0b4",
      "incomplete_value": false,
      "site": "0079e0b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dcd8",
      "incomplete_value": false,
      "site": "0079dcd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:c8:8"
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
      "0079e0b4",
      "DATA",
      [
        "storage",
        "00c7a0c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e0b4",
      "DATA",
      [
        "storage",
        "00c7b098",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dcd0 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 0079e0ac ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 0079dcd4 ["COPY", "tmp:0:8", ["const:c8:8"]]
- 0079dcd4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079dcd4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079dcd4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079e0b0 ["COPY", "tmp:0:8", ["const:98:8"]]
+ 0079e0b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079e0b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079e0b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-000ea5aad621b92ecde5a4b96c9ac096"></a>

### [`0079dce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dce8.md) → [`0079e0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e0c4.md) FUN_0079e0c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 1件 [`0079c3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079c3f8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0079c7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079c/0079c7d4.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079dcec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0079c7d4"
      ]
    ]
  ],
  "added": [
    [
      "0079e0c8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0079c7d4"
      ]
    ]
  ]
}
~~~


<a id="compare-3355daf8d509f4d77df3f5ef70cd9f8d"></a>

### [`0079dd1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dd1c.md) → [`0079e0f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e0f8.md) FUN_0079e0f8

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
      "definition_site": "0079e11c",
      "incomplete_value": false,
      "site": "0079e11c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:128:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dd40",
      "incomplete_value": false,
      "site": "0079dd40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:158:8"
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
      "0079e11c",
      "DATA",
      [
        "storage",
        "00c7a158",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e11c",
      "DATA",
      [
        "storage",
        "00c7b128",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dd30 ["INT_ADD", "register:40f0:8", ["const:79dd30:8", "const:4:8"]]
- 0079dd30 ["CALL", null, ["callee:00c58f30:8"]]
+ 0079e10c ["INT_ADD", "register:40f0:8", ["const:79e10c:8", "const:4:8"]]
+ 0079e10c ["CALL", null, ["callee:00c58f30:8"]]
- 0079dd38 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079e114 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079dd3c ["COPY", "tmp:0:8", ["const:158:8"]]
- 0079dd3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079dd3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079dd3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079e118 ["COPY", "tmp:0:8", ["const:128:8"]]
+ 0079e118 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e118 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e118 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-49d693a0c26626174ae8c3b13f3fea57"></a>

### [`0079dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dd50.md) → [`0079e12c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e12c.md) FUN_0079e12c

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
      "definition_site": "0079e138",
      "incomplete_value": false,
      "site": "0079e138",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:128:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dd5c",
      "incomplete_value": false,
      "site": "0079dd5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:158:8"
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
      "0079e138",
      "DATA",
      [
        "storage",
        "00c7a158",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e138",
      "DATA",
      [
        "storage",
        "00c7b128",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dd54 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 0079e130 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 0079dd58 ["COPY", "tmp:0:8", ["const:158:8"]]
- 0079dd58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079dd58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079dd58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079e134 ["COPY", "tmp:0:8", ["const:128:8"]]
+ 0079e134 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079e134 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079e134 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7a2fea28935af3994e99d14c97df1c16"></a>

### [`0079de0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079de0c.md) → [`0079e1e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e1e8.md) FUN_0079e1e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079be60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079be60.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0079c23c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079c/0079c23c.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0079e24c",
      "incomplete_value": true,
      "site": "0079e250",
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0079e248",
      "incomplete_value": true,
      "site": "0079e250",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:0079de4c",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "0079e2e0",
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
      "0079e228",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "0079e2e0",
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
- 0079de74 ["INT_ADD", "register:40f0:8", ["const:79de74:8", "const:4:8"]]
- 0079de74 ["CALL", null, ["callee:00598230:8"]]
+ 0079e250 ["INT_ADD", "register:40f0:8", ["const:79e250:8", "const:4:8"]]
+ 0079e250 ["CALL", null, ["callee:00598230:8"]]
- 0079de3c ["INT_ADD", "register:40f0:8", ["const:79de3c:8", "const:4:8"]]
- 0079de3c ["CALL", null, ["callee:00c58f30:8"]]
+ 0079e218 ["INT_ADD", "register:40f0:8", ["const:79e218:8", "const:4:8"]]
+ 0079e218 ["CALL", null, ["callee:00c58f30:8"]]
- 0079de40 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 0079e21c ["COPY", "register:4040:8", ["const:c71000:8"]]
~~~


<a id="compare-42b797219ac866826c463a1192d43d35"></a>

### [`0079df84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079df84.md) → [`0079e360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e360.md) FUN_0079e360

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079df84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079df88",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079dfac",
      "DATA",
      [
        "storage",
        "00c7a1d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e360",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079e364",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079e388",
      "DATA",
      [
        "storage",
        "00c7b1a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079df84 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079df84 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079df84 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0079df84 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079df88 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0079df88 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0079df88 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0079df88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0079df8c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-2e10cfa66c827b6e000ffb9a4b6ec0f8"></a>

### [`0079e0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e0a0.md) → [`0079e47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e47c.md) FUN_0079e47c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.34% / 新版 72.34%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0079e524",
      "incomplete_value": true,
      "site": "0079e534",
      "value": [
        "live",
        "register:4098:8"
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
        "CONDITIONAL_JUMP",
        "0079e11c"
      ],
      [
        "CONDITIONAL_JUMP",
        "0079e4f8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0079e4f4",
      "incomplete_value": true,
      "site": "0079e518",
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
      "site": "0079e13c",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 9,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079e0a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079e0a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079e0a8",
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
      "0079e47c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0079e480",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079e484",
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
- 0079e0a0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079e0a0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079e0a0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0079e0a0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079e0a4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0079e0a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0079e0a8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0079e0a8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0079e0a8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0079e0a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f43092741f8098bc97d8b9a74056a32e"></a>

### [`0079e3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e3b8.md) → [`0079e794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e794.md) FUN_0079e794

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 80.65% / 新版 80.65%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0079e80c",
      "incomplete_value": false,
      "site": "0079e810",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "0079e808",
      "incomplete_value": true,
      "site": "0079e810",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0079e7d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0079e498"
      ]
    ],
    [
      "unmatched:0079e418",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0079e498"
      ]
    ],
    [
      "0079e804",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079e84c"
      ]
    ]
  ],
  "added": [
    [
      "0079e7d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079e874"
      ]
    ],
    [
      "0079e7f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079e874"
      ]
    ],
    [
      "0079e804",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079e818"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e434 ["INT_ADD", "register:40f0:8", ["const:79e434:8", "const:4:8"]]
- 0079e434 ["CALL", null, ["callee:00c54d90:8"]]
+ 0079e810 ["INT_ADD", "register:40f0:8", ["const:79e810:8", "const:4:8"]]
+ 0079e810 ["CALL", null, ["callee:00c54d90:8"]]
- 0079e3e4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 0079e3e4 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 0079e7c0 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 0079e7c0 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 0079e3f0 ["INT_ADD", "register:40f0:8", ["const:79e3f0:8", "const:4:8"]]
- 0079e3f0 ["CALL", null, ["callee:00c54d60:8"]]
+ 0079e7cc ["INT_ADD", "register:40f0:8", ["const:79e7cc:8", "const:4:8"]]
+ 0079e7cc ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-f871cd0510daf8bdec6fe1046edcda93"></a>

### [`0079e4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e4fc.md) → [`0079e8d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e8d8.md) FUN_0079e8d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0079e514",
      "incomplete_value": false,
      "site": "0079e518",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "0079e510",
      "incomplete_value": true,
      "site": "0079e518",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079e4fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079e500",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079e538",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0079e8d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079e8dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079e914",
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
- 0079e518 ["INT_ADD", "register:40f0:8", ["const:79e518:8", "const:4:8"]]
- 0079e518 ["CALL", null, ["callee:00c54d90:8"]]
+ 0079e8f4 ["INT_ADD", "register:40f0:8", ["const:79e8f4:8", "const:4:8"]]
+ 0079e8f4 ["CALL", null, ["callee:00c54d90:8"]]
- 0079e4fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079e4fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079e4fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0079e4fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079e500 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0079e500 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-0751c53f7f2613ba7df71fe3b3f6961e"></a>

### [`0079e54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e54c.md) → [`0079e928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e928.md) FUN_0079e928

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 76.47% / 新版 76.47%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079e934",
      "incomplete_value": false,
      "site": "0079e940",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:228:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e558",
      "incomplete_value": false,
      "site": "0079e564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "0079e940",
      "DATA",
      [
        "storage",
        "00c7a258",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e940",
      "DATA",
      [
        "storage",
        "00c7b228",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e554 ["COPY", "register:4050:8", ["const:c7a000:8"]]
+ 0079e930 ["COPY", "register:4050:8", ["const:c7b000:8"]]
- 0079e558 ["COPY", "tmp:0:8", ["const:258:8"]]
- 0079e558 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0079e558 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0079e558 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0079e934 ["COPY", "tmp:0:8", ["const:228:8"]]
+ 0079e934 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0079e934 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0079e934 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0079e56c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0079e56c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 0079e948 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0079e948 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-867a6e155492e37bc71a81c005d50f2e"></a>

### [`0079e590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e590.md) → [`0079e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e96c.md) FUN_0079e96c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.57% / 新版 69.57%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079e590",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079e594",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079e990",
      "DATA",
      [
        "storage",
        "00c7a258",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e96c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079e970",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079e990",
      "DATA",
      [
        "storage",
        "00c7b228",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e590 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079e590 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079e590 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0079e590 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079e594 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0079e594 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0079e598 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-00a8f681191fef01bfcd7e26f9ca6161"></a>

### [`0079e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e5ec.md) → [`0079e9c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079e9c8.md) FUN_0079e9c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0079ea2c",
      "incomplete_value": true,
      "site": "0079ea38",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:0079e618",
      "DATA",
      [
        "storage",
        "00c7a258",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e9f4",
      "DATA",
      [
        "storage",
        "00c7b228",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e600 ["INT_ADD", "register:40f0:8", ["const:79e600:8", "const:4:8"]]
- 0079e600 ["CALL", null, ["callee:00c58f30:8"]]
+ 0079e9dc ["INT_ADD", "register:40f0:8", ["const:79e9dc:8", "const:4:8"]]
+ 0079e9dc ["CALL", null, ["callee:00c58f30:8"]]
- 0079e60c ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079e9e8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079e610 ["COPY", "tmp:0:8", ["const:258:8"]]
- 0079e610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f0e1e89f4f269a3c3ae5e47a9cc854fa"></a>

### [`0079e674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e674.md) → [`0079ea50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079ea50.md) FUN_0079ea50

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
        "0079e694"
      ],
      [
        "CONDITIONAL_JUMP",
        "0079ea70"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0079ea70",
      "incomplete_value": true,
      "site": "0079ea98",
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
      "definition_site": "0079e694",
      "incomplete_value": true,
      "site": "0079e6bc",
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
      "unmatched:0079e690",
      "DATA",
      [
        "storage",
        "00c7a258",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0079e694",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079ea98"
      ]
    ]
  ],
  "added": [
    [
      "0079ea6c",
      "DATA",
      [
        "storage",
        "00c7b228",
        null,
        "undefined *"
      ]
    ],
    [
      "0079ea70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079ea98"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e688 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 0079ea64 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 0079e68c ["COPY", "tmp:0:8", ["const:258:8"]]
- 0079e68c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079e68c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079e68c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0079e690 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 0079e690 ["COPY", "tmp:1:8", ["register:4008:8"]]
- 0079e690 ["INT_ADD", "register:4008:8", ["register:4008:8", "const:10:8"]]
- 0079e690 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-d2440c66b1b3bfe3cd69841cb3999f2a"></a>

### [`0079e720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e720.md) → [`0079eafc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079eafc.md) FUN_0079eafc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0079be60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079be60.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0079c23c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079c/0079c23c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079e73c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079eb28"
      ]
    ]
  ],
  "added": [
    [
      "0079eb18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079eb28"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e734 ["COPY", "tmp:0:8", ["const:10:8"]]
- 0079e734 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079e734 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079e734 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0079e738 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 0079e738 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 0079e738 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 0079e738 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 0079e73c ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-a0a0d8dfad1612dfd29c39700ea3031e"></a>

### [`0079e7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e7b8.md) → [`0079eb94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079eb94.md) FUN_0079eb94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0079a9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a9e8.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0079adc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079a/0079adc4.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.42% / 新版 84.42%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079e7bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079e7c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079e7c4",
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
      "0079eb98",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0079eb9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0079eba0",
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
- 0079e7b8 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 0079e7bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079e7bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079e7bc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0079e7bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0079e7c0 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 0079e7c0 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 0079e7c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0079e7c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2147b048fd3c8fd057cdd1b975fa788a"></a>

### [`0079e930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e930.md) → [`0079ed0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079ed0c.md) FUN_0079ed0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.11% / 新版 86.11%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079e958",
      "DATA",
      [
        "storage",
        "00c7a2d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079ed34",
      "DATA",
      [
        "storage",
        "00c7b2a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e944 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079ed20 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079e948 ["COPY", "tmp:0:8", ["const:2d8:8"]]
- 0079e948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079e94c ["COPY", "tmp:0:8", ["const:40:8"]]
- 0079e94c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079e94c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079e94c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-6339a6878e1027445c5a579e2713676a"></a>

### [`0079e9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e9c0.md) → [`0079ed9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079ed9c.md) FUN_0079ed9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079edb4",
      "incomplete_value": false,
      "site": "0079edc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e9d8",
      "incomplete_value": false,
      "site": "0079e9e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
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
      "0079edc4",
      "DATA",
      [
        "storage",
        "00c7a2d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079edc4",
      "DATA",
      [
        "storage",
        "00c7b2a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e9d4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079edb0 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079e9d8 ["COPY", "tmp:0:8", ["const:2d8:8"]]
- 0079e9d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e9d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e9d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079edb4 ["COPY", "tmp:0:8", ["const:2a8:8"]]
+ 0079edb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079edb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079edb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079ea0c ["COPY", "register:0:8", ["register:4040:8"]]
- 0079ea0c ["INT_ADD", "register:40f0:8", ["const:79ea0c:8", "const:4:8"]]
- 0079ea0c ["CALLIND", null, ["register:0:8"]]
+ 0079ede8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079ede8 ["INT_ADD", "register:40f0:8", ["const:79ede8:8", "const:4:8"]]
+ 0079ede8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9e5d10e8f154512c3a8da62347626bdd"></a>

### [`0079ea4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ea4c.md) → [`0079ee28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079ee28.md) FUN_0079ee28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.60% / 新版 76.60%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079ea4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079ea50",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079ea54",
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
      "0079ee28",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0079ee2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079ee30",
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
- 0079ea4c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079ea4c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079ea4c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0079ea4c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079ea50 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0079ea50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0079ea54 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0079ea54 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0079ea54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0079ea54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4fe0682efb9f6e38f5ff2a95c05c1a2b"></a>

### [`0079eb54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079eb54.md) → [`0079ef30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079e/0079ef30.md) FUN_0079ef30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0079eb80"
      ],
      [
        "CONDITIONAL_JUMP",
        "0079ef5c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0079ef5c",
      "incomplete_value": true,
      "site": "0079ef88",
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
      "definition_site": "0079eb80",
      "incomplete_value": true,
      "site": "0079ebac",
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
      "unmatched:0079eb54",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079eb58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079eb5c",
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
      "0079ef30",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0079ef34",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079ef38",
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
- 0079eb54 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079eb54 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079eb54 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0079eb54 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079eb58 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0079eb58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0079eb5c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0079eb5c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0079eb5c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0079eb5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-dba7403a2e993cbaf422146082c8a982"></a>

### [`0079ece4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ece4.md) → [`0079f0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f0c0.md) FUN_0079f0c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0079a9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a9e8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0079adc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079a/0079adc4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079ed04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f0f0"
      ]
    ]
  ],
  "added": [
    [
      "0079f0e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f0f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079ecf8 ["COPY", "tmp:0:8", ["const:40:8"]]
- 0079ecf8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079ecf8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079ecf8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0079ecfc ["COPY", "tmp:0:8", ["const:10:8"]]
- 0079ecfc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079ecfc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079ecfc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0079ed00 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 0079ed00 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 0079ed00 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 0079ed00 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-4890ae2622e813b97d5070c25e80bb10"></a>

### [`0079ed64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ed64.md) → [`0079f140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f140.md) FUN_0079f140

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0079f170",
      "incomplete_value": true,
      "site": "0079f178",
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
      "unmatched:0079ed68",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079ed6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079edfc",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0079f144",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0079f148",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079f1d8",
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
- 0079ed9c ["INT_ADD", "register:40f0:8", ["const:79ed9c:8", "const:4:8"]]
- 0079ed9c ["CALL", null, ["callee:00c54d60:8"]]
+ 0079f178 ["INT_ADD", "register:40f0:8", ["const:79f178:8", "const:4:8"]]
+ 0079f178 ["CALL", null, ["callee:00c54d60:8"]]
- 0079ed64 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 0079ed68 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079ed68 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079ed68 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0079ed68 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-cffa7b6b7701c93569bc91d9e7db0788"></a>

### [`0079ee90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ee90.md) → [`0079f26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f26c.md) FUN_0079f26c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079eea0 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 0079eea0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0079f27c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 0079f27c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0079eeac ["INT_ADD", "register:40f0:8", ["const:79eeac:8", "const:4:8"]]
- 0079eeac ["CALL", null, ["callee:00c54d90:8"]]
+ 0079f288 ["INT_ADD", "register:40f0:8", ["const:79f288:8", "const:4:8"]]
+ 0079f288 ["CALL", null, ["callee:00c54d90:8"]]
- 0079eeb0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0079eeb0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0079f28c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0079f28c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-89257632c386c1f01572af9e3d76b827"></a>

### [`0079eee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079eee0.md) → [`0079f2bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f2bc.md) FUN_0079f2bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079eef8",
      "DATA",
      [
        "storage",
        "00c7a358",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0079eefc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f2e8"
      ]
    ]
  ],
  "added": [
    [
      "0079f2d4",
      "DATA",
      [
        "storage",
        "00c7b328",
        null,
        "undefined *"
      ]
    ],
    [
      "0079f2d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f2e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079eee0 ["COPY", "register:4040:8", ["register:4000:8"]]
- 0079eee4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 0079eee4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 0079eee8 ["COPY", "register:4050:8", ["const:c7a000:8"]]
~~~


<a id="compare-a3ab2e4d907a748f2b2cc03e99d403fa"></a>

### [`0079ef24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ef24.md) → [`0079f300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f300.md) FUN_0079f300

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.91% / 新版 73.91%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079ef48",
      "DATA",
      [
        "storage",
        "00c7a358",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0079ef4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f338"
      ]
    ],
    [
      "unmatched:0079ef6c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0079f324",
      "DATA",
      [
        "storage",
        "00c7b328",
        null,
        "undefined *"
      ]
    ],
    [
      "0079f328",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f338"
      ]
    ],
    [
      "0079f348",
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
- 0079ef38 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079f314 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079ef3c ["COPY", "tmp:0:8", ["const:358:8"]]
- 0079ef3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079ef3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079ef3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079ef40 ["COPY", "tmp:0:8", ["const:10:8"]]
- 0079ef40 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079ef40 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079ef40 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-fc4cd13b1da831884dae5d8d8a7abdcf"></a>

### [`0079ef80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ef80.md) → [`0079f35c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f35c.md) FUN_0079f35c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 79.31% / 新版 79.31%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "0079efe4",
      "incomplete_value": true,
      "site": "0079eff0",
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
      "unmatched:0079ef80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079ef84",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079efac",
      "DATA",
      [
        "storage",
        "00c7a358",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f35c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079f360",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079f388",
      "DATA",
      [
        "storage",
        "00c7b328",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079ef80 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079ef80 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079ef80 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0079ef80 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079ef84 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0079ef84 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0079ef84 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0079ef84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0079ef88 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-79d0597387f685e04050ad7217dd283c"></a>

### [`0079f008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f008.md) → [`0079f3e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f3e4.md) FUN_0079f3e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079f024",
      "DATA",
      [
        "storage",
        "00c7a358",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f400",
      "DATA",
      [
        "storage",
        "00c7b328",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f01c ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 0079f3f8 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 0079f020 ["COPY", "tmp:0:8", ["const:358:8"]]
- 0079f020 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079f020 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079f020 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0079f024 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 0079f024 ["COPY", "tmp:1:8", ["register:4008:8"]]
- 0079f024 ["INT_ADD", "register:4008:8", ["register:4008:8", "const:10:8"]]
- 0079f024 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-7189e4073096722c649a265f816e71e8"></a>

### [`0079f0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f0b4.md) → [`0079f490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f490.md) FUN_0079f490

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0079a9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a9e8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0079adc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079a/0079adc4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079f0d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f4bc"
      ]
    ],
    [
      "unmatched:0079f0f0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0079f4ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f4bc"
      ]
    ],
    [
      "0079f4cc",
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
- 0079f0c8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 0079f0c8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079f0c8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079f0c8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0079f0cc ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 0079f0cc ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 0079f0cc ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 0079f0cc ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 0079f0d0 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
~~~


<a id="compare-4010830fb325af9e7fe004b6a4392aa8"></a>

### [`0079f14c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f14c.md) → [`0079f528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f528.md) FUN_0079f528

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0079b424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b424.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0079b800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079b/0079b800.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0079f210",
      "incomplete_value": true,
      "site": "0079f218",
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
      "unmatched:0079f150",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079f154",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079f158",
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
      "0079f52c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0079f530",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0079f534",
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
- 0079f218 ["INT_ADD", "register:40f0:8", ["const:79f218:8", "const:4:8"]]
- 0079f218 ["CALL", null, ["callee:00c54d60:8"]]
+ 0079f5f4 ["INT_ADD", "register:40f0:8", ["const:79f5f4:8", "const:4:8"]]
+ 0079f5f4 ["CALL", null, ["callee:00c54d60:8"]]
- 0079f14c ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 0079f150 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079f150 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079f150 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0079f150 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d02242c61aa42e86c1fb5556e38b3aba"></a>

### [`0079f2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f2c4.md) → [`0079f6a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f6a0.md) FUN_0079f6a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079f2ec",
      "DATA",
      [
        "storage",
        "00c7a3d8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0079f2f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f6dc"
      ]
    ]
  ],
  "added": [
    [
      "0079f6c8",
      "DATA",
      [
        "storage",
        "00c7b3a8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079f6cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f6dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f2d8 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079f6b4 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079f2dc ["COPY", "tmp:0:8", ["const:3d8:8"]]
- 0079f2dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079f2dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079f2dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079f2e0 ["COPY", "tmp:0:8", ["const:40:8"]]
- 0079f2e0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079f2e0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079f2e0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-fe618d0414637a38881a3e31ca4eead3"></a>

### [`0079f354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f354.md) → [`0079f730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f730.md) FUN_0079f730

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.86% / 新版 82.86%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079f37c",
      "DATA",
      [
        "storage",
        "00c7a3d8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0079f380",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f76c"
      ]
    ]
  ],
  "added": [
    [
      "0079f758",
      "DATA",
      [
        "storage",
        "00c7b3a8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079f75c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079f76c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f368 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079f744 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079f36c ["COPY", "tmp:0:8", ["const:3d8:8"]]
- 0079f36c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079f36c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079f36c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079f370 ["COPY", "tmp:0:8", ["const:40:8"]]
- 0079f370 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079f370 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079f370 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-046febbe2c9e5672e7ccc3431ebac4dd"></a>

### [`0079f3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f3e0.md) → [`0079f7bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079f7bc.md) FUN_0079f7bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.47% / 新版 74.47%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0079f420"
      ],
      [
        "CONDITIONAL_JUMP",
        "0079f7fc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0079f7f8",
      "incomplete_value": true,
      "site": "0079f818",
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
      "definition_site": "0079f41c",
      "incomplete_value": true,
      "site": "0079f43c",
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
      "unmatched:0079f3e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079f3e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079f3e8",
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
      "0079f7bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0079f7c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079f7c4",
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
- 0079f3e0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079f3e0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079f3e0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0079f3e0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079f3e4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0079f3e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0079f3e8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0079f3e8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0079f3e8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0079f3e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-48171563ad29b8b22f5f0291f6144fe9"></a>

### [`0079f678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f678.md) → [`0079fa54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fa54.md) FUN_0079fa54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0079b424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b424.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0079b800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079b/0079b800.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079f698",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fa84"
      ]
    ],
    [
      "unmatched:0079f6e4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0079fa74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fa84"
      ]
    ],
    [
      "0079fac0",
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
- 0079f68c ["COPY", "tmp:0:8", ["const:40:8"]]
- 0079f68c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079f68c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079f68c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0079f690 ["COPY", "tmp:0:8", ["const:10:8"]]
- 0079f690 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079f690 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079f690 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0079f694 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 0079f694 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 0079f694 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 0079f694 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-187a749a4cfebc51582530f717aec41f"></a>

### [`0079f6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f6f8.md) → [`0079fad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fad4.md) FUN_0079fad4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 98.39% / 新版 98.39%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0079fb18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fb58"
      ]
    ],
    [
      "0079fb34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fb58"
      ]
    ],
    [
      "0079fb44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fbb4"
      ]
    ]
  ],
  "added": [
    [
      "0079fb18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fbb4"
      ]
    ],
    [
      "0079fb34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fbb4"
      ]
    ],
    [
      "0079fb44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fb58"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f730 ["INT_ADD", "register:40f0:8", ["const:79f730:8", "const:4:8"]]
- 0079f730 ["CALL", null, ["callee:00c54d60:8"]]
+ 0079fb0c ["INT_ADD", "register:40f0:8", ["const:79fb0c:8", "const:4:8"]]
+ 0079fb0c ["CALL", null, ["callee:00c54d60:8"]]
- 0079f734 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 0079f734 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0079fb10 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 0079fb10 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 0079f73c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0079f73c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 0079fb18 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0079fb18 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
~~~


<a id="compare-0ed2958139e5d208d4d5e2679ab4477a"></a>

### [`0079f83c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f83c.md) → [`0079fc18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fc18.md) FUN_0079fc18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0079fc30",
      "incomplete_value": false,
      "site": "0079fc34",
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
      "definition_site": "0079fc2c",
      "incomplete_value": true,
      "site": "0079fc34",
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
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 0079f858 ["INT_ADD", "register:40f0:8", ["const:79f858:8", "const:4:8"]]
- 0079f858 ["CALL", null, ["callee:00c54d90:8"]]
+ 0079fc34 ["INT_ADD", "register:40f0:8", ["const:79fc34:8", "const:4:8"]]
+ 0079fc34 ["CALL", null, ["callee:00c54d90:8"]]
- 0079f84c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 0079f84c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0079fc28 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 0079fc28 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 0079f85c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0079f85c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0079fc38 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0079fc38 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-59dfcacfd4a41bdbeca3de09e7f86bf0"></a>

### [`0079f88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f88c.md) → [`0079fc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fc68.md) FUN_0079fc68

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
      "unmatched:0079f8a4",
      "DATA",
      [
        "storage",
        "00c7a458",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0079f8a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fc94"
      ]
    ]
  ],
  "added": [
    [
      "0079fc80",
      "DATA",
      [
        "storage",
        "00c7b428",
        null,
        "undefined *"
      ]
    ],
    [
      "0079fc84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fc94"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f88c ["COPY", "register:4040:8", ["register:4000:8"]]
- 0079f890 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 0079f890 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 0079f894 ["COPY", "register:4050:8", ["const:c7a000:8"]]
~~~


<a id="compare-fc48ac05c61e989187bee231262488cd"></a>

### [`0079f8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f8d0.md) → [`0079fcac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fcac.md) FUN_0079fcac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 52.17% / 新版 52.17%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079f8d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079f8d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079f8f4",
      "DATA",
      [
        "storage",
        "00c7a458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079fcac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079fcb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079fcd0",
      "DATA",
      [
        "storage",
        "00c7b428",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f8d0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079f8d0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079f8d0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0079f8d0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079f8d4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0079f8d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0079f8d8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-a74c7fcc684205d96f59ccbffc6445a9"></a>

### [`0079f92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f92c.md) → [`0079fd08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fd08.md) FUN_0079fd08

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
      "definition_site": "0079fd34",
      "incomplete_value": false,
      "site": "0079fd34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f958",
      "incomplete_value": false,
      "site": "0079f958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:458:8"
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
      "0079fd34",
      "DATA",
      [
        "storage",
        "00c7a458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079fd34",
      "DATA",
      [
        "storage",
        "00c7b428",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f940 ["INT_ADD", "register:40f0:8", ["const:79f940:8", "const:4:8"]]
- 0079f940 ["CALL", null, ["callee:00c58f30:8"]]
+ 0079fd1c ["INT_ADD", "register:40f0:8", ["const:79fd1c:8", "const:4:8"]]
+ 0079fd1c ["CALL", null, ["callee:00c58f30:8"]]
- 0079f94c ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 0079fd28 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 0079f950 ["COPY", "tmp:0:8", ["const:458:8"]]
- 0079f950 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079f950 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079f950 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079fd2c ["COPY", "tmp:0:8", ["const:428:8"]]
+ 0079fd2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079fd2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079fd2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-11f6bd1ab7d04ca721e128de5e817de0"></a>

### [`0079f9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f9b4.md) → [`0079fd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fd90.md) FUN_0079fd90

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
      "definition_site": "0079fdac",
      "incomplete_value": false,
      "site": "0079fdac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f9d0",
      "incomplete_value": false,
      "site": "0079f9d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:458:8"
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
      "0079fdac",
      "DATA",
      [
        "storage",
        "00c7a458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079fdac",
      "DATA",
      [
        "storage",
        "00c7b428",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f9c8 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 0079fda4 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 0079f9cc ["COPY", "tmp:0:8", ["const:458:8"]]
- 0079f9cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079f9cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079f9cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079fda8 ["COPY", "tmp:0:8", ["const:428:8"]]
+ 0079fda8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079fda8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079fda8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0079f9f0 ["COPY", "register:0:8", ["register:4048:8"]]
- 0079f9f0 ["INT_ADD", "register:40f0:8", ["const:79f9f0:8", "const:4:8"]]
- 0079f9f0 ["CALLIND", null, ["register:0:8"]]
+ 0079fdcc ["COPY", "register:0:8", ["register:4048:8"]]
+ 0079fdcc ["INT_ADD", "register:40f0:8", ["const:79fdcc:8", "const:4:8"]]
+ 0079fdcc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3b110a956b4e1a823780f1b94f81e069"></a>

### [`0079fa60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079fa60.md) → [`0079fe3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fe3c.md) FUN_0079fe3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0079b424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b424.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0079b800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079b/0079b800.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 55.00% / 新版 55.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079fa60",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079fa64",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079fa7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fe68"
      ]
    ]
  ],
  "added": [
    [
      "0079fe3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0079fe40",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079fe58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fe68"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079fa60 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0079fa60 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0079fa60 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0079fa60 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0079fa64 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0079fa64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0079fa68 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-3618a22ef4fb0230b4d17cbca03e1e98"></a>

### [`0079fab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079fab0.md) → [`0079fe8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fe8c.md) FUN_0079fe8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0079fab4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0079fac4"
      ]
    ],
    [
      "unmatched:0079fac4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079facc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0045a0d4"
      ]
    ]
  ],
  "added": [
    [
      "0079fe90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0079fea0"
      ]
    ],
    [
      "0079fea0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0079fea8",
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
- 0079fab0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 0079fab0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 0079fab4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0079fab4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0079fab8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 0079fab8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3739d2924c887c6f905e82ecc9b0d649"></a>

### [`0079faf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079faf8.md) → [`0079fed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079f/0079fed4.md) _INIT_142

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 79.10% / 新版 79.10%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a0028",
      "incomplete_value": true,
      "site": "007a0034",
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
      "definition_site": "007a002c",
      "incomplete_value": true,
      "site": "007a0034",
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
    "new": {
      "definition_site": "007a0038",
      "incomplete_value": true,
      "site": "007a0048",
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
      "unmatched:0079fb28",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0079fb34",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0079fb50",
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
      "0079ff04",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0079ff10",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0079ff2c",
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
- 0079fc58 ["INT_ADD", "register:40f0:8", ["const:79fc58:8", "const:4:8"]]
- 0079fc58 ["CALL", null, ["callee:0043bb58:8"]]
+ 007a0034 ["INT_ADD", "register:40f0:8", ["const:7a0034:8", "const:4:8"]]
+ 007a0034 ["CALL", null, ["callee:0043bb58:8"]]
- 0079fc6c ["INT_ADD", "register:40f0:8", ["const:79fc6c:8", "const:4:8"]]
- 0079fc6c ["CALL", null, ["callee:0043bb58:8"]]
+ 007a0048 ["INT_ADD", "register:40f0:8", ["const:7a0048:8", "const:4:8"]]
+ 007a0048 ["CALL", null, ["callee:0043bb58:8"]]
- 0079fc80 ["INT_ADD", "register:40f0:8", ["const:79fc80:8", "const:4:8"]]
- 0079fc80 ["CALL", null, ["callee:0043bb58:8"]]
+ 007a005c ["INT_ADD", "register:40f0:8", ["const:7a005c:8", "const:4:8"]]
+ 007a005c ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-d31d06c270f39afb06b7af40d31a0389"></a>

### [`0079fea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079fea0.md) → [`007a027c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a027c.md) FUN_007a027c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00797bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/00797bcc.md) · 呼出先 5件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`00481168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481168.md) [`00481280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481280.md)
- 新版 呼出元 1件 [`00797fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00797/00797fa8.md) · 呼出先 5件 [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md) [`00481488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481488.md) [`004815a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004815a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.93% / 新版 95.93%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a0300",
      "incomplete_value": true,
      "site": "007a0304",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "007a02fc",
      "incomplete_value": true,
      "site": "007a0304",
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
            "const:20:8"
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
      "definition_site": "0079ff84",
      "incomplete_value": true,
      "site": "0079ff88",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:0079ff04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a0384"
      ]
    ]
  ],
  "added": [
    [
      "007a02e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a0384"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079ff28 ["INT_ADD", "register:40f0:8", ["const:79ff28:8", "const:4:8"]]
- 0079ff28 ["CALL", null, ["callee:00481488:8"]]
+ 007a0304 ["INT_ADD", "register:40f0:8", ["const:7a0304:8", "const:4:8"]]
+ 007a0304 ["CALL", null, ["callee:00481488:8"]]
- 0079ff88 ["INT_ADD", "register:40f0:8", ["const:79ff88:8", "const:4:8"]]
- 0079ff88 ["CALL", null, ["callee:00481188:8"]]
+ 007a0364 ["INT_ADD", "register:40f0:8", ["const:7a0364:8", "const:4:8"]]
+ 007a0364 ["CALL", null, ["callee:00481188:8"]]
- 0079ffbc ["INT_ADD", "register:40f0:8", ["const:79ffbc:8", "const:4:8"]]
- 0079ffbc ["CALL", null, ["callee:00480ef0:8"]]
+ 007a0398 ["INT_ADD", "register:40f0:8", ["const:7a0398:8", "const:4:8"]]
+ 007a0398 ["CALL", null, ["callee:00480ef0:8"]]
~~~


<a id="compare-88e784fa6c0be99b85a80750023ad40a"></a>

### [`007a008c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a008c.md) → [`007a0468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0468.md) FUN_007a0468

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00797bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/00797bd4.md) · 呼出先 17件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`0048080c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/0048080c.md)
- 新版 呼出元 1件 [`00797fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00797/00797fb0.md) · 呼出先 17件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md) [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md) [`00480b2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480b2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.64% / 新版 90.64%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 3件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a05f4",
      "incomplete_value": true,
      "site": "007a05f8",
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
                "const:b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a06cc",
      "incomplete_value": true,
      "site": "007a06d0",
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
                "register:4098:8"
              ],
              "INT_LEFT"
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
      "definition_site": "007a02f0",
      "incomplete_value": true,
      "site": "007a02f4",
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
            "const:2:8"
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
      "definition_site": "007a07f8",
      "incomplete_value": true,
      "site": "007a07fc",
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
                "const:60:8"
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
    "ordinal": 27,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007a00b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x150]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a00c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a00e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x148]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007a0494",
      "WRITE",
      [
        "storage",
        "Stack[-0x150]",
        null,
        null
      ]
    ],
    [
      "007a049c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "007a04bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x148]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007a021c ["INT_ADD", "register:40f0:8", ["const:7a021c:8", "const:4:8"]]
- 007a021c ["CALL", null, ["callee:00c58f50:8"]]
+ 007a05f8 ["INT_ADD", "register:40f0:8", ["const:7a05f8:8", "const:4:8"]]
+ 007a05f8 ["CALL", null, ["callee:00c58f50:8"]]
- 007a02f4 ["INT_ADD", "register:40f0:8", ["const:7a02f4:8", "const:4:8"]]
- 007a02f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007a06d0 ["INT_ADD", "register:40f0:8", ["const:7a06d0:8", "const:4:8"]]
+ 007a06d0 ["CALL", null, ["callee:00c58f30:8"]]
- 007a0420 ["INT_ADD", "register:40f0:8", ["const:7a0420:8", "const:4:8"]]
- 007a0420 ["CALL", null, ["callee:005979bc:8"]]
+ 007a07fc ["INT_ADD", "register:40f0:8", ["const:7a07fc:8", "const:4:8"]]
+ 007a07fc ["CALL", null, ["callee:005979bc:8"]]
~~~


<a id="compare-93f5d122caddbc81f015e1c9d93076e2"></a>

### [`007a1b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1b08.md) → [`007a1ee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a1/007a1ee4.md) FUN_007a1ee4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007a1928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1928.md) [`007a1c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1c9c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`007a1d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a1/007a1d04.md) [`007a2078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2078.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a1ef0",
      "incomplete_value": false,
      "site": "007a1ef4",
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
      "definition_site": "007a1b14",
      "incomplete_value": false,
      "site": "007a1b18",
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
      "007a1ef0",
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
      "007a1ef0",
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
- 007a1b18 ["INT_ADD", "register:40f0:8", ["const:7a1b18:8", "const:4:8"]]
- 007a1b18 ["CALL", null, ["callee:0043bad8:8"]]
+ 007a1ef4 ["INT_ADD", "register:40f0:8", ["const:7a1ef4:8", "const:4:8"]]
+ 007a1ef4 ["CALL", null, ["callee:0043bad8:8"]]
- 007a1b10 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 007a1eec ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007a1b14 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007a1b14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007a1b14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007a1b14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007a1ef0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 007a1ef0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007a1ef0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007a1ef0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d67778ca6481f4f0ef491afc89a2afab"></a>

### [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) → [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) FUN_007a2438

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007a1168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1168.md) [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 19件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md)
- 新版 呼出元 2件 [`007a1544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a1/007a1544.md) [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) · 呼出先 19件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.74% / 新版 89.74%

優先判定に残った影響 `call_argument_candidate` 10件, `store_condition` 12件, `unresolved_branch_alignment` 23件, `unresolved_call_alignment` 19件, `unresolved_store_alignment` 27件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a2f6c",
      "incomplete_value": true,
      "site": "007a2f7c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 66,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a2f70",
      "incomplete_value": true,
      "site": "007a2f7c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 66,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a2f40",
      "incomplete_value": true,
      "site": "007a2f44",
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
                "const:88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 90,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007a26b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007a3280"
      ]
    ],
    [
      "007a2a50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007a32bc"
      ]
    ],
    [
      "007a2ad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007a2708"
      ]
    ]
  ],
  "added": [
    [
      "007a26b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a365c"
      ]
    ],
    [
      "007a2a50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a3698"
      ]
    ],
    [
      "007a2ad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a2ae4"
      ]
    ]
  ]
}
~~~


~~~diff
- 007a2ba0 ["INT_ADD", "register:40f0:8", ["const:7a2ba0:8", "const:4:8"]]
- 007a2ba0 ["CALL", null, ["callee:00c590a0:8"]]
+ 007a2f7c ["INT_ADD", "register:40f0:8", ["const:7a2f7c:8", "const:4:8"]]
+ 007a2f7c ["CALL", null, ["callee:00c590a0:8"]]
- 007a2c48 ["BRANCH", null, ["local:b228:8"]]
+ 007a3024 ["BRANCH", null, ["local:b233:8"]]
- 007a2db0 ["INT_ADD", "register:40f0:8", ["const:7a2db0:8", "const:4:8"]]
- 007a2db0 ["CALL", null, ["callee:0043be80:8"]]
+ 007a318c ["INT_ADD", "register:40f0:8", ["const:7a318c:8", "const:4:8"]]
+ 007a318c ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-cc1e0c547644206ed0b278d9e574798f"></a>

### [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md) → [`007a39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a39ac.md) FUN_007a39ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a3760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a3760.md) [`007a4234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a4/007a4234.md) [`007a5298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a5/007a5298.md) [`007a6180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a6/007a6180.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 8件 [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) [`007a3b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a3b3c.md) [`007a4610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a4/007a4610.md) [`007a5674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a5/007a5674.md) [`007a655c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a6/007a655c.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 65.00% / 新版 65.00%

優先判定に残った影響 `store_condition` 11件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007a368c"
      ],
      [
        "FALL_THROUGH",
        "007a3a68"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007a3a68",
      "incomplete_value": true,
      "site": "007a3a6c",
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
      "definition_site": "007a368c",
      "incomplete_value": true,
      "site": "007a3690",
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
                "register:40d0:8"
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
    "ordinal": 33,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007a368c"
      ],
      [
        "FALL_THROUGH",
        "007a3a68"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007a3a68",
      "incomplete_value": true,
      "site": "007a3a74",
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
      "definition_site": "007a368c",
      "incomplete_value": true,
      "site": "007a3698",
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
                "register:40d0:8"
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
    "ordinal": 34,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007a368c"
      ],
      [
        "FALL_THROUGH",
        "007a3a68"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007a3a68",
      "incomplete_value": true,
      "site": "007a3a74",
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
      "definition_site": "007a368c",
      "incomplete_value": true,
      "site": "007a3698",
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
                "register:40d0:8"
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
    "ordinal": 35,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007a35d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a35d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a35dc",
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
      "007a39b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007a39b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007a39b8",
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
- 007a35d0 ["INT_SUB", "register:8:8", ["register:8:8", "const:c0:8"]]
- 007a35d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007a35d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007a35d4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 007a35d4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007a35d8 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 007a35d8 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 007a35d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 007a35d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ea66cb491fb0e754b5b27f0afd1e8e1b"></a>

### [`007a3760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a3760.md) → [`007a3b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a3b3c.md) FUN_007a3b3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a838c.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)
- 新版 呼出元 2件 [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) [`007a8768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a8/007a8768.md) · 呼出先 11件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`007a39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a39ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.30% / 新版 85.30%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 7件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 28件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a3a1c",
      "incomplete_value": true,
      "site": "007a3a30",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a3a20",
      "incomplete_value": true,
      "site": "007a3a30",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 18,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a3e84",
      "incomplete_value": true,
      "site": "007a3e88",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 50,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007a37b8",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a37c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a37c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a4228"
      ]
    ]
  ],
  "added": [
    [
      "007a3b94",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "007a3b9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ],
    [
      "007a3ba0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a3bb8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007a3948 ["INT_ADD", "register:40f0:8", ["const:7a3948:8", "const:4:8"]]
- 007a3948 ["CALL", null, ["callee:00c58f50:8"]]
+ 007a3d24 ["INT_ADD", "register:40f0:8", ["const:7a3d24:8", "const:4:8"]]
+ 007a3d24 ["CALL", null, ["callee:00c58f50:8"]]
- 007a3a30 ["INT_ADD", "register:40f0:8", ["const:7a3a30:8", "const:4:8"]]
- 007a3a30 ["CALL", null, ["callee:00c590a0:8"]]
+ 007a3e0c ["INT_ADD", "register:40f0:8", ["const:7a3e0c:8", "const:4:8"]]
+ 007a3e0c ["CALL", null, ["callee:00c590a0:8"]]
- 007a3ac0 ["INT_ADD", "register:40f0:8", ["const:7a3ac0:8", "const:4:8"]]
- 007a3ac0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007a3e9c ["INT_ADD", "register:40f0:8", ["const:7a3e9c:8", "const:4:8"]]
+ 007a3e9c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-99229db4d91b72316c9efeefe94acb4d"></a>

### [`007a4234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a4/007a4234.md) → [`007a4610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a4/007a4610.md) FUN_007a4610

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)
- 新版 呼出元 1件 [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) · 呼出先 11件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`007a39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a39ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.30% / 新版 93.30%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 8件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a43dc",
      "incomplete_value": true,
      "site": "007a43e0",
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
            "const:48:8"
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
      "definition_site": "007a43d8",
      "incomplete_value": true,
      "site": "007a43e0",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a43d8",
      "incomplete_value": true,
      "site": "007a43e0",
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
                "const:50:8"
              ]
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
      "unmatched:007a4290",
      "WRITE",
      [
        "storage",
        "Stack[-0x378]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a4294",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a46a4"
      ]
    ],
    [
      "unmatched:007a430c",
      "WRITE",
      [
        "storage",
        "Stack[-0x3e0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007a466c",
      "WRITE",
      [
        "storage",
        "Stack[-0x378]",
        null,
        null
      ]
    ],
    [
      "007a4670",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a46a4"
      ]
    ],
    [
      "007a46e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x3e0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007a43e0 ["INT_ADD", "register:40f0:8", ["const:7a43e0:8", "const:4:8"]]
- 007a43e0 ["CALL", null, ["callee:0043be80:8"]]
+ 007a47bc ["INT_ADD", "register:40f0:8", ["const:7a47bc:8", "const:4:8"]]
+ 007a47bc ["CALL", null, ["callee:0043be80:8"]]
- 007a4738 ["INT_ADD", "register:40f0:8", ["const:7a4738:8", "const:4:8"]]
- 007a4738 ["CALL", null, ["callee:00c590a0:8"]]
+ 007a4b14 ["INT_ADD", "register:40f0:8", ["const:7a4b14:8", "const:4:8"]]
+ 007a4b14 ["CALL", null, ["callee:00c590a0:8"]]
- 007a480c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 007a480c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 007a480c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 007a480c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 007a4be8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 007a4be8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 007a4be8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 007a4be8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-29a962cad3771eb08a2a1227e6b46e19"></a>

### [`007a5298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a5/007a5298.md) → [`007a5674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a5/007a5674.md) FUN_007a5674

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a838c.md) [`007a8ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a8ec4.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)
- 新版 呼出元 3件 [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) [`007a8768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a8/007a8768.md) [`007a92a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a9/007a92a0.md) · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`007a39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a39ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.06% / 新版 92.06%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a57b4",
      "incomplete_value": true,
      "site": "007a57b8",
      "value": [
        "INT_OR",
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
    },
    "ordinal": 31,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a57fc",
      "incomplete_value": true,
      "site": "007a5800",
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
                "const:1d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a5be8",
      "incomplete_value": true,
      "site": "007a5bec",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 36,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007a53a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x108]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a53ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x118]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a53b0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "007a579c"
      ]
    ]
  ],
  "added": [
    [
      "007a5784",
      "WRITE",
      [
        "storage",
        "Stack[-0x108]",
        null,
        null
      ]
    ],
    [
      "007a5788",
      "WRITE",
      [
        "storage",
        "Stack[-0x118]",
        null,
        null
      ]
    ],
    [
      "007a578c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "007a579c"
      ]
    ]
  ]
}
~~~


~~~diff
- 007a54a4 ["INT_ADD", "register:40f0:8", ["const:7a54a4:8", "const:4:8"]]
- 007a54a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 007a5880 ["INT_ADD", "register:40f0:8", ["const:7a5880:8", "const:4:8"]]
+ 007a5880 ["CALL", null, ["callee:00c58f50:8"]]
- 007a57b8 ["INT_ADD", "register:40f0:8", ["const:7a57b8:8", "const:4:8"]]
- 007a57b8 ["CALL", null, ["callee:00597dec:8"]]
+ 007a5b94 ["INT_ADD", "register:40f0:8", ["const:7a5b94:8", "const:4:8"]]
+ 007a5b94 ["CALL", null, ["callee:00597dec:8"]]
- 007a5800 ["INT_ADD", "register:40f0:8", ["const:7a5800:8", "const:4:8"]]
- 007a5800 ["CALL", null, ["callee:00c58f50:8"]]
+ 007a5bdc ["INT_ADD", "register:40f0:8", ["const:7a5bdc:8", "const:4:8"]]
+ 007a5bdc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0f6d99071ce349b118ee864c6178a215"></a>

### [`007a6180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a6/007a6180.md) → [`007a655c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a6/007a655c.md) FUN_007a655c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)
- 新版 呼出元 1件 [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`007a39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a39ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 11件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 33件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a6254",
      "incomplete_value": true,
      "site": "007a625c",
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
            "const:48:8"
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
      "definition_site": "007a6250",
      "incomplete_value": true,
      "site": "007a625c",
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
      "definition_site": "007a6250",
      "incomplete_value": true,
      "site": "007a625c",
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
                "const:ffffffffffffffb0:8"
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
      "unmatched:007a6460",
      "WRITE",
      [
        "storage",
        "Stack[-0x280]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a6464",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007a6480"
      ]
    ],
    [
      "unmatched:007a646c",
      "READ",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007a683c",
      "WRITE",
      [
        "storage",
        "Stack[-0x280]",
        null,
        null
      ]
    ],
    [
      "007a6840",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a685c"
      ]
    ],
    [
      "007a6848",
      "READ",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007a625c ["INT_ADD", "register:40f0:8", ["const:7a625c:8", "const:4:8"]]
- 007a625c ["CALL", null, ["callee:0043be80:8"]]
+ 007a6638 ["INT_ADD", "register:40f0:8", ["const:7a6638:8", "const:4:8"]]
+ 007a6638 ["CALL", null, ["callee:0043be80:8"]]
- 007a67bc ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 007a67bc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 007a67bc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 007a67bc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 007a6b98 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 007a6b98 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 007a6b98 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 007a6b98 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 007a67c4 ["INT_ADD", "register:40f0:8", ["const:7a67c4:8", "const:4:8"]]
- 007a67c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 007a6ba0 ["INT_ADD", "register:40f0:8", ["const:7a6ba0:8", "const:4:8"]]
+ 007a6ba0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-449780aae5b5b4d8473c9730c6cabe87"></a>

### [`007a73e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a7/007a73e8.md) → [`007a77c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a7/007a77c4.md) FUN_007a77c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)
- 新版 呼出元 1件 [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`007a39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a39ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.27% / 新版 87.27%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 11件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 30件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a74e8",
      "incomplete_value": true,
      "site": "007a74f0",
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
      "definition_site": "007a74e8",
      "incomplete_value": true,
      "site": "007a74f0",
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
                "const:c8:8"
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
    "new": null,
    "old": {
      "definition_site": "007a7b74",
      "incomplete_value": true,
      "site": "007a7b88",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 45,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007a751c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a83ec"
      ]
    ],
    [
      "007a7ab0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007a76ec"
      ]
    ],
    [
      "unmatched:007a76e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x328]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007a78f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a83ec"
      ]
    ],
    [
      "007a7ab0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a7ac8"
      ]
    ],
    [
      "007a7abc",
      "WRITE",
      [
        "storage",
        "Stack[-0x328]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007a74f0 ["INT_ADD", "register:40f0:8", ["const:7a74f0:8", "const:4:8"]]
- 007a74f0 ["CALL", null, ["callee:0043be80:8"]]
+ 007a78cc ["INT_ADD", "register:40f0:8", ["const:7a78cc:8", "const:4:8"]]
+ 007a78cc ["CALL", null, ["callee:0043be80:8"]]
- 007a7540 ["INT_ADD", "register:40f0:8", ["const:7a7540:8", "const:4:8"]]
- 007a7540 ["CALL", null, ["callee:00c590a0:8"]]
+ 007a791c ["INT_ADD", "register:40f0:8", ["const:7a791c:8", "const:4:8"]]
+ 007a791c ["CALL", null, ["callee:00c590a0:8"]]
- 007a782c ["INT_ADD", "register:40f0:8", ["const:7a782c:8", "const:4:8"]]
- 007a782c ["CALL", null, ["callee:00c58f50:8"]]
+ 007a7c08 ["INT_ADD", "register:40f0:8", ["const:7a7c08:8", "const:4:8"]]
+ 007a7c08 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7b408db1df519ff5f25938c02a27e42c"></a>

### [`007a838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a838c.md) → [`007a8768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a8/007a8768.md) FUN_007a8768

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)
- 新版 呼出元 1件 [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) · 呼出先 13件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`007a39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a39ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.69% / 新版 94.69%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 20件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a8834",
      "incomplete_value": true,
      "site": "007a883c",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a8834",
      "incomplete_value": true,
      "site": "007a883c",
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
                "const:170:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a90c4",
      "incomplete_value": true,
      "site": "007a90c8",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007a8ce8",
      "incomplete_value": true,
      "site": "007a8cec",
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
                "register:40e8:8"
              ],
              [
                "leaf",
                "const:a0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "ordinal": 55,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007a84ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a87bc"
      ]
    ],
    [
      "unmatched:007a84e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x414]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a8520",
      "WRITE",
      [
        "storage",
        "Stack[-0x1e0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007a8888",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a87bc"
      ]
    ],
    [
      "007a88c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x414]",
        null,
        null
      ]
    ],
    [
      "007a88fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x1e0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007a83fc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007a83fc ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 007a87d8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007a87d8 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 007a883c ["INT_ADD", "register:40f0:8", ["const:7a883c:8", "const:4:8"]]
- 007a883c ["CALL", null, ["callee:0043be80:8"]]
+ 007a8c18 ["INT_ADD", "register:40f0:8", ["const:7a8c18:8", "const:4:8"]]
+ 007a8c18 ["CALL", null, ["callee:0043be80:8"]]
+ 007a8888 ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
~~~


<a id="compare-e2980e9b7ca55249c98d17856671dee4"></a>

### [`007a8ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a8ec4.md) → [`007a92a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a9/007a92a0.md) FUN_007a92a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a3760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a3760.md) [`007a838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a838c.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)
- 新版 呼出元 3件 [`007a2438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a2/007a2438.md) [`007a3b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a3b3c.md) [`007a8768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a8/007a8768.md) · 呼出先 11件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`007a39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a3/007a39ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.35% / 新版 76.35%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 4件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 26件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007a9030",
      "incomplete_value": true,
      "site": "007a9044",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "007a9034",
      "incomplete_value": true,
      "site": "007a9044",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a9554",
      "incomplete_value": true,
      "site": "007a9564",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "007a9354",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a988c"
      ]
    ],
    [
      "unmatched:007a8fc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x150]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a8fcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x160]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007a9354",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007a98b8"
      ]
    ],
    [
      "007a93a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x150]",
        null,
        null
      ]
    ],
    [
      "007a93a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x160]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007a9044 ["INT_ADD", "register:40f0:8", ["const:7a9044:8", "const:4:8"]]
- 007a9044 ["CALL", null, ["callee:00c590a0:8"]]
+ 007a9420 ["INT_ADD", "register:40f0:8", ["const:7a9420:8", "const:4:8"]]
+ 007a9420 ["CALL", null, ["callee:00c590a0:8"]]
- 007a90c0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007a90c0 ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
+ 007a949c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007a949c ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
- 007a9188 ["INT_ADD", "register:40f0:8", ["const:7a9188:8", "const:4:8"]]
- 007a9188 ["CALL", null, ["callee:00c590a0:8"]]
+ 007a9564 ["INT_ADD", "register:40f0:8", ["const:7a9564:8", "const:4:8"]]
+ 007a9564 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-71b7abe0c875a08b9a8bcdc2fc764196"></a>

### [`007a96f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a9/007a96f4.md) → [`007a9ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a9/007a9ad0.md) FUN_007a9ad0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007a4234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a4/007a4234.md) · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`007a4610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a4/007a4610.md) · 呼出先 9件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`007a0b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0b3c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 26件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a9b94",
      "incomplete_value": true,
      "site": "007a9b9c",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a9b94",
      "incomplete_value": true,
      "site": "007a9b9c",
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
                "register:40c8:8"
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
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007a9778"
      ],
      [
        "FALL_THROUGH",
        "007a9b54"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007a9b54",
      "incomplete_value": true,
      "site": "007a9b68",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SLESS",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ],
          [
            "INT_SBORROW",
            "1",
            [
              "INT_ADD",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007a9778",
      "incomplete_value": true,
      "site": "007a978c",
      "value": [
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
    },
    "ordinal": 15,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007a96f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a96f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007a96fc",
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
      "007a9ad0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "007a9ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007a9ad8",
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
- 007a97c0 ["INT_ADD", "register:40f0:8", ["const:7a97c0:8", "const:4:8"]]
- 007a97c0 ["CALL", null, ["callee:0043be80:8"]]
+ 007a9b9c ["INT_ADD", "register:40f0:8", ["const:7a9b9c:8", "const:4:8"]]
+ 007a9b9c ["CALL", null, ["callee:0043be80:8"]]
- 007a96f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007a96f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007a96f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 007a96f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007a96f8 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 007a96f8 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 007a96f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 007a96f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1cf7319241120501fc211cfb005b870e"></a>

### [`007aa440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa440.md) → [`007aa81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007aa/007aa81c.md) _INIT_143

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
      "definition_site": "007aa858",
      "incomplete_value": true,
      "site": "007aa874",
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
      "definition_site": "007aa47c",
      "incomplete_value": true,
      "site": "007aa498",
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
      "definition_site": "007aa87c",
      "incomplete_value": true,
      "site": "007aa898",
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
      "definition_site": "007aa4a0",
      "incomplete_value": true,
      "site": "007aa4bc",
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
      "definition_site": "007aa89c",
      "incomplete_value": true,
      "site": "007aa8b8",
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
      "definition_site": "007aa4c0",
      "incomplete_value": true,
      "site": "007aa4dc",
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
      "007aa858",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "007aa87c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "007aa89c",
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
      "007aa858",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "007aa87c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "007aa89c",
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
- 007aa5a0 ["INT_ADD", "register:40f0:8", ["const:7aa5a0:8", "const:4:8"]]
- 007aa5a0 ["CALL", null, ["callee:0043bb58:8"]]
+ 007aa97c ["INT_ADD", "register:40f0:8", ["const:7aa97c:8", "const:4:8"]]
+ 007aa97c ["CALL", null, ["callee:0043bb58:8"]]
- 007aa674 ["INT_ADD", "register:40f0:8", ["const:7aa674:8", "const:4:8"]]
- 007aa674 ["CALL", null, ["callee:00c58ed0:8"]]
+ 007aaa50 ["INT_ADD", "register:40f0:8", ["const:7aaa50:8", "const:4:8"]]
+ 007aaa50 ["CALL", null, ["callee:00c58ed0:8"]]
- 007aa468 ["COPY", "register:4098:8", ["const:ca8000:8"]]
+ 007aa844 ["COPY", "register:4098:8", ["const:ca9000:8"]]
~~~


<a id="compare-7d2fa032cccbffc68f159c89c40b2dd7"></a>

### [`007aa860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa860.md) → [`007aac3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007aa/007aac3c.md) FUN_007aac3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007ad8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad8a0.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`007aaa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aaa80.md) [`00aadffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aadffc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`007adcc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007adcc4.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`007aae5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007aa/007aae5c.md) [`00aaeff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aae/00aaeff0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007aaddc",
      "incomplete_value": false,
      "site": "007aade0",
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
      "definition_site": "007aaa00",
      "incomplete_value": false,
      "site": "007aaa04",
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
      "007aac9c",
      "READ",
      [
        "storage",
        "00ca8080",
        null,
        "undefined1"
      ]
    ],
    [
      "007aaca0",
      "READ",
      [
        "storage",
        "00ca8088",
        null,
        "undefined8"
      ]
    ],
    [
      "007aaca0",
      "READ",
      [
        "storage",
        "00ca8090",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "007aac9c",
      "READ",
      [
        "storage",
        "00ca9040",
        null,
        "undefined1"
      ]
    ],
    [
      "007aaca0",
      "READ",
      [
        "storage",
        "00ca9048",
        null,
        "undefined8"
      ]
    ],
    [
      "007aaca0",
      "READ",
      [
        "storage",
        "00ca9050",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aaa04 ["INT_ADD", "register:40f0:8", ["const:7aaa04:8", "const:4:8"]]
- 007aaa04 ["CALL", null, ["callee:00442c90:8"]]
+ 007aade0 ["INT_ADD", "register:40f0:8", ["const:7aade0:8", "const:4:8"]]
+ 007aade0 ["CALL", null, ["callee:00442c90:8"]]
- 007aa8a4 ["INT_ADD", "register:40f0:8", ["const:7aa8a4:8", "const:4:8"]]
- 007aa8a4 ["CALL", null, ["callee:007aae5c:8"]]
+ 007aac80 ["INT_ADD", "register:40f0:8", ["const:7aac80:8", "const:4:8"]]
+ 007aac80 ["CALL", null, ["callee:007aae5c:8"]]
- 007aa8b4 ["COPY", "register:4040:8", ["const:ca8000:8"]]
+ 007aac90 ["COPY", "register:4040:8", ["const:ca9000:8"]]
~~~


<a id="compare-bbfaea43630afea65b9d0fb275b1cc19"></a>

### [`007aaa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aaa80.md) → [`007aae5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007aa/007aae5c.md) FUN_007aae5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007aa860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa860.md) [`007aad5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aad5c.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 2件 [`007aac3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007aa/007aac3c.md) [`007ab138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ab/007ab138.md) · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination, store_value, unresolved_return_alignment

命令の説明率　旧版 87.31% / 新版 87.31%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 1件, `store_value` 4件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007aae90",
      "incomplete_value": false,
      "site": "007aae94",
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
      "definition_site": "007aaab4",
      "incomplete_value": false,
      "site": "007aaab8",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007aafd4",
      "incomplete_value": true,
      "site": "007aafd8",
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
      "definition_site": "007aabf8",
      "incomplete_value": true,
      "site": "007aabfc",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007aafd0",
      "incomplete_value": true,
      "site": "007aafdc",
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
      "definition_site": "007aabf4",
      "incomplete_value": true,
      "site": "007aac00",
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
      "007aae94",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "007aae9c",
      "PARAM",
      [
        "storage",
        "00ca80b8",
        null,
        "undefined1"
      ]
    ],
    [
      "007aaed4",
      "PARAM",
      [
        "storage",
        "00ca80a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007aae94",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "007aae9c",
      "PARAM",
      [
        "storage",
        "00ca9078",
        null,
        "undefined1"
      ]
    ],
    [
      "007aaed4",
      "PARAM",
      [
        "storage",
        "00ca9060",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007aaac8 ["INT_ADD", "register:40f0:8", ["const:7aaac8:8", "const:4:8"]]
- 007aaac8 ["CALL", null, ["callee:0048d1b4:8"]]
+ 007aaea4 ["INT_ADD", "register:40f0:8", ["const:7aaea4:8", "const:4:8"]]
+ 007aaea4 ["CALL", null, ["callee:0048d1b4:8"]]
- 007aab04 ["INT_ADD", "register:40f0:8", ["const:7aab04:8", "const:4:8"]]
- 007aab04 ["CALL", null, ["callee:00493168:8"]]
+ 007aaee0 ["INT_ADD", "register:40f0:8", ["const:7aaee0:8", "const:4:8"]]
+ 007aaee0 ["CALL", null, ["callee:00493168:8"]]
- 007aab88 ["INT_ADD", "register:40f0:8", ["const:7aab88:8", "const:4:8"]]
- 007aab88 ["CALL", null, ["callee:00494fdc:8"]]
+ 007aaf64 ["INT_ADD", "register:40f0:8", ["const:7aaf64:8", "const:4:8"]]
+ 007aaf64 ["CALL", null, ["callee:00494fdc:8"]]
~~~


<a id="compare-6f5eae9e6d2b143cc1e5f74bded8d67c"></a>

### [`007aad5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aad5c.md) → [`007ab138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ab/007ab138.md) FUN_007ab138

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007af050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af050.md) · 呼出先 8件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`007aaa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aaa80.md) [`00aadffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aadffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007af834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af834.md) · 呼出先 8件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`007aae5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007aa/007aae5c.md) [`00aaeff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aae/00aaeff0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.37% / 新版 95.37%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007aae64",
      "incomplete_value": true,
      "site": "007aae70",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "007aae68",
      "incomplete_value": true,
      "site": "007aae70",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007ab288",
      "incomplete_value": false,
      "site": "007ab28c",
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
      "definition_site": "007aaeac",
      "incomplete_value": false,
      "site": "007aaeb0",
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
      "unmatched:007aad80",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "007ab1a8",
      "PARAM",
      [
        "storage",
        "002bb770",
        null,
        "string"
      ]
    ],
    [
      "007ab1b4",
      "PARAM",
      [
        "storage",
        "002ab8d2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007ab15c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "007ab1a8",
      "PARAM",
      [
        "storage",
        "002bb84e",
        null,
        "string"
      ]
    ],
    [
      "007ab1b4",
      "PARAM",
      [
        "storage",
        "002ab99f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aae70 ["INT_ADD", "register:40f0:8", ["const:7aae70:8", "const:4:8"]]
- 007aae70 ["CALL", null, ["callee:00c590f0:8"]]
+ 007ab24c ["INT_ADD", "register:40f0:8", ["const:7ab24c:8", "const:4:8"]]
+ 007ab24c ["CALL", null, ["callee:00c590f0:8"]]
- 007aaeb0 ["INT_ADD", "register:40f0:8", ["const:7aaeb0:8", "const:4:8"]]
- 007aaeb0 ["CALL", null, ["callee:00442c90:8"]]
+ 007ab28c ["INT_ADD", "register:40f0:8", ["const:7ab28c:8", "const:4:8"]]
+ 007ab28c ["CALL", null, ["callee:00442c90:8"]]
- 007aad7c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 007aad7c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-25f30c52ac1ec3c31cc07e0703ba744a"></a>

### [`007aaf4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aaf4c.md) → [`007ab328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ab/007ab328.md) _INIT_144

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.97% / 新版 72.97%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 8件, `store_value` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007ab574",
      "incomplete_value": false,
      "site": "007ab574",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca9000:8"
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ab198",
      "incomplete_value": false,
      "site": "007ab198",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007ab580",
      "incomplete_value": false,
      "site": "007ab580",
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
                "const:ca9000:8"
              ],
              [
                "leaf",
                "const:40:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ab1a4",
      "incomplete_value": false,
      "site": "007ab1a4",
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
                "const:80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:5:8"
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007ab588",
      "incomplete_value": false,
      "site": "007ab588",
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
                "const:ca9000:8"
              ],
              [
                "leaf",
                "const:40:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ab1ac",
      "incomplete_value": false,
      "site": "007ab1ac",
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
                "const:80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1:8"
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007aaf7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:007aaf88",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007aafa4",
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
      "007ab358",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007ab364",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "007ab380",
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
- 007ab0ac ["INT_ADD", "register:40f0:8", ["const:7ab0ac:8", "const:4:8"]]
- 007ab0ac ["CALL", null, ["callee:0043bb58:8"]]
+ 007ab488 ["INT_ADD", "register:40f0:8", ["const:7ab488:8", "const:4:8"]]
+ 007ab488 ["CALL", null, ["callee:0043bb58:8"]]
- 007ab1bc ["INT_ADD", "register:40f0:8", ["const:7ab1bc:8", "const:4:8"]]
- 007ab1bc ["CALL", null, ["callee:00c58ed0:8"]]
+ 007ab598 ["INT_ADD", "register:40f0:8", ["const:7ab598:8", "const:4:8"]]
+ 007ab598 ["CALL", null, ["callee:00c58ed0:8"]]
- 007ab208 ["INT_ADD", "register:40f0:8", ["const:7ab208:8", "const:4:8"]]
- 007ab208 ["CALL", null, ["callee:00c58ed0:8"]]
+ 007ab5e4 ["INT_ADD", "register:40f0:8", ["const:7ab5e4:8", "const:4:8"]]
+ 007ab5e4 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-741b545dcf0d52e7b571048b67206e09"></a>

### [`007ab45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab45c.md) → [`007ab86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ab/007ab86c.md) FUN_007ab86c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00931218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931218.md) · 呼出先 6件 [`007ab7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab7ac.md) [`007ae7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae7cc.md) [`007ae8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae8a4.md) [`007ae8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae8a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009321c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009321c4.md) · 呼出先 6件 [`007abbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ab/007abbbc.md) [`007aefb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ae/007aefb0.md) [`007af088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af088.md) [`007af08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af08c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.81% / 新版 85.81%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ab94c",
      "incomplete_value": false,
      "site": "007ab950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ab53c",
      "incomplete_value": false,
      "site": "007ab540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
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
    "new": null,
    "old": {
      "definition_site": "007ab568",
      "incomplete_value": true,
      "site": "007ab57c",
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
            "const:20:8"
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
      "007ab950",
      "DATA",
      [
        "storage",
        "00c7a4d8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007ab588",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ab58c",
      "DATA",
      [
        "storage",
        "00c7a568",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ab950",
      "DATA",
      [
        "storage",
        "00c7b4a8",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab998",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "007ab99c",
      "DATA",
      [
        "storage",
        "00c7b538",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ab57c ["COPY", "register:0:8", ["register:4040:8"]]
- 007ab57c ["INT_ADD", "register:40f0:8", ["const:7ab57c:8", "const:4:8"]]
- 007ab57c ["CALLIND", null, ["register:0:8"]]
+ 007ab98c ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ab98c ["INT_ADD", "register:40f0:8", ["const:7ab98c:8", "const:4:8"]]
+ 007ab98c ["CALLIND", null, ["register:0:8"]]
- 007ab4b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 007ab4b4 ["INT_ADD", "register:40f0:8", ["const:7ab4b4:8", "const:4:8"]]
- 007ab4b4 ["CALLIND", null, ["register:0:8"]]
+ 007ab8c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ab8c4 ["INT_ADD", "register:40f0:8", ["const:7ab8c4:8", "const:4:8"]]
+ 007ab8c4 ["CALLIND", null, ["register:0:8"]]
- 007ab4ec ["COPY", "register:0:8", ["register:4040:8"]]
- 007ab4ec ["INT_ADD", "register:40f0:8", ["const:7ab4ec:8", "const:4:8"]]
- 007ab4ec ["CALLIND", null, ["register:0:8"]]
+ 007ab8fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ab8fc ["INT_ADD", "register:40f0:8", ["const:7ab8fc:8", "const:4:8"]]
+ 007ab8fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c8d1e3a28550b997d1a110467f918f8f"></a>

### [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) → [`007ac83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007ac83c.md) FUN_007ac83c

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492c40.md)
- 新版 呼出元 1件 [`00894dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894dc0.md) · 呼出先 15件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047cdec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047cdec.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00492f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492f60.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 56.73% / 新版 56.73%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 25件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007ac474",
      "incomplete_value": true,
      "site": "007ac478",
      "value": [
        "live",
        "register:4010:8"
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
      "definition_site": "007ac470",
      "incomplete_value": true,
      "site": "007ac478",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007ac8e8",
      "incomplete_value": true,
      "site": "007ac8ec",
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
      "unmatched:007ac41c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ac420",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ac424",
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
      "007ac840",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007ac844",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007ac848",
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
- 007ac478 ["INT_ADD", "register:40f0:8", ["const:7ac478:8", "const:4:8"]]
- 007ac478 ["CALL", null, ["callee:00494048:8"]]
+ 007ac89c ["INT_ADD", "register:40f0:8", ["const:7ac89c:8", "const:4:8"]]
+ 007ac89c ["CALL", null, ["callee:00494048:8"]]
- 007ac4c8 ["INT_ADD", "register:40f0:8", ["const:7ac4c8:8", "const:4:8"]]
- 007ac4c8 ["CALL", null, ["callee:0048d1b4:8"]]
+ 007ac8ec ["INT_ADD", "register:40f0:8", ["const:7ac8ec:8", "const:4:8"]]
+ 007ac8ec ["CALL", null, ["callee:0048d1b4:8"]]
- 007ac51c ["INT_ADD", "register:40f0:8", ["const:7ac51c:8", "const:4:8"]]
- 007ac51c ["CALL", null, ["callee:00493fe0:8"]]
+ 007ac940 ["INT_ADD", "register:40f0:8", ["const:7ac940:8", "const:4:8"]]
+ 007ac940 ["CALL", null, ["callee:00493fe0:8"]]
~~~


<a id="compare-d5c97d7bf4c9a0a7e6211c7e09beedf9"></a>

### [`007ac738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac738.md) → [`007acb5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007acb5c.md) FUN_007acb5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) · 呼出先 6件 [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) [`007aec94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec94.md) [`007aec98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec98.md) [`007aed18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed18.md) [`007aed1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed1c.md)
- 新版 呼出元 1件 [`007ac83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007ac83c.md) · 呼出先 6件 [`007ad7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007ad7a0.md) [`007af478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af478.md) [`007af47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af47c.md) [`007af4fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af4fc.md) [`007af500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af500.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.85% / 新版 78.85%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ac760",
      "DATA",
      [
        "storage",
        "00c7a668",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007ac760",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ac768",
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
      "007acb84",
      "DATA",
      [
        "storage",
        "00c7b638",
        null,
        "undefined *"
      ]
    ],
    [
      "007acb84",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "007acb8c",
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
- 007ac758 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007acb7c ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007ac75c ["COPY", "tmp:0:8", ["const:668:8"]]
- 007ac75c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ac75c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ac75c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ac760 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 007ac760 ["COPY", "tmp:1:8", ["register:4000:8"]]
- 007ac760 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 007ac760 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-dc17af757b709cfd4e1d07e026b2ef29"></a>

### [`007ac884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac884.md) → [`007acca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007acca8.md) FUN_007acca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00597698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597698.md)
- 新版 呼出元 1件 [`007ac83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007ac83c.md) · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`005979b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005979b8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.48% / 新版 83.48%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007accf0",
      "incomplete_value": true,
      "site": "007accf4",
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
                "const:d0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ac8cc",
      "incomplete_value": true,
      "site": "007ac8d0",
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
                "const:d0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:58:8"
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
      "unmatched:007ac888",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ac88c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ac8a4",
      "READ",
      [
        "storage",
        "002b40b6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007accac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007accb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007accc8",
      "READ",
      [
        "storage",
        "002b4194",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ac8d0 ["INT_ADD", "register:40f0:8", ["const:7ac8d0:8", "const:4:8"]]
- 007ac8d0 ["CALL", null, ["callee:0048d1b4:8"]]
+ 007accf4 ["INT_ADD", "register:40f0:8", ["const:7accf4:8", "const:4:8"]]
+ 007accf4 ["CALL", null, ["callee:0048d1b4:8"]]
- 007ac884 ["INT_SUB", "register:8:8", ["register:8:8", "const:f0:8"]]
- 007ac888 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007ac888 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007ac888 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:d0:8"]]
- 007ac888 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7e53036971460d078891bf3f3abbdcd4"></a>

### [`007acb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007acb24.md) → [`007acf48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007acf48.md) FUN_007acf48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) · 呼出先 17件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`00451a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451a18.md) [`0045be38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045b/0045be38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md)
- 新版 呼出元 1件 [`007ac83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007ac83c.md) · 呼出先 17件 [`00451afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451afc.md) [`00451d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451d38.md) [`0045c158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045c/0045c158.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 94.30% / 新版 94.30%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007acf94",
      "incomplete_value": false,
      "site": "007acf98",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007acb70",
      "incomplete_value": false,
      "site": "007acb74",
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
            "const:bb0:8"
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
      "definition_site": "007acfe4",
      "incomplete_value": true,
      "site": "007acff8",
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
                "const:3d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007acbc0",
      "incomplete_value": true,
      "site": "007acbd4",
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
                "const:38e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007acffc",
      "incomplete_value": true,
      "site": "007acffc",
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
      "definition_site": "007acbd8",
      "incomplete_value": true,
      "site": "007acbd8",
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
      "007acf98",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "007acfe4",
      "READ",
      [
        "storage",
        "002c038e",
        null,
        "string"
      ]
    ],
    [
      "007acff4",
      "READ",
      [
        "storage",
        "002c039c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007acf98",
      "DATA",
      [
        "storage",
        "00c64b80",
        null,
        "pointer"
      ]
    ],
    [
      "007acfe4",
      "READ",
      [
        "storage",
        "002c03d8",
        null,
        "string"
      ]
    ],
    [
      "007acff4",
      "READ",
      [
        "storage",
        "002c03e6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007acb58 ["INT_ADD", "register:40f0:8", ["const:7acb58:8", "const:4:8"]]
- 007acb58 ["CALL", null, ["callee:00c58f30:8"]]
+ 007acf7c ["INT_ADD", "register:40f0:8", ["const:7acf7c:8", "const:4:8"]]
+ 007acf7c ["CALL", null, ["callee:00c58f30:8"]]
- 007acb6c ["COPY", "register:4040:8", ["const:c63000:8"]]
+ 007acf90 ["COPY", "register:4040:8", ["const:c64000:8"]]
- 007acb70 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 007acb70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007acb70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007acb70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007acf94 ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 007acf94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007acf94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007acf94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aefaed2fb9ac3c640872ad70b6e00929"></a>

### [`007ad15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad15c.md) → [`007ad580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007ad580.md) FUN_007ad580

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 10件 [`00451a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451a18.md) [`00b0e9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0e9d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md)
- 新版 呼出元 1件 [`00898890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/00898890.md) · 呼出先 10件 [`00451d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451d38.md) [`00b0f9c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0f/00b0f9c4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59040.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 89.62% / 新版 89.62%

優先判定に残った影響 `store_destination` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007ad5d0",
      "incomplete_value": true,
      "site": "007ad5d4",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad1ac",
      "incomplete_value": true,
      "site": "007ad1b0",
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
            "const:40:8"
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
      "definition_site": "007ad5cc",
      "incomplete_value": true,
      "site": "007ad5d8",
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
              "LOAD",
              [
                "leaf",
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad1a8",
      "incomplete_value": true,
      "site": "007ad1b4",
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
              "LOAD",
              [
                "leaf",
                "const:8:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "007ad5e0",
      "incomplete_value": true,
      "site": "007ad5e0",
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
                "const:30:8"
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
      "definition_site": "007ad1bc",
      "incomplete_value": true,
      "site": "007ad1bc",
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
                "const:30:8"
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
      "007ad5bc",
      "READ",
      [
        "storage",
        "00c9ad58",
        null,
        "pointer"
      ]
    ],
    [
      "007ad5c0",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "007ad5cc",
      "READ",
      [
        "storage",
        "00c932d8",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "007ad5bc",
      "READ",
      [
        "storage",
        "00c9bd28",
        null,
        "pointer"
      ]
    ],
    [
      "007ad5c0",
      "READ",
      [
        "storage",
        "00c9bc58",
        null,
        "pointer"
      ]
    ],
    [
      "007ad5cc",
      "READ",
      [
        "storage",
        "00c942a8",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ad18c ["COPY", "register:40c0:8", ["const:c9a000:8"]]
+ 007ad5b0 ["COPY", "register:40c0:8", ["const:c9b000:8"]]
- 007ad190 ["COPY", "register:40b8:8", ["const:c9a000:8"]]
+ 007ad5b4 ["COPY", "register:40b8:8", ["const:c9b000:8"]]
- 007ad198 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:d58:8"]]
- 007ad198 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 007ad5bc ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:d28:8"]]
+ 007ad5bc ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6b7f45362d27a897a90a54963ef4f51e"></a>

### [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) → [`007ad7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007ad7a0.md) FUN_007ad7a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ac738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac738.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a59fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a59fc.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)
- 新版 呼出元 1件 [`007acb5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007acb5c.md) · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`005a5d1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5d1c.md) [`00796258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796258.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.08% / 新版 97.08%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ad85c",
      "incomplete_value": false,
      "site": "007ad860",
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
      "definition_site": "007ad438",
      "incomplete_value": false,
      "site": "007ad43c",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ad8ec",
      "incomplete_value": false,
      "site": "007ad8ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad4c8",
      "incomplete_value": false,
      "site": "007ad4c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ad9fc",
      "incomplete_value": false,
      "site": "007ad9fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad5d8",
      "incomplete_value": false,
      "site": "007ad5d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "007ad860",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "007ad8ec",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ],
    [
      "007ad960",
      "READ",
      [
        "storage",
        "00c7aa90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ad860",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ],
    [
      "007ad8ec",
      "DATA",
      [
        "storage",
        "00c7ba38",
        null,
        "undefined *"
      ]
    ],
    [
      "007ad960",
      "READ",
      [
        "storage",
        "00c7ba60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ad3b0 ["INT_ADD", "register:40f0:8", ["const:7ad3b0:8", "const:4:8"]]
- 007ad3b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007ad7d4 ["INT_ADD", "register:40f0:8", ["const:7ad7d4:8", "const:4:8"]]
+ 007ad7d4 ["CALL", null, ["callee:00c58f30:8"]]
- 007ad3dc ["INT_ADD", "register:40f0:8", ["const:7ad3dc:8", "const:4:8"]]
- 007ad3dc ["CALL", null, ["callee:0043be80:8"]]
+ 007ad800 ["INT_ADD", "register:40f0:8", ["const:7ad800:8", "const:4:8"]]
+ 007ad800 ["CALL", null, ["callee:0043be80:8"]]
- 007ad3e8 ["INT_ADD", "register:40f0:8", ["const:7ad3e8:8", "const:4:8"]]
- 007ad3e8 ["CALL", null, ["callee:005a5d1c:8"]]
+ 007ad80c ["INT_ADD", "register:40f0:8", ["const:7ad80c:8", "const:4:8"]]
+ 007ad80c ["CALL", null, ["callee:005a5d1c:8"]]
~~~


<a id="compare-d7f6cb858e3942e4e1b8cecf01f76a4f"></a>

### [`007ad8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad8a0.md) → [`007adcc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007adcc4.md) FUN_007adcc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007aec9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec9c.md) · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00493914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493914.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`007aa860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa860.md) [`007aed88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed88.md)
- 新版 呼出元 1件 [`007af480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af480.md) · 呼出先 10件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`00493c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493c34.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md) [`007aac3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007aa/007aac3c.md) [`007af56c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af56c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007add30",
      "incomplete_value": false,
      "site": "007add38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad90c",
      "incomplete_value": false,
      "site": "007ad914",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007add0c",
      "value": [
        "leaf",
        "ram:7647b8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ad8e8",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007add28",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ad904",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "007add0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "007add28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "007add38",
      "DATA",
      [
        "storage",
        "00c7a768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007add0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007647b8"
      ]
    ],
    [
      "007add28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "007add38",
      "DATA",
      [
        "storage",
        "00c7b738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ad8e8 ["INT_ADD", "register:40f0:8", ["const:7ad8e8:8", "const:4:8"]]
- 007ad8e8 ["CALL", null, ["ram:7643dc:8"]]
+ 007add0c ["INT_ADD", "register:40f0:8", ["const:7add0c:8", "const:4:8"]]
+ 007add0c ["CALL", null, ["ram:7647b8:8"]]
- 007ad904 ["INT_ADD", "register:40f0:8", ["const:7ad904:8", "const:4:8"]]
- 007ad904 ["CALL", null, ["ram:48cd38:8"]]
+ 007add28 ["INT_ADD", "register:40f0:8", ["const:7add28:8", "const:4:8"]]
+ 007add28 ["CALL", null, ["ram:48d058:8"]]
- 007ad8dc ["INT_ADD", "register:40f0:8", ["const:7ad8dc:8", "const:4:8"]]
- 007ad8dc ["CALL", null, ["callee:00aa4e88:8"]]
+ 007add00 ["INT_ADD", "register:40f0:8", ["const:7add00:8", "const:4:8"]]
+ 007add00 ["CALL", null, ["callee:00aa4e88:8"]]
~~~


<a id="compare-3ae482d09335fb1e38ce2e33379b5388"></a>

### [`007ad9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad9dc.md) → [`007ade00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007ade00.md) FUN_007ade00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007aed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed20.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00493914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493914.md)
- 新版 呼出元 1件 [`007af504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af504.md) · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493c34.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.64% / 新版 94.64%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007adfd4",
      "incomplete_value": false,
      "site": "007adfdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007adbb0",
      "incomplete_value": false,
      "site": "007adbb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007adf60",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007adb3c",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "007ade48",
      "PARAM",
      [
        "storage",
        "002b9380",
        null,
        "string"
      ]
    ],
    [
      "007ade6c",
      "PARAM",
      [
        "storage",
        "002b8536",
        null,
        "string"
      ]
    ],
    [
      "007ade78",
      "PARAM",
      [
        "storage",
        "002b77a9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007ade48",
      "PARAM",
      [
        "storage",
        "002b944f",
        null,
        "string"
      ]
    ],
    [
      "007ade6c",
      "PARAM",
      [
        "storage",
        "002b8605",
        null,
        "string"
      ]
    ],
    [
      "007ade78",
      "PARAM",
      [
        "storage",
        "002b7878",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007adb3c ["INT_ADD", "register:40f0:8", ["const:7adb3c:8", "const:4:8"]]
- 007adb3c ["CALL", null, ["ram:48cd38:8"]]
+ 007adf60 ["INT_ADD", "register:40f0:8", ["const:7adf60:8", "const:4:8"]]
+ 007adf60 ["CALL", null, ["ram:48d058:8"]]
- 007ada24 ["COPY", "tmp:0:8", ["const:380:8"]]
- 007ada24 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007ada24 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007ada24 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007ade48 ["COPY", "tmp:0:8", ["const:44f:8"]]
+ 007ade48 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007ade48 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007ade48 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 007ada48 ["COPY", "tmp:0:8", ["const:536:8"]]
- 007ada48 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007ada48 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007ada48 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007ade6c ["COPY", "tmp:0:8", ["const:605:8"]]
+ 007ade6c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007ade6c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007ade6c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-652d3d9a0fc619c9598676b3ba22addb"></a>

### [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) → [`007ae39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ae/007ae39c.md) FUN_007ae39c

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007addb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007addb0.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a5058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5058.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)
- 新版 呼出元 1件 [`007ae1d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ae/007ae1d4.md) · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`005a5378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5378.md) [`00796258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796258.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ae5f8",
      "incomplete_value": false,
      "site": "007ae5f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae1d0",
      "incomplete_value": false,
      "site": "007ae1d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007ae528",
      "incomplete_value": true,
      "site": "007ae534",
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
    "old": null,
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007ae294",
      "incomplete_value": false,
      "site": "007ae298",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "ordinal": 26,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007adfa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:007adfc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "007ae45c",
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
      "007ae3cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "007ae3ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "007ae45c",
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
- 007ae10c ["INT_ADD", "register:40f0:8", ["const:7ae10c:8", "const:4:8"]]
- 007ae10c ["CALL", null, ["callee:00598e94:8"]]
+ 007ae534 ["INT_ADD", "register:40f0:8", ["const:7ae534:8", "const:4:8"]]
+ 007ae534 ["CALL", null, ["callee:00598e94:8"]]
- 007ae298 ["INT_ADD", "register:40f0:8", ["const:7ae298:8", "const:4:8"]]
- 007ae298 ["CALL", null, ["callee:00c54d60:8"]]
+ 007ae6c0 ["INT_ADD", "register:40f0:8", ["const:7ae6c0:8", "const:4:8"]]
+ 007ae6c0 ["CALL", null, ["callee:00c54d60:8"]]
- 007adf88 ["COPY", "tmp:0:8", ["const:d0:8"]]
- 007adf88 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 007adf88 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 007adf88 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-8f245f9a7de3acf6d1402510aed82856"></a>

### [`007ae85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae85c.md) → [`007af040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af040.md) FUN_007af040

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
      "unmatched:007ae880",
      "DATA",
      [
        "storage",
        "00c7a568",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007ae884",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ae888",
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
      "007af064",
      "DATA",
      [
        "storage",
        "00c7b538",
        null,
        "undefined *"
      ]
    ],
    [
      "007af068",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007af06c",
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
- 007ae870 ["INT_ADD", "register:40f0:8", ["const:7ae870:8", "const:4:8"]]
- 007ae870 ["CALL", null, ["callee:00c58f30:8"]]
+ 007af054 ["INT_ADD", "register:40f0:8", ["const:7af054:8", "const:4:8"]]
+ 007af054 ["CALL", null, ["callee:00c58f30:8"]]
- 007ae878 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007af05c ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007ae87c ["COPY", "tmp:0:8", ["const:568:8"]]
- 007ae87c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae87c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae87c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f99a44c38626dd0963de5b04328f5f9e"></a>

### [`007ae890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae890.md) → [`007af074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af074.md) FUN_007af074

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
      "definition_site": "007af080",
      "incomplete_value": false,
      "site": "007af080",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae89c",
      "incomplete_value": false,
      "site": "007ae89c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:568:8"
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
      "007af080",
      "DATA",
      [
        "storage",
        "00c7a568",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af080",
      "DATA",
      [
        "storage",
        "00c7b538",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae894 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007af078 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007ae898 ["COPY", "tmp:0:8", ["const:568:8"]]
- 007ae898 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ae898 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ae898 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007af07c ["COPY", "tmp:0:8", ["const:538:8"]]
+ 007af07c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007af07c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007af07c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b4324feadb60ec81e40006f62dc77848"></a>

### [`007ae8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae8ac.md) → [`007af090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af090.md) FUN_007af090

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00493914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493914.md) [`007ae9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9e8.md) [`007ae9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9ec.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`00493c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493c34.md) [`007af1cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af1cc.md) [`007af1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af1d0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ae8c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:007ae8d8",
      "DATA",
      [
        "storage",
        "00c7a5e8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007ae8d8",
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
      "007af0ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "007af0bc",
      "DATA",
      [
        "storage",
        "00c7b5b8",
        null,
        "undefined *"
      ]
    ],
    [
      "007af0bc",
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
- 007ae8c8 ["INT_ADD", "register:40f0:8", ["const:7ae8c8:8", "const:4:8"]]
- 007ae8c8 ["CALL", null, ["ram:48cd38:8"]]
- 007ae8cc ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007ae8d0 ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 007ae8d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae8d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae8d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9f836a480a1a349e4e2923c046e35ce8"></a>

### [`007ae9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9b4.md) → [`007af198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af198.md) FUN_007af198

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
      "unmatched:007ae9cc",
      "DATA",
      [
        "storage",
        "00c7a5e8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007ae9d0",
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
      "007af1b0",
      "DATA",
      [
        "storage",
        "00c7b5b8",
        null,
        "undefined *"
      ]
    ],
    [
      "007af1b4",
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
- 007ae9c0 ["INT_ADD", "register:40f0:8", ["const:7ae9c0:8", "const:4:8"]]
- 007ae9c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007af1a4 ["INT_ADD", "register:40f0:8", ["const:7af1a4:8", "const:4:8"]]
+ 007af1a4 ["CALL", null, ["callee:00c58f30:8"]]
- 007ae9c4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007af1a8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007ae9c8 ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 007ae9c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae9c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae9c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b56516ae75c32f04402408079e1781e9"></a>

### [`007ae9d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9d8.md) → [`007af1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af1bc.md) FUN_007af1bc

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
      "definition_site": "007af1c0",
      "incomplete_value": false,
      "site": "007af1c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae9dc",
      "incomplete_value": false,
      "site": "007ae9e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
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
      "007af1c4",
      "DATA",
      [
        "storage",
        "00c7a5e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af1c4",
      "DATA",
      [
        "storage",
        "00c7b5b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae9d8 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007af1bc ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007ae9dc ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 007ae9dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae9dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae9dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af1c0 ["COPY", "tmp:0:8", ["const:5b8:8"]]
+ 007af1c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af1c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af1c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d18e24a53bb1ce2ebacc859824400a66"></a>

### [`007ae9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9f0.md) → [`007af1d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af1d4.md) FUN_007af1d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493288.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.37% / 新版 87.37%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007aea34",
      "incomplete_value": true,
      "site": "007aea38",
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
            "const:38:8"
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
      "unmatched:007aea10",
      "READ",
      [
        "storage",
        "002b77a9",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007aea18",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:007aea1c",
      "READ",
      [
        "storage",
        "002b77af",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007af1f4",
      "READ",
      [
        "storage",
        "002b7878",
        null,
        "string"
      ]
    ],
    [
      "007af1fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "007af200",
      "READ",
      [
        "storage",
        "002b787e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aea38 ["INT_ADD", "register:40f0:8", ["const:7aea38:8", "const:4:8"]]
- 007aea38 ["CALL", null, ["callee:0048d1b4:8"]]
+ 007af21c ["INT_ADD", "register:40f0:8", ["const:7af21c:8", "const:4:8"]]
+ 007af21c ["CALL", null, ["callee:0048d1b4:8"]]
- 007aea08 ["COPY", "tmp:0:8", ["const:7a9:8"]]
- 007aea08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aea08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aea08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007aea0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 007aea0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5743ba121afa8630bafec05c9065b7e4"></a>

### [`007aec4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec4c.md) → [`007af430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af430.md) FUN_007af430

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
      "unmatched:007aec70",
      "DATA",
      [
        "storage",
        "00c7a668",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007aec74",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007aec78",
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
      "007af454",
      "DATA",
      [
        "storage",
        "00c7b638",
        null,
        "undefined *"
      ]
    ],
    [
      "007af458",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007af45c",
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
- 007aec60 ["INT_ADD", "register:40f0:8", ["const:7aec60:8", "const:4:8"]]
- 007aec60 ["CALL", null, ["callee:00c58f30:8"]]
+ 007af444 ["INT_ADD", "register:40f0:8", ["const:7af444:8", "const:4:8"]]
+ 007af444 ["CALL", null, ["callee:00c58f30:8"]]
- 007aec68 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007af44c ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007aec6c ["COPY", "tmp:0:8", ["const:668:8"]]
- 007aec6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aec6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aec6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e1a0b67e83b8413fa3fd0a2e0e230d8f"></a>

### [`007aec80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec80.md) → [`007af464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af464.md) FUN_007af464

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
      "definition_site": "007af470",
      "incomplete_value": false,
      "site": "007af470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aec8c",
      "incomplete_value": false,
      "site": "007aec8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:668:8"
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
      "007af470",
      "DATA",
      [
        "storage",
        "00c7a668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af470",
      "DATA",
      [
        "storage",
        "00c7b638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aec84 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007af468 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007aec88 ["COPY", "tmp:0:8", ["const:668:8"]]
- 007aec88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aec88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aec88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007af46c ["COPY", "tmp:0:8", ["const:638:8"]]
+ 007af46c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007af46c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007af46c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-39d9392cff6b288af42c73e1177e45ec"></a>

### [`007aecd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aecd0.md) → [`007af4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af4b4.md) FUN_007af4b4

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
      "unmatched:007aecf4",
      "DATA",
      [
        "storage",
        "00c7a6e8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007aecf8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007aecfc",
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
      "007af4d8",
      "DATA",
      [
        "storage",
        "00c7b6b8",
        null,
        "undefined *"
      ]
    ],
    [
      "007af4dc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007af4e0",
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
- 007aece4 ["INT_ADD", "register:40f0:8", ["const:7aece4:8", "const:4:8"]]
- 007aece4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007af4c8 ["INT_ADD", "register:40f0:8", ["const:7af4c8:8", "const:4:8"]]
+ 007af4c8 ["CALL", null, ["callee:00c58f30:8"]]
- 007aecec ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007af4d0 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007aecf0 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 007aecf0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aecf0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aecf0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-400c224a67e49f8560a64c566b5595ef"></a>

### [`007aed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed04.md) → [`007af4e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af4e8.md) FUN_007af4e8

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
      "definition_site": "007af4f4",
      "incomplete_value": false,
      "site": "007af4f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aed10",
      "incomplete_value": false,
      "site": "007aed10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
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
      "007af4f4",
      "DATA",
      [
        "storage",
        "00c7a6e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af4f4",
      "DATA",
      [
        "storage",
        "00c7b6b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aed08 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007af4ec ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007aed0c ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 007aed0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aed0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aed0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007af4f0 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 007af4f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007af4f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007af4f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ce44451c7fae8b881287bb83ce3267cd"></a>

### [`007aed54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed54.md) → [`007af538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af538.md) FUN_007af538

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
      "definition_site": "007af54c",
      "incomplete_value": false,
      "site": "007af550",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aed68",
      "incomplete_value": false,
      "site": "007aed6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:768:8"
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
      "007af550",
      "DATA",
      [
        "storage",
        "00c7a768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af550",
      "DATA",
      [
        "storage",
        "00c7b738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aed60 ["INT_ADD", "register:40f0:8", ["const:7aed60:8", "const:4:8"]]
- 007aed60 ["CALL", null, ["callee:00c58f30:8"]]
+ 007af544 ["INT_ADD", "register:40f0:8", ["const:7af544:8", "const:4:8"]]
+ 007af544 ["CALL", null, ["callee:00c58f30:8"]]
- 007aed64 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007af548 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007aed68 ["COPY", "tmp:0:8", ["const:768:8"]]
- 007aed68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aed68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aed68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af54c ["COPY", "tmp:0:8", ["const:738:8"]]
+ 007af54c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af54c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af54c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-977c1b31eb027ceaae382d8beea32e21"></a>

### [`007aed78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed78.md) → [`007af55c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af55c.md) FUN_007af55c

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
      "unmatched:007aed80",
      "DATA",
      [
        "storage",
        "00c7a768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af564",
      "DATA",
      [
        "storage",
        "00c7b738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aed78 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007aed7c ["COPY", "tmp:0:8", ["const:768:8"]]
- 007aed7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aed7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aed7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007aed80 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007aed80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-5f29dfcea93a22325b8c536ada4db474"></a>

### [`007aed90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed90.md) → [`007af574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af574.md) FUN_007af574

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0044c4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c4cc.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0044c7ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044c/0044c7ec.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 74.07% / 新版 74.07%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007af5b4",
      "incomplete_value": true,
      "site": "007af5b8",
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
                "const:10:8"
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
      "unmatched:007aedac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:007aede4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007af608"
      ]
    ],
    [
      "unmatched:007aede8",
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
      "007af590",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "007af5c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007af608"
      ]
    ],
    [
      "007af5cc",
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
- 007aedd4 ["INT_ADD", "register:40f0:8", ["const:7aedd4:8", "const:4:8"]]
- 007aedd4 ["CALL", null, ["callee:00c58f50:8"]]
+ 007af5b8 ["INT_ADD", "register:40f0:8", ["const:7af5b8:8", "const:4:8"]]
+ 007af5b8 ["CALL", null, ["callee:00c58f50:8"]]
- 007aedac ["INT_ADD", "register:40f0:8", ["const:7aedac:8", "const:4:8"]]
- 007aedac ["CALL", null, ["ram:48cd38:8"]]
- 007aedb8 ["INT_ADD", "register:40f0:8", ["const:7aedb8:8", "const:4:8"]]
- 007aedb8 ["CALL", null, ["callee:0044c7ec:8"]]
+ 007af59c ["INT_ADD", "register:40f0:8", ["const:7af59c:8", "const:4:8"]]
+ 007af59c ["CALL", null, ["callee:0044c7ec:8"]]
~~~


<a id="compare-a96d9da3a975c8e665f25d7a57c38ada"></a>

### [`007aee50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aee50.md) → [`007af634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af634.md) FUN_007af634

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007aee5c",
      "DATA",
      [
        "storage",
        "00c7a7e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af640",
      "DATA",
      [
        "storage",
        "00c7b7b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aee50 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007aee50 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 007aee50 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 007aee54 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 007aee58 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 007aee58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aee58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aee58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9269f8711ed10348c3193b3b618262a2"></a>

### [`007aee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aee70.md) → [`007af654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af654.md) FUN_007af654

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 31.25% / 新版 31.25%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007af67c",
      "incomplete_value": true,
      "site": "007af680",
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
                "const:18:8"
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
      "unmatched:007aee7c",
      "DATA",
      [
        "storage",
        "00c7a7e8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007aee80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007af690"
      ]
    ],
    [
      "unmatched:007aee84",
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
      "007af660",
      "DATA",
      [
        "storage",
        "00c7b7b8",
        null,
        "undefined *"
      ]
    ],
    [
      "007af664",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007af690"
      ]
    ],
    [
      "007af668",
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
- 007aee9c ["INT_ADD", "register:40f0:8", ["const:7aee9c:8", "const:4:8"]]
- 007aee9c ["CALL", null, ["callee:00c58f50:8"]]
+ 007af680 ["INT_ADD", "register:40f0:8", ["const:7af680:8", "const:4:8"]]
+ 007af680 ["CALL", null, ["callee:00c58f50:8"]]
- 007aee70 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007aee70 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 007aee70 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 007aee74 ["COPY", "register:4048:8", ["const:c7a000:8"]]
~~~


<a id="compare-f513eb0a09ca0e3a0934c585bc229030"></a>

### [`007aeeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aeeb0.md) → [`007af694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af694.md) FUN_007af694

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `return_value_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007af6c0",
      "incomplete_value": false,
      "site": "007af6c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aeedc",
      "incomplete_value": false,
      "site": "007aeedc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "007af6e4",
      "incomplete_value": true,
      "site": "007af6f0",
      "value": [
        "live",
        "register:4098:8"
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
      "007af6c0",
      "DATA",
      [
        "storage",
        "00c7a7e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af6c0",
      "DATA",
      [
        "storage",
        "00c7b7b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aeec4 ["INT_ADD", "register:40f0:8", ["const:7aeec4:8", "const:4:8"]]
- 007aeec4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007af6a8 ["INT_ADD", "register:40f0:8", ["const:7af6a8:8", "const:4:8"]]
+ 007af6a8 ["CALL", null, ["callee:00c58f30:8"]]
- 007aeed0 ["COPY", "register:4050:8", ["const:c7a000:8"]]
+ 007af6b4 ["COPY", "register:4050:8", ["const:c7b000:8"]]
- 007aeed4 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 007aeed4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007aeed4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007aeed4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007af6b8 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 007af6b8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007af6b8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007af6b8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-c5f5ba86b15dbd2a18643e5c8cf266c8"></a>

### [`007aef24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aef24.md) → [`007af708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af708.md) FUN_007af708

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007aef2c",
      "DATA",
      [
        "storage",
        "00c7a7e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af710",
      "DATA",
      [
        "storage",
        "00c7b7b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aef24 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007aef28 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 007aef28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aef28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aef28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007aef2c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 007aef2c ["COPY", "tmp:1:8", ["register:4008:8"]]
- 007aef2c ["INT_ADD", "register:4008:8", ["register:4008:8", "const:8:8"]]
- 007aef2c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-acb753b354eb90ae70bfa0b095de3020"></a>

### [`007aefa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aefa8.md) → [`007af78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007af78c.md) FUN_007af78c

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`00493288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493288.md)

変更の種類 call, call_count, constant, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007aefb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "007af79c",
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
- 007aefb8 ["INT_ADD", "register:40f0:8", ["const:7aefb8:8", "const:4:8"]]
- 007aefb8 ["CALL", null, ["ram:48cd38:8"]]
+ 007af79c ["INT_ADD", "register:40f0:8", ["const:7af79c:8", "const:4:8"]]
+ 007af79c ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-26a50b73db46d8d412caf5eadb5e1edf"></a>

### [`007af188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af188.md) → [`007afbac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007afbac.md) FUN_007afbac

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007ab7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab7ac.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`007abbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ab/007abbbc.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.21% / 新版 92.21%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007afc8c",
      "incomplete_value": false,
      "site": "007afc94",
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
      "unmatched:007af1b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:007af1b8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:007af1c8",
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
      "007afbd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "007afbdc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "007afbec",
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
- 007af270 ["INT_ADD", "register:40f0:8", ["const:7af270:8", "const:4:8"]]
- 007af270 ["CALL", null, ["callee:00c54d90:8"]]
+ 007afc94 ["INT_ADD", "register:40f0:8", ["const:7afc94:8", "const:4:8"]]
+ 007afc94 ["CALL", null, ["callee:00c54d90:8"]]
- 007af1b4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 007af1b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 007af1b8 ["INT_ADD", "register:40f0:8", ["const:7af1b8:8", "const:4:8"]]
- 007af1b8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-c5ce2a44fe9952cf78a52f6e268a07c8"></a>

### [`007af300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af300.md) → [`007afd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007afd24.md) FUN_007afd24

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
      "definition_site": "007afd30",
      "incomplete_value": false,
      "site": "007afd3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af30c",
      "incomplete_value": false,
      "site": "007af318",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:968:8"
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
      "007afd3c",
      "DATA",
      [
        "storage",
        "00c7a968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afd3c",
      "DATA",
      [
        "storage",
        "00c7b938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af308 ["COPY", "register:4050:8", ["const:c7a000:8"]]
+ 007afd2c ["COPY", "register:4050:8", ["const:c7b000:8"]]
- 007af30c ["COPY", "tmp:0:8", ["const:968:8"]]
- 007af30c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007af30c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007af30c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007afd30 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 007afd30 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007afd30 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007afd30 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-0dab21116eee2f327fd007effeb9230f"></a>

### [`007af344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af344.md) → [`007afd68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007afd68.md) FUN_007afd68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007af368",
      "DATA",
      [
        "storage",
        "00c7a968",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007af36c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007afda0"
      ]
    ]
  ],
  "added": [
    [
      "007afd8c",
      "DATA",
      [
        "storage",
        "00c7b938",
        null,
        "undefined *"
      ]
    ],
    [
      "007afd90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007afda0"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af358 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007afd7c ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007af35c ["COPY", "tmp:0:8", ["const:968:8"]]
- 007af35c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af35c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af35c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007af360 ["COPY", "tmp:0:8", ["const:10:8"]]
- 007af360 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007af360 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007af360 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


