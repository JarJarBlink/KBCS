# v16.0.2 → v16.0.3 · 最優先の変更候補 (58)

[一覧の目次](README.md)

<a id="compare-5acdd1344385f484f341f2985ca3180c"></a>

### [`0088bde8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bde8.md) → [`0088cd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cd94.md) _INIT_165

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.40% / 新版 77.40%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088bf60",
      "incomplete_value": true,
      "site": "0088bf70",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088bf64",
      "incomplete_value": true,
      "site": "0088bf70",
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
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088cf34",
      "incomplete_value": true,
      "site": "0088cf44",
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
      "unmatched:0088be18",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088be24",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0088be2c",
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
      "0088cdc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0088cdd0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0088cdd8",
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
- 0088bf70 ["INT_ADD", "register:40f0:8", ["const:88bf70:8", "const:4:8"]]
- 0088bf70 ["CALL", null, ["callee:0043bb58:8"]]
+ 0088cf1c ["INT_ADD", "register:40f0:8", ["const:88cf1c:8", "const:4:8"]]
+ 0088cf1c ["CALL", null, ["callee:0043bb58:8"]]
- 0088bf98 ["INT_ADD", "register:40f0:8", ["const:88bf98:8", "const:4:8"]]
- 0088bf98 ["CALL", null, ["callee:0043bb58:8"]]
+ 0088cf44 ["INT_ADD", "register:40f0:8", ["const:88cf44:8", "const:4:8"]]
+ 0088cf44 ["CALL", null, ["callee:0043bb58:8"]]
- 0088bfac ["INT_ADD", "register:40f0:8", ["const:88bfac:8", "const:4:8"]]
- 0088bfac ["CALL", null, ["callee:0043bb58:8"]]
+ 0088cf58 ["INT_ADD", "register:40f0:8", ["const:88cf58:8", "const:4:8"]]
+ 0088cf58 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-41b8e4189f8bd283ff25ed5f64776968"></a>

### [`0088c178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c178.md) → [`0088d124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d124.md) FUN_0088d124

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 25件 [`00472b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472b38.md) [`00472bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472bec.md) [`00472bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472bfc.md) [`00472de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472de4.md) [`004737bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004737bc.md)
- 新版 呼出元 0件  · 呼出先 25件 [`00472e58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472e58.md) [`00472f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472f0c.md) [`00472f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472f1c.md) [`00473104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473104.md) [`00473adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473adc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.21% / 新版 80.21%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0088d1f8",
      "value": [
        "leaf",
        "ram:76880c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0088c24c",
      "value": [
        "leaf",
        "ram:768430:8"
      ]
    },
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088d344",
      "incomplete_value": true,
      "site": "0088d34c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "0088c398",
      "incomplete_value": true,
      "site": "0088c3a0",
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
                "const:2300:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 31,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0088d144",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0088c2b8"
      ]
    ],
    [
      "0088d174",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0088c2b8"
      ]
    ],
    [
      "unmatched:0088c1f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088d1f4"
      ]
    ]
  ],
  "added": [
    [
      "0088d144",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088d264"
      ]
    ],
    [
      "0088d174",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088d264"
      ]
    ],
    [
      "0088d1a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088d1f4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088c24c ["INT_ADD", "register:40f0:8", ["const:88c24c:8", "const:4:8"]]
- 0088c24c ["CALL", null, ["ram:768430:8"]]
+ 0088d1f8 ["INT_ADD", "register:40f0:8", ["const:88d1f8:8", "const:4:8"]]
+ 0088d1f8 ["CALL", null, ["ram:76880c:8"]]
- 0088c3a0 ["INT_ADD", "register:40f0:8", ["const:88c3a0:8", "const:4:8"]]
- 0088c3a0 ["CALL", null, ["callee:00797fb8:8"]]
+ 0088d34c ["INT_ADD", "register:40f0:8", ["const:88d34c:8", "const:4:8"]]
+ 0088d34c ["CALL", null, ["callee:00797fb8:8"]]
- 0088c198 ["INT_RIGHT", "tmp:0:4", ["register:4010:4", "const:0:4"]]
- 0088c198 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0088c198 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0088c198 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0088d144 ["INT_RIGHT", "tmp:0:4", ["register:4010:4", "const:0:4"]]
+ 0088d144 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0088d144 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0088d144 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-01d2977fa5cd0aa0407a8dd1c1626c65"></a>

### [`0088c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c504.md) → [`0088d4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d4b0.md) FUN_0088d4b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0088c178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c178.md) [`0088f4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f4f4.md) [`0088f6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f6cc.md) · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044c814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c814.md) [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md)
- 新版 呼出元 3件 [`0088d124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d124.md) [`008904a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008904a0.md) [`00890678`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890678.md) · 呼出先 9件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0044cb34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044c/0044cb34.md) [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.60% / 新版 75.60%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088c62c",
      "incomplete_value": true,
      "site": "0088c638",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088d630",
      "incomplete_value": true,
      "site": "0088d634",
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
                "const:fffffffffffffff8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088c70c",
      "incomplete_value": true,
      "site": "0088c710",
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
      "unmatched:0088c528",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:0088c52c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ],
    [
      "unmatched:0088c530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "0088d4d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "0088d4d8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ],
    [
      "0088d4dc",
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
- 0088c638 ["INT_ADD", "register:40f0:8", ["const:88c638:8", "const:4:8"]]
- 0088c638 ["CALL", null, ["callee:004738a0:8"]]
+ 0088d5e4 ["INT_ADD", "register:40f0:8", ["const:88d5e4:8", "const:4:8"]]
+ 0088d5e4 ["CALL", null, ["callee:004738a0:8"]]
- 0088c688 ["INT_ADD", "register:40f0:8", ["const:88c688:8", "const:4:8"]]
- 0088c688 ["CALL", null, ["callee:00c58f50:8"]]
+ 0088d634 ["INT_ADD", "register:40f0:8", ["const:88d634:8", "const:4:8"]]
+ 0088d634 ["CALL", null, ["callee:00c58f50:8"]]
- 0088c710 ["INT_ADD", "register:40f0:8", ["const:88c710:8", "const:4:8"]]
- 0088c710 ["CALL", null, ["callee:00c58f50:8"]]
+ 0088d6bc ["INT_ADD", "register:40f0:8", ["const:88d6bc:8", "const:4:8"]]
+ 0088d6bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-68b4f32673a6db41dfbd7f62fe6f721e"></a>

### [`0088ef18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088e/0088ef18.md) → [`0088fec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088f/0088fec4.md) FUN_0088fec4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.75% / 新版 73.75%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088ffc4",
      "incomplete_value": true,
      "site": "0088ffc8",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f018",
      "incomplete_value": true,
      "site": "0088f01c",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
      "unmatched:0088ef84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088fff8"
      ]
    ]
  ],
  "added": [
    [
      "0088ff30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0088fff8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f01c ["INT_ADD", "register:40f0:8", ["const:88f01c:8", "const:4:8"]]
- 0088f01c ["CALL", null, ["callee:00c590a0:8"]]
+ 0088ffc8 ["INT_ADD", "register:40f0:8", ["const:88ffc8:8", "const:4:8"]]
+ 0088ffc8 ["CALL", null, ["callee:00c590a0:8"]]
- 0088ef58 ["BRANCH", null, ["local:b11:8"]]
+ 0088ff04 ["BRANCH", null, ["local:b9:8"]]
- 0088ef68 ["INT_SUB", "register:4040:8", ["register:4040:8", "register:4058:8"]]
~~~


<a id="compare-8364f4c8920fb704e505c5d423eb36d6"></a>

### [`0088f2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f2d8.md) → [`00890284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890284.md) FUN_00890284

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 3件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 3件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d908.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008902ec",
      "incomplete_value": false,
      "site": "008902f0",
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
      "definition_site": "0088f340",
      "incomplete_value": false,
      "site": "0088f344",
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
      "008902ec",
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
      "008902ec",
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
- 0088f344 ["INT_ADD", "register:40f0:8", ["const:88f344:8", "const:4:8"]]
- 0088f344 ["CALL", null, ["callee:00442c90:8"]]
+ 008902f0 ["INT_ADD", "register:40f0:8", ["const:8902f0:8", "const:4:8"]]
+ 008902f0 ["CALL", null, ["callee:00442c90:8"]]
- 0088f2fc ["INT_ADD", "register:40f0:8", ["const:88f2fc:8", "const:4:8"]]
- 0088f2fc ["CALL", null, ["callee:0046d908:8"]]
+ 008902a8 ["INT_ADD", "register:40f0:8", ["const:8902a8:8", "const:4:8"]]
+ 008902a8 ["CALL", null, ["callee:0046d908:8"]]
- 0088f340 ["COPY", "tmp:0:8", ["const:170:8"]]
- 0088f340 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0088f340 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0088f340 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008902ec ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 008902ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008902ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008902ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-f06c575ac732e52bd670bd4552227a44"></a>

### [`0088f34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f34c.md) → [`008902f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008902f8.md) FUN_008902f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 2件 [`0046d6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d6ec.md) [`00564320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/00564320.md)
- 新版 呼出元 1件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 2件 [`0046da0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046da0c.md) [`00564640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/00564640.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f35c ["INT_ADD", "register:40f0:8", ["const:88f35c:8", "const:4:8"]]
- 0088f35c ["CALL", null, ["callee:0046da0c:8"]]
+ 00890308 ["INT_ADD", "register:40f0:8", ["const:890308:8", "const:4:8"]]
+ 00890308 ["CALL", null, ["callee:0046da0c:8"]]
- 0088f368 ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
+ 00890314 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 0088f374 ["INT_ADD", "register:40f0:8", ["const:88f374:8", "const:4:8"]]
- 0088f374 ["CALL", null, ["callee:00564640:8"]]
+ 00890320 ["INT_ADD", "register:40f0:8", ["const:890320:8", "const:4:8"]]
+ 00890320 ["CALL", null, ["callee:00564640:8"]]
~~~


<a id="compare-b86871c9dba1bb250634b12f19f54fe0"></a>

### [`0088f390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f390.md) → [`0089033c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/0089033c.md) FUN_0089033c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 1件 [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md)
- 新版 呼出元 2件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) [`00aa4e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa4/00aa4e88.md) · 呼出先 1件 [`00c5b990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b990.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f3b4 ["INT_ADD", "register:40f0:8", ["const:88f3b4:8", "const:4:8"]]
- 0088f3b4 ["CALL", null, ["callee:00c5b990:8"]]
+ 00890360 ["INT_ADD", "register:40f0:8", ["const:890360:8", "const:4:8"]]
+ 00890360 ["CALL", null, ["callee:00c5b990:8"]]
~~~


<a id="compare-ab88909ad5ab2966f31e8083d6ae6d92"></a>

### [`0088f3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f3d8.md) → [`00890384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890384.md) FUN_00890384

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)
- 新版 呼出元 1件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.56% / 新版 80.56%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088f414",
      "incomplete_value": true,
      "site": "0088f41c",
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
            "const:50:8"
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
      "definition_site": "0088f418",
      "incomplete_value": false,
      "site": "0088f41c",
      "value": [
        "leaf",
        "const:2:8"
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
      "unmatched:0088f400",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088f410",
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
      "008903ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008903bc",
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
- 0088f41c ["INT_ADD", "register:40f0:8", ["const:88f41c:8", "const:4:8"]]
- 0088f41c ["CALL", null, ["callee:00c5b8d0:8"]]
+ 008903c8 ["INT_ADD", "register:40f0:8", ["const:8903c8:8", "const:4:8"]]
+ 008903c8 ["CALL", null, ["callee:00c5b8d0:8"]]
- 0088f3fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 0088f3fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0088f400 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0088f400 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff0:8"]]
- 0088f400 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-05b6c92eca208315a9f5a614598bcfcc"></a>

### [`0088f49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f49c.md) → [`00890448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890448.md) FUN_00890448

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
      "unmatched:0088f4c0",
      "DATA",
      [
        "storage",
        "00c81b58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0089046c",
      "DATA",
      [
        "storage",
        "00c82b28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f4b0 ["INT_ADD", "register:40f0:8", ["const:88f4b0:8", "const:4:8"]]
- 0088f4b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0089045c ["INT_ADD", "register:40f0:8", ["const:89045c:8", "const:4:8"]]
+ 0089045c ["CALL", null, ["callee:00c58f30:8"]]
- 0088f4b8 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00890464 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088f4bc ["COPY", "tmp:0:8", ["const:b58:8"]]
- 0088f4bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f4bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f4bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-57524abbb9071a2f8ff78e329cb9d5fd"></a>

### [`0088f4d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f4d4.md) → [`00890480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890480.md) FUN_00890480

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
      "unmatched:0088f4dc",
      "DATA",
      [
        "storage",
        "00c81b58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00890488",
      "DATA",
      [
        "storage",
        "00c82b28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f4d4 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0088f4d8 ["COPY", "tmp:0:8", ["const:b58:8"]]
- 0088f4d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f4d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f4d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088f4dc ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0088f4dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-e936f4a5941af5acbba15ade920f1f37"></a>

### [`0088f4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f4f4.md) → [`008904a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008904a0.md) FUN_008904a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`007692b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/007692b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0088c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c504.md) [`009bd4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd4b0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md) [`00769694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/00769694.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0088d4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d4b0.md) [`009be45c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009be45c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 0088f538 ["INT_ADD", "register:40f0:8", ["const:88f538:8", "const:4:8"]]
- 0088f538 ["CALL", null, ["callee:009be45c:8"]]
+ 008904e4 ["INT_ADD", "register:40f0:8", ["const:8904e4:8", "const:4:8"]]
+ 008904e4 ["CALL", null, ["callee:009be45c:8"]]
- 0088f548 ["INT_ADD", "register:40f0:8", ["const:88f548:8", "const:4:8"]]
- 0088f548 ["CALL", null, ["callee:008524fc:8"]]
+ 008904f4 ["INT_ADD", "register:40f0:8", ["const:8904f4:8", "const:4:8"]]
+ 008904f4 ["CALL", null, ["callee:008524fc:8"]]
- 0088f54c ["INT_ADD", "register:40f0:8", ["const:88f54c:8", "const:4:8"]]
- 0088f54c ["CALL", null, ["callee:00a1b6a4:8"]]
+ 008904f8 ["INT_ADD", "register:40f0:8", ["const:8904f8:8", "const:4:8"]]
+ 008904f8 ["CALL", null, ["callee:00a1b6a4:8"]]
~~~


<a id="compare-9237925aed960c797245f1fed147c523"></a>

### [`0088f67c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f67c.md) → [`00890628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890628.md) FUN_00890628

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
      "unmatched:0088f6a0",
      "DATA",
      [
        "storage",
        "00c81be8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088f6a4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088f6a8",
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
      "0089064c",
      "DATA",
      [
        "storage",
        "00c82bb8",
        null,
        "undefined *"
      ]
    ],
    [
      "00890650",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00890654",
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
- 0088f690 ["INT_ADD", "register:40f0:8", ["const:88f690:8", "const:4:8"]]
- 0088f690 ["CALL", null, ["callee:00c58f30:8"]]
+ 0089063c ["INT_ADD", "register:40f0:8", ["const:89063c:8", "const:4:8"]]
+ 0089063c ["CALL", null, ["callee:00c58f30:8"]]
- 0088f698 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00890644 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088f69c ["COPY", "tmp:0:8", ["const:be8:8"]]
- 0088f69c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f69c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f69c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f7f46f06dc995c5a387a97f2f4a548ae"></a>

### [`0088f6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f6b0.md) → [`0089065c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/0089065c.md) FUN_0089065c

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
      "definition_site": "00890668",
      "incomplete_value": false,
      "site": "00890668",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f6bc",
      "incomplete_value": false,
      "site": "0088f6bc",
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
      "00890668",
      "DATA",
      [
        "storage",
        "00c81be8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00890668",
      "DATA",
      [
        "storage",
        "00c82bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f6b4 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 00890660 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 0088f6b8 ["COPY", "tmp:0:8", ["const:be8:8"]]
- 0088f6b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088f6b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088f6b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00890664 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 00890664 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00890664 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00890664 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5b1c55836e4a9e1a02f144d6af979100"></a>

### [`0088f6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f6fc.md) → [`008906a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008906a8.md) FUN_008906a8

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
      "unmatched:0088f714",
      "DATA",
      [
        "storage",
        "00c81c68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088f718",
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
      "008906c0",
      "DATA",
      [
        "storage",
        "00c82c38",
        null,
        "undefined *"
      ]
    ],
    [
      "008906c4",
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
- 0088f708 ["INT_ADD", "register:40f0:8", ["const:88f708:8", "const:4:8"]]
- 0088f708 ["CALL", null, ["callee:00c58f30:8"]]
+ 008906b4 ["INT_ADD", "register:40f0:8", ["const:8906b4:8", "const:4:8"]]
+ 008906b4 ["CALL", null, ["callee:00c58f30:8"]]
- 0088f70c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 008906b8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088f710 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 0088f710 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f710 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f710 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d587da722c6a47665c4b0f80b8fde9e1"></a>

### [`0088f720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f720.md) → [`008906cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008906cc.md) FUN_008906cc

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
      "unmatched:0088f728",
      "DATA",
      [
        "storage",
        "00c81c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008906d4",
      "DATA",
      [
        "storage",
        "00c82c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f720 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0088f724 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 0088f724 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f724 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f724 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088f728 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0088f728 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-25d7d93d8fe9ececb370687d7199a717"></a>

### [`0088f738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f738.md) → [`008906e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008906e4.md) FUN_008906e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00550a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a54.md) [`0088fcbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fcbc.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00550d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d74.md) [`00890c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890c68.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.76% / 新版 88.76%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088f758",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088f75c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:0088f76c",
      "READ",
      [
        "storage",
        "002a467f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00890704",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00890708",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "00890718",
      "READ",
      [
        "storage",
        "002a474a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f748 ["COPY", "tmp:0:8", ["const:d0:8"]]
- 0088f748 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 0088f748 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 0088f748 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 0088f74c ["COPY", "register:40a0:8", ["register:1660:8"]]
- 0088f750 ["COPY", "register:4000:8", ["const:19:8"]]
~~~


<a id="compare-dde3fc752c45a260e4db589ade6551e9"></a>

### [`0088fb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fb80.md) → [`00890b2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890b2c.md) FUN_00890b2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00890b40",
      "incomplete_value": false,
      "site": "00890b44",
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
            "const:ca8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fb94",
      "incomplete_value": false,
      "site": "0088fb98",
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
            "const:cd8:8"
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
      "00890b44",
      "DATA",
      [
        "storage",
        "00c81cd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00890b44",
      "DATA",
      [
        "storage",
        "00c82ca8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fb90 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00890b3c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088fb94 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 0088fb94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088fb94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088fb94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00890b40 ["COPY", "tmp:0:8", ["const:ca8:8"]]
+ 00890b40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00890b40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00890b40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088fba8 ["INT_ADD", "register:40f0:8", ["const:88fba8:8", "const:4:8"]]
- 0088fba8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00890b54 ["INT_ADD", "register:40f0:8", ["const:890b54:8", "const:4:8"]]
+ 00890b54 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-484e56ec557e60b64569db2509d78daf"></a>

### [`0088fbdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fbdc.md) → [`00890b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890b88.md) FUN_00890b88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0088fc20",
      "incomplete_value": true,
      "site": "0088fc24",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:0088fbf8",
      "DATA",
      [
        "storage",
        "00c81cd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00890ba4",
      "DATA",
      [
        "storage",
        "00c82ca8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fc24 ["INT_ADD", "register:40f0:8", ["const:88fc24:8", "const:4:8"]]
- 0088fc24 ["CALL", null, ["callee:00c58f20:8"]]
+ 00890bd0 ["INT_ADD", "register:40f0:8", ["const:890bd0:8", "const:4:8"]]
+ 00890bd0 ["CALL", null, ["callee:00c58f20:8"]]
- 0088fbf0 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00890b9c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088fbf4 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 0088fbf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088fbf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088fbf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0c111b777a9f9983c92d9a6cc0bdb72"></a>

### [`0088fc38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fc38.md) → [`00890be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890be4.md) FUN_00890be4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088fc5c",
      "DATA",
      [
        "storage",
        "00c81cd8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0088fc64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00890c28"
      ]
    ]
  ],
  "added": [
    [
      "00890c08",
      "DATA",
      [
        "storage",
        "00c82ca8",
        null,
        "undefined *"
      ]
    ],
    [
      "00890c10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00890c28"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fc4c ["INT_ADD", "register:40f0:8", ["const:88fc4c:8", "const:4:8"]]
- 0088fc4c ["CALL", null, ["callee:00c58f30:8"]]
+ 00890bf8 ["INT_ADD", "register:40f0:8", ["const:890bf8:8", "const:4:8"]]
+ 00890bf8 ["CALL", null, ["callee:00c58f30:8"]]
- 0088fc54 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 00890c00 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 0088fc58 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 0088fc58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088fc58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088fc58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-25d7891c4ba266406a90ef5ed2256d11"></a>

### [`0088fc88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fc88.md) → [`00890c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890c34.md) FUN_00890c34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00890c40",
      "incomplete_value": false,
      "site": "00890c40",
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
            "const:ca8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fc94",
      "incomplete_value": false,
      "site": "0088fc94",
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
            "const:cd8:8"
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
      "00890c40",
      "DATA",
      [
        "storage",
        "00c81cd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00890c40",
      "DATA",
      [
        "storage",
        "00c82ca8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fc8c ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 00890c38 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 0088fc90 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 0088fc90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088fc90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088fc90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00890c3c ["COPY", "tmp:0:8", ["const:ca8:8"]]
+ 00890c3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00890c3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00890c3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088fcb0 ["INT_ADD", "register:40f0:8", ["const:88fcb0:8", "const:4:8"]]
- 0088fcb0 ["CALL", null, ["callee:00c54d60:8"]]
+ 00890c5c ["INT_ADD", "register:40f0:8", ["const:890c5c:8", "const:4:8"]]
+ 00890c5c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-f4dcd800cc00367df06f3e486750a093"></a>

### [`0088fcbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fcbc.md) → [`00890c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890c68.md) FUN_00890c68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0088f738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f738.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008906e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008906e4.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088fcbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088fcc0",
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
      "00890c68",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00890c6c",
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
- 0088fcbc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0088fcbc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0088fcbc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0088fcbc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0088fcc0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0088fcc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0088fcc4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-affa8cf00ea98a657168335eba04002e"></a>

### [`0088fd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fd5c.md) → [`00890d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890d08.md) FUN_00890d08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048dfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048dfac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00890d10",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0088fd64",
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
      "00890d10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00890d10",
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
- 0088fd64 ["INT_ADD", "register:40f0:8", ["const:88fd64:8", "const:4:8"]]
- 0088fd64 ["CALL", null, ["ram:48cd38:8"]]
+ 00890d10 ["INT_ADD", "register:40f0:8", ["const:890d10:8", "const:4:8"]]
+ 00890d10 ["CALL", null, ["ram:48d058:8"]]
- 0088fd68 ["INT_ADD", "register:40f0:8", ["const:88fd68:8", "const:4:8"]]
- 0088fd68 ["CALL", null, ["callee:0048dfac:8"]]
+ 00890d14 ["INT_ADD", "register:40f0:8", ["const:890d14:8", "const:4:8"]]
+ 00890d14 ["CALL", null, ["callee:0048dfac:8"]]
- 0088fd70 ["INT_ADD", "register:40f0:8", ["const:88fd70:8", "const:4:8"]]
- 0088fd70 ["CALL", null, ["callee:008524fc:8"]]
+ 00890d1c ["INT_ADD", "register:40f0:8", ["const:890d1c:8", "const:4:8"]]
+ 00890d1c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-68b1bfcadd79e6238e355c32e05ccbce"></a>

### [`0088fdb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fdb8.md) → [`00890d64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890d64.md) FUN_00890d64

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
      "definition_site": "00890d78",
      "incomplete_value": false,
      "site": "00890d7c",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fdcc",
      "incomplete_value": false,
      "site": "0088fdd0",
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
            "const:d68:8"
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
      "00890d7c",
      "DATA",
      [
        "storage",
        "00c81d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00890d7c",
      "DATA",
      [
        "storage",
        "00c82d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fdc4 ["INT_ADD", "register:40f0:8", ["const:88fdc4:8", "const:4:8"]]
- 0088fdc4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00890d70 ["INT_ADD", "register:40f0:8", ["const:890d70:8", "const:4:8"]]
+ 00890d70 ["CALL", null, ["callee:00c58f30:8"]]
- 0088fdc8 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00890d74 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0088fdcc ["COPY", "tmp:0:8", ["const:d68:8"]]
- 0088fdcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088fdcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088fdcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00890d78 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00890d78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00890d78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00890d78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-359cea324c1cf1fc444a18447c6e516d"></a>

### [`0088fdf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fdf4.md) → [`00890da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890da0.md) FUN_00890da0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00550a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a54.md) [`0089020c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089020c.md) [`0089025c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089025c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00550d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d74.md) [`008911b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/008911b8.md) [`00891208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891208.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.91% / 新版 84.91%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00890de8",
      "incomplete_value": true,
      "site": "00890dec",
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
    "old": {
      "definition_site": "0088fe3c",
      "incomplete_value": true,
      "site": "0088fe40",
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
                "const:c0:8"
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0088fe18",
      "READ",
      [
        "storage",
        "002b790e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0088fe20",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0088fe24",
      "READ",
      [
        "storage",
        "002b7915",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00890dc4",
      "READ",
      [
        "storage",
        "002b79dd",
        null,
        "string"
      ]
    ],
    [
      "00890dcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00890dd0",
      "READ",
      [
        "storage",
        "002b79e4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fe40 ["INT_ADD", "register:40f0:8", ["const:88fe40:8", "const:4:8"]]
- 0088fe40 ["CALL", null, ["callee:0048d1b4:8"]]
+ 00890dec ["INT_ADD", "register:40f0:8", ["const:890dec:8", "const:4:8"]]
+ 00890dec ["CALL", null, ["callee:0048d1b4:8"]]
- 0088fe10 ["COPY", "tmp:0:8", ["const:90e:8"]]
- 0088fe10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088fe10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088fe10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088fe14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 0088fe14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2b46c8bb834358462634b99b6a2eb0d4"></a>

### [`00890080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890080.md) → [`0089102c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/0089102c.md) FUN_0089102c

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
      "unmatched:00890080",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00890084",
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
      "0089102c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00891030",
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
- 00890080 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00890080 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00890080 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00890080 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00890084 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00890084 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00890088 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-88e5eca0dce2f97d1f7ea3df00a5eb42"></a>

### [`008900d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008900d0.md) → [`0089107c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/0089107c.md) FUN_0089107c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008900e8",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008900ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008910ac"
      ]
    ]
  ],
  "added": [
    [
      "00891094",
      "DATA",
      [
        "storage",
        "00c82da8",
        null,
        "undefined *"
      ]
    ],
    [
      "00891098",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008910ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 008900e0 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0089108c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008900e4 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 008900e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008900e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008900e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008900e8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 008900e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-ba37a2bd91aa4c58b55b4227d2760973"></a>

### [`0089012c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089012c.md) → [`008910d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/008910d8.md) FUN_008910d8

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
      "definition_site": "008910f0",
      "incomplete_value": false,
      "site": "008910f4",
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
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00890144",
      "incomplete_value": false,
      "site": "00890148",
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
            "const:dd8:8"
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
      "008910f4",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008910f4",
      "DATA",
      [
        "storage",
        "00c82da8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00890140 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 008910ec ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00890144 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 00890144 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00890144 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00890144 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008910f0 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 008910f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008910f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008910f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00890158 ["INT_ADD", "register:40f0:8", ["const:890158:8", "const:4:8"]]
- 00890158 ["CALL", null, ["callee:00c54d90:8"]]
+ 00891104 ["INT_ADD", "register:40f0:8", ["const:891104:8", "const:4:8"]]
+ 00891104 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-05e332975692479bf0faa8820ed0c619"></a>

### [`00890188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890188.md) → [`00891134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891134.md) FUN_00891134

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008901ac",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008901b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00891178"
      ]
    ]
  ],
  "added": [
    [
      "00891158",
      "DATA",
      [
        "storage",
        "00c82da8",
        null,
        "undefined *"
      ]
    ],
    [
      "00891160",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00891178"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089019c ["INT_ADD", "register:40f0:8", ["const:89019c:8", "const:4:8"]]
- 0089019c ["CALL", null, ["callee:00c58f30:8"]]
+ 00891148 ["INT_ADD", "register:40f0:8", ["const:891148:8", "const:4:8"]]
+ 00891148 ["CALL", null, ["callee:00c58f30:8"]]
- 008901a4 ["COPY", "register:4048:8", ["const:c81000:8"]]
+ 00891150 ["COPY", "register:4048:8", ["const:c82000:8"]]
- 008901a8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 008901a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008901a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008901a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8e2533b7ff73e010d7a9332cd6674864"></a>

### [`008901d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008901d8.md) → [`00891184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891184.md) FUN_00891184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008901e4",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008901ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008911b4"
      ]
    ],
    [
      "unmatched:008901f0",
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
      "00891190",
      "DATA",
      [
        "storage",
        "00c82da8",
        null,
        "undefined *"
      ]
    ],
    [
      "00891198",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008911b4"
      ]
    ],
    [
      "0089119c",
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
- 008901d8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 008901d8 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 008901d8 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 008901d8 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
- 008901dc ["COPY", "register:4048:8", ["const:c81000:8"]]
- 008901e0 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 008901e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008901e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008901e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cd96452a4a38702913368eaea1faf8ca"></a>

### [`0089020c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089020c.md) → [`008911b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/008911b8.md) FUN_008911b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0088fdf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fdf4.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00890da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890da0.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00890248",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008911f4",
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
- 00890228 ["INT_ADD", "register:40f0:8", ["const:890228:8", "const:4:8"]]
- 00890228 ["CALL", null, ["callee:00c54d90:8"]]
+ 008911d4 ["INT_ADD", "register:40f0:8", ["const:8911d4:8", "const:4:8"]]
+ 008911d4 ["CALL", null, ["callee:00c54d90:8"]]
- 0089022c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0089022c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008911d8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008911d8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00890244 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:10:8"]]
- 00890244 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4fa76a13ac81b2af5c5839601190c6d4"></a>

### [`0089025c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089025c.md) → [`00891208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891208.md) FUN_00891208

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0088fdf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fdf4.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00890da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890da0.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00890290",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0089123c",
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
- 00890270 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00890270 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0089121c ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 0089121c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0089027c ["INT_ADD", "register:40f0:8", ["const:89027c:8", "const:4:8"]]
- 0089027c ["CALL", null, ["callee:00c54d90:8"]]
+ 00891228 ["INT_ADD", "register:40f0:8", ["const:891228:8", "const:4:8"]]
+ 00891228 ["CALL", null, ["callee:00c54d90:8"]]
- 00890280 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00890280 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0089122c ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0089122c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-b7d5f85378baac95c76406b06b27c684"></a>

### [`008902d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008902d8.md) → [`00891284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891284.md) _INIT_166

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 72.88% / 新版 72.88%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008913e0",
      "incomplete_value": false,
      "site": "008913e4",
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
            "const:930:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00890434",
      "incomplete_value": true,
      "site": "00890438",
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
      "definition_site": "008913d0",
      "incomplete_value": false,
      "site": "008913e4",
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
                "const:930:8"
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0089045c",
      "incomplete_value": true,
      "site": "00890460",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00890308",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00890314",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00890330",
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
      "008912b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008912c0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008912dc",
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
- 00890438 ["INT_ADD", "register:40f0:8", ["const:890438:8", "const:4:8"]]
- 00890438 ["CALL", null, ["callee:0043bb58:8"]]
+ 008913e4 ["INT_ADD", "register:40f0:8", ["const:8913e4:8", "const:4:8"]]
+ 008913e4 ["CALL", null, ["callee:0043bb58:8"]]
- 00890460 ["INT_ADD", "register:40f0:8", ["const:890460:8", "const:4:8"]]
- 00890460 ["CALL", null, ["callee:0043bb58:8"]]
+ 0089140c ["INT_ADD", "register:40f0:8", ["const:89140c:8", "const:4:8"]]
+ 0089140c ["CALL", null, ["callee:0043bb58:8"]]
- 00890488 ["INT_ADD", "register:40f0:8", ["const:890488:8", "const:4:8"]]
- 00890488 ["CALL", null, ["callee:0043bb58:8"]]
+ 00891434 ["INT_ADD", "register:40f0:8", ["const:891434:8", "const:4:8"]]
+ 00891434 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-371098e27b4d63b7414cb0fa8cccec20"></a>

### [`00890668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890668.md) → [`00891614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891614.md) FUN_00891614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00890c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890c28.md) [`00891e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891e20.md) · 呼出先 3件 [`0058f474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f474.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)
- 新版 呼出元 2件 [`00891bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891bd4.md) [`00892dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892dcc.md) · 呼出先 3件 [`0058f794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f794.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c594d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008906ec",
      "incomplete_value": true,
      "site": "008906f8",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "008906f0",
      "incomplete_value": true,
      "site": "008906f8",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:0089066c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00890670",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00890690",
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
      "00891618",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0089161c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0089163c",
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
- 008906f8 ["INT_ADD", "register:40f0:8", ["const:8906f8:8", "const:4:8"]]
- 008906f8 ["CALL", null, ["callee:0058f794:8"]]
+ 008916a4 ["INT_ADD", "register:40f0:8", ["const:8916a4:8", "const:4:8"]]
+ 008916a4 ["CALL", null, ["callee:0058f794:8"]]
- 00890668 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 0089066c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0089066c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0089066c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 0089066c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b650ece5190f7765621fbbc8a7b1175c"></a>

### [`008907ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008907ac.md) → [`00891758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891758.md) FUN_00891758

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00890c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890c28.md) [`00890de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890de4.md) [`0089261c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/0089261c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00891bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891bd4.md) [`00891d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891d90.md) [`008935c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/008935c8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 54.81% / 新版 54.81%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 47件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00890a6c",
      "incomplete_value": true,
      "site": "00890a74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "live",
            "register:40c0:8"
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
      "definition_site": "00890a70",
      "incomplete_value": true,
      "site": "00890a74",
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
      "unmatched:008907f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00890800",
      "READ",
      [
        "storage",
        "002f323f",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00890804",
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
      "008917a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008917ac",
      "READ",
      [
        "storage",
        "002f327f",
        null,
        "string"
      ]
    ],
    [
      "008917b0",
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
- 00890a74 ["INT_ADD", "register:40f0:8", ["const:890a74:8", "const:4:8"]]
- 00890a74 ["CALL", null, ["callee:00891bd4:8"]]
+ 00891a20 ["INT_ADD", "register:40f0:8", ["const:891a20:8", "const:4:8"]]
+ 00891a20 ["CALL", null, ["callee:00891bd4:8"]]
- 008907e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:28:8"]]
- 008907e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008907e8 ["COPY", "register:40c0:8", ["const:0:8"]]
~~~


<a id="compare-be6eb5d3935b9f5e55c66bab5fa36460"></a>

### [`00890c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890c28.md) → [`00891bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891bd4.md) FUN_00891bd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008907ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008907ac.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00890668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890668.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00891758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891758.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00891614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891614.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.27% / 新版 87.27%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00891bf8",
      "incomplete_value": false,
      "site": "00891c00",
      "value": [
        "leaf",
        "const:70:8"
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
      "definition_site": "00891c28",
      "incomplete_value": true,
      "site": "00891c2c",
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
      "definition_site": "00891c24",
      "incomplete_value": true,
      "site": "00891c2c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00890c2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00890c30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00890c34",
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
      "00891bd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00891bdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00891be0",
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
- 00890c54 ["INT_ADD", "register:40f0:8", ["const:890c54:8", "const:4:8"]]
- 00890c54 ["CALL", null, ["callee:00c58f30:8"]]
+ 00891c00 ["INT_ADD", "register:40f0:8", ["const:891c00:8", "const:4:8"]]
+ 00891c00 ["CALL", null, ["callee:00c58f30:8"]]
- 00890c80 ["INT_ADD", "register:40f0:8", ["const:890c80:8", "const:4:8"]]
- 00890c80 ["CALL", null, ["callee:0043be80:8"]]
+ 00891c2c ["INT_ADD", "register:40f0:8", ["const:891c2c:8", "const:4:8"]]
+ 00891c2c ["CALL", null, ["callee:0043be80:8"]]
- 00890c98 ["INT_ADD", "register:40f0:8", ["const:890c98:8", "const:4:8"]]
- 00890c98 ["CALL", null, ["callee:00891614:8"]]
+ 00891c44 ["INT_ADD", "register:40f0:8", ["const:891c44:8", "const:4:8"]]
+ 00891c44 ["CALL", null, ["callee:00891614:8"]]
~~~


<a id="compare-47439e56fc656810647a63e7130a440a"></a>

### [`00890de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890de4.md) → [`00891d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891d90.md) FUN_00891d90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008907ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008907ac.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00891758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891758.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00891e6c",
      "incomplete_value": true,
      "site": "00891e70",
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
                "const:118:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00890ec4 ["INT_ADD", "register:40f0:8", ["const:890ec4:8", "const:4:8"]]
- 00890ec4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00891e70 ["INT_ADD", "register:40f0:8", ["const:891e70:8", "const:4:8"]]
+ 00891e70 ["CALL", null, ["callee:00c58f50:8"]]
- 00890df8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00890df8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00890df8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00890df8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00891da4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00891da4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00891da4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00891da4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00890e00 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00890e00 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00890e00 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00890e00 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00891dac ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00891dac ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00891dac ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00891dac ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-0d3243231ad5286556fc9966720d7b9c"></a>

### [`00891038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891038.md) → [`00891fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891fe4.md) FUN_00891fe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084876c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/0084876c.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`00854944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854944.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00849718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849718.md) [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) [`008558f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/008558f0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 57.33% / 新版 57.33%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008920cc",
      "incomplete_value": true,
      "site": "008920d0",
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
                "const:10:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00891054"
      ],
      [
        "FALL_THROUGH",
        "00892000"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00892000",
      "incomplete_value": true,
      "site": "00892004",
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
    "old": {
      "definition_site": "00891054",
      "incomplete_value": true,
      "site": "00891058",
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
      "unmatched:00891038",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0089103c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00891040",
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
      "00891fe4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00891fe8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00891fec",
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
- 00891124 ["INT_ADD", "register:40f0:8", ["const:891124:8", "const:4:8"]]
- 00891124 ["CALL", null, ["callee:00c58f50:8"]]
+ 008920d0 ["INT_ADD", "register:40f0:8", ["const:8920d0:8", "const:4:8"]]
+ 008920d0 ["CALL", null, ["callee:00c58f50:8"]]
- 00891038 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00891038 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00891038 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00891038 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0089103c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0089103c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0089103c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0089103c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6c6b553b365f80db14ea5cf4e32326e6"></a>

### [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) → [`00892308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892308.md) FUN_00892308

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) · 呼出先 23件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00892f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892f64.md) · 呼出先 23件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.38% / 新版 84.38%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0089264c",
      "incomplete_value": false,
      "site": "0089264c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008916a0",
      "incomplete_value": false,
      "site": "008916a0",
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
            "const:f8:8"
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00892688",
      "incomplete_value": true,
      "site": "008926a4",
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
    "old": {
      "definition_site": "008916dc",
      "incomplete_value": true,
      "site": "008916f8",
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
            "const:2f08:8"
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
      "definition_site": "008918a4",
      "incomplete_value": true,
      "site": "008918a8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 25,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00891394",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00891398",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b3a1a4"
      ]
    ],
    [
      "unmatched:0089139c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0089243c"
      ]
    ]
  ],
  "added": [
    [
      "00892340",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00892344",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b3a1a4"
      ]
    ],
    [
      "00892348",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0089243c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008916f8 ["INT_ADD", "register:40f0:8", ["const:8916f8:8", "const:4:8"]]
- 008916f8 ["CALL", null, ["callee:008bb86c:8"]]
+ 008926a4 ["INT_ADD", "register:40f0:8", ["const:8926a4:8", "const:4:8"]]
+ 008926a4 ["CALL", null, ["callee:008bb86c:8"]]
- 008918a8 ["INT_ADD", "register:40f0:8", ["const:8918a8:8", "const:4:8"]]
- 008918a8 ["CALL", null, ["callee:00893d0c:8"]]
+ 00892854 ["INT_ADD", "register:40f0:8", ["const:892854:8", "const:4:8"]]
+ 00892854 ["CALL", null, ["callee:00893d0c:8"]]
- 008918c0 ["INT_ADD", "register:40f0:8", ["const:8918c0:8", "const:4:8"]]
- 008918c0 ["CALL", null, ["callee:008935c8:8"]]
+ 0089286c ["INT_ADD", "register:40f0:8", ["const:89286c:8", "const:4:8"]]
+ 0089286c ["CALL", null, ["callee:008935c8:8"]]
~~~


<a id="compare-08c2af6919faf4f27361ac9fc76cbcb3"></a>

### [`00891a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891a64.md) → [`00892a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892a10.md) FUN_00892a10

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b391b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b391b0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 3件 [`00892f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892f64.md) [`00894dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894dc0.md) [`0089e4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089e/0089e4cc.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b3a1a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a1a4.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.30% / 新版 97.30%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00892b08",
      "DATA",
      [
        "storage",
        "00436b50",
        "fde_00436b50",
        "dword"
      ]
    ],
    [
      "00892b0c",
      "READ",
      [
        "storage",
        "002f32f8",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:00891b68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892b20"
      ]
    ]
  ],
  "added": [
    [
      "00892b08",
      "DATA",
      [
        "storage",
        "00436b50",
        null,
        "byte[47]"
      ]
    ],
    [
      "00892b0c",
      "READ",
      [
        "storage",
        "002f3338",
        null,
        "undefined4"
      ]
    ],
    [
      "00892b14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892b20"
      ]
    ]
  ]
}
~~~


~~~diff
- 00891a80 ["INT_ADD", "register:40f0:8", ["const:891a80:8", "const:4:8"]]
- 00891a80 ["CALL", null, ["callee:00b3a1a4:8"]]
+ 00892a2c ["INT_ADD", "register:40f0:8", ["const:892a2c:8", "const:4:8"]]
+ 00892a2c ["CALL", null, ["callee:00b3a1a4:8"]]
- 00891abc ["INT_ADD", "register:40f0:8", ["const:891abc:8", "const:4:8"]]
- 00891abc ["CALL", null, ["callee:00c590f0:8"]]
+ 00892a68 ["INT_ADD", "register:40f0:8", ["const:892a68:8", "const:4:8"]]
+ 00892a68 ["CALL", null, ["callee:00c590f0:8"]]
- 00891ac0 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
- 00891ac0 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00892a6c ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
+ 00892a6c ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
~~~


<a id="compare-39fb2ad281c294859b1d536067018875"></a>

### [`00891b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891b8c.md) → [`00892b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892b38.md) FUN_00892b38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00854c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c7c.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

アドレスに依存する影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00891bb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892b48"
      ]
    ]
  ],
  "added": [
    [
      "00892b60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892b48"
      ]
    ]
  ]
}
~~~


~~~diff
- 00891b94 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 00892b40 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 00891ba8 ["INT_ZEXT", "register:4000:8", ["register:101:1"]]
- 00891bac ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00891bac ["COPY", "tmp:1:1", ["tmp:0:1"]]
- 00891bac ["COPY", "tmp:2:1", ["const:4:1"]]
- 00891bac ["INT_AND", "tmp:3:1", ["tmp:2:1", "const:8:1"]]
~~~


<a id="compare-659063c587b93e30007ec6eb677e3fb0"></a>

### [`00891bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891bc4.md) → [`00892b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892b70.md) FUN_00892b70

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) [`00892494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892494.md) [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) [`008932f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932f4.md) · 呼出先 9件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00892ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892ce8.md) [`00892cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892cec.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md)
- 新版 呼出元 4件 [`00892f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892f64.md) [`00893440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893440.md) [`00894150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894150.md) [`008942a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008942a0.md) · 呼出先 9件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00893c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893c94.md) [`00893c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893c98.md) [`008ba85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba85c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 60.34% / 新版 60.34%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00891d0c",
      "incomplete_value": true,
      "site": "00891d24",
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00891d10",
      "incomplete_value": true,
      "site": "00891d24",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00891d18",
      "incomplete_value": false,
      "site": "00891d24",
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
      "00892b9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892c20"
      ]
    ],
    [
      "unmatched:00891bf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892bec"
      ]
    ],
    [
      "unmatched:00891bf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892c84"
      ]
    ]
  ],
  "added": [
    [
      "00892b94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892c20"
      ]
    ],
    [
      "00892b9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892bec"
      ]
    ],
    [
      "00892ba4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00892c84"
      ]
    ]
  ]
}
~~~


~~~diff
- 00891d24 ["INT_ADD", "register:40f0:8", ["const:891d24:8", "const:4:8"]]
- 00891d24 ["CALL", null, ["callee:008bbccc:8"]]
+ 00892cd0 ["INT_ADD", "register:40f0:8", ["const:892cd0:8", "const:4:8"]]
+ 00892cd0 ["CALL", null, ["callee:008bbccc:8"]]
- 00891be8 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
+ 00892b9c ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
- 00891bec ["COPY", "tmp:0:4", ["const:2:4"]]
- 00891bec ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4008:4"]]
- 00891bec ["INT_SBORROW", "register:106:1", ["register:4008:4", "const:2:4"]]
- 00891bec ["INT_SUB", "tmp:1:4", ["register:4008:4", "tmp:0:4"]]
~~~


<a id="compare-e391094fc8e9e148379a7b5c044189ec"></a>

### [`00891e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891e20.md) → [`00892dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892dcc.md) FUN_00892dcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00890668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890668.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00892308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892308.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00891614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891614.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.78% / 新版 91.78%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00891ec4",
      "incomplete_value": true,
      "site": "00891ed4",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00891e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00891e70",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "00892e50",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00892e30"
      ]
    ]
  ],
  "added": [
    [
      "00892e18",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "00892e1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "00892e20",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00892e30"
      ]
    ]
  ]
}
~~~


~~~diff
- 00891ed4 ["INT_ADD", "register:40f0:8", ["const:891ed4:8", "const:4:8"]]
- 00891ed4 ["CALL", null, ["callee:00891614:8"]]
+ 00892e80 ["INT_ADD", "register:40f0:8", ["const:892e80:8", "const:4:8"]]
+ 00892e80 ["CALL", null, ["callee:00891614:8"]]
- 00891e44 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 00891e44 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00891e54 ["INT_ADD", "register:40f0:8", ["const:891e54:8", "const:4:8"]]
- 00891e54 ["CALL", null, ["callee:00c58f30:8"]]
+ 00892e00 ["INT_ADD", "register:40f0:8", ["const:892e00:8", "const:4:8"]]
+ 00892e00 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-4df7d4aef65f5bf5a763b49f17993141"></a>

### [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) → [`00892f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892f64.md) FUN_00892f64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00892f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892f04.md) [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) · 呼出先 16件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce60.md) [`0047ce68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce68.md) [`0058f474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f474.md)
- 新版 呼出元 3件 [`00893eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893eb0.md) [`00894dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894dc0.md) [`0089e4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089e/0089e4cc.md) · 呼出先 16件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d180.md) [`0047d188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d188.md) [`0058f794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f794.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 94.46% / 新版 94.46%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 2件, `store_value` 2件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893294",
      "incomplete_value": false,
      "site": "0089329c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:2c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008922e8",
      "incomplete_value": false,
      "site": "008922f0",
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
            "const:2f8:8"
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
      "definition_site": "008932a8",
      "incomplete_value": false,
      "site": "008932a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:348:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008922fc",
      "incomplete_value": false,
      "site": "008922fc",
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
            "const:378:8"
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
    "new": null,
    "old": {
      "definition_site": "00892104",
      "incomplete_value": true,
      "site": "0089210c",
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
                "const:10:8"
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
      "unmatched:008920b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00893164"
      ]
    ],
    [
      "unmatched:0089211c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00893164"
      ]
    ],
    [
      "unmatched:0089218c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008923cc"
      ]
    ]
  ],
  "added": [
    [
      "00893060",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00893164"
      ]
    ],
    [
      "008930c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00893164"
      ]
    ],
    [
      "00893138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00893378"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089210c ["INT_ADD", "register:40f0:8", ["const:89210c:8", "const:4:8"]]
- 0089210c ["CALL", null, ["callee:00c590f0:8"]]
+ 008930b8 ["INT_ADD", "register:40f0:8", ["const:8930b8:8", "const:4:8"]]
+ 008930b8 ["CALL", null, ["callee:00c590f0:8"]]
- 00892218 ["INT_ADD", "register:40f0:8", ["const:892218:8", "const:4:8"]]
- 00892218 ["CALL", null, ["callee:00892308:8"]]
+ 008931c4 ["INT_ADD", "register:40f0:8", ["const:8931c4:8", "const:4:8"]]
+ 008931c4 ["CALL", null, ["callee:00892308:8"]]
- 00892284 ["INT_ADD", "register:40f0:8", ["const:892284:8", "const:4:8"]]
- 00892284 ["CALL", null, ["callee:0058f794:8"]]
+ 00893230 ["INT_ADD", "register:40f0:8", ["const:893230:8", "const:4:8"]]
+ 00893230 ["CALL", null, ["callee:0058f794:8"]]
~~~


<a id="compare-ac78b8d8c41b76bcdd18e3bf8a92cd07"></a>

### [`00892494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892494.md) → [`00893440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893440.md) FUN_00893440

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 7件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00891bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891bc4.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008bb568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb568.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 7件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00892b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892b70.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008bc514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc514.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.73% / 新版 86.73%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00892498",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0089249c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008924a0",
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
      "00893444",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00893448",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0089344c",
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
- 00892494 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 00892498 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00892498 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5100:8"]]
- 0089249c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0089249c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0089249c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0089249c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-15af3a5d666207ea38dd1ae61ddff50a"></a>

### [`0089261c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/0089261c.md) → [`008935c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/008935c8.md) FUN_008935c8

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008907ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008907ac.md) [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`00891758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891758.md) [`00892308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892308.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008935d4",
      "incomplete_value": false,
      "site": "008935d8",
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
      "definition_site": "00892628",
      "incomplete_value": false,
      "site": "0089262c",
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
      "008935d4",
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
      "008935d4",
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
- 0089262c ["INT_ADD", "register:40f0:8", ["const:89262c:8", "const:4:8"]]
- 0089262c ["CALL", null, ["callee:0043bad8:8"]]
+ 008935d8 ["INT_ADD", "register:40f0:8", ["const:8935d8:8", "const:4:8"]]
+ 008935d8 ["CALL", null, ["callee:0043bad8:8"]]
- 00892624 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008935d0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00892628 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00892628 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00892628 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00892628 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008935d4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008935d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008935d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008935d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-37f193893423c144ec5d8f2d32ca29f6"></a>

### [`00892634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892634.md) → [`008935e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/008935e0.md) FUN_008935e0

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
      "unmatched:00892634",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00892640",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:0089264c",
      "DATA",
      [
        "storage",
        "00c81e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008935e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008935ec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "008935f8",
      "DATA",
      [
        "storage",
        "00c82e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892634 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00892634 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00892634 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00892634 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00892638 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0089263c ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-7e45d99569e708be54e8aa37aeff9d0a"></a>

### [`00892670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892670.md) → [`0089361c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/0089361c.md) FUN_0089361c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`008927b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/008927b4.md) [`008927b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/008927b8.md) [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00893760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893760.md) [`00893764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893764.md) [`00b3b648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b648.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 70.27% / 新版 70.27%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893648",
      "incomplete_value": false,
      "site": "00893650",
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
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089269c",
      "incomplete_value": false,
      "site": "008926a4",
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
            "const:ee8:8"
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
      "unmatched:00892674",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00892678",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00892688",
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
      "00893620",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00893624",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00893634",
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
- 00892670 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 00892674 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00892674 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00892674 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00892674 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00892678 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00892678 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00892678 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00892678 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-81825bdc232bdb997cb267b75768a85f"></a>

### [`00892780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892780.md) → [`0089372c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/0089372c.md) FUN_0089372c

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
      "unmatched:00892798",
      "DATA",
      [
        "storage",
        "00c81ee8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0089279c",
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
      "00893744",
      "DATA",
      [
        "storage",
        "00c82eb8",
        null,
        "undefined *"
      ]
    ],
    [
      "00893748",
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
- 0089278c ["INT_ADD", "register:40f0:8", ["const:89278c:8", "const:4:8"]]
- 0089278c ["CALL", null, ["callee:00c58f30:8"]]
+ 00893738 ["INT_ADD", "register:40f0:8", ["const:893738:8", "const:4:8"]]
+ 00893738 ["CALL", null, ["callee:00c58f30:8"]]
- 00892790 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 0089373c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00892794 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 00892794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6fa129e3bd95019ee0098db2eae1b16c"></a>

### [`008927a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/008927a4.md) → [`00893750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893750.md) FUN_00893750

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
      "definition_site": "00893754",
      "incomplete_value": false,
      "site": "00893758",
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
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008927a8",
      "incomplete_value": false,
      "site": "008927ac",
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
      "00893758",
      "DATA",
      [
        "storage",
        "00c81ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893758",
      "DATA",
      [
        "storage",
        "00c82eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008927a4 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00893750 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008927a8 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 008927a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008927a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008927a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00893754 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 00893754 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00893754 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00893754 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58c444edd3e7a91704fdb07357c1615a"></a>

### [`008927bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/008927bc.md) → [`00893768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893768.md) FUN_00893768

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.31% / 新版 84.31%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00893794",
      "incomplete_value": false,
      "site": "008937a0",
      "value": [
        "leaf",
        "const:16:8"
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
      "definition_site": "00893798",
      "incomplete_value": true,
      "site": "008937a0",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00892848",
      "incomplete_value": true,
      "site": "0089284c",
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
      "unmatched:008927c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008927c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008927c8",
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
      "0089376c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00893770",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00893774",
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
- 008927f4 ["INT_ADD", "register:40f0:8", ["const:8927f4:8", "const:4:8"]]
- 008927f4 ["CALL", null, ["callee:0071c868:8"]]
+ 008937a0 ["INT_ADD", "register:40f0:8", ["const:8937a0:8", "const:4:8"]]
+ 008937a0 ["CALL", null, ["callee:0071c868:8"]]
- 0089284c ["INT_ADD", "register:40f0:8", ["const:89284c:8", "const:4:8"]]
- 0089284c ["CALL", null, ["callee:0048d1b4:8"]]
+ 008937f8 ["INT_ADD", "register:40f0:8", ["const:8937f8:8", "const:4:8"]]
+ 008937f8 ["CALL", null, ["callee:0048d1b4:8"]]
- 008928f4 ["INT_ADD", "register:40f0:8", ["const:8928f4:8", "const:4:8"]]
- 008928f4 ["CALL", null, ["callee:00448254:8"]]
+ 008938a0 ["INT_ADD", "register:40f0:8", ["const:8938a0:8", "const:4:8"]]
+ 008938a0 ["CALL", null, ["callee:00448254:8"]]
~~~


<a id="compare-75b9f7299333b7b20a0e6e5738ce769e"></a>

### [`00892b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892b64.md) → [`00893b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893b10.md) FUN_00893b10

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
      "definition_site": "00892b6c",
      "incomplete_value": false,
      "site": "00892b70",
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
      "unmatched:00892b7c",
      "DATA",
      [
        "storage",
        "00c81f58",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00892b80",
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
      "00893b28",
      "DATA",
      [
        "storage",
        "00c82f28",
        null,
        "undefined *"
      ]
    ],
    [
      "00893b2c",
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
- 00892b70 ["INT_ADD", "register:40f0:8", ["const:892b70:8", "const:4:8"]]
- 00892b70 ["CALL", null, ["callee:00c58f30:8"]]
+ 00893b1c ["INT_ADD", "register:40f0:8", ["const:893b1c:8", "const:4:8"]]
+ 00893b1c ["CALL", null, ["callee:00c58f30:8"]]
- 00892b74 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00893b20 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00892b78 ["COPY", "tmp:0:8", ["const:f58:8"]]
- 00892b78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892b78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892b78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f2ec7a10698362f56ddcb70da1f06943"></a>

### [`00892b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892b88.md) → [`00893b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893b34.md) FUN_00893b34

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
      "definition_site": "00893b38",
      "incomplete_value": false,
      "site": "00893b3c",
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
            "const:f28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892b8c",
      "incomplete_value": false,
      "site": "00892b90",
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
            "const:f58:8"
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
      "00893b3c",
      "DATA",
      [
        "storage",
        "00c81f58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893b3c",
      "DATA",
      [
        "storage",
        "00c82f28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892b88 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00893b34 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00892b8c ["COPY", "tmp:0:8", ["const:f58:8"]]
- 00892b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00893b38 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 00893b38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00893b38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00893b38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9c5db9f6af4fdd2b1cd5c3c017d8e07f"></a>

### [`00892ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892ba0.md) → [`00893b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893b4c.md) FUN_00893b4c

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
      "site": "00893b70",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00892bc4",
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
      "00893b70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00893b70",
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
- 00892bc4 ["INT_ADD", "register:40f0:8", ["const:892bc4:8", "const:4:8"]]
- 00892bc4 ["CALL", null, ["ram:47ad34:8"]]
+ 00893b70 ["INT_ADD", "register:40f0:8", ["const:893b70:8", "const:4:8"]]
+ 00893b70 ["CALL", null, ["ram:47b054:8"]]
- 00892bd0 ["INT_ADD", "register:40f0:8", ["const:892bd0:8", "const:4:8"]]
- 00892bd0 ["CALL", null, ["callee:0047d134:8"]]
+ 00893b7c ["INT_ADD", "register:40f0:8", ["const:893b7c:8", "const:4:8"]]
+ 00893b7c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-af79b26b5e79e751d6dc6e970c3d74e3"></a>

### [`00892c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892c14.md) → [`00893bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893bc0.md) FUN_00893bc0

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
      "definition_site": "00893bd4",
      "incomplete_value": false,
      "site": "00893bd8",
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
            "const:fc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892c28",
      "incomplete_value": false,
      "site": "00892c2c",
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
            "const:ff8:8"
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
      "00893bd8",
      "DATA",
      [
        "storage",
        "00c81ff8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893bd8",
      "DATA",
      [
        "storage",
        "00c82fc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892c20 ["INT_ADD", "register:40f0:8", ["const:892c20:8", "const:4:8"]]
- 00892c20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00893bcc ["INT_ADD", "register:40f0:8", ["const:893bcc:8", "const:4:8"]]
+ 00893bcc ["CALL", null, ["callee:00c58f30:8"]]
- 00892c24 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00893bd0 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00892c28 ["COPY", "tmp:0:8", ["const:ff8:8"]]
- 00892c28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892c28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892c28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00893bd4 ["COPY", "tmp:0:8", ["const:fc8:8"]]
+ 00893bd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00893bd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00893bd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c89cd2cf9bdbb4ed63cbd100489145dc"></a>

### [`00892c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892c50.md) → [`00893bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893bfc.md) FUN_00893bfc

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`00727a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727a28.md) [`00b3931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3931c.md) [`00b3a48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a48c.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md) [`00727dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727dd8.md) [`00b3a310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a310.md) [`00b3b480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b480.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.86% / 新版 92.86%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00892c74",
      "PARAM",
      [
        "storage",
        "011239a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00893c20",
      "PARAM",
      [
        "storage",
        "01124960",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892c64 ["INT_ADD", "register:40f0:8", ["const:892c64:8", "const:4:8"]]
- 00892c64 ["CALL", null, ["callee:0066d4cc:8"]]
+ 00893c10 ["INT_ADD", "register:40f0:8", ["const:893c10:8", "const:4:8"]]
+ 00893c10 ["CALL", null, ["callee:0066d4cc:8"]]
- 00892c68 ["INT_ADD", "register:40f0:8", ["const:892c68:8", "const:4:8"]]
- 00892c68 ["CALL", null, ["callee:00727dd8:8"]]
+ 00893c14 ["INT_ADD", "register:40f0:8", ["const:893c14:8", "const:4:8"]]
+ 00893c14 ["CALL", null, ["callee:00727dd8:8"]]
- 00892c6c ["INT_ADD", "register:40f0:8", ["const:892c6c:8", "const:4:8"]]
- 00892c6c ["CALL", null, ["callee:00b3a310:8"]]
+ 00893c18 ["INT_ADD", "register:40f0:8", ["const:893c18:8", "const:4:8"]]
+ 00893c18 ["CALL", null, ["callee:00b3a310:8"]]
~~~


<a id="compare-d36a3e0e3112c5c40415a5bffc083723"></a>

### [`00892cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892cb4.md) → [`00893c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893c60.md) FUN_00893c60

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
      "unmatched:00892ccc",
      "DATA",
      [
        "storage",
        "00c82078",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00892cd0",
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
      "00893c78",
      "DATA",
      [
        "storage",
        "00c83048",
        null,
        "undefined *"
      ]
    ],
    [
      "00893c7c",
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
- 00892cc0 ["INT_ADD", "register:40f0:8", ["const:892cc0:8", "const:4:8"]]
- 00892cc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00893c6c ["INT_ADD", "register:40f0:8", ["const:893c6c:8", "const:4:8"]]
+ 00893c6c ["CALL", null, ["callee:00c58f30:8"]]
- 00892cc4 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 00893c70 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 00892cc8 ["COPY", "tmp:0:8", ["const:78:8"]]
- 00892cc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892cc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892cc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e29a267213f6a31926b046964001a0aa"></a>

### [`00892cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892cd8.md) → [`00893c84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893c84.md) FUN_00893c84

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
      "unmatched:00892ce0",
      "DATA",
      [
        "storage",
        "00c82078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893c8c",
      "DATA",
      [
        "storage",
        "00c83048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892cd8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00892cdc ["COPY", "tmp:0:8", ["const:78:8"]]
- 00892cdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892cdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892cdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00892ce0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00892ce0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-18244c72b5a01a85fcbcecb21e77a9bf"></a>

### [`00892cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892cf0.md) → [`00893c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893c9c.md) FUN_00893c9c

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
      "site": "00893cc0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00892d14",
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
      "00893cc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00893cc0",
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
- 00892d14 ["INT_ADD", "register:40f0:8", ["const:892d14:8", "const:4:8"]]
- 00892d14 ["CALL", null, ["ram:47ad34:8"]]
+ 00893cc0 ["INT_ADD", "register:40f0:8", ["const:893cc0:8", "const:4:8"]]
+ 00893cc0 ["CALL", null, ["ram:47b054:8"]]
- 00892d20 ["INT_ADD", "register:40f0:8", ["const:892d20:8", "const:4:8"]]
- 00892d20 ["CALL", null, ["callee:0047d134:8"]]
+ 00893ccc ["INT_ADD", "register:40f0:8", ["const:893ccc:8", "const:4:8"]]
+ 00893ccc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-63087f385abc7d484fa8d8ae6479b594"></a>

### [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) → [`00893d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d0c.md) FUN_00893d0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) [`00892f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892f04.md) [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) [`008932f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932f4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 7件 [`00892308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892308.md) [`00892f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892f64.md) [`00893eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893eb0.md) [`00894150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894150.md) [`008942a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008942a0.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00893d18",
      "incomplete_value": false,
      "site": "00893d1c",
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
      "definition_site": "00892d6c",
      "incomplete_value": false,
      "site": "00892d70",
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
      "00893d18",
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
      "00893d18",
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
- 00892d70 ["INT_ADD", "register:40f0:8", ["const:892d70:8", "const:4:8"]]
- 00892d70 ["CALL", null, ["callee:00442c90:8"]]
+ 00893d1c ["INT_ADD", "register:40f0:8", ["const:893d1c:8", "const:4:8"]]
+ 00893d1c ["CALL", null, ["callee:00442c90:8"]]
- 00892d68 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00893d14 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00892d6c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00892d6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00892d6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00892d6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00893d18 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00893d18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00893d18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00893d18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4d66bc6933c139923d2aacbd760b9180"></a>

### [`00892d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d74.md) → [`00893d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d20.md) FUN_00893d20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893d28",
      "incomplete_value": false,
      "site": "00893d2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892d7c",
      "incomplete_value": false,
      "site": "00892d80",
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
      "00893d2c",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893d2c",
      "DATA",
      [
        "storage",
        "00c830c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892d78 ["COPY", "register:4048:8", ["const:c82000:8"]]
+ 00893d24 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 00892d7c ["COPY", "tmp:0:8", ["const:f8:8"]]
- 00892d7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00892d7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00892d7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00893d28 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 00893d28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00893d28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00893d28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-95c573570639fe652e9bdc9be255c2f3"></a>

### [`00892d94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d94.md) → [`00893d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d40.md) FUN_00893d40

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
      "definition_site": "00893d48",
      "incomplete_value": false,
      "site": "00893d4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892d9c",
      "incomplete_value": false,
      "site": "00892da0",
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
      "00893d4c",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893d4c",
      "DATA",
      [
        "storage",
        "00c830c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892d98 ["COPY", "register:4048:8", ["const:c82000:8"]]
+ 00893d44 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 00892d9c ["COPY", "tmp:0:8", ["const:f8:8"]]
- 00892d9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00892d9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00892d9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00893d48 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 00893d48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00893d48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00893d48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00892dc0 ["INT_ADD", "register:40f0:8", ["const:892dc0:8", "const:4:8"]]
- 00892dc0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00893d6c ["INT_ADD", "register:40f0:8", ["const:893d6c:8", "const:4:8"]]
+ 00893d6c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7d4e2446d427f62b50bc54a8ad74eebe"></a>

### [`00892dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892dd4.md) → [`00893d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d80.md) FUN_00893d80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893db0",
      "incomplete_value": false,
      "site": "00893db0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892e04",
      "incomplete_value": false,
      "site": "00892e04",
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
      "00893db0",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893db0",
      "DATA",
      [
        "storage",
        "00c830c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892de8 ["INT_ADD", "register:40f0:8", ["const:892de8:8", "const:4:8"]]
- 00892de8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00893d94 ["INT_ADD", "register:40f0:8", ["const:893d94:8", "const:4:8"]]
+ 00893d94 ["CALL", null, ["callee:00c58f30:8"]]
- 00892df4 ["COPY", "register:4058:8", ["const:c82000:8"]]
+ 00893da0 ["COPY", "register:4058:8", ["const:c83000:8"]]
- 00892df8 ["COPY", "tmp:0:8", ["const:f8:8"]]
- 00892df8 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00892df8 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00892df8 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
+ 00893da4 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 00893da4 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
+ 00893da4 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
+ 00893da4 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
~~~


<a id="compare-4810b404bae557c513c3e0de2fb861bd"></a>

### [`00892e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892e58.md) → [`00893e04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893e04.md) FUN_00893e04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893e24",
      "incomplete_value": false,
      "site": "00893e24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892e78",
      "incomplete_value": false,
      "site": "00892e78",
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
      "00893e24",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893e24",
      "DATA",
      [
        "storage",
        "00c830c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892e68 ["COPY", "register:4048:8", ["const:c82000:8"]]
+ 00893e14 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 00892e6c ["COPY", "tmp:0:8", ["const:f8:8"]]
- 00892e6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00892e6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00892e6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00893e18 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 00893e18 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00893e18 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00893e18 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00892e74 ["COPY", "register:40a0:8", ["register:4000:8"]]
~~~


<a id="compare-0a5ad383cc4bef11547661cf4c1c3213"></a>

### [`00892f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892f04.md) → [`00893eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893eb0.md) FUN_00893eb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00892f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892f64.md) [`00893d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d0c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.03% / 新版 81.03%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00892f08",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00892f0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00892f10",
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
      "00893eb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00893eb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00893ebc",
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
- 00892f04 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 00892f08 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00892f08 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00892f08 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00892f08 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00892f0c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:50:8"]]
- 00892f0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
~~~


<a id="compare-959287ff53f49ba0c6141c11a3ac7c77"></a>

### [`0089314c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/0089314c.md) → [`008940f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008940f8.md) FUN_008940f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0089314c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00893150",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00893170",
      "DATA",
      [
        "storage",
        "00c82178",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008940f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008940fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0089411c",
      "DATA",
      [
        "storage",
        "00c83148",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089314c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0089314c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0089314c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0089314c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00893150 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00893150 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00893154 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-9b9dfb6c9808a39b0d5aee8c52a3e980"></a>

### [`00893184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893184.md) → [`00894130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894130.md) FUN_00894130

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
      "unmatched:0089318c",
      "DATA",
      [
        "storage",
        "00c82178",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00894138",
      "DATA",
      [
        "storage",
        "00c83148",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893184 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00893188 ["COPY", "tmp:0:8", ["const:178:8"]]
- 00893188 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893188 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893188 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0089318c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0089318c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-65aecc8753b6b34f4df333fb059d5cb7"></a>

### [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) → [`00894150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894150.md) FUN_00894150

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00891bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891bc4.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00892b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892b70.md) [`00893d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d0c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.16% / 新版 92.16%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008941b0",
      "incomplete_value": false,
      "site": "008941b4",
      "value": [
        "leaf",
        "const:2:8"
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 2
  }
]
~~~


~~~diff
- 00893208 ["INT_ADD", "register:40f0:8", ["const:893208:8", "const:4:8"]]
- 00893208 ["CALL", null, ["callee:00892b70:8"]]
+ 008941b4 ["INT_ADD", "register:40f0:8", ["const:8941b4:8", "const:4:8"]]
+ 008941b4 ["CALL", null, ["callee:00892b70:8"]]
- 008931c4 ["INT_ADD", "register:40f0:8", ["const:8931c4:8", "const:4:8"]]
- 008931c4 ["CALL", null, ["callee:00b3a6a4:8"]]
+ 00894170 ["INT_ADD", "register:40f0:8", ["const:894170:8", "const:4:8"]]
+ 00894170 ["CALL", null, ["callee:00b3a6a4:8"]]
- 008931c8 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 008931c8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008931c8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008931c8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00894174 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00894174 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00894174 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00894174 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-5fddadd550c36a6faa2a4ca4862ae45f"></a>

### [`0089329c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/0089329c.md) → [`00894248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894248.md) FUN_00894248

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
      "unmatched:008932c0",
      "DATA",
      [
        "storage",
        "00c821f8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008932c8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008932cc",
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
      "0089426c",
      "DATA",
      [
        "storage",
        "00c831c8",
        null,
        "undefined *"
      ]
    ],
    [
      "00894274",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00894278",
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
- 008932b0 ["INT_ADD", "register:40f0:8", ["const:8932b0:8", "const:4:8"]]
- 008932b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0089425c ["INT_ADD", "register:40f0:8", ["const:89425c:8", "const:4:8"]]
+ 0089425c ["CALL", null, ["callee:00c58f30:8"]]
- 008932b8 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 00894264 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008932bc ["COPY", "tmp:0:8", ["const:1f8:8"]]
- 008932bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008932bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008932bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-330d22abc07dfb09f12ce12591fa2345"></a>

### [`008932d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932d4.md) → [`00894280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894280.md) FUN_00894280

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
      "definition_site": "00894284",
      "incomplete_value": false,
      "site": "00894288",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008932d8",
      "incomplete_value": false,
      "site": "008932dc",
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
            "const:1f8:8"
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
      "00894288",
      "DATA",
      [
        "storage",
        "00c821f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00894288",
      "DATA",
      [
        "storage",
        "00c831c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008932d4 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 00894280 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008932d8 ["COPY", "tmp:0:8", ["const:1f8:8"]]
- 008932d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008932d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008932d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00894284 ["COPY", "tmp:0:8", ["const:1c8:8"]]
+ 00894284 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00894284 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00894284 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2eceedf94bfb384fe9c483a93fc6cc56"></a>

### [`008932f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932f4.md) → [`008942a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008942a0.md) FUN_008942a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00891bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891bc4.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00892b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892b70.md) [`00893d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d0c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0089330c ["INT_ADD", "register:40f0:8", ["const:89330c:8", "const:4:8"]]
- 0089330c ["CALL", null, ["callee:00b3a880:8"]]
+ 008942b8 ["INT_ADD", "register:40f0:8", ["const:8942b8:8", "const:4:8"]]
+ 008942b8 ["CALL", null, ["callee:00b3a880:8"]]
- 00893314 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00893314 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 008942c0 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008942c0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00893318 ["INT_ADD", "register:40f0:8", ["const:893318:8", "const:4:8"]]
- 00893318 ["CALL", null, ["callee:008524fc:8"]]
+ 008942c4 ["INT_ADD", "register:40f0:8", ["const:8942c4:8", "const:4:8"]]
+ 008942c4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-048b10439e85e889a2227fcc768e7a78"></a>

### [`008933e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008933e8.md) → [`00894394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894394.md) FUN_00894394

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
      "unmatched:0089340c",
      "DATA",
      [
        "storage",
        "00c82278",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00893414",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00893418",
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
      "008943b8",
      "DATA",
      [
        "storage",
        "00c83248",
        null,
        "undefined *"
      ]
    ],
    [
      "008943c0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008943c4",
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
- 008933fc ["INT_ADD", "register:40f0:8", ["const:8933fc:8", "const:4:8"]]
- 008933fc ["CALL", null, ["callee:00c58f30:8"]]
+ 008943a8 ["INT_ADD", "register:40f0:8", ["const:8943a8:8", "const:4:8"]]
+ 008943a8 ["CALL", null, ["callee:00c58f30:8"]]
- 00893404 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008943b0 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 00893408 ["COPY", "tmp:0:8", ["const:278:8"]]
- 00893408 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893408 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893408 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-763df0d02f3c2ee112786cea9d3ef936"></a>

### [`00893420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893420.md) → [`008943cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008943cc.md) FUN_008943cc

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
      "unmatched:00893428",
      "DATA",
      [
        "storage",
        "00c82278",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008943d4",
      "DATA",
      [
        "storage",
        "00c83248",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893420 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00893424 ["COPY", "tmp:0:8", ["const:278:8"]]
- 00893424 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893424 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893424 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00893428 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00893428 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-37bd76333464c4fb474bcdb09447e9b2"></a>

### [`008934e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008934e4.md) → [`00894490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894490.md) FUN_00894490

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
      "definition_site": "008944a4",
      "incomplete_value": false,
      "site": "008944a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:2c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008934f8",
      "incomplete_value": false,
      "site": "008934fc",
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
            "const:2f8:8"
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
      "008944a8",
      "DATA",
      [
        "storage",
        "00c822f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008944a8",
      "DATA",
      [
        "storage",
        "00c832c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008934f0 ["INT_ADD", "register:40f0:8", ["const:8934f0:8", "const:4:8"]]
- 008934f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0089449c ["INT_ADD", "register:40f0:8", ["const:89449c:8", "const:4:8"]]
+ 0089449c ["CALL", null, ["callee:00c58f30:8"]]
- 008934f4 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008944a0 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008934f8 ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 008934f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008934f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008934f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008944a4 ["COPY", "tmp:0:8", ["const:2c8:8"]]
+ 008944a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008944a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008944a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca11660843c6080ea0f1c5a7c3f0365f"></a>

### [`00893508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893508.md) → [`008944b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008944b4.md) FUN_008944b4

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
      "unmatched:00893510",
      "DATA",
      [
        "storage",
        "00c822f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008944bc",
      "DATA",
      [
        "storage",
        "00c832c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893508 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0089350c ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 0089350c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0089350c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0089350c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00893510 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00893510 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-9f748c9b4f5b35a69d81c31d7e05094a"></a>

### [`00893550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893550.md) → [`008944fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008944fc.md) FUN_008944fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 35.71% / 新版 35.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00893560",
      "incomplete_value": false,
      "site": "00893564",
      "value": [
        "leaf",
        "const:18:8"
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
      "unmatched:00893550",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00893554",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00893574",
      "DATA",
      [
        "storage",
        "00c82378",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008944fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00894500",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00894520",
      "DATA",
      [
        "storage",
        "00c83348",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893564 ["INT_ADD", "register:40f0:8", ["const:893564:8", "const:4:8"]]
- 00893564 ["CALL", null, ["callee:00c58f30:8"]]
+ 00894510 ["INT_ADD", "register:40f0:8", ["const:894510:8", "const:4:8"]]
+ 00894510 ["CALL", null, ["callee:00c58f30:8"]]
- 00893550 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00893550 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00893550 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00893550 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00893554 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00893554 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-570c383aa4cf1c980592d37215d26aa9"></a>

### [`00893588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893588.md) → [`00894534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894534.md) FUN_00894534

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
      "unmatched:00893590",
      "DATA",
      [
        "storage",
        "00c82378",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0089453c",
      "DATA",
      [
        "storage",
        "00c83348",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893588 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 0089358c ["COPY", "tmp:0:8", ["const:378:8"]]
- 0089358c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0089358c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0089358c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00893590 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00893590 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-31dbf29603d9db5087da450a5513be1e"></a>

### [`008935a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008935a8.md) → [`00894554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894554.md) FUN_00894554

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce60.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d180.md) [`0047d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d268.md) [`00893d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d0c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00894584",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008935d8",
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
      "site": "00894590",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008935e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00894584",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00894590",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00894584",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00894590",
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
- 008935d8 ["INT_ADD", "register:40f0:8", ["const:8935d8:8", "const:4:8"]]
- 008935d8 ["CALL", null, ["ram:47ad34:8"]]
+ 00894584 ["INT_ADD", "register:40f0:8", ["const:894584:8", "const:4:8"]]
+ 00894584 ["CALL", null, ["ram:47b054:8"]]
- 008935e4 ["INT_ADD", "register:40f0:8", ["const:8935e4:8", "const:4:8"]]
- 008935e4 ["CALL", null, ["ram:47ad34:8"]]
+ 00894590 ["INT_ADD", "register:40f0:8", ["const:894590:8", "const:4:8"]]
+ 00894590 ["CALL", null, ["ram:47b054:8"]]
- 008935dc ["INT_ADD", "register:40f0:8", ["const:8935dc:8", "const:4:8"]]
- 008935dc ["CALL", null, ["callee:0047d180:8"]]
+ 00894588 ["INT_ADD", "register:40f0:8", ["const:894588:8", "const:4:8"]]
+ 00894588 ["CALL", null, ["callee:0047d180:8"]]
~~~


<a id="compare-4018ba0c42d5647d283bbd5a9450bc2d"></a>

### [`00893624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893624.md) → [`008945d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008945d0.md) _INIT_167

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.53% / 新版 78.53%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008937c4",
      "incomplete_value": true,
      "site": "008937d4",
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
      "definition_site": "008937c8",
      "incomplete_value": true,
      "site": "008937d4",
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008937cc",
      "incomplete_value": true,
      "site": "008937d4",
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
    "ordinal": 4,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00893654",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00893660",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00893668",
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
      "00894600",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0089460c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00894614",
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
- 008937d4 ["INT_ADD", "register:40f0:8", ["const:8937d4:8", "const:4:8"]]
- 008937d4 ["CALL", null, ["callee:0043bb58:8"]]
+ 00894780 ["INT_ADD", "register:40f0:8", ["const:894780:8", "const:4:8"]]
+ 00894780 ["CALL", null, ["callee:0043bb58:8"]]
- 008937fc ["INT_ADD", "register:40f0:8", ["const:8937fc:8", "const:4:8"]]
- 008937fc ["CALL", null, ["callee:0043bb58:8"]]
+ 008947a8 ["INT_ADD", "register:40f0:8", ["const:8947a8:8", "const:4:8"]]
+ 008947a8 ["CALL", null, ["callee:0043bb58:8"]]
- 0089383c ["INT_ADD", "register:40f0:8", ["const:89383c:8", "const:4:8"]]
- 0089383c ["CALL", null, ["callee:00c58f50:8"]]
+ 008947e8 ["INT_ADD", "register:40f0:8", ["const:8947e8:8", "const:4:8"]]
+ 008947e8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e4063cbd4bc120685bc64d5be4f16740"></a>

### [`008939b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008939b4.md) → [`00894960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894960.md) FUN_00894960

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce60.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md) [`0083f2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f2dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d180.md) [`0047d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d268.md) [`00840288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840288.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008949b4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893a08",
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
      "site": "008949c0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893a14",
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
      "008949b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008949c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008949b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008949c0",
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
- 00893a08 ["INT_ADD", "register:40f0:8", ["const:893a08:8", "const:4:8"]]
- 00893a08 ["CALL", null, ["ram:47ad34:8"]]
+ 008949b4 ["INT_ADD", "register:40f0:8", ["const:8949b4:8", "const:4:8"]]
+ 008949b4 ["CALL", null, ["ram:47b054:8"]]
- 00893a14 ["INT_ADD", "register:40f0:8", ["const:893a14:8", "const:4:8"]]
- 00893a14 ["CALL", null, ["ram:47ad34:8"]]
+ 008949c0 ["INT_ADD", "register:40f0:8", ["const:8949c0:8", "const:4:8"]]
+ 008949c0 ["CALL", null, ["ram:47b054:8"]]
- 008939bc ["INT_ADD", "register:40f0:8", ["const:8939bc:8", "const:4:8"]]
- 008939bc ["CALL", null, ["callee:008524fc:8"]]
+ 00894968 ["INT_ADD", "register:40f0:8", ["const:894968:8", "const:4:8"]]
+ 00894968 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-cd06a6634b2ab934dfbbb30c18d93696"></a>

### [`00893a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893a28.md) → [`008949d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008949d4.md) FUN_008949d4

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048f3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048f/0048f3d8.md) [`00492c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492c40.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048f6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f6f8.md) [`00492f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492f60.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.51% / 新版 75.51%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00894a20",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893a74",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "site": "00894a98",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893aec",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00893b04",
      "incomplete_value": false,
      "site": "00893b08",
      "value": [
        "leaf",
        "const:20:8"
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
      "unmatched:00893a68",
      "DATA",
      [
        "storage",
        "002f3e32",
        "switchD_00893a70::switchdataD_002f3e32",
        "byte"
      ]
    ],
    [
      "00894a1c",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "unmatched:00893a98"
      ]
    ],
    [
      "00894a1c",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "unmatched:00893ac4"
      ]
    ]
  ],
  "added": [
    [
      "00894a14",
      "DATA",
      [
        "storage",
        "002f3e72",
        "switchD_00894a1c::switchdataD_002f3e72",
        "byte"
      ]
    ],
    [
      "00894a1c",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "00894a44"
      ]
    ],
    [
      "00894a1c",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "00894a70"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893a74 ["INT_ADD", "register:40f0:8", ["const:893a74:8", "const:4:8"]]
- 00893a74 ["CALL", null, ["ram:48cd38:8"]]
+ 00894a20 ["INT_ADD", "register:40f0:8", ["const:894a20:8", "const:4:8"]]
+ 00894a20 ["CALL", null, ["ram:48d058:8"]]
- 00893aec ["INT_ADD", "register:40f0:8", ["const:893aec:8", "const:4:8"]]
- 00893aec ["CALL", null, ["ram:48cd38:8"]]
+ 00894a98 ["INT_ADD", "register:40f0:8", ["const:894a98:8", "const:4:8"]]
+ 00894a98 ["CALL", null, ["ram:48d058:8"]]
- 00893b08 ["INT_ADD", "register:40f0:8", ["const:893b08:8", "const:4:8"]]
- 00893b08 ["CALL", null, ["callee:00c58f30:8"]]
+ 00894ab4 ["INT_ADD", "register:40f0:8", ["const:894ab4:8", "const:4:8"]]
+ 00894ab4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-817fa5d154d50c37577ba93e82051dac"></a>

### [`00893bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893bdc.md) → [`00894b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894b88.md) FUN_00894b88

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) · 呼出先 14件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 1件 [`0089e4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089e/0089e4cc.md) · 呼出先 14件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f78c.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047cdec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047cdec.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.39% / 新版 82.39%

優先判定に残った影響 `call_target` 5件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00894bc0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893c14",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "site": "00894bcc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893c20",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00894bdc",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893c30",
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
      "00894bc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00894bcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00894bdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00894bc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "00894bcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00894bdc",
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
- 00893c14 ["INT_ADD", "register:40f0:8", ["const:893c14:8", "const:4:8"]]
- 00893c14 ["CALL", null, ["ram:48cd38:8"]]
+ 00894bc0 ["INT_ADD", "register:40f0:8", ["const:894bc0:8", "const:4:8"]]
+ 00894bc0 ["CALL", null, ["ram:48d058:8"]]
- 00893c20 ["INT_ADD", "register:40f0:8", ["const:893c20:8", "const:4:8"]]
- 00893c20 ["CALL", null, ["ram:47ad34:8"]]
+ 00894bcc ["INT_ADD", "register:40f0:8", ["const:894bcc:8", "const:4:8"]]
+ 00894bcc ["CALL", null, ["ram:47b054:8"]]
- 00893c30 ["INT_ADD", "register:40f0:8", ["const:893c30:8", "const:4:8"]]
- 00893c30 ["CALL", null, ["ram:48cd38:8"]]
+ 00894bdc ["INT_ADD", "register:40f0:8", ["const:894bdc:8", "const:4:8"]]
+ 00894bdc ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-8c889706b2db6e45945a490fa64ad84e"></a>

### [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) → [`00894dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894dc0.md) FUN_00894dc0

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 53件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f414.md) [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md)
- 新版 呼出元 0件  · 呼出先 53件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f734.md) [`0043f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f78c.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 54.12% / 新版 54.12%

優先判定に残った影響 `call_argument_candidate` 31件, `call_target` 5件, `store_value` 9件, `unresolved_branch_alignment` 67件, `unresolved_call_alignment` 174件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00894ee0",
      "incomplete_value": true,
      "site": "00894ee0",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:cec:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893f34",
      "incomplete_value": true,
      "site": "00893f34",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:c0e:8"
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
      "definition_site": "00894f28",
      "incomplete_value": true,
      "site": "00894f34",
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
                "const:5e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893f7c",
      "incomplete_value": true,
      "site": "00893f88",
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
                "const:590:8"
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
      "definition_site": "00894f24",
      "incomplete_value": true,
      "site": "00894f38",
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
                "const:852:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893f78",
      "incomplete_value": true,
      "site": "00893f8c",
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
                "const:783:8"
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
      "unmatched:00893e18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00893e1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00893e20",
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
      "00894dc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00894dc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00894dcc",
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
- 00893ed8 ["INT_ADD", "register:40f0:8", ["const:893ed8:8", "const:4:8"]]
- 00893ed8 ["CALL", null, ["callee:00493fe0:8"]]
+ 00894e84 ["INT_ADD", "register:40f0:8", ["const:894e84:8", "const:4:8"]]
+ 00894e84 ["CALL", null, ["callee:00493fe0:8"]]
- 00893ee8 ["INT_ADD", "register:40f0:8", ["const:893ee8:8", "const:4:8"]]
- 00893ee8 ["CALL", null, ["callee:00c59100:8"]]
+ 00894e94 ["INT_ADD", "register:40f0:8", ["const:894e94:8", "const:4:8"]]
+ 00894e94 ["CALL", null, ["callee:00c59100:8"]]
- 00893f5c ["INT_ADD", "register:40f0:8", ["const:893f5c:8", "const:4:8"]]
- 00893f5c ["CALL", null, ["ram:48cd38:8"]]
+ 00894f08 ["INT_ADD", "register:40f0:8", ["const:894f08:8", "const:4:8"]]
+ 00894f08 ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-bd144543d953dd5221779f136b6b3f22"></a>

### [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) → [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) FUN_008969d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 99件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md)
- 新版 呼出元 0件  · 呼出先 99件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043efc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043efc0.md) [`0043faec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043faec.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 48.24% / 新版 48.24%

優先判定に残った影響 `call_argument_candidate` 37件, `call_target` 3件, `store_condition` 1件, `unresolved_branch_alignment` 90件, `unresolved_call_alignment` 152件, `unresolved_store_alignment` 68件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00896acc",
      "incomplete_value": false,
      "site": "00896ad4",
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
            "const:6ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00895b20",
      "incomplete_value": false,
      "site": "00895b28",
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
            "const:67a:8"
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
      "site": "00896b74",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00895bc8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00895c58",
      "incomplete_value": true,
      "site": "00895c60",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 19,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00895a78",
      "READ",
      [
        "storage",
        "002a066c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00895a7c",
      "READ",
      [
        "storage",
        "002a0671",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00895a80",
      "WRITE",
      [
        "storage",
        "Stack[-0x110]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00896a24",
      "READ",
      [
        "storage",
        "002a06ac",
        null,
        "string"
      ]
    ],
    [
      "00896a28",
      "READ",
      [
        "storage",
        "002a06b1",
        null,
        "string"
      ]
    ],
    [
      "00896a2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x110]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00895b28 ["INT_ADD", "register:40f0:8", ["const:895b28:8", "const:4:8"]]
- 00895b28 ["CALL", null, ["callee:00c59010:8"]]
+ 00896ad4 ["INT_ADD", "register:40f0:8", ["const:896ad4:8", "const:4:8"]]
+ 00896ad4 ["CALL", null, ["callee:00c59010:8"]]
- 00895bc8 ["INT_ADD", "register:40f0:8", ["const:895bc8:8", "const:4:8"]]
- 00895bc8 ["CALL", null, ["ram:48cd38:8"]]
+ 00896b74 ["INT_ADD", "register:40f0:8", ["const:896b74:8", "const:4:8"]]
+ 00896b74 ["CALL", null, ["ram:48d058:8"]]
- 00895c60 ["INT_ADD", "register:40f0:8", ["const:895c60:8", "const:4:8"]]
- 00895c60 ["CALL", null, ["callee:0048e418:8"]]
+ 00896c0c ["INT_ADD", "register:40f0:8", ["const:896c0c:8", "const:4:8"]]
+ 00896c0c ["CALL", null, ["callee:0048e418:8"]]
~~~


<a id="compare-3bdad1c567b8d7f59f41588629335f99"></a>

### [`00897748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/00897748.md) → [`008986f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/008986f4.md) FUN_008986f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008977a8",
      "incomplete_value": false,
      "site": "008977b0",
      "value": [
        "leaf",
        "const:48:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 008977b0 ["INT_ADD", "register:40f0:8", ["const:8977b0:8", "const:4:8"]]
- 008977b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0089875c ["INT_ADD", "register:40f0:8", ["const:89875c:8", "const:4:8"]]
+ 0089875c ["CALL", null, ["callee:00c58f30:8"]]
- 00897758 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0089776c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0089776c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00898718 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00898718 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-a932b6e2348dc8181541d37f5b776eed"></a>

### [`00897818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/00897818.md) → [`008987c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/008987c4.md) FUN_008987c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 2件 [`008a4160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4160.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) · 呼出先 2件 [`008a510c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a510c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.16% / 新版 92.16%

優先判定に残った影響 `unresolved_call_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00897854",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00897880",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00898800",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "0089882c",
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
- 00897850 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:10:8"]]
- 00897850 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00897854 ["COPY", "register:0:8", ["register:4048:8"]]
- 00897854 ["INT_ADD", "register:40f0:8", ["const:897854:8", "const:4:8"]]
- 00897854 ["CALLIND", null, ["register:0:8"]]
- 0089785c ["BRANCH", null, ["local:b6:8"]]
+ 00898808 ["BRANCH", null, ["local:b7:8"]]
~~~


<a id="compare-8be65fcdc4c9824470b4c0139c72a989"></a>

### [`0089a46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089a/0089a46c.md) → [`0089b418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089b/0089b418.md) FUN_0089b418

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008a8d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8d18.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00898890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/00898890.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008a9cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a9cc4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.44% / 新版 98.44%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 0089a4ac ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 0089a4ac ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0089a4ac ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0089a4ac ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0089b458 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 0089b458 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0089b458 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0089b458 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 0089a4c4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0089a4c4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0089a4c4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0089a4c4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0089b470 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0089b470 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0089b470 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0089b470 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 0089a4d0 ["INT_ADD", "register:40f0:8", ["const:89a4d0:8", "const:4:8"]]
- 0089a4d0 ["CALL", null, ["callee:0043be80:8"]]
+ 0089b47c ["INT_ADD", "register:40f0:8", ["const:89b47c:8", "const:4:8"]]
+ 0089b47c ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-ff122c2fa0fb9b1bc53a6ca2b3fead07"></a>

### [`0089b29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b29c.md) → [`0089c248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089c248.md) FUN_0089c248

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 2件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00898890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/00898890.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 55.56% / 新版 55.56%

<a id="compare-5a18804fbb886388715760e8b67d279d"></a>

### [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) → [`0089cc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089cc90.md) FUN_0089cc90

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 69件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md)
- 新版 呼出元 0件  · 呼出先 69件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.75% / 新版 69.75%

優先判定に残った影響 `call_argument_candidate` 33件, `call_target` 2件, `store_condition` 2件, `store_value` 2件, `unresolved_branch_alignment` 36件, `unresolved_call_alignment` 54件, `unresolved_store_alignment` 52件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0089db68",
      "incomplete_value": false,
      "site": "0089db70",
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
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089cbbc",
      "incomplete_value": false,
      "site": "0089cbc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:880:8"
          ]
        ]
      ]
    },
    "ordinal": 114,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0089dde4",
      "incomplete_value": false,
      "site": "0089dde4",
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
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089ce38",
      "incomplete_value": false,
      "site": "0089ce38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:800:8"
          ]
        ]
      ]
    },
    "ordinal": 119,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0089ce88",
      "incomplete_value": true,
      "site": "0089ce9c",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:0089bce8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0089bcec",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0089bcf0",
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
      "0089cc94",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0089cc98",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0089cc9c",
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
- 0089bef0 ["INT_ADD", "register:40f0:8", ["const:89bef0:8", "const:4:8"]]
- 0089bef0 ["CALL", null, ["callee:00c590a0:8"]]
+ 0089ce9c ["INT_ADD", "register:40f0:8", ["const:89ce9c:8", "const:4:8"]]
+ 0089ce9c ["CALL", null, ["callee:00c590a0:8"]]
- 0089bf34 ["INT_ADD", "register:40f0:8", ["const:89bf34:8", "const:4:8"]]
- 0089bf34 ["CALL", null, ["callee:00c594f0:8"]]
+ 0089cee0 ["INT_ADD", "register:40f0:8", ["const:89cee0:8", "const:4:8"]]
+ 0089cee0 ["CALL", null, ["callee:00c594f0:8"]]
- 0089bff0 ["INT_ADD", "register:40f0:8", ["const:89bff0:8", "const:4:8"]]
- 0089bff0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0089cf9c ["INT_ADD", "register:40f0:8", ["const:89cf9c:8", "const:4:8"]]
+ 0089cf9c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e9866fba836cc72e689089a072650acf"></a>

### [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) → [`0089e4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089e/0089e4cc.md) FUN_0089e4cc

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 52件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00472bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472bec.md) [`00472bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472bfc.md) [`00472d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472d9c.md)
- 新版 呼出元 0件  · 呼出先 52件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00472f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472f0c.md) [`00472f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472f1c.md) [`004730bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004730bc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.35% / 新版 70.35%

優先判定に残った影響 `call_argument_candidate` 12件, `call_target` 5件, `store_condition` 3件, `store_value` 3件, `unresolved_branch_alignment` 25件, `unresolved_call_alignment` 46件, `unresolved_store_alignment` 40件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0089e5d0",
      "incomplete_value": true,
      "site": "0089e5d0",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:d4e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089d624",
      "incomplete_value": true,
      "site": "0089d624",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:c81:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0089e704",
      "incomplete_value": true,
      "site": "0089e71c",
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
                "const:dca:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089d758",
      "incomplete_value": true,
      "site": "0089d770",
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
                "const:cec:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0089f060",
      "incomplete_value": false,
      "site": "0089f068",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089e0b4",
      "incomplete_value": false,
      "site": "0089e0bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c00:8"
          ]
        ]
      ]
    },
    "ordinal": 89,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0089d578",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0089e578"
      ]
    ],
    [
      "unmatched:0089d5dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ],
    [
      "unmatched:0089d5e4",
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
      "0089e524",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0089e578"
      ]
    ],
    [
      "0089e588",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ],
    [
      "0089e590",
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
- 0089d6ac ["INT_ADD", "register:40f0:8", ["const:89d6ac:8", "const:4:8"]]
- 0089d6ac ["CALL", null, ["callee:0048e418:8"]]
+ 0089e658 ["INT_ADD", "register:40f0:8", ["const:89e658:8", "const:4:8"]]
+ 0089e658 ["CALL", null, ["callee:0048e418:8"]]
- 0089d748 ["INT_ADD", "register:40f0:8", ["const:89d748:8", "const:4:8"]]
- 0089d748 ["CALL", null, ["ram:48cd38:8"]]
+ 0089e6f4 ["INT_ADD", "register:40f0:8", ["const:89e6f4:8", "const:4:8"]]
+ 0089e6f4 ["CALL", null, ["ram:48d058:8"]]
- 0089d7e8 ["INT_ADD", "register:40f0:8", ["const:89d7e8:8", "const:4:8"]]
- 0089d7e8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0089e794 ["INT_ADD", "register:40f0:8", ["const:89e794:8", "const:4:8"]]
+ 0089e794 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-07465e10cf785c1356ecf80820332fc9"></a>

### [`008a3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3bbc.md) → [`008a4b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4b68.md) FUN_008a4b68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008adef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adef0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008aee9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aee9c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 98.33% / 新版 98.33%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a3c04",
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
      "008a4bb0",
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
- 008a3bf4 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 008a3bf4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008a3bf4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008a3bf4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 008a4ba0 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 008a4ba0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008a4ba0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008a4ba0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 008a3c04 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008a3c04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 008a3c0c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008a3c0c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008a3c0c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008a3c0c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 008a4bb8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008a4bb8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008a4bb8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008a4bb8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-6610f91a4f526df94b6ef9f070468d72"></a>

### [`008a3dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3dc0.md) → [`008a4d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4d6c.md) FUN_008a4d6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008a3e54"
      ],
      [
        "FALL_THROUGH",
        "008a4e00"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008a4e00",
      "incomplete_value": true,
      "site": "008a4e04",
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
    "old": {
      "definition_site": "008a3e54",
      "incomplete_value": true,
      "site": "008a3e58",
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
      "unmatched:008a3df8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a4dcc"
      ]
    ],
    [
      "unmatched:008a3e54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a4e0c"
      ]
    ]
  ],
  "added": [
    [
      "008a4da4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a4dcc"
      ]
    ],
    [
      "008a4e00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a4e0c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a3de4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008a3de4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 008a4d90 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008a4d90 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008a3dec ["BRANCH", null, ["local:b9:8"]]
+ 008a4d98 ["BRANCH", null, ["local:b7:8"]]
- 008a3df8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008a3df8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-82eb0f961e0c7d63c549ba326c7562cb"></a>

### [`008a3eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3eb8.md) → [`008a4e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4e64.md) FUN_008a4e64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0bf0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008b1b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b1/008b1b9c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a4f2c",
      "incomplete_value": true,
      "site": "008a4f3c",
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
    "ordinal": 2,
    "slot": 7
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a4f48",
      "incomplete_value": true,
      "site": "008a4f4c",
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
      "unmatched:008a3ebc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a3ec0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a3ec4",
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
      "008a4e68",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008a4e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008a4e70",
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
- 008a3f90 ["INT_ADD", "register:40f0:8", ["const:8a3f90:8", "const:4:8"]]
- 008a3f90 ["CALL", null, ["callee:008b1b9c:8"]]
+ 008a4f3c ["INT_ADD", "register:40f0:8", ["const:8a4f3c:8", "const:4:8"]]
+ 008a4f3c ["CALL", null, ["callee:008b1b9c:8"]]
- 008a3fa0 ["INT_ADD", "register:40f0:8", ["const:8a3fa0:8", "const:4:8"]]
- 008a3fa0 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a4f4c ["INT_ADD", "register:40f0:8", ["const:8a4f4c:8", "const:4:8"]]
+ 008a4f4c ["CALL", null, ["callee:00c58f50:8"]]
- 008a3eb8 ["INT_SUB", "register:8:8", ["register:8:8", "const:c0:8"]]
~~~


<a id="compare-cc980dcbefe69dcb23b1b341056a6610"></a>

### [`008a402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a402c.md) → [`008a4fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4fd8.md) FUN_008a4fd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008b52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b52e8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008b6294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b6/008b6294.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a5068",
      "incomplete_value": true,
      "site": "008a5078",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a5060",
      "incomplete_value": true,
      "site": "008a5078",
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
    "ordinal": 2,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a5094",
      "incomplete_value": true,
      "site": "008a5098",
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
      "unmatched:008a405c",
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
      "008a5008",
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
- 008a40cc ["INT_ADD", "register:40f0:8", ["const:8a40cc:8", "const:4:8"]]
- 008a40cc ["CALL", null, ["callee:008b6294:8"]]
+ 008a5078 ["INT_ADD", "register:40f0:8", ["const:8a5078:8", "const:4:8"]]
+ 008a5078 ["CALL", null, ["callee:008b6294:8"]]
- 008a40ec ["INT_ADD", "register:40f0:8", ["const:8a40ec:8", "const:4:8"]]
- 008a40ec ["CALL", null, ["callee:00c58f50:8"]]
+ 008a5098 ["INT_ADD", "register:40f0:8", ["const:8a5098:8", "const:4:8"]]
+ 008a5098 ["CALL", null, ["callee:00c58f50:8"]]
- 008a4050 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 008a4050 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0fe1faa9371da23177d91ea6c1710d08"></a>

### [`008a4160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4160.md) → [`008a510c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a510c.md) FUN_008a510c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00897818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/00897818.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008987c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/008987c4.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.91% / 新版 71.91%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a4180",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a4184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a5248"
      ]
    ],
    [
      "unmatched:008a419c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a5160"
      ]
    ]
  ],
  "added": [
    [
      "008a512c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008a5130",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a5248"
      ]
    ],
    [
      "008a5148",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a5160"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4180 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008a4180 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008a4180 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 008a4184 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
- 008a4198 ["INT_LESSEQUAL", "register:105:1", ["register:4000:8", "register:4040:8"]]
- 008a4198 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4000:8"]]
- 008a4198 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4000:8"]]
- 008a4198 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-335ad866daf825cf5f1f853cf30e6d70"></a>

### [`008a42cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a42cc.md) → [`008a5278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5278.md) FUN_008a5278

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
      "definition_site": "008a528c",
      "incomplete_value": false,
      "site": "008a5290",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a42e0",
      "incomplete_value": false,
      "site": "008a42e4",
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
            "const:470:8"
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
      "008a5290",
      "DATA",
      [
        "storage",
        "00c82470",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5290",
      "DATA",
      [
        "storage",
        "00c83440",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a42d8 ["INT_ADD", "register:40f0:8", ["const:8a42d8:8", "const:4:8"]]
- 008a42d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a5284 ["INT_ADD", "register:40f0:8", ["const:8a5284:8", "const:4:8"]]
+ 008a5284 ["CALL", null, ["callee:00c58f30:8"]]
- 008a42dc ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5288 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a42e0 ["COPY", "tmp:0:8", ["const:470:8"]]
- 008a42e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a42e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a42e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a528c ["COPY", "tmp:0:8", ["const:440:8"]]
+ 008a528c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a528c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a528c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0eefcfc929595e14c13cf86efbc7f629"></a>

### [`008a42f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a42f0.md) → [`008a529c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a529c.md) FUN_008a529c

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
      "definition_site": "008a52a0",
      "incomplete_value": false,
      "site": "008a52a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a42f4",
      "incomplete_value": false,
      "site": "008a42f8",
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
            "const:470:8"
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
      "008a52a4",
      "DATA",
      [
        "storage",
        "00c82470",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a52a4",
      "DATA",
      [
        "storage",
        "00c83440",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a42f0 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a529c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a42f4 ["COPY", "tmp:0:8", ["const:470:8"]]
- 008a42f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a42f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a42f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a52a0 ["COPY", "tmp:0:8", ["const:440:8"]]
+ 008a52a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a52a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a52a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-20d306a593d60591bdf2082f2e157dbc"></a>

### [`008a4308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4308.md) → [`008a52b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a52b4.md) FUN_008a52b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`008a443c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a443c.md) [`008a4440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4440.md) [`00b3a48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a48c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008a53e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a53e8.md) [`008a53ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a53ec.md) [`00b3b480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b480.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008a52cc",
      "incomplete_value": false,
      "site": "008a52dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4320",
      "incomplete_value": false,
      "site": "008a4330",
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
            "const:4e0:8"
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
      "008a52dc",
      "DATA",
      [
        "storage",
        "00c824e0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a5310",
      "READ",
      [
        "storage",
        "00c82500",
        null,
        "pointer"
      ]
    ],
    [
      "008a5310",
      "READ",
      [
        "storage",
        "00c82508",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a52dc",
      "DATA",
      [
        "storage",
        "00c834b0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a5310",
      "READ",
      [
        "storage",
        "00c834d0",
        null,
        "pointer"
      ]
    ],
    [
      "008a5310",
      "READ",
      [
        "storage",
        "00c834d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a431c ["COPY", "register:4048:8", ["const:c82000:8"]]
+ 008a52c8 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 008a4320 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 008a4320 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008a4320 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008a4320 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008a52cc ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 008a52cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008a52cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008a52cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008a433c ["INT_ADD", "register:40f0:8", ["const:8a433c:8", "const:4:8"]]
- 008a433c ["CALL", null, ["callee:00b3b480:8"]]
+ 008a52e8 ["INT_ADD", "register:40f0:8", ["const:8a52e8:8", "const:4:8"]]
+ 008a52e8 ["CALL", null, ["callee:00b3b480:8"]]
~~~


<a id="compare-cfc6b31b7113dfd68c6edb4b196ef489"></a>

### [`008a4408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4408.md) → [`008a53b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a53b4.md) FUN_008a53b4

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
      "unmatched:008a4420",
      "DATA",
      [
        "storage",
        "00c824e0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a4424",
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
      "008a53cc",
      "DATA",
      [
        "storage",
        "00c834b0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a53d0",
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
- 008a4414 ["INT_ADD", "register:40f0:8", ["const:8a4414:8", "const:4:8"]]
- 008a4414 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a53c0 ["INT_ADD", "register:40f0:8", ["const:8a53c0:8", "const:4:8"]]
+ 008a53c0 ["CALL", null, ["callee:00c58f30:8"]]
- 008a4418 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a53c4 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a441c ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 008a441c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a441c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a441c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b71a1961791d671982f7be96bdadd29e"></a>

### [`008a442c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a442c.md) → [`008a53d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a53d8.md) FUN_008a53d8

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
      "unmatched:008a4434",
      "DATA",
      [
        "storage",
        "00c824e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a53e0",
      "DATA",
      [
        "storage",
        "00c834b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a442c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008a4430 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 008a4430 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4430 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4430 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a4434 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a4434 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-35a49159078f051fa0679f32a1fcbaf3"></a>

### [`008a4444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4444.md) → [`008a53f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a53f0.md) FUN_008a53f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`008a4584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4584.md) [`008a4588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4588.md) [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008a5530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5530.md) [`008a5534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5534.md) [`00b3b648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b648.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a4478",
      "DATA",
      [
        "storage",
        "00c82550",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a4478",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a447c",
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
      "008a5424",
      "DATA",
      [
        "storage",
        "00c83520",
        null,
        "undefined *"
      ]
    ],
    [
      "008a5424",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008a5428",
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
- 008a4468 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008a4468 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 008a5414 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008a5414 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 008a446c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5418 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4470 ["COPY", "tmp:0:8", ["const:550:8"]]
- 008a4470 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4470 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4470 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


