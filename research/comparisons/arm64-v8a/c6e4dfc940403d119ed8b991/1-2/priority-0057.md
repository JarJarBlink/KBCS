# v16.0.2 → v16.0.3 · 最優先の変更候補 (57)

[一覧の目次](README.md)

<a id="compare-4195619b5161c56650c3275273882ca4"></a>

### [`00885f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885f18.md) → [`00886ec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886ec4.md) FUN_00886ec4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "00886edc",
      "incomplete_value": false,
      "site": "00886ee8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:ec8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885f30",
      "incomplete_value": false,
      "site": "00885f3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00886ee8",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886ee8",
      "DATA",
      [
        "storage",
        "00c81ec8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885f2c ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00886ed8 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00885f30 ["COPY", "tmp:0:8", ["const:ef8:8"]]
- 00885f30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885f30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885f30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00886edc ["COPY", "tmp:0:8", ["const:ec8:8"]]
+ 00886edc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00886edc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00886edc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885f60 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885f60 ["INT_ADD", "register:40f0:8", ["const:885f60:8", "const:4:8"]]
- 00885f60 ["CALLIND", null, ["register:0:8"]]
+ 00886f0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886f0c ["INT_ADD", "register:40f0:8", ["const:886f0c:8", "const:4:8"]]
+ 00886f0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-91be3c3e1accdf3caba33b50746a3fa4"></a>

### [`00885f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885f88.md) → [`00886f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886f34.md) FUN_00886f34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_value, constant, local_def_use, operands_and_dependencies, store_value

命令の説明率　旧版 85.19% / 新版 85.19%

優先判定に残った影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886f4c",
      "incomplete_value": false,
      "site": "00886f58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:ec8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885fa0",
      "incomplete_value": false,
      "site": "00885fac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00886f54",
      "incomplete_value": true,
      "site": "00886f5c",
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
      "definition_site": "00885fa8",
      "incomplete_value": true,
      "site": "00885fb0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00886f58",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886f58",
      "DATA",
      [
        "storage",
        "00c81ec8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885f9c ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00886f48 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00885fa0 ["COPY", "tmp:0:8", ["const:ef8:8"]]
- 00885fa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885fa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885fa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00886f4c ["COPY", "tmp:0:8", ["const:ec8:8"]]
+ 00886f4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00886f4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00886f4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885fd0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885fd0 ["INT_ADD", "register:40f0:8", ["const:885fd0:8", "const:4:8"]]
- 00885fd0 ["CALLIND", null, ["register:0:8"]]
+ 00886f7c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886f7c ["INT_ADD", "register:40f0:8", ["const:886f7c:8", "const:4:8"]]
+ 00886f7c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-43c95e8320b9589ed86db1b870b565b9"></a>

### [`00885ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885ff4.md) → [`00886fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886fa0.md) FUN_00886fa0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.40% / 新版 81.40%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00885ff4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00885ff8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00885ffc",
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
      "00886fa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00886fa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00886fa8",
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
- 00885ff4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00885ff4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00885ff4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00885ff4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00885ff8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00885ff8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00885ffc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00885ffc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00885ffc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00885ffc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-637940c41ede8f0c5284e0ff352ca3ca"></a>

### [`008860cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008860cc.md) → [`00887078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887078.md) FUN_00887078

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.40% / 新版 81.40%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00886138"
      ],
      [
        "CONDITIONAL_JUMP",
        "008870e4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008870e0",
      "incomplete_value": true,
      "site": "00887100",
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
      "definition_site": "00886134",
      "incomplete_value": true,
      "site": "00886154",
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
      "unmatched:008860e8",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00886138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008870fc"
      ]
    ],
    [
      "unmatched:00886164",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00887094",
      "DATA",
      [
        "storage",
        "00c81ec8",
        null,
        "undefined *"
      ]
    ],
    [
      "008870e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008870fc"
      ]
    ],
    [
      "00887110",
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
- 008860dc ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00887088 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008860e0 ["COPY", "tmp:0:8", ["const:ef8:8"]]
- 008860e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008860e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008860e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008860e4 ["COPY", "register:40a0:8", ["register:4008:8"]]
~~~


<a id="compare-f0623be1032da3b211fff8239d35a9dd"></a>

### [`00886194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886194.md) → [`00887140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887140.md) FUN_00887140

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008861d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008861d0 ["INT_ADD", "register:40f0:8", ["const:8861d0:8", "const:4:8"]]
- 008861d0 ["CALLIND", null, ["register:0:8"]]
+ 0088717c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088717c ["INT_ADD", "register:40f0:8", ["const:88717c:8", "const:4:8"]]
+ 0088717c ["CALLIND", null, ["register:0:8"]]
- 008861d8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008861d8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008861d8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008861d8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00887184 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00887184 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00887184 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00887184 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-7af4c3420783fdb17d35be9bbeea9124"></a>

### [`008861f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008861f8.md) → [`008871a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/008871a4.md) FUN_008871a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008810f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008810f0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0088209c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/0088209c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008861f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008861fc",
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
      "008871a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008871a8",
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
- 008861f8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008861f8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008861f8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008861f8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008861fc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008861fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00886200 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-5d88d7d8477b4b291aa0318c1ed8b27e"></a>

### [`00886258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886258.md) → [`00887204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887204.md) FUN_00887204

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`0045581c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00455/0045581c.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00455b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00455/00455b3c.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.12% / 新版 85.12%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088625c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886260",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886264",
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
      "00887208",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0088720c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00887210",
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
- 00886258 ["INT_SUB", "register:8:8", ["register:8:8", "const:c0:8"]]
- 0088625c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088625c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088625c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:90:8"]]
- 0088625c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00886260 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00886260 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00886260 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:a0:8"]]
- 00886260 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a0bcdebfa1fffc1d2ffa114399c9255a"></a>

### [`0088652c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/0088652c.md) → [`008874d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/008874d8.md) FUN_008874d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 41.18% / 新版 41.18%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00886544",
      "DATA",
      [
        "storage",
        "00c80f68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00886548",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00887504"
      ]
    ]
  ],
  "added": [
    [
      "008874f0",
      "DATA",
      [
        "storage",
        "00c81f38",
        null,
        "undefined *"
      ]
    ],
    [
      "008874f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00887504"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088652c ["COPY", "register:4040:8", ["register:4000:8"]]
- 00886530 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 00886530 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00886534 ["COPY", "register:4050:8", ["const:c80000:8"]]
~~~


<a id="compare-3579c4e17f560a487e72d975a814c527"></a>

### [`00886570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886570.md) → [`0088751c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/0088751c.md) FUN_0088751c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.57% / 新版 69.57%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00886594",
      "DATA",
      [
        "storage",
        "00c80f68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00886598",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00887554"
      ]
    ],
    [
      "unmatched:008865b8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00887540",
      "DATA",
      [
        "storage",
        "00c81f38",
        null,
        "undefined *"
      ]
    ],
    [
      "00887544",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00887554"
      ]
    ],
    [
      "00887564",
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
- 00886584 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00887530 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00886588 ["COPY", "tmp:0:8", ["const:f68:8"]]
- 00886588 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00886588 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00886588 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088658c ["COPY", "tmp:0:8", ["const:10:8"]]
- 0088658c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0088658c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0088658c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-bc6bc6e77b3479bdd7657736eb21d613"></a>

### [`008865cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008865cc.md) → [`00887578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887578.md) FUN_00887578

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.97% / 新版 68.97%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008865cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008865d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008865f8",
      "DATA",
      [
        "storage",
        "00c80f68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00887578",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088757c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008875a4",
      "DATA",
      [
        "storage",
        "00c81f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008865cc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008865cc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008865cc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008865cc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008865d0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008865d0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008865d0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008865d0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008865d4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-2de56d7f0ef66fdd99326a4269298ef3"></a>

### [`00886654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886654.md) → [`00887600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887600.md) FUN_00887600

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00886670",
      "DATA",
      [
        "storage",
        "00c80f68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088761c",
      "DATA",
      [
        "storage",
        "00c81f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886668 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00887614 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0088666c ["COPY", "tmp:0:8", ["const:f68:8"]]
- 0088666c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088666c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088666c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00886670 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00886670 ["COPY", "tmp:1:8", ["register:4008:8"]]
- 00886670 ["INT_ADD", "register:4008:8", ["register:4008:8", "const:10:8"]]
- 00886670 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-6ba2f90f05f434aaa6f41fde3425e002"></a>

### [`00886700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886700.md) → [`008876ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/008876ac.md) FUN_008876ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00886258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886258.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00887204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887204.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088671c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008876d8"
      ]
    ],
    [
      "unmatched:0088673c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008876c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008876d8"
      ]
    ],
    [
      "008876e8",
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
- 00886718 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 00886718 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 00886718 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 00886718 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 0088671c ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 00886720 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00886720 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008876cc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008876cc ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-9738228c7977f9d03625ec08fb0d1024"></a>

### [`00886750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886750.md) → [`008876fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/008876fc.md) FUN_008876fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008877c0",
      "incomplete_value": true,
      "site": "008877c4",
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
            "const:c:8"
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
      "definition_site": "0088682c",
      "incomplete_value": true,
      "site": "00886830",
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
                "const:28:8"
              ]
            ]
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
      "008877b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0088686c"
      ]
    ],
    [
      "unmatched:00886870",
      "READ",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886878",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00887890"
      ]
    ]
  ],
  "added": [
    [
      "008877b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00887818"
      ]
    ],
    [
      "0088781c",
      "READ",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00887824",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00887890"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886818 ["COPY", "register:0:8", ["register:4040:8"]]
- 00886818 ["INT_ADD", "register:40f0:8", ["const:886818:8", "const:4:8"]]
- 00886818 ["CALLIND", null, ["register:0:8"]]
+ 008877c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008877c4 ["INT_ADD", "register:40f0:8", ["const:8877c4:8", "const:4:8"]]
+ 008877c4 ["CALLIND", null, ["register:0:8"]]
- 00886830 ["INT_ADD", "register:40f0:8", ["const:886830:8", "const:4:8"]]
- 00886830 ["CALL", null, ["callee:00c58f50:8"]]
+ 008877dc ["INT_ADD", "register:40f0:8", ["const:8877dc:8", "const:4:8"]]
+ 008877dc ["CALL", null, ["callee:00c58f50:8"]]
- 008867b0 ["INT_RIGHT", "tmp:0:4", ["register:40b0:4", "const:0:4"]]
- 008867b0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008867b0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008867b0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0088775c ["INT_RIGHT", "tmp:0:4", ["register:40b0:4", "const:0:4"]]
+ 0088775c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0088775c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0088775c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-83abab29afcfadabba781f9569b9a8d0"></a>

### [`00886910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886910.md) → [`008878bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/008878bc.md) FUN_008878bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.57% / 新版 69.57%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00886910",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886914",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886928",
      "DATA",
      [
        "storage",
        "00c81008",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008878bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008878c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008878d4",
      "DATA",
      [
        "storage",
        "00c81fd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886910 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00886910 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00886910 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00886910 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00886914 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00886914 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00886918 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-8fefb9e34ce3491e8468ab881818607b"></a>

### [`0088696c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/0088696c.md) → [`00887918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887918.md) FUN_00887918

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00887930",
      "incomplete_value": false,
      "site": "00887934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:fd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886984",
      "incomplete_value": false,
      "site": "00886988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00887934",
      "DATA",
      [
        "storage",
        "00c81008",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00887934",
      "DATA",
      [
        "storage",
        "00c81fd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886984 ["COPY", "tmp:0:8", ["const:8:8"]]
- 00886984 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00886984 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00886984 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00887930 ["COPY", "tmp:0:8", ["const:fd8:8"]]
+ 00887930 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00887930 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00887930 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00886998 ["INT_ADD", "register:40f0:8", ["const:886998:8", "const:4:8"]]
- 00886998 ["CALL", null, ["callee:00c54d90:8"]]
+ 00887944 ["INT_ADD", "register:40f0:8", ["const:887944:8", "const:4:8"]]
+ 00887944 ["CALL", null, ["callee:00c54d90:8"]]
- 008869ac ["COPY", "register:0:8", ["register:4040:8"]]
- 008869ac ["INT_ADD", "register:40f0:8", ["const:8869ac:8", "const:4:8"]]
- 008869ac ["CALLIND", null, ["register:0:8"]]
+ 00887958 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00887958 ["INT_ADD", "register:40f0:8", ["const:887958:8", "const:4:8"]]
+ 00887958 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fa92f974458365fe2bd7b62dbc82d47a"></a>

### [`008869c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008869c8.md) → [`00887974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887974.md) FUN_00887974

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008869f0",
      "DATA",
      [
        "storage",
        "00c81008",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008869fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008879c0"
      ]
    ]
  ],
  "added": [
    [
      "0088799c",
      "DATA",
      [
        "storage",
        "00c81fd8",
        null,
        "undefined *"
      ]
    ],
    [
      "008879a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008879c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008869dc ["INT_ADD", "register:40f0:8", ["const:8869dc:8", "const:4:8"]]
- 008869dc ["CALL", null, ["callee:00c58f30:8"]]
+ 00887988 ["INT_ADD", "register:40f0:8", ["const:887988:8", "const:4:8"]]
+ 00887988 ["CALL", null, ["callee:00c58f30:8"]]
- 008869ec ["COPY", "tmp:0:8", ["const:8:8"]]
- 008869ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008869ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008869ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008869f0 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 008869f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-847c8efeca9e12fb0dc4613b74b4b2d7"></a>

### [`00886a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886a20.md) → [`008879cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/008879cc.md) FUN_008879cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.33% / 新版 73.33%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00886a2c",
      "DATA",
      [
        "storage",
        "00c81008",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008879d8",
      "DATA",
      [
        "storage",
        "00c81fd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886a20 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00886a20 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00886a20 ["COPY", "register:5010:8", ["const:0:8"]]
- 00886a20 ["COPY", "register:5018:8", ["const:0:8"]]
- 00886a24 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00886a28 ["COPY", "tmp:0:8", ["const:8:8"]]
- 00886a28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886a28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886a28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-848515216d21265dbbfc36396278cfb0"></a>

### [`00886a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886a5c.md) → [`00887a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887a08.md) FUN_00887a08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008817b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008817b0.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0088275c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/0088275c.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00886a5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886a60",
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
      "00887a08",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00887a0c",
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
- 00886a5c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00886a5c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00886a5c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00886a5c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00886a60 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00886a60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00886a64 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-62ad3d7ddf92657f60a2318b45132c8b"></a>

### [`00886afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886afc.md) → [`00887aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887aa8.md) FUN_00887aa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00456848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456848.md) [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`00886f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886f68.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00456b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00456/00456b68.md) [`00464afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464afc.md) [`00887f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887f14.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.14% / 新版 80.14%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00887c50",
      "incomplete_value": true,
      "site": "00887c64",
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
            "const:40:8"
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
      "definition_site": "00887c54",
      "incomplete_value": true,
      "site": "00887c64",
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
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00887c58",
      "incomplete_value": true,
      "site": "00887c64",
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
    "ordinal": 5,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00886b70",
      "WRITE",
      [
        "storage",
        "Stack[-0x110]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886b78",
      "WRITE",
      [
        "storage",
        "Stack[-0x108]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886b80",
      "WRITE",
      [
        "storage",
        "Stack[-0xf8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00887b1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x110]",
        null,
        null
      ]
    ],
    [
      "00887b24",
      "WRITE",
      [
        "storage",
        "Stack[-0x108]",
        null,
        null
      ]
    ],
    [
      "00887b2c",
      "WRITE",
      [
        "storage",
        "Stack[-0xf8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00886cb8 ["INT_ADD", "register:40f0:8", ["const:886cb8:8", "const:4:8"]]
- 00886cb8 ["CALL", null, ["callee:00456b68:8"]]
+ 00887c64 ["INT_ADD", "register:40f0:8", ["const:887c64:8", "const:4:8"]]
+ 00887c64 ["CALL", null, ["callee:00456b68:8"]]
- 00886d04 ["INT_ADD", "register:40f0:8", ["const:886d04:8", "const:4:8"]]
- 00886d04 ["CALL", null, ["callee:00c58f50:8"]]
+ 00887cb0 ["INT_ADD", "register:40f0:8", ["const:887cb0:8", "const:4:8"]]
+ 00887cb0 ["CALL", null, ["callee:00c58f50:8"]]
- 00886b30 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00886b30 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 00887adc ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00887adc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-3ef8f3881ebca35f7abdc5c8b51a2419"></a>

### [`00886e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886e38.md) → [`00887de4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887de4.md) FUN_00887de4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00887dec",
      "incomplete_value": false,
      "site": "00887df0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886e40",
      "incomplete_value": false,
      "site": "00886e44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
      "00887df0",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00887df0",
      "DATA",
      [
        "storage",
        "00c82048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886e3c ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 00887de8 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 00886e40 ["COPY", "tmp:0:8", ["const:78:8"]]
- 00886e40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886e40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886e40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00887dec ["COPY", "tmp:0:8", ["const:48:8"]]
+ 00887dec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00887dec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00887dec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d1350c1d3e5601775af3b8efbcc421a7"></a>

### [`00886e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886e58.md) → [`00887e04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887e04.md) FUN_00887e04

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
      "definition_site": "00887e0c",
      "incomplete_value": false,
      "site": "00887e10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886e60",
      "incomplete_value": false,
      "site": "00886e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
      "00887e10",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00887e10",
      "DATA",
      [
        "storage",
        "00c82048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886e5c ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 00887e08 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 00886e60 ["COPY", "tmp:0:8", ["const:78:8"]]
- 00886e60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886e60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886e60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00887e0c ["COPY", "tmp:0:8", ["const:48:8"]]
+ 00887e0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00887e0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00887e0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00886e84 ["INT_ADD", "register:40f0:8", ["const:886e84:8", "const:4:8"]]
- 00886e84 ["CALL", null, ["callee:00c58f50:8"]]
+ 00887e30 ["INT_ADD", "register:40f0:8", ["const:887e30:8", "const:4:8"]]
+ 00887e30 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-aa4e8c08637f8c5d7d2baa910347aee5"></a>

### [`00886e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886e98.md) → [`00887e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887e44.md) FUN_00887e44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00886ec8",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00887e74",
      "DATA",
      [
        "storage",
        "00c82048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886eac ["INT_ADD", "register:40f0:8", ["const:886eac:8", "const:4:8"]]
- 00886eac ["CALL", null, ["callee:00c58f30:8"]]
+ 00887e58 ["INT_ADD", "register:40f0:8", ["const:887e58:8", "const:4:8"]]
+ 00887e58 ["CALL", null, ["callee:00c58f30:8"]]
- 00886eb8 ["COPY", "register:4058:8", ["const:c81000:8"]]
+ 00887e64 ["COPY", "register:4058:8", ["const:c82000:8"]]
- 00886ebc ["COPY", "tmp:0:8", ["const:78:8"]]
- 00886ebc ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00886ebc ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00886ebc ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
~~~


<a id="compare-0da997e32cc4a8d9e9205af3acc9a505"></a>

### [`00886f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886f14.md) → [`00887ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887ec0.md) FUN_00887ec0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00887ecc",
      "incomplete_value": false,
      "site": "00887ecc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886f20",
      "incomplete_value": false,
      "site": "00886f20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
      "00887ecc",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00887ecc",
      "DATA",
      [
        "storage",
        "00c82048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886f18 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 00887ec4 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 00886f1c ["COPY", "tmp:0:8", ["const:78:8"]]
- 00886f1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886f1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886f1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00887ec8 ["COPY", "tmp:0:8", ["const:48:8"]]
+ 00887ec8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00887ec8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00887ec8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1e42de846f6531eb618e0f51a046a424"></a>

### [`00886f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886f68.md) → [`00887f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887f14.md) FUN_00887f14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00886afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886afc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00887aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887aa8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00886f6c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00886f6c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00886f6c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00886f6c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00887f18 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00887f18 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00887f18 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00887f18 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00886f88 ["INT_ADD", "register:40f0:8", ["const:886f88:8", "const:4:8"]]
- 00886f88 ["CALL", null, ["callee:00c58f50:8"]]
+ 00887f34 ["INT_ADD", "register:40f0:8", ["const:887f34:8", "const:4:8"]]
+ 00887f34 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b5361e80bcd3969bbc5256a4689e957a"></a>

### [`00886f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886f9c.md) → [`00887f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887f48.md) FUN_00887f48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00457440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00457/00457440.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00767dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/00767dfc.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00457760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00457/00457760.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md) [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`007681d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007681d8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.84% / 新版 87.84%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00888058",
      "incomplete_value": true,
      "site": "0088805c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "unmatched:00886fbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00886fd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "unmatched:00887080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008880c0"
      ]
    ]
  ],
  "added": [
    [
      "00887f68",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00887f84",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007647b8"
      ]
    ],
    [
      "0088802c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008880c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008870b0 ["INT_ADD", "register:40f0:8", ["const:8870b0:8", "const:4:8"]]
- 008870b0 ["CALL", null, ["callee:00c58f20:8"]]
+ 0088805c ["INT_ADD", "register:40f0:8", ["const:88805c:8", "const:4:8"]]
+ 0088805c ["CALL", null, ["callee:00c58f20:8"]]
- 00886fac ["COPY", "tmp:0:8", ["const:50:8"]]
- 00886fac ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00886fac ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00886fac ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00886fb0 ["COPY", "register:40a8:8", ["register:1660:8"]]
~~~


<a id="compare-4faa817d57c51c4b774e964df7e20c88"></a>

### [`00887140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887140.md) → [`008880ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008880ec.md) _INIT_164

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 52.54% / 新版 52.54%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_store_alignment` 39件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00888248",
      "incomplete_value": false,
      "site": "0088824c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088729c",
      "incomplete_value": true,
      "site": "008872a0",
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
      "definition_site": "00888238",
      "incomplete_value": false,
      "site": "0088824c",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:900:8"
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
      "definition_site": "0088728c",
      "incomplete_value": true,
      "site": "008872a0",
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
      "definition_site": "00888240",
      "incomplete_value": true,
      "site": "0088824c",
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
      "definition_site": "00887294",
      "incomplete_value": true,
      "site": "008872a0",
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
      "unmatched:00887170",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088717c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00887184",
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
      "0088811c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00888128",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00888130",
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
- 008872a0 ["INT_ADD", "register:40f0:8", ["const:8872a0:8", "const:4:8"]]
- 008872a0 ["CALL", null, ["callee:0043bb58:8"]]
+ 0088824c ["INT_ADD", "register:40f0:8", ["const:88824c:8", "const:4:8"]]
+ 0088824c ["CALL", null, ["callee:0043bb58:8"]]
- 008872b4 ["INT_ADD", "register:40f0:8", ["const:8872b4:8", "const:4:8"]]
- 008872b4 ["CALL", null, ["callee:0043bb58:8"]]
+ 00888260 ["INT_ADD", "register:40f0:8", ["const:888260:8", "const:4:8"]]
+ 00888260 ["CALL", null, ["callee:0043bb58:8"]]
- 008872dc ["INT_ADD", "register:40f0:8", ["const:8872dc:8", "const:4:8"]]
- 008872dc ["CALL", null, ["callee:0043bb58:8"]]
+ 00888288 ["INT_ADD", "register:40f0:8", ["const:888288:8", "const:4:8"]]
+ 00888288 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-5354943e766e401d7183aa8b2d5166fb"></a>

### [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) → [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) FUN_0088847c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 10件 [`0088a828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a828.md) [`0088adc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088adc0.md) [`0088aee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088aee4.md) [`0088b008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b008.md) [`0088b12c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b12c.md) · 呼出先 12件 [`00888e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e88.md) [`00888e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e8c.md) [`00888ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888ed4.md) [`00889088`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889088.md) [`0088908c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/0088908c.md)
- 新版 呼出元 10件 [`0088b7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b7d4.md) [`0088bd6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bd6c.md) [`0088be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088be90.md) [`0088bfb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bfb4.md) [`0088c0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c0d8.md) · 呼出先 12件 [`00889e34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889e34.md) [`00889e38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889e38.md) [`00889e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889e80.md) [`0088a034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a034.md) [`0088a038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a038.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.09% / 新版 89.09%

優先判定に残った影響 `call_target` 1件, `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008884b0",
      "incomplete_value": false,
      "site": "008884b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00887504",
      "incomplete_value": false,
      "site": "00887508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008884ec",
      "incomplete_value": false,
      "site": "008884ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00887540",
      "incomplete_value": false,
      "site": "00887540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088853c",
      "incomplete_value": false,
      "site": "0088853c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00887590",
      "incomplete_value": false,
      "site": "00887590",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:350:8"
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
      "008884b4",
      "DATA",
      [
        "storage",
        "00c81108",
        null,
        "pointer"
      ]
    ],
    [
      "008884ec",
      "DATA",
      [
        "storage",
        "00c812c0",
        null,
        "undefined *"
      ]
    ],
    [
      "008884f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00888ed4"
      ]
    ]
  ],
  "added": [
    [
      "008884b4",
      "DATA",
      [
        "storage",
        "00c820d8",
        null,
        "pointer"
      ]
    ],
    [
      "008884ec",
      "DATA",
      [
        "storage",
        "00c82290",
        null,
        "undefined *"
      ]
    ],
    [
      "008884f8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00889e80"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088754c ["INT_ADD", "register:40f0:8", ["const:88754c:8", "const:4:8"]]
- 0088754c ["CALL", null, ["ram:888ed4:8"]]
+ 008884f8 ["INT_ADD", "register:40f0:8", ["const:8884f8:8", "const:4:8"]]
+ 008884f8 ["CALL", null, ["callee:00889e80:8"]]
- 00887500 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 008884ac ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00887504 ["COPY", "tmp:0:8", ["const:108:8"]]
- 00887504 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00887504 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00887504 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008884b0 ["COPY", "tmp:0:8", ["const:d8:8"]]
+ 008884b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008884b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008884b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6f14baf20ba4b706670282b1d74ef434"></a>

### [`00887748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887748.md) → [`008886f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008886f4.md) FUN_008886f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00888708",
      "incomplete_value": false,
      "site": "0088870c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088775c",
      "incomplete_value": false,
      "site": "00887760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:862:8"
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
      "0088870c",
      "DATA",
      [
        "storage",
        "002ba862",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0088870c",
      "DATA",
      [
        "storage",
        "002ba940",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088775c ["COPY", "tmp:0:8", ["const:862:8"]]
- 0088775c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088775c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088775c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00888708 ["COPY", "tmp:0:8", ["const:940:8"]]
+ 00888708 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00888708 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00888708 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-10459ae272f24521ddfe53a80b3cdc26"></a>

### [`00887838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887838.md) → [`008887e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008887e4.md) FUN_008887e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) · 呼出先 4件 [`00889bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bf4.md) [`00889bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bf8.md) [`00b37478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37478.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00a9be3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9be3c.md) · 呼出先 4件 [`0088aba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088aba0.md) [`0088aba4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088aba4.md) [`00b3846c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b3846c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00888818",
      "incomplete_value": false,
      "site": "00888818",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088786c",
      "incomplete_value": false,
      "site": "0088786c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:4e0:8"
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
      "00888818",
      "DATA",
      [
        "storage",
        "00c814e0",
        null,
        "undefined *"
      ]
    ],
    [
      "00888858",
      "READ",
      [
        "storage",
        "00c81500",
        null,
        "pointer"
      ]
    ],
    [
      "00888858",
      "READ",
      [
        "storage",
        "00c81508",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00888818",
      "DATA",
      [
        "storage",
        "00c824b0",
        null,
        "undefined *"
      ]
    ],
    [
      "00888858",
      "READ",
      [
        "storage",
        "00c824d0",
        null,
        "pointer"
      ]
    ],
    [
      "00888858",
      "READ",
      [
        "storage",
        "00c824d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00887860 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088880c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00887864 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 00887864 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00887864 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00887864 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00888810 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 00888810 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00888810 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00888810 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00887884 ["INT_ADD", "register:40f0:8", ["const:887884:8", "const:4:8"]]
- 00887884 ["CALL", null, ["callee:00b3846c:8"]]
+ 00888830 ["INT_ADD", "register:40f0:8", ["const:888830:8", "const:4:8"]]
+ 00888830 ["CALL", null, ["callee:00b3846c:8"]]
~~~


<a id="compare-c19d165d2e1c577318be73bca21be692"></a>

### [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) → [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) FUN_008888dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 7件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 24件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0087eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb18.md) [`00888084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888084.md)
- 新版 呼出元 7件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`006b3c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3c14.md) [`0073cd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073c/0073cd40.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 24件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0087fac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fac4.md) [`00889030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.45% / 新版 90.45%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00888a2c",
      "incomplete_value": true,
      "site": "00888a34",
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
                "const:720:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00887a80",
      "incomplete_value": true,
      "site": "00887a88",
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
                "const:750:8"
              ]
            ]
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
      "definition_site": "00887c30",
      "incomplete_value": true,
      "site": "00887c3c",
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
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00887c34",
      "incomplete_value": true,
      "site": "00887c3c",
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
      "00888a2c",
      "READ",
      [
        "storage",
        "00c9b750",
        null,
        "pointer"
      ]
    ],
    [
      "00888a2c",
      "PARAM",
      [
        "storage",
        "011237a0",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00887c28",
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
      "00888a2c",
      "READ",
      [
        "storage",
        "00c9c720",
        null,
        "pointer"
      ]
    ],
    [
      "00888a2c",
      "PARAM",
      [
        "storage",
        "01124760",
        null,
        "undefined1"
      ]
    ],
    [
      "00888bd4",
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
- 00887a88 ["INT_ADD", "register:40f0:8", ["const:887a88:8", "const:4:8"]]
- 00887a88 ["CALL", null, ["callee:0087fac4:8"]]
+ 00888a34 ["INT_ADD", "register:40f0:8", ["const:888a34:8", "const:4:8"]]
+ 00888a34 ["CALL", null, ["callee:0087fac4:8"]]
- 00887c3c ["INT_ADD", "register:40f0:8", ["const:887c3c:8", "const:4:8"]]
- 00887c3c ["CALL", null, ["callee:0088b8f4:8"]]
+ 00888be8 ["INT_ADD", "register:40f0:8", ["const:888be8:8", "const:4:8"]]
+ 00888be8 ["CALL", null, ["callee:0088b8f4:8"]]
- 00887d10 ["INT_ADD", "register:40f0:8", ["const:887d10:8", "const:4:8"]]
- 00887d10 ["CALL", null, ["callee:0088be90:8"]]
+ 00888cbc ["INT_ADD", "register:40f0:8", ["const:888cbc:8", "const:4:8"]]
+ 00888cbc ["CALL", null, ["callee:0088be90:8"]]
~~~


<a id="compare-b15eff1f345b41f8b5206fbc74368f28"></a>

### [`00888124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888124.md) → [`008890d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/008890d0.md) FUN_008890d0

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
      "unmatched:00888134",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008890f4"
      ]
    ]
  ],
  "added": [
    [
      "008890e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008890f4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888134 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00888134 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00888140 ["INT_ADD", "register:40f0:8", ["const:888140:8", "const:4:8"]]
- 00888140 ["CALL", null, ["callee:00c54d90:8"]]
+ 008890ec ["INT_ADD", "register:40f0:8", ["const:8890ec:8", "const:4:8"]]
+ 008890ec ["CALL", null, ["callee:00c54d90:8"]]
- 00888144 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00888144 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008890f0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008890f0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-735aa897f68519981008e6ee0b02fbb3"></a>

### [`00888174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888174.md) → [`00889120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889120.md) FUN_00889120

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
    "new": null,
    "old": {
      "definition_site": "0088818c",
      "incomplete_value": false,
      "site": "00888190",
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
      "definition_site": "00888188",
      "incomplete_value": true,
      "site": "00888190",
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


~~~diff
- 00888190 ["INT_ADD", "register:40f0:8", ["const:888190:8", "const:4:8"]]
- 00888190 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088913c ["INT_ADD", "register:40f0:8", ["const:88913c:8", "const:4:8"]]
+ 0088913c ["CALL", null, ["callee:00c54d90:8"]]
- 00888184 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00888184 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00889130 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 00889130 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00888194 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00888194 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00889140 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00889140 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-d1c8e2f3dae7b7a5d0fee30f9460bf4d"></a>

### [`00888480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888480.md) → [`0088942c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/0088942c.md) FUN_0088942c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`0061675c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/0061675c.md) [`006262ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/006262ac.md) [`006ff370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff370.md) [`00741464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741464.md) [`007fd3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd3d4.md) · 呼出先 11件 [`0058f474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f474.md) [`0088b990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b990.md) [`0088b994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b994.md) [`0088baa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088baa0.md) [`0088baa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088baa4.md)
- 新版 呼出元 6件 [`00616b0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616b0c.md) [`0062665c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/0062665c.md) [`006ff720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff720.md) [`00741814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741814.md) [`007fe338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe338.md) · 呼出先 11件 [`0058f794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f794.md) [`0088c93c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c93c.md) [`0088c940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c940.md) [`0088ca4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088ca4c.md) [`0088ca50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088ca50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.43% / 新版 95.43%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088958c",
      "incomplete_value": false,
      "site": "0088958c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008885e0",
      "incomplete_value": false,
      "site": "008885e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:910:8"
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
      "definition_site": "008895b0",
      "incomplete_value": false,
      "site": "008895b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:960:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888604",
      "incomplete_value": false,
      "site": "00888604",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:990:8"
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
      "definition_site": "008895c8",
      "incomplete_value": false,
      "site": "008895c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:9e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088861c",
      "incomplete_value": false,
      "site": "0088861c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:a10:8"
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
      "0088958c",
      "DATA",
      [
        "storage",
        "00c81910",
        null,
        "undefined *"
      ]
    ],
    [
      "008895b0",
      "DATA",
      [
        "storage",
        "00c81990",
        null,
        "undefined *"
      ]
    ],
    [
      "008895c8",
      "DATA",
      [
        "storage",
        "00c81a10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088958c",
      "DATA",
      [
        "storage",
        "00c828e0",
        null,
        "undefined *"
      ]
    ],
    [
      "008895b0",
      "DATA",
      [
        "storage",
        "00c82960",
        null,
        "undefined *"
      ]
    ],
    [
      "008895c8",
      "DATA",
      [
        "storage",
        "00c829e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888568 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888568 ["INT_ADD", "register:40f0:8", ["const:888568:8", "const:4:8"]]
- 00888568 ["CALLIND", null, ["register:0:8"]]
+ 00889514 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00889514 ["INT_ADD", "register:40f0:8", ["const:889514:8", "const:4:8"]]
+ 00889514 ["CALLIND", null, ["register:0:8"]]
- 00888594 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888594 ["INT_ADD", "register:40f0:8", ["const:888594:8", "const:4:8"]]
- 00888594 ["CALLIND", null, ["register:0:8"]]
+ 00889540 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00889540 ["INT_ADD", "register:40f0:8", ["const:889540:8", "const:4:8"]]
+ 00889540 ["CALLIND", null, ["register:0:8"]]
- 008885a4 ["INT_ADD", "register:40f0:8", ["const:8885a4:8", "const:4:8"]]
- 008885a4 ["CALL", null, ["callee:0058f794:8"]]
+ 00889550 ["INT_ADD", "register:40f0:8", ["const:889550:8", "const:4:8"]]
+ 00889550 ["CALL", null, ["callee:0058f794:8"]]
~~~


<a id="compare-0c90bb0bc5109a0b0e2848639cbb884e"></a>

### [`00888818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888818.md) → [`008897c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/008897c4.md) FUN_008897c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00888870",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008897ec"
      ]
    ],
    [
      "unmatched:008888a4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00889810"
      ]
    ],
    [
      "unmatched:008888a0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0088981c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008897ec"
      ]
    ],
    [
      "00889850",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00889810"
      ]
    ],
    [
      "0088984c",
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
- 0088883c ["INT_NOTEQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 0088883c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008897e8 ["INT_NOTEQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 008897e8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 0088884c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0088884c ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 008897f8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008897f8 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00888870 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00888870 ["CBRANCH", null, ["local:b1:8", "tmp:0:1"]]
~~~


<a id="compare-2e54c2e87602893bcc445bab7bbedbb9"></a>

### [`008888ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/008888ac.md) → [`00889858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889858.md) FUN_00889858

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007fd648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd648.md) · 呼出先 4件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 1件 [`007fe5ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe5ac.md) · 呼出先 4件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00889938",
      "incomplete_value": false,
      "site": "00889948",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088898c",
      "incomplete_value": false,
      "site": "0088899c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
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
      "definition_site": "00889940",
      "incomplete_value": false,
      "site": "00889948",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:1d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888994",
      "incomplete_value": false,
      "site": "0088899c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:208:8"
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
      "unmatched:00888928",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088999c"
      ]
    ],
    [
      "00889938",
      "PARAM",
      [
        "storage",
        "00c811f8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00889940",
      "PARAM",
      [
        "storage",
        "00c81208",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008898d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088999c"
      ]
    ],
    [
      "00889938",
      "PARAM",
      [
        "storage",
        "00c821c8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00889940",
      "PARAM",
      [
        "storage",
        "00c821d8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088899c ["INT_ADD", "register:40f0:8", ["const:88899c:8", "const:4:8"]]
- 0088899c ["CALL", null, ["callee:00c596b0:8"]]
+ 00889948 ["INT_ADD", "register:40f0:8", ["const:889948:8", "const:4:8"]]
+ 00889948 ["CALL", null, ["callee:00c596b0:8"]]
- 008888b0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008888b0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0088985c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0088985c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008888b8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008888b8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00889864 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00889864 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-b9db8964b8461c9923225eaf5730b488"></a>

### [`00888a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888a08.md) → [`008899b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/008899b4.md) FUN_008899b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`006ff698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff698.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 5件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 2件 [`006ffa48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ffa48.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 5件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 72.24% / 新版 72.24%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00889c78",
      "incomplete_value": false,
      "site": "00889c88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888ccc",
      "incomplete_value": false,
      "site": "00888cdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
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
      "definition_site": "00889c80",
      "incomplete_value": false,
      "site": "00889c88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:1d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888cd4",
      "incomplete_value": false,
      "site": "00888cdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:208:8"
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
      "definition_site": "00888da8",
      "incomplete_value": false,
      "site": "00888db0",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "00889adc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00888b3c"
      ]
    ],
    [
      "unmatched:00888b38",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00888b4c"
      ]
    ],
    [
      "unmatched:00888b40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00888b4c"
      ]
    ]
  ],
  "added": [
    [
      "00889adc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00889ae8"
      ]
    ],
    [
      "00889ae4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00889af8"
      ]
    ],
    [
      "00889aec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00889af8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888cdc ["INT_ADD", "register:40f0:8", ["const:888cdc:8", "const:4:8"]]
- 00888cdc ["CALL", null, ["callee:00c596b0:8"]]
+ 00889c88 ["INT_ADD", "register:40f0:8", ["const:889c88:8", "const:4:8"]]
+ 00889c88 ["CALL", null, ["callee:00c596b0:8"]]
- 00888db0 ["INT_ADD", "register:40f0:8", ["const:888db0:8", "const:4:8"]]
- 00888db0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00889d5c ["INT_ADD", "register:40f0:8", ["const:889d5c:8", "const:4:8"]]
+ 00889d5c ["CALL", null, ["callee:00c54d90:8"]]
- 00888ac4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00888ac4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00888ac4 ["CBRANCH", null, ["local:b27:8", "tmp:1:1"]]
+ 00889a70 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00889a70 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00889a70 ["CBRANCH", null, ["local:b26:8", "tmp:1:1"]]
~~~


<a id="compare-1adb57fe2b279f23a56036e878478e48"></a>

### [`00888e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e40.md) → [`00889dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889dec.md) FUN_00889dec

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
      "definition_site": "00889e10",
      "incomplete_value": false,
      "site": "00889e10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888e64",
      "incomplete_value": false,
      "site": "00888e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
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
      "00889e10",
      "DATA",
      [
        "storage",
        "00c812c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889e10",
      "DATA",
      [
        "storage",
        "00c82290",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888e54 ["INT_ADD", "register:40f0:8", ["const:888e54:8", "const:4:8"]]
- 00888e54 ["CALL", null, ["callee:00c58f30:8"]]
+ 00889e00 ["INT_ADD", "register:40f0:8", ["const:889e00:8", "const:4:8"]]
+ 00889e00 ["CALL", null, ["callee:00c58f30:8"]]
- 00888e5c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00889e08 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00888e60 ["COPY", "tmp:0:8", ["const:2c0:8"]]
- 00888e60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00888e60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00888e60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00889e0c ["COPY", "tmp:0:8", ["const:290:8"]]
+ 00889e0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00889e0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00889e0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9b94afa99fd6bab1c7ae9bf31fe7d1f4"></a>

### [`00888e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e74.md) → [`00889e20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889e20.md) FUN_00889e20

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
      "definition_site": "00889e2c",
      "incomplete_value": false,
      "site": "00889e2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888e80",
      "incomplete_value": false,
      "site": "00888e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
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
      "00889e2c",
      "DATA",
      [
        "storage",
        "00c812c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889e2c",
      "DATA",
      [
        "storage",
        "00c82290",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888e78 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 00889e24 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 00888e7c ["COPY", "tmp:0:8", ["const:2c0:8"]]
- 00888e7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00888e7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00888e7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00889e28 ["COPY", "tmp:0:8", ["const:290:8"]]
+ 00889e28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00889e28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00889e28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-20d0e19b236a5f91a4de3158af0c8ba0"></a>

### [`00889040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889040.md) → [`00889fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889fec.md) FUN_00889fec

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
      "definition_site": "00889050",
      "incomplete_value": false,
      "site": "00889054",
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
      "unmatched:00889040",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00889044",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00889064",
      "DATA",
      [
        "storage",
        "00c81350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889fec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00889ff0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088a010",
      "DATA",
      [
        "storage",
        "00c82320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889054 ["INT_ADD", "register:40f0:8", ["const:889054:8", "const:4:8"]]
- 00889054 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088a000 ["INT_ADD", "register:40f0:8", ["const:88a000:8", "const:4:8"]]
+ 0088a000 ["CALL", null, ["callee:00c58f30:8"]]
- 00889040 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00889040 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00889040 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00889040 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00889044 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00889044 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-0ae5136c320af09d4f6c8cef417ee7d5"></a>

### [`00889074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889074.md) → [`0088a020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a020.md) FUN_0088a020

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
      "unmatched:00889080",
      "DATA",
      [
        "storage",
        "00c81350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a02c",
      "DATA",
      [
        "storage",
        "00c82320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889074 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00889074 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00889078 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0088907c ["COPY", "tmp:0:8", ["const:350:8"]]
- 0088907c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088907c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088907c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-017d9171b45af12ca082280f3a69392a"></a>

### [`00889234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889234.md) → [`0088a1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a1e0.md) FUN_0088a1e0

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
      "definition_site": "0088a1f4",
      "incomplete_value": false,
      "site": "0088a1f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:3b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889248",
      "incomplete_value": false,
      "site": "0088924c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:3e0:8"
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
      "0088a1f8",
      "DATA",
      [
        "storage",
        "00c813e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a1f8",
      "DATA",
      [
        "storage",
        "00c823b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889240 ["INT_ADD", "register:40f0:8", ["const:889240:8", "const:4:8"]]
- 00889240 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088a1ec ["INT_ADD", "register:40f0:8", ["const:88a1ec:8", "const:4:8"]]
+ 0088a1ec ["CALL", null, ["callee:00c58f30:8"]]
- 00889244 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088a1f0 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00889248 ["COPY", "tmp:0:8", ["const:3e0:8"]]
- 00889248 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00889248 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00889248 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088a1f4 ["COPY", "tmp:0:8", ["const:3b0:8"]]
+ 0088a1f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a1f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a1f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-809d119e7bac00c2969c0d722d1ce53e"></a>

### [`00889258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889258.md) → [`0088a204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a204.md) FUN_0088a204

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
      "definition_site": "0088a208",
      "incomplete_value": false,
      "site": "0088a20c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:3b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088925c",
      "incomplete_value": false,
      "site": "00889260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:3e0:8"
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
      "0088a20c",
      "DATA",
      [
        "storage",
        "00c813e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a20c",
      "DATA",
      [
        "storage",
        "00c823b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889258 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088a204 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088925c ["COPY", "tmp:0:8", ["const:3e0:8"]]
- 0088925c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088925c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088925c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088a208 ["COPY", "tmp:0:8", ["const:3b0:8"]]
+ 0088a208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3a69b3ce13d753265e6cb108013bb9f5"></a>

### [`00889270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889270.md) → [`0088a21c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a21c.md) FUN_0088a21c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`0066d13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d13c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md) [`0066d4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4ec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 90.67% / 新版 90.67%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00889340"
      ],
      [
        "FALL_THROUGH",
        "0088a2ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0088a2ec",
      "incomplete_value": true,
      "site": "0088a2f4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889340",
      "incomplete_value": true,
      "site": "00889348",
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
    "ordinal": 22,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00889340"
      ],
      [
        "FALL_THROUGH",
        "0088a2ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0088a2ec",
      "incomplete_value": true,
      "site": "0088a2fc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889340",
      "incomplete_value": true,
      "site": "00889350",
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
    "ordinal": 23,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0088a258",
      "READ",
      [
        "storage",
        "002a0662",
        null,
        "string"
      ]
    ],
    [
      "0088a2ac",
      "READ",
      [
        "storage",
        "002a0662",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00889340",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088a334"
      ]
    ]
  ],
  "added": [
    [
      "0088a258",
      "READ",
      [
        "storage",
        "002a06a2",
        null,
        "string"
      ]
    ],
    [
      "0088a2ac",
      "READ",
      [
        "storage",
        "002a06a2",
        null,
        "string"
      ]
    ],
    [
      "0088a2ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088a334"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889298 ["COPY", "tmp:0:8", ["const:662:8"]]
- 00889298 ["INT_CARRY", "register:105:1", ["register:40b8:8", "tmp:0:8"]]
- 00889298 ["INT_SCARRY", "register:106:1", ["register:40b8:8", "tmp:0:8"]]
- 00889298 ["INT_ADD", "tmp:1:8", ["register:40b8:8", "tmp:0:8"]]
+ 0088a244 ["COPY", "tmp:0:8", ["const:6a2:8"]]
+ 0088a244 ["INT_CARRY", "register:105:1", ["register:40b8:8", "tmp:0:8"]]
+ 0088a244 ["INT_SCARRY", "register:106:1", ["register:40b8:8", "tmp:0:8"]]
+ 0088a244 ["INT_ADD", "tmp:1:8", ["register:40b8:8", "tmp:0:8"]]
- 008892cc ["INT_ADD", "register:40f0:8", ["const:8892cc:8", "const:4:8"]]
- 008892cc ["CALL", null, ["callee:004413ec:8"]]
+ 0088a278 ["INT_ADD", "register:40f0:8", ["const:88a278:8", "const:4:8"]]
+ 0088a278 ["CALL", null, ["callee:004413ec:8"]]
- 008892ec ["COPY", "register:0:8", ["register:4048:8"]]
- 008892ec ["INT_ADD", "register:40f0:8", ["const:8892ec:8", "const:4:8"]]
- 008892ec ["CALLIND", null, ["register:0:8"]]
+ 0088a298 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0088a298 ["INT_ADD", "register:40f0:8", ["const:88a298:8", "const:4:8"]]
+ 0088a298 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0ff71e8f06fa709879ca0bea37b07e90"></a>

### [`00889730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889730.md) → [`0088a6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a6dc.md) FUN_0088a6dc

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
      "unmatched:00889754",
      "DATA",
      [
        "storage",
        "00c81460",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00889758",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088975c",
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
      "0088a700",
      "DATA",
      [
        "storage",
        "00c82430",
        null,
        "undefined *"
      ]
    ],
    [
      "0088a704",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088a708",
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
- 00889744 ["INT_ADD", "register:40f0:8", ["const:889744:8", "const:4:8"]]
- 00889744 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088a6f0 ["INT_ADD", "register:40f0:8", ["const:88a6f0:8", "const:4:8"]]
+ 0088a6f0 ["CALL", null, ["callee:00c58f30:8"]]
- 0088974c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088a6f8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00889750 ["COPY", "tmp:0:8", ["const:460:8"]]
- 00889750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00889750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00889750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c36f0b85d5f24d64ba948329c2671dd3"></a>

### [`00889764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889764.md) → [`0088a710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a710.md) FUN_0088a710

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
      "definition_site": "0088a71c",
      "incomplete_value": false,
      "site": "0088a71c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889770",
      "incomplete_value": false,
      "site": "00889770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:460:8"
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
      "0088a71c",
      "DATA",
      [
        "storage",
        "00c81460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a71c",
      "DATA",
      [
        "storage",
        "00c82430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889768 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 0088a714 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 0088976c ["COPY", "tmp:0:8", ["const:460:8"]]
- 0088976c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088976c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088976c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088a718 ["COPY", "tmp:0:8", ["const:430:8"]]
+ 0088a718 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088a718 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088a718 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6c38da30e32236a00523e21783575414"></a>

### [`00889780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889780.md) → [`0088a72c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a72c.md) FUN_0088a72c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`0066d13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d13c.md) [`00aa34d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa34d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md) [`0066d4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4ec.md) [`00aa44c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa4/00aa44c4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.84% / 新版 96.84%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088a8b4",
      "incomplete_value": true,
      "site": "0088a8bc",
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
            "const:10:8"
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
      "definition_site": "0088a8b8",
      "incomplete_value": true,
      "site": "0088a8bc",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088a918",
      "incomplete_value": true,
      "site": "0088a928",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:008897a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "0088a784",
      "READ",
      [
        "storage",
        "002a0662",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00889804",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088a7cc"
      ]
    ]
  ],
  "added": [
    [
      "0088a750",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "0088a784",
      "READ",
      [
        "storage",
        "002a06a2",
        null,
        "string"
      ]
    ],
    [
      "0088a7b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088a7cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889910 ["INT_ADD", "register:40f0:8", ["const:889910:8", "const:4:8"]]
- 00889910 ["CALL", null, ["callee:004413ec:8"]]
+ 0088a8bc ["INT_ADD", "register:40f0:8", ["const:88a8bc:8", "const:4:8"]]
+ 0088a8bc ["CALL", null, ["callee:004413ec:8"]]
- 0088997c ["INT_ADD", "register:40f0:8", ["const:88997c:8", "const:4:8"]]
- 0088997c ["CALL", null, ["callee:0052e060:8"]]
+ 0088a928 ["INT_ADD", "register:40f0:8", ["const:88a928:8", "const:4:8"]]
+ 0088a928 ["CALL", null, ["callee:0052e060:8"]]
- 008897a4 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008897a4 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008897a4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-90b87a27c324bfb1c98f92a6b277be3c"></a>

### [`00889bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bac.md) → [`0088ab58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088ab58.md) FUN_0088ab58

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
      "unmatched:00889bd0",
      "DATA",
      [
        "storage",
        "00c814e0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00889bd4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00889bd8",
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
      "0088ab7c",
      "DATA",
      [
        "storage",
        "00c824b0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088ab80",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088ab84",
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
- 00889bc0 ["INT_ADD", "register:40f0:8", ["const:889bc0:8", "const:4:8"]]
- 00889bc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088ab6c ["INT_ADD", "register:40f0:8", ["const:88ab6c:8", "const:4:8"]]
+ 0088ab6c ["CALL", null, ["callee:00c58f30:8"]]
- 00889bc8 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088ab74 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00889bcc ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 00889bcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00889bcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00889bcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f1c32c93582b524f9c131325436d1123"></a>

### [`00889be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889be0.md) → [`0088ab8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088ab8c.md) FUN_0088ab8c

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
      "definition_site": "0088ab98",
      "incomplete_value": false,
      "site": "0088ab98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889bec",
      "incomplete_value": false,
      "site": "00889bec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:4e0:8"
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
      "0088ab98",
      "DATA",
      [
        "storage",
        "00c814e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088ab98",
      "DATA",
      [
        "storage",
        "00c824b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889be4 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 0088ab90 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 00889be8 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 00889be8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00889be8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00889be8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088ab94 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 0088ab94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088ab94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088ab94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5e18f379571e42afb0a3c5395626ecbd"></a>

### [`00889bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bfc.md) → [`0088aba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088aba8.md) FUN_0088aba8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`00889dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889dc0.md) [`00889dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889dc4.md) [`0088a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1bc.md) [`0088a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1c0.md) [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0088ad6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088ad6c.md) [`0088ad70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088ad70.md) [`0088b168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b168.md) [`0088b16c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b16c.md) [`00b38c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38c18.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 66.04% / 新版 66.04%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00889c44",
      "incomplete_value": true,
      "site": "00889c4c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00889c48",
      "incomplete_value": true,
      "site": "00889c4c",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00889c00",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00889c04",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00889c20",
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
      "0088abac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088abb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088abcc",
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
- 00889c4c ["INT_ADD", "register:40f0:8", ["const:889c4c:8", "const:4:8"]]
- 00889c4c ["CALL", null, ["callee:00b38c18:8"]]
+ 0088abf8 ["INT_ADD", "register:40f0:8", ["const:88abf8:8", "const:4:8"]]
+ 0088abf8 ["CALL", null, ["callee:00b38c18:8"]]
- 00889bfc ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 00889c00 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00889c00 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00889c00 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00889c00 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-088993c3fb79fb8e6c168c1787fadf94"></a>

### [`00889d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889d78.md) → [`0088ad24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088ad24.md) FUN_0088ad24

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
      "definition_site": "0088ad48",
      "incomplete_value": false,
      "site": "0088ad48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889d9c",
      "incomplete_value": false,
      "site": "00889d9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "0088ad48",
      "DATA",
      [
        "storage",
        "00c81550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088ad48",
      "DATA",
      [
        "storage",
        "00c82520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889d8c ["INT_ADD", "register:40f0:8", ["const:889d8c:8", "const:4:8"]]
- 00889d8c ["CALL", null, ["callee:00c58f30:8"]]
+ 0088ad38 ["INT_ADD", "register:40f0:8", ["const:88ad38:8", "const:4:8"]]
+ 0088ad38 ["CALL", null, ["callee:00c58f30:8"]]
- 00889d94 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088ad40 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00889d98 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00889d98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00889d98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00889d98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088ad44 ["COPY", "tmp:0:8", ["const:520:8"]]
+ 0088ad44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088ad44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088ad44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5135bc6b152160d6af6cd94e2f4ac69a"></a>

### [`00889dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889dac.md) → [`0088ad58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088ad58.md) FUN_0088ad58

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
      "definition_site": "0088ad64",
      "incomplete_value": false,
      "site": "0088ad64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889db8",
      "incomplete_value": false,
      "site": "00889db8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "0088ad64",
      "DATA",
      [
        "storage",
        "00c81550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088ad64",
      "DATA",
      [
        "storage",
        "00c82520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889db0 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 0088ad5c ["COPY", "register:4048:8", ["const:c82000:8"]]
- 00889db4 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00889db4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00889db4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00889db4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088ad60 ["COPY", "tmp:0:8", ["const:520:8"]]
+ 0088ad60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088ad60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088ad60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f91b6e4ec573346d00e15fec506f3da3"></a>

### [`00889dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889dc8.md) → [`0088ad74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088ad74.md) FUN_0088ad74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`0066d13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d13c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md) [`0066d4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4ec.md) [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.02% / 新版 91.02%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088ae0c",
      "incomplete_value": true,
      "site": "0088ae0c",
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
                "const:6a2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889e60",
      "incomplete_value": true,
      "site": "00889e60",
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
                "const:662:8"
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
      "definition_site": "0088ae94",
      "incomplete_value": true,
      "site": "0088ae94",
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
                "const:a20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889ee8",
      "incomplete_value": true,
      "site": "00889ee8",
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
                "const:942:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00889ffc",
      "incomplete_value": true,
      "site": "0088a000",
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
      "0088adfc",
      "READ",
      [
        "storage",
        "002a0662",
        null,
        "string"
      ]
    ],
    [
      "0088ae70",
      "READ",
      [
        "storage",
        "002bb942",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00889f40",
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
      "0088adfc",
      "READ",
      [
        "storage",
        "002a06a2",
        null,
        "string"
      ]
    ],
    [
      "0088ae70",
      "READ",
      [
        "storage",
        "002bba20",
        null,
        "string"
      ]
    ],
    [
      "0088aeec",
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
- 0088a000 ["INT_ADD", "register:40f0:8", ["const:88a000:8", "const:4:8"]]
- 0088a000 ["CALL", null, ["callee:00c58f50:8"]]
+ 0088afac ["INT_ADD", "register:40f0:8", ["const:88afac:8", "const:4:8"]]
+ 0088afac ["CALL", null, ["callee:00c58f50:8"]]
- 00889df8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00889df8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0088ada4 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 0088ada4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00889e00 ["INT_ADD", "register:40f0:8", ["const:889e00:8", "const:4:8"]]
- 00889e00 ["CALL", null, ["callee:00c59180:8"]]
+ 0088adac ["INT_ADD", "register:40f0:8", ["const:88adac:8", "const:4:8"]]
+ 0088adac ["CALL", null, ["callee:00c59180:8"]]
~~~


<a id="compare-3f2317d2cfb292cc9193130c53ba995e"></a>

### [`0088a174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a174.md) → [`0088b120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b120.md) FUN_0088b120

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
      "definition_site": "0088b144",
      "incomplete_value": false,
      "site": "0088b144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a198",
      "incomplete_value": false,
      "site": "0088a198",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
      "0088b144",
      "DATA",
      [
        "storage",
        "00c815d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b144",
      "DATA",
      [
        "storage",
        "00c825a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a188 ["INT_ADD", "register:40f0:8", ["const:88a188:8", "const:4:8"]]
- 0088a188 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088b134 ["INT_ADD", "register:40f0:8", ["const:88b134:8", "const:4:8"]]
+ 0088b134 ["CALL", null, ["callee:00c58f30:8"]]
- 0088a190 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088b13c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088a194 ["COPY", "tmp:0:8", ["const:5d0:8"]]
- 0088a194 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a194 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a194 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b140 ["COPY", "tmp:0:8", ["const:5a0:8"]]
+ 0088b140 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b140 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b140 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c8b10f8da9295851fea2976627ada18d"></a>

### [`0088a1a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1a8.md) → [`0088b154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b154.md) FUN_0088b154

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
      "definition_site": "0088b160",
      "incomplete_value": false,
      "site": "0088b160",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a1b4",
      "incomplete_value": false,
      "site": "0088a1b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
      "0088b160",
      "DATA",
      [
        "storage",
        "00c815d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b160",
      "DATA",
      [
        "storage",
        "00c825a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a1ac ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 0088b158 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 0088a1b0 ["COPY", "tmp:0:8", ["const:5d0:8"]]
- 0088a1b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088a1b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088a1b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088b15c ["COPY", "tmp:0:8", ["const:5a0:8"]]
+ 0088b15c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088b15c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088b15c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-bb45bd2844f6600ee215ba6c2ab18219"></a>

### [`0088a1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1c4.md) → [`0088b170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b170.md) FUN_0088b170

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0069f31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f31c.md) [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md) [`006a3150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3150.md) [`006a3154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3154.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment

命令の説明率　旧版 94.94% / 新版 94.94%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b20c",
      "incomplete_value": false,
      "site": "0088b218",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:610:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a260",
      "incomplete_value": false,
      "site": "0088a26c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:640:8"
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
      "definition_site": "0088b1cc",
      "incomplete_value": false,
      "site": "0088b1d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:6a3000:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a220",
      "incomplete_value": false,
      "site": "0088a22c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:6a2000:8"
          ],
          [
            "leaf",
            "const:da0:8"
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
      "unmatched:0088a220",
      "PARAM",
      [
        "storage",
        "006a2da0",
        null,
        null
      ]
    ],
    [
      "0088b218",
      "DATA",
      [
        "storage",
        "00c81640",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b264",
      "READ",
      [
        "storage",
        "00c81660",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0088b1cc",
      "PARAM",
      [
        "storage",
        "006a3150",
        null,
        null
      ]
    ],
    [
      "0088b218",
      "DATA",
      [
        "storage",
        "00c82610",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b264",
      "READ",
      [
        "storage",
        "00c82630",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a22c ["INT_ADD", "register:40f0:8", ["const:88a22c:8", "const:4:8"]]
- 0088a22c ["CALL", null, ["callee:006a3154:8"]]
+ 0088b1d8 ["INT_ADD", "register:40f0:8", ["const:88b1d8:8", "const:4:8"]]
+ 0088b1d8 ["CALL", null, ["callee:006a3154:8"]]
- 0088a1ec ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0088a1ec ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0088b198 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0088b198 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0088a1f4 ["INT_ADD", "register:40f0:8", ["const:88a1f4:8", "const:4:8"]]
- 0088a1f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088b1a0 ["INT_ADD", "register:40f0:8", ["const:88b1a0:8", "const:4:8"]]
+ 0088b1a0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-818593b63309b3b7aaa2ec24ad236e43"></a>

### [`0088a3a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a3a4.md) → [`0088b350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b350.md) FUN_0088b350

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
      "definition_site": "0088b364",
      "incomplete_value": false,
      "site": "0088b368",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:610:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a3b8",
      "incomplete_value": false,
      "site": "0088a3bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:640:8"
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
      "0088b368",
      "DATA",
      [
        "storage",
        "00c81640",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b368",
      "DATA",
      [
        "storage",
        "00c82610",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a3b0 ["INT_ADD", "register:40f0:8", ["const:88a3b0:8", "const:4:8"]]
- 0088a3b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088b35c ["INT_ADD", "register:40f0:8", ["const:88b35c:8", "const:4:8"]]
+ 0088b35c ["CALL", null, ["callee:00c58f30:8"]]
- 0088a3b4 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088b360 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088a3b8 ["COPY", "tmp:0:8", ["const:640:8"]]
- 0088a3b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a3b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a3b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b364 ["COPY", "tmp:0:8", ["const:610:8"]]
+ 0088b364 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b364 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b364 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d716d15d1ee85d643166bfe8349cf9b6"></a>

### [`0088a3c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a3c8.md) → [`0088b374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b374.md) FUN_0088b374

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
      "unmatched:0088a3d0",
      "DATA",
      [
        "storage",
        "00c81640",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b37c",
      "DATA",
      [
        "storage",
        "00c82610",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a3c8 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0088a3cc ["COPY", "tmp:0:8", ["const:640:8"]]
- 0088a3cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a3cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a3cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088a3d0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0088a3d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-8f212679ca87f6540414be5ef3883bc2"></a>

### [`0088a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a3e0.md) → [`0088b38c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b38c.md) FUN_0088b38c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00b38c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38c18.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088a47c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088b4b8"
      ]
    ]
  ],
  "added": [
    [
      "0088b428",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088b4b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a410 ["INT_ADD", "register:40f0:8", ["const:88a410:8", "const:4:8"]]
- 0088a410 ["CALL", null, ["callee:00b38c18:8"]]
+ 0088b3bc ["INT_ADD", "register:40f0:8", ["const:88b3bc:8", "const:4:8"]]
+ 0088b3bc ["CALL", null, ["callee:00b38c18:8"]]
- 0088a43c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088a43c ["INT_ADD", "register:40f0:8", ["const:88a43c:8", "const:4:8"]]
- 0088a43c ["CALLIND", null, ["register:0:8"]]
+ 0088b3e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088b3e8 ["INT_ADD", "register:40f0:8", ["const:88b3e8:8", "const:4:8"]]
+ 0088b3e8 ["CALLIND", null, ["register:0:8"]]
- 0088a46c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088a46c ["INT_ADD", "register:40f0:8", ["const:88a46c:8", "const:4:8"]]
- 0088a46c ["CALLIND", null, ["register:0:8"]]
+ 0088b418 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088b418 ["INT_ADD", "register:40f0:8", ["const:88b418:8", "const:4:8"]]
+ 0088b418 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4de3a8f32d76f1117228085727928bce"></a>

### [`0088a538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a538.md) → [`0088b4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b4e4.md) FUN_0088b4e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 5件 [`0088a688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a688.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 5件 [`0088b634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b634.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 98.81% / 新版 98.81%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088a62c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0088a688"
      ]
    ]
  ],
  "added": [
    [
      "0088b5d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0088b634"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a55c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0088a55c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 0088b508 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0088b508 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 0088a578 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0088a578 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 0088a578 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
+ 0088b524 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0088b524 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 0088b524 ["CBRANCH", null, ["local:b4:8", "tmp:1:1"]]
- 0088a584 ["BRANCH", null, ["local:b5:8"]]
+ 0088b530 ["BRANCH", null, ["local:b6:8"]]
~~~


<a id="compare-d3440f65ee599dde3b0f4297a55cb4af"></a>

### [`0088a828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a828.md) → [`0088b7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b7d4.md) FUN_0088b7d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.81% / 新版 73.81%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088b7e8",
      "incomplete_value": false,
      "site": "0088b7f8",
      "value": [
        "leaf",
        "const:170:8"
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
      "definition_site": "0088b858",
      "incomplete_value": false,
      "site": "0088b860",
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
            "const:ef1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a8ac",
      "incomplete_value": false,
      "site": "0088a8b4",
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
            "const:ea7:8"
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
      "unmatched:0088a86c",
      "DATA",
      [
        "storage",
        "00c816e0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088a884",
      "DATA",
      [
        "storage",
        "00c81128",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:0088a89c",
      "PARAM",
      [
        "storage",
        "002b3035",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088b818",
      "DATA",
      [
        "storage",
        "00c826b0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b830",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b848",
      "PARAM",
      [
        "storage",
        "002b307f",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a84c ["INT_ADD", "register:40f0:8", ["const:88a84c:8", "const:4:8"]]
- 0088a84c ["CALL", null, ["callee:00c58f30:8"]]
+ 0088b7f8 ["INT_ADD", "register:40f0:8", ["const:88b7f8:8", "const:4:8"]]
+ 0088b7f8 ["CALL", null, ["callee:00c58f30:8"]]
- 0088a8b4 ["INT_ADD", "register:40f0:8", ["const:88a8b4:8", "const:4:8"]]
- 0088a8b4 ["CALL", null, ["callee:00c59230:8"]]
+ 0088b860 ["INT_ADD", "register:40f0:8", ["const:88b860:8", "const:4:8"]]
+ 0088b860 ["CALL", null, ["callee:00c59230:8"]]
- 0088a85c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088b808 ["COPY", "register:4040:8", ["const:c82000:8"]]
~~~


<a id="compare-708db9a3c97aaab3cde4549f4747dc9f"></a>

### [`0088a8fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a8fc.md) → [`0088b8a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b8a8.md) FUN_0088b8a8

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
      "definition_site": "0088b8ac",
      "incomplete_value": false,
      "site": "0088b8b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a900",
      "incomplete_value": false,
      "site": "0088a904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "0088b8b0",
      "DATA",
      [
        "storage",
        "00c816e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b8b0",
      "DATA",
      [
        "storage",
        "00c826b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a8fc ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088b8a8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088a900 ["COPY", "tmp:0:8", ["const:6e0:8"]]
- 0088a900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b8ac ["COPY", "tmp:0:8", ["const:6b0:8"]]
+ 0088b8ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b8ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b8ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9d666d409d506f241e0ad61dd9abba45"></a>

### [`0088a90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a90c.md) → [`0088b8b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b8b8.md) FUN_0088b8b8

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
      "definition_site": "0088b8c8",
      "incomplete_value": false,
      "site": "0088b8d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a91c",
      "incomplete_value": false,
      "site": "0088a924",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
      "0088b8d0",
      "DATA",
      [
        "storage",
        "00c816e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b8d0",
      "DATA",
      [
        "storage",
        "00c826b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a918 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088b8c4 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088a91c ["COPY", "tmp:0:8", ["const:6e0:8"]]
- 0088a91c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a91c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a91c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b8c8 ["COPY", "tmp:0:8", ["const:6b0:8"]]
+ 0088b8c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b8c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b8c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088a928 ["INT_ADD", "register:40f0:8", ["const:88a928:8", "const:4:8"]]
- 0088a928 ["CALL", null, ["callee:00c58f40:8"]]
+ 0088b8d4 ["INT_ADD", "register:40f0:8", ["const:88b8d4:8", "const:4:8"]]
+ 0088b8d4 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-01ee49256bf6bc5d681270de682d6127"></a>

### [`0088a948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a948.md) → [`0088b8f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b8f4.md) FUN_0088b8f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 4件 [`0088ac64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088ac64.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8f0.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 4件 [`0088bc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bc10.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.32% / 新版 96.32%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088aa24",
      "incomplete_value": false,
      "site": "0088aa2c",
      "value": [
        "leaf",
        "const:28:8"
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
      "unmatched:0088a974",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088abd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088bb8c"
      ]
    ]
  ],
  "added": [
    [
      "0088b920",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "0088bb80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088bb8c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088aa2c ["INT_ADD", "register:40f0:8", ["const:88aa2c:8", "const:4:8"]]
- 0088aa2c ["CALL", null, ["callee:00c58f30:8"]]
+ 0088b9d8 ["INT_ADD", "register:40f0:8", ["const:88b9d8:8", "const:4:8"]]
+ 0088b9d8 ["CALL", null, ["callee:00c58f30:8"]]
- 0088a974 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0088a974 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0088a974 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 0088a980 ["INT_EQUAL", "tmp:0:1", ["register:40c0:8", "const:0:8"]]
- 0088a980 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0088b92c ["INT_EQUAL", "tmp:0:1", ["register:40c0:8", "const:0:8"]]
+ 0088b92c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-f815c9a21c69760f629ba6ee0022401b"></a>

### [`0088ac64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088ac64.md) → [`0088bc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bc10.md) FUN_0088bc10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0088a948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a948.md) · 呼出先 3件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0088b8f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b8f4.md) · 呼出先 3件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 97.70% / 新版 97.70%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0088ac80"
      ],
      [
        "FALL_THROUGH",
        "0088bc2c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0088bc2c",
      "incomplete_value": true,
      "site": "0088bc3c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "0088ac80",
      "incomplete_value": true,
      "site": "0088ac90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "INT_RIGHT",
            "8",
            [
              [
                "live",
                "register:4008:8"
              ],
              [
                "leaf",
                "const:3d:8"
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
      "unmatched:0088ac80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088bd68"
      ]
    ],
    [
      "unmatched:0088ac94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088bc4c"
      ]
    ]
  ],
  "added": [
    [
      "0088bc2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088bd68"
      ]
    ],
    [
      "0088bc40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088bc4c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ac74 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0088ac74 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 0088bc20 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0088bc20 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 0088ac80 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0088ac80 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
- 0088ac88 ["INT_ADD", "register:40f0:8", ["const:88ac88:8", "const:4:8"]]
- 0088ac88 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088bc34 ["INT_ADD", "register:40f0:8", ["const:88bc34:8", "const:4:8"]]
+ 0088bc34 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-00136ee514dc57c21527377a933d0f79"></a>

### [`0088adc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088adc0.md) → [`0088bd6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bd6c.md) FUN_0088bd6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.77% / 新版 69.77%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088ae4c",
      "incomplete_value": true,
      "site": "0088ae50",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088ae48",
      "incomplete_value": false,
      "site": "0088ae50",
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
            "const:384:8"
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
      "unmatched:0088ae04",
      "DATA",
      [
        "storage",
        "00c81730",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088ae1c",
      "DATA",
      [
        "storage",
        "00c81148",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:0088ae38",
      "PARAM",
      [
        "storage",
        "002a7dd9",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088bdb0",
      "DATA",
      [
        "storage",
        "00c82700",
        null,
        "undefined *"
      ]
    ],
    [
      "0088bdc8",
      "DATA",
      [
        "storage",
        "00c82118",
        null,
        "pointer"
      ]
    ],
    [
      "0088bde4",
      "PARAM",
      [
        "storage",
        "002a7f31",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ae50 ["INT_ADD", "register:40f0:8", ["const:88ae50:8", "const:4:8"]]
- 0088ae50 ["CALL", null, ["callee:00c59230:8"]]
+ 0088bdfc ["INT_ADD", "register:40f0:8", ["const:88bdfc:8", "const:4:8"]]
+ 0088bdfc ["CALL", null, ["callee:00c59230:8"]]
- 0088ade4 ["INT_ADD", "register:40f0:8", ["const:88ade4:8", "const:4:8"]]
- 0088ade4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088bd90 ["INT_ADD", "register:40f0:8", ["const:88bd90:8", "const:4:8"]]
+ 0088bd90 ["CALL", null, ["callee:00c58f30:8"]]
- 0088adf4 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088bda0 ["COPY", "register:4040:8", ["const:c82000:8"]]
~~~


<a id="compare-af5971360a4248ee4b1c9425833af6f8"></a>

### [`0088ae98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088ae98.md) → [`0088be44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088be44.md) FUN_0088be44

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
      "definition_site": "0088be48",
      "incomplete_value": false,
      "site": "0088be4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088ae9c",
      "incomplete_value": false,
      "site": "0088aea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:730:8"
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
      "0088be4c",
      "DATA",
      [
        "storage",
        "00c81730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088be4c",
      "DATA",
      [
        "storage",
        "00c82700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ae98 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088be44 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088ae9c ["COPY", "tmp:0:8", ["const:730:8"]]
- 0088ae9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088ae9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088ae9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088be48 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 0088be48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088be48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088be48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f018914a28858031f3fac2a428c6859d"></a>

### [`0088aea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088aea8.md) → [`0088be54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088be54.md) FUN_0088be54

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
      "unmatched:0088aea8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088aeac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088aec0",
      "DATA",
      [
        "storage",
        "00c81730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088be54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088be58",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088be6c",
      "DATA",
      [
        "storage",
        "00c82700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088aea8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088aea8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088aea8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0088aea8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0088aeac ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0088aeac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0088aeb0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-24a746d70a58b82a766b7fcb41d9a60e"></a>

### [`0088aee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088aee4.md) → [`0088be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088be90.md) FUN_0088be90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 48.84% / 新版 48.84%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088aef8",
      "incomplete_value": false,
      "site": "0088af08",
      "value": [
        "leaf",
        "const:170:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088bf18",
      "incomplete_value": false,
      "site": "0088bf20",
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
            "const:b33:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088af6c",
      "incomplete_value": false,
      "site": "0088af74",
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
            "const:a66:8"
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
      "unmatched:0088aee4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088aee8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088aeec",
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
      "0088be90",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0088be94",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0088be98",
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
- 0088af08 ["INT_ADD", "register:40f0:8", ["const:88af08:8", "const:4:8"]]
- 0088af08 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088beb4 ["INT_ADD", "register:40f0:8", ["const:88beb4:8", "const:4:8"]]
+ 0088beb4 ["CALL", null, ["callee:00c58f30:8"]]
- 0088af74 ["INT_ADD", "register:40f0:8", ["const:88af74:8", "const:4:8"]]
- 0088af74 ["CALL", null, ["callee:00c59230:8"]]
+ 0088bf20 ["INT_ADD", "register:40f0:8", ["const:88bf20:8", "const:4:8"]]
+ 0088bf20 ["CALL", null, ["callee:00c59230:8"]]
- 0088aee4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 0088aee4 ["STORE", null, ["const:1b1:8", "register:8:8", "register:5100:8"]]
~~~


<a id="compare-39a40df20138b3f7f0b3cbf22cf76ae2"></a>

### [`0088afbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088afbc.md) → [`0088bf68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bf68.md) FUN_0088bf68

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
      "unmatched:0088afc4",
      "DATA",
      [
        "storage",
        "00c81780",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088afc8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f40"
      ]
    ]
  ],
  "added": [
    [
      "0088bf70",
      "DATA",
      [
        "storage",
        "00c82750",
        null,
        "undefined *"
      ]
    ],
    [
      "0088bf74",
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
- 0088afbc ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0088afc0 ["COPY", "tmp:0:8", ["const:780:8"]]
- 0088afc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088afc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088afc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088afc4 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 0088afc4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-3bd4ab49cbd980f1443e112db5b2d868"></a>

### [`0088afcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088afcc.md) → [`0088bf78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bf78.md) FUN_0088bf78

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
      "unmatched:0088afcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088afd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088afe4",
      "DATA",
      [
        "storage",
        "00c81780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088bf78",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088bf7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088bf90",
      "DATA",
      [
        "storage",
        "00c82750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088afcc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088afcc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088afcc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0088afcc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0088afd0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0088afd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0088afd4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-3e63569b2b19b5cca77751126ec99215"></a>

### [`0088affc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088affc.md) → [`0088bfa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bfa8.md) FUN_0088bfa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 1件 [`0088b36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b36c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0088c318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c318.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088b000",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0088c318"
      ]
    ]
  ],
  "added": [
    [
      "0088bfac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0088c318"
      ]
    ]
  ]
}
~~~


<a id="compare-f4a0e2bb0bbc87b9c1c91bda5a2d19b5"></a>

### [`0088b008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b008.md) → [`0088bfb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bfb4.md) FUN_0088bfb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 39.53% / 新版 39.53%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088b01c",
      "incomplete_value": false,
      "site": "0088b02c",
      "value": [
        "leaf",
        "const:170:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088c03c",
      "incomplete_value": false,
      "site": "0088c044",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:849:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b090",
      "incomplete_value": false,
      "site": "0088b098",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:77a:8"
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
      "unmatched:0088b008",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b00c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b010",
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
      "0088bfb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0088bfb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0088bfbc",
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
- 0088b02c ["INT_ADD", "register:40f0:8", ["const:88b02c:8", "const:4:8"]]
- 0088b02c ["CALL", null, ["callee:00c58f30:8"]]
+ 0088bfd8 ["INT_ADD", "register:40f0:8", ["const:88bfd8:8", "const:4:8"]]
+ 0088bfd8 ["CALL", null, ["callee:00c58f30:8"]]
- 0088b098 ["INT_ADD", "register:40f0:8", ["const:88b098:8", "const:4:8"]]
- 0088b098 ["CALL", null, ["callee:00c59230:8"]]
+ 0088c044 ["INT_ADD", "register:40f0:8", ["const:88c044:8", "const:4:8"]]
+ 0088c044 ["CALL", null, ["callee:00c59230:8"]]
- 0088b008 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 0088b008 ["STORE", null, ["const:1b1:8", "register:8:8", "register:5100:8"]]
~~~


<a id="compare-f88133dabf5670fbd44865d1530f3aef"></a>

### [`0088b0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b0e0.md) → [`0088c08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c08c.md) FUN_0088c08c

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
      "definition_site": "0088c090",
      "incomplete_value": false,
      "site": "0088c094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b0e4",
      "incomplete_value": false,
      "site": "0088b0e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
      "0088c094",
      "DATA",
      [
        "storage",
        "00c817d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c094",
      "DATA",
      [
        "storage",
        "00c827a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b0e0 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c08c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b0e4 ["COPY", "tmp:0:8", ["const:7d0:8"]]
- 0088b0e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b0e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b0e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088c090 ["COPY", "tmp:0:8", ["const:7a0:8"]]
+ 0088c090 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c090 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c090 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cbb9f8769db4071260b5fcacec7b2ab0"></a>

### [`0088b0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b0f0.md) → [`0088c09c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c09c.md) FUN_0088c09c

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
      "definition_site": "0088c0ac",
      "incomplete_value": false,
      "site": "0088c0b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b100",
      "incomplete_value": false,
      "site": "0088b108",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7d0:8"
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
      "0088c0b4",
      "DATA",
      [
        "storage",
        "00c817d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c0b4",
      "DATA",
      [
        "storage",
        "00c827a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b0fc ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c0a8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b100 ["COPY", "tmp:0:8", ["const:7d0:8"]]
- 0088b100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088c0ac ["COPY", "tmp:0:8", ["const:7a0:8"]]
+ 0088c0ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c0ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c0ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b10c ["INT_ADD", "register:40f0:8", ["const:88b10c:8", "const:4:8"]]
- 0088b10c ["CALL", null, ["callee:00c58f40:8"]]
+ 0088c0b8 ["INT_ADD", "register:40f0:8", ["const:88c0b8:8", "const:4:8"]]
+ 0088c0b8 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-73285c08fc8272c9365443e72363dbb7"></a>

### [`0088b12c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b12c.md) → [`0088c0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c0d8.md) FUN_0088c0d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088c110",
      "incomplete_value": false,
      "site": "0088c11c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b164",
      "incomplete_value": false,
      "site": "0088b170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:820:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088c130",
      "incomplete_value": false,
      "site": "0088c134",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:198:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b184",
      "incomplete_value": false,
      "site": "0088b188",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
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
      "definition_site": "0088c14c",
      "incomplete_value": false,
      "site": "0088c154",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:5fc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b1a0",
      "incomplete_value": false,
      "site": "0088b1a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:52d:8"
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
      "unmatched:0088b134",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b138",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088c11c",
      "DATA",
      [
        "storage",
        "00c81820",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c0e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088c0e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088c11c",
      "DATA",
      [
        "storage",
        "00c827f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b1a8 ["INT_ADD", "register:40f0:8", ["const:88b1a8:8", "const:4:8"]]
- 0088b1a8 ["CALL", null, ["callee:00c59230:8"]]
+ 0088c154 ["INT_ADD", "register:40f0:8", ["const:88c154:8", "const:4:8"]]
+ 0088c154 ["CALL", null, ["callee:00c59230:8"]]
- 0088b1b8 ["INT_ADD", "register:40f0:8", ["const:88b1b8:8", "const:4:8"]]
- 0088b1b8 ["CALL", null, ["callee:00c59230:8"]]
+ 0088c164 ["INT_ADD", "register:40f0:8", ["const:88c164:8", "const:4:8"]]
+ 0088c164 ["CALL", null, ["callee:00c59230:8"]]
- 0088b134 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0088b134 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0088b134 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0088b134 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d0e8748231f09c7f60de4174f5fc1bb5"></a>

### [`0088b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b200.md) → [`0088c1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c1ac.md) FUN_0088c1ac

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
      "definition_site": "0088c1b0",
      "incomplete_value": false,
      "site": "0088c1b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b204",
      "incomplete_value": false,
      "site": "0088b208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:820:8"
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
      "0088c1b4",
      "DATA",
      [
        "storage",
        "00c81820",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c1b4",
      "DATA",
      [
        "storage",
        "00c827f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b200 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c1ac ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b204 ["COPY", "tmp:0:8", ["const:820:8"]]
- 0088b204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088c1b0 ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 0088c1b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c1b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c1b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d83647fcb57e4861bfc5c0fabf0b6a5e"></a>

### [`0088b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b210.md) → [`0088c1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c1bc.md) FUN_0088c1bc

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
      "unmatched:0088b228",
      "DATA",
      [
        "storage",
        "00c81820",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c1d4",
      "DATA",
      [
        "storage",
        "00c827f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b21c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c1c8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b220 ["COPY", "tmp:0:8", ["const:820:8"]]
- 0088b220 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b220 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b220 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b224 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-44d0ededa4faf31fdd9b207c969a46c8"></a>

### [`0088b24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b24c.md) → [`0088c1f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c1f8.md) FUN_0088c1f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 59.52% / 新版 59.52%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088b260",
      "incomplete_value": false,
      "site": "0088b270",
      "value": [
        "leaf",
        "const:170:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088c27c",
      "incomplete_value": false,
      "site": "0088c284",
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
            "const:22b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b2d0",
      "incomplete_value": false,
      "site": "0088b2d8",
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
            "const:154:8"
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
      "unmatched:0088b24c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b250",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b254",
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
      "0088c1f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0088c1fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0088c200",
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
- 0088b270 ["INT_ADD", "register:40f0:8", ["const:88b270:8", "const:4:8"]]
- 0088b270 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088c21c ["INT_ADD", "register:40f0:8", ["const:88c21c:8", "const:4:8"]]
+ 0088c21c ["CALL", null, ["callee:00c58f30:8"]]
- 0088b2d8 ["INT_ADD", "register:40f0:8", ["const:88b2d8:8", "const:4:8"]]
- 0088b2d8 ["CALL", null, ["callee:00c59230:8"]]
+ 0088c284 ["INT_ADD", "register:40f0:8", ["const:88c284:8", "const:4:8"]]
+ 0088c284 ["CALL", null, ["callee:00c59230:8"]]
- 0088b24c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088b24c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088b24c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 0088b24c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-9d1c702fba3a156808961cb0e8094d45"></a>

### [`0088b320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b320.md) → [`0088c2cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c2cc.md) FUN_0088c2cc

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
      "definition_site": "0088c2d0",
      "incomplete_value": false,
      "site": "0088c2d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b324",
      "incomplete_value": false,
      "site": "0088b328",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:870:8"
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
      "0088c2d4",
      "DATA",
      [
        "storage",
        "00c81870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c2d4",
      "DATA",
      [
        "storage",
        "00c82840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b320 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c2cc ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b324 ["COPY", "tmp:0:8", ["const:870:8"]]
- 0088b324 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b324 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b324 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088c2d0 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 0088c2d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c2d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c2d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-68c47a4e3435e477ce0cea105745d755"></a>

### [`0088b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b330.md) → [`0088c2dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c2dc.md) FUN_0088c2dc

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
      "definition_site": "0088c2ec",
      "incomplete_value": false,
      "site": "0088c2f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b340",
      "incomplete_value": false,
      "site": "0088b348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:870:8"
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
      "0088c2f4",
      "DATA",
      [
        "storage",
        "00c81870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c2f4",
      "DATA",
      [
        "storage",
        "00c82840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b33c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c2e8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b340 ["COPY", "tmp:0:8", ["const:870:8"]]
- 0088b340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088c2ec ["COPY", "tmp:0:8", ["const:840:8"]]
+ 0088c2ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c2ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c2ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b34c ["INT_ADD", "register:40f0:8", ["const:88b34c:8", "const:4:8"]]
- 0088b34c ["CALL", null, ["callee:00c58f40:8"]]
+ 0088c2f8 ["INT_ADD", "register:40f0:8", ["const:88c2f8:8", "const:4:8"]]
+ 0088c2f8 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-aadc96714f708da09f428490a41916b5"></a>

### [`0088b36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b36c.md) → [`0088c318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c318.md) FUN_0088c318

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 7件 [`0088a93c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a93c.md) [`0088aed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088aed8.md) [`0088affc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088affc.md) [`0088b120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b120.md) [`0088b240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b240.md) · 呼出先 3件 [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 7件 [`0088b8e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b8e8.md) [`0088be84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088be84.md) [`0088bfa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088bfa8.md) [`0088c0cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c0cc.md) [`0088c1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c1ec.md) · 呼出先 3件 [`0059822c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059822c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 69.79% / 新版 69.79%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_branch_alignment` 7件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088c33c",
      "incomplete_value": false,
      "site": "0088c340",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b390",
      "incomplete_value": false,
      "site": "0088b394",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:108:8"
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
    "new": null,
    "old": {
      "definition_site": "0088b4c0",
      "incomplete_value": true,
      "site": "0088b4c4",
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
      "0088c340",
      "DATA",
      [
        "storage",
        "00c81108",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:0088b3c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0088b3d4"
      ]
    ],
    [
      "unmatched:0088b3c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088c394"
      ]
    ]
  ],
  "added": [
    [
      "0088c340",
      "DATA",
      [
        "storage",
        "00c820d8",
        null,
        "pointer"
      ]
    ],
    [
      "0088c370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088c380"
      ]
    ],
    [
      "0088c374",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088c394"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b4c4 ["INT_ADD", "register:40f0:8", ["const:88b4c4:8", "const:4:8"]]
- 0088b4c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0088c470 ["INT_ADD", "register:40f0:8", ["const:88c470:8", "const:4:8"]]
+ 0088c470 ["CALL", null, ["callee:00c58f50:8"]]
- 0088b38c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c338 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b390 ["COPY", "tmp:0:8", ["const:108:8"]]
- 0088b390 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b390 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b390 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088c33c ["COPY", "tmp:0:8", ["const:d8:8"]]
+ 0088c33c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c33c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c33c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-272f841a65c896cd987f3b070af3c8e5"></a>

### [`0088b4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b4f0.md) → [`0088c49c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c49c.md) FUN_0088c49c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.39% / 新版 69.39%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088b508",
      "incomplete_value": false,
      "site": "0088b520",
      "value": [
        "leaf",
        "const:180:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088c538",
      "incomplete_value": false,
      "site": "0088c540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:1f6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b58c",
      "incomplete_value": false,
      "site": "0088b594",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:118:8"
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
      "unmatched:0088b548",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088b550",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0088847c"
      ]
    ],
    [
      "unmatched:0088b560",
      "DATA",
      [
        "storage",
        "00c811e8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0088c4f4",
      "DATA",
      [
        "storage",
        "00c82890",
        null,
        "undefined *"
      ]
    ],
    [
      "0088c4fc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0088847c"
      ]
    ],
    [
      "0088c50c",
      "DATA",
      [
        "storage",
        "00c821b8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b520 ["INT_ADD", "register:40f0:8", ["const:88b520:8", "const:4:8"]]
- 0088b520 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088c4cc ["INT_ADD", "register:40f0:8", ["const:88c4cc:8", "const:4:8"]]
+ 0088c4cc ["CALL", null, ["callee:00c58f30:8"]]
- 0088b594 ["INT_ADD", "register:40f0:8", ["const:88b594:8", "const:4:8"]]
- 0088b594 ["CALL", null, ["callee:00c59230:8"]]
+ 0088c540 ["INT_ADD", "register:40f0:8", ["const:88c540:8", "const:4:8"]]
+ 0088c540 ["CALL", null, ["callee:00c59230:8"]]
- 0088b538 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c4e4 ["COPY", "register:4040:8", ["const:c82000:8"]]
~~~


<a id="compare-b0956f0b12bc8976eaecd6724a81be85"></a>

### [`0088b5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b5e0.md) → [`0088c58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c58c.md) FUN_0088c58c

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
      "definition_site": "0088c590",
      "incomplete_value": false,
      "site": "0088c594",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b5e4",
      "incomplete_value": false,
      "site": "0088b5e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
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
      "0088c594",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c594",
      "DATA",
      [
        "storage",
        "00c82890",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b5e0 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c58c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b5e4 ["COPY", "tmp:0:8", ["const:8c0:8"]]
- 0088b5e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b5e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b5e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088c590 ["COPY", "tmp:0:8", ["const:890:8"]]
+ 0088c590 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c590 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c590 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d1ce6080c7662d30f85b64ee2980afda"></a>

### [`0088b5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b5f0.md) → [`0088c59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c59c.md) FUN_0088c59c

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
      "unmatched:0088b608",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c5b4",
      "DATA",
      [
        "storage",
        "00c82890",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b5fc ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c5a8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b600 ["COPY", "tmp:0:8", ["const:8c0:8"]]
- 0088b600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b604 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-9e8eeb43a6c7d04f0cc319fca62af11e"></a>

### [`0088b620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b620.md) → [`0088c5cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c5cc.md) FUN_0088c5cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`0088b36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b36c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0059822c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059822c.md) [`0088c318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c318.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 56.67% / 新版 56.67%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088c5fc",
      "incomplete_value": true,
      "site": "0088c604",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": {
      "definition_site": "0088b650",
      "incomplete_value": true,
      "site": "0088b658",
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
            "const:40:8"
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
      "unmatched:0088b624",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b628",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b644",
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
      "0088c5d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088c5d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088c5f0",
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
- 0088b658 ["INT_ADD", "register:40f0:8", ["const:88b658:8", "const:4:8"]]
- 0088b658 ["CALL", null, ["callee:0059822c:8"]]
+ 0088c604 ["INT_ADD", "register:40f0:8", ["const:88c604:8", "const:4:8"]]
+ 0088c604 ["CALL", null, ["callee:0059822c:8"]]
- 0088b620 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 0088b624 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088b624 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088b624 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0088b624 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f1e506a7bd42eec05f0dae242833ea3f"></a>

### [`0088b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b6a0.md) → [`0088c64c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c64c.md) FUN_0088c64c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 48.84% / 新版 48.84%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088c660",
      "incomplete_value": false,
      "site": "0088c670",
      "value": [
        "leaf",
        "const:170:8"
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
      "definition_site": "0088c6d4",
      "incomplete_value": false,
      "site": "0088c6dc",
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
            "const:9d2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b728",
      "incomplete_value": true,
      "site": "0088b730",
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
            "const:903:8"
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
      "unmatched:0088b6a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b6a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b6a8",
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
      "0088c64c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0088c650",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0088c654",
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
- 0088b6c4 ["INT_ADD", "register:40f0:8", ["const:88b6c4:8", "const:4:8"]]
- 0088b6c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088c670 ["INT_ADD", "register:40f0:8", ["const:88c670:8", "const:4:8"]]
+ 0088c670 ["CALL", null, ["callee:00c58f30:8"]]
- 0088b730 ["INT_ADD", "register:40f0:8", ["const:88b730:8", "const:4:8"]]
- 0088b730 ["CALL", null, ["callee:00c59230:8"]]
+ 0088c6dc ["INT_ADD", "register:40f0:8", ["const:88c6dc:8", "const:4:8"]]
+ 0088c6dc ["CALL", null, ["callee:00c59230:8"]]
- 0088b6a0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 0088b6a0 ["STORE", null, ["const:1b1:8", "register:8:8", "register:5100:8"]]
~~~


<a id="compare-05002475dfcbff45674b0d818fcdbd3a"></a>

### [`0088b778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b778.md) → [`0088c724`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c724.md) FUN_0088c724

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.42% / 新版 74.42%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088b78c",
      "incomplete_value": false,
      "site": "0088b79c",
      "value": [
        "leaf",
        "const:170:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088c7ac",
      "incomplete_value": false,
      "site": "0088c7b4",
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
            "const:22b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b800",
      "incomplete_value": false,
      "site": "0088b808",
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
            "const:154:8"
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
      "unmatched:0088b7bc",
      "DATA",
      [
        "storage",
        "00c81870",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088b7d4",
      "DATA",
      [
        "storage",
        "00c811a8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:0088b7f0",
      "PARAM",
      [
        "storage",
        "002b86a3",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088c768",
      "DATA",
      [
        "storage",
        "00c82840",
        null,
        "undefined *"
      ]
    ],
    [
      "0088c780",
      "DATA",
      [
        "storage",
        "00c82178",
        null,
        "pointer"
      ]
    ],
    [
      "0088c79c",
      "PARAM",
      [
        "storage",
        "002b8772",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b79c ["INT_ADD", "register:40f0:8", ["const:88b79c:8", "const:4:8"]]
- 0088b79c ["CALL", null, ["callee:00c58f30:8"]]
+ 0088c748 ["INT_ADD", "register:40f0:8", ["const:88c748:8", "const:4:8"]]
+ 0088c748 ["CALL", null, ["callee:00c58f30:8"]]
- 0088b808 ["INT_ADD", "register:40f0:8", ["const:88b808:8", "const:4:8"]]
- 0088b808 ["CALL", null, ["callee:00c59230:8"]]
+ 0088c7b4 ["INT_ADD", "register:40f0:8", ["const:88c7b4:8", "const:4:8"]]
+ 0088c7b4 ["CALL", null, ["callee:00c59230:8"]]
- 0088b7ac ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c758 ["COPY", "register:4040:8", ["const:c82000:8"]]
~~~


<a id="compare-5bb086b17d12a0d56b70abf6a222d81c"></a>

### [`0088b850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b850.md) → [`0088c7fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c7fc.md) FUN_0088c7fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 3件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.35% / 新版 67.35%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088b868",
      "incomplete_value": false,
      "site": "0088b880",
      "value": [
        "leaf",
        "const:180:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088c898",
      "incomplete_value": true,
      "site": "0088c8a0",
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
            "const:1f6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b8ec",
      "incomplete_value": false,
      "site": "0088b8f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:118:8"
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
      "unmatched:0088b860",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b8a8",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088b8b0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0088847c"
      ]
    ]
  ],
  "added": [
    [
      "0088c80c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088c854",
      "DATA",
      [
        "storage",
        "00c82890",
        null,
        "undefined *"
      ]
    ],
    [
      "0088c85c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0088847c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b880 ["INT_ADD", "register:40f0:8", ["const:88b880:8", "const:4:8"]]
- 0088b880 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088c82c ["INT_ADD", "register:40f0:8", ["const:88c82c:8", "const:4:8"]]
+ 0088c82c ["CALL", null, ["callee:00c58f30:8"]]
- 0088b8f4 ["INT_ADD", "register:40f0:8", ["const:88b8f4:8", "const:4:8"]]
- 0088b8f4 ["CALL", null, ["callee:00c59230:8"]]
+ 0088c8a0 ["INT_ADD", "register:40f0:8", ["const:88c8a0:8", "const:4:8"]]
+ 0088c8a0 ["CALL", null, ["callee:00c59230:8"]]
- 0088b860 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0088b860 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0088b860 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 0088b860 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f8fe5b6b1f8f03af4639ebe2996f9b31"></a>

### [`0088b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b948.md) → [`0088c8f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c8f4.md) FUN_0088c8f4

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
      "definition_site": "0088c918",
      "incomplete_value": false,
      "site": "0088c918",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b96c",
      "incomplete_value": false,
      "site": "0088b96c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:910:8"
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
      "0088c918",
      "DATA",
      [
        "storage",
        "00c81910",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c918",
      "DATA",
      [
        "storage",
        "00c828e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b95c ["INT_ADD", "register:40f0:8", ["const:88b95c:8", "const:4:8"]]
- 0088b95c ["CALL", null, ["callee:00c58f30:8"]]
+ 0088c908 ["INT_ADD", "register:40f0:8", ["const:88c908:8", "const:4:8"]]
+ 0088c908 ["CALL", null, ["callee:00c58f30:8"]]
- 0088b964 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088c910 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088b968 ["COPY", "tmp:0:8", ["const:910:8"]]
- 0088b968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088c914 ["COPY", "tmp:0:8", ["const:8e0:8"]]
+ 0088c914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088c914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d2983d647b385578c50c9dd71b143d00"></a>

### [`0088b97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b97c.md) → [`0088c928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c928.md) FUN_0088c928

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
      "definition_site": "0088c934",
      "incomplete_value": false,
      "site": "0088c934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b988",
      "incomplete_value": false,
      "site": "0088b988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:910:8"
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
      "0088c934",
      "DATA",
      [
        "storage",
        "00c81910",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088c934",
      "DATA",
      [
        "storage",
        "00c828e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b980 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 0088c92c ["COPY", "register:4048:8", ["const:c82000:8"]]
- 0088b984 ["COPY", "tmp:0:8", ["const:910:8"]]
- 0088b984 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088b984 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088b984 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088c930 ["COPY", "tmp:0:8", ["const:8e0:8"]]
+ 0088c930 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088c930 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088c930 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5a932c8e2361b4ebdec225effc4d8567"></a>

### [`0088b998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b998.md) → [`0088c944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088c944.md) FUN_0088c944

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088b9c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b9cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088b9d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088c9bc"
      ]
    ]
  ],
  "added": [
    [
      "0088c974",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0088c978",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0088c980",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088c9bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b9c4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:18:8"]]
- 0088b9c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0088b9c8 ["COPY", "tmp:0:8", ["register:4050:8"]]
- 0088b9c8 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 0088b9c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:8:8"]]
- 0088b9c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0088b9cc ["COPY", "tmp:0:8", ["register:8:8"]]
- 0088b9cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4058:8"]]
~~~


<a id="compare-5436c8ad202aa81fabd333c10a939aa3"></a>

### [`0088ba58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088ba58.md) → [`0088ca04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088ca04.md) FUN_0088ca04

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
      "unmatched:0088ba58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088ba5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088ba7c",
      "DATA",
      [
        "storage",
        "00c81990",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088ca04",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088ca08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088ca28",
      "DATA",
      [
        "storage",
        "00c82960",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ba58 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088ba58 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088ba58 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0088ba58 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0088ba5c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0088ba5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0088ba60 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-8c55be1d8bc8d1cb6d1e5f86a079889b"></a>

### [`0088ba8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088ba8c.md) → [`0088ca38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088ca38.md) FUN_0088ca38

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
      "unmatched:0088ba98",
      "DATA",
      [
        "storage",
        "00c81990",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088ca44",
      "DATA",
      [
        "storage",
        "00c82960",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ba8c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0088ba8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0088ba90 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0088ba94 ["COPY", "tmp:0:8", ["const:990:8"]]
- 0088ba94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088ba94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088ba94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d8d07745de1ee08dbcd36473750a083a"></a>

### [`0088baa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088baa8.md) → [`0088ca54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088ca54.md) FUN_0088ca54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088bad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088cab8"
      ]
    ],
    [
      "unmatched:0088baf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088cacc"
      ]
    ],
    [
      "unmatched:0088bb18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088cacc"
      ]
    ]
  ],
  "added": [
    [
      "0088ca84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088cab8"
      ]
    ],
    [
      "0088caa4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088cacc"
      ]
    ],
    [
      "0088cac4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088cacc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088bad8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0088bad8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 0088bae8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088bae8 ["INT_ADD", "register:40f0:8", ["const:88bae8:8", "const:4:8"]]
- 0088bae8 ["CALLIND", null, ["register:0:8"]]
+ 0088ca94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088ca94 ["INT_ADD", "register:40f0:8", ["const:88ca94:8", "const:4:8"]]
+ 0088ca94 ["CALLIND", null, ["register:0:8"]]
- 0088baf8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0088baf8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-ff42aea914691f607356b150cfd87340"></a>

### [`0088bb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bb50.md) → [`0088cafc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cafc.md) FUN_0088cafc

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
      "unmatched:0088bb74",
      "DATA",
      [
        "storage",
        "00c81a10",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088bb78",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088bb7c",
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
      "0088cb20",
      "DATA",
      [
        "storage",
        "00c829e0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088cb24",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088cb28",
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
- 0088bb64 ["INT_ADD", "register:40f0:8", ["const:88bb64:8", "const:4:8"]]
- 0088bb64 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088cb10 ["INT_ADD", "register:40f0:8", ["const:88cb10:8", "const:4:8"]]
+ 0088cb10 ["CALL", null, ["callee:00c58f30:8"]]
- 0088bb6c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0088cb18 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088bb70 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0088bb70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088bb70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088bb70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0be6cee172d23af7934cbfdbafe89f0d"></a>

### [`0088bb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bb84.md) → [`0088cb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cb30.md) FUN_0088cb30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 40.00% / 新版 40.00%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088bb90",
      "DATA",
      [
        "storage",
        "00c81a10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088cb3c",
      "DATA",
      [
        "storage",
        "00c829e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088bb88 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0088bb8c ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0088bb8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088bb8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088bb8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088bb90 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 0088bb90 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 0088bb90 ["COPY", "tmp:2:8", ["register:4008:8"]]
- 0088bb90 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-fd3ce76f5c6150db294c7580c67be428"></a>

### [`0088bba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bba0.md) → [`0088cb4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cb4c.md) FUN_0088cb4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

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
      "unmatched:0088bbac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0088bbbc"
      ]
    ],
    [
      "unmatched:0088bbbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088bbc4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0045a0d4"
      ]
    ]
  ],
  "added": [
    [
      "0088cb58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088cb68"
      ]
    ],
    [
      "0088cb68",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088cb70",
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
- 0088bba0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0088bba0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0088bba4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:18:8"]]
- 0088bba4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0088bba8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:110:8"]]
- 0088bba8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5cdcdb92fedfe77206e0e75514293d88"></a>

### [`0088bbf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bbf4.md) → [`0088cba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cba0.md) FUN_0088cba0

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
      "unmatched:0088bbf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088bbf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088bc18",
      "DATA",
      [
        "storage",
        "00c81a90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088cba0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088cba4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088cbc4",
      "DATA",
      [
        "storage",
        "00c82a60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088bbf4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088bbf4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088bbf4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0088bbf4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0088bbf8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0088bbf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0088bbfc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-5bfde626e6e5c6fec46672fa20cfd44b"></a>

### [`0088bc28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bc28.md) → [`0088cbd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cbd4.md) FUN_0088cbd4

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
      "unmatched:0088bc34",
      "DATA",
      [
        "storage",
        "00c81a90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088cbe0",
      "DATA",
      [
        "storage",
        "00c82a60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088bc28 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0088bc28 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0088bc2c ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0088bc30 ["COPY", "tmp:0:8", ["const:a90:8"]]
- 0088bc30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088bc30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088bc30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2e447d37f0de28f7aa1dd6c20dc7e2a2"></a>

### [`0088bc44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bc44.md) → [`0088cbf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cbf0.md) FUN_0088cbf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00b37ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37ab4.md) [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00b38aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38aa8.md) [`00b38c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38c18.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088bc48",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088bc4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088bc50",
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
      "0088cbf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0088cbf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088cbfc",
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
- 0088bc44 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 0088bc48 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088bc48 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088bc48 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 0088bc48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0088bc4c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0088bc4c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0088bc4c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 0088bc4c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


