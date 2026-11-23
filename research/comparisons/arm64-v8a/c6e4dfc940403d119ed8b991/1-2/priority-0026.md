# v16.0.2 → v16.0.3 · 最優先の変更候補 (26)

[一覧の目次](README.md)

<a id="compare-a286b2087dd07ee2ecb3bf4da4ba6cfb"></a>

### [`005d1b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1b88.md) → [`005d1f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1f38.md) FUN_005d1f38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005d1ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1ccc.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 1件 [`005d207c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d207c.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.65% / 新版 87.65%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d2048",
      "incomplete_value": true,
      "site": "005d204c",
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
      "definition_site": "005d1c98",
      "incomplete_value": true,
      "site": "005d1c9c",
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
    "guard": [
      [
        "FALL_THROUGH",
        "005d1bfc"
      ],
      [
        "FALL_THROUGH",
        "005d1fac"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d1fac",
      "incomplete_value": true,
      "site": "005d1fb0",
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
      "definition_site": "005d1bfc",
      "incomplete_value": true,
      "site": "005d1c00",
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
      "unmatched:005d1ba0",
      "READ",
      [
        "storage",
        "00c9b500",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d1bac",
      "DATA",
      [
        "storage",
        "00c70fd0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d1bfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1fb8"
      ]
    ]
  ],
  "added": [
    [
      "005d1f50",
      "READ",
      [
        "storage",
        "00c9c4d0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1f5c",
      "DATA",
      [
        "storage",
        "00c71fa0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1fac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1fb8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1b98 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d1f48 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d1ba0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
- 005d1ba0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1ba4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:88:8"]]
- 005d1ba4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fd73343d29b03979c18c4718f3a6895a"></a>

### [`005d1cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1cf0.md) → [`005d20a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d20a0.md) FUN_005d20a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`005d2650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2650.md) [`005d27c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d27c0.md) [`005d2a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2a24.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`005d2a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2a00.md) [`005d2b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2b70.md) [`005d2dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2dd4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 97.79% / 新版 97.79%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d1d94",
      "incomplete_value": true,
      "site": "005d1da4",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d1d98",
      "incomplete_value": true,
      "site": "005d1da4",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d1d9c",
      "incomplete_value": true,
      "site": "005d1da4",
      "value": [
        "INT_OR",
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
                "const:40:8"
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
      "unmatched:005d1d20",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d1dd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d2418"
      ]
    ],
    [
      "unmatched:005d1e5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d222c"
      ]
    ]
  ],
  "added": [
    [
      "005d20d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "005d2184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d2418"
      ]
    ],
    [
      "005d220c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d222c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1da4 ["INT_ADD", "register:40f0:8", ["const:5d1da4:8", "const:4:8"]]
- 005d1da4 ["CALL", null, ["callee:005d2b70:8"]]
+ 005d2154 ["INT_ADD", "register:40f0:8", ["const:5d2154:8", "const:4:8"]]
+ 005d2154 ["CALL", null, ["callee:005d2b70:8"]]
- 005d1d1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:28:8"]]
- 005d1d1c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1d20 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005d1d20 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 005d1d20 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-bea42185bfa3b6fd2f1d233a57d9e181"></a>

### [`005d2bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2bf8.md) → [`005d2fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2fa8.md) FUN_005d2fa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) [`005d33a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d33a0.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 4件 [`005d0a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a40.md) [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) [`005d34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d34c4.md) [`005d3750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3750.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d2fd4",
      "incomplete_value": true,
      "site": "005d2fdc",
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d2c24",
      "incomplete_value": true,
      "site": "005d2c2c",
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
                "const:480:8"
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
    "new": {
      "definition_site": "005d2fd8",
      "incomplete_value": true,
      "site": "005d2fdc",
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d2c28",
      "incomplete_value": true,
      "site": "005d2c2c",
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
                "const:488:8"
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
      "005d2fd4",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d2fd4",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d2fd8",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d2fd4",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d2fd4",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d2fd8",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d2c2c ["INT_ADD", "register:40f0:8", ["const:5d2c2c:8", "const:4:8"]]
- 005d2c2c ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d2fdc ["INT_ADD", "register:40f0:8", ["const:5d2fdc:8", "const:4:8"]]
+ 005d2fdc ["CALL", null, ["callee:00c58fb0:8"]]
- 005d2c08 ["INT_ADD", "register:40f0:8", ["const:5d2c08:8", "const:4:8"]]
- 005d2c08 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d2fb8 ["INT_ADD", "register:40f0:8", ["const:5d2fb8:8", "const:4:8"]]
+ 005d2fb8 ["CALL", null, ["callee:00c58f90:8"]]
- 005d2c14 ["INT_ADD", "register:40f0:8", ["const:5d2c14:8", "const:4:8"]]
- 005d2c14 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d2fc4 ["INT_ADD", "register:40f0:8", ["const:5d2fc4:8", "const:4:8"]]
+ 005d2fc4 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-9599d9e429e5e3693c759b5b3468524e"></a>

### [`005d3ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3ea4.md) → [`005d4254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4254.md) FUN_005d4254

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) [`005d33a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d33a0.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 2件 [`005d34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d34c4.md) [`005d3750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3750.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4280",
      "incomplete_value": true,
      "site": "005d4288",
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d3ed0",
      "incomplete_value": true,
      "site": "005d3ed8",
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
                "const:480:8"
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
    "new": {
      "definition_site": "005d4284",
      "incomplete_value": true,
      "site": "005d4288",
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d3ed4",
      "incomplete_value": true,
      "site": "005d3ed8",
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
                "const:488:8"
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
      "005d4280",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d4280",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d4284",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d4280",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d4280",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d4284",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d3ed8 ["INT_ADD", "register:40f0:8", ["const:5d3ed8:8", "const:4:8"]]
- 005d3ed8 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d4288 ["INT_ADD", "register:40f0:8", ["const:5d4288:8", "const:4:8"]]
+ 005d4288 ["CALL", null, ["callee:00c58fb0:8"]]
- 005d3eb4 ["INT_ADD", "register:40f0:8", ["const:5d3eb4:8", "const:4:8"]]
- 005d3eb4 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d4264 ["INT_ADD", "register:40f0:8", ["const:5d4264:8", "const:4:8"]]
+ 005d4264 ["CALL", null, ["callee:00c58f90:8"]]
- 005d3ec0 ["INT_ADD", "register:40f0:8", ["const:5d3ec0:8", "const:4:8"]]
- 005d3ec0 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d4270 ["INT_ADD", "register:40f0:8", ["const:5d4270:8", "const:4:8"]]
+ 005d4270 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-5950c1f16b158390361694a85fa63f2c"></a>

### [`005d437c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d437c.md) → [`005d472c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d472c.md) FUN_005d472c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 1件 [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4758",
      "incomplete_value": true,
      "site": "005d4760",
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d43a8",
      "incomplete_value": true,
      "site": "005d43b0",
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
                "const:480:8"
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
    "new": {
      "definition_site": "005d475c",
      "incomplete_value": true,
      "site": "005d4760",
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d43ac",
      "incomplete_value": true,
      "site": "005d43b0",
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
                "const:488:8"
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
      "005d4758",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d4758",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d475c",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d4758",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d4758",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d475c",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d43b0 ["INT_ADD", "register:40f0:8", ["const:5d43b0:8", "const:4:8"]]
- 005d43b0 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d4760 ["INT_ADD", "register:40f0:8", ["const:5d4760:8", "const:4:8"]]
+ 005d4760 ["CALL", null, ["callee:00c58fb0:8"]]
- 005d438c ["INT_ADD", "register:40f0:8", ["const:5d438c:8", "const:4:8"]]
- 005d438c ["CALL", null, ["callee:00c58f90:8"]]
+ 005d473c ["INT_ADD", "register:40f0:8", ["const:5d473c:8", "const:4:8"]]
+ 005d473c ["CALL", null, ["callee:00c58f90:8"]]
- 005d4398 ["INT_ADD", "register:40f0:8", ["const:5d4398:8", "const:4:8"]]
- 005d4398 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d4748 ["INT_ADD", "register:40f0:8", ["const:5d4748:8", "const:4:8"]]
+ 005d4748 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-b660b901a1928603e1f18e6ef8a06f7d"></a>

### [`005d487c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d487c.md) → [`005d4c2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4c2c.md) FUN_005d4c2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d37c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d37c8.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 1件 [`005d3b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3b78.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4c58",
      "incomplete_value": true,
      "site": "005d4c60",
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d48a8",
      "incomplete_value": true,
      "site": "005d48b0",
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
                "const:480:8"
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
    "new": {
      "definition_site": "005d4c5c",
      "incomplete_value": true,
      "site": "005d4c60",
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d48ac",
      "incomplete_value": true,
      "site": "005d48b0",
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
                "const:488:8"
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
      "005d4c58",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d4c58",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d4c5c",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d4c58",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d4c58",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d4c5c",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d48b0 ["INT_ADD", "register:40f0:8", ["const:5d48b0:8", "const:4:8"]]
- 005d48b0 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d4c60 ["INT_ADD", "register:40f0:8", ["const:5d4c60:8", "const:4:8"]]
+ 005d4c60 ["CALL", null, ["callee:00c58fb0:8"]]
- 005d488c ["INT_ADD", "register:40f0:8", ["const:5d488c:8", "const:4:8"]]
- 005d488c ["CALL", null, ["callee:00c58f90:8"]]
+ 005d4c3c ["INT_ADD", "register:40f0:8", ["const:5d4c3c:8", "const:4:8"]]
+ 005d4c3c ["CALL", null, ["callee:00c58f90:8"]]
- 005d4898 ["INT_ADD", "register:40f0:8", ["const:5d4898:8", "const:4:8"]]
- 005d4898 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d4c48 ["INT_ADD", "register:40f0:8", ["const:5d4c48:8", "const:4:8"]]
+ 005d4c48 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-a6f05b51bd0aa3033e08096b1481c722"></a>

### [`005d4a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4a68.md) → [`005d4e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4e18.md) FUN_005d4e18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d48c8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`005d4c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4c78.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4e24",
      "incomplete_value": false,
      "site": "005d4e28",
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
      "definition_site": "005d4a74",
      "incomplete_value": false,
      "site": "005d4a78",
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
      "005d4e24",
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
      "005d4e24",
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
- 005d4a78 ["INT_ADD", "register:40f0:8", ["const:5d4a78:8", "const:4:8"]]
- 005d4a78 ["CALL", null, ["callee:0043bad8:8"]]
+ 005d4e28 ["INT_ADD", "register:40f0:8", ["const:5d4e28:8", "const:4:8"]]
+ 005d4e28 ["CALL", null, ["callee:0043bad8:8"]]
- 005d4a70 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005d4e20 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005d4a74 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005d4a74 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d4a74 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d4a74 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d4e24 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005d4e24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d4e24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d4e24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a79bd63cb7ffc79ed3c71d574c2943a9"></a>

### [`005d4a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4a7c.md) → [`005d4e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4e2c.md) FUN_005d4e2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d3c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3c98.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`005d4048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4048.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4e38",
      "incomplete_value": false,
      "site": "005d4e3c",
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
      "definition_site": "005d4a88",
      "incomplete_value": false,
      "site": "005d4a8c",
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
      "005d4e38",
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
      "005d4e38",
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
- 005d4a8c ["INT_ADD", "register:40f0:8", ["const:5d4a8c:8", "const:4:8"]]
- 005d4a8c ["CALL", null, ["callee:0043bad8:8"]]
+ 005d4e3c ["INT_ADD", "register:40f0:8", ["const:5d4e3c:8", "const:4:8"]]
+ 005d4e3c ["CALL", null, ["callee:0043bad8:8"]]
- 005d4a84 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005d4e34 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005d4a88 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005d4a88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d4a88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d4a88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d4e38 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005d4e38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d4e38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d4e38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6e8d4312bda5c10d441ca35081b2d742"></a>

### [`005d4b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4b88.md) → [`005d4f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4f38.md) FUN_005d4f38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`005cf00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf00c.md) [`005d57f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d57f8.md) · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.16% / 新版 90.16%

優先判定に残った影響 `store_value` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d4f90",
      "incomplete_value": true,
      "site": "005d4f90",
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
      "definition_site": "005d4be0",
      "incomplete_value": true,
      "site": "005d4be0",
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
      "definition_site": "005d4fc4",
      "incomplete_value": true,
      "site": "005d4fc4",
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
      "definition_site": "005d4c14",
      "incomplete_value": true,
      "site": "005d4c14",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d4ff4",
      "incomplete_value": true,
      "site": "005d4ffc",
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
      "definition_site": "005d4c44",
      "incomplete_value": true,
      "site": "005d4c4c",
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
      "005d4f84",
      "READ",
      [
        "storage",
        "00c9b458",
        null,
        "pointer"
      ]
    ],
    [
      "005d4f90",
      "DATA",
      [
        "storage",
        "00c70c10",
        null,
        "pointer"
      ]
    ],
    [
      "005d4fac",
      "READ",
      [
        "storage",
        "00c9b508",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d4f84",
      "READ",
      [
        "storage",
        "00c9c428",
        null,
        "pointer"
      ]
    ],
    [
      "005d4f90",
      "DATA",
      [
        "storage",
        "00c71be0",
        null,
        "pointer"
      ]
    ],
    [
      "005d4fac",
      "READ",
      [
        "storage",
        "00c9c4d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4bc4 ["INT_ADD", "register:40f0:8", ["const:5d4bc4:8", "const:4:8"]]
- 005d4bc4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d4f74 ["INT_ADD", "register:40f0:8", ["const:5d4f74:8", "const:4:8"]]
+ 005d4f74 ["CALL", null, ["callee:00c58f30:8"]]
- 005d4bcc ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 005d4f7c ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 005d4bd4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:458:8"]]
- 005d4bd4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d4f84 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:428:8"]]
+ 005d4f84 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-00227b5f592447884da57fb4a59aa167"></a>

### [`005d4cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4cc8.md) → [`005d5078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5078.md) FUN_005d5078

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 2件 [`005cf00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf00c.md) [`005d57f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d57f8.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d50a4",
      "incomplete_value": true,
      "site": "005d50ac",
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4cf4",
      "incomplete_value": true,
      "site": "005d4cfc",
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
                "const:480:8"
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
    "new": {
      "definition_site": "005d50a8",
      "incomplete_value": true,
      "site": "005d50ac",
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4cf8",
      "incomplete_value": true,
      "site": "005d4cfc",
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
                "const:488:8"
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
      "005d50a4",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d50a4",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d50a8",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d50a4",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d50a4",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d50a8",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4cfc ["INT_ADD", "register:40f0:8", ["const:5d4cfc:8", "const:4:8"]]
- 005d4cfc ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d50ac ["INT_ADD", "register:40f0:8", ["const:5d50ac:8", "const:4:8"]]
+ 005d50ac ["CALL", null, ["callee:00c58fb0:8"]]
- 005d4cd8 ["INT_ADD", "register:40f0:8", ["const:5d4cd8:8", "const:4:8"]]
- 005d4cd8 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d5088 ["INT_ADD", "register:40f0:8", ["const:5d5088:8", "const:4:8"]]
+ 005d5088 ["CALL", null, ["callee:00c58f90:8"]]
- 005d4ce4 ["INT_ADD", "register:40f0:8", ["const:5d4ce4:8", "const:4:8"]]
- 005d4ce4 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d5094 ["INT_ADD", "register:40f0:8", ["const:5d5094:8", "const:4:8"]]
+ 005d5094 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-0293baf36ef728a31a438ea021fe4341"></a>

### [`005d4d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4d14.md) → [`005d50c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d50c4.md) FUN_005d50c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 2件 [`005cf00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf00c.md) [`005d57f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d57f8.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d50f0",
      "incomplete_value": true,
      "site": "005d50f8",
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4d40",
      "incomplete_value": true,
      "site": "005d4d48",
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
                "const:480:8"
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
    "new": {
      "definition_site": "005d50f4",
      "incomplete_value": true,
      "site": "005d50f8",
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4d44",
      "incomplete_value": true,
      "site": "005d4d48",
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
                "const:488:8"
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
      "005d50f0",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d50f0",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d50f4",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d50f0",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d50f0",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d50f4",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4d48 ["INT_ADD", "register:40f0:8", ["const:5d4d48:8", "const:4:8"]]
- 005d4d48 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d50f8 ["INT_ADD", "register:40f0:8", ["const:5d50f8:8", "const:4:8"]]
+ 005d50f8 ["CALL", null, ["callee:00c58fb0:8"]]
- 005d4d24 ["INT_ADD", "register:40f0:8", ["const:5d4d24:8", "const:4:8"]]
- 005d4d24 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d50d4 ["INT_ADD", "register:40f0:8", ["const:5d50d4:8", "const:4:8"]]
+ 005d50d4 ["CALL", null, ["callee:00c58f90:8"]]
- 005d4d30 ["INT_ADD", "register:40f0:8", ["const:5d4d30:8", "const:4:8"]]
- 005d4d30 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d50e0 ["INT_ADD", "register:40f0:8", ["const:5d50e0:8", "const:4:8"]]
+ 005d50e0 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-e4cfceb02257a85b4c4da8ebd83e25ca"></a>

### [`005d4d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4d60.md) → [`005d5110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5110.md) FUN_005d5110

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d512c",
      "incomplete_value": true,
      "site": "005d5130",
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
      "definition_site": "005d4d7c",
      "incomplete_value": true,
      "site": "005d4d80",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d5150",
      "incomplete_value": true,
      "site": "005d5154",
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
      "definition_site": "005d4da0",
      "incomplete_value": true,
      "site": "005d4da4",
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
      "005d5124",
      "READ",
      [
        "storage",
        "00c9b518",
        null,
        "pointer"
      ]
    ],
    [
      "005d5130",
      "DATA",
      [
        "storage",
        "00c71108",
        null,
        "pointer"
      ]
    ],
    [
      "005d5148",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d5124",
      "READ",
      [
        "storage",
        "00c9c4e8",
        null,
        "pointer"
      ]
    ],
    [
      "005d5130",
      "DATA",
      [
        "storage",
        "00c720d8",
        null,
        "pointer"
      ]
    ],
    [
      "005d5148",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4d6c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d511c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d4d74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:518:8"]]
- 005d4d74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5124 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e8:8"]]
+ 005d5124 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d4d90 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d4d90 ["INT_ADD", "register:40f0:8", ["const:5d4d90:8", "const:4:8"]]
- 005d4d90 ["CALLIND", null, ["register:0:8"]]
+ 005d5140 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d5140 ["INT_ADD", "register:40f0:8", ["const:5d5140:8", "const:4:8"]]
+ 005d5140 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f174662960c59114069ed51b6e9e0cca"></a>

### [`005d5050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5050.md) → [`005d5400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5400.md) FUN_005d5400

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d541c",
      "incomplete_value": true,
      "site": "005d5420",
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
      "definition_site": "005d506c",
      "incomplete_value": true,
      "site": "005d5070",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d5440",
      "incomplete_value": true,
      "site": "005d5444",
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
      "definition_site": "005d5090",
      "incomplete_value": true,
      "site": "005d5094",
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
      "005d5414",
      "READ",
      [
        "storage",
        "00c9b518",
        null,
        "pointer"
      ]
    ],
    [
      "005d5420",
      "DATA",
      [
        "storage",
        "00c71108",
        null,
        "pointer"
      ]
    ],
    [
      "005d5438",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d5414",
      "READ",
      [
        "storage",
        "00c9c4e8",
        null,
        "pointer"
      ]
    ],
    [
      "005d5420",
      "DATA",
      [
        "storage",
        "00c720d8",
        null,
        "pointer"
      ]
    ],
    [
      "005d5438",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d505c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d540c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d5064 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:518:8"]]
- 005d5064 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5414 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e8:8"]]
+ 005d5414 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d5080 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d5080 ["INT_ADD", "register:40f0:8", ["const:5d5080:8", "const:4:8"]]
- 005d5080 ["CALLIND", null, ["register:0:8"]]
+ 005d5430 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d5430 ["INT_ADD", "register:40f0:8", ["const:5d5430:8", "const:4:8"]]
+ 005d5430 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e7786826f3be2fc48856e281bb9c5a68"></a>

### [`005d50d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d50d0.md) → [`005d5480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5480.md) FUN_005d5480

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d549c",
      "incomplete_value": true,
      "site": "005d54a0",
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
      "definition_site": "005d50ec",
      "incomplete_value": true,
      "site": "005d50f0",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d54c0",
      "incomplete_value": true,
      "site": "005d54c4",
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
      "definition_site": "005d5110",
      "incomplete_value": true,
      "site": "005d5114",
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
      "005d5494",
      "READ",
      [
        "storage",
        "00c9b518",
        null,
        "pointer"
      ]
    ],
    [
      "005d54a0",
      "DATA",
      [
        "storage",
        "00c71108",
        null,
        "pointer"
      ]
    ],
    [
      "005d54b8",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d5494",
      "READ",
      [
        "storage",
        "00c9c4e8",
        null,
        "pointer"
      ]
    ],
    [
      "005d54a0",
      "DATA",
      [
        "storage",
        "00c720d8",
        null,
        "pointer"
      ]
    ],
    [
      "005d54b8",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d50dc ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d548c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d50e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:518:8"]]
- 005d50e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5494 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e8:8"]]
+ 005d5494 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d5100 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d5100 ["INT_ADD", "register:40f0:8", ["const:5d5100:8", "const:4:8"]]
- 005d5100 ["CALLIND", null, ["register:0:8"]]
+ 005d54b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d54b0 ["INT_ADD", "register:40f0:8", ["const:5d54b0:8", "const:4:8"]]
+ 005d54b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-25a10eedefef4452ee668f500efb973f"></a>

### [`005d513c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d513c.md) → [`005d54ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d54ec.md) FUN_005d54ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d5508",
      "incomplete_value": true,
      "site": "005d550c",
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
      "definition_site": "005d5158",
      "incomplete_value": true,
      "site": "005d515c",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d552c",
      "incomplete_value": true,
      "site": "005d5530",
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
      "definition_site": "005d517c",
      "incomplete_value": true,
      "site": "005d5180",
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
      "005d5500",
      "READ",
      [
        "storage",
        "00c9b518",
        null,
        "pointer"
      ]
    ],
    [
      "005d550c",
      "DATA",
      [
        "storage",
        "00c71108",
        null,
        "pointer"
      ]
    ],
    [
      "005d5524",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d5500",
      "READ",
      [
        "storage",
        "00c9c4e8",
        null,
        "pointer"
      ]
    ],
    [
      "005d550c",
      "DATA",
      [
        "storage",
        "00c720d8",
        null,
        "pointer"
      ]
    ],
    [
      "005d5524",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d5148 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d54f8 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d5150 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:518:8"]]
- 005d5150 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5500 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e8:8"]]
+ 005d5500 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d516c ["COPY", "register:0:8", ["register:4040:8"]]
- 005d516c ["INT_ADD", "register:40f0:8", ["const:5d516c:8", "const:4:8"]]
- 005d516c ["CALLIND", null, ["register:0:8"]]
+ 005d551c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d551c ["INT_ADD", "register:40f0:8", ["const:5d551c:8", "const:4:8"]]
+ 005d551c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dc625241c30b871a85444c4941717e35"></a>

### [`005d51f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d51f0.md) → [`005d55a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55a0.md) FUN_005d55a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) [`005cdecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdecc.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 2件 [`005ce0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce0f0.md) [`005ce27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce27c.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d55cc",
      "incomplete_value": true,
      "site": "005d55d4",
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d521c",
      "incomplete_value": true,
      "site": "005d5224",
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
                "const:480:8"
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
    "new": {
      "definition_site": "005d55d0",
      "incomplete_value": true,
      "site": "005d55d4",
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d5220",
      "incomplete_value": true,
      "site": "005d5224",
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
                "const:488:8"
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
      "005d55cc",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d55cc",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d55d0",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d55cc",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d55cc",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d55d0",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d5224 ["INT_ADD", "register:40f0:8", ["const:5d5224:8", "const:4:8"]]
- 005d5224 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d55d4 ["INT_ADD", "register:40f0:8", ["const:5d55d4:8", "const:4:8"]]
+ 005d55d4 ["CALL", null, ["callee:00c58fb0:8"]]
- 005d5200 ["INT_ADD", "register:40f0:8", ["const:5d5200:8", "const:4:8"]]
- 005d5200 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d55b0 ["INT_ADD", "register:40f0:8", ["const:5d55b0:8", "const:4:8"]]
+ 005d55b0 ["CALL", null, ["callee:00c58f90:8"]]
- 005d520c ["INT_ADD", "register:40f0:8", ["const:5d520c:8", "const:4:8"]]
- 005d520c ["CALL", null, ["callee:00c5b850:8"]]
+ 005d55bc ["INT_ADD", "register:40f0:8", ["const:5d55bc:8", "const:4:8"]]
+ 005d55bc ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-0511d7b3ac4e3f178d2c611d55b42eb0"></a>

### [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) → [`005d55ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55ec.md) FUN_005d55ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) · 呼出先 7件 [`005cf0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf0dc.md) [`005d1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1038.md) [`005d1084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1084.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md)
- 新版 呼出元 2件 [`005ce0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce0f0.md) [`005d55ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55ec.md) · 呼出先 7件 [`005cf48c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf48c.md) [`005d13e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d13e8.md) [`005d1434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1434.md) [`005d55ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55ec.md) [`005d57f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d57f8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.42% / 新版 95.42%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d567c",
      "incomplete_value": true,
      "site": "005d5694",
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
      "definition_site": "005d52cc",
      "incomplete_value": true,
      "site": "005d52e4",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d57d0",
      "incomplete_value": true,
      "site": "005d57e0",
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
      "definition_site": "005d5420",
      "incomplete_value": true,
      "site": "005d5430",
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
      "005d566c",
      "READ",
      [
        "storage",
        "00c9b4b8",
        null,
        "pointer"
      ]
    ],
    [
      "005d5694",
      "DATA",
      [
        "storage",
        "00c71018",
        null,
        "pointer"
      ]
    ],
    [
      "005d57c0",
      "READ",
      [
        "storage",
        "00c9b4c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d566c",
      "READ",
      [
        "storage",
        "00c9c488",
        null,
        "pointer"
      ]
    ],
    [
      "005d5694",
      "DATA",
      [
        "storage",
        "00c71fe8",
        null,
        "pointer"
      ]
    ],
    [
      "005d57c0",
      "READ",
      [
        "storage",
        "00c9c490",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d525c ["INT_ADD", "register:40f0:8", ["const:5d525c:8", "const:4:8"]]
- 005d525c ["CALL", null, ["callee:005d5a38:8"]]
+ 005d560c ["INT_ADD", "register:40f0:8", ["const:5d560c:8", "const:4:8"]]
+ 005d560c ["CALL", null, ["callee:005d5a38:8"]]
- 005d52ac ["INT_ADD", "register:40f0:8", ["const:5d52ac:8", "const:4:8"]]
- 005d52ac ["CALL", null, ["callee:00c58f30:8"]]
+ 005d565c ["INT_ADD", "register:40f0:8", ["const:5d565c:8", "const:4:8"]]
+ 005d565c ["CALL", null, ["callee:00c58f30:8"]]
- 005d52b4 ["COPY", "register:4050:8", ["const:c9b000:8"]]
+ 005d5664 ["COPY", "register:4050:8", ["const:c9c000:8"]]
~~~


<a id="compare-9cf2f131db4e9d9a81df7346e8586a31"></a>

### [`005d5798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5798.md) → [`005d5b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5b48.md) FUN_005d5b48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 72.73% / 新版 72.73%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d5b58",
      "incomplete_value": true,
      "site": "005d5b5c",
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
      "definition_site": "005d57a8",
      "incomplete_value": true,
      "site": "005d57ac",
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
      "005d5b50",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ],
    [
      "005d5b5c",
      "DATA",
      [
        "storage",
        "00c70c88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d5b50",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ],
    [
      "005d5b5c",
      "DATA",
      [
        "storage",
        "00c71c58",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d5798 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 005d5b48 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 005d57a0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:478:8"]]
- 005d57a0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5b50 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:448:8"]]
+ 005d5b50 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e2d17eebc3d1af9c62e301c32c871727"></a>

### [`005d6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6150.md) → [`005d6500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6500.md) FUN_005d6500

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005d5ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5ca0.md) · 呼出先 10件 [`005cfd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd94.md) [`005cfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfde0.md) [`005cff58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cff58.md) [`005d0550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0550.md) [`005d7180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d7/005d7180.md)
- 新版 呼出元 1件 [`005d6050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6050.md) · 呼出先 10件 [`005d0144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0144.md) [`005d0190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0190.md) [`005d0308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0308.md) [`005d0900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0900.md) [`005d7530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d7/005d7530.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.64% / 新版 99.64%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d66f0",
      "incomplete_value": true,
      "site": "005d6700",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d6340",
      "incomplete_value": true,
      "site": "005d6350",
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
                "const:430:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 51,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005d66f0",
      "READ",
      [
        "storage",
        "002c2430",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005d66f0",
      "READ",
      [
        "storage",
        "002c2480",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005d61c8 ["INT_ADD", "register:40f0:8", ["const:5d61c8:8", "const:4:8"]]
- 005d61c8 ["CALL", null, ["callee:005d75ac:8"]]
+ 005d6578 ["INT_ADD", "register:40f0:8", ["const:5d6578:8", "const:4:8"]]
+ 005d6578 ["CALL", null, ["callee:005d75ac:8"]]
- 005d62c8 ["INT_ADD", "register:40f0:8", ["const:5d62c8:8", "const:4:8"]]
- 005d62c8 ["CALL", null, ["callee:005d0900:8"]]
+ 005d6678 ["INT_ADD", "register:40f0:8", ["const:5d6678:8", "const:4:8"]]
+ 005d6678 ["CALL", null, ["callee:005d0900:8"]]
- 005d6340 ["INT_ADD", "tmp:0:8", ["register:4060:8", "const:430:8"]]
- 005d6340 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 005d6340 ["COPY", "register:5010:8", ["const:0:8"]]
- 005d6340 ["COPY", "register:5018:8", ["const:0:8"]]
+ 005d66f0 ["INT_ADD", "tmp:0:8", ["register:4060:8", "const:480:8"]]
+ 005d66f0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 005d66f0 ["COPY", "register:5010:8", ["const:0:8"]]
+ 005d66f0 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-ed057dbbe0a6e742247aee815398d128"></a>

### [`005d7f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d7/005d7f40.md) → [`005d82f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d82f0.md) FUN_005d82f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d7b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d7/005d7b5c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`005d7f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d7/005d7f0c.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.68% / 新版 67.68%

優先判定に残った影響 `unresolved_branch_alignment` 8件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d7f40",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d7f44",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d7f48",
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
      "005d82f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005d82f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005d82f8",
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
- 005d7f40 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d7f40 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d7f40 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 005d7f40 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005d7f44 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 005d7f44 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 005d7f44 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005d7f44 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005d7f48 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005d7f48 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005d7f48 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005d7f48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-64a5e1d46a71c69e4d9be24dcb71810b"></a>

### [`005d80cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d80cc.md) → [`005d847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d847c.md) FUN_005d847c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 4件 [`005cfd3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd3c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 4件 [`005d00ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d00ec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.74% / 新版 83.74%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d856c",
      "incomplete_value": true,
      "site": "005d857c",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "005d8578",
      "incomplete_value": true,
      "site": "005d857c",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d81c8",
      "incomplete_value": true,
      "site": "005d81cc",
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
                "live",
                "register:4048:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d8258"
      ],
      [
        "FALL_THROUGH",
        "005d8608"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d8608",
      "incomplete_value": true,
      "site": "005d860c",
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
      "definition_site": "005d8258",
      "incomplete_value": true,
      "site": "005d825c",
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
      "unmatched:005d8258",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d85e8"
      ]
    ]
  ],
  "added": [
    [
      "005d8608",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d85e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d81cc ["INT_ADD", "register:40f0:8", ["const:5d81cc:8", "const:4:8"]]
- 005d81cc ["CALL", null, ["callee:00c590a0:8"]]
+ 005d857c ["INT_ADD", "register:40f0:8", ["const:5d857c:8", "const:4:8"]]
+ 005d857c ["CALL", null, ["callee:00c590a0:8"]]
- 005d810c ["CBRANCH", null, ["local:b15:8", "register:102:1"]]
+ 005d84bc ["CBRANCH", null, ["local:b11:8", "register:102:1"]]
- 005d8110 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005d8110 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 005d84c0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005d84c0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-d1a0be5b95f0aeb34d528672b33bd2e4"></a>

### [`005d82b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d82b8.md) → [`005d8668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8668.md) FUN_005d8668

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 4件 [`005d067c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d067c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 4件 [`005d0a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a2c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.54% / 新版 80.54%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 1件, `unresolved_branch_alignment` 9件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d8364",
      "incomplete_value": true,
      "site": "005d837c",
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
      "definition_site": "005d8368",
      "incomplete_value": true,
      "site": "005d837c",
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
    "new": {
      "definition_site": "005d8728",
      "incomplete_value": true,
      "site": "005d872c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "005d8378",
      "incomplete_value": true,
      "site": "005d837c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_AND",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:fffffffffffffff0:8"
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
      "unmatched:005d82ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d873c"
      ]
    ],
    [
      "unmatched:005d8338",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8944"
      ]
    ],
    [
      "005d8748",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005d83f8"
      ]
    ]
  ],
  "added": [
    [
      "005d869c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d873c"
      ]
    ],
    [
      "005d86e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8944"
      ]
    ],
    [
      "005d8748",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d87a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d837c ["INT_ADD", "register:40f0:8", ["const:5d837c:8", "const:4:8"]]
- 005d837c ["CALL", null, ["callee:00c590a0:8"]]
+ 005d872c ["INT_ADD", "register:40f0:8", ["const:5d872c:8", "const:4:8"]]
+ 005d872c ["CALL", null, ["callee:00c590a0:8"]]
- 005d8598 ["INT_ADD", "register:40f0:8", ["const:5d8598:8", "const:4:8"]]
- 005d8598 ["CALL", null, ["callee:005d0a2c:8"]]
+ 005d8948 ["INT_ADD", "register:40f0:8", ["const:5d8948:8", "const:4:8"]]
+ 005d8948 ["CALL", null, ["callee:005d0a2c:8"]]
- 005d82e4 ["COPY", "register:4000:8", ["register:4040:8"]]
~~~


<a id="compare-5caa181e97a443495b3d41f5b0cc19d0"></a>

### [`005d859c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d859c.md) → [`005d894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d894c.md) FUN_005d894c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d5f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5f94.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005d8718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8718.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`005d6344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6344.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005d8ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8ac8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

優先判定に残った影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d85d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d89fc"
      ]
    ],
    [
      "005d89f8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8a00"
      ]
    ]
  ],
  "added": [
    [
      "005d8980",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d89fc"
      ]
    ],
    [
      "005d89f8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8a34"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d85c8 ["INT_MULT", "register:4050:8", ["register:4050:8", "register:4048:8"]]
- 005d85cc ["INT_LESSEQUAL", "register:105:1", ["register:4008:8", "register:4050:8"]]
- 005d85cc ["INT_SBORROW", "register:106:1", ["register:4050:8", "register:4008:8"]]
- 005d85cc ["INT_SUB", "tmp:0:8", ["register:4050:8", "register:4008:8"]]
- 005d85cc ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 005d85d0 ["CBRANCH", null, ["local:b6:8", "register:102:1"]]
~~~


<a id="compare-f257bfd472b5cdcb4fa956eda8950c77"></a>

### [`005d8718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8718.md) → [`005d8ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8ac8.md) FUN_005d8ac8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d859c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d859c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`005d894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d894c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d8ad4",
      "incomplete_value": false,
      "site": "005d8ad8",
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
      "definition_site": "005d8724",
      "incomplete_value": false,
      "site": "005d8728",
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
      "005d8ad4",
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
      "005d8ad4",
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
- 005d8728 ["INT_ADD", "register:40f0:8", ["const:5d8728:8", "const:4:8"]]
- 005d8728 ["CALL", null, ["callee:0043bad8:8"]]
+ 005d8ad8 ["INT_ADD", "register:40f0:8", ["const:5d8ad8:8", "const:4:8"]]
+ 005d8ad8 ["CALL", null, ["callee:0043bad8:8"]]
- 005d8720 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005d8ad0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005d8724 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005d8724 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d8724 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d8724 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d8ad4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005d8ad4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d8ad4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d8ad4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-bef607277eb6424f07ccc8328e90ef8d"></a>

### [`005d872c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d872c.md) → [`005d8adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8adc.md) FUN_005d8adc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 11件 [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`00687b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687b8c.md) [`00908368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00908/00908368.md) [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) · 呼出先 4件 [`005d8aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8aac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8f0.md)
- 新版 呼出元 11件 [`005c4d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4d48.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`00687f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00687/00687f3c.md) [`00909314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00909/00909314.md) [`00964fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00964/00964fd8.md) · 呼出先 4件 [`005d8e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8e5c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8c0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.02% / 新版 67.02%

優先判定に残った影響 `unresolved_branch_alignment` 16件, `unresolved_store_alignment` 15件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d8730",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8734",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8738",
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
      "005d8ae0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005d8ae4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005d8ae8",
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
- 005d872c ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 005d8730 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d8730 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d8730 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005d8730 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005d8734 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 005d8734 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 005d8734 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 005d8734 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1064c01b9c94872e13f6b623a1a94c62"></a>

### [`005d8a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8a40.md) → [`005d8df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8df0.md) FUN_005d8df0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d8e18",
      "incomplete_value": true,
      "site": "005d8e20",
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
      "unmatched:005d8a40",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8a44",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8a54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8e50"
      ]
    ]
  ],
  "added": [
    [
      "005d8df0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005d8df4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005d8e04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8e50"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d8a70 ["INT_ADD", "register:40f0:8", ["const:5d8a70:8", "const:4:8"]]
- 005d8a70 ["CALL", null, ["callee:00c54d90:8"]]
+ 005d8e20 ["INT_ADD", "register:40f0:8", ["const:5d8e20:8", "const:4:8"]]
+ 005d8e20 ["CALL", null, ["callee:00c54d90:8"]]
- 005d8a40 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d8a40 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d8a40 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005d8a40 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005d8a44 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005d8a44 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005d8a44 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005d8a44 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-09b075df24b2c1164b7448d248cebf65"></a>

### [`005d8aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8aac.md) → [`005d8e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8e5c.md) FUN_005d8e5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005d872c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d872c.md) [`00695a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695a48.md) [`00695c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695c04.md) [`00695fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695fa8.md) · 呼出先 3件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`005d8adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8adc.md) [`00695df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00695/00695df8.md) [`00695fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00695/00695fb4.md) [`00696358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696358.md) · 呼出先 3件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.80% / 新版 90.80%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d8bb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8fa8"
      ]
    ],
    [
      "unmatched:005d8bd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8f8c"
      ]
    ]
  ],
  "added": [
    [
      "005d8f64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8fa8"
      ]
    ],
    [
      "005d8f80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d8f8c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d8abc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005d8abc ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 005d8e6c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005d8e6c ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 005d8ac8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005d8ac8 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
+ 005d8e78 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 005d8e78 ["CBRANCH", null, ["local:b31:8", "tmp:0:1"]]
- 005d8ad0 ["INT_ADD", "register:40f0:8", ["const:5d8ad0:8", "const:4:8"]]
- 005d8ad0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d8e80 ["INT_ADD", "register:40f0:8", ["const:5d8e80:8", "const:4:8"]]
+ 005d8e80 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-ce66c1fadbbd49029c409d5475eca327"></a>

### [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) → [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) FUN_005d8fb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 81件 [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) [`005c6194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c6194.md) [`005c61e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c61e0.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`005cc554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc554.md) · 呼出先 2件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 79件 [`005c4d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4d48.md) [`005c6544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6544.md) [`005c6590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6590.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`005cc904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005cc904.md) · 呼出先 2件 [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d8c68",
      "incomplete_value": true,
      "site": "005d8c6c",
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
    "guard": [
      [
        "FALL_THROUGH",
        "005d8c58"
      ],
      [
        "FALL_THROUGH",
        "005d9008"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d9008",
      "incomplete_value": true,
      "site": "005d9010",
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
      "definition_site": "005d8c58",
      "incomplete_value": true,
      "site": "005d8c60",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
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
      "unmatched:005d8c08",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8c0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8c10",
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
      "005d8fb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005d8fbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005d8fc0",
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
- 005d8c6c ["INT_ADD", "register:40f0:8", ["const:5d8c6c:8", "const:4:8"]]
- 005d8c6c ["CALL", null, ["callee:00c58f50:8"]]
+ 005d901c ["INT_ADD", "register:40f0:8", ["const:5d901c:8", "const:4:8"]]
+ 005d901c ["CALL", null, ["callee:00c58f50:8"]]
- 005d8c08 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d8c08 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d8c08 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 005d8c08 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005d8c0c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005d8c0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-8a4eefc9cf198e5d02eb194e9b799e00"></a>

### [`005d8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8ca4.md) → [`005d9054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9054.md) FUN_005d9054

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`005d8d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8d74.md) [`00846d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846d68.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`005d9124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9124.md) [`00847d14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847d14.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d909c",
      "incomplete_value": true,
      "site": "005d90a0",
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


~~~diff
- 005d8cf0 ["INT_ADD", "register:40f0:8", ["const:5d8cf0:8", "const:4:8"]]
- 005d8cf0 ["CALL", null, ["callee:00c58f20:8"]]
+ 005d90a0 ["INT_ADD", "register:40f0:8", ["const:5d90a0:8", "const:4:8"]]
+ 005d90a0 ["CALL", null, ["callee:00c58f20:8"]]
- 005d8cc0 ["INT_ADD", "register:40f0:8", ["const:5d8cc0:8", "const:4:8"]]
- 005d8cc0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005d9070 ["INT_ADD", "register:40f0:8", ["const:5d9070:8", "const:4:8"]]
+ 005d9070 ["CALL", null, ["callee:00c58f50:8"]]
- 005d8cc8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 005d8cc8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 005d9078 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 005d9078 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-ac803033bbea817af9db7551ab905f29"></a>

### [`005d8d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8d74.md) → [`005d9124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9124.md) FUN_005d9124

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005d8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8ca4.md) [`005d8f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8f5c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005d9054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9054.md) [`005d930c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d930c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.07% / 新版 86.07%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d8f08",
      "incomplete_value": true,
      "site": "005d8f10",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d8f0c",
      "incomplete_value": true,
      "site": "005d8f10",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "005d8f38",
      "incomplete_value": true,
      "site": "005d8f4c",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:005d8dc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d9300"
      ]
    ],
    [
      "unmatched:005d8e98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d92d4"
      ]
    ],
    [
      "unmatched:005d8f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d92b8"
      ]
    ]
  ],
  "added": [
    [
      "005d9174",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d9300"
      ]
    ],
    [
      "005d9248",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d92d4"
      ]
    ],
    [
      "005d92cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d92b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d8f10 ["INT_ADD", "register:40f0:8", ["const:5d8f10:8", "const:4:8"]]
- 005d8f10 ["CALL", null, ["callee:005d9054:8"]]
+ 005d92c0 ["INT_ADD", "register:40f0:8", ["const:5d92c0:8", "const:4:8"]]
+ 005d92c0 ["CALL", null, ["callee:005d9054:8"]]
- 005d8dc4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005d8dc4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 005d8dc4 ["CBRANCH", null, ["local:b17:8", "tmp:1:1"]]
- 005d8df0 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4058:8"]]
- 005d8df0 ["INT_SBORROW", "register:106:1", ["register:4058:8", "register:4048:8"]]
- 005d8df0 ["INT_SUB", "tmp:0:8", ["register:4058:8", "register:4048:8"]]
- 005d8df0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-f016f0a0ff5e8a9347c91b8d07c0e656"></a>

### [`005d8f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8f5c.md) → [`005d930c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d930c.md) FUN_005d930c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d8d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8d74.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`005d9124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9124.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d8f5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8f68",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005d8f6c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "005d930c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005d9318",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "005d931c",
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
- 005d8f5c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d8f5c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d8f5c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 005d8f5c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005d8f60 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005d8f64 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-57c3d6ea07f5b6e7d7b23df8706087b8"></a>

### [`005d8f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8f74.md) → [`005d9324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9324.md) FUN_005d9324

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
      "unmatched:005d8f98",
      "DATA",
      [
        "storage",
        "00c712b8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005d8f9c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8fa0",
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
      "005d9348",
      "DATA",
      [
        "storage",
        "00c72288",
        null,
        "undefined *"
      ]
    ],
    [
      "005d934c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005d9350",
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
- 005d8f88 ["INT_ADD", "register:40f0:8", ["const:5d8f88:8", "const:4:8"]]
- 005d8f88 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d9338 ["INT_ADD", "register:40f0:8", ["const:5d9338:8", "const:4:8"]]
+ 005d9338 ["CALL", null, ["callee:00c58f30:8"]]
- 005d8f90 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005d9340 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005d8f94 ["COPY", "tmp:0:8", ["const:2b8:8"]]
- 005d8f94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d8f94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d8f94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-086f5a0a8ada71ffbdbf128066478f47"></a>

### [`005d8fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fa8.md) → [`005d9358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9358.md) FUN_005d9358

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
      "unmatched:005d8fb4",
      "DATA",
      [
        "storage",
        "00c712b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005d9364",
      "DATA",
      [
        "storage",
        "00c72288",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d8fa8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005d8fa8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d8fac ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005d8fb0 ["COPY", "tmp:0:8", ["const:2b8:8"]]
- 005d8fb0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005d8fb0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005d8fb0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7084a0261ef0b0a07248da63629c723b"></a>

### [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) → [`005d9374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9374.md) FUN_005d9374

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 32件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)
- 新版 呼出元 0件  · 呼出先 32件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.29% / 新版 75.29%

優先判定に残った影響 `call_argument_candidate` 21件, `call_target` 2件, `store_condition` 1件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 19件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d97ac",
      "incomplete_value": true,
      "site": "005d97b0",
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
                "const:610:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d93fc",
      "incomplete_value": true,
      "site": "005d9400",
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
                "const:5c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005d93b8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005d9008",
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
      "site": "005d93d4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005d9024",
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
      "unmatched:005d8fd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8fdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d8ff8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d9410"
      ]
    ]
  ],
  "added": [
    [
      "005d9388",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005d938c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005d93a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d9410"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9008 ["INT_ADD", "register:40f0:8", ["const:5d9008:8", "const:4:8"]]
- 005d9008 ["CALL", null, ["ram:47ad34:8"]]
+ 005d93b8 ["INT_ADD", "register:40f0:8", ["const:5d93b8:8", "const:4:8"]]
+ 005d93b8 ["CALL", null, ["ram:47b054:8"]]
- 005d9024 ["INT_ADD", "register:40f0:8", ["const:5d9024:8", "const:4:8"]]
- 005d9024 ["CALL", null, ["ram:47ad34:8"]]
+ 005d93d4 ["INT_ADD", "register:40f0:8", ["const:5d93d4:8", "const:4:8"]]
+ 005d93d4 ["CALL", null, ["ram:47b054:8"]]
- 005d90cc ["INT_RIGHT", "tmp:0:4", ["register:40a0:4", "const:0:4"]]
- 005d90cc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 005d90cc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 005d90cc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 005d947c ["INT_RIGHT", "tmp:0:4", ["register:40a0:4", "const:0:4"]]
+ 005d947c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 005d947c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 005d947c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-afa6cda1369095d73ec8b9e80df3f0f7"></a>

### [`005d9ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9ab4.md) → [`005d9e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9e64.md) FUN_005d9e64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005d9d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9d44.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005d9374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9374.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005da0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da0f4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.77% / 新版 73.77%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d9ed4",
      "incomplete_value": true,
      "site": "005d9ee0",
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
      "definition_site": "005d9ed8",
      "incomplete_value": true,
      "site": "005d9ee0",
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
      "definition_site": "005d9ecc",
      "incomplete_value": true,
      "site": "005d9ee0",
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
      "unmatched:005d9ab8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9abc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9ac0",
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
      "005d9e68",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005d9e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005d9e70",
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
- 005d9b30 ["INT_ADD", "register:40f0:8", ["const:5d9b30:8", "const:4:8"]]
- 005d9b30 ["CALL", null, ["callee:005da0f4:8"]]
+ 005d9ee0 ["INT_ADD", "register:40f0:8", ["const:5d9ee0:8", "const:4:8"]]
+ 005d9ee0 ["CALL", null, ["callee:005da0f4:8"]]
- 005d9b44 ["INT_ADD", "register:40f0:8", ["const:5d9b44:8", "const:4:8"]]
- 005d9b44 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d9ef4 ["INT_ADD", "register:40f0:8", ["const:5d9ef4:8", "const:4:8"]]
+ 005d9ef4 ["CALL", null, ["callee:00c58f30:8"]]
- 005d9ab4 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
~~~


<a id="compare-f507300d84b40958fd7247ad60267913"></a>

### [`005d9bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9bd0.md) → [`005d9f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9f80.md) FUN_005d9f80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005d9374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9374.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.76% / 新版 87.76%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d9c5c"
      ],
      [
        "FALL_THROUGH",
        "005da00c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005da00c",
      "incomplete_value": true,
      "site": "005da010",
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
      "definition_site": "005d9c5c",
      "incomplete_value": true,
      "site": "005d9c60",
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
      "unmatched:005d9bd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9bd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9bd8",
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
      "005d9f80",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005d9f84",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005d9f88",
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
- 005d9bd0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d9bd0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d9bd0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 005d9bd0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005d9bd4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005d9bd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 005d9bd8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005d9bd8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005d9bd8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005d9bd8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-450933ec33ddb406ab748a6c4aaedfd9"></a>

### [`005d9c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9c98.md) → [`005da048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da048.md) FUN_005da048

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
      "definition_site": "005da05c",
      "incomplete_value": false,
      "site": "005da060",
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
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d9cac",
      "incomplete_value": false,
      "site": "005d9cb0",
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
            "const:338:8"
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
      "005da060",
      "DATA",
      [
        "storage",
        "00c71338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005da060",
      "DATA",
      [
        "storage",
        "00c72308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9ca4 ["INT_ADD", "register:40f0:8", ["const:5d9ca4:8", "const:4:8"]]
- 005d9ca4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005da054 ["INT_ADD", "register:40f0:8", ["const:5da054:8", "const:4:8"]]
+ 005da054 ["CALL", null, ["callee:00c58f30:8"]]
- 005d9ca8 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005da058 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005d9cac ["COPY", "tmp:0:8", ["const:338:8"]]
- 005d9cac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d9cac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d9cac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005da05c ["COPY", "tmp:0:8", ["const:308:8"]]
+ 005da05c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005da05c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005da05c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f68d355104207c9ceaeebf6571681a08"></a>

### [`005d9cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9cbc.md) → [`005da06c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da06c.md) FUN_005da06c

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
      "definition_site": "005da070",
      "incomplete_value": false,
      "site": "005da074",
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
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d9cc0",
      "incomplete_value": false,
      "site": "005d9cc4",
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
            "const:338:8"
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
      "005da074",
      "DATA",
      [
        "storage",
        "00c71338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005da074",
      "DATA",
      [
        "storage",
        "00c72308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9cbc ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005da06c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005d9cc0 ["COPY", "tmp:0:8", ["const:338:8"]]
- 005d9cc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d9cc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d9cc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005da070 ["COPY", "tmp:0:8", ["const:308:8"]]
+ 005da070 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005da070 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005da070 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6d15b57865a0fc7f98c6f22a4d64ba24"></a>

### [`005d9cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9cd4.md) → [`005da084`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da084.md) FUN_005da084

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d9cec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9cf8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "005da09c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005da0a8",
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
- 005d9cdc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005d9cdc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 005da08c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005da08c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005d9ce4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 005d9ce4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 005da094 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 005da094 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005d9cec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005d9cec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-673065dd6aa2ba91e39d918d78604863"></a>

### [`005d9d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9d44.md) → [`005da0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da0f4.md) FUN_005da0f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`005d9ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9ab4.md) · 呼出先 0件 
- 新版 呼出元 1件 [`005d9e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9e64.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `return_value_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "005d9e30",
      "incomplete_value": true,
      "site": "005d9e38",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "005d9ed4",
      "incomplete_value": true,
      "site": "005d9edc",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  }
]
~~~


~~~diff
- 005d9d8c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005d9d8c ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
+ 005da13c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 005da13c ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
- 005d9d98 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 005d9d98 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 005da148 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
+ 005da148 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
- 005d9dac ["BRANCH", null, ["local:b29:8"]]
+ 005da15c ["BRANCH", null, ["local:b30:8"]]
~~~


<a id="compare-517666fd1def9385fc20e167e8b2e575"></a>

### [`005d9eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9eec.md) → [`005da29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da29c.md) FUN_005da29c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) [`005d9eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9eec.md) · 呼出先 2件 [`005d9eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9eec.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005d9374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9374.md) [`005da29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da29c.md) · 呼出先 2件 [`005da29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da29c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d9f14",
      "incomplete_value": true,
      "site": "005d9f18",
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
      "definition_site": "005d9f10",
      "incomplete_value": true,
      "site": "005d9f18",
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
      "unmatched:005d9ef0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9ef4",
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
      "005da2a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005da2a4",
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
- 005d9f18 ["INT_ADD", "register:40f0:8", ["const:5d9f18:8", "const:4:8"]]
- 005d9f18 ["CALL", null, ["local:b0:8"]]
+ 005da2c8 ["INT_ADD", "register:40f0:8", ["const:5da2c8:8", "const:4:8"]]
+ 005da2c8 ["CALL", null, ["local:b0:8"]]
- 005d9eec ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005d9eec ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 005da29c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005da29c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 005d9ef0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d9ef0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d9ef0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005d9ef0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-1731608d58966760512a67f22f1364ce"></a>

### [`005d9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f34.md) → [`005da2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da2e4.md) FUN_005da2e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d9f58",
      "DATA",
      [
        "storage",
        "00c713c8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005d9f60",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9f64",
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
      "005da308",
      "DATA",
      [
        "storage",
        "00c72398",
        null,
        "undefined *"
      ]
    ],
    [
      "005da310",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005da314",
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
- 005d9f48 ["INT_ADD", "register:40f0:8", ["const:5d9f48:8", "const:4:8"]]
- 005d9f48 ["CALL", null, ["callee:00c58f30:8"]]
+ 005da2f8 ["INT_ADD", "register:40f0:8", ["const:5da2f8:8", "const:4:8"]]
+ 005da2f8 ["CALL", null, ["callee:00c58f30:8"]]
- 005d9f50 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005da300 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005d9f54 ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 005d9f54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d9f54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d9f54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8efedb03a295ab3acd7df9f07e737139"></a>

### [`005d9f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f6c.md) → [`005da31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da31c.md) FUN_005da31c

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
      "definition_site": "005da320",
      "incomplete_value": false,
      "site": "005da324",
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
            "const:398:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d9f70",
      "incomplete_value": false,
      "site": "005d9f74",
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
            "const:3c8:8"
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
      "005da324",
      "DATA",
      [
        "storage",
        "00c713c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005da324",
      "DATA",
      [
        "storage",
        "00c72398",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9f6c ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005da31c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005d9f70 ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 005d9f70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d9f70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d9f70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005da320 ["COPY", "tmp:0:8", ["const:398:8"]]
+ 005da320 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005da320 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005da320 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-199245e66241993c6466b91581b5aa17"></a>

### [`005d9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f8c.md) → [`005da33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da33c.md) FUN_005da33c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 67.85% / 新版 67.85%

優先判定に残った影響 `call_argument_candidate` 8件, `call_target` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 36件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005da388",
      "incomplete_value": true,
      "site": "005da38c",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005da3a4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005d9ff4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005da668",
      "incomplete_value": false,
      "site": "005da66c",
      "value": [
        "leaf",
        "const:28:8"
      ]
    },
    "old": null,
    "ordinal": 21,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d9f90",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9f94",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d9f98",
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
      "005da340",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005da344",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005da348",
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
- 005d9fdc ["INT_ADD", "register:40f0:8", ["const:5d9fdc:8", "const:4:8"]]
- 005d9fdc ["CALL", null, ["callee:005c8bb0:8"]]
+ 005da38c ["INT_ADD", "register:40f0:8", ["const:5da38c:8", "const:4:8"]]
+ 005da38c ["CALL", null, ["callee:005c8bb0:8"]]
- 005d9ff4 ["INT_ADD", "register:40f0:8", ["const:5d9ff4:8", "const:4:8"]]
- 005d9ff4 ["CALL", null, ["ram:47ad34:8"]]
+ 005da3a4 ["INT_ADD", "register:40f0:8", ["const:5da3a4:8", "const:4:8"]]
+ 005da3a4 ["CALL", null, ["ram:47b054:8"]]
- 005da2bc ["INT_ADD", "register:40f0:8", ["const:5da2bc:8", "const:4:8"]]
- 005da2bc ["CALL", null, ["callee:00c58f30:8"]]
+ 005da66c ["INT_ADD", "register:40f0:8", ["const:5da66c:8", "const:4:8"]]
+ 005da66c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d55f0d69f3a47ec18990eae4acf96813"></a>

### [`005da5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da5c4.md) → [`005da974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da974.md) FUN_005da974

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 26件 [`005d9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f8c.md) [`005e1bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1bf8.md) [`006ab3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ab/006ab3dc.md) [`006ff698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff698.md) [`00749a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749a2c.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005da6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da6ec.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 26件 [`005da33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da33c.md) [`005e1fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1fa8.md) [`006ab78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ab/006ab78c.md) [`006ffa48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ffa48.md) [`00749ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749ddc.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005daa9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005daa9c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.49% / 新版 96.49%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005da614",
      "incomplete_value": true,
      "site": "005da618",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005da610",
      "incomplete_value": true,
      "site": "005da618",
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
      "definition_site": "005da610",
      "incomplete_value": true,
      "site": "005da618",
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
      "unmatched:005da68c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005daa98"
      ]
    ]
  ],
  "added": [
    [
      "005daa3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005daa98"
      ]
    ]
  ]
}
~~~


~~~diff
- 005da618 ["INT_ADD", "register:40f0:8", ["const:5da618:8", "const:4:8"]]
- 005da618 ["CALL", null, ["callee:0043be80:8"]]
+ 005da9c8 ["INT_ADD", "register:40f0:8", ["const:5da9c8:8", "const:4:8"]]
+ 005da9c8 ["CALL", null, ["callee:0043be80:8"]]
- 005da65c ["INT_ADD", "register:40f0:8", ["const:5da65c:8", "const:4:8"]]
- 005da65c ["CALL", null, ["callee:005daa9c:8"]]
+ 005daa0c ["INT_ADD", "register:40f0:8", ["const:5daa0c:8", "const:4:8"]]
+ 005daa0c ["CALL", null, ["callee:005daa9c:8"]]
- 005da5f4 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 005da5f4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 005da5f4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 005da5f4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 005da9a4 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 005da9a4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 005da9a4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 005da9a4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-b117eb2522e722bc01b8715167efcaef"></a>

### [`005da6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da6ec.md) → [`005daa9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005daa9c.md) FUN_005daa9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005da5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da5c4.md) [`005da6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da6ec.md) [`00628d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00628/00628d84.md) [`00667660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00667/00667660.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 4件 [`005da974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da974.md) [`005daa9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005daa9c.md) [`00629134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00629/00629134.md) [`00667a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00667/00667a10.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.54% / 新版 94.54%

優先判定に残った影響 `call_argument_candidate` 16件, `store_condition` 3件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005da764",
      "incomplete_value": false,
      "site": "005da768",
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
      "definition_site": "005dab98",
      "incomplete_value": true,
      "site": "005dab9c",
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
      "definition_site": "005da7e8",
      "incomplete_value": true,
      "site": "005da7ec",
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
    "new": {
      "definition_site": "005dac0c",
      "incomplete_value": true,
      "site": "005dac10",
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
            "const:28:8"
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
      "unmatched:005da7d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005daba4"
      ]
    ],
    [
      "unmatched:005da858",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "unmatched:005da898",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005db378"
      ]
    ]
  ],
  "added": [
    [
      "005dab84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005daba4"
      ]
    ],
    [
      "005dac08",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "005dac48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005db378"
      ]
    ]
  ]
}
~~~


~~~diff
- 005da768 ["INT_ADD", "register:40f0:8", ["const:5da768:8", "const:4:8"]]
- 005da768 ["CALL", null, ["callee:00c59070:8"]]
+ 005dab18 ["INT_ADD", "register:40f0:8", ["const:5dab18:8", "const:4:8"]]
+ 005dab18 ["CALL", null, ["callee:00c59070:8"]]
- 005da7ec ["INT_ADD", "register:40f0:8", ["const:5da7ec:8", "const:4:8"]]
- 005da7ec ["CALL", null, ["callee:00c58fe0:8"]]
+ 005dab9c ["INT_ADD", "register:40f0:8", ["const:5dab9c:8", "const:4:8"]]
+ 005dab9c ["CALL", null, ["callee:00c58fe0:8"]]
- 005da854 ["COPY", "register:4008:8", ["const:2b7000:8"]]
+ 005dac04 ["COPY", "register:4008:8", ["const:2b8000:8"]]
~~~


<a id="compare-332f5f800ef269c19f4ccf94d77980ad"></a>

### [`005dafd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005dafd0.md) → [`005db380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db380.md) FUN_005db380

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
      "definition_site": "005db394",
      "incomplete_value": false,
      "site": "005db398",
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
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dafe4",
      "incomplete_value": false,
      "site": "005dafe8",
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
            "const:438:8"
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
      "005db398",
      "DATA",
      [
        "storage",
        "00c71438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db398",
      "DATA",
      [
        "storage",
        "00c72408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dafdc ["INT_ADD", "register:40f0:8", ["const:5dafdc:8", "const:4:8"]]
- 005dafdc ["CALL", null, ["callee:00c58f30:8"]]
+ 005db38c ["INT_ADD", "register:40f0:8", ["const:5db38c:8", "const:4:8"]]
+ 005db38c ["CALL", null, ["callee:00c58f30:8"]]
- 005dafe0 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005db390 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005dafe4 ["COPY", "tmp:0:8", ["const:438:8"]]
- 005dafe4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dafe4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dafe4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db394 ["COPY", "tmp:0:8", ["const:408:8"]]
+ 005db394 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db394 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db394 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-09a207b866b997608d645f9d5711d990"></a>

### [`005daff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005daff4.md) → [`005db3a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db3a4.md) FUN_005db3a4

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
      "definition_site": "005db3a8",
      "incomplete_value": false,
      "site": "005db3ac",
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
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005daff8",
      "incomplete_value": false,
      "site": "005daffc",
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
            "const:438:8"
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
      "005db3ac",
      "DATA",
      [
        "storage",
        "00c71438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db3ac",
      "DATA",
      [
        "storage",
        "00c72408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005daff4 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005db3a4 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005daff8 ["COPY", "tmp:0:8", ["const:438:8"]]
- 005daff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005daff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005daff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db3a8 ["COPY", "tmp:0:8", ["const:408:8"]]
+ 005db3a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db3a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db3a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad4cc1828eee5b7e7ea8df97d89ffa17"></a>

### [`005db00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db00c.md) → [`005db3bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db3bc.md) FUN_005db3bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005db014"
      ],
      [
        "FALL_THROUGH",
        "005db3c4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005db3c4",
      "incomplete_value": true,
      "site": "005db3c8",
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
      "definition_site": "005db014",
      "incomplete_value": true,
      "site": "005db018",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005db014"
      ],
      [
        "FALL_THROUGH",
        "005db3c4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005db3c4",
      "incomplete_value": true,
      "site": "005db3c8",
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
      "definition_site": "005db014",
      "incomplete_value": true,
      "site": "005db018",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005db014"
      ],
      [
        "FALL_THROUGH",
        "005db3c4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005db3c4",
      "incomplete_value": true,
      "site": "005db3cc",
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
      "definition_site": "005db014",
      "incomplete_value": true,
      "site": "005db01c",
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
      "unmatched:005db014",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005db3f8"
      ]
    ],
    [
      "unmatched:005db028",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "005db3c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005db3f8"
      ]
    ],
    [
      "005db3d8",
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
- 005db00c ["COPY", "tmp:0:8", ["register:4010:8"]]
- 005db00c ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 005db00c ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 005db010 ["COPY", "tmp:0:4", ["const:2:4"]]
- 005db010 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 005db010 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 005db010 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 005db014 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005db014 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-63fb6884984831d6fea9aa4837e61576"></a>

### [`005db078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db078.md) → [`005db428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db428.md) FUN_005db428

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005db090",
      "DATA",
      [
        "storage",
        "00c714c8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005db094",
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
      "005db440",
      "DATA",
      [
        "storage",
        "00c72498",
        null,
        "undefined *"
      ]
    ],
    [
      "005db444",
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
- 005db084 ["INT_ADD", "register:40f0:8", ["const:5db084:8", "const:4:8"]]
- 005db084 ["CALL", null, ["callee:00c58f30:8"]]
+ 005db434 ["INT_ADD", "register:40f0:8", ["const:5db434:8", "const:4:8"]]
+ 005db434 ["CALL", null, ["callee:00c58f30:8"]]
- 005db088 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005db438 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005db08c ["COPY", "tmp:0:8", ["const:4c8:8"]]
- 005db08c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db08c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db08c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-50eb76b79e79b39822ad125c5d78eeda"></a>

### [`005db09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db09c.md) → [`005db44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db44c.md) FUN_005db44c

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
      "unmatched:005db0a4",
      "DATA",
      [
        "storage",
        "00c714c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db454",
      "DATA",
      [
        "storage",
        "00c72498",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db09c ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005db0a0 ["COPY", "tmp:0:8", ["const:4c8:8"]]
- 005db0a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db0a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db0a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005db0a4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 005db0a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-c57396d7c69ca7eba18e271e3cf364d8"></a>

### [`005db0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db0b4.md) → [`005db464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db464.md) FUN_005db464

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
      "unmatched:005db0d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "005db488",
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
- 005db0bc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005db0bc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 005db46c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005db46c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 005db0c4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 005db0c4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 005db474 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 005db474 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 005db0d8 ["INT_ADD", "register:40f0:8", ["const:5db0d8:8", "const:4:8"]]
- 005db0d8 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-c6992e242e9a0e7542790095a61f6db2"></a>

### [`005db128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db128.md) → [`005db4d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db4d8.md) FUN_005db4d8

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
      "unmatched:005db14c",
      "DATA",
      [
        "storage",
        "00c71558",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005db150",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005db154",
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
      "005db4fc",
      "DATA",
      [
        "storage",
        "00c72528",
        null,
        "undefined *"
      ]
    ],
    [
      "005db500",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005db504",
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
- 005db13c ["INT_ADD", "register:40f0:8", ["const:5db13c:8", "const:4:8"]]
- 005db13c ["CALL", null, ["callee:00c58f30:8"]]
+ 005db4ec ["INT_ADD", "register:40f0:8", ["const:5db4ec:8", "const:4:8"]]
+ 005db4ec ["CALL", null, ["callee:00c58f30:8"]]
- 005db144 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005db4f4 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005db148 ["COPY", "tmp:0:8", ["const:558:8"]]
- 005db148 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db148 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db148 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-69eea29b727d6eb9c2f1f664f38c3314"></a>

### [`005db15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db15c.md) → [`005db50c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db50c.md) FUN_005db50c

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
      "definition_site": "005db518",
      "incomplete_value": false,
      "site": "005db518",
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
            "const:528:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db168",
      "incomplete_value": false,
      "site": "005db168",
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
            "const:558:8"
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
      "005db518",
      "DATA",
      [
        "storage",
        "00c71558",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db518",
      "DATA",
      [
        "storage",
        "00c72528",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db160 ["COPY", "register:4048:8", ["const:c71000:8"]]
+ 005db510 ["COPY", "register:4048:8", ["const:c72000:8"]]
- 005db164 ["COPY", "tmp:0:8", ["const:558:8"]]
- 005db164 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005db164 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005db164 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005db514 ["COPY", "tmp:0:8", ["const:528:8"]]
+ 005db514 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005db514 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005db514 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ed7b1e66eaa30dd35a7262b3f788549d"></a>

### [`005db178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db178.md) → [`005db528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db528.md) FUN_005db528

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005cc5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc5e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005cc990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005cc990.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db548",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db198",
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
      "site": "005db554",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db1a4",
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
      "unmatched:005db178",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005db188",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005db568"
      ]
    ],
    [
      "005db548",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "005db528",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005db538",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005db568"
      ]
    ],
    [
      "005db548",
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
- 005db198 ["INT_ADD", "register:40f0:8", ["const:5db198:8", "const:4:8"]]
- 005db198 ["CALL", null, ["ram:47ad34:8"]]
+ 005db548 ["INT_ADD", "register:40f0:8", ["const:5db548:8", "const:4:8"]]
+ 005db548 ["CALL", null, ["ram:47b054:8"]]
- 005db1a4 ["INT_ADD", "register:40f0:8", ["const:5db1a4:8", "const:4:8"]]
- 005db1a4 ["CALL", null, ["ram:47ad34:8"]]
+ 005db554 ["INT_ADD", "register:40f0:8", ["const:5db554:8", "const:4:8"]]
+ 005db554 ["CALL", null, ["ram:47b054:8"]]
- 005db178 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005db178 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005db178 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 005db178 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f4479f6576c515c01304713b70cc8bf6"></a>

### [`005db1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db1f8.md) → [`005db5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db5a8.md) FUN_005db5a8

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
      "definition_site": "005db5cc",
      "incomplete_value": false,
      "site": "005db5cc",
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
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db21c",
      "incomplete_value": false,
      "site": "005db21c",
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
            "const:5d8:8"
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
      "005db5cc",
      "DATA",
      [
        "storage",
        "00c715d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db5cc",
      "DATA",
      [
        "storage",
        "00c725a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db20c ["INT_ADD", "register:40f0:8", ["const:5db20c:8", "const:4:8"]]
- 005db20c ["CALL", null, ["callee:00c58f30:8"]]
+ 005db5bc ["INT_ADD", "register:40f0:8", ["const:5db5bc:8", "const:4:8"]]
+ 005db5bc ["CALL", null, ["callee:00c58f30:8"]]
- 005db214 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005db5c4 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005db218 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 005db218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db5c8 ["COPY", "tmp:0:8", ["const:5a8:8"]]
+ 005db5c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db5c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db5c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fb21e71ae9d5797d6026ead41cd4c589"></a>

### [`005db22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db22c.md) → [`005db5dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db5dc.md) FUN_005db5dc

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
      "definition_site": "005db5e8",
      "incomplete_value": false,
      "site": "005db5e8",
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
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db238",
      "incomplete_value": false,
      "site": "005db238",
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
            "const:5d8:8"
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
      "005db5e8",
      "DATA",
      [
        "storage",
        "00c715d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db5e8",
      "DATA",
      [
        "storage",
        "00c725a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db230 ["COPY", "register:4048:8", ["const:c71000:8"]]
+ 005db5e0 ["COPY", "register:4048:8", ["const:c72000:8"]]
- 005db234 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 005db234 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005db234 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005db234 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005db5e4 ["COPY", "tmp:0:8", ["const:5a8:8"]]
+ 005db5e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005db5e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005db5e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-dbe391d084264b5694edab603c704559"></a>

### [`005db478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db478.md) → [`005db828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db828.md) FUN_005db828

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
      "unmatched:005db49c",
      "DATA",
      [
        "storage",
        "00c71658",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005db4a0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005db4a4",
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
      "005db84c",
      "DATA",
      [
        "storage",
        "00c72628",
        null,
        "undefined *"
      ]
    ],
    [
      "005db850",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005db854",
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
- 005db48c ["INT_ADD", "register:40f0:8", ["const:5db48c:8", "const:4:8"]]
- 005db48c ["CALL", null, ["callee:00c58f30:8"]]
+ 005db83c ["INT_ADD", "register:40f0:8", ["const:5db83c:8", "const:4:8"]]
+ 005db83c ["CALL", null, ["callee:00c58f30:8"]]
- 005db494 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005db844 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005db498 ["COPY", "tmp:0:8", ["const:658:8"]]
- 005db498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-18b2aac55aef2f642a977cb3c936ca59"></a>

### [`005db4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db4ac.md) → [`005db85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db85c.md) FUN_005db85c

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
      "unmatched:005db4b8",
      "DATA",
      [
        "storage",
        "00c71658",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db868",
      "DATA",
      [
        "storage",
        "00c72628",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db4ac ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005db4ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005db4b0 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005db4b4 ["COPY", "tmp:0:8", ["const:658:8"]]
- 005db4b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005db4b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005db4b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5452b07f8eb307d7fd4d91698cfb144c"></a>

### [`005db4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db4c8.md) → [`005db878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db878.md) FUN_005db878

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.69% / 新版 75.69%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db8b0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db500",
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
      "definition_site": "005db5b4",
      "incomplete_value": true,
      "site": "005db5b8",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005db970",
      "incomplete_value": false,
      "site": "005db980",
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
            "const:37d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db5c0",
      "incomplete_value": false,
      "site": "005db5d0",
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
            "const:2b2:8"
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
      "unmatched:005db4cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005db4d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005db4d4",
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
      "005db87c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005db880",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005db884",
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
- 005db500 ["INT_ADD", "register:40f0:8", ["const:5db500:8", "const:4:8"]]
- 005db500 ["CALL", null, ["ram:47ad34:8"]]
+ 005db8b0 ["INT_ADD", "register:40f0:8", ["const:5db8b0:8", "const:4:8"]]
+ 005db8b0 ["CALL", null, ["ram:47b054:8"]]
- 005db5b8 ["INT_ADD", "register:40f0:8", ["const:5db5b8:8", "const:4:8"]]
- 005db5b8 ["CALL", null, ["callee:0048d1b4:8"]]
+ 005db968 ["INT_ADD", "register:40f0:8", ["const:5db968:8", "const:4:8"]]
+ 005db968 ["CALL", null, ["callee:0048d1b4:8"]]
- 005db5d0 ["INT_ADD", "register:40f0:8", ["const:5db5d0:8", "const:4:8"]]
- 005db5d0 ["CALL", null, ["callee:005cd908:8"]]
+ 005db980 ["INT_ADD", "register:40f0:8", ["const:5db980:8", "const:4:8"]]
+ 005db980 ["CALL", null, ["callee:005cd908:8"]]
~~~


<a id="compare-873cabfdc1ac0d1d3ec8321dd943c623"></a>

### [`005db7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db7e4.md) → [`005dbb94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbb94.md) FUN_005dbb94

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
      "unmatched:005db808",
      "DATA",
      [
        "storage",
        "00c716c8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005db80c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005db810",
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
      "005dbbb8",
      "DATA",
      [
        "storage",
        "00c72698",
        null,
        "undefined *"
      ]
    ],
    [
      "005dbbbc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005dbbc0",
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
- 005db7f8 ["INT_ADD", "register:40f0:8", ["const:5db7f8:8", "const:4:8"]]
- 005db7f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005dbba8 ["INT_ADD", "register:40f0:8", ["const:5dbba8:8", "const:4:8"]]
+ 005dbba8 ["CALL", null, ["callee:00c58f30:8"]]
- 005db800 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005dbbb0 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005db804 ["COPY", "tmp:0:8", ["const:6c8:8"]]
- 005db804 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db804 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db804 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b633c3598ef0692287a3e43c3df727b4"></a>

### [`005db818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db818.md) → [`005dbbc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbbc8.md) FUN_005dbbc8

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
      "unmatched:005db824",
      "DATA",
      [
        "storage",
        "00c716c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dbbd4",
      "DATA",
      [
        "storage",
        "00c72698",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db818 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005db818 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005db81c ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005db820 ["COPY", "tmp:0:8", ["const:6c8:8"]]
- 005db820 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005db820 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005db820 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f5c94c8a0e487ffeade2f45776333e66"></a>

### [`005db834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db834.md) → [`005dbbe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbbe4.md) FUN_005dbbe4

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
      "site": "005dbc08",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db858",
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
      "005dbc08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "005dbc08",
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
- 005db858 ["INT_ADD", "register:40f0:8", ["const:5db858:8", "const:4:8"]]
- 005db858 ["CALL", null, ["ram:47ad34:8"]]
+ 005dbc08 ["INT_ADD", "register:40f0:8", ["const:5dbc08:8", "const:4:8"]]
+ 005dbc08 ["CALL", null, ["ram:47b054:8"]]
- 005db864 ["INT_ADD", "register:40f0:8", ["const:5db864:8", "const:4:8"]]
- 005db864 ["CALL", null, ["callee:0047d134:8"]]
+ 005dbc14 ["INT_ADD", "register:40f0:8", ["const:5dbc14:8", "const:4:8"]]
+ 005dbc14 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-c3648059d56d0ee6ac442e5c36fabb29"></a>

### [`005db8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db8a8.md) → [`005dbc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbc58.md) FUN_005dbc58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dbc68",
      "incomplete_value": false,
      "site": "005dbc6c",
      "value": [
        "leaf",
        "const:18:8"
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
      "unmatched:005db8cc",
      "DATA",
      [
        "storage",
        "00c71758",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dbc7c",
      "DATA",
      [
        "storage",
        "00c72728",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db8bc ["INT_ADD", "register:40f0:8", ["const:5db8bc:8", "const:4:8"]]
- 005db8bc ["CALL", null, ["callee:00c58f30:8"]]
+ 005dbc6c ["INT_ADD", "register:40f0:8", ["const:5dbc6c:8", "const:4:8"]]
+ 005dbc6c ["CALL", null, ["callee:00c58f30:8"]]
- 005db8b0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005db8c4 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005dbc74 ["COPY", "register:4040:8", ["const:c72000:8"]]
~~~


<a id="compare-59fe5e9351a265f8c9f14ea15c0713dc"></a>

### [`005db8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db8e0.md) → [`005dbc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbc90.md) FUN_005dbc90

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
      "unmatched:005db8e8",
      "DATA",
      [
        "storage",
        "00c71758",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dbc98",
      "DATA",
      [
        "storage",
        "00c72728",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db8e0 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005db8e4 ["COPY", "tmp:0:8", ["const:758:8"]]
- 005db8e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db8e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db8e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005db8e8 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 005db8e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-e4f6d7a892f247c6e69ba929a53bdc39"></a>

### [`005db900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db900.md) → [`005dbcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbcb0.md) FUN_005dbcb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 18件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005dbd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbd54.md)
- 新版 呼出元 0件  · 呼出先 18件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`005dc104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc104.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 72.81% / 新版 72.81%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005db9c8",
      "incomplete_value": true,
      "site": "005db9d0",
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
            "register:4098:8"
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
      "definition_site": "005dba34",
      "incomplete_value": true,
      "site": "005dba40",
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
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dbe54",
      "incomplete_value": true,
      "site": "005dbe6c",
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
      "unmatched:005db904",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005db908",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005db90c",
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
      "005dbcb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005dbcb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005dbcbc",
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
- 005db9d0 ["INT_ADD", "register:40f0:8", ["const:5db9d0:8", "const:4:8"]]
- 005db9d0 ["CALL", null, ["callee:00687a18:8"]]
+ 005dbd80 ["INT_ADD", "register:40f0:8", ["const:5dbd80:8", "const:4:8"]]
+ 005dbd80 ["CALL", null, ["callee:00687a18:8"]]
- 005dba40 ["INT_ADD", "register:40f0:8", ["const:5dba40:8", "const:4:8"]]
- 005dba40 ["CALL", null, ["callee:00448254:8"]]
+ 005dbdf0 ["INT_ADD", "register:40f0:8", ["const:5dbdf0:8", "const:4:8"]]
+ 005dbdf0 ["CALL", null, ["callee:00448254:8"]]
- 005dbabc ["INT_ADD", "register:40f0:8", ["const:5dbabc:8", "const:4:8"]]
- 005dbabc ["CALL", null, ["callee:008bbccc:8"]]
+ 005dbe6c ["INT_ADD", "register:40f0:8", ["const:5dbe6c:8", "const:4:8"]]
+ 005dbe6c ["CALL", null, ["callee:008bbccc:8"]]
~~~


<a id="compare-bbe5a6b2aa3bb59609263892151c4f78"></a>

### [`005dbd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbd54.md) → [`005dc104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc104.md) FUN_005dc104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`005db900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db900.md) [`00772938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00772/00772938.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00449a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/00449a0c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 8件 [`005dbcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005dbcb0.md) [`00772d14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00772/00772d14.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00449d2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00449/00449d2c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 72.13% / 新版 72.13%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dc16c",
      "incomplete_value": true,
      "site": "005dc174",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "005dc170",
      "incomplete_value": true,
      "site": "005dc174",
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
    "old": {
      "definition_site": "005dbdc0",
      "incomplete_value": true,
      "site": "005dbdc4",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dc168",
      "incomplete_value": true,
      "site": "005dc174",
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
      "unmatched:005dbd58",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005dbd5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005dbd60",
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
      "005dc108",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005dc10c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005dc110",
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
- 005dbdc4 ["INT_ADD", "register:40f0:8", ["const:5dbdc4:8", "const:4:8"]]
- 005dbdc4 ["CALL", null, ["callee:0043be80:8"]]
+ 005dc174 ["INT_ADD", "register:40f0:8", ["const:5dc174:8", "const:4:8"]]
+ 005dc174 ["CALL", null, ["callee:0043be80:8"]]
- 005dbdf8 ["INT_ADD", "register:40f0:8", ["const:5dbdf8:8", "const:4:8"]]
- 005dbdf8 ["CALL", null, ["callee:00449d2c:8"]]
+ 005dc1a8 ["INT_ADD", "register:40f0:8", ["const:5dc1a8:8", "const:4:8"]]
+ 005dc1a8 ["CALL", null, ["callee:00449d2c:8"]]
- 005dbd54 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


<a id="compare-10149ac4a4604fd9c0579372577af773"></a>

### [`005dbe90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbe90.md) → [`005dc240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc240.md) FUN_005dc240

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
      "definition_site": "005dc264",
      "incomplete_value": false,
      "site": "005dc264",
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
            "const:798:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbeb4",
      "incomplete_value": false,
      "site": "005dbeb4",
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
            "const:7c8:8"
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
      "005dc264",
      "DATA",
      [
        "storage",
        "00c717c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc264",
      "DATA",
      [
        "storage",
        "00c72798",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dbea4 ["INT_ADD", "register:40f0:8", ["const:5dbea4:8", "const:4:8"]]
- 005dbea4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005dc254 ["INT_ADD", "register:40f0:8", ["const:5dc254:8", "const:4:8"]]
+ 005dc254 ["CALL", null, ["callee:00c58f30:8"]]
- 005dbeac ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005dc25c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005dbeb0 ["COPY", "tmp:0:8", ["const:7c8:8"]]
- 005dbeb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dbeb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dbeb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc260 ["COPY", "tmp:0:8", ["const:798:8"]]
+ 005dc260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-457126044b0a7d8f221b4cdd662c1484"></a>

### [`005dbec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbec4.md) → [`005dc274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc274.md) FUN_005dc274

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
      "definition_site": "005dc280",
      "incomplete_value": false,
      "site": "005dc280",
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
            "const:798:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbed0",
      "incomplete_value": false,
      "site": "005dbed0",
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
            "const:7c8:8"
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
      "005dc280",
      "DATA",
      [
        "storage",
        "00c717c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc280",
      "DATA",
      [
        "storage",
        "00c72798",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dbec8 ["COPY", "register:4048:8", ["const:c71000:8"]]
+ 005dc278 ["COPY", "register:4048:8", ["const:c72000:8"]]
- 005dbecc ["COPY", "tmp:0:8", ["const:7c8:8"]]
- 005dbecc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005dbecc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005dbecc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005dc27c ["COPY", "tmp:0:8", ["const:798:8"]]
+ 005dc27c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005dc27c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005dc27c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-359c45c89e4f7debebf307c3edfc7385"></a>

### [`005dbee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbee0.md) → [`005dc290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc290.md) FUN_005dc290

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
      "unmatched:005dbf04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "005dc2b4",
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
- 005dbee8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005dbee8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 005dc298 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005dc298 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 005dbef0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 005dbef0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 005dc2a0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 005dc2a0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 005dbf04 ["INT_ADD", "register:40f0:8", ["const:5dbf04:8", "const:4:8"]]
- 005dbf04 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-3eefd81729d04d0fe4b19ef868526bda"></a>

### [`005dbf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbf54.md) → [`005dc304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc304.md) FUN_005dc304

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005dc328",
      "incomplete_value": false,
      "site": "005dc32c",
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
            "const:818:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbf78",
      "incomplete_value": false,
      "site": "005dbf7c",
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
            "const:848:8"
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
      "005dc32c",
      "DATA",
      [
        "storage",
        "00c71848",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc32c",
      "DATA",
      [
        "storage",
        "00c72818",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dbf68 ["INT_ADD", "register:40f0:8", ["const:5dbf68:8", "const:4:8"]]
- 005dbf68 ["CALL", null, ["callee:00c58f30:8"]]
+ 005dc318 ["INT_ADD", "register:40f0:8", ["const:5dc318:8", "const:4:8"]]
+ 005dc318 ["CALL", null, ["callee:00c58f30:8"]]
- 005dbf74 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005dc324 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005dbf78 ["COPY", "tmp:0:8", ["const:848:8"]]
- 005dbf78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dbf78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dbf78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc328 ["COPY", "tmp:0:8", ["const:818:8"]]
+ 005dc328 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc328 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc328 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-74ef1cf535f866505f27f5f6751e73fd"></a>

### [`005dbf94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbf94.md) → [`005dc344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc344.md) FUN_005dc344

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
      "unmatched:005dbf9c",
      "DATA",
      [
        "storage",
        "00c71848",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc34c",
      "DATA",
      [
        "storage",
        "00c72818",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dbf94 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005dbf98 ["COPY", "tmp:0:8", ["const:848:8"]]
- 005dbf98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dbf98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dbf98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005dbf9c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 005dbf9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-6297a0f6dca707c94fa521ec1c0d4637"></a>

### [`005dbfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbfbc.md) → [`005dc36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc36c.md) FUN_005dc36c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00687ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687ee4.md) [`00689994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689994.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00688294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00688/00688294.md) [`00689d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00689/00689d44.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc420",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc070",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "005dc420",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "005dc420",
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
- 005dc070 ["INT_ADD", "register:40f0:8", ["const:5dc070:8", "const:4:8"]]
- 005dc070 ["CALL", null, ["ram:47ad34:8"]]
+ 005dc420 ["INT_ADD", "register:40f0:8", ["const:5dc420:8", "const:4:8"]]
+ 005dc420 ["CALL", null, ["ram:47b054:8"]]
- 005dbfec ["INT_ADD", "register:40f0:8", ["const:5dbfec:8", "const:4:8"]]
- 005dbfec ["CALL", null, ["callee:008524fc:8"]]
+ 005dc39c ["INT_ADD", "register:40f0:8", ["const:5dc39c:8", "const:4:8"]]
+ 005dc39c ["CALL", null, ["callee:008524fc:8"]]
- 005dbffc ["INT_ADD", "register:40f0:8", ["const:5dbffc:8", "const:4:8"]]
- 005dbffc ["CALL", null, ["callee:00b3cfb0:8"]]
+ 005dc3ac ["INT_ADD", "register:40f0:8", ["const:5dc3ac:8", "const:4:8"]]
+ 005dc3ac ["CALL", null, ["callee:00b3cfb0:8"]]
~~~


<a id="compare-afca430158ddcabe5a898a3699779318"></a>

### [`005dc0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc0d0.md) → [`005dc480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc480.md) FUN_005dc480

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
      "definition_site": "005dc4a4",
      "incomplete_value": false,
      "site": "005dc4a4",
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
            "const:8a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc0f4",
      "incomplete_value": false,
      "site": "005dc0f4",
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
            "const:8d8:8"
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
      "005dc4a4",
      "DATA",
      [
        "storage",
        "00c718d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc4a4",
      "DATA",
      [
        "storage",
        "00c728a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc0e4 ["INT_ADD", "register:40f0:8", ["const:5dc0e4:8", "const:4:8"]]
- 005dc0e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005dc494 ["INT_ADD", "register:40f0:8", ["const:5dc494:8", "const:4:8"]]
+ 005dc494 ["CALL", null, ["callee:00c58f30:8"]]
- 005dc0ec ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005dc49c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005dc0f0 ["COPY", "tmp:0:8", ["const:8d8:8"]]
- 005dc0f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dc0f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dc0f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc4a0 ["COPY", "tmp:0:8", ["const:8a8:8"]]
+ 005dc4a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc4a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc4a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-225e7260f8661ad355f6e56dd6125e78"></a>

### [`005dc104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc104.md) → [`005dc4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc4b4.md) FUN_005dc4b4

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
      "definition_site": "005dc4c0",
      "incomplete_value": false,
      "site": "005dc4c0",
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
            "const:8a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc110",
      "incomplete_value": false,
      "site": "005dc110",
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
            "const:8d8:8"
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
      "005dc4c0",
      "DATA",
      [
        "storage",
        "00c718d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc4c0",
      "DATA",
      [
        "storage",
        "00c728a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc108 ["COPY", "register:4048:8", ["const:c71000:8"]]
+ 005dc4b8 ["COPY", "register:4048:8", ["const:c72000:8"]]
- 005dc10c ["COPY", "tmp:0:8", ["const:8d8:8"]]
- 005dc10c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005dc10c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005dc10c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005dc4bc ["COPY", "tmp:0:8", ["const:8a8:8"]]
+ 005dc4bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005dc4bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005dc4bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c192d847b36bae26d78545c908b8aa8f"></a>

### [`005dc120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc120.md) → [`005dc4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc4d0.md) FUN_005dc4d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc4f0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc140",
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
      "site": "005dc4fc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc14c",
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
      "005dc4f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005dc4fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005dc520",
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
      "005dc4f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "005dc4fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "005dc520",
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
- 005dc140 ["INT_ADD", "register:40f0:8", ["const:5dc140:8", "const:4:8"]]
- 005dc140 ["CALL", null, ["ram:47ad34:8"]]
+ 005dc4f0 ["INT_ADD", "register:40f0:8", ["const:5dc4f0:8", "const:4:8"]]
+ 005dc4f0 ["CALL", null, ["ram:47b054:8"]]
- 005dc14c ["INT_ADD", "register:40f0:8", ["const:5dc14c:8", "const:4:8"]]
- 005dc14c ["CALL", null, ["ram:47ad34:8"]]
+ 005dc4fc ["INT_ADD", "register:40f0:8", ["const:5dc4fc:8", "const:4:8"]]
+ 005dc4fc ["CALL", null, ["ram:47b054:8"]]
- 005dc160 ["INT_ADD", "register:40f0:8", ["const:5dc160:8", "const:4:8"]]
- 005dc160 ["CALL", null, ["callee:008524fc:8"]]
+ 005dc510 ["INT_ADD", "register:40f0:8", ["const:5dc510:8", "const:4:8"]]
+ 005dc510 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-80ea87974a2053d4129f33bda645ed83"></a>

### [`005dc1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc1d0.md) → [`005dc580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc580.md) FUN_005dc580

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
      "definition_site": "005dc5a4",
      "incomplete_value": false,
      "site": "005dc5a4",
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
    "old": {
      "definition_site": "005dc1f4",
      "incomplete_value": false,
      "site": "005dc1f4",
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
            "const:958:8"
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
      "005dc5a4",
      "DATA",
      [
        "storage",
        "00c71958",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc5a4",
      "DATA",
      [
        "storage",
        "00c72928",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc1e4 ["INT_ADD", "register:40f0:8", ["const:5dc1e4:8", "const:4:8"]]
- 005dc1e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005dc594 ["INT_ADD", "register:40f0:8", ["const:5dc594:8", "const:4:8"]]
+ 005dc594 ["CALL", null, ["callee:00c58f30:8"]]
- 005dc1ec ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005dc59c ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005dc1f0 ["COPY", "tmp:0:8", ["const:958:8"]]
- 005dc1f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dc1f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dc1f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc5a0 ["COPY", "tmp:0:8", ["const:928:8"]]
+ 005dc5a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc5a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc5a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6a0a5e340f78c3187eecdc5130f300d3"></a>

### [`005dc204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc204.md) → [`005dc5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc5b4.md) FUN_005dc5b4

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
      "definition_site": "005dc5c0",
      "incomplete_value": false,
      "site": "005dc5c0",
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
    "old": {
      "definition_site": "005dc210",
      "incomplete_value": false,
      "site": "005dc210",
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
            "const:958:8"
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
      "005dc5c0",
      "DATA",
      [
        "storage",
        "00c71958",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc5c0",
      "DATA",
      [
        "storage",
        "00c72928",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc208 ["COPY", "register:4048:8", ["const:c71000:8"]]
+ 005dc5b8 ["COPY", "register:4048:8", ["const:c72000:8"]]
- 005dc20c ["COPY", "tmp:0:8", ["const:958:8"]]
- 005dc20c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005dc20c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005dc20c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005dc5bc ["COPY", "tmp:0:8", ["const:928:8"]]
+ 005dc5bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005dc5bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005dc5bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b6319f112d23e158c94eb06f3cf994b0"></a>

### [`005dc220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc220.md) → [`005dc5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc5d0.md) FUN_005dc5d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005cc5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc5e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005cc990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005cc990.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc67c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc2cc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc688",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc2d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "005dc67c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005dc688",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "005dc67c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "005dc688",
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
- 005dc2cc ["INT_ADD", "register:40f0:8", ["const:5dc2cc:8", "const:4:8"]]
- 005dc2cc ["CALL", null, ["ram:47ad34:8"]]
+ 005dc67c ["INT_ADD", "register:40f0:8", ["const:5dc67c:8", "const:4:8"]]
+ 005dc67c ["CALL", null, ["ram:47b054:8"]]
- 005dc2d8 ["INT_ADD", "register:40f0:8", ["const:5dc2d8:8", "const:4:8"]]
- 005dc2d8 ["CALL", null, ["ram:47ad34:8"]]
+ 005dc688 ["INT_ADD", "register:40f0:8", ["const:5dc688:8", "const:4:8"]]
+ 005dc688 ["CALL", null, ["ram:47b054:8"]]
- 005dc240 ["INT_ADD", "register:40f0:8", ["const:5dc240:8", "const:4:8"]]
- 005dc240 ["CALL", null, ["callee:008b7ea8:8"]]
+ 005dc5f0 ["INT_ADD", "register:40f0:8", ["const:5dc5f0:8", "const:4:8"]]
+ 005dc5f0 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-e5ae65899cceb369019f62baa235852e"></a>

### [`005dc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc340.md) → [`005dc6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc6f0.md) FUN_005dc6f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`005ccb48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccb48.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`008b0ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0ac4.md) [`008d4db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d4/008d4db0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 8件 [`005ccef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccef8.md) [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`008b1a70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1a70.md) [`008d5d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d5/008d5d5c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dc6fc",
      "incomplete_value": false,
      "site": "005dc700",
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
      "definition_site": "005dc34c",
      "incomplete_value": false,
      "site": "005dc350",
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
      "005dc6fc",
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
      "005dc6fc",
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
- 005dc350 ["INT_ADD", "register:40f0:8", ["const:5dc350:8", "const:4:8"]]
- 005dc350 ["CALL", null, ["callee:0043bad8:8"]]
+ 005dc700 ["INT_ADD", "register:40f0:8", ["const:5dc700:8", "const:4:8"]]
+ 005dc700 ["CALL", null, ["callee:0043bad8:8"]]
- 005dc348 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005dc6f8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005dc34c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005dc34c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005dc34c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005dc34c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005dc6fc ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005dc6fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005dc6fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005dc6fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1b759cbb7b04f6e1fae757ed4f5e88aa"></a>

### [`005dc35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc35c.md) → [`005dc70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc70c.md) FUN_005dc70c

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
      "definition_site": "005dc72c",
      "incomplete_value": false,
      "site": "005dc730",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc37c",
      "incomplete_value": false,
      "site": "005dc380",
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
            "const:9d8:8"
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
      "005dc730",
      "DATA",
      [
        "storage",
        "00c719d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc730",
      "DATA",
      [
        "storage",
        "00c729a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc370 ["INT_ADD", "register:40f0:8", ["const:5dc370:8", "const:4:8"]]
- 005dc370 ["CALL", null, ["callee:00c58f30:8"]]
+ 005dc720 ["INT_ADD", "register:40f0:8", ["const:5dc720:8", "const:4:8"]]
+ 005dc720 ["CALL", null, ["callee:00c58f30:8"]]
- 005dc378 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005dc728 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005dc37c ["COPY", "tmp:0:8", ["const:9d8:8"]]
- 005dc37c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dc37c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dc37c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc72c ["COPY", "tmp:0:8", ["const:9a8:8"]]
+ 005dc72c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc72c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc72c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e5be866b260be9935f5156c0059aea74"></a>

### [`005dc394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc394.md) → [`005dc744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc744.md) FUN_005dc744

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
      "definition_site": "005dc748",
      "incomplete_value": false,
      "site": "005dc74c",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc398",
      "incomplete_value": false,
      "site": "005dc39c",
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
            "const:9d8:8"
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
      "005dc74c",
      "DATA",
      [
        "storage",
        "00c719d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc74c",
      "DATA",
      [
        "storage",
        "00c729a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc394 ["COPY", "register:4040:8", ["const:c71000:8"]]
+ 005dc744 ["COPY", "register:4040:8", ["const:c72000:8"]]
- 005dc398 ["COPY", "tmp:0:8", ["const:9d8:8"]]
- 005dc398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dc398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dc398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc748 ["COPY", "tmp:0:8", ["const:9a8:8"]]
+ 005dc748 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc748 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc748 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0aa0ca9f10068dfdecc2fb78ed43b8d3"></a>

### [`005dc3b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc3b4.md) → [`005dc764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc764.md) FUN_005dc764

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.57% / 新版 91.57%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005dc3e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:005dc448",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005dc8a4"
      ]
    ]
  ],
  "added": [
    [
      "005dc794",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "005dc7f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005dc8a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc3d4 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 005dc784 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 005dc3dc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005dc3dc ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 005dc78c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005dc78c ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 005dc3e4 ["INT_ADD", "register:40f0:8", ["const:5dc3e4:8", "const:4:8"]]
- 005dc3e4 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-0d81a5ae18464109642827282615cd48"></a>

### [`005dc528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc528.md) → [`005dc8d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc8d8.md) _INIT_65

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.23% / 新版 80.23%

優先判定に残った影響 `call_argument_candidate` 15件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dca34",
      "incomplete_value": true,
      "site": "005dca38",
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
      "definition_site": "005dca24",
      "incomplete_value": true,
      "site": "005dca38",
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
      "definition_site": "005dca2c",
      "incomplete_value": true,
      "site": "005dca38",
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
      "unmatched:005dc558",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005dc564",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005dc580",
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
      "005dc908",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005dc914",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005dc930",
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
- 005dc688 ["INT_ADD", "register:40f0:8", ["const:5dc688:8", "const:4:8"]]
- 005dc688 ["CALL", null, ["callee:0043bb58:8"]]
+ 005dca38 ["INT_ADD", "register:40f0:8", ["const:5dca38:8", "const:4:8"]]
+ 005dca38 ["CALL", null, ["callee:0043bb58:8"]]
- 005dc6b0 ["INT_ADD", "register:40f0:8", ["const:5dc6b0:8", "const:4:8"]]
- 005dc6b0 ["CALL", null, ["callee:0043bb58:8"]]
+ 005dca60 ["INT_ADD", "register:40f0:8", ["const:5dca60:8", "const:4:8"]]
+ 005dca60 ["CALL", null, ["callee:0043bb58:8"]]
- 005dc6c4 ["INT_ADD", "register:40f0:8", ["const:5dc6c4:8", "const:4:8"]]
- 005dc6c4 ["CALL", null, ["callee:0043bb58:8"]]
+ 005dca74 ["INT_ADD", "register:40f0:8", ["const:5dca74:8", "const:4:8"]]
+ 005dca74 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-5639c87cb4e5bd79aaa927227a5a5281"></a>

### [`005dc8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc8c8.md) → [`005dcc78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dcc78.md) FUN_005dcc78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005e98e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e98e4.md) · 呼出先 5件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005dce98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dce98.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.15% / 新版 81.15%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005dc8cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005dc8d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005dc8d4",
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
      "005dcc7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005dcc80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005dcc84",
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
- 005dc8c8 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 005dc8cc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005dc8cc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005dc8cc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005dc8cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005dc8d0 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005dc8d0 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005dc8d0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 005dc8d0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-31eb662d9f985c610bef42f35f27bfcb"></a>

### [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) → [`005dce98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dce98.md) FUN_005dce98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`005dc8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc8c8.md) [`005dde68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde68.md) [`005de4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de4f0.md) [`005de6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de6c0.md) [`005deec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005deec0.md) · 呼出先 1件 [`00441ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441ed4.md)
- 新版 呼出元 5件 [`005dcc78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dcc78.md) [`005de218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005de218.md) [`005de8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005de8a0.md) [`005dea70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005dea70.md) [`005df270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df270.md) · 呼出先 1件 [`004421f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/004421f4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `call_argument_candidate` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dd01c",
      "incomplete_value": false,
      "site": "005dd024",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b3000:8"
          ],
          [
            "leaf",
            "const:e57:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dcc6c",
      "incomplete_value": false,
      "site": "005dcc74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b3000:8"
          ],
          [
            "leaf",
            "const:d79:8"
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
      "definition_site": "005dd038",
      "incomplete_value": false,
      "site": "005dd040",
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
            "const:9e2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dcc88",
      "incomplete_value": false,
      "site": "005dcc90",
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
            "const:915:8"
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
      "definition_site": "005dd054",
      "incomplete_value": false,
      "site": "005dd05c",
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
            "const:943:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dcca4",
      "incomplete_value": false,
      "site": "005dccac",
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
            "const:7eb:8"
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
      "005dd01c",
      "PARAM",
      [
        "storage",
        "002b3d79",
        null,
        "string"
      ]
    ],
    [
      "005dd038",
      "PARAM",
      [
        "storage",
        "002ad915",
        null,
        "string"
      ]
    ],
    [
      "005dd054",
      "PARAM",
      [
        "storage",
        "002a67eb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005dd01c",
      "PARAM",
      [
        "storage",
        "002b3e57",
        null,
        "string"
      ]
    ],
    [
      "005dd038",
      "PARAM",
      [
        "storage",
        "002ad9e2",
        null,
        "string"
      ]
    ],
    [
      "005dd054",
      "PARAM",
      [
        "storage",
        "002a6943",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dcc74 ["INT_ADD", "register:40f0:8", ["const:5dcc74:8", "const:4:8"]]
- 005dcc74 ["CALL", null, ["callee:004421f4:8"]]
+ 005dd024 ["INT_ADD", "register:40f0:8", ["const:5dd024:8", "const:4:8"]]
+ 005dd024 ["CALL", null, ["callee:004421f4:8"]]
- 005dcc90 ["INT_ADD", "register:40f0:8", ["const:5dcc90:8", "const:4:8"]]
- 005dcc90 ["CALL", null, ["callee:004421f4:8"]]
+ 005dd040 ["INT_ADD", "register:40f0:8", ["const:5dd040:8", "const:4:8"]]
+ 005dd040 ["CALL", null, ["callee:004421f4:8"]]
- 005dccac ["INT_ADD", "register:40f0:8", ["const:5dccac:8", "const:4:8"]]
- 005dccac ["CALL", null, ["callee:004421f4:8"]]
+ 005dd05c ["INT_ADD", "register:40f0:8", ["const:5dd05c:8", "const:4:8"]]
+ 005dd05c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-f4e0863f7f170ae45119ccbae5ab70e4"></a>

### [`005dcdcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcdcc.md) → [`005dd17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005dd17c.md) FUN_005dd17c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005e9114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9114.md) [`005ec2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ec/005ec2b4.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005dd790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dd790.md) [`005ddae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005ddae0.md)
- 新版 呼出元 2件 [`005e94c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e94c4.md) [`005ec664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ec/005ec664.md) · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005ddb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005ddb40.md) [`005dde90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005dde90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.96% / 新版 88.96%

優先判定に残った影響 `call_argument_candidate` 24件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dd34c",
      "incomplete_value": true,
      "site": "005dd35c",
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
            "const:58:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dd348",
      "incomplete_value": true,
      "site": "005dd35c",
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
    "ordinal": 8,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005dcfdc",
      "incomplete_value": true,
      "site": "005dcfe4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4050:8"
          ],
          [
            "leaf",
            "const:300:8"
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
      "005dd3e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005dd4a8"
      ]
    ],
    [
      "005dd464",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005dd0f8"
      ]
    ],
    [
      "005dd4a4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005dd5b4"
      ]
    ]
  ],
  "added": [
    [
      "005dd3e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005dd420"
      ]
    ],
    [
      "005dd464",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005dd4a8"
      ]
    ],
    [
      "005dd4a4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005dd540"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dcfac ["INT_ADD", "register:40f0:8", ["const:5dcfac:8", "const:4:8"]]
- 005dcfac ["CALL", null, ["callee:005ddb40:8"]]
+ 005dd35c ["INT_ADD", "register:40f0:8", ["const:5dd35c:8", "const:4:8"]]
+ 005dd35c ["CALL", null, ["callee:005ddb40:8"]]
- 005dcfe4 ["INT_ADD", "register:40f0:8", ["const:5dcfe4:8", "const:4:8"]]
- 005dcfe4 ["CALL", null, ["callee:005dde90:8"]]
+ 005dd394 ["INT_ADD", "register:40f0:8", ["const:5dd394:8", "const:4:8"]]
+ 005dd394 ["CALL", null, ["callee:005dde90:8"]]
- 005dd164 ["INT_ADD", "register:40f0:8", ["const:5dd164:8", "const:4:8"]]
- 005dd164 ["CALL", null, ["callee:005dde90:8"]]
+ 005dd514 ["INT_ADD", "register:40f0:8", ["const:5dd514:8", "const:4:8"]]
+ 005dd514 ["CALL", null, ["callee:005dde90:8"]]
~~~


<a id="compare-74a9691e99aef78d5cb0a80152d671a5"></a>

### [`005dd790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dd790.md) → [`005ddb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005ddb40.md) FUN_005ddb40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005dcdcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcdcc.md) [`005e9114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9114.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md)
- 新版 呼出元 2件 [`005dd17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005dd17c.md) [`005e94c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e94c4.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005dde14",
      "incomplete_value": true,
      "site": "005dde18",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "definition_site": "005dda64",
      "incomplete_value": true,
      "site": "005dda68",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
    "ordinal": 21,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005dd934",
      "incomplete_value": false,
      "site": "005dd938",
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
      "unmatched:005dd934",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "005dde04",
      "READ",
      [
        "storage",
        "00c9b528",
        null,
        "pointer"
      ]
    ],
    [
      "005dde08",
      "READ",
      [
        "storage",
        "00c9b530",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ddce4",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ],
    [
      "005dde04",
      "READ",
      [
        "storage",
        "00c9c4f8",
        null,
        "pointer"
      ]
    ],
    [
      "005dde08",
      "READ",
      [
        "storage",
        "00c9c500",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dd938 ["INT_ADD", "register:40f0:8", ["const:5dd938:8", "const:4:8"]]
- 005dd938 ["CALL", null, ["callee:00442c90:8"]]
+ 005ddce8 ["INT_ADD", "register:40f0:8", ["const:5ddce8:8", "const:4:8"]]
+ 005ddce8 ["CALL", null, ["callee:00442c90:8"]]
- 005dd7c0 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 005dd7c0 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 005ddb70 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 005ddb70 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
- 005dd7c8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 005dd7c8 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 005ddb78 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 005ddb78 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
~~~


<a id="compare-74c04f155ba1862cb198730e694a125c"></a>

### [`005ddae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005ddae0.md) → [`005dde90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005dde90.md) FUN_005dde90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005dcdcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcdcc.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046db08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db08.md) [`0046db20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db20.md)
- 新版 呼出元 1件 [`005dd17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005dd17c.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046de28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de28.md) [`0046de40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de40.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 76.96% / 新版 76.96%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ddc30",
      "incomplete_value": true,
      "site": "005ddc38",
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
            "register:40a8:8"
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
      "definition_site": "005ddc34",
      "incomplete_value": true,
      "site": "005ddc38",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ddc2c",
      "incomplete_value": true,
      "site": "005ddc38",
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
      "005ddeb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005ddde8"
      ]
    ],
    [
      "unmatched:005ddb58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ddf40"
      ]
    ],
    [
      "unmatched:005ddc1c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005dfbbc"
      ]
    ]
  ],
  "added": [
    [
      "005ddeb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005de198"
      ]
    ],
    [
      "005ddf08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ddf40"
      ]
    ],
    [
      "005ddfcc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005dfbbc"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ddc38 ["INT_ADD", "register:40f0:8", ["const:5ddc38:8", "const:4:8"]]
- 005ddc38 ["CALL", null, ["callee:005dfbbc:8"]]
+ 005ddfe8 ["INT_ADD", "register:40f0:8", ["const:5ddfe8:8", "const:4:8"]]
+ 005ddfe8 ["CALL", null, ["callee:005dfbbc:8"]]
- 005ddc98 ["INT_ADD", "register:40f0:8", ["const:5ddc98:8", "const:4:8"]]
- 005ddc98 ["CALL", null, ["callee:00442c90:8"]]
+ 005de048 ["INT_ADD", "register:40f0:8", ["const:5de048:8", "const:4:8"]]
+ 005de048 ["CALL", null, ["callee:00442c90:8"]]
- 005ddcb0 ["INT_ADD", "register:40f0:8", ["const:5ddcb0:8", "const:4:8"]]
- 005ddcb0 ["CALL", null, ["callee:0046db10:8"]]
+ 005de060 ["INT_ADD", "register:40f0:8", ["const:5de060:8", "const:4:8"]]
+ 005de060 ["CALL", null, ["callee:0046db10:8"]]
~~~


<a id="compare-a57718a5fbadb0522a13cdc55462ac29"></a>

### [`005dde10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde10.md) → [`005de1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005de1c0.md) FUN_005de1c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`005ebab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005eb/005ebab0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`005ebe60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005eb/005ebe60.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-1ea40f8c1120df1740f6e6e693bda229"></a>

### [`005dde3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde3c.md) → [`005de1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005de1ec.md) FUN_005de1ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`005ebab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005eb/005ebab0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`005ebe60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005eb/005ebe60.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-a7d400fe2d77f6685c2b8ace638300f3"></a>

### [`005dde68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde68.md) → [`005de218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005de218.md) FUN_005de218

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`005de4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de4f0.md)
- 新版 呼出元 1件 [`005e98e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e98e4.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005dce98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dce98.md) [`005de8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005de8a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.27% / 新版 68.27%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 1件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 33件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005de274",
      "incomplete_value": true,
      "site": "005de278",
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
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005de2e0",
      "incomplete_value": true,
      "site": "005de2e4",
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
    "ordinal": 25,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005de734",
      "incomplete_value": true,
      "site": "005de738",
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
    "old": null,
    "ordinal": 29,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005dde6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005dde70",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005dde74",
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
      "005de21c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005de220",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005de224",
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
- 005de278 ["INT_ADD", "register:40f0:8", ["const:5de278:8", "const:4:8"]]
- 005de278 ["CALL", null, ["callee:00c58f50:8"]]
+ 005de628 ["INT_ADD", "register:40f0:8", ["const:5de628:8", "const:4:8"]]
+ 005de628 ["CALL", null, ["callee:00c58f50:8"]]
- 005de2e4 ["INT_ADD", "register:40f0:8", ["const:5de2e4:8", "const:4:8"]]
- 005de2e4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005de694 ["INT_ADD", "register:40f0:8", ["const:5de694:8", "const:4:8"]]
+ 005de694 ["CALL", null, ["callee:00c58f50:8"]]
- 005de388 ["INT_ADD", "register:40f0:8", ["const:5de388:8", "const:4:8"]]
- 005de388 ["CALL", null, ["callee:005de8a0:8"]]
+ 005de738 ["INT_ADD", "register:40f0:8", ["const:5de738:8", "const:4:8"]]
+ 005de738 ["CALL", null, ["callee:005de8a0:8"]]
~~~


<a id="compare-5c99ac51bd7ae4a488447cd88c96e3e8"></a>

### [`005de4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de4f0.md) → [`005de8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005de8a0.md) FUN_005de8a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005dde68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde68.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005de218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005de218.md) · 呼出先 5件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005dce98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dce98.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.32% / 新版 89.32%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005de544",
      "incomplete_value": true,
      "site": "005de54c",
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
    "new": null,
    "old": {
      "definition_site": "005de548",
      "incomplete_value": true,
      "site": "005de54c",
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
    "new": null,
    "old": {
      "definition_site": "005de604",
      "incomplete_value": true,
      "site": "005de60c",
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
      "unmatched:005de4f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005de4f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005de4fc",
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
      "005de8a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005de8a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005de8ac",
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
- 005de54c ["INT_ADD", "register:40f0:8", ["const:5de54c:8", "const:4:8"]]
- 005de54c ["CALL", null, ["callee:004413ec:8"]]
+ 005de8fc ["INT_ADD", "register:40f0:8", ["const:5de8fc:8", "const:4:8"]]
+ 005de8fc ["CALL", null, ["callee:004413ec:8"]]
- 005de60c ["INT_ADD", "register:40f0:8", ["const:5de60c:8", "const:4:8"]]
- 005de60c ["CALL", null, ["callee:004413ec:8"]]
+ 005de9bc ["INT_ADD", "register:40f0:8", ["const:5de9bc:8", "const:4:8"]]
+ 005de9bc ["CALL", null, ["callee:004413ec:8"]]
- 005de4f0 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


<a id="compare-f9b96d00a9211807ee545b86a2d25106"></a>

### [`005de6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de6c0.md) → [`005dea70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005dea70.md) FUN_005dea70

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0046c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c4a0.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`005deec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005deec0.md)
- 新版 呼出元 1件 [`005e98e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e98e4.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0046c7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7c0.md) [`005dce98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dce98.md) [`005df270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df270.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.64% / 新版 74.64%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 6件, `store_value` 1件, `unresolved_branch_alignment` 21件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005df0fc",
      "incomplete_value": true,
      "site": "005df0fc",
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
                "const:540:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ded4c",
      "incomplete_value": true,
      "site": "005ded4c",
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
                "const:475:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 74,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005deb30",
      "incomplete_value": true,
      "site": "005deb34",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005decb4",
      "incomplete_value": true,
      "site": "005decbc",
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
      "unmatched:005de6c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:005de6c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005de6cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005dea74",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "005dea78",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005dea7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005de784 ["INT_ADD", "register:40f0:8", ["const:5de784:8", "const:4:8"]]
- 005de784 ["CALL", null, ["callee:00c58f50:8"]]
+ 005deb34 ["INT_ADD", "register:40f0:8", ["const:5deb34:8", "const:4:8"]]
+ 005deb34 ["CALL", null, ["callee:00c58f50:8"]]
- 005de90c ["INT_ADD", "register:40f0:8", ["const:5de90c:8", "const:4:8"]]
- 005de90c ["CALL", null, ["callee:004413ec:8"]]
+ 005decbc ["INT_ADD", "register:40f0:8", ["const:5decbc:8", "const:4:8"]]
+ 005decbc ["CALL", null, ["callee:004413ec:8"]]
- 005deb34 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:30:8"]]
- 005deb34 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 005deb34 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-76c1066c5c5eb5400e0a0e722121122e"></a>

### [`005deec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005deec0.md) → [`005df270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df270.md) FUN_005df270

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005de6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de6c0.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005dea70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005dea70.md) · 呼出先 5件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005dce98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dce98.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.68% / 新版 81.68%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005def60"
      ],
      [
        "CONDITIONAL_JUMP",
        "005df310"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005df30c",
      "incomplete_value": true,
      "site": "005df378",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "definition_site": "005def5c",
      "incomplete_value": true,
      "site": "005defc8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
    "ordinal": 16,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005def60"
      ],
      [
        "CONDITIONAL_JUMP",
        "005df310"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005df30c",
      "incomplete_value": true,
      "site": "005df380",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "definition_site": "005def5c",
      "incomplete_value": true,
      "site": "005defd0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
    "ordinal": 17,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "005def60"
      ],
      [
        "CONDITIONAL_JUMP",
        "005df310"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005df30c",
      "incomplete_value": true,
      "site": "005df384",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "definition_site": "005def5c",
      "incomplete_value": true,
      "site": "005defd4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "unmatched:005deec4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005deec8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005deecc",
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
      "005df274",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005df278",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005df27c",
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
- 005deec0 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 005deec4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005deec4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005deec4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005deec4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005deec8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:50:8"]]
- 005deec8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-a0e1197f5d2aa3e1e79001e93fd99542"></a>

### [`005df114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df114.md) → [`005df4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df4c4.md) FUN_005df4c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005dd790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dd790.md) [`005edabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005edabc.md) [`005ee610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ee/005ee610.md) [`005ef5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005ef5ec.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md) [`005df60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df60c.md)
- 新版 呼出元 4件 [`005ddb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005ddb40.md) [`005ede6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ed/005ede6c.md) [`005ee9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ee/005ee9c0.md) [`005ef99c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ef/005ef99c.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md) [`0046f164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f164.md) [`005df9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df9bc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 61.32% / 新版 61.32%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 29件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005df8f8",
      "incomplete_value": true,
      "site": "005df908",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 20,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "005df994",
      "incomplete_value": true,
      "site": "005df9b4",
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
      "unmatched:005df118",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005df11c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005df15c",
      "DATA",
      [
        "storage",
        "002d8632",
        "switchD_005df164::switchdataD_002d8632",
        "ushort"
      ]
    ]
  ],
  "added": [
    [
      "005df4c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005df4cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005df50c",
      "DATA",
      [
        "storage",
        "002d8672",
        "switchD_005df514::switchdataD_002d8672",
        "ushort"
      ]
    ]
  ]
}
~~~


~~~diff
- 005df558 ["INT_ADD", "register:40f0:8", ["const:5df558:8", "const:4:8"]]
- 005df558 ["CALL", null, ["callee:005df9bc:8"]]
+ 005df908 ["INT_ADD", "register:40f0:8", ["const:5df908:8", "const:4:8"]]
+ 005df908 ["CALL", null, ["callee:005df9bc:8"]]
- 005df114 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 005df118 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005df118 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005df118 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005df118 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ae79bf8eea1093810e82831f03f0c048"></a>

### [`005df60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df60c.md) → [`005df9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df9bc.md) FUN_005df9bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 7件 [`005df114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df114.md) [`005df80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df80c.md) [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) [`005edabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005edabc.md) [`005ee610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ee/005ee610.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 7件 [`005df4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df4c4.md) [`005dfbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005dfbbc.md) [`005e98e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e98e4.md) [`005ede6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ed/005ede6c.md) [`005ee9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ee/005ee9c0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.85% / 新版 73.85%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 10件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005df60c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005df610",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005df614",
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
      "005df9bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005df9c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005df9c4",
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
- 005df60c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005df60c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005df60c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 005df60c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005df610 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 005df610 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 005df610 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005df610 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005df614 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 005df614 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 005df614 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005df614 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6bcceedee6cfe3bf26c18c83a6315a94"></a>

### [`005df710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df710.md) → [`005dfac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005dfac0.md) FUN_005dfac0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005df114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df114.md) [`005df80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df80c.md) [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`005df4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df4c4.md) [`005dfbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005dfbbc.md) [`005e98e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e98e4.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005df710",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005df714",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005df718",
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
      "005dfac0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005dfac4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005dfac8",
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
- 005df710 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005df710 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005df710 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005df710 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005df714 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005df714 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005df714 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005df714 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005df718 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005df718 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005df718 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005df718 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1d7735079e364173250134ce8578e67c"></a>

### [`005df80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df80c.md) → [`005dfbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005dfbbc.md) FUN_005dfbbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005ddae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005ddae0.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md) [`005df60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df60c.md)
- 新版 呼出元 1件 [`005dde90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005dde90.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md) [`0046f164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f164.md) [`005df9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005df9bc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 52.04% / 新版 52.04%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 33件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dfff4",
      "incomplete_value": true,
      "site": "005e0000",
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
            "register:40b0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 20,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dfff0",
      "incomplete_value": true,
      "site": "005e0000",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 20,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005e0010",
      "incomplete_value": false,
      "site": "005e002c",
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
      "definition_site": "005dfc60",
      "incomplete_value": false,
      "site": "005dfc7c",
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
      "unmatched:005df81c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005df820",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005df824",
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
      "005dfbcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005dfbd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005dfbd4",
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
- 005df8cc ["INT_ADD", "register:40f0:8", ["const:5df8cc:8", "const:4:8"]]
- 005df8cc ["CALL", null, ["callee:0046cde4:8"]]
+ 005dfc7c ["INT_ADD", "register:40f0:8", ["const:5dfc7c:8", "const:4:8"]]
+ 005dfc7c ["CALL", null, ["callee:0046cde4:8"]]
- 005dfc50 ["INT_ADD", "register:40f0:8", ["const:5dfc50:8", "const:4:8"]]
- 005dfc50 ["CALL", null, ["callee:005df9bc:8"]]
+ 005e0000 ["INT_ADD", "register:40f0:8", ["const:5e0000:8", "const:4:8"]]
+ 005e0000 ["CALL", null, ["callee:005df9bc:8"]]
- 005dfc7c ["INT_ADD", "register:40f0:8", ["const:5dfc7c:8", "const:4:8"]]
- 005dfc7c ["CALL", null, ["callee:005dfac0:8"]]
+ 005e002c ["INT_ADD", "register:40f0:8", ["const:5e002c:8", "const:4:8"]]
+ 005e002c ["CALL", null, ["callee:005dfac0:8"]]
~~~


<a id="compare-563550402124211f67d7f82350d04a60"></a>

### [`005dfd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005dfd08.md) → [`005e00b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e00b8.md) FUN_005e00b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005ddae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005ddae0.md) [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) [`00a67b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67b60.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 3件 [`005dde90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dd/005dde90.md) [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) [`00a68b54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68b54.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005e00c4",
      "incomplete_value": false,
      "site": "005e00c8",
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
      "definition_site": "005dfd14",
      "incomplete_value": false,
      "site": "005dfd18",
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
      "005e00c4",
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
      "005e00c4",
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
- 005dfd18 ["INT_ADD", "register:40f0:8", ["const:5dfd18:8", "const:4:8"]]
- 005dfd18 ["CALL", null, ["callee:00442c90:8"]]
+ 005e00c8 ["INT_ADD", "register:40f0:8", ["const:5e00c8:8", "const:4:8"]]
+ 005e00c8 ["CALL", null, ["callee:00442c90:8"]]
- 005dfd10 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005e00c0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005dfd14 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005dfd14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005dfd14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005dfd14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005e00c4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005e00c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005e00c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005e00c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


