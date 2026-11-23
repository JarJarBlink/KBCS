# v16.0.2 → v16.0.3 · 最優先の変更候補 (56)

[一覧の目次](README.md)

<a id="compare-6522c654f0655418d82d874ed2727148"></a>

### [`0087dd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087dd68.md) → [`0087ed14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087ed14.md) _INIT_163

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0087dc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087dc7c.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0087ec28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087ec28.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 46.17% / 新版 46.17%

優先判定に残った影響 `call_argument_candidate` 18件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 15件, `unresolved_store_alignment` 66件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087ee88",
      "incomplete_value": true,
      "site": "0087ee98",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087ee8c",
      "incomplete_value": true,
      "site": "0087ee98",
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
    "old": null,
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087eeb0",
      "incomplete_value": true,
      "site": "0087eec0",
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
      "unmatched:0087dd6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087dd70",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087dda4",
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
      "0087ed18",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0087ed1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0087ed50",
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
- 0087deec ["INT_ADD", "register:40f0:8", ["const:87deec:8", "const:4:8"]]
- 0087deec ["CALL", null, ["callee:0043bb58:8"]]
+ 0087ee98 ["INT_ADD", "register:40f0:8", ["const:87ee98:8", "const:4:8"]]
+ 0087ee98 ["CALL", null, ["callee:0043bb58:8"]]
- 0087df14 ["INT_ADD", "register:40f0:8", ["const:87df14:8", "const:4:8"]]
- 0087df14 ["CALL", null, ["callee:0043bb58:8"]]
+ 0087eec0 ["INT_ADD", "register:40f0:8", ["const:87eec0:8", "const:4:8"]]
+ 0087eec0 ["CALL", null, ["callee:0043bb58:8"]]
- 0087e06c ["INT_ADD", "register:40f0:8", ["const:87e06c:8", "const:4:8"]]
- 0087e06c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0087f018 ["INT_ADD", "register:40f0:8", ["const:87f018:8", "const:4:8"]]
+ 0087f018 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-f268e93c65f211abdbea3e066bab77f0"></a>

### [`0087e62c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e62c.md) → [`0087f5d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f5d8.md) FUN_0087f5d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 7件 [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589890.md) [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) · 呼出先 7件 [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589bb0.md) [`0087ac8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ac8c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.84% / 新版 91.84%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087e65c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087e6d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087f6d0"
      ]
    ]
  ],
  "added": [
    [
      "0087f608",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0087f67c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087f6d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087e640 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 0087e640 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 0087e640 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 0087e640 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 0087e65c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0087e65c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0087e65c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 0087e68c ["INT_ADD", "register:40f0:8", ["const:87e68c:8", "const:4:8"]]
- 0087e68c ["CALL", null, ["callee:005891cc:8"]]
+ 0087f638 ["INT_ADD", "register:40f0:8", ["const:87f638:8", "const:4:8"]]
+ 0087f638 ["CALL", null, ["callee:005891cc:8"]]
~~~


<a id="compare-a8358bf13c7ac792f49e6e1f7252083a"></a>

### [`0087e768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e768.md) → [`0087f714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f714.md) FUN_0087f714

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087e764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e764.md) · 呼出先 15件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0087eda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eda4.md) [`0087f090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f090.md)
- 新版 呼出元 1件 [`0087f710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f710.md) · 呼出先 15件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0087fd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fd50.md) [`0088003c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088003c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.26% / 新版 74.26%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087f7bc",
      "incomplete_value": true,
      "site": "0087f7c0",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087f7b8",
      "incomplete_value": true,
      "site": "0087f7c0",
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
      "definition_site": "0087f7b8",
      "incomplete_value": true,
      "site": "0087f7c0",
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
                "register:4040:8"
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
      "unmatched:0087e76c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087e770",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087e790",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0087f718",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0087f71c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0087f73c",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0087e814 ["INT_ADD", "register:40f0:8", ["const:87e814:8", "const:4:8"]]
- 0087e814 ["CALL", null, ["callee:0043be80:8"]]
+ 0087f7c0 ["INT_ADD", "register:40f0:8", ["const:87f7c0:8", "const:4:8"]]
+ 0087f7c0 ["CALL", null, ["callee:0043be80:8"]]
- 0087e8dc ["INT_ADD", "register:40f0:8", ["const:87e8dc:8", "const:4:8"]]
- 0087e8dc ["CALL", null, ["callee:00c58fe0:8"]]
+ 0087f888 ["INT_ADD", "register:40f0:8", ["const:87f888:8", "const:4:8"]]
+ 0087f888 ["CALL", null, ["callee:00c58fe0:8"]]
- 0087e934 ["INT_ADD", "register:40f0:8", ["const:87e934:8", "const:4:8"]]
- 0087e934 ["CALL", null, ["callee:00c594d0:8"]]
+ 0087f8e0 ["INT_ADD", "register:40f0:8", ["const:87f8e0:8", "const:4:8"]]
+ 0087f8e0 ["CALL", null, ["callee:00c594d0:8"]]
~~~


<a id="compare-3c8cab07b4f95385dfde0f5fd2bf13c2"></a>

### [`0087eb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb78.md) → [`0087fb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fb24.md) FUN_0087fb24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`009cc69c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc69c.md) · 呼出先 2件 [`0087da1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087da1c.md) [`0087eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eca0.md)
- 新版 呼出元 1件 [`009cd648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd648.md) · 呼出先 2件 [`0087e9c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e9c8.md) [`0087fc4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fc4c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087eb90 ["INT_ADD", "register:40f0:8", ["const:87eb90:8", "const:4:8"]]
- 0087eb90 ["CALL", null, ["callee:0087fc4c:8"]]
+ 0087fb3c ["INT_ADD", "register:40f0:8", ["const:87fb3c:8", "const:4:8"]]
+ 0087fb3c ["CALL", null, ["callee:0087fc4c:8"]]
- 0087eb9c ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
+ 0087fb48 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
~~~


<a id="compare-69372cfb6362dea5e6132096f47e2b94"></a>

### [`0087ebc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ebc4.md) → [`0087fb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fb70.md) FUN_0087fb70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087ebc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087ebc8",
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
      "0087fb70",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087fb74",
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
- 0087ebc4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087ebc4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087ebc4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087ebc4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087ebc8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0087ebc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0087ebcc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-cc86f1e1a970c91aa230a6bd55ba8c12"></a>

### [`0087eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eca0.md) → [`0087fc4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fc4c.md) FUN_0087fc4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0087eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb18.md) [`0087eb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb78.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`0087fac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fac4.md) [`0087fb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fb24.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 10件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "0087ed88",
      "incomplete_value": true,
      "site": "0087eda0",
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
      "unmatched:0087eca0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087eca4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087eca8",
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
      "0087fc4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0087fc50",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0087fc54",
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
- 0087eca0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087eca0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087eca0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 0087eca0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087eca4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0087eca4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 0087eca8 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 0087eca8 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 0087eca8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0087eca8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d612c023c18aa071304122b31649d2fe"></a>

### [`0087eda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eda4.md) → [`0087fd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fd50.md) FUN_0087fd50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0087e768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e768.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0087eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eed0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0087f714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f714.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0087fe7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fe7c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0087fe38",
      "incomplete_value": true,
      "site": "0087fe50",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 0087edd8 ["INT_ADD", "register:40f0:8", ["const:87edd8:8", "const:4:8"]]
- 0087edd8 ["CALL", null, ["callee:0087fe7c:8"]]
+ 0087fd84 ["INT_ADD", "register:40f0:8", ["const:87fd84:8", "const:4:8"]]
+ 0087fd84 ["CALL", null, ["callee:0087fe7c:8"]]
- 0087ede8 ["BRANCH", null, ["local:b10:8"]]
+ 0087fd94 ["BRANCH", null, ["local:b12:8"]]
- 0087edf8 ["INT_ADD", "register:40f0:8", ["const:87edf8:8", "const:4:8"]]
- 0087edf8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0087fda4 ["INT_ADD", "register:40f0:8", ["const:87fda4:8", "const:4:8"]]
+ 0087fda4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-44ee045f4002802c020192af6380a051"></a>

### [`0087eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eed0.md) → [`0087fe7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fe7c.md) FUN_0087fe7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0087eda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eda4.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`0087fd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fd50.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 75.38% / 新版 75.38%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087ff20",
      "incomplete_value": true,
      "site": "0087ff2c",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "0087ff24",
      "incomplete_value": true,
      "site": "0087ff2c",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:0087ef54",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c590f0"
      ]
    ],
    [
      "unmatched:0087ef9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087ff60"
      ]
    ],
    [
      "unmatched:0087efa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087fecc"
      ]
    ]
  ],
  "added": [
    [
      "0087ff00",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c590f0"
      ]
    ],
    [
      "0087ff48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087ff60"
      ]
    ],
    [
      "0087ff54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087fecc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087ef80 ["INT_ADD", "register:40f0:8", ["const:87ef80:8", "const:4:8"]]
- 0087ef80 ["CALL", null, ["callee:00c590f0:8"]]
+ 0087ff2c ["INT_ADD", "register:40f0:8", ["const:87ff2c:8", "const:4:8"]]
+ 0087ff2c ["CALL", null, ["callee:00c590f0:8"]]
- 0087eef4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0087eef4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 0087fea0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0087fea0 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 0087ef08 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0087ef08 ["COPY", "tmp:1:8", ["register:4060:8"]]
- 0087ef08 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 0087ef08 ["INT_ADD", "tmp:1:8", ["register:4010:8", "const:1:8"]]
~~~


<a id="compare-46933e3bd4f96cb532919eded8f9940f"></a>

### [`0087efd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087efd4.md) → [`0087ff80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087ff80.md) FUN_0087ff80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 87.10% / 新版 87.10%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087efe8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087fff0"
      ]
    ],
    [
      "unmatched:0087f018",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0087ff94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087fff0"
      ]
    ],
    [
      "0087ffc4",
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
- 0087efe8 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 0087efe8 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 0087f004 ["INT_ADD", "register:40f0:8", ["const:87f004:8", "const:4:8"]]
- 0087f004 ["CALL", null, ["callee:00c54d90:8"]]
+ 0087ffb0 ["INT_ADD", "register:40f0:8", ["const:87ffb0:8", "const:4:8"]]
+ 0087ffb0 ["CALL", null, ["callee:00c54d90:8"]]
- 0087f014 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:10:8"]]
- 0087f014 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f76b438acff1e6c7cda7fa6c9da6ae23"></a>

### [`0087f050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f050.md) → [`0087fffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fffc.md) FUN_0087fffc

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
      "definition_site": "00880000",
      "incomplete_value": false,
      "site": "00880004",
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
            "const:6a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087f054",
      "incomplete_value": false,
      "site": "0087f058",
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
            "const:6d0:8"
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
      "00880004",
      "DATA",
      [
        "storage",
        "00c806d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00880004",
      "DATA",
      [
        "storage",
        "00c816a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087f050 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087fffc ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087f054 ["COPY", "tmp:0:8", ["const:6d0:8"]]
- 0087f054 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087f054 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087f054 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00880000 ["COPY", "tmp:0:8", ["const:6a0:8"]]
+ 00880000 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00880000 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00880000 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cf94e8a0e3415d896b155d8dd7b9f91b"></a>

### [`0087f060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f060.md) → [`0088000c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088000c.md) FUN_0088000c

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
      "unmatched:0087f060",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f064",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f078",
      "DATA",
      [
        "storage",
        "00c806d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0088000c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00880010",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00880024",
      "DATA",
      [
        "storage",
        "00c816a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087f060 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087f060 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087f060 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087f060 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087f064 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0087f064 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0087f068 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-197f5f9971c49548fb74a52988c46433"></a>

### [`0087f090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f090.md) → [`0088003c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088003c.md) FUN_0088003c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0087e768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e768.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md)
- 新版 呼出元 1件 [`0087f714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f714.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.00% / 新版 84.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00880068",
      "incomplete_value": true,
      "site": "00880070",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:0087f090",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f094",
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
      "0088003c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00880040",
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
- 0087f0c4 ["INT_ADD", "register:40f0:8", ["const:87f0c4:8", "const:4:8"]]
- 0087f0c4 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00880070 ["INT_ADD", "register:40f0:8", ["const:880070:8", "const:4:8"]]
+ 00880070 ["CALL", null, ["callee:00c5b8d0:8"]]
- 0087f090 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087f090 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087f090 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087f090 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087f094 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0087f094 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0087f094 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0087f094 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5dcbc654c805229820200c67fadf706f"></a>

### [`0087f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f0fc.md) → [`008800a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/008800a8.md) FUN_008800a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0087f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f0fc.md) [`00bc8a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8a74.md) · 呼出先 3件 [`0087f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f0fc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md)
- 新版 呼出元 2件 [`008800a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/008800a8.md) [`00bc9a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc9a68.md) · 呼出先 3件 [`008800a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/008800a8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087f120",
      "incomplete_value": true,
      "site": "0087f124",
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
      "definition_site": "0087f11c",
      "incomplete_value": true,
      "site": "0087f124",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087f128",
      "incomplete_value": true,
      "site": "0087f130",
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
      "unmatched:0087f0fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f100",
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
      "008800a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008800ac",
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
- 0087f124 ["INT_ADD", "register:40f0:8", ["const:87f124:8", "const:4:8"]]
- 0087f124 ["CALL", null, ["local:b0:8"]]
+ 008800d0 ["INT_ADD", "register:40f0:8", ["const:8800d0:8", "const:4:8"]]
+ 008800d0 ["CALL", null, ["local:b0:8"]]
- 0087f130 ["INT_ADD", "register:40f0:8", ["const:87f130:8", "const:4:8"]]
- 0087f130 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 008800dc ["INT_ADD", "register:40f0:8", ["const:8800dc:8", "const:4:8"]]
+ 008800dc ["CALL", null, ["callee:00c5b8d0:8"]]
- 0087f140 ["INT_ADD", "register:40f0:8", ["const:87f140:8", "const:4:8"]]
- 0087f140 ["CALL", null, ["callee:00c58f50:8"]]
+ 008800ec ["INT_ADD", "register:40f0:8", ["const:8800ec:8", "const:4:8"]]
+ 008800ec ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e310a0c6f1f2bb4c1459b118610c9f0a"></a>

### [`0087f164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f164.md) → [`00880110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/00880110.md) FUN_00880110

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.29% / 新版 74.29%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087f1c4",
      "incomplete_value": true,
      "site": "0087f1c8",
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
      "unmatched:0087f168",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f16c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f170",
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
      "00880114",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00880118",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088011c",
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
- 0087f1c8 ["INT_ADD", "register:40f0:8", ["const:87f1c8:8", "const:4:8"]]
- 0087f1c8 ["CALL", null, ["callee:00493064:8"]]
+ 00880174 ["INT_ADD", "register:40f0:8", ["const:880174:8", "const:4:8"]]
+ 00880174 ["CALL", null, ["callee:00493064:8"]]
- 0087f164 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 0087f168 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087f168 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087f168 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 0087f168 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f0ec52dbae7354c5cea1a8a813c08049"></a>

### [`0087f2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f2c0.md) → [`0088026c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088026c.md) FUN_0088026c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.32% / 新版 55.32%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008802ec",
      "incomplete_value": true,
      "site": "008802f0",
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
                "const:30:8"
              ]
            ]
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
      "unmatched:0087f2c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f2c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f2d8",
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
      "00880270",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00880274",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00880284",
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
- 0087f344 ["INT_ADD", "register:40f0:8", ["const:87f344:8", "const:4:8"]]
- 0087f344 ["CALL", null, ["callee:00c58f50:8"]]
+ 008802f0 ["INT_ADD", "register:40f0:8", ["const:8802f0:8", "const:4:8"]]
+ 008802f0 ["CALL", null, ["callee:00c58f50:8"]]
- 0087f2c0 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 0087f2c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087f2c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087f2c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 0087f2c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-17a20afd8158ff5de51ef3f986ece2fa"></a>

### [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) → [`0088036c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088036c.md) FUN_0088036c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 55件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md)
- 新版 呼出元 0件  · 呼出先 55件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043efc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043efc0.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0043faec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043faec.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.71% / 新版 68.71%

優先判定に残った影響 `call_argument_candidate` 34件, `call_target` 1件, `return_value_candidate` 1件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 48件, `unresolved_store_alignment` 49件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00880b7c",
      "incomplete_value": false,
      "site": "00880b80",
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
                "const:c66000:8"
              ],
              [
                "leaf",
                "const:628:8"
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
      "definition_site": "0087fbd0",
      "incomplete_value": false,
      "site": "0087fbd4",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:658:8"
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
    "ordinal": 70,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008803b4",
      "incomplete_value": true,
      "site": "008803b8",
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008803bc",
      "incomplete_value": true,
      "site": "008803c8",
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
      "unmatched:0087f3c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f3c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087f3cc",
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
      "00880370",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00880374",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00880378",
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
- 0087f40c ["INT_ADD", "register:40f0:8", ["const:87f40c:8", "const:4:8"]]
- 0087f40c ["CALL", null, ["callee:0048503c:8"]]
+ 008803b8 ["INT_ADD", "register:40f0:8", ["const:8803b8:8", "const:4:8"]]
+ 008803b8 ["CALL", null, ["callee:0048503c:8"]]
- 0087f41c ["INT_ADD", "register:40f0:8", ["const:87f41c:8", "const:4:8"]]
- 0087f41c ["CALL", null, ["callee:0048515c:8"]]
+ 008803c8 ["INT_ADD", "register:40f0:8", ["const:8803c8:8", "const:4:8"]]
+ 008803c8 ["CALL", null, ["callee:0048515c:8"]]
- 0087f42c ["INT_ADD", "register:40f0:8", ["const:87f42c:8", "const:4:8"]]
- 0087f42c ["CALL", null, ["callee:004853ac:8"]]
+ 008803d8 ["INT_ADD", "register:40f0:8", ["const:8803d8:8", "const:4:8"]]
+ 008803d8 ["CALL", null, ["callee:004853ac:8"]]
~~~


<a id="compare-3436eb8b80aa92e3e8945ab3c25e2ca0"></a>

### [`008801e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/008801e4.md) → [`00881190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881190.md) FUN_00881190

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) · 呼出先 9件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492c40.md) [`00493914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493914.md)
- 新版 呼出元 1件 [`0088036c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088036c.md) · 呼出先 9件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`00492f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492f60.md) [`00493c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493c34.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.69% / 新版 82.69%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 7件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00881234",
      "incomplete_value": false,
      "site": "00881238",
      "value": [
        "leaf",
        "const:40:8"
      ]
    },
    "old": null,
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
      "unmatched:00880214",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00880218",
      "DATA",
      [
        "storage",
        "0039b1d7",
        null,
        "qword"
      ]
    ],
    [
      "unmatched:00880220",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "008811c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008811c4",
      "DATA",
      [
        "storage",
        "0039b1d7",
        null,
        "dword"
      ]
    ],
    [
      "008811cc",
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
- 0088028c ["INT_ADD", "register:40f0:8", ["const:88028c:8", "const:4:8"]]
- 0088028c ["CALL", null, ["callee:00c58f30:8"]]
+ 00881238 ["INT_ADD", "register:40f0:8", ["const:881238:8", "const:4:8"]]
+ 00881238 ["CALL", null, ["callee:00c58f30:8"]]
- 00880214 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00880214 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00880214 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00880218 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00880218 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00880218 ["COPY", "tmp:2:8", ["register:4048:8"]]
- 00880218 ["COPY", "tmp:3:8", ["tmp:2:8"]]
~~~


<a id="compare-db10be8484f32780adcbb54aea0ee4fb"></a>

### [`00880418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880418.md) → [`008813c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/008813c4.md) FUN_008813c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 67.74% / 新版 67.74%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00880444",
      "incomplete_value": false,
      "site": "00880448",
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
      "definition_site": "00880440",
      "incomplete_value": true,
      "site": "00880448",
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
      "unmatched:0088042c",
      "READ",
      [
        "storage",
        "00c9ad68",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00880438",
      "DATA",
      [
        "storage",
        "00c65668",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088043c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008813fc"
      ]
    ]
  ],
  "added": [
    [
      "008813d8",
      "READ",
      [
        "storage",
        "00c9bd38",
        null,
        "pointer"
      ]
    ],
    [
      "008813e4",
      "DATA",
      [
        "storage",
        "00c66638",
        null,
        "undefined *"
      ]
    ],
    [
      "008813e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008813fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00880448 ["INT_ADD", "register:40f0:8", ["const:880448:8", "const:4:8"]]
- 00880448 ["CALL", null, ["callee:00c54d90:8"]]
+ 008813f4 ["INT_ADD", "register:40f0:8", ["const:8813f4:8", "const:4:8"]]
+ 008813f4 ["CALL", null, ["callee:00c54d90:8"]]
- 00880424 ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 008813d0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 0088042c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d68:8"]]
- 0088042c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0c4356afdd5ac8b54f60893d37776ad5"></a>

### [`00880494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880494.md) → [`00881440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881440.md) FUN_00881440

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cfd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cfd8.md) [`0047cff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cff8.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043faec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043faec.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d2f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d2f8.md) [`0047d318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d318.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 50.76% / 新版 50.76%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 11件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00881610",
      "incomplete_value": true,
      "site": "00881614",
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
                "const:30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 28,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00881620",
      "incomplete_value": true,
      "site": "00881624",
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
      "unmatched:00880498",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088049c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008804a0",
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
      "00881444",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00881448",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0088144c",
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
- 00880668 ["INT_ADD", "register:40f0:8", ["const:880668:8", "const:4:8"]]
- 00880668 ["CALL", null, ["callee:00c58f50:8"]]
+ 00881614 ["INT_ADD", "register:40f0:8", ["const:881614:8", "const:4:8"]]
+ 00881614 ["CALL", null, ["callee:00c58f50:8"]]
- 00880678 ["INT_ADD", "register:40f0:8", ["const:880678:8", "const:4:8"]]
- 00880678 ["CALL", null, ["callee:00c58f50:8"]]
+ 00881624 ["INT_ADD", "register:40f0:8", ["const:881624:8", "const:4:8"]]
+ 00881624 ["CALL", null, ["callee:00c58f50:8"]]
- 00880494 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-9339abd38334eab7bbf8561843ab36e3"></a>

### [`00880c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880c44.md) → [`00881bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881bf0.md) FUN_00881bf0

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
      "definition_site": "00881c3c",
      "incomplete_value": false,
      "site": "00881c40",
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
      "definition_site": "00881c38",
      "incomplete_value": true,
      "site": "00881c40",
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


~~~diff
- 00880c94 ["INT_ADD", "register:40f0:8", ["const:880c94:8", "const:4:8"]]
- 00880c94 ["CALL", null, ["callee:00c54d90:8"]]
+ 00881c40 ["INT_ADD", "register:40f0:8", ["const:881c40:8", "const:4:8"]]
+ 00881c40 ["CALL", null, ["callee:00c54d90:8"]]
- 00880c60 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00881c0c ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00880c64 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00880c64 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00881c10 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00881c10 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-e746a28c2266691a9f149e8210ca8e42"></a>

### [`00880cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880cc8.md) → [`00881c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881c74.md) FUN_00881c74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.85% / 新版 84.85%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00880d10",
      "incomplete_value": true,
      "site": "00880d18",
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
      "unmatched:00880ce4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00881ca0"
      ]
    ],
    [
      "unmatched:00880d0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00881ccc"
      ]
    ],
    [
      "unmatched:00880d38",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00881c90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00881ca0"
      ]
    ],
    [
      "00881cb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00881ccc"
      ]
    ],
    [
      "00881ce4",
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
- 00880d18 ["INT_ADD", "register:40f0:8", ["const:880d18:8", "const:4:8"]]
- 00880d18 ["CALL", null, ["callee:00c54d90:8"]]
+ 00881cc4 ["INT_ADD", "register:40f0:8", ["const:881cc4:8", "const:4:8"]]
+ 00881cc4 ["CALL", null, ["callee:00c54d90:8"]]
- 00880ce0 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 00880ce0 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 00880ce0 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 00880ce0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00880ce4 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-5dcf584fcd76c94da319d0d80521570e"></a>

### [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md) → [`00881cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881cf8.md) FUN_00881cf8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 16件 [`004737bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004737bc.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`00873e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873e20.md) [`008810f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008810f0.md) [`00883b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883b2c.md) · 呼出先 14件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00768420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768420.md)
- 新版 呼出元 16件 [`00473adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473adc.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) [`00874dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874dcc.md) [`0088209c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/0088209c.md) [`00884ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884ad8.md) · 呼出先 14件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00452fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00452/00452fb4.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md) [`007687fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007687fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.88% / 新版 78.88%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00881e3c",
      "incomplete_value": false,
      "site": "00881e3c",
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
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00880e90",
      "incomplete_value": false,
      "site": "00880e90",
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
            "const:df8:8"
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
      "definition_site": "00881e8c",
      "incomplete_value": true,
      "site": "00881e94",
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
    "old": null,
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00881e9c",
      "incomplete_value": true,
      "site": "00881eb0",
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
      "unmatched:00880d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00880d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00880d78",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00881cfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00881d00",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00881d24",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00880ee8 ["INT_ADD", "register:40f0:8", ["const:880ee8:8", "const:4:8"]]
- 00880ee8 ["CALL", null, ["callee:00c54d60:8"]]
+ 00881e94 ["INT_ADD", "register:40f0:8", ["const:881e94:8", "const:4:8"]]
+ 00881e94 ["CALL", null, ["callee:00c54d60:8"]]
- 00880f04 ["INT_ADD", "register:40f0:8", ["const:880f04:8", "const:4:8"]]
- 00880f04 ["CALL", null, ["callee:00452fb4:8"]]
+ 00881eb0 ["INT_ADD", "register:40f0:8", ["const:881eb0:8", "const:4:8"]]
+ 00881eb0 ["CALL", null, ["callee:00452fb4:8"]]
- 00880fa0 ["INT_ADD", "register:40f0:8", ["const:880fa0:8", "const:4:8"]]
- 00880fa0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00881f4c ["INT_ADD", "register:40f0:8", ["const:881f4c:8", "const:4:8"]]
+ 00881f4c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-54c1b09652dd77a9ba19d66e0f419495"></a>

### [`0088106c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/0088106c.md) → [`00882018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/00882018.md) FUN_00882018

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008810a0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0088204c",
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
- 00881080 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00881080 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0088202c ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 0088202c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0088108c ["INT_ADD", "register:40f0:8", ["const:88108c:8", "const:4:8"]]
- 0088108c ["CALL", null, ["callee:00c54d90:8"]]
+ 00882038 ["INT_ADD", "register:40f0:8", ["const:882038:8", "const:4:8"]]
+ 00882038 ["CALL", null, ["callee:00c54d90:8"]]
- 00881090 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00881090 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0088203c ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0088203c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-fe2bdae1f53b5b6f25eb597a74c99871"></a>

### [`008810f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008810f0.md) → [`0088209c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/0088209c.md) FUN_0088209c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md) [`008861f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008861f8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) · 呼出先 9件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00560bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560bbc.md) [`00881cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881cf8.md) [`008871a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/008871a4.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.38% / 新版 93.38%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088216c",
      "incomplete_value": false,
      "site": "0088216c",
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
      "definition_site": "008811c0",
      "incomplete_value": false,
      "site": "008811c0",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00882268",
      "incomplete_value": true,
      "site": "00882270",
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
      "0088216c",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ],
    [
      "008821ec",
      "READ",
      [
        "storage",
        "00c80f20",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008812c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00882290"
      ]
    ]
  ],
  "added": [
    [
      "0088216c",
      "DATA",
      [
        "storage",
        "00c81ec8",
        null,
        "undefined *"
      ]
    ],
    [
      "008821ec",
      "READ",
      [
        "storage",
        "00c81ef0",
        null,
        "undefined *"
      ]
    ],
    [
      "00882274",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00882290"
      ]
    ]
  ]
}
~~~


~~~diff
- 008812c4 ["INT_ADD", "register:40f0:8", ["const:8812c4:8", "const:4:8"]]
- 008812c4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00882270 ["INT_ADD", "register:40f0:8", ["const:882270:8", "const:4:8"]]
+ 00882270 ["CALL", null, ["callee:00c54d90:8"]]
- 00881124 ["INT_ADD", "register:40f0:8", ["const:881124:8", "const:4:8"]]
- 00881124 ["CALL", null, ["callee:00560bbc:8"]]
+ 008820d0 ["INT_ADD", "register:40f0:8", ["const:8820d0:8", "const:4:8"]]
+ 008820d0 ["CALL", null, ["callee:00560bbc:8"]]
- 00881158 ["INT_ADD", "register:40f0:8", ["const:881158:8", "const:4:8"]]
- 00881158 ["CALL", null, ["callee:0043be80:8"]]
+ 00882104 ["INT_ADD", "register:40f0:8", ["const:882104:8", "const:4:8"]]
+ 00882104 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-2b0e554987950e81c08a86d70c43c316"></a>

### [`008813a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008813a4.md) → [`00882350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/00882350.md) FUN_00882350

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008813a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008813a8",
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
      "00882350",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00882354",
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
- 008813a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008813a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008813a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008813a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008813a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008813a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 008813ac ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-da7b031fc62ceac754aaa43d61cb0cf8"></a>

### [`00881408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/00881408.md) → [`008823b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/008823b4.md) FUN_008823b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00484250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00484/00484250.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00484570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00484/00484570.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00882404",
      "incomplete_value": true,
      "site": "00882408",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008824d0",
      "incomplete_value": true,
      "site": "008824d8",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008824f4",
      "incomplete_value": true,
      "site": "008824f8",
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
      "unmatched:0088140c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00881410",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00881420",
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
      "008823b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008823bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008823cc",
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
- 0088145c ["INT_ADD", "register:40f0:8", ["const:88145c:8", "const:4:8"]]
- 0088145c ["CALL", null, ["callee:00484570:8"]]
+ 00882408 ["INT_ADD", "register:40f0:8", ["const:882408:8", "const:4:8"]]
+ 00882408 ["CALL", null, ["callee:00484570:8"]]
- 0088152c ["INT_ADD", "register:40f0:8", ["const:88152c:8", "const:4:8"]]
- 0088152c ["CALL", null, ["callee:00492c0c:8"]]
+ 008824d8 ["INT_ADD", "register:40f0:8", ["const:8824d8:8", "const:4:8"]]
+ 008824d8 ["CALL", null, ["callee:00492c0c:8"]]
- 0088154c ["INT_ADD", "register:40f0:8", ["const:88154c:8", "const:4:8"]]
- 0088154c ["CALL", null, ["callee:00c58f50:8"]]
+ 008824f8 ["INT_ADD", "register:40f0:8", ["const:8824f8:8", "const:4:8"]]
+ 008824f8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-fcf68a787f657c1c5ec8b1018de2900b"></a>

### [`008815dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008815dc.md) → [`00882588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/00882588.md) FUN_00882588

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00484250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00484/00484250.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00484570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00484/00484570.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 60.22% / 新版 60.22%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088170c",
      "incomplete_value": true,
      "site": "00881710",
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
                "const:30:8"
              ]
            ]
          ]
        ]
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
      "definition_site": "0088171c",
      "incomplete_value": true,
      "site": "00881720",
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
      "unmatched:008815e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008815e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00881618",
      "READ",
      [
        "storage",
        "002ba857",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0088258c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00882590",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008825c4",
      "READ",
      [
        "storage",
        "002ba935",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00881710 ["INT_ADD", "register:40f0:8", ["const:881710:8", "const:4:8"]]
- 00881710 ["CALL", null, ["callee:00c58f50:8"]]
+ 008826bc ["INT_ADD", "register:40f0:8", ["const:8826bc:8", "const:4:8"]]
+ 008826bc ["CALL", null, ["callee:00c58f50:8"]]
- 00881720 ["INT_ADD", "register:40f0:8", ["const:881720:8", "const:4:8"]]
- 00881720 ["CALL", null, ["callee:00c58f50:8"]]
+ 008826cc ["INT_ADD", "register:40f0:8", ["const:8826cc:8", "const:4:8"]]
+ 008826cc ["CALL", null, ["callee:00c58f50:8"]]
- 008815dc ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
~~~


<a id="compare-300c70fdb6acc50d9aa47b59ef5119dc"></a>

### [`008817b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008817b0.md) → [`0088275c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/0088275c.md) FUN_0088275c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 28件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`0045444c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/0045444c.md) [`00456364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456364.md)
- 新版 呼出元 0件  · 呼出先 28件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`0045476c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00454/0045476c.md) [`00456684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00456/00456684.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.70% / 新版 87.70%

優先判定に残った影響 `call_argument_candidate` 12件, `store_value` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00882a40",
      "incomplete_value": false,
      "site": "00882a44",
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
                "const:c66000:8"
              ],
              [
                "leaf",
                "const:5d0:8"
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
      "definition_site": "00881a94",
      "incomplete_value": false,
      "site": "00881a98",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:600:8"
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008827f8",
      "incomplete_value": true,
      "site": "00882800",
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
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008827fc",
      "incomplete_value": true,
      "site": "00882800",
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
      "unmatched:008817dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:008817e0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "unmatched:008817ec",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00882788",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "0088278c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "00882798",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00881854 ["INT_ADD", "register:40f0:8", ["const:881854:8", "const:4:8"]]
- 00881854 ["CALL", null, ["callee:00482910:8"]]
+ 00882800 ["INT_ADD", "register:40f0:8", ["const:882800:8", "const:4:8"]]
+ 00882800 ["CALL", null, ["callee:00482910:8"]]
- 008818fc ["INT_ADD", "register:40f0:8", ["const:8818fc:8", "const:4:8"]]
- 008818fc ["CALL", null, ["callee:0048240c:8"]]
+ 008828a8 ["INT_ADD", "register:40f0:8", ["const:8828a8:8", "const:4:8"]]
+ 008828a8 ["CALL", null, ["callee:0048240c:8"]]
- 00881908 ["INT_ADD", "register:40f0:8", ["const:881908:8", "const:4:8"]]
- 00881908 ["CALL", null, ["callee:0045476c:8"]]
+ 008828b4 ["INT_ADD", "register:40f0:8", ["const:8828b4:8", "const:4:8"]]
+ 008828b4 ["CALL", null, ["callee:0045476c:8"]]
~~~


<a id="compare-0b1c0cf7b7c7481e4f7bfdde0eb65b8d"></a>

### [`00881c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/00881c84.md) → [`00882c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/00882c30.md) FUN_00882c30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00881c94 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00881c94 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00882c40 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 00882c40 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00881ca0 ["INT_ADD", "register:40f0:8", ["const:881ca0:8", "const:4:8"]]
- 00881ca0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00882c4c ["INT_ADD", "register:40f0:8", ["const:882c4c:8", "const:4:8"]]
+ 00882c4c ["CALL", null, ["callee:00c54d90:8"]]
- 00881ca4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00881ca4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00882c50 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00882c50 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-b3b3dff89b2a3975d1fd54561e9072c7"></a>

### [`00881cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/00881cd4.md) → [`00882c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/00882c80.md) FUN_00882c80

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 78.72% / 新版 78.72%

優先判定に残った影響 `call_target` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00882cbc",
      "incomplete_value": true,
      "site": "00882cd0",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:5d2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00881d10",
      "incomplete_value": true,
      "site": "00881d24",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:507:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00882cac",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00881d00",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "00882ca8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "00882cac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00882cbc",
      "READ",
      [
        "storage",
        "002a2507",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00882ca8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "00882cac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "00882cbc",
      "READ",
      [
        "storage",
        "002a25d2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00881d00 ["INT_ADD", "register:40f0:8", ["const:881d00:8", "const:4:8"]]
- 00881d00 ["CALL", null, ["ram:48cd38:8"]]
+ 00882cac ["INT_ADD", "register:40f0:8", ["const:882cac:8", "const:4:8"]]
+ 00882cac ["CALL", null, ["ram:48d058:8"]]
- 00881cf0 ["INT_ADD", "register:40f0:8", ["const:881cf0:8", "const:4:8"]]
- 00881cf0 ["CALL", null, ["callee:008524fc:8"]]
+ 00882c9c ["INT_ADD", "register:40f0:8", ["const:882c9c:8", "const:4:8"]]
+ 00882c9c ["CALL", null, ["callee:008524fc:8"]]
- 00881d08 ["COPY", "tmp:0:8", ["const:507:8"]]
- 00881d08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00881d08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00881d08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00882cb4 ["COPY", "tmp:0:8", ["const:5d2:8"]]
+ 00882cb4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00882cb4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00882cb4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0c8da700ff52f3b56ecbaabba83d67d9"></a>

### [`00882054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882054.md) → [`00883000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883000.md) FUN_00883000

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00882064 ["INT_ADD", "register:40f0:8", ["const:882064:8", "const:4:8"]]
- 00882064 ["CALL", null, ["callee:008524fc:8"]]
+ 00883010 ["INT_ADD", "register:40f0:8", ["const:883010:8", "const:4:8"]]
+ 00883010 ["CALL", null, ["callee:008524fc:8"]]
- 0088207c ["INT_ADD", "register:40f0:8", ["const:88207c:8", "const:4:8"]]
- 0088207c ["CALL", null, ["callee:008524fc:8"]]
+ 00883028 ["INT_ADD", "register:40f0:8", ["const:883028:8", "const:4:8"]]
+ 00883028 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-3576e2f8e478c3a1afa55dc7612cec2f"></a>

### [`00882128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882128.md) → [`008830d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/008830d4.md) FUN_008830d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0076984c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/0076984c.md) [`00769d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769d30.md) [`00769d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769d3c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00769c28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/00769c28.md) [`0076a10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a10c.md) [`0076a118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a118.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088216c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00883118",
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
- 00882138 ["INT_ADD", "register:40f0:8", ["const:882138:8", "const:4:8"]]
- 00882138 ["CALL", null, ["callee:008524fc:8"]]
+ 008830e4 ["INT_ADD", "register:40f0:8", ["const:8830e4:8", "const:4:8"]]
+ 008830e4 ["CALL", null, ["callee:008524fc:8"]]
- 0088214c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0088214c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008830f8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008830f8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00882150 ["INT_ADD", "register:40f0:8", ["const:882150:8", "const:4:8"]]
- 00882150 ["CALL", null, ["callee:008524fc:8"]]
+ 008830fc ["INT_ADD", "register:40f0:8", ["const:8830fc:8", "const:4:8"]]
+ 008830fc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-5369d744ecfe2d1db34c16d105def9b6"></a>

### [`0088218c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/0088218c.md) → [`00883138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883138.md) FUN_00883138

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 60.00% / 新版 60.00%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008821b0",
      "DATA",
      [
        "storage",
        "003c7788",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:008821bc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008821c0",
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
      "0088315c",
      "DATA",
      [
        "storage",
        "003c7788",
        null,
        "dword"
      ]
    ],
    [
      "00883168",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0088316c",
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
- 0088219c ["INT_ADD", "register:40f0:8", ["const:88219c:8", "const:4:8"]]
- 0088219c ["CALL", null, ["callee:008524fc:8"]]
+ 00883148 ["INT_ADD", "register:40f0:8", ["const:883148:8", "const:4:8"]]
+ 00883148 ["CALL", null, ["callee:008524fc:8"]]
- 008821b0 ["COPY", "tmp:0:4", ["register:4050:4"]]
- 008821b0 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 008821b0 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 008821b0 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
- 008821b4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:98:8"]]
- 008821b4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-747fc73a77874f66bb6f14cfce9c0a40"></a>

### [`008821c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008821c8.md) → [`00883174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883174.md) FUN_00883174

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0086d6d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d6d4.md) · 呼出先 5件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0086e680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e680.md) · 呼出先 5件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 98.15% / 新版 98.15%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00882210"
      ],
      [
        "FALL_THROUGH",
        "008831bc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008831bc",
      "incomplete_value": true,
      "site": "008831d4",
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
      "definition_site": "00882210",
      "incomplete_value": true,
      "site": "00882228",
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
      "unmatched:00882210",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00883228"
      ]
    ]
  ],
  "added": [
    [
      "008831bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00883228"
      ]
    ]
  ]
}
~~~


~~~diff
- 008821e8 ["INT_ADD", "register:40f0:8", ["const:8821e8:8", "const:4:8"]]
- 008821e8 ["CALL", null, ["callee:008524fc:8"]]
+ 00883194 ["INT_ADD", "register:40f0:8", ["const:883194:8", "const:4:8"]]
+ 00883194 ["CALL", null, ["callee:008524fc:8"]]
- 008821f8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008821f8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008821f8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008821f8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 008831a4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008831a4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008831a4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008831a4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 008821fc ["INT_ADD", "register:40f0:8", ["const:8821fc:8", "const:4:8"]]
- 008821fc ["CALL", null, ["callee:008524fc:8"]]
+ 008831a8 ["INT_ADD", "register:40f0:8", ["const:8831a8:8", "const:4:8"]]
+ 008831a8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d5d050f927c6ebc8da2edf1b4bf7a175"></a>

### [`008822a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008822a0.md) → [`0088324c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/0088324c.md) FUN_0088324c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0086d6d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d6d4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0086e680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e680.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.33% / 新版 93.33%

~~~diff
- 008822b0 ["INT_ADD", "register:40f0:8", ["const:8822b0:8", "const:4:8"]]
- 008822b0 ["CALL", null, ["callee:008524fc:8"]]
+ 0088325c ["INT_ADD", "register:40f0:8", ["const:88325c:8", "const:4:8"]]
+ 0088325c ["CALL", null, ["callee:008524fc:8"]]
- 008822d8 ["COPY", "register:0:8", ["register:4008:8"]]
- 008822d8 ["BRANCHIND", null, ["register:0:8"]]
+ 00883284 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00883284 ["BRANCHIND", null, ["register:0:8"]]
~~~


<a id="compare-c7cb716522964dfbe91f09ffe8be885f"></a>

### [`0088238c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/0088238c.md) → [`00883338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883338.md) FUN_00883338

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043efc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043efc0.md) [`0043faec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043faec.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.27% / 新版 87.27%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008823ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00883368",
      "DATA",
      [
        "storage",
        "003c77c8",
        "fde_003c77c8",
        "dword"
      ]
    ],
    [
      "008833a8",
      "DATA",
      [
        "storage",
        "003b5248",
        null,
        "byte[83]"
      ]
    ]
  ],
  "added": [
    [
      "00883358",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00883368",
      "DATA",
      [
        "storage",
        "003c77c8",
        null,
        "dword"
      ]
    ],
    [
      "008833a8",
      "DATA",
      [
        "storage",
        "003b5248",
        null,
        "byte[67]"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088239c ["COPY", "tmp:0:8", ["const:30:8"]]
- 0088239c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 0088239c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 0088239c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 008823a0 ["COPY", "register:40a0:8", ["register:1660:8"]]
- 008823a4 ["INT2FLOAT", "register:5100:8", ["register:4008:4"]]
- 008823a4 ["COPY", "register:5108:8", ["const:0:8"]]
- 008823a4 ["COPY", "register:5110:8", ["const:0:8"]]
- 008823a4 ["COPY", "register:5118:8", ["const:0:8"]]
~~~


<a id="compare-c40577aa8bb6d3107e2585ad06166342"></a>

### [`00882498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882498.md) → [`00883444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883444.md) FUN_00883444

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
      "definition_site": "00883450",
      "incomplete_value": false,
      "site": "0088345c",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008824a4",
      "incomplete_value": false,
      "site": "008824b0",
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
            "const:7e8:8"
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
      "0088345c",
      "DATA",
      [
        "storage",
        "00c807e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088345c",
      "DATA",
      [
        "storage",
        "00c817b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008824a0 ["COPY", "register:4050:8", ["const:c80000:8"]]
+ 0088344c ["COPY", "register:4050:8", ["const:c81000:8"]]
- 008824a4 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 008824a4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008824a4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008824a4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00883450 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 00883450 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00883450 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00883450 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-1af44c25da3605daf987ce58215a5a29"></a>

### [`008824dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008824dc.md) → [`00883488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883488.md) FUN_00883488

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
      "definition_site": "008834a0",
      "incomplete_value": false,
      "site": "008834ac",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008824f4",
      "incomplete_value": false,
      "site": "00882500",
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
            "const:7e8:8"
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
      "008834ac",
      "DATA",
      [
        "storage",
        "00c807e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008834ac",
      "DATA",
      [
        "storage",
        "00c817b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008824f0 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0088349c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008824f4 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 008824f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008824f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008824f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008834a0 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 008834a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008834a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008834a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00882524 ["COPY", "register:0:8", ["register:4040:8"]]
- 00882524 ["INT_ADD", "register:40f0:8", ["const:882524:8", "const:4:8"]]
- 00882524 ["CALLIND", null, ["register:0:8"]]
+ 008834d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008834d0 ["INT_ADD", "register:40f0:8", ["const:8834d0:8", "const:4:8"]]
+ 008834d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-339ee022d0e5af3f40638e360d93798f"></a>

### [`00882538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882538.md) → [`008834e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/008834e4.md) FUN_008834e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00882564",
      "DATA",
      [
        "storage",
        "00c807e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883510",
      "DATA",
      [
        "storage",
        "00c817b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088254c ["INT_ADD", "register:40f0:8", ["const:88254c:8", "const:4:8"]]
- 0088254c ["CALL", null, ["callee:00c58f30:8"]]
+ 008834f8 ["INT_ADD", "register:40f0:8", ["const:8834f8:8", "const:4:8"]]
+ 008834f8 ["CALL", null, ["callee:00c58f30:8"]]
- 00882558 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00883504 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0088255c ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 0088255c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088255c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088255c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1527171a511b1200fa300573129d552e"></a>

### [`008825c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008825c0.md) → [`0088356c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/0088356c.md) FUN_0088356c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008825e0"
      ],
      [
        "CONDITIONAL_JUMP",
        "0088358c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0088358c",
      "incomplete_value": true,
      "site": "008835b4",
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
      "definition_site": "008825e0",
      "incomplete_value": true,
      "site": "00882608",
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
      "unmatched:008825dc",
      "DATA",
      [
        "storage",
        "00c807e8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008825e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008835b4"
      ]
    ],
    [
      "unmatched:008825fc",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00883588",
      "DATA",
      [
        "storage",
        "00c817b8",
        null,
        "undefined *"
      ]
    ],
    [
      "0088358c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008835b4"
      ]
    ],
    [
      "008835a8",
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
- 008825d4 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00883580 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 008825d8 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 008825d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008825d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008825d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008825dc ["COPY", "tmp:0:8", ["register:4048:8"]]
- 008825dc ["COPY", "tmp:1:8", ["register:4008:8"]]
- 008825dc ["INT_ADD", "register:4008:8", ["register:4008:8", "const:10:8"]]
- 008825dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-f021ae9bdbfb42d764a9c8f383fb78cb"></a>

### [`00882700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882700.md) → [`008836ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/008836ac.md) FUN_008836ac

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
      "unmatched:00882718",
      "DATA",
      [
        "storage",
        "00c80868",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088271c",
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
      "008836c4",
      "DATA",
      [
        "storage",
        "00c81838",
        null,
        "undefined *"
      ]
    ],
    [
      "008836c8",
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
- 0088270c ["INT_ADD", "register:40f0:8", ["const:88270c:8", "const:4:8"]]
- 0088270c ["CALL", null, ["callee:00c58f30:8"]]
+ 008836b8 ["INT_ADD", "register:40f0:8", ["const:8836b8:8", "const:4:8"]]
+ 008836b8 ["CALL", null, ["callee:00c58f30:8"]]
- 00882710 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008836bc ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00882714 ["COPY", "tmp:0:8", ["const:868:8"]]
- 00882714 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882714 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882714 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8344ba5cbecfa3b06102e15c55783a22"></a>

### [`00882724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882724.md) → [`008836d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/008836d0.md) FUN_008836d0

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
      "unmatched:0088272c",
      "DATA",
      [
        "storage",
        "00c80868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008836d8",
      "DATA",
      [
        "storage",
        "00c81838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882724 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00882728 ["COPY", "tmp:0:8", ["const:868:8"]]
- 00882728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088272c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0088272c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-fcfab50c7d669be590155c32e663234c"></a>

### [`0088273c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/0088273c.md) → [`008836e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/008836e8.md) FUN_008836e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493288.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.54% / 新版 86.54%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00882798",
      "incomplete_value": true,
      "site": "0088279c",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008827ec",
      "incomplete_value": true,
      "site": "008827fc",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008827f0",
      "incomplete_value": true,
      "site": "008827fc",
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
      "unmatched:00882754",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00882758",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:00882774",
      "READ",
      [
        "storage",
        "002b674a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00883700",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00883704",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "00883720",
      "READ",
      [
        "storage",
        "002b6819",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088279c ["INT_ADD", "register:40f0:8", ["const:88279c:8", "const:4:8"]]
- 0088279c ["CALL", null, ["callee:0048d1b4:8"]]
+ 00883748 ["INT_ADD", "register:40f0:8", ["const:883748:8", "const:4:8"]]
+ 00883748 ["CALL", null, ["callee:0048d1b4:8"]]
- 008827fc ["INT_ADD", "register:40f0:8", ["const:8827fc:8", "const:4:8"]]
- 008827fc ["CALL", null, ["callee:00442e98:8"]]
+ 008837a8 ["INT_ADD", "register:40f0:8", ["const:8837a8:8", "const:4:8"]]
+ 008837a8 ["CALL", null, ["callee:00442e98:8"]]
- 00882754 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00882754 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00882754 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-034c49619d5abf35984bf202136a91b1"></a>

### [`008829bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008829bc.md) → [`00883968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883968.md) FUN_00883968

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
      "definition_site": "0088397c",
      "incomplete_value": false,
      "site": "00883980",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008829d0",
      "incomplete_value": false,
      "site": "008829d4",
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
      "00883980",
      "DATA",
      [
        "storage",
        "00c808e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883980",
      "DATA",
      [
        "storage",
        "00c818b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008829c8 ["INT_ADD", "register:40f0:8", ["const:8829c8:8", "const:4:8"]]
- 008829c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00883974 ["INT_ADD", "register:40f0:8", ["const:883974:8", "const:4:8"]]
+ 00883974 ["CALL", null, ["callee:00c58f30:8"]]
- 008829cc ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00883978 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008829d0 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 008829d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008829d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008829d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088397c ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 0088397c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088397c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088397c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-be48cae595f4235076fe74130f65ba8f"></a>

### [`008829e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008829e0.md) → [`0088398c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/0088398c.md) FUN_0088398c

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
      "definition_site": "00883990",
      "incomplete_value": false,
      "site": "00883994",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008829e4",
      "incomplete_value": false,
      "site": "008829e8",
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
      "00883994",
      "DATA",
      [
        "storage",
        "00c808e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883994",
      "DATA",
      [
        "storage",
        "00c818b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008829e0 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0088398c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008829e4 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 008829e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008829e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008829e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00883990 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 00883990 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00883990 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00883990 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eedf1f184bac4053c66a288038671fb5"></a>

### [`008829f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008829f8.md) → [`008839a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/008839a4.md) FUN_008839a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493288.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00882a10",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00882a14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:00882a30",
      "READ",
      [
        "storage",
        "002b94fd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008839bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "008839c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008839dc",
      "READ",
      [
        "storage",
        "002b95cc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882a0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 00882a0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00882a10 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00882a10 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00882a10 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00882a14 ["INT_ADD", "register:40f0:8", ["const:882a14:8", "const:4:8"]]
- 00882a14 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-b737416267618761a2d6f0819dbab369"></a>

### [`00882c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882c74.md) → [`00883c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883c20.md) FUN_00883c20

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
      "unmatched:00882c80",
      "DATA",
      [
        "storage",
        "00c80968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883c2c",
      "DATA",
      [
        "storage",
        "00c81938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882c74 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00882c74 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00882c74 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00882c78 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00882c7c ["COPY", "tmp:0:8", ["const:968:8"]]
- 00882c7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00882c7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00882c7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4db272b2c4fc120177ef05f0966572d6"></a>

### [`00882c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882c94.md) → [`00883c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883c40.md) FUN_00883c40

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
      "definition_site": "00883c48",
      "incomplete_value": false,
      "site": "00883c4c",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882c9c",
      "incomplete_value": false,
      "site": "00882ca0",
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
      "00883c4c",
      "DATA",
      [
        "storage",
        "00c80968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883c4c",
      "DATA",
      [
        "storage",
        "00c81938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882c98 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00883c44 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00882c9c ["COPY", "tmp:0:8", ["const:968:8"]]
- 00882c9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00882c9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00882c9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00883c48 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 00883c48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00883c48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00883c48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00882cc0 ["INT_ADD", "register:40f0:8", ["const:882cc0:8", "const:4:8"]]
- 00882cc0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00883c6c ["INT_ADD", "register:40f0:8", ["const:883c6c:8", "const:4:8"]]
+ 00883c6c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d8bd277b6b3f5cf4bf0552eca87f441b"></a>

### [`00882cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882cd4.md) → [`00883c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883c80.md) FUN_00883c80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00882d24",
      "incomplete_value": true,
      "site": "00882d30",
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
      "unmatched:00882d00",
      "DATA",
      [
        "storage",
        "00c80968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883cac",
      "DATA",
      [
        "storage",
        "00c81938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882ce8 ["INT_ADD", "register:40f0:8", ["const:882ce8:8", "const:4:8"]]
- 00882ce8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00883c94 ["INT_ADD", "register:40f0:8", ["const:883c94:8", "const:4:8"]]
+ 00883c94 ["CALL", null, ["callee:00c58f30:8"]]
- 00882cf4 ["COPY", "register:4050:8", ["const:c80000:8"]]
+ 00883ca0 ["COPY", "register:4050:8", ["const:c81000:8"]]
- 00882cf8 ["COPY", "tmp:0:8", ["const:968:8"]]
- 00882cf8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00882cf8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00882cf8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-5a0e5e2f096aa08792d0b0aab3db66a6"></a>

### [`00882d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882d48.md) → [`00883cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883cf4.md) FUN_00883cf4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00882d50",
      "DATA",
      [
        "storage",
        "00c80968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883cfc",
      "DATA",
      [
        "storage",
        "00c81938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882d48 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00882d4c ["COPY", "tmp:0:8", ["const:968:8"]]
- 00882d4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882d4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882d4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00882d50 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00882d50 ["COPY", "tmp:1:8", ["register:4008:8"]]
- 00882d50 ["INT_ADD", "register:4008:8", ["register:4008:8", "const:8:8"]]
- 00882d50 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-82ff2766fe179ceaf09c026265e342af"></a>

### [`00882dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882dcc.md) → [`00883d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883d78.md) FUN_00883d78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493288.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.74% / 新版 67.74%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00882dd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00882dd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00882dd8",
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
      "00883d7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00883d80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00883d84",
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
- 00882dcc ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 00882dd0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00882dd0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00882dd0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00882dd0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00882dd4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:30:8"]]
- 00882dd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-30de48d0dc1cb15eb2d666bddabf22b7"></a>

### [`00882ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882ea0.md) → [`00883e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883e4c.md) FUN_00883e4c

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
      "definition_site": "00883e60",
      "incomplete_value": false,
      "site": "00883e64",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882eb4",
      "incomplete_value": false,
      "site": "00882eb8",
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
            "const:9e8:8"
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
      "00883e64",
      "DATA",
      [
        "storage",
        "00c809e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883e64",
      "DATA",
      [
        "storage",
        "00c819b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882eac ["INT_ADD", "register:40f0:8", ["const:882eac:8", "const:4:8"]]
- 00882eac ["CALL", null, ["callee:00c58f30:8"]]
+ 00883e58 ["INT_ADD", "register:40f0:8", ["const:883e58:8", "const:4:8"]]
+ 00883e58 ["CALL", null, ["callee:00c58f30:8"]]
- 00882eb0 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00883e5c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00882eb4 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 00882eb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882eb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882eb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00883e60 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 00883e60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00883e60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00883e60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c4db2ae56e28d75e419224328b463c78"></a>

### [`00882ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882ec4.md) → [`00883e70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883e70.md) FUN_00883e70

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
      "definition_site": "00883e74",
      "incomplete_value": false,
      "site": "00883e78",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882ec8",
      "incomplete_value": false,
      "site": "00882ecc",
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
            "const:9e8:8"
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
      "00883e78",
      "DATA",
      [
        "storage",
        "00c809e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883e78",
      "DATA",
      [
        "storage",
        "00c819b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882ec4 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00883e70 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00882ec8 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 00882ec8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882ec8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882ec8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00883e74 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 00883e74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00883e74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00883e74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-564b18aad86160b9a86c7d2cec09b75f"></a>

### [`00882edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882edc.md) → [`00883e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883e88.md) FUN_00883e88

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493288.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.20% / 新版 93.20%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00883ec0",
      "incomplete_value": true,
      "site": "00883ed4",
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
                "const:720:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882f14",
      "incomplete_value": true,
      "site": "00882f28",
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
                "const:6d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00883ecc",
      "incomplete_value": true,
      "site": "00883ed8",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:cca:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882f20",
      "incomplete_value": true,
      "site": "00882f2c",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:bec:8"
              ]
            ]
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
      "definition_site": "00883ecc",
      "incomplete_value": true,
      "site": "00883ed8",
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
      "definition_site": "00882f20",
      "incomplete_value": true,
      "site": "00882f2c",
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
      "00883ea4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00883ec0",
      "READ",
      [
        "storage",
        "002c26d0",
        null,
        null
      ]
    ],
    [
      "00883ecc",
      "READ",
      [
        "storage",
        "002bcbec",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00883ea4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "00883ec0",
      "READ",
      [
        "storage",
        "002c2720",
        null,
        null
      ]
    ],
    [
      "00883ecc",
      "READ",
      [
        "storage",
        "002bccca",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882ef8 ["INT_ADD", "register:40f0:8", ["const:882ef8:8", "const:4:8"]]
- 00882ef8 ["CALL", null, ["ram:48cd38:8"]]
+ 00883ea4 ["INT_ADD", "register:40f0:8", ["const:883ea4:8", "const:4:8"]]
+ 00883ea4 ["CALL", null, ["ram:48d058:8"]]
- 00882f04 ["INT_ADD", "register:40f0:8", ["const:882f04:8", "const:4:8"]]
- 00882f04 ["CALL", null, ["callee:00c58f30:8"]]
+ 00883eb0 ["INT_ADD", "register:40f0:8", ["const:883eb0:8", "const:4:8"]]
+ 00883eb0 ["CALL", null, ["callee:00c58f30:8"]]
- 00882f14 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6d0:8"]]
- 00882f14 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00882f14 ["COPY", "register:5010:8", ["const:0:8"]]
- 00882f14 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00883ec0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:720:8"]]
+ 00883ec0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00883ec0 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00883ec0 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-7c74df36f4abc9b3c734ca77fa0e6753"></a>

### [`00883158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883158.md) → [`00884104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884104.md) FUN_00884104

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
      "definition_site": "00884124",
      "incomplete_value": false,
      "site": "00884128",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883178",
      "incomplete_value": false,
      "site": "0088317c",
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
            "const:a68:8"
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
      "00884128",
      "DATA",
      [
        "storage",
        "00c80a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884128",
      "DATA",
      [
        "storage",
        "00c81a38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088316c ["INT_ADD", "register:40f0:8", ["const:88316c:8", "const:4:8"]]
- 0088316c ["CALL", null, ["callee:00c58f30:8"]]
+ 00884118 ["INT_ADD", "register:40f0:8", ["const:884118:8", "const:4:8"]]
+ 00884118 ["CALL", null, ["callee:00c58f30:8"]]
- 00883174 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00884120 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00883178 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 00883178 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00883178 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00883178 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00884124 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 00884124 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00884124 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00884124 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-81119dd7f2abf7552fe1951dde1cc5bd"></a>

### [`00883190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883190.md) → [`0088413c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/0088413c.md) FUN_0088413c

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
      "definition_site": "00884144",
      "incomplete_value": false,
      "site": "00884148",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883198",
      "incomplete_value": false,
      "site": "0088319c",
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
      "00884148",
      "DATA",
      [
        "storage",
        "00c80a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884148",
      "DATA",
      [
        "storage",
        "00c81a38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883194 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00884140 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00883198 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 00883198 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00883198 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00883198 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00884144 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 00884144 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00884144 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00884144 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-18c11d83e6d951bcde0247842ab030bb"></a>

### [`008831b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/008831b0.md) → [`0088415c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/0088415c.md) FUN_0088415c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0049331c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/0049331c.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0049363c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/0049363c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.16% / 新版 83.16%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008841d0",
      "incomplete_value": true,
      "site": "008841d4",
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
    "old": {
      "definition_site": "00883224",
      "incomplete_value": true,
      "site": "00883228",
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
                "const:130:8"
              ]
            ]
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
      "definition_site": "00883268",
      "incomplete_value": true,
      "site": "00883270",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00883268",
      "incomplete_value": true,
      "site": "00883270",
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
      "unmatched:008831d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008831e4",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ],
    [
      "unmatched:008831f0",
      "WRITE",
      [
        "storage",
        "Stack[-0xa7]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00884184",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00884190",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ],
    [
      "0088419c",
      "WRITE",
      [
        "storage",
        "Stack[-0xa7]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00883228 ["INT_ADD", "register:40f0:8", ["const:883228:8", "const:4:8"]]
- 00883228 ["CALL", null, ["callee:0048d1b4:8"]]
+ 008841d4 ["INT_ADD", "register:40f0:8", ["const:8841d4:8", "const:4:8"]]
+ 008841d4 ["CALL", null, ["callee:0048d1b4:8"]]
- 00883270 ["INT_ADD", "register:40f0:8", ["const:883270:8", "const:4:8"]]
- 00883270 ["CALL", null, ["callee:0043be80:8"]]
+ 0088421c ["INT_ADD", "register:40f0:8", ["const:88421c:8", "const:4:8"]]
+ 0088421c ["CALL", null, ["callee:0043be80:8"]]
- 008832ac ["INT_ADD", "register:40f0:8", ["const:8832ac:8", "const:4:8"]]
- 008832ac ["CALL", null, ["callee:0043be80:8"]]
+ 00884258 ["INT_ADD", "register:40f0:8", ["const:884258:8", "const:4:8"]]
+ 00884258 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-2d3c0eb4d8fc27e96ca0632554c92251"></a>

### [`00883670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883670.md) → [`0088461c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/0088461c.md) FUN_0088461c

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
      "unmatched:00883688",
      "DATA",
      [
        "storage",
        "00c80ad8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088368c",
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
      "00884634",
      "DATA",
      [
        "storage",
        "00c81aa8",
        null,
        "undefined *"
      ]
    ],
    [
      "00884638",
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
- 0088367c ["INT_ADD", "register:40f0:8", ["const:88367c:8", "const:4:8"]]
- 0088367c ["CALL", null, ["callee:00c58f30:8"]]
+ 00884628 ["INT_ADD", "register:40f0:8", ["const:884628:8", "const:4:8"]]
+ 00884628 ["CALL", null, ["callee:00c58f30:8"]]
- 00883680 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0088462c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00883684 ["COPY", "tmp:0:8", ["const:ad8:8"]]
- 00883684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00883684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00883684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-22188c311174febb2e87b3710fc55319"></a>

### [`00883694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883694.md) → [`00884640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884640.md) FUN_00884640

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
      "definition_site": "00884644",
      "incomplete_value": false,
      "site": "00884648",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883698",
      "incomplete_value": false,
      "site": "0088369c",
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
            "const:ad8:8"
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
      "00884648",
      "DATA",
      [
        "storage",
        "00c80ad8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884648",
      "DATA",
      [
        "storage",
        "00c81aa8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883694 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00884640 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00883698 ["COPY", "tmp:0:8", ["const:ad8:8"]]
- 00883698 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00883698 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00883698 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00884644 ["COPY", "tmp:0:8", ["const:aa8:8"]]
+ 00884644 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00884644 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00884644 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c14df8f20b6404f1dd985fa1322636ee"></a>

### [`008836ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/008836ac.md) → [`00884658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884658.md) FUN_00884658

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048dca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dca0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048dfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048dfc0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.24% / 新版 90.24%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088469c",
      "incomplete_value": true,
      "site": "0088469c",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008836f0",
      "incomplete_value": true,
      "site": "008836f0",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:e83:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00884674",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008836c8",
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
      "00884674",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00884688",
      "READ",
      [
        "storage",
        "002a9e83",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00884674",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "00884688",
      "READ",
      [
        "storage",
        "002a9f50",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008836c8 ["INT_ADD", "register:40f0:8", ["const:8836c8:8", "const:4:8"]]
- 008836c8 ["CALL", null, ["ram:48cd38:8"]]
+ 00884674 ["INT_ADD", "register:40f0:8", ["const:884674:8", "const:4:8"]]
+ 00884674 ["CALL", null, ["ram:48d058:8"]]
- 008836d4 ["COPY", "tmp:0:8", ["const:e83:8"]]
- 008836d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008836d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008836d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00884680 ["COPY", "tmp:0:8", ["const:f50:8"]]
+ 00884680 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00884680 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00884680 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008836fc ["INT_ADD", "register:40f0:8", ["const:8836fc:8", "const:4:8"]]
- 008836fc ["CALL", null, ["callee:0048d1b4:8"]]
+ 008846a8 ["INT_ADD", "register:40f0:8", ["const:8846a8:8", "const:4:8"]]
+ 008846a8 ["CALL", null, ["callee:0048d1b4:8"]]
~~~


<a id="compare-99f0d9cac38a03355cacf592c45430bb"></a>

### [`008837bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/008837bc.md) → [`00884768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884768.md) FUN_00884768

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00884780",
      "incomplete_value": false,
      "site": "0088478c",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008837d4",
      "incomplete_value": false,
      "site": "008837e0",
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
            "const:b68:8"
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
      "0088478c",
      "DATA",
      [
        "storage",
        "00c80b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088478c",
      "DATA",
      [
        "storage",
        "00c81b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008837d0 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0088477c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008837d4 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 008837d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008837d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008837d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00884780 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00884780 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00884780 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00884780 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00883804 ["COPY", "register:0:8", ["register:4040:8"]]
- 00883804 ["INT_ADD", "register:40f0:8", ["const:883804:8", "const:4:8"]]
- 00883804 ["CALLIND", null, ["register:0:8"]]
+ 008847b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008847b0 ["INT_ADD", "register:40f0:8", ["const:8847b0:8", "const:4:8"]]
+ 008847b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ee425f541a4e66283f8228718388cc66"></a>

### [`0088384c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/0088384c.md) → [`008847f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/008847f8.md) FUN_008847f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00884810",
      "incomplete_value": false,
      "site": "0088481c",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883864",
      "incomplete_value": false,
      "site": "00883870",
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
            "const:b68:8"
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
      "definition_site": "0088486c",
      "incomplete_value": true,
      "site": "00884870",
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
      "0088481c",
      "DATA",
      [
        "storage",
        "00c80b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088481c",
      "DATA",
      [
        "storage",
        "00c81b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008838c4 ["INT_ADD", "register:40f0:8", ["const:8838c4:8", "const:4:8"]]
- 008838c4 ["CALL", null, ["callee:00c58f20:8"]]
+ 00884870 ["INT_ADD", "register:40f0:8", ["const:884870:8", "const:4:8"]]
+ 00884870 ["CALL", null, ["callee:00c58f20:8"]]
- 00883860 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0088480c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00883864 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 00883864 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00883864 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00883864 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00884810 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00884810 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00884810 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00884810 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-986dbf6473597697be6595ac2adf8a72"></a>

### [`008838d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/008838d8.md) → [`00884884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884884.md) FUN_00884884

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 72.97% / 新版 72.97%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00883930"
      ],
      [
        "CONDITIONAL_JUMP",
        "008848dc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008848d8",
      "incomplete_value": true,
      "site": "008848fc",
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
      "definition_site": "0088392c",
      "incomplete_value": true,
      "site": "00883950",
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
      "unmatched:008838d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008838dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00883904",
      "DATA",
      [
        "storage",
        "00c80b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884884",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00884888",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008848b0",
      "DATA",
      [
        "storage",
        "00c81b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008838d8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008838d8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008838d8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008838d8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008838dc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008838dc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008838dc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008838dc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008838e0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-d1ba2671003a58bc1f73c160b29eef88"></a>

### [`00883988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883988.md) → [`00884934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884934.md) FUN_00884934

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 74.29% / 新版 74.29%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008839d8"
      ],
      [
        "CONDITIONAL_JUMP",
        "00884984"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00884980",
      "incomplete_value": true,
      "site": "008849a0",
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
      "definition_site": "008839d4",
      "incomplete_value": true,
      "site": "008839f4",
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
      "unmatched:008839b0",
      "DATA",
      [
        "storage",
        "00c80b68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008839cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00884994"
      ]
    ],
    [
      "unmatched:008839d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088499c"
      ]
    ]
  ],
  "added": [
    [
      "0088495c",
      "DATA",
      [
        "storage",
        "00c81b38",
        null,
        "undefined *"
      ]
    ],
    [
      "00884978",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00884994"
      ]
    ],
    [
      "00884984",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088499c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008839a0 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 0088494c ["COPY", "register:4048:8", ["const:c81000:8"]]
- 008839a4 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 008839a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008839a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008839a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008839a8 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:10:8"]]
- 008839a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
~~~


<a id="compare-63bfcc4838c46c67457fbd0fe4fc3d44"></a>

### [`00883a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883a28.md) → [`008849d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/008849d4.md) FUN_008849d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.94% / 新版 93.94%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00883a44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00884a00"
      ]
    ]
  ],
  "added": [
    [
      "008849f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00884a00"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883a40 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 00883a40 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 00883a40 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 00883a40 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00883a44 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00883a64 ["COPY", "register:0:8", ["register:4040:8"]]
- 00883a64 ["INT_ADD", "register:40f0:8", ["const:883a64:8", "const:4:8"]]
- 00883a64 ["CALLIND", null, ["register:0:8"]]
+ 00884a10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884a10 ["INT_ADD", "register:40f0:8", ["const:884a10:8", "const:4:8"]]
+ 00884a10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-221758dbd25f377f39d798b80d363aad"></a>

### [`00883aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883aac.md) → [`00884a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884a58.md) FUN_00884a58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008816ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/008816ac.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00883ae8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00884a94",
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
- 00883acc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00883acc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00884a78 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00884a78 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00883ae4 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00883ae4 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00883ae4 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00883ae4 ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
- 00883ae8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00883ae8 ["INT_ADD", "register:40f0:8", ["const:883ae8:8", "const:4:8"]]
- 00883ae8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b79b18a70ac04e50d7d9111290647710"></a>

### [`00883b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883b2c.md) → [`00884ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884ad8.md) FUN_00884ad8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00768848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768848.md) [`00768c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768c40.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00768c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/00768c24.md) [`0076901c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/0076901c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00881cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881cf8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.33% / 新版 58.33%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00884b84",
      "value": [
        "leaf",
        "ram:76901c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00883bd8",
      "value": [
        "leaf",
        "ram:768c40:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00884e6c",
      "incomplete_value": false,
      "site": "00884e70",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "old": null,
    "ordinal": 26,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00884e68",
      "incomplete_value": true,
      "site": "00884e70",
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
    "ordinal": 26,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00883b84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00884c98"
      ]
    ],
    [
      "00884b84",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768c40"
      ]
    ],
    [
      "unmatched:00883c3c",
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
      "00884b30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00884c98"
      ]
    ],
    [
      "00884b84",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076901c"
      ]
    ],
    [
      "00884be8",
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
- 00883bd8 ["INT_ADD", "register:40f0:8", ["const:883bd8:8", "const:4:8"]]
- 00883bd8 ["CALL", null, ["ram:768c40:8"]]
+ 00884b84 ["INT_ADD", "register:40f0:8", ["const:884b84:8", "const:4:8"]]
+ 00884b84 ["CALL", null, ["ram:76901c:8"]]
- 00883ec4 ["INT_ADD", "register:40f0:8", ["const:883ec4:8", "const:4:8"]]
- 00883ec4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00884e70 ["INT_ADD", "register:40f0:8", ["const:884e70:8", "const:4:8"]]
+ 00884e70 ["CALL", null, ["callee:00c54d90:8"]]
- 00883b64 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00883b64 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00883b64 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
+ 00884b10 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00884b10 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00884b10 ["CBRANCH", null, ["local:b8:8", "tmp:1:1"]]
~~~


<a id="compare-9d5a0bc444405fa300836bd1b85c7a6d"></a>

### [`00884104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884104.md) → [`008850b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/008850b0.md) FUN_008850b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008850c8",
      "incomplete_value": false,
      "site": "008850d4",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088411c",
      "incomplete_value": false,
      "site": "00884128",
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
            "const:be8:8"
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
      "008850d4",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00884180",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008850d4",
      "DATA",
      [
        "storage",
        "00c81bb8",
        null,
        "undefined *"
      ]
    ],
    [
      "0088512c",
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
- 00884118 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008850c4 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0088411c ["COPY", "tmp:0:8", ["const:be8:8"]]
- 0088411c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088411c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088411c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008850c8 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 008850c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008850c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008850c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088414c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088414c ["INT_ADD", "register:40f0:8", ["const:88414c:8", "const:4:8"]]
- 0088414c ["CALLIND", null, ["register:0:8"]]
+ 008850f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008850f8 ["INT_ADD", "register:40f0:8", ["const:8850f8:8", "const:4:8"]]
+ 008850f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-efeae6a3f5923f2cf642e6de8f2a3049"></a>

### [`00884194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884194.md) → [`00885140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885140.md) FUN_00885140

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885158",
      "incomplete_value": false,
      "site": "00885164",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008841ac",
      "incomplete_value": false,
      "site": "008841b8",
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
            "const:be8:8"
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
      "00885164",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00884204",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00885164",
      "DATA",
      [
        "storage",
        "00c81bb8",
        null,
        "undefined *"
      ]
    ],
    [
      "008851b0",
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
- 008841a8 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00885154 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008841ac ["COPY", "tmp:0:8", ["const:be8:8"]]
- 008841ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008841ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008841ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885158 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 00885158 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885158 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885158 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008841bc ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 00885168 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
~~~


<a id="compare-548609fd5b23d36be83e0b8016ec0ccb"></a>

### [`00884220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884220.md) → [`008851cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/008851cc.md) FUN_008851cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00885208",
      "incomplete_value": true,
      "site": "00885210",
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
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00884278"
      ],
      [
        "CONDITIONAL_JUMP",
        "00885224"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00885220",
      "incomplete_value": true,
      "site": "00885244",
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
      "site": "00884298",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:0088424c",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00884278",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088523c"
      ]
    ]
  ],
  "added": [
    [
      "008851f8",
      "DATA",
      [
        "storage",
        "00c81bb8",
        null,
        "undefined *"
      ]
    ],
    [
      "00885224",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088523c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884264 ["INT_ADD", "register:40f0:8", ["const:884264:8", "const:4:8"]]
- 00884264 ["CALL", null, ["callee:00c54d60:8"]]
+ 00885210 ["INT_ADD", "register:40f0:8", ["const:885210:8", "const:4:8"]]
+ 00885210 ["CALL", null, ["callee:00c54d60:8"]]
- 00884234 ["INT_ADD", "register:40f0:8", ["const:884234:8", "const:4:8"]]
- 00884234 ["CALL", null, ["callee:00c58f30:8"]]
+ 008851e0 ["INT_ADD", "register:40f0:8", ["const:8851e0:8", "const:4:8"]]
+ 008851e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00884244 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 008851f0 ["COPY", "register:4048:8", ["const:c81000:8"]]
~~~


<a id="compare-061d9c2ddf07555703ddb6d5095c5bd3"></a>

### [`008842d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008842d0.md) → [`0088527c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/0088527c.md) FUN_0088527c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885298",
      "incomplete_value": false,
      "site": "008852a4",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008842ec",
      "incomplete_value": false,
      "site": "008842f8",
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
            "const:be8:8"
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
      "008852a4",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008852a4",
      "DATA",
      [
        "storage",
        "00c81bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008842e8 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00885294 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 008842ec ["COPY", "tmp:0:8", ["const:be8:8"]]
- 008842ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008842ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008842ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00885298 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 00885298 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00885298 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00885298 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088430c ["INT_ADD", "register:40f0:8", ["const:88430c:8", "const:4:8"]]
- 0088430c ["CALL", null, ["callee:00c54d60:8"]]
+ 008852b8 ["INT_ADD", "register:40f0:8", ["const:8852b8:8", "const:4:8"]]
+ 008852b8 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-a5961377b814ba89df322b7d17e9799c"></a>

### [`008844b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008844b0.md) → [`0088545c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/0088545c.md) FUN_0088545c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885474",
      "incomplete_value": false,
      "site": "00885480",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008844c8",
      "incomplete_value": false,
      "site": "008844d4",
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
            "const:c68:8"
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
      "00885480",
      "DATA",
      [
        "storage",
        "00c80c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885480",
      "DATA",
      [
        "storage",
        "00c81c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008844c4 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00885470 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008844c8 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 008844c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008844c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008844c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885474 ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 00885474 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885474 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885474 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008844f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008844f8 ["INT_ADD", "register:40f0:8", ["const:8844f8:8", "const:4:8"]]
- 008844f8 ["CALLIND", null, ["register:0:8"]]
+ 008854a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008854a4 ["INT_ADD", "register:40f0:8", ["const:8854a4:8", "const:4:8"]]
+ 008854a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-141787eb6b8cc5b8fc5ed868c8912637"></a>

### [`00884540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884540.md) → [`008854ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/008854ec.md) FUN_008854ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885504",
      "incomplete_value": false,
      "site": "00885510",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884558",
      "incomplete_value": false,
      "site": "00884564",
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
            "const:c68:8"
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
      "00885510",
      "DATA",
      [
        "storage",
        "00c80c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885510",
      "DATA",
      [
        "storage",
        "00c81c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884554 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00885500 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00884558 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 00884558 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00884558 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00884558 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885504 ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 00885504 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885504 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885504 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00884588 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884588 ["INT_ADD", "register:40f0:8", ["const:884588:8", "const:4:8"]]
- 00884588 ["CALLIND", null, ["register:0:8"]]
+ 00885534 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885534 ["INT_ADD", "register:40f0:8", ["const:885534:8", "const:4:8"]]
+ 00885534 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8f81921647cb395cd2ba898b57687f5c"></a>

### [`008845cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008845cc.md) → [`00885578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885578.md) FUN_00885578

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.49% / 新版 86.49%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00885588",
      "incomplete_value": false,
      "site": "0088558c",
      "value": [
        "leaf",
        "const:60:8"
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
      "unmatched:008845f8",
      "DATA",
      [
        "storage",
        "00c80c68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00884604",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008855c0"
      ]
    ]
  ],
  "added": [
    [
      "008855a4",
      "DATA",
      [
        "storage",
        "00c81c38",
        null,
        "undefined *"
      ]
    ],
    [
      "008855b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008855c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008845e0 ["INT_ADD", "register:40f0:8", ["const:8845e0:8", "const:4:8"]]
- 008845e0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088558c ["INT_ADD", "register:40f0:8", ["const:88558c:8", "const:4:8"]]
+ 0088558c ["CALL", null, ["callee:00c58f30:8"]]
- 008845f0 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 0088559c ["COPY", "register:4048:8", ["const:c81000:8"]]
- 008845f4 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 008845f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008845f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008845f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-36e9ca234bb29108dafc9b8e3d32d4db"></a>

### [`0088467c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/0088467c.md) → [`00885628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885628.md) FUN_00885628

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088565c",
      "incomplete_value": true,
      "site": "00885664",
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
      "unmatched:008846a4",
      "DATA",
      [
        "storage",
        "00c80c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885650",
      "DATA",
      [
        "storage",
        "00c81c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008846b8 ["INT_ADD", "register:40f0:8", ["const:8846b8:8", "const:4:8"]]
- 008846b8 ["CALL", null, ["callee:00c54d60:8"]]
+ 00885664 ["INT_ADD", "register:40f0:8", ["const:885664:8", "const:4:8"]]
+ 00885664 ["CALL", null, ["callee:00c54d60:8"]]
- 00884694 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00885640 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00884698 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 00884698 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00884698 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00884698 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-880dd71027a9f594696c905856556c21"></a>

### [`0088471c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/0088471c.md) → [`008856c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/008856c8.md) FUN_008856c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00884758",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00885704",
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
- 0088473c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0088473c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008856e8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008856e8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00884754 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00884754 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00884754 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00884754 ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
- 00884758 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884758 ["INT_ADD", "register:40f0:8", ["const:884758:8", "const:4:8"]]
- 00884758 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bb392103c1e81f9e03fbe4bdc79e6abe"></a>

### [`008847a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008847a0.md) → [`0088574c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/0088574c.md) FUN_0088574c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008847e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008857bc"
      ]
    ]
  ],
  "added": [
    [
      "00885790",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008857bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008847dc ["COPY", "register:0:8", ["register:4040:8"]]
- 008847dc ["INT_ADD", "register:40f0:8", ["const:8847dc:8", "const:4:8"]]
- 008847dc ["CALLIND", null, ["register:0:8"]]
+ 00885788 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885788 ["INT_ADD", "register:40f0:8", ["const:885788:8", "const:4:8"]]
+ 00885788 ["CALLIND", null, ["register:0:8"]]
- 008847e4 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 008847e4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 008847f0 ["INT_ADD", "register:40f0:8", ["const:8847f0:8", "const:4:8"]]
- 008847f0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088579c ["INT_ADD", "register:40f0:8", ["const:88579c:8", "const:4:8"]]
+ 0088579c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-a7070ba850ae5c01b84ffacff3c14b80"></a>

### [`0088485c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/0088485c.md) → [`00885808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885808.md) FUN_00885808

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885820",
      "incomplete_value": false,
      "site": "0088582c",
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
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884874",
      "incomplete_value": false,
      "site": "00884880",
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
            "const:cf8:8"
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
      "0088582c",
      "DATA",
      [
        "storage",
        "00c80cf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088582c",
      "DATA",
      [
        "storage",
        "00c81cc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884870 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0088581c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00884874 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 00884874 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00884874 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00884874 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885820 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 00885820 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885820 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885820 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00884888 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00884888 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00885834 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00885834 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-18d648ae9c85ab67aed7179ba0ca8a07"></a>

### [`008848ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008848ec.md) → [`00885898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885898.md) FUN_00885898

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.86% / 新版 82.86%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00884910",
      "DATA",
      [
        "storage",
        "00c80cf8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00884934",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008858bc",
      "DATA",
      [
        "storage",
        "00c81cc8",
        null,
        "undefined *"
      ]
    ],
    [
      "008858e0",
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
- 00884900 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008858ac ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00884904 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 00884904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00884904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00884904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00884908 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00884908 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00884908 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00884908 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-6eebab6b229a12592de13493dec72ad9"></a>

### [`00884978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884978.md) → [`00885924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885924.md) FUN_00885924

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088594c",
      "incomplete_value": false,
      "site": "00885950",
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
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008849a0",
      "incomplete_value": false,
      "site": "008849a4",
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
            "const:cf8:8"
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
      "00885950",
      "DATA",
      [
        "storage",
        "00c80cf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885950",
      "DATA",
      [
        "storage",
        "00c81cc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088498c ["INT_ADD", "register:40f0:8", ["const:88498c:8", "const:4:8"]]
- 0088498c ["CALL", null, ["callee:00c58f30:8"]]
+ 00885938 ["INT_ADD", "register:40f0:8", ["const:885938:8", "const:4:8"]]
+ 00885938 ["CALL", null, ["callee:00c58f30:8"]]
- 0088499c ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00885948 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 008849a0 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 008849a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008849a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008849a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088594c ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 0088594c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088594c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088594c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f14a960b56d9251377779f735b789111"></a>

### [`00884a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884a28.md) → [`008859d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/008859d4.md) FUN_008859d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008859f0",
      "incomplete_value": false,
      "site": "008859fc",
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
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884a44",
      "incomplete_value": false,
      "site": "00884a50",
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
            "const:cf8:8"
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
      "008859fc",
      "DATA",
      [
        "storage",
        "00c80cf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008859fc",
      "DATA",
      [
        "storage",
        "00c81cc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884a40 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 008859ec ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00884a44 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 00884a44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00884a44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00884a44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008859f0 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 008859f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008859f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008859f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00884a64 ["INT_ADD", "register:40f0:8", ["const:884a64:8", "const:4:8"]]
- 00884a64 ["CALL", null, ["callee:00c54d60:8"]]
+ 00885a10 ["INT_ADD", "register:40f0:8", ["const:885a10:8", "const:4:8"]]
+ 00885a10 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-c90e438a697f2e795015dddeca6f7373"></a>

### [`00884ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884ac8.md) → [`00885a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885a74.md) FUN_00885a74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00884b0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00885acc"
      ]
    ]
  ],
  "added": [
    [
      "00885ab8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00885acc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884b04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884b04 ["INT_ADD", "register:40f0:8", ["const:884b04:8", "const:4:8"]]
- 00884b04 ["CALLIND", null, ["register:0:8"]]
+ 00885ab0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885ab0 ["INT_ADD", "register:40f0:8", ["const:885ab0:8", "const:4:8"]]
+ 00885ab0 ["CALLIND", null, ["register:0:8"]]
- 00884b0c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00884b0c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00884b18 ["INT_ADD", "register:40f0:8", ["const:884b18:8", "const:4:8"]]
- 00884b18 ["CALL", null, ["callee:00c54d90:8"]]
+ 00885ac4 ["INT_ADD", "register:40f0:8", ["const:885ac4:8", "const:4:8"]]
+ 00885ac4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-79e27a32847c3d00511b28fa88c20cdd"></a>

### [`00884b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884b4c.md) → [`00885af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885af8.md) FUN_00885af8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008816ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/008816ac.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00884bb0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00885b5c",
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
- 00884b88 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884b88 ["INT_ADD", "register:40f0:8", ["const:884b88:8", "const:4:8"]]
- 00884b88 ["CALLIND", null, ["register:0:8"]]
+ 00885b34 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885b34 ["INT_ADD", "register:40f0:8", ["const:885b34:8", "const:4:8"]]
+ 00885b34 ["CALLIND", null, ["register:0:8"]]
- 00884b90 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00884b90 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00885b3c ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00885b3c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00884b9c ["INT_ADD", "register:40f0:8", ["const:884b9c:8", "const:4:8"]]
- 00884b9c ["CALL", null, ["callee:00c54d90:8"]]
+ 00885b48 ["INT_ADD", "register:40f0:8", ["const:885b48:8", "const:4:8"]]
+ 00885b48 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-bc4544be50a2627cf01d3aaa935b789a"></a>

### [`00885050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885050.md) → [`00885ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885ffc.md) FUN_00885ffc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886014",
      "incomplete_value": false,
      "site": "00886020",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885068",
      "incomplete_value": false,
      "site": "00885074",
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
            "const:d68:8"
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
      "00886020",
      "DATA",
      [
        "storage",
        "00c80d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886020",
      "DATA",
      [
        "storage",
        "00c81d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885064 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00886010 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00885068 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00885068 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885068 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885068 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00886014 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00886014 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00886014 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00886014 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885098 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885098 ["INT_ADD", "register:40f0:8", ["const:885098:8", "const:4:8"]]
- 00885098 ["CALLIND", null, ["register:0:8"]]
+ 00886044 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886044 ["INT_ADD", "register:40f0:8", ["const:886044:8", "const:4:8"]]
+ 00886044 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6925335edb0818daf3fc371cadc04d01"></a>

### [`008850e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008850e0.md) → [`0088608c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/0088608c.md) FUN_0088608c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00885104",
      "DATA",
      [
        "storage",
        "00c80d68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00885108",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008860c4"
      ]
    ]
  ],
  "added": [
    [
      "008860b0",
      "DATA",
      [
        "storage",
        "00c81d38",
        null,
        "undefined *"
      ]
    ],
    [
      "008860b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008860c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008850f4 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008860a0 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008850f8 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 008850f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008850f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008850f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008850fc ["COPY", "tmp:0:8", ["const:30:8"]]
- 008850fc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 008850fc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 008850fc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-e4a95a01b3ba82885eb864a185c668df"></a>

### [`0088516c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088516c.md) → [`00886118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886118.md) FUN_00886118

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886140",
      "incomplete_value": false,
      "site": "00886144",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885194",
      "incomplete_value": false,
      "site": "00885198",
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
            "const:d68:8"
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
      "00886144",
      "DATA",
      [
        "storage",
        "00c80d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886144",
      "DATA",
      [
        "storage",
        "00c81d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885180 ["INT_ADD", "register:40f0:8", ["const:885180:8", "const:4:8"]]
- 00885180 ["CALL", null, ["callee:00c58f30:8"]]
+ 0088612c ["INT_ADD", "register:40f0:8", ["const:88612c:8", "const:4:8"]]
+ 0088612c ["CALL", null, ["callee:00c58f30:8"]]
- 00885190 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 0088613c ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00885194 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00885194 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00885194 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00885194 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00886140 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00886140 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00886140 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00886140 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0f815424c274d76fe8acdee18831c3fd"></a>

### [`0088521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088521c.md) → [`008861c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/008861c8.md) FUN_008861c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008861e4",
      "incomplete_value": false,
      "site": "008861f0",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885238",
      "incomplete_value": false,
      "site": "00885244",
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
            "const:d68:8"
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
      "008861f0",
      "DATA",
      [
        "storage",
        "00c80d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008861f0",
      "DATA",
      [
        "storage",
        "00c81d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885234 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 008861e0 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00885238 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00885238 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00885238 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00885238 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008861e4 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 008861e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008861e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008861e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00885258 ["INT_ADD", "register:40f0:8", ["const:885258:8", "const:4:8"]]
- 00885258 ["CALL", null, ["callee:00c54d60:8"]]
+ 00886204 ["INT_ADD", "register:40f0:8", ["const:886204:8", "const:4:8"]]
+ 00886204 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-d8545f43808408562f3bc841c4268d38"></a>

### [`008852bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008852bc.md) → [`00886268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886268.md) FUN_00886268

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008852d8 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00886284 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 008852dc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008852dc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00886288 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00886288 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 008852e4 ["BRANCH", null, ["local:b4:8"]]
+ 00886290 ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-6d0622eb9b41191fde54f604a42b36f0"></a>

### [`008853fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008853fc.md) → [`008863a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/008863a8.md) FUN_008863a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008863c4",
      "incomplete_value": false,
      "site": "008863cc",
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
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885418",
      "incomplete_value": false,
      "site": "00885420",
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
            "const:df8:8"
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
      "008863cc",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008863cc",
      "DATA",
      [
        "storage",
        "00c81dc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885414 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008863c0 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00885418 ["COPY", "tmp:0:8", ["const:df8:8"]]
- 00885418 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885418 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885418 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008863c4 ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 008863c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008863c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008863c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885430 ["INT_ADD", "register:40f0:8", ["const:885430:8", "const:4:8"]]
- 00885430 ["CALL", null, ["callee:00c54d90:8"]]
+ 008863dc ["INT_ADD", "register:40f0:8", ["const:8863dc:8", "const:4:8"]]
+ 008863dc ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-9a24f20c8709367fdc59c2604c214dee"></a>

### [`00885498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885498.md) → [`00886444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886444.md) FUN_00886444

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886460",
      "incomplete_value": false,
      "site": "00886468",
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
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008854b4",
      "incomplete_value": false,
      "site": "008854bc",
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
            "const:df8:8"
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
      "00886468",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886468",
      "DATA",
      [
        "storage",
        "00c81dc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008854b0 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0088645c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008854b4 ["COPY", "tmp:0:8", ["const:df8:8"]]
- 008854b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008854b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008854b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00886460 ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 00886460 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00886460 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00886460 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008854cc ["INT_ADD", "register:40f0:8", ["const:8854cc:8", "const:4:8"]]
- 008854cc ["CALL", null, ["callee:00c54d90:8"]]
+ 00886478 ["INT_ADD", "register:40f0:8", ["const:886478:8", "const:4:8"]]
+ 00886478 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-f4e7bfa7614823e0388fff83ad99882c"></a>

### [`0088552c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088552c.md) → [`008864d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/008864d8.md) FUN_008864d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886504",
      "incomplete_value": false,
      "site": "00886504",
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
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885558",
      "incomplete_value": false,
      "site": "00885558",
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
            "const:df8:8"
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
      "00886504",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886504",
      "DATA",
      [
        "storage",
        "00c81dc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885540 ["INT_ADD", "register:40f0:8", ["const:885540:8", "const:4:8"]]
- 00885540 ["CALL", null, ["callee:00c58f30:8"]]
+ 008864ec ["INT_ADD", "register:40f0:8", ["const:8864ec:8", "const:4:8"]]
+ 008864ec ["CALL", null, ["callee:00c58f30:8"]]
- 0088554c ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008864f8 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00885550 ["COPY", "tmp:0:8", ["const:df8:8"]]
- 00885550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008864fc ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 008864fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008864fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008864fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-77159b6bb86dd03f717c7bb715a63be9"></a>

### [`008855d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008855d4.md) → [`00886580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886580.md) FUN_00886580

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008865a0",
      "incomplete_value": false,
      "site": "008865a0",
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
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008855f4",
      "incomplete_value": false,
      "site": "008855f4",
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
            "const:df8:8"
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
      "008865a0",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008865a0",
      "DATA",
      [
        "storage",
        "00c81dc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008855ec ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00886598 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008855f0 ["COPY", "tmp:0:8", ["const:df8:8"]]
- 008855f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008855f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008855f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088659c ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 0088659c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088659c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088659c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885610 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885610 ["INT_ADD", "register:40f0:8", ["const:885610:8", "const:4:8"]]
- 00885610 ["CALLIND", null, ["register:0:8"]]
+ 008865bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008865bc ["INT_ADD", "register:40f0:8", ["const:8865bc:8", "const:4:8"]]
+ 008865bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-959ef24383795a3c1a7f59083f82f857"></a>

### [`0088577c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088577c.md) → [`00886728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886728.md) FUN_00886728

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00768a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768a80.md) [`00768ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ee8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00768e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/00768e5c.md) [`007692c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/007692c4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008816ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/008816ac.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00886798",
      "value": [
        "leaf",
        "ram:768e5c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008857ec",
      "value": [
        "leaf",
        "ram:768a80:8"
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
      "site": "008867dc",
      "value": [
        "leaf",
        "ram:7692c4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00885830",
      "value": [
        "leaf",
        "ram:768ee8:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00885870",
      "incomplete_value": true,
      "site": "00885878",
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
      "00886798",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768a80"
      ]
    ],
    [
      "008867cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00880700"
      ]
    ],
    [
      "008867dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768ee8"
      ]
    ]
  ],
  "added": [
    [
      "00886798",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768e5c"
      ]
    ],
    [
      "008867cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008816ac"
      ]
    ],
    [
      "008867dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007692c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008857ec ["INT_ADD", "register:40f0:8", ["const:8857ec:8", "const:4:8"]]
- 008857ec ["CALL", null, ["ram:768a80:8"]]
+ 00886798 ["INT_ADD", "register:40f0:8", ["const:886798:8", "const:4:8"]]
+ 00886798 ["CALL", null, ["ram:768e5c:8"]]
- 00885830 ["INT_ADD", "register:40f0:8", ["const:885830:8", "const:4:8"]]
- 00885830 ["CALL", null, ["ram:768ee8:8"]]
+ 008867dc ["INT_ADD", "register:40f0:8", ["const:8867dc:8", "const:4:8"]]
+ 008867dc ["CALL", null, ["ram:7692c4:8"]]
- 00885878 ["INT_ADD", "register:40f0:8", ["const:885878:8", "const:4:8"]]
- 00885878 ["CALL", null, ["callee:00c54d60:8"]]
+ 00886824 ["INT_ADD", "register:40f0:8", ["const:886824:8", "const:4:8"]]
+ 00886824 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-bcf08ed187499a65c2ebb53ac5e93031"></a>

### [`00885ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885ae8.md) → [`00886a94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886a94.md) FUN_00886a94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00885b04 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00886ab0 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00885b08 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00885b08 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00886ab4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00886ab4 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00885b10 ["BRANCH", null, ["local:b4:8"]]
+ 00886abc ["BRANCH", null, ["local:b6:8"]]
~~~


<a id="compare-3de3b4f181259ebbddc22ca70ac52f77"></a>

### [`00885b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885b6c.md) → [`00886b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886b18.md) FUN_00886b18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00885b90",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886b3c",
      "DATA",
      [
        "storage",
        "00c81e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885b80 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00886b2c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00885b84 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 00885b84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885b84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885b84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885b88 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00885b88 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00885b88 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00885b88 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-1e58ad84172d76e9dbf6fbf8214f25ab"></a>

### [`00885bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885bfc.md) → [`00886ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886ba8.md) FUN_00886ba8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.57% / 新版 68.57%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00885c50",
      "incomplete_value": true,
      "site": "00885c58",
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
      "unmatched:00885bfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00885c00",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00885c20",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886ba8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00886bac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00886bcc",
      "DATA",
      [
        "storage",
        "00c81e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885c58 ["INT_ADD", "register:40f0:8", ["const:885c58:8", "const:4:8"]]
- 00885c58 ["CALL", null, ["callee:00c54d90:8"]]
+ 00886c04 ["INT_ADD", "register:40f0:8", ["const:886c04:8", "const:4:8"]]
+ 00886c04 ["CALL", null, ["callee:00c54d90:8"]]
- 00885bfc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00885bfc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00885bfc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00885bfc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00885c00 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00885c00 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00885c00 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00885c00 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a31786fe0bcedb6e71adad375f462803"></a>

### [`00885c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885c88.md) → [`00886c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886c34.md) FUN_00886c34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00885cf8",
      "incomplete_value": true,
      "site": "00885d08",
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
      "unmatched:00885cb4",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886c60",
      "DATA",
      [
        "storage",
        "00c81e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885d08 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885d08 ["INT_ADD", "register:40f0:8", ["const:885d08:8", "const:4:8"]]
- 00885d08 ["CALLIND", null, ["register:0:8"]]
+ 00886cb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886cb4 ["INT_ADD", "register:40f0:8", ["const:886cb4:8", "const:4:8"]]
+ 00886cb4 ["CALLIND", null, ["register:0:8"]]
- 00885c9c ["INT_ADD", "register:40f0:8", ["const:885c9c:8", "const:4:8"]]
- 00885c9c ["CALL", null, ["callee:00c58f30:8"]]
+ 00886c48 ["INT_ADD", "register:40f0:8", ["const:886c48:8", "const:4:8"]]
+ 00886c48 ["CALL", null, ["callee:00c58f30:8"]]
- 00885cac ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00886c58 ["COPY", "register:4048:8", ["const:c81000:8"]]
~~~


<a id="compare-c18974a60b64d81e04a7b4e775690c25"></a>

### [`00885d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885d38.md) → [`00886ce4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886ce4.md) FUN_00886ce4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00885d6c",
      "incomplete_value": true,
      "site": "00885d74",
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
      "unmatched:00885d60",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00885d7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00886d44"
      ]
    ]
  ],
  "added": [
    [
      "00886d0c",
      "DATA",
      [
        "storage",
        "00c81e38",
        null,
        "undefined *"
      ]
    ],
    [
      "00886d28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00886d44"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885d74 ["INT_ADD", "register:40f0:8", ["const:885d74:8", "const:4:8"]]
- 00885d74 ["CALL", null, ["callee:00c54d60:8"]]
+ 00886d20 ["INT_ADD", "register:40f0:8", ["const:886d20:8", "const:4:8"]]
+ 00886d20 ["CALL", null, ["callee:00c54d60:8"]]
- 00885d50 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00886cfc ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00885d54 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 00885d54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00885d54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00885d54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4724f93bd16a5ed555843d3e5bfff5b8"></a>

### [`00885dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885dd8.md) → [`00886d84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886d84.md) FUN_00886d84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00885e1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00886ddc"
      ]
    ]
  ],
  "added": [
    [
      "00886dc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00886ddc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885e14 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885e14 ["INT_ADD", "register:40f0:8", ["const:885e14:8", "const:4:8"]]
- 00885e14 ["CALLIND", null, ["register:0:8"]]
+ 00886dc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886dc0 ["INT_ADD", "register:40f0:8", ["const:886dc0:8", "const:4:8"]]
+ 00886dc0 ["CALLIND", null, ["register:0:8"]]
- 00885e1c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00885e1c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00885e28 ["INT_ADD", "register:40f0:8", ["const:885e28:8", "const:4:8"]]
- 00885e28 ["CALL", null, ["callee:00c54d90:8"]]
+ 00886dd4 ["INT_ADD", "register:40f0:8", ["const:886dd4:8", "const:4:8"]]
+ 00886dd4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-26e7944273c4a1f9feef550fab0fb27f"></a>

### [`00885e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885e5c.md) → [`00886e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886e08.md) FUN_00886e08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0088577c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088577c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00886728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886728.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.38% / 新版 84.38%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00885e5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00885e60",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00885e98",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00886e08",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00886e0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00886e44",
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
- 00885e5c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00885e5c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00885e5c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00885e5c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00885e60 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00885e60 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00885e60 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00885e60 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00885e64 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


